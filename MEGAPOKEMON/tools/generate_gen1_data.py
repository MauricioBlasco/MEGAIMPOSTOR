import json
from pathlib import Path
from typing import Any, Dict, List, Optional

ROOT = Path(__file__).resolve().parent.parent
API_V2 = ROOT / 'api-data-master' / 'data' / 'api' / 'v2'
OUT_FILE = ROOT / 'gen1-pokemon-api-data.js'

PREFERRED_VERSION_GROUPS = [
    'red-blue',
    'yellow',
    'gold-silver',
    'crystal',
    'firered-leafgreen',
    'emerald'
]


def read_json(path: Path) -> Dict[str, Any]:
    with path.open('r', encoding='utf-8') as file:
        return json.load(file)


def api_id_from_url(url: str) -> int:
    return int(url.strip('/').split('/')[-1])


def clean_flavor_text(text: str) -> str:
    return text.replace('\n', ' ').replace('\f', ' ').replace('\r', ' ').replace('  ', ' ').strip()


def pick_species_name(species_data: Dict[str, Any], fallback: str) -> str:
    english_name = next(
        (entry['name'] for entry in species_data.get('names', []) if entry.get('language', {}).get('name') == 'en'),
        None
    )
    if english_name:
        return english_name
    return fallback.replace('-', ' ').title()


def pick_pokedex_description(species_data: Dict[str, Any]) -> Optional[str]:
    entries = species_data.get('flavor_text_entries', [])

    preferred_versions = ['red', 'blue', 'yellow', 'firered', 'leafgreen']
    for language in ['es', 'en']:
        for version in preferred_versions:
            match = next(
                (
                    entry for entry in entries
                    if entry.get('language', {}).get('name') == language
                    and entry.get('version', {}).get('name') == version
                ),
                None
            )
            if match and match.get('flavor_text'):
                return clean_flavor_text(match['flavor_text'])

    fallback = next(
        (
            entry for entry in entries
            if entry.get('language', {}).get('name') in ['es', 'en']
            and entry.get('flavor_text')
        ),
        None
    )

    return clean_flavor_text(fallback['flavor_text']) if fallback else None


def parse_evolution_chain_node(node: Dict[str, Any], evo_map: Dict[str, List[Dict[str, Any]]]) -> None:
    species_name = node.get('species', {}).get('name')
    if not species_name:
        return

    if species_name not in evo_map:
        evo_map[species_name] = []

    for child in node.get('evolves_to', []):
        child_name = child.get('species', {}).get('name')
        detail = (child.get('evolution_details') or [{}])[0]
        trigger = detail.get('trigger', {}).get('name')

        evo_map[species_name].append({
            'evolvesTo': child_name,
            'method': trigger,
            'level': detail.get('min_level'),
            'item': detail.get('item', {}).get('name') if detail.get('item') else None,
            'minHappiness': detail.get('min_happiness'),
            'timeOfDay': detail.get('time_of_day') or None
        })

        parse_evolution_chain_node(child, evo_map)


def get_growth_exp_to_next(species_data: Dict[str, Any], growth_cache: Dict[int, Dict[int, int]]) -> int:
    growth_url = species_data.get('growth_rate', {}).get('url')
    if not growth_url:
        return 100

    growth_id = api_id_from_url(growth_url)
    if growth_id not in growth_cache:
        growth_data = read_json(API_V2 / 'growth-rate' / str(growth_id) / 'index.json')
        level_map = {entry['level']: entry['experience'] for entry in growth_data.get('levels', [])}
        growth_cache[growth_id] = level_map

    levels = growth_cache[growth_id]
    if 5 in levels and 6 in levels:
        return max(1, levels[6] - levels[5])
    if 1 in levels and 2 in levels:
        return max(1, levels[2] - levels[1])
    return 100


def build_level_up_moves(pokemon_data: Dict[str, Any]) -> List[Dict[str, Any]]:
    move_map: Dict[str, int] = {}

    for move_entry in pokemon_data.get('moves', []):
        move_name = move_entry.get('move', {}).get('name')
        if not move_name:
            continue

        details = move_entry.get('version_group_details', [])

        selected_detail = None
        for group in PREFERRED_VERSION_GROUPS:
            selected_detail = next(
                (
                    detail for detail in details
                    if detail.get('move_learn_method', {}).get('name') == 'level-up'
                    and detail.get('version_group', {}).get('name') == group
                ),
                None
            )
            if selected_detail:
                break

        if not selected_detail:
            continue

        level = int(selected_detail.get('level_learned_at') or 1)
        if move_name not in move_map or level < move_map[move_name]:
            move_map[move_name] = level

    return [
        {'level': level, 'move': name}
        for name, level in sorted(move_map.items(), key=lambda item: (item[1], item[0]))
    ]


def build_all_moves_list(pokemon_data: Dict[str, Any]) -> List[str]:
    names = [entry.get('move', {}).get('name') for entry in pokemon_data.get('moves', [])]
    names = [name for name in names if name]
    return sorted(set(names))


