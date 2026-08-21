// 怪物外形视觉规格 · 汇总
// 新增文件（对 violet-lz/Cardforge-web 纯增量，不修改任何既有文件）
import { VISUALS_A } from './monsterVisualsA';
import { VISUALS_B } from './monsterVisualsB';
import { VISUALS_C } from './monsterVisualsC';
import { VISUALS_D } from './monsterVisualsD';
import { VISUALS_E } from './monsterVisualsE';
import { VISUALS_F } from './monsterVisualsF';
import { VISUALS_G } from './monsterVisualsG';
import { applyAnimations } from './monsterAnimations';
import type { EnemyTier, MonsterVisualSpec, RegionMeta } from './monsterVisualTypes';

export type { EnemyTier, FeatureSpec, MonsterVisualSpec, RegionMeta, BodyKind, EyeStyle } from './monsterVisualTypes';
export { F } from './monsterVisualTypes';

export const MONSTER_VISUALS: Record<string, MonsterVisualSpec> = { ...VISUALS_A, ...VISUALS_B, ...VISUALS_C, ...VISUALS_D, ...VISUALS_E, ...VISUALS_F, ...VISUALS_G };

// 注入动画数据
applyAnimations(MONSTER_VISUALS);

/** 地域顺序（图鉴分组用） */
export const REGIONS: RegionMeta[] = [
  { id: 'ashen', name: '灰烬荒原', en: 'ASHEN WASTES', hue: '#e34325' },
  { id: 'village', name: '落败村庄', en: 'FALLEN VILLAGE', hue: '#c98f2f' },
  { id: 'forest', name: '生机森林', en: 'LIVING FOREST', hue: '#2e9e6b' },
  { id: 'mire', name: '苔藓沼泽', en: 'MOSSY MIRE', hue: '#6b8f3d' },
  { id: 'sewer', name: '恶臭下水道', en: 'FOUL SEWERS', hue: '#8fae3c' },
  { id: 'capital', name: '繁华皇都', en: 'GILDED CAPITAL', hue: '#f0cd7d' },
  { id: 'ring', name: '皇都外环', en: 'OUTER RING', hue: '#b08d57' },
  { id: 'blood', name: '血色之地', en: 'CRIMSON LANDS', hue: '#d8342c' },
  { id: 'magic', name: '魔法之地', en: 'ARCANE REACH', hue: '#8a7fd8' },
  { id: 'tech', name: '科技之城', en: 'MACHINE CITY', hue: '#4fd8c2' },
  { id: 'sky', name: '天空岛', en: 'SKY ISLES', hue: '#8fc3e8' },
  { id: 'castle', name: '贵族城堡', en: 'NOBLE KEEP', hue: '#b0a0d8' },
  { id: 'crypt', name: '城堡地下墓道', en: 'UNDER-KRYPT', hue: '#c9b890' },
  { id: 'nether', name: '冥界', en: 'COLD HEARTHS', hue: '#8be9d8' },
  { id: 'ferry', name: '幽冥渡口', en: 'FERRY CROSSING', hue: '#58b8c8' },
  { id: 'sea', name: '海洋', en: 'DEEP CURRENT', hue: '#3f9fd8' },
  { id: 'atlantis', name: '亚特兰蒂斯', en: 'ATLANTIS', hue: '#cfe3ea' },
  { id: 'bell', name: '钟楼', en: 'SILENT STEEPLE', hue: '#d8b23f' },
  { id: 'desert', name: '荒漠', en: 'SAND FRONTIER', hue: '#e0a43f' },
  { id: 'meteor', name: '陨石遗迹', en: 'METEOR RUINS', hue: '#9d8fe0' },
  { id: 'neon', name: '霓虹院', en: 'NEON TRIBUNAL', hue: '#ff4fd8' },
  { id: 'demon', name: '恶魔巢穴', en: 'DAMON NEST', hue: '#d84848' },
  { id: 'rampart', name: '世界地垒', en: 'WORLD RAMPART', hue: '#d8c8a8' },
  { id: 'legacy', name: '旧日余响', en: 'LEGACY ECHOES', hue: '#a8a291' },
];

