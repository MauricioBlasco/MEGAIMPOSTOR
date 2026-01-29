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
    
    // Diccionario de pistas específicas por palabra
    const pistasEspecificas = {
        // Animales
        "Perro": ["leal", "ladra", "mejor amigo", "mascota", "canino"],
        "Gato": ["maúlla", "mascota", "independiente", "felino", "sigiloso"],
        "Elefante": ["trompa", "grande", "memoria", "gris", "africano"],
        "Tigre": ["rayado", "felino", "peligroso", "carnívoro", "selva"],
        "Delfín": ["inteligente", "acuático", "nada", "oceano", "mamífero"],
        "León": ["melena", "rey", "felino", "sabana", "ruge"],
        "Águila": ["vuela", "rapaz", "pico", "plumas", "ave"],
        "Tiburón": ["dientes", "marino", "depredador", "aletas", "océano"],
        "Pingüino": ["polo", "ave", "no vuela", "frío", "blanco y negro"],
        "Ballena": ["gigante", "marino", "canta", "mamífero", "océano"],
        
        // Lugares
        "Playa": ["arena", "mar", "verano", "sol", "vacaciones"],
        "Cine": ["películas", "pantalla", "palomitas", "oscuro", "butacas"],
        "Estadio": ["fútbol", "gradas", "público", "deporte", "grande"],
        "Hospital": ["médicos", "salud", "camas", "enfermeros", "curar"],
        "Escuela": ["estudiar", "maestros", "aulas", "niños", "aprender"],
        "Aeropuerto": ["aviones", "vuelos", "viajes", "terminal", "maletas"],
        "Museo": ["arte", "cultura", "cuadros", "historia", "exposiciones"],
        "Zoológico": ["animales", "jaulas", "visitas", "especies", "salvajes"],
        "Parque": ["verde", "juegos", "aire libre", "pasear", "naturaleza"],
        "Biblioteca": ["libros", "silencio", "leer", "estantes", "conocimiento"],
        "Restaurante": ["comer", "mesas", "menú", "cocina", "meseros"],
        "Gimnasio": ["ejercicio", "pesas", "fitness", "deporte", "entrenar"],
        "Montaña": ["alta", "escalar", "nieve", "pico", "naturaleza"],
        "Acuario": ["peces", "agua", "tanques", "marino", "vidrio"],
        
        // Objetos
        "Teléfono": ["llamar", "pantalla", "móvil", "apps", "contactos"],
        "Computadora": ["teclas", "pantalla", "internet", "tecnología", "mouse"],
        "Televisor": ["programas", "pantalla", "control remoto", "canales", "imagen"],
        "Reloj": ["hora", "tiempo", "pulsera", "manecillas", "minutos"],
        "Espejo": ["reflejo", "vidrio", "imagen", "verse", "brillo"],
        "Guitarra": ["cuerdas", "música", "tocar", "instrumento", "sonido"],
        "Piano": ["teclas", "música", "clásico", "notas", "instrumento"],
        "Pelota": ["redonda", "jugar", "deporte", "botar", "esférica"],
        "Bicicleta": ["pedales", "ruedas", "andar", "transporte", "cadena"],
        "Paraguas": ["lluvia", "protege", "mojarse", "abre", "impermeable"],
        
        // Futbolistas
        "Messi": ["argentino", "Barcelona", "10", "crack", "golazo"],
        "Cristiano Ronaldo": ["portugués", "7", "Manchester", "Madrid", "goleador"],
        "Maradona": ["argentino", "leyenda", "86", "mano de dios", "10"],
        "Pelé": ["brasileño", "rey", "leyenda", "3 mundiales", "goles"],
        "Neymar": ["brasileño", "PSG", "driblador", "habilidoso", "11"],
        "Mbappé": ["francés", "rápido", "PSG", "joven", "velocidad"],
        "Haaland": ["noruego", "goles", "City", "robot", "potente"],
        "Benzema": ["francés", "Madrid", "9", "goleador", "elegante"],
        
        // Series
        "Breaking Bad": ["drogas", "Walter", "química", "metanfetamina", "desierto"],
        "Stranger Things": ["80s", "niños", "monstruos", "Hawkins", "sobrenatural"],
        "Game of Thrones": ["dragones", "tronos", "medieval", "espadas", "reinos"],
        "Friends": ["café", "Nueva York", "comedia", "6 amigos", "risas"],
        "The Office": ["oficina", "comedia", "trabajo", "mockumentary", "Dunder"],
        "Narcos": ["Pablo", "Colombia", "droga", "DEA", "cartel"],
        "La Casa de Papel": ["atraco", "máscaras", "Bella Ciao", "España", "robo"],
        "The Walking Dead": ["zombies", "supervivencia", "apocalipsis", "muertos", "Rick"]
    };
    
    // Si existe en el diccionario, usar esas pistas
    if (pistasEspecificas[palabra]) {
        pistas.push(...pistasEspecificas[palabra]);
    }
    
    // Pistas inteligentes por categoría
    const pistasCategoria = generarPistasPorCategoria(palabra, categoria);
    pistas.push(...pistasCategoria);
    
    // Eliminar duplicados y limitar a 10 pistas
    return [...new Set(pistas)].slice(0, 10);
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
    
    if (botActivado) {
        // Actualizar aprendizaje del bot cada vez que se activa
        botAprendizajeAutomatico();
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
    
    // Si el bot está activado, cuenta como un jugador
    if (botEsJugador) {
        numJugadoresHumanos = numJugadores - 1;
    } else {
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

function iniciarTurnoUno() {
    jugadorActual = 1;
    prepararTurno();
}

function prepararTurno() {
    const esBot = botEsJugador && jugadorActual === numJugadores;
    
    if (esBot) {
        // Es el turno del bot
        document.getElementById('titulo-turno').innerText = '🤖 BOT';
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
    const esBot = botEsJugador && jugadorActual === numJugadores;
    
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
    const esImpostor = listaImpostores.includes(numJugadores);
    
    caja.classList.add('reveal');
    
    setTimeout(() => {
        // No mostrar si es impostor, solo mostrar que es el bot
        caja.innerHTML = `<span style="font-weight: bold; font-size: 1.8rem;">🤖 BOT</span><br><small>Turno del bot</small>`;
        
        // Generar pista internamente sin mostrarla
        if (esImpostor) {
            pistasJugadores[numJugadores] = botGenerarPistaImpostor(categoriaSecreta);
        } else {
            pistasJugadores[numJugadores] = botGenerarPista(palabraSecreta);
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
    // Si es el turno del bot, saltar a siguiente jugador
    if (jugadorActualPista === numJugadores && botEsJugador) {
        // El bot ya generó su pista, ir a votación
        mostrarPantalla('pantalla-votacion');
        iniciarVotacion();
        return;
    }
    
    // Si ya pasaron todos los jugadores humanos, ir a votación
    if (jugadorActualPista > numJugadores || (botEsJugador && jugadorActualPista > numJugadoresHumanos)) {
        mostrarPantalla('pantalla-votacion');
        iniciarVotacion();
        return;
    }
    
    document.getElementById('titulo-pista-jugador').innerText = `Jugador ${jugadorActualPista}`;
    
    // Verificar si el jugador es impostor
    const esImpostor = listaImpostores.includes(jugadorActualPista);
    
    if (esImpostor) {
        // Si es impostor, mostrar que es impostor y solo la categoría
        document.getElementById('palabra-para-pista').innerHTML = `
            <span style="color: #EF4444; font-weight: bold;">¡ERES EL IMPOSTOR!</span><br>
            <small style="color: #999;">Solo conoces la categoría: ${categoriaSecreta}</small>
        `;
    } else {
        // Si no es impostor, mostrar la palabra secreta
        document.getElementById('palabra-para-pista').innerText = palabraSecreta;
    }
    
    document.getElementById('input-pista').value = '';
    mostrarPantalla('pantalla-dar-pista');
    
    // Enfocar el input
    setTimeout(() => {
        document.getElementById('input-pista').focus();
    }, 100);
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
        const nombre = i === numJugadores && botEsJugador ? '🤖 BOT' : `Jugador ${i}`;
        const pista = pistasJugadores[i] || 'sin pista';
        pistasList += `<p><strong>${nombre}:</strong> "${pista}"</p>`;
    }
    pistasList += '</div>';
    document.getElementById('lista-pistas').innerHTML = pistasList;
    
    // Crear botones de votación para cada jugador humano
    const totalJugadoresHumanos = botEsJugador ? numJugadores - 1 : numJugadores;
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
        
        const nombre = i === numJugadores && botEsJugador ? '🤖 BOT' : `Jugador ${i}`;
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
    
    // Verificar si todos votaron (humanos + bot)
    const totalVotantes = botEsJugador ? numJugadoresHumanos + 1 : numJugadores;
    if (Object.keys(votosJugadores).length >= totalVotantes) {
        setTimeout(() => {
            mostrarResultadoVotacion();
        }, 1000);
    }
}

function votarBot() {
    // El bot analiza las pistas y vota al más sospechoso
    let maxSospecha = -1;
    let votoBotA = 1;
    
    for (let i = 1; i <= numJugadores; i++) {
        // No votarse a sí mismo
        if (i === numJugadores) continue;
        
        const pista = pistasJugadores[i] || '';
        let nivelSospecha = analizarSospecha(pista, i);
        
        if (nivelSospecha > maxSospecha) {
            maxSospecha = nivelSospecha;
            votoBotA = i;
        }
    }
    
    votosJugadores[numJugadores] = votoBotA;
}

function analizarSospecha(pista, jugador) {
    let sospecha = 0;
    const pistaLower = pista.toLowerCase();
    const palabraLower = palabraSecreta.toLowerCase();
    
    // Pistas vagas o genéricas son sospechosas
    if (pistaLower.includes('cosa') || pistaLower.includes('algo')) sospecha += 3;
    if (pistaLower.length < 5) sospecha += 2;
    if (pistaLower === 'sin pista') sospecha += 5;
    
    // Pistas que solo mencionan la categoría son sospechosas
    if (pistaLower.includes(categoriaSecreta.toLowerCase())) sospecha += 3;
    
    // Verificar si la pista parece NO relacionada con la palabra secreta
    // Comparar con asociaciones conocidas de la palabra
    if (asociacionesPalabras[palabraSecreta]) {
        const asociacionesConocidas = asociacionesPalabras[palabraSecreta].map(a => a.toLowerCase());
        let tieneRelacion = false;
        
        // Verificar si alguna palabra de la pista coincide con las asociaciones
        const palabrasPista = pistaLower.split(' ');
        for (let palabra of palabrasPista) {
            if (asociacionesConocidas.some(asoc => asoc.includes(palabra) || palabra.includes(asoc))) {
                tieneRelacion = true;
                break;
            }
        }
        
        // Si no tiene relación con las asociaciones conocidas, es más sospechoso
        if (!tieneRelacion && asociacionesConocidas.length > 3) {
            sospecha += 4;
        }
    }
    
    // Pistas muy específicas y largas son menos sospechosas
    if (pistaLower.length > 15) sospecha -= 2;
    
    // Aleatorio para variedad
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
    
    // Mostrar resultado
    const esImpostor = listaImpostores.includes(expulsado);
    const nombreExpulsado = expulsado === numJugadores && botEsJugador ? '🤖 BOT' : `Jugador ${expulsado}`;
    
    let resultado = `<h2>RESULTADO</h2>`;
    resultado += `<p style="font-size: 1.3rem; margin: 20px 0;">${nombreExpulsado} ha sido expulsado con ${maxVotos} voto(s)</p>`;
    
    if (esImpostor) {
        resultado += `<p style="font-size: 1.5rem; color: var(--color-primary); font-weight: bold;">✓ ¡ERA EL IMPOSTOR!</p>`;
        resultado += `<p>La palabra secreta era: <strong>${palabraSecreta}</strong></p>`;
    } else {
        resultado += `<p style="font-size: 1.5rem; color: #999; font-weight: bold;">✗ NO ERA EL IMPOSTOR</p>`;
        resultado += `<p>El impostor era: <strong>${listaImpostores.map(i => i === numJugadores && botEsJugador ? '🤖 BOT' : `Jugador ${i}`).join(', ')}</strong></p>`;
        resultado += `<p>La palabra secreta era: <strong>${palabraSecreta}</strong></p>`;
    }
    
    resultado += `<button class="btn-principal" onclick="mostrarPantalla('pantalla-inicio')" style="margin-top: 20px;">VOLVER AL INICIO</button>`;
    
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
        
        // No aprender de su propia pista ni de pistas vacías
        if (numeroJugador === numJugadores || !pista || pista === 'sin pista') continue;
        
        // Solo aprender si el jugador NO era impostor
        if (!listaImpostores.includes(numeroJugador)) {
            // Aprender la asociación entre la palabra secreta y la pista del jugador
            botAprenderAsociacion(palabraSecreta, pista);
        }
    }
    
    console.log(`🤖 Bot aprendió de jugadores inocentes para "${palabraSecreta}"`);
}

// Pedir feedback sobre la pista del bot
function pedirFeedbackPistaBot() {
    if (!botEsJugador || !pistasJugadores[numJugadores]) return;
    
    const pistaBot = pistasJugadores[numJugadores];
    const respuesta = confirm(`🤖 La pista del bot fue: "${pistaBot}" para la palabra "${palabraSecreta}"\n\n¿Fue una buena pista?\n\n(OK = Sí, buena pista | Cancelar = No, mala pista)`);
    
    if (!respuesta) {
        // El usuario dijo que la pista fue mala
        bloquearPista(palabraSecreta, pistaBot);
        alert(`❌ El bot no usará más "${pistaBot}" para "${palabraSecreta}"`);
    } else {
        console.log(`✅ Pista "${pistaBot}" marcada como buena`);
    }
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
function botGenerarPistaImpostor(categoria) {
    // Pistas genéricas arriesgadas basadas en la categoría
    const pistasArriesgadas = {
        "Animales": [
            "tiene patas", "se mueve", "es peludo", "tiene cola", "come carne",
            "vive en la naturaleza", "es salvaje", "puede ser mascota", "es grande",
            "es pequeño", "hace ruido", "tiene garras", "tiene dientes", "nada",
            "vuela", "es rápido", "es peligroso", "vive en grupo", "come", "respira"
        ],
        "Lugares": [
            "hay gente", "es público", "se paga para entrar", "está en la ciudad",
            "tiene techo", "es grande", "es cerrado", "está afuera", "es famoso",
            "tiene puertas", "es tranquilo", "hay mucho ruido", "se compra algo",
            "es turístico", "tiene sillas", "se come ahí", "necesitas ticket",
            "se puede visitar", "hay personas", "espacio físico", "construcción",
            "está en el mapa", "se entra", "hay horarios", "tiene entrada"
        ],
        "Objetos": [
            "se usa en casa", "es de metal", "es pequeño", "es útil", "se rompe fácil",
            "es de plástico", "cuesta poco", "todos tienen uno", "es electrónico",
            "necesita energía", "se carga", "hace ruido", "tiene botones", "es portátil",
            "es pesado", "es moderno", "es antiguo", "se usa a diario", "tiene función",
            "se toca", "material sólido", "fabricado"
        ],
        "Futbolistas": [
            "es famoso", "juega bien", "es crack", "mete goles", "es rápido",
            "tiene buen pie", "es zurdo", "es diestro", "es alto", "es bajo",
            "juega en Europa", "tiene premios", "es veterano", "es joven",
            "defiende bien", "ataca mucho", "es técnico", "es fuerte", "profesional",
            "corre", "en la cancha", "tiene camiseta"
        ],
        "Series": [
            "es popular", "tiene varias temporadas", "es entretenida", "la vi en Netflix",
            "tiene acción", "es de drama", "es comedia", "es animada", "es moderna",
            "es antigua", "tiene buenos actores", "es adictiva", "es larga",
            "es corta", "tiene suspenso", "es de ciencia ficción", "es realista",
            "tiene capítulos", "se ve en TV", "streaming"
        ],
        "Comidas": [
            "es rica", "es caliente", "es fría", "es dulce", "es salada",
            "se come con las manos", "necesita cubiertos", "es italiana", "es mexicana",
            "es rápida de hacer", "es cara", "es barata", "tiene carne", "es vegetariana",
            "es para desayuno", "es postre", "tiene queso", "se cocina al horno",
            "alimenta", "nutritivo", "sabroso"
        ],
        "Películas": [
            "es famosa", "tiene acción", "es de miedo", "es divertida", "tiene efectos especiales",
            "ganó premios", "es taquillera", "la vieron todos", "es moderna", "es clásica",
            "tiene secuela", "es de Marvel", "es de Disney", "dura mucho", "es emocionante",
            "tiene actores", "se ve en cine", "tiene director"
        ]
    };
    
    // Obtener pistas para la categoría (o genéricas si no existe)
    let pistasDisponibles = pistasArriesgadas[categoria] || [
        "es interesante", "es conocido", "es único", "es especial", "me gusta",
        "es común", "es raro", "es bueno", "es malo", "todo el mundo lo conoce"
    ];
    
    // Filtrar pistas que son la categoría misma o muy genéricas
    const palabrasProhibidas = [
        categoria.toLowerCase(), // No decir el nombre de la categoría
        "animales", "lugares", "objetos", "futbolistas", "series", "comidas", "películas",
        "animal", "lugar", "objeto", "futbolista", "serie", "comida", "película"
    ];
    
    pistasDisponibles = pistasDisponibles.filter(pista => {
        const pistaLower = pista.toLowerCase();
        return !palabrasProhibidas.some(prohibida => pistaLower.includes(prohibida));
    });
    
    // Intentar también usar pistas de otras palabras de la misma categoría
    if (datos[categoria]) {
        const palabrasCategoria = datos[categoria];
        const palabraAleatoria = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];
        
        // Intentar conseguir pistas de una palabra aleatoria de la categoría
        if (asociacionesPalabras[palabraAleatoria] && asociacionesPalabras[palabraAleatoria].length > 0) {
            // Agregar algunas pistas de otras palabras de la categoría
            const pistasOtraPalabra = asociacionesPalabras[palabraAleatoria].slice(0, 3);
            pistasDisponibles = pistasDisponibles.concat(pistasOtraPalabra);
        }
    }
    
    // Seleccionar una pista aleatoria
    return pistasDisponibles[Math.floor(Math.random() * pistasDisponibles.length)];
}

// El bot genera una pista basada en las asociaciones
function botGenerarPista(palabra) {
    if (!asociacionesPalabras[palabra] || asociacionesPalabras[palabra].length === 0) {
        // Si no tiene asociaciones, generar pista genérica pero válida
        return generarPistaGenerica(palabra);
    }
    
    // Palabras prohibidas que nunca se deben usar como pista
    const palabrasProhibidas = [
        "animales", "lugares", "objetos", "futbolistas", "series", "comidas", "películas",
        "animal", "lugar", "objeto", "futbolista", "serie", "comida", "película"
    ];
    
    // Filtrar pistas bloqueadas Y pistas que contengan palabras prohibidas
    const pistasDisponibles = asociacionesPalabras[palabra].filter(pista => {
        const pistaLower = pista.toLowerCase();
        const tienePalabraProhibida = palabrasProhibidas.some(prohibida => pistaLower.includes(prohibida));
        const estaBloqueada = pistasBloqueadas[palabra] && pistasBloqueadas[palabra].includes(pista);
        return !estaBloqueada && !tienePalabraProhibida;
    });
    
    // Si todas las pistas están bloqueadas o prohibidas, generar una genérica
    if (pistasDisponibles.length === 0) {
        return generarPistaGenerica(palabra);
    }
    
    // Decidir aleatoriamente entre pista específica (70%) o general (30%)
    const usarPistaEspecifica = Math.random() < 0.7;
    
    if (usarPistaEspecifica && pistasDisponibles.length > 0) {
        // Usar una pista específica aprendida
        const pistaAleatoria = pistasDisponibles[Math.floor(Math.random() * pistasDisponibles.length)];
        return pistaAleatoria;
    } else {
        // Generar una pista general para ser competitivo
        return generarPistaGenerica(palabra);
    }
}

// Generar pista genérica pero competitiva para una palabra
function generarPistaGenerica(palabra) {
    const palabraLower = palabra.toLowerCase();
    const pistasGenericas = [];
    
    // Pistas basadas en características de la palabra
    if (palabra.length <= 5) {
        pistasGenericas.push(`palabra corta`);
    } else if (palabra.length >= 8) {
        pistasGenericas.push(`palabra larga`);
    }
    
    pistasGenericas.push(`empieza con ${palabra.charAt(0)}`);
    pistasGenericas.push(`muy conocido`);
    pistasGenericas.push(`todo el mundo lo conoce`);
    
    // Pistas específicas por categoría (NUNCA mencionar la categoría directamente)
    if (categoriaSecreta) {
        const pistasPorCategoria = {
            "Animales": ["ser vivo", "criatura", "tiene vida", "de la naturaleza", "organismo"],
            "Lugares": ["se puede visitar", "hay gente ahí", "espacio físico", "destino", "construcción", "está en el mapa"],
            "Objetos": ["se usa", "tiene función", "útil", "se puede tocar", "material", "fabricado"],
            "Futbolistas": ["deportista profesional", "jugador famoso", "está en la cancha", "atleta", "corre mucho"],
            "Series": ["entretenimiento", "para ver", "tiene episodios", "contenido audiovisual", "streaming"],
            "Comidas": ["comestible", "se cocina", "plato", "alimento", "nutritivo", "sabroso"],
            "Películas": ["largometraje", "producción cinematográfica", "obra visual", "filmación", "tiene actores"]
        };
        
        if (pistasPorCategoria[categoriaSecreta]) {
            pistasGenericas.push(...pistasPorCategoria[categoriaSecreta]);
        }
    }
    
    // Filtrar palabras prohibidas (nunca decir el nombre de la categoría)
    const palabrasProhibidas = [
        "animales", "lugares", "objetos", "futbolistas", "series", "comidas", "películas",
        "animal", "lugar", "objeto", "futbolista", "serie", "comida", "película"
    ];
    
    const pistasFiltradas = pistasGenericas.filter(pista => {
        const pistaLower = pista.toLowerCase();
        return !palabrasProhibidas.some(prohibida => pistaLower.includes(prohibida));
    });
    
    return pistasFiltradas[Math.floor(Math.random() * pistasFiltradas.length)] || "muy conocido";
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