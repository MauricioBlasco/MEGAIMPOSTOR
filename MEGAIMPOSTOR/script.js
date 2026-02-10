// Las palabras se cargan desde palabras.js

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

// Función auxiliar para obtener palabras seleccionadas
function obtenerBolsaCombinada() {
    const categorias = [
        { id: 'cat-Animales', nombre: 'Animales' },
        { id: 'cat-Lugares', nombre: 'Lugares' },
        { id: 'cat-Objetos', nombre: 'Objetos' },
        { id: 'cat-Futbolistas', nombre: 'Futbolistas' },
        { id: 'cat-Series', nombre: 'Series' },
        { id: 'cat-ClashRoyale', nombre: 'Clash Royale' },
        { id: 'cat-Comida', nombre: 'Comida' },
        { id: 'cat-Deportes', nombre: 'Deportes' },
        { id: 'cat-Videojuegos', nombre: 'Videojuegos' },
        { id: 'cat-RockInt', nombre: 'Rock Internacional' },
        { id: 'cat-RockArg', nombre: 'Rock Argentino' },
        { id: 'cat-Peliculas', nombre: 'Peliculas' },
        { id: 'cat-Pokemon', nombre: 'Pokemon' },
        { id: 'cat-Personas', nombre: 'Personas' }
    ];
    
    const bolsa = [];
    categorias.forEach(({ id, nombre }) => {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked && datos[nombre]) {
            datos[nombre].forEach(p => bolsa.push({ p, c: nombre }));
        }
    });
    
    return bolsa;
}

// El bot aprende automáticamente analizando las categorías
function botAprendizajeAutomatico() {
    // Generar asociaciones basadas en categorías
    for (const categoria in datos) {
        const palabras = datos[categoria];
        for (const palabra of palabras) {
            if (!asociacionesPalabras[palabra]) {
                asociacionesPalabras[palabra] = [categoria.toLowerCase()];
            } else if (!asociacionesPalabras[palabra].includes(categoria.toLowerCase())) {
                asociacionesPalabras[palabra].push(categoria.toLowerCase());
            }
            
            // Generar pistas automáticas basadas en características
            const pistas = generarPistasAutomaticas(palabra, categoria);
            for (const pista of pistas) {
                if (!asociacionesPalabras[palabra].includes(pista)) {
                    asociacionesPalabras[palabra].push(pista);
                }
            }
        }
    }
    
    guardarAsociacionesBot();
}

