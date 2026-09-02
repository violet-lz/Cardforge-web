// 怪物外形视觉规格 · 冥界 + 幽冥渡口 + 海洋 + 亚特兰蒂斯
import { F, type MonsterVisualSpec } from './monsterVisualTypes';

export const VISUALS_E: Record<string, MonsterVisualSpec> = {

  /* ══ 冥界 (Cold Hearths) ══ */
  // 幽火鬼火: 幽焰灼热 / 灼触 / 虚影 — pale flame, spectral drift
  'pale-flame-wisp': {
    kind: 'ghost', hue: '#8be9d8', hue2: '#4aa89c', glow: '#8be9d8', size: 0.7, eye: 'glow',
    features: [
      F('flameCold', 60, 24, '#8be9d8', 0, 1.15, '#4aa89c'),
      F('emberScorch', 44, 40, '#e9f8f4', -10, 0.9),
      F('wispDrift', 78, 42, '#bfe8e0', 12, 0.85),
      F('haloFlicker', 60, 52, '#e9f8f4', 0, 1.05),
      F('ghostCore', 60, 62, '#2a3a38', 0, 0.8),
      F('mistVeil', 60, 34, '#bfe8e0', 0, 1),
      F('dripSpectre', 50, 82, '#4aa89c', 0, 0.7),
      F('glowSoul', 72, 78, '#8be9d8', 0, 0.7),
      F('shadowTail', 60, 96, '#2a3a38', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [4, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 44, y: 44 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 78, y: 44 }, boundFeatures: [2] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 80 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 80 }, boundFeatures: [7] },
    ],
  },
  // 亡者掌柜: 收取通行费(涸竭) / 铜秤攻击 / 交易增益 — dark market broker, scales, coins
  'market-of-the-dead-broker': {
    kind: 'humanoid', hue: '#4a5460', hue2: '#2a323c', glow: '#8be9d8', size: 0.95, eye: 'slit',
    features: [
      F('hoodStall', 60, 22, '#3a4450', 0, 0.95),
      F('grinLedger', 60, 34, '#2a323c', 0, 0.8),
      F('brassScale', 30, 50, '#c9a34f', -8, 1.05),
      F('coinToll', 86, 62, '#c9a34f', 0, 0.9),
      F('robeStall', 60, 66, '#3a4450', 0, 1.05, '#2a323c'),
      F('chainAbacus', 44, 74, '#8be9d8', 0, 0.75),
      F('runeDeath', 74, 44, '#8be9d8', 8, 0.75),
      F('coinChimes', 60, 90, '#c9a34f', 0, 1),
      F('bootTally', 70, 96, '#2a323c', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [4, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 50 }, boundFeatures: [2, 5] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 52 }, boundFeatures: [3, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 88 }, boundFeatures: [8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 88 }, boundFeatures: [] },
    ],
  },
  // 哀歌石像: 石缄(防御) / 石掌攻击 / 哀歌(虚弱) — deathly stone mourner
  'dirge-stone': {
    kind: 'statue', hue: '#5c6a68', hue2: '#36403e', glow: '#8be9d8', size: 0.9, eye: 'none',
    features: [
      F('crownDirge', 60, 24, '#8be9d8', 0, 1.05),
      F('skullHollow', 60, 32, '#222a28', 0, 0.85),
      F('mossMourn', 60, 44, '#4a6a54', 0, 0.9),
      F('plateStony', 60, 60, '#6a7876', 0, 1.15, '#48544f'),
      F('fistStonePalm', 30, 64, '#7a8886', 0, 0.95),
      F('archTomb', 84, 56, '#5c6a68', 0, 0.9),
      F('glyphGrave', 60, 76, '#8be9d8', 0, 0.7),
      F('columnBase', 60, 96, '#36403e', 0, 1.1),
      F('crackWeep', 48, 70, '#36403e', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [3, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 58 }, boundFeatures: [4] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 82 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 82 }, boundFeatures: [2] },
    ],
  },
  // 锁魂者: 锁链(脆化) / 链击 / 契印污染(black-seal) — soul chains, seals
  'soul-shackler': {
    kind: 'humanoid', hue: '#3c4454', hue2: '#222834', glow: '#c9a34f', size: 1.0, eye: 'slit',
    features: [
      F('hoodHiss', 60, 24, '#3c4454', 0, 0.95),
      F('hookSoul', 60, 40, '#c9a34f', -6, 1),
      F('sealPact', 60, 84, '#e2ae4f', 0, 0.9),
      F('chainShackle', 60, 70, '#8a8f9c', 0, 1.15),
      F('fistCold', 86, 66, '#3c4454', 0, 0.9),
      F('handSeal', 34, 62, '#e2ae4f', 0, 0.9),
      F('runeCage', 44, 52, '#8be9d8', 0, 0.75),
      F('veinNether', 44, 80, '#4aa89c', 0, 0.8),
      F('bootDrag', 72, 90, '#222834', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [3, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 54 }, boundFeatures: [5, 6] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 56 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 84 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 84 }, boundFeatures: [8] },
    ],
  },
  // 冷炉之主: 寒焰(灼热) / 断阶锤 / 幽壁(防御) 召唤幽火 — lord of cold hearth
  'lord-of-cold-hearth': {
    kind: 'ghost', hue: '#4a5460', hue2: '#2a323c', glow: '#8be9d8', size: 1.15, eye: 'glow',
    features: [
      F('crownAsh', 60, 14, '#5a6470', 0, 0.95),
      F('flameHearth', 60, 26, '#8be9d8', 0, 1.1, '#4aa89c'),
      F('haloCold', 60, 42, '#4aa89c', 0, 1.15),
      F('hammerStep', 30, 34, '#8a8f9c', 12, 1.15),
      F('emberFrozen', 84, 48, '#e9f8f4', 0, 0.85),
      F('robeLord', 60, 68, '#3a4a54', 0, 1.15, '#2a323c'),
      F('wallHush', 60, 90, '#2a323c', 0, 1.1),
      F('chainDeathbell', 84, 70, '#c9a34f', 0, 0.85),
      F('mistShroud', 60, 56, '#bfe8e0', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [5, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 46 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 48 }, boundFeatures: [4, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 84 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 84 }, boundFeatures: [] },
    ],
  },
  // 冥王断阶: BOSS 亡者之壁 / 幽锤 / 幽焰 / 双锤 召唤幽火 — broken stair, hades gate
  'broken-stair-of-hades': {
    kind: 'gate', hue: '#4a5460', hue2: '#28303a', glow: '#8be9d8', size: 1.4, eye: 'red',
    features: [
      F('crownJudge', 60, 14, '#c9a34f', 0, 1),
      F('gateArchway', 34, 40, '#5c6a68', 0, 1.1),
      F('stairBroken', 60, 54, '#5a6470', 0, 1.25, '#3a4450'),
      F('wispHole', 44, 40, '#8be9d8', 0, 1),
      F('chainDescent', 88, 30, '#8a8f9c', 8, 1.1),
      F('flameSpirit', 60, 66, '#8be9d8', 0, 0.95),
      F('hammerShatter', 84, 62, '#28303a', 0, 1.05),
      F('wallOfDead', 60, 96, '#28303a', 0, 1.15),
      F('echoHades', 60, 82, '#4aa89c', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [2, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [0, 3] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 48 }, boundFeatures: [1, 4] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 56 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 88 }, boundFeatures: [7, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 88 }, boundFeatures: [] },
    ],
  },

  /* ══ 幽冥渡口 (Ferry Crossing) ══ */
  // 忘川船夫: 忘川之水(虚弱) / 长桨攻击 / 黑舟(防御) — boatman, oar, black boat
  'lethe-boatman': {
    kind: 'humanoid', hue: '#2c3440', hue2: '#181c24', glow: '#58b8c8', size: 0.95, eye: 'white',
    features: [
      F('hatBoater', 60, 16, '#3a4450', 0, 0.9),
      F('mistForget', 60, 30, '#58b8c8', 0, 1),
      F('oarLong', 30, 26, '#5c6470', 10, 1.25),
      F('handWater', 86, 66, '#2c3440', 0, 0.85),
      F('coinToll', 60, 56, '#c9a34f', 0, 0.7),
      F('robeRiver', 60, 72, '#3a4a54', 0, 1.05, '#2c3440'),
      F('boatBlack', 60, 92, '#181c24', 0, 1.1),
      F('waveLethe', 44, 84, '#58b8c8', 0, 0.85),
      F('bootSilt', 72, 96, '#181c24', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [5, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 24 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 44 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 52 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [4, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [8] },
    ],
  },
  // 纸灯亡影: 灯焰(灼热) / 灯杖攻击 / 吹熄(涸竭) — paper lantern shade
  'paper-lantern-shade': {
    kind: 'ghost', hue: '#e8a860', hue2: '#a86a34', glow: '#f0cd7d', size: 0.75, eye: 'glow',
    features: [
      F('flameFlicker', 60, 22, '#f7e3ae', 0, 0.85),
      F('lanternBody', 60, 40, '#f0b878', 0, 1.05, '#e8a860'),
      F('wispCrease', 48, 50, '#f7e3ae', 0, 0.85),
      F('staffLampRod', 30, 58, '#8a7350', -6, 1.1),
      F('ringSnuff', 60, 66, '#58b8c8', 0, 1),
      F('robeShade', 60, 78, '#a86a34', 0, 1.05, '#7a4c24'),
      F('mistTrail', 60, 96, '#58b8c8', 0, 0.75),
      F('emberDrip', 74, 46, '#f0cd7d', 0, 0.7),
      F('coinPaper', 78, 62, '#e8a860', 0, 0.65),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [1, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [0, 2] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 52 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 52 }, boundFeatures: [4, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 80 }, boundFeatures: [6, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 70, y: 80 }, boundFeatures: [] },
    ],
  },
  // 潮声吟者: 涨潮(增益) / 浪击x2 / 碑影(防御) — tide chanter, stone monolith, bell
  'tide-chanter': {
    kind: 'humanoid', hue: '#3c5460', hue2: '#22323c', glow: '#58b8c8', size: 0.9, eye: 'glow',
    features: [
      F('bellFerry', 60, 20, '#c9a34f', 0, 0.85),
      F('mouthChant', 60, 34, '#58b8c8', 0, 1),
      F('waveStone', 60, 52, '#4a6470', 0, 1.1),
      F('tideSwell', 44, 62, '#8be9d8', 0, 0.95),
      F('runeGull', 84, 40, '#58b8c8', 8, 0.8),
      F('columnMonolith', 60, 74, '#22323c', 0, 1.15),
      F('beadChoral', 78, 66, '#8be9d8', 0, 0.7),
      F('poolWet', 60, 100, '#3c5460', 0, 1),
      F('bootTide', 48, 90, '#22323c', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [5, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 38, y: 54 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 48 }, boundFeatures: [4, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 86 }, boundFeatures: [7, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 86 }, boundFeatures: [] },
    ],
  },
  // 沉钱溺者: 拽入水中(脆化) / 锈钩攻击 / 浊水污染(iron-mire) — coin-drowned, hook, coins
  'coin-drowned': {
    kind: 'ghost', hue: '#3a4a54', hue2: '#202c34', glow: '#58b8c8', size: 0.85, eye: 'white',
    features: [
      F('coinHair', 60, 20, '#c9a34f', 0, 1),
      F('bubbleLips', 60, 36, '#8be9d8', 0, 0.8),
      F('hookRust', 30, 56, '#8a5a38', -12, 1.05),
      F('veinMurk', 60, 58, '#58b8c8', 0, 1),
      F('coinWeave', 78, 46, '#c9a34f', 0, 0.7),
      F('robeDrag', 60, 78, '#202c34', 0, 1.05, '#101820'),
      F('mossAlgae', 60, 94, '#3c5448', 0, 1),
      F('dripDrown', 46, 70, '#58b8c8', 0, 0.75),
      F('foamSink', 72, 72, '#8be9d8', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [3, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 52 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 48 }, boundFeatures: [4, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 84 }, boundFeatures: [6, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 84 }, boundFeatures: [] },
    ],
  },
  // 收名摆渡人: 收走旧名(虚弱) / 铁桨攻击 / 雾舟(防御) — ferryman of names, iron oar, scroll
  'ferryman-of-names': {
    kind: 'humanoid', hue: '#2a3240', hue2: '#141a24', glow: '#58b8c8', size: 1.1, eye: 'slit',
    features: [
      F('hoodErased', 60, 26, '#3a4450', 0, 0.95),
      F('maskFaceless', 60, 34, '#3a4450', 0, 0.9),
      F('oarIron', 30, 24, '#8a8f9c', 10, 1.3),
      F('scrollName', 86, 56, '#e9e4d4', 0, 1),
      F('sealOldName', 60, 58, '#c9a34f', 0, 0.9),
      F('robeFog', 60, 74, '#2a3240', 0, 1.1, '#141a24'),
      F('boatMist', 60, 94, '#141a24', 0, 1.1),
      F('glyphOarGlow', 34, 42, '#58b8c8', 0, 0.75),
      F('waveWeight', 60, 86, '#58b8c8', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [5, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 44 }, boundFeatures: [2, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 52 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [4, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 摆渡者之门: BOSS 门帘(防御) / 桨击 / 索取(涸竭) / 双桨 召唤纸灯 — ferry gate, lanterns
  'ferrymans-gate': {
    kind: 'gate', hue: '#2c3440', hue2: '#161c26', glow: '#58b8c8', size: 1.4, eye: 'red',
    features: [
      F('crownFerryHorn', 60, 12, '#c9a34f', 0, 0.95),
      F('lanternRow', 60, 22, '#f0cd7d', 0, 1.1),
      F('gateCurtain', 60, 54, '#3a4450', 0, 1.25, '#222834'),
      F('oarSpike', 30, 34, '#8a8f9c', -8, 1.15),
      F('scaleToll', 86, 44, '#c9a34f', 0, 1),
      F('tideCrossing', 60, 76, '#58b8c8', 0, 1.1),
      F('wispSoulDrift', 44, 66, '#8be9d8', 0, 0.85),
      F('waveRipple', 60, 96, '#58b8c8', 0, 1.1),
      F('chainDepth', 78, 86, '#8a8f9c', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [2, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 48 }, boundFeatures: [3, 6] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 48 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 90 }, boundFeatures: [7, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 90 }, boundFeatures: [] },
    ],
  },

  /* ══ 海洋 (Deep Current) ══ */
  // 气泡电鳗: 放电(灼热) / 缠击 / 气泡(防御) — bubble eel, bioluminescence, discharge
  'bubble-eel': {
    kind: 'serpent', hue: '#3a6a8a', hue2: '#22445a', glow: '#8fc3e8', size: 0.75, eye: 'glow',
    features: [
      F('bubbleTrain', 60, 26, '#bfe4f4', 0, 1.1),
      F('mouthZap', 34, 40, '#e8f4ff', -8, 0.9),
      F('crestFinSpike', 60, 44, '#8fc3e8', 0, 1),
      F('boltDischarge', 60, 54, '#e8f4ff', 0, 1.15),
      F('coilWrap', 60, 70, '#4a7a9a', 0, 1.1, '#22445a'),
      F('scaleDeep', 76, 60, '#22445a', 0, 0.95),
      F('glowBio', 44, 62, '#8fc3e8', 0, 0.75),
      F('tailEel', 60, 88, '#3a6a8a', 0, 1.05),
      F('foamDrift', 78, 40, '#bfe4f4', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [4, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 40, y: 36 }, boundFeatures: [1, 2] },
      { id: 'armL', parentId: 'root', anchor: { x: 44, y: 52 }, boundFeatures: [3, 6] },
      { id: 'armR', parentId: 'root', anchor: { x: 78, y: 48 }, boundFeatures: [0, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 52, y: 80 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 70, y: 80 }, boundFeatures: [] },
    ],
  },
  // 鲸骨漂游者: 骨壳(防御) / 骨刺攻击 / 压裂(脆化) — whale bone, ribs, deep-sea
  'whalebone-drifter': {
    kind: 'statue', hue: '#d8e0e4', hue2: '#a0aab0', glow: '#8fc3e8', size: 1.0, eye: 'white',
    features: [
      F('lanternAbyssal', 60, 22, '#8fc3e8', 0, 0.75),
      F('mossBone', 60, 34, '#4a6a54', 0, 0.85),
      F('jawDrift', 34, 62, '#c8d4da', 0, 1.1),
      F('ribWhale', 60, 56, '#e9f0f4', 0, 1.2),
      F('crackPressure', 60, 46, '#a0aab0', 0, 1),
      F('boneSpine', 84, 52, '#c8d4da', 6, 1),
      F('shellBarnacle', 74, 70, '#6a8a78', 0, 0.8),
      F('waveSway', 60, 92, '#a0aab0', 0, 1.1),
      F('flukeTail', 60, 100, '#d8e0e4', 0, 0.95),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [3, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 52, y: 30 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 58 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 56 }, boundFeatures: [5, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 88 }, boundFeatures: [7, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 88 }, boundFeatures: [] },
    ],
  },
  // 暗礁猎手: 锁定猎物(易伤) / 连咬x2 / 潜行(增益) — reef stalker, ambush, coral
  'reef-stalker': {
    kind: 'beast', hue: '#4c5a70', hue2: '#2c3848', glow: '#8fc3e8', size: 0.9, eye: 'red',
    features: [
      F('crestAmbushFin', 60, 30, '#8fc3e8', 0, 1),
      F('reticleLockEye', 40, 46, '#ff6a45', 0, 0.85),
      F('shellReef', 60, 48, '#5c6a80', 0, 1.1, '#4c5a70'),
      F('fangBiteRow', 34, 64, '#e9f0f4', 0, 1),
      F('barbCoral', 78, 54, '#e86050', -10, 0.85),
      F('tailStill', 84, 72, '#2c3848', 0, 1),
      F('shadowLurk', 60, 92, '#2c3848', 0, 1),
      F('bubbleStalk', 74, 38, '#8fc3e8', 0, 0.7),
      F('currentFin', 46, 74, '#4a6470', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [2, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 40, y: 38 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 56 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 54 }, boundFeatures: [4, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 82 }, boundFeatures: [8] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 78 }, boundFeatures: [5] },
    ],
  },
  // 沉船灯守: 压强(涸竭) / 锚击攻击 / 船板(防御) — sunken lamp keeper, anchor, diving
  'sunken-lamp-keeper': {
    kind: 'humanoid', hue: '#3c4a58', hue2: '#22303c', glow: '#f0cd7d', size: 0.9, eye: 'white',
    features: [
      F('lampDeck', 60, 20, '#f0cd7d', 0, 0.9),
      F('bubbleBreath', 60, 36, '#8fc3e8', 0, 0.9),
      F('anchorHammer', 30, 50, '#8a8f9c', 12, 1.15),
      F('shieldPlank', 86, 60, '#5c4a34', 0, 1),
      F('orbValve', 60, 56, '#c9a34f', 0, 0.8),
      F('robeDiving', 60, 72, '#3c5460', 0, 1.05, '#22303c'),
      F('hemPressure', 60, 92, '#22303c', 0, 1.1),
      F('mossKeeper', 44, 66, '#6a8a78', 0, 0.75),
      F('bootDeep', 72, 96, '#22303c', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [5, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 50 }, boundFeatures: [2, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 88 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 88 }, boundFeatures: [] },
    ],
  },
  // 深流守卫: 洋流壁(防御) / 巨螯攻击 / 深压(脆化) — deep current warden, claw, currents
  'deep-current-warden': {
    kind: 'serpent', hue: '#2c4458', hue2: '#182834', glow: '#8fc3e8', size: 1.15, eye: 'red',
    features: [
      F('crownAbyssal', 60, 14, '#4a7a9a', 0, 0.9),
      F('lampWarden', 60, 24, '#8fc3e8', 0, 0.8),
      F('crackDeep', 60, 44, '#182834', 0, 1.1),
      F('clawGiant', 30, 60, '#3c5468', -6, 1.25, '#2c4458'),
      F('currentWall', 60, 78, '#4a6a88', 0, 1.1),
      F('bladeCrack', 84, 62, '#8fc3e8', 8, 0.95),
      F('ringPressure', 60, 90, '#2c4458', 0, 1.2),
      F('veinBiolum', 44, 52, '#8fc3e8', 0, 0.75),
      F('bubbleAbyss', 76, 40, '#bfe4f4', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [4, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 54 }, boundFeatures: [3, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 54 }, boundFeatures: [5, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 84 }, boundFeatures: [2] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 84 }, boundFeatures: [] },
    ],
  },
  // 深潮漩门: BOSS 涡壁(防御) / 潮击 / 深压 / 双漩 / 深渊碾压 召唤电鳗 — abyss maelstrom gate
  'abyss-maelstrom-gate': {
    kind: 'gate', hue: '#1c2c3c', hue2: '#0c141c', glow: '#58b8c8', size: 1.45, eye: 'red',
    features: [
      F('archGate', 60, 24, '#3c5468', 0, 1.2, '#1c2c3c'),
      F('glowDepth', 60, 34, '#8be9d8', 0, 1),
      F('vortexEye', 60, 50, '#58b8c8', 0, 1.3, '#2c4458'),
      F('currentRim', 60, 66, '#4a6a88', 0, 1.2),
      F('fangMaelstrom', 78, 42, '#e9f0f4', 0, 0.9),
      F('bubbleSuction', 44, 76, '#8fc3e8', 0, 0.8),
      F('tideCrush', 60, 84, '#58b8c8', 0, 1.2),
      F('veinPressure', 60, 58, '#0c141c', 0, 1.1),
      F('coilAbyssCore', 60, 96, '#1c2c3c', 0, 1.2),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [2, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 38, y: 54 }, boundFeatures: [5] },
      { id: 'armR', parentId: 'root', anchor: { x: 82, y: 50 }, boundFeatures: [3, 4] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 86 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 86 }, boundFeatures: [] },
    ],
  },

  /* ══ 亚特兰蒂斯 (Atlantis) ══ */
  // 白石哨卫: 大理石壳(防御) / 石拳攻击 / 碎石(脆化) — marble sentinel, columns, stars
  'marble-sentinel': {
    kind: 'statue', hue: '#e9eef0', hue2: '#b0bcc2', glow: '#8fc3e8', size: 1.0, eye: 'white',
    features: [
      F('starEtch', 60, 26, '#8fc3e8', 0, 0.85),
      F('runeSigil', 60, 40, '#f0cd7d', 0, 0.75),
      F('shellMarble', 60, 58, '#f2f5f6', 0, 1.1, '#d0d8dc'),
      F('fistCrush', 30, 60, '#e9eef0', 0, 1.05),
      F('crackShell', 78, 50, '#b0bcc2', 6, 0.9),
      F('columnBase', 60, 94, '#c8d0d4', 0, 1),
      F('dustWhite', 60, 100, '#e9eef0', 0, 1),
      F('plateGuard', 74, 66, '#d0d8dc', 0, 0.9),
      F('bootMarble', 48, 88, '#c8d0d4', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [2, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 54 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 78, y: 54 }, boundFeatures: [4, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 86 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 86 }, boundFeatures: [] },
    ],
  },
  // 断柱残影: 古语(虚弱) / 柱影攻击 / 碑文污染(fading-script) — broken column shade
  'broken-column-shade': {
    kind: 'ghost', hue: '#c8d0d4', hue2: '#8a969c', glow: '#8fc3e8', size: 0.85, eye: 'white',
    features: [
      F('crackFractureTop', 60, 26, '#8a969c', 0, 1),
      F('glyphAncientWord', 60, 38, '#8fc3e8', 0, 0.9),
      F('columnBroken', 60, 54, '#d8e0e4', 0, 1.1, '#a0aab0'),
      F('inscriptionRule', 60, 60, '#8fc3e8', 0, 1),
      F('runePollute', 44, 74, '#e34325', 0, 0.8),
      F('shadowDrift', 60, 92, '#8a969c', 0, 1),
      F('prismFragment', 78, 66, '#b0bcc2', 6, 0.8),
      F('mistRuin', 60, 46, '#c8d0d4', 0, 0.9),
      F('dustCrumble', 74, 82, '#8a969c', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [2, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 40, y: 56 }, boundFeatures: [4] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 56 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 84 }, boundFeatures: [5, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 84 }, boundFeatures: [7] },
    ],
  },
  // 浴场歌者: 歌声(涸竭) / 水刃攻击 / 回响(增益) — bath house siren, pearl, echo, marble
  'bath-house-siren': {
    kind: 'humanoid', hue: '#7aa8b8', hue2: '#4a7080', glow: '#8be9d8', size: 0.9, eye: 'glow',
    features: [
      F('echoHalo', 60, 22, '#8be9d8', 0, 1.1),
      F('mouthSinger', 60, 34, '#e9e4d4', 0, 0.8),
      F('bladeWater', 30, 44, '#bfe4f4', 12, 1),
      F('pearlNecklace', 60, 48, '#f2f5f6', 0, 0.8),
      F('veilRipple', 60, 60, '#8ac0d0', 0, 1.1, '#4a7080'),
      F('gemEarring', 76, 34, '#8be9d8', 0, 0.7),
      F('poolMist', 60, 94, '#8be9d8', 0, 1.1),
      F('foamSong', 84, 52, '#bfe4f4', 0, 0.75),
      F('bootBath', 48, 86, '#4a7080', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [4, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 1, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 46 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 48 }, boundFeatures: [7] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 84 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 84 }, boundFeatures: [] },
    ],
  },
  // 沉星议员: 议决(增益) / 星笔攻击 / 议典(防御) — star senate scribe, quill, codex
  'star-senate-scribe': {
    kind: 'humanoid', hue: '#5a6a80', hue2: '#324054', glow: '#f0cd7d', size: 0.9, eye: 'white',
    features: [
      F('ringVote', 60, 20, '#f0cd7d', 0, 1.1),
      F('faceGavel', 60, 34, '#5a6a80', 0, 0.8),
      F('quillStar', 30, 48, '#f0cd7d', -8, 1),
      F('codexArm', 86, 60, '#e9e4d4', 0, 1),
      F('inkWell', 60, 58, '#324054', 0, 0.8),
      F('starInk', 60, 74, '#8fc3e8', 0, 0.9),
      F('robeSenate', 60, 86, '#d8e0e4', 0, 1.05, '#324054'),
      F('runeVerdict', 44, 66, '#f0cd7d', 0, 0.75),
      F('bootToga', 72, 96, '#324054', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [6, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 48 }, boundFeatures: [2, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 86 }, boundFeatures: [5, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 86 }, boundFeatures: [] },
    ],
  },
  // 白石执政官: 执政壁(防御) / 权杖攻击 / 裂纹(脆化) — white stone archon, scepter, star
  'white-stone-archon': {
    kind: 'statue', hue: '#e9eef0', hue2: '#b0bcc2', glow: '#f0cd7d', size: 1.15, eye: 'white',
    features: [
      F('crownGoldLaurel', 60, 12, '#c9a34f', 0, 0.9),
      F('haloCrack', 60, 20, '#b0bcc2', 0, 1.1),
      F('runeRule', 60, 44, '#8fc3e8', 0, 1.05),
      F('robeArchon', 60, 62, '#f2f5f6', 0, 1.15, '#c8d0d4'),
      F('staffScepterStar', 30, 26, '#f0cd7d', -8, 1.15),
      F('orbCrystal', 86, 44, '#8fc3e8', 0, 0.85),
      F('wallCrush', 60, 84, '#d0d8dc', 0, 1.1),
      F('starDust', 60, 100, '#f0cd7d', 0, 1.05),
      F('columnBoot', 48, 90, '#c8d0d4', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [3, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 44 }, boundFeatures: [4] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 48 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 86 }, boundFeatures: [2, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 86 }, boundFeatures: [8] },
    ],
  },
  // 亚特兰蒂斯王庭: BOSS 白石壁(防御) / 王庭锤 / 沉星 / 水压 / 沉城裁决 召唤白石哨卫 — atlantean court
  'atlantean-court': {
    kind: 'gate', hue: '#c8d4da', hue2: '#8a9aa2', glow: '#8fc3e8', size: 1.4, eye: 'red',
    features: [
      F('crownTrident', 60, 12, '#f0cd7d', 0, 0.9),
      F('domeDrowned', 60, 24, '#e9eef0', 0, 1.15, '#8fc3e8'),
      F('archCourt', 60, 50, '#d8e2e6', 0, 1.3, '#a0b0b8'),
      F('starGavelMotes', 60, 38, '#f0cd7d', 0, 1),
      F('crackAll', 60, 62, '#8a9aa2', 0, 1.2),
      F('shieldSentinel', 86, 66, '#c8d4da', 0, 0.9),
      F('crystalSpire', 34, 40, '#bfe4f4', 6, 0.85),
      F('tideFlood', 60, 80, '#58b8c8', 0, 1.2),
      F('columnSilence', 60, 100, '#8a9aa2', 0, 1.1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [2, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [0, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 50 }, boundFeatures: [6, 3] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 88 }, boundFeatures: [7, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 88 }, boundFeatures: [] },
    ],
  },

  // shimmering-water-elemental：海洋深处的闪烁元素 BOSS
  'shimmering-water-elemental': {
    kind: 'brute', hue: '#1a5a7e', hue2: '#0d3b56', glow: '#1ac7ea', size: 1.4, eye: 'glow',
    features: [
      F('crystalCore', 60, 60, '#1ac7ea', 0, 1.3, '#0d3b56'), // 0: 内核晶体·青蓝光芒
      F('waveScaleL', 30, 30, '#1ac7ea', -15, 1.2),            // 1: 左鳞片·波浪纹
      F('waveScaleR', 90, 30, '#1ac7ea', 15, 1.2),             // 2: 右鳞片·波浪纹
      F('abyssalMaw', 60, 34, '#0d3b56', 0, 1.1),              // 3: 深渊巨口
      F('tentacleSpine', 40, 58, '#1a5a7e', 0, 1.3),           // 4: 深渊触手·脊刺
      F('tentacleGrapple', 88, 70, '#0d3b56', 0, 1.15),        // 5: 捕获触手·缠绕
      F('pearlNecklace', 60, 82, '#f2e8bc', 0, 1),             // 6: 深海珍珠项链
      F('vortexWhirlpool', 60, 12, '#1ac7ea', 0, 1.25),        // 7: 漩涡·水流入口
      F('ancientCoral', 30, 20, '#f2e8bc', 0, 0.9),             // 8: 古老珊瑚·粉彩
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [3, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 52 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 52 }, boundFeatures: [2] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [5, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [6] },
    ],
  },
};
