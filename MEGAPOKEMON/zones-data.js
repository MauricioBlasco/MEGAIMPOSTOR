// Datos de zonas basados en Pokémon Red/Blue/Yellow - Primera Generación
const ZONES_DATA = {
    'pallet-town': {
        name: 'Pueblo Paleta',
        wildPokemon: [],
        trainers: [],
        shop: [
            { key: 'potion', name: 'Poción', description: 'Restaura 20 HP', price: 300 },
            { key: 'pokeball', name: 'Poké Ball', description: 'Para capturar Pokémon', price: 200 }
        ],
        nextZone: 'route-1'
    },
    
    'route-1': {
        name: 'Ruta 1',
        wildPokemon: [
            { pokemon: 'pidgey', minLevel: 2, maxLevel: 5, chance: 50 },
            { pokemon: 'rattata', minLevel: 2, maxLevel: 4, chance: 50 }
        ],
        trainers: [
            { id: 'route1-trainer1', name: 'Niño Explorador', pokemon: 'rattata', level: 6, reward: 60, dialogue: '¡Hola! ¿Es tu primer viaje? ¡Veamos qué tan fuerte eres!' },
            { id: 'route1-trainer2', name: 'Niña Exploradora', pokemon: 'pidgey', level: 5, reward: 50, dialogue: '¡Mi Pidgey y yo estamos listos para cualquier desafío!' }
        ],
        shop: [],
        nextZone: 'viridian-city'
    },
    
    'viridian-city': {
        name: 'Ciudad Verde',
        wildPokemon: [],
        trainers: [],
        shop: [
            { key: 'potion', name: 'Poción', description: 'Restaura 20 HP', price: 300 },
            { key: 'super-potion', name: 'Super Poción', description: 'Restaura 50 HP', price: 700 },
            { key: 'pokeball', name: 'Poké Ball', description: 'Para capturar Pokémon', price: 200 },
            { key: 'antidote', name: 'Antídoto', description: 'Cura envenenamiento', price: 100 }
        ],
        nextZone: 'route-2'
    },
    
    'route-2': {
        name: 'Ruta 2',
        wildPokemon: [
            { pokemon: 'pidgey', minLevel: 3, maxLevel: 5, chance: 40 },
            { pokemon: 'rattata', minLevel: 3, maxLevel: 5, chance: 35 },
            { pokemon: 'caterpie', minLevel: 3, maxLevel: 5, chance: 15 },
            { pokemon: 'weedle', minLevel: 3, maxLevel: 5, chance: 10 }
        ],
        trainers: [
            { id: 'route2-trainer1', name: 'Chico Insecto', pokemon: 'caterpie', level: 6, reward: 70, dialogue: '¡Los Pokémon tipo bicho son geniales! ¿Quieres verlo en acción?' },
            { id: 'route2-trainer2', name: 'Niño Pantalón Corto', pokemon: 'rattata', level: 7, reward: 80, dialogue: '¡Hey! ¡No pasarás sin luchar primero!' }
        ],
        shop: [],
        nextZone: 'viridian-forest'
    },
    
    'viridian-forest': {
        name: 'Bosque Verde',
        wildPokemon: [
            { pokemon: 'caterpie', minLevel: 3, maxLevel: 6, chance: 35 },
            { pokemon: 'weedle', minLevel: 3, maxLevel: 6, chance: 35 },
            { pokemon: 'pidgey', minLevel: 3, maxLevel: 6, chance: 20 },
            { pokemon: 'pikachu', minLevel: 3, maxLevel: 5, chance: 10 }
        ],
        trainers: [
            { id: 'forest-trainer1', name: 'Chica Insecto', pokemon: 'metapod', level: 9, reward: 100, dialogue: '¡El Bosque Verde es mi hogar! ¡Demuéstrale respeto luchando conmigo!' },
            { id: 'forest-trainer2', name: 'Chico Insecto', pokemon: 'weedle', level: 7, reward: 110, dialogue: 'Estoy buscando Pokémon raros... ¡pero primero una batalla!' }
        ],
        shop: [],
        nextZone: 'pewter-city'
    },
    
    'pewter-city': {
        name: 'Ciudad Plateada',
        wildPokemon: [],
        trainers: [
            { id: 'brock-gym', name: 'Líder Brock', pokemon: 'onix', level: 14, reward: 1400, dialogue: '¡Soy BROCK! ¡Usaré mi Pokémon tipo roca para hacerte picadillo! ¡Muéstrame tu determinación!' }
        ],
        shop: [
            { key: 'potion', name: 'Poción', description: 'Restaura 20 HP', price: 300 },
            { key: 'super-potion', name: 'Super Poción', description: 'Restaura 50 HP', price: 700 },
            { key: 'pokeball', name: 'Poké Ball', description: 'Para capturar Pokémon', price: 200 },
            { key: 'great-ball', name: 'Super Ball', description: 'Mayor probabilidad de captura', price: 600 },
            { key: 'antidote', name: 'Antídoto', description: 'Cura envenenamiento', price: 100 }
        ],
        nextZone: null
    }
};

