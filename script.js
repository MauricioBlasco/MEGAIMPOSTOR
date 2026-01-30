const datos = {
    "Animales": [
        "Perro", "Gato", "Elefante", "Tigre", "Delfín", "Lobo", "León", "Cebra", "Jirafa", "Oso", 
        "Panda", "Pingüino", "Tiburón", "Águila", "Serpiente", "Caballo", "Vaca", "Cerdo", "Mono", "Gorila", 
        "Canguro", "Hipopótamo", "Rinoceronte", "Tortuga", "Conejo", "Hámster", "Loro", "Pavo Real", "Ballena", "Pulpo", 
        "Medusa", "Abeja", "Hormiga", "Mariposa", "Araña", "Escorpión", "Cocodrilo", "Camaleón", "Murciélago", "Zorro", 
        "Ardilla", "Mapache", "Ciervo", "Cabra", "Oveja", "Gallo", "Pato", "Cisne", "orca", "foca"
    ],
    "Lugares": [
        "Playa", "Cine", "Estadio", "Hospital", "Escuela", "Aeropuerto", "Biblioteca", "Museo", "Zoológico", 
        "Parque", "Restaurante", "Hotel", "Gimnasio", "Farmacia", "Supermercado", "Banco", "Iglesia", "Castillo", "Cárcel", 
        "Bosque", "Desierto", "Montaña", "Isla", "Volcán", "Río", "Cascada", "Puerto", "Estación de Tren", "Gasolinera", 
        "Panadería", "Peluquería", "Teatro", "Casino", "Circo", "Acuario", "Planetario", "Cementerio", "Granja", 
        "Puente", "Cabaña", "Cueva", "Jungla", "Pantano"
    ],
    "Objetos": [
        "Lámpara", "Reloj", "Espejo", "Martillo", "Tenedor", "Cuchillo", "Cuchara", "Plato", "Vaso", "Sartén", 
        "Llave", "Candado", "Teléfono", "Computadora", "Televisor", "Radio", "Cámara", "Libro", "Lápiz", 
        "Mochila", "Maleta", "Paraguas", "Gafas", "Billetera", "Moneda", "Destornillador", "Tijeras", 
        "Peine", "Jabón", "Toalla", "Almohada", "Manta", "Silla", "Mesa", "Sofá", "Cama", 
        "Bicicleta", "Guitarra", "Piano", "Pelota", "Raqueta", "Botella", "Encendedor", "trompeta", "Escoba", "bateria", "bajo"
    ],
    "Futbolistas": [
        "Puskás", "Eusébio", "Gerd Müller", "George Best", "Yashin", "Baresi", "Maldini", "Passarella", "Kempes", "Batistuta",
        "Figo", "Puyol", "Pirlo", "Lahm", "Gerrard", "Lampard", "Scholes", "Raúl", "Shevchenko", "Van Basten",
        "Bergkamp", "Totti", "Del Piero", "Klose", "Foden", "Saka", "Rodri", "Valverde", "Courtois", "Alisson",
        "Van Dijk", "Salah", "Son", "Gavi", "James Rodríguez",
        "Garrincha", "Zico", "Socrates", "Falcao", "Chilavert", "Valderrama", "Forlán", "Cavani", "Godín",
        "Bebeto", "Vieri", "Nedved", "Stoichkov", "Hagi", "Kahn", "Schmeichel", "Van der Sar", "Hugo Sánchez", "Rafa Márquez", "Amengol",
        "Pelé", "Maradona", "Messi", "Cristiano Ronaldo", "Neymar", "Mbappé", "Haaland", "Lewandowski", "Benzema", "Modric",
        "Kroos", "De Bruyne", "Kanté", "Casemiro", "Busquets", "Xavi", "Iniesta", "Zidane", "Ronaldo", "Ronaldinho",
        "Romario", "Rivaldo", "Kaká", "Roberto Carlos", "Cafu", "Thiago Silva", "Marcelo", "Dani Alves", "Ramos",
        "Piqué", "Kompany", "Terry", "Ferdinand", "Vidic", "Chiellini", "Bonucci", "Cannavaro", "Nesta", "Thuram",
        "Neuer", "Buffon", "Casillas", "Oblak", "Ter Stegen", "Ederson", "Donnarumma", "Navas", "De Gea", "Cech",
        "Henry", "Drogba", "Eto'o", "Weah", "Suárez", "Agüero", "Ibrahimovic", "Rooney", "Van Persie",
        "Griezmann", "Pogba", "Vieira", "Makélélé", "Seedorf", "Gattuso", "Ballack", "Özil",
        "Dybala", "Lautaro", "Julián Álvarez", "Enzo Fernández", "Mac Allister", "Dibu Martínez", "Otamendi", "Cuti Romero", "Tagliafico", "Montiel",
        "Riquelme", "Verón", "Aimar", "Ortega", "Redondo", "Simeone", "Mascherano", "Zanetti",
        "Crespo", "Palermo", "Tevez", "Higuaín", "Di María", "Papu Gómez", "Lo Celso", "Paredes", "Acuña"
    ],
    "Series": [
        "Stranger Things", "Breaking Bad", "The Office", "Harry Potter", "Spider-Man", "Game of Thrones", "Friends", "Dark",
        "La Casa de Papel", "The Mandalorian", "The Last of Us", "Black Mirror", "Peaky Blinders", "Better Call Saul", "Narcos", "Vikings", 
        "Grey's Anatomy", "Lost", "The Walking Dead", "Modern Family", "The Big Bang Theory", "How I Met Your Mother", "Simpson", "South Park", "Rick and Morty", 
        "One Piece", "Naruto", "Dragon Ball", "Attack on Titan", "Demon Slayer", "Cobra Kai", "The Boys", "Invincible", 
        "Dexter", "Mr. Robot", "Brooklyn Nine-Nine", "Ted Lasso", "The Witcher", "Loki", "Wandavision",
        "The Crown", "The Sopranos", "Wednesday",
        "Sherlock", "Doctor Who", "House", "Prison Break",
        "Arcane", "Love Death Robots", "Castlevania", "Avatar La Leyenda de Aang", "Fullmetal Alchemist", "Death Note", "Bleach", "Hunter x Hunter", "My Hero Academia",
        "Jujutsu Kaisen", "Chainsaw Man", "Spy x Family", "One Punch Man", "Tokyo Ghoul", "Sword Art Online",
        "The Umbrella Academy", "Squid Game", "Lucifer", "The Flash", "Arrow", "Supergirl", "Legends of Tomorrow",
        "Daredevil", "The Punisher", "Moon Knight", "Hawkeye", "She Hulk", "Ms Marvel", "Falcon and Winter Soldier"
    ],
    "Comida": [
        "Pizza", "Hamburguesa", "Sushi", "Taco", "Pasta", "Asado", "Empanada", "Paella", "Ramen", "Lasaña", 
        "Panchito", "Nuggets", "Ensalada", "Sopa", "Milanesa", "Puré", "Arroz", "Huevo Frito", "Tortilla", "Pan", 
        "Queso", "Jamón", "Salame", "Sándwich", "Ceviche", "Burrito", "Nachos", "Kebab", "Choripán",
        "Helado", "Chocolate", "Tarta", "Flan", "Churros", "Donas", "Galletas", "Alfajor", "Papas Fritas", "Pochoclos", 
        "Manzana", "Banana", "Frutilla", "Sandía", "Uva", "Naranja", "Limón", "Palta", "Tomate", "Lechuga", "Pepino", "Zanahoria", "Berenjena",
        "Ravioles", "Ñoquis", "Sorrentinos", "Pollo al horno", "Vacío", "Morcilla", "Chorizo", "Provoleta",
        "Humita", "Tamales", "Guiso", "Puchero", "Bondiola", "Osobuco",
        "Quesadilla",
        "Croissant", "Panqueques", "Waffles", "Muffin", "Brownie", "Tiramisú",
        "Chocotorta", "Pastafrola", "Rogel", "Lemon Pie", "Budín"
    ],
    "Deportes": [
        "Tenis", "Básquet", "Natación", "Rugby", "Golf", "Vóley", "Fútbol", "Boxeo", "Ciclismo", 
        "Atletismo", "Gimnasia", "Hockey", "Béisbol", "Surf", "Skate", "Snowboard", "Esquí", "Karate",
        "Esgrima", "Arquería", "Remo", "Ajedrez", "Pádel", "Ping Pong", "Dardos", 
        "Bowling", "Sumo", "Lucha Libre", 
        "Handball"
    ],
    "Videojuegos": [
        "Minecraft", "Fortnite", "Mario Bros", "FIFA", "GTA", "Zelda", "Rocket league", "Red Dead Redemption", "Fallout", "Tetris", 
        "Terraria", "League of Legends", "Valorant", "Counter-Strike", "Roblox", "Among Us", "Fall Guys", "God of War", "Elden Ring", "Dark Souls", 
        "Halo", "Call of Duty", "Resident Evil", "Silent Hill", "Mortal Kombat", "Street Fighter", "Sonic", "Pac-Man", "The Sims", "Stardew Valley", 
        "Pokemon", "Final Fantasy", "Apex Legends", "Overwatch", "Cyberpunk 2077", "The Witcher 3", "Assassins Creed", "Uncharted", 
        "The Last of Us", "Skyrim", "Portal", "Half-Life", "BioShock", "Undertale", "Cuphead", "Hollow Knight", "Doom", "gangbeast", "kirby", "polytopia", "crash bandicoot", "need 4 speed",
        "Outer Wilds", "Brawl Stars", "Clash of Clans", "Genshin Impact", "Dead by Daylight", "Phasmophobia", "Baldurs Gate 3",
        "Bloodborne", "Sekiro", "Ghost of Tsushima", "Horizon", "Gran Turismo", "F1", "NBA 2K", "PES", "Smash Bros",
        "Animal Crossing", "Splatoon", "Metroid", "Donkey Kong", "Mega Man", "Castlevania", "Metal Gear Solid", "Devil May Cry",
        "Diablo", "World of Warcraft", "StarCraft", "Team Fortress 2", "Left 4 Dead", "Payday", "Rainbow Six Siege",
        "Battlefield", "Destiny", "Borderlands", "Yakuza", "Injustice",
        "Celeste", "Hades", "Dead Cells", "Subnautica", "No Man's Sky"
    ],
  "Clash Royale": [
        "Gigante", "Montapuercos", "P.E.K.K.A", "Mago eléctrico", "Tronco", "Zap", "Bárbaros", "Arqueras", "Esqueletos", "Gólem",
        "Sabueso de lava", "Globo bombástico", "Minero", "Princesa", "Mago de hielo", "Bruja", "Ejército de esqueletos", "Barril de duendes", "Cohete", "Bola de fuego",
        "Veneno", "Tornado", "Verdugo", "Dragón infernal", "Torre infernal", "Ballesta", "Mortero", "Chispitas", "Megacaballero", "Bandida",
        "Fantasma real", "Arquero mágico", "Montacarneros", "Pescador", "Lanzarrocas", "Lanzafuegos", "Duende lanzadardos", "Pandilla de duendes", "Murciélagos", "Trío de mosqueteras",
        "Príncipe", "Príncipe oscuro", "Espíritu de hielo", "Espíritu de fuego", "Curandera guerrera", "Paquete real", "Dragones esqueléticos", "Bruja madre",
        "Rompemuros", "Fénix", "Monje", "Rey Esqueleto", "Reina Arquera", "Caballero Dorado", "Principito", "Duendes con lanza",
        "Gigante Noble", "Bárbaros de élite", "Horda de esbirros", "Esbirros", "Cazador", "Mago", "Mini P.E.K.K.A", "Valquiria", "Golem de elíxir",
        "Cañón", "Cañón con ruedas", "Máquina voladora", "Choza de duendes", "Choza de bárbaros", "Lápida", "Horno", "Recolector de elíxir", "Jaula del forzudo", "Terremoto",
        "Flechas", "Rayo", "Clon", "Espejo", "Furia"
    ],
    "Rock Internacional": [
        "The Beatles", "Queen", "Led Zeppelin", "Pink Floyd", "The Rolling Stones", "AC/DC", "Nirvana", "Guns N' Roses", "Metallica", "Radiohead",
        "The Doors", "Aerosmith", "U2", "Deep Purple", "Black Sabbath", "The Who", "Red Hot Chili Peppers", "Pearl Jam", "Linkin Park", "Iron Maiden",
        "Coldplay", "Green Day", "Bon Jovi", "The Police", "Oasis", "Arctic Monkeys", "The Killers", "Foo Fighters", "Muse",
        "The Clash", "Ramones", "Sex Pistols", "KISS", "Van Halen", "The Cure", "The Smiths",
        "Imagine Dragons", "Gorillaz", "Twenty One Pilots", "System of a Down", "Slipknot", "Mötley Crüe", "Journey", "Toto", "Fleetwood Mac", "Dire Straits", "Las chismosas"
    ],
    "Rock Argentino": [
        "Soda Stereo", "Patricio Rey", "Serú Girán", "Pescado Rabioso", "Sumo", "Los Abuelos de la Nada", "Enanitos Verdes", "Los Fabulosos Cadillacs", "Los Auténticos Decadentes", "Babasónicos",
        "La Renga", "Los Piojos", "Ratones Paranoicos", "Divididos", "Las Pelotas", "Catupecu Machu", "Bersuit Vergarabat", "Callejeros", "Intoxicados", "Viejas Locas",
        "Virus", "Rata Blanca", "Attaque 77", "Dos Minutos", "Almafuerte", "Hermética", "V8", "Los Tipitos", "Estelares", "Guasones",
        "El Mató a un Policía Motorizado", "Airbag", "Tan Biónica", "Los Gardelitos", "Los fundamentalistas", "La Beriso", "Los Caballeros de la Quema", "Arbol", "Kapanga", "Memphis la Blusera",
        "Vox Dei", "Almendra", "Sui Generis", "Manal", "Los Gatos", "Pappo's Blues", "Riff", "SKAY", "Miranda!", "Turf", "Las chismosas",
        "León Gieco", "Fito Páez",
        "No Te Va Gustar", "La Vela Puerca", "Ciro y Los Persas", "La Mosca", "Los Cafres", "Nonpalidece", "Dread Mar I",
        "Los Pericos", "Flema",
        "Horcas", "Malón", "Asspera"
    ],
    "Peliculas": [
        "Titanic", "Avatar", "El Padrino", "Pulp Fiction", "Forrest Gump", "Gladiador", "Matrix", "Inception", "Interstellar", "El Rey León",
        "Jurassic Park", "Star Wars", "El Señor de los Anillos", "Harry Potter", "Toy Story", "Buscando a Nemo", "Frozen", "Los Increíbles", "Shrek", "Up",
        "Avengers", "Iron Man", "Spider-Man", "Batman", "Superman", "Joker", "Deadpool", "Black Panther", "Guardianes de la Galaxia", "Thor",
        "Volver al Futuro", "Rocky", "Rambo", "Terminator", "Alien", "Depredador", "Duro de Matar", "Mad Max", "300", "Troya",
        "La La Land", "Coco", "Intensa Mente", "Moana", "Enredados", "Blancanieves", "La Sirenita", "Aladdin", "Mulan", "Pocahontas",
        "Scarface", "El Lobo de Wall Street", "Fight Club", "Kung Fu Panda", "Cómo Entrenar a tu Dragón", "Madagascar", "Ratatouille", "Monsters Inc",
        "Piratas del Caribe", "Indiana Jones", "E.T.", "Tiburón", "Goodfellas", "Casino", "Taxi Driver", "El Silencio de los Inocentes",
        "Kill Bill", "Dune", "Blade Runner", "El Caballero de la Noche",
        "Espartaco",
        "Casablanca", "La Naranja Mecánica", "2001 Odisea del Espacio", "El Resplandor", "Psicosis",
        "Relatos Salvajes", "El Secreto de sus Ojos", "Nueve Reinas", "El Ángel", "Metegol", "La Odisea de los Giles",
        "John Wick"
    ],
    "Pokemon": [
        "Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Mewtwo", "Mew", "Eevee", "Snorlax", "Gengar", "Dragonite",
        "Gyarados", "Lucario", "Greninja", "Blaziken", "Umbreon", "Espeon", "Jolteon", "Vaporeon", "Flareon", "Leafeon",
        "Glaceon", "Sylveon", "Meowth", "Psyduck", "Machamp", "Alakazam", "Golem", "Raichu", "Arcanine", "Ninetales", "Pidgeot", "Fearow", "Sandslash", "Nidoking", "Nidoqueen", "Clefable", "Wigglytuff", "Venomoth", "Dugtrio", "Persian",
        "Golduck", "Primeape", "Poliwrath", "Abra", "Kadabra", "Machoke", "Victreebel", "Tentacruel", "Rapidash", "Slowbro", "Magneton", "Dodrio", "Dewgong", "Muk", "Cloyster", "Haunter", "Hypno", "Kingler", "Electrode", "Exeggutor",
        "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Weezing", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Seadra", "Seaking", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Lapras",
        "Ditto", "Porygon", "Omastar", "Kabutops", "Aerodactyl", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Totodile", "Cyndaquil", "Chikorita", "Typhlosion", "Feraligatr", "Meganium", "Ampharos", "Heracross", "Scizor", "Tyranitar",
        "Lugia", "Ho-Oh", "Celebi", "Slowking", "Wobbuffet", "Forretress", "Steelix", "Shuckle", "Treecko", "Torchic", "Mudkip", "Gardevoir", "Aggron", "Flygon", "Milotic", "Absol", "Salamence", "Metagross",
        "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Sceptile", "Swampert", "Breloom", "Slaking", "Hariyama", "Manectric", "Sharpedo", "Wailord", "Altaria", "Zangoose", "Seviper", "Armaldo", "Banette",
        "Torterra", "Infernape", "Empoleon", "Garchomp", "Luxray", "Roserade", "Gallade", "Dialga", "Palkia", "Giratina", "Darkrai", "Arceus", "Zoroark", "Chandelure", "Hydreigon", "Reshiram", "Zekrom", "Kyurem", "Mimikyu"
    ],
    "Personas":[
        "Mauro","Lopa", "Euge", "vicky B", "Melina", "eze", "Isidro", "Raul", "Nacho", "Tejeda", "prato", "Luna", "Valen", "lio", "Viva", "monti", "Arguello", 
        "Testa", "Estela", "Luciano Bricola", "Mariano Bricola", "Poggi", "Pablo", "coffler", "Pablito del pañol", "Facu Led", "mendez", "Spagno", "sosin", "shasemnbag", 
        "Maffei", "Altinier", "zarate", "serrudo", "Colo barco", "Abregu", "gabri", "octa", "tatin", "Amenta", "Jorge Herrera", "germauro papa", "Titi", "Santi Lautolucito", "Pepi Puente",
        "giamo", "Gian", "Matarollo", "Lain", "mauri trillo", "bissoni", "garabato", "santi white", "santi taza", "camilito", "rios", "fabri", "medina", "palmieri", "sofi morey", "vicky lupica", 
        "manuchongod", "mateo orlando", "alejo almeyra", "nelli", "mati karam", "milo rada", "joaquino", "lesme", "luis", "tanque de velez", "darda", "arguello papa", "vila 🐐"
        , "franva", "valensar", "barbara", "rebeca", "sansone", "lord braulio", "benja trillo", "abrulop", "elian", "kofman", "fausto", "lara", "pagano", "numa", "tizi paredes", "cesar", "salinas"
        , "schiner", "degodoy", "zukaritas", "venenzoni", "pereyra", "iara", "benja", "thiago diarte", "chapa zarate", "yami canchas", "anzoategui", "heir", "firpo", "thepenke", "lobo zerrillo"
        , "viole giu", "jaz", "tomi teje", "lau G vila", "Gavidron"
    ]
};
let numJugadores = 0;
let numImpostores = 0;
let jugadorActual = 1;
let palabraSecreta = "";
let categoriaSecreta = "";
let listaImpostores = [];
let personasDesbloqueado = false;
let modoLocoActivado = false;
let contadorSwitchSimilar = 0;
let logroAuraDesbloqueado = false;
let logroMarleyDesbloqueado = false;
let logroZeusDesbloqueado = false;
let logroJokerDesbloqueado = false;
let logroCampeonDesbloqueado = false;
let logroColeccionistaDesbloqueado = false;
let logroTheMDesbloqueado = false;
let logroHadesDesbloqueado = false;
let logroPrincipianteDesbloqueado = false;
let logroYSoyYoDesbloqueado = false;
let logroImposibleDesbloqueado = false;
let logroSrDesbloqueado = false;
let logroMemeDesbloqueado = false;

// Variables para el bot
let botActivado = false;
let asociacionesPalabras = {};
let pistasBloqueadas = {}; // {palabra: [pistas malas]}
let botEsJugador = false;
let numJugadoresHumanos = 0;
let cantidadBots = 1; // Cantidad de bots en la partida
let pistasJugadores = {}; // {jugadorNum: pista}
let votosJugadores = {}; // {votante: votado}
let jugadorActualPista = 1; // Para el flujo de dar pistas

// El bot aprende automáticamente analizando las categorías
function botAprendizajeAutomatico() {
    // Generar asociaciones basadas en categorías
    Object.keys(datos).forEach(categoria => {
        datos[categoria].forEach(palabra => {
            if (!asociacionesPalabras[palabra]) {
                asociacionesPalabras[palabra] = [];
            }
            
            // Agregar la categoría como pista base
            asociacionesPalabras[palabra].push(categoria.toLowerCase());
            
            // Generar pistas automáticas basadas en características
            const pistas = generarPistasAutomaticas(palabra, categoria);
            pistas.forEach(pista => {
                if (!asociacionesPalabras[palabra].includes(pista)) {
                    asociacionesPalabras[palabra].push(pista);
                }
            });
        });
    });
    
    guardarAsociacionesBot();
}

