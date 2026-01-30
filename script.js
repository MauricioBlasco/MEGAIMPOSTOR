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
        "Mauro","Lopa", "Euge", "Baza", "Melina", "eze", "Isidro", "Raul", "Nacho", "Tejeda", "prato", "Luna", "Valen", "lio", "Viva", "monti", "Arguello", 
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
        "Perro": ["mejor amigo", "ladra", "collar", "hueso", "fiel"],
        "Gato": ["maúlla", "siete vidas", "ágil", "bigotes", "ovillo"],
        "Elefante": ["trompa", "colmillos", "orejas grandes", "memoria", "paquidermo"],
        "Tigre": ["rayas", "garras", "selva", "felino", "naranja"],
        "Delfín": ["inteligente", "mar", "salta", "eco-localización", "aleta"],
        "Lobo": ["aúlla", "manada", "luna llena", "carnívoro", "bosque"],
        "León": ["melena", "rugido", "rey", "sabana", "depredador"],
        "Cebra": ["rayas blancas y negras", "sabana", "herbívoro", "parecido al caballo", "África"],
        "Jirafa": ["cuello largo", "manchas", "lengua azul", "alta", "hojas de árboles"],
        "Oso": ["hibernación", "miel", "peludo", "garras", "bosque"],
        "Panda": ["blanco y negro", "bambú", "China", "tierno", "oso"],
        "Pingüino": ["Antártida", "no vuela", "esmoquin natural", "hielo", "nada muy bien"],
        "Tiburón": ["dientes afilados", "océano", "aleta dorsal", "depredador", "escualo"],
        "Águila": ["vista aguda", "vuela alto", "pico curvo", "nido", "símbolo nacional"],
        "Serpiente": ["reptil", "sin patas", "lengua bífida", "veneno", "escamas"],
        "Caballo": ["galope", "silla de montar", "crin", "herraduras", "equino"],
        "Vaca": ["leche", "pasto", "mugido", "cuernos", "ganadería"],
        "Cerdo": ["rosado", "granja", "hocico", "jamón", "lodo"],
        "Mono": ["primate", "banana", "trepa", "ágil", "ruidoso"],
        "Gorila": ["gran tamaño", "espalda plateada", "fuerte", "selva", "primate"],
        "Canguro": ["salta", "bolsa", "Australia", "cola fuerte", "boxeador"],
        "Hipopótamo": ["río", "boca enorme", "pesado", "África", "peligroso"],
        "Rinoceronte": ["cuerno", "piel gruesa", "pesado", "sabana", "amenazado"],
        "Tortuga": ["caparazón", "lenta", "reptil", "longeva", "huevo"],
        "Conejo": ["orejas largas", "zanahoria", "salta", "madriguera", "dientes delanteros"],
        "Hámster": ["rueda", "mejillas grandes", "mascota", "pequeño", "roedor"],
        "Loro": ["habla", "plumas coloridas", "pirata", "pico", "ave"],
        "Pavo Real": ["cola desplegable", "colores brillantes", "ave", "elegante", "ojos en plumas"],
        "Ballena": ["gigante", "mamífero marino", "sopla agua", "océano", "canto"],
        "Pulpo": ["ocho tentáculos", "tinta", "camuflaje", "mar", "tres corazones"],
        "Medusa": ["transparente", "tentáculos", "pica", "mar", "gelatina"],
        "Abeja": ["poliniza", "miel", "rayas amarillas y negras", "colmena", "aguijón"],
        "Hormiga": ["pequeña", "fuerza", "hormiguero", "fila", "trabajadora"],
        "Mariposa": ["metamorfosis", "alas coloridas", "flores", "oruga", "vuela"],
        "Araña": ["ocho patas", "telaraña", "seda", "veneno", "insectívoro"],
        "Escorpión": ["cola venenosa", "pinzas", "desierto", "arácnido", "nocturno"],
        "Cocodrilo": ["reptil", "dientes grandes", "río", "piel dura", "lagarto gigante"],
        "Camaleón": ["cambia de color", "lengua larga", "ojos independientes", "lento", "camuflaje"],
        "Murciélago": ["vuela", "nocturno", "radar", "cueva", "mamífero"],
        "Zorro": ["astuto", "cola peluda", "pelaje rojizo", "nocturno", "orejas puntiagudas"],
        "Ardilla": ["nuez", "cola esponjosa", "trepa árboles", "roedor", "rápida"],
        "Mapache": ["máscara natural", "manos hábiles", "nocturno", "basura", "cola anillada"],
        "Ciervo": ["cornamenta", "bosque", "Bambi", "rápido", "herbívoro"],
        "Cabra": ["cuernos", "montaña", "leche", "salta", "barba"],
        "Oveja": ["lana", "balido", "rebaño", "blanco", "herbívoro"],
        "Gallo": ["despertador", "cresta", "plumas", "cacareo", "granja"],
        "Pato": ["cuac", "nada", "pico plano", "plumas", "laguna"],
        "Cisne": ["cuello elegante", "blanco", "lago", "patito feo", "majestuoso"],
        "orca": ["ballena asesina", "blanco y negro", "depredador", "océano", "inteligente"],
        "foca": ["aletas", "frío", "hielo", "nada", "bigotes"],
        
        // Lugares
        "Playa": ["arena", "mar", "sol", "vacaciones", "sombrilla"],
        "Cine": ["películas", "palomitas", "pantalla grande", "butacas", "estrenos"],
        "Estadio": ["cancha", "tribunas", "deportes", "gritos", "multitud"],
        "Hospital": ["médicos", "enfermos", "medicina", "camillas", "urgencias"],
        "Escuela": ["estudiantes", "maestros", "pupitres", "recreo", "aprendizaje"],
        "Aeropuerto": ["aviones", "maletas", "terminal", "pasaportes", "viajes"],
        "Biblioteca": ["libros", "silencio", "estantes", "estudio", "lectura"],
        "Museo": ["arte", "historia", "exposiciones", "cuadros", "guía"],
        "Zoológico": ["animales", "jaulas", "visita", "cautiverio", "especies"],
        "Parque": ["árboles", "juegos", "aire libre", "pasto", "pasear"],
        "Restaurante": ["comida", "menú", "mozo", "mesa", "propina"],
        "Hotel": ["habitación", "vacaciones", "recepción", "cama", "desayuno"],
        "Gimnasio": ["pesas", "ejercicio", "sudor", "máquinas", "entrenamiento"],
        "Farmacia": ["medicamentos", "recetas", "farmacéutico", "salud", "botiquín"],
        "Supermercado": ["carrito", "comida", "cajas", "pasillos", "compras"],
        "Banco": ["dinero", "cajero", "cuentas", "ahorros", "intereses"],
        "Iglesia": ["rezo", "campanas", "religión", "altar", "misa"],
        "Castillo": ["rey", "murallas", "foso", "historia", "fortaleza"],
        "Cárcel": ["presos", "celdas", "guardias", "rejas", "condena"],
        "Bosque": ["árboles", "naturaleza", "senderos", "pinos", "fauna"],
        "Desierto": ["arena", "calor", "camellos", "dunas", "oasis"],
        "Montaña": ["altura", "nieve", "escalar", "pico", "senderismo"],
        "Isla": ["mar por todos lados", "palmeras", "aislada", "náufrago", "bote"],
        "Volcán": ["lava", "magma", "erupción", "cráter", "ceniza"],
        "Río": ["agua corriente", "peces", "cauce", "orilla", "desembocadura"],
        "Cascada": ["caída de agua", "altura", "catarata", "ruido", "naturaleza"],
        "Puerto": ["barcos", "contenedores", "mar", "muelle", "aduana"],
        "Estación de Tren": ["vías", "andén", "vagones", "pasajeros", "locomotoras"],
        "Gasolinera": ["nafta", "combustible", "autos", "manguera", "ruta"],
        "Panadería": ["pan", "facturas", "harina", "horno", "olor rico"],
        "Peluquería": ["corte", "pelo", "tijeras", "espejo", "peinado"],
        "Teatro": ["actores", "escenario", "funciones", "aplausos", "telón"],
        "Casino": ["apuestas", "cartas", "ruleta", "azar", "fichas"],
        "Circo": ["payasos", "carpa", "acrobacias", "malabares", "espectáculo"],
        "Acuario": ["peces", "peceras", "agua", "tiburones", "exhibición"],
        "Planetario": ["estrellas", "espacio", "telescopio", "domo", "astronomía"],
        "Cementerio": ["tumbas", "lápidas", "flores", "silencio", "muertos"],
        "Granja": ["animales", "campo", "cultivo", "tractor", "establo"],
        "Puente": ["cruce", "río", "altura", "estructura", "camino"],
        "Cabaña": ["madera", "bosque", "acogedora", "montaña", "chimenea"],
        "Cueva": ["oscuridad", "murciélagos", "estalactitas", "rocas", "eco"],
        "Jungla": ["selva densa", "mucha lluvia", "animales salvajes", "verde", "Tarzán"],
        "Pantano": ["agua estancada", "cocodrilos", "lodo", "mosquitos", "humedad"],
        
        // Objetos
        "Lámpara": ["luz", "bombilla", "noche", "escritorio", "encender"],
        "Reloj": ["tiempo", "horas", "agujas", "muñeca", "tic-tac"],
        "Espejo": ["reflejo", "cristal", "verse", "baño", "vanidad"],
        "Martillo": ["clavos", "herramienta", "golpear", "carpintería", "mango"],
        "Tenedor": ["comer", "pinchar", "cubierto", "cuatro puntas", "metal"],
        "Cuchillo": ["cortar", "filo", "cocina", "peligroso", "mango"],
        "Cuchara": ["sopa", "cubierto", "cóncava", "tomar", "postre"],
        "Plato": ["vajilla", "redondo", "comida", "porcelana", "mesa"],
        "Vaso": ["beber", "líquido", "cristal", "transparente", "sed"],
        "Sartén": ["cocinar", "freír", "mango", "fuego", "teflón"],
        "Llave": ["abrir", "cerradura", "metal", "llavero", "puerta"],
        "Candado": ["seguridad", "llave", "cadena", "cerrar", "protección"],
        "Teléfono": ["llamadas", "celular", "pantalla", "comunicación", "aplicaciones"],
        "Computadora": ["pantalla", "teclado", "internet", "trabajo", "procesador"],
        "Televisor": ["canales", "pantalla", "control remoto", "series", "salón"],
        "Radio": ["música", "locutor", "sintonizar", "ondas", "antena"],
        "Cámara": ["fotos", "lente", "flash", "recuerdos", "disparador"],
        "Libro": ["páginas", "leer", "autor", "historia", "biblioteca"],
        "Lápiz": ["escribir", "grafito", "borrar", "dibujo", "escolar"],
        "Mochila": ["espalda", "libros", "cargar", "correas", "escolar"],
        "Maleta": ["viaje", "ropa", "aeropuerto", "ruedas", "equipaje"],
        "Paraguas": ["lluvia", "cubrirse", "mango", "abrir", "mojarse"],
        "Gafas": ["vista", "lentes", "ojos", "ver mejor", "montura"],
        "Billetera": ["dinero", "tarjetas", "bolsillo", "cuero", "documentos"],
        "Moneda": ["dinero", "metal", "cara o cruz", "cambio", "valor"],
        "Destornillador": ["tornillo", "herramienta", "girar", "punta", "ajustar"],
        "Tijeras": ["cortar", "papel", "dos hojas", "dedos", "manualidades"],
        "Peine": ["pelo", "desenredar", "púas", "peinado", "cabeza"],
        "Jabón": ["limpieza", "burbujas", "baño", "espuma", "olor"],
        "Toalla": ["secarse", "baño", "tela", "playa", "suave"],
        "Almohada": ["dormir", "cabeza", "cama", "suave", "funda"],
        "Manta": ["frío", "cama", "abrigo", "taparse", "suave"],
        "Silla": ["sentarse", "cuatro patas", "respaldo", "mueble", "mesa"],
        "Mesa": ["mueble", "patas", "comer", "superficie", "madera"],
        "Sofá": ["salón", "sentarse", "cómodo", "cojines", "televisión"],
        "Cama": ["dormir", "colchón", "sábanas", "noche", "descanso"],
        "Bicicleta": ["dos ruedas", "pedales", "cadena", "transporte", "casco"],
        "Guitarra": ["cuerdas", "música", "instrumento", "acústica", "trastes"],
        "Piano": ["teclas", "blancas y negras", "música", "instrumento", "notas"],
        "Pelota": ["redonda", "jugar", "deporte", "patear", "rebote"],
        "Raqueta": ["tenis", "cuerdas", "red", "golpe", "deporte"],
        "Botella": ["envase", "líquido", "tapa", "plástico", "vidrio"],
        "Encendedor": ["fuego", "llama", "cigarrillo", "gas", "chispa"],
        "trompeta": ["viento", "metal", "boquilla", "tres pistones", "música"],
        "Escoba": ["barrer", "piso", "cerdas", "palo", "limpieza"],
        "bateria": ["percusión", "palillos", "ritmo", "música", "platillos"],
        "bajo": ["cuerdas", "música", "grave", "instrumento", "ritmo"],
        
        // Futbolistas
        "Puskás": ["húngaro", "Real Madrid", "premio al mejor gol", "histórico", "zurdo"],
        "Eusébio": ["pantera negra", "Portugal", "Benfica", "goleador", "leyenda"],
        "Gerd Müller": ["el torpedo", "alemán", "Bayern Munich", "goleador histórico", "mundialista"],
        "George Best": ["quinto Beatle", "Irlanda del Norte", "United", "talento", "rebelde"],
        "Yashin": ["araña negra", "portero", "Unión Soviética", "Balón de Oro", "gorra"],
        "Baresi": ["defensa", "Milan", "italiano", "capitán", "número 6"],
        "Maldini": ["eterno capitán", "Milan", "defensa", "italiano", "elegancia"],
        "Passarella": ["gran capitán", "defensor", "argentino", "dos mundiales", "River"],
        "Kempes": ["el Matador", "goleador del 78", "argentino", "Valencia", "delantero"],
        "Batistuta": ["Bati-gol", "goleador", "Argentina", "Fiorentina", "número 9"],
        "Figo": ["Portugal", "Madrid y Barça", "extremo", "Balón de Oro", "técnica"],
        "Puyol": ["Tarzán", "defensa", "Barcelona", "capitán", "garra"],
        "Pirlo": ["el arquitecto", "italiano", "mediocampista", "tiros libres", "Juventus"],
        "Lahm": ["lateral", "alemán", "capitán del 2014", "Bayern", "polivalente"],
        "Gerrard": ["Liverpool", "capitán", "mediocampista", "potente remate", "inglés"],
        "Lampard": ["Chelsea", "mediocampista goleador", "inglés", "leyenda", "técnico"],
        "Scholes": ["Manchester United", "colorado", "mediocampista", "visión", "remate"],
        "Raúl": ["el Ángel de Madrid", "número 7", "delantero", "español", "leyenda"],
        "Shevchenko": ["ucraniano", "Milan", "delantero", "Balón de Oro", "goleador"],
        "Van Basten": ["holandés", "volea histórica", "Milan", "delantero", "Balón de Oro"],
        "Bergkamp": ["holandés", "control de balón", "Arsenal", "técnico", "elegancia"],
        "Totti": ["il Capitano", "Roma", "italiano", "número 10", "lealtad"],
        "Del Piero": ["Pinturicchio", "Juventus", "italiano", "delantero", "tiros libres"],
        "Klose": ["máximo goleador en mundiales", "alemán", "delantero", "cabezazo", "eficaz"],
        "Foden": ["City", "inglés", "joven talento", "zurdo", "Pep Guardiola"],
        "Saka": ["Arsenal", "inglés", "extremo", "joven", "rápido"],
        "Rodri": ["City", "pivote", "mediocampista", "español", "gol en final Champions"],
        "Valverde": ["el Pajarito", "uruguayo", "Madrid", "potencia", "despliegue"],
        "Courtois": ["portero", "belga", "Madrid", "alto", "atajadas"],
        "Alisson": ["portero", "brasileño", "Liverpool", "barba", "seguro"],
        "Van Dijk": ["defensa", "holandés", "Liverpool", "fuerte", "liderazgo"],
        "Salah": ["faraón", "egipcio", "Liverpool", "zurdo", "velocidad"],
        "Son": ["surcoreano", "Tottenham", "rápido", "delantero", "Premier League"],
        "Gavi": ["joven", "Barcelona", "intensidad", "mediocampista", "español"],
        "James Rodríguez": ["colombiano", "zurdo", "gol mundial 2014", "10", "talento"],
        "Garrincha": ["la alegría del pueblo", "brasileño", "gambeta", "piernas arqueadas", "campeón"],
        "Zico": ["Pelé blanco", "Flamengo", "brasileño", "tiros libres", "10"],
        "Socrates": ["doctor", "brasileño", "elegancia", "mediocampista", "barbudo"],
        "Falcao": ["Tigre", "colombiano", "delantero", "Porto/Atlético", "goleador"],
        "Chilavert": ["portero", "paraguayo", "goles de tiro libre", "temperamento", "Velez"],
        "Valderrama": ["el Pibe", "colombiano", "pelo rubio rizado", "mediocampista", "técnica"],
        "Forlán": ["Cachavacha", "uruguayo", "mejor jugador 2010", "rubio", "remate"],
        "Cavani": ["el Matador", "uruguayo", "delantero", "pelo largo", "goleador"],
        "Godín": ["defensa", "uruguayo", "Atlético de Madrid", "cabezazo", "garra"],
        "Bebeto": ["brasileño", "festejo del bebé", "delantero", "campeón 94", "técnica"],
        "Vieri": ["el Toro", "italiano", "delantero", "fuerte", "goleador"],
        "Nedved": ["checo", "Juventus", "rubio", "Balón de Oro", "mediocampista"],
        "Stoichkov": ["búlgaro", "Barcelona", "carácter", "zurdo", "Balón de Oro"],
        "Hagi": ["Maradona de los Cárpatos", "rumano", "10", "talento", "zurdo"],
        "Kahn": ["el Titán", "portero", "alemán", "Bayern", "carácter"],
        "Schmeichel": ["danés", "portero", "United", "gran envergadura", "leyenda"],
        "Van der Sar": ["holandés", "portero", "United/Ajax", "alto", "seguro"],
        "Hugo Sánchez": ["mexicano", "Real Madrid", "chilenas", "goleador", "rulos"],
        "Rafa Márquez": ["Káiser", "mexicano", "defensa", "Barcelona", "salida limpia"],
        "Pelé": ["O Rei", "brasileño", "3 mundiales", "10", "Santos"],
        "Maradona": ["el Diego", "argentino", "10", "gol del siglo", "mano de Dios"],
        "Messi": ["La Pulga", "argentino", "8 Balones de Oro", "zurdo", "el mejor"],
        "Cristiano Ronaldo": ["CR7", "portugués", "bicho", "goles", "trabajo duro"],
        "Neymar": ["brasileño", "regate", "Santos/Barça/PSG", "10", "magia"],
        "Mbappé": ["tortuga", "francés", "velocidad", "Madrid", "campeón del mundo"],
        "Haaland": ["androide", "noruego", "City", "goles", "fuerza"],
        "Lewandowski": ["polaco", "delantero", "goleador", "Bayern/Barça", "9"],
        "Benzema": ["el gato", "francés", "Madrid", "Balón de Oro", "delantero técnico"],
        "Modric": ["croata", "mediocampista", "Madrid", "Balón de Oro", "exterior"],
        "Kroos": ["alemán", "precisión", "Madrid", "mediocampista", "retiro reciente"],
        "De Bruyne": ["belga", "City", "asistencias", "visión", "colorado"],
        "Kanté": ["francés", "pulmones", "humilde", "mediocampista", "recuperador"],
        "Casemiro": ["brasileño", "muro", "United/Madrid", "mediocampista defensivo", "fuerza"],
        "Busquets": ["pulpo", "Barcelona", "mediocampista", "inteligencia", "español"],
        "Xavi": ["arquitecto", "Barcelona", "mediocampista", "pases", "visión"],
        "Iniesta": ["el cerebro", "gol del mundial", "Barcelona", "mediocampista", "magia"],
        "Zidane": ["Zizou", "francés", "elegancia", "Madrid", "cabezazo"],
        "Ronaldo": ["el fenómeno", "brasileño", "9", "regate", "goles"],
        "Ronaldinho": ["sonrisa", "brasileño", "magia", "Barcelona", "regate"],
        "Romario": ["el Chapulín", "brasileño", "goleador de área", "campeón 94", "corto"],
        "Rivaldo": ["brasileño", "zurdo", "Barcelona", "Balón de Oro", "elegante"],
        "Kaká": ["brasileño", "Milan", "Balón de Oro", "elegante", "potencia"],
        "Roberto Carlos": ["potencia", "lateral izquierdo", "brasileño", "tiros libres", "velocidad"],
        "Cafu": ["lateral derecho", "brasileño", "dos mundiales", "recorrido", "leyenda"],
        "Thiago Silva": ["defensa", "brasileño", "Milan/Chelsea/PSG", "experiencia", "líder"],
        "Marcelo": ["lateral izquierdo", "brasileño", "técnica", "Madrid", "pelo afro"],
        "Dani Alves": ["lateral derecho", "brasileño", "más títulos", "ofensivo", "Barça"],
        "Ramos": ["defensa", "central", "Madrid", "goles de cabeza", "capitán"],
        "Piqué": ["defensa", "Barcelona", "alto", "presidencia King's League", "español"],
        "Kompany": ["defensa", "City", "belga", "capitán", "líder"],
        "Terry": ["defensa", "Chelsea", "capitán", "inglés", "líder"],
        "Ferdinand": ["defensa", "United", "inglés", "central", "elegante"],
        "Vidic": ["defensa", "United", "serbio", "fuerte", "muro"],
        "Chiellini": ["defensa", "italiano", "fuerte", "Juventus", "central"],
        "Bonucci": ["defensa", "italiano", "salida de balón", "Juventus", "central"],
        "Cannavaro": ["defensa", "Balón de Oro", "italiano", "campeón 2006", "central"],
        "Nesta": ["defensa", "italiano", "elegancia", "Milan", "central"],
        "Thuram": ["defensa", "francés", "campeón 98", "fuerte", "lateral/central"],
        "Neuer": ["portero líbero", "alemán", "Bayern", "campeón 2014", "gigante"],
        "Buffon": ["portero", "italiano", "leyenda", "longevidad", "Juventus"],
        "Casillas": ["San Iker", "portero", "español", "Madrid", "paradas milagrosas"],
        "Oblak": ["portero", "esloveno", "Atlético de Madrid", "seguro", "reflejos"],
        "Ter Stegen": ["portero", "alemán", "Barcelona", "juego de pies", "reflejos"],
        "Ederson": ["portero", "brasileño", "City", "juego de pies", "tatuajes"],
        "Donnarumma": ["portero", "italiano", "PSG", "alto", "joven"],
        "Navas": ["halcón", "portero", "costarricense", "Madrid", "reflejos"],
        "De Gea": ["portero", "español", "United", "reflejos bajo palos", "flaco"],
        "Cech": ["portero", "casco", "checo", "Chelsea", "leyenda"],
        "Henry": ["Tití", "delantero", "francés", "Arsenal", "velocidad"],
        "Drogba": ["delantero", "Costa de Marfil", "Chelsea", "fuerza", "leyenda"],
        "Eto'o": ["delantero", "camerunés", "Barça/Inter", "velocidad", "goles"],
        "Weah": ["delantero", "liberiano", "Balón de Oro", "presidente", "potencia"],
        "Suárez": ["pistolero", "uruguayo", "delantero", "9", "goles"],
        "Agüero": ["Kun", "argentino", "delantero", "City", "streaming"],
        "Ibrahimovic": ["Ibra", "sueco", "delantero", "acrobacias", "ego"],
        "Rooney": ["Bad Boy", "inglés", "delantero", "United", "potencia"],
        "Van Persie": ["holandés", "delantero", "zurdo", "gol de palomita", "United"],
        "Griezmann": ["el principito", "francés", "Atlético", "mediapunta", "pelo corto/largo"],
        "Pogba": ["mediocampista", "francés", "talento", "peinados", "potente"],
        "Vieira": ["mediocampista", "francés", "Arsenal", "fuerte", "líder"],
        "Makélélé": ["mediocampista", "francés", "recuperador", "pequeño", "Madrid/Chelsea"],
        "Seedorf": ["mediocampista", "holandés", "fuerte", "campeón con 3 equipos", "elegante"],
        "Gattuso": ["mediocampista", "italiano", "garra", "fuerte", "Milan"],
        "Ballack": ["mediocampista", "alemán", "potente", "líder", "13"],
        "Özil": ["mago de Oz", "alemán", "asistencias", "ojos grandes", "10"],
        "Dybala": ["la Joya", "argentino", "zurdo", "Roma", "máscara"],
        "Lautaro": ["el Toro", "argentino", "Inter", "delantero", "9"],
        "Julián Álvarez": ["la Araña", "argentino", "City/Atlético", "delantero", "campeón"],
        "Enzo Fernández": ["mediocampista", "argentino", "Chelsea", "mejor joven mundial", "talento"],
        "Mac Allister": ["mediocampista", "argentino", "Liverpool", "colorado", "pases"],
        "Dibu Martínez": ["portero", "argentino", "penales", "atajadas", "Villa"],
        "Otamendi": ["el General", "defensa", "argentino", "central", "tatuajes"],
        "Cuti Romero": ["defensa", "argentino", "central", "agresivo", "Tottenham"],
        "Tagliafico": ["lateral izquierdo", "argentino", "Lyon", "despliegue", "entrega"],
        "Montiel": ["cachete", "lateral derecho", "penal decisivo", "argentino", "Sevilla"],
        "Riquelme": ["Román", "argentino", "Boca", "10", "pausa"],
        "Verón": ["la Brujita", "argentino", "mediocampista", "Estudiantes", "visión"],
        "Aimar": ["el Payaso", "argentino", "mediocampista", "talento", "ídolo de Messi"],
        "Ortega": ["el Burrito", "argentino", "gambeta", "River", "10"],
        "Redondo": ["mediocampista", "argentino", "taco de Old Trafford", "elegancia", "Madrid"],
        "Simeone": ["el Cholo", "argentino", "mediocampista", "garra", "técnico Atlético"],
        "Mascherano": ["el Jefecito", "argentino", "mediocampista", "entrega", "Barcelona"],
        "Zanetti": ["el Pupi", "argentino", "lateral/medio", "Inter", "eterno"],
        "Crespo": ["Valdanito", "argentino", "delantero", "goleador", "elegante"],
        "Palermo": ["el Titán", "argentino", "Boca", "goles increíbles", "optimista del gol"],
        "Tevez": ["el Apache", "argentino", "delantero", "garra", "Boca/United/City"],
        "Higuaín": ["Pipa", "argentino", "delantero", "goles", "Madrid/Juventus"],
        "Di María": ["el Fideo", "argentino", "goles en finales", "zurdo", "Benfica"],
        "Papu Gómez": ["argentino", "baile", "mediocampista", "Sevilla", "pequeño"],
        "Lo Celso": ["mediocampista", "argentino", "zurdo", "pases", "Tottenham"],
        "Paredes": ["mediocampista", "argentino", "pegada", "Roma", "5"],
        "Acuña": ["el Huevo", "argentino", "lateral izquierdo", "fuerte", "Sevilla"],
        
        // Series
        "Breaking Bad": ["Walter White", "metanfetamina", "Heisenberg", "química", "desierto"],
        "Stranger Things": ["Hawkins", "Demogorgon", "años 80", "Eleven", "Upside Down"],
        "Game of Thrones": ["dragones", "Trono de Hierro", "Invierno llega", "Westeros", "medieval"],
        "The Office": ["Dunder Mifflin", "Scranton", "mockumentary", "Michael Scott", "oficina"],
        "Friends": ["Central Perk", "seis amigos", "Nueva York", "café", "Ross y Rachel"],
        "Dark": ["viajes en el tiempo", "alemana", "bucles temporales", "Winden", "tres generaciones"],
        "La Casa de Papel": ["Bella Ciao", "máscaras de Dalí", "Profesor", "atraco", "Tokio"],
        "The Crown": ["Reina Isabel", "familia real", "británica", "historia", "política"],
        "Black Mirror": ["tecnología", "distópico", "episodios independientes", "futuro oscuro", "reflexión"],
        "The Mandalorian": ["Baby Yoda", "Grogu", "Star Wars", "cazarrecompensas", "western espacial"],
        "The Witcher": ["Geralt", "brujo", "monstruos", "espadas", "fantasía"],
        "Peaky Blinders": ["Birmingham", "Thomas Shelby", "gángsters", "años 20", "gorras con cuchillas"],
        "The Boys": ["superhéroes corruptos", "Homelander", "Vought", "violencia", "sátira"],
        "Narcos": ["Pablo Escobar", "Colombia", "DEA", "drogas", "Medellín"],
        "Better Call Saul": ["Saul Goodman", "abogado", "Breaking Bad", "prequel", "Albuquerque"],
        "Sherlock": ["detective", "Benedick Cumberbatch", "Londres", "casos", "John Watson"],
        "The Walking Dead": ["zombies", "apocalipsis", "Rick Grimes", "supervivencia", "muertos vivientes"],
        "Suits": ["abogados", "Nueva York", "Harvey Specter", "firma legal", "trajes"],
        "Succession": ["familia rica", "imperio mediático", "hermanos", "poder", "Logan Roy"],
        "True Detective": ["detectives", "casos oscuros", "antología", "Matthew McConaughey", "misterio"],
        "The Last of Us": ["hongos zombies", "Joel y Ellie", "apocalipsis", "videojuego adaptado", "supervivencia"],
        "Ozark": ["lavado de dinero", "Marty Byrde", "Ozarks", "cartel", "familia"],
        "House of Cards": ["Frank Underwood", "política", "manipulación", "Washington", "poder"],
        "Rick and Morty": ["científico loco", "nieto", "viajes interdimensionales", "comedia", "animada"],
        "BoJack Horseman": ["caballo", "actor deprimido", "Hollywood", "animada", "drama"],
        "Arcane": ["League of Legends", "Vi y Jinx", "Piltover y Zaun", "animación", "hermanas"],
        "Squid Game": ["juegos mortales", "coreana", "456 participantes", "dalgona", "supervivencia"],
        "Money Heist": ["otro nombre Casa de Papel", "atraco", "España", "Berlín", "plan"],
        "Westworld": ["parque temático", "robots", "cowboys", "consciencia", "futuro"],
        "Chernobyl": ["desastre nuclear", "miniserie", "Ucrania", "1986", "radiación"],
        "Lost": ["isla misteriosa", "avión estrellado", "supervivientes", "misterio", "números"],
        "Prison Break": ["Michael Scofield", "escape de prisión", "tatuaje", "plan", "hermanos"],
        "How I Met Your Mother": ["Ted Mosby", "madre", "grupo de amigos", "Nueva York", "historia larga"],
        "The Big Bang Theory": ["científicos nerds", "Sheldon Cooper", "física", "Penny", "comedia"],
        "Vikings": ["Ragnar Lothbrok", "vikingos", "conquistas", "medieval", "nórdicos"],
        "The Sopranos": ["Tony Soprano", "mafia", "Nueva Jersey", "terapia", "familia criminal"],
        "Dexter": ["asesino en serie", "forense", "Miami", "código Harry", "laboratorio"],
        "Mad Men": ["Don Draper", "publicidad", "años 60", "Madison Avenue", "Nueva York"],
        "Fargo": ["antología", "crímenes", "Minnesota", "nieve", "hermanos Coen"],
        "The Handmaid's Tale": ["distopía", "June", "Gilead", "servidoras", "opresión"],
        "Mindhunter": ["FBI", "asesinos seriales", "perfiles criminales", "años 70", "psicología"],
        "Euphoria": ["adolescentes", "Rue", "drogas", "drama", "Zendaya"],
        "Wednesday": ["Addams", "Tim Burton", "academia", "gótica", "Merlina"],
        "The Umbrella Academy": ["superhéroes disfuncionales", "familia adoptiva", "apocalipsis", "viajes en el tiempo", "comic"],
        "Cobra Kai": ["Karate Kid", "continuación", "Daniel LaRusso", "Johnny Lawrence", "dojo"],
        "You": ["Joe Goldberg", "acosador", "obsesión", "librería", "asesinatos"],
        "The Queen's Gambit": ["ajedrez", "Beth Harmon", "años 60", "prodigio", "adicciones"],
        "The Bear": ["restaurante", "chef", "Chicago", "familia", "cocina"],
        "Yellowstone": ["rancho", "Montana", "familia Dutton", "cowboys modernos", "tierra"],
        "Ted Lasso": ["entrenador de fútbol americano", "fútbol inglés", "optimista", "comedia", "Richmond"],
        "Loki": ["dios del engaño", "TVA", "variantes", "Marvel", "viajes en el tiempo"],
        "WandaVision": ["Wanda", "Vision", "realidad alterada", "sitcoms", "Marvel"],
        "The Falcon and the Winter Soldier": ["Sam Wilson", "Bucky Barnes", "escudo del Capitán América", "Marvel", "acción"],
        "What If...?": ["realidades alternativas", "Marvel", "animada", "Multiverso", "Uatu"],
        "The Punisher": ["Frank Castle", "venganza", "vigilante", "Marvel", "violencia"],
        "Daredevil": ["Matt Murdock", "abogado ciego", "Hell's Kitchen", "Marvel", "acrobacias"],
        "Jessica Jones": ["detective privada", "fuerza sobrehumana", "Kilgrave", "Marvel", "trauma"],
        "Lucifer": ["diablo", "Los Ángeles", "detective", "club nocturno", "casos"],
        "Gotham": ["Batman precuela", "joven Bruce Wayne", "Gotham City", "orígenes villanos", "Jim Gordon"],
        "Arrow": ["Oliver Queen", "arquero", "Star City", "vigilante", "isla"],
        "The Flash": ["Barry Allen", "velocista", "Central City", "viajes en el tiempo", "equipo"],
        
        // Comida
        "Pizza": ["italiana", "masa", "queso", "horno", "porciones"],
        "Hamburguesa": ["pan", "carne", "lechuga", "tomate", "americana"],
        "Sushi": ["japonés", "arroz", "pescado crudo", "soja", "wasabi"],
        "Taco": ["mexicano", "tortilla", "carne", "guacamole", "picante"],
        "Pasta": ["italiana", "fideos", "salsa", "hervir", "trigo"],
        "Asado": ["carne a la parrilla", "carbón", "argentino", "chimichurri", "tiras"],
        "Empanada": ["relleno", "masa", "repulgue", "horno o frita", "argentina"],
        "Helado": ["frío", "cremoso", "sabores", "cucurucho", "verano"],
        "Milanesa": ["carne empanada", "pan rallado", "frita", "argentina", "huevo"],
        "Sopa": ["caldo", "caliente", "verduras", "cuchara", "líquida"],
        "Chocolate": ["cacao", "dulce", "barra", "derretir", "postre"],
        "Churros": ["frito", "azúcar", "masa", "dulce de leche", "español"],
        "Paella": ["española", "arroz", "azafrán", "mariscos", "valenciana"],
        "Ramen": ["japonés", "fideos", "caldo", "huevo", "caliente"],
        "Burrito": ["mexicano", "tortilla grande", "frijoles", "arroz", "enrollado"],
        "Falafel": ["medio oriente", "garbanzos", "frito", "pan pita", "vegano"],
        "Ceviche": ["peruano", "pescado crudo", "limón", "cebolla", "fresco"],
        "Croissant": ["francés", "hojaldre", "mantequilla", "media luna", "desayuno"],
        "Tacos al pastor": ["mexicano", "carne de cerdo", "piña", "especias", "trompo"],
        "Lasaña": ["italiana", "capas", "pasta", "carne", "queso"],
        "Fajitas": ["mexicano", "tiras de carne", "pimientos", "tortillas", "cebolla"],
        "Pho": ["vietnamita", "sopa de fideos", "caldo de res", "hierbas", "aromática"],
        "Carbonara": ["italiana", "pasta", "huevo", "panceta", "queso"],
        "Quesadilla": ["mexicana", "tortilla", "queso derretido", "doblada", "plancha"],
        "Tiramisu": ["italiano", "postre", "café", "mascarpone", "capas"],
        "Sándwich": ["pan", "relleno", "práctico", "variado", "almuerzo"],
        "Tortilla española": ["huevos", "papas", "cebolla", "redonda", "española"],
        "Guacamole": ["mexicano", "aguacate", "limón", "cebolla", "dip"],
        "Pad Thai": ["tailandés", "fideos de arroz", "tamarindo", "maní", "salteado"],
        "Hummus": ["medio oriente", "garbanzos", "tahini", "limón", "dip"],
        "Hot dog": ["salchicha", "pan alargado", "mostaza", "ketchup", "rápido"],
        "Baguette": ["francés", "pan largo", "crujiente", "miga suave", "tradicional"],
        "Donas": ["fritas", "azúcar", "glaseadas", "redondas con agujero", "americanas"],
        "Brownie": ["chocolate", "cuadrado", "denso", "nueces", "postre"],
        "Cheesecake": ["queso crema", "base de galleta", "postre", "cremoso", "NY"],
        "Curry": ["indio", "especias", "salsa", "picante", "arroz"],
        "Fish and chips": ["británico", "pescado frito", "papas fritas", "rebozado", "tradicional"],
        "Goulash": ["húngaro", "estofado", "pimentón", "carne", "especias"],
        "Moussaka": ["griego", "berenjenas", "carne picada", "bechamel", "horneado"],
        "Pierogi": ["polaco", "empanadas", "papas", "queso", "hervidos"],
        "Shawarma": ["medio oriente", "carne asada", "pan pita", "especias", "vertical"],
        "Tamales": ["mexicano", "masa de maíz", "hoja", "relleno", "vapor"],
        "Waffles": ["masa", "hierro con cuadrados", "desayuno", "miel", "belgas"],
        "Crepes": ["francés", "masa delgada", "relleno dulce o salado", "doblados", "sartén"],
        "Pancakes": ["americano", "masa esponjosa", "desayuno", "miel", "apilados"],
        "Bao": ["chino", "pan al vapor", "esponjoso", "relleno", "blanco"],
        "Dumplings": ["chino", "masa rellena", "vapor o fritos", "pequeños", "dim sum"],
        "Naan": ["indio", "pan plano", "horno tandoor", "mantequilla", "curry"],
        "Poke": ["hawaiano", "pescado crudo", "arroz", "aguacate", "soja"],
        "Tempura": ["japonés", "rebozado ligero", "frito", "verduras o mariscos", "crujiente"],
        "Baklava": ["medio oriente", "hojaldre", "miel", "nueces", "dulce"],
        "Mochi": ["japonés", "arroz glutinoso", "relleno", "suave", "dulce"],
        "Pretzel": ["alemán", "masa retorcida", "sal gorda", "horneado", "forma especial"],
        "Samosa": ["indio", "masa frita", "triangular", "papas y especias", "crujiente"],
        "Spring rolls": ["asiático", "enrollado", "verduras", "papel de arroz", "fresco o frito"],
        "Croquetas": ["español", "empanadas", "bechamel", "fritas", "cremosas"],
        "Churrasco": ["latinoamericano", "carne asada", "parrilla", "corte grueso", "jugoso"],
        "Risotto": ["italiano", "arroz cremoso", "caldo", "parmesano", "lento"],
        "Gnocchi": ["italiano", "pasta de papa", "pequeños", "salsa", "hervidos"],
        "Poutine": ["canadiense", "papas fritas", "queso", "gravy", "Quebec"],
        "Fondue": ["suizo", "queso derretido", "pan", "compartir", "olla"],
        "Escargot": ["francés", "caracoles", "mantequilla", "ajo", "gourmet"],
        "Souvlaki": ["griego", "brochetas", "carne asada", "pan pita", "tzatziki"],
        "Bibimbap": ["coreano", "arroz", "verduras", "huevo", "gochujang"],
        "Arepas": ["venezolano/colombiano", "masa de maíz", "redondas", "relleno", "plancha"],
        "Feijoada": ["brasileño", "frijoles negros", "carne de cerdo", "estofado", "tradicional"],
        "Kimchi": ["coreano", "col fermentada", "picante", "acompañamiento", "probiótico"],
        
        // Deportes
        "Fútbol": ["balón", "11 jugadores", "arco", "mundial", "goles"],
        "Básquet": ["pelota naranja", "aro", "cancha", "NBA", "cinco jugadores"],
        "Tenis": ["raqueta", "pelota amarilla", "red", "Wimbledon", "sets"],
        "Natación": ["agua", "pileta", "estilos", "brazadas", "cronómetro"],
        "Atletismo": ["pista", "carrera", "velocidad", "saltos", "lanzamientos"],
        "Boxeo": ["guantes", "ring", "rounds", "golpes", "nocaut"],
        "Rugby": ["balón ovalado", "15 jugadores", "tackle", "try", "scrum"],
        "Voleibol": ["red alta", "saque", "remate", "6 jugadores", "pelota"],
        "Golf": ["palos", "hoyo", "green", "18 hoyos", "swing"],
        "Automovilismo": ["autos", "pista", "velocidad", "F1", "boxes"],
        "Ciclismo": ["bicicleta", "pedales", "Tour de France", "etapas", "pelotón"],
        "Ski": ["nieve", "montaña", "tablas", "descenso", "bastones"],
        "Snowboard": ["nieve", "tabla", "trucos", "halfpipe", "descenso"],
        "Surf": ["olas", "tabla", "playa", "equilibrio", "mar"],
        "Skate": ["patineta", "trucos", "rampa", "ollie", "ruedas"],
        "Escalada": ["roca", "arnés", "altura", "agarre", "pared"],
        "Gimnasia": ["acrobacias", "flexibilidad", "barras", "colchoneta", "Olimpiadas"],
        "Halterofilia": ["pesas", "levantamiento", "barra", "fuerza", "Olimpiadas"],
        "Esgrima": ["espada", "tocado", "máscara", "duelo", "pista"],
        "Arco y flecha": ["arco", "flechas", "diana", "puntería", "Olimpiadas"],
        "Judo": ["tatami", "kimono", "llaves", "ippon", "arte marcial"],
        "Karate": ["kimono", "katas", "golpes", "cinturones", "arte marcial"],
        "Taekwondo": ["patadas", "kimono", "arte marcial coreano", "cinturones", "combate"],
        "Lucha libre": ["ring", "máscaras", "llaves", "lucha mexicana", "espectáculo"],
        "Hockey sobre hielo": ["patines", "puck", "stick", "hielo", "portería"],
        "Hockey sobre césped": ["stick", "pelota", "césped", "arco", "Olimpiadas"],
        "Béisbol": ["bat", "pelota", "home run", "9 innings", "MLB"],
        "Cricket": ["bat", "wicket", "británico", "test match", "pelota roja"],
        "Fútbol americano": ["ovalado", "touchdown", "NFL", "casco", "yardas"],
        "MMA": ["octágono", "artes marciales mixtas", "UFC", "nocaut", "sumisión"],
        
        // Videojuegos
        "Minecraft": ["cubos", "crafteo", "supervivencia", "creeper", "mundo abierto"],
        "Fortnite": ["battle royale", "construcción", "100 jugadores", "bailes", "isla"],
        "League of Legends": ["MOBA", "5v5", "campeones", "Riot", "nexo"],
        "Counter-Strike": ["FPS", "terroristas", "bombas", "AK-47", "headshot"],
        "GTA": ["mundo abierto", "crimen", "autos", "Rockstar", "misiones"],
        "The Legend of Zelda": ["Link", "Zelda", "Hyrule", "aventura", "triforce"],
        "Mario Bros": ["fontanero", "hongos", "saltos", "Nintendo", "Bowser"],
        "Pokémon": ["monstruos", "atrapar", "evolucionar", "combates", "Pikachu"],
        "Call of Duty": ["FPS", "guerra", "multijugador", "Activision", "campañas"],
        "FIFA": ["fútbol", "equipos reales", "Ultimate Team", "EA Sports", "simulación"],
        "Valorant": ["FPS táctico", "agentes", "habilidades", "Riot", "5v5"],
        "Apex Legends": ["battle royale", "leyendas", "habilidades", "escuadrones", "respawn"],
        "Overwatch": ["FPS", "héroes", "objetivos", "Blizzard", "6v6"],
        "Rocket League": ["autos", "fútbol", "acrobático", "multijugador", "goles"],
        "Among Us": ["impostores", "tripulación", "tareas", "votar", "traición"],
        "Roblox": ["plataforma", "juegos creados por usuarios", "bloques", "social", "avatares"],
        "Terraria": ["2D", "exploración", "construcción", "jefes", "ítems"],
        "Stardew Valley": ["granja", "pixel art", "cultivos", "pueblo", "relajante"],
        "Animal Crossing": ["isla", "vecinos animales", "decorar", "relajante", "Nintendo"],
        "The Sims": ["simulador de vida", "casas", "relaciones", "EA", "vecindarios"],
        "Halo": ["Master Chief", "Covenant", "FPS", "Xbox", "sci-fi"],
        "God of War": ["Kratos", "mitología", "acción", "PlayStation", "hacha"],
        "The Last of Us": ["zombies", "Joel y Ellie", "supervivencia", "post-apocalíptico", "Naughty Dog"],
        "Uncharted": ["Nathan Drake", "tesoros", "aventura", "PlayStation", "escaladas"],
        "Red Dead Redemption": ["vaqueros", "oeste", "mundo abierto", "Rockstar", "Arthur Morgan"],
        "The Witcher": ["Geralt", "brujo", "monstruos", "magia", "CD Projekt"],
        "Skyrim": ["dragones", "Dovahkiin", "RPG", "mundo abierto", "gritos"],
        "Fallout": ["post-apocalíptico", "refugios", "mutantes", "RPG", "radiación"],
        "Bioshock": ["Rapture", "plasmidos", "Big Daddy", "distopía", "underwater"],
        "Portal": ["portales", "GLaDOS", "puzzles", "Aperture Science", "primera persona"],
        "Half-Life": ["Gordon Freeman", "Combine", "FPS", "Valve", "palanca"],
        "Team Fortress 2": ["clases", "sombreros", "Valve", "cartoon", "multijugador"],
        "Dota 2": ["MOBA", "Valve", "5v5", "héroes", "antiguo"],
        "Hearthstone": ["cartas", "Warcraft", "Blizzard", "estrategia", "maná"],
        "World of Warcraft": ["MMORPG", "Azeroth", "razas", "clases", "Blizzard"],
        "Destiny": ["Bungie", "shooter looter", "guardianes", "sci-fi", "raids"],
        "Warframe": ["ninjas espaciales", "free to play", "cooperativo", "sci-fi", "parkour"],
        "Dark Souls": ["difícil", "FromSoftware", "bonfires", "jefes épicos", "muerte constante"],
        "Bloodborne": ["victoriano", "horror", "FromSoftware", "difícil", "bestias"],
        "Elden Ring": ["FromSoftware", "mundo abierto", "George R.R. Martin", "difícil", "Anillo"],
        "Sekiro": ["samurai", "FromSoftware", "deflexión", "Japón feudal", "difícil"],
        "Monster Hunter": ["cazar monstruos", "armas gigantes", "Capcom", "cooperativo", "crafteo"],
        "Street Fighter": ["peleas", "Ryu", "Hadouken", "Capcom", "combos"],
        "Mortal Kombat": ["Fatality", "pelea brutal", "Sub-Zero", "Scorpion", "sangre"],
        "Tekken": ["pelea 3D", "Mishima", "King", "Namco", "combos"],
        "Super Smash Bros": ["peleas", "Nintendo", "crossover", "plataformas", "porcentaje"],
        "Splatoon": ["tinta", "calamares", "Nintendo", "shooter", "colorido"],
        "Metroid": ["Samus", "exploración", "sci-fi", "Nintendo", "power-ups"],
        "Donkey Kong": ["gorila", "barriles", "plátanos", "Nintendo", "plataformas"],
        "Kirby": ["rosa", "copiar habilidades", "Nintendo", "adorable", "volar"],
        "Sonic": ["erizo azul", "velocidad", "anillos", "Sega", "Dr. Eggman"],
        "Mega Man": ["robot azul", "Capcom", "jefes", "copiar armas", "plataformas"],
        "Castlevania": ["vampiros", "Belmont", "látigo", "Drácula", "gótico"],
        "Silent Hill": ["horror psicológico", "niebla", "Pyramid Head", "Konami", "perturbador"],
        "Resident Evil": ["zombies", "survival horror", "Capcom", "mansión", "T-Virus"],
        "Dead Space": ["horror espacial", "necromorphs", "Isaac Clarke", "desmembramiento", "EA"],
        "Outlast": ["horror", "cámara", "asilo", "huir", "primera persona"],
        "Amnesia": ["horror", "oscuridad", "cordura", "monstruos", "esconderse"],
        "Five Nights at Freddy's": ["animatrónicos", "pizzería", "cámaras", "sustos", "indie"],
        "Undertale": ["indie", "RPG", "monstruos", "pacifista o genocida", "Toby Fox"],
        "Celeste": ["plataformas difícil", "montaña", "pixel art", "indie", "Madeline"],
        "Hollow Knight": ["metroidvania", "insectos", "indie", "difícil", "Hallownest"],
        "Cuphead": ["run and gun", "cartoon años 30", "difícil", "jefes", "cooperativo"],
        "Hades": ["roguelike", "mitología griega", "Zagreus", "Supergiant", "escape"],
        "Dead Cells": ["roguelike", "metroidvania", "difícil", "pixel art", "mutaciones"],
        "Binding of Isaac": ["roguelike", "perturbador", "lágrimas", "indie", "Edmund McMillen"],
        "Don't Starve": ["supervivencia", "Tim Burton style", "hambre", "crafting", "indie"],
        "Subnautica": ["supervivencia", "océano alienígena", "exploración submarina", "crafteo", "miedo al agua"],
        "No Man's Sky": ["exploración espacial", "procedural", "planetas", "Hello Games", "multijugador"],
        "Rust": ["supervivencia", "multijugador", "construcción", "PvP", "desnudo"],
        "ARK": ["dinosaurios", "supervivencia", "domar", "tribus", "prehistórico"],
        "DayZ": ["zombies", "supervivencia", "realista", "Bohemia", "post-apocalíptico"],
        "Genshin Impact": ["gacha", "mundo abierto", "anime", "elementos", "free to play"],
        "Honkai": ["gacha", "acción", "anime", "miHoYo", "sci-fi"],
        "Final Fantasy": ["JRPG", "Square Enix", "chocobos", "magia", "historia épica"],
        "Dragon Quest": ["JRPG", "slimes", "Akira Toriyama", "Square Enix", "medieval"],
        "Persona": ["JRPG", "escuela", "personas", "Atlus", "relaciones sociales"],
        "Fire Emblem": ["estrategia por turnos", "permadeath", "Nintendo", "medieval", "táctico"],
        "XCOM": ["estrategia por turnos", "alienígenas", "escuadrones", "táctico", "difícil"],
        "Civilization": ["estrategia por turnos", "construir imperio", "4X", "Sid Meier", "histórico"],
        "Age of Empires": ["RTS", "histórico", "recursos", "civilizaciones", "Microsoft"],
        "StarCraft": ["RTS", "Blizzard", "sci-fi", "Zerg Terran Protoss", "eSports"],
        "Warcraft": ["RTS", "Orcos", "Humanos", "Blizzard", "fantasía"],
        
        // Clash Royale
        "Caballero": ["común", "cuerpo a cuerpo", "3 elixir", "bigote", "escudo y espada"],
        "Arqueras": ["común", "distancia", "3 elixir", "dos unidades", "pelo rosa"],
        "Gigante": ["raro", "tanque", "5 elixir", "ataca edificios", "lento"],
        "P.E.K.K.A": ["épica", "robot", "7 elixir", "espada grande", "fuerte"],
        "Príncipe": ["épica", "carga", "5 elixir", "caballo", "lanza"],
        "Mago": ["raro", "área", "5 elixir", "bola de fuego", "barba blanca"],
        "Bruja": ["épica", "invoca esqueletos", "5 elixir", "pelo morado", "distancia"],
        "Golem": ["épica", "tanque", "8 elixir", "se divide", "roca"],
        "Montapuercos": ["épica", "edificios", "4 elixir", "martillo", "cerdo"],
        "Globo": ["épica", "aéreo", "5 elixir", "bomba", "edificios"],
        "Dragón infernal": ["legendaria", "aéreo", "4 elixir", "rayo", "se calienta"],
        "Tronco": ["legendaria", "hechizo", "2 elixir", "empuja", "daño área"],
        "Princesa": ["legendaria", "distancia", "3 elixir", "flecha larga", "área"],
        "Minero": ["legendaria", "aparece", "3 elixir", "pico", "torre"],
        "Leñador": ["legendaria", "rabia", "4 elixir", "hacha", "barbudo"],
        "Mago eléctrico": ["legendaria", "aturdimiento", "4 elixir", "electricidad", "área"],
        "Bandida": ["legendaria", "dash", "3 elixir", "daga", "rápida"],
        "Mago de hielo": ["legendaria", "ralentiza", "3 elixir", "hielo", "área"],
        "Megacaballero": ["legendaria", "salto", "7 elixir", "área al caer", "tanque"],
        "Ariete de batalla": ["raro", "edificios", "4 elixir", "dos bárbaros", "madera"],
        "Bárbaros": ["común", "cinco unidades", "5 elixir", "bigotes", "espadas"],
        "Duendes con lanza": ["común", "tres unidades", "2 elixir", "distancia", "verdes"],
        "Minions": ["común", "aéreo", "3 elixir", "tres unidades", "negros voladores"],
        "Mini P.E.K.K.A": ["raro", "robot pequeño", "4 elixir", "espada", "fuerte"],
        "Mosquetero": ["raro", "distancia", "4 elixir", "rifle", "sombrero"],
        "Valquiria": ["raro", "área", "4 elixir", "hacha giratoria", "pelirroja"],
        "Bebé dragón": ["épica", "aéreo", "4 elixir", "fuego", "área"],
        "Esqueletos": ["común", "cuatro unidades", "1 elixir", "huesos", "ciclo"],
        "Bola de fuego": ["raro", "hechizo", "4 elixir", "daño grande", "empuje"],
        "Flechas": ["común", "hechizo", "3 elixir", "área", "rápido"],
        "Rayo": ["épica", "hechizo", "6 elixir", "daño alto", "aturdimiento"],
        "Veneno": ["épica", "hechizo", "4 elixir", "duración", "ralentiza"],
        "Tornado": ["épica", "hechizo", "3 elixir", "atrae", "activación rey"],
        "Clon": ["épica", "hechizo", "3 elixir", "duplica", "1 HP"],
        "Congelar": ["épica", "hechizo", "4 elixir", "paraliza", "duración"],
        "Espejo": ["épica", "hechizo", "variable", "copia", "+1 nivel"],
        "Furia": ["épica", "hechizo", "2 elixir", "velocidad", "área"],
        "Torre de bombas": ["raro", "edificio", "4 elixir", "área", "muerte"],
        "Cañón": ["común", "edificio", "3 elixir", "defensa", "barato"],
        "Torre tesla": ["común", "edificio", "4 elixir", "eléctrica", "se esconde"],
        "Torre infernal": ["raro", "edificio", "5 elixir", "se calienta", "un objetivo o multi"],
        "Choza de duendes": ["raro", "edificio", "4 elixir", "invoca duendes", "vida"],
        "Cabaña de bárbaros": ["raro", "edificio", "6 elixir", "invoca bárbaros", "spawn"],
        "Horno": ["raro", "edificio", "4 elixir", "espíritus de fuego", "spawn"],
        "Lápida": ["raro", "edificio", "3 elixir", "esqueletos", "muerte"],
        "Ejército de esqueletos": ["épica", "15 unidades", "3 elixir", "enjambre", "defensa"],
        "Pandilla de duendes": ["común", "seis unidades", "3 elixir", "enjambre", "rápidos"],
        "Horda de esbirros": ["común", "aéreo", "5 elixir", "seis unidades", "enjambre"],
        "Montapuercos oscuro": ["épica", "edificios", "6 elixir", "invoca", "oscuridad"],
        "Guardia": ["épica", "tres unidades", "3 elixir", "escudo", "lanza"],
        "Espíritus de hielo": ["común", "tres unidades", "1 elixir", "congelan", "saltan"],
        "Espíritus de fuego": ["común", "tres unidades", "1 elixir", "fuego", "torre"],
        "Espíritu electrocutador": ["común", "una unidad", "1 elixir", "aturdimiento", "salta"],
        "Bola de nieve": ["común", "hechizo", "2 elixir", "ralentiza", "empuja"],
        "Terremoto": ["raro", "hechizo", "3 elixir", "edificios", "corona"],
        "Chispas": ["legendaria", "hechizo", "1 elixir", "tres rayos", "flexible"],
        "Curar": ["raro", "hechizo", "1 elixir", "vida", "tropas"],
        "Barbacoa real": ["épica", "hechizo", "6 elixir", "jamón", "cura mucho"],
        "Bombardero": ["común", "área", "2 elixir", "bomba", "tierra"],
        "Verdugo": ["legendaria", "daño alto", "5 elixir", "hacha ejecutora", "escudo"],
        "Descarga": ["común", "hechizo", "2 elixir", "aturdimiento", "multi objetivo"],
        "Dragones esqueléticos": ["épica", "aéreos", "4 elixir", "son dos", "huesos voladores"],
        "Bruja madre": ["legendaria", "invoca", "4 elixir", "murciélagos", "cura"],
        "Paquete real": ["legendaria", "tres cartas", "7 elixir", "rey y princesas", "combo"],
        "Fantasma real": ["legendaria", "invisible", "3 elixir", "ataque carga", "esquiva"],
        "Arquero mágico": ["legendaria", "distancia", "4 elixir", "flecha mágica", "toca arco"],
        "Pescador": ["legendaria", "anzuelo", "3 elixir", "atrae", "caña de pescar"],
        "Monje": ["legendaria", "refleja", "4 elixir", "karate", "puño"],
        "Fénix": ["legendaria", "aéreo", "4 elixir", "renace", "huevos"],
        "Rey Esqueleto": ["legendaria", "invoca esqueletos", "4 elixir", "rey", "corona huesos"],
        "Reina Arquera": ["legendaria", "distancia", "5 elixir", "invisible", "reina"],
        "Caballero Dorado": ["legendaria", "carga", "4 elixir", "invulnerable", "oro"],
        "Principito": ["legendaria", "carga pequeña", "2 elixir", "niño", "caballo pequeño"],
        
        // Rock Internacional
        "Queen": ["Bohemian Rhapsody", "Freddie Mercury", "británica", "We Will Rock You", "años 70-80"],
        "The Beatles": ["británica", "Liverpool", "Lennon y McCartney", "Let It Be", "años 60"],
        "Led Zeppelin": ["Stairway to Heaven", "británica", "blues rock", "Robert Plant", "años 70"],
        "Pink Floyd": ["The Wall", "psicodélica", "británica", "Dark Side of the Moon", "progresivo"],
        "The Rolling Stones": ["británica", "Satisfaction", "Mick Jagger", "gira constante", "años 60"],
        "AC/DC": ["australiana", "Highway to Hell", "Angus Young", "hard rock", "uniformes escolares"],
        "Nirvana": ["grunge", "Kurt Cobain", "Smells Like Teen Spirit", "Seattle", "años 90"],
        "Guns N' Roses": ["Appetite for Destruction", "Slash", "Sweet Child O' Mine", "hard rock", "años 80-90"],
        "Metallica": ["thrash metal", "Master of Puppets", "Nothing Else Matters", "San Francisco", "años 80"],
        "The Doors": ["Jim Morrison", "psicodélica", "Light My Fire", "años 60", "Los Ángeles"],
        "Jimi Hendrix": ["guitarra", "Purple Haze", "Woodstock", "años 60", "virtuoso"],
        "The Who": ["My Generation", "británica", "rock ópera", "Pete Townshend", "años 60-70"],
        "Black Sabbath": ["heavy metal", "Ozzy Osbourne", "Paranoid", "británica", "oscura"],
        "Deep Purple": ["Smoke on the Water", "británica", "hard rock", "órgano", "años 70"],
        "Aerosmith": ["Dream On", "Steven Tyler", "americana", "hard rock", "años 70"],
        "U2": ["irlandesa", "Bono", "With or Without You", "activismo", "años 80"],
        "R.E.M.": ["Losing My Religion", "rock alternativo", "Athens Georgia", "años 80-90", "Stipe"],
        "Radiohead": ["Creep", "británica", "OK Computer", "experimental", "Thom Yorke"],
        "Oasis": ["Wonderwall", "británica", "hermanos Gallagher", "Britpop", "años 90"],
        "The Cure": ["Just Like Heaven", "gótica", "Robert Smith", "post-punk", "años 80"],
        "The Smiths": ["británica", "Morrissey", "indie rock", "años 80", "guitarra jangle"],
        "Red Hot Chili Peppers": ["californiana", "funk rock", "Flea", "Californication", "años 80"],
        "Foo Fighters": ["Dave Grohl", "Everlong", "post-grunge", "años 90", "alternativa"],
        "Pearl Jam": ["grunge", "Seattle", "Eddie Vedder", "Alive", "años 90"],
        "Soundgarden": ["grunge", "Chris Cornell", "Black Hole Sun", "Seattle", "años 90"],
        "Alice in Chains": ["grunge", "Seattle", "Layne Staley", "Man in the Box", "años 90"],
        "The Clash": ["punk rock", "británica", "London Calling", "política", "años 70-80"],
        "Ramones": ["punk rock", "New York", "Blitzkrieg Bop", "chaquetas de cuero", "años 70"],
        "Sex Pistols": ["punk", "británica", "Anarchy in the UK", "Johnny Rotten", "años 70"],
        "Green Day": ["punk rock", "Basket Case", "American Idiot", "años 90-2000", "californiana"],
        "Blink-182": ["pop punk", "californiana", "All the Small Things", "años 90-2000", "juvenil"],
        "The Offspring": ["punk rock", "californiana", "Self Esteem", "años 90", "Come Out and Play"],
        "Linkin Park": ["nu metal", "Chester Bennington", "In the End", "rap rock", "años 2000"],
        "System of a Down": ["metal alternativo", "armenia", "Toxicity", "Chop Suey!", "política"],
        "Rage Against the Machine": ["rap metal", "política", "Killing in the Name", "años 90", "Tom Morello"],
        "Iron Maiden": ["heavy metal", "británica", "Eddie mascota", "Bruce Dickinson", "años 80"],
        "Judas Priest": ["heavy metal", "británica", "Rob Halford", "cuero", "años 70-80"],
        "Slayer": ["thrash metal", "Reign in Blood", "extremo", "años 80", "californiana"],
        "Megadeth": ["thrash metal", "Dave Mustaine", "años 80", "Symphony of Destruction", "técnico"],
        "Anthrax": ["thrash metal", "New York", "años 80", "rap metal fusion", "Big Four"],
        "Kiss": ["glam rock", "maquillaje", "Gene Simmons", "Rock and Roll All Nite", "años 70"],
        "Van Halen": ["hard rock", "Eddie Van Halen", "Jump", "tapping", "años 80"],
        "Bon Jovi": ["rock melódico", "Livin' on a Prayer", "New Jersey", "años 80", "power ballads"],
        "Def Leppard": ["hard rock británica", "Photograph", "años 80", "Hysteria", "melódico"],
        "Mötley Crüe": ["glam metal", "años 80", "Dr. Feelgood", "excesos", "Sunset Strip"],
        
        // Rock Argentino
        "Soda Stereo": ["Gustavo Cerati", "De Música Ligera", "new wave", "argentina", "años 80-90"],
        "Los Fabulosos Cadillacs": ["ska", "Matador", "Vicentico", "coloridos", "años 80-90"],
        "Divididos": ["Ricardo Mollo", "rock duro", "Que Vas a Hacer Tan Sola", "argentina", "años 90"],
        "Sumo": ["Luca Prodan", "reggae rock", "La Rubia Tarada", "años 80", "italiano"],
        "Charly García": ["Clics Modernos", "piano", "Say No More", "icono", "años 80"],
        "Virus": ["Federico Moura", "synth-pop", "Wadu Wadu", "años 80", "estética"],
        "Patricio Rey y sus Redonditos de Ricota": ["Indio Solari", "culto", "Jijiji", "underground", "mítica"],
        "Los Enanitos Verdes": ["Lamento Boliviano", "Luz de Día", "Mendoza", "años 80", "melódico"],
        "Attaque 77": ["punk rock", "Arrancacorazones", "años 80", "Buenos Aires", "hardcore"],
        "La Renga": ["hard rock", "Panic Show", "Chizzo", "years 90", "culto"],
        "Los Piojos": ["rock popular", "Cuervo", "años 90", "Buenos Aires", "masivo"],
        "Rata Blanca": ["heavy metal", "La Leyenda del Hada y el Mago", "Giardino", "años 80", "powermetal"],
        "Andrés Calamaro": ["solista", "Flaca", "Los Rodríguez", "prolífico", "años 90"],
        "Fito Páez": ["El Amor Después del Amor", "piano", "Rosario", "Giros", "años 80-90"],
        "Luis Alberto Spinetta": ["Muchacha Ojos de Papel", "Almendra", "poético", "icono", "años 70"],
        "Bersuit Vergarabat": ["fusión", "La Argentinidad al Palo", "murguero", "años 90", "fiesta"],
        "Las Pelotas": ["rock duro", "Será", "Sumo continuación", "Germán Daffunchio", "años 90"],
        "Los Auténticos Decadentes": ["ska festivo", "Loco Tu Forma de Ser", "fiesta", "años 90", "Cucho"],
        "Los Ratones Paranoicos": ["rock and roll", "Reina Madre", "Juanse", "Stone's argentinos", "años 80-90"],
        "Catupecu Machu": ["rock alternativo", "Magia Veneno", "años 90", "energía", "Ale Sergi"],
        "Viejas Locas": ["rock barrial", "Hermoza Locura", "Pity Álvarez", "años 90", "crudo"],
        "Callejeros": ["rock popular", "tragedia Cromañón", "Rotos", "años 90-2000", "Fontanet"],
        "Las Pastillas del Abuelo": ["rock festivo", "Lo Más Valioso", "años 2000", "fiesta", "masivo"],
        "No Te Va Gustar": ["uruguaya", "fusión", "Chau", "reggae rock", "masivo"],
        "La Vela Puerca": ["uruguaya", "rock festivo", "Zafar", "murga rock", "años 90"],
        "Tan Biónica": ["pop rock", "Ciudad Mágica", "años 2000", "Chano", "masivo"],
        "El Bordo": ["Ella", "rock popular", "años 2000", "Buenos Aires", "barrial"],
        "Estelares": ["indie rock", "Aire", "Manuel Moretti", "años 90", "melódico"],
        "Juana Molina": ["experimental", "cantautora", "loops", "única", "hija de"],
        "Babasónicos": ["rock alternativo", "Putita", "experimental", "años 90", "Adrián Dárgelos"],
        "Los Pericos": ["reggae", "El Ritual de la Banana", "Juanchi", "años 80", "fiesta"],
        "Karamelo Santo": ["fusión", "ska punk", "Que No Digan Nunca", "Goy", "años 90"],
        "Turf": ["indie rock", "Pasos al Costado", "años 90", "Buenos Aires", "melódico"],
        "Miranda!": ["electropop", "Yo Te Diré", "Ale Sergi", "años 2000", "festivo"],
        "Illya Kuryaki and the Valderramas": ["hip hop rock", "Abarajame", "Dante y Emmanuel", "fusión", "años 90"],
        "Kapanga": ["rock festivo", "El Mono Relojero", "años 90", "fiesta", "cumbia rock"],
        "Massacre": ["punk hardcore", "años 80", "Stuka", "extremo", "underground"],
        "Los Violadores": ["punk", "Represión", "Stuka", "años 80", "pioneros"],
        "2 Minutos": ["punk rock", "Arrebato", "Valentín", "años 90", "directo"],
        "Fun People": ["hardcore punk", "años 90", "indie", "Nekro", "emocional"],
        "Hermética": ["heavy metal", "Iorio", "thrash", "años 80-90", "nacional"],
        "Almafuerte": ["heavy metal", "Ricardo Iorio", "años 90", "Toro y Pampa", "crudo"],
        "Pappo": ["blues rock", "Riff", "guitarra", "icono", "años 70-80"],
        "Manal": ["blues rock pionero", "Avellaneda Blues", "años 60", "Javier Martínez", "fundacional"],
        "Pescado Rabioso": ["Spinetta", "rock progresivo", "Post Crucifixión", "años 70", "experimental"],
        "Invisible": ["Spinetta", "progresivo", "Durazno Sangrando", "años 70", "conceptual"],
        "Serú Girán": ["Charly García", "progresivo", "Seminare", "años 70-80", "supergrupo"],
        "Moris": ["pionero", "De Nada Sirve", "años 60", "beat", "fundacional"],
        "Litto Nebbia": ["Los Gatos", "La Balsa", "años 60", "pionero", "fundacional"],
        "León Gieco": ["folk rock", "Solo le Pido a Dios", "años 70", "social", "protesta"],
        "Mercedes Sosa": ["folklore", "voz potente", "Alfonsina y el Mar", "Tucumán", "icono"],
        "GIT": ["Gustavo Nápoli", "rock progresivo", "años 80", "instrumental", "técnico"],
        "V8": ["heavy metal", "Cautivo del Sistema", "Ricardo Iorio", "años 80", "pionero"],
        "A.N.I.M.A.L": ["metal", "thrash", "años 90", "El Nuevo Camino del Hombre", "Andrés Giménez"],
        "Ciro y Los Persas": ["rock popular", "Ciro", "ex Piojos", "años 2010", "masivo"],
        "Él Mato a un Policía Motorizado": ["indie rock", "años 2000", "noise pop", "La Plata", "underground"],
        "Conociendo Rusia": ["indie pop", "Cabildo y Juramento", "años 2010", "melódico", "Mateo Sujatovich"],
        "Bandalos Chinos": ["indie rock", "El Ídolo", "años 2010", "Buenos Aires", "moderno"],
        "Cuentos Borgeanos": ["stoner rock", "Lomas de Zamora", "años 90", "pesado", "underground"],
        
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