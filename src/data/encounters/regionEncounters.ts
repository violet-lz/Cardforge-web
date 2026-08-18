import type { EncounterDefinition } from './basicEncounters';
import type { BiomeId } from '../biomes/biomes';

/**
 * Region-owned encounter tables. Every region on the fixed campaign chain gets its own
 * normal / elite / boss pools so each map plays as its own world rather than reskinned
 * copies of three legacy biomes.
 *
 * Existing 灰烬荒原-era foes are re-homed here by combat role and world logic instead of by
 * name: 锈骨猎犬 patrols the failing village, 玻璃蛾 haunts the living forest, 帷幕贩子 works
 * the capital, 墨蚀水蛭 breeds in the sewers, 骨页抄写者 files the catacombs, and 窑心巨汉 /
 * 守钟侍从 become border-era heavies.
 */
const e = (id: string, tier: EncounterDefinition['tier'], minRow: number, minAct: number, biome: BiomeId, enemyIds: string[]): EncounterDefinition => ({ id, tier, minRow, minAct, biomeIds: [biome], enemyIds });

export const REGION_ENCOUNTERS: EncounterDefinition[] = [
  /* 第一幕 ───────────────────────────────────────────── */
  // 落败村庄
  e('village-scavengers', 'combat', 0, 1, 'ruined-village', ['village-scavenger', 'crow-swarm']),
  e('village-effigy-watch', 'combat', 0, 1, 'ruined-village', ['straw-effigy']),
  e('village-hounds', 'combat', 1, 1, 'ruined-village', ['harvest-hound', 'rust-hound']),
  e('village-crowfield', 'combat', 1, 1, 'ruined-village', ['crow-swarm', 'ashling']),
  e('village-scythe-warden', 'elite', 2, 1, 'ruined-village', ['scythe-warden']),
  e('village-famine', 'elite', 2, 1, 'ruined-village', ['famine-effigy', 'straw-effigy']),
  e('village-last-harvest', 'boss', 0, 1, 'ruined-village', ['the-last-harvest']),
  // 生机森林
  e('forest-wolfpack', 'combat', 0, 1, 'verdant-forest', ['forest-wolf', 'forest-wolf']),
  e('forest-bramble', 'combat', 0, 1, 'verdant-forest', ['bramble-crawler', 'glowmoth-cluster']),
  e('forest-moths', 'combat', 1, 1, 'verdant-forest', ['glass-moth', 'glowmoth-cluster']),
  e('forest-roots', 'combat', 2, 1, 'verdant-forest', ['root-stalker', 'forest-wolf']),
  e('forest-alpha', 'elite', 2, 1, 'verdant-forest', ['alpha-wolf']),
  e('forest-treant', 'elite', 3, 1, 'verdant-forest', ['ancient-treant', 'bramble-crawler']),
  e('forest-heart', 'boss', 0, 1, 'verdant-forest', ['heart-of-the-grove']),
  // 苔藓沼泽
  e('marsh-croc-shallows', 'combat', 0, 1, 'moss-marsh', ['mire-crocodile']),
  e('marsh-moss-lurkers', 'combat', 0, 1, 'moss-marsh', ['moss-lurker', 'reed-stalker']),
  e('marsh-reedline', 'combat', 1, 1, 'moss-marsh', ['reed-stalker', 'bog-witchling']),
  e('marsh-witchling-brood', 'combat', 2, 1, 'moss-marsh', ['bog-witchling', 'moss-lurker']),
  e('marsh-hag', 'elite', 2, 1, 'moss-marsh', ['swamp-hag']),
  e('marsh-ancient-croc', 'elite', 3, 1, 'moss-marsh', ['ancient-croc', 'mire-crocodile']),
  e('marsh-mother', 'boss', 0, 1, 'moss-marsh', ['mother-of-the-mire']),
  // 恶臭下水道
  e('sewer-rats', 'combat', 0, 1, 'fetid-sewers', ['plague-rat', 'plague-rat']),
  e('sewer-slime', 'combat', 0, 1, 'fetid-sewers', ['filth-slime']),
  e('sewer-leeches', 'combat', 1, 1, 'fetid-sewers', ['ink-leech', 'plague-rat']),
  e('sewer-roachnest', 'combat', 2, 1, 'fetid-sewers', ['gutter-roach', 'filth-slime']),
  e('sewer-rat-king-fight', 'elite', 2, 1, 'fetid-sewers', ['sewer-rat-king']),
  e('sewer-pipe-warden', 'elite', 3, 1, 'fetid-sewers', ['pipe-warden', 'ink-leech']),
  e('sewer-bloated-sovereign', 'boss', 0, 1, 'fetid-sewers', ['the-bloated-sovereign']),
  // 繁华皇都（第一幕终点）
  e('capital-halberdiers', 'combat', 0, 1, 'radiant-capital', ['royal-halberdier', 'plaza-crier']),
  e('capital-white-tower', 'combat', 1, 1, 'radiant-capital', ['white-tower-adept', 'veil-monger']),
  e('capital-inquisition', 'combat', 2, 1, 'radiant-capital', ['gilded-inquisitor', 'royal-halberdier']),
  e('capital-plaza-patrol', 'combat', 2, 1, 'radiant-capital', ['plaza-crier', 'white-tower-adept']),
  e('capital-champion', 'elite', 3, 1, 'radiant-capital', ['royal-champion']),
  e('capital-lord-inquisitor', 'elite', 3, 1, 'radiant-capital', ['lord-inquisitor', 'gilded-inquisitor']),
  e('capital-sun-crown', 'boss', 0, 1, 'radiant-capital', ['sun-crown-warden']),

  /* 第二幕 ───────────────────────────────────────────── */
  // 皇都外环
  e('outskirts-bandits', 'combat', 0, 2, 'capital-outskirts', ['road-bandit', 'caravan-deserter']),
  e('outskirts-toll', 'combat', 0, 2, 'capital-outskirts', ['toll-enforcer']),
  e('outskirts-wall', 'combat', 1, 2, 'capital-outskirts', ['wall-sentinel', 'road-bandit']),
  e('outskirts-caravan-guard', 'combat', 2, 2, 'capital-outskirts', ['caravan-deserter', 'road-bandit']),
  e('outskirts-marshal', 'elite', 3, 2, 'capital-outskirts', ['border-marshal']),
  e('outskirts-heavies', 'elite', 3, 2, 'capital-outskirts', ['kiln-brute', 'bell-tender']),
  e('outskirts-broken-seal', 'boss', 0, 2, 'capital-outskirts', ['broken-seal-gatekeeper']),
  // 血色之地
  e('blood-cult-rite', 'combat', 0, 2, 'bloodlands', ['blood-cultist', 'bone-hill-lurker']),
  e('blood-berserker', 'combat', 1, 2, 'bloodlands', ['crimson-berserker']),
  e('blood-windmill', 'combat', 2, 2, 'bloodlands', ['gore-windmill', 'blood-cultist']),
  e('blood-bonehill', 'combat', 2, 2, 'bloodlands', ['bone-hill-lurker', 'crimson-berserker']),
  e('blood-marshal-duel', 'elite', 3, 2, 'bloodlands', ['blood-marshal']),
  e('blood-double-rage', 'elite', 3, 2, 'bloodlands', ['crimson-berserker', 'gore-windmill']),
  e('blood-clotted-altar', 'boss', 0, 2, 'bloodlands', ['clotted-altar']),
  // 魔法之地
  e('arcane-apprentices', 'combat', 0, 2, 'arcane-march', ['candle-apprentice', 'grimoire-swarm']),
  e('arcane-construct', 'combat', 1, 2, 'arcane-march', ['rune-construct']),
  e('arcane-astrolabe', 'combat', 2, 2, 'arcane-march', ['astrolabe-keeper', 'candle-apprentice']),
  e('arcane-flying-books', 'combat', 2, 2, 'arcane-march', ['grimoire-swarm', 'rune-construct']),
  e('arcane-tutor', 'elite', 3, 2, 'arcane-march', ['archmage-tutor']),
  e('arcane-construct-pair', 'elite', 3, 2, 'arcane-march', ['rune-construct', 'astrolabe-keeper']),
  e('arcane-bell-tower', 'boss', 0, 2, 'arcane-march', ['bell-tower-of-spells']),
  // 科技之城
  e('techno-drones', 'combat', 0, 2, 'techno-city', ['drone-swarm', 'circuit-leech']),
  e('techno-enforcer', 'combat', 1, 2, 'techno-city', ['neon-enforcer']),
  e('techno-brute', 'combat', 2, 2, 'techno-city', ['chrome-brute', 'drone-swarm']),
  e('techno-leeches', 'combat', 2, 2, 'techno-city', ['circuit-leech', 'neon-enforcer']),
  e('techno-firewall', 'elite', 3, 2, 'techno-city', ['firewall-sentinel']),
  e('techno-heavy-pair', 'elite', 3, 2, 'techno-city', ['chrome-brute', 'neon-enforcer']),
  e('techno-zero-shaft', 'boss', 0, 2, 'techno-city', ['zero-shaft-core']),
  // 天空岛
  e('sky-harriers', 'combat', 0, 2, 'sky-island', ['gale-harrier', 'gale-harrier']),
  e('sky-whale-calf', 'combat', 1, 2, 'sky-island', ['cloud-whale-calf']),
  e('sky-sentries', 'combat', 2, 2, 'sky-island', ['skystone-sentry']),
  e('sky-white-wings', 'combat', 2, 2, 'sky-island', ['white-wing-warden']),
  e('sky-storm-shepherd', 'elite', 3, 2, 'sky-island', ['storm-shepherd']),
  e('sky-stone-pair', 'elite', 3, 2, 'sky-island', ['skystone-sentry', 'cloud-whale-calf']),
  e('sky-lock-bridge-fight', 'boss', 0, 2, 'sky-island', ['sky-lock-bridge']),
  // 贵族城堡（第二幕终点）
  e('castle-silver-guards', 'combat', 0, 2, 'noble-castle', ['silver-guard']),
  e('castle-poisoner', 'combat', 1, 2, 'noble-castle', ['court-poisoner', 'feast-hound']),
  e('castle-heraldic', 'combat', 2, 2, 'noble-castle', ['heraldic-knight']),
  e('castle-hall-patrol', 'combat', 2, 2, 'noble-castle', ['feast-hound', 'court-poisoner']),
  e('castle-castellan', 'elite', 3, 2, 'noble-castle', ['castellan']),
  e('castle-old-furnace', 'elite', 3, 2, 'noble-castle', ['crownless-furnace']),
  e('castle-throneless', 'boss', 0, 2, 'noble-castle', ['throneless-heir']),

  /* 第三幕 ───────────────────────────────────────────── */
  // 城堡地下墓道
  e('crypt-ossuaries', 'combat', 0, 3, 'castle-catacombs', ['crypt-ossuary']),
  e('crypt-echoes', 'combat', 1, 3, 'castle-catacombs', ['nameless-echo', 'bone-scrivener']),
  e('crypt-stairs', 'combat', 2, 3, 'castle-catacombs', ['tomb-stair-guard']),
  e('crypt-wax-hall', 'combat', 2, 3, 'castle-catacombs', ['wax-sealed-corpse', 'nameless-echo']),
  e('crypt-first-interred', 'elite', 3, 3, 'castle-catacombs', ['first-interred']),
  e('crypt-guard-pair', 'elite', 3, 3, 'castle-catacombs', ['tomb-stair-guard', 'crypt-ossuary']),
  e('crypt-king-gate', 'boss', 0, 3, 'castle-catacombs', ['underground-king-gate']),
  // 冥界
  e('underworld-wisps', 'combat', 0, 3, 'underworld', ['pale-flame-wisp', 'pale-flame-wisp']),
  e('underworld-market', 'combat', 1, 3, 'underworld', ['market-of-the-dead-broker', 'pale-flame-wisp']),
  e('underworld-dirge', 'combat', 2, 3, 'underworld', ['dirge-stone']),
  e('underworld-shacklers', 'combat', 2, 3, 'underworld', ['soul-shackler', 'market-of-the-dead-broker']),
  e('underworld-cold-hearth', 'elite', 3, 3, 'underworld', ['lord-of-cold-hearth']),
  e('underworld-stone-pair', 'elite', 3, 3, 'underworld', ['dirge-stone', 'soul-shackler']),
  e('underworld-broken-stair', 'boss', 0, 3, 'underworld', ['broken-stair-of-hades']),
  // 幽冥渡口
  e('ferry-boatmen', 'combat', 0, 3, 'ghost-ferry', ['lethe-boatman', 'paper-lantern-shade']),
  e('ferry-chanters', 'combat', 1, 3, 'ghost-ferry', ['tide-chanter', 'paper-lantern-shade']),
  e('ferry-drowned', 'combat', 2, 3, 'ghost-ferry', ['coin-drowned']),
  e('ferry-dock-watch', 'combat', 2, 3, 'ghost-ferry', ['lethe-boatman', 'tide-chanter']),
  e('ferry-name-taker', 'elite', 3, 3, 'ghost-ferry', ['ferryman-of-names']),
  e('ferry-drowned-pair', 'elite', 3, 3, 'ghost-ferry', ['coin-drowned', 'lethe-boatman']),
  e('ferry-gate', 'boss', 0, 3, 'ghost-ferry', ['ferrymans-gate']),
  // 海洋（第三幕常规终点）
  e('ocean-eels', 'combat', 0, 3, 'ocean-depths', ['bubble-eel']),
  e('ocean-reef-hunt', 'combat', 1, 3, 'ocean-depths', ['reef-stalker', 'bubble-eel']),
  e('ocean-whalebone', 'combat', 2, 3, 'ocean-depths', ['whalebone-drifter']),
  e('ocean-lamp-keeper', 'combat', 2, 3, 'ocean-depths', ['sunken-lamp-keeper', 'reef-stalker']),
  e('ocean-deep-current', 'elite', 3, 3, 'ocean-depths', ['deep-current-warden']),
  e('ocean-heavy-pair', 'elite', 3, 3, 'ocean-depths', ['whalebone-drifter', 'sunken-lamp-keeper']),
  e('ocean-maelstrom-gate', 'boss', 0, 3, 'ocean-depths', ['abyss-maelstrom-gate']),
  // 亚特兰蒂斯（难度 5）
  e('atlantis-sentinels', 'combat', 0, 3, 'atlantis', ['marble-sentinel']),
  e('atlantis-shades', 'combat', 1, 3, 'atlantis', ['broken-column-shade', 'bath-house-siren']),
  e('atlantis-senate', 'combat', 2, 3, 'atlantis', ['star-senate-scribe', 'broken-column-shade']),
  e('atlantis-baths', 'combat', 2, 3, 'atlantis', ['bath-house-siren']),
  e('atlantis-archon', 'elite', 3, 3, 'atlantis', ['white-stone-archon']),
  e('atlantis-senate-pair', 'elite', 3, 3, 'atlantis', ['star-senate-scribe', 'bath-house-siren']),
  e('atlantis-court', 'boss', 0, 3, 'atlantis', ['atlantean-court']),

  // 钟楼（第三幕终点）
  e('bell-acolytes', 'combat', 0, 3, 'bell-tower', ['bell-acolyte', 'echo-wraith']),
  e('bell-echoes', 'combat', 1, 3, 'bell-tower', ['echo-wraith', 'echo-wraith']),
  e('bell-pendulums', 'combat', 2, 3, 'bell-tower', ['pendulum-blade']),
  e('bell-warden-fight', 'elite', 3, 3, 'bell-tower', ['bell-warden']),
  e('bell-pendulum-pair', 'elite', 3, 3, 'bell-tower', ['pendulum-blade', 'bell-acolyte']),
  e('bell-silent-king', 'boss', 0, 3, 'bell-tower', ['silent-king']),
  // 霓虹院（第六幕）
  e('neon-drones', 'combat', 0, 3, 'neon-court', ['verdict-drone', 'memory-leech']),
  e('neon-bailiff', 'combat', 1, 3, 'neon-court', ['data-bailiff']),
  e('neon-leeches', 'combat', 2, 3, 'neon-court', ['memory-leech', 'data-bailiff']),
  e('neon-executioner-fight', 'elite', 3, 3, 'neon-court', ['neon-executioner']),
  e('neon-drone-swarm', 'elite', 3, 3, 'neon-court', ['verdict-drone', 'data-bailiff']),
  e('neon-arbiter-fight', 'boss', 0, 3, 'neon-court', ['neon-arbiter']),
  // 恶魔巢穴（第七幕）
  e('demon-spawns', 'combat', 0, 3, 'demon-nest', ['brood-spawn']),
  e('demon-cultists', 'combat', 1, 3, 'demon-nest', ['pact-cultist']),
  e('demon-fiend', 'combat', 2, 3, 'demon-nest', ['gore-fiend']),
  e('demon-spawn-pair', 'combat', 2, 3, 'demon-nest', ['brood-spawn', 'pact-cultist']),
  e('demon-broodmother', 'elite', 3, 3, 'demon-nest', ['nest-broodmother']),
  e('demon-fiend-pair', 'elite', 3, 3, 'demon-nest', ['gore-fiend', 'pact-cultist']),
  e('demon-progenitor-fight', 'boss', 0, 3, 'demon-nest', ['demon-progenitor']),
  // 世界地垒（第七幕终点，Boss 为终焉 world-ender）
  e('rampart-sentinels', 'combat', 0, 3, 'world-rampart', ['rampart-sentinel']),
  e('rampart-archers', 'combat', 1, 3, 'world-rampart', ['starfall-archer', 'void-templar']),
  e('rampart-templars', 'combat', 2, 3, 'world-rampart', ['void-templar']),
  e('rampart-warden-fight', 'elite', 3, 3, 'world-rampart', ['rampart-warden']),
  e('rampart-sentinel-pair', 'elite', 3, 3, 'world-rampart', ['rampart-sentinel', 'starfall-archer']),
  e('rampart-finality', 'boss', 0, 3, 'world-rampart', ['world-ender']),
];