// Generar pistas automáticas inteligentes para una palabra
function generarPistasAutomaticas(palabra, categoria) {
    const pistas = [];
    const palabraLower = palabra.toLowerCase();
    
    // Diccionario MASIVO de pistas específicas por palabra
    const pistasEspecificas = {
        // Animales
        "Perro": ["mejor amigo", "ladra", "collar", "hueso", "fiel", "olfato", "cachorro", "correa", "mascota", "canino"],
        "Gato": ["maúlla", "siete vidas", "ágil", "bigotes", "ovillo", "ronroneo", "arena", "garras", "ratón", "nocturno"],
        "Elefante": ["trompa", "colmillos", "orejas grandes", "memoria", "paquidermo", "sabana", "manada", "gris", "África", "pesado"],
        "Tigre": ["rayas", "garras", "selva", "felino", "naranja", "depredador", "rugido", "solitario", "Asia", "fuerte"],
        "Delfín": ["inteligente", "mar", "salta", "eco-localización", "aleta", "mamífero", "espiráculo", "sociable", "agua", "nadar"],
        "Lobo": ["aúlla", "manada", "luna llena", "carnivoro", "bosque", "alfa", "colmillos", "perro salvaje", "invierno", "gélido"],
        "León": ["melena", "rugido", "rey", "sabana", "depredador", "caza", "orgullo", "felino", "África", "garras"],
        "Cebra": ["rayas blancas y negras", "sabana", "herbívoro", "parecido al caballo", "África", "manada", "pelaje", "rayas", "pezuñas"],
        "Jirafa": ["cuello largo", "manchas", "lengua azul", "alta", "hojas de árboles", "África", "mamífero", "patas largas", "silenciosa", "sabana"],
        "Oso": ["hibernación", "miel", "peludo", "garras", "bosque", "cueva", "omnívoro", "grande", "fuerte", "invierno"],
        "Panda": ["blanco y negro", "bambú", "China", "tierno", "oso", "en extinción", "perezoso", "pelaje", "Asia"],
        "Pingüino": ["Antártida", "no vuela", "esmoquin natural", "hielo", "nada muy bien", "aves", "frío", "huevos", "colonias", "pico"],
        "Tiburón": ["dientes afilados", "océano", "aleta dorsal", "depredador", "escualo", "mandíbula", "sangre", "agua salada", "cartilaginoso", "mar"],
        "Águila": ["vista aguda", "vuela alto", "pico curvo", "nido", "símbolo nacional", "aves", "garras", "plumas", "depredador", "cielo"],
        "Serpiente": ["reptil", "sin patas", "lengua bífida", "veneno", "escamas", "reptar", "siseo", "mudar piel", "fría", "peligrosa"],
        "Caballo": ["galope", "silla de montar", "crin", "herraduras", "equino", "jinete", "establo", "trote", "fuerte", "relincho"],
        "Vaca": ["leche", "pasto", "mugido", "cuernos", "ganadería", "ternero", "granja", "manchas", "cuero", "herbívoro"],
        "Cerdo": ["rosado", "granja", "hocico", "jamón", "lodo", "cochino", "omnívoro", "gruñido", "rabo retorcido", "cuero"],
        "Mono": ["primate", "banana", "trepa", "ágil", "ruidoso", "selva", "cola", "inteligente", "familia", "columpiarse"],
        "Gorila": ["gran tamaño", "espalda plateada", "fuerte", "selva", "primate", "inteligente", "King Kong", "herbívoro", "pacífico", "grupo"],
        "Canguro": ["salta", "bolsa", "Australia", "cola fuerte", "boxeador", "marsupial", "saltarín", "desierto", "cría", "veloz"],
        "Hipopótamo": ["río", "boca enorme", "pesado", "África", "peligroso", "semiacuático", "gris", "colmillos", "territorio", "gordo"],
        "Rinoceronte": ["cuerno", "piel gruesa", "pesado", "sabana", "amenazado", "prehistórico", "gris", "herbívoro", "solitario", "fuerte"],
        "Tortuga": ["caparazón", "lenta", "reptil", "longeva", "huevo", "marina o terrestre", "paciencia", "esconderse", "vieja", "arena"],
        "Conejo": ["orejas largas", "zanahoria", "salta", "madriguera", "dientes delanteros", "suave", "rápido", "cría", "mascota", "campo"],
        "Hámster": ["rueda", "mejillas grandes", "mascota", "pequeño", "roedor", "jaula", "comida", "nocturno", "suave", "semillas"],
        "Loro": ["habla", "plumas coloridas", "pirata", "pico", "ave", "selva", "imitación", "inteligente", "ruidoso", "tropical"],
        "Pavo Real": ["cola desplegable", "colores brillantes", "ave", "elegante", "ojos en plumas", "orgullo", "jardín", "azul y verde", "plumas", "belleza"],
        "Ballena": ["gigante", "mamífero marino", "sopla agua", "océano", "canto", "azul", "barbas", "enorme", "migración", "respirar"],
        "Pulpo": ["ocho tentáculos", "tinta", "camuflaje", "mar", "tres corazones", "succión", "inteligente", "molusco", "agua salada", "flexible"],
        "Medusa": ["transparente", "tentáculos", "pica", "mar", "gelatina", "aguijón", "agua", "corriente", "veneno"],
        "Abeja": ["poliniza", "miel", "rayas amarillas y negras", "colmena", "aguijón", "flores", "cera", "reina", "zumbido", "polen"],
        "Hormiga": ["pequeña", "fuerza", "hormiguero", "fila", "trabajadora", "reina", "insecto", "colonias", "hojas"],
        "Mariposa": ["metamorfosis", "alas coloridas", "flores", "oruga", "vuela", "insecto", "jardín", "seda", "color", "primavera"],
        "Araña": ["ocho patas", "telaraña", "seda", "veneno", "insectívoro", "arácnido", "red", "tejer", "ocho ojos", "pequeña"],
        "Escorpión": ["cola venenosa", "pinzas", "desierto", "arácnido", "nocturno", "picadura", "peligroso", "arena", "calor"],
        "Cocodrilo": ["reptil", "dientes grandes", "río", "piel dura", "lagarto gigante", "pantano", "peligroso", "agua", "mandíbula", "escamas"],
        "Camaleón": ["cambia de color", "lengua larga", "ojos independientes", "lento", "camuflaje", "colores", "insecto", "reptil", "ojos", "piel"],
        "Murciélago": ["vuela", "nocturno", "radar", "cueva", "mamífero", "sangre", "alas", "oscuridad", "colgado", "quiróptero"],
        "Zorro": ["astuto", "cola peluda", "pelaje rojizo", "nocturno", "orejas puntiagudas", "bosque", "astucia", "carnívoro", "rápido", "pelaje"],
        "Ardilla": ["nuez", "cola esponjosa", "trepa árboles", "roedor", "rápida", "bosque", "semillas", "trepar", "pequeña", "ágil"],
        "Mapache": ["máscara natural", "manos hábiles", "nocturno", "basura", "cola anillada", "lavar comida", "astuto", "manos", "pelaje"],
        "Ciervo": ["cornamenta", "bosque", "Bambi", "rápido", "herbívoro", "astas", "monte", "elegante", "rumiante", "naturaleza"],
        "Cabra": ["cuernos", "montaña", "leche", "salta", "barba", "cabrito", "trepar", "granja", "queso", "pelaje"],
        "Oveja": ["lana", "balido", "rebaño", "blanco", "herbívoro", "pastor", "cordero", "esquilar", "campo", "mansa"],
        "Gallo": ["despertador", "cresta", "plumas", "cacareo", "granja", "mañana", "ave", "plumaje", "corral"],
        "Pato": ["cuac", "nada", "pico plano", "plumas", "laguna", "nadar", "estanque", "ave", "graznido"],
        "Cisne": ["cuello elegante", "blanco", "lago", "patito feo", "majestuoso", "agua", "plumas", "elegancia", "ave", "nadar"],
        "orca": ["ballena asesina", "blanco y negro", "depredador", "océano", "inteligente", "mamífero", "aleta", "mar", "manada", "poderosa"],
        "foca": ["aletas", "frío", "hielo", "nada", "bigotes", "mamífero", "marina", "ártico", "piel", "nadar"],
        
        // Lugares
        "Playa": ["arena", "mar", "sol", "vacaciones", "sombrilla", "olas", "toalla", "castillos de arena", "verano", "brisa"],
        "Cine": ["películas", "palomitas", "pantalla grande", "butacas", "estrenos", "proyector", "sonido", "entrada", "oscuridad", "Hollywood"],
        "Estadio": ["cancha", "tribunas", "deportes", "gritos", "multitud", "fútbol", "equipo", "césped", "bandera", "marcador"],
        "Hospital": ["médicos", "enfermos", "medicina", "camillas", "urgencias", "salud", "enfermeras", "quirófano", "cura", "ambulancia"],
        "Escuela": ["estudiantes", "maestros", "pupitres", "recreo", "aprendizaje", "pizarra", "libros", "tareas", "salón", "lápices"],
        "Aeropuerto": ["aviones", "maletas", "terminal", "pasaportes", "viajes", "pista", "control", "vuelo", "embarque", "piloto"],
        "Biblioteca": ["libros", "silencio", "estantes", "estudio", "lectura", "paz", "conocimiento", "préstamo", "bibliotecario", "páginas"],
        "Museo": ["arte", "historia", "exposiciones", "cuadros", "guía", "estatua", "antigüedades", "cultura", "galería", "vitrina"],
        "Zoológico": ["animales", "jaulas", "visita", "cautiverio", "especies", "recintos", "guía", "familia", "animales salvajes", "entrada"],
        "Parque": ["árboles", "juegos", "aire libre", "pasto", "pasear", "bancos", "naturaleza", "niños", "recreo", "flores"],
        "Restaurante": ["comida", "menú", "mozo", "mesa", "propina", "cocina", "chef", "cena", "cubiertos", "cuenta"],
        "Hotel": ["habitación", "vacaciones", "recepción", "cama", "desayuno", "turista", "maletas", "botones", "llave", "descanso"],
        "Gimnasio": ["pesas", "ejercicio", "sudor", "máquinas", "entrenamiento", "músculos", "salud", "rutina", "deporte", "instructor"],
        "Farmacia": ["medicamentos", "recetas", "farmacéutico", "salud", "botiquín", "remedio", "cruz roja", "jarabe", "pastillas", "venta"],
        "Supermercado": ["carrito", "comida", "cajas", "pasillos", "compras", "ofertas", "alimentos", "cajero", "estantes", "productos"],
        "Banco": ["dinero", "cajero", "cuentas", "ahorros", "intereses", "caja fuerte", "tarjeta", "crédito", "préstamo", "finanzas"],
        "Iglesia": ["rezo", "campanas", "religión", "altar", "misa", "fe", "cruz", "sacerdote", "espiritualidad", "templo"],
        "Castillo": ["rey", "murallas", "foso", "historia", "fortaleza", "torre", "caballero", "princesa", "medieval", "puente levadizo"],
        "Cárcel": ["presos", "celdas", "guardias", "rejas", "condena", "prisión", "encierro", "justicia", "muros", "vigilancia"],
        "Bosque": ["árboles", "naturaleza", "senderos", "pinos", "fauna", "vegetación", "aire puro", "montaña", "aventura", "verde"],
        "Desierto": ["arena", "calor", "camellos", "dunas", "oasis", "sed", "sol", "escorpión", "seco"],
        "Montaña": ["altura", "nieve", "escalar", "pico", "senderismo", "aire", "cumbre", "rocas", "paisaje", "frío"],
        "Isla": ["mar por todos lados", "palmeras", "aislada", "náufrago", "bote", "playa", "coco", "paraíso", "archipiélago", "agua"],
        "Volcán": ["lava", "magma", "erupción", "cráter", "ceniza", "fuego", "montaña", "geología", "humo", "calor"],
        "Río": ["agua corriente", "peces", "cauce", "orilla", "desembocadura", "corriente", "agua dulce", "puente", "barca", "pescar"],
        "Cascada": ["caída de agua", "altura", "catarata", "ruido", "naturaleza", "salto", "agua", "selva", "paisaje", "arcoíris"],
        "Puerto": ["barcos", "contenedores", "mar", "muelle", "aduana", "embarcación", "comercio", "agua", "carga", "grúas"],
        "Estación de Tren": ["vías", "andén", "vagones", "pasajeros", "locomotoras", "ferrocarril", "ticket", "viaje", "máquina", "horario"],
        "Gasolinera": ["nafta", "combustible", "autos", "manguera", "ruta", "parada", "servicio", "tienda", "viaje", "repostar"],
        "Panadería": ["pan", "facturas", "harina", "horno", "olor rico", "repostería", "desayuno", "panadero", "trigo"],
        "Peluquería": ["corte", "pelo", "tijeras", "espejo", "peinado", "estética", "champú", "sillón", "barbero", "cambio de look"],
        "Teatro": ["actores", "escenario", "funciones", "aplausos", "telón", "obra", "drama", "comedia", "público"],
        "Casino": ["apuestas", "cartas", "ruleta", "azar", "fichas", "juego", "suerte", "dados", "dinero", "luces"],
        "Circo": ["payasos", "carpa", "acrobacias", "malabares", "espectáculo", "magia", "niños", "risas", "trapecista", "función"],
        "Acuario": ["peces", "peceras", "agua", "tiburones", "exhibición", "marino", "coral", "cristal", "vida marina", "buceo"],
        "Planetario": ["estrellas", "espacio", "telescopio", "domo", "astronomía", "universo", "planetas", "galaxia", "noche", "cielo"],
        "Cementerio": ["tumbas", "lápidas", "flores", "silencio", "muertos", "paz", "recuerdo", "sepultura", "luto", "parque"],
        "Granja": ["animales", "campo", "cultivo", "tractor", "establo", "granero", "cosecha", "campesino", "vida rural", "gallinero"],
        "Puente": ["cruce", "río", "altura", "estructura", "camino", "ingeniería", "conexión", "paso", "metal", "concreto"],
        "Cabaña": ["madera", "bosque", "acogedora", "montaña", "chimenea", "refugio", "vacaciones", "rústico", "leña", "tranquilidad"],
        "Cueva": ["oscuridad", "murciélagos", "estalactitas", "rocas", "eco", "caverna", "prehistoria", "exploración", "frío", "piedra"],
        "Jungla": ["selva densa", "mucha lluvia", "animales salvajes", "verde", "Tarzán", "exótico", "lianas", "humedad", "calor", "vegetación"],
        "Pantano": ["agua estancada", "cocodrilos", "lodo", "mosquitos", "humedad", "ciénaga", "juncos", "ranas", "sucio", "turbio"],
        
        // Objetos
        "Lámpara": ["luz", "bombilla", "noche", "escritorio", "encender", "brillo", "pantalla", "cable", "habitación", "leer"],
        "Reloj": ["tiempo", "horas", "agujas", "muñeca", "tic-tac", "minutos", "segundo", "alarma", "puntualidad", "digital"],
        "Espejo": ["reflejo", "cristal", "verse", "baño", "vanidad", "marco", "imagen", "luz", "tocador", "mirarse"],
        "Martillo": ["clavos", "herramienta", "golpear", "carpintería", "mango", "fuerza", "madera", "construcción", "bricolaje", "pesado"],
        "Tenedor": ["comer", "pinchar", "cubierto", "cuatro puntas", "metal", "mesa", "cocina", "almuerzo", "pincho", "cena"],
        "Cuchillo": ["cortar", "filo", "cocina", "peligroso", "mango", "afilado", "sierra", "metal", "cubierto", "trocear"],
        "Cuchara": ["sopa", "cubierto", "cóncava", "tomar", "postre", "líquido", "cereal", "redonda"],
        "Plato": ["vajilla", "redondo", "comida", "porcelana", "mesa", "cerámica", "hondo", "llano", "servir", "lavar"],
        "Vaso": ["beber", "líquido", "cristal", "transparente", "sed", "agua", "jugo", "copa", "cocina", "refresco"],
        "Sartén": ["cocinar", "freír", "mango", "fuego", "teflón", "huevo", "aceite", "cocina", "calor", "comida"],
        "Llave": ["abrir", "cerradura", "metal", "llavero", "puerta", "seguridad", "entrada", "casa", "girar", "acceso"],
        "Candado": ["seguridad", "llave", "cadena", "cerrar", "protección", "metal", "cerradura", "maleta", "resguardar", "acero"],
        "Teléfono": ["llamadas", "celular", "pantalla", "comunicación", "aplicaciones", "móvil", "batería", "red", "mensaje", "chat"],
        "Computadora": ["pantalla", "teclado", "internet", "trabajo", "procesador", "ratón", "software", "datos", "memoria", "portátil"],
        "Televisor": ["canales", "pantalla", "control remoto", "series", "salón", "películas", "noticias", "imagen", "cable", "entretenimiento"],
        "Radio": ["música", "locutor", "sintonizar", "ondas", "antena", "audio", "noticias", "estación", "fm/am", "escuchar"],
        "Cámara": ["fotos", "lente", "flash", "recuerdos", "disparador", "imagen", "video", "digital", "fotógrafo", "capturar"],
        "Libro": ["páginas", "leer", "autor", "historia", "biblioteca", "novela", "papel", "literatura", "portada", "conocimiento"],
        "Lápiz": ["escribir", "grafito", "borrar", "dibujo", "escolar", "madera", "punta", "mina", "trazo", "nota"],
        "Mochila": ["espalda", "libros", "cargar", "correas", "escolar", "viaje", "bulto", "hombros", "bolsillos"],
        "Maleta": ["viaje", "ropa", "aeropuerto", "ruedas", "equipaje", "vacaciones", "bulto", "cargar", "avión", "turismo"],
        "Paraguas": ["lluvia", "cubrirse", "mango", "abrir", "mojarse", "agua", "cielo", "tormenta", "plegable", "sombra"],
        "Gafas": ["vista", "lentes", "ojos", "ver mejor", "montura", "graduación", "sol", "cristales", "leer", "óptico"],
        "Billetera": ["dinero", "tarjetas", "bolsillo", "cuero", "documentos", "cartera", "billetes", "pagos", "monedero"],
        "Moneda": ["dinero", "metal", "cara o cruz", "cambio", "valor", "centavos", "redondo", "billetera", "pago"],
        "Destornillador": ["tornillo", "herramienta", "girar", "punta", "ajustar", "bricolaje", "mano", "mango", "reparar"],
        "Tijeras": ["cortar", "papel", "dos hojas", "dedos", "manualidades", "filo", "peluquería", "manos", "acero"],
        "Peine": ["pelo", "desenredar", "púas", "peinado", "cabeza", "cepillo", "belleza", "cabello", "plástico", "estética"],
        "Jabón": ["limpieza", "burbujas", "baño", "espuma", "olor", "aseo", "higiene", "ducha", "pastilla", "fragancia"],
        "Toalla": ["secarse", "baño", "tela", "playa", "suave", "algodón", "agua", "ducha", "secado", "absorbente"],
        "Almohada": ["dormir", "cabeza", "cama", "suave", "funda", "descanso", "sueños", "plumas", "nocturno", "comodidad"],
        "Manta": ["frío", "cama", "abrigo", "taparse", "suave", "invierno", "frazada", "calor", "lana"],
        "Silla": ["sentarse", "cuatro patas", "respaldo", "mueble", "mesa", "asiento", "madera", "oficina", "comedor"],
        "Mesa": ["mueble", "patas", "comer", "superficie", "madera", "comedor", "escritorio", "cocina", "apoyo", "cuatro patas"],
        "Sofá": ["salón", "sentarse", "cómodo", "cojines", "televisión", "sillón", "sala", "descanso", "tela", "mueble"],
        "Cama": ["dormir", "colchón", "sábanas", "noche", "descanso", "sueño", "almohada", "habitación", "frazada", "descansar"],
        "Bicicleta": ["dos ruedas", "pedales", "cadena", "transporte", "casco", "ciclista", "deporte", "aire libre", "velocidad", "paseo"],
        "Guitarra": ["cuerdas", "música", "instrumento", "acústica", "trastes", "notas", "melodía", "músico", "tocar", "sonido"],
        "Piano": ["teclas", "blancas y negras", "música", "instrumento", "notas", "clásico", "partitura", "músico", "concierto", "cola"],
        "Pelota": ["redonda", "jugar", "deporte", "patear", "rebote", "fútbol", "balón", "juego", "inflar", "esfera"],
        "Raqueta": ["tenis", "cuerdas", "red", "golpe", "deporte", "pelota", "juego", "cancha", "mango"],
        "Botella": ["envase", "líquido", "tapa", "plástico", "vidrio", "agua", "bebida", "reciclar", "sed"],
        "Encendedor": ["fuego", "llama", "cigarrillo", "gas", "chispa", "fósforo", "calor", "encender", "bolsillo"],
        "trompeta": ["viento", "metal", "boquilla", "tres pistones", "música", "jazz", "soplar", "sonido", "orquesta", "instrumento"],
        "Escoba": ["barrer", "piso", "cerdas", "palo", "limpieza", "suciedad", "barrido", "casa", "higiene", "orden"],
        "bateria": ["percusión", "palillos", "ritmo", "música", "platillos", "tambor", "baquetas", "grupo", "rock", "instrumento"],
        "bajo": ["cuerdas", "música", "grave", "instrumento", "ritmo", "banda", "sonido", "eléctrico", "notas", "músico"],
        // Futbolistas
        "Puskás": ["húngaro", "Real Madrid", "premio al mejor gol", "histórico", "zurdo", "leyenda", "goleador", "cañonero", "Madrid", "Budapest"],
        "Eusébio": ["pantera negra", "Portugal", "Benfica", "goleador", "leyenda", "mundial", "delantero", "histórico", "goles", "Mozambique"],
        "Gerd Müller": ["el torpedo", "alemán", "Bayern Munich", "goleador histórico", "mundialista", "9", "delantero", "implacable", "área", "goleador"],
        "George Best": ["quinto Beatle", "Irlanda del Norte", "United", "talento", "rebelde", "extremo", "ídolo", "Old Trafford", "genialidad"],
        "Yashin": ["araña negra", "portero", "Unión Soviética", "Balón de Oro", "gorra", "paradas", "leyenda", "portería", "histórico", "negro"],
        "Baresi": ["defensa", "Milan", "italiano", "capitán", "número 6", "leyenda", "central", "líder", "líbero"],
        "Maldini": ["eterno capitán", "Milan", "defensa", "italiano", "elegancia", "lateral", "leyenda", "cinco Champions", "lealtad", "histórico"],
        "Passarella": ["gran capitán", "defensor", "argentino", "dos mundiales", "River", "caudillo", "central", "personalidad", "gol", "leyenda"],
        "Kempes": ["el Matador", "goleador del 78", "argentino", "Valencia", "delantero", "mundial", "goles", "melena", "histórico", "Argentina"],
        "Batistuta": ["Bati-gol", "goleador", "Argentina", "Fiorentina", "número 9", "potencia", "remate", "selección", "delantero", "implacable"],
        "Figo": ["Portugal", "Madrid y Barça", "extremo", "Balón de Oro", "técnica", "polémica", "talento", "regate", "capitán", "histórico"],
        "Puyol": ["Tarzán", "defensa", "Barcelona", "capitán", "garra", "corazón", "entrega", "central", "líder", "rulos"],
        "Pirlo": ["el arquitecto", "italiano", "mediocampista", "tiros libres", "Juventus", "visión", "elegancia", "clase", "balón", "mediocentro"],
        "Lahm": ["lateral", "alemán", "capitán del 2014", "Bayern", "polivalente", "inteligente", "defensa", "orden", "campeón", "leyenda"],
        "Gerrard": ["Liverpool", "capitán", "mediocampista", "potente remate", "inglés", "leyenda", "Anfield", "líder", "garra", "mediocentro"],
        "Lampard": ["Chelsea", "mediocampista goleador", "inglés", "leyenda", "técnico", "llegada", "remate", "Stamford Bridge", "historia", "8"],
        "Scholes": ["Manchester United", "colorado", "mediocampista", "visión", "remate", "clase", "pases", "leyenda", "Old Trafford", "técnica"],
        "Raúl": ["el Ángel de Madrid", "número 7", "delantero", "español", "leyenda", "capitán", "Real Madrid", "goleador", "historia", "Champions"],
        "Shevchenko": ["ucraniano", "Milan", "delantero", "Balón de Oro", "goleador", "implacable", "7", "punta", "historia", "Milán"],
        "Van Basten": ["holandés", "volea histórica", "Milan", "delantero", "Balón de Oro", "elegancia", "9", "goleador", "cisne", "histórico"],
        "Bergkamp": ["holandés", "control de balón", "Arsenal", "técnico", "elegancia", "mago", "gol", "Premier League", "talento", "control"],
        "Totti": ["il Capitano", "Roma", "italiano", "número 10", "lealtad", "eterno", "gladiador", "gol", "leyenda", "bandera"],
        "Del Piero": ["Pinturicchio", "Juventus", "italiano", "delantero", "tiros libres", "10", "ídolo", "historia", "gol", "elegancia"],
        "Klose": ["máximo goleador en mundiales", "alemán", "delantero", "cabezazo", "eficaz", "mundialista", "goles", "remate", "historia", "punta"],
        "Foden": ["City", "inglés", "joven talento", "zurdo", "Pep Guardiola", "extremo", "calidad", "regate", "Phil", "futuro"],
        "Saka": ["Arsenal", "inglés", "extremo", "joven", "rápido", "talento", "Londres", "selección", "zurdo", "velocidad"],
        "Rodri": ["City", "pivote", "mediocampista", "español", "gol en final Champions", "equilibrio", "motor", "inteligencia", "posesión"],
        "Valverde": ["el Pajarito", "uruguayo", "Madrid", "potencia", "despliegue", "garra", "todoterreno", "remate", "Federico", "motor"],
        "Courtois": ["portero", "belga", "Madrid", "alto", "atajadas", "muro", "gigante", "guantes", "seguridad", "Champions"],
        "Alisson": ["portero", "brasileño", "Liverpool", "barba", "seguro", "reflejos", "portería", "selección", "arquerazo", "salida"],
        "Van Dijk": ["defensa", "holandés", "Liverpool", "fuerte", "liderazgo", "central", "muro", "altura", "capitán"],
        "Salah": ["faraón", "egipcio", "Liverpool", "zurdo", "velocidad", "goles", "extremo", "estrella", "Mo", "África"],
        "Son": ["surcoreano", "Tottenham", "rápido", "delantero", "Premier League", "velocidad", "goleador", "estrella", "Asia", "remate"],
        "Gavi": ["joven", "Barcelona", "intensidad", "mediocampista", "español", "garra", "talento", "futuro", "cantera", "pelea"],
        "James Rodríguez": ["colombiano", "zurdo", "gol mundial 2014", "10", "talento", "calidad", "pase", "remate", "selección", "zurda"],
        "Garrincha": ["la alegría del pueblo", "brasileño", "gambeta", "piernas arqueadas", "campeón"],
        "Zico": ["Pelé blanco", "Flamengo", "brasileño", "tiros libres", "10", "zurdo", "histórico", "goleador", "Brasil", "ídolo"],
        "Socrates": ["doctor", "brasileño", "elegancia", "mediocampista", "barbudo", "capitán", "Corinthians", "inteligencia", "altura", "leyenda"],
        "Falcao": ["Tigre", "colombiano", "delantero", "Atlético", "goleador", "9", "América", "remate", "colombiano", "striker"],
        "Chilavert": ["portero", "paraguayo", "goles de tiro libre", "temperamento", "Velez", "loco", "Paraguay", "arco", "carácter", "leyenda"],
        "Valderrama": ["el Pibe", "colombiano", "pelo rubio rizado", "mediocampista", "técnica", "afro", "10", "pases", "icono", "Colombia"],
        "Forlán": ["Cachavacha", "uruguayo", "mejor jugador 2010", "rubio", "remate", "delantero", "Atlético", "Uruguay", "goleador", "bota de oro"],
        "Cavani": ["el Matador", "uruguayo", "delantero", "pelo largo", "goleador", "París", "9", "Uruguay", "potencia", "celebración"],
        "Godín": ["defensa", "uruguayo", "Atlético de Madrid", "cabezazo", "garra", "central", "capitán", "líder", "Uruguay", "muro"],
        "Bebeto": ["brasileño", "festejo del bebé", "delantero", "campeón 94", "técnica", "gol", "baile", "bebé", "mundial", "sonrisa"],
        "Vieri": ["el Toro", "italiano", "delantero", "fuerte", "goleador", "Inter", "potencia", "9", "cabeza", "área"],
        "Nedved": ["checo", "Juventus", "rubio", "Balón de Oro", "mediocampista", "potencia", "pelo largo", "República Checa", "leyenda", "motor"],
        "Stoichkov": ["búlgaro", "Barcelona", "carácter", "zurdo", "Balón de Oro", "delantero", "Bulgaria", "temperamento", "94", "rebelde"],
        "Hagi": ["Maradona de los Cárpatos", "rumano", "10", "talento", "zurdo", "Rumania", "pases", "Galatasaray", "técnica", "leyenda"],
        "Kahn": ["el Titán", "portero", "alemán", "Bayern", "carácter", "2002", "grito", "líder", "puños", "fuerte"],
        "Schmeichel": ["danés", "portero", "United", "gran envergadura", "leyenda", "Dinamarca", "Peter", "reflejos", "altura", "manos"],
        "Van der Sar": ["holandés", "portero", "Ajax", "alto", "seguro", "Holanda", "veterano", "Edwin", "altura", "longevidad"],
        "Hugo Sánchez": ["mexicano", "Real Madrid", "chilenas", "goleador", "rulos", "México", "acrobacia", "9", "área", "ídolo"],
        "Rafa Márquez": ["Káiser", "mexicano", "defensa", "Barcelona", "salida limpia", "central", "México", "capitán", "líder", "balón"],
        "Amengol": ["argentino", "defensa", "histórico", "River", "garra", "central", "leyenda", "veterano", "Argentina", "experiencia"],
        "Garrincha": ["alegría del pueblo", "brasileño", "piernas torcidas", "regate", "58 y 62", "Botafogo", "extremo", "Brasil", "leyenda", "dribbling"],
        "Pelé": ["O Rei", "brasileño", "3 mundiales", "10", "Santos", "rey", "histórico", "goles", "leyenda", "Brasil"],
        "Maradona": ["el Diego", "argentino", "10", "gol del siglo", "mano de Dios", "D10S", "Nápoles", "zurdo", "Argentina", "leyenda"],
        "Messi": ["La Pulga", "argentino", "8 Balones de Oro", "zurdo", "el mejor", "Barcelona", "Inter Miami", "Leo", "rosarino", "10"],
        "Cristiano Ronaldo": ["CR7", "portugués", "bicho", "goles", "trabajo duro", "Portugal", "siu", "remate", "dedicación", "récords"],
        "Neymar": ["brasileño", "regate", "PSG", "10", "magia", "Ney", "pirueta", "talento", "Brasil", "habilidad"],
        "Mbappé": ["tortuga", "francés", "velocidad", "Madrid", "campeón del mundo", "Kylian", "Francia", "rapidez", "joven", "carrera"],
        "Haaland": ["androide", "noruego", "City", "goles", "fuerza", "robot", "Erling", "Noruega", "potencia", "máquina"],
        "Lewandowski": ["polaco", "delantero", "goleador", "Bayern/Barça", "9", "Robert", "Polonia", "remate", "histórico", "área"],
        "Benzema": ["el gato", "francés", "Madrid", "Balón de Oro", "delantero técnico", "Karim", "Francia", "elegancia", "9", "clase"],
        "Modric": ["croata", "mediocampista", "Madrid", "Balón de Oro", "exterior", "Luka", "Croacia", "pases", "10", "magia"],
        "Kroos": ["alemán", "precisión", "Madrid", "mediocampista", "retiro reciente", "Toni", "Alemania", "pases", "visión", "exactitud"],
        "De Bruyne": ["belga", "City", "asistencias", "visión", "colorado", "Kevin", "Bélgica", "pases", "precisión", "zurdo"],
        "Kanté": ["francés", "pulmones", "humilde", "mediocampista", "recuperador", "N'Golo", "Francia", "sonrisa", "motor", "defensa"],
        "Casemiro": ["brasileño", "muro", "United/Madrid", "mediocampista defensivo", "fuerza", "Case", "Brasil", "corte", "amarillas", "pivote"],
        "Busquets": ["pulpo", "Barcelona", "mediocampista", "inteligencia", "español", "Sergio", "España", "visión", "pivote", "corte"],
        "Xavi": ["arquitecto", "Barcelona", "mediocampista", "pases", "visión", "Hernández", "España", "6", "control", "cerebro"],
        "Iniesta": ["el cerebro", "gol del mundial", "Barcelona", "mediocampista", "magia", "Andrés", "España", "pases", "2010", "zurdo"],
        "Zidane": ["Zizou", "francés", "elegancia", "Madrid", "cabezazo", "Zinedine", "Francia", "calvo", "roulette", "clase"],
        "Ronaldo": ["el fenómeno", "brasileño", "9", "regate", "goles", "R9", "Brasil", "velocidad", "potencia", "leyenda"],
        "Ronaldinho": ["sonrisa", "brasileño", "magia", "Barcelona", "regate", "Dinho", "Brasil", "alegría", "talento", "caño"],
        "Romario": ["el Chapulín", "brasileño", "goleador de área", "campeón 94", "corto", "Baixinho", "Brasil", "9", "goles", "rapaz"],
        "Rivaldo": ["brasileño", "zurdo", "Barcelona", "Balón de Oro", "elegante", "Brasil", "potencia", "bicicleta", "remate", "talento"],
        "Kaká": ["brasileño", "Milan", "Balón de Oro", "elegante", "potencia", "Ricardo", "Brasil", "velocidad", "remate", "clase"],
        "Roberto Carlos": ["potencia", "lateral izquierdo", "brasileño", "tiros libres", "velocidad", "piernas", "Brasil", "Madrid", "zurdo", "cohete"],
        "Cafu": ["lateral derecho", "brasileño", "dos mundiales", "recorrido", "leyenda", "Marcos", "Brasil", "capitán", "sonrisa", "banda"],
        "Thiago Silva": ["defensa", "brasileño", "PSG", "experiencia", "líder", "central", "Brasil", "veterano", "elegancia", "capitán"],
        "Marcelo": ["lateral izquierdo", "brasileño", "técnica", "Madrid", "pelo afro", "Brasil", "ataque", "regate", "zurdo", "títulos"],
        "Dani Alves": ["lateral derecho", "brasileño", "más títulos", "ofensivo", "Barça", "Daniel", "Brasil", "ataque", "tatuajes", "banda"],
        "Ramos": ["defensa", "central", "Madrid", "goles de cabeza", "capitán", "Sergio", "España", "tarjetas", "líder", "temperamento"],
        "Piqué": ["defensa", "Barcelona", "alto", "presidencia King's League", "español", "Gerard", "España", "central", "Shakira", "títulos"],
        "Kompany": ["defensa", "City", "belga", "capitán", "líder", "Vincent", "Bélgica", "central", "fuerza", "Burnley"],
        "Terry": ["defensa", "Chelsea", "capitán", "inglés", "líder", "John", "Inglaterra", "central", "garra", "entrega"],
        "Ferdinand": ["defensa", "United", "inglés", "central", "elegante", "Rio", "Inglaterra", "clase", "velocidad", "salida"],
        "Vidic": ["defensa", "United", "serbio", "fuerte", "muro", "Nemanja", "Serbia", "central", "duro", "agresivo"],
        "Chiellini": ["defensa", "italiano", "fuerte", "Juventus", "central", "Giorgio", "Italia", "mordisco", "garra", "líder"],
        "Bonucci": ["defensa", "italiano", "salida de balón", "Juventus", "central", "Leonardo", "Italia", "pases", "líder", "veterano"],
        "Cannavaro": ["defensa", "Balón de Oro", "italiano", "campeón 2006", "central", "Fabio", "Italia", "mundial", "capitán", "bajo"],
        "Nesta": ["defensa", "italiano", "elegancia", "Milan", "central", "Alessandro", "Italia", "clase", "técnica", "leyenda"],
        "Thuram": ["defensa", "francés", "campeón 98", "fuerte", "lateral/central", "Lilian", "Francia", "dos goles", "potencia", "leyenda"],
        "Neuer": ["portero líbero", "alemán", "Bayern", "campeón 2014", "gigante", "Manuel", "Alemania", "barrendero", "salidas", "altura"],
        "Buffon": ["portero", "italiano", "leyenda", "longevidad", "Juventus", "Gigi", "Italia", "récord", "veterano", "1"],
        "Casillas": ["San Iker", "portero", "español", "Madrid", "paradas milagrosas", "Iker", "España", "1", "capitán", "manos"],
        "Oblak": ["portero", "esloveno", "Atlético de Madrid", "seguro", "reflejos", "Jan", "Eslovenia", "muralla", "paradas", "13"],
        "Ter Stegen": ["portero", "alemán", "Barcelona", "juego de pies", "reflejos", "Marc-André", "Alemania", "salida", "balón", "moderno"],
        "Ederson": ["portero", "brasileño", "City", "juego de pies", "tatuajes", "Moraes", "Brasil", "pase largo", "salida", "cuello"],
        "Donnarumma": ["portero", "italiano", "PSG", "alto", "joven", "Gianluigi", "Italia", "gigante", "penales", "euro"],
        "Navas": ["halcón", "portero", "costarricense", "Madrid", "reflejos", "Keylor", "Costa Rica", "paradas", "pequeño", "Champions"],
        "De Gea": ["portero", "español", "United", "reflejos bajo palos", "flaco", "David", "España", "paradas", "manos", "alto"],
        "Cech": ["portero", "casco", "checo", "Chelsea", "leyenda", "Petr", "República Checa", "lesión", "portero", "Arsenal"],
        "Henry": ["Tití", "delantero", "francés", "Arsenal", "velocidad", "Thierry", "Francia", "potencia", "14", "zurdo"],
        "Drogba": ["delantero", "Costa de Marfil", "Chelsea", "fuerza", "leyenda", "Didier", "marfileño", "potencia", "goles", "11"],
        "Eto'o": ["delantero", "camerunés", "Inter", "velocidad", "goles", "Samuel", "Camerún", "9", "rapidez", "triplete"],
        "Weah": ["delantero", "liberiano", "Balón de Oro", "presidente", "potencia", "George", "Liberia", "Milan", "leyenda", "político"],
        "Suárez": ["pistolero", "uruguayo", "delantero", "9", "goles", "Luis", "Uruguay", "mordiscos", "Barcelona", "Liverpool"],
        "Agüero": ["Kun", "argentino", "delantero", "City", "streaming", "Sergio", "Argentina", "gol vs QPR", "retirado", "corazón"],
        "Ibrahimovic": ["Ibra", "sueco", "delantero", "acrobacias", "ego", "Zlatan", "Suecia", "artes marciales", "gigante", "tatuajes"],
        "Rooney": ["Bad Boy", "inglés", "delantero", "United", "potencia", "Wayne", "Inglaterra", "récord", "10", "goleador"],
        "Van Persie": ["holandés", "delantero", "zurdo", "gol de palomita", "United", "Robin", "Holanda", "Arsenal", "mundial", "volea"],
        "Griezmann": ["el principito", "francés", "Atlético", "mediapunta", "pelo corto/largo", "Antoine", "Francia", "baile", "7", "campeón"],
        "Pogba": ["mediocampista", "francés", "talento", "peinados", "potente", "Paul", "Francia", "Juventus", "United", "dabbing"],
        "Vieira": ["mediocampista", "francés", "Arsenal", "fuerte", "líder", "Patrick", "Francia", "capitán", "alto", "pivote"],
        "Makélélé": ["mediocampista", "francés", "recuperador", "pequeño", "Madrid/Chelsea", "Claude", "Francia", "pivote", "rol defensivo", "eficaz"],
        "Seedorf": ["mediocampista", "holandés", "fuerte", "campeón con 3 equipos", "elegante", "Clarence", "Holanda", "Milan", "potencia", "técnico"],
        "Gattuso": ["mediocampista", "italiano", "garra", "fuerte", "Milan", "Rino", "Italia", "intensidad", "recuperador", "carácter"],
        "Ballack": ["mediocampista", "alemán", "potente", "líder", "13", "Michael", "Alemania", "remate", "Chelsea", "capitán"],
        "Özil": ["mago de Oz", "alemán", "asistencias", "ojos grandes", "10", "Mesut", "Alemania", "pases", "Arsenal", "Madrid"],
        "Dybala": ["la Joya", "argentino", "zurdo", "Roma", "máscara", "Paulo", "Argentina", "10", "festejo", "talento"],
        "Lautaro": ["el Toro", "argentino", "Inter", "delantero", "9", "Martínez", "Argentina", "goleador", "potencia", "dupla"],
        "Julián Álvarez": ["la Araña", "argentino", "City", "delantero", "campeón", "Julián", "Argentina", "9", "goleador", "polivalente"],
        "Enzo Fernández": ["mediocampista", "argentino", "Chelsea", "mejor joven mundial", "talento", "Enzo", "Argentina", "River", "pase", "visión"],
        "Mac Allister": ["mediocampista", "argentino", "Liverpool", "colorado", "pases", "Alexis", "Argentina", "Brighton", "corazón", "talento"],
        "Dibu Martínez": ["portero", "argentino", "penales", "atajadas", "Villa", "Emiliano", "Argentina", "bailes", "héroe", "mundial"],
        "Otamendi": ["el General", "defensa", "argentino", "central", "tatuajes", "Nicolás", "Argentina", "City", "garra", "líder"],
        "Cuti Romero": ["defensa", "argentino", "central", "agresivo", "Tottenham", "Cristian", "Argentina", "intensidad", "fuerte", "joven"],
        "Tagliafico": ["lateral izquierdo", "argentino", "Lyon", "despliegue", "entrega", "Nicolás", "Argentina", "Ajax", "zurdo", "pequeño"],
        "Montiel": ["cachete", "lateral derecho", "penal decisivo", "argentino", "Sevilla", "Gonzalo", "Argentina", "campeón", "lateral", "derecho"],
        "Riquelme": ["Román", "argentino", "Boca", "10", "pausa", "Juan Román", "Argentina", "toques", "zurdo", "ídolo"],
        "Verón": ["la Brujita", "argentino", "mediocampista", "Estudiantes", "visión", "Juan Sebastián", "Argentina", "United", "pases", "largo"],
        "Aimar": ["el Payaso", "argentino", "mediocampista", "talento", "ídolo de Messi", "Pablo", "Argentina", "Valencia", "River", "zurdo"],
        "Ortega": ["el Burrito", "argentino", "gambeta", "River", "10", "Ariel", "Argentina", "regate", "técnico", "ídolo"],
        "Redondo": ["mediocampista", "argentino", "taco de Old Trafford", "elegancia", "Madrid", "Fernando", "Argentina", "clase", "pelo largo", "pivote"],
        "Simeone": ["el Cholo", "argentino", "mediocampista", "garra", "técnico Atlético", "Diego", "Argentina", "líder", "entrenador", "carácter"],
        "Mascherano": ["el Jefecito", "argentino", "mediocampista", "entrega", "Barcelona", "Javier", "Argentina", "defensa", "Liverpool", "corazón"],
        "Zanetti": ["el Pupi", "argentino", "lateral/medio", "Inter", "eterno", "Javier", "Argentina", "capitán", "longevidad", "4"],
        "Crespo": ["Valdanito", "argentino", "delantero", "goleador", "elegante", "Hernán", "Argentina", "Milan", "Chelsea", "remate"],
        "Palermo": ["el Titán", "argentino", "Boca", "goles increíbles", "optimista del gol", "Martín", "Argentina", "9", "errores", "potencia"],
        "Tevez": ["el Apache", "argentino", "delantero", "garra", "city", "Carlos", "Argentina", "potencia", "10", "fuerte"],
        "Higuaín": ["Pipa", "argentino", "delantero", "goles", "Madrid/Juventus", "Gonzalo", "Argentina", "9", "área", "definición"],
        "Di María": ["el Fideo", "argentino", "goles en finales", "zurdo", "Benfica", "Ángel", "Argentina", "asistencias", "velocidad", "PSG"],
        "Papu Gómez": ["argentino", "baile", "mediocampista", "Sevilla", "pequeño", "Alejandro", "Argentina", "zurdo", "talento", "festejo"],
        "Lo Celso": ["mediocampista", "argentino", "zurdo", "pases", "Tottenham", "Giovani", "Argentina", "técnico", "Betis", "talento"],
        "Paredes": ["mediocampista", "argentino", "pegada", "Roma", "5", "Leandro", "Argentina", "pases", "pivote", "pelo largo"],
        "Acuña": ["el Huevo", "argentino", "lateral izquierdo", "fuerte", "Sevilla", "Marcos", "Argentina", "potencia", "tatuajes", "carácter"],
        
        // Series
        "Breaking Bad": ["Walter White", "metanfetamina", "Heisenberg", "química", "desierto", "Jesse Pinkman", "autolavado", "azul", "cáncer", "abogado"],
        "Stranger Things": ["Hawkins", "Demogorgon", "años 80", "Eleven", "Upside Down", "niños", "bicicletas", "experimentos", "monstruos", "Netflix"],
        "Game of Thrones": ["dragones", "Trono de Hierro", "Invierno llega", "Westeros", "medieval", "Jon Snow", "Daenerys", "intriga", "batallas", "HBO"],
        "The Office": ["Dunder Mifflin", "Scranton", "mockumentary", "Michael Scott", "oficina", "papel", "cámara", "Jim y Pam", "comedia", "empleados"],
        "Friends": ["Central Perk", "seis amigos", "Nueva York", "café", "Ross y Rachel", "Monica", "Chandler", "Joey", "Phoebe", "apartamento"],
        "Dark": ["viajes en el tiempo", "alemana", "bucles temporales", "Winden", "tres generaciones", "cueva", "paradojas", "familia", "apocalipsis", "reloj"],
        "La Casa de Papel": ["Bella Ciao", "máscaras de Dalí", "Profesor", "atraco", "Tokio", "Fábrica de Moneda", "rehenes", "nombres de ciudades", "plan", "española"],
        "The Crown": ["Reina Isabel", "familia real", "británica", "historia", "política", "monarquía", "Palacio de Buckingham", "drama", "reinado", "Netflix"],
        "Black Mirror": ["tecnología", "distópico", "episodios independientes", "futuro oscuro", "reflexión", "smartphones", "redes sociales", "crítica", "ciencia ficción", "antología"],
        "The Mandalorian": ["Baby Yoda", "Grogu", "Star Wars", "cazarrecompensas", "western espacial", "armadura", "Mandalore", "Disney+", "galaxia", "bebé"],
        "The Witcher": ["Geralt", "brujo", "monstruos", "espadas", "fantasía", "Yennefer", "Ciri", "magia", "destino", "mutante"],
        "Peaky Blinders": ["Birmingham", "Thomas Shelby", "gángsters", "años 20", "gorras con cuchillas", "Inglaterra", "whisky", "hermanos", "apuestas", "Cillian Murphy"],
        "The Boys": ["superhéroes corruptos", "Homelander", "Vought", "violencia", "sátira", "corporación", "poderes", "venganza", "Butcher", "Amazon"],
        "Narcos": ["Pablo Escobar", "Colombia", "DEA", "drogas", "Medellín", "cartel", "agentes", "narcotráfico", "años 80", "violencia"],
        "Better Call Saul": ["Saul Goodman", "abogado", "Breaking Bad", "prequel", "Albuquerque", "Jimmy McGill", "Kim Wexler", "tribunales", "transformación", "moralmente gris"],
        "Sherlock": ["detective", "Benedick Cumberbatch", "Londres", "casos", "John Watson", "221B", "deducción", "moderna", "misterio", "BBC"],
        "The Walking Dead": ["zombies", "apocalipsis", "Rick Grimes", "supervivencia", "muertos vivientes", "grupo", "refugio", "mordida", "violencia", "AMC"],
        "Suits": ["abogados", "Nueva York", "Harvey Specter", "firma legal", "trajes", "Mike Ross", "casos", "corporativo", "mentira", "USA"],
        "Succession": ["familia rica", "imperio mediático", "hermanos", "poder", "Logan Roy", "dinero", "traiciones", "negocios", "lujo", "HBO"],
        "True Detective": ["detectives", "casos oscuros", "antología", "Matthew McConaughey", "misterio", "Luisiana", "filosofía", "investigación", "secretos", "HBO"],
        "The Last of Us": ["hongos zombies", "Joel y Ellie", "apocalipsis", "videojuego adaptado", "supervivencia", "infectados", "padre e hija", "HBO", "cordyceps", "viaje"],
        "Ozark": ["lavado de dinero", "Marty Byrde", "Ozarks", "cartel", "familia", "lago", "crimen", "Missouri", "Netflix", "peligro"],
        "House of Cards": ["Frank Underwood", "política", "manipulación", "Washington", "poder", "Congreso", "Claire", "intriga", "rompiendo la cuarta pared", "Netflix"],
        "Rick and Morty": ["científico loco", "nieto", "viajes interdimensionales", "comedia", "animada", "portal", "dimensiones", "absurdo", "sci-fi", "Adult Swim"],
        "BoJack Horseman": ["caballo", "actor deprimido", "Hollywood", "animada", "drama", "comedia negra", "antropomórfico", "depresión", "fama", "Netflix"],
        "Arcane": ["League of Legends", "Vi y Jinx", "Piltover y Zaun", "animación", "hermanas", "steampunk", "videojuego", "conflicto", "magia", "Netflix"],
        "Squid Game": ["juegos mortales", "coreana", "456 participantes", "dalgona", "supervivencia", "deudas", "premio", "máscaras", "violencia", "Netflix"],
        "Money Heist": ["otro nombre Casa de Papel", "atraco", "España", "Berlín", "plan", "máscaras rojas", "Profesor", "rehenes", "robó", "Netflix"],
        "Westworld": ["parque temático", "robots", "cowboys", "consciencia", "futuro", "anfitriones", "western", "inteligencia artificial", "bucles", "HBO"],
        "Chernobyl": ["desastre nuclear", "miniserie", "Ucrania", "1986", "radiación", "reactor", "evacuación", "СССР", "tragedia", "HBO"],
        "Lost": ["isla misteriosa", "avión estrellado", "supervivientes", "misterio", "números", "4 8 15 16 23 42", "flashbacks", "polar", "ABC", "teorías"],
        "Prison Break": ["Michael Scofield", "escape de prisión", "tatuaje", "plan", "hermanos", "Fox River", "fuga", "planos", "ingeniero", "Fox"],
        "How I Met Your Mother": ["Ted Mosby", "madre", "grupo de amigos", "Nueva York", "historia larga", "bar", "narración", "Barney", "comedia", "CBS"],
        "The Big Bang Theory": ["científicos nerds", "Sheldon Cooper", "física", "Penny", "comedia", "apartamento", "geek", "experimentos", "amistad", "CBS"],
        "Vikings": ["Ragnar Lothbrok", "vikingos", "conquistas", "medieval", "nórdicos", "barcos", "batallas", "dioses", "Inglaterra", "History"],
        "The Sopranos": ["Tony Soprano", "mafia", "Nueva Jersey", "terapia", "familia criminal", "psiquiatra", "negocios ilegales", "drama", "HBO", "icónica"],
        "Dexter": ["asesino en serie", "forense", "Miami", "código Harry", "laboratorio", "sangre", "justicia", "doble vida", "oscuro", "Showtime"],
        "Mad Men": ["Don Draper", "publicidad", "años 60", "Madison Avenue", "Nueva York", "agencia", "campañas", "whisky", "secretos", "AMC"],
        "Fargo": ["antología", "crímenes", "Minnesota", "nieve", "hermanos Coen", "acento", "violencia", "absurdo", "moralidad", "FX"],
        "The Handmaid's Tale": ["distopía", "June", "Gilead", "servidoras", "opresión", "fertilidad", "rojo", "religión", "resistencia", "Hulu"],
        "Mindhunter": ["FBI", "asesinos seriales", "perfiles criminales", "años 70", "psicología", "entrevistas", "Quantico", "investigación", "mente", "Netflix"],
        "Euphoria": ["adolescentes", "Rue", "drogas", "drama", "Zendaya", "secundaria", "adicción", "identidad", "música", "HBO"],
        "Wednesday": ["Addams", "Tim Burton", "academia", "gótica", "Merlina", "misterio", "monstruos", "familiar", "oscura", "Netflix"],
        "The Umbrella Academy": ["superhéroes disfuncionales", "familia adoptiva", "apocalipsis", "viajes en el tiempo", "comic", "poderes", "Number Five", "hermanos", "paradojas", "Netflix"],
        "Cobra Kai": ["Karate Kid", "continuación", "Daniel LaRusso", "Johnny Lawrence", "dojo", "artes marciales", "rivalidad", "adolescentes", "nostalgia", "Netflix"],
        "You": ["Joe Goldberg", "acosador", "obsesión", "librería", "asesinatos", "narración interna", "Love", "psicópata", "stalker", "Netflix"],
        "The Queen's Gambit": ["ajedrez", "Beth Harmon", "años 60", "prodigio", "adicciones", "competencias", "orfanato", "estrategia", "genio", "Netflix"],
        "The Bear": ["restaurante", "chef", "Chicago", "familia", "cocina", "estrés", "sándwiches", "Carmy", "drama", "FX"],
        "Yellowstone": ["rancho", "Montana", "familia Dutton", "cowboys modernos", "tierra", "Kevin Costner", "conflictos", "paisajes", "drama", "Paramount"],
        "Ted Lasso": ["entrenador de fútbol americano", "fútbol inglés", "optimista", "comedia", "Richmond", "Jason Sudeikis", "positividad", "equipo", "Apple TV+", "cree"],
        "Loki": ["dios del engaño", "TVA", "variantes", "Marvel", "viajes en el tiempo", "Tom Hiddleston", "Sylvie", "multiverso", "Mobius", "Disney+"],
        "WandaVision": ["Wanda", "Vision", "realidad alterada", "sitcoms", "Marvel", "diferentes épocas", "Westview", "bruja", "Disney+", "experimento"],
        "The Falcon and the Winter Soldier": ["Sam Wilson", "Bucky Barnes", "escudo del Capitán América", "Marvel", "acción", "legado", "Sebastian Stan", "Anthony Mackie", "Disney+", "superhéroes"],
        "What If...?": ["realidades alternativas", "Marvel", "animada", "Multiverso", "Uatu", "hipótesis", "MCU", "diferentes", "Disney+", "Vigilante"],
        "The Punisher": ["Frank Castle", "venganza", "vigilante", "Marvel", "violencia", "militar", "guerra", "justicia", "Netflix", "antihéroe"],
        "Daredevil": ["Matt Murdock", "abogado ciego", "Hell's Kitchen", "Marvel", "acrobacias", "sentidos", "Kingpin", "Netflix", "justicia", "rojo"],
        "Jessica Jones": ["detective privada", "fuerza sobrehumana", "Kilgrave", "Marvel", "trauma", "control mental", "whisky", "investigación", "Netflix", "noir"],
        "Lucifer": ["diablo", "Los Ángeles", "detective", "club nocturno", "casos", "Chloe", "inmortal", "deseos", "Fox/Netflix", "redención"],
        "Gotham": ["Batman precuela", "joven Bruce Wayne", "Gotham City", "orígenes villanos", "Jim Gordon", "crimen", "Pingüino", "Acertijo", "Fox", "oscura"],
        "Arrow": ["Oliver Queen", "arquero", "Star City", "vigilante", "isla", "capucha", "justicia", "equipo", "CW", "flechas"],
        "The Flash": ["Barry Allen", "velocista", "Central City", "viajes en el tiempo", "equipo", "rayo", "S.T.A.R. Labs", "Zoom", "CW", "rápido"],
        
        // Comida
        "Pizza": ["italiana", "masa", "queso", "horno", "porciones", "tomate", "pepperoni", "redonda", "entrega", "masa fina"],
        "Hamburguesa": ["pan", "carne", "lechuga", "tomate", "americana", "cheddar", "papas", "ketchup", "mostaza", "grill"],
        "Sushi": ["japonés", "arroz", "pescado crudo", "soja", "wasabi", "palillos", "rolls", "salmón", "alga nori", "jengibre"],
        "Taco": ["mexicano", "tortilla", "carne", "guacamole", "picante", "cilantro", "cebolla", "limón", "salsa", "doblar"],
        "Pasta": ["italiana", "fideos", "salsa", "hervir", "trigo", "espagueti", "penne", "al dente", "agua", "bolognesa"],
        "Asado": ["carne a la parrilla", "carbón", "argentino", "chimichurri", "tiras", "costillas", "fuego", "achuras", "leña", "choripán"],
        "Empanada": ["relleno", "masa", "repulgue", "horno o frita", "argentina", "carne", "cebolla", "aceituna", "dorar", "media luna"],
        "Helado": ["frío", "cremoso", "sabores", "cucurucho", "verano", "chocolate", "vainilla", "derretir", "dulce", "congelado"],
        "Milanesa": ["carne empanada", "pan rallado", "frita", "argentina", "huevo", "aceite", "crocante", "pollo o carne", "rebozar", "napolitana"],
        "Sopa": ["caldo", "caliente", "verduras", "cuchara", "líquida", "hervir", "pollo", "invierno", "fideos", "casera"],
        "Chocolate": ["cacao", "dulce", "barra", "derretir", "postre", "negro", "leche", "amargo", "bombón", "tentación"],
        "Churros": ["frito", "azúcar", "masa", "dulce de leche", "español", "alargado", "crocante", "canela", "chocolate", "feria"],
        "Paella": ["española", "arroz", "azafrán", "mariscos", "valenciana", "amarillo", "pollo", "chorizo", "paellera", "fuego"],
        "Ramen": ["japonés", "fideos", "caldo", "huevo", "caliente", "sopa", "naruto", "cerdo", "alga", "palillos"],
        "Burrito": ["mexicano", "tortilla grande", "frijoles", "arroz", "enrollado", "salsa", "queso", "pollo", "crema", "wrap"],
        "Falafel": ["medio oriente", "garbanzos", "frito", "pan pita", "vegano", "bola", "especias", "tahini", "verde", "crocante"],
        "Ceviche": ["peruano", "pescado crudo", "limón", "cebolla", "fresco", "morado", "ají", "leche de tigre", "mariscos", "marino"],
        "Croissant": ["francés", "hojaldre", "mantequilla", "media luna", "desayuno", "hojaldrado", "dorado", "París", "café", "crujiente"],
        "Tacos al pastor": ["mexicano", "carne de cerdo", "piña", "especias", "trompo", "cilantro", "cebolla", "achiote", "vertical", "México"],
        "Lasaña": ["italiana", "capas", "pasta", "carne", "queso", "horno", "bechamel", "tomate", "gratinado", "rectangular"],
        "Fajitas": ["mexicano", "tiras de carne", "pimientos", "tortillas", "cebolla", "pollo", "chisporroteante", "salsa", "envolver", "plancha"],
        "Pho": ["vietnamita", "sopa de fideos", "caldo de res", "hierbas", "aromática", "albahaca", "lima", "caliente", "brotes", "Vietnam"],
        "Carbonara": ["italiana", "pasta", "huevo", "panceta", "queso", "cremosa", "parmesano", "pimienta", "Roma", "espagueti"],
        "Quesadilla": ["mexicana", "tortilla", "queso derretido", "doblada", "plancha", "dorada", "guacamole", "crema", "sencilla", "antojo"],
        "Tiramisu": ["italiano", "postre", "café", "mascarpone", "capas", "bizcocho", "amaretto", "cacao", "Italia", "cremoso"],
        "Sándwich": ["pan", "relleno", "práctico", "variado", "almuerzo", "jamón", "queso", "frío", "cortado", "portátil"],
        "Tortilla española": ["huevos", "papas", "cebolla", "redonda", "española", "freír", "gruesa", "tapa", "voltear", "España"],
        "Guacamole": ["mexicano", "aguacate", "limón", "cebolla", "dip", "verde", "tomate", "cilantro", "cremoso", "molcajete"],
        "Pad Thai": ["tailandés", "fideos de arroz", "tamarindo", "maní", "salteado", "huevo", "camarones", "cacahuates", "wok", "Tailandia"],
        "Hummus": ["medio oriente", "garbanzos", "tahini", "limón", "dip", "cremoso", "ajo", "aceite de oliva", "pan pita", "beige"],
        "Hot dog": ["salchicha", "pan alargado", "mostaza", "ketchup", "rápido", "perro caliente", "relish", "cebolla", "estadio", "pancho"],
        "Baguette": ["francés", "pan largo", "crujiente", "miga suave", "tradicional", "Francia", "vara", "corteza", "panadería", "barra"],
        "Donas": ["fritas", "azúcar", "glaseadas", "redondas con agujero", "americanas", "chocolate", "rellenas", "dulces", "donuts", "Krispy"],
        "Brownie": ["chocolate", "cuadrado", "denso", "nueces", "postre", "húmedo", "horneado", "dulce", "americano", "caliente"],
        "Cheesecake": ["queso crema", "base de galleta", "postre", "cremoso", "NY", "frío", "suave", "fresa", "Nueva York", "tarta"],
        "Curry": ["indio", "especias", "salsa", "picante", "arroz", "amarillo", "cúrcuma", "pollo", "India", "aromático"],
        "Fish and chips": ["británico", "pescado frito", "papas fritas", "rebozado", "tradicional", "crocante", "Inglaterra", "limón", "vinagre", "pub"],
        "Goulash": ["húngaro", "estofado", "pimentón", "carne", "especias", "rojo", "Hungría", "paprika", "caliente", "tradicional"],
        "Moussaka": ["griego", "berenjenas", "carne picada", "bechamel", "horneado", "capas", "Grecia", "gratinado", "especias", "tradicional"],
        "Pierogi": ["polaco", "empanadas", "papas", "queso", "hervidos", "Polonia", "relleno", "cebolla", "masa", "semicírculo"],
        "Shawarma": ["medio oriente", "carne asada", "pan pita", "especias", "vertical", "trompo", "pollo", "tahini", "enrollado", "árabe"],
        "Tamales": ["mexicano", "masa de maíz", "hoja", "relleno", "vapor", "envuelto", "México", "salsa", "tradicional", "tamal"],
        "Waffles": ["masa", "hierro con cuadrados", "desayuno", "miel", "belgas", "cuadrícula", "dulce", "mantequilla", "calientes", "jarabe"],
        "Crepes": ["francés", "masa delgada", "relleno dulce o salado", "doblados", "sartén", "finito", "nutella", "Francia", "enrollar", "delicado"],
        "Pancakes": ["americano", "masa esponjosa", "desayuno", "miel", "apilados", "jarabe de maple", "redondos", "mantequilla", "USA", "hotcakes"],
        "Bao": ["chino", "pan al vapor", "esponjoso", "relleno", "blanco", "China", "suave", "cerdo", "dulce", "dim sum"],
        "Dumplings": ["chino", "masa rellena", "vapor o fritos", "pequeños", "dim sum", "cerdo", "China", "gyoza", "wonton", "salsa de soja"],
        "Naan": ["indio", "pan plano", "horno tandoor", "mantequilla", "curry", "India", "suave", "ajo", "caliente", "tradicional"],
        "Poke": ["hawaiano", "pescado crudo", "arroz", "aguacate", "soja", "Hawái", "atún", "bowl", "sésamo", "fresco"],
        "Tempura": ["japonés", "rebozado ligero", "frito", "verduras o mariscos", "crujiente", "camarones", "Japón", "ligero", "aceite", "crocante"],
        "Baklava": ["medio oriente", "hojaldre", "miel", "nueces", "dulce", "capas", "pistachos", "jarabe", "Turquía", "dorado"],
        "Mochi": ["japonés", "arroz glutinoso", "relleno", "suave", "dulce", "Japón", "pegajoso", "helado", "masticable", "blanco"],
        "Pretzel": ["alemán", "masa retorcida", "sal gorda", "horneado", "forma especial", "Alemania", "nudos", "cerveza", "salado", "bretzel"],
        "Samosa": ["indio", "masa frita", "triangular", "papas y especias", "crujiente", "India", "relleno", "curry", "crocante", "dorado"],
        "Spring rolls": ["asiático", "enrollado", "verduras", "papel de arroz", "fresco o frito", "rollito", "camarones", "cilindro", "Vietnam", "ligero"],
        "Croquetas": ["español", "empanadas", "bechamel", "fritas", "cremosas", "España", "jamón", "pan rallado", "crocantes", "tapas"],
        "Churrasco": ["latinoamericano", "carne asada", "parrilla", "corte grueso", "jugoso", "Brasil", "Argentina", "fuego", "res", "asador"],
        "Risotto": ["italiano", "arroz cremoso", "caldo", "parmesano", "lento", "Italia", "hongos", "vino blanco", "cremosidad", "remover"],
        "Gnocchi": ["italiano", "pasta de papa", "pequeños", "salsa", "hervidos", "Italia", "ñoquis", "suaves", "almohadas", "29"],
        "Poutine": ["canadiense", "papas fritas", "queso", "gravy", "Quebec", "Canadá", "curds", "salsa", "caliente", "indulgente"],
        "Fondue": ["suizo", "queso derretido", "pan", "compartir", "olla", "Suiza", "pincho", "fondear", "gruyere", "social"],
        "Escargot": ["francés", "caracoles", "mantequilla", "ajo", "gourmet", "Francia", "perejil", "pinzas", "exótico", "shell"],
        "Souvlaki": ["griego", "brochetas", "carne asada", "pan pita", "tzatziki", "Grecia", "pincho", "pollo", "limón", "asado"],
        "Bibimbap": ["coreano", "arroz", "verduras", "huevo", "gochujang", "Corea", "bowl", "mezclar", "kimchi", "caliente"],
        "Arepas": ["venezolano/colombiano", "masa de maíz", "redondas", "relleno", "plancha", "Venezuela", "Colombia", "queso", "doradas", "desayuno"],
        "Feijoada": ["brasileño", "frijoles negros", "carne de cerdo", "estofado", "tradicional", "Brasil", "sábado", "arroz", "naranja", "pesado"],
        "Kimchi": ["coreano", "col fermentada", "picante", "acompañamiento", "probiótico", "Corea", "rojo", "ajo", "tradicional", "salud"],
        "Panchito": ["salchicha", "pan", "mostaza", "ketchup", "rápido", "pancho", "completo", "calle", "argentino", "económico"],
        "Nuggets": ["pollo", "empanados", "fritos", "dorados", "infantil", "McDonald's", "rebozados", "salsa", "crocantes", "bocaditos"],
        "Ensalada": ["verduras", "fresca", "saludable", "lechuga", "tomate", "cruda", "aliño", "bowl", "verde", "dieta"],
        "Puré": ["papa", "cremoso", "pisado", "manteca", "acompañamiento", "suave", "leche", "amarillo", "simple", "nutritivo"],
        "Arroz": ["grano", "blanco", "asiático", "hervido", "cereal", "chino", "guarnición", "suelto", "integral", "pilaf"],
        "Huevo Frito": ["yema", "clara", "sartén", "aceite", "desayuno", "proteína", "vuelta y vuelta", "dorado", "soleado", "plancha"],
        "Tortilla": ["huevos", "batidos", "sartén", "francesa", "voltear", "española", "papas", "redonda", "dorada", "cocina"],
        "Pan": ["harina", "masa", "horno", "levadura", "rebanada", "panadería", "lactal", "tostado", "miga", "corteza"],
        "Queso": ["lácteo", "leche", "amarillo", "cremoso", "fundido", "rallado", "sándwich", "sabor", "curado", "proteína"],
        "Jamón": ["cerdo", "lonchas", "rosa", "sándwich", "fiambre", "cocido", "crudo", "salado", "embutido", "lonjas"],
        "Salame": ["embutido", "picado", "redondo", "grasa", "italiano", "fiambre", "condimentado", "curado", "lonjas", "especias"],
        "Nachos": ["totopos", "maíz", "triangulares", "mexicano", "queso", "crocantes", "jalapeños", "guacamole", "crema", "compartir"],
        "Kebab": ["turco", "carne", "pan pita", "vertical", "shawarma", "döner", "asado", "enrollado", "salsa", "árabe"],
        "Choripán": ["chorizo", "pan", "argentino", "chimichurri", "parrilla", "asado", "simple", "calle", "popular", "tradicional"],
        "Tarta": ["masa", "relleno", "horno", "dulce", "salada", "porción", "molde", "capas", "gratinado", "casera"],
        "Flan": ["postre", "huevos", "leche", "caramelo", "gelatinoso", "dulce", "cremoso", "molde", "baño María", "tradicional"],
        "Galletas": ["dulces", "horno", "crujientes", "chispas", "chocolinas", "merienda", "dulce de leche", "rellenas", "pack", "masitas"],
        "Alfajor": ["dulce de leche", "tapas", "argentino", "havanna", "chocolate", "doble", "triple", "maicena", "tradicional", "golosina"],
        "Papas Fritas": ["papa", "fritas", "aceite", "crocantes", "sal", "ketchup", "acompañamiento", "bastón", "amarillas", "McDonald's"],
        "Pochoclos": ["maíz", "reventar", "cine", "manteca", "salado", "dulce", "caliente", "bowl", "película", "crujiente"],
        "Manzana": ["fruta", "roja", "verde", "pepitas", "mordida", "jugosa", "cáscara", "saludable", "dulce", "árbol"],
        "Banana": ["amarilla", "potasio", "cáscara", "curva", "tropical", "suave", "dulce", "energía", "racimo", "pelar"],
        "Frutilla": ["roja", "semillas afuera", "dulce", "jugosa", "fresa", "crema", "smoothie", "verano", "corazón", "vitamina C"],
        "Sandía": ["grande", "verde por fuera", "roja por dentro", "semillas", "jugosa", "verano", "refrescante", "tajadas", "pesada", "dulce"],
        "Uva": ["racimo", "viña", "vino", "pequeñas", "moradas", "verdes", "pasas", "dulces", "jugosas", "pepitas"],
        "Naranja": ["cítrico", "vitamina C", "jugo", "gajo", "cáscara", "ácida", "redonda", "pelada", "dulce", "anaranjada"],
        "Limón": ["ácido", "amarillo", "cítrico", "jugo", "limonada", "cáscara", "ralladura", "agrio", "vitamina C", "exprimido"],
        "Palta": ["aguacate", "verde", "carozo", "cremosa", "guacamole", "tostada", "saludable", "grasa buena", "suave", "untable"],
        "Tomate": ["rojo", "jugoso", "ensalada", "salsa", "redondo", "semillas", "ácido", "ketchup", "fresco", "huerta"],
        "Lechuga": ["verde", "hojas", "ensalada", "crujiente", "fresca", "cruda", "repollada", "saludable", "hidratante", "dieta"],
        "Pepino": ["verde", "alargado", "ensalada", "jugoso", "pepinillos", "fresco", "crujiente", "aguado", "rodajas", "hidratante"],
        "Zanahoria": ["naranja", "raíz", "crujiente", "dulce", "vitamina A", "rallada", "vista", "conejo", "alargada", "huerta"],
        "Berenjena": ["morada", "alargada", "cocinar", "grillada", "milanesa", "amarga", "hortaliza", "parmesana", "asada", "rellena"],
        "Ravioles": ["pasta", "rellenos", "cuadrados", "salsa", "italiano", "hervidos", "ricota", "carne", "tuco", "caseros"],
        "Ñoquis": ["papa", "29", "bolitas", "pasta", "italiano", "salsa", "hervidos", "suaves", "harina", "tenedor"],
        "Sorrentinos": ["pasta", "rellenos", "redondos", "jamón y queso", "salsa", "italiano", "hervidos", "Rosario", "tuco", "ricota"],
        "Pollo al horno": ["ave", "asado", "horno", "dorado", "jugoso", "papas", "limón", "crujiente", "familia", "dominical"],
        "Vacío": ["carne", "asado", "parrilla", "corte", "argentino", "jugoso", "carbón", "tira", "veta de grasa", "dominical"],
        "Morcilla": ["sangre", "embutido", "negra", "asado", "achura", "grillada", "cebolla", "redonda", "parrilla", "especiada"],
        "Chorizo": ["embutido", "cerdo", "parrilla", "rojo", "choripán", "asado", "especias", "grillado", "carne", "argentino"],
        "Provoleta": ["queso", "parrilla", "fundido", "orégano", "asado", "grillada", "argentino", "dorada", "entrada", "disco"],
        "Humita": ["choclo", "masa", "envuelta", "chala", "cremosa", "dulce", "maíz", "argentina", "vapor", "amarilla"],
        "Guiso": ["estofado", "caliente", "cuchara", "carne", "verduras", "olla", "casero", "lentejas", "invierno", "completo"],
        "Puchero": ["caldo", "verduras", "carne", "hervido", "olla", "sopa", "invierno", "completo", "tradicional", "familiar"],
        "Bondiola": ["cerdo", "carne", "horno", "jugosa", "sándwich", "asada", "lenta cocción", "tierna", "especias", "braseada"],
        "Osobuco": ["carne", "hueso", "tuétano", "estofado", "ternera", "salsa", "horno", "tierno", "cocción lenta", "redondo"],
        "Panqueques": ["masa", "dulce o salado", "relleno", "finos", "sartén", "enrollados", "dulce de leche", "apilados", "crepes gruesos", "desayuno"],
        "Muffin": ["panecillo", "horno", "dulce", "chispas", "vainilla", "molde", "esponjoso", "papel", "desayuno", "individual"],
        "Chocotorta": ["galletitas", "dulce de leche", "queso crema", "chocolinas", "argentina", "fácil", "sin horno", "cacao", "capas", "postre"],
        "Pastafrola": ["dulce de membrillo", "masa", "enrejado", "argentina", "tarta", "dulce de batata", "tradicional", "horno", "rayada", "casera"],
        "Rogel": ["capas", "dulce de leche", "merengue", "alfajor gigante", "argentino", "tapas", "crujiente", "torre", "quemado", "tradicional"],
        "Lemon Pie": ["limón", "merengue", "tarta", "ácido", "dulce", "base de galleta", "horno", "cítrico", "cremoso", "dorado"],
        "Budín": ["masa", "horno", "dulce", "inglés", "húmedo", "molde", "azúcar", "fruta", "marmolado", "té"],
        
        // Deportes
        "Fútbol": ["balón", "11 jugadores", "arco", "mundial", "goles", "cancha", "árbitro", "delantero", "defensa", "FIFA"],
        "Básquet": ["pelota naranja", "aro", "cancha", "NBA", "cinco jugadores", "triple", "doble", "tablero", "base", "alero"],
        "Tenis": ["raqueta", "pelota amarilla", "red", "Wimbledon", "sets", "saque", "revés", "Grand Slam", "arcilla", "individual"],
        "Natación": ["agua", "pileta", "estilos", "brazadas", "cronómetro", "crol", "mariposa", "espalda", "pecho", "carriles"],
        "Atletismo": ["pista", "carrera", "velocidad", "saltos", "lanzamientos", "100 metros", "maratón", "relevos", "posta", "Olimpiadas"],
        "Boxeo": ["guantes", "ring", "rounds", "golpes", "nocaut", "jab", "uppercut", "gancho", "árbitro", "campeonato"],
        "Rugby": ["balón ovalado", "15 jugadores", "tackle", "try", "scrum", "All Blacks", "conversión", "melé", "ruck", "pase"],
        "Voleibol": ["red alta", "saque", "remate", "6 jugadores", "pelota", "bloqueo", "volea", "rotación", "set", "cancha"],
        "Golf": ["palos", "hoyo", "green", "18 hoyos", "swing", "tee", "putt", "caddie", "birdie", "par"],
        "Automovilismo": ["autos", "pista", "velocidad", "F1", "boxes", "pole", "podio", "vuelta", "neumáticos", "circuito"],
        "Ciclismo": ["bicicleta", "pedales", "Tour de France", "etapas", "pelotón", "montaña", "sprint", "amarillo", "vuelta", "casco"],
        "Ski": ["nieve", "montaña", "tablas", "descenso", "bastones", "pista", "slalom", "telesilla", "botas", "alpino"],
        "Snowboard": ["nieve", "tabla", "trucos", "halfpipe", "descenso", "saltos", "freestyle", "montaña", "botas", "slope"],
        "Surf": ["olas", "tabla", "playa", "equilibrio", "mar", "remo", "tubo", "marea", "wax", "wetsuit"],
        "Skate": ["patineta", "trucos", "rampa", "ollie", "ruedas", "kickflip", "calle", "park", "lija", "trucks"],
        "Escalada": ["roca", "arnés", "altura", "agarre", "pared", "mosquetón", "cuerda", "búlder", "indoor", "montaña"],
        "Gimnasia": ["acrobacias", "flexibilidad", "barras", "colchoneta", "Olimpiadas", "viga", "suelo", "anillas", "salto", "rutina"],
        "Halterofilia": ["pesas", "levantamiento", "barra", "fuerza", "Olimpiadas", "arrancada", "envión", "discos", "peso", "potencia"],
        "Esgrima": ["espada", "tocado", "máscara", "duelo", "pista", "florete", "sable", "estocada", "punto", "blanco"],
        "Arco y flecha": ["arco", "flechas", "diana", "puntería", "Olimpiadas", "carcaj", "centro", "tensión", "puntos", "tiro"],
        "Judo": ["tatami", "kimono", "llaves", "ippon", "arte marcial", "proyección", "cinturón", "combate", "judoca", "agarre"],
        "Karate": ["kimono", "katas", "golpes", "cinturones", "arte marcial", "puñetazo", "patada", "kata", "kumite", "dojo"],
        "Taekwondo": ["patadas", "kimono", "arte marcial coreano", "cinturones", "combate", "dobok", "poomsae", "giro", "salto", "puntos"],
        "Lucha libre": ["ring", "máscaras", "llaves", "lucha mexicana", "espectáculo", "luchador", "plancha", "rendición", "cuerdas", "esquina"],
        "Hockey sobre hielo": ["patines", "puck", "stick", "hielo", "portería", "NHL", "disco", "guantes", "casco", "ataque"],
        "Hockey sobre césped": ["stick", "pelota", "césped", "arco", "Olimpiadas", "pase", "dribling", "corner", "equipo", "campo"],
        "Béisbol": ["bat", "pelota", "home run", "9 innings", "MLB", "pitcher", "strike", "base", "guante", "diamante"],
        "Cricket": ["bat", "wicket", "británico", "test match", "pelota roja", "lanzador", "over", "runs", "stumps", "campo"],
        "Fútbol americano": ["ovalado", "touchdown", "NFL", "casco", "yardas", "quarterback", "pase", "tackle", "touchdown", "campo"],
        "MMA": ["octágono", "artes marciales mixtas", "UFC", "nocaut", "sumisión", "rounds", "golpes", "patadas", "llave", "referee"],
        "Vóley": ["red alta", "saque", "remate", "6 jugadores", "pelota", "bloqueo", "volea", "rotación", "set", "cancha"],
        "Pádel": ["raqueta", "parejas", "pared", "pelota", "vidrio", "volea", "bandeja", "dobles", "red", "saque"],
        "Ping Pong": ["raqueta pequeña", "pelota blanca", "mesa", "red baja", "paleta", "efecto", "saque", "rally", "individual", "dobles"],
        "Dardos": ["flechas", "diana", "puntería", "pub", "centro", "bullseye", "180", "triple", "lanzar", "puntos"],
        "Bowling": ["bolos", "bola", "pista", "strike", "spare", "10 pinos", "chuza", "zapatos", "canaleta", "juego"],
        "Sumo": ["luchadores", "japonés", "ring circular", "obesidad", "tradición", "mawashi", "ritual", "empujar", "dohyo", "yokozuna"],
        "Gimnasia": ["acrobacias", "flexibilidad", "barras", "colchoneta", "Olimpiadas", "viga", "suelo", "anillas", "salto", "rutina"],
        "Handball": ["pelota", "arco", "7 jugadores", "pase", "gol", "área", "lanzamiento", "portero", "saque", "cancha"],
        
        // Videojuegos
        "Minecraft": ["cubos", "crafteo", "supervivencia", "creeper", "mundo abierto", "Mojang", "Steve", "bloques", "minar", "pixelado"],
        "Fortnite": ["battle royale", "construcción", "100 jugadores", "bailes", "isla", "Epic Games", "pico", "V-Bucks", "temporadas", "victoria"],
        "League of Legends": ["MOBA", "5v5", "campeones", "Riot", "nexo", "carriles", "jungla", "teamfight", "ranked", "skins"],
        "Counter-Strike": ["FPS", "terroristas", "bombas", "AK-47", "headshot", "Valve", "defusal", "AWP", "rush B", "competitivo"],
        "GTA": ["mundo abierto", "crimen", "autos", "Rockstar", "misiones", "robo", "policías", "ciudad", "violencia", "Los Santos"],
        "The Legend of Zelda": ["Link", "Zelda", "Hyrule", "aventura", "triforce", "Nintendo", "espada maestra", "Ganon", "puzzles", "dungeons"],
        "Mario Bros": ["fontanero", "hongos", "saltos", "Nintendo", "Bowser", "Luigi", "plataformas", "tubos verdes", "monedas", "Peach"],
        "Pokémon": ["monstruos", "atrapar", "evolucionar", "combates", "Pikachu", "pokebola", "entrenador", "gimnasios", "Nintendo", "Game Freak"],
        "Call of Duty": ["FPS", "guerra", "multijugador", "Activision", "campañas", "zombies", "killstreaks", "moderno", "táctico", "ranked"],
        "FIFA": ["fútbol", "equipos reales", "Ultimate Team", "EA Sports", "simulación", "jugadores reales", "carreras", "online", "ligas", "estadios"],
        "Valorant": ["FPS táctico", "agentes", "habilidades", "Riot", "5v5", "spike", "defuse", "competitivo", "ranked", "ultimate"],
        "Apex Legends": ["battle royale", "leyendas", "habilidades", "escuadrones", "respawn", "EA", "Titanfall", "ping", "arena", "dropship"],
        "Overwatch": ["FPS", "héroes", "objetivos", "Blizzard", "6v6", "tanques", "soporte", "DPS", "ultimate", "equipo"],
        "Rocket League": ["autos", "fútbol", "acrobático", "multijugador", "goles", "voladores", "boost", "arena", "ranked", "flip"],
        "Among Us": ["impostores", "tripulación", "tareas", "votar", "traición", "nave espacial", "emergencia", "sabotaje", "colores", "sospechoso"],
        "Roblox": ["plataforma", "juegos creados por usuarios", "bloques", "social", "avatares", "Robux", "obby", "variado", "niños", "creación"],
        "Terraria": ["2D", "exploración", "construcción", "jefes", "ítems", "pixel", "cavar", "mundo", "crafteo", "aventura"],
        "Stardew Valley": ["granja", "pixel art", "cultivos", "pueblo", "relajante", "indie", "ConcernedApe", "matrimonio", "minas", "pesca"],
        "Animal Crossing": ["isla", "vecinos animales", "decorar", "relajante", "Nintendo", "Tom Nook", "pesca", "insectos", "museo", "campanas"],
        "The Sims": ["simulador de vida", "casas", "relaciones", "EA", "vecindarios", "Maxis", "construcción", "familias", "trabajos", "personalización"],
        "Halo": ["Master Chief", "Covenant", "FPS", "Xbox", "sci-fi", "Bungie", "343", "spartans", "anillo", "Cortana"],
        "God of War": ["Kratos", "mitología", "acción", "PlayStation", "hacha", "nórdica", "Atreus", "violencia", "jefes", "historia"],
        "The Last of Us": ["zombies", "Joel y Ellie", "supervivencia", "post-apocalíptico", "Naughty Dog", "infected", "cordyceps", "historia", "emocional", "PlayStation"],
        "Uncharted": ["Nathan Drake", "tesoros", "aventura", "PlayStation", "escaladas", "Naughty Dog", "historia", "explorador", "acción", "cinematic"],
        "Red Dead Redemption": ["vaqueros", "oeste", "mundo abierto", "Rockstar", "Arthur Morgan", "caballos", "honor", "bandidos", "pistolas", "western"],
        "The Witcher": ["Geralt", "brujo", "monstruos", "magia", "CD Projekt", "Ciri", "Yennefer", "espadas", "contratos", "mutante"],
        "Skyrim": ["dragones", "Dovahkiin", "RPG", "mundo abierto", "gritos", "Bethesda", "Elder Scrolls", "flechas", "rodilla", "mods"],
        "Fallout": ["post-apocalíptico", "refugios", "mutantes", "RPG", "radiación", "Bethesda", "Vault", "nuclear", "wasteland", "Pip-Boy"],
        "Bioshock": ["Rapture", "plasmidos", "Big Daddy", "distopía", "underwater", "FPS", "2K", "Splicers", "filosofía", "historia"],
        "Portal": ["portales", "GLaDOS", "puzzles", "Aperture Science", "primera persona", "Valve", "Chell", "cake", "test chambers", "ingenio"],
        "Half-Life": ["Gordon Freeman", "Combine", "FPS", "Valve", "palanca", "crowbar", "City 17", "headcrabs", "G-Man", "física"],
        "Team Fortress 2": ["clases", "sombreros", "Valve", "cartoon", "multijugador", "FPS", "9 clases", "Mann Co", "crates", "trading"],
        "Dota 2": ["MOBA", "Valve", "5v5", "héroes", "antiguo", "lanes", "creeps", "ancient", "competitivo", "items"],
        "Hearthstone": ["cartas", "Warcraft", "Blizzard", "estrategia", "maná", "coleccionable", "arena", "ranked", "clases", "digital"],
        "World of Warcraft": ["MMORPG", "Azeroth", "razas", "clases", "Blizzard", "raids", "dungeons", "PvP", "monturas", "expansiones"],
        "Destiny": ["Bungie", "shooter looter", "guardianes", "sci-fi", "raids", "FPS", "loot", "MMO", "Traveler", "aliens"],
        "Warframe": ["ninjas espaciales", "free to play", "cooperativo", "sci-fi", "parkour", "Digital Extremes", "tenno", "warframes", "mods", "grind"],
        "Dark Souls": ["difícil", "FromSoftware", "bonfires", "jefes épicos", "muerte constante", "estus", "souls", "Praise the Sun", "invasiones", "medieval"],
        "Bloodborne": ["victoriano", "horror", "FromSoftware", "difícil", "bestias", "gótico", "Yharnam", "sangre", "chalices", "lovecraftiano"],
        "Elden Ring": ["FromSoftware", "mundo abierto", "George R.R. Martin", "difícil", "Anillo", "Lands Between", "monturas", "magia", "cooperativo", "jefes"],
        "Sekiro": ["samurai", "FromSoftware", "deflexión", "Japón feudal", "difícil", "katana", "prosthetic", "parry", "shinobi", "muerte dos veces"],
        "Monster Hunter": ["cazar monstruos", "armas gigantes", "Capcom", "cooperativo", "crafteo", "palico", "tracking", "turf wars", "armaduras", "multiplayer"],
        "Street Fighter": ["peleas", "Ryu", "Hadouken", "Capcom", "combos", "Ken", "Chun-Li", "arcade", "2D", "torneo"],
        "Mortal Kombat": ["Fatality", "pelea brutal", "Sub-Zero", "Scorpion", "sangre", "NetherRealm", "gore", "finishing moves", "arcade", "violencia"],
        "Tekken": ["pelea 3D", "Mishima", "King", "Namco", "combos", "Heihachi", "juggle", "arcade", "torneo", "Devil"],
        "Super Smash Bros": ["peleas", "Nintendo", "crossover", "plataformas", "porcentaje", "Mario", "damage", "items", "Final Smash", "party"],
        "Splatoon": ["tinta", "calamares", "Nintendo", "shooter", "colorido", "turf war", "inklings", "ranked", "salmon run", "multiplayer"],
        "Metroid": ["Samus", "exploración", "sci-fi", "Nintendo", "power-ups", "Aran", "morph ball", "space pirates", "metroidvania", "aislamiento"],
        "Donkey Kong": ["gorila", "barriles", "plátanos", "Nintendo", "plataformas", "DK", "Diddy", "Kongs", "minecart", "jungle"],
        "Kirby": ["rosa", "copiar habilidades", "Nintendo", "adorable", "volar", "chupar", "redondo", "Dream Land", "Meta Knight", "simple"],
        "Sonic": ["erizo azul", "velocidad", "anillos", "Sega", "Dr. Eggman", "Tails", "Green Hill", "correr", "loops", "rápido"],
        "Mega Man": ["robot azul", "Capcom", "jefes", "copiar armas", "plataformas", "Dr. Light", "Dr. Wily", "Mega Buster", "8-bit", "difícil"],
        "Castlevania": ["vampiros", "Belmont", "látigo", "Drácula", "gótico", "Konami", "metroidvania", "Symphony", "Trevor", "subweapons"],
        "Silent Hill": ["horror psicológico", "niebla", "Pyramid Head", "Konami", "perturbador", "siren", "radio", "alternativo", "simbolismo", "terror"],
        "Resident Evil": ["zombies", "survival horror", "Capcom", "mansión", "T-Virus", "Leon", "Jill", "Umbrella", "recursos limitados", "biohazard"],
        "Dead Space": ["horror espacial", "necromorphs", "Isaac Clarke", "desmembramiento", "EA", "sci-fi", "Ishimura", "plasma cutter", "terror", "engineer"],
        "Outlast": ["horror", "cámara", "asilo", "huir", "primera persona", "grabación", "Mount Massive", "baterías", "esconderse", "indie"],
        "Amnesia": ["horror", "oscuridad", "cordura", "monstruos", "esconderse", "Frictional", "velas", "terror", "castillo", "gathering"],
        "Five Nights at Freddy's": ["animatrónicos", "pizzería", "cámaras", "sustos", "indie", "FNAF", "Freddy", "puertas", "electricidad", "nightguard"],
        "Undertale": ["indie", "RPG", "monstruos", "pacifista o genocida", "Toby Fox", "Sans", "bullets", "determinación", "Underground", "música"],
        "Celeste": ["plataformas difícil", "montaña", "pixel art", "indie", "Madeline", "dash", "precisión", "ansiedad", "Strawberries", "deaths"],
        "Hollow Knight": ["metroidvania", "insectos", "indie", "difícil", "Hallownest", "Team Cherry", "Knight", "nail", "charms", "bosses"],
        "Cuphead": ["run and gun", "cartoon años 30", "difícil", "jefes", "cooperativo", "StudioMDHR", "Mugman", "contracts", "parry", "animation"],
        "Hades": ["roguelike", "mitología griega", "Zagreus", "Supergiant", "escape", "Underworld", "boons", "weapons", "narración", "repetición"],
        "Dead Cells": ["roguelike", "metroidvania", "difícil", "pixel art", "mutaciones", "Motion Twin", "permadeath", "células", "blueprints", "speedrun"],
        "Binding of Isaac": ["roguelike", "perturbador", "lágrimas", "indie", "Edmund McMillen", "items", "basement", "synergies", "biblical", "random"],
        "Don't Starve": ["supervivencia", "Tim Burton style", "hambre", "crafting", "indie", "Klei", "Wilson", "recursos", "seasons", "Charlie"],
        "Subnautica": ["supervivencia", "océano alienígena", "exploración submarina", "crafteo", "miedo al agua", "Unknown Worlds", "submarine", "Leviathan", "base building", "4546B"],
        "No Man's Sky": ["exploración espacial", "procedural", "planetas", "Hello Games", "multijugador", "infinito", "nave", "resources", "aliens", "comeback"],
        "Rust": ["supervivencia", "multijugador", "construcción", "PvP", "desnudo", "Facepunch", "raid", "base", "recursos", "tóxico"],
        "ARK": ["dinosaurios", "supervivencia", "domar", "tribus", "prehistórico", "Studio Wildcard", "T-Rex", "crafting", "base", "saddles"],
        "DayZ": ["zombies", "supervivencia", "realista", "Bohemia", "post-apocalíptico", "loot", "Chernarus", "permadeath", "hambre", "bandidos"],
        "Genshin Impact": ["gacha", "mundo abierto", "anime", "elementos", "free to play", "miHoYo", "Teyvat", "wishes", "primogems", "exploración"],
        "Honkai": ["gacha", "acción", "anime", "miHoYo", "sci-fi", "Valkyries", "Herrscher", "battlesuit", "action RPG", "mobile"],
        "Final Fantasy": ["JRPG", "Square Enix", "chocobos", "magia", "historia épica", "crystals", "ATB", "Moogles", "summons", "Cloud"],
        "Zelda": ["Link", "aventura", "Nintendo", "triforce", "Hyrule", "espada maestra", "puzzles", "exploración", "dungeons", "Ganon"],
        "Tetris": ["bloques", "líneas", "puzzle", "caer", "rotar", "Alexey Pajitnov", "Game Boy", "adictivo", "simple", "música"],
        "Pac-Man": ["come puntos", "laberinto", "fantasmas", "amarillo", "arcade", "Namco", "píldora de poder", "frutas", "clásico", "redondo"],
        "Cyberpunk 2077": ["futuro", "Night City", "RPG", "CD Projekt", "cyberpunk", "implantes", "Johnny Silverhand", "bugs", "corpo", "netrunner"],
        "Assassins Creed": ["asesinos", "parkour", "historia", "Ubisoft", "templarios", "hood", "altaír", "hidden blade", "animus", "creed"],
        "Doom": ["FPS", "demonios", "violencia", "shotgun", "id Software", "hell", "Doom Slayer", "gore", "metal", "rip and tear"],
        "gangbeast": ["pelea", "party", "physics", "multiplayer", "gelatinosos", "Double Fine", "caídas", "agarrar", "caos", "divertido"],
        "kirby": ["rosa", "adorable", "copiar", "volar", "Nintendo", "redondo", "chupar", "HAL Laboratory", "simple", "Dream Land"],
        "polytopia": ["estrategia", "turnos", "tribus", "conquista", "mobile", "Midjiwan", "hexágonos", "civilizaciones", "simple", "indie"],
        "crash bandicoot": ["marsupial", "plataformas", "Naughty Dog", "cajas", "giro", "Aku Aku", "Dr. Neo Cortex", "wumpa", "PlayStation", "naranja"],
        "need 4 speed": ["carreras", "autos", "velocidad", "policías", "EA", "tuning", "arcade", "persecuciones", "street racing", "nitro"],
        "Outer Wilds": ["exploración espacial", "bucle temporal", "puzzle", "sistema solar", "indie", "Mobius Digital", "22 minutos", "discoveries", "campfire", "mystery"],
        "Brawl Stars": ["MOBA móvil", "Supercell", "3v3", "brawlers", "party", "trophies", "power league", "colorido", "quick matches", "skins"],
        "Clash of Clans": ["estrategia", "Supercell", "aldea", "tropas", "clanes", "gemas", "mobile", "ayuntamiento", "wars", "construction"],
        "Dead by Daylight": ["asimétrico", "horror", "4v1", "supervivencia", "Behaviour", "killer", "generators", "perks", "hooks", "escape"],
        "Phasmophobia": ["horror cooperativo", "fantasmas", "investigación", "VR", "Kinetic Games", "equipo", "EMF", "evidence", "miedo", "voice recognition"],
        "Baldurs Gate 3": ["RPG", "D&D", "Larian", "isométrico", "historia", "turnos", "party", "dados", "Forgotten Realms", "choices"],
        "Ghost of Tsushima": ["samurai", "Japón", "mundo abierto", "Sucker Punch", "PlayStation", "katana", "honor", "mongoles", "viento", "belleza"],
        "Horizon": ["robots dinosaurio", "Aloy", "mundo abierto", "PlayStation", "Guerrilla", "arco", "post-apocalíptico", "tribus", "override", "machines"],
        "Gran Turismo": ["simulador", "carreras", "PlayStation", "Polyphony", "realista", "licencias", "tuning", "coches reales", "circuitos", "GT"],
        "F1": ["Fórmula 1", "carreras", "Codemasters", "simulación", "oficiales", "circuitos", "DRS", "pit stops", "temporada", "campeonato"],
        "NBA 2K": ["básquet", "simulación", "2K Sports", "MyCareer", "equipos NBA", "realista", "jugadores reales", "VC", "park", "badges"],
        "PES": ["fútbol", "Konami", "simulación", "eFootball", "MyClub", "realista", "Master League", "licensed", "gameplay", "rival de FIFA"],
        "Fall Guys": ["battle royale", "obstacle course", "party", "Mediatonic", "60 jugadores", "colorido", "beans", "rounds", "crowns", "caídas"],
        "Metal Gear Solid": ["sigilo", "Hideo Kojima", "Snake", "Konami", "tactical espionage", "cardboard box", "codec", "nuclear", "Foxhound", "exclamación"],
        "Devil May Cry": ["hack and slash", "Dante", "demonios", "Capcom", "estilo", "combos", "SSS rank", "Nero", "Vergil", "pizza"],
        "Diablo": ["hack and slash", "loot", "Blizzard", "isométrico", "demonios", "clases", "dungeons", "Hell", "legendary", "seasons"],
        "Left 4 Dead": ["cooperativo", "zombies", "Valve", "4 jugadores", "hordas", "Tank", "Witch", "campañas", "versus", "safe room"],
        "Payday": ["atracos", "cooperativo", "máscaras", "Overkill", "4 jugadores", "stealth", "policías", "drills", "heist", "loot"],
        "Rainbow Six Siege": ["FPS táctico", "Ubisoft", "5v5", "operadores", "destructible", "gadgets", "breach", "defuse", "ranked", "competitive"],
        "Battlefield": ["FPS", "guerra", "EA DICE", "vehículos", "64 jugadores", "conquest", "destruction", "squad", "clases", "Battlefield moments"],
        "Borderlands": ["shooter looter", "Gearbox", "Pandora", "cel-shaded", "cooperativo", "vault hunters", "billones de armas", "humor", "bandits", "loot"],
        "Yakuza": ["acción", "Japón", "Sega", "Kiryu", "crimen organizado", "Tokyo", "minijuegos", "drama", "yakuza", "honor"],
        "Injustice": ["pelea", "DC Comics", "NetherRealm", "superhéroes", "Superman", "story mode", "gear", "combos", "villanos", "multiverso"],
        
        // Clash Royale
        "Gigante": ["tanque", "edificios", "5 elixir", "lento", "pelo negro", "torre", "resistente", "común", "distracción", "daño bajo"],
        "Montapuercos": ["martillo", "cerdo", "4 elixir", "edificios", "épica", "salto", "fast", "jinete", "rápido", "rush"],
        "P.E.K.K.A": ["robot", "espada", "7 elixir", "tanque", "épica", "mariposas", "armadura", "destructora", "alto daño", "lenta"],
        "Mago eléctrico": ["electricidad", "aturdimiento", "legendaria", "4 elixir", "área", "barba blanca", "hechicero", "zap", "refleja", "rayo"],
        "Tronco": ["hechizo", "empuje", "2 elixir", "legendaria", "madera", "knockback", "rueda", "bajo costo", "pequeñas tropas", "log"],
        "Zap": ["hechizo", "electricidad", "2 elixir", "aturdimiento", "común", "instante", "reset", "rápido", "torre", "stun"],
        "Bárbaros": ["bigotes", "espadas", "5 elixir", "cinco unidades", "común", "defensa", "musculosos", "pelaje", "rubios", "fuertes"],
        "Arqueras": ["dos unidades", "pelo rosa", "3 elixir", "distancia", "común", "arco", "trenzas", "flechas", "apoyo", "dúo"],
        "Esqueletos": ["huesos", "1 elixir", "cuatro unidades", "común", "ciclo", "distracciones", "muertos", "frágiles", "rápidos", "bajo costo"],
        "Gólem": ["tanque", "8 elixir", "épica", "roca", "golemitas", "se divide", "destructor", "edificios", "alto costo", "pusheo"],
        "Sabueso de lava": ["aéreo", "lava pups", "7 elixir", "legendaria", "se divide", "tanque", "fuego", "perro", "globo combo", "lavacachorritos"],
        "Globo bombástico": ["aéreo", "bomba", "5 elixir", "edificios", "épica", "esqueleto", "muerte", "globo", "rage combo", "torre"],
        "Minero": ["legendaria", "3 elixir", "pico", "aparece anywhere", "torre", "chip damage", "excavador", "versatil", "tanque pequeño", "inesperado"],
        "Princesa": ["legendaria", "arco", "3 elixir", "largo alcance", "área", "corona", "flecha", "apoyo", "cabello negro", "torre desde puente"],
        "Mago de hielo": ["legendaria", "hielo", "3 elixir", "ralentiza", "área", "barba", "congelamiento", "defensive", "wizard", "slow"],
        "Bruja": ["invoca esqueletos", "5 elixir", "épica", "morado", "distancia", "área", "spawn", "hechicera", "bola de fuego", "defensa"],
        "Ejército de esqueletos": ["15 esqueletos", "3 elixir", "épica", "enjambre", "defensa", "huesos", "horda", "counter", "surrounds", "distracción"],
        "Barril de duendes": ["hechizo", "3 elixir", "épica", "torre", "tres duendes", "chip", "barril", "prediction", "daño directo", "verde"],
        "Cohete": ["hechizo", "6 elixir", "raro", "alto daño", "área", "edificios", "torres", "finish", "explosión", "long range"],
        "Bola de fuego": ["hechizo", "4 elixir", "raro", "daño medio", "empuje", "área", "fuego", "meteor", "tropas medias", "knockback"],
        "Veneno": ["hechizo", "4 elixir", "épica", "duración", "área", "ralentiza", "poison", "DoT", "verde", "slow"],
        "Tornado": ["hechizo", "3 elixir", "épica", "atrae", "activación rey", "tornado", "viento", "agrupa", "king tower", "synergy"],
        "Verdugo": ["legendaria", "hacha", "5 elixir", "escudo", "alto daño", "ejecutora", "princesa counter", "tanque", "destructor", "arma grande"],
        "Dragón infernal": ["legendaria", "aéreo", "4 elixir", "rayo", "se calienta", "tanque killer", "dragón", "beam", "morado", "incremental"],
        "Torre infernal": ["edificio", "5 elixir", "raro", "se calienta", "single o multi", "defensa", "torre", "beam", "tanque killer", "modes"],
        "Ballesta": ["edificio", "6 elixir", "épica", "win condition", "distancia", "siege", "flechas", "torre", "defensa", "largo alcance"],
        "Mortero": ["edificio", "4 elixir", "común", "siege", "área", "proyectiles", "torre", "distancia", "chip", "barato"],
        "Chispitas": ["hechizo", "1 elixir", "legendaria", "tres rayos", "versatil", "flexible", "eléctrico", "multi uso", "ciclo", "zap pequeño"],
        "Megacaballero": ["legendaria", "7 elixir", "salto", "área al caer", "tanque", "bigote", "armadura", "destructivo", "counter push", "jump"],
        "Bandida": ["legendaria", "3 elixir", "dash", "daga", "invisible al dashearse", "rápida", "pañuelo", "counter", "versatil", "burst"],
        "Fantasma real": ["legendaria", "3 elixir", "invisible", "carga", "espada", "fantasma", "dash attack", "esquiva", "cape", "burst"],
        "Arquero mágico": ["legendaria", "4 elixir", "arco mágico", "primera flecha penetra", "distancia", "apoyo", "long range", "músico", "magic", "support"],
        "Montacarneros": ["ariete", "4 elixir", "raro", "edificios", "dos bárbaros", "madera", "push", "charge", "barbarians", "ram"],
        "Pescador": ["legendaria", "3 elixir", "anzuelo", "atrae", "caña", "hook", "fisherman", "activation", "synergy", "pull"],
        "Lanzarrocas": ["edificios", "6 elixir", "común", "distancia", "win condition", "edificio spawn", "boulders", "rocas", "siege", "tower"],
        "Lanzafuegos": ["edificios", "4 elixir", "raro", "fuego", "área", "spawn", "defensive", "flame", "chip", "support"],
        "Duende lanzadardos": ["3 elixir", "raro", "distancia", "dardos", "alto ataque", "goblin", "dps", "solitario", "sniper", "spear"],
        "Pandilla de duendes": ["3 elixir", "común", "seis duendes", "enjambre", "cuchillos", "gang", "swarm", "defense", "verde", "dps"],
        "Murciélagos": ["2 elixir", "común", "cinco unidades", "aéreos", "distracciones", "bats", "swarm", "cheap", "fast", "fragil"],
        "Trío de mosqueteras": ["9 elixir", "raro", "tres mosqueteras", "split", "distancia", "rifles", "push", "expensive", "sombreros", "dps"],
        "Príncipe": ["carga", "5 elixir", "épica", "caballo", "lanza", "charge damage", "counter", "heavy", "knight", "burst"],
        "Príncipe oscuro": ["carga", "4 elixir", "épica", "caballo negro", "lanza", "escudo", "shield", "charge", "dark", "protective"],
        "Espíritu de hielo": ["1 elixir", "común", "congela", "salta", "sacrificio", "hielo", "freeze", "cycle", "cheap", "slow"],
        "Espíritu de fuego": ["1 elixir", "común", "fuego", "salta", "área", "sacrificio", "flame", "cycle", "cheap", "tower chip"],
        "Curandera guerrera": ["4 elixir", "raro", "cura", "área", "guerrera", "heal", "support", "aura", "tropa", "buff"],
        "Paquete real": ["7 elixir", "legendaria", "rey y princesas", "tres cartas", "combo", "deploy", "synergy", "royal family", "expensive", "multiple"],
        "Dragones esqueléticos": ["4 elixir", "épica", "aéreos", "dos dragones", "área", "hueso", "voladores", "splash", "skeletons", "dragons"],
        "Bruja madre": ["4 elixir", "legendaria", "murciélagos", "cura", "invocadora", "morado", "support", "bats", "heal", "night witch"],
        "Rompemuros": ["2 elixir", "épica", "edificios", "rápido", "wallbreaker", "explosión", "kamikaze", "suicide", "barrel", "bomber"],
        "Fénix": ["4 elixir", "legendaria", "aéreo", "renace", "huevos", "phoenix", "revive", "egg", "fuego", "reborn"],
        "Monje": ["4 elixir", "legendaria", "refleja habilidades", "karate", "puño", "ability reflect", "counter", "martial arts", "monk", "ponsuke"],
        "Rey Esqueleto": ["4 elixir", "legendaria", "invoca", "esqueletos", "corona", "king", "bones", "spawner", "graveyard-like", "skeleton king"],
        "Reina Arquera": ["5 elixir", "legendaria", "arco", "invisible", "torre", "archer queen", "cloak", "ability", "long range", "royal"],
        "Caballero Dorado": ["4 elixir", "legendaria", "carga", "invulnerable al cargar", "dorado", "golden", "dash", "immunity", "knight", "shiny"],
        "Principito": ["2 elixir", "legendaria", "carga", "caballo pequeño", "niño", "little prince", "young", "charge", "mini", "baby"],
        "Duendes con lanza": ["2 elixir", "común", "tres duendes", "lanzas", "distancia", "goblins", "spear", "cheap", "verde", "trio"],
        "Gigante Noble": ["6 elixir", "raro", "tanque", "mustache", "dos duendes lanza", "spawn", "noble", "torre", "royal giant", "guns"],
        "Bárbaros de élite": ["6 elixir", "común", "dos bárbaros", "rápidos", "espadas", "elite", "fast", "muscular", "rush", "dps"],
        "Horda de esbirros": ["5 elixir", "común", "seis esbirros", "aéreos", "enjambre", "minion horde", "swarm", "air", "black", "dps"],
        "Esbirros": ["3 elixir", "común", "tres esbirros", "aéreos", "voladores", "minions", "air", "support", "flying", "trio"],
        "Cazador": ["4 elixir", "épica", "escopeta", "área cercana", "shotgun", "spread", "close range", "hunter", "beard", "damage"],
        "Mago": ["5 elixir", "raro", "fuego", "área", "barba", "wizard", "splash", "fireball", "robe", "support"],
        "Mini P.E.K.K.A": ["4 elixir", "raro", "espada", "alto daño", "robot pequeño", "pancakes", "mini", "dps", "dark", "armor"],
        "Valquiria": ["4 elixir", "raro", "hacha giratoria", "área 360", "pelirroja", "valkyrie", "spin", "splash", "round", "viking"],
        "Golem de elíxir": ["6 elixir", "raro", "tanque", "morado", "elixir al morir", "splits", "elixir golem", "blob", "purple", "regenerative"],
        "Cañón": ["3 elixir", "común", "edificio", "defensa", "barato", "cannon", "defensive", "simple", "anti-ground", "cheap"],
        "Cañón con ruedas": ["5 elixir", "raro", "móvil", "cañón", "ruedas", "cannon cart", "wheels", "shield", "moving", "versatile"],
        "Máquina voladora": ["4 elixir", "raro", "aérea", "edificios", "copter", "flying machine", "helicopter", "air", "siege", "range"],
        "Choza de duendes": ["4 elixir", "raro", "edificio", "invoca duendes", "spawn", "goblin hut", "spawner", "chip", "green", "consistent"],
        "Choza de bárbaros": ["6 elixir", "raro", "edificio", "invoca bárbaros", "spawn", "barbarian hut", "spawner", "expensive", "defense", "split"],
        "Lápida": ["3 elixir", "raro", "edificio", "invoca esqueletos", "muerte", "tombstone", "spawner", "distraction", "bones", "chip"],
        "Horno": ["4 elixir", "raro", "edificio", "espíritus fuego", "spawn", "furnace", "fire spirits", "chip", "tower damage", "cycling"],
        "Recolector de elíxir": ["6 elixir", "raro", "edificio", "genera elíxir", "inversión", "elixir collector", "pump", "economy", "investment", "ramp"],
        "Jaula del forzudo": ["4 elixir", "raro", "edificio", "atrae", "forzudo escapa", "fisherman building", "bait", "tombstone-like", "champion escape", "defensive"],
        "Terremoto": ["3 elixir", "raro", "hechizo", "edificios", "corona", "earthquake", "structures", "chip", "anti-building", "tower damage"],
        "Rayo": ["6 elixir", "épica", "hechizo", "alto daño", "aturdimiento", "tres objetivos", "lightning", "stun", "expensive", "multi-target"],
        "Clon": ["3 elixir", "épica", "hechizo", "duplica", "1 HP", "clone", "copy", "mirror-like", "double", "fragile"],
        "Espejo": ["variable", "épica", "hechizo", "repite carta", "+1 nivel", "mirror", "copy", "cycle", "level up", "repeat"],
        "Furia": ["2 elixir", "épica", "hechizo", "velocidad", "área", "rage", "boost", "speed", "attack speed", "movement"],
        "Congelar": ["4 elixir", "épica", "hechizo", "paraliza", "duración", "freeze", "stun", "stop", "ice", "lockdown"],
        "Curar": ["1 elixir", "raro", "hechizo", "vida", "tropas", "heal", "support", "hp", "recovery", "cheap"],
        "Barbacoa real": ["6 elixir", "épica", "hechizo", "jamón", "cura mucho", "royal delivery", "heal spell", "pork", "area heal", "expensive"],
        "Bombardero": ["2 elixir", "común", "área", "bomba", "tierra", "bomber", "splash", "cheap", "defensive", "explosive"],
        "Descarga": ["2 elixir", "común", "hechizo", "aturdimiento", "tres objetivos", "zap variant", "multi stun", "cheap", "reset", "versatile"],
        "Bola de nieve": ["2 elixir", "común", "hechizo", "ralentiza", "empuje", "snowball", "slow", "knockback", "cheap", "winter"],
        
        // Rock Internacional
        
        
        // Rock Internacional
        "Queen": ["Bohemian Rhapsody", "Freddie Mercury", "británica", "We Will Rock You", "años 70-80", "opera rock", "We Are the Champions", "Brian May", "Another One Bites the Dust", "icónica"],
        "The Beatles": ["británica", "Liverpool", "Lennon y McCartney", "Let It Be", "años 60", "Hey Jude", "Abbey Road", "Fab Four", "revolución musical", "Ringo"],
        "Led Zeppelin": ["Stairway to Heaven", "británica", "blues rock", "Robert Plant", "años 70", "Jimmy Page", "hard rock", "Whole Lotta Love", "Kashmir", "influencial"],
        "Pink Floyd": ["The Wall", "psicodélica", "británica", "Dark Side of the Moon", "progresivo", "Wish You Were Here", "Roger Waters", "conceptual", "Comfortably Numb", "experimental"],
        "The Rolling Stones": ["británica", "Satisfaction", "Mick Jagger", "gira constante", "años 60", "Keith Richards", "lengua logo", "Sympathy for the Devil", "Paint It Black", "longevos"],
        "AC/DC": ["australiana", "Highway to Hell", "Angus Young", "hard rock", "uniformes escolares", "Back in Black", "Thunderstruck", "Malcolm Young", "Brian Johnson", "riffs"],
        "Nirvana": ["grunge", "Kurt Cobain", "Smells Like Teen Spirit", "Seattle", "años 90", "Nevermind", "Come as You Are", "MTV Unplugged", "generación X", "trágico"],
        "Guns N' Roses": ["Appetite for Destruction", "Slash", "Sweet Child O' Mine", "hard rock", "años 80-90", "Axl Rose", "November Rain", "Welcome to the Jungle", "sombrero copa", "excesos"],
        "Metallica": ["thrash metal", "Master of Puppets", "Nothing Else Matters", "San Francisco", "años 80", "James Hetfield", "Enter Sandman", "Kill Em All", "Lars Ulrich", "Big Four"],
        "The Doors": ["Jim Morrison", "psicodélica", "Light My Fire", "años 60", "Los Ángeles", "Riders on the Storm", "The End", "Ray Manzarek", "poesía", "27 club"],
        "Jimi Hendrix": ["guitarra", "Purple Haze", "Woodstock", "años 60", "virtuoso", "distorsión", "himno USA", "innovador", "lefty", "Experience"],
        "The Who": ["My Generation", "británica", "rock ópera", "Pete Townshend", "años 60-70", "Won't Get Fooled Again", "Tommy", "destrucción", "mod", "Baba O'Riley"],
        "Black Sabbath": ["heavy metal", "Ozzy Osbourne", "Paranoid", "británica", "oscura", "Iron Man", "Tony Iommi", "Sabbath Bloody Sabbath", "doom", "pioneros metal"],
        "Deep Purple": ["Smoke on the Water", "británica", "hard rock", "órgano", "años 70", "Child in Time", "Jon Lord", "Highway Star", "Ian Gillan", "riff icónico"],
        "Aerosmith": ["Dream On", "Steven Tyler", "americana", "hard rock", "años 70", "Walk This Way", "Sweet Emotion", "I Don't Want to Miss a Thing", "Boston", "Joe Perry"],
        "U2": ["irlandesa", "Bono", "With or Without You", "activismo", "años 80", "The Joshua Tree", "One", "Where the Streets Have No Name", "The Edge", "humanitario"],
        "R.E.M.": ["Losing My Religion", "rock alternativo", "Athens Georgia", "años 80-90", "Stipe", "Everybody Hurts", "Shiny Happy People", "jangle pop", "college rock", "Michael Stipe"],
        "Radiohead": ["Creep", "británica", "OK Computer", "experimental", "Thom Yorke", "Paranoid Android", "Karma Police", "artístico", "progresivo", "In Rainbows"],
        "Oasis": ["Wonderwall", "británica", "hermanos Gallagher", "Britpop", "años 90", "Don't Look Back in Anger", "Champagne Supernova", "rivalidad Blur", "Manchester", "Liam y Noel"],
        "The Cure": ["Just Like Heaven", "gótica", "Robert Smith", "post-punk", "años 80", "Friday I'm in Love", "Lovesong", "maquillaje", "melancólica", "new wave"],
        "The Smiths": ["británica", "Morrissey", "indie rock", "años 80", "guitarra jangle", "Johnny Marr", "There Is a Light", "How Soon Is Now", "melancólico", "influencial"],
        "Red Hot Chili Peppers": ["californiana", "funk rock", "Flea", "Californication", "años 80", "Under the Bridge", "Scar Tissue", "Anthony Kiedis", "medias", "John Frusciante"],
        "Foo Fighters": ["Dave Grohl", "Everlong", "post-grunge", "años 90", "alternativa", "The Pretender", "Learn to Fly", "batería Nirvana", "rock melódico", "My Hero"],
        "Pearl Jam": ["grunge", "Seattle", "Eddie Vedder", "Alive", "años 90", "Jeremy", "Black", "Ten", "voz potente", "compromiso social"],
        "Soundgarden": ["grunge", "Chris Cornell", "Black Hole Sun", "Seattle", "años 90", "Spoonman", "voz poderosa", "Superunknown", "riffs pesados", "alternativo"],
        "Alice in Chains": ["grunge", "Seattle", "Layne Staley", "Man in the Box", "años 90", "Rooster", "Would?", "armonías vocales", "oscuro", "Jerry Cantrell"],
        "The Clash": ["punk rock", "británica", "London Calling", "política", "años 70-80", "Should I Stay or Should I Go", "Rock the Casbah", "Joe Strummer", "rebelde", "ska punk"],
        "Ramones": ["punk rock", "New York", "Blitzkrieg Bop", "chaquetas de cuero", "años 70", "I Wanna Be Sedated", "Rockaway Beach", "CBGB", "rápido", "minimalista"],
        "Sex Pistols": ["punk", "británica", "Anarchy in the UK", "Johnny Rotten", "años 70", "God Save the Queen", "Sid Vicious", "controversia", "efímera", "Malcolm McLaren"],
        "Green Day": ["punk rock", "Basket Case", "American Idiot", "años 90-2000", "californiana", "Boulevard of Broken Dreams", "When I Come Around", "Billie Joe", "pop punk", "Dookie"],
        "Blink-182": ["pop punk", "californiana", "All the Small Things", "años 90-2000", "juvenil", "What's My Age Again", "I Miss You", "Tom DeLonge", "humor", "skate"],
        "The Offspring": ["punk rock", "californiana", "Self Esteem", "años 90", "Come Out and Play", "Pretty Fly", "Smash", "The Kids Aren't Alright", "energético", "Dexter Holland"],
        "Linkin Park": ["nu metal", "Chester Bennington", "In the End", "rap rock", "años 2000", "Numb", "Hybrid Theory", "Mike Shinoda", "electrónico", "trágico final"],
        "System of a Down": ["metal alternativo", "armenia", "Toxicity", "Chop Suey!", "política", "B.Y.O.B.", "Serj Tankian", "caótico", "progresivo", "crítico"],
        "Rage Against the Machine": ["rap metal", "política", "Killing in the Name", "años 90", "Tom Morello", "Bulls on Parade", "Zack de la Rocha", "activismo", "funk metal", "rebelde"],
        "Iron Maiden": ["heavy metal", "británica", "Eddie mascota", "Bruce Dickinson", "años 80", "The Trooper", "Run to the Hills", "épico", "Harris", "powermetal"],
        "Judas Priest": ["heavy metal", "británica", "Rob Halford", "cuero", "años 70-80", "Breaking the Law", "You've Got Another Thing Comin'", "twin guitars", "NWOBHM", "operático"],
        "Slayer": ["thrash metal", "Reign in Blood", "extremo", "años 80", "californiana", "Angel of Death", "Raining Blood", "Kerry King", "agresivo", "Big Four"],
        "Megadeth": ["thrash metal", "Dave Mustaine", "años 80", "Symphony of Destruction", "técnico", "Peace Sells", "Hangar 18", "ex-Metallica", "complejo", "Big Four"],
        "Anthrax": ["thrash metal", "New York", "años 80", "rap metal fusion", "Big Four", "Madhouse", "I Am the Law", "Scott Ian", "crossover", "joey belladonna"],
        "Kiss": ["glam rock", "maquillaje", "Gene Simmons", "Rock and Roll All Nite", "años 70", "Detroit Rock City", "lengua", "plataformas", "Ace Frehley", "merchandising"],
        "Van Halen": ["hard rock", "Eddie Van Halen", "Jump", "tapping", "años 80", "Panama", "Eruption", "David Lee Roth", "virtuoso guitarra", "Hot for Teacher"],
        "Bon Jovi": ["rock melódico", "Livin' on a Prayer", "New Jersey", "años 80", "power ballads", "You Give Love a Bad Name", "Wanted Dead or Alive", "Jon Bon Jovi", "comercial", "Richie Sambora"],
        "Def Leppard": ["hard rock británica", "Photograph", "años 80", "Hysteria", "melódico", "Pour Some Sugar on Me", "Love Bites", "Rick Allen", "Sheffield", "producción"],
        "Mötley Crüe": ["glam metal", "años 80", "Dr. Feelgood", "excesos", "Sunset Strip", "Girls Girls Girls", "Kickstart My Heart", "Tommy Lee", "Vince Neil", "The Dirt"],
        
        // Rock Argentino
        "Soda Stereo": ["Gustavo Cerati", "De Música Ligera", "new wave", "argentina", "años 80-90", "Persiana Americana", "Zeta Bosio", "Charly Alberti", "Canción Animal", "culto"],
        "Los Fabulosos Cadillacs": ["ska", "Matador", "Vicentico", "coloridos", "años 80-90", "Grammy", "El Matador", "fusión", "Rey Azúcar", "internacional"],
        "Divididos": ["Ricardo Mollo", "rock duro", "Que Vas a Hacer Tan Sola", "argentina", "años 90", "Sisters", "Ala Delta", "Sumo después", "Arnedo", "culto"],
        "Sumo": ["Luca Prodan", "reggae rock", "La Rubia Tarada", "años 80", "italiano", "Mejor No Hablar", "Regtest", "mítico", "No Tan Distintos", "leyenda"],
        "Charly García": ["Clics Modernos", "piano", "Say No More", "icono", "años 80", "Promesas Sobre el Bidet", "Serú Girán", "Los Dinosaurios", "Raros Peinados", "genio"],
        "Virus": ["Federico Moura", "synth-pop", "Wadu Wadu", "años 80", "estética", "Una Luna de Miel", "Pecados", "new wave", "Luna de Miel", "trágico"],
        "Patricio Rey y sus Redonditos de Ricota": ["Indio Solari", "culto", "Jijiji", "underground", "mítica", "Gulp!", "La Mosca y la Sopa", "Estadio", "Oktubre", "religión"],
        "Los Enanitos Verdes": ["Lamento Boliviano", "Luz de Día", "Mendoza", "años 80", "melódico", "La Muralla Verde", "Por el Resto", "Marciano", "internacional", "power ballads"],
        "Attaque 77": ["punk rock", "Arrancacorazones", "años 80", "Buenos Aires", "hardcore", "Hacelo por Mí", "Ciro", "ska punk", "compromiso", "masivo"],
        "La Renga": ["hard rock", "Panic Show", "Chizzo", "years 90", "culto", "El Revelde", "Despedazado por Mil Partes", "Bailando en Una Pata", "La Esquina del Infinito", "fieles"],
        "Los Piojos": ["rock popular", "Cuervo", "años 90", "Buenos Aires", "masivo", "Verano del 92", "Tan Solo", "Andaluz", "Ritual", "icónico"],
        "Rata Blanca": ["heavy metal", "La Leyenda del Hada y el Mago", "Giardino", "años 80", "powermetal", "Mujer Amante", "Preludio Obsesivo", "neoclásico", "Saraceno", "técnico"],
        "Andrés Calamaro": ["solista", "Flaca", "Los Rodríguez", "prolífico", "años 90", "Bohemio", "Estadio Azteca", "Las Cruces", "Te Quiero Igual", "versátil"],
        "Fito Páez": ["El Amor Después del Amor", "piano", "Rosario", "Giros", "años 80-90", "11 y 6", "Ciudad de Pobres Corazones", "Tráfico por Katmandú", "Abre", "Charly colaborador"],
        "Luis Alberto Spinetta": ["Muchacha Ojos de Papel", "Almendra", "poético", "icono", "años 70", "Seguir Viviendo Sin Tu Amor", "Cantata de Puentes Amarillos", "Bajan", "virtuoso", "Flaco"],
        "Bersuit Vergarabat": ["fusión", "La Argentinidad al Palo", "murguero", "años 90", "fiesta", "Sr. Cobranza", "Se Viene", "político", "Cordera", "ecléctico"],
        "Las Pelotas": ["rock duro", "Será", "Sumo continuación", "Germán Daffunchio", "años 90", "Solito Vas", "Personalmente", "Más Feliz Que La Mierda", "crudeza", "Acho"],
        "Los Auténticos Decadentes": ["ska festivo", "Loco Tu Forma de Ser", "fiesta", "años 90", "Cucho", "Vení Raquel", "El Murguero", "fusión", "Mi Guitarra", "masivo"],
        "Los Ratones Paranoicos": ["rock and roll", "Reina Madre", "Juanse", "Stone's argentinos", "años 80-90", "Para Siempre", "Sigue Girando", "cowpunk", "Rolling Stones tributo", "actitud"],
        "Catupecu Machu": ["rock alternativo", "Magia Veneno", "años 90", "energía", "Ale Sergi", "Y Lo Que Quiero Es Que Pises Sin El Suelo", "Plan B", "experimental", "power", "Fernando"],
        "Viejas Locas": ["rock barrial", "Hermoza Locura", "Pity Álvarez", "años 90", "crudo", "Homero", "Intoxicados", "callejero", "Me Gustas Mucho", "tragedia"],
        "Callejeros": ["rock popular", "tragedia Cromañón", "Rotos", "años 90-2000", "Fontanet", "Distinto", "Señales", "Juntos", "trágico", "2004"],
        "Las Pastillas del Abuelo": ["rock festivo", "Lo Más Valioso", "años 2000", "fiesta", "masivo", "Ojos de Dragón", "murga rock", "Punta Mogotes", "popurrí", "estadios"],
        "No Te Va Gustar": ["uruguaya", "fusión", "Chau", "reggae rock", "masivo", "Clara", "Yuliano", "Montevideo", "rock latino", "internacional"],
        "La Vela Puerca": ["uruguaya", "rock festivo", "Zafar", "murga rock", "años 90", "El Viejo", "De Atar", "Sebastián", "estadios", "energía"],
        "Tan Biónica": ["pop rock", "Ciudad Mágica", "años 2000", "Chano", "masivo", "Loca", "Obsesionario", "pop", "hits", "controversia"],
        "El Bordo": ["Ella", "rock popular", "años 2000", "Buenos Aires", "barrial", "Tarde o Temprano", "Pibe Cantina", "masivo", "romántico", "estadios"],
        "Estelares": ["indie rock", "Aire", "Manuel Moretti", "años 90", "melódico", "La Caja de Pandora", "indie argentino", "refinado", "culto", "lírico"],
        "Juana Molina": ["experimental", "cantautora", "loops", "única", "hija de", "electrónica", "folk", "innovadora", "internacional", "Tres Cosas"],
        "Babasónicos": ["rock alternativo", "Putita", "experimental", "años 90", "Adrián Dárgelos", "Irresponsables", "electrónico", "Infame", "ecléctico", "cult"],
        "Los Pericos": ["reggae", "El Ritual de la Banana", "Juanchi", "años 80", "fiesta", "Waitin'", "jamaiquino", "californiano", "festivo", "ska"],
        "Karamelo Santo": ["fusión", "ska punk", "Que No Digan Nunca", "Goy", "años 90", "cumbia punk", "político", "Los Corazones", "colorido", "mestizaje"],
        "Turf": ["indie rock", "Pasos al Costado", "años 90", "Buenos Aires", "melódico", "indie", "Cuatro Personalidades", "Joaquín Levinton", "culto", "refinado"],
        "Miranda!": ["electropop", "Yo Te Diré", "Ale Sergi", "años 2000", "festivo", "Don", "Bailarina", "dance", "colorido", "pop"],
        "Illya Kuryaki and the Valderramas": ["hip hop rock", "Abarajame", "Dante y Emmanuel", "fusión", "años 90", "Ula Ula", "Chaco", "rap latino", "funk", "Rosario"],
        "Kapanga": ["rock festivo", "El Mono Relojero", "años 90", "fiesta", "cumbia rock", "Demasiado", "Acomodador de Situaciones", "divertido", "Mono", "masivo"],
        "Massacre": ["punk hardcore", "años 80", "Stuka", "extremo", "underground", "Obras Incompletas", "crudeza", "fast", "histórico", "pionero"],
        "Los Violadores": ["punk", "Represión", "Stuka", "años 80", "pioneros", "Uno Dos Ultraviolento", "Comunicado 166", "hardcore", "fundacional", "trágico"],
        "2 Minutos": ["punk rock", "Arrebato", "Valentín", "años 90", "directo", "Ya No Sos Igual", "Valentín Alsina", "barrial", "simple", "honesto"],
        "Fun People": ["hardcore punk", "años 90", "indie", "Nekro", "emocional", "Kum Kum", "melódico", "emo", "tragedia", "culto"],
        "Hermética": ["heavy metal", "Iorio", "thrash", "años 80-90", "nacional", "Craneo Candente", "Víctimas del Vaciamiento", "Evitando el Ablande", "Claudio Marciello", "fundacional"],
        "Almafuerte": ["heavy metal", "Ricardo Iorio", "años 90", "Toro y Pampa", "crudo", "Peso Argento", "heavy argentino", "directo", "nacional", "power"],
        "Pappo": ["blues rock", "Riff", "guitarra", "icono", "años 70-80", "Desconfío", "Blues Local", "virtuoso", "leyenda", "trágico"],
        "Manal": ["blues rock pionero", "Avellaneda Blues", "años 60", "Javier Martínez", "fundacional", "Jugo de Tomate", "power trio", "underground", "histórico", "revolucionario"],
        "Pescado Rabioso": ["Spinetta", "rock progresivo", "Post Crucifixión", "años 70", "experimental", "Artaud", "Despiértate Nena", "complejo", "Blues de Cris", "mítico"],
        "Invisible": ["Spinetta", "progresivo", "Durazno Sangrando", "años 70", "conceptual", "Encadenado al Ánima", "jazz rock", "fusion", "Pomo", "Machi"],
        "Serú Girán": ["Charly García", "progresivo", "Seminare", "años 70-80", "supergrupo", "Bicicleta", "Peperina", "Viernes 3 AM", "Aznar", "Pedro"],
        "Moris": ["pionero", "De Nada Sirve", "años 60", "beat", "fundacional", "Rebelde", "hippie", "primer disco solista", "Buenos Aires", "histórico"],
        "Litto Nebbia": ["Los Gatos", "La Balsa", "años 60", "pionero", "fundacional", "primera canción rock nacional", "Melopea", "versátil", "Rosario", "histórico"],
        "León Gieco": ["folk rock", "Solo le Pido a Dios", "años 70", "social", "protesta", "La Memoria", "Hombres de Hierro", "político", "compromiso", "voz"],
        "Mercedes Sosa": ["folklore", "voz potente", "Alfonsina y el Mar", "Tucumán", "icono", "Gracias a la Vida", "La Negra", "Nueva Canción", "latinoamericana", "leyenda"],
        "GIT": ["Gustavo Nápoli", "rock progresivo", "años 80", "instrumental", "técnico", "virtuoso", "guitarra", "neoclásico", "culto", "refinado"],
        "V8": ["heavy metal", "Cautivo del Sistema", "Ricardo Iorio", "años 80", "pionero", "Luchando por el Metal", "thrash", "Osvaldo", "velocidad", "crudo"],
        "A.N.I.M.A.L": ["metal", "thrash", "años 90", "El Nuevo Camino del Hombre", "Andrés Giménez", "Poder Latino", "groove", "máquinas", "agresivo", "político"],
        "Ciro y Los Persas": ["rock popular", "Ciro", "ex Piojos", "años 2010", "masivo", "Nena", "Antes y Después", "estadios", "continuación", "hits"],
        "Él Mato a un Policía Motorizado": ["indie rock", "años 2000", "noise pop", "La Plata", "underground", "Un Destello", "shoegaze", "Santiago", "culto", "experimental"],
        "Conociendo Rusia": ["indie pop", "Cabildo y Juramento", "años 2010", "melódico", "Mateo Sujatovich", "Cosas Para Decirte", "indie argentino", "joven", "refinado", "fresh"],
        "Bandalos Chinos": ["indie rock", "El Ídolo", "años 2010", "Buenos Aires", "moderno", "Varias Emociones", "indie pop", "Goyo", "Iñaki", "fresco"],
        "Cuentos Borgeanos": ["stoner rock", "Lomas de Zamora", "años 90", "pesado", "underground", "riffs", "sludge", "instrumental", "psicodélico", "denso"],
        
        // Películas
        "El Padrino": ["mafia", "Vito Corleone", "oferta que no puede rechazar", "Coppola", "años 70"],
        "Pulp Fiction": ["Tarantino", "no lineal", "maletín", "danza", "años 90"],
        "El Señor de los Anillos": ["Frodo", "anillo", "Tierra Media", "épica", "trilogía"],
        "Star Wars": ["Jedi", "Vader", "espacio", "saga", "La Fuerza"],
        "Titanic": ["barco", "iceberg", "Jack y Rose", "hundimiento", "años 90"],
        "Forrest Gump": ["pluma", "corre", "Tom Hanks", "historia americana", "chocolates"],
        "Matrix": ["Neo", "píldoras", "simulación", "kung fu", "Wachowski"],
        "Inception": ["sueños", "Cobb", "trompo", "Nolan", "niveles"],
        "Interstellar": ["espacio", "agujero de gusano", "Cooper", "Nolan", "tiempo"],
        "The Dark Knight": ["Joker", "Heath Ledger", "Gotham", "Batman", "Nolan"],
        "Fight Club": ["Brad Pitt", "reglas", "jabón", "Tyler Durden", "twist"],
        "Gladiador": ["Roma", "Maximus", "arena", "venganza", "Russell Crowe"],
        "Volver al Futuro": ["DeLorean", "viaje en el tiempo", "Marty", "Doc", "años 80"],
        "Jurassic Park": ["dinosaurios", "isla", "T-Rex", "Spielberg", "clonación"],
        "E.T.": ["extraterrestre", "dedo", "bicicleta", "Spielberg", "niños"],
        "Tiburón": ["playa", "aleta", "Amity", "Spielberg", "terror"],
        "Indiana Jones": ["arqueólogo", "látigo", "aventuras", "Spielberg", "tesoros"],
        "Toy Story": ["juguetes", "Woody", "Buzz", "Pixar", "animada"],
        "El Rey León": ["Simba", "sabana", "Mufasa", "Hakuna Matata", "Disney"],
        "Shrek": ["ogro", "pantano", "Burro", "DreamWorks", "princesa"],
        "Buscando a Nemo": ["pez payaso", "océano", "Dory", "Pixar", "acuario"],
        "Frozen": ["Let It Go", "Elsa", "hielo", "Disney", "hermanas"],
        "Coco": ["Día de Muertos", "Miguel", "guitarra", "Pixar", "familia"],
        "Up": ["globos", "casa voladora", "Carl", "Pixar", "aventura"],
        "Wall-E": ["robot", "basura", "espacio", "Pixar", "amor"],
        "Los Increíbles": ["superhéroes", "familia", "Mr. Increíble", "Pixar", "retiro"],
        "Ratatouille": ["rata", "cocina", "París", "Pixar", "chef"],
        "Intensamente": ["emociones", "Riley", "cerebro", "Pixar", "Alegría y Tristeza"],
        "Moana": ["océano", "Maui", "isla", "Disney", "corazón de Te Fiti"],
        "Enredados": ["Rapunzel", "torre", "pelo largo", "Disney", "sartén"],
        "La Bella y la Bestia": ["rosa", "castillo", "Belle", "Disney", "hechizo"],
        "La Sirenita": ["Ariel", "mar", "voz", "Disney", "Bajo el Mar"],
        "Aladdin": ["genio", "lámpara", "alfombra", "Disney", "Agrabah"],
        "El Viaje de Chihiro": ["Ghibli", "Miyazaki", "Sin Rostro", "Yubaba", "fantasía"],
        "Mi Vecino Totoro": ["Ghibli", "espíritu del bosque", "niñas", "Miyazaki", "paraguas"],
        "La Princesa Mononoke": ["Ghibli", "bosque", "San", "Miyazaki", "naturaleza"],
        "Harry Potter": ["mago", "Hogwarts", "varita", "saga", "Voldemort"],
        "El Hobbit": ["Bilbo", "Smaug", "anillo", "Peter Jackson", "Tierra Media"],
        "Piratas del Caribe": ["Jack Sparrow", "Perla Negra", "mar", "Johnny Depp", "fantasía"],
        "Avatar": ["Pandora", "Na'vi", "James Cameron", "azul", "3D"],
        "Los Vengadores": ["superhéroes", "Marvel", "equipo", "Thanos", "Infinity War"],
        "Iron Man": ["Tony Stark", "armadura", "Marvel", "reactor arc", "Robert Downey Jr"],
        "Capitán América": ["Steve Rogers", "escudo", "Marvel", "súper soldado", "WWII"],
        "Thor": ["Asgard", "martillo", "Odín", "Marvel", "dios del trueno"],
        "Spider-Man": ["araña", "telaraña", "Peter Parker", "Marvel", "Nueva York"],
        "Black Panther": ["Wakanda", "T'Challa", "vibranium", "Marvel", "África"],
        "Doctor Strange": ["hechicero supremo", "ojo de Agamotto", "Marvel", "dimensiones", "magia"],
        "Guardianes de la Galaxia": ["espacio", "Groot", "Star-Lord", "Marvel", "walkman"],
        "Deadpool": ["antihéroe", "rompe cuarta pared", "Marvel", "mercenario", "humor"],
        "The Batman": ["Gotham", "Riddler", "Robert Pattinson", "detective", "oscura"],
        "Joker": ["Joaquin Phoenix", "Gotham", "payaso", "origen", "escaleras"],
        "El Caballero de la Noche Asciende": ["Bane", "Batman", "Gotham", "Nolan", "final"],
        "Superman": ["Krypton", "capa roja", "Clark Kent", "DC", "vuela"],
        "Wonder Woman": ["amazona", "lazo", "Diana", "DC", "WWI"],
        "Shazam": ["niño héroe", "palabra mágica", "DC", "familia", "comedia"],
        "Aquaman": ["Atlantis", "tridente", "mar", "DC", "Jason Momoa"],
        "El Conjuro": ["Warren", "casa embrujada", "terror", "James Wan", "exorcismo"],
        "Annabelle": ["muñeca poseída", "terror", "El Conjuro universo", "Warren", "maldita"],
        "Insidious": ["James Wan", "astral", "niño", "terror", "la Ulterior"],
        "Actividad Paranormal": ["cámara fija", "noche", "casa", "found footage", "terror"],
        "The Ring": ["videocinta", "7 días", "Samara", "pozo", "terror"],
        "IT": ["payaso", "Pennywise", "Derry", "Stephen King", "alcantarilla"],
        "El Exorcista": ["posesión", "niña", "sacerdote", "terror", "años 70"],
        "Psicosis": ["Hitchcock", "ducha", "motel", "madre", "Norman Bates"],
        "El Resplandor": ["hotel", "laberinto", "Jack", "Kubrick", "Here's Johnny"],
        "Alien": ["espacio", "xenomorfo", "Ripley", "nave", "horror"],
        "Terminator": ["T-800", "Schwarzenegger", "futuro", "Skynet", "I'll be back"],
        "Depredador": ["selva", "alien cazador", "Schwarzenegger", "camuflaje", "acción"],
        "Rocky": ["boxeo", "Filadelfia", "Stallone", "escaleras", "underdog"],
        "Rambo": ["Stallone", "Vietnam", "supervivencia", "acción", "cuchillo"],
        "John Wick": ["asesino", "perro", "Keanu Reeves", "Continental", "venganza"],
        "Mad Max": ["desierto", "post-apocalíptico", "Fury Road", "autos", "Immortan Joe"],
        
        // Pokémon
        "Pikachu": ["eléctrico", "ratón amarillo", "mejillas rojas", "mascota de Ash", "cola de rayo"],
        "Charizard": ["fuego y volador", "dragón naranja", "escupe fuego", "alas", "evolución de Charmeleon"],
        "Bulbasaur": ["planta y veneno", "bulbo en la espalda", "starter", "cuadrúpedo", "número 1 de la Pokédex"],
        "Squirtle": ["agua", "tortuga azul", "caparazón", "starter", "escuadrón"],
        "Mewtwo": ["psíquico", "legendario", "clonado de Mew", "poderoso", "cola larga"],
        "Mew": ["psíquico", "legendario rosa", "ancestro de todos", "puede aprender todo", "flotante"],
        "Eevee": ["normal", "evoluciones múltiples", "peludo marrón", "cola esponjosa", "ocho evoluciones"],
        "Snorlax": ["normal", "duerme todo el tiempo", "muy gordo", "bloquea rutas", "flauta pokémon"],
        "Gengar": ["fantasma y veneno", "sombra", "sonrisa", "morado", "lengua larga"],
        "Dragonite": ["dragón y volador", "naranja", "amigable", "pseudo legendario", "antenas"],
        "Gyarados": ["agua y volador", "serpiente azul", "agresivo", "evoluciona de Magikarp", "bigotes"],
        "Lucario": ["lucha y acero", "chacal azul", "aura", "pinchos", "mega evolución"],
        "Greninja": ["agua y siniestro", "rana ninja", "lengua como bufanda", "Ash-Greninja", "rápido"],
        "Blaziken": ["fuego y lucha", "pollo", "patadas", "starter final Hoenn", "mega evolución"],
        "Umbreon": ["siniestro", "evolución de Eevee", "negro con anillos", "brilla de noche", "felino"],
        "Espeon": ["psíquico", "evolución de Eevee", "lila", "cola bífida", "evoluciona de día"],
        "Jolteon": ["eléctrico", "evolución de Eevee", "amarillo con púas", "muy rápido", "piedra trueno"],
        "Vaporeon": ["agua", "evolución de Eevee", "azul sirena", "cola de pez", "piedra agua"],
        "Flareon": ["fuego", "evolución de Eevee", "naranja peludo", "collar esponjoso", "piedra fuego"],
        "Leafeon": ["planta", "evolución de Eevee", "verde con hojas", "roca musgo", "cola hoja"],
        "Glaceon": ["hielo", "evolución de Eevee", "azul celeste", "cristales de hielo", "roca hielo"],
        "Sylveon": ["hada", "evolución de Eevee", "rosa con lazos", "listones", "amistad"],
        "Meowth": ["normal", "gato moneda", "Team Rocket", "habla humano", "moneda en frente"],
        "Psyduck": ["agua", "pato amarillo", "dolor de cabeza", "confundido", "poderes psíquicos"],
        "Machamp": ["lucha", "cuatro brazos", "muy musculoso", "cinturón campeón", "intercambio"],
        "Alakazam": ["psíquico", "cucharas en las manos", "IQ alto", "bigote", "intercambio"],
        "Golem": ["roca y tierra", "redondo con espinas", "resistente", "intercambio", "piedra"],
        "Raichu": ["eléctrico", "evolución de Pikachu", "naranja", "cola rayos", "piedra trueno"],
        "Arcanine": ["fuego", "perro tigre", "muy rápido", "leal", "majestuoso"],
        "Ninetales": ["fuego", "zorro nueve colas", "místico", "piedra fuego", "pelaje dorado"],
        "Pidgeot": ["normal y volador", "pájaro grande", "cresta colorida", "mega evolución", "rápido"],
        "Fearow": ["normal y volador", "ave rapaz", "pico largo", "agresivo", "cuello"],
        "Sandslash": ["tierra", "pangolín con espinas", "garras afiladas", "amarillo", "cava"],
        "Nidoking": ["veneno y tierra", "cuerno púrpura", "muy fuerte", "piedra lunar", "macho"],
        "Nidoqueen": ["veneno y tierra", "azul robusta", "protectora", "piedra lunar", "hembra"],
        "Clefable": ["hada", "rosado alado", "orejas puntiagudas", "piedra lunar", "mágico"],
        "Wigglytuff": ["normal y hada", "globo rosa", "ojos grandes", "canta", "piedra lunar"],
        "Venomoth": ["bicho y veneno", "polilla morada", "alas con escalas", "tóxico", "vuela"],
        "Dugtrio": ["tierra", "tres topos", "nariz rosa", "bajo tierra", "trío"],
        "Persian": ["normal", "gato elegante", "gema en frente", "sofisticado", "cuadrúpedo"],
        "Golduck": ["agua", "pato azul", "gema roja", "nadador rápido", "psíquico"],
        "Primeape": ["lucha", "mono furioso", "puños cerrados", "siempre enojado", "cola en espiral"],
        "Poliwrath": ["agua y lucha", "rana musculosa", "espiral en abdomen", "nadador", "piedra agua"],
        "Abra": ["psíquico", "siempre duerme", "teletransporte", "huye", "primera etapa"],
        "Kadabra": ["psíquico", "una cuchara", "cola gruesa", "estrella en frente", "intercambio"],
        "Machoke": ["lucha", "culturista", "cinturón de energía", "muy fuerte", "intercambio"],
        "Victreebel": ["planta y veneno", "carnívora", "boca grande", "come insectos", "piedra hoja"],
        "Tentacruel": ["agua y veneno", "medusa grande", "tentáculos", "gemas rojas", "océano"],
        "Rapidash": ["fuego", "caballo con llamas", "cuerno", "muy veloz", "carreras"],
        "Slowbro": ["agua y psíquico", "Shellder en cola", "rosa gordo", "lento", "despistado"],
        "Magneton": ["eléctrico y acero", "tres imanes", "levita", "sin género", "campo magnético"],
        "Dodrio": ["normal y volador", "tres cabezas", "no vuela", "muy rápido", "avestruz"],
        "Dewgong": ["agua y hielo", "foca blanca", "cuerno", "nada en hielo", "elegante"],
        "Muk": ["veneno", "lodo tóxico", "morado baboso", "olor fétido", "amorfo"],
        "Cloyster": ["agua y hielo", "almeja con púas", "concha negra", "defensa alta", "piedra agua"],
        "Haunter": ["fantasma y veneno", "manos flotantes", "lengua larga", "pesadillas", "intercambio"],
        "Hypno": ["psíquico", "péndulo en mano", "hipnotiza", "amarillo peludo", "sueño"],
        "Kingler": ["agua", "cangrejo grande", "pinza gigante", "rojo", "camina de lado"],
        "Electrode": ["eléctrico", "pokébola invertida", "explota", "muy rápido", "esférico"],
        "Exeggutor": ["planta y psíquico", "palmera con huevos", "tres cabezas", "alto", "piedra hoja"],
        "Marowak": ["tierra", "hueso como arma", "cráneo puesto", "madre fallecida", "guerrero"],
        "Hitmonlee": ["lucha", "piernas elásticas", "patadas", "sin cabeza aparente", "Bruce Lee"],
        "Hitmonchan": ["lucha", "puños", "boxeador", "guantes", "Jackie Chan"],
        "Lickitung": ["normal", "lengua enorme", "rosa", "lame todo", "torpe"],
        "Koffing": ["veneno", "bola flotante", "gases tóxicos", "calavera", "explota"],
        "Weezing": ["veneno", "dos cabezas", "gases", "James", "contamina"],
        "Rhyhorn": ["tierra y roca", "rinoceronte", "carga", "armadura", "primera evolución"],
        "Rhydon": ["tierra y roca", "taladro", "fuerte", "bipedo", "evoluciona más"],
        "Chansey": ["normal", "huevo", "enfermera Joy", "rosada", "feliz"],
        "Tangela": ["planta", "enredaderas", "ojos escondidos", "azul", "enredado"],
        "Kangaskhan": ["normal", "canguro", "bebé en bolsa", "maternal", "mega evolución"],
        "Horsea": ["agua", "caballito de mar", "azul", "tinta", "enroscado"],
        "Seadra": ["agua", "dragón marino", "espinas", "evoluciona más", "veneno"],
        "Starmie": ["agua y psíquico", "estrella de mar", "gema roja", "gira", "piedra agua"],
        "Mr. Mime": ["psíquico y hada", "mimo", "barreras invisibles", "payaso", "Ash madre"],
        "Scyther": ["bicho y volador", "mantis", "guadañas", "verde", "rápido"],
        "Jynx": ["hielo y psíquico", "humanoid", "beso", "canta", "cabello rubio"],
        "Electabuzz": ["eléctrico", "amarillo y negro", "rayos", "cola", "central eléctrica"],
        "Magmar": ["fuego", "pato de fuego", "rojo y amarillo", "cola llama", "volcán"],
        "Pinsir": ["bicho", "escarabajo", "cuernos pinza", "mega evolución", "bosque"],
        "Tauros": ["normal", "toro", "tres colas", "embiste", "Ash tiene 30"],
        "Magikarp": ["agua", "inútil", "salpicadura", "evolución poderosa", "pez"],
        "Lapras": ["agua y hielo", "transporte", "canta", "caparazón", "en peligro"],
        "Ditto": ["normal", "transforma", "rosa gelatina", "cara simple", "crianza"],
        "Vaporeon": ["agua", "evolución Eevee", "sirena", "cola pez", "piedra agua"],
        "Porygon": ["normal", "digital", "polígonos", "cyber", "episodio prohibido"],
        "Omanyte": ["roca y agua", "fósil", "espiral", "tentáculos", "extinto"],
        "Omastar": ["roca y agua", "amonita", "espiral grande", "fósil", "concha"],
        "Kabuto": ["roca y agua", "fósil", "herradura", "plano", "cúpula"],
        "Kabutops": ["roca y agua", "fósil", "hoces", "depredador", "camina"],
        "Aerodactyl": ["roca y volador", "pterodáctilo", "fósil", "dientes", "mega evolución"],
        "Snorlax": ["normal", "duerme", "gordo", "flauta", "bloquea"],
        "Articuno": ["hielo y volador", "legendario", "ave azul", "congela", "trío de aves"],
        "Zapdos": ["eléctrico y volador", "legendario", "ave amarilla", "truenos", "trío de aves"],
        "Moltres": ["fuego y volador", "legendario", "ave de fuego", "llamas", "trío de aves"],
        "Dratini": ["dragón", "serpiente azul", "cristal frente", "primera evolución", "lago"],
        "Dragonair": ["dragón", "serpiente", "alas en cabeza", "cristales", "mítico"],
        "Dragonite": ["dragón y volador", "naranja", "antenas", "amigable", "pseudo legendario"],
        "Mewtwo": ["psíquico", "clonado", "poderoso", "película", "cola"],
        "Mew": ["psíquico", "ancestro", "rosa", "legendario", "transforma"],
        "Chikorita": ["planta", "hoja en cabeza", "starter Johto", "cuello", "olor"],
        "Bayleef": ["planta", "cuello largo", "hoja", "aroma", "Johto"],
        "Meganium": ["planta", "cuello de flor", "antenas", "fragancia", "starter final"],
        "Cyndaquil": ["fuego", "ratón", "llamas en espalda", "starter Johto", "tímido"],
        "Quilava": ["fuego", "fuego en espalda", "comadreja", "Johto", "rápido"],
        "Typhlosion": ["fuego", "tejón", "explosión", "starter final", "Johto"],
        "Totodile": ["agua", "cocodrilo", "mandíbulas", "starter Johto", "baila"],
        "Croconaw": ["agua", "cocodrilo", "muerde", "Johto", "agresivo"],
        "Feraligatr": ["agua", "cocodrilo grande", "mandíbulas poderosas", "starter final", "intimidante"],
        "Sentret": ["normal", "ardilla", "vigía", "cola", "Johto"],
        "Furret": ["normal", "largo", "camina en dos patas", "cola rayada", "delgado"],
        "Hoothoot": ["normal y volador", "búho", "una pata", "reloj interno", "noche"],
        "Noctowl": ["normal y volador", "búho grande", "cejas", "dorado shiny", "Ash"],
        "Ledyba": ["bicho y volador", "mariquita", "cinco puntos", "tímido", "grupo"],
        "Ledian": ["bicho y volador", "mariquita grande", "cuatro brazos", "puntos", "boxea"],
        "Spinarak": ["bicho y veneno", "araña", "cara", "telaraña", "nocturno"],
        "Ariados": ["bicho y veneno", "araña", "cuerno", "patas largas", "cuatro ojos"],
        "Crobat": ["veneno y volador", "murciélago", "cuatro alas", "rápido", "amistad"],
        "Chinchou": ["agua y eléctrico", "pez linterna", "antenas luz", "océano profundo", "amarillo"],
        "Lanturn": ["agua y eléctrico", "rape", "luz", "océano", "antena"],
        "Pichu": ["eléctrico", "pre-evolución Pikachu", "bebé", "amistad", "se daña solo"],
        "Cleffa": ["hada", "bebé", "estrella", "amistad", "cola"],
        "Igglybuff": ["normal y hada", "bebé", "globo", "amistad", "rosado"],
        "Togepi": ["hada", "huevo", "cáscara", "Misty", "felicidad"],
        "Togetic": ["hada y volador", "alegría", "vuela", "felicidad", "alas"],
        "Natu": ["psíquico y volador", "pájaro", "no vuela aún", "mira fijo", "pequeño"],
        "Xatu": ["psíquico y volador", "tótem", "ve futuro", "pájaro", "quieto"],
        "Mareep": ["eléctrico", "oveja", "lana", "cola", "granja"],
        "Flaaffy": ["eléctrico", "oveja rosa", "sin lana completa", "cola bola", "electricidad"],
        "Ampharos": ["eléctrico", "faro", "cola luz", "mega evolución", "dragón mega"],
        "Bellossom": ["planta", "hawaiano", "baila", "sol", "piedra sol"],
        "Marill": ["agua y hada", "ratón azul", "cola bola", "oreja redonda", "Azurill"],
        "Azumarill": ["agua y hada", "conejo", "orejas largas", "patrón", "barriga"],
        "Sudowoodo": ["roca", "parece árbol", "llora", "imitación", "roca spray"],
        "Politoed": ["agua", "rana", "rizo en cabeza", "canta", "rey"],
        "Hoppip": ["planta y volador", "diente de león", "vuela con viento", "rosa", "hojas"],
        "Skiploom": ["planta y volador", "flor", "vuela", "sol", "feliz"],
        "Jumpluff": ["planta y volador", "algodón", "semillas", "vuela lejos", "tres pompones"],
        "Aipom": ["normal", "mono", "cola mano", "púrpura", "travieso"],
        "Sunkern": ["planta", "semilla", "más débil", "sol", "amarillo"],
        "Sunflora": ["planta", "girasol", "baila", "sol", "feliz"],
        "Yanma": ["bicho y volador", "libélula", "ojos rojos", "velocidad", "verde"],
        "Wooper": ["agua y tierra", "ajolote", "sonriente", "baboso", "cola"],
        "Quagsire": ["agua y tierra", "salamandra", "tranquilo", "bobo", "despistado"],
        "Espeon": ["psíquico", "Eevee", "lila", "gema frente", "día"],
        "Umbreon": ["siniestro", "Eevee", "negro", "anillos", "noche"],
        "Murkrow": ["siniestro y volador", "cuervo", "sombrero bruja", "noche", "mala suerte"],
        "Slowking": ["agua y psíquico", "Shellder en cabeza", "corona", "inteligente", "rey"],
        "Misdreavus": ["fantasma", "grito", "perlas", "pelo", "noche"],
        "Unown": ["psíquico", "alfabeto", "ojo", "dimensión", "ruinas"],
        "Wobbuffet": ["psíquico", "azul", "contra", "cola", "Jessie"],
        "Girafarig": ["normal y psíquico", "jirafa", "dos cabezas", "cola cerebro", "palindromo"],
        "Pineco": ["bicho", "piña", "explota", "trampa", "acero"],
        "Forretress": ["bicho y acero", "fortaleza", "púas", "explota", "defensa"],
        "Dunsparce": ["normal", "serpiente", "alas", "raro", "taladro"],
        "Gligar": ["tierra y volador", "escorpión", "alas", "cola", "vampiro"],
        "Steelix": ["acero y tierra", "serpiente metal", "enorme", "intercambio", "mandíbulas"],
        "Snubbull": ["hada", "bulldog", "rosa", "colmillos", "gruñón"],
        "Granbull": ["hada", "bulldog púrpura", "colmillos grandes", "tierno", "fuerte"],
        "Qwilfish": ["agua y veneno", "pez globo", "púas", "veneno", "infla"],
        "Scizor": ["bicho y acero", "pinzas", "rojo", "intercambio", "mega evolución"],
        "Shuckle": ["bicho y roca", "caparazón", "fermenta", "defensa máxima", "tentáculos"],
        "Heracross": ["bicho y lucha", "escarabajo", "cuerno", "fuerte", "mega evolución"],
        "Sneasel": ["siniestro y hielo", "comadreja", "garras", "gema frente", "rápido"],
        "Teddiursa": ["normal", "osito", "luna frente", "miel", "bebé"],
        "Ursaring": ["normal", "oso", "anillo", "fuerte", "agresivo"],
        "Slugma": ["fuego", "lava", "babosa", "caliente", "magma"],
        "Magcargo": ["fuego y roca", "caracol lava", "caparazón", "caliente", "volcán"],
        "Swinub": ["hielo y tierra", "jabalí", "peludo", "olfato", "nieve"],
        "Piloswine": ["hielo y tierra", "mamut", "colmillos", "pelo cubre ojos", "evoluciona más"],
        "Corsola": ["agua y roca", "coral", "rosa", "ramas", "océano"],
        "Remoraid": ["agua", "pez", "pistola", "evolución rara", "Octillery"],
        "Octillery": ["agua", "pulpo", "ventosas", "tinta", "cañón"],
        "Delibird": ["hielo y volador", "pingüino", "saco regalos", "Navidad", "reparte"],
        "Mantine": ["agua y volador", "manta raya", "alas", "Remoraid", "océano"],
        "Skarmory": ["acero y volador", "pájaro metal", "afilado", "nido", "armadura"],
        "Houndour": ["siniestro y fuego", "perro", "cuernos", "aúlla", "manada"],
        "Houndoom": ["siniestro y fuego", "perro", "cuernos", "mega evolución", "demonio"],
        "Kingdra": ["agua y dragón", "dragón marino", "escamas dragón", "intercambio", "profundo"],
        "Phanpy": ["tierra", "elefante", "trompa", "rueda", "bebé"],
        "Donphan": ["tierra", "elefante", "rueda", "colmillos", "gira"],
        "Porygon2": ["normal", "evolución", "mejora", "digital", "dudoso"],
        "Stantler": ["normal", "ciervo", "astas", "hipnosis", "Navidad"],
        "Smeargle": ["normal", "pintor", "cola pincel", "bosquejo", "arte"],
        "Tyrogue": ["lucha", "bebé", "pañal", "tres evoluciones", "stats"],
        "Hitmontop": ["lucha", "trompo", "gira", "cabeza", "baila"],
        "Smoochum": ["hielo y psíquico", "bebé", "beso", "rubio", "Jynx"],
        "Elekid": ["eléctrico", "bebé", "enchufe", "gira brazos", "Electabuzz"],
        "Magby": ["fuego", "bebé", "pato", "cola llama", "Magmar"],
        "Miltank": ["normal", "vaca", "leche", "Whitney", "rueda"],
        "Blissey": ["normal", "enfermera", "huevo", "felicidad", "defensa especial"],
        "Raikou": ["eléctrico", "legendario", "tigre", "trueno", "perro legendario"],
        "Entei": ["fuego", "legendario", "león", "volcán", "perro legendario"],
        "Suicune": ["agua", "legendario", "leopardo", "aurora", "perro legendario"],
        "Larvitar": ["roca y tierra", "come montañas", "verde", "pseudo", "primera"],
        "Pupitar": ["roca y tierra", "crisálida", "capullo", "duro", "segunda"],
        "Tyranitar": ["roca y siniestro", "Godzilla", "pseudo legendario", "destructivo", "mega evolución"],
        "Lugia": ["psíquico y volador", "guardián del mar", "plata", "película", "legendario"],
        "Ho-Oh": ["fuego y volador", "fénix", "arcoiris", "sagrado", "legendario"],
        "Celebi": ["psíquico y planta", "viajes tiempo", "bosque", "mítico", "verde"]
    };
    
    // Si existe en el diccionario, usar esas pistas
    if (pistasEspecificas[palabra]) {
        pistas.push(...pistasEspecificas[palabra]);
    }
    
    // Pistas inteligentes por categoría
    const pistasCategoria = generarPistasPorCategoria(palabra, categoria);
    pistas.push(...pistasCategoria);
    
    // Eliminar duplicados y limitar a 15 pistas
    return [...new Set(pistas)].slice(0, 15);
}