export const REGION_OF: Record<string, string> = {
  // 灰烬荒原
  ashling: 'ashen', 'cinder-sprite': 'ashen', 'rust-hound': 'ashen', 'glass-moth': 'ashen', 'veil-monger': 'ashen',
  'bell-tender': 'ashen', 'kiln-brute': 'ashen', 'ink-leech': 'ashen', 'bone-scrivener': 'ashen',
  'ashen-warden': 'ashen', 'crownless-furnace': 'ashen',
  // 落败村庄
  'straw-effigy': 'village', 'village-scavenger': 'village', 'crow-swarm': 'village', 'harvest-hound': 'village',
  'scythe-warden': 'village', 'famine-effigy': 'village', 'the-last-harvest': 'village',
  // 生机森林
  'forest-wolf': 'forest', 'bramble-crawler': 'forest', 'glowmoth-cluster': 'forest', 'root-stalker': 'forest',
  'alpha-wolf': 'forest', 'ancient-treant': 'forest', 'heart-of-the-grove': 'forest',
  // 苔藓沼泽
  'mire-crocodile': 'mire', 'moss-lurker': 'mire', 'reed-stalker': 'mire', 'bog-witchling': 'mire',
  'swamp-hag': 'mire', 'ancient-croc': 'mire', 'mother-of-the-mire': 'mire',
  // 恶臭下水道
  'sewer-rat-king': 'sewer', 'plague-rat': 'sewer', 'filth-slime': 'sewer', 'gutter-roach': 'sewer',
  'pipe-warden': 'sewer', 'the-bloated-sovereign': 'sewer',
  // 繁华皇都
  'royal-halberdier': 'capital', 'white-tower-adept': 'capital', 'gilded-inquisitor': 'capital', 'plaza-crier': 'capital',
  'royal-champion': 'capital', 'lord-inquisitor': 'capital', 'sun-crown-warden': 'capital',
  // 皇都外环
  'toll-enforcer': 'ring', 'road-bandit': 'ring', 'caravan-deserter': 'ring', 'wall-sentinel': 'ring',
  'border-marshal': 'ring', 'broken-seal-gatekeeper': 'ring',
  // 血色之地
  'blood-cultist': 'blood', 'crimson-berserker': 'blood', 'bone-hill-lurker': 'blood', 'gore-windmill': 'blood',
  'blood-marshal': 'blood', 'clotted-altar': 'blood',
  // 魔法之地
  'candle-apprentice': 'magic', 'rune-construct': 'magic', 'grimoire-swarm': 'magic', 'astrolabe-keeper': 'magic',
  'archmage-tutor': 'magic', 'bell-tower-of-spells': 'magic',
  // 科技之城
  'neon-enforcer': 'tech', 'drone-swarm': 'tech', 'circuit-leech': 'tech', 'chrome-brute': 'tech',
  'firewall-sentinel': 'tech', 'zero-shaft-core': 'tech',
  // 天空岛
  'cloud-whale-calf': 'sky', 'gale-harrier': 'sky', 'skystone-sentry': 'sky', 'white-wing-warden': 'sky',
  'storm-shepherd': 'sky', 'sky-lock-bridge': 'sky',
  // 贵族城堡
  'silver-guard': 'castle', 'feast-hound': 'castle', 'court-poisoner': 'castle', 'heraldic-knight': 'castle',
  'castellan': 'castle', 'throneless-heir': 'castle',
  // 城堡地下墓道
  'crypt-ossuary': 'crypt', 'wax-sealed-corpse': 'crypt', 'nameless-echo': 'crypt', 'tomb-stair-guard': 'crypt',
  'first-interred': 'crypt', 'underground-king-gate': 'crypt',
  // 冥界
  'pale-flame-wisp': 'nether', 'market-of-the-dead-broker': 'nether', 'dirge-stone': 'nether', 'soul-shackler': 'nether',
  'lord-of-cold-hearth': 'nether', 'broken-stair-of-hades': 'nether',
  // 幽冥渡口
  'lethe-boatman': 'ferry', 'paper-lantern-shade': 'ferry', 'tide-chanter': 'ferry', 'coin-drowned': 'ferry',
  'ferryman-of-names': 'ferry', 'ferrymans-gate': 'ferry',
  // 海洋
  'bubble-eel': 'sea', 'whalebone-drifter': 'sea', 'reef-stalker': 'sea', 'sunken-lamp-keeper': 'sea',
  'deep-current-warden': 'sea', 'abyss-maelstrom-gate': 'sea',
  // 亚特兰蒂斯
  'marble-sentinel': 'atlantis', 'broken-column-shade': 'atlantis', 'bath-house-siren': 'atlantis', 'star-senate-scribe': 'atlantis',
  'white-stone-archon': 'atlantis', 'atlantean-court': 'atlantis',
  // 钟楼
  'bell-acolyte': 'bell', 'echo-wraith': 'bell', 'pendulum-blade': 'bell', 'bell-warden': 'bell', 'silent-king': 'bell',
  // 荒漠
  'sand-worm': 'desert', 'desert-raider': 'desert', 'sandstone-golem': 'desert', 'mummified-priest': 'desert',
  'sand-scorpion': 'desert', 'sandstorm-wraith': 'desert', 'dune-tyrant': 'desert', 'sand-sovereign': 'desert',
  // 陨石遗迹
  'meteor-acolyte': 'meteor', 'void-hound': 'meteor', 'starbone-knight': 'meteor', riftweaver: 'meteor',
  'cosmic-behemoth': 'meteor', 'terminus-warden': 'meteor', 'world-ender': 'meteor',
  // 霓虹院
  'data-bailiff': 'neon', 'memory-leech': 'neon', 'verdict-drone': 'neon', 'neon-executioner': 'neon', 'neon-arbiter': 'neon',
  // 恶魔巢穴
  'brood-spawn': 'demon', 'pact-cultist': 'demon', 'gore-fiend': 'demon', 'nest-broodmother': 'demon', 'demon-progenitor': 'demon',
  // 世界地垒
  'rampart-sentinel': 'rampart', 'starfall-archer': 'rampart', 'void-templar': 'rampart', 'rampart-warden': 'rampart', 'rampart-heart': 'rampart',
  // 旧日余响
  'legacy-lone-orc-scout': 'legacy', 'legacy-patrol-orc-archer': 'legacy', 'legacy-patrol-orc-scout': 'legacy',
  'legacy-orc-warrior': 'legacy', 'legacy-skeleton-warrior': 'legacy', 'legacy-jaw-worm': 'legacy', 'legacy-small-slime': 'legacy',
  'legacy-orc-shaman': 'legacy', 'legacy-ghost': 'legacy', 'legacy-orc-berserker': 'legacy', 'legacy-rat-pack-a': 'legacy',
  'legacy-rat-pack-c': 'legacy', 'legacy-troll': 'legacy', 'legacy-death-knight': 'legacy',
  'legacy-orc-warchief': 'legacy', 'legacy-ettin': 'legacy', 'legacy-ghost-cultist': 'legacy', 'legacy-hag': 'legacy',
  'legacy-wraith': 'legacy', 'legacy-ancient-dragon': 'legacy', 'legacy-slime-king': 'legacy',
};

