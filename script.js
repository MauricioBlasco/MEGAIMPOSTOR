const datos = {
    "Animales": ["Perro", "Gato", "Elefante", "Tigre", "Delfín", "Lobo"],
    "Lugares": ["París", "Playa", "Cine", "Estadio", "Hospital", "Escuela"],
    "Objetos": ["Lámpara", "Reloj", "Espejo", "Martillo", "Tenedor"],
    "Futbolistas": ["Messi", "Ronaldo", "Maradona", "Mbappé", "Neymar"],
    "Series": ["Stranger Things", "Breaking Bad", "The Office", "Harry Potter", "Spider-Man"]
};

let numJugadores = 0;
let numImpostores = 0;
let jugadorActual = 1;
let palabraSecreta = "";
let categoriaSecreta = "";
let listaImpostores = [];

function mostrarPantalla(id) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('active');
    });
    const destino = document.getElementById(id);
    destino.classList.remove('hidden');
    destino.classList.add('active');
}

function actualizarMaxImpostores() {
    const jugadores = parseInt(document.getElementById('input-jugadores').value);
    const inputImp = document.getElementById('input-impostores');
    const maxPermitido = Math.max(1, jugadores - 2);
    
    inputImp.max = maxPermitido;
    if (parseInt(inputImp.value) > maxPermitido) {
        inputImp.value = maxPermitido;
    }
}

function iniciarPartida() {
    numJugadores = parseInt(document.getElementById('input-jugadores').value);
    numImpostores = parseInt(document.getElementById('input-impostores').value);
    
    let bolsaCombinada = [];
    if(document.getElementById('cat-Animales').checked) datos["Animales"].forEach(p => bolsaCombinada.push({p: p, c: "Animales"}));
    if(document.getElementById('cat-Lugares').checked) datos["Lugares"].forEach(p => bolsaCombinada.push({p: p, c: "Lugares"}));
    if(document.getElementById('cat-Objetos').checked) datos["Objetos"].forEach(p => bolsaCombinada.push({p: p, c: "Objetos"}));
    if(document.getElementById('cat-Futbolistas').checked) datos["Futbolistas"].forEach(p => bolsaCombinada.push({p: p, c: "Futbolistas"}));
    if(document.getElementById('cat-Series').checked) datos["Series"].forEach(p => bolsaCombinada.push({p: p, c: "Series"}));

    if(bolsaCombinada.length === 0) {
        alert("¡Selecciona al menos una categoría!");
        return;
    }

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

    if(listaImpostores.includes(jugadorActual)) {
        caja.innerHTML = `<span style="color:#ff4757">¡ERES EL IMPOSTOR!</span><br><small>Categoría: ${categoriaSecreta}</small>`;
    } else {
        caja.innerHTML = `${palabraSecreta}<br><small>Categoría: ${categoriaSecreta}</small>`;
    }

    btnRevelar.classList.add('hidden');
    btnSiguiente.classList.remove('hidden');
}

function siguienteJugador() {
    if (jugadorActual < numJugadores) {
        jugadorActual++;
        prepararTurno();
    } else {
        alert("¡Todos han visto su palabra! Empiecen las pistas.");
        iniciarPartida(); 
        mostrarPantalla('pantalla-preparacion');
    }
}