// Generar pistas inteligentes basadas en la categoría
function generarPistasPorCategoria(palabra, categoria) {
    const pistas = [];
    const palabraLower = palabra.toLowerCase();
    
    switch(categoria) {
        case "Animales":
            // Clasificaciones
            if (["Perro", "Gato", "Conejo", "Hámster"].includes(palabra)) pistas.push("mascota", "doméstico");
            if (["León", "Tigre", "Gato", "Leopardo"].includes(palabra)) pistas.push("felino");
            if (["Perro", "Lobo", "Zorro"].includes(palabra)) pistas.push("canino");
            if (["Águila", "Loro", "Pavo Real", "Pingüino"].includes(palabra)) pistas.push("ave", "plumas");
            if (["Delfín", "Ballena", "Orca"].includes(palabra)) pistas.push("mamífero marino", "inteligente");
            if (["Tiburón", "Pez"].includes(palabra)) pistas.push("marino", "nada");
            // Tamaño
            if (["Elefante", "Ballena", "Jirafa", "Hipopótamo"].includes(palabra)) pistas.push("enorme", "gigante");
            if (["Hormiga", "Abeja", "Araña"].includes(palabra)) pistas.push("pequeño", "insecto");
            break;
            
        case "Lugares":
            if (["Playa", "Montaña", "Bosque", "Desierto"].includes(palabra)) pistas.push("naturaleza", "al aire libre");
            if (["Cine", "Teatro", "Museo"].includes(palabra)) pistas.push("cultural", "espectáculo");
            if (["Hospital", "Farmacia"].includes(palabra)) pistas.push("salud", "médico");
            if (["Escuela", "Biblioteca", "Universidad"].includes(palabra)) pistas.push("educación", "aprender");
            if (["Restaurante", "Café", "Panadería"].includes(palabra)) pistas.push("comida", "comer");
            if (["Aeropuerto", "Estación"].includes(palabra)) pistas.push("transporte", "viaje");
            if (["Acuario", "Zoológico"].includes(palabra)) pistas.push("animales", "visitar");
            break;
            
        case "Objetos":
            if (["Teléfono", "Computadora", "Televisor"].includes(palabra)) pistas.push("electrónico", "tecnología", "pantalla");
            if (["Guitarra", "Piano", "Batería"].includes(palabra)) pistas.push("musical", "tocar", "sonido");
            if (["Martillo", "Destornillador", "Llave"].includes(palabra)) pistas.push("herramienta", "arreglar");
            if (["Plato", "Vaso", "Tenedor", "Cuchillo"].includes(palabra)) pistas.push("cocina", "comer");
            if (["Pelota", "Raqueta"].includes(palabra)) pistas.push("deportivo", "jugar");
            break;
            
        case "Futbolistas":
            pistas.push("futbolista", "juega");
            if (palabraLower.includes("messi") || palabraLower.includes("cristiano") || palabraLower.includes("maradona")) {
                pistas.push("leyenda", "crack", "histórico");
            }
            break;
            
        case "Series":
            pistas.push("serie", "capítulos");
            if (["Breaking Bad", "Narcos", "Peaky Blinders"].includes(palabra)) pistas.push("crimen", "drama");
            if (["Friends", "The Office", "Brooklyn Nine-Nine"].includes(palabra)) pistas.push("comedia", "risas");
            break;
    }
    
    return pistas;
}