const BOSS_IDS = new Set([
  'crownless-furnace', 'the-last-harvest', 'heart-of-the-grove', 'mother-of-the-mire', 'the-bloated-sovereign',
  'sun-crown-warden', 'broken-seal-gatekeeper', 'clotted-altar', 'bell-tower-of-spells', 'zero-shaft-core',
  'sky-lock-bridge', 'throneless-heir', 'underground-king-gate', 'broken-stair-of-hades', 'ferrymans-gate',
  'abyss-maelstrom-gate', 'atlantean-court', 'silent-king', 'sand-sovereign', 'world-ender',
  'neon-arbiter', 'demon-progenitor', 'rampart-heart',
]);

const ELITE_IDS = new Set([
  'ashen-warden', 'kiln-brute', 'scythe-warden', 'famine-effigy', 'alpha-wolf', 'ancient-treant',
  'swamp-hag', 'ancient-croc', 'sewer-rat-king', 'pipe-warden', 'gilded-inquisitor', 'royal-champion', 'lord-inquisitor',
  'border-marshal', 'blood-marshal', 'archmage-tutor', 'firewall-sentinel', 'storm-shepherd',
  'heraldic-knight', 'castellan', 'first-interred', 'lord-of-cold-hearth', 'ferryman-of-names',
  'deep-current-warden', 'white-stone-archon', 'bell-warden', 'dune-tyrant', 'sandstone-golem',
  'starbone-knight', 'cosmic-behemoth', 'terminus-warden', 'neon-executioner', 'nest-broodmother', 'rampart-warden',
  'gore-windmill', 'toll-enforcer',
]);

export const enemyTier = (id: string): EnemyTier => (BOSS_IDS.has(id) ? 'boss' : ELITE_IDS.has(id) ? 'elite' : 'normal');

export const tierLabel = (t: EnemyTier): string => (t === 'boss' ? 'BOSS' : t === 'elite' ? '精英' : '普通');
