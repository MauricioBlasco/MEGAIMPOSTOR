Subasta Futbolera
=================

Juego web ligero para simular subastas de jugadores representados únicamente por emojis.

Cómo usar

1. Abrir `index.html` en tu navegador.
2. En la pantalla de título haz clic en "Iniciar".
3. En "Configuración" ajusta `Presupuesto por equipo` y `Cantidad de equipos`.
4. Haz clic en "Crear y empezar". Se cargará la base de datos (`players.json`).
5. En la pantalla de subasta verás a cada jugador (emoji), su calidad y el precio base.
6. Pulsa "Siguiente jugador" para ejecutar la subasta automática entre los equipos. También hay un botón "Auto-run" para recorrer todas las subastas.
7. El presupuesto de cada equipo se actualiza en tiempo real y al final se muestra la lista de jugadores de cada equipo.

Detalles técnicos

- `players.json` contiene ~15 jugadores por posición (arqueros, laterales, centrales, mediocampistas, extremos y delanteros).
- `app.js` implementa una subasta automática donde cada equipo (IA simple) decide pujar según su presupuesto y una probabilidad influenciada por la calidad del jugador.
- Puedes activar `Modo rápido` para acelerar las subastas.

Prueba local (recomendada)

- Algunos navegadores bloquean `fetch()` cuando abres `index.html` por `file://`. Si al pulsar "Iniciar" no ocurre nada, ejecuta un servidor local simple y abre la página vía `http://`.

Usa Python (si lo tienes):

```bash
python -m http.server 8000
```

Luego abre en el navegador:

```
http://localhost:8000/index.html
```

O instala la extensión "Live Server" en VS Code y pulsa "Go Live".

Si quieres, puedo añadir una comprobación en la consola para detectar si `players.json` no carga y mostrar un mensaje más claro en la UI.

Siguientes mejoras posibles

- Añadir interacción humana para pujar manualmente.
- Guardar partidas.
- Mejor IA/estrategias de puja.

Si quieres que implemente pujas manuales para el jugador humano o que conecte el juego a un backend, dime y lo hago.