// Variables para el logro Principiante
let temporizadorComoJugar = null;
let tiempoEnComoJugar = 0;

// Variables del DOM
let caja = null;
let btnRevelar = null;
let btnSiguiente = null;
let modoDificil = null;

function mostrarPantalla(id) {
    // Detener temporizador de cómo jugar si se cambia de pantalla
    if (temporizadorComoJugar) {
        clearInterval(temporizadorComoJugar);
        temporizadorComoJugar = null;
        tiempoEnComoJugar = 0;
    }
    
    // Limpiar globos de feedback al cambiar de pantalla
    const feedbackContainer = document.getElementById('feedback-container');
    if (feedbackContainer) {
        feedbackContainer.remove();
    }
    
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    const destino = document.getElementById(id);
    destino.classList.remove('hidden');
    destino.classList.add('active');
    
    // Iniciar temporizador si se entra a la pantalla de cómo jugar
    if (id === 'pantalla-como-jugar' && !logroPrincipianteDesbloqueado) {
        tiempoEnComoJugar = 0;
        temporizadorComoJugar = setInterval(() => {
            tiempoEnComoJugar++;
            if (tiempoEnComoJugar >= 90) {
                desbloquearLogro('principiante');
                clearInterval(temporizadorComoJugar);
                temporizadorComoJugar = null;
            }
        }, 1000);
    }
    
    // Iniciar cascada de emojis si se entra a la pantalla de logros
    if (id === 'pantalla-logros') {
        iniciarCascadaLogros();
    } else {
        detenerCascadaLogros();
    }
}

