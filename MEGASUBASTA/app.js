// ========== SISTEMA DE VISTAS ==========
// Funciones para crear y gestionar vistas dinámicamente

const ViewManager = {
  container: null,
  
  init() {
    this.container = document.getElementById('app');
    if (!this.container) {
      console.error('Contenedor #app no encontrado');
      return;
    }
  },
  
  // Función principal para cambiar de vista
  showView(viewName) {
    // Limpiar completamente el contenedor
    this.container.innerHTML = '';
    this.container.scrollTop = 0; // Asegurar que esté arriba
    
    // Cargar la nueva vista
    switch(viewName) {
      case 'inicio':
        this.renderInicioView();
        break;
      case 'config':
        this.renderConfigView();
        break;
      case 'auction':
        this.renderAuctionView();
        break;
      case 'final':
        this.renderFinalView();
        break;
      default:
        console.warn('Vista no encontrada:', viewName);
    }
  },
  
  // Vista de Inicio
  renderInicioView() {
    this.container.innerHTML = `
      <div class="screen" id="title-screen">
        <h1>MEGASUBASTA</h1>
        <div style="font-weight:600;margin-bottom:8px">Subasta Futbolera</div>
        <button id="start-btn">Iniciar</button>
      </div>
    `;
    
    // Asignar evento
    document.getElementById('start-btn').addEventListener('click', () => {
      this.showView('config');
    });
  },
  
  // Vista de Configuración
  renderConfigView() {
    this.container.innerHTML = `
      <div class="screen" id="config-screen">
        <div class="config-panel">
          <h2>CONFIGURACIÓN</h2>
          <p class="config-subtitle">Configura los parámetros de la subasta</p>
          
          <div class="config-group">
            <label>Presupuesto por equipo</label>
            <div class="input-wrapper">
              <input id="budget-input" type="number" min="50" value="100" step="50" readonly>
              <div class="triangle-controls">
                <button type="button" class="triangle-btn triangle-up" data-target="budget" data-step="50"></button>
                <button type="button" class="triangle-btn triangle-down" data-target="budget" data-step="50"></button>
              </div>
            </div>
            <small class="input-help">Cantidad en millones de euros</small>
          </div>
          
          <div class="config-group">
            <label>Cantidad de equipos</label>
            <div class="input-wrapper">
              <input id="teams-input" type="number" min="2" max="8" value="4" readonly>
              <div class="triangle-controls">
                <button type="button" class="triangle-btn triangle-up" data-target="teams" data-step="1"></button>
                <button type="button" class="triangle-btn triangle-down" data-target="teams" data-step="1"></button>
              </div>
            </div>
            <small class="input-help">Entre 2 y 8 equipos</small>
          </div>
          
          <div class="config-actions">
            <button id="back-btn" class="btn-secondary">Volver</button>
            <button id="create-btn" class="btn-primary">Crear y empezar</button>
          </div>
          <div id="loading-msg"></div>
        </div>
      </div>
    `;
    
    const createBtn = document.getElementById('create-btn');
    const loadingMsg = document.getElementById('loading-msg');
    
    // Verificar si los datos están cargados
    if (!GameController.playersDB) {
      createBtn.disabled = true;
      loadingMsg.textContent = 'Cargando jugadores...';
      
      // Verificar periódicamente si los datos ya están listos
      const checkInterval = setInterval(() => {
        if (GameController.playersDB) {
          createBtn.disabled = false;
          loadingMsg.textContent = '¡Listo para empezar!';
          clearInterval(checkInterval);
        }
      }, 100);
    } else {
      loadingMsg.textContent = '¡Listo para empezar!';
    }
    
    // Event listeners para botones triangulares
    document.querySelectorAll('.triangle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.dataset.target;
        const step = parseInt(btn.dataset.step);
        const isUp = btn.classList.contains('triangle-up');
        const input = target === 'budget' ? document.getElementById('budget-input') : document.getElementById('teams-input');
        
        let currentValue = parseInt(input.value) || 0;
        let newValue = isUp ? currentValue + step : currentValue - step;
        
        // Validar límites
        const min = parseInt(input.min) || 0;
        const max = parseInt(input.max) || Infinity;
        newValue = Math.max(min, Math.min(max, newValue));
        
        input.value = newValue;
      });
    });
    
    // Asignar eventos
    document.getElementById('back-btn').addEventListener('click', () => {
      this.showView('inicio');
    });
    
    createBtn.addEventListener('click', () => {
      if (!GameController.playersDB) {
        alert('Los datos de jugadores aún se están cargando. Por favor espera un momento.');
        return;
      }
      
      const budget = Math.max(1, parseInt(document.getElementById('budget-input').value) || 100);
      const numTeams = Math.min(8, Math.max(2, parseInt(document.getElementById('teams-input').value) || 4));
      GameController.settings.budget = budget;
      GameController.settings.numTeams = numTeams;
      GameController.setupGame();
      this.showView('auction');
    });
  },
  
  // Vista de Subasta
  renderAuctionView() {
    this.container.innerHTML = `
      <div class="screen" id="auction-screen">
        <header>
          <div class="header-content">
            <h2 id="phase-title">SUBASTA EN CURSO</h2>
            <div id="budget-display">
              <span class="budget-label">PRESUPUESTO</span>
              <span id="active-budget" class="budget-value">0</span>
            </div>
          </div>
        </header>

        <main>
          <section id="auction-area">
            <div id="player-card">
              <div id="player-emoji" class="emoji">⚽️</div>
              <div class="player-info">
                <div class="info-row">
                  <span class="info-label">CALIDAD</span>
                  <span id="player-quality" class="info-value">-</span>
                </div>
                <div class="info-row">
                  <span class="info-label">PRECIO BASE</span>
                  <span id="base-price" class="info-value">0M</span>
                </div>
              </div>
              <div id="current-bid" style="display:none;">0M</div>
              <div id="current-winner" style="display:none;">-</div>
              
              <div id="manual-assignment" class="manual">
                <div class="amount-control">
                  <label class="control-label">MONTO PAGADO</label>
                  <div class="amount-selector">
                    <button id="decrease-amount" class="amount-btn">◀</button>
                    <span id="paid-amount-display" class="amount-display">--</span>
                    <button id="increase-amount" class="amount-btn">▶</button>
                  </div>
                </div>
                <div class="team-selector">
                  <label class="control-label">EQUIPO</label>
                  <select id="paid-team">
                    <option value="">-- Seleccionar --</option>
                  </select>
                </div>
                <div class="manual-actions">
                  <button id="assign-btn" class="btn-assign">Asignar</button>
                  <button id="skip-btn" class="btn-skip">Saltar</button>
                </div>
                <div id="assign-msg"></div>
              </div>
            </div>
            <div id="auction-controls">
              <button id="next-auction-btn" class="btn-next">SIGUIENTE JUGADOR</button>
            </div>
          </section>

          <aside id="sidebar">
            <h3 class="sidebar-title">EQUIPOS</h3>
            <div id="teams-list"></div>
          </aside>
        </main>
      </div>
    `;
    
    // Asignar eventos
    document.getElementById('next-auction-btn').addEventListener('click', () => {
      GameController.runNextAuction();
    });
    
    // Variables para almacenar el monto actual y mínimo (en millones)
    GameController.currentAmountInMillions = 0;
    GameController.minAmountInMillions = 0;
    const paidAmountDisplay = document.getElementById('paid-amount-display');
    
    // Función para actualizar el display
    GameController.updateAmountDisplay = (amountInMillions) => {
      GameController.currentAmountInMillions = amountInMillions;
      if(paidAmountDisplay) {
        paidAmountDisplay.textContent = `${amountInMillions}M`;
      }
    };
    
    // Botones para aumentar/disminuir monto
    document.getElementById('increase-amount').addEventListener('click', () => {
      GameController.updateAmountDisplay(GameController.currentAmountInMillions + 5);
    });
    
    document.getElementById('decrease-amount').addEventListener('click', () => {
      const newAmount = GameController.currentAmountInMillions - 5;
      GameController.updateAmountDisplay(Math.max(GameController.minAmountInMillions, newAmount));
    });
    
    document.getElementById('assign-btn').addEventListener('click', () => {
      GameController.assignCurrentPlayer(GameController.currentAmountInMillions);
    });
    
    document.getElementById('skip-btn').addEventListener('click', () => {
      GameController.skipCurrentPlayer();
      // El monto se actualiza automáticamente en showNextPlayerPreview()
    });
    
    // Renderizar datos iniciales
    GameController.renderTeams();
    GameController.renderPositionsOrder();
    GameController.showNextPlayerPreview();
  },
  
  // Vista Final
  renderFinalView() {
    this.container.innerHTML = `
      <div class="screen" id="final-screen">
        <h2>EQUIPOS FINALES</h2>
        <div id="final-teams"></div>
        <div style="margin-top:18px">
          <button id="restart-btn">Volver al inicio</button>
        </div>
      </div>
    `;
    
    // Asignar evento
    document.getElementById('restart-btn').addEventListener('click', () => {
      GameController.reset();
      this.showView('inicio');
    });
    
    // Mostrar equipos finales
    GameController.showFinalTeams();
  }
};

