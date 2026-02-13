// Base de datos de movimientos de Pokémon
const MOVES_DATABASE = {
    // Movimientos normales
    'tackle': {
        name: 'Placaje',
        type: 'normal',
        power: 40,
        accuracy: 100,
        pp: 35,
        maxPP: 35,
        description: 'Embiste con todo el cuerpo'
    },
    'scratch': {
        name: 'Arañazo',
        type: 'normal',
        power: 40,
        accuracy: 100,
        pp: 35,
        maxPP: 35,
        description: 'Araña con garras afiladas'
    },
    'growl': {
        name: 'Gruñido',
        type: 'normal',
        power: 0,
        accuracy: 100,
        pp: 40,
        maxPP: 40,
        description: 'Baja el Ataque del rival'
    },
    'tail-whip': {
        name: 'Látigo',
        type: 'normal',
        power: 0,
        accuracy: 100,
        pp: 30,
        maxPP: 30,
        description: 'Baja la Defensa del rival'
    },
    
    // Movimientos eléctricos
    'thunder-shock': {
        name: 'Impactrueno',
        type: 'electric',
        power: 40,
        accuracy: 100,
        pp: 30,
        maxPP: 30,
        description: 'Ataque eléctrico que puede paralizar'
    },
    'thunderbolt': {
        name: 'Rayo',
        type: 'electric',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPP: 15,
        description: 'Potente ataque eléctrico'
    },
    'quick-attack': {
        name: 'Ataque Rápido',
        type: 'normal',
        power: 40,
        accuracy: 100,
        pp: 30,
        maxPP: 30,
        description: 'Ataque de alta prioridad'
    },
    
    // Movimientos de fuego
    'ember': {
        name: 'Ascuas',
        type: 'fire',
        power: 40,
        accuracy: 100,
        pp: 25,
        maxPP: 25,
        description: 'Ataque de fuego que puede quemar'
    },
    'flamethrower': {
        name: 'Lanzallamas',
        type: 'fire',
        power: 90,
        accuracy: 100,
        pp: 15,
        maxPP: 15,
        description: 'Potente ataque de fuego'
    },
    'slash': {
        name: 'Cuchillada',
        type: 'normal',
        power: 70,
        accuracy: 100,
        pp: 20,
        maxPP: 20,
        description: 'Golpe cortante con garras'
    },
    
    // Movimientos de agua
    'water-gun': {
        name: 'Pistola Agua',
        type: 'water',
        power: 40,
        accuracy: 100,
        pp: 25,
        maxPP: 25,
        description: 'Dispara agua a presión'
    },
    'bubble': {
        name: 'Burbuja',
        type: 'water',
        power: 40,
        accuracy: 100,
        pp: 30,
        maxPP: 30,
        description: 'Lanza burbujas al enemigo'
    },
    'hydro-pump': {
        name: 'Hidrobomba',
        type: 'water',
        power: 110,
        accuracy: 80,
        pp: 5,
        maxPP: 5,
        description: 'Chorrea agua a alta presión'
    },
    'bite': {
        name: 'Mordisco',
        type: 'dark',
        power: 60,
        accuracy: 100,
        pp: 25,
        maxPP: 25,
        description: 'Muerde con colmillos afilados'
    },
    
    // Movimientos de planta
    'vine-whip': {
        name: 'Látigo Cepa',
        type: 'grass',
        power: 45,
        accuracy: 100,
        pp: 25,
        maxPP: 25,
        description: 'Azota con lianas'
    },
    'razor-leaf': {
        name: 'Hoja Afilada',
        type: 'grass',
        power: 55,
        accuracy: 95,
        pp: 25,
        maxPP: 25,
        description: 'Lanza hojas afiladas'
    },
    'solar-beam': {
        name: 'Rayo Solar',
        type: 'grass',
        power: 120,
        accuracy: 100,
        pp: 10,
        maxPP: 10,
        description: 'Ataque solar de dos turnos'
    },
    'leech-seed': {
        name: 'Drenadoras',
        type: 'grass',
        power: 0,
        accuracy: 90,
        pp: 10,
        maxPP: 10,
        description: 'Absorbe HP cada turno'
    }
};

// Movimientos que aprende cada Pokémon por nivel
const POKEMON_MOVESETS = {
    'pikachu': [
        { level: 1, move: 'thunder-shock' },
        { level: 1, move: 'growl' },
        { level: 6, move: 'tail-whip' },
        { level: 8, move: 'quick-attack' },
        { level: 11, move: 'thunderbolt' }
    ],
    'raichu': [
        { level: 1, move: 'thunder-shock' },
        { level: 1, move: 'quick-attack' },
        { level: 1, move: 'thunderbolt' },
        { level: 1, move: 'tail-whip' }
    ],
    'charmander': [
        { level: 1, move: 'scratch' },
        { level: 1, move: 'growl' },
        { level: 7, move: 'ember' },
        { level: 13, move: 'slash' }
    ],
    'charmeleon': [
        { level: 1, move: 'scratch' },
        { level: 1, move: 'ember' },
        { level: 1, move: 'growl' },
        { level: 20, move: 'slash' },
        { level: 24, move: 'flamethrower' }
    ],
    'charizard': [
        { level: 1, move: 'ember' },
        { level: 1, move: 'scratch' },
        { level: 1, move: 'slash' },
        { level: 1, move: 'flamethrower' }
    ],
    'squirtle': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'tail-whip' },
        { level: 7, move: 'bubble' },
        { level: 10, move: 'water-gun' },
        { level: 13, move: 'bite' }
    ],
    'wartortle': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'bubble' },
        { level: 1, move: 'water-gun' },
        { level: 19, move: 'bite' }
    ],
    'blastoise': [
        { level: 1, move: 'water-gun' },
        { level: 1, move: 'bubble' },
        { level: 1, move: 'bite' },
        { level: 42, move: 'hydro-pump' }
    ],
    'bulbasaur': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'growl' },
        { level: 7, move: 'leech-seed' },
        { level: 10, move: 'vine-whip' },
        { level: 13, move: 'razor-leaf' }
    ],
    'ivysaur': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'vine-whip' },
        { level: 1, move: 'leech-seed' },
        { level: 20, move: 'razor-leaf' }
    ],
    'venusaur': [
        { level: 1, move: 'vine-whip' },
        { level: 1, move: 'razor-leaf' },
        { level: 1, move: 'leech-seed' },
        { level: 45, move: 'solar-beam' }
    ],
    'rattata': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'tail-whip' },
        { level: 7, move: 'quick-attack' },
        { level: 14, move: 'bite' }
    ],
    'raticate': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'quick-attack' },
        { level: 1, move: 'bite' },
        { level: 27, move: 'slash' }
    ],
    'pidgey': [
        { level: 1, move: 'tackle' },
        { level: 5, move: 'quick-attack' },
        { level: 12, move: 'slash' }
    ],
    'pidgeotto': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'quick-attack' },
        { level: 21, move: 'slash' }
    ],
    'caterpie': [
        { level: 1, move: 'tackle' }
    ],
    'metapod': [
        { level: 1, move: 'tackle' }
    ],
    'weedle': [
        { level: 1, move: 'tackle' }
    ],
    'kakuna': [
        { level: 1, move: 'tackle' }
    ],
    'ekans': [
        { level: 1, move: 'tackle' },
        { level: 10, move: 'bite' }
    ],
    'geodude': [
        { level: 1, move: 'tackle' },
        { level: 11, move: 'slash' }
    ],
    'onix': [
        { level: 1, move: 'tackle' },
        { level: 1, move: 'bite' }
    ]
};