function iniciarCascadaLogros() {
    const contenedor = document.getElementById('fondo-logros-cascada');
    if (!contenedor) return;
    
    // Limpiar emojis previos
    contenedor.innerHTML = '';
    
    // Obtener emojis desbloqueados
    const emojisDesbloqueados = [];
    if (logroColeccionistaDesbloqueado) emojisDesbloqueados.push('🏅');
    if (logroPrincipianteDesbloqueado) emojisDesbloqueados.push('📖');
    if (logroYSoyYoDesbloqueado) emojisDesbloqueados.push('👤');
    if (logroImposibleDesbloqueado) emojisDesbloqueados.push('🔥');
    if (logroSrDesbloqueado) emojisDesbloqueados.push('🎸');
    if (logroAuraDesbloqueado) emojisDesbloqueados.push('✨');
    if (logroMarleyDesbloqueado) emojisDesbloqueados.push('🌈');
    if (logroZeusDesbloqueado) emojisDesbloqueados.push('⚡');
    if (logroHadesDesbloqueado) emojisDesbloqueados.push('🔥');
    if (logroJokerDesbloqueado) emojisDesbloqueados.push('🎭');
    if (logroCampeonDesbloqueado) emojisDesbloqueados.push('🏆');
    if (logroTheMDesbloqueado) emojisDesbloqueados.push('🅼');
    if (logroMemeDesbloqueado) emojisDesbloqueados.push('😂');
    
    // Si no hay logros desbloqueados, no mostrar nada
    if (emojisDesbloqueados.length === 0) return;
    
    // Detectar si es móvil
    const esMobile = window.innerWidth <= 768;
    
    if (esMobile) {
        // En móvil, crear emojis en toda la pantalla (más dispersos y tenues)
        for (let i = 0; i < 8; i++) {
            crearColumnaEmojis(contenedor, emojisDesbloqueados, i, 'mobile');
        }
    } else {
        // En desktop, crear 4 columnas a la izquierda y 4 a la derecha
        for (let i = 0; i < 4; i++) {
            crearColumnaEmojis(contenedor, emojisDesbloqueados, i, 'izquierda');
            crearColumnaEmojis(contenedor, emojisDesbloqueados, i, 'derecha');
        }
    }
}