// ========== CONTROLADOR DEL JUEGO ==========

const GameController = {
  playersDB: null,
  teams: [],
  settings: { budget: 100, numTeams: 4 },
  positionOrder: [
    {key:'goalkeepers', count:1, label:'Arqueros'},
    {key:'right_backs', count:1, label:'Lateral derecho'},
    {key:'center_backs', count:2, label:'Pareja de centrales'},
    {key:'left_backs', count:1, label:'Lateral izquierdo'},
    {key:'midfielders', count:3, label:'Mediocampistas (3)'},
    {key:'right_wingers', count:1, label:'Extremo derecho'},
    {key:'strikers', count:1, label:'Delantero centro'},
    {key:'left_wingers', count:1, label:'Extremo izquierdo'}
  ],
  pool: {},
  auctionQueue: [],
  currentTaskIndex: 0,
  currentDisplayedPlayer: null,
  currentDisplayedPlayerRemoved: false,
  
  setupGame() {
    if (!this.playersDB) {
      console.error('No se pueden cargar los jugadores: playersDB no está disponible');
      return;
    }
    
    this.teams = [];
    for(let i=0; i<this.settings.numTeams; i++) {
      this.teams.push({
        id: i+1,
        name: `Equipo ${i+1}`,
        budget: this.settings.budget * 1000000,
        roster: []
      });
    }
    this.pool = JSON.parse(JSON.stringify(this.playersDB));
    this.buildAuctionQueue();
    this.currentTaskIndex = 0;
  },
  
  buildAuctionQueue() {
    this.auctionQueue = [];
    for(const pos of this.positionOrder) {
      for(let slot=0; slot<pos.count; slot++) {
        for(let t=0; t<this.settings.numTeams; t++) {
          this.auctionQueue.push({key: pos.key, label: pos.label});
        }
      }
    }
  },
  
  renderTeams() {
    const teamsList = document.getElementById('teams-list');
    const activeBudgetSpan = document.getElementById('active-budget');
    
    if(!teamsList) return;
    
    teamsList.innerHTML = '';
    if(activeBudgetSpan) {
      activeBudgetSpan.textContent = this.teams.map(t => 
        `${t.name}: ${this.formatMoney(t.budget)}`
      ).join(' | ');
    }
    
    this.teams.forEach(t => {
      const div = document.createElement('div');
      div.className = 'team';
      div.innerHTML = `
        <div class="team-info">
          <div class="team-name-budget">
            <strong class="team-name">${t.name}</strong>
            <span class="team-budget">${this.formatMoney(t.budget)}</span>
          </div>
          <div class="roster" id="roster-${t.id}"></div>
        </div>
      `;
      teamsList.appendChild(div);
      this.renderRoster(t);
    });
    
    // Actualizar opciones del select
    const paidTeamSelect = document.getElementById('paid-team');
    if(paidTeamSelect) {
      paidTeamSelect.innerHTML = '<option value="">-- seleccionar --</option>' + 
        this.teams.map((t, idx) => 
          `<option value="${idx}">${t.name} (presupuesto: ${this.formatMoney(t.budget)})</option>`
        ).join('');
    }
  },
  
  renderRoster(team) {
    const node = document.getElementById(`roster-${team.id}`);
    if(!node) return;
    node.innerHTML = team.roster.map(p => 
      `<div class="item">${p.emoji} ${p.name || ''} <small>${this.formatMoney(p.price)||''}</small></div>`
    ).join('');
  },
  
  renderPositionsOrder() {
    const positionsOrderDiv = document.getElementById('positions-order');
    if(!positionsOrderDiv) return;
    positionsOrderDiv.innerHTML = this.positionOrder.map(p => 
      `- ${p.label} x${p.count}`
    ).join('<br>');
  },
  
  showNextPlayerPreview() {
    const next = this.peekNextPlayer();
    const task = this.auctionQueue[this.currentTaskIndex];
    
    if(!next) {
      ViewManager.showView('final');
      return;
    }
    
    const playerEmoji = document.getElementById('player-emoji');
    const playerQuality = document.getElementById('player-quality');
    const basePriceDiv = document.getElementById('base-price');
    const currentBidDiv = document.getElementById('current-bid');
    const currentWinnerDiv = document.getElementById('current-winner');
    const paidTeamSelect = document.getElementById('paid-team');
    const assignMsgDiv = document.getElementById('assign-msg');
    
    if(playerEmoji) playerEmoji.innerHTML = next.emoji;
    
    const marketVal = this.getMarketValue(next);
    if(playerQuality) {
      playerQuality.textContent = `Posición: ${task?task.label:'-'} — Calidad: ${next.quality}`;
    }
    if(basePriceDiv) {
      basePriceDiv.textContent = `Valor mercado: ${this.formatMoney(marketVal)} — Precio mínimo: ${this.formatMoney(next.basePrice)}`;
    }
    if(currentBidDiv) currentBidDiv.textContent = 'Oferta actual: -';
    if(currentWinnerDiv) currentWinnerDiv.textContent = 'Lider: -';
    if(paidTeamSelect) paidTeamSelect.value = '';
    if(assignMsgDiv) assignMsgDiv.textContent = '';
    
    // Establecer el monto mínimo y actual basado en el precio base (redondeado a múltiplo de 5M hacia arriba)
    const basePriceInMillions = Math.ceil(next.basePrice / 1000000);
    const roundedToFive = Math.ceil(basePriceInMillions / 5) * 5;
    this.minAmountInMillions = roundedToFive;
    if(this.updateAmountDisplay) {
      this.updateAmountDisplay(roundedToFive);
    }
    
    this.currentDisplayedPlayer = next;
    this.currentDisplayedPlayerRemoved = false;
  },
  
  peekNextPlayer() {
    if(this.currentTaskIndex >= this.auctionQueue.length) return null;
    const posKey = this.auctionQueue[this.currentTaskIndex].key;
    const arr = this.pool[posKey];
    if(!arr || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  },
  
  drawNextPlayer() {
    if(this.currentTaskIndex >= this.auctionQueue.length) return null;
    const posKey = this.auctionQueue[this.currentTaskIndex].key;
    const arr = this.pool[posKey];
    if(!arr || arr.length === 0) return null;
    const idx = Math.floor(Math.random() * arr.length);
    const player = arr.splice(idx, 1)[0];
    return player;
  },
  
  runNextAuction() {
    if(this.currentTaskIndex >= this.auctionQueue.length) return;
    
    const nextAuctionBtn = document.getElementById('next-auction-btn');
    if(nextAuctionBtn) nextAuctionBtn.disabled = true;
    
    const player = this.drawNextPlayer();
    if(!player) {
      if(nextAuctionBtn) nextAuctionBtn.disabled = false;
      this.showNextPlayerPreview();
      return;
    }
    
    // Remover jugador previamente mostrado si es necesario
    if(this.currentDisplayedPlayer && !this.currentDisplayedPlayerRemoved) {
      const posKey = this.auctionQueue[this.currentTaskIndex].key;
      const arr = this.pool[posKey] || [];
      const removeIdx = arr.findIndex(p => 
        (p.id && this.currentDisplayedPlayer.id && p.id === this.currentDisplayedPlayer.id) || 
        (p.emoji === this.currentDisplayedPlayer.emoji && p.name === this.currentDisplayedPlayer.name)
      );
      if(removeIdx !== -1) {
        arr.splice(removeIdx, 1);
        this.currentDisplayedPlayerRemoved = true;
      }
    }
    
    this.currentDisplayedPlayer = player;
    
    const playerEmoji = document.getElementById('player-emoji');
    const playerQuality = document.getElementById('player-quality');
    const basePriceDiv = document.getElementById('base-price');
    const currentBidDiv = document.getElementById('current-bid');
    const currentWinnerDiv = document.getElementById('current-winner');
    const paidTeamSelect = document.getElementById('paid-team');
    const assignMsgDiv = document.getElementById('assign-msg');
    
    if(playerEmoji) playerEmoji.innerHTML = player.emoji;
    
    const marketVal = this.getMarketValue(player);
    if(playerQuality) playerQuality.textContent = `Calidad: ${player.quality}`;
    if(basePriceDiv) {
      basePriceDiv.textContent = `Valor mercado: ${this.formatMoney(marketVal)} — Precio mínimo: ${this.formatMoney(player.basePrice)}`;
    }
    if(currentBidDiv) currentBidDiv.textContent = `Precio mínimo: ${this.formatMoney(player.basePrice)}`;
    if(currentWinnerDiv) currentWinnerDiv.textContent = 'Asignar manualmente';
    if(assignMsgDiv) assignMsgDiv.textContent = '';
    if(paidTeamSelect) paidTeamSelect.value = '';
    
    // Establecer el monto mínimo y actual basado en el precio base (redondeado a múltiplo de 5M hacia arriba)
    const basePriceInMillions = Math.ceil(player.basePrice / 1000000);
    const roundedToFive = Math.ceil(basePriceInMillions / 5) * 5;
    this.minAmountInMillions = roundedToFive;
    if(this.updateAmountDisplay) {
      this.updateAmountDisplay(roundedToFive);
    }
  },
  
  assignCurrentPlayer(amountInMillions) {
    const paidTeamSelect = document.getElementById('paid-team');
    const assignMsgDiv = document.getElementById('assign-msg');
    
    if(!this.currentDisplayedPlayer) {
      if(assignMsgDiv) assignMsgDiv.textContent = 'No hay jugador seleccionado.';
      return;
    }
    
    // Convertir de millones a valor completo
    const amount = (amountInMillions || 0) * 1000000;
    const teamIdx = paidTeamSelect.value === '' ? null : Number(paidTeamSelect.value);
    
    if(teamIdx === null) {
      if(assignMsgDiv) assignMsgDiv.textContent = 'Selecciona el equipo que pagó.';
      return;
    }
    
    if(isNaN(amount) || amount < this.currentDisplayedPlayer.basePrice) {
      if(assignMsgDiv) {
        assignMsgDiv.textContent = `El monto debe ser al menos ${this.formatMoney(this.currentDisplayedPlayer.basePrice)}.`;
      }
      return;
    }
    
    const team = this.teams[teamIdx];
    if(!team) {
      if(assignMsgDiv) assignMsgDiv.textContent = 'Equipo inválido.';
      return;
    }
    
    if(amount > team.budget) {
      if(assignMsgDiv) assignMsgDiv.textContent = 'El equipo no tiene suficiente presupuesto.';
      return;
    }
    
    // Verificar límite de posición
    const positionKey = this.auctionQueue[this.currentTaskIndex].key;
    const currentCount = this.countTeamPosition(team, positionKey);
    const maxAllowed = this.getPositionLimit(positionKey);
    
    if(currentCount >= maxAllowed) {
      if(assignMsgDiv) {
        assignMsgDiv.textContent = `${team.name} ya tiene el máximo de jugadores en esta posición (${maxAllowed}).`;
      }
      return;
    }
    
    // Remover del pool si aún no se ha removido
    if(!this.currentDisplayedPlayerRemoved) {
      const posKey = this.auctionQueue[this.currentTaskIndex].key;
      const arr = this.pool[posKey] || [];
      const removeIdx = arr.findIndex(p => 
        (p.id && this.currentDisplayedPlayer.id && p.id === this.currentDisplayedPlayer.id) || 
        (p.emoji === this.currentDisplayedPlayer.emoji && p.name === this.currentDisplayedPlayer.name)
      );
      if(removeIdx !== -1) {
        arr.splice(removeIdx, 1);
      }
      this.currentDisplayedPlayerRemoved = true;
    }
    
    // Asignar jugador al equipo
    const posLabel = this.auctionQueue[this.currentTaskIndex].label;
    team.roster.push({
      emoji: this.currentDisplayedPlayer.emoji,
      name: this.currentDisplayedPlayer.name,
      price: amount,
      position: posLabel
    });
    team.budget -= amount;
    
    this.renderTeams();
    this.currentDisplayedPlayer = null;
    
    // Avanzar
    this.currentTaskIndex++;
    this.showNextPlayerPreview();
    
    const nextAuctionBtn = document.getElementById('next-auction-btn');
    if(nextAuctionBtn) nextAuctionBtn.disabled = false;
  },
  
  skipCurrentPlayer() {
    this.currentDisplayedPlayer = null;
    this.currentTaskIndex++;
    this.showNextPlayerPreview();
    
    const nextAuctionBtn = document.getElementById('next-auction-btn');
    if(nextAuctionBtn) nextAuctionBtn.disabled = false;
  },
  
  showFinalTeams() {
    const finalTeamsDiv = document.getElementById('final-teams');
    if(!finalTeamsDiv) return;
    
    finalTeamsDiv.innerHTML = '';
    this.teams.forEach(t => {
      const div = document.createElement('div');
      div.innerHTML = `
        <strong>${t.name} - presupuesto restante: ${this.formatMoney(t.budget)}</strong>
        <div class="roster">
          ${t.roster.map(r => 
            `<div class="item">${r.emoji} ${r.name || ''} <small>${this.formatMoney(r.price)}</small></div>`
          ).join('')}
        </div>
      `;
      finalTeamsDiv.appendChild(div);
    });
  },
  
  reset() {
    this.teams = [];
    this.auctionQueue = [];
    this.currentTaskIndex = 0;
    this.pool = {};
    this.currentDisplayedPlayer = null;
    this.currentDisplayedPlayerRemoved = false;
  },
  
  // Obtener el límite de jugadores para una posición
  getPositionLimit(positionKey) {
    const position = this.positionOrder.find(p => p.key === positionKey);
    return position ? position.count : 0;
  },
  
  // Contar cuántos jugadores de una posición tiene un equipo
  countTeamPosition(team, positionKey) {
    // Mapeo de labels a keys para comparar
    const positionLabels = {
      'goalkeepers': 'Arqueros',
      'right_backs': 'Lateral derecho',
      'center_backs': 'Pareja de centrales',
      'left_backs': 'Lateral izquierdo',
      'midfielders': 'Mediocampistas (3)',
      'right_wingers': 'Extremo derecho',
      'strikers': 'Delantero centro',
      'left_wingers': 'Extremo izquierdo'
    };
    
    const targetLabel = positionLabels[positionKey];
    if (!targetLabel) return 0;
    
    return team.roster.filter(p => p.position === targetLabel).length;
  },
  
  // Utilidades
  formatMoney(n) {
    if(!n && n !== 0) return '-';
    const abs = Math.abs(n);
    if(abs >= 1_000_000) return `€${(n/1_000_000).toFixed(1)}M`;
    if(abs >= 1_000) return `€${Math.round(n/1000)}k`;
    return `€${n}`;
  },
  
  getMarketValue(player) {
    if(player && typeof player.tmValue === 'number') return player.tmValue;
    if(player && typeof player.basePrice === 'number') return player.basePrice;
    return 0;
  },
  
  normalizePlayers(json) {
    json = this.fixEmojis(json);
    for(const key of Object.keys(json)) {
      const arr = json[key];
      if(!Array.isArray(arr)) continue;
      for(const p of arr) {
        if(typeof p.basePrice === 'number' && p.basePrice < 10000) {
          p.basePrice = p.basePrice * 1000;
        }
        if(typeof p.tmValue === 'number' && p.tmValue < 10000) {
          p.tmValue = p.tmValue * 1000;
        }
      }
    }
    json = this.sanitizePlayers(json);
    // DESACTIVADO: applyEmojiHeuristics sobrescribe los emojis del JSON
    // json = this.applyEmojiHeuristics(json);
    return json;
  },
  
  fixEmojis(db) {
    const modifiers = ['🏻','🏼','🏽','🏾','🏿'];
    for(const key of Object.keys(db)) {
      const arr = db[key];
      if(!Array.isArray(arr)) continue;
      for(const p of arr) {
        if(!p || typeof p.emoji !== 'string' || p.emoji.length === 0) continue;
        const first = p.emoji[0];
        if(modifiers.includes(first)) {
          p.emoji = '🧑' + first + p.emoji.slice(1);
        }
        
        // Separar emojis compuestos: usar spread operator para obtener array de caracteres Unicode
        // y luego filtrar para obtener solo los emojis completos
        const chars = [...p.emoji];
        
        // Filtrar caracteres que son modificadores o variaciones de selector
        const emojiChars = [];
        for(let i = 0; i < chars.length; i++) {
          const char = chars[i];
          const code = char.codePointAt(0);
          
          // Verificar si es un emoji principal (no modificador)
          // Rangos principales de emojis Unicode
          if(
            (code >= 0x1F300 && code <= 0x1F9FF) || // Emojis varios
            (code >= 0x2600 && code <= 0x26FF) ||   // Símbolos varios
            (code >= 0x2700 && code <= 0x27BF) ||   // Dingbats
            (code >= 0xFE00 && code <= 0xFE0F)      // Selectores de variación
          ) {
            emojiChars.push(char);
            // Si el siguiente es un selector de variación, incluirlo
            if(i + 1 < chars.length) {
              const nextCode = chars[i + 1].codePointAt(0);
              if(nextCode >= 0xFE00 && nextCode <= 0xFE0F) {
                emojiChars.push(chars[i + 1]);
                i++; // Saltar el siguiente
              }
            }
          }
        }
        
        // Si encontramos múltiples emojis, separarlos con espacio
        if(emojiChars.length >= 2) {
          // Dividir en grupos de 1-2 caracteres (emoji + posible variación)
          const emojis = [];
          for(let i = 0; i < emojiChars.length; i++) {
            emojis.push(emojiChars[i]);
          }
          p.emoji = emojis.join(' ');
        }
      }
    }
    return db;
  },
  
  sanitizePlayers(db) {
    const blacklist = new Set(['Adrian','Santiago','Gonzalo','Roberto','Nestea','Sergio B','Fabinho RB','Frederico','Alan','Gorka','Bebé','Ross Barkley MF','Ross Barkley','Victor','Gino','Mauro','Nelson']);
    const legends = [
      {name:'Pelé',emoji:'👑',quality:'A',basePrice:2000000},
      {name:'Diego Maradona',emoji:'🐐',quality:'A',basePrice:1800000},
      {name:'Zinedine Zidane',emoji:'🎩',quality:'A',basePrice:1500000},
      {name:'Ronaldo Nazário',emoji:'🚀',quality:'A',basePrice:1600000},
      {name:'Ronaldinho',emoji:'🪄',quality:'A',basePrice:1400000},
      {name:'Johan Cruyff',emoji:'⚽️',quality:'A',basePrice:1300000},
      {name:'Franz Beckenbauer',emoji:'🛡️',quality:'A',basePrice:1200000},
      {name:'Paolo Maldini',emoji:'🛡️',quality:'A',basePrice:1200000},
      {name:'Roberto Carlos',emoji:'⚡️',quality:'A',basePrice:1100000},
      {name:'Cafu',emoji:'➡️',quality:'A',basePrice:1100000},
      {name:'Xavi',emoji:'🎯',quality:'A',basePrice:1000000},
      {name:'Andrés Iniesta',emoji:'🎯',quality:'A',basePrice:1000000},
      {name:'David Beckham',emoji:'🎯',quality:'A',basePrice:950000},
      {name:'Thierry Henry',emoji:'🎯',quality:'A',basePrice:1300000},
      {name:'Rivaldo',emoji:'🪄',quality:'A',basePrice:1100000},
      {name:'Romário',emoji:'🔥',quality:'A',basePrice:1050000},
      {name:'Eusebio',emoji:'⭐',quality:'A',basePrice:900000},
      {name:'Gerd Müller',emoji:'🎯',quality:'A',basePrice:1150000},
      {name:'George Best',emoji:'✨',quality:'A',basePrice:950000},
      {name:'Roberto Baggio',emoji:'🎩',quality:'A',basePrice:920000}
    ];
    
    let legendIdx = 0;
    for(const key of Object.keys(db)) {
      const arr = db[key];
      if(!Array.isArray(arr)) continue;
      for(let i=0; i<arr.length; i++) {
        const p = arr[i];
        if(!p || !p.name) continue;
        if(blacklist.has(p.name)) {
          const L = legends[legendIdx % legends.length];
          arr[i] = { id: p.id, emoji: L.emoji, name: L.name, quality: L.quality, basePrice: L.basePrice };
          legendIdx++;
        }
      }
    }
    return db;
  },
  
  applyEmojiHeuristics(db) {
    const special = [
      {match:/messi/i, emoji:'🐐'},
      {match:/cristiano|ronaldo/i, emoji:'🐞'},
      {match:/benzema/i, emoji:'🐱'},
      {match:/mbapp(e|é)/i, emoji:'⚡️'},
      {match:/haaland/i, emoji:'🚀⚡️'},
      {match:/kane/i, emoji:'🎯🥇'},
      {match:/lewandowski/i, emoji:'🎯💥'},
      {match:/salah/i, emoji:'⚡️🐪'},
      {match:/neymar/i, emoji:'🪄✨'},
      {match:/pedri/i, emoji:'👓'},
      {match:/de bruyne|debruyne/i, emoji:'🎯🧠'},
      {match:/modri[cć]|luka modri/i, emoji:'🎩🧭'},
      {match:/kroos/i, emoji:'🧠🎛️'},
      {match:/xavi/i, emoji:'🎯🎓'},
      {match:/iniesta/i, emoji:'🎯🪄'},
      {match:/bruno fernandes|bruno/i, emoji:'🔥🪄'},
      {match:/kimpembe|marquinhos|maldini|van dijk|ramos|chiellini|mats hummels|paolo maldini/i, emoji:'🛡️'},
      {match:/roberto carlos/i, emoji:'⬅️⚡️'},
      {match:/trent|alexander-arnold/i, emoji:'🎛️🎯'},
      {match:/hakimi/i, emoji:'⚡️'},
      {match:/walker/i, emoji:'🏃‍♂️'},
      {match:/ter stegen|donnarumma|oblak|buffon|neuer|casillas|van der sar/i, emoji:'🧤'},
      {match:/ronaldinho|ronaldo nazário|pele|maradona|cruyff/i, emoji:'👑'}
    ];
    
    const positionMap = {
      goalkeepers: p => p.emoji = '🧤',
      center_backs: p => p.emoji = '🛡️',
      right_backs: p => p.emoji = '➡️',
      left_backs: p => p.emoji = '⬅️',
      midfielders: p => p.emoji = '🎯',
      right_wingers: p => p.emoji = '➡️🔥',
      left_wingers: p => p.emoji = '⬅️🔥',
      strikers: p => p.emoji = '🎯⚽️'
    };
    
    for(const key of Object.keys(db)) {
      const arr = db[key];
      if(!Array.isArray(arr)) continue;
      for(const p of arr) {
        let applied = false;
        for(const s of special) {
          try {
            if(s.match.test(p.name)) {
              p.emoji = s.emoji;
              applied = true;
              break;
            }
          } catch(e) { }
        }
        if(applied) continue;
        if(positionMap[key]) {
          positionMap[key](p);
        }
      }
    }
    return db;
  }
};

// ========== INICIALIZACIÓN ==========

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar el gestor de vistas
  ViewManager.init();
  
  // Cargar base de datos de jugadores
  fetch('players.json')
    .then(r => r.json())
    .then(json => {
      GameController.playersDB = GameController.normalizePlayers(json);
      // Mostrar la vista inicial
      ViewManager.showView('inicio');
    })
    .catch(err => {
      console.error('Error cargando jugadores:', err);
      ViewManager.showView('inicio');
    });
});
