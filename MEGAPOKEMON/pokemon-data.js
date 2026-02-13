// Base de datos de Pokémon basada en la API de primera generación
const POKEMON_DATABASE = {
    pikachu: {
        id: 25,
        name: 'Pikachu',
        type: 'electric',
        stats: {
            hp: 35,
            attack: 55,
            defense: 40,
            specialAttack: 50,
            specialDefense: 50,
            speed: 90
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/25.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        evolution: {
            evolvesTo: 'raichu',
            level: 999, // Pikachu no evoluciona por nivel, requiere piedra
            method: 'stone'
        },
        baseExp: 112,
        expToNextLevel: 100
    },
    
    raichu: {
        id: 26,
        name: 'Raichu',
        type: 'electric',
        stats: {
            hp: 60,
            attack: 90,
            defense: 55,
            specialAttack: 90,
            specialDefense: 80,
            speed: 110
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/26.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/26.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
        evolution: null,
        baseExp: 218,
        expToNextLevel: 150
    },
    
    charmander: {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        stats: {
            hp: 39,
            attack: 52,
            defense: 43,
            specialAttack: 60,
            specialDefense: 50,
            speed: 65
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/4.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/4.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        evolution: {
            evolvesTo: 'charmeleon',
            level: 16,
            method: 'level'
        },
        baseExp: 62,
        expToNextLevel: 100
    },
    
    charmeleon: {
        id: 5,
        name: 'Charmeleon',
        type: 'fire',
        stats: {
            hp: 58,
            attack: 64,
            defense: 58,
            specialAttack: 80,
            specialDefense: 65,
            speed: 80
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/5.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/5.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        evolution: {
            evolvesTo: 'charizard',
            level: 36,
            method: 'level'
        },
        baseExp: 142,
        expToNextLevel: 150
    },
    
    charizard: {
        id: 6,
        name: 'Charizard',
        type: 'fire',
        stats: {
            hp: 78,
            attack: 84,
            defense: 78,
            specialAttack: 109,
            specialDefense: 85,
            speed: 100
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/6.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/6.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        evolution: null,
        baseExp: 240,
        expToNextLevel: 200
    },
    
    squirtle: {
        id: 7,
        name: 'Squirtle',
        type: 'water',
        stats: {
            hp: 44,
            attack: 48,
            defense: 65,
            specialAttack: 50,
            specialDefense: 64,
            speed: 43
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/7.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/7.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        evolution: {
            evolvesTo: 'wartortle',
            level: 16,
            method: 'level'
        },
        baseExp: 63,
        expToNextLevel: 100
    },
    
    wartortle: {
        id: 8,
        name: 'Wartortle',
        type: 'water',
        stats: {
            hp: 59,
            attack: 63,
            defense: 80,
            specialAttack: 65,
            specialDefense: 80,
            speed: 58
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/8.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/8.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        evolution: {
            evolvesTo: 'blastoise',
            level: 36,
            method: 'level'
        },
        baseExp: 142,
        expToNextLevel: 150
    },
    
    blastoise: {
        id: 9,
        name: 'Blastoise',
        type: 'water',
        stats: {
            hp: 79,
            attack: 83,
            defense: 100,
            specialAttack: 85,
            specialDefense: 105,
            speed: 78
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/9.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/9.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        evolution: null,
        baseExp: 239,
        expToNextLevel: 200
    },
    
    bulbasaur: {
        id: 1,
        name: 'Bulbasaur',
        type: 'grass',
        stats: {
            hp: 45,
            attack: 49,
            defense: 49,
            specialAttack: 65,
            specialDefense: 65,
            speed: 45
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/1.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        evolution: {
            evolvesTo: 'ivysaur',
            level: 16,
            method: 'level'
        },
        baseExp: 64,
        expToNextLevel: 100
    },
    
    ivysaur: {
        id: 2,
        name: 'Ivysaur',
        type: 'grass',
        stats: {
            hp: 60,
            attack: 62,
            defense: 63,
            specialAttack: 80,
            specialDefense: 80,
            speed: 60
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/2.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/2.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        evolution: {
            evolvesTo: 'venusaur',
            level: 32,
            method: 'level'
        },
        baseExp: 142,
        expToNextLevel: 150
    },
    
    venusaur: {
        id: 3,
        name: 'Venusaur',
        type: 'grass',
        stats: {
            hp: 80,
            attack: 82,
            defense: 83,
            specialAttack: 100,
            specialDefense: 100,
            speed: 80
        },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/3.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/3.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        evolution: null,
        baseExp: 236,
        expToNextLevel: 200
    }
};

// Tipos de Pokémon con sus colores
const POKEMON_TYPES = {
    normal: { color: '#A8A878', name: 'Normal' },
    fire: { color: '#F08030', name: 'Fuego' },
    water: { color: '#6890F0', name: 'Agua' },
    electric: { color: '#F8D030', name: 'Eléctrico' },
    grass: { color: '#78C850', name: 'Planta' },
    ice: { color: '#98D8D8', name: 'Hielo' },
    fighting: { color: '#C03028', name: 'Lucha' },
    poison: { color: '#A040A0', name: 'Veneno' },
    ground: { color: '#E0C068', name: 'Tierra' },
    flying: { color: '#A890F0', name: 'Volador' },
    psychic: { color: '#F85888', name: 'Psíquico' },
    bug: { color: '#A8B820', name: 'Bicho' },
    rock: { color: '#B8A038', name: 'Roca' },
    ghost: { color: '#705898', name: 'Fantasma' },
    dragon: { color: '#7038F8', name: 'Dragón' }
};

// Cálculo de experiencia para nivel siguiente
function calculateExpForNextLevel(level) {
    // Fórmula simplificada (Medium Fast growth rate)
    return Math.floor(Math.pow(level + 1, 3));
}

// Obtener datos de un Pokémon
function getPokemonData(pokemonKey) {
    return POKEMON_DATABASE[pokemonKey.toLowerCase()];
}