function crearColumnaEmojis(contenedor, emojis, columna, lado) {
    let posicionX;
    if (lado === 'mobile') {
        // En móvil, distribuir en toda la pantalla
        posicionX = (columna * 12.5) + Math.random() * 10;
    } else if (lado === 'izquierda') {
        // Columnas entre 0% y 25%
        posicionX = (columna * 6) + Math.random() * 5;
    } else {
        // Columnas entre 75% y 100%
        posicionX = 75 + (columna * 6) + Math.random() * 5;
    }
    
    function crearEmoji() {
        const delay = Math.random() * 4; // Delay aleatorio entre 0-4s
        const duracion = 6 + Math.random() * 3; // Duración entre 6-9s
        
        // Usar setTimeout para el delay en lugar de animationDelay
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'emoji-cayendo';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = posicionX + '%';
            emoji.style.animationDuration = duracion + 's';
            contenedor.appendChild(emoji);
            
            // Remover el emoji después de que termine la animación
            setTimeout(() => {
                if (emoji.parentNode === contenedor) {
                    contenedor.removeChild(emoji);
                }
                // Crear un nuevo emoji para mantener la cascada continua
                if (contenedor.parentNode) {
                    crearEmoji();
                }
            }, duracion * 1000);
        }, delay * 1000);
    }
    
    crearEmoji();
}

function detenerCascadaLogros() {
    const contenedor = document.getElementById('fondo-logros-cascada');
    if (contenedor) {
        contenedor.innerHTML = '';
    }
}

function toggleBot() {
    botActivado = document.getElementById('switch-bot').checked;
    botEsJugador = botActivado;
    const controlCantidadBots = document.getElementById('control-cantidad-bots');
    
    if (botActivado) {
        // Mostrar control de cantidad de bots
        controlCantidadBots.style.display = 'flex';
        // Actualizar aprendizaje del bot cada vez que se activa
        botAprendizajeAutomatico();
        // Actualizar estado de los botones
        actualizarEstadoBotones('input-cantidad-bots');
    } else {
        // Ocultar control de cantidad de bots
        controlCantidadBots.style.display = 'none';
    }
}

function actualizarEstadoBotones(id) {
    const input = document.getElementById(id);
    const valorActual = parseInt(input.value);
    const contenedor = input.parentElement;
    const botones = contenedor.querySelectorAll('.btn-flecha');
    const btnMenos = botones[0];
    const btnMas = botones[1];
    
    let min = 1;
    let max = 16;
    
    if (id === 'input-jugadores') {
        min = modoLocoActivado ? 2 : 3;
        max = 16;
    } else if (id === 'input-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        min = 1;
        max = modoLocoActivado ? (jugadores === 6 ? 7 : jugadores) : jugadores - 2;
    } else if (id === 'input-max-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        min = 1;
        max = modoLocoActivado ? (jugadores === 6 ? 7 : jugadores) : jugadores - 2;
    } else if (id === 'input-cantidad-bots') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        min = 1;
        max = jugadores - 1; // Siempre uno menos que el máximo de jugadores
    }
    
    // Actualizar botón menos
    if (valorActual <= min) {
        btnMenos.disabled = true;
        btnMenos.classList.add('disabled');
    } else {
        btnMenos.disabled = false;
        btnMenos.classList.remove('disabled');
    }
    
    // Actualizar botón más
    if (valorActual >= max) {
        btnMas.disabled = true;
        btnMas.classList.add('disabled');
    } else {
        btnMas.disabled = false;
        btnMas.classList.remove('disabled');
    }
}

function cambiarValor(id, cambio) {
    const input = document.getElementById(id);
    let valorActual = parseInt(input.value);
    
    if (id === 'input-jugadores') {
        const nuevoValor = valorActual + cambio;
        const minJugadores = modoLocoActivado ? 2 : 3;
        if (nuevoValor >= minJugadores && nuevoValor <= 16) {
            input.value = nuevoValor;
            actualizarMaxImpostores();
            actualizarEstadoBotones(id);
            actualizarEstadoBotones('input-impostores');
            actualizarEstadoBotones('input-max-impostores');
            actualizarEstadoBotones('input-cantidad-bots');
            
            // Ajustar cantidad de bots si excede el nuevo máximo
            const inputBots = document.getElementById('input-cantidad-bots');
            const maxBots = nuevoValor - 1;
            if (parseInt(inputBots.value) > maxBots) {
                inputBots.value = maxBots;
            }
        }
    } else if (id === 'input-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        const nuevoValor = valorActual + cambio;
        const maxImpostores = modoLocoActivado ? (jugadores === 6 ? 7 : jugadores) : jugadores - 2;
        
        if (nuevoValor >= 1 && nuevoValor <= maxImpostores) {
            input.value = nuevoValor;
            actualizarEstadoBotones(id);
        }
    } else if (id === 'input-max-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        const nuevoValor = valorActual + cambio;
        const maxPermitido = modoLocoActivado ? (jugadores === 6 ? 7 : jugadores) : jugadores - 2;
        
        if (nuevoValor >= 1 && nuevoValor <= maxPermitido) {
            input.value = nuevoValor;
            actualizarEstadoBotones(id);
        }
    } else if (id === 'input-cantidad-bots') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        const nuevoValor = valorActual + cambio;
        const maxBots = jugadores - 1;
        
        if (nuevoValor >= 1 && nuevoValor <= maxBots) {
            input.value = nuevoValor;
            actualizarEstadoBotones(id);
        }
    }
}

function toggleRandomizador() {
    const randomizadorActivado = document.getElementById('switch-randomizador').checked;
    const controlMaxImpostores = document.getElementById('control-max-impostores');
    const controlImpostores = document.querySelector('.control-grupal:has(#input-impostores)');
    
    if (randomizadorActivado) {
        controlMaxImpostores.style.display = 'flex';
        controlImpostores.style.display = 'none';
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        document.getElementById('input-max-impostores').value = Math.max(1, jugadores - 2);
        actualizarEstadoBotones('input-max-impostores');
    } else {
        controlMaxImpostores.style.display = 'none';
        controlImpostores.style.display = 'flex';
        actualizarEstadoBotones('input-impostores');
    }
}

function actualizarMaxImpostores() {
    const jugadores = parseInt(document.getElementById('input-jugadores').value);
    const inputImp = document.getElementById('input-impostores');
    const inputMaxImp = document.getElementById('input-max-impostores');
    const maxPermitido = modoLocoActivado ? (jugadores === 6 ? 7 : jugadores) : Math.max(1, jugadores - 2);
    
    if (parseInt(inputImp.value) > maxPermitido) {
        inputImp.value = maxPermitido;
    }
    
    if (parseInt(inputMaxImp.value) > maxPermitido) {
        inputMaxImp.value = maxPermitido;
    }
    
    actualizarEstadoBotones('input-impostores');
    actualizarEstadoBotones('input-max-impostores');
}

function iniciarPartida() {
    numJugadores = parseInt(document.getElementById('input-jugadores').value);
    
    // Si el bot está activado, restar la cantidad de bots del total
    if (botEsJugador) {
        cantidadBots = parseInt(document.getElementById('input-cantidad-bots').value);
        numJugadoresHumanos = numJugadores - cantidadBots;
    } else {
        cantidadBots = 0;
        numJugadoresHumanos = numJugadores;
    }
    
    pistasJugadores = {};
    votosJugadores = {};
    
    const randomizadorActivado = document.getElementById('switch-randomizador').checked;
    if (randomizadorActivado) {
        const maxImpostores = parseInt(document.getElementById('input-max-impostores').value);
        numImpostores = Math.floor(Math.random() * maxImpostores) + 1;
    } else {
        numImpostores = parseInt(document.getElementById('input-impostores').value);
    }
    
    // Limitar el número real de impostores al número de jugadores
    if (numImpostores > numJugadores) {
        numImpostores = numJugadores;
    }
    
    let bolsaCombinada = [];
    if(document.getElementById('cat-Animales').checked) datos["Animales"].forEach(p => bolsaCombinada.push({p: p, c: "Animales"}));
    if(document.getElementById('cat-Lugares').checked) datos["Lugares"].forEach(p => bolsaCombinada.push({p: p, c: "Lugares"}));
    if(document.getElementById('cat-Objetos').checked) datos["Objetos"].forEach(p => bolsaCombinada.push({p: p, c: "Objetos"}));
    if(document.getElementById('cat-Futbolistas').checked) datos["Futbolistas"].forEach(p => bolsaCombinada.push({p: p, c: "Futbolistas"}));
    if(document.getElementById('cat-Series').checked) datos["Series"].forEach(p => bolsaCombinada.push({p: p, c: "Series"}));
    if(document.getElementById('cat-ClashRoyale').checked) datos["Clash Royale"].forEach(p => bolsaCombinada.push({p: p, c: "Clash Royale"}));
    if(document.getElementById('cat-Comida').checked) datos["Comida"].forEach(p => bolsaCombinada.push({p: p, c: "Comida"}));
    if(document.getElementById('cat-Deportes').checked) datos["Deportes"].forEach(p => bolsaCombinada.push({p: p, c: "Deportes"}));
    if(document.getElementById('cat-Videojuegos').checked) datos["Videojuegos"].forEach(p => bolsaCombinada.push({p: p, c: "Videojuegos"}));
    if(document.getElementById('cat-RockInt').checked) datos["Rock Internacional"].forEach(p => bolsaCombinada.push({p: p, c: "Rock Internacional"}));
    if(document.getElementById('cat-RockArg').checked) datos["Rock Argentino"].forEach(p => bolsaCombinada.push({p: p, c: "Rock Argentino"}));
    if(document.getElementById('cat-Peliculas').checked) datos["Peliculas"].forEach(p => bolsaCombinada.push({p: p, c: "Peliculas"}));
    if(document.getElementById('cat-Pokemon').checked) datos["Pokemon"].forEach(p => bolsaCombinada.push({p: p, c: "Pokemon"}));
    if(document.getElementById('cat-Personas').checked) datos["Personas"].forEach(p => bolsaCombinada.push({p: p, c: "Personas"}));

    const seleccion = bolsaCombinada[Math.floor(Math.random() * bolsaCombinada.length)];
    palabraSecreta = seleccion.p;
    categoriaSecreta = seleccion.c;
    
    listaImpostores = [];
    while(listaImpostores.length < numImpostores) {
        let candidato = Math.floor(Math.random() * numJugadores) + 1;
        if(!listaImpostores.includes(candidato)) {
            listaImpostores.push(candidato);
        }
    }
    
    mostrarPantalla('pantalla-preparacion');
}

function reiniciarJuego() {
    // Resetear todas las variables del juego
    jugadorActual = 1;
    pistasJugadores = {};
    votosJugadores = {};
    jugadorActualPista = 1;
    
    // Generar nueva palabra aleatoria
    let bolsaCombinada = [];
    if(document.getElementById('cat-Animales').checked) datos["Animales"].forEach(p => bolsaCombinada.push({p: p, c: "Animales"}));
    if(document.getElementById('cat-Lugares').checked) datos["Lugares"].forEach(p => bolsaCombinada.push({p: p, c: "Lugares"}));
    if(document.getElementById('cat-Objetos').checked) datos["Objetos"].forEach(p => bolsaCombinada.push({p: p, c: "Objetos"}));
    if(document.getElementById('cat-Futbolistas').checked) datos["Futbolistas"].forEach(p => bolsaCombinada.push({p: p, c: "Futbolistas"}));
    if(document.getElementById('cat-Series').checked) datos["Series"].forEach(p => bolsaCombinada.push({p: p, c: "Series"}));
    if(document.getElementById('cat-ClashRoyale').checked) datos["Clash Royale"].forEach(p => bolsaCombinada.push({p: p, c: "Clash Royale"}));
    if(document.getElementById('cat-Comida').checked) datos["Comida"].forEach(p => bolsaCombinada.push({p: p, c: "Comida"}));
    if(document.getElementById('cat-Deportes').checked) datos["Deportes"].forEach(p => bolsaCombinada.push({p: p, c: "Deportes"}));
    if(document.getElementById('cat-Videojuegos').checked) datos["Videojuegos"].forEach(p => bolsaCombinada.push({p: p, c: "Videojuegos"}));
    if(document.getElementById('cat-RockInt').checked) datos["Rock Internacional"].forEach(p => bolsaCombinada.push({p: p, c: "Rock Internacional"}));
    if(document.getElementById('cat-RockArg').checked) datos["Rock Argentino"].forEach(p => bolsaCombinada.push({p: p, c: "Rock Argentino"}));
    if(document.getElementById('cat-Peliculas').checked) datos["Peliculas"].forEach(p => bolsaCombinada.push({p: p, c: "Peliculas"}));
    if(document.getElementById('cat-Pokemon').checked) datos["Pokemon"].forEach(p => bolsaCombinada.push({p: p, c: "Pokemon"}));
    if(document.getElementById('cat-Personas').checked) datos["Personas"].forEach(p => bolsaCombinada.push({p: p, c: "Personas"}));

    const seleccion = bolsaCombinada[Math.floor(Math.random() * bolsaCombinada.length)];
    palabraSecreta = seleccion.p;
    categoriaSecreta = seleccion.c;
    
    // Generar nuevos impostores aleatorios
    const randomizadorActivado = document.getElementById('switch-randomizador').checked;
    if (randomizadorActivado) {
        const maxImpostores = parseInt(document.getElementById('input-max-impostores').value);
        numImpostores = Math.floor(Math.random() * maxImpostores) + 1;
    } else {
        numImpostores = parseInt(document.getElementById('input-impostores').value);
    }
    
    // Limitar el número de impostores
    if (numImpostores > numJugadores) {
        numImpostores = numJugadores;
    }
    
    listaImpostores = [];
    while(listaImpostores.length < numImpostores) {
        let candidato = Math.floor(Math.random() * numJugadores) + 1;
        if(!listaImpostores.includes(candidato)) {
            listaImpostores.push(candidato);
        }
    }
    
    // Volver a la pantalla de preparación
    mostrarPantalla('pantalla-preparacion');
}

