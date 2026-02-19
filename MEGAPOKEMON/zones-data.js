// Datos de zonas basados en Pokémon Red/Blue/Yellow - Primera Generación
const ZONES_DATA = {
    'pallet-town': {
        name: 'Pueblo Paleta',
        wildPokemon: [],
        trainers: [],
        sequence: [
            { type: 'message', text: 'El Profesor Oak te desea suerte. Es hora de salir a tu aventura.', label: 'Salida del pueblo' }
        ],
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
            { id: 'route1-youngster', name: 'Joven Benja', pokemon: 'rattata', level: 6, reward: 60, dialogue: '¡Te vi en la hierba alta! ¡Demuestra lo que aprendiste!', battleType: 'trainer' },
            { id: 'route1-lass', name: 'Chica Ainhoa', pokemon: 'pidgey', level: 6, reward: 65, dialogue: '¡Mis Pokémon vuelan bajito, pero pegan fuerte!', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'wild' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route1-youngster' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route1-lass' }
        ],
        shop: [],
        nextZone: 'viridian-city'
    },

    'viridian-city': {
        name: 'Ciudad Verde',
        wildPokemon: [],
        trainers: [],
        sequence: [
            { type: 'message', text: 'Un anciano te recomienda abastecerte antes de seguir.', label: 'Preparación' }
        ],
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
            { pokemon: 'pidgey', minLevel: 3, maxLevel: 6, chance: 35 },
            { pokemon: 'rattata', minLevel: 3, maxLevel: 6, chance: 30 },
            { pokemon: 'caterpie', minLevel: 3, maxLevel: 5, chance: 14 },
            { pokemon: 'weedle', minLevel: 3, maxLevel: 5, chance: 14 },
            { pokemon: 'nidoran-m', minLevel: 4, maxLevel: 6, chance: 4 },
            { pokemon: 'nidoran-f', minLevel: 4, maxLevel: 6, chance: 3 }
        ],
        trainers: [
            { id: 'route2-bugcatcher', name: 'Chico Insecto Liam', pokemon: 'caterpie', level: 7, reward: 75, dialogue: '¡Mi equipo de bichos no se rinde nunca!', battleType: 'trainer' },
            { id: 'route2-youngster', name: 'Joven Nico', pokemon: 'rattata', level: 8, reward: 80, dialogue: '¡No puedes pasar sin una batalla!', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route2-bugcatcher' },
            { type: 'wild' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route2-youngster' }
        ],
        shop: [],
        nextZone: 'viridian-forest'
    },

    'viridian-forest': {
        name: 'Bosque Verde',
        wildPokemon: [
            { pokemon: 'caterpie', minLevel: 3, maxLevel: 6, chance: 28 },
            { pokemon: 'weedle', minLevel: 3, maxLevel: 6, chance: 28 },
            { pokemon: 'metapod', minLevel: 4, maxLevel: 7, chance: 10 },
            { pokemon: 'kakuna', minLevel: 4, maxLevel: 7, chance: 10 },
            { pokemon: 'pidgey', minLevel: 4, maxLevel: 7, chance: 14 },
            { pokemon: 'pikachu', minLevel: 4, maxLevel: 6, chance: 10 }
        ],
        trainers: [
            { id: 'forest-bugcatcher-1', name: 'Chico Insecto Raúl', team: [{ pokemon: 'weedle', level: 8 }, { pokemon: 'kakuna', level: 8 }], reward: 120, dialogue: '¡Entrenar en el bosque me volvió más fuerte!', battleType: 'trainer' },
            { id: 'forest-bugcatcher-2', name: 'Chico Insecto Fabio', team: [{ pokemon: 'caterpie', level: 9 }, { pokemon: 'metapod', level: 9 }], reward: 130, dialogue: '¡Tu próxima parada será Ciudad Plateada... si me ganas!', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'wild' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'forest-bugcatcher-1' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'forest-bugcatcher-2' }
        ],
        shop: [],
        nextZone: 'pewter-city'
    },

    'pewter-city': {
        name: 'Ciudad Plateada',
        wildPokemon: [],
        trainers: [
            { id: 'pewter-gym-trainer', name: 'Líder Aprendiz', pokemon: 'geodude', level: 11, reward: 220, dialogue: '¡Solo llegan a Brock quienes vencen en el gimnasio!', battleType: 'trainer' },
            { id: 'brock-gym', name: 'Líder Brock', team: [{ pokemon: 'geodude', level: 12 }, { pokemon: 'onix', level: 14 }], reward: 1400, dialogue: '¡Soy BROCK! ¡Mi defensa de roca es inquebrantable!', battleType: 'gym' }
        ],
        sequence: [
            { type: 'message', text: 'El gimnasio de Ciudad Plateada te espera.', label: 'Gimnasio' },
            { type: 'trainer', trainerId: 'pewter-gym-trainer' },
            { type: 'trainer', trainerId: 'brock-gym' }
        ],
        shop: [
            { key: 'potion', name: 'Poción', description: 'Restaura 20 HP', price: 300 },
            { key: 'super-potion', name: 'Super Poción', description: 'Restaura 50 HP', price: 700 },
            { key: 'pokeball', name: 'Poké Ball', description: 'Para capturar Pokémon', price: 200 },
            { key: 'great-ball', name: 'Super Ball', description: 'Mayor probabilidad de captura', price: 600 },
            { key: 'antidote', name: 'Antídoto', description: 'Cura envenenamiento', price: 100 }
        ],
        nextZone: 'route-3'
    },

    'route-3': {
        name: 'Ruta 3',
        wildPokemon: [
            { pokemon: 'spearow', minLevel: 7, maxLevel: 10, chance: 25 },
            { pokemon: 'pidgey', minLevel: 7, maxLevel: 10, chance: 20 },
            { pokemon: 'rattata', minLevel: 7, maxLevel: 10, chance: 18 },
            { pokemon: 'sandshrew', minLevel: 8, maxLevel: 10, chance: 15 },
            { pokemon: 'nidoran-m', minLevel: 8, maxLevel: 10, chance: 12 },
            { pokemon: 'nidoran-f', minLevel: 8, maxLevel: 10, chance: 10 }
        ],
        trainers: [
            { id: 'route3-lass', name: 'Chica Mía', team: [{ pokemon: 'pidgey', level: 10 }, { pokemon: 'nidoran-f', level: 10 }], reward: 180, dialogue: '¡No subestimes a mis Pokémon!', battleType: 'trainer' },
            { id: 'route3-youngster', name: 'Joven Teo', team: [{ pokemon: 'spearow', level: 11 }, { pokemon: 'rattata', level: 11 }], reward: 200, dialogue: '¡Rumbo a Mt. Moon! ¡Pero primero una batalla!', battleType: 'trainer' },
            { id: 'route3-bugcatcher', name: 'Chico Insecto Julián', team: [{ pokemon: 'caterpie', level: 10 }, { pokemon: 'weedle', level: 10 }, { pokemon: 'beedrill', level: 12 }], reward: 220, dialogue: '¡Te mostraré la fuerza de la evolución rápida!', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route3-lass' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route3-youngster' },
            { type: 'trainer', trainerId: 'route3-bugcatcher' }
        ],
        shop: [],
        nextZone: 'mt-moon'
    },

    'mt-moon': {
        name: 'Monte Moon',
        wildPokemon: [
            { pokemon: 'zubat', minLevel: 8, maxLevel: 12, chance: 36 },
            { pokemon: 'geodude', minLevel: 8, maxLevel: 12, chance: 34 },
            { pokemon: 'paras', minLevel: 9, maxLevel: 12, chance: 15 },
            { pokemon: 'clefairy', minLevel: 10, maxLevel: 12, chance: 6 },
            { pokemon: 'sandshrew', minLevel: 9, maxLevel: 12, chance: 9 }
        ],
        trainers: [
            { id: 'mtmoon-rocket-1', name: 'Recluta Rocket', team: [{ pokemon: 'rattata', level: 12 }, { pokemon: 'zubat', level: 12 }], reward: 300, dialogue: '¡Este monte es territorio del Team Rocket!', battleType: 'trainer' },
            { id: 'mtmoon-hiker', name: 'Montañero Bruno', team: [{ pokemon: 'geodude', level: 12 }, { pokemon: 'onix', level: 12 }], reward: 320, dialogue: '¡Mis Pokémon roca conocen este lugar al detalle!', battleType: 'trainer' },
            { id: 'mt-moon-scientist', name: 'Científico Miguel', team: [{ pokemon: 'grimer', level: 12 }, { pokemon: 'voltorb', level: 12 }, { pokemon: 'koffing', level: 12 }], reward: 500, dialogue: '¡Estos fósiles son míos! ¡Te eliminaré!', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'wild' },
            { type: 'trainer', trainerId: 'mtmoon-rocket-1' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'mtmoon-hiker' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'mt-moon-scientist' }
        ],
        shop: [],
        nextZone: 'route-4'
    },

    'route-4': {
        name: 'Ruta 4',
        wildPokemon: [
            { pokemon: 'spearow', minLevel: 10, maxLevel: 14, chance: 24 },
            { pokemon: 'rattata', minLevel: 10, maxLevel: 14, chance: 22 },
            { pokemon: 'sandshrew', minLevel: 10, maxLevel: 14, chance: 20 },
            { pokemon: 'ekans', minLevel: 10, maxLevel: 14, chance: 18 },
            { pokemon: 'mankey', minLevel: 10, maxLevel: 14, chance: 16 }
        ],
        trainers: [
            { id: 'route4-youngster', name: 'Joven Iván', team: [{ pokemon: 'spearow', level: 13 }, { pokemon: 'sandshrew', level: 13 }], reward: 240, dialogue: '¡Saliste de Mt. Moon, pero aún falta mucho!', battleType: 'trainer' },
            { id: 'route4-lass', name: 'Chica Vera', team: [{ pokemon: 'oddish', level: 13 }, { pokemon: 'pidgey', level: 13 }], reward: 230, dialogue: '¡Camino a Ciudad Celeste, nadie se salva de luchar!', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route4-youngster' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route4-lass' }
        ],
        shop: [],
        nextZone: 'cerulean-city'
    },

    'cerulean-city': {
        name: 'Ciudad Celeste',
        wildPokemon: [],
        trainers: [
            { id: 'cerulean-rival', name: 'Rival', team: [{ pokemon: 'pidgeotto', level: 17 }, { pokemon: 'rattata', level: 15 }, { pokemon: 'abra', level: 15 }], reward: 850, dialogue: '¡Llegaste tarde! Te voy a demostrar quién manda.', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'trainer', trainerId: 'cerulean-rival' },
            { type: 'message', text: 'Has derrotado a tu rival. Rumbo al Puente Pepita.', label: 'Rumbo norte' }
        ],
        shop: [
            { key: 'potion', name: 'Poción', description: 'Restaura 20 HP', price: 300 },
            { key: 'super-potion', name: 'Super Poción', description: 'Restaura 50 HP', price: 700 },
            { key: 'pokeball', name: 'Poké Ball', description: 'Para capturar Pokémon', price: 200 },
            { key: 'great-ball', name: 'Super Ball', description: 'Mayor probabilidad de captura', price: 600 },
            { key: 'paralyz-heal', name: 'Antiparálisis', description: 'Cura parálisis', price: 200 }
        ],
        nextZone: 'route-24'
    },

    'route-24': {
        name: 'Ruta 24 - Puente Pepita',
        wildPokemon: [
            { pokemon: 'oddish', minLevel: 11, maxLevel: 15, chance: 28 },
            { pokemon: 'bellsprout', minLevel: 11, maxLevel: 15, chance: 28 },
            { pokemon: 'pidgey', minLevel: 11, maxLevel: 15, chance: 18 },
            { pokemon: 'abra', minLevel: 12, maxLevel: 15, chance: 6 },
            { pokemon: 'caterpie', minLevel: 11, maxLevel: 14, chance: 20 }
        ],
        trainers: [
            { id: 'bridge-trainer-1', name: 'Nadador Leo', pokemon: 'poliwag', level: 14, reward: 260, dialogue: '¡Cinco victorias seguidas para pasar!', battleType: 'trainer' },
            { id: 'bridge-trainer-2', name: 'Campista Alan', team: [{ pokemon: 'oddish', level: 14 }, { pokemon: 'bellsprout', level: 14 }], reward: 280, dialogue: '¡Esta es la segunda batalla del puente!', battleType: 'trainer' },
            { id: 'bridge-trainer-3', name: 'Joven Sol', pokemon: 'spearow', level: 15, reward: 280, dialogue: '¡Tercera batalla! ¡No te rindas!', battleType: 'trainer' },
            { id: 'bridge-trainer-4', name: 'Chica Nati', pokemon: 'nidoran-f', level: 15, reward: 280, dialogue: '¡La cuarta batalla del desafío!', battleType: 'trainer' },
            { id: 'bridge-trainer-5', name: 'Joven Rene', pokemon: 'nidoran-m', level: 15, reward: 300, dialogue: '¡Última batalla del puente!', battleType: 'trainer' },
            { id: 'bridge-rocket', name: 'Recluta Rocket', team: [{ pokemon: 'ekans', level: 16 }, { pokemon: 'zubat', level: 16 }], reward: 450, dialogue: '¡Buen trabajo! Ahora únete al Team Rocket... o pelea.', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'trainer', trainerId: 'bridge-trainer-1' },
            { type: 'trainer', trainerId: 'bridge-trainer-2' },
            { type: 'trainer', trainerId: 'bridge-trainer-3' },
            { type: 'trainer', trainerId: 'bridge-trainer-4' },
            { type: 'trainer', trainerId: 'bridge-trainer-5' },
            { type: 'trainer', trainerId: 'bridge-rocket' }
        ],
        shop: [],
        nextZone: 'route-25'
    },

    'route-25': {
        name: 'Ruta 25',
        wildPokemon: [
            { pokemon: 'oddish', minLevel: 12, maxLevel: 16, chance: 30 },
            { pokemon: 'bellsprout', minLevel: 12, maxLevel: 16, chance: 30 },
            { pokemon: 'pidgey', minLevel: 12, maxLevel: 16, chance: 16 },
            { pokemon: 'abra', minLevel: 13, maxLevel: 16, chance: 7 },
            { pokemon: 'caterpie', minLevel: 12, maxLevel: 15, chance: 15 },
            { pokemon: 'electabuzz', minLevel: 14, maxLevel: 16, chance: 2 }
        ],
        trainers: [
            { id: 'route25-hiker', name: 'Montañero Gabi', team: [{ pokemon: 'geodude', level: 15 }, { pokemon: 'sandshrew', level: 15 }], reward: 320, dialogue: '¡El cabo es un gran lugar para entrenar!', battleType: 'trainer' },
            { id: 'route25-lass', name: 'Chica Noa', team: [{ pokemon: 'pidgey', level: 15 }, { pokemon: 'oddish', level: 15 }], reward: 300, dialogue: '¡Nadie llega a Misty sin pasar por aquí!', battleType: 'trainer' }
        ],
        sequence: [
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route25-hiker' },
            { type: 'wild' },
            { type: 'trainer', trainerId: 'route25-lass' },
            { type: 'message', text: 'El camino al gimnasio está libre. Vuelve a Ciudad Celeste para retar a Misty.', label: 'Listo para Misty' }
        ],
        shop: [],
        nextZone: 'cerulean-gym'
    },

    'cerulean-gym': {
        name: 'Gimnasio de Ciudad Celeste',
        wildPokemon: [],
        trainers: [
            { id: 'cerulean-gym-trainer', name: 'Nadadora Diana', team: [{ pokemon: 'staryu', level: 17 }, { pokemon: 'poliwag', level: 17 }], reward: 350, dialogue: '¡Misty no acepta entrenadores sin nivel!', battleType: 'trainer' },
            { id: 'misty-gym', name: 'Líder Misty', team: [{ pokemon: 'staryu', level: 18 }, { pokemon: 'starmie', level: 21 }], reward: 2100, dialogue: '¡Soy Misty! ¡Mis Pokémon de agua son imparables!', battleType: 'gym' }
        ],
        sequence: [
            { type: 'trainer', trainerId: 'cerulean-gym-trainer' },
            { type: 'trainer', trainerId: 'misty-gym' }
        ],
        shop: [],
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

    pidgeot: {
        id: 18,
        name: 'Pidgeot',
        type: 'flying',
        stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/18.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/18.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
        evolution: null,
        baseExp: 216,
        expToNextLevel: 200
    },

    spearow: {
        id: 21,
        name: 'Spearow',
        type: 'flying',
        stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/21.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/21.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
        evolution: { evolvesTo: 'fearow', level: 20, method: 'level' },
        baseExp: 52,
        expToNextLevel: 100
    },

    fearow: {
        id: 22,
        name: 'Fearow',
        type: 'flying',
        stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/22.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/22.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
        evolution: null,
        baseExp: 155,
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

    butterfree: {
        id: 12,
        name: 'Butterfree',
        type: 'bug',
        stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/12.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/12.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
        evolution: null,
        baseExp: 178,
        expToNextLevel: 150
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

    beedrill: {
        id: 15,
        name: 'Beedrill',
        type: 'bug',
        stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/15.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/15.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
        evolution: null,
        baseExp: 178,
        expToNextLevel: 150
    },

    'nidoran-m': {
        id: 32,
        name: 'Nidoran♂',
        type: 'poison',
        stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/32.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/32.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
        evolution: { evolvesTo: 'nidorino', level: 16, method: 'level' },
        baseExp: 55,
        expToNextLevel: 100
    },

    nidorino: {
        id: 33,
        name: 'Nidorino',
        type: 'poison',
        stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/33.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/33.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
        evolution: null,
        baseExp: 128,
        expToNextLevel: 150
    },

    'nidoran-f': {
        id: 29,
        name: 'Nidoran♀',
        type: 'poison',
        stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/29.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/29.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
        evolution: { evolvesTo: 'nidorina', level: 16, method: 'level' },
        baseExp: 55,
        expToNextLevel: 100
    },

    nidorina: {
        id: 30,
        name: 'Nidorina',
        type: 'poison',
        stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/30.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/30.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
        evolution: null,
        baseExp: 128,
        expToNextLevel: 150
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

    arbok: {
        id: 24,
        name: 'Arbok',
        type: 'poison',
        stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/24.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/24.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
        evolution: null,
        baseExp: 157,
        expToNextLevel: 150
    },

    zubat: {
        id: 41,
        name: 'Zubat',
        type: 'poison',
        stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/41.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/41.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
        evolution: { evolvesTo: 'golbat', level: 22, method: 'level' },
        baseExp: 49,
        expToNextLevel: 100
    },

    golbat: {
        id: 42,
        name: 'Golbat',
        type: 'poison',
        stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/42.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/42.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
        evolution: { evolvesTo: 'crobat', level: 38, method: 'level' },
        baseExp: 159,
        expToNextLevel: 150
    },

    crobat: {
        id: 169,
        name: 'Crobat',
        type: 'poison',
        stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/169.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/back/169.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
        evolution: null,
        baseExp: 268,
        expToNextLevel: 200
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

    graveler: {
        id: 75,
        name: 'Graveler',
        type: 'rock',
        stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/75.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/75.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
        evolution: null,
        baseExp: 137,
        expToNextLevel: 150
    },

    onix: {
        id: 95,
        name: 'Onix',
        type: 'rock',
        stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/95.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/95.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
        evolution: { evolvesTo: 'steelix', level: 40, method: 'level' },
        baseExp: 77,
        expToNextLevel: 150
    },

    steelix: {
        id: 208,
        name: 'Steelix',
        type: 'steel',
        stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/208.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/back/208.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
        evolution: null,
        baseExp: 179,
        expToNextLevel: 200
    },

    sandshrew: {
        id: 27,
        name: 'Sandshrew',
        type: 'ground',
        stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/27.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/27.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
        evolution: null,
        baseExp: 60,
        expToNextLevel: 100
    },

    paras: {
        id: 46,
        name: 'Paras',
        type: 'bug',
        stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/46.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/46.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
        evolution: null,
        baseExp: 57,
        expToNextLevel: 100
    },

    clefairy: {
        id: 35,
        name: 'Clefairy',
        type: 'fairy',
        stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/35.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/35.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
        evolution: null,
        baseExp: 113,
        expToNextLevel: 120
    },

    electabuzz: {
        id: 125,
        name: 'Electabuzz',
        type: 'electric',
        stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/125.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/back/125.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
        evolution: { evolvesTo: 'electivire', level: 40, method: 'level' },
        baseExp: 172,
        expToNextLevel: 180
    },

    electivire: {
        id: 466,
        name: 'Electivire',
        type: 'electric',
        stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/466.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png',
        evolution: null,
        baseExp: 243,
        expToNextLevel: 220
    },

    mankey: {
        id: 56,
        name: 'Mankey',
        type: 'fighting',
        stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/56.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/56.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
        evolution: null,
        baseExp: 61,
        expToNextLevel: 100
    },

    oddish: {
        id: 43,
        name: 'Oddish',
        type: 'grass',
        stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/43.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/43.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
        evolution: null,
        baseExp: 64,
        expToNextLevel: 100
    },

    bellsprout: {
        id: 69,
        name: 'Bellsprout',
        type: 'grass',
        stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/69.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/69.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
        evolution: null,
        baseExp: 60,
        expToNextLevel: 100
    },

    abra: {
        id: 63,
        name: 'Abra',
        type: 'psychic',
        stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/63.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/63.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
        evolution: null,
        baseExp: 62,
        expToNextLevel: 100
    },

    poliwag: {
        id: 60,
        name: 'Poliwag',
        type: 'water',
        stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/60.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/60.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
        evolution: null,
        baseExp: 60,
        expToNextLevel: 100
    },

    staryu: {
        id: 120,
        name: 'Staryu',
        type: 'water',
        stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/120.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/120.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
        evolution: { evolvesTo: 'starmie', level: 40, method: 'level' },
        baseExp: 68,
        expToNextLevel: 120
    },

    starmie: {
        id: 121,
        name: 'Starmie',
        type: 'water',
        stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/121.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/121.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
        evolution: null,
        baseExp: 182,
        expToNextLevel: 160
    },

    grimer: {
        id: 88,
        name: 'Grimer',
        type: 'poison',
        stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/88.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/88.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
        evolution: null,
        baseExp: 65,
        expToNextLevel: 100
    },

    voltorb: {
        id: 100,
        name: 'Voltorb',
        type: 'electric',
        stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/100.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/100.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
        evolution: null,
        baseExp: 66,
        expToNextLevel: 100
    },

    koffing: {
        id: 109,
        name: 'Koffing',
        type: 'poison',
        stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/109.png',
        spriteBack: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/109.png',
        spriteModern: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
        evolution: null,
        baseExp: 68,
        expToNextLevel: 100
    }
};

// Combinar bases de datos
Object.assign(POKEMON_DATABASE, ADDITIONAL_POKEMON);
