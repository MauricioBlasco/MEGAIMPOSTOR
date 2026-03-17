(() => {
  "use strict";

  const GAME_STATE = {
    CHARACTER_SELECT: "character_select",
    PLAYING: "playing",
    MERCHANT: "merchant",
    INVENTORY: "inventory",
    GAME_OVER: "game_over",
    VICTORY: "victory"
  };

  const MAX_WAVE = 10;
  const MERCHANT_INTERACT_RANGE = 56;
  const ENEMY_WAVE_INCREASE = 1.4;
  const WAVE_SPAWN_DURATION = 25;

  const ARENA = {
    x: 180,
    y: 60,
    size: 600
  };

  const input = {
    keys: new Set(),
    mouseX: 0,
    mouseY: 0,
    mouseDown: false
  };

  const CHARACTERS = [
    {
      id: "knight",
      name: "Iron Knight",
      startsUnlocked: true,
      hp: 190,
      speed: 165,
      meleeMult: 1.38,
      rangedMult: 0.78,
      magicMult: 0.72,
      armor: 0.16,
      dodge: 0.05,
      luck: 1,
      startWeapon: "iron_sword"
    },
    {
      id: "orc",
      name: "Axe Orc",
      startsUnlocked: true,
      hp: 225,
      speed: 145,
      meleeMult: 1.52,
      rangedMult: 0.7,
      magicMult: 0.64,
      armor: 0.08,
      dodge: 0.02,
      luck: 1,
      startWeapon: "battle_axe"
    },
    {
      id: "mage",
      name: "Blue Pyromancer",
      startsUnlocked: true,
      hp: 108,
      speed: 225,
      meleeMult: 0.72,
      rangedMult: 0.92,
      magicMult: 1.46,
      armor: 0.04,
      dodge: 0.12,
      luck: 1,
      startWeapon: "fire_wand"
    },
    {
      id: "hunter",
      name: "Lumber Hunter",
      startsUnlocked: true,
      hp: 108,
      speed: 225,
      meleeMult: 0.72,
      rangedMult: 1.46,
      magicMult: 0.92,
      armor: 0.04,
      dodge: 0.12,
      luck: 1.25,
      startWeapon: "crossbow"
    },
    {
      id: "frogfolk",
      name: "Bog Frogfolk",
      startsUnlocked: true,
      hp: 108,
      speed: 205,
      meleeMult: 0.72,
      rangedMult: 1.46,
      magicMult: 0.92,
      armor: 0.04,
      dodge: 0.2,
      luck: 1,
      startWeapon: "shortbow"
    },
    {
      id: "engineer",
      name: "Copper Engineer",
      startsUnlocked: true,
      hp: 160,
      speed: 214,
      meleeMult: 0.86,
      rangedMult: 0.84,
      magicMult: 1.0,
      armor: 0.07,
      dodge: 0.1,
      luck: 1,
      startWeapon: "soldering_iron"
    },
    {
      id: "conductor",
      name: "Conductor",
      startsUnlocked: false,
      unlockCategory: "characters",
      unlockId: "conductor",
      hp: 168,
      speed: 200,
      meleeMult: 1.0,
      rangedMult: 1.0,
      magicMult: 1.0,
      armor: 0.08,
      dodge: 0.08,
      luck: 1.25,
      startWeapon: "drone_weapon",
      trait: "Trait: Drone Specialist (+25% Drone Weapon damage)"
    },
    {
      id: "slot_machine_robot",
      name: "Slot Machine Robot",
      startsUnlocked: false,
      unlockCategory: "characters",
      unlockId: "slot_machine_robot",
      hp: 150,
      speed: 190,
      meleeMult: 1,
      rangedMult: 1,
      magicMult: 1,
      armor: 0.08,
      dodge: 0.07,
      luck: 4,
      startWeapon: "arc_staff",
      startingGold: 100,
      weaponLocked: true,
      trait: "Trait: Spend 1 Gold per attack. Damage rolls from 1 to 100 scale with Luck."
    },
    {
      id: "thief",
      name: "Thief",
      startsUnlocked: true,
      hp: 90,
      speed: 248,
      meleeMult: 0.85,
      rangedMult: 0.82,
      magicMult: 0.8,
      armor: 0.02,
      dodge: 0.24,
      luck: 1.2,
      startWeapon: "dagger",
      goldDropMultiplier: 2,
      trait: "Trait: Greed (x2 gold drops)."
    }
  ];

  const WEAPONS = {
    iron_sword: {
      id: "iron_sword",
      name: "Iron Sword",
      kind: "melee",
      damage: 35,
      cooldown: 0.5,
      range: 80,
      arc: Math.PI * 0.95,
      color: "#d8dde3"
    },
    battle_axe: {
      id: "battle_axe",
      name: "Battle Axe",
      kind: "melee",
      damage: 52,
      cooldown: 0.8,
      range: 95,
      arc: Math.PI * 1.1,
      color: "#b9c7d3"
    },
    arc_staff: {
      id: "arc_staff",
      name: "Arcane Staff",
      kind: "magic",
      damage: 24,
      cooldown: 0.35,
      projectileSpeed: 380,
      projectileSize: 7,
      color: "#6de0ff"
    },
    fire_wand: {
      id: "fire_wand",
      name: "Fire Wand",
      kind: "magic",
      damage: 18,
      cooldown: 0.22,
      projectileSpeed: 420,
      projectileSize: 5,
      color: "#ff9966"
    },
    shortbow: {
      id: "shortbow",
      name: "Shortbow",
      kind: "ranged",
      damage: 22,
      cooldown: 0.28,
      projectileSpeed: 500,
      projectileSize: 4,
      color: "#f0deaa"
    },
    crossbow: {
      id: "crossbow",
      name: "Crossbow",
      kind: "ranged",
      damage: 33,
      cooldown: 0.48,
      projectileSpeed: 620,
      projectileSize: 5,
      color: "#f1d98f"
    },
    thunder_hammer: {
      id: "thunder_hammer",
      name: "Thunder Hammer",
      kind: "melee",
      damage: 68,
      cooldown: 1.05,
      range: 112,
      arc: Math.PI * 1.2,
      color: "#9be9ff"
    },
    twin_daggers: {
      id: "twin_daggers",
      name: "Twin Daggers",
      kind: "melee",
      damage: 24,
      cooldown: 0.22,
      range: 68,
      arc: Math.PI * 0.78,
      color: "#ececec"
    },
    dagger: {
      id: "dagger",
      name: "Dagger",
      kind: "melee",
      damage: 10,
      goldScaling: 0.06,
      cooldown: 0.265,
      range: 70,
      arc: Math.PI * 0.72,
      color: "#e6e6e6"
    },
    frost_orb: {
      id: "frost_orb",
      name: "Frost Orb",
      kind: "magic",
      damage: 30,
      cooldown: 0.42,
      projectileSpeed: 320,
      projectileSize: 8,
      color: "#9fd8ff"
    },
    void_lance: {
      id: "void_lance",
      name: "Void Lance",
      kind: "ranged",
      damage: 47,
      cooldown: 0.58,
      projectileSpeed: 700,
      projectileSize: 6,
      color: "#d7a6ff"
    },
    oraculus: {
      id: "oraculus",
      name: "Oraculus",
      kind: "magic",
      damage: 26,
      cooldown: 0.56,
      projectileSpeed: 980,
      projectileSize: 5,
      color: "#b7f3ff"
    },
    soldering_iron: {
      id: "soldering_iron",
      name: "Soldering Iron",
      kind: "magic",
      damage: 9,
      cooldown: 0.26,
      projectileSpeed: 330,
      projectileSize: 4,
      projectileLife: 0.28,
      projectileSpread: 0.18,
      color: "#ff9861"
    },
    drone_weapon: {
      id: "drone_weapon",
      name: "Drone Weapon",
      kind: "ranged",
      damage: 26,
      cooldown: 0.34,
      projectileSpeed: 700,
      projectileSize: 4,
      color: "#8fe6ff"
    }
  };

  const ENEMIES = {
    slime: {
      id: "slime",
      name: "Slime",
      hp: 55,
      speed: 80,
      damage: 9,
      radius: 16,
      gold: [5, 9],
      color: "#53cf70"
    },
    skeleton: {
      id: "skeleton",
      name: "Skeleton",
      hp: 90,
      speed: 110,
      damage: 13,
      radius: 18,
      gold: [8, 12],
      color: "#c6c7ce"
    },
    bat: {
      id: "bat",
      name: "Bat",
      hp: 48,
      speed: 170,
      damage: 11,
      radius: 13,
      gold: [7, 11],
      color: "#9a76d2"
    },
    cultist: {
      id: "cultist",
      name: "Cultist",
      hp: 95,
      speed: 96,
      damage: 14,
      radius: 16,
      gold: [11, 15],
      color: "#8460d1"
    },
    brute: {
      id: "brute",
      name: "Brute",
      hp: 230,
      speed: 72,
      damage: 22,
      radius: 23,
      gold: [15, 21],
      color: "#b87353"
    },
    wisp: {
      id: "wisp",
      name: "Wisp",
      hp: 70,
      speed: 178,
      damage: 16,
      radius: 14,
      gold: [12, 18],
      color: "#75e3ff"
    },
    boss: {
      id: "boss",
      name: "Bone Tyrant",
      hp: 1500,
      speed: 98,
      damage: 25,
      radius: 42,
      gold: [110, 140],
      color: "#d54848",
      isBoss: true
    },
    boss_reaver: {
      id: "boss_reaver",
      name: "Crimson Reaver",
      hp: 1450,
      speed: 126,
      damage: 22,
      radius: 38,
      gold: [108, 142],
      color: "#db4242",
      isBoss: true
    },
    boss_abomination: {
      id: "boss_abomination",
      name: "Rot Abomination",
      hp: 3050,
      speed: 102,
      damage: 34,
      radius: 46,
      gold: [185, 230],
      color: "#6fbe60",
      isBoss: true
    },
    boss_oracle: {
      id: "boss_oracle",
      name: "Void Oracle",
      hp: 2150,
      speed: 112,
      damage: 24,
      radius: 44,
      gold: [145, 182],
      color: "#ae70ff",
      isBoss: true
    }
  };

  const WAVES = [
    { spawns: { slime: 10 } },
    { spawns: { slime: 10, skeleton: 6 } },
    { spawns: { slime: 6, skeleton: 8, bat: 7 } },
    { spawns: { slime: 4, skeleton: 11, bat: 9 } },
    { bossPool: ["boss", "boss_reaver"] },
    { spawns: { skeleton: 10, cultist: 6, bat: 7 } },
    { spawns: { cultist: 11, brute: 5, wisp: 8 } },
    { spawns: { skeleton: 8, brute: 7, wisp: 10 } },
    { spawns: { cultist: 9, brute: 9, wisp: 11, bat: 8 } },
    { bossPool: ["boss_abomination", "boss_oracle"] }
  ];

  const PASSIVE_ITEMS = [
    { id: "vital_core", rarity: 1, name: "Vital Core", desc: "+35 max HP, heal 15", cost: 28, apply: (p) => { p.bonus.maxHp += 35; p.hp = Math.min(p.maxHp(), p.hp + 15); } },
    { id: "swift_boots", rarity: 1, name: "Swift Boots", desc: "+20 move speed", cost: 30, apply: (p) => { p.bonus.speed += 20; } },
    { id: "jagged_edge", rarity: 2, name: "Jagged Edge", desc: "+16 melee damage", cost: 34, apply: (p) => { p.bonus.melee += 16; } },
    { id: "fletch_kit", rarity: 2, name: "Fletch Kit", desc: "+15 ranged damage", cost: 34, apply: (p) => { p.bonus.ranged += 15; } },
    { id: "mana_amber", rarity: 2, name: "Mana Amber", desc: "+15 magic damage", cost: 34, apply: (p) => { p.bonus.magic += 15; } },
    { id: "war_clock", rarity: 3, name: "War Clock", desc: "-16% weapon cooldown", cost: 40, apply: (p) => { p.bonus.cooldownFactor *= 0.84; } },
    { id: "iron_skin", rarity: 2, name: "Iron Skin", desc: "+12% armor", cost: 38, apply: (p) => { p.bonus.armor += 0.12; } },
    { id: "vamp_sigil", rarity: 3, name: "Vamp Sigil", desc: "+8% lifesteal", cost: 46, apply: (p) => { p.bonus.lifesteal += 0.08; } },
    { id: "coin_charm", rarity: 2, name: "Coin Charm", desc: "+45% gold gain", cost: 42, apply: (p) => { p.bonus.goldFactor += 0.45; } },
    { id: "crit_lens", rarity: 3, name: "Crit Lens", desc: "+15% crit chance (x1.6 dmg)", cost: 44, apply: (p) => { p.bonus.critChance += 0.15; } },
    { id: "berserker_rune", rarity: 4, name: "Berserker Rune", desc: "+22 melee, +7 speed", cost: 68, apply: (p) => { p.bonus.melee += 22; p.bonus.speed += 7; } },
    { id: "guardian_totem", rarity: 3, name: "Guardian Totem", desc: "+16% armor, +25 max HP", cost: 60, apply: (p) => { p.bonus.armor += 0.16; p.bonus.maxHp += 25; } },
    { id: "storm_insignia", rarity: 4, name: "Storm Insignia", desc: "Dash stronger, cooldown -20%", cost: 70, apply: (p) => { p.bonus.dashPower += 150; p.bonus.dashCooldownFactor *= 0.8; } },
    { id: "arcane_prism", rarity: 3, name: "Arcane Prism", desc: "+20 magic, +8% crit", cost: 58, apply: (p) => { p.bonus.magic += 20; p.bonus.critChance += 0.08; } },
    { id: "gambler_coin", rarity: 2, name: "Gambler Coin", desc: "+70% gold, -20 max HP", cost: 48, apply: (p) => { p.bonus.goldFactor += 0.7; p.bonus.maxHp -= 20; p.hp = Math.min(p.maxHp(), p.hp); } },
    { id: "phantom_cloak", rarity: 4, name: "Phantom Cloak", desc: "+10 speed, +5% lifesteal, +6% armor", cost: 74, apply: (p) => { p.bonus.speed += 10; p.bonus.lifesteal += 0.05; p.bonus.armor += 0.06; } },
    { id: "titan_grip", rarity: 3, name: "Titan Grip", desc: "+25% melee range, +15% melee arc", cost: 62, apply: (p) => { p.bonus.meleeRangeFactor *= 1.25; p.bonus.meleeArcBonus += Math.PI * 0.15; } },
    { id: "seeker_crystal", rarity: 4, name: "Seeker Crystal", desc: "Magic shots become homing", cost: 84, apply: (p) => { p.bonus.magicHoming += 3.2; } },
    { id: "blood_moss", rarity: 3, name: "Blood Moss", desc: "Regenerate 1.6 HP per second", cost: 66, apply: (p) => { p.bonus.hpRegen += 1.6; } },
    { id: "echo_blade", rarity: 4, name: "Echo Blade", desc: "Legendary: melee launches piercing half-wave", cost: 98, unlockCategory: "items", unlockId: "echo_blade", startsUnlocked: false, apply: (p) => { p.bonus.swordWave += 1; } },
    {
      id: "ira_berserker",
      rarity: 4,
      name: "Ira berserker",
      desc: "Legendary: +100% attack speed while HP is below 25%",
      cost: 104,
      unlockCategory: "items",
      unlockId: "ira_berserker",
      startsUnlocked: false,
      apply: (p) => { p.bonus.iraBerserker = true; }
    },
    {
      id: "botas_saltarinas",
      rarity: 3,
      name: "Botas saltarinas",
      desc: "Epic: +25% move speed, -12% dash cooldown",
      cost: 78,
      unlockCategory: "items",
      unlockId: "botas_saltarinas",
      startsUnlocked: false,
      apply: (p) => { p.bonus.speed += p.base.speed * 0.25; p.bonus.dashCooldownFactor *= 0.88; }
    },
    {
      id: "traje_de_hojas",
      rarity: 3,
      name: "Traje de hojas",
      desc: "Epic: +25% evasion",
      cost: 74,
      unlockCategory: "items",
      unlockId: "traje_de_hojas",
      startsUnlocked: false,
      apply: (p) => { p.bonus.dodge += 0.25; }
    },
    {
      id: "carterista",
      rarity: 2,
      name: "Carterista",
      desc: "10% chance to gain 5 gold on hit",
      cost: 58,
      unlockCategory: "items",
      unlockId: "carterista",
      startsUnlocked: false,
      apply: (p) => { p.bonus.pickpocketChance = Math.max(p.bonus.pickpocketChance, 0.1); }
    },
    { id: "ranger_harness", rarity: 4, name: "Ranger Harness", desc: "Ranged weapons gain +1 dash charge", cost: 88, apply: (p) => { p.bonus.rangedDashBonus = 1; } },
    { id: "extra_sentry", rarity: 1, name: "Extra Sentry", desc: "+1 Engineer turret", cost: 34, apply: (p) => { p.bonus.sentryCountBonus += 1; p.syncEngineerSentries(); } },
    { id: "overclock_chip", rarity: 1, name: "Overclock Chip", desc: "+8 turret damage", cost: 34, apply: (p) => { p.bonus.sentryDamageBonus += 8; } },
    { id: "rapid_cycle", rarity: 1, name: "Rapid Cycle", desc: "+12% turret attack speed", cost: 36, apply: (p) => { p.bonus.sentryRateFactor *= 0.88; } },
    { id: "lightning_overlord", rarity: 4, name: "Lightning Overlord", desc: "Legendary turret fires 5 AoE lightning bolts", cost: 108, unlockCategory: "items", unlockId: "lightning_overlord", startsUnlocked: false, apply: (p) => { p.bonus.lightningOverlord = true; p.syncEngineerSentries(); } },
    { id: "lucky_clover", rarity: 1, name: "Lucky Clover", desc: "+1 luck", cost: 32, apply: (p) => { p.bonus.luckFlat += 1; } },
    {
      id: "volatile_fortune_core",
      rarity: 3,
      name: "Volatile Fortune Core",
      desc: "Epic: +10 luck, but it drops when hit (down to 0.5)",
      cost: 82,
      apply: (p) => { p.bonus.epicLuckCurrent = Math.max(p.bonus.epicLuckCurrent, 10); }
    },
    {
      id: "drone_missile",
      rarity: 4,
      name: "Drone Missile",
      desc: "Legendary: drone fires explosive missiles at 25% rate",
      cost: 102,
      unlockCategory: "items",
      unlockId: "drone_missile",
      startsUnlocked: false,
      condition: (p) => !!p && p.hasWeapon("drone_weapon"),
      apply: (p) => { p.bonus.droneMissile = true; }
    }
  ];

  const WEAPON_OFFERS = [
    { id: "iron_sword", rarity: 1, name: "Iron Sword", desc: "Reliable melee starter blade", cost: 44, weaponId: "iron_sword" },
    { id: "battle_axe", rarity: 2, name: "Battle Axe", desc: "Slow heavy melee weapon", cost: 52, weaponId: "battle_axe" },
    { id: "fire_wand", rarity: 2, name: "Fire Wand", desc: "Rapid magic projectiles", cost: 50, weaponId: "fire_wand" },
    { id: "shortbow", rarity: 1, name: "Shortbow", desc: "Fast light ranged weapon", cost: 46, weaponId: "shortbow" },
    { id: "crossbow", rarity: 2, name: "Crossbow", desc: "Powerful ranged shots", cost: 54, weaponId: "crossbow" },
    { id: "thunder_hammer", rarity: 4, name: "Thunder Hammer", desc: "Huge melee arc and burst damage", cost: 86, weaponId: "thunder_hammer" },
    { id: "twin_daggers", rarity: 2, name: "Twin Daggers", desc: "Ultra fast close combat", cost: 56, weaponId: "twin_daggers" },
    { id: "dagger", rarity: 1, name: "Dagger", desc: "Damage scales with current Gold", cost: 48, weaponId: "dagger" },
    { id: "frost_orb", rarity: 3, name: "Frost Orb", desc: "Heavy magic bolts with control", cost: 68, weaponId: "frost_orb" },
    { id: "void_lance", rarity: 4, name: "Void Lance", desc: "High speed piercing shots", cost: 92, weaponId: "void_lance" },
    { id: "soldering_iron", rarity: 1, name: "Soldering Iron", desc: "Short-range fire tool with support turret", cost: 45, weaponId: "soldering_iron" },
    { id: "drone_weapon", rarity: 2, name: "Drone Weapon", desc: "Activates orbital combat drone while equipped", cost: 62, weaponId: "drone_weapon", unlockCategory: "weapons", unlockId: "drone_weapon", startsUnlocked: false },
    { id: "oraculus", rarity: 4, name: "Oraculus", desc: "Legendary beam that pierces to map bounds", cost: 110, weaponId: "oraculus", unlockCategory: "weapons", unlockId: "oraculus", startsUnlocked: false }
  ];

  const SPRITE_PATHS = {
    characters: {
      knight: "assets/sprites/characters/warrior.png",
      orc: "assets/sprites/characters/orc.png",
      mage: "assets/sprites/characters/wizard.png",
      hunter: "assets/sprites/characters/ranger.png",
      frogfolk: "assets/sprites/characters/Frogfolk.png",
      engineer: "assets/sprites/characters/enginner.png",
      conductor: "assets/sprites/characters/Conductor.png",
      slot_machine_robot: "assets/sprites/characters/Maquina tragamonedas.png",
      thief: "assets/sprites/characters/Thief.png",
      merchant: "assets/sprites/characters/merchant.svg"
    },
    enemies: {
      slime: "assets/sprites/enemies/slime.svg",
      skeleton: "assets/sprites/enemies/skeleton.svg",
      bat: "assets/sprites/enemies/bat.svg",
      cultist: "assets/sprites/enemies/cultist.svg",
      brute: "assets/sprites/enemies/brute.svg",
      wisp: "assets/sprites/enemies/wisp.svg",
      boss: "assets/sprites/enemies/boss.svg",
      boss_reaver: "assets/sprites/enemies/boss_reaver.svg",
      boss_abomination: "assets/sprites/enemies/boss_abomination.svg",
      boss_oracle: "assets/sprites/enemies/boss_oracle.svg"
    },
    weapons: {
      iron_sword: "assets/sprites/weapons/iron_sword.svg",
      battle_axe: "assets/sprites/weapons/battle_axe.svg",
      arc_staff: "assets/sprites/weapons/arc_staff.svg",
      fire_wand: "assets/sprites/weapons/fire_wand.svg",
      shortbow: "assets/sprites/weapons/shortbow.svg",
      crossbow: "assets/sprites/weapons/crossbow.svg",
      thunder_hammer: "assets/sprites/weapons/thunder_hammer.svg",
      twin_daggers: "assets/sprites/weapons/twin_daggers.svg",
      dagger: "assets/sprites/weapons/twin_daggers.svg",
      frost_orb: "assets/sprites/weapons/frost_orb.svg",
      void_lance: "assets/sprites/weapons/void_lance.svg",
      oraculus: "assets/sprites/weapons/arc_staff.svg",
      soldering_iron: "assets/sprites/weapons/soldering_iron.svg",
      drone_weapon: "assets/sprites/weapons/drone_weapon.svg"
    },
    projectiles: {
      magic_bolt: "assets/sprites/projectiles/magic_bolt.svg",
      arrow: "assets/sprites/projectiles/arrow.svg",
      enemy_skull: "assets/sprites/projectiles/enemy_skull.svg",
      engineer_flame: "assets/sprites/projectiles/engineer_flame.svg",
      lightning_bolt: "assets/sprites/projectiles/lightning_bolt.svg",
      drone_shot: "assets/sprites/projectiles/drone_shot.svg",
      drone_missile: "assets/sprites/projectiles/drone_missile.svg"
    },
    turrets: {
      sentry: "assets/sprites/turrets/sentry.svg",
      lightning_sentry: "assets/sprites/turrets/lightning_sentry.svg",
      drone_unit: "assets/sprites/turrets/drone_unit.svg"
    },
    items: {
      vital_core: "assets/sprites/items/vital_core.svg",
      swift_boots: "assets/sprites/items/swift_boots.svg",
      jagged_edge: "assets/sprites/items/jagged_edge.svg",
      fletch_kit: "assets/sprites/items/fletch_kit.svg",
      mana_amber: "assets/sprites/items/mana_amber.svg",
      war_clock: "assets/sprites/items/war_clock.svg",
      iron_skin: "assets/sprites/items/iron_skin.svg",
      vamp_sigil: "assets/sprites/items/vamp_sigil.svg",
      coin_charm: "assets/sprites/items/coin_charm.svg",
      crit_lens: "assets/sprites/items/crit_lens.svg",
      berserker_rune: "assets/sprites/items/berserker_rune.svg",
      guardian_totem: "assets/sprites/items/guardian_totem.svg",
      storm_insignia: "assets/sprites/items/storm_insignia.svg",
      arcane_prism: "assets/sprites/items/arcane_prism.svg",
      gambler_coin: "assets/sprites/items/gambler_coin.svg",
      phantom_cloak: "assets/sprites/items/phantom_cloak.svg",
      titan_grip: "assets/sprites/items/titan_grip.svg",
      seeker_crystal: "assets/sprites/items/seeker_crystal.svg",
      blood_moss: "assets/sprites/items/blood_moss.svg",
      echo_blade: "assets/sprites/items/echo_blade.svg",
      ira_berserker: "assets/sprites/items/berserker_rune.svg",
      botas_saltarinas: "assets/sprites/items/swift_boots.svg",
      traje_de_hojas: "assets/sprites/items/phantom_cloak.svg",
      carterista: "assets/sprites/items/coin_charm.svg",
      ranger_harness: "assets/sprites/items/ranger_harness.svg",
      extra_sentry: "assets/sprites/items/extra_sentry.svg",
      overclock_chip: "assets/sprites/items/overclock_chip.svg",
      rapid_cycle: "assets/sprites/items/rapid_cycle.svg",
      lightning_overlord: "assets/sprites/items/lightning_overlord.svg",
      lucky_clover: "assets/sprites/items/lucky_clover.svg",
      volatile_fortune_core: "assets/sprites/items/volatile_fortune_core.svg",
      drone_missile: "assets/sprites/items/drone_missile.svg"
    }
  };

  const PLAYER_CHARACTER_TUNING = {
    knight: { bodyWidth: 40, bodyHeight: 40, hitboxRadius: 14 },
    orc: { bodyWidth: 44, bodyHeight: 42, hitboxRadius: 15 },
    mage: { bodyWidth: 38, bodyHeight: 40, hitboxRadius: 13 },
    hunter: { bodyWidth: 38, bodyHeight: 40, hitboxRadius: 13 },
    frogfolk: { bodyWidth: 40, bodyHeight: 38, hitboxRadius: 14 },
    engineer: { bodyWidth: 40, bodyHeight: 38, hitboxRadius: 14 },
    conductor: { bodyWidth: 40, bodyHeight: 33, hitboxRadius: 13 },
    slot_machine_robot: { bodyWidth: 42, bodyHeight: 40, hitboxRadius: 14 },
    thief: { bodyWidth: 36, bodyHeight: 38, hitboxRadius: 12 }
  };
  const PLAYER_BODY_WIDTH_MULTIPLIER = 3;
  const PLAYER_BODY_HEIGHT_MULTIPLIER = 1.876875;

  const spriteImageMap = new Map();

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  const waveText = document.getElementById("waveText");
  const goldText = document.getElementById("goldText");
  const hpBar = document.getElementById("hpBar");
  const dashBar = document.getElementById("dashBar");
  const weaponSlots = document.getElementById("weaponSlots");

  const charSelect = document.getElementById("charSelect");
  const charCards = document.getElementById("charCards");

  const shopPanel = document.getElementById("shopPanel");
  const shopCards = document.getElementById("shopCards");
  const skipShopBtn = document.getElementById("skipShopBtn");
  const rerollShopBtn = document.getElementById("rerollShopBtn");

  const inventoryBtn = document.getElementById("inventoryBtn");
  const inventoryPanel = document.getElementById("inventoryPanel");
  const closeInventoryBtn = document.getElementById("closeInventoryBtn");
  const inventoryStats = document.getElementById("inventoryStats");
  const inventoryItems = document.getElementById("inventoryItems");

  const endPanel = document.getElementById("endPanel");
  const endTitle = document.getElementById("endTitle");
  const endSummary = document.getElementById("endSummary");
  const restartBtn = document.getElementById("restartBtn");
  const achievementFeed = document.getElementById("achievementFeed");
  const langToggleBtn = document.getElementById("langToggleBtn");

  const STORAGE_KEY = "megaroguelike_progress_v1";

  const I18N = {
    EN: {
      ui: {
        inventoryBtn: "Inventory (I)",
        weaponTitle: "Weapons (Tab / 1 / 2) | Dash: Shift | Buy: E",
        charSelectTitle: "Choose Your Weapon Archetype",
        charSelectSubtitle: "Each hero is tied to a basic weapon, unique stats, and a distinct combat role.",
        shopTitle: "Merchant Camp",
        shopSubtitle: "Walk to an offer and press E. You can buy up to 3 offers per visit.",
        inventoryTitle: "Character Sheet",
        inventoryItemsTitle: "Items",
        close: "Close",
        restart: "Restart",
        reroll: "Reroll",
        skipMerchant: "Skip Merchant",
        select: "Select",
        locked: "Locked",
        wave: "Wave",
        gold: "Gold",
        victory: "Victory",
        defeated: "Defeated",
        empty: "Empty",
        yes: "Yes",
        no: "No",
        none: "None",
        enabled: "Enabled",
        off: "Off",
        merchantCamp: "Merchant Camp",
        pressToBuy: "Press E to Buy",
        noItemsYet: "No items purchased yet.",
        controlsHint: "WASD move | Shift dash | Mouse + hold LMB attack | Tab swap weapon | I inventory",
        merchantHint: "Merchant phase: move to an offer and press E to buy. You can buy up to 3 offers.",
        priceScale: "Price scale x{mult} (based on wave and enemy pressure)",
        rerollsUsed: "Rerolls used this run: {count}",
        unlockAchievement: "Unlock Achievement: {name}",
        wavesClearedSummary: "Waves Cleared: {wave}/{maxWave} | Kills: {kills} | Gold: {gold}"
      },
      kind: {
        melee: "melee",
        magic: "magic",
        ranged: "ranged"
      },
      stat: {
        hp: "HP",
        moveSpeed: "Move Speed",
        armor: "Armor",
        dodge: "Dodge",
        lifesteal: "Lifesteal",
        luck: "Luck",
        activeWeapon: "Active Weapon",
        activeWeaponDamage: "Active Weapon Damage",
        daggerDynamicDamage: "Dagger Dynamic Damage",
        goldBonus: "Gold Bonus",
        dashCd: "Dash CD",
        dashCharges: "Dash Charges",
        meleeSize: "Melee Size",
        magicHoming: "Magic Homing",
        hpRegen: "HP Regen",
        sentries: "Sentries",
        sentryStats: "Sentry DMG",
        sentryCd: "Sentry CD",
        droneWeaponEquipped: "Drone Weapon Equipped",
        droneMissile: "Drone Missile",
        berserkerRage: "Berserker Rage",
        speed: "Speed",
        weapon: "Weapon",
        startingGold: "Starting Gold",
        weaponLock: "Weapon Lock",
        trait: "Trait",
        melee: "Melee",
        magic: "Magic",
        ranged: "Ranged"
      },
      msg: {
        notEnoughReroll: "Not enough gold for reroll.",
        rerollUsed: "Reroll used ({count} total).",
        moveCloser: "Move closer to an offer.",
        notEnoughGold: "Not enough gold.",
        weaponLocked: "This character cannot equip new weapons.",
        purchased: "Purchased: {name}"
      },
      rarity: {
        qPrefix: "Q"
      },
      charName: {
        knight: "Iron Knight",
        orc: "Axe Orc",
        mage: "Blue Pyromancer",
        hunter: "Lumber Hunter",
        frogfolk: "Bog Frogfolk",
        engineer: "Copper Engineer",
        conductor: "Conductor",
        slot_machine_robot: "Slot Machine Robot",
        thief: "Thief"
      },
      weaponName: {
        oraculus: "Oraculus",
        drone_weapon: "Drone Weapon"
      },
      weaponDesc: {
        oraculus: "Legendary beam that pierces to map bounds",
        drone_weapon: "Activates orbital combat drone while equipped"
      },
      itemName: {
        echo_blade: "Echo Blade",
        ira_berserker: "Ira berserker",
        botas_saltarinas: "Botas saltarinas",
        lightning_overlord: "Lightning Overlord",
        traje_de_hojas: "Traje de hojas",
        drone_missile: "Drone Missile",
        carterista: "Carterista"
      },
      itemDesc: {
        echo_blade: "Legendary: melee launches piercing half-wave",
        ira_berserker: "Legendary: +100% attack speed while HP is below 25%",
        botas_saltarinas: "Epic: +25% move speed, -12% dash cooldown",
        lightning_overlord: "Legendary turret fires 5 AoE lightning bolts",
        traje_de_hojas: "Epic: +25% evasion",
        drone_missile: "Legendary: drone fires explosive missiles at 25% rate",
        carterista: "10% chance to gain 5 gold on hit"
      },
      charTrait: {
        default: "Trait: -",
        conductor: "Trait: Drone Specialist (+25% Drone Weapon damage)",
        slot_machine_robot: "Trait: Spend 1 Gold per attack. Damage rolls from 1 to 100 scale with Luck.",
        thief: "Trait: Greed (x2 gold drops)."
      }
    },
    ES: {
      ui: {
        inventoryBtn: "Inventario (I)",
        weaponTitle: "Armas (Tab / 1 / 2) | Dash: Shift | Comprar: E",
        charSelectTitle: "Elige tu arquetipo de arma",
        charSelectSubtitle: "Cada heroe tiene un arma base, estadisticas unicas y un rol de combate distinto.",
        shopTitle: "Campamento Mercante",
        shopSubtitle: "Acercate a una oferta y pulsa E. Puedes comprar hasta 3 ofertas por visita.",
        inventoryTitle: "Ficha del Personaje",
        inventoryItemsTitle: "Objetos",
        close: "Cerrar",
        restart: "Reiniciar",
        reroll: "Repetir tienda",
        skipMerchant: "Saltar mercante",
        select: "Seleccionar",
        locked: "Bloqueado",
        wave: "Oleada",
        gold: "Oro",
        victory: "Victoria",
        defeated: "Derrotado",
        empty: "Vacio",
        yes: "Si",
        no: "No",
        none: "Ninguna",
        enabled: "Activo",
        off: "Apagado",
        merchantCamp: "Campamento Mercante",
        pressToBuy: "Pulsa E para comprar",
        noItemsYet: "Todavia no compraste objetos.",
        controlsHint: "WASD mover | Shift dash | Mouse + mantener LMB atacar | Tab cambiar arma | I inventario",
        merchantHint: "Fase de mercante: acercate a una oferta y pulsa E para comprar. Puedes comprar hasta 3.",
        priceScale: "Escala de precio x{mult} (segun oleada y presion enemiga)",
        rerollsUsed: "Repeticiones esta run: {count}",
        unlockAchievement: "Logro desbloqueado: {name}",
        wavesClearedSummary: "Oleadas superadas: {wave}/{maxWave} | Bajas: {kills} | Oro: {gold}"
      },
      kind: {
        melee: "melee",
        magic: "magia",
        ranged: "distancia"
      },
      stat: {
        hp: "HP",
        moveSpeed: "Velocidad",
        armor: "Armadura",
        dodge: "Evasion",
        lifesteal: "Robo de vida",
        luck: "Suerte",
        activeWeapon: "Arma activa",
        activeWeaponDamage: "Danio arma activa",
        daggerDynamicDamage: "Danio dinamico daga",
        goldBonus: "Bono de oro",
        dashCd: "CD Dash",
        dashCharges: "Cargas de dash",
        meleeSize: "Tamano melee",
        magicHoming: "Homing magico",
        hpRegen: "Regeneracion HP",
        sentries: "Torretas",
        sentryStats: "Danio torreta",
        sentryCd: "CD torreta",
        droneWeaponEquipped: "Arma dron equipada",
        droneMissile: "Misil de dron",
        berserkerRage: "Ira berserker",
        speed: "Velocidad",
        weapon: "Arma",
        startingGold: "Oro inicial",
        weaponLock: "Bloqueo de arma",
        trait: "Rasgo",
        melee: "Melee",
        magic: "Magia",
        ranged: "Distancia"
      },
      msg: {
        notEnoughReroll: "No tienes oro suficiente para repetir.",
        rerollUsed: "Repeticion usada ({count} total).",
        moveCloser: "Acercate mas a una oferta.",
        notEnoughGold: "No tienes oro suficiente.",
        weaponLocked: "Este personaje no puede equipar armas nuevas.",
        purchased: "Comprado: {name}"
      },
      rarity: {
        qPrefix: "Q"
      },
      charName: {
        knight: "Guerrero de Hierro",
        orc: "Orco del Hacha",
        mage: "Piromante Azul",
        hunter: "Cazador del Bosque",
        frogfolk: "Frogfolk del Pantano",
        engineer: "Ingeniero de Cobre",
        conductor: "Conductor",
        slot_machine_robot: "Robot Tragamonedas",
        thief: "Ladron"
      },
      weaponName: {
        oraculus: "Oraculus",
        drone_weapon: "Arma Dron"
      },
      weaponDesc: {
        oraculus: "Rayo legendario con perforacion hasta los limites del mapa",
        drone_weapon: "Activa dron orbital de combate al equiparla"
      },
      itemName: {
        echo_blade: "Hoja eco",
        ira_berserker: "Ira berserker",
        botas_saltarinas: "Botas saltarinas",
        lightning_overlord: "Senor del relampago",
        traje_de_hojas: "Traje de hojas",
        drone_missile: "Misil de dron",
        carterista: "Carterista"
      },
      itemDesc: {
        echo_blade: "Legendario: melee lanza una onda perforante",
        ira_berserker: "Legendario: +100% velocidad de ataque con HP por debajo de 25%",
        botas_saltarinas: "Epico: +25% velocidad de movimiento, -12% enfriamiento de dash",
        lightning_overlord: "Torreta legendaria lanza 5 rayos AoE",
        traje_de_hojas: "Epico: +25% evasion",
        drone_missile: "Legendario: el dron dispara misiles explosivos al 25% de frecuencia",
        carterista: "10% de probabilidad de ganar 5 de oro al golpear"
      },
      charTrait: {
        default: "Rasgo: -",
        conductor: "Rasgo: Especialista en dron (+25% danio de Arma Dron)",
        slot_machine_robot: "Rasgo: Gasta 1 oro por ataque. El danio va de 1 a 100 y escala con suerte.",
        thief: "Rasgo: Codicia (x2 oro)."
      }
    }
  };

  function cloneObject(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function getNestedValue(obj, key) {
    const parts = key.split(".");
    let current = obj;
    for (const part of parts) {
      if (!current || typeof current !== "object" || !(part in current)) {
        return null;
      }
      current = current[part];
    }
    return current;
  }

  function formatTemplate(text, params = {}) {
    return String(text).replace(/\{(\w+)\}/g, (_, key) => {
      if (params[key] === undefined || params[key] === null) {
        return `{${key}}`;
      }
      return String(params[key]);
    });
  }

  function loadProgress() {
    const fallback = {
      language: "EN",
      unlockedContent: { characters: [], items: [], weapons: [] },
      completedRuns: []
    };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return fallback;
      }
      const parsed = JSON.parse(raw);
      return {
        language: parsed.language === "ES" ? "ES" : "EN",
        unlockedContent: {
          characters: Array.isArray(parsed.unlockedContent?.characters) ? parsed.unlockedContent.characters : [],
          items: Array.isArray(parsed.unlockedContent?.items) ? parsed.unlockedContent.items : [],
          weapons: Array.isArray(parsed.unlockedContent?.weapons) ? parsed.unlockedContent.weapons : []
        },
        completedRuns: Array.isArray(parsed.completedRuns) ? parsed.completedRuns : []
      };
    } catch {
      return fallback;
    }
  }

  const progress = loadProgress();
  const unlockedSets = {
    characters: new Set(progress.unlockedContent.characters),
    items: new Set(progress.unlockedContent.items),
    weapons: new Set(progress.unlockedContent.weapons)
  };
  let currentLang = progress.language;

  function saveProgress() {
    const payload = {
      language: currentLang,
      unlockedContent: {
        characters: [...unlockedSets.characters],
        items: [...unlockedSets.items],
        weapons: [...unlockedSets.weapons]
      },
      completedRuns: progress.completedRuns
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  function t(key, params = {}, fallback = key) {
    const langTable = I18N[currentLang] || I18N.EN;
    const englishTable = I18N.EN;
    const value = getNestedValue(langTable, key) ?? getNestedValue(englishTable, key) ?? fallback;
    return formatTemplate(value, params);
  }

  function rarityLabel(rarity) {
    return `${t("rarity.qPrefix")}${rarity}`;
  }

  function localizeCharacterName(charId, fallbackName) {
    return t(`charName.${charId}`, {}, fallbackName);
  }

  function localizeCharacterTrait(charDef) {
    const fallback = charDef.trait || t("charTrait.default");
    return t(`charTrait.${charDef.id}`, {}, fallback);
  }

  function localizeOfferName(offer) {
    if (offer.kind === "weapon" || offer.weaponId) {
      return t(`weaponName.${offer.weaponId || offer.id}`, {}, offer.name);
    }
    return t(`itemName.${offer.id}`, {}, offer.name);
  }

  function localizeOfferDesc(offer) {
    if (offer.kind === "weapon" || offer.weaponId) {
      return t(`weaponDesc.${offer.weaponId || offer.id}`, {}, offer.desc);
    }
    return t(`itemDesc.${offer.id}`, {}, offer.desc);
  }

  function localizeWeaponName(weapon) {
    if (!weapon) return "";
    return t(`weaponName.${weapon.id}`, {}, weapon.name);
  }

  function localizeWeaponKind(kind) {
    return t(`kind.${kind}`, {}, kind || "");
  }

  function isUnlocked(category, id, startsUnlocked = true) {
    if (!id) {
      return true;
    }
    if (unlockedSets[category] && unlockedSets[category].has(id)) {
      return true;
    }
    return !!startsUnlocked;
  }

  function unlockContent(category, id, displayName) {
    if (!category || !id || !unlockedSets[category] || unlockedSets[category].has(id)) {
      return false;
    }
    unlockedSets[category].add(id);
    saveProgress();
    pushAchievementToast(displayName || id);
    return true;
  }

  function ensureInitialUnlocks() {
    for (const c of CHARACTERS) {
      if (c.unlockCategory && c.unlockId && c.startsUnlocked) {
        unlockedSets[c.unlockCategory].add(c.unlockId);
      }
    }
    for (const item of PASSIVE_ITEMS) {
      if (item.unlockCategory && item.unlockId && item.startsUnlocked) {
        unlockedSets[item.unlockCategory].add(item.unlockId);
      }
    }
    for (const weaponOffer of WEAPON_OFFERS) {
      if (weaponOffer.unlockCategory && weaponOffer.unlockId && weaponOffer.startsUnlocked) {
        unlockedSets[weaponOffer.unlockCategory].add(weaponOffer.unlockId);
      }
    }
    saveProgress();
  }

  function refreshStaticUIText() {
    const inventoryTitleEl = document.getElementById("inventoryTitle");
    const inventoryItemsTitleEl = document.getElementById("inventoryItemsTitle");
    const weaponTitleEl = document.getElementById("weaponTitle");
    const charSelectTitleEl = document.getElementById("charSelectTitle");
    const charSelectSubtitleEl = document.getElementById("charSelectSubtitle");
    const shopTitleEl = document.getElementById("shopTitle");
    const shopSubtitleEl = document.getElementById("shopSubtitle");

    if (inventoryBtn) inventoryBtn.textContent = t("ui.inventoryBtn");
    if (weaponTitleEl) weaponTitleEl.textContent = t("ui.weaponTitle");
    if (charSelectTitleEl) charSelectTitleEl.textContent = t("ui.charSelectTitle");
    if (charSelectSubtitleEl) charSelectSubtitleEl.textContent = t("ui.charSelectSubtitle");
    if (shopTitleEl) shopTitleEl.textContent = t("ui.shopTitle");
    if (shopSubtitleEl) shopSubtitleEl.textContent = t("ui.shopSubtitle");
    if (inventoryTitleEl) inventoryTitleEl.textContent = t("ui.inventoryTitle");
    if (inventoryItemsTitleEl) inventoryItemsTitleEl.textContent = t("ui.inventoryItemsTitle");
    if (closeInventoryBtn) closeInventoryBtn.textContent = t("ui.close");
    if (restartBtn) restartBtn.textContent = t("ui.restart");
    if (skipShopBtn) skipShopBtn.textContent = t("ui.skipMerchant");
    if (langToggleBtn) {
      langToggleBtn.textContent = currentLang === "EN" ? "ES" : "EN";
    }
    updateRerollButtonLabel();
  }

  function setLanguage(lang) {
    currentLang = lang === "ES" ? "ES" : "EN";
    saveProgress();
    refreshStaticUIText();
    createCharacterCards();
    renderWeaponSlots();
    refreshInventory();
    refreshHUD();
  }

  const achievementQueue = [];
  let achievementActive = false;

  function pushAchievementToast(name) {
    achievementQueue.push(name);
    if (achievementActive) {
      return;
    }
    achievementActive = true;

    const showNext = () => {
      const next = achievementQueue.shift();
      if (!next) {
        achievementActive = false;
        return;
      }

      const toast = document.createElement("div");
      toast.className = "achievementToast";
      toast.textContent = t("ui.unlockAchievement", { name: next });
      achievementFeed.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("fadeOut");
      }, 2100);

      setTimeout(() => {
        toast.remove();
        showNext();
      }, 2400);
    };

    showNext();
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function distance(ax, ay, bx, by) {
    return Math.hypot(ax - bx, ay - by);
  }

  function normalize(dx, dy) {
    const len = Math.hypot(dx, dy) || 1;
    return { x: dx / len, y: dy / len, len };
  }

  function pickRandom(arr) {
    return arr[randInt(0, arr.length - 1)];
  }

  function rarityColor(rarity) {
    if (rarity === 4) return "#ffa94d";
    if (rarity === 3) return "#6ad9ff";
    if (rarity === 2) return "#8de26f";
    return "#d7dbe3";
  }

  function getSpritePath(group, id) {
    const table = SPRITE_PATHS[group];
    if (!table || !table[id]) {
      return "";
    }
    return table[id];
  }

  function getProjectileSpriteForWeapon(weaponId) {
    if (weaponId === "shortbow" || weaponId === "crossbow" || weaponId === "void_lance") {
      return "arrow";
    }
    if (weaponId === "drone_weapon") {
      return "drone_shot";
    }
    return "magic_bolt";
  }

  function isRangedWeapon(weapon) {
    return !!weapon && weapon.kind === "ranged";
  }

  function rollSlotMachineDamage(luck) {
    const normalizedLuck = clamp((luck - 1) / 9, 0, 1);
    const groupWeights = [60, 24, 9, 4, 2, 0.25];
    const weights = [];
    let total = 0;

    for (let value = 1; value <= 100; value++) {
      let group = 5;
      if (value <= 10) group = 0;
      else if (value <= 30) group = 1;
      else if (value <= 50) group = 2;
      else if (value <= 70) group = 3;
      else if (value <= 89) group = 4;

      const groupStart = group === 0 ? 1
        : group === 1 ? 11
        : group === 2 ? 31
        : group === 3 ? 51
        : group === 4 ? 71
        : 90;
      const inGroupIndex = value - groupStart;
      const inGroupDecay = Math.exp(-0.1 * inGroupIndex);
      const baseWeight = groupWeights[group] * inGroupDecay;

      const highFavor = Math.pow(value / 100, 2.35);
      const lowFavor = Math.pow((101 - value) / 100, 1.25);
      const luckBoost = 1 + normalizedLuck * 2.4 * highFavor;
      const luckPenalty = 1 - normalizedLuck * 0.35 * lowFavor;
      const weight = baseWeight * luckBoost * Math.max(0.12, luckPenalty);

      weights.push(weight);
      total += weight;
    }

    let roll = Math.random() * total;
    for (let value = 1; value <= 100; value++) {
      roll -= weights[value - 1];
      if (roll <= 0) {
        return value;
      }
    }

    return 100;
  }

  function addFloatingDamageText(x, y, amount, color = "#FF0000", duration = 1) {
    if (!game) {
      return;
    }

    game.floatingDamageTexts.push({
      x,
      y,
      vy: -36,
      text: `${Math.max(1, Math.round(amount))}`,
      color,
      ttl: duration
    });
  }

  function updateFloatingDamageTexts(dt) {
    if (game.floatingDamageTexts.length === 0) {
      return;
    }

    const keep = [];
    for (const text of game.floatingDamageTexts) {
      text.y += text.vy * dt;
      text.ttl -= dt;
      if (text.ttl > 0) {
        keep.push(text);
      }
    }
    game.floatingDamageTexts = keep;
  }

  function drawFloatingDamageTexts() {
    if (game.floatingDamageTexts.length === 0) {
      return;
    }

    ctx.save();
    ctx.font = "bold 16px Consolas";
    ctx.textAlign = "center";
    for (const text of game.floatingDamageTexts) {
      ctx.fillStyle = text.color;
      ctx.fillText(text.text, text.x, text.y);
    }
    ctx.restore();
  }

  function loadSpriteAssets() {
    const loads = [];
    Object.keys(SPRITE_PATHS).forEach((group) => {
      const table = SPRITE_PATHS[group];
      Object.keys(table).forEach((id) => {
        const key = `${group}.${id}`;
        const path = table[id];
        loads.push(new Promise((resolve) => {
          const image = new Image();
          image.onload = () => {
            spriteImageMap.set(key, image);
            resolve();
          };
          image.onerror = () => resolve();
          image.src = path;
        }));
      });
    });
    return Promise.all(loads);
  }

  function getSprite(group, id) {
    return spriteImageMap.get(`${group}.${id}`) || null;
  }

  function drawSpriteCentered(image, x, y, width, height, angle = 0, alpha = 1, smooth = false) {
    if (!image) {
      return false;
    }

    ctx.save();
    if (smooth) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    } else {
      ctx.imageSmoothingEnabled = false;
    }
    ctx.globalAlpha = alpha;
    ctx.translate(Math.round(x), Math.round(y));
    if (angle !== 0) {
      ctx.rotate(angle);
    }
    ctx.drawImage(image, Math.round(-width / 2), Math.round(-height / 2), width, height);
    ctx.restore();
    return true;
  }

  class Projectile {
    constructor(x, y, vx, vy, damage, type, size, color, spriteId = null, angle = 0) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.damage = damage;
      this.type = type;
      this.size = size;
      this.color = color;
      this.spriteId = spriteId;
      this.angle = angle;
      this.life = 1.9;
      this.homingStrength = 0;
      this.homingRange = 220;
      this.pierce = false;
      this.hitTargets = new WeakSet();
      this.dead = false;
      this.splashRadius = 0;
      this.splashFactor = 0.6;
    }

    update(dt) {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.life -= dt;

      if (this.life <= 0) {
        this.dead = true;
      }

      if (
        this.x < ARENA.x ||
        this.x > ARENA.x + ARENA.size ||
        this.y < ARENA.y ||
        this.y > ARENA.y + ARENA.size
      ) {
        this.dead = true;
      }
    }

    draw() {
      if (this.spriteId) {
        const sprite = getSprite("projectiles", this.spriteId);
        if (sprite) {
          const drawSize = Math.max(12, this.size * 3);
          drawSpriteCentered(sprite, this.x, this.y, drawSize, drawSize, this.angle);
          return;
        }
      }

      ctx.fillStyle = this.color;
      const s = this.size;
      ctx.fillRect(Math.round(this.x - s), Math.round(this.y - s), s * 2, s * 2);
    }
  }

  class SentryTurret {
    constructor(x, y, mode = "normal") {
      this.x = x;
      this.y = y;
      this.mode = mode;
      this.radius = 12;
      this.attackTimer = Math.random() * 0.25;
      this.range = mode === "lightning" ? 370 : 280;
      this.dead = false;
    }

    currentSpriteId() {
      return this.mode === "lightning" ? "lightning_sentry" : "sentry";
    }

    update(dt, player, enemies, projectiles) {
      if (this.dead) {
        return;
      }

      this.attackTimer -= dt;
      if (this.attackTimer > 0) {
        return;
      }

      const alive = enemies.filter((e) => !e.dead);
      if (alive.length === 0) {
        return;
      }

      this.attackTimer = player.sentryAttackCooldown();

      if (this.mode === "lightning") {
        for (let i = 0; i < 5; i++) {
          const target = pickRandom(alive);
          const jitterX = randInt(-10, 10);
          const jitterY = randInt(-10, 10);
          const aim = normalize((target.x + jitterX) - this.x, (target.y + jitterY) - this.y);
          const speed = 420;
          const bolt = new Projectile(
            this.x,
            this.y,
            aim.x * speed,
            aim.y * speed,
            player.sentryDamage() * 1.85,
            "player",
            5,
            "#c9b2ff",
            "lightning_bolt",
            Math.atan2(aim.y, aim.x) + Math.PI / 2
          );
          bolt.life = 0.48;
          bolt.splashRadius = 58;
          bolt.splashFactor = 0.85;
          bolt.homingStrength = 8.5;
          bolt.homingRange = 430;
          projectiles.push(bolt);
        }
        return;
      }

      let target = null;
      let best = Infinity;
      for (const e of alive) {
        const d = distance(this.x, this.y, e.x, e.y);
        if (d < best && d <= this.range) {
          best = d;
          target = e;
        }
      }
      if (!target) {
        return;
      }

      const aim = normalize(target.x - this.x, target.y - this.y);
      const speed = 338;
      const flame = new Projectile(
        this.x,
        this.y,
        aim.x * speed,
        aim.y * speed,
        player.sentryDamage(),
        "player",
        4,
        "#ff8e57",
        "engineer_flame",
        Math.atan2(aim.y, aim.x) + Math.PI / 2
      );
      flame.life = 0.75;
      flame.homingStrength = 3.8;
      flame.homingRange = 300;
      projectiles.push(flame);
    }

    draw() {
      const sprite = getSprite("turrets", this.currentSpriteId());
      if (sprite) {
        drawSpriteCentered(sprite, this.x, this.y, 30, 30);
      } else {
        ctx.fillStyle = this.mode === "lightning" ? "#8f78bd" : "#5d7288";
        ctx.fillRect(Math.round(this.x - 10), Math.round(this.y - 10), 20, 20);
      }
    }
  }

  class DroneCompanion {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.radius = 10;
      this.orbitAngle = Math.random() * Math.PI * 2;
      this.orbitRadius = 42;
      this.primaryTimer = Math.random() * 0.3;
      this.missileTimer = 0;
      this.range = 520;
      this.dead = false;
    }

    primaryCooldown(player) {
      return Math.max(0.1, 0.42 * player.bonus.cooldownFactor);
    }

    missileCooldown(player) {
      return this.primaryCooldown(player) * 4;
    }

    primaryBaseDamage(player) {
      return (16 + player.bonus.ranged) * player.droneWeaponDamageMultiplier();
    }

    findTarget(enemies) {
      let target = null;
      let best = Infinity;
      for (const e of enemies) {
        if (e.dead) continue;
        const d = distance(this.x, this.y, e.x, e.y);
        if (d < best && d <= this.range) {
          best = d;
          target = e;
        }
      }
      return target;
    }

    update(dt, player, enemies, projectiles) {
      this.orbitAngle += dt * 2.8;
      const targetX = player.x + Math.cos(this.orbitAngle) * this.orbitRadius;
      const targetY = player.y + Math.sin(this.orbitAngle) * this.orbitRadius;
      this.x = clamp(targetX, ARENA.x + 14, ARENA.x + ARENA.size - 14);
      this.y = clamp(targetY, ARENA.y + 14, ARENA.y + ARENA.size - 14);

      if (!player.isDroneWeaponEquipped()) {
        return;
      }

      this.primaryTimer -= dt;
      this.missileTimer -= dt;

      const target = this.findTarget(enemies);
      if (!target) {
        return;
      }

      if (this.primaryTimer <= 0) {
        this.primaryTimer = this.primaryCooldown(player);
        const aim = normalize(target.x - this.x, target.y - this.y);
        const crit = Math.random() < player.bonus.critChance;
        const base = this.primaryBaseDamage(player);
        const damage = crit ? base * 1.6 : base;
        const speed = 820;
        const shot = new Projectile(
          this.x,
          this.y,
          aim.x * speed,
          aim.y * speed,
          damage,
          "player",
          3,
          "#9fe8ff",
          "drone_shot",
          Math.atan2(aim.y, aim.x) + Math.PI / 2
        );
        shot.life = 0.92;
        shot.homingStrength = 2.4;
        shot.homingRange = 260;
        projectiles.push(shot);
      }

      if (player.bonus.droneMissile && this.missileTimer <= 0) {
        this.missileTimer = this.missileCooldown(player);
        const aim = normalize(target.x - this.x, target.y - this.y);
        const crit = Math.random() < player.bonus.critChance;
        const base = this.primaryBaseDamage(player) * 2.2;
        const damage = crit ? base * 1.6 : base;
        const speed = 560;
        const missile = new Projectile(
          this.x,
          this.y,
          aim.x * speed,
          aim.y * speed,
          damage,
          "player",
          6,
          "#ffd177",
          "drone_missile",
          Math.atan2(aim.y, aim.x) + Math.PI / 2
        );
        missile.life = 1.2;
        missile.splashRadius = 72;
        missile.splashFactor = 0.9;
        missile.homingStrength = 1.4;
        missile.homingRange = 210;
        projectiles.push(missile);
      }
    }

    draw(player) {
      if (!player.isDroneWeaponEquipped()) {
        return;
      }

      const sprite = getSprite("turrets", "drone_unit");
      if (sprite) {
        drawSpriteCentered(sprite, this.x, this.y, 24, 24, this.orbitAngle * 1.4);
      } else {
        ctx.fillStyle = "#7bd7f2";
        ctx.fillRect(Math.round(this.x - 8), Math.round(this.y - 8), 16, 16);
      }
    }
  }

  class GroundOffer {
    constructor(x, y, offer) {
      this.x = x;
      this.y = y;
      this.offer = offer;
      this.radius = 18;
      this.bought = false;
    }

    draw(player, isFocused) {
      if (this.bought) {
        return;
      }

      const spriteGroup = this.offer.kind === "item" ? "items" : "weapons";
      const spriteId = this.offer.kind === "item" ? this.offer.id : this.offer.weaponId;
      const sprite = getSprite(spriteGroup, spriteId);

      ctx.fillStyle = isFocused ? "rgba(255,222,128,0.38)" : "rgba(255,255,255,0.12)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 10, 0, Math.PI * 2);
      ctx.fill();

      if (sprite) {
        drawSpriteCentered(sprite, this.x, this.y - 2, 34, 34);
      } else {
        ctx.fillStyle = "#d5dde6";
        ctx.fillRect(this.x - 12, this.y - 12, 24, 24);
      }

      ctx.textAlign = "center";
      ctx.font = "12px Consolas";
      ctx.fillStyle = rarityColor(this.offer.rarity || 1);
      ctx.fillText(`${localizeOfferName(this.offer)} [${rarityLabel(this.offer.rarity || 1)}]`, this.x, this.y + 26);
      ctx.fillStyle = "#d8e4ee";
      ctx.fillText(localizeOfferDesc(this.offer), this.x, this.y + 40);
      ctx.fillStyle = "#f3d27a";
      ctx.fillText(`${this.offer.cost}g`, this.x, this.y + 54);

      if (distance(player.x, player.y, this.x, this.y) <= MERCHANT_INTERACT_RANGE) {
        ctx.fillStyle = "rgba(50, 70, 85, 0.9)";
        ctx.fillRect(this.x - 58, this.y - 54, 116, 20);
        ctx.fillStyle = "#f6f9fc";
        ctx.fillText(t("ui.pressToBuy"), this.x, this.y - 40);
      }
    }
  }

  class Enemy {
    constructor(typeId, x, y) {
      const def = ENEMIES[typeId];
      this.id = def.id;
      this.name = def.name;
      this.x = x;
      this.y = y;
      this.radius = def.radius;
      this.baseSpeed = def.speed;
      this.speed = def.speed;
      this.damage = def.damage;
      this.maxHp = def.hp;
      this.hp = def.hp;
      this.color = def.color;
      this.goldRange = def.gold;
      this.isBoss = !!def.isBoss;
      this.dead = false;
      this.hitCooldown = 0;
      this.attackTimer = 0;
      this.secondaryTimer = randInt(8, 13) / 10;
      this.phase2 = false;
      this.wobble = Math.random() * Math.PI * 2;
      this.chargeTimer = 0;
      this.chargeVx = 0;
      this.chargeVy = 0;
      this.orbitAngle = Math.random() * Math.PI * 2;
      this.flankSign = Math.random() < 0.5 ? -1 : 1;
    }

    update(dt, player, projectiles, enemies) {
      if (this.dead) {
        return;
      }

      this.hitCooldown -= dt;
      this.attackTimer -= dt;
      this.secondaryTimer -= dt;

      if (this.isBoss) {
        this.updateBoss(dt, player, projectiles, enemies);
      } else {
        this.updateMinion(dt, player, projectiles, enemies);
      }

      this.x = clamp(this.x, ARENA.x + this.radius, ARENA.x + ARENA.size - this.radius);
      this.y = clamp(this.y, ARENA.y + this.radius, ARENA.y + ARENA.size - this.radius);

      const d = distance(this.x, this.y, player.x, player.y);
      if (d <= this.radius + player.radius && this.hitCooldown <= 0) {
        this.hitCooldown = this.isBoss ? 0.55 : 0.7;
        player.takeDamage(this.damage);
      }
    }

    getSeparationVector(enemies) {
      let sepX = 0;
      let sepY = 0;
      for (const other of enemies) {
        if (other === this || other.dead) continue;
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const d = Math.hypot(dx, dy);
        const minD = this.radius + other.radius + 18;
        if (d > 0 && d < minD) {
          const push = (minD - d) / minD;
          sepX += (dx / d) * push;
          sepY += (dy / d) * push;
        }
      }
      return { x: sepX, y: sepY };
    }

    updateMinion(dt, player, projectiles, enemies) {
      let toPlayerX = player.x - this.x;
      let toPlayerY = player.y - this.y;
      const distToPlayer = Math.hypot(toPlayerX, toPlayerY) || 1;

      if (this.id === "skeleton" && distToPlayer < 260) {
        const sideX = -toPlayerY / distToPlayer;
        const sideY = toPlayerX / distToPlayer;
        toPlayerX += sideX * 72 * this.flankSign;
        toPlayerY += sideY * 72 * this.flankSign;
      }

      if (this.id === "slime") {
        this.wobble += dt * 3.5;
        toPlayerX += Math.cos(this.wobble) * 34;
        toPlayerY += Math.sin(this.wobble * 1.1) * 34;
      }

      if (this.id === "bat") {
        this.wobble += dt * 8;
        toPlayerX += Math.cos(this.wobble) * 60;
        toPlayerY += Math.sin(this.wobble * 0.7) * 60;
      }

      if (this.id === "cultist") {
        const d = Math.hypot(toPlayerX, toPlayerY);
        if (d < 160) {
          toPlayerX *= -1;
          toPlayerY *= -1;
        }
        if (this.attackTimer <= 0) {
          this.attackTimer = 1.2;
          const aim = normalize(player.x - this.x, player.y - this.y);
          const speed = 280;
          projectiles.push(new Projectile(this.x, this.y, aim.x * speed, aim.y * speed, 14, "enemy", 5, "#b998ff", "enemy_skull", Math.atan2(aim.y, aim.x) + Math.PI / 2));
        }
      }

      if (this.id === "brute") {
        if (this.chargeTimer > 0) {
          this.chargeTimer -= dt;
          this.x += this.chargeVx * dt;
          this.y += this.chargeVy * dt;
          return;
        }

        if (this.secondaryTimer <= 0) {
          this.secondaryTimer = 2.6;
          const aim = normalize(player.x - this.x, player.y - this.y);
          this.chargeVx = aim.x * 390;
          this.chargeVy = aim.y * 390;
          this.chargeTimer = 0.28;
          return;
        }
      }

      if (this.id === "wisp") {
        this.orbitAngle += dt * 5.4;
        toPlayerX += Math.cos(this.orbitAngle) * 95;
        toPlayerY += Math.sin(this.orbitAngle * 1.3) * 95;
      }

      const separation = this.getSeparationVector(enemies);
      toPlayerX += separation.x * 210;
      toPlayerY += separation.y * 210;

      const dir = normalize(toPlayerX, toPlayerY);
      this.x += dir.x * this.speed * dt;
      this.y += dir.y * this.speed * dt;
    }

    updateBoss(dt, player, projectiles, enemies) {
      const toPlayer = normalize(player.x - this.x, player.y - this.y);
      this.x += toPlayer.x * this.speed * dt;
      this.y += toPlayer.y * this.speed * dt;

      if (!this.phase2 && this.hp <= this.maxHp * 0.55) {
        this.phase2 = true;
        this.speed += 24;
      }

      if (this.id === "boss") {
        const mainCd = this.phase2 ? 0.85 : 1.25;
        if (this.attackTimer <= 0) {
          this.attackTimer = mainCd;
          const spread = this.phase2 ? 4 : 3;
          for (let i = -spread; i <= spread; i++) {
            const angle = Math.atan2(toPlayer.y, toPlayer.x) + i * 0.15;
            const vx = Math.cos(angle) * 290;
            const vy = Math.sin(angle) * 290;
            projectiles.push(new Projectile(this.x, this.y, vx, vy, 16, "enemy", 5, "#ff8f8f", "enemy_skull", angle + Math.PI / 2));
          }
        }

        if (this.secondaryTimer <= 0) {
          this.secondaryTimer = this.phase2 ? 1.9 : 2.8;
          const ringShots = this.phase2 ? 12 : 8;
          for (let i = 0; i < ringShots; i++) {
            const angle = (Math.PI * 2 * i) / ringShots;
            projectiles.push(new Projectile(this.x, this.y, Math.cos(angle) * 240, Math.sin(angle) * 240, 12, "enemy", 4, "#ff7373", "enemy_skull", angle + Math.PI / 2));
          }
          const summonCount = this.phase2 ? 3 : 2;
          for (let i = 0; i < summonCount; i++) {
            const p = randomEdgeSpawn();
            enemies.push(new Enemy(Math.random() < 0.6 ? "skeleton" : "cultist", p.x, p.y));
          }
        }
        return;
      }

      if (this.id === "boss_reaver") {
        if (this.chargeTimer > 0) {
          this.chargeTimer -= dt;
          this.x += this.chargeVx * dt;
          this.y += this.chargeVy * dt;
          return;
        }

        if (this.attackTimer <= 0) {
          this.attackTimer = this.phase2 ? 1.25 : 1.7;
          const count = this.phase2 ? 16 : 12;
          for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + this.elapsedOffset();
            projectiles.push(new Projectile(this.x, this.y, Math.cos(angle) * 260, Math.sin(angle) * 260, 13, "enemy", 4, "#ff6f6f", "enemy_skull", angle + Math.PI / 2));
          }
        }

        if (this.secondaryTimer <= 0) {
          this.secondaryTimer = this.phase2 ? 1.45 : 2.0;
          const aim = normalize(player.x - this.x, player.y - this.y);
          this.chargeVx = aim.x * (this.phase2 ? 520 : 430);
          this.chargeVy = aim.y * (this.phase2 ? 520 : 430);
          this.chargeTimer = this.phase2 ? 0.35 : 0.26;
        }
        return;
      }

      if (this.id === "boss_abomination") {
        if (this.attackTimer <= 0) {
          this.attackTimer = this.phase2 ? 0.72 : 1.05;
          const bursts = this.phase2 ? 8 : 5;
          const baseAngle = Math.atan2(toPlayer.y, toPlayer.x);
          for (let i = -bursts; i <= bursts; i++) {
            const angle = baseAngle + i * 0.1;
            projectiles.push(new Projectile(this.x, this.y, Math.cos(angle) * 275, Math.sin(angle) * 275, 18, "enemy", 6, "#90d967", "enemy_skull", angle + Math.PI / 2));
          }
        }

        if (this.secondaryTimer <= 0) {
          this.secondaryTimer = this.phase2 ? 1.2 : 1.9;
          const p = randomEdgeSpawn();
          enemies.push(new Enemy(Math.random() < 0.5 ? "wisp" : "brute", p.x, p.y));
          spawnToxicPool(player.x + randInt(-38, 38), player.y + randInt(-38, 38), this.phase2 ? 54 : 44, this.phase2 ? 7.2 : 5.4, this.phase2 ? 20 : 14);
          if (this.phase2) {
            this.hp = Math.min(this.maxHp, this.hp + 36);
          }
        }
        return;
      }

      if (this.id === "boss_oracle") {
        if (this.attackTimer <= 0) {
          this.attackTimer = this.phase2 ? 0.55 : 0.85;
          const count = this.phase2 ? 14 : 10;
          const offset = this.elapsedOffset();
          for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + offset;
            const speed = this.phase2 ? 300 : 250;
            projectiles.push(new Projectile(this.x, this.y, Math.cos(angle) * speed, Math.sin(angle) * speed, 12, "enemy", 4, "#bb89ff", "enemy_skull", angle + Math.PI / 2));
          }
        }

        if (this.secondaryTimer <= 0) {
          this.secondaryTimer = this.phase2 ? 1.45 : 2.05;
          this.x = randInt(ARENA.x + 80, ARENA.x + ARENA.size - 80);
          this.y = randInt(ARENA.y + 80, ARENA.y + ARENA.size - 80);
          const burst = this.phase2 ? 12 : 8;
          for (let i = 0; i < burst; i++) {
            const angle = (Math.PI * 2 * i) / burst;
            projectiles.push(new Projectile(this.x, this.y, Math.cos(angle) * 270, Math.sin(angle) * 270, 11, "enemy", 4, "#c9a5ff", "enemy_skull", angle + Math.PI / 2));
          }
          if (this.phase2) {
            const p = randomEdgeSpawn();
            enemies.push(new Enemy(Math.random() < 0.5 ? "cultist" : "bat", p.x, p.y));
          }
        }
      }
    }

    elapsedOffset() {
      return (Date.now() % 10000) / 10000 * Math.PI * 2;
    }

    takeDamage(amount, options = null) {
      this.hp -= amount;
      if (options && options.showFloating) {
        addFloatingDamageText(this.x, this.y - this.radius - 8, amount, "#FF0000", 1);
      }
      if (this.hp <= 0) {
        this.dead = true;
      }
    }

    draw() {
      const r = this.radius;
      const sprite = getSprite("enemies", this.id);

      if (sprite) {
        if (this.isBoss) {
          drawSpriteCentered(sprite, this.x, this.y, r * 2 + 20, r * 2 + 20);
          return;
        }

        if (this.id === "bat") {
          drawSpriteCentered(sprite, this.x, this.y, 46, 24);
          return;
        }

        if (this.id === "slime") {
          drawSpriteCentered(sprite, this.x, this.y, 50, 34);
          return;
        }

        drawSpriteCentered(sprite, this.x, this.y, r * 2 + 8, r * 2 + 10);
        return;
      }

      const x = Math.round(this.x);
      const y = Math.round(this.y);
      ctx.fillStyle = this.color;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
  }

  class Player {
    constructor(charDef) {
      this.charId = charDef.id;
      this.name = charDef.name;
      this.base = charDef;
      const tuning = PLAYER_CHARACTER_TUNING[this.charId] || { bodyWidth: 40, bodyHeight: 40, hitboxRadius: 14 };
      this.x = ARENA.x + ARENA.size / 2;
      this.y = ARENA.y + ARENA.size / 2;
      this.radius = tuning.hitboxRadius;
      this.hp = charDef.hp;
      this.gold = charDef.startingGold || 0;
      this.damageFlash = 0;

      this.bonus = {
        maxHp: 0,
        speed: 0,
        dodge: 0,
        melee: 0,
        ranged: 0,
        magic: 0,
        armor: 0,
        lifesteal: 0,
        goldFactor: 0,
        critChance: 0,
        cooldownFactor: 1,
        dashPower: 0,
        dashCooldownFactor: 1,
        meleeRangeFactor: 1,
        meleeArcBonus: 0,
        magicHoming: 0,
        hpRegen: 0,
        swordWave: 0,
        rangedDashBonus: 0,
        sentryCountBonus: 0,
        sentryDamageBonus: 0,
        sentryRateFactor: 1,
        lightningOverlord: false,
        droneMissile: false,
        iraBerserker: false,
        pickpocketChance: 0,
        luckFlat: 0,
        epicLuckCurrent: 0
      };

      this.weapons = [
        JSON.parse(JSON.stringify(WEAPONS[charDef.startWeapon]))
      ];
      this.activeWeapon = 0;
      this.attackCooldown = 0;
      this.items = [];
      this.invulnerable = 0;
      this.lastMoveDir = { x: 1, y: 0 };
      this.dashDir = { x: 1, y: 0 };
      this.dashTimer = 0;
      this.dashRechargeTimer = 0;
      this.dashCharges = 1;
      this.baseDashDuration = 0.16;
      this.baseDashSpeed = 520;
      this.baseDashCooldown = 1.4;
      this.sentries = [];
      this.drone = new DroneCompanion();
      this.moveAnimTime = 0;
      this.isMovingVisual = false;
      this.facingSign = 1;
      this.moveAnimBlend = 0;
      this.facingScaleX = 1;
    }

    maxHp() {
      return this.base.hp + this.bonus.maxHp;
    }

    speed() {
      return this.base.speed + this.bonus.speed;
    }

    armor() {
      return clamp(this.base.armor + this.bonus.armor, 0, 0.75);
    }

    dodgeChance() {
      return clamp((this.base.dodge || 0) + this.bonus.dodge, 0, 0.65);
    }

    luck() {
      const baseLuck = this.base.luck || 1;
      return Math.max(0.5, baseLuck + this.bonus.luckFlat + this.bonus.epicLuckCurrent);
    }

    currentDashCooldown() {
      return Math.max(0.45, this.baseDashCooldown * this.bonus.dashCooldownFactor);
    }

    currentDashMaxCharges() {
      const weapon = this.weapons[this.activeWeapon];
      const extra = this.bonus.rangedDashBonus > 0 && isRangedWeapon(weapon) ? 1 : 0;
      return 1 + extra;
    }

    dashChargeFillPct() {
      const maxCharges = this.currentDashMaxCharges();
      if (maxCharges <= 0) {
        return 0;
      }

      const cooldown = this.currentDashCooldown();
      const partial = this.dashCharges >= maxCharges || this.dashRechargeTimer <= 0
        ? 0
        : (cooldown - this.dashRechargeTimer) / cooldown;

      return clamp((this.dashCharges + partial) / maxCharges, 0, 1);
    }

    normalizeDashState() {
      const maxCharges = this.currentDashMaxCharges();
      this.dashCharges = clamp(this.dashCharges, 0, maxCharges);
      if (this.dashCharges >= maxCharges) {
        this.dashRechargeTimer = 0;
      }
    }

    dashSpeed() {
      return this.baseDashSpeed + this.bonus.dashPower;
    }

    triggerDash() {
      this.normalizeDashState();
      if (this.dashCharges <= 0 || this.dashTimer > 0) {
        return;
      }

      const maxCharges = this.currentDashMaxCharges();
      this.dashCharges -= 1;
      this.dashTimer = this.baseDashDuration;
      if (this.dashCharges < maxCharges && this.dashRechargeTimer <= 0) {
        this.dashRechargeTimer = this.currentDashCooldown();
      }
      this.dashDir = { x: this.lastMoveDir.x, y: this.lastMoveDir.y };
      this.invulnerable = Math.max(this.invulnerable, 0.1);
    }

    weaponDamage(weapon) {
      let typeBonus = 0;
      let mult = 1;

      if (weapon.kind === "melee") {
        mult = this.base.meleeMult;
        typeBonus = this.bonus.melee;
      } else if (weapon.kind === "ranged") {
        mult = this.base.rangedMult;
        typeBonus = this.bonus.ranged;
      } else if (weapon.kind === "magic") {
        mult = this.base.magicMult;
        typeBonus = this.bonus.magic;
      }

      const dynamicBase = weapon.damage + (typeof weapon.goldScaling === "number" ? this.gold * weapon.goldScaling : 0);
      const base = (dynamicBase + typeBonus) * mult;
      if (weapon.id === "drone_weapon" && this.charId === "conductor") {
        return base * 1.25;
      }

      return base;
    }

    activeWeaponDef() {
      return this.weapons[this.activeWeapon] || null;
    }

    hasWeapon(weaponId) {
      return this.weapons.some((w) => !!w && w.id === weaponId);
    }

    isDroneWeaponEquipped() {
      const weapon = this.activeWeaponDef();
      return !!weapon && weapon.id === "drone_weapon";
    }

    droneWeaponDamageMultiplier() {
      return this.charId === "conductor" && this.isDroneWeaponEquipped() ? 1.25 : 1;
    }

    isSolderingIronActive() {
      const weapon = this.activeWeaponDef();
      return !!weapon && weapon.id === "soldering_iron";
    }

    desiredSentryCount() {
      if (!this.isSolderingIronActive()) {
        return 0;
      }
      return 1 + this.bonus.sentryCountBonus;
    }

    sentryDamage() {
      return 14 + this.bonus.sentryDamageBonus;
    }

    sentryAttackCooldown() {
      return Math.max(0.12, 0.46 * this.bonus.sentryRateFactor);
    }

    spawnSentry(mode = "normal") {
      const angle = Math.random() * Math.PI * 2;
      const radius = 56;
      const x = clamp(this.x + Math.cos(angle) * radius, ARENA.x + 16, ARENA.x + ARENA.size - 16);
      const y = clamp(this.y + Math.sin(angle) * radius, ARENA.y + 16, ARENA.y + ARENA.size - 16);
      this.sentries.push(new SentryTurret(x, y, mode));
    }

    clearEngineerSentries() {
      this.sentries = [];
    }

    syncEngineerSentries() {
      const desired = this.desiredSentryCount();
      if (desired <= 0) {
        this.clearEngineerSentries();
        return;
      }

      while (this.sentries.length < desired) {
        this.spawnSentry("normal");
      }
      while (this.sentries.length > desired) {
        this.sentries.pop();
      }

      const hasLightning = this.sentries.some((s) => s.mode === "lightning");
      if (this.bonus.lightningOverlord && !hasLightning && this.sentries.length > 0) {
        this.sentries[0].mode = "lightning";
      }
      if (!this.bonus.lightningOverlord) {
        for (const sentry of this.sentries) {
          sentry.mode = "normal";
        }
      } else {
        let firstLightningFound = false;
        for (const sentry of this.sentries) {
          if (sentry.mode === "lightning" && !firstLightningFound) {
            firstLightningFound = true;
            continue;
          }
          sentry.mode = "normal";
        }
      }

      tryUnlockEngineerMilestone();
    }

    onWeaponStateChanged() {
      this.syncEngineerSentries();
    }

    updateSentries(dt, enemies, projectiles) {
      for (const sentry of this.sentries) {
        sentry.update(dt, this, enemies, projectiles);
      }
    }

    updateDrone(dt, enemies, projectiles) {
      this.drone.update(dt, this, enemies, projectiles);
    }

    update(dt, enemies, projectiles, canAttack = true) {
      this.attackCooldown -= dt;
      this.invulnerable -= dt;
      this.damageFlash = Math.max(0, this.damageFlash - dt * 3);
      this.dashTimer = Math.max(0, this.dashTimer - dt);
      this.normalizeDashState();

      const maxCharges = this.currentDashMaxCharges();
      if (this.dashCharges < maxCharges) {
        this.dashRechargeTimer = Math.max(0, this.dashRechargeTimer - dt);
        if (this.dashRechargeTimer <= 0) {
          this.dashCharges += 1;
          if (this.dashCharges < maxCharges) {
            this.dashRechargeTimer = this.currentDashCooldown();
          }
        }
      }

      let dx = 0;
      let dy = 0;

      if (input.keys.has("KeyW")) dy -= 1;
      if (input.keys.has("KeyS")) dy += 1;
      if (input.keys.has("KeyA")) dx -= 1;
      if (input.keys.has("KeyD")) dx += 1;

      if (dx !== 0 || dy !== 0) {
        const dir = normalize(dx, dy);
        this.lastMoveDir.x = dir.x;
        this.lastMoveDir.y = dir.y;
        this.x += dir.x * this.speed() * dt;
        this.y += dir.y * this.speed() * dt;
      }

      if (this.dashTimer > 0) {
        this.x += this.dashDir.x * this.dashSpeed() * dt;
        this.y += this.dashDir.y * this.dashSpeed() * dt;
      }

      const movingNow = dx !== 0 || dy !== 0 || this.dashTimer > 0;
      const targetMoveBlend = movingNow ? 1 : 0;
      const moveBlendLerp = Math.min(1, dt * (movingNow ? 9 : 6));
      this.moveAnimBlend += (targetMoveBlend - this.moveAnimBlend) * moveBlendLerp;
      this.isMovingVisual = this.moveAnimBlend > 0.06;
      const animSpeed = 2.8 + this.moveAnimBlend * 7.6;
      this.moveAnimTime += dt * animSpeed;

      this.x = clamp(this.x, ARENA.x + this.radius, ARENA.x + ARENA.size - this.radius);
      this.y = clamp(this.y, ARENA.y + this.radius, ARENA.y + ARENA.size - this.radius);

      this.syncEngineerSentries();
      this.updateSentries(dt, enemies, projectiles);
      this.updateDrone(dt, enemies, projectiles);

      if (canAttack && input.mouseDown && this.attackCooldown <= 0) {
        this.attack(enemies, projectiles);
      }
    }

    attack(enemies, projectiles) {
      if (this.charId === "conductor") {
        this.attackCooldown = 0.06;
        return;
      }

      if (this.charId === "slot_machine_robot") {
        if (this.gold < 1) {
          return;
        }
        this.gold -= 1;
      }

      const weapon = this.weapons[this.activeWeapon];
      const berserkerFactor = this.bonus.iraBerserker && (this.hp / this.maxHp()) < 0.25 ? 0.5 : 1;
      const cooldown = weapon.cooldown * this.bonus.cooldownFactor * berserkerFactor;
      this.attackCooldown = Math.max(0.08, cooldown);

      const aim = normalize(input.mouseX - this.x, input.mouseY - this.y);
      const baseDamage = this.charId === "slot_machine_robot"
        ? rollSlotMachineDamage(this.luck())
        : this.weaponDamage(weapon);
      const crit = this.charId === "slot_machine_robot" ? false : Math.random() < this.bonus.critChance;
      const damage = crit ? baseDamage * 1.6 : baseDamage;

      if (weapon.kind === "melee") {
        const meleeRange = weapon.range * this.bonus.meleeRangeFactor;
        const meleeArc = weapon.arc + this.bonus.meleeArcBonus;
        const attackAngle = Math.atan2(aim.y, aim.x);
        for (const e of enemies) {
          if (e.dead) continue;
          const d = distance(this.x, this.y, e.x, e.y);
          if (d > meleeRange + e.radius) continue;
          const a = Math.atan2(e.y - this.y, e.x - this.x);
          let diff = Math.abs(a - attackAngle);
          if (diff > Math.PI) diff = Math.PI * 2 - diff;
          if (diff <= meleeArc * 0.5) {
            e.takeDamage(damage, { showFloating: this.charId === "slot_machine_robot" });
            onPlayerSuccessfulHit(this, e.x, e.y);
            if (this.bonus.lifesteal > 0) {
              this.hp = Math.min(this.maxHp(), this.hp + damage * this.bonus.lifesteal * 0.16);
            }
          }
        }

        if (this.bonus.swordWave > 0 && weapon.id.includes("sword")) {
          const waveSpeed = 430;
          const wave = new Projectile(
            this.x + aim.x * meleeRange,
            this.y + aim.y * meleeRange,
            aim.x * waveSpeed,
            aim.y * waveSpeed,
            damage * 0.5,
            "player",
            3,
            "#d7f2ff",
            "magic_bolt",
            Math.atan2(aim.y, aim.x) + Math.PI / 2
          );
          wave.pierce = true;
          wave.life = 0.55;
          projectiles.push(wave);
        }
      } else {
        const speed = weapon.projectileSpeed;
        if (weapon.id === "soldering_iron") {
          const spread = weapon.projectileSpread || 0.14;
          const angle = Math.atan2(aim.y, aim.x) + (Math.random() * 2 - 1) * spread;
          const dirX = Math.cos(angle);
          const dirY = Math.sin(angle);
          const projectile = new Projectile(
            this.x + dirX * 14,
            this.y + dirY * 14,
            dirX * speed,
            dirY * speed,
            damage,
            "player",
            weapon.projectileSize,
            weapon.color,
            "engineer_flame",
            angle + Math.PI / 2
          );
          projectile.life = weapon.projectileLife || 0.3;
          projectiles.push(projectile);
        } else {
          const projectileSprite = getProjectileSpriteForWeapon(weapon.id);
          const projectileAngle = Math.atan2(aim.y, aim.x) + Math.PI / 2;
          const projectile = new Projectile(
            this.x + aim.x * 16,
            this.y + aim.y * 16,
            aim.x * speed,
            aim.y * speed,
            damage,
            "player",
            weapon.projectileSize,
            weapon.color,
            projectileSprite,
            projectileAngle
          );
          if (weapon.kind === "magic" && this.bonus.magicHoming > 0) {
            projectile.homingStrength = this.bonus.magicHoming;
            projectile.homingRange = 320;
          }
          if (weapon.id === "oraculus") {
            projectile.pierce = true;
            projectile.life = 3.4;
            projectile.size = 6;
          }
          projectiles.push(projectile);
        }
      }
    }

    takeDamage(raw) {
      if (this.invulnerable > 0) {
        return;
      }

      if (Math.random() < this.dodgeChance()) {
        return;
      }

      const final = raw * (1 - this.armor());
      this.hp -= final;
      this.invulnerable = 0.4;
      this.damageFlash = 1;

      if (this.bonus.epicLuckCurrent > 0) {
        this.bonus.epicLuckCurrent = Math.max(0.5, this.bonus.epicLuckCurrent - 0.5);
      }
    }

    applyOffer(offer) {
      if (offer.kind === "item") {
        offer.apply(this);
        this.items.push({ id: offer.id, rarity: offer.rarity || 1 });
        this.hp = Math.min(this.maxHp(), this.hp);
        return true;
      }

      if (this.base.weaponLocked) {
        return false;
      }

      const weapon = JSON.parse(JSON.stringify(WEAPONS[offer.weaponId]));
      if (this.weapons.length < 2) {
        this.weapons.push(weapon);
      } else {
        this.weapons[this.activeWeapon] = weapon;
      }
      this.onWeaponStateChanged();
      return true;
    }

    drawSentries() {
      for (const sentry of this.sentries) {
        sentry.draw();
      }
    }

    drawDrone() {
      this.drone.draw(this);
    }

    draw() {
      const aim = normalize(input.mouseX - this.x, input.mouseY - this.y);
      const bodySprite = getSprite("characters", this.charId);
      const bodyTuning = PLAYER_CHARACTER_TUNING[this.charId] || { bodyWidth: 40, bodyHeight: 40, hitboxRadius: 14 };
      const activeWeapon = this.weapons[this.activeWeapon];
      const weaponSprite = activeWeapon ? getSprite("weapons", activeWeapon.id) : null;

      if (weaponSprite && activeWeapon) {
        const reach = activeWeapon.kind === "melee" ? 22 : 18;
        const wx = this.x + aim.x * reach;
        const wy = this.y + aim.y * reach;
        const weaponSize = activeWeapon.kind === "melee" ? 24 : 20;
        const rotation = Math.atan2(aim.y, aim.x) + Math.PI / 2;
        drawSpriteCentered(weaponSprite, wx, wy, weaponSize, weaponSize, rotation);
      }

      if (bodySprite) {
        const alpha = this.damageFlash > 0 ? 0.82 : 1;
        if (aim.x > 0.05) {
          this.facingSign = 1;
        } else if (aim.x < -0.05) {
          this.facingSign = -1;
        }

        const phase = this.moveAnimTime;
        const bobAmplitude = 0.7 + this.moveAnimBlend * 2.7;
        const bobOffsetY = Math.sin(phase) * bobAmplitude;
        const pulse = Math.sin(phase * 2) * 0.5 + 0.5;
        const widthPulse = 1 - this.moveAnimBlend * (0.03 + pulse * 0.04);
        const heightPulse = 1 + this.moveAnimBlend * (0.02 + pulse * 0.045);
        this.facingScaleX += (this.facingSign - this.facingScaleX) * 0.22;

        const drawWidth = Math.round(bodyTuning.bodyWidth * PLAYER_BODY_WIDTH_MULTIPLIER * widthPulse);
        const drawHeight = Math.round(bodyTuning.bodyHeight * PLAYER_BODY_HEIGHT_MULTIPLIER * heightPulse);

        ctx.save();
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.globalAlpha = alpha;
        ctx.translate(Math.round(this.x), Math.round(this.y + bobOffsetY));
        ctx.scale(this.facingScaleX, 1);
        ctx.drawImage(bodySprite, Math.round(-drawWidth / 2), Math.round(-drawHeight / 2), drawWidth, drawHeight);
        ctx.restore();
      } else {
        const x = Math.round(this.x);
        const y = Math.round(this.y);
        ctx.fillStyle = "#7ca0b8";
        ctx.fillRect(x - 12, y - 12, 24, 24);
      }

      if (this.dashTimer > 0) {
        ctx.strokeStyle = "rgba(120, 220, 255, 0.55)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 22, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(255,255,255,0.38)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + aim.x * 26, this.y + aim.y * 26);
      ctx.stroke();
    }
  }

  const game = {
    state: GAME_STATE.CHARACTER_SELECT,
    previousState: GAME_STATE.CHARACTER_SELECT,
    player: null,
    enemies: [],
    projectiles: [],
    wave: 0,
    kills: 0,
    elapsed: 0,
    shopOffers: [],
    groundOffers: [],
    enemySpawnTimer: 0,
    spawnInterval: 0,
    spawnQueue: [],
    merchantMessage: "",
    merchantMessageTimer: 0,
    activeBossId: "",
    hazards: [],
    rerollCount: 0,
    floatingDamageTexts: [],
    runFlags: {
      hadFiveEngineerSentries: false
    }
  };

  function isCharacterUnlocked(charDef) {
    if (!charDef.unlockCategory || !charDef.unlockId) {
      return true;
    }
    return isUnlocked(charDef.unlockCategory, charDef.unlockId, !!charDef.startsUnlocked);
  }

  function isOfferUnlocked(offer) {
    if (!offer.unlockCategory || !offer.unlockId) {
      return true;
    }
    return isUnlocked(offer.unlockCategory, offer.unlockId, !!offer.startsUnlocked);
  }

  function offerDisplayNameById(kind, id, fallback = id) {
    if (kind === "weapon") {
      return t(`weaponName.${id}`, {}, fallback);
    }
    return t(`itemName.${id}`, {}, fallback);
  }

  function onPlayerSuccessfulHit(player, x, y) {
    if (!player || player.bonus.pickpocketChance <= 0) {
      return;
    }
    if (Math.random() < player.bonus.pickpocketChance) {
      player.gold += 5;
      addFloatingDamageText(x, y - 10, 5, "#f3d27a", 0.75);
    }
  }

  function tryUnlockEngineerMilestone() {
    if (!game.player || game.player.charId !== "engineer") {
      return;
    }
    if (game.player.sentries.length < 5 || game.runFlags.hadFiveEngineerSentries) {
      return;
    }

    game.runFlags.hadFiveEngineerSentries = true;
    const unlockedCharacter = unlockContent("characters", "conductor", localizeCharacterName("conductor", "Conductor"));
    const unlockedWeapon = unlockContent("weapons", "drone_weapon", offerDisplayNameById("weapon", "drone_weapon", "Drone Weapon"));
    if (unlockedCharacter || unlockedWeapon) {
      createCharacterCards();
    }
  }

  function evaluateVictoryUnlocks() {
    if (!game.player) {
      return;
    }

    const won = game.wave >= MAX_WAVE;
    if (!won) {
      return;
    }

    if (Math.floor(game.player.gold) > 2000) {
      unlockContent("characters", "slot_machine_robot", localizeCharacterName("slot_machine_robot", "Slot Machine Robot"));
    }

    const clearUnlockMap = {
      knight: [{ category: "items", id: "echo_blade", kind: "item" }],
      orc: [{ category: "items", id: "ira_berserker", kind: "item" }],
      frogfolk: [{ category: "items", id: "botas_saltarinas", kind: "item" }],
      engineer: [{ category: "items", id: "lightning_overlord", kind: "item" }],
      mage: [{ category: "weapons", id: "oraculus", kind: "weapon" }],
      hunter: [{ category: "items", id: "traje_de_hojas", kind: "item" }],
      conductor: [{ category: "items", id: "drone_missile", kind: "item" }],
      thief: [{ category: "items", id: "carterista", kind: "item" }]
    };

    const unlocks = clearUnlockMap[game.player.charId] || [];
    for (const entry of unlocks) {
      unlockContent(entry.category, entry.id, offerDisplayNameById(entry.kind, entry.id, entry.id));
    }

    progress.completedRuns.push({
      charId: game.player.charId,
      wave: game.wave,
      kills: game.kills,
      gold: Math.floor(game.player.gold),
      won: true,
      timestamp: Date.now()
    });
    saveProgress();
    createCharacterCards();
  }

  function getWaveEnemyPressure(waveNumber) {
    const plan = getWavePlan(waveNumber);
    if (!plan) {
      return 10;
    }

    if (plan.bossPool && plan.bossPool.length > 0) {
      return Math.ceil(26 * ENEMY_WAVE_INCREASE);
    }

    return Object.values(plan.spawns).reduce((sum, count) => {
      return sum + Math.ceil(count * ENEMY_WAVE_INCREASE);
    }, 0);
  }

  function getMerchantPriceMultiplier() {
    const progress = 1 + game.wave * 0.12;
    const nextPressure = getWaveEnemyPressure(game.wave + 1);
    const pressureFactor = 1 + nextPressure * 0.019;
    return clamp(progress * pressureFactor * ENEMY_WAVE_INCREASE, 1.4, 4.5);
  }

  function getRerollCost() {
    return Math.round((24 + game.rerollCount * 18 + game.wave * 6) * ENEMY_WAVE_INCREASE);
  }

  function updateRerollButtonLabel() {
    if (!rerollShopBtn) {
      return;
    }
    rerollShopBtn.textContent = `${t("ui.reroll")} (${getRerollCost()}g)`;
  }

  function spawnToxicPool(x, y, radius, life, damage) {
    game.hazards.push({
      x: clamp(x, ARENA.x + radius, ARENA.x + ARENA.size - radius),
      y: clamp(y, ARENA.y + radius, ARENA.y + ARENA.size - radius),
      radius,
      life,
      tick: 0.1,
      damage
    });
  }

  function updateHomingProjectile(proj, dt, enemies) {
    if (proj.type !== "player" || proj.homingStrength <= 0 || proj.dead) {
      return;
    }

    let target = null;
    let best = Infinity;
    for (const e of enemies) {
      if (e.dead) continue;
      const d = distance(proj.x, proj.y, e.x, e.y);
      if (d < best && d <= proj.homingRange) {
        best = d;
        target = e;
      }
    }

    if (!target) {
      return;
    }

    const speed = Math.hypot(proj.vx, proj.vy) || 1;
    const current = normalize(proj.vx, proj.vy);
    const desired = normalize(target.x - proj.x, target.y - proj.y);
    const turn = clamp(proj.homingStrength * dt, 0, 0.45);
    const blended = normalize(
      current.x * (1 - turn) + desired.x * turn,
      current.y * (1 - turn) + desired.y * turn
    );

    proj.vx = blended.x * speed;
    proj.vy = blended.y * speed;
    proj.angle = Math.atan2(proj.vy, proj.vx) + Math.PI / 2;
  }

  function applyProjectileSplash(projectile, primaryEnemy, enemies, showFloating) {
    if (projectile.splashRadius <= 0) {
      return;
    }

    for (const enemy of enemies) {
      if (enemy.dead || enemy === primaryEnemy) continue;
      const d = distance(projectile.x, projectile.y, enemy.x, enemy.y);
      if (d <= projectile.splashRadius + enemy.radius) {
        enemy.takeDamage(projectile.damage * projectile.splashFactor, { showFloating });
      }
    }
  }

  function randomEdgeSpawn() {
    const side = randInt(0, 3);
    if (side === 0) return { x: ARENA.x + randInt(12, ARENA.size - 12), y: ARENA.y + 6 };
    if (side === 1) return { x: ARENA.x + ARENA.size - 6, y: ARENA.y + randInt(12, ARENA.size - 12) };
    if (side === 2) return { x: ARENA.x + randInt(12, ARENA.size - 12), y: ARENA.y + ARENA.size - 6 };
    return { x: ARENA.x + 6, y: ARENA.y + randInt(12, ARENA.size - 12) };
  }

  function weightedRarityPick(pool, luck = 1) {
    const byRarity = [[], [], [], []];
    for (const item of pool) {
      const r = clamp(item.rarity || 1, 1, 4);
      byRarity[r - 1].push(item);
    }

    const luckFactor = clamp(luck, 0.5, 20);
    const luckDelta = luckFactor - 1;

    // Base: more common items, less high-tier items.
    let w1 = 62 - luckDelta * 12;
    let w2 = 25 - luckDelta * 4;
    let w3 = 10 + luckDelta * 9;
    let w4 = 3 + luckDelta * 7;

    w1 = Math.max(0.7, w1);
    w2 = Math.max(0.2, w2);
    w3 = Math.max(0.1, w3);
    w4 = Math.max(0.05, w4);

    const total = w1 + w2 + w3 + w4;
    const roll = Math.random() * total;

    let targetR = 1;
    if (roll < w1) {
      targetR = 1;
    } else if (roll < w1 + w2) {
      targetR = 2;
    } else if (roll < w1 + w2 + w3) {
      targetR = 3;
    } else {
      targetR = 4;
    }

    let candidates = byRarity[targetR - 1];
    if (candidates.length === 0) {
      candidates = pool;
    }

    return pickRandom(candidates);
  }

  function generateShopOffers(player = null) {
    const ownedWeapons = new Set(
      player ? player.weapons.map((w) => w.id) : []
    );

    const weaponPool = player && player.base.weaponLocked
      ? []
      : WEAPON_OFFERS
        .filter((offer) => isOfferUnlocked(offer))
        .filter((offer) => !ownedWeapons.has(offer.weaponId))
        .map((offer) => ({ ...offer, kind: "weapon" }));

    const combined = [
      ...PASSIVE_ITEMS
        .filter((item) => isOfferUnlocked(item))
        .filter((item) => !item.condition || item.condition(player))
        .map((item) => ({ ...item, kind: "item" })),
      ...weaponPool
    ];

    const playerLuck = player ? player.luck() : 1;

    const offers = [];
    while (offers.length < 3 && combined.length > 0) {
      const pick = weightedRarityPick(combined, playerLuck);
      const idx = combined.findIndex((c) => c.id === pick.id && c.kind === pick.kind);
      offers.push(combined.splice(idx, 1)[0]);
    }

    return offers;
  }

  function getWavePlan(nextWave) {
    return WAVES[nextWave - 1] || null;
  }

  function startWave(nextWave) {
    game.wave = nextWave;
    game.enemies = [];
    game.projectiles = [];
    game.spawnQueue = [];
    game.enemySpawnTimer = 0;
    game.spawnInterval = 0;
    game.shopOffers = [];
    game.groundOffers = [];
    game.hazards = [];
    game.activeBossId = "";
    game.floatingDamageTexts = [];

    const plan = getWavePlan(nextWave);
    if (!plan) {
      return;
    }

    if (plan.bossPool && plan.bossPool.length > 0) {
      const bossId = pickRandom(plan.bossPool);
      game.spawnQueue.push(bossId);
      game.activeBossId = bossId;
    } else {
      Object.keys(plan.spawns).forEach((enemyId) => {
        const count = Math.ceil(plan.spawns[enemyId] * ENEMY_WAVE_INCREASE);
        for (let i = 0; i < count; i++) {
          game.spawnQueue.push(enemyId);
        }
      });
    }

    if (game.spawnQueue.length > 0) {
      game.spawnInterval = WAVE_SPAWN_DURATION / game.spawnQueue.length;
      game.enemySpawnTimer = 0;
    }

    game.state = GAME_STATE.PLAYING;
    hideMerchantUI();
    waveText.textContent = `${t("ui.wave")}: ${game.wave}/${MAX_WAVE}`;
  }

  function startGame(characterId) {
    const charDef = CHARACTERS.find((c) => c.id === characterId);
    if (!charDef || !isCharacterUnlocked(charDef)) {
      return;
    }
    game.player = new Player(charDef);
    game.player.onWeaponStateChanged();
    game.wave = 0;
    game.kills = 0;
    game.elapsed = 0;
    game.rerollCount = 0;
    game.runFlags.hadFiveEngineerSentries = false;
    game.floatingDamageTexts = [];
    hideOverlay(charSelect);
    hideOverlay(endPanel);
    hideOverlay(inventoryPanel);
    startWave(1);
    renderWeaponSlots();
    refreshHUD();
  }

  function showOverlay(el) {
    el.classList.remove("hidden");
    el.classList.add("show");
  }

  function hideOverlay(el) {
    el.classList.remove("show");
    el.classList.add("hidden");
  }

  function showMerchantUI() {
    shopPanel.classList.remove("hidden", "overlay", "show");
    shopPanel.classList.add("merchantMode");
    skipShopBtn.textContent = t("ui.skipMerchant");
  }

  function hideMerchantUI() {
    shopPanel.classList.remove("merchantMode");
    shopPanel.classList.add("hidden");
  }

  function finishRun(win) {
    game.state = win ? GAME_STATE.VICTORY : GAME_STATE.GAME_OVER;
    if (win) {
      evaluateVictoryUnlocks();
    }
    endTitle.textContent = win ? t("ui.victory") : t("ui.defeated");
    endSummary.textContent = t("ui.wavesClearedSummary", {
      wave: game.wave,
      maxWave: MAX_WAVE,
      kills: game.kills,
      gold: Math.floor(game.player.gold)
    });
    showOverlay(endPanel);
    hideMerchantUI();
  }

  function openMerchantCamp() {
    game.state = GAME_STATE.MERCHANT;
    game.shopOffers = generateShopOffers(game.player);
    game.projectiles = [];
    game.groundOffers = [];
    const mult = getMerchantPriceMultiplier();
    for (const offer of game.shopOffers) {
      offer.baseCost = offer.cost;
      offer.cost = Math.round(offer.cost * mult);
    }

    const cx = ARENA.x + ARENA.size * 0.5;
    const cy = ARENA.y + ARENA.size * 0.5 + 22;
    const positions = [
      { x: cx - 120, y: cy + 20 },
      { x: cx, y: cy - 16 },
      { x: cx + 120, y: cy + 20 }
    ];

    for (let i = 0; i < game.shopOffers.length; i++) {
      const offer = game.shopOffers[i];
      const p = positions[i] || { x: cx, y: cy };
      game.groundOffers.push(new GroundOffer(p.x, p.y, offer));
    }

    showMerchantUI();
    updateRerollButtonLabel();
  }

  function rerollMerchantOffers() {
    if (game.state !== GAME_STATE.MERCHANT) {
      return;
    }

    const cost = getRerollCost();
    if (game.player.gold < cost) {
      showMerchantMessage(t("msg.notEnoughReroll"));
      return;
    }

    game.player.gold -= cost;
    game.rerollCount += 1;
    openMerchantCamp();
    showMerchantMessage(t("msg.rerollUsed", { count: game.rerollCount }));
    refreshHUD();
  }

  function closeMerchantAndAdvance() {
    hideMerchantUI();
    if (game.wave >= MAX_WAVE) {
      finishRun(true);
      return;
    }
    startWave(game.wave + 1);
  }

  function getNearestOfferInRange() {
    let nearest = null;
    let best = Infinity;
    for (const offer of game.groundOffers) {
      if (offer.bought) continue;
      const d = distance(game.player.x, game.player.y, offer.x, offer.y);
      if (d <= MERCHANT_INTERACT_RANGE && d < best) {
        nearest = offer;
        best = d;
      }
    }
    return nearest;
  }

  function showMerchantMessage(message, time = 1.2) {
    game.merchantMessage = message;
    game.merchantMessageTimer = time;
  }

  function tryBuyNearestOffer() {
    if (game.state !== GAME_STATE.MERCHANT) {
      return;
    }

    const offerNode = getNearestOfferInRange();
    if (!offerNode) {
      showMerchantMessage(t("msg.moveCloser"));
      return;
    }

    const offer = offerNode.offer;
    if (game.player.gold < offer.cost) {
      showMerchantMessage(t("msg.notEnoughGold"));
      return;
    }

    const applied = game.player.applyOffer(offer);
    if (!applied) {
      showMerchantMessage(t("msg.weaponLocked"));
      return;
    }

    game.player.gold -= offer.cost;
    offerNode.bought = true;

    renderWeaponSlots();
    refreshInventory();
    refreshHUD();

    const left = game.groundOffers.filter((o) => !o.bought).length;
    if (left <= 0) {
      closeMerchantAndAdvance();
    } else {
      showMerchantMessage(t("msg.purchased", { name: localizeOfferName(offer) }));
    }
  }

  function refreshHUD() {
    if (!game.player) {
      waveText.textContent = `${t("ui.wave")}: 0/${MAX_WAVE}`;
      goldText.textContent = `${t("ui.gold")}: 0`;
      return;
    }

    waveText.textContent = `${t("ui.wave")}: ${game.wave}/${MAX_WAVE}`;
    goldText.textContent = `${t("ui.gold")}: ${Math.floor(game.player.gold)}`;
    const hpPct = clamp(game.player.hp / game.player.maxHp(), 0, 1);
    hpBar.style.width = `${Math.round(hpPct * 100)}%`;
    const dashPct = game.player.dashChargeFillPct();
    dashBar.style.width = `${Math.round(dashPct * 100)}%`;
  }

  function renderWeaponSlots() {
    weaponSlots.innerHTML = "";
    if (!game.player) {
      return;
    }

    for (let i = 0; i < 2; i++) {
      const slot = document.createElement("button");
      slot.className = "weaponSlot";
      if (i === game.player.activeWeapon) {
        slot.classList.add("active");
      }

      const weapon = game.player.weapons[i];
      if (weapon) {
        const icon = getSpritePath("weapons", weapon.id);
        const localizedWeaponName = localizeWeaponName(weapon);
        slot.innerHTML = `
          <div class="slotHead">
            <img class="spriteIcon" src="${icon}" alt="${localizedWeaponName}" />
            <b>${i + 1}. ${localizedWeaponName}</b>
          </div>
          <span>${localizeWeaponKind(weapon.kind)}</span>
        `;
      } else {
        slot.textContent = `${i + 1}. ${t("ui.empty")}`;
      }

      slot.addEventListener("click", () => {
        if (!game.player.weapons[i]) return;
        game.player.activeWeapon = i;
        game.player.onWeaponStateChanged();
        renderWeaponSlots();
        refreshHUD();
      });

      weaponSlots.appendChild(slot);
    }
  }

  function refreshInventory() {
    if (!game.player) {
      return;
    }

    const activeWeapon = game.player.activeWeaponDef();
    const activeWeaponDamage = activeWeapon ? game.player.weaponDamage(activeWeapon) : 0;
    const activeWeaponName = activeWeapon ? localizeWeaponName(activeWeapon) : t("ui.none");
    const daggerInfo = activeWeapon && activeWeapon.id === "dagger"
      ? `<p>${t("stat.daggerDynamicDamage")}: ${activeWeapon.damage.toFixed(1)} + (${Math.floor(game.player.gold)} ${t("ui.gold")} x ${(activeWeapon.goldScaling || 0).toFixed(2)})</p>`
      : "";

    const berserkerActive = game.player.bonus.iraBerserker && (game.player.hp / game.player.maxHp()) < 0.25;
    inventoryStats.innerHTML = `
      <p><b>${localizeCharacterName(game.player.charId, game.player.name)}</b></p>
      <p>${t("stat.hp")}: ${Math.floor(game.player.hp)} / ${Math.floor(game.player.maxHp())}</p>
      <p>${t("stat.moveSpeed")}: ${Math.floor(game.player.speed())}</p>
      <p>${t("stat.armor")}: ${Math.round(game.player.armor() * 100)}%</p>
      <p>${t("stat.dodge")}: ${Math.round(game.player.dodgeChance() * 100)}%</p>
      <p>${t("stat.lifesteal")}: ${Math.round(game.player.bonus.lifesteal * 100)}%</p>
      <p>${t("stat.luck")}: ${game.player.luck().toFixed(2)}</p>
      <p>${t("stat.activeWeapon")}: ${activeWeaponName}</p>
      <p>${t("stat.activeWeaponDamage")}: ${activeWeaponDamage.toFixed(1)}</p>
      ${daggerInfo}
      <p>${t("stat.goldBonus")}: ${Math.round(game.player.bonus.goldFactor * 100)}%</p>
      <p>${t("stat.dashCd")}: ${game.player.currentDashCooldown().toFixed(2)}s</p>
      <p>${t("stat.dashCharges")}: ${game.player.currentDashMaxCharges()}</p>
      <p>${t("stat.meleeSize")}: x${game.player.bonus.meleeRangeFactor.toFixed(2)}</p>
      <p>${t("stat.magicHoming")}: ${game.player.bonus.magicHoming > 0 ? t("ui.enabled") : t("ui.off")}</p>
      <p>${t("stat.hpRegen")}: ${game.player.bonus.hpRegen.toFixed(1)} /s</p>
      <p>${t("stat.sentries")}: ${game.player.sentries.length} (max ${game.player.desiredSentryCount()})</p>
      <p>${t("stat.sentryStats")}: ${Math.round(game.player.sentryDamage())} | ${t("stat.sentryCd")}: ${game.player.sentryAttackCooldown().toFixed(2)}s</p>
      <p>${t("stat.droneWeaponEquipped")}: ${game.player.isDroneWeaponEquipped() ? t("ui.yes") : t("ui.no")}</p>
      <p>${t("stat.droneMissile")}: ${game.player.bonus.droneMissile ? t("ui.enabled") : t("ui.off")}</p>
      <p>${t("stat.berserkerRage")}: ${berserkerActive ? t("ui.enabled") : t("ui.off")}</p>
    `;

    inventoryItems.innerHTML = "";
    if (game.player.items.length === 0) {
      const li = document.createElement("li");
      li.textContent = t("ui.noItemsYet");
      inventoryItems.appendChild(li);
    } else {
      for (const item of game.player.items) {
        const li = document.createElement("li");
        li.className = "inventoryItem";
        const itemPath = getSpritePath("items", item.id);
        const color = rarityColor(item.rarity || 1);
        const itemName = t(`itemName.${item.id}`, {}, item.id);
        li.innerHTML = `<img class="spriteIcon" src="${itemPath}" alt="${itemName}" /><span style="color:${color}">${itemName} [${rarityLabel(item.rarity || 1)}]</span>`;
        inventoryItems.appendChild(li);
      }
    }
  }

  function drawArena() {
    ctx.fillStyle = "#142028";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#1d2d38";
    ctx.fillRect(ARENA.x - 22, ARENA.y - 22, ARENA.size + 44, ARENA.size + 44);

    ctx.fillStyle = "#2f4351";
    for (let i = 0; i < 24; i++) {
      ctx.fillRect(ARENA.x - 22 + i * 26, ARENA.y - 22, 16, 8);
      ctx.fillRect(ARENA.x - 22 + i * 26, ARENA.y + ARENA.size + 14, 16, 8);
      ctx.fillRect(ARENA.x - 22, ARENA.y - 22 + i * 26, 8, 16);
      ctx.fillRect(ARENA.x + ARENA.size + 14, ARENA.y - 22 + i * 26, 8, 16);
    }

    ctx.fillStyle = "#11191f";
    ctx.fillRect(ARENA.x, ARENA.y, ARENA.size, ARENA.size);

    for (let y = ARENA.y; y < ARENA.y + ARENA.size; y += 30) {
      for (let x = ARENA.x; x < ARENA.x + ARENA.size; x += 30) {
        if (((x + y) / 30) % 2 === 0) {
          ctx.fillStyle = "rgba(65,95,120,0.09)";
          ctx.fillRect(x, y, 30, 30);
        }
      }
    }
  }

  function drawPlayerMeleeArc() {
    const p = game.player;
    if (!p) return;
    const w = p.weapons[p.activeWeapon];
    if (!w || w.kind !== "melee") return;
    if (p.attackCooldown > (w.cooldown * p.bonus.cooldownFactor) - 0.08) {
      const angle = Math.atan2(input.mouseY - p.y, input.mouseX - p.x);
      const meleeRange = w.range * p.bonus.meleeRangeFactor;
      const meleeArc = w.arc + p.bonus.meleeArcBonus;
      ctx.strokeStyle = "rgba(220,230,245,0.35)";
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, meleeRange, angle - meleeArc / 2, angle + meleeArc / 2);
      ctx.stroke();
    }
  }

  function updateHazards(dt) {
    if (game.hazards.length === 0) {
      return;
    }

    const keep = [];
    for (const hazard of game.hazards) {
      hazard.life -= dt;
      hazard.tick -= dt;

      if (hazard.tick <= 0) {
        hazard.tick = 0.35;
        const d = distance(hazard.x, hazard.y, game.player.x, game.player.y);
        if (d <= hazard.radius + game.player.radius) {
          game.player.takeDamage(hazard.damage);
        }
      }

      if (hazard.life > 0) {
        keep.push(hazard);
      }
    }
    game.hazards = keep;
  }

  function drawHazards() {
    for (const hazard of game.hazards) {
      const alpha = clamp(hazard.life / 2.2, 0.2, 0.62);
      ctx.fillStyle = `rgba(110, 210, 95, ${alpha})`;
      ctx.beginPath();
      ctx.arc(hazard.x, hazard.y, hazard.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawMerchantInArena() {
    const cx = ARENA.x + ARENA.size * 0.5;
    const cy = ARENA.y + ARENA.size * 0.5 - 70;

    ctx.fillStyle = "rgba(20, 35, 42, 0.82)";
    ctx.fillRect(cx - 58, cy - 36, 116, 16);
    ctx.fillStyle = "#f5e6a8";
    ctx.font = "13px Consolas";
    ctx.textAlign = "center";
    ctx.fillText(t("ui.merchantCamp"), cx, cy - 24);
    ctx.fillStyle = "#cde3f2";
    ctx.fillText(t("ui.rerollsUsed", { count: game.rerollCount }), cx, cy - 8);

    const sprite = getSprite("characters", "merchant");
    if (sprite) {
      drawSpriteCentered(sprite, cx, cy, 54, 54);
    } else {
      ctx.fillStyle = "#ccb58a";
      ctx.fillRect(cx - 15, cy - 18, 30, 36);
    }

    const focused = getNearestOfferInRange();
    for (const offer of game.groundOffers) {
      offer.draw(game.player, focused === offer);
    }

    if (game.merchantMessageTimer > 0) {
      ctx.fillStyle = "rgba(12,20,26,0.85)";
      ctx.fillRect(cx - 120, cy + 120, 240, 22);
      ctx.fillStyle = "#e8f4ff";
      ctx.fillText(game.merchantMessage, cx, cy + 136);
    }
  }

  function updatePlaying(dt) {
    game.elapsed += dt;

    if (game.player.bonus.hpRegen > 0) {
      game.player.hp = Math.min(game.player.maxHp(), game.player.hp + game.player.bonus.hpRegen * dt);
    }

    if (game.spawnQueue.length > 0) {
      game.enemySpawnTimer -= dt;
      while (game.spawnQueue.length > 0 && game.enemySpawnTimer <= 0) {
        const typeId = game.spawnQueue.shift();
        const p = randomEdgeSpawn();
        game.enemies.push(new Enemy(typeId, p.x, p.y));
        game.enemySpawnTimer += game.spawnInterval;
      }
    }

    game.player.update(dt, game.enemies, game.projectiles, true);

    for (const e of game.enemies) {
      e.update(dt, game.player, game.projectiles, game.enemies);
    }

    for (const proj of game.projectiles) {
      updateHomingProjectile(proj, dt, game.enemies);
      proj.update(dt);

      if (proj.dead) {
        continue;
      }

      if (proj.type === "player") {
        for (const e of game.enemies) {
          if (e.dead) continue;
          if (proj.hitTargets.has(e)) continue;
          const d = distance(proj.x, proj.y, e.x, e.y);
          if (d <= proj.size + e.radius) {
            const showFloating = game.player.charId === "slot_machine_robot";
            e.takeDamage(proj.damage, { showFloating });
            onPlayerSuccessfulHit(game.player, e.x, e.y);
            applyProjectileSplash(proj, e, game.enemies, showFloating);
            proj.hitTargets.add(e);
            if (!proj.pierce) {
              proj.dead = true;
            }

            if (game.player.bonus.lifesteal > 0) {
              game.player.hp = Math.min(game.player.maxHp(), game.player.hp + proj.damage * game.player.bonus.lifesteal * 0.12);
            }
            if (!proj.pierce) {
              break;
            }
          }
        }
      } else {
        const d = distance(proj.x, proj.y, game.player.x, game.player.y);
        if (d <= proj.size + game.player.radius) {
          game.player.takeDamage(proj.damage);
          proj.dead = true;
        }
      }
    }

    const livingEnemies = [];
    for (const e of game.enemies) {
      if (e.dead) {
        game.kills += 1;
        const gain = randInt(e.goldRange[0], e.goldRange[1])
          * (1 + game.player.bonus.goldFactor)
          * (game.player.base.goldDropMultiplier || 1);
        game.player.gold += gain;
      } else {
        livingEnemies.push(e);
      }
    }
    game.enemies = livingEnemies;

    game.projectiles = game.projectiles.filter((p) => !p.dead);
    updateHazards(dt);
    updateFloatingDamageTexts(dt);

    if (game.player.hp <= 0) {
      finishRun(false);
      return;
    }

    if (game.enemies.length === 0 && game.spawnQueue.length === 0) {
      if (game.wave >= MAX_WAVE) {
        finishRun(true);
      } else {
        openMerchantCamp();
      }
    }

    refreshHUD();
    if (!inventoryPanel.classList.contains("hidden")) {
      refreshInventory();
    }
  }

  function updateMerchant(dt) {
    game.elapsed += dt;
    game.merchantMessageTimer = Math.max(0, game.merchantMessageTimer - dt);
    if (game.player.bonus.hpRegen > 0) {
      game.player.hp = Math.min(game.player.maxHp(), game.player.hp + game.player.bonus.hpRegen * dt);
    }
    updateFloatingDamageTexts(dt);
    game.player.update(dt, [], [], false);
    refreshHUD();
    if (!inventoryPanel.classList.contains("hidden")) {
      refreshInventory();
    }
  }

  function updateGame(dt) {
    if (game.state === GAME_STATE.PLAYING) {
      updatePlaying(dt);
      return;
    }

    if (game.state === GAME_STATE.MERCHANT) {
      updateMerchant(dt);
    }
  }

  function renderGame() {
    drawArena();

    if (game.player) {
      game.player.drawSentries();
      game.player.drawDrone();
      game.player.draw();
      drawPlayerMeleeArc();
    }

    for (const e of game.enemies) {
      e.draw();

      const w = e.radius * 2;
      const hpPct = clamp(e.hp / e.maxHp, 0, 1);
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(e.x - e.radius, e.y - e.radius - 10, w, 4);
      ctx.fillStyle = e.isBoss ? "#ffd16a" : "#df5555";
      ctx.fillRect(e.x - e.radius, e.y - e.radius - 10, w * hpPct, 4);
    }

    for (const p of game.projectiles) {
      p.draw();
    }

    drawFloatingDamageTexts();

    drawHazards();

    if (game.state === GAME_STATE.MERCHANT) {
      drawMerchantInArena();
    }

    if (game.state === GAME_STATE.PLAYING || game.state === GAME_STATE.MERCHANT) {
      ctx.fillStyle = "rgba(250,250,250,0.75)";
      ctx.font = "13px Consolas";
      ctx.fillText(t("ui.controlsHint"), 190, 690);
      if (game.state === GAME_STATE.MERCHANT) {
        ctx.fillStyle = "rgba(245, 226, 157, 0.95)";
        ctx.fillText(t("ui.merchantHint"), 190, 668);
        const mult = getMerchantPriceMultiplier();
        ctx.fillStyle = "rgba(195, 233, 255, 0.95)";
        ctx.fillText(t("ui.priceScale", { mult: mult.toFixed(2) }), 190, 646);
      }
    }
  }

  function loop(ts) {
    const now = ts / 1000;
    if (!loop.last) {
      loop.last = now;
    }
    const dt = Math.min(0.033, now - loop.last);
    loop.last = now;

    updateGame(dt);
    renderGame();

    requestAnimationFrame(loop);
  }

  function toggleInventory() {
    if (!game.player) {
      return;
    }

    if (inventoryPanel.classList.contains("hidden")) {
      game.previousState = game.state;
      game.state = GAME_STATE.INVENTORY;
      refreshInventory();
      showOverlay(inventoryPanel);
    } else {
      hideOverlay(inventoryPanel);
      game.state = game.previousState === GAME_STATE.INVENTORY ? GAME_STATE.PLAYING : game.previousState;
    }
  }

  function createCharacterCards() {
    charCards.innerHTML = "";

    for (const c of CHARACTERS) {
      const w = WEAPONS[c.startWeapon];
      const isLocked = !isCharacterUnlocked(c);
      const hidden = "???";
      const localizedCharName = isLocked ? hidden : localizeCharacterName(c.id, c.name);
      const localizedWeaponName = isLocked ? hidden : localizeWeaponName(w);
      const localizedTrait = isLocked ? hidden : localizeCharacterTrait(c);
      const hpValue = isLocked ? hidden : c.hp;
      const speedValue = isLocked ? hidden : c.speed;
      const armorValue = isLocked ? hidden : `${Math.round(c.armor * 100)}%`;
      const dodgeValue = isLocked ? hidden : `${Math.round((c.dodge || 0) * 100)}%`;
      const luckValue = isLocked ? hidden : (c.luck || 1).toFixed(2);
      const weaponKindValue = isLocked ? hidden : localizeWeaponKind(w.kind);
      const meleeValue = isLocked ? hidden : `${Math.round(c.meleeMult * 100)}%`;
      const magicValue = isLocked ? hidden : `${Math.round(c.magicMult * 100)}%`;
      const rangedValue = isLocked ? hidden : `${Math.round(c.rangedMult * 100)}%`;
      const startingGoldValue = isLocked ? hidden : Math.floor(c.startingGold || 0);
      const weaponLockValue = isLocked ? hidden : (c.weaponLocked ? t("ui.yes") : t("ui.no"));
      const charVisualClass = isLocked ? " lockedSilhouette" : "";
      const charIcon = getSpritePath("characters", c.id);
      const weaponIcon = getSpritePath("weapons", c.startWeapon);
      const bodyTuning = PLAYER_CHARACTER_TUNING[c.id] || { bodyWidth: 40, bodyHeight: 40, hitboxRadius: 14 };
      const cardCharWidth = Math.round(bodyTuning.bodyWidth * PLAYER_BODY_WIDTH_MULTIPLIER);
      const cardCharHeight = Math.round(bodyTuning.bodyHeight * PLAYER_BODY_HEIGHT_MULTIPLIER);
      const card = document.createElement("div");
      card.className = "card";
      if (isLocked) {
        card.style.opacity = "0.65";
      }
      card.innerHTML = `
        <div class="cardArt">
          <img class="spriteIcon lg${charVisualClass}" src="${charIcon}" alt="${localizedCharName}" style="width:${cardCharWidth}px;height:${cardCharHeight}px;" />
          <img class="spriteIcon" src="${weaponIcon}" alt="${localizedWeaponName}" />
        </div>
        <h3>${localizedCharName}</h3>
        <p>${t("stat.hp")}: ${hpValue}</p>
        <p>${t("stat.speed")}: ${speedValue}</p>
        <p>${t("stat.armor")}: ${armorValue} | ${t("stat.dodge")}: ${dodgeValue}</p>
        <p>${t("stat.luck")}: ${luckValue}</p>
        <p>${t("stat.weapon")}: ${localizedWeaponName} (${weaponKindValue})</p>
        <p>${t("stat.melee")} ${meleeValue} | ${t("stat.magic")} ${magicValue} | ${t("stat.ranged")} ${rangedValue}</p>
        <p>${t("stat.startingGold")}: ${startingGoldValue}</p>
        <p>${t("stat.weaponLock")}: ${weaponLockValue}</p>
        <p>${localizedTrait}</p>
      `;

      const pick = document.createElement("button");
      pick.className = "smallBtn";
      pick.textContent = isLocked ? t("ui.locked") : t("ui.select");
      pick.disabled = isLocked;
      pick.addEventListener("click", () => startGame(c.id));
      card.appendChild(pick);
      charCards.appendChild(card);
    }
  }

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    input.mouseX = ((e.clientX - rect.left) / rect.width) * canvas.width;
    input.mouseY = ((e.clientY - rect.top) / rect.height) * canvas.height;
  });

  canvas.addEventListener("mousedown", () => {
    input.mouseDown = true;
  });

  window.addEventListener("mouseup", () => {
    input.mouseDown = false;
  });

  window.addEventListener("keydown", (e) => {
    input.keys.add(e.code);

    if (e.code === "Tab") {
      e.preventDefault();
      if (game.player && game.player.weapons.length > 1) {
        game.player.activeWeapon = game.player.activeWeapon === 0 ? 1 : 0;
        game.player.onWeaponStateChanged();
        renderWeaponSlots();
        refreshHUD();
      }
    }

    if (e.code === "Digit1" && game.player && game.player.weapons[0]) {
      game.player.activeWeapon = 0;
      game.player.onWeaponStateChanged();
      renderWeaponSlots();
      refreshHUD();
    }

    if (e.code === "Digit2" && game.player && game.player.weapons[1]) {
      game.player.activeWeapon = 1;
      game.player.onWeaponStateChanged();
      renderWeaponSlots();
      refreshHUD();
    }

    if (e.code === "KeyI") {
      toggleInventory();
    }

    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      if (!e.repeat && game.player && (game.state === GAME_STATE.PLAYING || game.state === GAME_STATE.MERCHANT)) {
        game.player.triggerDash();
      }
    }

    if (e.code === "KeyE") {
      tryBuyNearestOffer();
    }
  });

  window.addEventListener("keyup", (e) => {
    input.keys.delete(e.code);
  });

  skipShopBtn.addEventListener("click", closeMerchantAndAdvance);
  rerollShopBtn.addEventListener("click", rerollMerchantOffers);
  inventoryBtn.addEventListener("click", toggleInventory);
  closeInventoryBtn.addEventListener("click", toggleInventory);
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      setLanguage(currentLang === "EN" ? "ES" : "EN");
    });
  }

  restartBtn.addEventListener("click", () => {
    showOverlay(charSelect);
    hideOverlay(endPanel);
    hideOverlay(inventoryPanel);
    hideMerchantUI();

    game.state = GAME_STATE.CHARACTER_SELECT;
    game.previousState = GAME_STATE.CHARACTER_SELECT;
    game.player = null;
    game.enemies = [];
    game.projectiles = [];
    game.shopOffers = [];
    game.groundOffers = [];
    game.hazards = [];
    game.spawnQueue = [];
    game.wave = 0;
    game.kills = 0;
    game.elapsed = 0;
    game.rerollCount = 0;
    game.runFlags.hadFiveEngineerSentries = false;

    waveText.textContent = `${t("ui.wave")}: 0/${MAX_WAVE}`;
    goldText.textContent = `${t("ui.gold")}: 0`;
    hpBar.style.width = "100%";
    dashBar.style.width = "100%";
    weaponSlots.innerHTML = "";
    createCharacterCards();
  });

  ensureInitialUnlocks();
  refreshStaticUIText();
  setLanguage(currentLang);

  loadSpriteAssets()
    .then(() => {
      createCharacterCards();
      requestAnimationFrame(loop);
    })
    .catch(() => {
      createCharacterCards();
      requestAnimationFrame(loop);
    });
})();
