// 怪物外形视觉规格 · 钟楼 + 荒漠 + 陨石遗迹
import { F, type MonsterVisualSpec } from './monsterVisualTypes';

export const VISUALS_F: Record<string, MonsterVisualSpec> = {

  /* ══ 钟楼 (Silent Steeple) ══ */
  // 敲钟侍僧：持小钟与钟槌，环绕回响，攀塔靴，铜制吊索
  'bell-acolyte': {
    kind: 'humanoid', hue: '#8a7350', hue2: '#5c4a30', glow: '#e2ae4f', size: 0.9, eye: 'glow',
    features: [
      F('bellHead', 60, 22, '#e2ae4f', 0, 0.85),
      F('acolyteRobe', 60, 62, '#5c4a30', 0, 1.05, '#3c3020'),
      F('malletHand', 30, 52, '#8a7350', -12, 0.9),
      F('tollRing', 60, 30, '#f0cd7d', 0, 1.15),
      F('brassScaleSash', 86, 56, '#c9a34f', 0, 0.85),
      F('ropeBraid', 34, 70, '#8a6f3f', 0, 0.85),
      F('climbBoot', 60, 94, '#5c4a30', 0, 0.9),
      F('chimeGlyph', 44, 44, '#e34325', 0, 0.75),
      F('hushHalo', 60, 14, '#f0cd7d', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [1, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 24 }, boundFeatures: [0, 3, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 50 }, boundFeatures: [2, 5] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 回响亡魂：钟声余波幽灵，飘渺躯体、寂静之纱、空钟
  'echo-wraith': {
    kind: 'ghost', hue: '#9aa0b8', hue2: '#5c6280', glow: '#f0cd7d', size: 0.85, eye: 'white',
    features: [
      F('echoBody', 60, 54, '#a8aec8', 0, 1.15, '#787e98'),
      F('tollShock', 60, 30, '#f0cd7d', 0, 1.2),
      F('fadeBlade', 30, 60, '#c8ccd8', -14, 1),
      F('driftHem', 60, 94, '#5c6280', 0, 1.1),
      F('afterHalo', 84, 48, '#f0cd7d', 0, 0.85),
      F('hollowBell', 60, 44, '#2c3248', 0, 0.9),
      F('silenceVeil', 60, 18, '#b8bcd0', 0, 0.9),
      F('shroudMist', 40, 72, '#9aa0b8', 0, 1),
      F('wraithGlow', 76, 66, '#f0cd7d', 0, 0.75),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 24 }, boundFeatures: [1, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 52 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 50 }, boundFeatures: [4, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [3, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  // 摆锤刃：钟楼机关，巨大摆锤圆盘 + 刀刃 + 铜齿轮
  'pendulum-blade': {
    kind: 'construct', hue: '#8a6f3f', hue2: '#5c4a28', glow: '#e2ae4f', size: 1.0, eye: 'none',
    features: [
      F('swingOrb', 60, 72, '#c9a34f', 0, 1.25, '#8a6f3f'),
      F('arcRing', 60, 40, '#f0cd7d', 0, 1.25),
      F('bladeEdge', 60, 96, '#cfd3dc', 0, 1.05),
      F('anchorChain', 60, 22, '#6f6a5c', 0, 1.1),
      F('brassGear', 36, 50, '#c9a34f', 0, 0.95),
      F('crackSeam', 88, 46, '#5c4a28', 0, 0.9),
      F('tickGear', 84, 66, '#e2ae4f', 0, 0.85),
      F('bellClasp', 60, 58, '#8a6f3f', 0, 0.85),
      F('brassScalePlate', 44, 82, '#c9a34f', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [3, 1] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 50 }, boundFeatures: [4] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 52 }, boundFeatures: [5, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [2, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  // 钟卫：守钟骑士，钟槌大锤、青铜甲、钟形盾、召唤亡魂
  'bell-warden': {
    kind: 'knight', hue: '#7a5c34', hue2: '#4a3820', glow: '#e2ae4f', size: 1.1, eye: 'red',
    features: [
      F('tollHammer', 30, 30, '#c9a34f', 12, 1.15),
      F('chimeHalo', 60, 16, '#e2ae4f', 0, 1),
      F('bronzePlate', 60, 60, '#8a6f3f', 0, 1.15, '#5c4a28'),
      F('wraithCaller', 86, 54, '#9aa0b8', 0, 0.9),
      F('ropeGrip', 34, 70, '#6f6a5c', 0, 0.8),
      F('dutyBoot', 60, 96, '#4a3820', 0, 1),
      F('bellShield', 78, 40, '#c9a34f', 0, 1.05),
      F('echoPlume', 60, 8, '#f0cd7d', 0, 0.85),
      F('brassScaleGorget', 60, 42, '#c9a34f', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [2, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [1, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 46 }, boundFeatures: [0, 4] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 48 }, boundFeatures: [3, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 寂静之王：钟楼首领，破碎巨钟、静默王冠、青铜之门、寂灭王槌
  'silent-king': {
    kind: 'gate', hue: '#5c4a34', hue2: '#322818', glow: '#e2ae4f', size: 1.4, eye: 'white',
    features: [
      F('muteCrown', 60, 14, '#c9a34f', 0, 1.05),
      F('crackedBell', 60, 34, '#8a6f3f', 0, 1.1),
      F('kingMalletHammer', 30, 40, '#c9a34f', -8, 1.15),
      F('silenceHalo', 60, 24, '#f0cd7d', 0, 1.15),
      F('bronzeGate', 60, 74, '#5c4a34', 0, 1.25, '#322818'),
      F('deathMark', 60, 56, '#e34325', 0, 0.9),
      F('hushStep', 60, 98, '#322818', 0, 1.1),
      F('bellTower', 86, 30, '#8a6f3f', 0, 1.05),
      F('echoChain', 36, 64, '#6f6a5c', 0, 0.95),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [4, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [0, 3] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 48 }, boundFeatures: [2, 8] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 44 }, boundFeatures: [1, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 90 }, boundFeatures: [] },
    ],
  },

  /* ══ 荒漠 (Sand Frontier) ══ */
  // 沙虫：潜伏爆发，巨颚利齿、脊鳞、沙尘漩涡、断尾
  'sand-worm': {
    kind: 'worm', hue: '#c9a05c', hue2: '#8a6a34', glow: '#e0a43f', size: 1.1, eye: 'red',
    features: [
      F('burrowJaw', 32, 66, '#e8d8b0', 0, 1.2),
      F('ridgeScale', 60, 36, '#8a6a34', 0, 1.2),
      F('sandFang', 34, 72, '#fff3d9', 0, 1),
      F('duneCoil', 60, 90, '#a8854a', 0, 1.05),
      F('sandVortex', 60, 22, '#e0c084', 0, 1.1),
      F('brokenTail', 90, 78, '#8a6a34', 14, 1),
      F('gritDust', 44, 84, '#c9a05c', 0, 1),
      F('heatShimmer', 60, 48, '#e0a43f', 0, 0.9),
      F('amberGaze', 40, 56, '#ffcf5e', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [1, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 38, y: 64 }, boundFeatures: [0, 2, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 44 }, boundFeatures: [4] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 70 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [3, 6] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 荒漠掠夺者：弯刀劫掠者，沙巾蒙面、掠货鞍袋、扬沙致盲
  'desert-raider': {
    kind: 'humanoid', hue: '#a8854a', hue2: '#6a5428', glow: '#e0a43f', size: 0.95, eye: 'red',
    features: [
      F('raiderBlade', 30, 38, '#cfd3dc', 16, 1.05),
      F('sandVeilHood', 60, 24, '#c9a86c', 0, 1),
      F('lootSaddle', 88, 70, '#8a6a34', 0, 0.9),
      F('dustBoot', 60, 94, '#6a5428', 0, 1),
      F('sunScar', 60, 56, '#6a5428', 0, 0.9),
      F('blindSandCloud', 60, 34, '#e0c084', 0, 1.05),
      F('goldCoinPouch', 60, 74, '#e0a43f', 0, 0.85),
      F('scarfCloak', 60, 62, '#a8854a', 0, 1.05, '#6a5428'),
      F('gripHand', 34, 60, '#a8854a', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [7, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [1, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 46 }, boundFeatures: [0, 8] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 56 }, boundFeatures: [2, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [3] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 沙岩巨人：岩甲构装体，砂岩板甲、碾压巨拳、象形铭文、侵蚀之面
  'sandstone-golem': {
    kind: 'construct', hue: '#b08a4c', hue2: '#7a5c2c', glow: '#e0a43f', size: 1.15, eye: 'red',
    features: [
      F('rockPlate', 60, 56, '#c9a05c', 0, 1.25, '#a8854a'),
      F('crusherFist', 30, 64, '#c9a05c', 0, 1.1),
      F('hardCore', 60, 46, '#e0a43f', 0, 0.8),
      F('erosionCrack', 60, 30, '#7a5c2c', 0, 1),
      F('sandSeam', 60, 78, '#7a5c2c', 0, 1.1),
      F('dustTrail', 60, 96, '#a8854a', 0, 1.1),
      F('glyphPlate', 82, 40, '#f0cd7d', 0, 0.9),
      F('desertRune', 44, 34, '#e0a43f', 0, 0.8),
      F('stonePalm', 88, 62, '#c9a05c', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [3, 2, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 52 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 48 }, boundFeatures: [6, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  // 干尸祭司：干裂发黄黑绷带紧裹的类人干尸，空洞眼眶燃烧幽绿火焰，
  // 手持圣甲虫权杖刻满古老祷文，绷带黏沙，散发沙漠干热与腐朽气息
  'mummified-priest': {
    kind: 'humanoid', hue: '#c9b890', hue2: '#8a7a54', glow: '#8fae3c', size: 0.95, eye: 'slit',
    features: [
      F('bandageWrap', 60, 60, '#e0d4b0', 0, 1.15, '#b8a878'),
      F('flameGreenSocket', 60, 30, '#8fae3c', 0, 1),
      F('scepterScarabStaff', 30, 46, '#c9a34f', 8, 1.2),
      F('glyphPrayerRune', 44, 52, '#8fae3c', 0, 0.8),
      F('bandageLayerStrap', 60, 74, '#e0d4b0', 0, 1.1),
      F('dustSand', 78, 66, '#a8946c', 0, 1),
      F('plateDecayTorso', 60, 48, '#8a7a54', 0, 0.95),
      F('gauntBandageArm', 84, 52, '#c9b890', 0, 0.85),
      F('sandBleedStep', 60, 96, '#a8946c', 0, 1.1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [1] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 46 }, boundFeatures: [2, 3] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 50 }, boundFeatures: [7, 5] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [4, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 沙蝎：毒尾螫击，甲壳背脊、钳夹、蓄力毒尾、掘沙足
  'sand-scorpion': {
    kind: 'scorpion', hue: '#b08a4c', hue2: '#7a5c2c', glow: '#e0a43f', size: 0.9, eye: 'red',
    features: [
      F('venomTail', 88, 28, '#8fae3c', -20, 1.15),
      F('gripPincer', 32, 62, '#c9a05c', 0, 1.05),
      F('ridgeShell', 60, 54, '#a8854a', 0, 1.05),
      F('burrowClaw', 76, 64, '#c9a05c', 0, 0.95),
      F('chargeGlow', 60, 44, '#e0a43f', 0, 0.9),
      F('sandSpray', 60, 96, '#e0c084', 0, 1),
      F('chitinPlate', 60, 70, '#c9a05c', 0, 0.9),
      F('venomDrop', 84, 20, '#8fae3c', 0, 0.7),
      F('legCluster', 44, 84, '#7a5c2c', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [2, 4, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 40, y: 52 }, boundFeatures: [] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 60 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 30 }, boundFeatures: [0, 3, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [5, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 沙暴亡灵：卷沙幽魂，漩涡躯体、砾风、磨蚀护甲、沙尘光环
  'sandstorm-wraith': {
    kind: 'ghost', hue: '#d8c090', hue2: '#a8905c', glow: '#e0a43f', size: 0.9, eye: 'red',
    features: [
      F('vortexBody', 60, 54, '#e0c898', 0, 1.15, '#c9b078'),
      F('gritArc', 60, 40, '#e8d8b0', 0, 1.2),
      F('erodeHem', 60, 92, '#a8905c', 0, 1.1),
      F('wraithGlow', 60, 34, '#ffcf5e', 0, 0.8),
      F('armorScaleGrind', 40, 56, '#a8905c', 0, 0.9),
      F('dustWake', 60, 100, '#c9b078', 0, 1.1),
      F('sandHalo', 60, 20, '#e0c084', 0, 1),
      F('gustClaw', 82, 52, '#d8c090', 0, 0.9),
      F('sandMistVeil', 44, 74, '#e0c898', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [3, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 38, y: 50 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 82, y: 52 }, boundFeatures: [7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [2, 5, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 90 }, boundFeatures: [] },
    ],
  },
  // 沙丘暴君：狂暴战酋，双弯刀、烈日灼身、金冠、战怒之羽
  'dune-tyrant': {
    kind: 'brute', hue: '#8a5c2c', hue2: '#5c3a14', glow: '#e0a43f', size: 1.15, eye: 'red',
    features: [
      F('twinScimitarBlade', 30, 34, '#cfd3dc', 20, 1.1),
      F('sunScorch', 60, 50, '#e34325', 0, 1),
      F('ragePlume', 60, 16, '#e0a43f', 0, 0.9),
      F('duneSashBelt', 60, 74, '#a87a3c', 0, 1),
      F('ironFang', 60, 40, '#5c3a14', 0, 0.9),
      F('stompDust', 60, 94, '#a8854a', 0, 1.1),
      F('goldCrown', 60, 8, '#f0cd7d', 0, 0.85),
      F('scarredFist', 88, 52, '#8a5c2c', 0, 1),
      F('scimitarBlade', 90, 34, '#cfd3dc', -20, 1.1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [3, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [2, 6, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 44 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 44 }, boundFeatures: [8, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 84 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 84 }, boundFeatures: [] },
    ],
  },
  // 沙王：荒漠首领，沙戟、流沙屏障、沙暴光环、沙丘王座、召唤沙暴亡灵
  'sand-sovereign': {
    kind: 'gate', hue: '#c9a86c', hue2: '#8a6a34', glow: '#e0a43f', size: 1.45, eye: 'red',
    features: [
      F('halberdStaff', 30, 22, '#e0a43f', 8, 1.25),
      F('sandCrown', 60, 14, '#f0cd7d', 0, 1),
      F('duneThrone', 60, 84, '#a8854a', 0, 1.25),
      F('barrierWall', 60, 66, '#e0c898', 0, 1.15),
      F('stormHalo', 60, 30, '#e0a43f', 0, 1.2),
      F('sovereignMantle', 60, 54, '#8a6a34', 0, 1.15, '#c9a86c'),
      F('wraithEcho', 88, 40, '#d8c090', 0, 0.9),
      F('desertSeal', 36, 48, '#f0cd7d', 0, 0.9),
      F('goldenChain', 60, 76, '#c9a34f', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [5, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [1, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 38 }, boundFeatures: [0, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 42 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [2, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },

  /* ══ 陨石遗迹 (Meteor Ruins) ══ */
  // 陨星侍从：陨能充能施法者，充能核心、星壳、虚空印记、陨能爆发拳
  'meteor-acolyte': {
    kind: 'humanoid', hue: '#4c4470', hue2: '#2c2648', glow: '#8fc3e8', size: 0.9, eye: 'glow',
    features: [
      F('chargeCore', 60, 52, '#8fc3e8', 0, 0.9),
      F('starShell', 86, 60, '#5c5488', 0, 0.9),
      F('acolyteCloak', 60, 68, '#5c5488', 0, 1.1, '#363054'),
      F('burstFist', 30, 62, '#e8f4ff', 0, 0.9),
      F('starCrest', 60, 24, '#f0cd7d', 0, 0.9),
      F('orbitDust', 60, 90, '#8fc3e8', 0, 1.1),
      F('voidMark', 44, 40, '#ff4fd8', 0, 0.75),
      F('meteorShard', 82, 44, '#b8a8e0', 0, 0.85),
      F('cosmicGlow', 60, 14, '#8fc3e8', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [0, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [4, 6, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 54 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 52 }, boundFeatures: [1, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 虚空猎犬：相位瞬袭，虚空裂隙、暗影皮毛、宇宙嚎叫、无声爪
  'void-hound': {
    kind: 'wolf', hue: '#3c3450', hue2: '#1c1630', glow: '#8fc3e8', size: 0.95, eye: 'red',
    features: [
      F('phaseRiftCrack', 60, 52, '#8fc3e8', 0, 1.1),
      F('blinkMuzzle', 32, 58, '#2c2640', 0, 0.9),
      F('trackStar', 60, 26, '#f0cd7d', 0, 0.8),
      F('darkFur', 60, 64, '#2c2640', 0, 1.15, '#1c1630'),
      F('silentPaw', 60, 92, '#1c1630', 0, 1),
      F('twinShadow', 84, 84, '#3c3450', 0, 1),
      F('cosmicHowl', 46, 36, '#ff4fd8', 0, 0.85),
      F('voidClaw', 34, 78, '#3c3450', 0, 0.95),
      F('phaseMist', 78, 48, '#8fc3e8', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 36, y: 48 }, boundFeatures: [1, 2, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 74 }, boundFeatures: [7] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 72 }, boundFeatures: [5, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 60, y: 90 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  // 星骸骑士：吸收陨能，星骸铠、星刃、水晶护肩、轨道光环
  'starbone-knight': {
    kind: 'knight', hue: '#5a5478', hue2: '#322e48', glow: '#f0cd7d', size: 1.1, eye: 'white',
    features: [
      F('starboneMail', 60, 58, '#6a6488', 0, 1.1, '#4a4468'),
      F('absorbCore', 60, 48, '#8fc3e8', 0, 0.9),
      F('starBlade', 30, 26, '#f0cd7d', 8, 1.15),
      F('helmCrest', 60, 14, '#f0cd7d', 0, 0.9),
      F('orbitalHalo', 60, 22, '#8fc3e8', 0, 1.1),
      F('boneDust', 60, 94, '#8a82a8', 0, 1),
      F('crystalPauldron', 84, 40, '#b8a8e0', 0, 0.95),
      F('meteorShard', 40, 72, '#5c5488', 0, 0.85),
      F('starGlyph', 78, 66, '#f0cd7d', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [3, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 42 }, boundFeatures: [2, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 44 }, boundFeatures: [6, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [] },
    ],
  },
  // 裂界术士：宇蚀施法，裂界之手、织隙纺轮、宇蚀之纹、维度撕裂
  riftweaver: {
    kind: 'humanoid', hue: '#4a3c6a', hue2: '#281e40', glow: '#8fc3e8', size: 0.95, eye: 'red',
    features: [
      F('riftHand', 60, 62, '#8fc3e8', 0, 1),
      F('weaveLoom', 86, 50, '#5c5488', 0, 1),
      F('erosionVein', 60, 50, '#ff4fd8', 0, 1),
      F('scorchCuff', 34, 68, '#e34325', 0, 0.9),
      F('weaverHood', 60, 24, '#281e40', 0, 0.95),
      F('threadVine', 60, 94, '#8fc3e8', 0, 1.1),
      F('dimensionTear', 74, 36, '#ff4fd8', 0, 0.8),
      F('cosmicRobe', 60, 72, '#4a3c6a', 0, 1.1, '#281e40'),
      F('voidOrb', 40, 44, '#8fc3e8', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [7, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [4, 6, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 56 }, boundFeatures: [3, 0] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 50 }, boundFeatures: [1] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  // 宇蚀巨兽：宇能汇聚，庞大躯体、宇蚀爆发、陨壳、星裂、饥饿巨口
  'cosmic-behemoth': {
    kind: 'brute', hue: '#3a3450', hue2: '#1c1830', glow: '#ff4fd8', size: 1.2, eye: 'red',
    features: [
      F('behemothPlate', 60, 60, '#4a4468', 0, 1.25, '#2c2648'),
      F('erosionBurst', 60, 44, '#ff4fd8', 0, 1.1),
      F('meteorShell', 84, 56, '#5c5488', 0, 1),
      F('crushStomp', 60, 94, '#1c1830', 0, 1.2),
      F('starCrack', 60, 72, '#8fc3e8', 0, 1.1),
      F('hungerMaw', 34, 62, '#2c2648', 0, 1.05),
      F('cosmicPlate', 60, 32, '#5c5488', 0, 1.1),
      F('voidPulse', 76, 40, '#ff4fd8', 0, 0.85),
      F('gatherOrb', 44, 40, '#8fc3e8', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 34 }, boundFeatures: [1, 6, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 54 }, boundFeatures: [5] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 50 }, boundFeatures: [2, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [3] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  // 终焉守门者：终焉之门守卫，门之护盾、终焉重锤、门缝宇蚀、召唤虚空猎犬
  'terminus-warden': {
    kind: 'knight', hue: '#4a4468', hue2: '#282240', glow: '#8fc3e8', size: 1.15, eye: 'slit',
    features: [
      F('gateAegis', 88, 58, '#5c5488', 0, 1.1, '#322e48'),
      F('terminusMaulHammer', 30, 28, '#8a8f9c', 12, 1.15),
      F('seamErosion', 60, 50, '#ff4fd8', 0, 1),
      F('wardenHelm', 60, 22, '#5c5488', 0, 0.95),
      F('echoHound', 60, 90, '#8fc3e8', 0, 0.9),
      F('collapseDust', 60, 98, '#322e48', 0, 1.1),
      F('cosmicShield', 78, 40, '#8fc3e8', 0, 0.9),
      F('voidBanner', 44, 14, '#ff4fd8', 0, 0.75),
      F('gatePlate', 60, 62, '#4a4468', 0, 1.15, '#282240'),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [8, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [3, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 40 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 48 }, boundFeatures: [0, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [5, 4] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  // 终焉（世界终结者）· 最终 Boss · 玄武岩灰黑龟裂身躯、暗金熔岩血、
  // 石笋骨刺、古老龙纹、星云双目、黑曜石鳞翼、山脊巨爪、钟乳石尾锤、枯木龙角、突出巨牙
  'world-ender': {
    kind: 'dragon', hue: '#241c38', hue2: '#120c20', glow: '#ff4fd8', size: 1.8, eye: 'red',
    features: [
      F('crackBasalt', 60, 60, '#3a3450', 0, 1.4, '#1c1630'), // 0 玄武岩龟裂身躯·暗金熔岩
      F('wingObsidian', 30, 30, '#2c2648', -12, 1.4),                  // 1 黑曜石鳞翼·左
      F('wingObsidianR', 90, 30, '#2c2648', 12, 1.4),                  // 2 黑曜石鳞翼·右
      F('eyeNebula', 60, 30, '#ff4fd8', 0, 1),                     // 3 星云双目
      F('spikeStalagmite', 60, 44, '#8fc3e8', 0, 1.25),               // 4 石笋骨刺
      F('tailStalactite', 88, 92, '#120c20', 0, 1.3),                 // 5 钟乳石尾锤
      F('crestMountain', 34, 84, '#241c38', 0, 1.3),                   // 6 山脊巨爪·左
      F('hornDeadwood', 60, 12, '#5c5478', 0, 1.2),                   // 7 枯木龙角
      F('fangJut', 46, 42, '#e8f4ff', 0, 1.1),                        // 8 突出巨牙
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [3, 7, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 34 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 92, y: 34 }, boundFeatures: [2] },
      { id: 'legL', parentId: 'root', anchor: { x: 36, y: 82 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 84, y: 82 }, boundFeatures: [5] },
    ],
  },
};