// Generar pistas automáticas inteligentes para una palabra
function generarPistasAutomaticas(palabra, categoria) {
    const pistas = [];
    const palabraLower = palabra.toLowerCase();
    
    // Diccionario MASIVO de pistas específicas por palabra
    // Las pistas específicas ahora se cargan desde pistas.js
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
    
    // Sets para búsquedas más rápidas (O(1) vs O(n))
    const mascotas = new Set(["Perro", "Gato", "Conejo", "Hámster"]);
    const felinos = new Set(["León", "Tigre", "Gato", "Leopardo"]);
    const caninos = new Set(["Perro", "Lobo", "Zorro"]);
    const aves = new Set(["Águila", "Loro", "Pavo Real", "Pingüino"]);
    const mamiferos_marinos = new Set(["Delfín", "Ballena", "Orca"]);
    const marinos = new Set(["Tiburón", "Pez"]);
    const enormes = new Set(["Elefante", "Ballena", "Jirafa", "Hipopótamo"]);
    const insectos = new Set(["Hormiga", "Abeja", "Araña"]);
    
    switch(categoria) {
        case "Animales":
            if (mascotas.has(palabra)) pistas.push("mascota", "doméstico");
            if (felinos.has(palabra)) pistas.push("felino");
            if (caninos.has(palabra)) pistas.push("canino");
            if (aves.has(palabra)) pistas.push("ave", "plumas");
            if (mamiferos_marinos.has(palabra)) pistas.push("mamífero marino", "inteligente");
            if (marinos.has(palabra)) pistas.push("marino", "nada");
            if (enormes.has(palabra)) pistas.push("enorme", "gigante");
            if (insectos.has(palabra)) pistas.push("pequeño", "insecto");
            break;
            
        case "Lugares":
            const naturaleza = new Set(["Playa", "Montaña", "Bosque", "Desierto"]);
            const cultural = new Set(["Cine", "Teatro", "Museo"]);
            const salud = new Set(["Hospital", "Farmacia"]);
            const educacion = new Set(["Escuela", "Biblioteca", "Universidad"]);
            const comida = new Set(["Restaurante", "Café", "Panadería"]);
            const transporte = new Set(["Aeropuerto", "Estación"]);
            const animales = new Set(["Acuario", "Zoológico"]);
            
            if (naturaleza.has(palabra)) pistas.push("naturaleza", "al aire libre");
            if (cultural.has(palabra)) pistas.push("cultural", "espectáculo");
            if (salud.has(palabra)) pistas.push("salud", "médico");
            if (educacion.has(palabra)) pistas.push("educación", "aprender");
            if (comida.has(palabra)) pistas.push("comida", "comer");
            if (transporte.has(palabra)) pistas.push("transporte", "viaje");
            if (animales.has(palabra)) pistas.push("animales", "visitar");
            break;
            
        case "Objetos":
            const electronicos = new Set(["Teléfono", "Computadora", "Televisor"]);
            const musicales = new Set(["Guitarra", "Piano", "Batería"]);
            const herramientas = new Set(["Martillo", "Destornillador", "Llave"]);
            const cocina = new Set(["Plato", "Vaso", "Tenedor", "Cuchillo"]);
            const deportivos = new Set(["Pelota", "Raqueta"]);
            
            if (electronicos.has(palabra)) pistas.push("electrónico", "tecnología", "pantalla");
            if (musicales.has(palabra)) pistas.push("musical", "tocar", "sonido");
            if (herramientas.has(palabra)) pistas.push("herramienta", "arreglar");
            if (cocina.has(palabra)) pistas.push("cocina", "comer");
            if (deportivos.has(palabra)) pistas.push("deportivo", "jugar");
            break;
            
        case "Futbolistas":
            pistas.push("futbolista", "juega");
            if (palabraLower.includes("messi") || palabraLower.includes("cristiano") || palabraLower.includes("maradona")) {
                pistas.push("leyenda", "crack", "histórico");
            }
            break;
            
        case "Series":
            pistas.push("serie", "capítulos");
            const seriesDrama = new Set(["Breaking Bad", "Narcos", "Peaky Blinders"]);
            const seriesComedia = new Set(["Friends", "The Office", "Brooklyn Nine-Nine"]);
            
            if (seriesDrama.has(palabra)) pistas.push("crimen", "drama");
            if (seriesComedia.has(palabra)) pistas.push("comedia", "risas");
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
    const controlImpostores = document.getElementById('control-impostores');
    
    if (randomizadorActivado) {
        // Mostrar "Máximo de impostores"
        controlMaxImpostores.style.display = 'flex';
        controlImpostores.style.display = 'none';
        const jugadores = parseInt(document.getElementById('input-jugadores').value);
        document.getElementById('input-max-impostores').value = Math.max(1, jugadores - 2);
        actualizarEstadoBotones('input-max-impostores');
    } else {
        // Ocultar ambos controles cuando el randomizador está desactivado
        controlMaxImpostores.style.display = 'none';
        controlImpostores.style.display = 'none';
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
    
    const bolsaCombinada = obtenerBolsaCombinada();
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
    const bolsaCombinada = obtenerBolsaCombinada();
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
    
    // 1. Detectar palabras genéricas (usando Set es más rápido)
    const palabrasGenericas = new Set(['cosa', 'algo', 'objeto', 'tipo', 'especie', 'clase', 'forma', 'manera']);
    for (const gen of palabrasGenericas) {
        if (pistaLower.includes(gen)) {
            resultado.esGenerica = true;
            resultado.puntuacionCalidad -= 30;
            break;
        }
    }
    
    // 2. Detectar frases comparativas
    if (/^(como|tipo|parecido|similar|igual|parece|se parece|semejante)(\s|$)/i.test(pistaLower)) {
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
        const asociacionesConocidas = asociacionesPalabras[palabra];
        let pistaEstaEnAsociaciones = false;
        
        for (const asoc of asociacionesConocidas) {
            const asocLower = asoc.toLowerCase();
            if (asocLower.includes(pistaLower) || pistaLower.includes(asocLower)) {
                pistaEstaEnAsociaciones = true;
                break;
            }
        }
        
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
    
    // Inicializar el bot con los datos
    botAprendizajeAutomatico();
    
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
