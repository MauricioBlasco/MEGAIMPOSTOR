// Estado del juego
let currentSaveSlot = null; // Slot de partida actual (1, 2 o 3)
const SECRET_CODE_VALUE = 'MEW67';
const SECRET_UNLOCK_STORAGE_KEY = 'megapokemon_secret_unlocked';

function isSecretUnlockedGlobally() {
    return localStorage.getItem(SECRET_UNLOCK_STORAGE_KEY) === 'true';
}

const gameState = {
    currentZone: 'pallet-town',
    playerName: 'Entrenador',
    rivalName: 'Rival',
    unlockedZones: ['pallet-town'],
    team: [], // Array de hasta 6 Pokémon
    pcStorage: [], // Almacenamiento ilimitado
    caughtPokemon: [], // Registro de Pokémon capturados para Pokédex
    activePokemonIndex: 0, // Índice del Pokémon activo en batalla
    inventory: {
        pokeball: 5,
        potion: 0,
        'super-potion': 0,
        'great-ball': 0,
        antidote: 0,
        'paralyz-heal': 0
    },
    money: 3000,
    progress: {
        sequenceStep: 0, // 0-1: salvajes, 2: entrenador, 3-5: salvajes, 6: entrenador, 7: zona completada
        currentTrainerIndex: 0,
        defeatedTrainers: [],
        storyFlags: {},
        fossils: []
    },
    inBattle: false,
    battleEnding: false,
    currentEnemy: null,
    currentTrainerBattle: null,
    bagContext: 'field',
    secrets: {
        exterminarEnabled: isSecretUnlockedGlobally(),
        starterLevel67: isSecretUnlockedGlobally()
    },
    audio: {
        music: null,
        soundEnabled: true,
        musicVolume: 0.3,
        sfxVolume: 0.5
    }
};