def choose_sprites(pokemon_data: Dict[str, Any]) -> Dict[str, Optional[str]]:
    sprites = pokemon_data.get('sprites', {})
    frlg = (
        sprites.get('versions', {})
        .get('generation-iii', {})
        .get('firered-leafgreen', {})
    )

    sprite = frlg.get('front_default') or sprites.get('front_default')
    sprite_back = frlg.get('back_default') or sprites.get('back_default')
    sprite_modern = sprites.get('front_default') or sprite

    return {
        'sprite': sprite,
        'spriteBack': sprite_back,
        'spriteModern': sprite_modern
    }


def normalize_evolution_method(method: Optional[str]) -> str:
    if method == 'level-up':
        return 'level'
    if method == 'use-item':
        return 'stone'
    if method:
        return method
    return 'none'


def main() -> None:
    evolution_map: Dict[str, List[Dict[str, Any]]] = {}
    growth_cache: Dict[int, Dict[int, int]] = {}
    loaded_chain_ids = set()

    gen1_pokemon_data: Dict[str, Any] = {}
    gen1_api_movesets: Dict[str, Any] = {}
    gen1_pokedex_index: List[Dict[str, Any]] = []

    for pokemon_id in range(1, 152):
        pokemon_data = read_json(API_V2 / 'pokemon' / str(pokemon_id) / 'index.json')
        species_data = read_json(API_V2 / 'pokemon-species' / str(pokemon_id) / 'index.json')

        chain_id = api_id_from_url(species_data['evolution_chain']['url'])
        if chain_id not in loaded_chain_ids:
            chain_data = read_json(API_V2 / 'evolution-chain' / str(chain_id) / 'index.json')
            parse_evolution_chain_node(chain_data['chain'], evolution_map)
            loaded_chain_ids.add(chain_id)

        key = pokemon_data['name']
        name = pick_species_name(species_data, key)
        description = pick_pokedex_description(species_data)

        types = [
            entry.get('type', {}).get('name')
            for entry in sorted(pokemon_data.get('types', []), key=lambda item: item.get('slot', 99))
            if entry.get('type', {}).get('name')
        ]
        primary_type = types[0] if types else 'normal'

        stats_map = {
            stat_entry.get('stat', {}).get('name'): stat_entry.get('base_stat')
            for stat_entry in pokemon_data.get('stats', [])
        }

        evolution_options = evolution_map.get(key, [])

        level_evolution = next(
            (option for option in evolution_options if option.get('method') == 'level-up' and option.get('level') is not None),
            None
        )

        fallback_evolution = evolution_options[0] if evolution_options else None

        evolution = None
        if level_evolution:
            evolution = {
                'evolvesTo': level_evolution['evolvesTo'],
                'level': level_evolution['level'],
                'method': 'level'
            }
        elif fallback_evolution:
            evolution = {
                'evolvesTo': fallback_evolution.get('evolvesTo'),
                'level': fallback_evolution.get('level') if fallback_evolution.get('level') is not None else 999,
                'method': normalize_evolution_method(fallback_evolution.get('method'))
            }

        sprites = choose_sprites(pokemon_data)
        exp_to_next = get_growth_exp_to_next(species_data, growth_cache)

        gen1_pokemon_data[key] = {
            'id': pokemon_data['id'],
            'name': name,
            'type': primary_type,
            'types': types,
            'stats': {
                'hp': stats_map.get('hp', 50),
                'attack': stats_map.get('attack', 50),
                'defense': stats_map.get('defense', 50),
                'specialAttack': stats_map.get('special-attack', 50),
                'specialDefense': stats_map.get('special-defense', 50),
                'speed': stats_map.get('speed', 50)
            },
            'sprite': sprites['sprite'],
            'spriteBack': sprites['spriteBack'],
            'spriteModern': sprites['spriteModern'],
            'evolution': evolution,
            'evolutionOptions': [
                {
                    'evolvesTo': option.get('evolvesTo'),
                    'method': normalize_evolution_method(option.get('method')),
                    'level': option.get('level'),
                    'item': option.get('item'),
                    'minHappiness': option.get('minHappiness'),
                    'timeOfDay': option.get('timeOfDay')
                }
                for option in evolution_options
            ],
            'baseExp': pokemon_data.get('base_experience') or 50,
            'expToNextLevel': exp_to_next,
            'apiMoves': build_all_moves_list(pokemon_data),
            'pokedexDescription': description
        }

        gen1_api_movesets[key] = build_level_up_moves(pokemon_data)

        gen1_pokedex_index.append({
            'id': pokemon_data['id'],
            'key': key,
            'name': name
        })

    gen1_pokedex_index = sorted(gen1_pokedex_index, key=lambda entry: entry['id'])

    output = [
        '// Auto-generado desde api-data-master. No editar manualmente.',
        f'const GEN1_POKEMON_API_DATA = {json.dumps(gen1_pokemon_data, ensure_ascii=False, indent=4)};',
        f'const GEN1_API_MOVESETS = {json.dumps(gen1_api_movesets, ensure_ascii=False, indent=4)};',
        f'const GEN1_POKEDEX_INDEX = {json.dumps(gen1_pokedex_index, ensure_ascii=False, indent=4)};'
    ]

    OUT_FILE.write_text('\n\n'.join(output) + '\n', encoding='utf-8')
    print(f'Archivo generado: {OUT_FILE}')


if __name__ == '__main__':
    main()