function iniciarTurnoUno() {
    jugadorActual = 1;
    prepararTurno();
}

function prepararTurno() {
    const esBot = botEsJugador && jugadorActual > numJugadoresHumanos;
    
    if (esBot) {
        // Es el turno de un bot
        const botNum = jugadorActual - numJugadoresHumanos;
        const nombreBot = cantidadBots > 1 ? `🤖 BOT ${botNum}` : '🤖 BOT';
        document.getElementById('titulo-turno').innerText = nombreBot;
    } else {
        document.getElementById('titulo-turno').innerText = `Jugador ${jugadorActual}`;
    }
    
    caja.innerText = '? ? ?';
    caja.classList.remove('reveal');
    caja.classList.remove('impostor-vibrate');
    btnRevelar.classList.remove('hidden');
    btnSiguiente.classList.add('hidden');
    mostrarPantalla('pantalla-revelar');
}

function revelarCliche() {
    const esBot = botEsJugador && jugadorActual > numJugadoresHumanos;
    
    if (esBot) {
        // El bot no necesita ver su palabra, genera su pista automáticamente
        revelarParaBot();
        return;
    }
    
    const palabraSimilarActivada = document.getElementById('switch-palabra-similar').checked;
    const dificilActivado = modoDificil.checked;
    
    // Agregar animación de revelación
    caja.classList.add('reveal');
    
    const esImpostor = listaImpostores.includes(jugadorActual);
    
    // Determinar el color según el tema
    const colorImpostor = document.body.classList.contains('tema-claro') ? '#dc2626' : '#EF4444';

    setTimeout(() => {
        if(esImpostor) {
            if (palabraSimilarActivada) {
                // Modo Palabra Similar: dar palabra aleatoria de la misma categoría
                const palabrasCategoria = datos[categoriaSecreta];
                let palabraImpostor;
                
                // Seleccionar palabra aleatoria diferente a la secreta
                do {
                    palabraImpostor = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];
                } while (palabraImpostor === palabraSecreta && palabrasCategoria.length > 1);
                
                if (dificilActivado) {
                    caja.innerHTML = `<span style="font-weight: bold;">${palabraImpostor}</span>`;
                } else {
                    caja.innerHTML = `<span style="font-weight: bold;">${palabraImpostor}</span><br><small>Categoría: ${categoriaSecreta}</small>`;
                }
            } else {
                // Modo normal: mostrar que es impostor
                if (dificilActivado) {
                    caja.innerHTML = `<span style="color:${colorImpostor}; font-weight: bold;">¡ERES EL IMPOSTOR!</span>`;
                } else {
                    caja.innerHTML = `<span style="color:${colorImpostor}; font-weight: bold;">¡ERES EL IMPOSTOR!</span><br><small>Categoría: ${categoriaSecreta}</small>`;
                }
                // Agregar vibración al impostor solo en modo normal
                caja.classList.add('impostor-vibrate');
                setTimeout(() => caja.classList.remove('impostor-vibrate'), 1500);
            }
        } else {
            if (dificilActivado) {
                caja.innerHTML = `<span style="font-weight: bold;">${palabraSecreta}</span>`;
            } else {
                caja.innerHTML = `<span style="font-weight: bold;">${palabraSecreta}</span><br><small>Categoría: ${categoriaSecreta}</small>`;
            }
        }
        
        // Remover animación después de que termine
        setTimeout(() => caja.classList.remove('reveal'), 600);
    }, 100);

    btnRevelar.classList.add('hidden');
    btnSiguiente.classList.remove('hidden');
}

function revelarParaBot() {
    const esImpostor = listaImpostores.includes(jugadorActual);
    const botNum = jugadorActual - numJugadoresHumanos;
    const nombreBot = cantidadBots > 1 ? `🤖 BOT ${botNum}` : '🤖 BOT';
    
    caja.classList.add('reveal');
    
    setTimeout(() => {
        // No mostrar si es impostor, solo mostrar que es el bot
        caja.innerHTML = `<span style="font-weight: bold; font-size: 1.8rem;">${nombreBot}</span><br><small>Turno del bot</small>`;
        
        // Recopilar pistas que ya dieron otros bots para evitar repeticiones
        const pistasYaUsadas = [];
        for (let botPos = numJugadoresHumanos + 1; botPos < jugadorActual; botPos++) {
            if (pistasJugadores[botPos]) {
                pistasYaUsadas.push(pistasJugadores[botPos]);
            }
        }
        
        // Generar pista internamente sin mostrarla
        if (esImpostor) {
            pistasJugadores[jugadorActual] = botGenerarPistaImpostor(categoriaSecreta, pistasYaUsadas);
        } else {
            pistasJugadores[jugadorActual] = botGenerarPista(palabraSecreta, pistasYaUsadas);
        }
        
        setTimeout(() => caja.classList.remove('reveal'), 600);
    }, 100);
    
    btnRevelar.classList.add('hidden');
    btnSiguiente.classList.remove('hidden');
}

function siguienteJugador() {
    if (jugadorActual < numJugadores) {
        jugadorActual++;
        prepararTurno();
    } else {
        // Todos revelaron sus palabras
        if (botEsJugador) {
            // Modo bot: iniciar flujo de pistas
            jugadorActualPista = 1;
            mostrarPantallaDarPista();
        } else {
            // Modo normal: mostrar pista del bot si está activado (modo antiguo)
            if (botActivado && !botEsJugador) {
                const pistaBot = botDarPista();
                if (pistaBot) {
                    mostrarPistaBot(pistaBot);
                }
            }
            
            verificarLogrosFinPartida();
            continuarDespuesDeRevelacion();
        }
    }
}

function continuarDespuesDeRevelacion() {
    mostrarPantalla('pantalla-info-impostores');
}

function verificarLogrosFinPartida() {
    if (numJugadores === 2 && numImpostores === 2 && !logroYSoyYoDesbloqueado) {
        desbloquearLogro('ysoyyo');
    }
    
    // Verificar logro IMPOSIBLE (modo difícil, palabra similar, 16 jugadores, 1 impostor)
    const dificilActivado = document.getElementById('switch-dificil').checked;
    const palabraSimilarActivada = document.getElementById('switch-palabra-similar').checked;
    if (dificilActivado && palabraSimilarActivada && numJugadores === 16 && numImpostores === 1 && !logroImposibleDesbloqueado) {
        desbloquearLogro('imposible');
    }
    
    // Verificar logro Sr... si la palabra es "Las chismosas"
    if (palabraSecreta === "Las chismosas" && !logroSrDesbloqueado) {
        desbloquearLogro('sr');
    }
    
    // Verificar logro MEME (6 jugadores y 7 impostores seleccionados)
    const impostoresSeleccionados = parseInt(document.getElementById('input-impostores').value);
    if (numJugadores === 6 && impostoresSeleccionados === 7 && !logroMemeDesbloqueado) {
        desbloquearLogro('meme');
    }
}


function revelarCantidadImpostores() {
    const textoImpostores = numImpostores === 1 ? '1 IMPOSTOR' : `${numImpostores} IMPOSTORES`;
    document.getElementById('cantidad-impostores').innerText = textoImpostores;
    
    document.getElementById('btn-revelar-impostores').style.display = 'none';
    document.getElementById('texto-empezar-pistas').style.display = 'block';
    document.getElementById('btn-continuar-info').style.display = 'block';
}

function continuarDespuesDeInfo() {
    iniciarPartida();
    mostrarPantalla('pantalla-preparacion');
}

function verificarCodigo() {
    const input = document.getElementById('input-codigo');
    const codigo = input.value.trim().toLowerCase();
    
    if (codigo === 'impatrq') {
        personasDesbloqueado = true;
        
        const itemPersonas = document.getElementById('categoria-personas-item');
        const checkPersonas = document.getElementById('cat-Personas');
        
        itemPersonas.style.opacity = '1';
        itemPersonas.style.pointerEvents = 'auto';
        checkPersonas.disabled = false;
        checkPersonas.checked = true;
        
        itemPersonas.querySelector('span').innerText = 'Personas ✓';
        
        input.value = '';
        mostrarModalCodigo('Categoría "Personas" desbloqueada. Ahora puedes jugar con palabras personalizadas de tu grupo.');
    } else if (codigo === 'loco') {
        modoLocoActivado = true;
        
        desbloquearLogro('joker');
        
        input.value = '';
        
        actualizarMaxImpostores();
        mostrarModalCodigo('Modo LOCO activado. Ahora puedes tener igual cantidad de impostores que jugadores.');
        actualizarEstadoBotones('input-jugadores');
        actualizarEstadoBotones('input-impostores');
        actualizarEstadoBotones('input-max-impostores');
        
        mostrarPantalla('pantalla-jugadores');
    } else if (codigo === 'bob') {
        activarTemaHippie();
        
        desbloquearLogro('marley');
        
        input.value = '';
        
        mostrarModalCodigo('Tema HIPPIE activado. ✌️🌈 Disfruta de los nuevos colores.');
    } else if (codigo === 'claro') {
        document.body.classList.add('tema-claro');
        localStorage.setItem('tema', 'claro');
        
        desbloquearLogro('zeus');
        
        input.value = '';
        
        mostrarModalCodigo('Tema CLARO activado. 💜✨ El juego ahora tiene un aspecto más luminoso.');
    } else if (codigo === 'oscuro') {
        document.body.classList.remove('tema-claro');
        localStorage.setItem('tema', 'oscuro');
        
        desbloquearLogro('hades');
        
        input.value = '';
        
        mostrarModalCodigo('Tema OSCURO activado. 🔴⚫ Has vuelto al tema clásico.');
    } else {
        input.value = '';
    }
}

function desactivarTodasCategorias() {
    document.getElementById('cat-Animales').checked = false;
    document.getElementById('cat-Lugares').checked = false;
    document.getElementById('cat-Objetos').checked = false;
    document.getElementById('cat-Futbolistas').checked = false;
    document.getElementById('cat-Series').checked = false;
    document.getElementById('cat-ClashRoyale').checked = false;
    document.getElementById('cat-Comida').checked = false;
    document.getElementById('cat-Deportes').checked = false;
    document.getElementById('cat-Videojuegos').checked = false;
    document.getElementById('cat-RockInt').checked = false;
    document.getElementById('cat-RockArg').checked = false;
    document.getElementById('cat-Peliculas').checked = false;
    document.getElementById('cat-Pokemon').checked = false;
    
    const checkPersonas = document.getElementById('cat-Personas');
    if (!checkPersonas.disabled) {
        checkPersonas.checked = false;
    }
}

function activarTemaHippie() {
    const verdeOscuro = '#1B4332';
    
    document.body.style.background = "url('HIPPIES.jpg') center center / cover no-repeat fixed";
    document.body.style.backgroundColor = verdeOscuro;
    document.getElementById('game-container').style.backgroundColor = verdeOscuro;
}

function togglePalabraSimilar() {
    contadorSwitchSimilar++;
    
    if (contadorSwitchSimilar === 100 && !logroAuraDesbloqueado) {
        desbloquearLogro('aura');
    }
}

function mostrarLogroAura() {
    const logroBurbuja = document.createElement('div');
    logroBurbuja.className = 'logro-burbuja';
    logroBurbuja.innerHTML = `
        <div class="logro-titulo">LOGRO DESBLOQUEADO</div>
        <div class="logro-descripcion">AURA</div>
    `;
    
    document.body.appendChild(logroBurbuja);
    
    // Animar entrada
    setTimeout(() => {
        logroBurbuja.classList.add('mostrar');
    }, 100);
    
    // Animar salida y eliminar
    setTimeout(() => {
        logroBurbuja.classList.remove('mostrar');
        setTimeout(() => {
            document.body.removeChild(logroBurbuja);
        }, 500);
    }, 4000);
}

function toggleTema() {
    const temaClaro = document.getElementById('switch-tema').checked;
    
    if (temaClaro) {
        document.body.classList.add('tema-claro');
        localStorage.setItem('tema', 'claro');
    } else {
        document.body.classList.remove('tema-claro');
        localStorage.setItem('tema', 'oscuro');
    }
}

function guardarLogros() {
    const logros = {
        aura: logroAuraDesbloqueado,
        marley: logroMarleyDesbloqueado,
        zeus: logroZeusDesbloqueado,
        joker: logroJokerDesbloqueado,
        campeon: logroCampeonDesbloqueado,
        coleccionista: logroColeccionistaDesbloqueado,
        them: logroTheMDesbloqueado,
        hades: logroHadesDesbloqueado,
        principiante: logroPrincipianteDesbloqueado,
        ysoyyo: logroYSoyYoDesbloqueado,
        imposible: logroImposibleDesbloqueado,
        sr: logroSrDesbloqueado,
        meme: logroMemeDesbloqueado
    };
    localStorage.setItem('logros', JSON.stringify(logros));
}

function cargarLogros() {
    const logrosGuardados = localStorage.getItem('logros');
    if (logrosGuardados) {
        const logros = JSON.parse(logrosGuardados);
        logroAuraDesbloqueado = logros.aura || false;
        logroMarleyDesbloqueado = logros.marley || false;
        logroZeusDesbloqueado = logros.zeus || false;
        logroJokerDesbloqueado = logros.joker || false;
        logroCampeonDesbloqueado = logros.campeon || false;
        logroColeccionistaDesbloqueado = logros.coleccionista || false;
        logroTheMDesbloqueado = logros.them || false;
        logroHadesDesbloqueado = logros.hades || false;
        logroPrincipianteDesbloqueado = logros.principiante || false;
        logroYSoyYoDesbloqueado = logros.ysoyyo || false;
        logroImposibleDesbloqueado = logros.imposible || false;
        logroSrDesbloqueado = logros.sr || false;
        logroMemeDesbloqueado = logros.meme || false;
    }
    verificarColeccionista();
    actualizarVistaLogros();
}

function desbloquearLogro(nombreLogro) {
    switch(nombreLogro) {
        case 'aura':
            if (!logroAuraDesbloqueado) {
                logroAuraDesbloqueado = true;
                mostrarLogroAura();
                guardarLogros();
            }
            break;
        case 'marley':
            if (!logroMarleyDesbloqueado) {
                logroMarleyDesbloqueado = true;
                mostrarNotificacionLogro('MARLEY');
                guardarLogros();
            }
            break;
        case 'zeus':
            if (!logroZeusDesbloqueado) {
                logroZeusDesbloqueado = true;
                mostrarNotificacionLogro('ZEUS');
                guardarLogros();
            }
            break;
        case 'joker':
            if (!logroJokerDesbloqueado) {
                logroJokerDesbloqueado = true;
                mostrarNotificacionLogro('JOKER');
                guardarLogros();
            }
            break;
        case 'campeon':
            if (!logroCampeonDesbloqueado) {
                logroCampeonDesbloqueado = true;
                mostrarNotificacionLogro('CAMPEON');
                guardarLogros();
            }
            break;
        case 'them':
            if (!logroTheMDesbloqueado) {
                logroTheMDesbloqueado = true;
                mostrarNotificacionLogro('THE M');
                guardarLogros();
            }
            break;
        case 'hades':
            if (!logroHadesDesbloqueado) {
                logroHadesDesbloqueado = true;
                mostrarNotificacionLogro('HADES');
                guardarLogros();
            }
            break;
        case 'principiante':
            if (!logroPrincipianteDesbloqueado) {
                logroPrincipianteDesbloqueado = true;
                mostrarNotificacionLogro('PRINCIPIANTE');
                guardarLogros();
            }
            break;
        case 'ysoyyo':
            if (!logroYSoyYoDesbloqueado) {
                logroYSoyYoDesbloqueado = true;
                mostrarNotificacionLogro('Y SOY YO');
                guardarLogros();
            }
            break;
        case 'imposible':
            if (!logroImposibleDesbloqueado) {
                logroImposibleDesbloqueado = true;
                mostrarNotificacionLogro('IMPOSIBLE');
                guardarLogros();
            }
            break;
        case 'sr':
            if (!logroSrDesbloqueado) {
                logroSrDesbloqueado = true;
                mostrarNotificacionLogro('SR...');
                guardarLogros();
            }
            break;
        case 'meme':
            if (!logroMemeDesbloqueado) {
                logroMemeDesbloqueado = true;
                mostrarNotificacionLogro('MEME');
                guardarLogros();
            }
            break;
    }
    actualizarVistaLogros();
    
    // Verificar si se debe desbloquear Coleccionista
    if (nombreLogro !== 'coleccionista') {
        verificarColeccionista();
    }
}

function verificarColeccionista() {
    // Verificar si todos los logros (excepto Coleccionista) están desbloqueados
    const todosDesbloqueados = logroAuraDesbloqueado && 
                                logroMarleyDesbloqueado && 
                                logroZeusDesbloqueado && 
                                logroJokerDesbloqueado && 
                                logroCampeonDesbloqueado &&
                                logroTheMDesbloqueado &&
                                logroHadesDesbloqueado &&
                                logroPrincipianteDesbloqueado &&
                                logroYSoyYoDesbloqueado &&
                                logroImposibleDesbloqueado &&
                                logroSrDesbloqueado &&
                                logroMemeDesbloqueado;
    
    if (todosDesbloqueados && !logroColeccionistaDesbloqueado) {
        // Desbloquear Coleccionista si se tienen todos los logros
        logroColeccionistaDesbloqueado = true;
        mostrarNotificacionLogro('COLECCIONISTA');
        guardarLogros();
        actualizarVistaLogros();
    } else if (!todosDesbloqueados && logroColeccionistaDesbloqueado) {
        // Desactivar Coleccionista si no se tienen todos los logros
        logroColeccionistaDesbloqueado = false;
        guardarLogros();
        actualizarVistaLogros();
    }
}

function mostrarNotificacionLogro(nombreLogro) {
    const logroBurbuja = document.createElement('div');
    logroBurbuja.className = 'logro-burbuja';
    logroBurbuja.innerHTML = `
        <div class="logro-titulo">LOGRO DESBLOQUEADO</div>
        <div class="logro-descripcion">${nombreLogro}</div>
    `;
    
    document.body.appendChild(logroBurbuja);
    
    setTimeout(() => {
        logroBurbuja.classList.add('mostrar');
    }, 100);
    
    setTimeout(() => {
        logroBurbuja.classList.remove('mostrar');
        setTimeout(() => {
            document.body.removeChild(logroBurbuja);
        }, 500);
    }, 4000);
}

function mostrarModalCodigo(mensaje) {
    const modal = document.getElementById('modal-codigo');
    const texto = document.getElementById('modal-codigo-texto');
    texto.textContent = mensaje;
    modal.style.display = 'flex';
}

function cerrarModalCodigo() {
    const modal = document.getElementById('modal-codigo');
    modal.style.display = 'none';
    mostrarPantalla('pantalla-jugadores');
}

function desbloquearLogroCampeon() {
    desbloquearLogro('campeon');
}

function desbloquearLogroTheM() {
    desbloquearLogro('them');
}

function actualizarVistaLogros() {
    // Actualizar COLECCIONISTA
    const logroColeccionista = document.getElementById('logro-coleccionista');
    if (logroColeccionista) {
        if (logroColeccionistaDesbloqueado) {
            logroColeccionista.classList.add('desbloqueado');
            logroColeccionista.querySelector('.logro-icono').textContent = '🏅';
        } else {
            logroColeccionista.classList.remove('desbloqueado');
            logroColeccionista.querySelector('.logro-icono').textContent = '🏅';
        }
    }
    
    // Actualizar corona sobre la M
    const corona = document.getElementById('corona-coleccionista');
    if (corona) {
        corona.style.display = logroColeccionistaDesbloqueado ? 'block' : 'none';
    }
    
    // Actualizar PRINCIPIANTE
    const logroPrincipiante = document.getElementById('logro-principiante');
    if (logroPrincipiante) {
        if (logroPrincipianteDesbloqueado) {
            logroPrincipiante.classList.add('desbloqueado');
            logroPrincipiante.querySelector('.logro-icono').textContent = '📖';
        } else {
            logroPrincipiante.classList.remove('desbloqueado');
            logroPrincipiante.querySelector('.logro-icono').textContent = '�';
        }
    }
    
    // Actualizar Y SOY YO
    const logroYSoyYo = document.getElementById('logro-ysoyyo');
    if (logroYSoyYo) {
        if (logroYSoyYoDesbloqueado) {
            logroYSoyYo.classList.add('desbloqueado');
            logroYSoyYo.querySelector('.logro-icono').textContent = '👤';
        } else {
            logroYSoyYo.classList.remove('desbloqueado');
            logroYSoyYo.querySelector('.logro-icono').textContent = '�';
        }
    }
    
    // Actualizar IMPOSIBLE
    const logroImposible = document.getElementById('logro-imposible');
    if (logroImposible) {
        if (logroImposibleDesbloqueado) {
            logroImposible.classList.add('desbloqueado');
            logroImposible.querySelector('.logro-icono').textContent = '🔥';
        } else {
            logroImposible.classList.remove('desbloqueado');
            logroImposible.querySelector('.logro-icono').textContent = '�';
        }
    }
    
    // Actualizar SR...
    const logroSr = document.getElementById('logro-sr');
    if (logroSr) {
        if (logroSrDesbloqueado) {
            logroSr.classList.add('desbloqueado');
            logroSr.querySelector('.logro-icono').textContent = '🎸';
        } else {
            logroSr.classList.remove('desbloqueado');
            logroSr.querySelector('.logro-icono').textContent = '🎸';
        }
    }
    
    // Actualizar AURA
    const logroAura = document.getElementById('logro-aura');
    if (logroAura) {
        if (logroAuraDesbloqueado) {
            logroAura.classList.add('desbloqueado');
            logroAura.querySelector('.logro-icono').textContent = '✨';
        } else {
            logroAura.classList.remove('desbloqueado');
            logroAura.querySelector('.logro-icono').textContent = '✨';
        }
    }
    
    // Actualizar MARLEY
    const logroMarley = document.getElementById('logro-marley');
    if (logroMarley) {
        if (logroMarleyDesbloqueado) {
            logroMarley.classList.add('desbloqueado');
            logroMarley.querySelector('.logro-icono').textContent = '🌈';
        } else {
            logroMarley.classList.remove('desbloqueado');
            logroMarley.querySelector('.logro-icono').textContent = '🌈';
        }
    }
    
    // Actualizar ZEUS
    const logroZeus = document.getElementById('logro-zeus');
    if (logroZeus) {
        if (logroZeusDesbloqueado) {
            logroZeus.classList.add('desbloqueado');
            logroZeus.querySelector('.logro-icono').textContent = '⚡';
        } else {
            logroZeus.classList.remove('desbloqueado');
            logroZeus.querySelector('.logro-icono').textContent = '⚡';
        }
    }
    
    // Actualizar JOKER
    const logroJoker = document.getElementById('logro-joker');
    if (logroJoker) {
        if (logroJokerDesbloqueado) {
            logroJoker.classList.add('desbloqueado');
            logroJoker.querySelector('.logro-icono').textContent = '🎭';
        } else {
            logroJoker.classList.remove('desbloqueado');
            logroJoker.querySelector('.logro-icono').textContent = '🎭';
        }
    }
    
    // Actualizar CAMPEON
    const logroCampeon = document.getElementById('logro-campeon');
    if (logroCampeon) {
        if (logroCampeonDesbloqueado) {
            logroCampeon.classList.add('desbloqueado');
            logroCampeon.querySelector('.logro-icono').textContent = '🏆';
        } else {
            logroCampeon.classList.remove('desbloqueado');
            logroCampeon.querySelector('.logro-icono').textContent = '🏆';
        }
    }
    
    // Actualizar THE M
    const logroTheM = document.getElementById('logro-them');
    if (logroTheM) {
        if (logroTheMDesbloqueado) {
            logroTheM.classList.add('desbloqueado');
            logroTheM.querySelector('.logro-icono').textContent = '🅼';
        } else {
            logroTheM.classList.remove('desbloqueado');
            logroTheM.querySelector('.logro-icono').textContent = '🅼';
        }
    }
    
    // Actualizar HADES
    const logroHades = document.getElementById('logro-hades');
    if (logroHades) {
        if (logroHadesDesbloqueado) {
            logroHades.classList.add('desbloqueado');
            logroHades.querySelector('.logro-icono').textContent = '🔥';
        } else {
            logroHades.classList.remove('desbloqueado');
            logroHades.querySelector('.logro-icono').textContent = '�';
        }
    }
    
    // Actualizar MEME
    const logroMeme = document.getElementById('logro-meme');
    if (logroMeme) {
        if (logroMemeDesbloqueado) {
            logroMeme.classList.add('desbloqueado');
            logroMeme.querySelector('.logro-icono').textContent = '😂';
        } else {
            logroMeme.classList.remove('desbloqueado');
            logroMeme.querySelector('.logro-icono').textContent = '😂';
        }
    }
}

// ============ SISTEMA DE VOTACIÓN ============

function mostrarPantallaDarPista() {
    // Si es el turno de un bot, saltar al siguiente jugador
    if (botEsJugador && jugadorActualPista > numJugadoresHumanos) {
        // Los bots ya generaron sus pistas, ir a votación
        mostrarPantalla('pantalla-votacion');
        iniciarVotacion();
        return;
    }
    
    // Si ya pasaron todos los jugadores, ir a votación
    if (jugadorActualPista > numJugadores) {
        mostrarPantalla('pantalla-votacion');
        iniciarVotacion();
        return;
    }
    
    document.getElementById('titulo-pista-jugador').innerText = `Jugador ${jugadorActualPista}`;
    
    // Verificar si el jugador es impostor
    const esImpostor = listaImpostores.includes(jugadorActualPista);
    
    const palabraParaPista = document.getElementById('palabra-para-pista');
    const btnRecordar = document.getElementById('btn-recordar-palabra');
    
    // Ocultar la palabra inicialmente con ? ? ?
    palabraParaPista.classList.add('hidden-word');
    palabraParaPista.innerText = '? ? ?';
    
    if (esImpostor) {
        // Si es impostor, guardar el contenido para revelarlo después
        palabraParaPista.dataset.contenido = `<span style="color: #EF4444; font-weight: bold;">¡ERES EL IMPOSTOR!</span><br><small style="color: #999;">Solo conoces la categoría: ${categoriaSecreta}</small>`;
    } else {
        // Si no es impostor, guardar la palabra secreta
        palabraParaPista.dataset.contenido = palabraSecreta;
    }
    
    // Mostrar el botón de recordar palabra
    btnRecordar.style.display = 'inline-block';
    
    document.getElementById('input-pista').value = '';
    mostrarPantalla('pantalla-dar-pista');
    
    // Enfocar el input
    setTimeout(() => {
        document.getElementById('input-pista').focus();
    }, 100);
}

function recordarPalabra() {
    const palabraParaPista = document.getElementById('palabra-para-pista');
    const btnRecordar = document.getElementById('btn-recordar-palabra');
    
    // Verificar si el jugador es impostor
    const esImpostor = listaImpostores.includes(jugadorActualPista);
    
    // Remover la clase hidden-word y mostrar el contenido guardado
    palabraParaPista.classList.remove('hidden-word');
    
    if (esImpostor) {
        palabraParaPista.innerHTML = palabraParaPista.dataset.contenido;
    } else {
        palabraParaPista.innerText = palabraParaPista.dataset.contenido;
    }
    
    // Ocultar el botón después de revelar
    btnRecordar.style.display = 'none';
}

function guardarPistaYContinuar() {
    const pista = document.getElementById('input-pista').value.trim();
    
    if (!pista) {
        alert('Por favor escribe una pista');
        return;
    }
    
    pistasJugadores[jugadorActualPista] = pista;
    jugadorActualPista++;
    
    // Continuar con el siguiente jugador o ir a votación
    mostrarPantallaDarPista();
}

function iniciarVotacion() {
    votosJugadores = {};
    const contenedor = document.getElementById('opciones-votacion');
    contenedor.innerHTML = '';
    
    // Mostrar las pistas de todos
    let pistasList = '<h3>Pistas dadas:</h3><div style="margin: 20px 0;">';
    for (let i = 1; i <= numJugadores; i++) {
        let nombre;
        if (botEsJugador && i > numJugadoresHumanos) {
            // Es un bot (posiciones después de los humanos)
            const botNum = i - numJugadoresHumanos;
            nombre = cantidadBots > 1 ? `🤖 BOT ${botNum}` : '🤖 BOT';
        } else {
            nombre = `Jugador ${i}`;
        }
        const pista = pistasJugadores[i] || 'sin pista';
        pistasList += `<p><strong>${nombre}:</strong> "${pista}"</p>`;
    }
    pistasList += '</div>';
    
    // Botón opcional para ver el análisis del bot (modo debug)
    if (botEsJugador) {
        pistasList += `<button class="btn-secundario" onclick="mostrarAnalisisCompletoBots()" style="margin-top: 10px; font-size: 0.8rem;">
            🔍 Ver análisis del bot
        </button>`;
    }
    
    document.getElementById('lista-pistas').innerHTML = pistasList;
    
    // Crear botones de votación para cada jugador humano
    const totalJugadoresHumanos = botEsJugador ? numJugadoresHumanos : numJugadores;
    for (let votante = 1; votante <= totalJugadoresHumanos; votante++) {
        const div = document.createElement('div');
        div.style.marginBottom = '30px';
        div.style.padding = '20px';
        div.style.background = '#2d2d2d';
        div.style.borderRadius = '15px';
        div.id = `votacion-jugador-${votante}`;
        div.innerHTML = `
            <h3 style="color: var(--color-primary); margin-bottom: 15px;">Jugador ${votante}, ¿a quién votas?</h3>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                ${generarBotonesVoto(votante)}
            </div>
        `;
        contenedor.appendChild(div);
    }
    
    // El bot vota automáticamente
    votarBot();
}

function generarBotonesVoto(votante) {
    let botones = '';
    for (let i = 1; i <= numJugadores; i++) {
        if (i === votante) continue; // No puede votarse a sí mismo
        
        let nombre;
        if (botEsJugador && i > numJugadoresHumanos) {
            // Es un bot
            const botNum = i - numJugadoresHumanos;
            nombre = cantidadBots > 1 ? `🤖 BOT ${botNum}` : '🤖 BOT';
        } else {
            nombre = `Jugador ${i}`;
        }
        botones += `<button class="btn-secundario" onclick="registrarVoto(${votante}, ${i})">${nombre}</button>`;
    }
    return botones;
}

function registrarVoto(votante, votado) {
    votosJugadores[votante] = votado;
    
    // Actualizar visualmente
    const divVotante = document.getElementById(`votacion-jugador-${votante}`);
    if (divVotante) {
        divVotante.innerHTML = `<h3 style="color: var(--color-primary);">✓ Jugador ${votante} ha votado</h3>`;
    }
    
    // Verificar si todos votaron (humanos + bots)
    const totalVotantes = botEsJugador ? numJugadoresHumanos + cantidadBots : numJugadores;
    if (Object.keys(votosJugadores).length >= totalVotantes) {
        setTimeout(() => {
            mostrarResultadoVotacion();
        }, 1000);
    }
}

function votarBot() {
    // Cada bot analiza las pistas y vota al más sospechoso
    if (!botEsJugador) return;
    
    for (let botPos = numJugadoresHumanos + 1; botPos <= numJugadores; botPos++) {
        let maxSospecha = -1;
        let votoBotA = 1;
        
        for (let i = 1; i <= numJugadores; i++) {
            // No votarse a sí mismo
            if (i === botPos) continue;
            
            const pista = pistasJugadores[i] || '';
            let nivelSospecha = analizarSospecha(pista, i);
            
            if (nivelSospecha > maxSospecha) {
                maxSospecha = nivelSospecha;
                votoBotA = i;
            }
        }
        
        // Registrar el voto del bot
        votosJugadores[botPos] = votoBotA;
        
        // Console log para debugging (opcional - se puede comentar)
        console.log(`🤖 BOT ${botPos - numJugadoresHumanos} votó a Jugador ${votoBotA} (sospecha: ${maxSospecha.toFixed(1)})`);
    }
}

