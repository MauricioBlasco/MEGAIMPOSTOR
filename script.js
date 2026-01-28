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
        max = modoLocoActivado ? jugadores : jugadores - 2;
    } else if (id === 'input-max-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        min = 1;
        max = modoLocoActivado ? jugadores : jugadores - 2;
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
        const maxImpostores = modoLocoActivado ? jugadores : jugadores - 2;
        
        if (nuevoValor >= 1 && nuevoValor <= maxImpostores) {
            input.value = nuevoValor;
            actualizarEstadoBotones(id);
        }
    } else if (id === 'input-max-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        const nuevoValor = valorActual + cambio;
        const maxPermitido = modoLocoActivado ? jugadores : jugadores - 2;
        
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
    const maxPermitido = modoLocoActivado ? jugadores : Math.max(1, jugadores - 2);
    
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
    
    const randomizadorActivado = document.getElementById('switch-randomizador').checked;
    if (randomizadorActivado) {
        const maxImpostores = parseInt(document.getElementById('input-max-impostores').value);
        numImpostores = Math.floor(Math.random() * maxImpostores) + 1;
    } else {
        numImpostores = parseInt(document.getElementById('input-impostores').value);
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
    document.getElementById('titulo-turno').innerText = `Jugador ${jugadorActual}`;
    caja.innerText = '? ? ?';
    caja.classList.remove('reveal');
    caja.classList.remove('impostor-vibrate');
    btnRevelar.classList.remove('hidden');
    btnSiguiente.classList.add('hidden');
    mostrarPantalla('pantalla-revelar');
}

function revelarCliche() {
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

function siguienteJugador() {
    if (jugadorActual < numJugadores) {
        jugadorActual++;
        prepararTurno();
    } else {
        // Verificar logro Y soy yo (2 jugadores y 2 impostores)
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
        
        const randomizadorActivado = document.getElementById('switch-randomizador').checked;
        
        if (randomizadorActivado) {
            document.getElementById('cantidad-impostores').innerText = '? ? ?';
            document.getElementById('btn-revelar-impostores').style.display = 'block';
            document.getElementById('texto-empezar-pistas').style.display = 'none';
            document.getElementById('btn-continuar-info').style.display = 'none';
            
            mostrarPantalla('pantalla-info-impostores');
        } else {
            mostrarPantalla('pantalla-todos-listos');
        }
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
        sr: logroSrDesbloqueado
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
                                logroSrDesbloqueado;
    
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
            logroColeccionista.querySelector('.logro-icono').textContent = '🔒';
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
            logroPrincipiante.querySelector('.logro-icono').textContent = '🔒';
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
            logroYSoyYo.querySelector('.logro-icono').textContent = '🔒';
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
            logroImposible.querySelector('.logro-icono').textContent = '🔒';
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
            logroSr.querySelector('.logro-icono').textContent = '🔒';
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
            logroAura.querySelector('.logro-icono').textContent = '🔒';
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
            logroMarley.querySelector('.logro-icono').textContent = '🔒';
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
            logroZeus.querySelector('.logro-icono').textContent = '🔒';
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
            logroJoker.querySelector('.logro-icono').textContent = '🔒';
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
            logroCampeon.querySelector('.logro-icono').textContent = '🔒';
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
            logroTheM.querySelector('.logro-icono').textContent = '🔒';
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
            logroHades.querySelector('.logro-icono').textContent = '🔒';
        }
    }
}

// Cargar tema guardado al iniciar
window.addEventListener('DOMContentLoaded', () => {
    // Siempre iniciar en modo oscuro
    document.body.classList.remove('tema-claro');
    localStorage.removeItem('tema');
    
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