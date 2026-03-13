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
      hp: 190,
      speed: 165,
      meleeMult: 1.38,
      rangedMult: 0.78,
      magicMult: 0.72,
      armor: 0.16,
      dodge: 0.05,
      startWeapon: "iron_sword"
    },
    {
      id: "orc",
      name: "Axe Orc",
      hp: 225,
      speed: 145,
      meleeMult: 1.52,
      rangedMult: 0.7,
      magicMult: 0.64,
      armor: 0.08,
      dodge: 0.02,
      startWeapon: "battle_axe"
    },
    {
      id: "mage",
      name: "Blue Pyromancer",
      hp: 108,
      speed: 225,
      meleeMult: 0.72,
      rangedMult: 0.92,
      magicMult: 1.46,
      armor: 0.04,
      dodge: 0.12,
      startWeapon: "fire_wand"
    },
    {
      id: "hunter",
      name: "Lumber Hunter",
      hp: 108,
      speed: 225,
      meleeMult: 0.72,
      rangedMult: 1.46,
      magicMult: 0.92,
      armor: 0.04,
      dodge: 0.12,
      startWeapon: "crossbow"
    },
    {
      id: "frogfolk",
      name: "Bog Frogfolk",
      hp: 108,
      speed: 205,
      meleeMult: 0.72,
      rangedMult: 1.46,
      magicMult: 0.92,
      armor: 0.04,
      dodge: 0.2,
      startWeapon: "shortbow"
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
    { id: "echo_blade", rarity: 4, name: "Echo Blade", desc: "Legendary: melee launches piercing half-wave", cost: 98, apply: (p) => { p.bonus.swordWave += 1; } },
    { id: "ranger_harness", rarity: 4, name: "Ranger Harness", desc: "Ranged weapons gain +1 dash charge", cost: 88, apply: (p) => { p.bonus.rangedDashBonus = 1; } }
  ];

  const WEAPON_OFFERS = [
    { id: "iron_sword", rarity: 1, name: "Iron Sword", desc: "Reliable melee starter blade", cost: 44, weaponId: "iron_sword" },
    { id: "battle_axe", rarity: 2, name: "Battle Axe", desc: "Slow heavy melee weapon", cost: 52, weaponId: "battle_axe" },
    { id: "fire_wand", rarity: 2, name: "Fire Wand", desc: "Rapid magic projectiles", cost: 50, weaponId: "fire_wand" },
    { id: "shortbow", rarity: 1, name: "Shortbow", desc: "Fast light ranged weapon", cost: 46, weaponId: "shortbow" },
    { id: "crossbow", rarity: 2, name: "Crossbow", desc: "Powerful ranged shots", cost: 54, weaponId: "crossbow" },
    { id: "thunder_hammer", rarity: 4, name: "Thunder Hammer", desc: "Huge melee arc and burst damage", cost: 86, weaponId: "thunder_hammer" },
    { id: "twin_daggers", rarity: 2, name: "Twin Daggers", desc: "Ultra fast close combat", cost: 56, weaponId: "twin_daggers" },
    { id: "frost_orb", rarity: 3, name: "Frost Orb", desc: "Heavy magic bolts with control", cost: 68, weaponId: "frost_orb" },
    { id: "void_lance", rarity: 4, name: "Void Lance", desc: "High speed piercing shots", cost: 92, weaponId: "void_lance" }
  ];

  const SPRITE_PATHS = {
    characters: {
      knight: "assets/sprites/characters/warrior.svg",
      orc: "assets/sprites/characters/orc.svg",
      mage: "assets/sprites/characters/mage.svg",
      hunter: "assets/sprites/characters/ranger.svg",
      frogfolk: "assets/sprites/characters/frogfolk.svg",
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
      frost_orb: "assets/sprites/weapons/frost_orb.svg",
      void_lance: "assets/sprites/weapons/void_lance.svg"
    },
    projectiles: {
      magic_bolt: "assets/sprites/projectiles/magic_bolt.svg",
      arrow: "assets/sprites/projectiles/arrow.svg",
      enemy_skull: "assets/sprites/projectiles/enemy_skull.svg"
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
      ranger_harness: "assets/sprites/items/ranger_harness.svg"
    }
  };

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

  function rarityLabel(rarity) {
    return `Q${rarity}`;
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
    return "magic_bolt";
  }

  function isRangedWeapon(weapon) {
    return !!weapon && weapon.kind === "ranged";
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

  function drawSpriteCentered(image, x, y, width, height, angle = 0, alpha = 1) {
    if (!image) {
      return false;
    }

    ctx.save();
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
      ctx.fillText(`${this.offer.name} [${rarityLabel(this.offer.rarity || 1)}]`, this.x, this.y + 26);
      ctx.fillStyle = "#d8e4ee";
      ctx.fillText(this.offer.desc, this.x, this.y + 40);
      ctx.fillStyle = "#f3d27a";
      ctx.fillText(`${this.offer.cost}g`, this.x, this.y + 54);

      if (distance(player.x, player.y, this.x, this.y) <= MERCHANT_INTERACT_RANGE) {
        ctx.fillStyle = "rgba(50, 70, 85, 0.9)";
        ctx.fillRect(this.x - 58, this.y - 54, 116, 20);
        ctx.fillStyle = "#f6f9fc";
        ctx.fillText("Press E to Buy", this.x, this.y - 40);
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

    takeDamage(amount) {
      this.hp -= amount;
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
      this.x = ARENA.x + ARENA.size / 2;
      this.y = ARENA.y + ARENA.size / 2;
      this.radius = 14;
      this.hp = charDef.hp;
      this.gold = 0;
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
        rangedDashBonus: 0
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

      return (weapon.damage + typeBonus) * mult;
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

      this.x = clamp(this.x, ARENA.x + this.radius, ARENA.x + ARENA.size - this.radius);
      this.y = clamp(this.y, ARENA.y + this.radius, ARENA.y + ARENA.size - this.radius);

      if (canAttack && input.mouseDown && this.attackCooldown <= 0) {
        this.attack(enemies, projectiles);
      }
    }

    attack(enemies, projectiles) {
      const weapon = this.weapons[this.activeWeapon];
      const cooldown = weapon.cooldown * this.bonus.cooldownFactor;
      this.attackCooldown = Math.max(0.08, cooldown);

      const aim = normalize(input.mouseX - this.x, input.mouseY - this.y);
      const baseDamage = this.weaponDamage(weapon);
      const crit = Math.random() < this.bonus.critChance;
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
            e.takeDamage(damage);
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
        projectiles.push(projectile);
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
    }

    applyOffer(offer) {
      if (offer.kind === "item") {
        offer.apply(this);
        this.items.push({ id: offer.id, name: offer.name, rarity: offer.rarity || 1 });
        this.hp = Math.min(this.maxHp(), this.hp);
        return;
      }

      const weapon = JSON.parse(JSON.stringify(WEAPONS[offer.weaponId]));
      if (this.weapons.length < 2) {
        this.weapons.push(weapon);
      } else {
        this.weapons[this.activeWeapon] = weapon;
      }
    }

    draw() {
      const aim = normalize(input.mouseX - this.x, input.mouseY - this.y);
      const bodySprite = getSprite("characters", this.charId);
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
        drawSpriteCentered(bodySprite, this.x, this.y, 40, 40, 0, alpha);
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
    spawnQueue: [],
    merchantMessage: "",
    merchantMessageTimer: 0,
    activeBossId: "",
    hazards: [],
    rerollCount: 0
  };

  function getWaveEnemyPressure(waveNumber) {
    const plan = getWavePlan(waveNumber);
    if (!plan) {
      return 10;
    }

    if (plan.bossPool && plan.bossPool.length > 0) {
      return 26;
    }

    return Object.values(plan.spawns).reduce((sum, count) => sum + count, 0);
  }

  function getMerchantPriceMultiplier() {
    const progress = 1 + game.wave * 0.082;
    const nextPressure = getWaveEnemyPressure(game.wave + 1);
    const pressureFactor = 1 + nextPressure * 0.013;
    return clamp(progress * pressureFactor, 1.06, 2.75);
  }

  function getRerollCost() {
    return Math.round(22 + game.rerollCount * 14 + game.wave * 3);
  }

  function updateRerollButtonLabel() {
    if (!rerollShopBtn) {
      return;
    }
    rerollShopBtn.textContent = `Reroll (${getRerollCost()}g)`;
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

  function randomEdgeSpawn() {
    const side = randInt(0, 3);
    if (side === 0) return { x: ARENA.x + randInt(12, ARENA.size - 12), y: ARENA.y + 6 };
    if (side === 1) return { x: ARENA.x + ARENA.size - 6, y: ARENA.y + randInt(12, ARENA.size - 12) };
    if (side === 2) return { x: ARENA.x + randInt(12, ARENA.size - 12), y: ARENA.y + ARENA.size - 6 };
    return { x: ARENA.x + 6, y: ARENA.y + randInt(12, ARENA.size - 12) };
  }

  function weightedRarityPick(pool) {
    const byRarity = [[], [], [], []];
    for (const item of pool) {
      const r = clamp(item.rarity || 1, 1, 4);
      byRarity[r - 1].push(item);
    }

    const roll = Math.random();
    let targetR = 1;
    if (roll > 0.94) targetR = 4;
    else if (roll > 0.75) targetR = 3;
    else if (roll > 0.42) targetR = 2;

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

    const combined = [
      ...PASSIVE_ITEMS.map((item) => ({ ...item, kind: "item" })),
      ...WEAPON_OFFERS
        .filter((offer) => !ownedWeapons.has(offer.weaponId))
        .map((offer) => ({ ...offer, kind: "weapon" }))
    ];

    const offers = [];
    while (offers.length < 3 && combined.length > 0) {
      const pick = weightedRarityPick(combined);
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
    game.shopOffers = [];
    game.groundOffers = [];
    game.hazards = [];
    game.activeBossId = "";

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
        const count = plan.spawns[enemyId];
        for (let i = 0; i < count; i++) {
          game.spawnQueue.push(enemyId);
        }
      });
    }

    game.state = GAME_STATE.PLAYING;
    hideMerchantUI();
    waveText.textContent = `Wave: ${game.wave}/${MAX_WAVE}`;
  }

  function startGame(characterId) {
    const charDef = CHARACTERS.find((c) => c.id === characterId);
    game.player = new Player(charDef);
    game.wave = 0;
    game.kills = 0;
    game.elapsed = 0;
    game.rerollCount = 0;
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
    skipShopBtn.textContent = "Skip Merchant";
  }

  function hideMerchantUI() {
    shopPanel.classList.remove("merchantMode");
    shopPanel.classList.add("hidden");
  }

  function finishRun(win) {
    game.state = win ? GAME_STATE.VICTORY : GAME_STATE.GAME_OVER;
    endTitle.textContent = win ? "Victory" : "Defeated";
    endSummary.textContent = `Waves Cleared: ${game.wave}/${MAX_WAVE} | Kills: ${game.kills} | Gold: ${Math.floor(game.player.gold)}`;
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
      showMerchantMessage("Not enough gold for reroll.");
      return;
    }

    game.player.gold -= cost;
    game.rerollCount += 1;
    openMerchantCamp();
    showMerchantMessage(`Reroll used (${game.rerollCount} total).`);
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
      showMerchantMessage("Move closer to an offer.");
      return;
    }

    const offer = offerNode.offer;
    if (game.player.gold < offer.cost) {
      showMerchantMessage("Not enough gold.");
      return;
    }

    game.player.gold -= offer.cost;
    game.player.applyOffer(offer);
    offerNode.bought = true;

    renderWeaponSlots();
    refreshInventory();
    refreshHUD();

    const left = game.groundOffers.filter((o) => !o.bought).length;
    if (left <= 0) {
      closeMerchantAndAdvance();
    } else {
      showMerchantMessage(`Purchased: ${offer.name}`);
    }
  }

  function refreshHUD() {
    if (!game.player) {
      return;
    }

    waveText.textContent = `Wave: ${game.wave}/${MAX_WAVE}`;
    goldText.textContent = `Gold: ${Math.floor(game.player.gold)}`;
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
        slot.innerHTML = `
          <div class="slotHead">
            <img class="spriteIcon" src="${icon}" alt="${weapon.name}" />
            <b>${i + 1}. ${weapon.name}</b>
          </div>
          <span>${weapon.kind}</span>
        `;
      } else {
        slot.textContent = `${i + 1}. Empty`;
      }

      slot.addEventListener("click", () => {
        if (!game.player.weapons[i]) return;
        game.player.activeWeapon = i;
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

    inventoryStats.innerHTML = `
      <p><b>${game.player.name}</b></p>
      <p>HP: ${Math.floor(game.player.hp)} / ${Math.floor(game.player.maxHp())}</p>
      <p>Move Speed: ${Math.floor(game.player.speed())}</p>
      <p>Armor: ${Math.round(game.player.armor() * 100)}%</p>
      <p>Dodge: ${Math.round(game.player.dodgeChance() * 100)}%</p>
      <p>Lifesteal: ${Math.round(game.player.bonus.lifesteal * 100)}%</p>
      <p>Gold Bonus: ${Math.round(game.player.bonus.goldFactor * 100)}%</p>
      <p>Dash CD: ${game.player.currentDashCooldown().toFixed(2)}s</p>
      <p>Dash Charges: ${game.player.currentDashMaxCharges()}</p>
      <p>Melee Size: x${game.player.bonus.meleeRangeFactor.toFixed(2)}</p>
      <p>Magic Homing: ${game.player.bonus.magicHoming > 0 ? "Enabled" : "Off"}</p>
      <p>HP Regen: ${game.player.bonus.hpRegen.toFixed(1)} /s</p>
    `;

    inventoryItems.innerHTML = "";
    if (game.player.items.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No items purchased yet.";
      inventoryItems.appendChild(li);
    } else {
      for (const item of game.player.items) {
        const li = document.createElement("li");
        li.className = "inventoryItem";
        const itemPath = getSpritePath("items", item.id);
        const color = rarityColor(item.rarity || 1);
        li.innerHTML = `<img class="spriteIcon" src="${itemPath}" alt="${item.name}" /><span style="color:${color}">${item.name} [${rarityLabel(item.rarity || 1)}]</span>`;
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
    ctx.fillText("Merchant Camp", cx, cy - 24);
    ctx.fillStyle = "#cde3f2";
    ctx.fillText(`Rerolls used this run: ${game.rerollCount}`, cx, cy - 8);

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
      if (game.enemySpawnTimer <= 0) {
        game.enemySpawnTimer = game.activeBossId ? 0.6 : 0.33;
        const typeId = game.spawnQueue.shift();
        const p = randomEdgeSpawn();
        game.enemies.push(new Enemy(typeId, p.x, p.y));
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
            e.takeDamage(proj.damage);
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
        const gain = randInt(e.goldRange[0], e.goldRange[1]) * (1 + game.player.bonus.goldFactor);
        game.player.gold += gain;
      } else {
        livingEnemies.push(e);
      }
    }
    game.enemies = livingEnemies;

    game.projectiles = game.projectiles.filter((p) => !p.dead);
    updateHazards(dt);

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
  }

  function updateMerchant(dt) {
    game.elapsed += dt;
    game.merchantMessageTimer = Math.max(0, game.merchantMessageTimer - dt);
    if (game.player.bonus.hpRegen > 0) {
      game.player.hp = Math.min(game.player.maxHp(), game.player.hp + game.player.bonus.hpRegen * dt);
    }
    game.player.update(dt, [], [], false);
    refreshHUD();
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

    drawHazards();

    if (game.state === GAME_STATE.MERCHANT) {
      drawMerchantInArena();
    }

    if (game.state === GAME_STATE.PLAYING || game.state === GAME_STATE.MERCHANT) {
      ctx.fillStyle = "rgba(250,250,250,0.75)";
      ctx.font = "13px Consolas";
      ctx.fillText("WASD move | Shift dash | Mouse + hold LMB attack | Tab swap weapon | I inventory", 190, 690);
      if (game.state === GAME_STATE.MERCHANT) {
        ctx.fillStyle = "rgba(245, 226, 157, 0.95)";
        ctx.fillText("Merchant phase: move to an offer and press E to buy. You can buy up to 3 offers.", 190, 668);
        const mult = getMerchantPriceMultiplier();
        ctx.fillStyle = "rgba(195, 233, 255, 0.95)";
        ctx.fillText(`Price scale x${mult.toFixed(2)} (based on wave and enemy pressure)`, 190, 646);
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
      const charIcon = getSpritePath("characters", c.id);
      const weaponIcon = getSpritePath("weapons", c.startWeapon);
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="cardArt">
          <img class="spriteIcon lg" src="${charIcon}" alt="${c.name}" />
          <img class="spriteIcon" src="${weaponIcon}" alt="${w.name}" />
        </div>
        <h3>${c.name}</h3>
        <p>HP: ${c.hp}</p>
        <p>Speed: ${c.speed}</p>
        <p>Armor: ${Math.round(c.armor * 100)}% | Dodge: ${Math.round((c.dodge || 0) * 100)}%</p>
        <p>Weapon: ${w.name} (${w.kind})</p>
        <p>Melee ${Math.round(c.meleeMult * 100)}% | Magic ${Math.round(c.magicMult * 100)}% | Ranged ${Math.round(c.rangedMult * 100)}%</p>
      `;

      const pick = document.createElement("button");
      pick.className = "smallBtn";
      pick.textContent = "Select";
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
        renderWeaponSlots();
        refreshHUD();
      }
    }

    if (e.code === "Digit1" && game.player && game.player.weapons[0]) {
      game.player.activeWeapon = 0;
      renderWeaponSlots();
      refreshHUD();
    }

    if (e.code === "Digit2" && game.player && game.player.weapons[1]) {
      game.player.activeWeapon = 1;
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

    waveText.textContent = `Wave: 0/${MAX_WAVE}`;
    goldText.textContent = "Gold: 0";
    hpBar.style.width = "100%";
    dashBar.style.width = "100%";
    weaponSlots.innerHTML = "";
  });

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