// Función opcional para mostrar el análisis detallado del bot (debugging)
function mostrarAnalisisBot(jugadorNum, pista) {
    if (!botEsJugador) return;
    
    const calidad = analizarCalidadPista(pista, palabraSecreta, categoriaSecreta);
    const exclusividad = calcularExclusividad(pista, palabraSecreta, categoriaSecreta);
    const sospecha = analizarSospecha(pista, jugadorNum);
    
    console.log(`\n📊 Análisis de pista del Jugador ${jugadorNum}: "${pista}"`);
    console.log(`   • Puntuación calidad: ${calidad.puntuacionCalidad}/100`);
    console.log(`   • Exclusividad: ${(exclusividad * 100).toFixed(1)}%`);
    console.log(`   • Nivel sospecha: ${sospecha.toFixed(1)}`);
    console.log(`   • Genérica: ${calidad.esGenerica ? '❌' : '✓'}`);
    console.log(`   • Comparativa: ${calidad.esComparativa ? '❌' : '✓'}`);
    console.log(`   • Muy corta: ${calidad.esMuyCorta ? '❌' : '✓'}`);
    console.log(`   • Menciona categoría: ${calidad.mencionaCategoria ? '❌' : '✓'}`);
    console.log(`   • En asociaciones: ${!calidad.noEstaEnAsociaciones ? '✓' : '❌'}`);
}

// Mostrar análisis completo de todas las pistas en un modal
function mostrarAnalisisCompletoBots() {
    let analisisHTML = '<h3 style="color: var(--color-primary); margin-bottom: 20px;">🤖 Análisis del Bot</h3>';
    analisisHTML += '<div style="max-height: 60vh; overflow-y: auto; text-align: left;">';
    
    for (let i = 1; i <= numJugadores; i++) {
        const pista = pistasJugadores[i] || 'sin pista';
        const calidad = analizarCalidadPista(pista, palabraSecreta, categoriaSecreta);
        const exclusividad = calcularExclusividad(pista, palabraSecreta, categoriaSecreta);
        const sospecha = analizarSospecha(pista, i);
        
        let nombreJugador;
        if (botEsJugador && i > numJugadoresHumanos) {
            const botNum = i - numJugadoresHumanos;
            nombreJugador = cantidadBots > 1 ? `🤖 BOT ${botNum}` : '🤖 BOT';
        } else {
            nombreJugador = `Jugador ${i}`;
        }
        
        // Color según nivel de sospecha
        let colorSospecha = '#4CAF50'; // Verde (poco sospechoso)
        if (sospecha > 8) colorSospecha = '#f44336'; // Rojo (muy sospechoso)
        else if (sospecha > 5) colorSospecha = '#ff9800'; // Naranja (moderadamente sospechoso)
        
        analisisHTML += `
            <div style="background: #2d2d2d; padding: 15px; border-radius: 10px; margin-bottom: 15px; border-left: 4px solid ${colorSospecha};">
                <p style="margin: 5px 0;"><strong style="color: var(--color-primary);">${nombreJugador}:</strong> "${pista}"</p>
                <p style="margin: 5px 0; font-size: 0.85rem;">
                    <span style="color: ${colorSospecha};">● Sospecha: ${sospecha.toFixed(1)}/10</span> | 
                    Calidad: ${calidad.puntuacionCalidad}/100 | 
                    Exclusividad: ${(exclusividad * 100).toFixed(0)}%
                </p>
                <p style="margin: 5px 0; font-size: 0.75rem; color: #999;">
                    ${calidad.esGenerica ? '❌ Genérica ' : ''}
                    ${calidad.esComparativa ? '❌ Comparativa ' : ''}
                    ${calidad.esMuyCorta ? '❌ Muy corta ' : ''}
                    ${calidad.mencionaCategoria ? '❌ Menciona categoría ' : ''}
                    ${calidad.noEstaEnAsociaciones ? '⚠️ No conocida ' : '✓ Conocida '}
                    ${exclusividad < 0.3 ? '⚠️ Poco exclusiva' : exclusividad > 0.7 ? '✓ Muy específica' : ''}
                </p>
            </div>
        `;
    }
    
    analisisHTML += '</div>';
    
    // Mostrar en modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-contenido" style="max-width: 600px;">
            ${analisisHTML}
            <button class="btn-principal" onclick="cerrarModalAnalisis(this)" style="margin-top: 20px;">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function cerrarModalAnalisis(btn) {
    const modal = btn.closest('.modal-overlay');
    document.body.removeChild(modal);
}

// Sistema de detección de calidad de pistas
function analizarCalidadPista(pista, palabra, categoria) {
    const pistaLower = pista.toLowerCase().trim();
    const palabraLower = palabra.toLowerCase();
    const categoriaLower = categoria.toLowerCase();
    
    const resultado = {
        esGenerica: false,
        esComparativa: false,
        esMuyCorta: false,
        mencionaCategoria: false,
        noEstaEnAsociaciones: false,
        seAplicaAOtrasPalabras: 0,
        puntuacionCalidad: 100 // Empieza con 100, se descuenta
    };
    
    // 1. Detectar palabras genéricas
    const palabrasGenericas = ['cosa', 'algo', 'objeto', 'tipo', 'especie', 'clase', 'forma', 'manera'];
    if (palabrasGenericas.some(gen => pistaLower.includes(gen))) {
        resultado.esGenerica = true;
        resultado.puntuacionCalidad -= 30;
    }
    
    // 2. Detectar frases comparativas
    const patronesComparativos = /^(como|tipo|parecido|similar|igual|parece|se parece|semejante)(\s|$)/i;
    if (patronesComparativos.test(pistaLower)) {
        resultado.esComparativa = true;
        resultado.puntuacionCalidad -= 25;
    }
    
    // 3. Detectar pistas muy cortas (menos de 3 caracteres)
    if (pistaLower.length < 3) {
        resultado.esMuyCorta = true;
        resultado.puntuacionCalidad -= 35;
    }
    
    // 4. Detectar si menciona la categoría
    if (pistaLower.includes(categoriaLower)) {
        resultado.mencionaCategoria = true;
        resultado.puntuacionCalidad -= 20;
    }
    
    // 5. Verificar si está en las asociaciones conocidas
    if (asociacionesPalabras[palabra]) {
        const asociacionesConocidas = asociacionesPalabras[palabra].map(a => a.toLowerCase());
        const pistaEstaEnAsociaciones = asociacionesConocidas.some(asoc => 
            asoc.includes(pistaLower) || pistaLower.includes(asoc)
        );
        
        if (!pistaEstaEnAsociaciones) {
            resultado.noEstaEnAsociaciones = true;
            resultado.puntuacionCalidad -= 15;
        }
    }
    
    return resultado;
}

// Calcular qué tan exclusiva es una pista (0 = se aplica a todas, 1 = solo a esta palabra)
function calcularExclusividad(pista, palabra, categoria) {
    const pistaLower = pista.toLowerCase().trim();
    const palabrasCategoria = datos[categoria] || [];
    let coincidencias = 0;
    
    // Contar a cuántas palabras de la categoría podría aplicarse esta pista
    for (let otraPalabra of palabrasCategoria) {
        if (otraPalabra === palabra) continue; // Saltar la palabra correcta
        
        // Verificar si la pista aparece en las asociaciones de otra palabra
        if (asociacionesPalabras[otraPalabra]) {
            const asociacionesOtra = asociacionesPalabras[otraPalabra].map(a => a.toLowerCase());
            if (asociacionesOtra.some(asoc => asoc.includes(pistaLower) || pistaLower.includes(asoc))) {
                coincidencias++;
            }
        }
    }
    
    // Calcular exclusividad (invertir el ratio)
    const totalPalabras = palabrasCategoria.length - 1; // -1 porque excluimos la palabra correcta
    if (totalPalabras === 0) return 1.0;
    
    const exclusividad = 1 - (coincidencias / totalPalabras);
    return exclusividad;
}

function analizarSospecha(pista, jugador) {
    let sospecha = 0;
    const pistaLower = pista.toLowerCase();
    const palabraLower = palabraSecreta.toLowerCase();
    
    // FASE 1: Análisis de calidad de pista usando el sistema de detección
    const calidadPista = analizarCalidadPista(pista, palabraSecreta, categoriaSecreta);
    
    // Sumar sospecha basada en la calidad detectada
    if (calidadPista.esGenerica) sospecha += 4;
    if (calidadPista.esComparativa) sospecha += 3;
    if (calidadPista.esMuyCorta) sospecha += 2;
    if (calidadPista.mencionaCategoria) sospecha += 3;
    if (calidadPista.noEstaEnAsociaciones) sospecha += 5;
    if (calidadPista.seAplicaAOtrasPalabras > 2) sospecha += calidadPista.seAplicaAOtrasPalabras * 2;
    
    // FASE 2: Análisis de exclusividad
    const exclusividad = calcularExclusividad(pista, palabraSecreta, categoriaSecreta);
    if (exclusividad < 0.3) sospecha += 6; // La pista se aplica a muchas palabras
    else if (exclusividad < 0.5) sospecha += 3;
    
    // FASE 3: Bonificaciones para pistas buenas
    // Pistas muy específicas y largas son menos sospechosas
    if (pistaLower.length > 15) sospecha -= 2;
    if (pistaLower.length > 25) sospecha -= 1;
    
    // FASE 4: Aleatorización para variedad (simular incertidumbre del bot)
    sospecha += Math.random() * 2;
    
    return sospecha;
}

function mostrarResultadoVotacion() {
    // Contar votos
    const conteo = {};
    for (let votante in votosJugadores) {
        const votado = votosJugadores[votante];
        conteo[votado] = (conteo[votado] || 0) + 1;
    }
    
    // Encontrar al más votado
    let maxVotos = 0;
    let expulsado = 1;
    for (let jugador in conteo) {
        if (conteo[jugador] > maxVotos) {
            maxVotos = conteo[jugador];
            expulsado = parseInt(jugador);
        }
    }
    
    // Función auxiliar para obtener nombre de jugador
    function obtenerNombreJugador(numJugador) {
        if (botEsJugador && numJugador > numJugadoresHumanos) {
            const botNum = numJugador - numJugadoresHumanos;
            return cantidadBots > 1 ? `🤖 BOT ${botNum}` : '🤖 BOT';
        }
        return `Jugador ${numJugador}`;
    }
    
    // Mostrar resultado
    const esImpostor = listaImpostores.includes(expulsado);
    const nombreExpulsado = obtenerNombreJugador(expulsado);
    
    let resultado = `<h2>RESULTADO</h2>`;
    resultado += `<p style="font-size: 1.3rem; margin: 20px 0;">${nombreExpulsado} ha sido expulsado con ${maxVotos} voto(s)</p>`;
    
    if (esImpostor) {
        resultado += `<p style="font-size: 1.5rem; color: var(--color-primary); font-weight: bold;">✓ ¡ERA EL IMPOSTOR!</p>`;
        resultado += `<p>La palabra secreta era: <strong>${palabraSecreta}</strong></p>`;
    } else {
        resultado += `<p style="font-size: 1.5rem; color: #999; font-weight: bold;">✗ NO ERA EL IMPOSTOR</p>`;
        resultado += `<p>El impostor era: <strong>${listaImpostores.map(i => obtenerNombreJugador(i)).join(', ')}</strong></p>`;
        resultado += `<p>La palabra secreta era: <strong>${palabraSecreta}</strong></p>`;
    }
    
    resultado += `<button class="btn-principal" onclick="reiniciarJuego()" style="margin-top: 20px;">VOLVER AL JUEGO</button>`;
    
    document.getElementById('resultado-votacion').innerHTML = resultado;
    mostrarPantalla('pantalla-resultado');
    
    // El bot aprende de esta partida
    botAprenderDePartida();
    
    // Pedir feedback sobre la pista del bot
    setTimeout(() => {
        pedirFeedbackPistaBot();
    }, 1500);
    
    verificarLogrosFinPartida();
}

// ============ SISTEMA DEL BOT ============

// Cargar asociaciones guardadas
function cargarAsociacionesBot() {
    const guardadas = localStorage.getItem('asociacionesBot');
    if (guardadas) {
        asociacionesPalabras = JSON.parse(guardadas);
    } else {
        // Si no hay asociaciones guardadas, el bot aprende automáticamente
        botAprendizajeAutomatico();
    }
    
    // Cargar también las pistas bloqueadas
    cargarPistasBloqueadas();
}

// Guardar asociaciones aprendidas
function guardarAsociacionesBot() {
    localStorage.setItem('asociacionesBot', JSON.stringify(asociacionesPalabras));
}

// El bot aprende una nueva asociación
function botAprenderAsociacion(palabra, pista) {
    palabra = palabra.trim();
    pista = pista.trim().toLowerCase();
    
    if (!asociacionesPalabras[palabra]) {
        asociacionesPalabras[palabra] = [];
    }
    
    if (!asociacionesPalabras[palabra].includes(pista)) {
        asociacionesPalabras[palabra].push(pista);
        guardarAsociacionesBot();
    }
}

// El bot aprende de las pistas dadas en la partida
function botAprenderDePartida() {
    if (!botEsJugador) return;
    
    // El bot aprende solo de las pistas de jugadores que NO son impostores
    for (let jugador in pistasJugadores) {
        const numeroJugador = parseInt(jugador);
        const pista = pistasJugadores[jugador];
        
        // No aprender de pistas de bots ni de pistas vacías
        const esBot = botEsJugador && numeroJugador > numJugadoresHumanos;
        if (esBot || !pista || pista === 'sin pista') continue;
        
        // Solo aprender si el jugador NO era impostor
        if (!listaImpostores.includes(numeroJugador)) {
            // Aprender la asociación entre la palabra secreta y la pista del jugador
            botAprenderAsociacion(palabraSecreta, pista);
        }
    }
    
    console.log(`🤖 Bot aprendió de jugadores inocentes para "${palabraSecreta}"`);
}

// Pedir feedback sobre las pistas de los bots
function pedirFeedbackPistaBot() {
    if (!botEsJugador) return;
    
    // Crear contenedor de feedback si no existe
    let feedbackContainer = document.getElementById('feedback-container');
    if (!feedbackContainer) {
        feedbackContainer = document.createElement('div');
        feedbackContainer.id = 'feedback-container';
        feedbackContainer.className = 'feedback-container';
        document.body.appendChild(feedbackContainer);
    } else {
        // Limpiar globos anteriores
        feedbackContainer.innerHTML = '';
    }
    
    // Crear un globo para cada bot
    for (let botPos = numJugadoresHumanos + 1; botPos <= numJugadores; botPos++) {
        if (!pistasJugadores[botPos]) continue;
        
        const pistaBot = pistasJugadores[botPos];
        const botNum = botPos - numJugadoresHumanos;
        const nombreBot = cantidadBots > 1 ? `🤖 BOT ${botNum}` : "🤖 BOT";
        
        // Crear globo de feedback
        const bubble = document.createElement('div');
        bubble.className = 'feedback-bubble';
        bubble.innerHTML = `
            <div class="bot-name">${nombreBot}</div>
            <div class="bot-clue">"${pistaBot}"</div>
            <div class="feedback-question">¿Mi respuesta fue buena?</div>
            <div class="feedback-buttons">
                <button class="btn-feedback yes" onclick="responderFeedback('${palabraSecreta}', '${pistaBot.replace(/'/g, "\\'")}', true, this)">Sí</button>
                <button class="btn-feedback no" onclick="responderFeedback('${palabraSecreta}', '${pistaBot.replace(/'/g, "\\'")}', false, this)">No</button>
            </div>
        `;
        
        feedbackContainer.appendChild(bubble);
    }
}

// Función para responder al feedback del bot
function responderFeedback(palabra, pista, esBuena, boton) {
    const bubble = boton.closest('.feedback-bubble');
    
    if (!esBuena) {
        // El usuario dijo que la pista fue mala
        bloquearPista(palabra, pista);
        
        // Mostrar mensaje de confirmación en el globo
        bubble.innerHTML = `
            <div class="bot-name">✅ ¡Entendido!</div>
            <div class="feedback-question">No volveré a usar esa pista</div>
        `;
    } else {
        // Pista marcada como buena
        bubble.innerHTML = `
            <div class="bot-name">😊 ¡Gracias!</div>
            <div class="feedback-question">Seguiré usando pistas así</div>
        `;
    }
    
    // Ocultar el globo después de 2 segundos
    setTimeout(() => {
        bubble.classList.add('fade-out');
        setTimeout(() => {
            bubble.remove();
        }, 500);
    }, 2000);
}

// Bloquear una pista para que el bot no la use más
function bloquearPista(palabra, pista) {
    if (!pistasBloqueadas[palabra]) {
        pistasBloqueadas[palabra] = [];
    }
    
    if (!pistasBloqueadas[palabra].includes(pista)) {
        pistasBloqueadas[palabra].push(pista);
        guardarPistasBloqueadas();
    }
}

// Guardar pistas bloqueadas en localStorage
function guardarPistasBloqueadas() {
    localStorage.setItem('pistasBloqueadasBot', JSON.stringify(pistasBloqueadas));
}

// Cargar pistas bloqueadas desde localStorage
function cargarPistasBloqueadas() {
    const guardadas = localStorage.getItem('pistasBloqueadasBot');
    if (guardadas) {
        pistasBloqueadas = JSON.parse(guardadas);
    }
}

// El bot genera una pista arriesgada cuando es impostor (solo conoce la categoría)
function botGenerarPistaImpostor(categoria, pistasYaUsadas = []) {
    // El bot impostor usa pistas de CUALQUIER palabra aleatoria de la categoría
    
    if (!datos[categoria]) {
        // Si no hay datos, dar pista genérica
        return "conocido";
    }
    
    // Obtener todas las palabras de la categoría
    const palabrasCategoria = datos[categoria];
    const todasLasPistas = [];
    
    // Recolectar TODAS las pistas disponibles de todas las palabras de la categoría
    const categoriaLower = categoria.toLowerCase();
    
    palabrasCategoria.forEach(palabra => {
        if (asociacionesPalabras[palabra] && asociacionesPalabras[palabra].length > 0) {
            // Agregar todas las pistas de esta palabra
            asociacionesPalabras[palabra].forEach(pista => {
                // Filtrar pistas que mencionen nombres específicos de la categoría
                const pLower = pista.toLowerCase();
                let pistaValida = true;
                
                // Filtrar si la pista contiene el nombre de la categoría
                if (pLower.includes(categoriaLower)) {
                    pistaValida = false;
                }
                
                // Verificar que la pista no mencione NINGUNA palabra de la categoría
                palabrasCategoria.forEach(palabraCheck => {
                    const palabraCheckLower = palabraCheck.toLowerCase();
                    
                    // Filtrar si la pista contiene el nombre completo de cualquier palabra
                    if (pLower.includes(palabraCheckLower)) {
                        pistaValida = false;
                    }
                    
                    // Filtrar frases comparativas como "como X", "tipo X", "estilo X"
                    if (pLower.includes(`como ${palabraCheckLower}`) || 
                        pLower.includes(`tipo ${palabraCheckLower}`) ||
                        pLower.includes(`estilo ${palabraCheckLower}`) ||
                        pLower.includes(`parecido a ${palabraCheckLower}`) ||
                        pLower.includes(`similar a ${palabraCheckLower}`)) {
                        pistaValida = false;
                    }
                });
                
                // Solo agregar la pista si no menciona ninguna palabra específica
                if (pistaValida) {
                    todasLasPistas.push(pista);
                }
            });
        }
    });
    
    // Si se encontraron pistas, filtrar las ya usadas
    if (todasLasPistas.length > 0) {
        const pistasNoUsadas = todasLasPistas.filter(p => !pistasYaUsadas.some(usada => usada.toLowerCase() === p.toLowerCase()));
        if (pistasNoUsadas.length > 0) {
            return pistasNoUsadas[Math.floor(Math.random() * pistasNoUsadas.length)];
        }
        // Si todas están usadas, permitir repetición
        return todasLasPistas[Math.floor(Math.random() * todasLasPistas.length)];
    }
    
    // Si no hay pistas disponibles, usar una palabra aleatoria y generar su pista
    const palabraAleatoria = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];
    const pistasGeneradas = generarPistasAutomaticas(palabraAleatoria, categoria);
    
    if (pistasGeneradas.length > 0) {
        return pistasGeneradas[Math.floor(Math.random() * pistasGeneradas.length)];
    }
    
    // Última opción: pista muy genérica
    return "es parte de la categoría";
}

// El bot genera una pista basada en las asociaciones
function botGenerarPista(palabra, pistasYaUsadas = []) {
    // Primero verificar si tiene asociaciones aprendidas
    if (!asociacionesPalabras[palabra] || asociacionesPalabras[palabra].length === 0) {
        // Si no tiene asociaciones, generar pista inteligente basada en la palabra
        return generarPistaInteligente(palabra, pistasYaUsadas);
    }
    
    // Palabras prohibidas que nunca se deben usar como pista
    const palabrasProhibidas = [
        "animales", "lugares", "objetos", "futbolistas", "series", "comidas", "películas",
        "animal", "lugar", "objeto", "futbolista", "serie", "comida", "película",
        "deportes", "deporte", "videojuegos", "videojuego", "pokemon", "rock", "peliculas",
        "pelicula", "clash royale", "clash", "royale", "carta", "cartas"
    ];
    
    // Filtrar pistas bloqueadas Y pistas que contengan palabras prohibidas
    const pistasDisponibles = asociacionesPalabras[palabra].filter(pista => {
        const pistaLower = pista.toLowerCase();
        const tienePalabraProhibida = palabrasProhibidas.some(prohibida => pistaLower.includes(prohibida));
        const estaBloqueada = pistasBloqueadas[palabra] && pistasBloqueadas[palabra].includes(pista);
        
        // Filtrar frases comparativas (como X, tipo X, parecido a X, similar a X, etc.)
        const esComparativa = /^(como|tipo|parecido|similar|igual|parece|se parece|semejante)(\s|$)/i.test(pistaLower);
        
        // Filtrar pistas muy genéricas o vagas
        const esDemasiadoGenerica = [
            "conocido", "famoso", "popular", "común", "raro", "especial", "único",
            "interesante", "bueno", "malo", "grande", "pequeño", "importante"
        ].some(gen => pistaLower === gen || pistaLower === `es ${gen}` || pistaLower === `muy ${gen}`);
        
        // Filtrar pistas muy cortas (menos de 3 caracteres) o solo iniciales
        const esMuyCorta = pista.trim().length < 3;
        const esSoloIniciales = /^[A-Z]{1,3}$/i.test(pista.trim());
        
        // Filtrar pistas que ya fueron usadas por otros bots
        const yaUsada = pistasYaUsadas.some(usada => usada.toLowerCase() === pistaLower);
        
        return !estaBloqueada && !tienePalabraProhibida && !esDemasiadoGenerica && !esComparativa && !esMuyCorta && !esSoloIniciales && !yaUsada;
    });
    
    // Si todas las pistas están bloqueadas, prohibidas o ya usadas, intentar sin filtrar las ya usadas
    if (pistasDisponibles.length === 0) {
        // Intentar de nuevo sin filtrar pistas ya usadas (solo si no quedan opciones)
        const pistasSinFiltrarUsadas = asociacionesPalabras[palabra].filter(pista => {
            const pistaLower = pista.toLowerCase();
            const tienePalabraProhibida = palabrasProhibidas.some(prohibida => pistaLower.includes(prohibida));
            const estaBloqueada = pistasBloqueadas[palabra] && pistasBloqueadas[palabra].includes(pista);
            const esComparativa = /^(como|tipo|parecido|similar|igual|parece|se parece|semejante)(\s|$)/i.test(pistaLower);
            const esDemasiadoGenerica = [
                "conocido", "famoso", "popular", "común", "raro", "especial", "único",
                "interesante", "bueno", "malo", "grande", "pequeño", "importante"
            ].some(gen => pistaLower === gen || pistaLower === `es ${gen}` || pistaLower === `muy ${gen}`);
            const esMuyCorta = pista.trim().length < 3;
            const esSoloIniciales = /^[A-Z]{1,3}$/i.test(pista.trim());
            
            return !estaBloqueada && !tienePalabraProhibida && !esDemasiadoGenerica && !esComparativa && !esMuyCorta && !esSoloIniciales;
        });
        
        if (pistasSinFiltrarUsadas.length > 0) {
            return pistasSinFiltrarUsadas[Math.floor(Math.random() * pistasSinFiltrarUsadas.length)];
        }
        
        return generarPistaInteligente(palabra, pistasYaUsadas);
    }
    
    // Priorizar pistas más específicas (más largas y con más información)
    const pistasEspecificas = pistasDisponibles.filter(p => p.length > 8 && !p.startsWith("es ") && !p.startsWith("tiene "));
    
    // 80% de probabilidad de usar pista específica si hay disponibles
    if (pistasEspecificas.length > 0 && Math.random() < 0.8) {
        return pistasEspecificas[Math.floor(Math.random() * pistasEspecificas.length)];
    }
    
    // Usar cualquier pista disponible
    return pistasDisponibles[Math.floor(Math.random() * pistasDisponibles.length)];
}

// Generar pista inteligente y específica para una palabra
function generarPistaInteligente(palabra, pistasYaUsadas = []) {
    const palabraLower = palabra.toLowerCase();
    
    // Analizar características de la palabra para dar pistas inteligentes
    const caracteristicas = analizarPalabra(palabra, categoriaSecreta);
    
    // Pistas basadas en análisis inteligente
    const pistasInteligentes = [];
    
    // Agregar pistas de características específicas
    if (caracteristicas.longitud) pistasInteligentes.push(caracteristicas.longitud);
    if (caracteristicas.origen) pistasInteligentes.push(caracteristicas.origen);
    if (caracteristicas.caracteristica1) pistasInteligentes.push(caracteristicas.caracteristica1);
    if (caracteristicas.caracteristica2) pistasInteligentes.push(caracteristicas.caracteristica2);
    if (caracteristicas.relacionado) pistasInteligentes.push(caracteristicas.relacionado);
    
    // Si tiene pistas inteligentes, filtrar las ya usadas
    if (pistasInteligentes.length > 0) {
        const pistasNoUsadas = pistasInteligentes.filter(p => !pistasYaUsadas.some(usada => usada.toLowerCase() === p.toLowerCase()));
        if (pistasNoUsadas.length > 0) {
            return pistasNoUsadas[Math.floor(Math.random() * pistasNoUsadas.length)];
        }
        // Si todas están usadas, devolver cualquiera
        return pistasInteligentes[Math.floor(Math.random() * pistasInteligentes.length)];
    }
    
    // Pistas de último recurso (pero nunca mencionar la categoría)
    const pistasUltimoRecurso = [
        `empieza con ${palabra.charAt(0)}`,
        `tiene ${palabra.length} letras`,
        "muy reconocido",
        "bastante conocido",
        "lo conocen todos"
    ];
    
    return pistasUltimoRecurso[Math.floor(Math.random() * pistasUltimoRecurso.length)];
}

// Analizar palabra para generar pistas inteligentes
function analizarPalabra(palabra, categoria) {
    const caracteristicas = {};
    
    // Análisis de longitud
    if (palabra.length <= 5) {
        caracteristicas.longitud = "nombre corto";
    } else if (palabra.length >= 10) {
        caracteristicas.longitud = "nombre largo";
    }
    
    // Análisis específico por categoría
    switch(categoria) {
        case "Animales":
            if (["Perro", "Gato", "Conejo", "Hámster"].includes(palabra)) {
                caracteristicas.caracteristica1 = "mascota común";
            } else if (["León", "Tigre", "Oso", "Lobo"].includes(palabra)) {
                caracteristicas.caracteristica1 = "depredador salvaje";
            } else if (["Águila", "Loro", "Pavo Real", "Pingüino"].includes(palabra)) {
                caracteristicas.caracteristica1 = "tiene plumas";
            } else if (["Delfín", "Ballena", "Tiburón", "Orca"].includes(palabra)) {
                caracteristicas.caracteristica1 = "vive en agua";
            }
            
            if (["Elefante", "Ballena", "Jirafa", "Hipopótamo", "Rinoceronte"].includes(palabra)) {
                caracteristicas.caracteristica2 = "tamaño gigante";
            } else if (["Hormiga", "Abeja", "Araña", "Mariposa"].includes(palabra)) {
                caracteristicas.caracteristica2 = "muy pequeño";
            }
            break;
            
        case "Lugares":
            if (["Playa", "Montaña", "Bosque", "Desierto", "Isla"].includes(palabra)) {
                caracteristicas.caracteristica1 = "naturaleza pura";
            } else if (["Cine", "Teatro", "Museo", "Circo"].includes(palabra)) {
                caracteristicas.caracteristica1 = "entretenimiento";
            } else if (["Hospital", "Farmacia", "Clínica"].includes(palabra)) {
                caracteristicas.caracteristica1 = "relacionado salud";
            } else if (["Escuela", "Biblioteca", "Universidad"].includes(palabra)) {
                caracteristicas.caracteristica1 = "educativo";
            }
            break;
            
        case "Objetos":
            if (["Teléfono", "Computadora", "Televisor", "Radio"].includes(palabra)) {
                caracteristicas.caracteristica1 = "electrónico moderno";
            } else if (["Guitarra", "Piano", "Trompeta", "Batería", "Bajo"].includes(palabra)) {
                caracteristicas.caracteristica1 = "instrumento musical";
            } else if (["Martillo", "Destornillador", "Tijeras", "Llave"].includes(palabra)) {
                caracteristicas.caracteristica1 = "herramienta útil";
            } else if (["Plato", "Vaso", "Tenedor", "Cuchillo"].includes(palabra)) {
                caracteristicas.caracteristica1 = "usar al comer";
            }
            break;
            
        case "Futbolistas":
            if (["Messi", "Cristiano Ronaldo", "Maradona", "Pelé", "Zidane"].includes(palabra)) {
                caracteristicas.caracteristica1 = "leyenda histórica";
            } else if (["Mbappé", "Haaland", "Vinicius", "Pedri"].includes(palabra)) {
                caracteristicas.caracteristica1 = "joven promesa";
            }
            
            if (palabra.includes("Messi") || palabra.includes("Maradona") || palabra.includes("Di María")) {
                caracteristicas.origen = "argentino";
            } else if (palabra.includes("Neymar") || palabra.includes("Ronaldo") || palabra.includes("Pelé")) {
                caracteristicas.origen = "brasileño";
            } else if (palabra.includes("Cristiano")) {
                caracteristicas.origen = "portugués";
            }
            break;
            
        case "Series":
            if (["Breaking Bad", "The Sopranos", "Peaky Blinders"].includes(palabra)) {
                caracteristicas.caracteristica1 = "crimen drama";
            } else if (["Friends", "The Office", "Brooklyn Nine-Nine"].includes(palabra)) {
                caracteristicas.caracteristica1 = "comedia pura";
            } else if (["Game of Thrones", "The Witcher", "House of Dragon"].includes(palabra)) {
                caracteristicas.caracteristica1 = "fantasía épica";
            }
            break;
            
        case "Comidas":
            if (["Pizza", "Pasta", "Lasaña"].includes(palabra)) {
                caracteristicas.origen = "italiana";
            } else if (["Taco", "Burrito", "Quesadilla"].includes(palabra)) {
                caracteristicas.origen = "mexicana";
            } else if (["Sushi", "Ramen"].includes(palabra)) {
                caracteristicas.origen = "japonesa";
            }
            
            if (["Helado", "Chocolate", "Churros", "Donas"].includes(palabra)) {
                caracteristicas.caracteristica1 = "dulce postre";
            } else if (["Asado", "Hamburguesa", "Milanesa"].includes(palabra)) {
                caracteristicas.caracteristica1 = "tiene carne";
            }
            break;
    }
    
    return caracteristicas;
}

// El bot da una pista durante el juego
function botDarPista() {
    if (!botActivado) return null;
    
    // El bot da su pista basada en la palabra secreta
    return botGenerarPista(palabraSecreta);
}

// Mostrar la pista del bot en pantalla
function mostrarPistaBot(pista) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-contenido">
            <h3 style="color: var(--color-primary); margin-bottom: 15px;">🤖 PISTA DEL BOT</h3>
            <p style="font-size: 1.5rem; font-weight: bold; margin: 20px 0; color: var(--color-primary);">${pista}</p>
            <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin: 10px 0;">El bot asocia esta pista con la palabra secreta</p>
            <button class="btn-principal" onclick="cerrarModalBot(this)">CONTINUAR</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function cerrarModalBot(btn) {
    const modal = btn.closest('.modal-overlay');
    document.body.removeChild(modal);
}

// Interfaz para entrenar al bot manualmente
function mostrarEntrenamientoBot() {
    const palabra = prompt("Palabra para entrenar:");
    if (!palabra) return;
    
    const pista = prompt(`Ingresa una pista para "${palabra}":`);
    if (!pista) return;
    
    botAprenderAsociacion(palabra, pista);
    alert(`✓ Bot aprendió: "${palabra}" → "${pista}"`);
}

// Cargar tema guardado al iniciar
window.addEventListener('DOMContentLoaded', () => {
    // Siempre iniciar en modo oscuro
    document.body.classList.remove('tema-claro');
    localStorage.removeItem('tema');
    
    // Cargar asociaciones del bot
    cargarAsociacionesBot();
    
    // Inicializar variables del DOM
    caja = document.getElementById('caja-secreta');
    btnRevelar = document.getElementById('btn-revelar-clic');
    btnSiguiente = document.getElementById('btn-siguiente');
    modoDificil = document.getElementById('switch-dificil');
    
    // Cargar logros guardados
    cargarLogros();
    
    // Inicializar estado de botones
    actualizarEstadoBotones('input-jugadores');
    actualizarEstadoBotones('input-impostores');
    actualizarEstadoBotones('input-max-impostores');
});