// Sistema de Audio
const AudioSystem = {
    tracks: {},
    currentMusicKey: null,
    healBlockingOverworld: false,
    evolutionSequenceTimeoutId: null,
    interruptedMusicState: null,
    shortTrackTimeoutId: null,
    shortTrackMetadataHandler: null,

    createTrack(fileName, { loop = false } = {}) {
        const src = encodeURI(`MUSICA/${fileName}`);
        const audio = new Audio(src);
        audio.loop = loop;
        audio.preload = 'auto';
        audio.volume = gameState.audio.musicVolume;
        return audio;
    },

    isShortTrackKey(key) {
        return key === 'healing' || key === 'evolution' || key === 'evolved';
    },

    clearShortTrackTimers() {
        if (this.shortTrackTimeoutId !== null) {
            clearTimeout(this.shortTrackTimeoutId);
            this.shortTrackTimeoutId = null;
        }

        if (this.shortTrackMetadataHandler && this.currentMusicKey && this.tracks[this.currentMusicKey]) {
            this.tracks[this.currentMusicKey].removeEventListener('loadedmetadata', this.shortTrackMetadataHandler);
            this.shortTrackMetadataHandler = null;
        }
    },

    isTownZone() {
        const zone = ZONES_DATA[gameState.currentZone];
        if (!zone) return false;

        const key = String(gameState.currentZone || '').toLowerCase();
        const name = String(zone.name || '').toLowerCase();

        return key.includes('town') || key.includes('city') || name.includes('pueblo') || name.includes('ciudad');
    },

    determineOverworldTrackKey() {
        const zoneKey = String(gameState.currentZone || '').toLowerCase();
        return OVERWORLD_MUSIC_BY_ZONE[zoneKey] || 'main-theme';
    },

    stopTrack(key) {
        const track = this.tracks[key];
        if (!track) return;
        track.pause();
        track.currentTime = 0;
    },

    stopAllMusic() {
        this.clearShortTrackTimers();
        Object.keys(this.tracks).forEach(key => this.stopTrack(key));
        this.currentMusicKey = null;
        this.interruptedMusicState = null;
    },

    playTrack(key, { restart = true } = {}) {
        if (!gameState.audio.soundEnabled) return;

        const track = this.tracks[key];
        if (!track) {
            console.warn(`Pista no encontrada: ${key}`);
            return;
        }

        if (!this.isShortTrackKey(key)) {
            this.interruptedMusicState = null;
        }

        if (this.currentMusicKey === key) {
            if (restart) {
                track.currentTime = 0;
            }
            this.currentMusicKey = key;
            track.play().catch(() => console.log('Autoplay bloqueado, interactúa para activar música'));
            return;
        }

        if (this.currentMusicKey && this.currentMusicKey !== key) {
            const current = this.tracks[this.currentMusicKey];
            if (current) current.pause();
        }

        if (restart) {
            track.currentTime = 0;
        }

        this.currentMusicKey = key;
        track.play().catch(() => console.log('Autoplay bloqueado, interactúa para activar música'));
    },

    resumeInterruptedLongTrack() {
        if (!gameState.audio.soundEnabled) return;

        const state = this.interruptedMusicState;
        this.interruptedMusicState = null;

        const desiredOverworldKey = this.determineOverworldTrackKey();
        const shouldUseCurrentZoneTrack = !gameState.inBattle && !gameState.battleEnding;

        if (state && this.tracks[state.key]) {
            if (shouldUseCurrentZoneTrack && state.key !== desiredOverworldKey) {
                this.playTrack(desiredOverworldKey, { restart: false });
                return;
            }

            const track = this.tracks[state.key];
            if (typeof state.time === 'number' && Number.isFinite(state.time)) {
                track.currentTime = state.time;
            }
            this.currentMusicKey = state.key;
            track.play().catch(() => console.log('Autoplay bloqueado, interactúa para activar música'));
            return;
        }

        this.playOverworldMusicForCurrentZone();
    },

    playShortInterrupt(trackKey, { cutBeforeEndMs = 0, onFinish = null } = {}) {
        if (!gameState.audio.soundEnabled) return;

        const shortTrack = this.tracks[trackKey];
        if (!shortTrack) return;

        this.clearShortTrackTimers();

        if (this.currentMusicKey && !this.isShortTrackKey(this.currentMusicKey) && this.tracks[this.currentMusicKey]) {
            this.interruptedMusicState = {
                key: this.currentMusicKey,
                time: this.tracks[this.currentMusicKey].currentTime || 0
            };
        }

        if (this.currentMusicKey && this.tracks[this.currentMusicKey]) {
            this.tracks[this.currentMusicKey].pause();
        }

        const finalize = () => {
            this.clearShortTrackTimers();
            shortTrack.onended = null;
            if (onFinish) {
                onFinish();
            } else {
                this.resumeInterruptedLongTrack();
            }
        };

        shortTrack.onended = () => finalize();

        if (cutBeforeEndMs > 0) {
            const scheduleCut = () => {
                const durationMs = Math.max(0, (shortTrack.duration || 0) * 1000 - cutBeforeEndMs);
                this.shortTrackTimeoutId = setTimeout(() => {
                    shortTrack.pause();
                    finalize();
                }, durationMs);
            };

            if (Number.isFinite(shortTrack.duration) && shortTrack.duration > 0) {
                scheduleCut();
            } else {
                this.shortTrackMetadataHandler = () => {
                    shortTrack.removeEventListener('loadedmetadata', this.shortTrackMetadataHandler);
                    this.shortTrackMetadataHandler = null;
                    scheduleCut();
                };
                shortTrack.addEventListener('loadedmetadata', this.shortTrackMetadataHandler);
            }
        }

        shortTrack.currentTime = 0;
        this.currentMusicKey = trackKey;
        shortTrack.play().catch(() => console.log('Autoplay bloqueado, interactúa para activar música'));
    },
    
    // Inicializar sistema de audio
    init() {
        this.tracks = {
            opening: this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 01 - Opening.mp3', { loop: true }),
            'main-theme': this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 02 - Tema Principal.mp3', { loop: true }),
            'rival-battle': this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 08 - Rival Azul.mp3', { loop: true }),
            'battle-normal': this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 09 - Combate_ Batalla Normal.mp3', { loop: true }),
            'city-theme': this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 13 - Ciudad Verde_Plateada_Azafrn __ Isla Prima_Secunda_Tera.mp3', { loop: true }),
            healing: this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 21 - Curacin de Pokmon.mp3', { loop: false }),
            'gym-battle': this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 25 - Combate_ Vs Lder de Gimnasio_Alto Mando.mp3', { loop: true }),
            evolution: this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 28 - Evolucin Pokmon_Zona Safari.mp3', { loop: true }),
            evolved: this.createTrack('Pokmon Rojo Fuego_Verde Hoja OST - 29 - Pokmon Evolucionado.mp3', { loop: false })
        };

        Object.values(this.tracks).forEach(track => {
            try {
                track.load();
            } catch (e) {
                console.log('No se pudo precargar pista:', e);
            }
        });
    },

    playOpeningMusic({ restart = true } = {}) {
        this.playTrack('opening', { restart });
    },

    playMainThemeMusic({ restart = true } = {}) {
        this.playTrack('main-theme', { restart });
    },

    playOverworldMusicForCurrentZone() {
        if (!gameState.audio.soundEnabled) return;
        if (gameState.inBattle || gameState.battleEnding || this.healBlockingOverworld) return;

        this.playTrack(this.determineOverworldTrackKey(), { restart: false });
    },

    playBackgroundMusic() {
        this.playOverworldMusicForCurrentZone();
    },

    // Reproducir música de batalla
    playBattleMusic() {
        this.playTrack('battle-normal');
    },

    playTrainerBattleMusic({ isGym = false, isRival = false } = {}) {
        if (isGym) {
            this.playTrack('gym-battle');
            return;
        }

        if (isRival) {
            this.playTrack('rival-battle');
            return;
        }

        this.playTrack('battle-normal');
    },

    playHealingMusicThenResume() {
        if (!gameState.audio.soundEnabled) return;

        this.healBlockingOverworld = true;
        this.playShortInterrupt('healing', {
            cutBeforeEndMs: 1500,
            onFinish: () => {
            this.healBlockingOverworld = false;
                this.resumeInterruptedLongTrack();
            }
        });
    },

    playEvolutionMusic() {
        if (!gameState.audio.soundEnabled) return;
        if (this.evolutionSequenceTimeoutId !== null) {
            clearTimeout(this.evolutionSequenceTimeoutId);
            this.evolutionSequenceTimeoutId = null;
        }

        this.playShortInterrupt('evolution', { onFinish: () => {} });

        this.evolutionSequenceTimeoutId = setTimeout(() => {
            if (this.currentMusicKey === 'evolution' && this.tracks.evolution) {
                this.tracks.evolution.pause();
            }
            this.playShortInterrupt('evolved');
            this.evolutionSequenceTimeoutId = null;
        }, EVOLUTION_ANIMATION_DURATION_MS);
    },

    playEvolvedMusic() {
        if (!gameState.audio.soundEnabled) return;
        if (this.evolutionSequenceTimeoutId !== null) {
            clearTimeout(this.evolutionSequenceTimeoutId);
            this.evolutionSequenceTimeoutId = null;
        }
        this.playShortInterrupt('evolved');
    },

    stopEvolutionSequenceAndResume() {
        if (this.evolutionSequenceTimeoutId !== null) {
            clearTimeout(this.evolutionSequenceTimeoutId);
            this.evolutionSequenceTimeoutId = null;
        }
        this.clearShortTrackTimers();
        if (this.currentMusicKey && this.tracks[this.currentMusicKey] && this.isShortTrackKey(this.currentMusicKey)) {
            this.tracks[this.currentMusicKey].pause();
        }
        this.resumeInterruptedLongTrack();
    },
    
    // Reproducir sonido de Pokémon
    playPokemonCry(pokemonId) {
        if (!gameState.audio.soundEnabled) return;
        
        try {
            const cry = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`);
            cry.volume = gameState.audio.sfxVolume;
            cry.play().catch(e => console.log('Error reproduciendo grito de Pokémon'));
        } catch (e) {
            console.log('Error con sonido de Pokémon:', e);
        }
    },
    
    // Efectos de sonido
    playSFX(type) {
        if (!gameState.audio.soundEnabled) return;
        
        const sfxUrls = {
            select: 'https://raw.githubusercontent.com/Alexays/Pokemon-Sounds-Data/master/sounds/menu/select.wav',
            click: 'https://raw.githubusercontent.com/Alexays/Pokemon-Sounds-Data/master/sounds/menu/click.wav',
            victory: 'https://raw.githubusercontent.com/Alexays/Pokemon-Sounds-Data/master/sounds/battle/victory.wav',
            heal: 'https://raw.githubusercontent.com/Alexays/Pokemon-Sounds-Data/master/sounds/menu/heal.wav',
            capture: 'https://raw.githubusercontent.com/Alexays/Pokemon-Sounds-Data/master/sounds/battle/capture.wav'
        };
        
        if (sfxUrls[type]) {
            try {
                const sfx = new Audio(sfxUrls[type]);
                sfx.volume = gameState.audio.sfxVolume;
                sfx.play().catch(e => console.log('Error reproduciendo SFX'));
            } catch (e) {
                console.log('Error con SFX:', e);
            }
        }
    },
    
    // Alternar sonido
    toggleSound() {
        gameState.audio.soundEnabled = !gameState.audio.soundEnabled;

        if (!gameState.audio.soundEnabled) {
            this.stopAllMusic();
        } else {
            if (modals.evolution && modals.evolution.classList.contains('active')) {
                this.playEvolutionMusic();
            } else if (gameState.inBattle && gameState.currentEnemy) {
                const isGymBattle = gameState.currentEnemy.battleType === 'gym';
                const isRivalBattle = isTrainerRivalBattle(gameState.currentEnemy);
                this.playTrainerBattleMusic({ isGym: isGymBattle, isRival: isRivalBattle });
            } else if (!currentSaveSlot) {
                this.playOpeningMusic();
            } else {
                this.playOverworldMusicForCurrentZone();
            }
        }

        return gameState.audio.soundEnabled;
    }
};

// Elementos del DOM (se inicializarán en init())
let screens = {};
let modals = {};
let currentInputResolver = null;
let currentChoiceResolver = null;
let introStep = 0;
let evolutionAnimationTimeoutId = null;
const EVOLUTION_ANIMATION_DURATION_MS = 13000;
let pendingEvolution = null;
let pendingBadgeReward = null;

const battleTurnState = {
    actionLocked: false,
    pendingEnemyTurnTimeoutId: null,
    forcedSwitch: false
};

const pokedexDescriptionCache = new Map();

const NICKNAME_REGEX = /^[\p{L}\p{N}]{1,10}$/u;

const BADGE_DEFINITIONS = [
    { key: 'Boulder', name: 'Roca', sprite: 'assets/badges/boulder.svg' },
    { key: 'Cascade', name: 'Cascada', sprite: 'assets/badges/cascade.svg' },
    { key: 'Thunder', name: 'Trueno', sprite: 'assets/badges/thunder.svg' },
    { key: 'Rainbow', name: 'Arcoíris', sprite: 'assets/badges/rainbow.svg' },
    { key: 'Soul', name: 'Alma', sprite: 'assets/badges/soul.svg' },
    { key: 'Marsh', name: 'Pantano', sprite: 'assets/badges/marsh.svg' },
    { key: 'Volcano', name: 'Volcán', sprite: 'assets/badges/volcano.svg' },
    { key: 'Earth', name: 'Tierra', sprite: 'assets/badges/earth.svg' }
];

const TRAINER_BADGE_REWARDS = {
    'brock-gym': 'Boulder',
    'misty-gym': 'Cascade'
};

const OVERWORLD_MUSIC_BY_ZONE = {
    'pallet-town': 'city-theme',
    'viridian-city': 'city-theme',
    'pewter-city': 'city-theme',
    'cerulean-city': 'city-theme',

    'route-1': 'main-theme',
    'route-2': 'main-theme',
    'route-3': 'main-theme',
    'route-4': 'main-theme',
    'route-24': 'main-theme',
    'route-25': 'main-theme',
    'viridian-forest': 'main-theme',
    'mt-moon': 'main-theme',
    'cerulean-gym': 'main-theme'
};

function isValidNickname(name) {
    return NICKNAME_REGEX.test(name || '');
}

function resetEvolutionAnimationState() {
    const evolutionPanel = document.querySelector('#evolution-modal .evolution-animation');
    if (!evolutionPanel) return;

    if (evolutionAnimationTimeoutId !== null) {
        clearTimeout(evolutionAnimationTimeoutId);
        evolutionAnimationTimeoutId = null;
    }

    evolutionPanel.classList.remove('animating', 'revealed');
}

function startEvolutionAnimation() {
    const evolutionPanel = document.querySelector('#evolution-modal .evolution-animation');
    if (!evolutionPanel) return;

    resetEvolutionAnimationState();

    void evolutionPanel.offsetWidth;
    evolutionPanel.classList.add('animating');

    evolutionAnimationTimeoutId = setTimeout(() => {
        evolutionPanel.classList.add('revealed');
        evolutionAnimationTimeoutId = null;
    }, EVOLUTION_ANIMATION_DURATION_MS);
}

function queuePendingEvolution(currentPokemonKey, targetPokemonKey) {
    pendingEvolution = { currentPokemonKey, targetPokemonKey };
}

function consumePendingEvolution() {
    if (!pendingEvolution) return;

    const activePokemon = getActivePokemon();
    const queuedEvolution = pendingEvolution;
    pendingEvolution = null;

    if (!activePokemon) return;
    if (activePokemon.key !== queuedEvolution.currentPokemonKey) return;

    evolvePokemon(queuedEvolution.targetPokemonKey);
}

function getBadgeDefinition(badgeKey) {
    return BADGE_DEFINITIONS.find(badge => badge.key === badgeKey) || null;
}

function queueBadgeReward(badgeKey) {
    const badge = getBadgeDefinition(badgeKey);
    if (!badge) return;
    pendingBadgeReward = badge;
}

function showBadgeRewardModal(badge) {
    if (!badge || !modals.badgeReward) return;

    const spriteEl = document.getElementById('badge-reward-sprite');
    const textEl = document.getElementById('badge-reward-text');

    if (spriteEl) spriteEl.src = badge.sprite;
    if (textEl) textEl.textContent = `HAS OBTENIDO LA MEDALLA ${badge.name.toUpperCase()}`;

    modals.badgeReward.classList.add('active');
}

function consumePendingBadgeReward() {
    if (!pendingBadgeReward) return;
    const badge = pendingBadgeReward;
    pendingBadgeReward = null;
    showBadgeRewardModal(badge);
}

function getPokemonDisplayName(pokemon) {
    if (!pokemon) return 'Pokémon';
    return pokemon.nickname || (pokemon.data ? pokemon.data.name : 'Pokémon');
}

function isTrainerRivalBattle(enemy = null) {
    if (!enemy || enemy.isWild) return false;

    const trainerId = String(enemy.trainerId || '').toLowerCase();
    const trainerName = String(enemy.trainerName || '').toLowerCase();
    const rivalName = String(gameState.rivalName || '').toLowerCase();

    return trainerId.includes('rival') || trainerName.includes('rival') || (rivalName && trainerName === rivalName);
}

function updateBadgesDisplay() {
    const badgesEl = document.getElementById('badges-display');
    if (!badgesEl) return;

    const ownedBadges = new Set(gameState.progress.badges || []);
    const totalBadges = BADGE_DEFINITIONS.length;

    const slotsHtml = BADGE_DEFINITIONS.map(badge => {
        const unlocked = ownedBadges.has(badge.key);
        return `
            <div class="badge-slot ${unlocked ? 'unlocked' : 'locked'}" title="${badge.name}">
                ${unlocked
                    ? `<img src="${badge.sprite}" alt="Insignia ${badge.name}">`
                    : '<span class="badge-lock">•</span>'}
            </div>
        `;
    }).join('');

    badgesEl.innerHTML = `
        <div class="badges-count">🏅 ${ownedBadges.size}/${totalBadges}</div>
        <div class="badges-grid">${slotsHtml}</div>
    `;
}

function openChoiceDialog({ title, message, confirmText = 'Aceptar', cancelText = 'Cancelar' }) {
    return new Promise(resolve => {
        const titleEl = document.getElementById('choice-title');
        const messageEl = document.getElementById('choice-message');
        const confirmBtn = document.getElementById('choice-confirm');
        const cancelBtn = document.getElementById('choice-cancel');

        titleEl.textContent = title;
        messageEl.textContent = message;
        confirmBtn.textContent = confirmText;
        cancelBtn.textContent = cancelText;

        currentChoiceResolver = resolve;
        modals.choice.classList.add('active');
    });
}

function closeChoiceDialog(result) {
    modals.choice.classList.remove('active');
    if (currentChoiceResolver) {
        currentChoiceResolver(result);
        currentChoiceResolver = null;
    }
}

function openInputDialog({
    title,
    message,
    placeholder = '',
    defaultValue = '',
    confirmText = 'Aceptar',
    cancelText = 'Cancelar',
    skipText = 'Omitir',
    allowEmpty = true,
    showSkip = true,
    validator = null,
    errorMessage = 'Entrada inválida.'
}) {
    return new Promise(resolve => {
        const titleEl = document.getElementById('input-title');
        const messageEl = document.getElementById('input-message');
        const inputEl = document.getElementById('input-field');
        const errorEl = document.getElementById('input-error');
        const confirmBtn = document.getElementById('input-confirm');
        const cancelBtn = document.getElementById('input-cancel');
        const skipBtn = document.getElementById('input-skip');

        titleEl.textContent = title;
        messageEl.textContent = message;
        inputEl.placeholder = placeholder;
        inputEl.value = defaultValue;
        errorEl.textContent = '';
        confirmBtn.textContent = confirmText;
        cancelBtn.textContent = cancelText;
        skipBtn.textContent = skipText;
        skipBtn.style.display = showSkip ? 'inline-block' : 'none';

        currentInputResolver = (payload) => {
            resolve(payload);
        };

        confirmBtn.onclick = () => {
            const value = inputEl.value.trim();

            if (!allowEmpty && !value) {
                errorEl.textContent = 'Este campo es obligatorio.';
                return;
            }

            if (value && validator && !validator(value)) {
                errorEl.textContent = errorMessage;
                return;
            }

            closeInputDialog({ action: 'confirm', value });
        };

        cancelBtn.onclick = () => closeInputDialog({ action: 'cancel', value: null });
        skipBtn.onclick = () => closeInputDialog({ action: 'skip', value: '' });

        modals.input.classList.add('active');
        setTimeout(() => inputEl.focus(), 20);
    });
}

function closeInputDialog(result) {
    modals.input.classList.remove('active');
    if (currentInputResolver) {
        currentInputResolver(result);
        currentInputResolver = null;
    }
}

async function requestPokemonNickname(defaultName, currentNickname = '') {
    const result = await openInputDialog({
        title: `Nombre de ${defaultName}`,
        message: 'Usa solo letras y números (máx. 10).',
        placeholder: defaultName,
        defaultValue: currentNickname,
        confirmText: 'Guardar',
        cancelText: 'Cancelar',
        skipText: 'Sin apodo',
        allowEmpty: true,
        showSkip: true,
        validator: isValidNickname,
        errorMessage: 'Nombre inválido. Solo letras y números, máximo 10.'
    });

    if (result.action === 'confirm') {
        return result.value || null;
    }

    if (result.action === 'skip') {
        return null;
    }

    return currentNickname || null;
}

function ensurePokemonBattleState(pokemon) {
    if (!pokemon) return;

    if (!pokemon.statStages) {
        pokemon.statStages = { attack: 0 };
    } else if (typeof pokemon.statStages.attack !== 'number') {
        pokemon.statStages.attack = 0;
    }

    if (!pokemon.statusEffects) {
        pokemon.statusEffects = { leechSeed: false, seededBy: null };
    } else {
        if (typeof pokemon.statusEffects.leechSeed !== 'boolean') pokemon.statusEffects.leechSeed = false;
        if (!pokemon.statusEffects.seededBy) pokemon.statusEffects.seededBy = null;
    }
}

function clearPokemonBattleEffects(pokemon) {
    if (!pokemon) return;
    ensurePokemonBattleState(pokemon);
    pokemon.statStages.attack = 0;
    pokemon.statusEffects.leechSeed = false;
    pokemon.statusEffects.seededBy = null;
}

function normalizePokemonInstance(pokemon) {
    if (!pokemon) return pokemon;

    if (pokemon.nickname && !isValidNickname(pokemon.nickname)) {
        pokemon.nickname = null;
    }

    ensurePokemonBattleState(pokemon);

    if (Array.isArray(pokemon.moves)) {
        pokemon.moves = pokemon.moves.map(move => {
            if (!move) return move;
            const moveKey = move.moveKey || Object.keys(MOVES_DATABASE).find(key => MOVES_DATABASE[key].name === move.name) || null;
            const baseMove = moveKey && MOVES_DATABASE[moveKey] ? MOVES_DATABASE[moveKey] : move;
            return {
                ...baseMove,
                moveKey,
                currentPP: typeof move.currentPP === 'number' ? move.currentPP : (baseMove.maxPP || 0)
            };
        });
    }

    return pokemon;
}

// Integración de datos de Pokémon
if (typeof GEN1_POKEMON_API_DATA !== 'undefined') {
    Object.assign(POKEMON_DATABASE, GEN1_POKEMON_API_DATA);
}

if (typeof ADDITIONAL_POKEMON !== 'undefined') {
    Object.assign(POKEMON_DATABASE, ADDITIONAL_POKEMON);
}

// Mantener los 151 de Kanto exactamente desde api-data-master
if (typeof GEN1_POKEMON_API_DATA !== 'undefined') {
    Object.assign(POKEMON_DATABASE, GEN1_POKEMON_API_DATA);
}

if (typeof GEN1_API_MOVESETS !== 'undefined') {
    Object.entries(GEN1_API_MOVESETS).forEach(([pokemonKey, moves]) => {
        if (!Array.isArray(moves) || moves.length === 0) return;
        const compatibleMoves = moves.filter(move => move && move.move && MOVES_DATABASE[move.move]);
        if (compatibleMoves.length > 0) {
            POKEMON_MOVESETS[pokemonKey] = compatibleMoves;
        }
    });
}

Object.values(POKEMON_DATABASE).forEach(pokemonData => {
    if (!pokemonData) return;
    if (!pokemonData.types || pokemonData.types.length === 0) {
        pokemonData.types = pokemonData.type ? [pokemonData.type] : ['normal'];
    }
    if (!pokemonData.type && pokemonData.types.length > 0) {
        pokemonData.type = pokemonData.types[0];
    }
});

// Inicializar juego
function init() {
    console.log('Inicializando juego...');
    
    // Inicializar sistema de audio
    AudioSystem.init();
    AudioSystem.playOpeningMusic();

    const unlockAudioOnce = () => {
        if (!gameState.audio.soundEnabled) return;
        if (!currentSaveSlot) {
            AudioSystem.playOpeningMusic({ restart: false });
        } else {
            AudioSystem.playOverworldMusicForCurrentZone();
        }
    };
    document.addEventListener('pointerdown', unlockAudioOnce, { once: true });
    
    // Cargar información de partidas guardadas
    loadSaveSlots();
    
    // Inicializar referencias del DOM
    screens = {
        saveSelect: document.getElementById('save-select-screen'),
        start: document.getElementById('start-screen'),
        secret: document.getElementById('secret-screen'),
        intro: document.getElementById('intro-screen'),
        selection: document.getElementById('selection-screen'),
        game: document.getElementById('game-screen')
    };
    
    modals = {
        evolution: document.getElementById('evolution-modal'),
        badgeReward: document.getElementById('badge-reward-modal'),
        capture: document.getElementById('capture-modal'),
        bag: document.getElementById('bag-modal'),
        map: document.getElementById('map-modal'),
        shop: document.getElementById('shop-modal'),
        battle: document.getElementById('battle-modal'),
        pc: document.getElementById('pc-modal'),
        pokedex: document.getElementById('pokedex-modal'),
        choice: document.getElementById('choice-modal'),
        input: document.getElementById('input-modal')
    };
    
    // Verificar que los elementos existen
    if (!screens.start || !screens.secret || !screens.saveSelect || !screens.intro || !screens.selection || !screens.game) {
        console.error('Error: No se encontraron las pantallas principales');
        return;
    }
    // Botón iniciar
    const startButton = document.getElementById('start-button');
    if (startButton) {
        startButton.addEventListener('click', () => {
            console.log('Start button clicked');
            switchScreen(screens.start, screens.saveSelect);
            AudioSystem.playOpeningMusic({ restart: false });
        });
    } else {
        console.error('Start button not found');
    }

    const startPokeballButton = document.getElementById('start-pokeball-button');
    const secretSubmitBtn = document.getElementById('secret-submit-btn');
    const secretBackBtn = document.getElementById('secret-back-btn');
    const secretCodeInput = document.getElementById('secret-code-input');

    if (startPokeballButton) {
        startPokeballButton.addEventListener('click', openSecretScreen);
    }
    if (secretSubmitBtn) {
        secretSubmitBtn.addEventListener('click', handleSecretCodeSubmit);
    }
    if (secretBackBtn) {
        secretBackBtn.addEventListener('click', () => switchScreen(screens.secret, screens.start));
    }
    if (secretCodeInput) {
        secretCodeInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                handleSecretCodeSubmit();
            }
        });
    }

    // Tarjetas de pokémon
    const pokemonCards = document.querySelectorAll('.pokemon-card');
    console.log('Found', pokemonCards.length, 'pokemon cards');
    pokemonCards.forEach(card => {
        card.addEventListener('click', () => {
            const pokemonKey = card.getAttribute('data-pokemon');
            console.log('Pokemon card clicked:', pokemonKey);
            selectStarterPokemon(pokemonKey);
        });
    });

    const introNextBtn = document.getElementById('intro-next-btn');
    const introSkipBtn = document.getElementById('intro-skip-btn');
    if (introNextBtn) {
        introNextBtn.addEventListener('click', handleIntroNext);
    }
    if (introSkipBtn) {
        introSkipBtn.addEventListener('click', skipIntroToNames);
    }

    // Botón AVANZAR
    const advanceBtn = document.getElementById('advance-btn');
    if (advanceBtn) advanceBtn.addEventListener('click', () => {
        AudioSystem.playSFX('select');
        advanceSequence();
    });

    const superAdvanceBtn = document.getElementById('super-advance-btn');
    const disableSecretModeBtn = document.getElementById('disable-secret-mode-btn');
    if (superAdvanceBtn) superAdvanceBtn.addEventListener('click', superAdvanceZone);
    if (disableSecretModeBtn) disableSecretModeBtn.addEventListener('click', disableSecretFeatures);
    updateSecretModeButtons();
    
    // Botones superiores
    const mapBtn = document.getElementById('map-btn');
    const bagBtn = document.getElementById('bag-btn');
    const pcBtn = document.getElementById('pc-btn');
    const pokedexBtn = document.getElementById('pokedex-btn');
    const audioBtn = document.getElementById('audio-btn');
    
    if (mapBtn) mapBtn.addEventListener('click', openMap);
    if (bagBtn) bagBtn.addEventListener('click', openBag);
    if (pcBtn) pcBtn.addEventListener('click', openPC);
    if (pokedexBtn) pokedexBtn.addEventListener('click', openPokedex);
    
    // Botón de audio
    if (audioBtn) {
        audioBtn.addEventListener('click', () => {
            const isEnabled = AudioSystem.toggleSound();
            audioBtn.textContent = isEnabled ? '🔊 Audio' : '🔇 Audio';
            audioBtn.style.opacity = isEnabled ? '1' : '0.6';
        });
    }
    
    // Cerrar modales
    const closeBag = document.getElementById('close-bag');
    const closeMap = document.getElementById('close-map');
    const closeShop = document.getElementById('close-shop');
    const closePC = document.getElementById('close-pc');
    const closePokedex = document.getElementById('close-pokedex');
    const evolutionContinue = document.getElementById('evolution-continue');
    const badgeRewardContinue = document.getElementById('badge-reward-continue');
    const choiceConfirm = document.getElementById('choice-confirm');
    const choiceCancel = document.getElementById('choice-cancel');
    
    if (closeBag) closeBag.addEventListener('click', () => modals.bag.classList.remove('active'));
    if (closeMap) closeMap.addEventListener('click', () => modals.map.classList.remove('active'));
    if (closeShop) closeShop.addEventListener('click', () => modals.shop.classList.remove('active'));
    if (closePC) closePC.addEventListener('click', () => modals.pc.classList.remove('active'));
    if (closePokedex) closePokedex.addEventListener('click', () => modals.pokedex.classList.remove('active'));
    if (choiceConfirm) choiceConfirm.addEventListener('click', () => closeChoiceDialog(true));
    if (choiceCancel) choiceCancel.addEventListener('click', () => closeChoiceDialog(false));
    if (evolutionContinue) {
        evolutionContinue.addEventListener('click', () => {
            resetEvolutionAnimationState();
            modals.evolution.classList.remove('active');
            AudioSystem.stopEvolutionSequenceAndResume();
            updatePokemonDisplay();
        });
    }
    if (badgeRewardContinue) {
        badgeRewardContinue.addEventListener('click', () => {
            modals.badgeReward.classList.remove('active');
        });
    }
    
    // Tabs de mochila
    document.querySelectorAll('.bag-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.bag-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            updateBagDisplay();
        });
    });
    
    // Menú principal de batalla
    const fightBtn = document.getElementById('fight-btn');
    const itemsBtn = document.getElementById('items-btn');
    const pokemonBtn = document.getElementById('pokemon-btn');
    const runBtn = document.getElementById('run-btn');
    const exterminateBtn = document.getElementById('exterminate-btn');
    
    if (fightBtn) fightBtn.addEventListener('click', showMovesMenu);
    if (itemsBtn) itemsBtn.addEventListener('click', showItemsMenu);
    if (pokemonBtn) pokemonBtn.addEventListener('click', showPokemonMenu);
    if (runBtn) runBtn.addEventListener('click', runFromBattle);
    if (exterminateBtn) exterminateBtn.addEventListener('click', useExterminate);
    
    // Botones de movimientos
    for (let i = 1; i <= 4; i++) {
        const moveBtn = document.getElementById(`move-${i}`);
        if (moveBtn) {
            moveBtn.addEventListener('click', () => useMove(i - 1));
        }
    }
    
    // Botones de volver en submenús
    const backToMain = document.getElementById('back-to-main');
    const backToMain2 = document.getElementById('back-to-main-2');
    const backToMain3 = document.getElementById('back-to-main-3');
    
    if (backToMain) backToMain.addEventListener('click', showBattleMainMenu);
    if (backToMain2) backToMain2.addEventListener('click', showBattleMainMenu);
    if (backToMain3) backToMain3.addEventListener('click', showBattleMainMenu);
    
    // Botones de items en batalla
    const usePotionBattle = document.getElementById('use-potion-battle');
    const usePokeballBattle = document.getElementById('use-pokeball-battle');
    
    if (usePotionBattle) usePotionBattle.addEventListener('click', () => {
        usePotionInBattle();
    });
    if (usePokeballBattle) usePokeballBattle.addEventListener('click', () => {
        throwPokeball();
    });
    
    console.log('Inicialización completada');
}

function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active');
    toScreen.classList.add('active');
}

function openSecretScreen() {
    const input = document.getElementById('secret-code-input');
    if (input) {
        input.value = '';
    }
    updateSecretCodeMessage(gameState.secrets.exterminarEnabled
        ? 'Código activo. EXTERMINAR, SUPER AVANZAR y nivel inicial 67 habilitados.'
        : 'Ingresa el código secreto.');
    switchScreen(screens.start, screens.secret);
    setTimeout(() => {
        if (input) input.focus();
    }, 20);
}

function updateSecretCodeMessage(message, isError = false) {
    const messageEl = document.getElementById('secret-code-message');
    if (!messageEl) return;
    messageEl.textContent = message;
    messageEl.style.color = isError ? '#c1121f' : '#3B4CCA';
}

function enableSecretFeatures() {
    gameState.secrets.exterminarEnabled = true;
    gameState.secrets.starterLevel67 = true;
    localStorage.setItem(SECRET_UNLOCK_STORAGE_KEY, 'true');
    updateSecretModeButtons();
}

function disableSecretFeatures() {
    gameState.secrets.exterminarEnabled = false;
    gameState.secrets.starterLevel67 = false;
    localStorage.removeItem(SECRET_UNLOCK_STORAGE_KEY);
    updateSecretModeButtons();
    autoSave();
    showMessage('Modo secreto desactivado.');
}

function updateSecretModeButtons() {
    const superAdvanceBtn = document.getElementById('super-advance-btn');
    const disableSecretModeBtn = document.getElementById('disable-secret-mode-btn');
    const exterminateBtn = document.getElementById('exterminate-btn');
    const visible = gameState.secrets.exterminarEnabled;

    if (superAdvanceBtn) {
        superAdvanceBtn.style.display = visible ? 'inline-block' : 'none';
    }
    if (disableSecretModeBtn) {
        disableSecretModeBtn.style.display = visible ? 'inline-block' : 'none';
    }
    if (exterminateBtn) {
        exterminateBtn.style.display = visible ? 'block' : 'none';
    }
}

function superAdvanceZone() {
    if (!gameState.secrets.exterminarEnabled) {
        showMessage('Activa el código secreto para usar SUPER AVANZAR.');
        return;
    }

    if (gameState.inBattle || gameState.battleEnding) {
        showMessage('No puedes usar SUPER AVANZAR durante una batalla.');
        return;
    }

    const currentZone = ZONES_DATA[gameState.currentZone];
    if (!currentZone || !currentZone.nextZone) {
        showMessage('No hay más zonas para avanzar.');
        return;
    }

    moveToNextZone();
    autoSave();
}

function handleSecretCodeSubmit() {
    const input = document.getElementById('secret-code-input');
    if (!input) return;

    const code = input.value.trim().toUpperCase();
    if (code === SECRET_CODE_VALUE) {
        enableSecretFeatures();
        updateSecretCodeMessage('Código correcto. ¡Se desbloqueó EXTERMINAR, SUPER AVANZAR y nivel inicial 67!');
        autoSave();
        return;
    }

    updateSecretCodeMessage('Código incorrecto.', true);
}

function startIntroSequence() {
    introStep = 0;
    const nameSection = document.getElementById('intro-name-section');
    const nameInput = document.getElementById('intro-player-name');
    const rivalInput = document.getElementById('intro-rival-name');
    const nameError = document.getElementById('intro-name-error');
    const nextBtn = document.getElementById('intro-next-btn');
    const skipBtn = document.getElementById('intro-skip-btn');

    nameSection.style.display = 'none';
    nameInput.value = '';
    rivalInput.value = '';
    nameError.textContent = '';
    nextBtn.textContent = 'Siguiente';
    if (skipBtn) skipBtn.style.display = 'inline-block';

    const introLines = [
        'Mew... ¡Mew! Bienvenido al mundo de Pokémon.',
        'Soy Mew, un Pokémon ancestral. Hoy seré tu guía en esta aventura.',
        'Este mundo está lleno de Pokémon: algunos combaten, otros viajan contigo y todos tienen su propia historia.',
        'Tu viaje comienza con dos nombres: el tuyo y el de tu rival.'
    ];

    document.getElementById('intro-text').textContent = introLines[introStep];
}

function handleIntroNext() {
    const introLines = [
        'Mew... ¡Mew! Bienvenido al mundo de Pokémon.',
        'Soy Mew, un Pokémon ancestral. Hoy seré tu guía en esta aventura.',
        'Este mundo está lleno de Pokémon: algunos combaten, otros viajan contigo y todos tienen su propia historia.',
        'Tu viaje comienza con dos nombres: el tuyo y el de tu rival.'
    ];

    const introText = document.getElementById('intro-text');
    const nameSection = document.getElementById('intro-name-section');
    const nameInput = document.getElementById('intro-player-name');
    const rivalInput = document.getElementById('intro-rival-name');
    const nameError = document.getElementById('intro-name-error');
    const nextBtn = document.getElementById('intro-next-btn');
    const skipBtn = document.getElementById('intro-skip-btn');

    if (introStep < introLines.length - 1) {
        introStep++;
        introText.textContent = introLines[introStep];

        if (introStep === introLines.length - 1) {
            nameSection.style.display = 'flex';
            nextBtn.textContent = 'Comenzar';
            if (skipBtn) skipBtn.style.display = 'none';
            setTimeout(() => nameInput.focus(), 20);
        }
        return;
    }

    const trainerName = nameInput.value.trim();
    const rivalName = rivalInput.value.trim();
    if (!isValidNickname(trainerName)) {
        nameError.textContent = 'Nombre inválido. Solo letras y números, máximo 10.';
        return;
    }

    if (!isValidNickname(rivalName)) {
        nameError.textContent = 'Nombre de rival inválido. Solo letras y números, máximo 10.';
        return;
    }

    gameState.playerName = trainerName;
    gameState.rivalName = rivalName;
    updateSelectionWelcome();
    switchScreen(screens.intro, screens.selection);
    AudioSystem.playMainThemeMusic({ restart: false });
}

function skipIntroToNames() {
    introStep = 3;
    const introText = document.getElementById('intro-text');
    const nameSection = document.getElementById('intro-name-section');
    const nextBtn = document.getElementById('intro-next-btn');
    const nameError = document.getElementById('intro-name-error');
    const skipBtn = document.getElementById('intro-skip-btn');

    introText.textContent = 'Estas apurado, bueno, respodé';
    nameSection.style.display = 'flex';
    nextBtn.textContent = 'Comenzar';
    nameError.textContent = '';
    if (skipBtn) skipBtn.style.display = 'none';
    setTimeout(() => document.getElementById('intro-player-name').focus(), 20);
}

function updateSelectionWelcome() {
    const welcome = document.getElementById('selection-welcome');
    if (!welcome) return;
    welcome.textContent = `¡Bienvenido ${gameState.playerName}! Mew te acompaña mientras tu rival ${gameState.rivalName} se prepara para empezar.`;
}

// Seleccionar Pokémon inicial
async function selectStarterPokemon(pokemonKey) {
    console.log('selectStarterPokemon called with:', pokemonKey);
    console.log('POKEMON_DATABASE:', POKEMON_DATABASE);
    
    const pokemonData = POKEMON_DATABASE[pokemonKey];
    
    if (!pokemonData) {
        console.error('Pokémon no encontrado:', pokemonKey);
        console.error('Pokémon disponibles:', Object.keys(POKEMON_DATABASE));
        showMessage('Error: Pokémon no encontrado en la base de datos.');
        return;
    }
    
    console.log('Pokemon data found:', pokemonData);

    // Crear el Pokémon inicial y añadirlo al equipo
    const starterLevel = gameState.secrets.starterLevel67 ? 67 : 5;
    const starterPokemon = createPokemon(pokemonKey, starterLevel);
    const nickname = await requestPokemonNickname(pokemonData.name);
    starterPokemon.nickname = nickname;
    registerPokemonCaught(starterPokemon.key);
    gameState.team.push(starterPokemon);
    gameState.activePokemonIndex = 0;

    // Reproducir grito del Pokémon y música de fondo
    AudioSystem.playPokemonCry(pokemonData.id);
    setTimeout(() => AudioSystem.playOverworldMusicForCurrentZone(), 1000);

    switchScreen(screens.selection, screens.game);
    updatePokemonDisplay();
    updateZoneDisplay();
    updateProgress();
    showMessage(`¡${gameState.playerName}, elegiste a ${getPokemonDisplayName(starterPokemon)}! Tu aventura comienza en ${ZONES_DATA[gameState.currentZone].name}.`);
    
    // Guardar partida
    autoSave();
    
    // Si comenzamos en un pueblo con tienda, mostrarla
    const currentZone = ZONES_DATA[gameState.currentZone];
    if (currentZone.shop && currentZone.shop.length > 0) {
        setTimeout(() => {
            openShop();
        }, 1500);
    }
}

// Calcular HP
function calculateHP(baseStat, level) {
    return Math.floor(((baseStat * 2 * level) / 100) + level + 10);
}

// Crear un objeto Pokémon con todos sus datos
function createPokemon(pokemonKey, level) {
    const pokemonData = POKEMON_DATABASE[pokemonKey];
    if (!pokemonData) {
        console.error('Pokémon no encontrado:', pokemonKey);
        return null;
    }
    
    const maxHP = calculateHP(pokemonData.stats.hp, level);
    
    // Obtener movimientos que el Pokémon debería conocer según su nivel
    const moveset = POKEMON_MOVESETS[pokemonKey] || [];
    console.log(`Creando ${pokemonKey} nivel ${level}, moveset disponible:`, moveset);
    
    const learnedMoves = moveset
        .filter(m => m.level <= level)
        .sort((a, b) => b.level - a.level) // Ordenar por nivel descendente
        .slice(0, 4) // Tomar los últimos 4
        .map(m => {
            const moveData = MOVES_DATABASE[m.move];
            if (!moveData) {
                console.error(`Movimiento no encontrado en MOVES_DATABASE: ${m.move}`);
                return null;
            }
            return {
                ...moveData,
                moveKey: m.move,
                currentPP: moveData.maxPP
            };
        })
        .filter(m => m !== null);

    if (learnedMoves.length === 0 && MOVES_DATABASE.tackle) {
        learnedMoves.push({ ...MOVES_DATABASE.tackle, moveKey: 'tackle', currentPP: MOVES_DATABASE.tackle.maxPP });
    }
    
    console.log(`${pokemonKey} aprendió ${learnedMoves.length} movimientos:`, learnedMoves.map(m => m.name));
    
    const createdPokemon = {
        key: pokemonKey,
        data: pokemonData,
        nickname: null,
        level: level,
        currentExp: 0,
        neededExp: Math.floor(15 * Math.pow(level, 1.3)),
        currentHP: maxHP,
        maxHP: maxHP,
        moves: learnedMoves,
        statStages: { attack: 0 },
        statusEffects: { leechSeed: false, seededBy: null }
    };

    return createdPokemon;
}

// Añadir Pokémon al equipo o PC
function addPokemon(pokemon) {
    normalizePokemonInstance(pokemon);
    registerPokemonCaught(pokemon.key);
    if (gameState.team.length < 6) {
        gameState.team.push(pokemon);
        showMessage(`¡${getPokemonDisplayName(pokemon)} se unió a tu equipo!`);
    } else {
        gameState.pcStorage.push(pokemon);
        showMessage(`¡${getPokemonDisplayName(pokemon)} fue enviado al PC de Bill!`);
    }
}

function normalizePokemonKey(pokemonKey) {
    return (pokemonKey || '').toLowerCase();
}

function registerPokemonCaught(pokemonKey) {
    const key = normalizePokemonKey(pokemonKey);
    if (!key) return;

    if (!Array.isArray(gameState.caughtPokemon)) {
        gameState.caughtPokemon = [];
    }

    if (!gameState.caughtPokemon.includes(key)) {
        gameState.caughtPokemon.push(key);
    }
}

function rebuildCaughtFromOwnedPokemon() {
    if (!Array.isArray(gameState.caughtPokemon)) {
        gameState.caughtPokemon = [];
    }

    const allOwned = [...(gameState.team || []), ...(gameState.pcStorage || [])];
    allOwned.forEach(pokemon => {
        if (pokemon && pokemon.key) {
            registerPokemonCaught(pokemon.key);
        }
    });
}

function isPokemonCaught(pokemonKey) {
    const key = normalizePokemonKey(pokemonKey);
    return Array.isArray(gameState.caughtPokemon) && gameState.caughtPokemon.includes(key);
}

function getPokedexCatalog() {
    if (typeof GEN1_POKEDEX_INDEX !== 'undefined' && Array.isArray(GEN1_POKEDEX_INDEX) && GEN1_POKEDEX_INDEX.length > 0) {
        return GEN1_POKEDEX_INDEX
            .map(entry => ({
                id: entry.id,
                key: normalizePokemonKey(entry.key),
                name: entry.name || (POKEMON_DATABASE[entry.key]?.name || entry.key)
            }))
            .filter(entry => !!POKEMON_DATABASE[entry.key]);
    }

    return Object.entries(POKEMON_DATABASE)
        .map(([key, data]) => ({ id: data.id || 9999, key, name: data.name || key }))
        .sort((a, b) => a.id - b.id);
}

function openPokedex() {
    if (!modals.pokedex) return;
    modals.pokedex.classList.add('active');
    hidePokedexPopup();
    renderPokedexList();
}

function renderPokedexList() {
    const listEl = document.getElementById('pokedex-list');
    if (!listEl) return;

    const catalog = getPokedexCatalog();
    listEl.innerHTML = '';

    catalog.forEach(entry => {
        const pokemonData = POKEMON_DATABASE[entry.key];
        if (!pokemonData) return;

        const caught = isPokemonCaught(entry.key);
        const button = document.createElement('button');
        button.className = `pokedex-entry ${caught ? 'unlocked' : 'locked'}`;
        button.disabled = !caught;
        button.innerHTML = `
            <div class="pokedex-entry-id">#${String(entry.id).padStart(3, '0')}</div>
            <img src="${pokemonData.sprite || pokemonData.spriteModern || ''}" alt="${caught ? pokemonData.name : '???'}">
            <div class="pokedex-entry-name">${caught ? pokemonData.name : '???'}</div>
        `;

        if (caught) {
            button.addEventListener('click', () => showPokedexPopup(entry.key));
        }

        listEl.appendChild(button);
    });
}

function getPokemonTypeBadge(type) {
    const label = (POKEMON_TYPES[type] && POKEMON_TYPES[type].name) ? POKEMON_TYPES[type].name : type;
    const color = (POKEMON_TYPES[type] && POKEMON_TYPES[type].color) ? POKEMON_TYPES[type].color : '#777';
    return `<span class="pokedex-popup-type" style="background:${color};">${label}</span>`;
}

function hidePokedexPopup() {
    const popupEl = document.getElementById('pokedex-popup');
    if (!popupEl) return;
    popupEl.style.display = 'none';
}

function cleanPokedexFlavorText(text) {
    return (text || '')
        .replace(/\n|\f|\r/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function pickLocalizedDescriptionFromSpecies(speciesData) {
    const entries = speciesData && Array.isArray(speciesData.flavor_text_entries)
        ? speciesData.flavor_text_entries
        : [];

    const preferredVersions = ['scarlet', 'violet', 'x', 'y', 'omega-ruby', 'alpha-sapphire', 'sun', 'moon'];

    for (const version of preferredVersions) {
        const esEntry = entries.find(entry => (
            entry &&
            entry.language &&
            entry.language.name === 'es' &&
            entry.version &&
            entry.version.name === version &&
            entry.flavor_text
        ));
        if (esEntry) {
            return cleanPokedexFlavorText(esEntry.flavor_text);
        }
    }

    const anySpanish = entries.find(entry => (
        entry &&
        entry.language &&
        entry.language.name === 'es' &&
        entry.flavor_text
    ));
    if (anySpanish) {
        return cleanPokedexFlavorText(anySpanish.flavor_text);
    }

    const anyEnglish = entries.find(entry => (
        entry &&
        entry.language &&
        entry.language.name === 'en' &&
        entry.flavor_text
    ));
    if (anyEnglish) {
        return cleanPokedexFlavorText(anyEnglish.flavor_text);
    }

    return '';
}

async function getPokedexDescriptionText(pokemonKey, pokemonData) {
    const cacheKey = normalizePokemonKey(pokemonKey);
    if (pokedexDescriptionCache.has(cacheKey)) {
        return pokedexDescriptionCache.get(cacheKey);
    }

    let description = cleanPokedexFlavorText(pokemonData.pokedexDescription || '');

    if (pokemonData && pokemonData.id) {
        try {
            const response = await fetch(`api-data-master/data/api/v2/pokemon-species/${pokemonData.id}/index.json`);
            if (response.ok) {
                const speciesData = await response.json();
                const localized = pickLocalizedDescriptionFromSpecies(speciesData);
                if (localized) {
                    description = localized;
                }
            }
        } catch (error) {
            // Fallback silencioso a la descripción disponible en caché local
        }
    }

    pokedexDescriptionCache.set(cacheKey, description);
    return description;
}

function showPokedexPopup(pokemonKey) {
    const popupEl = document.getElementById('pokedex-popup');
    const contentEl = document.getElementById('pokedex-popup-content');
    const closeBtn = document.getElementById('pokedex-popup-close');
    if (!popupEl || !contentEl) return;

    renderPokedexDetail(pokemonKey);
    popupEl.style.display = 'flex';

    if (closeBtn && !closeBtn.dataset.bound) {
        closeBtn.addEventListener('click', hidePokedexPopup);
        closeBtn.dataset.bound = 'true';
    }
}

function formatEvolutionMethodLabel(method) {
    if (method === 'level') return 'Nivel';
    if (method === 'stone') return 'Piedra';
    if (method === 'trade') return 'Intercambio';
    return method || 'Método especial';
}

function getEvolutionOptionsForPokemon(pokemonKey) {
    const pokemonData = POKEMON_DATABASE[pokemonKey];
    if (!pokemonData || !Array.isArray(pokemonData.evolutionOptions)) return [];
    return pokemonData.evolutionOptions.filter(option => option && option.evolvesTo);
}

function getEvolutionParents(pokemonKey) {
    const parents = [];

    Object.entries(POKEMON_DATABASE).forEach(([candidateKey]) => {
        const options = getEvolutionOptionsForPokemon(candidateKey);
        if (options.some(option => option.evolvesTo === pokemonKey)) {
            parents.push(candidateKey);
        }
    });

    return parents;
}

function getDisplayNameByKey(pokemonKey) {
    if (POKEMON_DATABASE[pokemonKey] && POKEMON_DATABASE[pokemonKey].name) {
        return POKEMON_DATABASE[pokemonKey].name;
    }
    return (pokemonKey || '').split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function getEvolutionLines(pokemonKey) {
    const targetKey = normalizePokemonKey(pokemonKey);
    if (!targetKey || !POKEMON_DATABASE[targetKey]) return [];

    const component = new Set();
    const queue = [targetKey];

    while (queue.length > 0) {
        const current = queue.shift();
        if (!current || component.has(current) || !POKEMON_DATABASE[current]) continue;

        component.add(current);

        const children = getEvolutionOptionsForPokemon(current)
            .map(option => option.evolvesTo)
            .filter(child => POKEMON_DATABASE[child]);
        const parents = getEvolutionParents(current).filter(parent => POKEMON_DATABASE[parent]);

        [...children, ...parents].forEach(neighbor => {
            if (!component.has(neighbor)) queue.push(neighbor);
        });
    }

    const roots = [...component].filter(candidate => {
        const parents = getEvolutionParents(candidate).filter(parent => component.has(parent));
        return parents.length === 0;
    });

    const starts = roots.length > 0 ? roots : [targetKey];
    const paths = [];

    const walk = (current, path) => {
        const evolutions = getEvolutionOptionsForPokemon(current);
        if (evolutions.length === 0) {
            paths.push(path);
            return;
        }

        let pushed = false;
        evolutions.forEach(option => {
            const nextKey = option.evolvesTo;
            if (!nextKey || path.includes(nextKey)) return;

            pushed = true;
            if (POKEMON_DATABASE[nextKey] && component.has(nextKey)) {
                walk(nextKey, [...path, nextKey]);
            } else {
                paths.push([...path, nextKey]);
            }
        });

        if (!pushed) {
            paths.push(path);
        }
    };

    starts.forEach(startKey => walk(startKey, [startKey]));

    const serialized = new Set();
    const lines = [];

    paths.forEach(path => {
        if (!path.includes(targetKey)) return;
        const names = path.map(getDisplayNameByKey);
        const line = names.join(' → ');
        if (!serialized.has(line)) {
            serialized.add(line);
            lines.push(line);
        }
    });

    return lines;
}

async function renderPokedexDetail(pokemonKey) {
    const detailEl = document.getElementById('pokedex-popup-content');
    const pokemonData = POKEMON_DATABASE[pokemonKey];
    if (!detailEl || !pokemonData) return;

    detailEl.innerHTML = '<div class="pokedex-popup-content"><p>Cargando descripción...</p></div>';

    const evolutionLines = getEvolutionLines(pokemonKey);
    const hasEvolutionInfo = evolutionLines.length > 0;
    const evolutionItems = hasEvolutionInfo
        ? evolutionLines.map(line => `<div class="pokedex-evo-line">${line}</div>`).join('')
        : '<div class="pokedex-evo-line">No evoluciona.</div>';

    const descriptionText = await getPokedexDescriptionText(pokemonKey, pokemonData);
    const description = descriptionText
        ? `<p>${descriptionText}</p>`
        : '';

    const pokemonTypes = (Array.isArray(pokemonData.types) && pokemonData.types.length > 0)
        ? pokemonData.types
        : [pokemonData.type || 'normal'];
    const typesHtml = pokemonTypes.map(getPokemonTypeBadge).join('');

    const formatStat = (label, value) => `
        <div class="pokedex-stat-card">
            <span class="pokedex-stat-label">${label}</span>
            <strong class="pokedex-stat-value">${value}</strong>
        </div>
    `;

    const statsHtml = `
        ${formatStat('HP', pokemonData.stats.hp)}
        ${formatStat('Ataque', pokemonData.stats.attack)}
        ${formatStat('Defensa', pokemonData.stats.defense)}
        ${formatStat('Atq. Esp.', pokemonData.stats.specialAttack)}
        ${formatStat('Def. Esp.', pokemonData.stats.specialDefense)}
        ${formatStat('Velocidad', pokemonData.stats.speed)}
    `;

    detailEl.innerHTML = `
        <div class="pokedex-popup-content">
            <div class="pokedex-popup-header">
                <img class="pokedex-popup-sprite" src="${pokemonData.sprite || pokemonData.spriteModern || ''}" alt="${pokemonData.name}">
                <div class="pokedex-popup-header-info">
                    <h3>#${String(pokemonData.id).padStart(3, '0')} ${pokemonData.name}</h3>
                    <div class="pokedex-popup-types">${typesHtml}</div>
                </div>
            </div>

            <div class="pokedex-section">
                <h4>Stats base</h4>
                <div class="pokedex-stats-grid">${statsHtml}</div>
            </div>

            <div class="pokedex-section">
                <h4>Evoluciones</h4>
                <div class="pokedex-evo-list">${evolutionItems}</div>
            </div>

            ${description ? `<div class="pokedex-section pokedex-description-box"><h4>Descripción</h4>${description}</div>` : ''}
        </div>
    `;
}

// Calcular daño de ataque
// Calcular daño de ataque (fórmula similar a Pokémon Gen I)
function calculateDamage(attacker, defender, movePower = 40) {
    const attackerStats = attacker.data ? attacker.data.stats : attacker.stats;
    const defenderStats = defender.data ? defender.data.stats : defender.stats;
    const level = attacker.level || 5;

    ensurePokemonBattleState(attacker);

    const stage = attacker.statStages ? attacker.statStages.attack : 0;
    const stageMultiplier = stage >= 0 ? ((2 + stage) / 2) : (2 / (2 - stage));

    const attack = Math.max(1, Math.floor(attackerStats.attack * stageMultiplier));
    const defense = Math.max(1, defenderStats.defense);
    
    // Fórmula base: ((2 * Level / 5 + 2) * Power * Attack / Defense) / 50 + 2
    const levelMultiplier = Math.floor((2 * level / 5) + 2);
    const baseDamage = Math.floor((levelMultiplier * movePower * attack) / defense / 50) + 2;
    
    // Variación aleatoria (85-100%)
    const randomFactor = (Math.random() * 0.15 + 0.85);
    const damage = Math.floor(baseDamage * randomFactor);
    
    return Math.max(1, damage);
}

function getEffectiveSpeed(pokemon) {
    if (!pokemon || !pokemon.data) return 1;
    return Math.max(1, pokemon.data.stats.speed + (pokemon.level * 2));
}

function getBattleEffectLabels(pokemon) {
    if (!pokemon) return [];

    ensurePokemonBattleState(pokemon);
    const labels = [];

    if (pokemon.statStages.attack < 0) {
        labels.push(`ATQ↓ x${Math.abs(pokemon.statStages.attack)}`);
    } else if (pokemon.statStages.attack > 0) {
        labels.push(`ATQ↑ x${Math.abs(pokemon.statStages.attack)}`);
    }

    if (pokemon.statusEffects.leechSeed) {
        labels.push('Drenadoras x1');
    }

    return labels;
}

function applyAttackStageChange(pokemon, delta) {
    ensurePokemonBattleState(pokemon);
    const before = pokemon.statStages.attack;
    const after = Math.max(-6, Math.min(6, before + delta));
    pokemon.statStages.attack = after;
    return { before, after, changed: before !== after };
}

function renderBattleEffects() {
    const player = getActivePokemon();
    const enemy = gameState.currentEnemy;
    const playerEffectsEl = document.getElementById('player-effects');
    const enemyEffectsEl = document.getElementById('enemy-effects');

    if (!playerEffectsEl || !enemyEffectsEl) return;

    const render = (targetEl, labels) => {
        targetEl.innerHTML = labels.map(label => `<span class="battle-effect-badge">${label}</span>`).join('');
        if (labels.length === 0) {
            targetEl.innerHTML = '<span class="battle-effect-empty">Sin efectos</span>';
        }
    };

    render(playerEffectsEl, getBattleEffectLabels(player));
    render(enemyEffectsEl, getBattleEffectLabels(enemy));
}

function applyLeechSeedEndTurnEffects() {
    const player = getActivePokemon();
    const enemy = gameState.currentEnemy;
    if (!player || !enemy) return;

    const messages = [];

    ensurePokemonBattleState(player);
    ensurePokemonBattleState(enemy);

    const applyDrain = (target, source, targetSide, sourceSide) => {
        if (!target.statusEffects.leechSeed || target.statusEffects.seededBy !== sourceSide) {
            return;
        }

        if (target.currentHP <= 0) {
            target.statusEffects.leechSeed = false;
            target.statusEffects.seededBy = null;
            return;
        }

        const drain = Math.max(1, Math.floor(target.maxHP * 0.12));
        target.currentHP = Math.max(0, target.currentHP - drain);

        if (source.currentHP > 0) {
            source.currentHP = Math.min(source.maxHP, source.currentHP + drain);
        }

        messages.push(`¡Drenadoras absorbe ${drain} PS de ${getPokemonDisplayName(target)}!`);

        if (target.currentHP === 0) {
            messages.push(`¡${getPokemonDisplayName(target)} se debilitó por Drenadoras!`);
        }
    };

    applyDrain(player, enemy, 'player', 'enemy');
    applyDrain(enemy, player, 'enemy', 'player');

    if (messages.length > 0) {
        updateBattleDisplay();
        updatePokemonDisplay();
        showMessage(messages.join(' '));
    }
}

// Obtener el Pokémon activo del jugador
function getActivePokemon() {
    return gameState.team[gameState.activePokemonIndex];
}

// Actualizar display del pokemon
function updatePokemonDisplay() {
    const pokemon = getActivePokemon();
    if (!pokemon || !pokemon.data) return;

    document.getElementById('current-pokemon-sprite').src = pokemon.data.sprite;
    document.getElementById('current-pokemon-name').textContent = getPokemonDisplayName(pokemon);
    document.getElementById('current-level').textContent = pokemon.level;
    document.getElementById('current-exp').textContent = pokemon.currentExp;
    document.getElementById('needed-exp').textContent = pokemon.neededExp;
    
    const expPercent = (pokemon.currentExp / pokemon.neededExp) * 100;
    document.getElementById('exp-fill').style.width = `${expPercent}%`;
    
    document.getElementById('current-hp').textContent = pokemon.currentHP;
    document.getElementById('max-hp').textContent = pokemon.maxHP;
    
    const hpPercent = (pokemon.currentHP / pokemon.maxHP) * 100;
    document.getElementById('hp-fill').style.width = `${hpPercent}%`;
}

// Actualizar zona
function updateZoneDisplay() {
    const zone = ZONES_DATA[gameState.currentZone];
    document.getElementById('zone-name').textContent = zone.name;
    document.getElementById('money-display').textContent = `$${gameState.money}`;
    updateBadgesDisplay();
}

// Actualizar progreso
function updateProgress() {
    const step = gameState.progress.sequenceStep;
    const zone = ZONES_DATA[gameState.currentZone];

    const sequence = getZoneSequence(zone);
    const totalSteps = sequence.length;
    const nextEvent = sequence[step];

    document.getElementById('wild-count').textContent = `${Math.min(step, totalSteps)}/${totalSteps}`;
    document.getElementById('trainer-count').textContent = nextEvent ? getEventLabel(nextEvent, zone) : 'Zona completada';
    
    const advanceBtn = document.getElementById('advance-btn');
    if (advanceBtn) {
        advanceBtn.disabled = false;
        advanceBtn.classList.add('available');
    }
}

// Mostrar mensaje
function showMessage(message) {
    document.getElementById('game-message').textContent = message;
}

// ===== SISTEMA DE SECUENCIA =====

function advanceSequence() {
    const step = gameState.progress.sequenceStep;
    const zone = ZONES_DATA[gameState.currentZone];

    console.log('Advancing sequence, step:', step);

    const sequence = getZoneSequence(zone);
    if (step >= sequence.length) {
        moveToNextZone();
        return;
    }

    const currentEvent = sequence[step];
    if (!currentEvent) {
        moveToNextZone();
        return;
    }

    if (currentEvent.type === 'wild') {
        startWildBattle(currentEvent);
        return;
    }

    if (currentEvent.type === 'trainer') {
        startTrainerBattle(currentEvent.trainerId);
        return;
    }

    if (currentEvent.type === 'message') {
        showMessage(currentEvent.text || 'Continúa tu aventura.');
        gameState.progress.sequenceStep++;
        updateProgress();
        autoSave();
        return;
    }

    showMessage('Evento no reconocido en la secuencia de la zona.');
}

function getZoneSequence(zone) {
    if (zone && Array.isArray(zone.sequence) && zone.sequence.length > 0) {
        return zone.sequence;
    }

    // Fallback de compatibilidad con partidas antiguas
    return [
        { type: 'wild' },
        { type: 'wild' },
        { type: 'trainer' },
        { type: 'wild' },
        { type: 'wild' },
        { type: 'wild' },
        { type: 'trainer' }
    ];
}

function getEventLabel(eventData, zone) {
    if (!eventData) return 'Listo';

    if (eventData.type === 'wild') {
        return 'Batalla salvaje';
    }

    if (eventData.type === 'trainer') {
        const trainer = (zone.trainers || []).find(t => t.id === eventData.trainerId) || zone.trainers?.[gameState.progress.currentTrainerIndex];
        return trainer ? `Entrenador: ${trainer.name}` : 'Combate de entrenador';
    }

    if (eventData.type === 'message') {
        return eventData.label || 'Historia';
    }

    return 'Evento';
}

function moveToNextZone() {
    const currentZone = ZONES_DATA[gameState.currentZone];
    
    if (!currentZone.nextZone) {
        showMessage('¡Felicidades! Has completado esta versión del juego.');
        return;
    }
    
    // Avanzar a la siguiente zona
    gameState.currentZone = currentZone.nextZone;
    if (!gameState.unlockedZones.includes(currentZone.nextZone)) {
        gameState.unlockedZones.push(currentZone.nextZone);
    }
    
    // Resetear progreso de secuencia
    gameState.progress.sequenceStep = 0;
    gameState.progress.currentTrainerIndex = 0;
    gameState.currentTrainerBattle = null;
    
    // Curar todo el equipo al cambiar de zona
    gameState.team.forEach(pokemon => {
        pokemon.currentHP = pokemon.maxHP;
        if (pokemon.moves && pokemon.moves.length > 0) {
            pokemon.moves.forEach(move => {
                if (move && move.maxPP !== undefined) {
                    move.currentPP = move.maxPP;
                }
            });
        }
    });
    
    const newZone = ZONES_DATA[gameState.currentZone];
    updateZoneDisplay();
    updateProgress();
    updatePokemonDisplay();
    showMessage(`¡Has llegado a ${newZone.name}! Tu equipo ha sido curado.`);
    AudioSystem.playHealingMusicThenResume();
    
    // Guardar progreso
    autoSave();
    
    // Si la nueva zona es un pueblo (tiene tienda), abrir automáticamente
    if (newZone.shop && newZone.shop.length > 0) {
        setTimeout(() => {
            openShop();
        }, 1500);
    }
}

// ===== SISTEMA DE BATALLA =====

function cancelPendingEnemyTurn() {
    if (battleTurnState.pendingEnemyTurnTimeoutId !== null) {
        clearTimeout(battleTurnState.pendingEnemyTurnTimeoutId);
        battleTurnState.pendingEnemyTurnTimeoutId = null;
    }
}

function lockBattleActions() {
    battleTurnState.actionLocked = true;
    disableBattleButtons();
}

function unlockBattleActions() {
    const enemyDefeated = !gameState.currentEnemy || (gameState.currentEnemy.currentHP || 0) <= 0;
    if (gameState.battleEnding || enemyDefeated || !gameState.inBattle) {
        battleTurnState.actionLocked = true;
        disableBattleButtons();
        return;
    }

    battleTurnState.actionLocked = false;
    enableBattleButtons();
}

function resetBattleTurnState() {
    cancelPendingEnemyTurn();
    battleTurnState.actionLocked = false;
    battleTurnState.forcedSwitch = false;
}

function canPlayerBattleAct(options = {}) {
    const { allowForcedSwitch = false } = options;

    if (!gameState.inBattle || !gameState.currentEnemy) return false;
    if (gameState.battleEnding) return false;
    if ((gameState.currentEnemy.currentHP || 0) <= 0) return false;
    if (battleTurnState.pendingEnemyTurnTimeoutId !== null) return false;

    if (battleTurnState.actionLocked && !(allowForcedSwitch && battleTurnState.forcedSwitch)) {
        return false;
    }

    return true;
}

function queueEnemyTurn(delay = 1200) {
    cancelPendingEnemyTurn();
    battleTurnState.pendingEnemyTurnTimeoutId = setTimeout(() => {
        battleTurnState.pendingEnemyTurnTimeoutId = null;
        executeEnemyTurn();
    }, delay);
}

function startWildBattle(eventData = null) {
    const zone = ZONES_DATA[gameState.currentZone];
    
    // Si la zona no tiene pokémon salvajes, usar los de una ruta cercana
    let wildPokemonPool = (eventData && Array.isArray(eventData.pool) && eventData.pool.length > 0)
        ? eventData.pool
        : zone.wildPokemon;
    if (!wildPokemonPool || wildPokemonPool.length === 0) {
        console.log('Zona sin pokémon salvajes, buscando en otras zonas...');
        // Usar pokémon de route-1 como fallback
        wildPokemonPool = ZONES_DATA['route-1'].wildPokemon;
    }
    
    // Seleccionar pokemon aleatorio basado en probabilidades
    const rand = Math.random() * 100;
    let cumulative = 0;
    let selectedPokemon = null;
    
    for (const wild of wildPokemonPool) {
        cumulative += wild.chance;
        if (rand <= cumulative) {
            selectedPokemon = wild;
            break;
        }
    }
    
    if (!selectedPokemon) selectedPokemon = wildPokemonPool[0];
    
    // Crear pokemon enemigo con movimientos
    const level = Math.floor(Math.random() * (selectedPokemon.maxLevel - selectedPokemon.minLevel + 1)) + selectedPokemon.minLevel;
    const enemyPokemon = createPokemon(selectedPokemon.pokemon, level);
    
    if (!enemyPokemon) {
        console.error('Error creando enemigo');
        return;
    }
    
    gameState.currentEnemy = {
        ...enemyPokemon,
        isWild: true
    };
    
    gameState.inBattle = true;
    gameState.battleEnding = false;
    resetBattleTurnState();
    showMessage(`¡Un ${enemyPokemon.data.name} salvaje apareció!`);
    showBattle();
}

function startTrainerBattle(trainerId = null) {
    const zone = ZONES_DATA[gameState.currentZone];
    
    // Obtener el índice del entrenador actual
    const trainerIndex = gameState.progress.currentTrainerIndex;
    let selectedTrainer = null;

    if (trainerId) {
        selectedTrainer = zone.trainers.find(t => t.id === trainerId);
    }
    
    // Si no hay entrenadores en esta zona, usar uno genérico
    if (!selectedTrainer && (!zone.trainers || zone.trainers.length === 0 || trainerIndex >= zone.trainers.length)) {
        console.log('No hay entrenadores disponibles, usando entrenador genérico');
        // Crear un entrenador genérico
        const genericTrainer = {
            id: `generic-trainer-${trainerIndex}`,
            name: 'Entrenador',
            pokemon: 'rattata',
            level: getActivePokemon().level + 2,
            reward: 100
        };
        
        const trainerPokemon = createPokemon(genericTrainer.pokemon, genericTrainer.level);
        
        if (!trainerPokemon) {
            console.error('Error creando Pokémon de entrenador');
            return;
        }
        
        gameState.currentTrainerBattle = {
            trainerId: genericTrainer.id,
            trainerName: genericTrainer.name,
            reward: genericTrainer.reward,
            battleType: 'trainer',
            remainingTeam: []
        };

        gameState.currentEnemy = {
            ...trainerPokemon,
            isWild: false,
            trainerId: genericTrainer.id,
            trainerName: genericTrainer.name,
            reward: genericTrainer.reward,
            battleType: 'trainer'
        };
    } else {
        const trainer = selectedTrainer || zone.trainers[trainerIndex];

        const trainerTeamData = Array.isArray(trainer.team) && trainer.team.length > 0
            ? trainer.team
            : [{ pokemon: trainer.pokemon, level: trainer.level }];

        const createdTeam = trainerTeamData
            .map(p => createPokemon(p.pokemon, p.level))
            .filter(Boolean);

        if (createdTeam.length === 0) {
            console.error('El entrenador no tiene Pokémon válidos:', trainer.id);
            return;
        }

        const trainerPokemon = createdTeam.shift();
        
        if (!trainerPokemon) {
            console.error('Error creando Pokémon de entrenador');
            return;
        }

        gameState.currentTrainerBattle = {
            trainerId: trainer.id,
            trainerName: trainer.name,
            reward: trainer.reward,
            battleType: trainer.battleType || 'trainer',
            remainingTeam: createdTeam
        };
        
        gameState.currentEnemy = {
            ...trainerPokemon,
            isWild: false,
            trainerId: trainer.id,
            trainerName: trainer.name,
            reward: trainer.reward,
            battleType: trainer.battleType || 'trainer'
        };
    }
    
    gameState.inBattle = true;
    gameState.battleEnding = false;
    resetBattleTurnState();
    
    // Mostrar diálogo del entrenador si existe
    const trainerForDialogue = (zone.trainers || []).find(t => t.id === (gameState.currentEnemy ? gameState.currentEnemy.trainerId : null));
    const trainerDialogue = (trainerForDialogue && trainerForDialogue.dialogue)
        ? trainerForDialogue.dialogue 
        : `¡${gameState.currentEnemy.trainerName} quiere luchar!`;
    
    showMessage(trainerDialogue);
    showBattle();
}

function showBattle() {
    modals.battle.classList.add('active');
    resetBattleTurnState();
    
    // Reproducir música de batalla y gritos de Pokémon
    if (gameState.currentEnemy && !gameState.currentEnemy.isWild) {
        const isGymBattle = gameState.currentEnemy.battleType === 'gym';
        const isRivalBattle = isTrainerRivalBattle(gameState.currentEnemy);
        AudioSystem.playTrainerBattleMusic({ isGym: isGymBattle, isRival: isRivalBattle });
    } else {
        AudioSystem.playBattleMusic();
    }
    
    // Gritos de Pokémon después de un momento
    setTimeout(() => {
        if (gameState.currentEnemy && gameState.currentEnemy.data) {
            AudioSystem.playPokemonCry(gameState.currentEnemy.data.id);
        }
    }, 500);
    
    updateBattleDisplay();
    showBattleMainMenu();
    unlockBattleActions();
}

function updateBattleDisplay() {
    const player = getActivePokemon();
    const enemy = gameState.currentEnemy;
    
    if (!player) return;
    
    // Player - usar sprite de espalda para el jugador
    document.getElementById('player-battle-sprite').src = player.data.spriteBack || player.data.sprite;
    document.getElementById('player-battle-name').textContent = getPokemonDisplayName(player);
    document.getElementById('player-battle-level').textContent = player.level;
    const playerHpPercent = (player.currentHP / player.maxHP) * 100;
    document.getElementById('player-battle-hp-fill').style.width = `${playerHpPercent}%`;
    
    // Enemy - usar sprite de frente para el enemigo
    document.getElementById('enemy-sprite').src = enemy.data.sprite;
    document.getElementById('enemy-name').textContent = getPokemonDisplayName(enemy);
    document.getElementById('enemy-level').textContent = enemy.level;
    const enemyHpPercent = (enemy.currentHP / enemy.maxHP) * 100;
    document.getElementById('enemy-hp-fill').style.width = `${enemyHpPercent}%`;

    renderBattleEffects();
}

// Navegación de menús de batalla
function showBattleMainMenu() {
    document.getElementById('battle-main-menu').style.display = 'flex';
    document.getElementById('battle-moves-menu').style.display = 'none';
    document.getElementById('battle-items-menu').style.display = 'none';
    document.getElementById('battle-pokemon-menu').style.display = 'none';

    const exterminateBtn = document.getElementById('exterminate-btn');
    if (exterminateBtn) {
        exterminateBtn.style.display = gameState.secrets.exterminarEnabled ? 'block' : 'none';
    }

    const enemyDefeated = !gameState.currentEnemy || gameState.currentEnemy.currentHP <= 0 || gameState.battleEnding;
    document.getElementById('fight-btn').disabled = enemyDefeated;
    document.getElementById('items-btn').disabled = enemyDefeated;
    document.getElementById('pokemon-btn').disabled = enemyDefeated;
    
    // Deshabilitar huir si es batalla de entrenador
    document.getElementById('run-btn').disabled = enemyDefeated || !gameState.currentEnemy.isWild;
}

function showMovesMenu() {
    if (!canPlayerBattleAct()) return;

    const player = getActivePokemon();
    if (!player || !player.moves) {
        console.error('No hay Pokémon activo o no tiene movimientos');
        return;
    }
    
    console.log('Mostrando movimientos:', player.moves);
    
    document.getElementById('battle-main-menu').style.display = 'none';
    document.getElementById('battle-moves-menu').style.display = 'flex';
    
    // Actualizar botones de movimientos
    for (let i = 0; i < 4; i++) {
        const moveBtn = document.getElementById(`move-${i + 1}`);
        const moveName = moveBtn.querySelector('.move-name');
        const movePP = moveBtn.querySelector('.move-pp');
        
        if (i < player.moves.length && player.moves[i]) {
            const move = player.moves[i];
            moveBtn.style.display = 'block';
            moveName.textContent = move.name || 'Movimiento';
            movePP.textContent = `PP: ${move.currentPP || 0}/${move.maxPP || 0}`;
            moveBtn.disabled = (move.currentPP || 0) === 0;
        } else {
            moveBtn.style.display = 'none';
        }
    }
}

function showItemsMenu() {
    if (!canPlayerBattleAct()) return;
    openBag('battle');
}

function showPokemonMenu() {
    if (!canPlayerBattleAct({ allowForcedSwitch: true })) return;

    document.getElementById('battle-main-menu').style.display = 'none';
    document.getElementById('battle-pokemon-menu').style.display = 'flex';
    
    const teamSelection = document.getElementById('team-selection');
    teamSelection.innerHTML = '';
    
    gameState.team.forEach((pokemon, index) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card';
        if (index === gameState.activePokemonIndex) {
            pokemonCard.classList.add('active-pokemon');
        }
        if (pokemon.currentHP === 0) {
            pokemonCard.classList.add('fainted');
        }
        
        pokemonCard.innerHTML = `
            <img src="${pokemon.data.sprite}" alt="${pokemon.data.name}">
            <div class="pokemon-info">
                <strong>${getPokemonDisplayName(pokemon)}</strong> Nv.${pokemon.level}
                <div>HP: ${pokemon.currentHP}/${pokemon.maxHP}</div>
            </div>
        `;
        
        pokemonCard.addEventListener('click', () => {
            if (index !== gameState.activePokemonIndex && pokemon.currentHP > 0) {
                switchPokemon(index);
            }
        });
        
        teamSelection.appendChild(pokemonCard);
    });
}

function switchPokemon(newIndex) {
    if (!canPlayerBattleAct({ allowForcedSwitch: true })) return;

    const consumeTurn = !battleTurnState.forcedSwitch;
    battleTurnState.forcedSwitch = false;

    lockBattleActions();
    cancelPendingEnemyTurn();

    const oldPokemon = getActivePokemon();
    clearPokemonBattleEffects(oldPokemon);
    clearPokemonBattleEffects(gameState.currentEnemy);

    gameState.activePokemonIndex = newIndex;
    const newPokemon = getActivePokemon();
    
    // Reproducir grito del Pokémon
    AudioSystem.playPokemonCry(newPokemon.data.id);
    
    showMessage(`¡Adelante, ${getPokemonDisplayName(newPokemon)}!`);
    updateBattleDisplay();
    showBattleMainMenu();

    if (consumeTurn) {
        queueEnemyTurn(1500);
    } else {
        unlockBattleActions();
    }
}

function useMove(moveIndex) {
    if (!canPlayerBattleAct()) return;

    const player = getActivePokemon();
    if (!player || !player.moves || moveIndex >= player.moves.length) return;
    
    const move = player.moves[moveIndex];
    if (move.currentPP === 0) {
        showMessage(`¡${move.name} no tiene PP!`);
        return;
    }
    
    // Reducir PP
    move.currentPP--;
    showBattleMainMenu();
    
    // Ejecutar turno de batalla con el movimiento elegido
    executeBattleTurn(move);
}

function useExterminate() {
    if (!gameState.secrets.exterminarEnabled) return;
    if (!canPlayerBattleAct()) return;

    const enemy = gameState.currentEnemy;
    if (!enemy) return;

    lockBattleActions();
    cancelPendingEnemyTurn();

    enemy.currentHP = 0;
    showMessage(`💀 ¡${getPokemonDisplayName(enemy)} fue exterminado al instante!`);
    updateBattleDisplay();

    setTimeout(() => {
        checkBattleEnd();
        if (!battleTurnState.forcedSwitch) {
            unlockBattleActions();
        }
    }, 350);
}

function playerAttack() {
    // Esta función ahora solo se usa como fallback - normalmente se usan movimientos
    const player = getActivePokemon();
    const damage = calculateDamage(
        { stats: player.data.stats, level: player.level },
        { stats: gameState.currentEnemy.data.stats, level: gameState.currentEnemy.level }
    );
    
    gameState.currentEnemy.currentHP = Math.max(0, gameState.currentEnemy.currentHP - damage);
    showMessage(`${player.data.name} ataca e inflige ${damage} de daño!`);
    updateBattleDisplay();
    
    if (gameState.currentEnemy.currentHP === 0) {
        setTimeout(() => battleWon(), 1000);
        return;
    }
    
    setTimeout(() => executeEnemyTurn(), 1500);
}

// Ejecutar turno del enemigo (cuando el jugador usa item o cambia Pokémon)
function executeEnemyTurn() {
    lockBattleActions();

    const enemy = gameState.currentEnemy;
    const player = getActivePokemon();
    
    if (!enemy || !player || player.currentHP === 0) {
        unlockBattleActions();
        return;
    }
    
    const enemyMoves = enemy.moves.filter(m => m.currentPP > 0);
    if (enemyMoves.length === 0) {
        showMessage(`¡${enemy.data.name} no tiene movimientos!`);
        unlockBattleActions();
        return;
    }
    
    const enemyMove = enemyMoves[Math.floor(Math.random() * enemyMoves.length)];
    enemyMove.currentPP--;
    
    // Reproducir grito del enemigo al atacar
    AudioSystem.playPokemonCry(enemy.data.id);
    
    let damage = 0;
    if (enemyMove.power > 0) {
        damage = calculateDamage(enemy, player, enemyMove.power);
        player.currentHP = Math.max(0, player.currentHP - damage);
    }
    
    showMessage(`¡${getPokemonDisplayName(enemy)} usó ${enemyMove.name}!${damage > 0 ? ` ¡Causó ${damage} de daño!` : ''}`);
    updateBattleDisplay();
    updatePokemonDisplay();

    applyLeechSeedEndTurnEffects();

    if (checkBattleEnd()) {
        if (!battleTurnState.forcedSwitch) {
            unlockBattleActions();
        }
        return;
    }
    
    if (player.currentHP === 0) {
        const availablePokemon = gameState.team.findIndex((p, i) => i !== gameState.activePokemonIndex && p.currentHP > 0);
        
        if (availablePokemon !== -1) {
            battleTurnState.forcedSwitch = true;
            showMessage(`¡${getPokemonDisplayName(player)} se debilitó! ¡Elige otro Pokémon!`);
            setTimeout(() => showPokemonMenu(), 1500);
        } else {
            setTimeout(battleLost, 1000);
        }
        return;
    }

    unlockBattleActions();
}

// Sistema de turnos basado en velocidad
function disableBattleButtons() {
    const buttons = document.querySelectorAll('#battle-modal .battle-button');
    buttons.forEach(btn => btn.disabled = true);
}

function enableBattleButtons() {
    const buttons = document.querySelectorAll('#battle-modal .battle-button');
    buttons.forEach(btn => btn.disabled = false);
}

function executeBattleTurn(playerMove) {
    if (!canPlayerBattleAct()) return;

    const player = getActivePokemon();
    const enemy = gameState.currentEnemy;
    
    if (!player || !enemy) return;
    
    lockBattleActions();
    cancelPendingEnemyTurn();
    
    // Seleccionar movimiento del enemigo
    const enemyMoves = enemy.moves.filter(m => m.currentPP > 0);
    if (enemyMoves.length === 0) {
        console.error('El enemigo no tiene movimientos disponibles');
        unlockBattleActions();
        return;
    }
    const enemyMove = enemyMoves[Math.floor(Math.random() * enemyMoves.length)];
    
    // Determinar quién ataca primero basado en velocidad
    const playerSpeed = getEffectiveSpeed(player);
    const enemySpeed = getEffectiveSpeed(enemy);
    
    let firstAttacker, secondAttacker, firstMove, secondMove;
    
    if (playerSpeed > enemySpeed) {
        firstAttacker = { pokemon: player, move: playerMove, isPlayer: true };
        secondAttacker = { pokemon: enemy, move: enemyMove, isPlayer: false };
    } else if (enemySpeed > playerSpeed) {
        firstAttacker = { pokemon: enemy, move: enemyMove, isPlayer: false };
        secondAttacker = { pokemon: player, move: playerMove, isPlayer: true };
    } else {
        const enemyFirst = Math.random() < 0.5;
        firstAttacker = enemyFirst
            ? { pokemon: enemy, move: enemyMove, isPlayer: false }
            : { pokemon: player, move: playerMove, isPlayer: true };
        secondAttacker = enemyFirst
            ? { pokemon: player, move: playerMove, isPlayer: true }
            : { pokemon: enemy, move: enemyMove, isPlayer: false };
    }
    
    // Ejecutar primer ataque
    executeAttack(firstAttacker.pokemon, firstAttacker.move, firstAttacker.isPlayer);
    
    setTimeout(() => {
        // Verificar si el combate terminó después del primer ataque
        if (checkBattleEnd()) {
            if (!battleTurnState.forcedSwitch) {
                unlockBattleActions();
            }
            return;
        }
        
        // Ejecutar segundo ataque
        executeAttack(secondAttacker.pokemon, secondAttacker.move, secondAttacker.isPlayer);
        
        setTimeout(() => {
            applyLeechSeedEndTurnEffects();
            if (checkBattleEnd()) {
                if (!battleTurnState.forcedSwitch) {
                    unlockBattleActions();
                }
                return;
            }
            checkBattleEnd();
            if (!battleTurnState.forcedSwitch) {
                unlockBattleActions();
            }
        }, 1000);
    }, 2000);
}

function executeAttack(attacker, move, isPlayerAttacking) {
    const player = getActivePokemon();
    const enemy = gameState.currentEnemy;
    
    let attackerPokemon, defenderPokemon;
    
    if (isPlayerAttacking) {
        attackerPokemon = player;
        defenderPokemon = enemy;
        // Reproducir grito del jugador al atacar
        AudioSystem.playPokemonCry(player.data.id);
    } else {
        attackerPokemon = enemy;
        defenderPokemon = player;
        // Reproducir grito del enemigo al atacar
        AudioSystem.playPokemonCry(enemy.data.id);
        // Reducir PP del enemigo
        move.currentPP--;
    }

    ensurePokemonBattleState(attackerPokemon);
    ensurePokemonBattleState(defenderPokemon);
    
    // Verificar si el atacante está debilitado
    if (attackerPokemon.currentHP === 0) {
        return;
    }
    
    let damage = 0;
    if (move.power > 0) {
        damage = calculateDamage(attackerPokemon, defenderPokemon, move.power);
        defenderPokemon.currentHP = Math.max(0, defenderPokemon.currentHP - damage);
    } else {
        if (move.moveKey === 'growl') {
            const result = applyAttackStageChange(defenderPokemon, -1);
            if (result.changed) {
                showMessage(`¡${getPokemonDisplayName(defenderPokemon)} bajó su Ataque! (x${Math.abs(result.after)})`);
            } else {
                showMessage(`¡El Ataque de ${getPokemonDisplayName(defenderPokemon)} no puede bajar más!`);
            }
            updateBattleDisplay();
            updatePokemonDisplay();
            return;
        }

        if (move.moveKey === 'growth' || move.moveKey === 'swords-dance') {
            const stageGain = move.moveKey === 'swords-dance' ? 2 : 1;
            const result = applyAttackStageChange(attackerPokemon, stageGain);
            if (result.changed) {
                showMessage(`¡El Ataque de ${getPokemonDisplayName(attackerPokemon)} aumentó! (x${Math.abs(result.after)})`);
            } else {
                showMessage(`¡El Ataque de ${getPokemonDisplayName(attackerPokemon)} no puede subir más!`);
            }
            updateBattleDisplay();
            updatePokemonDisplay();
            return;
        }

        if (move.moveKey === 'leech-seed') {
            if (defenderPokemon.statusEffects.leechSeed) {
                showMessage(`¡${getPokemonDisplayName(defenderPokemon)} ya está afectado por Drenadoras!`);
            } else {
                defenderPokemon.statusEffects.leechSeed = true;
                defenderPokemon.statusEffects.seededBy = isPlayerAttacking ? 'player' : 'enemy';
                showMessage(`¡${getPokemonDisplayName(defenderPokemon)} fue sembrado con Drenadoras!`);
            }
            updateBattleDisplay();
            updatePokemonDisplay();
            return;
        }
    }
    
    const attackerName = isPlayerAttacking ? getPokemonDisplayName(player) : getPokemonDisplayName(enemy);
    showMessage(`¡${attackerName} usó ${move.name}!${damage > 0 ? ` ¡Causó ${damage} de daño!` : ''}`);
    updateBattleDisplay();
    updatePokemonDisplay();
}

function checkBattleEnd() {
    const player = getActivePokemon();
    const enemy = gameState.currentEnemy;
    
    if (enemy.currentHP === 0) {
        if (!enemy.isWild && gameState.currentTrainerBattle && gameState.currentTrainerBattle.remainingTeam.length > 0) {
            const nextPokemon = gameState.currentTrainerBattle.remainingTeam.shift();
            gameState.currentEnemy = {
                ...nextPokemon,
                isWild: false,
                trainerId: gameState.currentTrainerBattle.trainerId,
                trainerName: gameState.currentTrainerBattle.trainerName,
                reward: gameState.currentTrainerBattle.reward,
                battleType: gameState.currentTrainerBattle.battleType
            };

            showMessage(`¡${gameState.currentEnemy.trainerName} envía a ${nextPokemon.data.name}!`);
            setTimeout(() => {
                AudioSystem.playPokemonCry(nextPokemon.data.id);
                updateBattleDisplay();
            }, 500);
            battleTurnState.forcedSwitch = false;
            gameState.battleEnding = false;
            return true;
        }

        if (!gameState.battleEnding) {
            gameState.battleEnding = true;
            lockBattleActions();
            setTimeout(() => battleWon(), 1000);
        }
        return true;
    }
    
    if (player.currentHP === 0) {
        const availablePokemon = gameState.team.findIndex((p, i) => i !== gameState.activePokemonIndex && p.currentHP > 0);
        
        if (availablePokemon !== -1) {
            battleTurnState.forcedSwitch = true;
            showMessage(`¡${getPokemonDisplayName(player)} se debilitó! ¡Elige otro Pokémon!`);
            setTimeout(() => showPokemonMenu(), 1500);
        } else {
            battleTurnState.forcedSwitch = false;
            setTimeout(battleLost, 1000);
        }
        return true;
    }
    
    return false;
}

function battleWon() {
    resetBattleTurnState();

    const expGained = Math.floor(gameState.currentEnemy.data.baseExp * gameState.currentEnemy.level * 1.5);
    
    const player = getActivePokemon();
    
    // Reproducir sonido de victoria
    AudioSystem.playSFX('victory');
    
    if (!gameState.currentEnemy.isWild) {
        // Batalla de entrenador
        gameState.money += gameState.currentEnemy.reward;
        gameState.progress.defeatedTrainers.push(gameState.currentEnemy.trainerId);
        gameState.progress.currentTrainerIndex++; // Incrementar índice de entrenador
        showMessage(`¡Ganaste! Obtuviste ${expGained} EXP y $${gameState.currentEnemy.reward}!`);

        handleTrainerDefeatEvents(gameState.currentEnemy.trainerId);
    } else {
        // Batalla salvaje
        showMessage(`¡Victoria! ${player.data.name} ganó ${expGained} puntos de experiencia!`);
    }
    
    gainExperience(expGained);
    
    // Avanzar en la secuencia
    gameState.progress.sequenceStep++;
    
    setTimeout(() => {
        modals.battle.classList.remove('active');
        gameState.inBattle = false;
        gameState.battleEnding = false;
        gameState.currentEnemy = null;
        gameState.currentTrainerBattle = null;
        
        // Volver a música de fondo
        AudioSystem.playOverworldMusicForCurrentZone();
        
        updateProgress();
        updatePokemonDisplay();
        updateZoneDisplay();
        
        // Guardar progreso
        autoSave();

        consumePendingEvolution();
        consumePendingBadgeReward();
        
        // Mensaje según el paso en que quedamos
        const step = gameState.progress.sequenceStep;
        const sequenceLength = getZoneSequence(ZONES_DATA[gameState.currentZone]).length;
        if (step >= sequenceLength) {
            showMessage('¡Zona completada! Presiona AVANZAR para continuar a la siguiente zona.');
        } else {
            showMessage('Presiona AVANZAR para continuar tu aventura.');
        }
    }, 2000);
}

function handleTrainerDefeatEvents(trainerId) {
    if (trainerId === 'mt-moon-scientist' && !gameState.progress.storyFlags.mtMoonFossilChosen) {
        chooseMtMoonFossil();
    }

    if (!gameState.progress.badges) {
        gameState.progress.badges = [];
    }

    const rewardedBadgeKey = TRAINER_BADGE_REWARDS[trainerId];
    if (rewardedBadgeKey && !gameState.progress.badges.includes(rewardedBadgeKey)) {
        gameState.progress.badges.push(rewardedBadgeKey);
        queueBadgeReward(rewardedBadgeKey);
        updateBadgesDisplay();
    }
}

async function chooseMtMoonFossil() {
    const chooseDome = await openChoiceDialog({
        title: 'Elección de Fósil',
        message: 'Derrotaste al científico. ¿Quieres tomar el Fósil Domo? (Si eliges No, tomarás el Fósil Helix)',
        confirmText: 'Fósil Domo',
        cancelText: 'Fósil Helix'
    });

    const fossil = chooseDome ? 'Fósil Domo' : 'Fósil Helix';
    gameState.progress.storyFlags.mtMoonFossilChosen = true;
    gameState.progress.fossils.push(fossil);

    showMessage(`¡Elegiste ${fossil}! Fue guardado entre tus objetos clave.`);
}

function battleLost() {
    resetBattleTurnState();

    showMessage('¡Tu pokemon ha sido derrotado! Volviendo al centro pokemon...');
    
    setTimeout(() => {
        modals.battle.classList.remove('active');
        gameState.inBattle = false;
        gameState.battleEnding = false;
        gameState.currentEnemy = null;
        
        // Resetear progreso de la secuencia actual
        gameState.progress.sequenceStep = 0;
        gameState.progress.currentTrainerIndex = 0;
        gameState.progress.defeatedTrainers = gameState.progress.defeatedTrainers.filter(id => {
            // Mantener solo entrenadores de zonas anteriores
            const zone = ZONES_DATA[gameState.currentZone];
            return !zone.trainers.some(t => t.id === id);
        });
        
        // Curar todo el equipo
        gameState.team.forEach(pokemon => {
            pokemon.currentHP = pokemon.maxHP;
            if (pokemon.moves && pokemon.moves.length > 0) {
                pokemon.moves.forEach(move => {
                    if (move && move.maxPP !== undefined) {
                        move.currentPP = move.maxPP;
                    }
                });
            }
        });
        
        gameState.activePokemonIndex = 0;
        
        updateProgress();
        updatePokemonDisplay();
        AudioSystem.playOverworldMusicForCurrentZone();
        showMessage('Todos tus Pokémon han sido curados. ¡Intenta de nuevo desde el inicio de la zona!');
    }, 2000);
}

function usePotionInBattle() {
    if (!canPlayerBattleAct()) return;

    const player = getActivePokemon();
    if (!player) return;
    
    if (gameState.inventory.potion === 0) {
        showMessage('No tienes pociones.');
        return;
    }
    
    lockBattleActions();
    
    // Reproducir sonido de curación
    AudioSystem.playSFX('heal');
    
    gameState.inventory.potion--;
    player.currentHP = Math.min(
        player.maxHP,
        player.currentHP + 20
    );
    
    showMessage('Usaste una poción! +20 HP');
    updateBattleDisplay();
    updatePokemonDisplay();
    showBattleMainMenu();
    
    queueEnemyTurn(1500);
}

const CAPTURE_BALL_SPRITES = {
    pokeball: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
    'great-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png'
};

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function triggerCaptureVibration(pattern) {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
        navigator.vibrate(pattern);
    }
}

function playCaptureShakeFeedback(stage) {
    if (stage === 1) {
        AudioSystem.playSFX('select');
        triggerCaptureVibration(35);
        return;
    }

    if (stage === 2) {
        AudioSystem.playSFX('click');
        triggerCaptureVibration([35, 25, 35]);
        return;
    }

    AudioSystem.playSFX('select');
    triggerCaptureVibration([45, 30, 45]);
}

function playCaptureFailFeedback(stage) {
    AudioSystem.playSFX('click');

    if (stage === 1) {
        triggerCaptureVibration([90, 60, 90]);
        return;
    }

    if (stage === 2) {
        triggerCaptureVibration([120, 70, 120]);
        return;
    }

    triggerCaptureVibration([150, 80, 150]);
}

function calculateCatchChance(ballType, enemyPokemon) {
    const hpPercent = enemyPokemon.currentHP / enemyPokemon.maxHP;
    const level = enemyPokemon.level || 5;

    const baseChance = 0.45;
    const hpBonus = (1 - hpPercent) * 0.4;
    const levelPenalty = Math.min(0.3, level * 0.006);
    const ballBonus = ballType === 'great-ball' ? 0.18 : 0;

    const catchChance = baseChance + hpBonus + ballBonus - levelPenalty;
    return Math.max(0.05, Math.min(0.95, catchChance));
}

function determineFailStage(catchChance, roll) {
    const miss = (roll - catchChance) / Math.max(0.0001, 1 - catchChance);
    if (miss < 0.2) return 3;
    if (miss < 0.55) return 2;
    return 1;
}

async function playCaptureAnimation(ballType, catchChance) {
    const captureModal = modals.capture;
    const ballEl = document.getElementById('capture-ball');
    const textEl = document.getElementById('capture-text');
    if (!captureModal || !ballEl || !textEl) {
        return { captured: Math.random() < catchChance, failStage: 1 };
    }

    const roll = Math.random();
    const captured = roll < catchChance;
    const failStage = captured ? null : determineFailStage(catchChance, roll);

    ballEl.src = CAPTURE_BALL_SPRITES[ballType] || CAPTURE_BALL_SPRITES.pokeball;
    textEl.textContent = '...';
    captureModal.classList.add('active');
    await wait(350);

    for (let shake = 1; shake <= 3; shake++) {
        textEl.textContent = `${shake}`;
        ballEl.classList.remove('capture-shake');
        ballEl.classList.remove('capture-breakfree');
        void ballEl.offsetWidth;
        ballEl.classList.add('capture-shake');
        playCaptureShakeFeedback(shake);
        await wait(700);

        if (!captured && failStage === shake) {
            textEl.textContent = `Falló en ${shake}`;
            ballEl.classList.remove('capture-shake');
            void ballEl.offsetWidth;
            ballEl.classList.add('capture-breakfree');
            playCaptureFailFeedback(shake);
            await wait(500);
            captureModal.classList.remove('active');
            ballEl.classList.remove('capture-breakfree');
            return { captured: false, failStage };
        }
    }

    textEl.textContent = '¡¡¡capturado!!!';
    AudioSystem.playSFX('capture');
    triggerCaptureVibration([80, 40, 80, 40, 160]);
    await wait(900);
    captureModal.classList.remove('active');
    return { captured: true, failStage: null };
}

async function throwPokeball(ballType = 'pokeball') {
    if (!canPlayerBattleAct()) {
        showMessage('Espera a que termine el turno actual.');
        return;
    }

    if (!gameState.currentEnemy.isWild) {
        showMessage('¡No puedes capturar pokemon de otros entrenadores!');
        return;
    }

    if (ballType === 'great-ball') {
        if ((gameState.inventory['great-ball'] || 0) <= 0) {
            showMessage('No tienes Super Ball.');
            return;
        }
    } else if (gameState.inventory.pokeball === 0) {
        showMessage('No tienes pokeballs.');
        return;
    }
    
    // Deshabilitar botones durante el lanzamiento
    lockBattleActions();
    
    if (ballType === 'great-ball') {
        gameState.inventory['great-ball']--;
    } else {
        gameState.inventory.pokeball--;
    }
    modals.bag.classList.remove('active');
    
    const catchChance = calculateCatchChance(ballType, gameState.currentEnemy);
    const captureResult = await playCaptureAnimation(ballType, catchChance);
    
    if (captureResult.captured) {
        
        // Crear copia del Pokémon capturado (sin duplicar la referencia)
        const caughtPokemon = {
            key: gameState.currentEnemy.key,
            data: gameState.currentEnemy.data,
            nickname: null,
            level: gameState.currentEnemy.level,
            currentExp: 0,
            neededExp: gameState.currentEnemy.neededExp,
            currentHP: gameState.currentEnemy.maxHP,
            maxHP: gameState.currentEnemy.maxHP,
            moves: gameState.currentEnemy.moves.map(m => ({ ...m, currentPP: m.maxPP })),
            statStages: { attack: 0 },
            statusEffects: { leechSeed: false, seededBy: null }
        };

        const caughtNickname = await requestPokemonNickname(caughtPokemon.data.name);
        caughtPokemon.nickname = caughtNickname;
        
        addPokemon(caughtPokemon);
        
        showMessage(`¡Atrapaste a ${getPokemonDisplayName(caughtPokemon)}!`);
        
        // Avanzar en la secuencia (solo si es batalla salvaje)
        gameState.progress.sequenceStep++;
        
        setTimeout(() => {
            modals.battle.classList.remove('active');
            gameState.inBattle = false;
            gameState.battleEnding = false;
            gameState.currentEnemy = null;
            resetBattleTurnState();
            
            // Volver a música de fondo
            AudioSystem.playOverworldMusicForCurrentZone();
            
            updateProgress();
            updatePokemonDisplay();
            updateZoneDisplay();
            enableBattleButtons();
            
            // Guardar progreso
            autoSave();
            
            const step = gameState.progress.sequenceStep;
            const sequenceLength = getZoneSequence(ZONES_DATA[gameState.currentZone]).length;
            if (step >= sequenceLength) {
                showMessage('¡Zona completada! Presiona AVANZAR para continuar a la siguiente zona.');
            } else {
                showMessage('Presiona AVANZAR para continuar tu aventura.');
            }
        }, 2000);
    } else {
        const stageText = captureResult.failStage ? ` en ${captureResult.failStage}` : '';
        showMessage(`${getPokemonDisplayName(gameState.currentEnemy)} se liberó${stageText}!`);
        queueEnemyTurn(1500);
    }
}

function runFromBattle() {
    if (!canPlayerBattleAct()) return;

    if (!gameState.currentEnemy.isWild) {
        showMessage('¡No puedes huir de un entrenador!');
        return;
    }
    
    showMessage('Huiste con éxito.');
    setTimeout(() => {
        modals.battle.classList.remove('active');
        gameState.inBattle = false;
        gameState.battleEnding = false;
        gameState.currentEnemy = null;
        resetBattleTurnState();
        AudioSystem.playOverworldMusicForCurrentZone();
    }, 1000);
}
// ===== SISTEMA DE EXPERIENCIA Y EVOLUCIÓN =====

// Ganar experiencia
function gainExperience(amount) {
    const pokemon = getActivePokemon();
    if (!pokemon) return;
    
    pokemon.currentExp += amount;
    
    // Verificar si sube de nivel
    while (pokemon.currentExp >= pokemon.neededExp) {
        levelUp();
    }
    
    updatePokemonDisplay();
}

// Subir de nivel
function levelUp() {
    const pokemon = getActivePokemon();
    if (!pokemon) return;
    
    pokemon.level++;
    pokemon.currentExp -= pokemon.neededExp;
    pokemon.neededExp = Math.floor(15 * Math.pow(pokemon.level, 1.3));
    
    // Aumentar stats
    const oldMaxHP = pokemon.maxHP;
    pokemon.maxHP = calculateHP(pokemon.data.stats.hp, pokemon.level);
    pokemon.currentHP += (pokemon.maxHP - oldMaxHP); // Curar la diferencia
    
    showMessage(`¡${pokemon.data.name} subió al nivel ${pokemon.level}!`);
    
    // Aprender nuevos movimientos
    learnMovesAtLevel(pokemon);
    
    // Verificar evolución
    checkEvolution();
}

// Aprender movimientos al subir de nivel
function learnMovesAtLevel(pokemon) {
    const moveset = POKEMON_MOVESETS[pokemon.key] || [];
    const newMoves = moveset.filter(m => m.level === pokemon.level);
    
    newMoves.forEach(moveData => {
        const move = MOVES_DATABASE[moveData.move];
        if (!move) return;
        
        // Verificar si ya conoce el movimiento
        const alreadyKnows = pokemon.moves.some(m => m.name === move.name);
        if (alreadyKnows) return;
        
        if (pokemon.moves.length < 4) {
            // Añadir movimiento si tiene espacio
            pokemon.moves.push({ ...move, moveKey: moveData.move, currentPP: move.maxPP });
            showMessage(`¡${pokemon.data.name} aprendió ${move.name}!`);
        } else {
            // Aquí podrías implementar la opción de olvidar un movimiento
            showMessage(`${pokemon.data.name} quiere aprender ${move.name}, pero ya conoce 4 movimientos.`);
        }
    });
}

// Verificar evolución
function checkEvolution() {
    const pokemon = getActivePokemon();
    if (!pokemon) return;
    
    const evolution = pokemon.data.evolution;
    
    if (!evolution || evolution.method !== 'level') {
        return;
    }
    
    if (pokemon.level >= evolution.level) {
        if (gameState.inBattle || gameState.battleEnding || (modals.battle && modals.battle.classList.contains('active'))) {
            queuePendingEvolution(pokemon.key, evolution.evolvesTo);
            return;
        }
        evolvePokemon(evolution.evolvesTo);
    }
}

// Evolucionar Pokémon
function evolvePokemon(newPokemonKey) {
    const pokemon = getActivePokemon();
    if (!pokemon) return;
    
    const oldPokemon = pokemon.data;
    const newPokemon = POKEMON_DATABASE[newPokemonKey];
    
    if (!newPokemon) {
        console.error('Pokémon de evolución no encontrado:', newPokemonKey);
        return;
    }
    
    // Mostrar animación de evolución
    document.getElementById('evolving-pokemon-name').textContent = oldPokemon.name;
    document.getElementById('old-pokemon-name').textContent = oldPokemon.name;
    document.getElementById('new-pokemon-name').textContent = newPokemon.name;
    document.getElementById('before-evolution').src = oldPokemon.sprite;
    document.getElementById('after-evolution').src = newPokemon.sprite;
    resetEvolutionAnimationState();
    modals.evolution.classList.add('active');
    startEvolutionAnimation();
    AudioSystem.playEvolutionMusic();
    
    // Actualizar datos del Pokémon
    pokemon.key = newPokemonKey;
    pokemon.data = newPokemon;
    pokemon.maxHP = calculateHP(newPokemon.stats.hp, pokemon.level);
    pokemon.currentHP = pokemon.maxHP;
    
    // Actualizar movimientos para la nueva forma
    learnMovesAtLevel(pokemon);
}

// ===== SISTEMA DE MOCHILA =====

function openBag(context = 'field') {
    gameState.bagContext = context;
    modals.bag.classList.add('active');
    updateBagDisplay();
}

function updateBagDisplay() {
    const activeTab = document.querySelector('.bag-tab.active');
    const tabType = activeTab ? activeTab.getAttribute('data-tab') : 'items';
    const inventoryDiv = document.getElementById('bag-inventory');
    inventoryDiv.innerHTML = '';
    
    const categories = {
        items: [
            { key: 'potion', name: 'Poción', description: 'Restaura 20 HP', count: gameState.inventory.potion },
            { key: 'super-potion', name: 'Super Poción', description: 'Restaura 50 HP', count: gameState.inventory['super-potion'] },
            { key: 'antidote', name: 'Antídoto', description: 'Cura envenenamiento', count: gameState.inventory.antidote },
            { key: 'paralyz-heal', name: 'Antiparálisis', description: 'Cura parálisis', count: gameState.inventory['paralyz-heal'] }
        ],
        pokeballs: [
            { key: 'pokeball', name: 'Pokéball', description: 'Para capturar Pokémon', count: gameState.inventory.pokeball },
            { key: 'great-ball', name: 'Super Ball', description: 'Mayor probabilidad de captura', count: gameState.inventory['great-ball'] }
        ],
        tm: [
            { key: 'tm34', name: 'MT34', description: 'MT disponible en futuras versiones', count: 0 }
        ],
        keyitems: [
            ...((gameState.progress.fossils || []).map((fossil, index) => ({
                key: `fossil-${index}`,
                name: fossil,
                description: 'Objeto clave de la historia',
                count: 1,
                keyItem: true
            }))),
            ...((gameState.progress.badges || []).map((badge, index) => ({
                key: `badge-${index}`,
                name: `${badge} Badge`,
                description: 'Insignia de gimnasio',
                count: 1,
                keyItem: true
            })))
        ]
    };

    const selectedItems = categories[tabType] || [];

    const bagItemSprites = {
        potion: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png',
        'super-potion': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png',
        antidote: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png',
        'paralyz-heal': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png',
        pokeball: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
        'great-ball': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png'
    };

    if (selectedItems.length === 0 || selectedItems.every(item => item.count <= 0)) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'inventory-empty';
        emptyDiv.textContent = 'No hay objetos en esta categoría.';
        inventoryDiv.appendChild(emptyDiv);
        return;
    }

    selectedItems.forEach(item => {
        if (item.count <= 0 && !item.keyItem) return;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item';

        const canUse = !item.keyItem && tabType !== 'tm';
        const isBattle = gameState.inBattle && gameState.bagContext === 'battle';
        const useDisabled =
            item.count <= 0 ||
            (tabType === 'pokeballs' && (!isBattle || !gameState.currentEnemy || !gameState.currentEnemy.isWild)) ||
            (tabType === 'items' && isBattle && item.key !== 'potion' && item.key !== 'super-potion');

        itemDiv.innerHTML = `
            <div class="inventory-item-main">
                <img class="inventory-item-sprite" src="${bagItemSprites[item.key] || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'}" alt="${item.name}">
                <div>
                    <div class="item-name">${item.name} x${item.count}</div>
                    <div class="item-description">${item.description}</div>
                </div>
            </div>
            ${canUse ? `<button onclick="useBagItem('${item.key}')" ${useDisabled ? 'disabled' : ''}>${tabType === 'pokeballs' ? 'Lanzar' : 'Usar'}</button>` : ''}
        `;
        inventoryDiv.appendChild(itemDiv);
    });
}

function useBagItem(itemKey) {
    if (gameState.inBattle && gameState.bagContext === 'battle') {
        useItemInBattle(itemKey);
        return;
    }

    useItem(itemKey);
}

function useItem(itemKey) {
    if (gameState.inventory[itemKey] === 0) {
        showMessage('No tienes este item.');
        return;
    }

    const activePokemon = getActivePokemon();
    if (!activePokemon) {
        showMessage('No tienes Pokémon activos para usar este objeto.');
        return;
    }
    
    if (itemKey === 'potion') {
        gameState.inventory.potion--;
        activePokemon.currentHP = Math.min(
            activePokemon.maxHP,
            activePokemon.currentHP + 20
        );
        showMessage('Usaste una poción! +20 HP');
    } else if (itemKey === 'super-potion') {
        gameState.inventory['super-potion']--;
        activePokemon.currentHP = Math.min(
            activePokemon.maxHP,
            activePokemon.currentHP + 50
        );
        showMessage('Usaste una super poción! +50 HP');
    } else {
        showMessage('Este objeto no se puede usar aquí.');
        return;
    }
    
    updatePokemonDisplay();
    updateBagDisplay();
}

function useItemInBattle(itemKey) {
    if (!gameState.inBattle || !gameState.currentEnemy) {
        return;
    }

    if (!canPlayerBattleAct()) {
        showMessage('Espera a que termine el turno actual.');
        return;
    }

    if (itemKey === 'pokeball' || itemKey === 'great-ball') {
        if (!gameState.currentEnemy.isWild) {
            showMessage('¡No puedes capturar Pokémon de entrenador!');
            return;
        }

        throwPokeball(itemKey);
        return;
    }

    if (itemKey !== 'potion' && itemKey !== 'super-potion') {
        showMessage('Ese objeto no se puede usar durante la batalla.');
        return;
    }

    if (gameState.inventory[itemKey] <= 0) {
        showMessage('No tienes este objeto.');
        return;
    }

    const player = getActivePokemon();
    if (!player) return;

    lockBattleActions();

    if (itemKey === 'potion') {
        gameState.inventory.potion--;
        player.currentHP = Math.min(player.maxHP, player.currentHP + 20);
        showMessage(`Usaste Poción en ${getPokemonDisplayName(player)} (+20 HP).`);
    } else {
        gameState.inventory['super-potion']--;
        player.currentHP = Math.min(player.maxHP, player.currentHP + 50);
        showMessage(`Usaste Super Poción en ${getPokemonDisplayName(player)} (+50 HP).`);
    }

    modals.bag.classList.remove('active');
    updateBattleDisplay();
    updatePokemonDisplay();

    queueEnemyTurn(1200);
}

// ===== SISTEMA DE MAPA =====

function openMap() {
    modals.map.classList.add('active');
    updateMapDisplay();
}

function updateMapDisplay() {
    const mapList = document.getElementById('map-list') || document.getElementById('map-display');
    if (!mapList) return;
    mapList.innerHTML = '';
    
    Object.keys(ZONES_DATA).forEach(zoneKey => {
        const zone = ZONES_DATA[zoneKey];
        const isUnlocked = gameState.unlockedZones.includes(zoneKey);
        const isCurrent = gameState.currentZone === zoneKey;
        
        const zoneDiv = document.createElement('div');
        zoneDiv.className = 'zone-item' + (isCurrent ? ' current' : '') + (!isUnlocked ? ' locked' : '');
        zoneDiv.innerHTML = `
            <div class="zone-item-name">${zone.name} ${isCurrent ? '📍' : ''}</div>
            ${isUnlocked && !isCurrent ? `<button onclick="travelToZone('${zoneKey}')">Viajar</button>` : ''}
            ${!isUnlocked ? '<span>🔒 Bloqueado</span>' : ''}
        `;
        mapList.appendChild(zoneDiv);
    });
}

function travelToZone(zoneKey) {
    if (!gameState.unlockedZones.includes(zoneKey)) {
        showMessage('Esta zona aún no está desbloqueada.');
        return;
    }
    
    gameState.currentZone = zoneKey;
    gameState.progress.sequenceStep = 0;
    gameState.progress.currentTrainerIndex = 0;
    
    modals.map.classList.remove('active');
    updateZoneDisplay();
    updateProgress();
    showMessage(`Has viajado a ${ZONES_DATA[zoneKey].name}.`);
}

// ===== SISTEMA DE TIENDA =====

function openShop() {
    const zone = ZONES_DATA[gameState.currentZone];
    if (!zone.shop || zone.shop.length === 0) {
        showMessage('No hay tienda en esta zona.');
        return;
    }
    
    modals.shop.classList.add('active');
    updateShopDisplay();
}

function updateShopDisplay() {
    const zone = ZONES_DATA[gameState.currentZone];
    const shopItems = document.getElementById('shop-items');
    shopItems.innerHTML = '';
    
    document.getElementById('player-money').textContent = gameState.money;
    
    zone.shop.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'shop-item';
        itemDiv.innerHTML = `
            <div class="shop-item-name">${item.name}</div>
            <div class="shop-item-description">${item.description}</div>
            <div class="shop-item-price">$${item.price}</div>
            <button onclick="buyItem('${item.key}', ${item.price})" ${gameState.money < item.price ? 'disabled' : ''}>
                Comprar
            </button>
        `;
        shopItems.appendChild(itemDiv);
    });
}

function buyItem(itemKey, price) {
    if (gameState.money < price) {
        showMessage('No tienes suficiente dinero.');
        return;
    }
    
    gameState.money -= price;
    gameState.inventory[itemKey]++;
    
    updateShopDisplay();
    updateZoneDisplay();
    showMessage(`Compraste ${itemKey}!`);
}

// ===== SISTEMA DE PC =====

function openPC() {
    if (!modals.pc) {
        console.error('PC modal not found');
        return;
    }
    
    modals.pc.classList.add('active');
    updatePCDisplay();
}

function updatePCDisplay() {
    // Actualizar equipo
    const pcTeam = document.getElementById('pc-team');
    pcTeam.innerHTML = '';
    
    gameState.team.forEach((pokemon, index) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card';
        if (pokemon.currentHP === 0) {
            pokemonCard.classList.add('fainted');
        }
        
        pokemonCard.innerHTML = `
            <img src="${pokemon.data.sprite}" alt="${pokemon.data.name}">
            <div class="pokemon-info">
                <strong>${getPokemonDisplayName(pokemon)}</strong> Nv.${pokemon.level} ${index === gameState.activePokemonIndex ? '⭐' : ''}
                <div>HP: ${pokemon.currentHP}/${pokemon.maxHP}</div>
                <div class="pc-actions-row">
                    <button onclick="setLeadPokemon(${index})">Líder</button>
                    <button onclick="moveTeamPokemonUp(${index})" ${index === 0 ? 'disabled' : ''}>↑</button>
                    <button onclick="moveTeamPokemonDown(${index})" ${index === gameState.team.length - 1 ? 'disabled' : ''}>↓</button>
                </div>
                <div class="pc-actions-row">
                    <button onclick="renameTeamPokemon(${index})">Renombrar</button>
                    <button onclick="depositPokemon(${index})" ${gameState.team.length <= 1 ? 'disabled' : ''}>Guardar</button>
                </div>
            </div>
        `;
        
        pcTeam.appendChild(pokemonCard);
    });
    
    // Actualizar almacenamiento
    const pcStorage = document.getElementById('pc-storage');
    pcStorage.innerHTML = '';
    
    if (gameState.pcStorage.length === 0) {
        pcStorage.innerHTML = '<p style="text-align:center; padding:20px;">No hay Pokémon almacenados</p>';
    } else {
        gameState.pcStorage.forEach((pokemon, index) => {
            const pokemonCard = document.createElement('div');
            pokemonCard.className = 'pokemon-card';
            
            pokemonCard.innerHTML = `
                <img src="${pokemon.data.sprite}" alt="${pokemon.data.name}">
                <div class="pokemon-info">
                    <strong>${getPokemonDisplayName(pokemon)}</strong> Nv.${pokemon.level}
                    <div>HP: ${pokemon.currentHP}/${pokemon.maxHP}</div>
                    <div class="pc-actions-row">
                        <button onclick="renameStoragePokemon(${index})">Renombrar</button>
                        <button onclick="withdrawPokemon(${index})" ${gameState.team.length >= 6 ? 'disabled' : ''}>Retirar</button>
                    </div>
                </div>
            `;
            
            pcStorage.appendChild(pokemonCard);
        });
    }
}

function depositPokemon(teamIndex) {
    if (gameState.team.length <= 1) {
        showMessage('¡No puedes guardar tu último Pokémon!');
        return;
    }
    
    const pokemon = gameState.team[teamIndex];
    gameState.pcStorage.push(pokemon);
    gameState.team.splice(teamIndex, 1);
    
    // Ajustar índice activo si es necesario
    if (gameState.activePokemonIndex >= gameState.team.length) {
        gameState.activePokemonIndex = 0;
    }
    
    showMessage(`${getPokemonDisplayName(pokemon)} fue guardado en el PC.`);
    updatePCDisplay();
    updatePokemonDisplay();
}

function withdrawPokemon(storageIndex) {
    if (gameState.team.length >= 6) {
        showMessage('Tu equipo está lleno. Guarda un Pokémon primero.');
        return;
    }
    
    const pokemon = gameState.pcStorage[storageIndex];
    gameState.team.push(pokemon);
    gameState.pcStorage.splice(storageIndex, 1);
    
    showMessage(`${getPokemonDisplayName(pokemon)} fue añadido a tu equipo.`);
    updatePCDisplay();
    updatePokemonDisplay();
}

function setLeadPokemon(teamIndex) {
    if (teamIndex < 0 || teamIndex >= gameState.team.length) return;
    gameState.activePokemonIndex = teamIndex;
    showMessage(`Ahora ${getPokemonDisplayName(gameState.team[teamIndex])} lidera el equipo.`);
    updatePCDisplay();
    updatePokemonDisplay();
    autoSave();
}

function moveTeamPokemonUp(teamIndex) {
    if (teamIndex <= 0 || teamIndex >= gameState.team.length) return;
    const temp = gameState.team[teamIndex - 1];
    gameState.team[teamIndex - 1] = gameState.team[teamIndex];
    gameState.team[teamIndex] = temp;

    if (gameState.activePokemonIndex === teamIndex) {
        gameState.activePokemonIndex = teamIndex - 1;
    } else if (gameState.activePokemonIndex === teamIndex - 1) {
        gameState.activePokemonIndex = teamIndex;
    }

    updatePCDisplay();
    updatePokemonDisplay();
    autoSave();
}

function moveTeamPokemonDown(teamIndex) {
    if (teamIndex < 0 || teamIndex >= gameState.team.length - 1) return;
    const temp = gameState.team[teamIndex + 1];
    gameState.team[teamIndex + 1] = gameState.team[teamIndex];
    gameState.team[teamIndex] = temp;

    if (gameState.activePokemonIndex === teamIndex) {
        gameState.activePokemonIndex = teamIndex + 1;
    } else if (gameState.activePokemonIndex === teamIndex + 1) {
        gameState.activePokemonIndex = teamIndex;
    }

    updatePCDisplay();
    updatePokemonDisplay();
    autoSave();
}

function renameTeamPokemon(teamIndex) {
    const pokemon = gameState.team[teamIndex];
    if (!pokemon) return;

    requestPokemonNickname(pokemon.data.name, pokemon.nickname || '').then(nickname => {
        pokemon.nickname = nickname;
        showMessage(`Ahora se llama ${getPokemonDisplayName(pokemon)}.`);
        updatePCDisplay();
        updatePokemonDisplay();
        autoSave();
    });
}

function renameStoragePokemon(storageIndex) {
    const pokemon = gameState.pcStorage[storageIndex];
    if (!pokemon) return;

    requestPokemonNickname(pokemon.data.name, pokemon.nickname || '').then(nickname => {
        pokemon.nickname = nickname;
        showMessage(`Ahora se llama ${getPokemonDisplayName(pokemon)}.`);
        updatePCDisplay();
        autoSave();
    });
}

// ===== SISTEMA DE GUARDADO =====

function loadSaveSlots() {
    for (let slot = 1; slot <= 3; slot++) {
        const saveData = localStorage.getItem(`megapokemon_save_${slot}`);
        const slotContent = document.getElementById(`slot-${slot}-content`);
        
        if (saveData) {
            const data = JSON.parse(saveData);
            const firstPokemon = data.team && data.team[0] ? (data.team[0].nickname || data.team[0].data.name) : 'Sin Pokémon';
            const zone = ZONES_DATA[data.currentZone] ? ZONES_DATA[data.currentZone].name : data.currentZone;
            
            slotContent.innerHTML = `
                <div class="slot-info">
                    <p><span class="pokemon-name">${firstPokemon}</span> Nv.${data.team[0] ? data.team[0].level : 5}</p>
                    <p>Zona: ${zone}</p>
                    <p>Dinero: $${data.money}</p>
                    <p>Pokémon: ${data.team.length}/6</p>
                </div>
                <button class="delete-button" onclick="deleteSave(${slot}, event)">Borrar Partida</button>
            `;
        } else {
            slotContent.innerHTML = '<p class="empty-slot">Partida Nueva</p>';
        }
    }
}

function selectSaveSlot(slot) {
    currentSaveSlot = slot;
    const saveData = localStorage.getItem(`megapokemon_save_${slot}`);
    
    if (saveData) {
        // Cargar partida existente
        loadGame(slot);
        switchScreen(screens.saveSelect, screens.game);
        AudioSystem.playOverworldMusicForCurrentZone();
    } else {
        // Nueva partida
        resetGameState();
        switchScreen(screens.saveSelect, screens.intro);
        startIntroSequence();
        AudioSystem.playMainThemeMusic();
    }
}

function saveGame() {
    if (!currentSaveSlot) {
        console.error('No hay slot de guardado seleccionado');
        return;
    }
    
    const saveData = {
        currentZone: gameState.currentZone,
        playerName: gameState.playerName,
        rivalName: gameState.rivalName,
        unlockedZones: gameState.unlockedZones,
        team: gameState.team,
        pcStorage: gameState.pcStorage,
        caughtPokemon: gameState.caughtPokemon,
        activePokemonIndex: gameState.activePokemonIndex,
        inventory: gameState.inventory,
        money: gameState.money,
        progress: gameState.progress,
        secrets: gameState.secrets
    };
    
    localStorage.setItem(`megapokemon_save_${currentSaveSlot}`, JSON.stringify(saveData));
    console.log(`Partida guardada en slot ${currentSaveSlot}`);
}

function loadGame(slot) {
    const saveData = localStorage.getItem(`megapokemon_save_${slot}`);
    
    if (!saveData) {
        console.error(`No hay partida guardada en slot ${slot}`);
        return;
    }
    
    const data = JSON.parse(saveData);
    
    gameState.currentZone = data.currentZone;
    gameState.playerName = data.playerName || 'Entrenador';
    gameState.rivalName = data.rivalName || 'Rival';
    gameState.unlockedZones = data.unlockedZones;
    gameState.team = (data.team || []).map(normalizePokemonInstance);
    gameState.pcStorage = (data.pcStorage || []).map(normalizePokemonInstance);
    gameState.caughtPokemon = Array.isArray(data.caughtPokemon) ? data.caughtPokemon.map(normalizePokemonKey) : [];
    gameState.activePokemonIndex = Math.max(0, Math.min(data.activePokemonIndex || 0, Math.max(0, gameState.team.length - 1)));
    gameState.inventory = data.inventory;
    gameState.money = data.money;
    gameState.progress = data.progress;
    gameState.secrets = {
        exterminarEnabled: Boolean(data.secrets && data.secrets.exterminarEnabled) || isSecretUnlockedGlobally(),
        starterLevel67: Boolean(data.secrets && data.secrets.starterLevel67) || isSecretUnlockedGlobally()
    };
    if (!gameState.progress.storyFlags) gameState.progress.storyFlags = {};
    if (!gameState.progress.fossils) gameState.progress.fossils = [];
    if (!gameState.progress.badges) gameState.progress.badges = [];
    rebuildCaughtFromOwnedPokemon();
    gameState.bagContext = 'field';
    gameState.battleEnding = false;
    gameState.currentTrainerBattle = null;
    pendingEvolution = null;
    pendingBadgeReward = null;
    updateSelectionWelcome();
    
    updatePokemonDisplay();
    updateZoneDisplay();
    updateProgress();
    
    console.log(`Partida cargada del slot ${slot}`);
}

async function deleteSave(slot, event) {
    event.stopPropagation();

    const confirmed = await openChoiceDialog({
        title: 'Borrar partida',
        message: `¿Seguro que quieres borrar la Partida ${slot}?`,
        confirmText: 'Borrar',
        cancelText: 'Cancelar'
    });

    if (confirmed) {
        localStorage.removeItem(`megapokemon_save_${slot}`);
        loadSaveSlots();
        showMessage(`Partida ${slot} borrada.`);
    }
}

function resetGameState() {
    gameState.currentZone = 'pallet-town';
    gameState.playerName = 'Entrenador';
    gameState.rivalName = 'Rival';
    gameState.unlockedZones = ['pallet-town'];
    gameState.team = [];
    gameState.pcStorage = [];
    gameState.caughtPokemon = [];
    gameState.activePokemonIndex = 0;
    gameState.inventory = {
        pokeball: 5,
        potion: 0,
        'super-potion': 0,
        'great-ball': 0,
        antidote: 0,
        'paralyz-heal': 0
    };
    gameState.money = 3000;
    gameState.progress = {
        sequenceStep: 0,
        currentTrainerIndex: 0,
        defeatedTrainers: [],
        storyFlags: {},
        fossils: [],
        badges: []
    };
    gameState.secrets = {
        exterminarEnabled: isSecretUnlockedGlobally(),
        starterLevel67: isSecretUnlockedGlobally()
    };
    gameState.bagContext = 'field';
    gameState.battleEnding = false;
    gameState.currentTrainerBattle = null;
    pendingEvolution = null;
    pendingBadgeReward = null;
}

// Auto-guardar cada vez que cambia algo importante
function autoSave() {
    if (currentSaveSlot && gameState.team.length > 0) {
        saveGame();
    }
}

// Hacer funciones disponibles globalmente para onclick
window.selectSaveSlot = selectSaveSlot;
window.deleteSave = deleteSave;
window.travelToZone = travelToZone;
window.buyItem = buyItem;
window.depositPokemon = depositPokemon;
window.withdrawPokemon = withdrawPokemon;
window.setLeadPokemon = setLeadPokemon;
window.moveTeamPokemonUp = moveTeamPokemonUp;
window.moveTeamPokemonDown = moveTeamPokemonDown;
window.renameTeamPokemon = renameTeamPokemon;
window.renameStoragePokemon = renameStoragePokemon;
window.useBagItem = useBagItem;

// Iniciar el juego cuando se cargue la página
window.addEventListener('DOMContentLoaded', init);