// Pokémon adicionales necesarios para las zonas
const ADDITIONAL_POKEMON = {
    rattata: {
        id: 19,
        name: 'Rattata',
        type: 'normal',
        stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/19.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/19.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
        evolution: { evolvesTo: 'raticate', level: 20, method: 'level' },
        baseExp: 51,
        expToNextLevel: 100
    },
    
    raticate: {
        id: 20,
        name: 'Raticate',
        type: 'normal',
        stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/20.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/20.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
        evolution: null,
        baseExp: 145,
        expToNextLevel: 150
    },
    
    pidgey: {
        id: 16,
        name: 'Pidgey',
        type: 'flying',
        stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/16.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/16.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
        evolution: { evolvesTo: 'pidgeotto', level: 18, method: 'level' },
        baseExp: 50,
        expToNextLevel: 100
    },
    
    pidgeotto: {
        id: 17,
        name: 'Pidgeotto',
        type: 'flying',
        stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/17.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/17.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
        evolution: { evolvesTo: 'pidgeot', level: 36, method: 'level' },
        baseExp: 122,
        expToNextLevel: 150
    },
    
    caterpie: {
        id: 10,
        name: 'Caterpie',
        type: 'bug',
        stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/10.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/10.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
        evolution: { evolvesTo: 'metapod', level: 7, method: 'level' },
        baseExp: 39,
        expToNextLevel: 100
    },
    
    metapod: {
        id: 11,
        name: 'Metapod',
        type: 'bug',
        stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/11.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/11.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
        evolution: { evolvesTo: 'butterfree', level: 10, method: 'level' },
        baseExp: 72,
        expToNextLevel: 100
    },
    
    weedle: {
        id: 13,
        name: 'Weedle',
        type: 'bug',
        stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/13.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/13.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
        evolution: { evolvesTo: 'kakuna', level: 7, method: 'level' },
        baseExp: 39,
        expToNextLevel: 100
    },
    
    kakuna: {
        id: 14,
        name: 'Kakuna',
        type: 'bug',
        stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/14.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/14.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
        evolution: { evolvesTo: 'beedrill', level: 10, method: 'level' },
        baseExp: 72,
        expToNextLevel: 100
    },
    
    ekans: {
        id: 23,
        name: 'Ekans',
        type: 'poison',
        stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/23.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/23.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
        evolution: { evolvesTo: 'arbok', level: 22, method: 'level' },
        baseExp: 58,
        expToNextLevel: 100
    },
    
    geodude: {
        id: 74,
        name: 'Geodude',
        type: 'rock',
        stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/74.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/74.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
        evolution: { evolvesTo: 'graveler', level: 25, method: 'level' },
        baseExp: 60,
        expToNextLevel: 100
    },
    
    onix: {
        id: 95,
        name: 'Onix',
        type: 'rock',
        stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/95.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/95.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
        evolution: null,
        baseExp: 77,
        expToNextLevel: 150
    }
};

// Combinar bases de datos
Object.assign(POKEMON_DATABASE, ADDITIONAL_POKEMON);
