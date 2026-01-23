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
        "Mochila", "Maleta", "Paraguas", "Gafas", "Reloj", "Billetera", "Moneda", "Martillo", "Destornillador", "Tijeras", 
        "Peine", "Jabón", "Toalla", "Almohada", "Manta", "Silla", "Mesa", "Sofá", "Cama", 
        "Bicicleta", "Guitarra", "Piano", "Pelota", "Raqueta", "Botella", "Encendedor", "trompeta", "Escoba", "bateria", "bajo"
    ],
    "Futbolistas": [
        "Puskás", "Eusébio", "Gerd Müller", "George Best", "Yashin", "Baresi", "Maldini", "Passarella", "Kempes", "Batistuta",
    "Figo", "Puyol", "Pirlo", "Lahm", "Gerrard", "Lampard", "Scholes", "Raúl", "Shevchenko", "Van Basten",
    "Bergkamp", "Totti", "Del Piero", "Klose", "Foden", "Saka", "Rodri", "Valverde", "Courtois", "Alisson",
    "Van Dijk", "Salah", "Son", "Gavi", "James Rodríguez",
    "Garrincha", "Zico", "Socrates", "Falcao", "Rivarola", "Chilavert", "Valderrama", "Forlán", "Cavani", "Godín",
    "Bebeto", "Vieri", "Nedved", "Stoichkov", "Hagi", "Kahn", "Schmeichel", "Van der Sar", "Hugo Sánchez", "Rafa Márquez", "Amengol"
    ],
    "Series": [
        "Stranger Things", "Breaking Bad", "The Office", "Harry Potter", "Spider-Man", "Game of Thrones", "Friends", "Dark",
        "La Casa de Papel", "The Mandalorian", "The Last of Us", "Black Mirror", "Peaky Blinders", "Better Call Saul", "Narcos", "Vikings", 
        "Grey's Anatomy", "Lost", "The Walking Dead", "Modern Family", "The Big Bang Theory", "How I Met Your Mother", "Simpson", "South Park", "Rick and Morty", 
        "One Piece", "Naruto", "Dragon Ball", "Attack on Titan", "Demon Slayer", "Cobra Kai", "The Boys", "Invincible", 
         "Dexter", "Mr. Robot", "Brooklyn Nine-Nine", "Ted Lasso", "The Witcher", "Loki", "Wandavision"
    ],
    "Comida": [
        "Pizza", "Hamburguesa", "Sushi", "Taco", "Pasta", "Asado", "Empanada", "Paella", "Ramen", "Lasaña", 
        "Panchito", "Nuggets", "Ensalada", "Sopa", "Milanesa", "Puré", "Arroz", "Huevo Frito", "Tortilla", "Pan", 
        "Queso", "Jamón", "Salame", "Sándwich", "Ceviche", "Burrito", "Nachos", "Kebab", "Asado", 
        "Helado", "Chocolate", "Tarta", "Flan", "Churros", "Donas", "Galletas", "Alfajor", "Papas Fritas", "Pochoclos", 
        "Manzana", "Banana", "Frutilla", "Sandía", "Uva", "Naranja", "Limón", "Palta", "Tomate", "Lechuga", "pepino", "zanahoria", "berenjena"
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
        "The Last of Us", "Skyrim", "Portal", "Half-Life", "BioShock", "Undertale", "Cuphead", "Hollow Knight", "Doom", "gangbeast", "kirby", "polytopia", "crash bandicoot", "need 4 speed"
        ,"Outer WIlds"
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
        "Coldplay", "Green Day", "Bon Jovi", "The Police", "Oasis", "R.E.M.", "Arctic Monkeys", "The Killers", "Foo Fighters", "Muse",
        "The Clash", "Ramones", "Sex Pistols", "KISS", "Van Halen", "Def Leppard", "The Cure", "Depeche Mode", "Joy Division", "The Smiths",
        "Imagine Dragons", "Gorillaz", "Twenty One Pilots", "System of a Down", "Slipknot", "Mötley Crüe", "Journey", "Toto", "Fleetwood Mac", "Dire Straits", "Las chismosas"
    ],
    "Rock Argentino": [
        "Soda Stereo", "Patricio Rey", "Serú Girán", "Pescado Rabioso", "Sumo", "Los Abuelos de la Nada", "Enanitos Verdes", "Los Fabulosos Cadillacs", "Los Auténticos Decadentes", "Babasónicos",
        "La Renga", "Los Piojos", "Ratones Paranoicos", "Divididos", "Las Pelotas", "Catupecu Machu", "Bersuit Vergarabat", "Callejeros", "Intoxicados", "Viejas Locas",
        "Virus", "Rata Blanca", "Attaque 77", "Dos Minutos", "Almafuerte", "Hermética", "V8", "Los Tipitos", "Estelares", "Guasones",
        "El Mató a un Policía Motorizado", "Airbag", "Tan Biónica", "Los Gardelitos", "Los fundamentalistas", "La Beriso", "Los Caballeros de la Quema", "Arbol", "Kapanga", "Memphis la Blusera",
        "Vox Dei", "Almendra", "Sui Generis", "Manal", "Los Gatos", "Pappo's Blues", "Riff", "SKAY", "Miranda!", "Turf", "Las chismosas"
    ],
    "Peliculas": [
        "Titanic", "Avatar", "El Padrino", "Pulp Fiction", "Forrest Gump", "Gladiador", "Matrix", "Inception", "Interstellar", "El Rey León",
        "Jurassic Park", "Star Wars", "El Señor de los Anillos", "Harry Potter", "Toy Story", "Buscando a Nemo", "Frozen", "Los Increíbles", "Shrek", "Up",
        "Avengers", "Iron Man", "Spider-Man", "Batman", "Superman", "Joker", "Deadpool", "Black Panther", "Guardianes de la Galaxia", "Thor",
        "Volver al Futuro", "Rocky", "Rambo", "Terminator", "Alien", "Depredador", "Duro de Matar", "Mad Max", "300", "Troya",
        "La La Land", "Coco", "Intensa Mente", "Moana", "Enredados", "Blancanieves", "La Sirenita", "Aladdin", "Mulan", "Pocahontas",
        "Scarface", "El Lobo de Wall Street", "Fight Club", "Kung Fu Panda", "Cómo Entrenar a tu Dragón", "Madagascar", "Ratatouille", "Monsters Inc"
    ],
    "Pokemon": [
        "Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Mewtwo", "Mew", "Eevee", "Snorlax", "Gengar", "Dragonite",
        "Gyarados", "Lucario", "Greninja", "Blaziken", "Umbreon", "Espeon", "Jolteon", "Vaporeon", "Flareon", "Leafeon",
        "Glaceon", "Sylveon", "Meowth", "Psyduck", "Machamp", "Alakazam", "Golem", "Raichu", "Arcanine", "Ninetales",
        "Pidgeot", "Fearow", "Sandslash", "Nidoking", "Nidoqueen", "Clefable", "Wigglytuff", "Venomoth", "Dugtrio", "Persian",
        "Golduck", "Primeape", "Poliwrath", "Abra", "Kadabra", "Machoke", "Victreebel", "Tentacruel", "Rapidash", "Slowbro",
        "Magneton", "Dodrio", "Dewgong", "Muk", "Cloyster", "Haunter", "Hypno", "Kingler", "Electrode", "Exeggutor",
        "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Weezing", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Seadra",
        "Seaking", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Lapras",
        "Ditto", "Porygon", "Omastar", "Kabutops", "Aerodactyl", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair",
        "Totodile", "Cyndaquil", "Chikorita", "Typhlosion", "Feraligatr", "Meganium", "Ampharos", "Heracross", "Scizor", "Tyranitar",
        "Lugia", "Ho-Oh", "Celebi", "Umbreon", "Espeon", "Slowking", "Wobbuffet", "Forretress", "Steelix", "Shuckle",
        "Treecko", "Torchic", "Mudkip", "Gardevoir", "Aggron", "Flygon", "Milotic", "Absol", "Salamence", "Metagross",
        "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Sceptile", "Swampert", "Breloom",
        "Slaking", "Hariyama", "Manectric", "Sharpedo", "Wailord", "Altaria", "Zangoose", "Seviper", "Armaldo", "Banette",
        "Torterra", "Infernape", "Empoleon", "Garchomp", "Luxray", "Roserade", "Gallade", "Dialga", "Palkia", "Giratina",
        "Darkrai", "Arceus", "Greninja", "Zoroark", "Chandelure", "Hydreigon", "Reshiram", "Zekrom", "Kyurem", "Mimikyu"
    ],
    "Personas":[
        "Mauro","Lopa", "Euge", "Baza", "Melina", "eze", "Isidro", "Raul", "Nacho", "Tejeda", "prato", "Luna", "Valen", "lio", "Viva", "monti", "Arguello", 
        "Testa", "Estela", "Bricola", "Mariano Bricola", "Poggi", "Pablo", "coffler", "Pablito del pañol", "Facu Led", "mendez", "Spagno", "sosa", "shasemnbag", 
        "Maffei", "Altinier", "zarate", "serrudo", "Colo barco", "Abregu", "gabri", "octa", "tatin", "Amenta", "Jorge Herrera", "germauro papa", "Titi", "Santi Lautolucito", "Pepi Puente",
        "giamo", "Gian", "Matarollo", "Lain", "mauri trillo", "bissoni", "garabato", "santi white", "santi taza", "camilito", "rios", "fabri", "medina", "palmieri", "sofi morey", "vicky lupica", 
        "manuchongod", "mateo orlando", "alejo almeyra", "nelli", "mati karam", "milo rada", "joaquino", "lesme", "luis", "tanque de velez", "darda", "arguello papa", "vila 🐐"
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

function mostrarPantalla(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    const destino = document.getElementById(id);
    destino.classList.remove('hidden');
    destino.classList.add('active');
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
        }
    } else if (id === 'input-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        const nuevoValor = valorActual + cambio;
        const maxImpostores = modoLocoActivado ? jugadores : jugadores - 2;
        
        if (nuevoValor >= 1 && nuevoValor <= maxImpostores) {
            input.value = nuevoValor;
        }
    } else if (id === 'input-max-impostores') {
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        const nuevoValor = valorActual + cambio;
        const maxPermitido = modoLocoActivado ? jugadores : jugadores - 2;
        
        if (nuevoValor >= 1 && nuevoValor <= maxPermitido) {
            input.value = nuevoValor;
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
    } else {
        controlMaxImpostores.style.display = 'none';
        controlImpostores.style.display = 'flex';
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
    mostrarPantalla('pantalla-revelar');
}

function prepararTurno() {
    document.getElementById('titulo-turno').innerText = "Jugador " + jugadorActual;
    document.getElementById('caja-secreta').innerText = "? ? ?";
    document.getElementById('btn-revelar-clic').classList.remove('hidden');
    document.getElementById('btn-siguiente').classList.add('hidden');
}

function revelarCliche() {
    const caja = document.getElementById('caja-secreta');
    const btnRevelar = document.getElementById('btn-revelar-clic');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const modoDificil = document.getElementById('switch-dificil').checked;

    if(listaImpostores.includes(jugadorActual)) {
        if (modoDificil) {
            caja.innerHTML = `<span style="color:#ff4757">¡ERES EL IMPOSTOR!</span>`;
        } else {
            caja.innerHTML = `<span style="color:#ff4757">¡ERES EL IMPOSTOR!</span><br><small>Categoría: ${categoriaSecreta}</small>`;
        }
    } else {
        if (modoDificil) {
            caja.innerHTML = `${palabraSecreta}`;
        } else {
            caja.innerHTML = `${palabraSecreta}<br><small>Categoría: ${categoriaSecreta}</small>`;
        }
    }

    btnRevelar.classList.add('hidden');
    btnSiguiente.classList.remove('hidden');
}

function siguienteJugador() {
    if (jugadorActual < numJugadores) {
        jugadorActual++;
        prepararTurno();
    } else {
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
        
        alert('¡Código correcto! Categoría "Personas" desbloqueada.');
        input.value = '';
        mostrarPantalla('pantalla-jugadores');
    } else if (codigo === 'loco') {
        modoLocoActivado = true;
        
        alert('¡Código correcto! Modo LOCO activado.\n\nAhora puedes tener igual cantidad de impostores que jugadores.');
        input.value = '';
        
        actualizarMaxImpostores();
        
        mostrarPantalla('pantalla-jugadores');
    } else if (codigo === 'bob') {
        activarTemaHippie();
        
        alert('¡Código correcto! Tema HIPPIE activado. ✌️🌈');
        input.value = '';
        
        mostrarPantalla('pantalla-jugadores');
    } else {
        alert('Código incorrecto. Inténtalo de nuevo.');
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