// 怪物外形视觉规格 · 后半（第三幕之后 + 旧日余响）
import { F, type MonsterVisualSpec } from './monsterVisualTypes';

export const VISUALS_B: Record<string, MonsterVisualSpec> = {
  /* ══ 天空岛 ══ */
  'cloud-whale-calf': {
    kind: 'whale', hue: '#e9e4d4', hue2: '#c0c8d8', glow: '#8fc3e8', size: 1.1, eye: 'glow',
    features: [
      F('puffBody', 60, 60, '#f2eee0', 0, 1.15, '#c0c8d8'),
      F('bubbleSack', 44, 74, '#8fc3e8', 0, 0.9),
      F('flukeTail', 90, 70, '#e9e4d4', 14),
      F('mistBlow', 32, 50, '#c0c8d8', 0, 0.9),
      F('dimpleCheek', 40, 60, '#e8f4ff', 0, 0.7),
      F('floatHalo', 60, 24, '#8fc3e8', 0, 1),
    ],
  },
  'gale-harrier': {
    kind: 'bird', hue: '#c0c8d8', hue2: '#8a92a8', glow: '#8fc3e8', size: 0.9, eye: 'red',
    features: [
      F('diveWings', 60, 40, '#dfe9ee', 0, 1.1, '#8a92a8'),
      F('windRake', 60, 78, '#e8f4ff', 0, 1.1),
      F('circleTrail', 60, 26, '#8fc3e8', 0, 1),
      F('hookBeak', 34, 48, '#e2ae4f', 0, 0.9),
      F('streamFeather', 74, 34, '#c0c8d8', 0, 1),
      F('fastShadow', 60, 94, '#8a92a8', 0, 1),
    ],
  },
  'skystone-sentry': {
    kind: 'statue', hue: '#8a92a8', hue2: '#5c6474', glow: '#8fc3e8', size: 1.05, eye: 'glow',
    features: [
      F('floatPebbles', 60, 18, '#8a92a8', 0, 1),
      F('shellStone', 60, 60, '#8a92a8', 0, 1.1, '#5c6474'),
      F('slamArm', 30, 56, '#a8b0c0', 0, 1),
      F('weightlessHem', 60, 92, '#5c6474', 0, 1),
      F('levitateEye', 60, 30, '#8fc3e8', 0, 0.8),
      F('dustUp', 60, 98, '#a8b0c0', 0, 1),
    ],
  },
  'white-wing-warden': {
    kind: 'knight', hue: '#e9e4d4', hue2: '#c0c8d8', glow: '#8fc3e8', size: 1, eye: 'slit',
    features: [
      F('lockOnEye', 60, 28, '#ff6a45', 0, 0.8),
      F('spearStand', 30, 20, '#f2eee0', 10, 1.2),
      F('featherShield', 88, 60, '#e9e4d4', 0, 1, '#c0c8d8'),
      F('wingPauldron', 60, 44, '#f2eee0', 0, 1),
      F('gustSash', 60, 76, '#8fc3e8', 0, 1),
      F('windBoots', 60, 94, '#c0c8d8', 0, 0.9),
    ],
  },
  'storm-shepherd': {
    kind: 'humanoid', hue: '#5c6a8a', hue2: '#363c54', glow: '#e2ae4f', size: 1.1, eye: 'glow',
    features: [
      F('thunderWhip', 30, 30, '#e2ae4f', 12, 1.2),
      F('shepherdCape', 60, 64, '#4a5678', 0, 1.15, '#363c54'),
      F('gatherRing', 60, 20, '#8fc3e8', 0, 1.1),
      F('staffCrook', 86, 34, '#8a7350', 0, 1.1),
      F('cloudSleeve', 34, 66, '#8a92a8', 0, 0.9),
      F('windWall', 60, 88, '#8fc3e8', 0, 1.1),
    ],
  },
  'sky-lock-bridge': {
    kind: 'gate', hue: '#8a92a8', hue2: '#5c6474', glow: '#8fc3e8', size: 1.3, eye: 'red',
    features: [
      F('suspensionChain', 60, 20, '#5c6474', 0, 1.2),
      F('giantAnchor', 30, 50, '#8a8f9c', 0, 1.1),
      F('bridgeDeck', 60, 76, '#a8b0c0', 0, 1.2, '#5c6474'),
      F('breakLink', 84, 34, '#e8f4ff', 0, 0.9),
      F('lockGates', 60, 60, '#5c6474', 0, 1),
      F('freefallMist', 60, 98, '#c0c8d8', 0, 1.1),
    ],
  },

  /* ══ 贵族城堡 ══ */
  'silver-guard': {
    kind: 'knight', hue: '#c0c8d8', hue2: '#8a92a8', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('silverAegis', 88, 58, '#e9e4d4', 0, 1, '#8a92a8'),
      F('swordLine', 30, 32, '#f2eee0', 8, 1.1),
      F('pierceScar', 60, 60, '#8a92a8', 0, 1),
      F('silverPlume', 60, 14, '#e9e4d4', 0, 0.9),
      F('stepShadow', 60, 94, '#5c6474', 0, 1),
      F('crestEagle', 60, 48, '#f0cd7d', 0, 0.8),
    ],
  },
  'feast-hound': {
    kind: 'wolf', hue: '#8a6a4c', hue2: '#5c422c', glow: '#f0cd7d', size: 1, eye: 'red',
    features: [
      F('goldCollar', 44, 56, '#e2ae4f', 0, 1),
      F('feastRing', 60, 92, '#e9e4d4', 0, 0.9),
      F('polishedCoat', 60, 52, '#a8845c', 0, 1),
      F('huntRing', 60, 28, '#f0cd7d', 0, 1),
      F('tongueOut', 34, 64, '#c96a4f', 0, 0.8),
      F('banquetStain', 70, 68, '#8a2c22', 0, 0.9),
    ],
  },
  'court-poisoner': {
    kind: 'humanoid', hue: '#4c4270', hue2: '#2c2448', glow: '#8fae3c', size: 0.95, eye: 'slit',
    features: [
      F('gobletHand', 30, 56, '#c9a34f', 0, 0.9),
      F('incenseVeil', 60, 40, '#8fae3c', 0, 1),
      F('daggerSleeve', 86, 66, '#cfd3dc', 0, 0.8),
      F('pearlRow', 60, 52, '#e9e4d4', 0, 0.9),
      F('smilePoison', 60, 34, '#2c2448', 0, 0.8),
      F('courtFan', 60, 74, '#5c5488', 0, 0.9),
    ],
  },
  'heraldic-knight': {
    kind: 'knight', hue: '#8a4c9c', hue2: '#4c2c5c', glow: '#f0cd7d', size: 1.1, eye: 'white',
    features: [
      F('heraldicShield', 88, 58, '#e9e4d4', 0, 1, '#8a4c9c'),
      F('oathSash', 60, 62, '#e2ae4f', 0, 1),
      F('lanceLivery', 30, 24, '#cfd3dc', 10, 1.15),
      F('plumeSplit', 60, 12, '#e9e4d4', 0, 0.9),
      F('swearHand', 34, 72, '#8a4c9c', 0, 0.9),
      F('polishedHelm', 60, 26, '#e9e4d4', 0, 0.9),
    ],
  },
  'castellan': {
    kind: 'humanoid', hue: '#5c4c6e', hue2: '#362c48', glow: '#f0cd7d', size: 1.1, eye: 'slit',
    features: [
      F('ledgerArm', 86, 60, '#e9e4d4', 0, 1),
      F('keyRing', 60, 80, '#c9a34f', 0, 1),
      F('scepterSeal', 30, 40, '#c9a34f', 0, 1),
      F('collectRing', 60, 30, '#f0cd7d', 0, 0.9),
      F('starchSleeve', 34, 66, '#e9e4d4', 0, 0.9),
      F('towerBoots', 60, 94, '#362c48', 0, 0.9),
    ],
  },
  'throneless-heir': {
    kind: 'gate', hue: '#6a5c8a', hue2: '#3c3454', glow: '#f0cd7d', size: 1.3, eye: 'white',
    features: [
      F('emptyThrone', 60, 50, '#8a7cac', 0, 1.25, '#4c4270'),
      F('ghostCrown', 60, 24, '#e2ae4f', 0, 1),
      F('familyBlade', 60, 70, '#e9e4d4', 0, 1.1),
      F('betrayalCrack', 60, 60, '#e34325', 0, 1),
      F('courtShadows', 60, 94, '#3c3454', 0, 1.2),
      F('bloodWine', 84, 66, '#8a2c22', 0, 0.8),
      F('lineageGlow', 60, 40, '#f0cd7d', 0, 1.1),
    ],
  },

  /* ══ 城堡地下墓道 ══ */
  'crypt-ossuary': {
    kind: 'statue', hue: '#d8cbb0', hue2: '#a89878', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('femurMaul', 30, 34, '#e9e4d4', 14, 1.1),
      F('boneShelf', 88, 50, '#cbbfa4', 0, 1.1),
      F('skullLantern', 60, 18, '#f0cd7d', 0, 0.8),
      F('crackJoint', 60, 64, '#a89878', 0, 1),
      F('guardPosture', 60, 84, '#3a3226', 0, 1),
      F('mothDust', 60, 94, '#8a8268', 0, 1),
    ],
  },
  'wax-sealed-corpse': {
    kind: 'humanoid', hue: '#e8e0c8', hue2: '#b8b098', glow: '#8fae3c', size: 0.95, eye: 'none',
    features: [
      F('waxShell', 60, 58, '#f2ead4', 0, 1.1, '#d8d0b8'),
      F('waxSeal', 60, 40, '#8a2c22', 0, 0.8),
      F('dripWax', 60, 94, '#f2ead4', 0, 1.1),
      F('stiffArm', 30, 62, '#d8d0b8', 0, 1),
      F('venomPeele', 74, 66, '#8fae3c', 0, 0.9),
      F('crackFace', 60, 34, '#b8b098', 0, 0.8),
    ],
  },
  'nameless-echo': {
    kind: 'ghost', hue: '#8a8298', hue2: '#5c5468', glow: '#c9a34f', size: 0.95, eye: 'white',
    features: [
      F('blankFace', 60, 30, '#a8a0b8', 0, 1),
      F('whisperRings', 60, 44, '#c9a34f', 0, 1.1),
      F('erasedName', 60, 58, '#5c5468', 0, 0.9),
      F('fadeHem', 60, 92, '#5c5468', 0, 1.1),
      F('echoTail', 86, 66, '#a8a0b8', 0, 1),
      F('forgetMist', 60, 20, '#8a8298', 0, 1),
    ],
  },
  'tomb-stair-guard': {
    kind: 'knight', hue: '#6a6458', hue2: '#423e34', glow: '#f0cd7d', size: 1.05, eye: 'white',
    features: [
      F('stairHalberd', 30, 20, '#8a8f9c', 12, 1.2),
      F('stepPlate', 60, 60, '#7a7468', 0, 1),
      F('lanternDuty', 88, 56, '#f0cd7d', 0, 0.8),
      F('pressedMouth', 60, 38, '#423e34', 0, 0.8),
      F('cuffChain', 34, 70, '#6a6458', 0, 0.9),
      F('stairShadow', 60, 94, '#423e34', 0, 1.1),
    ],
  },
  'first-interred': {
    kind: 'humanoid', hue: '#8a7c5c', hue2: '#544a34', glow: '#e2ae4f', size: 1.1, eye: 'glow',
    features: [
      F('royalBlood', 60, 52, '#e2ae4f', 0, 0.9),
      F('burialSword', 86, 30, '#cfd3dc', -14, 1.15),
      F('shroudRibbon', 60, 40, '#e9e4d4', 0, 0.9),
      F('wakeGesture', 30, 58, '#8a7c5c', 0, 0.9),
      F('crownTassel', 60, 16, '#e2ae4f', 0, 0.8),
      F('oldGrave', 60, 94, '#544a34', 0, 1),
    ],
  },
  'underground-king-gate': {
    kind: 'gate', hue: '#7a7468', hue2: '#48443a', glow: '#f0cd7d', size: 1.3, eye: 'red',
    features: [
      F('tombDoor', 60, 54, '#8a8478', 0, 1.25, '#5a5448'),
      F('sealGlyph', 60, 30, '#e2ae4f', 0, 1),
      F('doorMaul', 30, 44, '#8a8f9c', 0, 1.1),
      F('crackStone', 84, 70, '#48443a', 0, 1),
      F('boneEcho', 60, 94, '#d8cbb0', 0, 1.1),
      F('descendLight', 60, 84, '#f0cd7d', 0, 0.9),
    ],
  },

  /* ══ 冥界 ══ */
  'pale-flame-wisp': {
    kind: 'ghost', hue: '#8be9d8', hue2: '#4aa89c', glow: '#8be9d8', size: 0.85, eye: 'glow',
    features: [
      F('coldFlame', 60, 34, '#8be9d8', 0, 1.1, '#4aa89c'),
      F('wispTail', 60, 84, '#8be9d8', 0, 1.1),
      F('scorchTouch', 44, 56, '#e9f8f4', 0, 0.9),
      F('shadowCore', 60, 52, '#2a3a38', 0, 0.8),
      F('driftHaze', 60, 20, '#bfe8e0', 0, 1),
      F('flickerRing', 60, 46, '#e9f8f4', 0, 1),
    ],
  },
  'market-of-the-dead-broker': {
    kind: 'humanoid', hue: '#4a5460', hue2: '#2a323c', glow: '#8be9d8', size: 1, eye: 'slit',
    features: [
      F('brassScale', 30, 50, '#c9a34f', 0, 1),
      F('tollTag', 60, 58, '#8be9d8', 0, 0.9),
      F('ledgerSmile', 60, 34, '#2a323c', 0, 0.8),
      F('dealFingers', 86, 68, '#5a6470', 0, 0.8),
      F('stallHood', 60, 22, '#3a4450', 0, 0.9),
      F('scaleChimes', 60, 90, '#c9a34f', 0, 1),
    ],
  },
  'dirge-stone': {
    kind: 'statue', hue: '#5c6a68', hue2: '#36403e', glow: '#8be9d8', size: 1.1, eye: 'none',
    features: [
      F('stonyHush', 60, 60, '#6a7876', 0, 1.15, '#48544f'),
      F('dirgeRings', 60, 26, '#8be9d8', 0, 1.1),
      F('stonePalm', 30, 64, '#7a8886', 0, 0.9),
      F('mossMourner', 60, 44, '#4a6a54', 0, 0.9),
      F('graveBase', 60, 94, '#36403e', 0, 1.1),
      F('hollowEye', 60, 30, '#222a28', 0, 0.8),
    ],
  },
  'soul-shackler': {
    kind: 'humanoid', hue: '#3c4454', hue2: '#222834', glow: '#c9a34f', size: 1, eye: 'slit',
    features: [
      F('shackleChain', 60, 70, '#8a8f9c', 0, 1.1),
      F('soulHooks', 60, 40, '#c9a34f', 0, 1),
      F('sealKnuckle', 34, 62, '#e2ae4f', 0, 0.9),
      F('coldGrip', 86, 66, '#3c4454', 0, 0.9),
      F('pactScroll', 60, 84, '#e9e4d4', 0, 0.9),
      F('chainHiss', 60, 24, '#8a8f9c', 0, 1),
    ],
  },
  'lord-of-cold-hearth': {
    kind: 'statue', hue: '#4a5460', hue2: '#2a323c', glow: '#8be9d8', size: 1.25, eye: 'glow',
    features: [
      F('coldFlame', 60, 20, '#8be9d8', 0, 1),
      F('hearthHalo', 60, 40, '#4aa89c', 0, 1.15),
      F('stepHammer', 30, 34, '#8a8f9c', 10, 1.1),
      F('frozenEmber', 60, 58, '#e9f8f4', 0, 0.8),
      F('ashCrown', 60, 14, '#5a6470', 0, 0.9),
      F('wallHush', 60, 90, '#2a323c', 0, 1.1),
    ],
  },
  'broken-stair-of-hades': {
    kind: 'gate', hue: '#4a5460', hue2: '#28303a', glow: '#8be9d8', size: 1.3, eye: 'red',
    features: [
      F('stairBody', 60, 54, '#5a6470', 0, 1.25, '#3a4450'),
      F('wispHole', 44, 40, '#8be9d8', 0, 1),
      F('shatterStep', 74, 72, '#28303a', 0, 1),
      F('descentChain', 88, 30, '#8a8f9c', 0, 1.1),
      F('judgeGlow', 60, 18, '#c9a34f', 0, 1),
      F('wallOfDead', 60, 96, '#28303a', 0, 1.1),
    ],
  },

  /* ══ 幽冥渡口 ══ */
  'lethe-boatman': {
    kind: 'humanoid', hue: '#2c3440', hue2: '#181c24', glow: '#58b8c8', size: 1, eye: 'white',
    features: [
      F('longOar', 30, 26, '#5c6470', 8, 1.2),
      F('blackBoat', 60, 92, '#181c24', 0, 1.1),
      F('forgetMist', 60, 30, '#58b8c8', 0, 1),
      F('strawBoater', 60, 16, '#3a4450', 0, 0.9),
      F('waterGrip', 86, 66, '#2c3440', 0, 0.8),
      F('tollCoin', 60, 56, '#c9a34f', 0, 0.7),
    ],
  },
  'paper-lantern-shade': {
    kind: 'ghost', hue: '#e8a860', hue2: '#a86a34', glow: '#f0cd7d', size: 0.9, eye: 'glow',
    features: [
      F('lanternBody', 60, 44, '#f0b878', 0, 1, '#e8a860'),
      F('flameFlicker', 60, 34, '#f7e3ae', 0, 0.8),
      F('shadeHem', 60, 88, '#a86a34', 0, 1.1),
      F('lampRod', 30, 60, '#8a7350', 0, 1),
      F('snuffRing', 60, 72, '#58b8c8', 0, 1),
      F('paperCrease', 60, 48, '#f7e3ae', 0, 0.9),
    ],
  },
  'tide-chanter': {
    kind: 'statue', hue: '#3c5460', hue2: '#22323c', glow: '#58b8c8', size: 1.05, eye: 'glow',
    features: [
      F('chantMouth', 60, 34, '#58b8c8', 0, 1),
      F('stoneWave', 60, 66, '#4a6470', 0, 1.1),
      F('monolithShadow', 60, 94, '#22323c', 0, 1.1),
      F('tideBeads', 60, 52, '#8be9d8', 0, 0.9),
      F('gullCarve', 86, 40, '#58b8c8', 0, 0.8),
      F('wetBase', 60, 100, '#3c5460', 0, 1),
    ],
  },
  'coin-drowned': {
    kind: 'humanoid', hue: '#3a4a54', hue2: '#202c34', glow: '#58b8c8', size: 0.95, eye: 'white',
    features: [
      F('rustHook', 30, 56, '#8a5a38', 0, 1),
      F('coinHair', 60, 20, '#c9a34f', 0, 1),
      F('murkVein', 60, 60, '#58b8c8', 0, 1),
      F('bubbleLips', 60, 38, '#8be9d8', 0, 0.8),
      F('dragPosture', 60, 80, '#202c34', 0, 1),
      F('drownedAlgae', 60, 94, '#3c5448', 0, 1),
    ],
  },
  'ferryman-of-names': {
    kind: 'humanoid', hue: '#2a3240', hue2: '#141a24', glow: '#58b8c8', size: 1.15, eye: 'slit',
    features: [
      F('ironOar', 30, 24, '#8a8f9c', 8, 1.25),
      F('nameScroll', 86, 56, '#e9e4d4', 0, 1),
      F('fogBoat', 60, 94, '#141a24', 0, 1.1),
      F('erasedFace', 60, 30, '#3a4450', 0, 1),
      F('oldNameSeal', 60, 58, '#c9a34f', 0, 0.9),
      F('waterWeight', 60, 84, '#58b8c8', 0, 1.1),
    ],
  },
  'ferrymans-gate': {
    kind: 'gate', hue: '#2c3440', hue2: '#161c26', glow: '#58b8c8', size: 1.3, eye: 'red',
    features: [
      F('curtainGate', 60, 54, '#3a4450', 0, 1.25, '#222834'),
      F('oarSpike', 30, 34, '#8a8f9c', 0, 1.15),
      F('tollScale', 86, 44, '#c9a34f', 0, 1),
      F('letheRipple', 60, 96, '#58b8c8', 0, 1.1),
      F('lanternRow', 60, 20, '#f0cd7d', 0, 1.1),
      F('crossingRush', 60, 76, '#58b8c8', 0, 1.1),
    ],
  },

  /* ══ 海洋 ══ */
  'bubble-eel': {
    kind: 'serpent', hue: '#3a6a8a', hue2: '#22445a', glow: '#8fc3e8', size: 1, eye: 'glow',
    features: [
      F('bubbleTrain', 60, 30, '#bfe4f4', 0, 1.1),
      F('zapMouth', 32, 62, '#e8f4ff', 0, 0.9),
      F('wrapCoil', 60, 70, '#4a7a9a', 0, 1.1, '#22445a'),
      F('finSpike', 60, 44, '#8fc3e8', 0, 1),
      F('dischargeRings', 60, 54, '#e8f4ff', 0, 1.2),
      F('deepScales', 70, 62, '#22445a', 0, 1),
    ],
  },
  'whalebone-drifter': {
    kind: 'statue', hue: '#d8e0e4', hue2: '#a0aab0', glow: '#8fc3e8', size: 1.1, eye: 'white',
    features: [
      F('ribCage', 60, 58, '#e9f0f4', 0, 1.2),
      F('driftJaw', 32, 64, '#c8d4da', 0, 1.1),
      F('pressureCrack', 60, 46, '#a0aab0', 0, 1),
      F('mossBone', 60, 40, '#4a6a54', 0, 0.9),
      F('driftRope', 88, 78, '#8a7350', 0, 1),
      F('swayBase', 60, 96, '#a0aab0', 0, 1.1),
    ],
  },
  'reef-stalker': {
    kind: 'croc', hue: '#4c5a70', hue2: '#2c3848', glow: '#8fc3e8', size: 0.95, eye: 'red',
    features: [
      F('lockEye', 40, 50, '#ff6a45', 0, 0.8),
      F('reefCamouflage', 60, 44, '#5c6a80', 0, 1.1, '#4c5a70'),
      F('biteRow', 34, 66, '#e9f0f4', 0, 1),
      F('ambushFin', 60, 34, '#8fc3e8', 0, 1),
      F('stillTail', 88, 72, '#2c3848', 0, 1),
      F('shadowLurk', 60, 92, '#2c3848', 0, 1),
    ],
  },
  'sunken-lamp-keeper': {
    kind: 'humanoid', hue: '#3c4a58', hue2: '#22303c', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('deckLamp', 60, 20, '#f0cd7d', 0, 0.9),
      F('anchorHammer', 30, 50, '#8a8f9c', 10, 1.1),
      F('plankShield', 88, 60, '#5c4a34', 0, 1),
      F('pressureHem', 60, 92, '#22303c', 0, 1),
      F('bubbleBreath', 60, 38, '#8fc3e8', 0, 0.9),
      F('brassValve', 60, 58, '#c9a34f', 0, 0.8),
    ],
  },
  'deep-current-warden': {
    kind: 'crab', hue: '#2c4458', hue2: '#182834', glow: '#8fc3e8', size: 1.25, eye: 'red',
    features: [
      F('giantClaw', 30, 60, '#3c5468', 0, 1.2, '#2c4458'),
      F('currentWall', 60, 78, '#4a6a88', 0, 1.1),
      F('deepCrush', 60, 44, '#182834', 0, 1.1),
      F('wardenLamp', 60, 24, '#8fc3e8', 0, 0.8),
      F('crackScythe', 84, 64, '#8fc3e8', 0, 0.9),
      F('pressureRing', 60, 88, '#2c4458', 0, 1.2),
    ],
  },
  'abyss-maelstrom-gate': {
    kind: 'gate', hue: '#1c2c3c', hue2: '#0c141c', glow: '#58b8c8', size: 1.35, eye: 'red',
    features: [
      F('vortexEye', 60, 50, '#58b8c8', 0, 1.3, '#2c4458'),
      F('gateArch', 60, 26, '#3c5468', 0, 1.2, '#1c2c3c'),
      F('currentRim', 60, 66, '#4a6a88', 0, 1.2),
      F('eelSuction', 44, 76, '#8fc3e8', 0, 0.8),
      F('crushRing', 60, 84, '#58b8c8', 0, 1.2),
      F('depthGlow', 60, 34, '#8be9d8', 0, 1),
      F('pressureVein', 60, 58, '#0c141c', 0, 1.1),
    ],
  },

  /* ══ 亚特兰蒂斯 ══ */
  'marble-sentinel': {
    kind: 'statue', hue: '#e9eef0', hue2: '#b0bcc2', glow: '#8fc3e8', size: 1, eye: 'white',
    features: [
      F('marbleShell', 60, 58, '#f2f5f6', 0, 1.1, '#d0d8dc'),
      F('crushFist', 30, 60, '#e9eef0', 0, 1),
      F('shellCrack', 74, 50, '#b0bcc2', 0, 0.9),
      F('columnBase', 60, 94, '#c8d0d4', 0, 1),
      F('starEtch', 60, 30, '#8fc3e8', 0, 0.8),
      F('whiteDust', 60, 100, '#e9eef0', 0, 1),
    ],
  },
  'broken-column-shade': {
    kind: 'ghost', hue: '#c8d0d4', hue2: '#8a969c', glow: '#8fc3e8', size: 0.95, eye: 'white',
    features: [
      F('columnCore', 60, 54, '#d8e0e4', 0, 1.1, '#a0aab0'),
      F('fractureTop', 60, 28, '#8a969c', 0, 1),
      F('inscription', 60, 60, '#8fc3e8', 0, 1),
      F('ancientWord', 60, 38, '#8fc3e8', 0, 0.9),
      F('polluteScript', 44, 74, '#e34325', 0, 0.8),
      F('driftShadow', 60, 92, '#8a969c', 0, 1),
    ],
  },
  'bath-house-siren': {
    kind: 'humanoid', hue: '#7aa8b8', hue2: '#4a7080', glow: '#8be9d8', size: 0.95, eye: 'glow',
    features: [
      F('waterBlade', 30, 44, '#bfe4f4', 10, 1),
      F('echoHalo', 60, 22, '#8be9d8', 0, 1.1),
      F('rippleVeil', 60, 58, '#8ac0d0', 0, 1.1, '#4a7080'),
      F('singerLips', 60, 36, '#e9e4d4', 0, 0.8),
      F('poolMist', 60, 94, '#8be9d8', 0, 1.1),
      F('jadeEarring', 74, 34, '#8be9d8', 0, 0.7),
    ],
  },
  'star-senate-scribe': {
    kind: 'humanoid', hue: '#5a6a80', hue2: '#324054', glow: '#f0cd7d', size: 0.95, eye: 'white',
    features: [
      F('starQuill', 30, 50, '#f0cd7d', 0, 0.9),
      F('codexArm', 86, 62, '#e9e4d4', 0, 1),
      F('voteRing', 60, 20, '#f0cd7d', 0, 1.1),
      F('inkWell', 60, 60, '#324054', 0, 0.8),
      F('gavelNod', 60, 34, '#5a6a80', 0, 0.8),
      F('starInk', 60, 76, '#8fc3e8', 0, 0.9),
    ],
  },
  'white-stone-archon': {
    kind: 'statue', hue: '#e9eef0', hue2: '#b0bcc2', glow: '#f0cd7d', size: 1.25, eye: 'white',
    features: [
      F('archonRobes', 60, 60, '#f2f5f6', 0, 1.15, '#c8d0d4'),
      F('scepterStar', 30, 26, '#f0cd7d', 6, 1.1),
      F('crackHalo', 60, 18, '#b0bcc2', 0, 1.1),
      F('ruleEtch', 60, 52, '#8fc3e8', 0, 1.1),
      F('crushWall', 60, 84, '#d0d8dc', 0, 1.1),
      F('starDust', 60, 98, '#f0cd7d', 0, 1.1),
    ],
  },
  'atlantean-court': {
    kind: 'gate', hue: '#c8d4da', hue2: '#8a9aa2', glow: '#8fc3e8', size: 1.35, eye: 'red',
    features: [
      F('courtArch', 60, 50, '#d8e2e6', 0, 1.3, '#a0b0b8'),
      F('drownedDome', 60, 24, '#e9eef0', 0, 1.15, '#8fc3e8'),
      F('sentinelStatue', 88, 66, '#c8d4da', 0, 0.9),
      F('floodVein', 60, 80, '#58b8c8', 0, 1.2),
      F('gavelMotes', 60, 38, '#f0cd7d', 0, 1),
      F('crackAll', 60, 62, '#8a9aa2', 0, 1.2),
      F('silenceHush', 60, 100, '#8a9aa2', 0, 1.1),
    ],
  },

  /* ══ 钟楼 ══ */
  'bell-acolyte': {
    kind: 'humanoid', hue: '#8a7350', hue2: '#5c4a30', glow: '#e2ae4f', size: 0.9, eye: 'glow',
    features: [
      F('smallBell', 60, 20, '#e2ae4f', 0, 0.8),
      F('malletHand', 30, 54, '#8a7350', 0, 0.9),
      F('tollMark', 60, 58, '#e34325', 0, 0.8),
      F('ringingRing', 60, 30, '#f0cd7d', 0, 1.1),
      F('climbBoot', 60, 94, '#5c4a30', 0, 0.9),
      F('ropeBraid', 86, 70, '#8a6f3f', 0, 0.9),
    ],
  },
  'echo-wraith': {
    kind: 'ghost', hue: '#9aa0b8', hue2: '#5c6280', glow: '#f0cd7d', size: 0.9, eye: 'white',
    features: [
      F('echoBody', 60, 54, '#a8aec8', 0, 1.1, '#787e98'),
      F('tollShock', 60, 30, '#f0cd7d', 0, 1.1),
      F('fadeBlade', 30, 60, '#c8ccd8', 0, 1),
      F('wobbleHem', 60, 92, '#5c6280', 0, 1.1),
      F('afterglow', 84, 50, '#f0cd7d', 0, 0.8),
      F('hollowBell', 60, 44, '#2c3248', 0, 0.9),
    ],
  },
  'pendulum-blade': {
    kind: 'construct', hue: '#8a6f3f', hue2: '#5c4a28', glow: '#e2ae4f', size: 1, eye: 'none',
    features: [
      F('pendulumDisc', 60, 70, '#c9a34f', 0, 1.2, '#8a6f3f'),
      F('swingArc', 60, 40, '#f0cd7d', 0, 1.2),
      F('bladeEdge', 60, 92, '#cfd3dc', 0, 1),
      F('anchorChain', 60, 24, '#6f6a5c', 0, 1.1),
      F('crackBell', 88, 44, '#8a6f3f', 0, 0.9),
      F('tickWeight', 60, 60, '#e2ae4f', 0, 0.8),
    ],
  },
  'bell-warden': {
    kind: 'knight', hue: '#7a5c34', hue2: '#4a3820', glow: '#e2ae4f', size: 1.1, eye: 'red',
    features: [
      F('tollHammer', 30, 30, '#c9a34f', 10, 1.1),
      F('chimeHalo', 60, 16, '#e2ae4f', 0, 1),
      F('bronzePlate', 60, 58, '#8a6f3f', 0, 1.1),
      F('wraithCaller', 86, 56, '#9aa0b8', 0, 0.9),
      F('ropeGrip', 34, 68, '#6f6a5c', 0, 0.8),
      F('dutyStep', 60, 94, '#4a3820', 0, 1),
    ],
  },
  'silent-king': {
    kind: 'statue', hue: '#5c4a34', hue2: '#322818', glow: '#e2ae4f', size: 1.3, eye: 'white',
    features: [
      F('muteCrown', 60, 14, '#c9a34f', 0, 1),
      F('crackedBell', 60, 34, '#8a6f3f', 0, 1),
      F('kingMallet', 30, 40, '#c9a34f', 0, 1.1),
      F('silenceHalo', 60, 24, '#f0cd7d', 0, 1.1),
      F('bronzeWall', 60, 70, '#5c4a34', 0, 1.2, '#322818'),
      F('deathMark', 60, 56, '#e34325', 0, 0.9),
      F('hushSteps', 60, 96, '#322818', 0, 1.1),
    ],
  },

  /* ══ 霓虹院 ══ */
  'data-bailiff': {
    kind: 'construct', hue: '#2a2438', hue2: '#161224', glow: '#ff4fd8', size: 1, eye: 'red',
    features: [
      F('dataShield', 60, 56, '#4fd8c2', 0, 1.1),
      F('shockRod', 30, 48, '#ff4fd8', 8, 1),
      F('seizureLed', 60, 68, '#ff4fd8', 0, 1),
      F('codeVisor', 60, 28, '#4fd8c2', 0, 0.9),
      F('neonStripe', 60, 46, '#ff4fd8', 0, 1),
      F('hoverBase', 60, 94, '#161224', 0, 1),
    ],
  },
  'memory-leech': {
    kind: 'serpent', hue: '#3a3050', hue2: '#201830', glow: '#ff4fd8', size: 1, eye: 'red',
    features: [
      F('memorySiphon', 32, 60, '#ff4fd8', 0, 1),
      F('violetSkin', 60, 56, '#4a3e64', 0, 1.1, '#3a3050'),
      F('glitchHalo', 60, 30, '#4fd8c2', 0, 1),
      F('chipScales', 70, 62, '#8a7fb0', 0, 1),
      F('overloadHum', 60, 72, '#ff4fd8', 0, 1.1),
      F('drainTrail', 88, 80, '#4fd8c2', 0, 1),
    ],
  },
  'verdict-drone': {
    kind: 'construct', hue: '#2a2438', hue2: '#161224', glow: '#ff4fd8', size: 0.95, eye: 'red',
    features: [
      F('verdictBeam', 30, 60, '#ff4fd8', 0, 1),
      F('markReticle', 60, 30, '#ff4fd8', 0, 0.9),
      F('hoverRing', 60, 84, '#4fd8c2', 0, 1.1),
      F('gripAntenna', 60, 16, '#8a7fb0', 0, 0.8),
      F('caseFiles', 86, 54, '#e9e4d4', 0, 0.8),
      F('dualSweep', 60, 46, '#ff4fd8', 0, 1),
    ],
  },
  'neon-executioner': {
    kind: 'brute', hue: '#221c30', hue2: '#100c1a', glow: '#ff4fd8', size: 1.25, eye: 'red',
    features: [
      F('ionLance', 30, 30, '#e8f4ff', 12, 1.2),
      F('overclockCore', 60, 54, '#ff4fd8', 0, 1),
      F('deconCuffs', 34, 70, '#4fd8c2', 0, 0.9),
      F('neonMantle', 60, 66, '#3a2c54', 0, 1.2, '#221c30'),
      F('execMask', 60, 28, '#ff4fd8', 0, 0.9),
      F('strikePlatform', 60, 94, '#100c1a', 0, 1.1),
    ],
  },
  'neon-arbiter': {
    kind: 'gate', hue: '#1c1628', hue2: '#0c0814', glow: '#ff4fd8', size: 1.3, eye: 'red',
    features: [
      F('judgePlinth', 60, 60, '#2a2438', 0, 1.25, '#1c1628'),
      F('arcVerdict', 60, 34, '#ff4fd8', 0, 1.1),
      F('droneBay', 86, 46, '#4fd8c2', 0, 1),
      F('sealChamber', 60, 76, '#4fd8c2', 0, 1),
      F('chainTrial', 30, 44, '#ff4fd8', 0, 1.1),
      F('neonFloor', 60, 98, '#ff4fd8', 0, 1.2),
    ],
  },

  /* ══ 恶魔巢穴 ══ */
  'brood-spawn': {
    kind: 'blob', hue: '#7a2420', hue2: '#481410', glow: '#e34325', size: 0.95, eye: 'red',
    features: [
      F('hullShell', 60, 58, '#8a3028', 0, 1.1, '#5c1c14'),
      F('pawClaws', 40, 86, '#481410', 0, 0.9),
      F('crawlingGlow', 60, 44, '#e34325', 0, 1),
      F('jawPeek', 34, 64, '#e9e4d4', 0, 0.8),
      F('wriggleTrail', 86, 84, '#5c1c14', 0, 1),
      F('membraneWing', 74, 40, '#8a3028', 0, 0.9),
    ],
  },
  'pact-cultist': {
    kind: 'humanoid', hue: '#4a1c20', hue2: '#28100e', glow: '#e34325', size: 0.95, eye: 'red',
    features: [
      F('pactBlade', 30, 44, '#cfd3dc', 10, 1),
      F('bloodPact', 60, 56, '#e34325', 0, 1),
      F('whisperHood', 60, 26, '#28100e', 0, 0.9),
      F('offerHands', 86, 66, '#4a1c20', 0, 0.9),
      F('sealBelt', 60, 80, '#5c1c14', 0, 1),
      F('kneelScar', 60, 94, '#28100e', 0, 0.9),
    ],
  },
  'gore-fiend': {
    kind: 'brute', hue: '#6a1c1c', hue2: '#3a0c0c', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('giantClaws', 30, 62, '#8a2c22', 0, 1.1),
      F('corrodeGrip', 84, 66, '#8fae3c', 0, 0.9),
      F('riptide', 60, 52, '#e34325', 0, 1.1),
      F('fangRow', 44, 44, '#e9e4d4', 0, 1),
      F('bloodWing', 74, 36, '#3a0c0c', 0, 1),
      F('devourStain', 60, 84, '#6a1c1c', 0, 1.1),
    ],
  },
  'nest-broodmother': {
    kind: 'crab', hue: '#5c1c14', hue2: '#32100c', glow: '#e34325', size: 1.25, eye: 'red',
    features: [
      F('broodPlate', 60, 56, '#6a241c', 0, 1.2, '#481410'),
      F('stingerTail', 88, 74, '#8a2c22', 14, 1.1),
      F('shellClaw', 30, 58, '#6a241c', 0, 1.1),
      F('nurseryDrip', 60, 94, '#481410', 0, 1.1),
      F('watchEyes', 60, 32, '#e34325', 0, 1),
      F('pupaeMotes', 60, 20, '#8a2c22', 0, 1),
    ],
  },
  'demon-progenitor': {
    kind: 'dragon', hue: '#5c1410', hue2: '#2c0806', glow: '#e34325', size: 1.35, eye: 'red',
    features: [
      F('spawnPool', 60, 92, '#e34325', 0, 1.2),
      F('giantJaw', 34, 58, '#8a2c22', 0, 1.2),
      F('broodBack', 60, 38, '#6a1c14', 0, 1.2, '#3a0c0c'),
      F('corrodeBreath', 60, 70, '#8fae3c', 0, 1),
      F('twinTentacle', 60, 46, '#8a2c22', 0, 1.1),
      F('membraneWings', 60, 24, '#3a0c0c', 0, 1.3),
      F('apocalypseHalo', 60, 12, '#e34325', 0, 1.2),
    ],
  },

  /* ══ 世界地垒 ══ */
  'rampart-sentinel': {
    kind: 'statue', hue: '#6a6478', hue2: '#3c3848', glow: '#f0cd7d', size: 1.05, eye: 'glow',
    features: [
      F('starStone', 60, 56, '#7a7488', 0, 1.15, '#54506a'),
      F('collapseMaul', 30, 30, '#8a8f9c', 10, 1.1),
      F('rampartPlates', 60, 70, '#54506a', 0, 1.1),
      F('starEtch', 60, 30, '#f0cd7d', 0, 0.8),
      F('shatterMark', 74, 52, '#f0cd7d', 0, 0.9),
      F('dustStomp', 60, 94, '#3c3848', 0, 1.1),
    ],
  },
  'starfall-archer': {
    kind: 'humanoid', hue: '#4c4460', hue2: '#2c2640', glow: '#f0cd7d', size: 1, eye: 'glow',
    features: [
      F('meteorBow', 30, 36, '#c9a34f', 0, 1.1),
      F('starQuiver', 86, 48, '#f0cd7d', 0, 1),
      F('lockOn', 60, 28, '#ff6a45', 0, 0.9),
      F('impactScorch', 60, 60, '#e34325', 0, 0.9),
      F('windChest', 60, 44, '#5c5478', 0, 1),
      F('kneelShot', 60, 94, '#2c2640', 0, 0.9),
    ],
  },
  'void-templar': {
    kind: 'knight', hue: '#3c3450', hue2: '#201a30', glow: '#8fc3e8', size: 1.1, eye: 'slit',
    features: [
      F('voidMail', 60, 58, '#4a4264', 0, 1.1, '#2c2640'),
      F('riftSword', 30, 28, '#8fc3e8', 8, 1.15),
      F('cosmicSiphon', 60, 40, '#8fc3e8', 0, 1),
      F('templarCross', 60, 24, '#f0cd7d', 0, 0.9),
      F('shadowBoots', 60, 94, '#201a30', 0, 1.1),
      F('starVein', 74, 56, '#f0cd7d', 0, 0.8),
    ],
  },
  'rampart-warden': {
    kind: 'brute', hue: '#54506a', hue2: '#322e44', glow: '#f0cd7d', size: 1.25, eye: 'red',
    features: [
      F('twinMauls', 60, 34, '#8a8f9c', 0, 1.15),
      F('rampartMantle', 60, 64, '#6a6478', 0, 1.2, '#423e56'),
      F('trumpHorn', 86, 30, '#c9a34f', 0, 1),
      F('pierceMarks', 60, 52, '#f0cd7d', 0, 1),
      F('commandBoots', 60, 94, '#322e44', 0, 1.1),
      F('starHalo', 60, 14, '#f0cd7d', 0, 1.1),
    ],
  },
  'rampart-heart': {
    kind: 'gate', hue: '#54506a', hue2: '#302c40', glow: '#f0cd7d', size: 1.35, eye: 'glow',
    features: [
      F('fortressCore', 60, 54, '#6a6478', 0, 1.3, '#423e56'),
      F('starWall', 60, 40, '#f0cd7d', 0, 1.2),
      F('collapseSeam', 60, 70, '#302c40', 0, 1.1),
      F('wardenEcho', 88, 50, '#8fc3e8', 0, 0.9),
      F('skyAnchor', 60, 16, '#f0cd7d', 0, 1.1),
      F('collapseRing', 60, 94, '#54506a', 0, 1.2),
    ],
  },

  /* ══ 荒漠（frontier） ══ */
  'sand-worm': {
    kind: 'worm', hue: '#c9a05c', hue2: '#8a6a34', glow: '#e0a43f', size: 1.1, eye: 'red',
    features: [
      F('burrowJaw', 32, 66, '#e8d8b0', 0, 1.2),
      F('ridgeScales', 60, 36, '#8a6a34', 0, 1.2),
      F('sandFangs', 34, 72, '#fff3d9', 0, 1),
      F('sixStubs', 60, 88, '#a8854a', 0, 1),
      F('sandVortex', 60, 22, '#e0c084', 0, 1.1),
      F('brokenTail', 90, 78, '#8a6a34', 12),
      F('amberEyes', 40, 56, '#ffcf5e', 0, 0.7),
    ],
  },
  'desert-raider': {
    kind: 'humanoid', hue: '#a8854a', hue2: '#6a5428', glow: '#e0a43f', size: 0.95, eye: 'red',
    features: [
      F('raiderBlade', 30, 40, '#cfd3dc', 14, 1.05),
      F('sandVeil', 60, 30, '#c9a86c', 0, 1),
      F('lootSaddle', 88, 70, '#8a6a34', 0, 0.9),
      F('dustBoot', 60, 94, '#6a5428', 0, 1),
      F('sunScar', 60, 56, '#6a5428', 0, 0.9),
      F('blindDust', 60, 24, '#e0c084', 0, 1),
    ],
  },
  'sandstone-golem': {
    kind: 'brute', hue: '#b08a4c', hue2: '#7a5c2c', glow: '#e0a43f', size: 1.25, eye: 'red',
    features: [
      F('rockPlates', 60, 56, '#c9a05c', 0, 1.2, '#a8854a'),
      F('crusherFist', 30, 64, '#c9a05c', 0, 1.1),
      F('hardenedCore', 60, 46, '#e0a43f', 0, 0.8),
      F('erosionFace', 60, 28, '#7a5c2c', 0, 1),
      F('sandSeam', 60, 78, '#7a5c2c', 0, 1.1),
      F('dustTrail', 60, 96, '#a8854a', 0, 1.1),
    ],
  },
  'mummified-priest': {
    kind: 'humanoid', hue: '#c9b890', hue2: '#8a7a54', glow: '#e0a43f', size: 1, eye: 'slit',
    features: [
      F('mummyWrap', 60, 60, '#e0d4b0', 0, 1.15, '#b8a878'),
      F('scorchSigil', 60, 44, '#e34325', 0, 0.9),
      F('witheredHand', 30, 64, '#c9b890', 0, 0.9),
      F('ankhPendant', 60, 56, '#c9a34f', 0, 0.8),
      F('sandBleed', 60, 94, '#a8946c', 0, 1.1),
      F('priestCrown', 60, 20, '#8a7a54', 0, 0.8),
    ],
  },
  'sand-scorpion': {
    kind: 'scorpion', hue: '#b08a4c', hue2: '#7a5c2c', glow: '#e0a43f', size: 1, eye: 'red',
    features: [
      F('venomTail', 88, 30, '#8fae3c', -18, 1.1),
      F('gripPincers', 32, 62, '#c9a05c', 0, 1),
      F('ridgeShell', 60, 54, '#a8854a', 0, 1),
      F('burrowLegs', 60, 88, '#7a5c2c', 0, 1),
      F('chargeGlow', 60, 44, '#e0a43f', 0, 0.9),
      F('sandSpray', 60, 96, '#e0c084', 0, 1),
    ],
  },
  'sandstorm-wraith': {
    kind: 'ghost', hue: '#d8c090', hue2: '#a8905c', glow: '#e0a43f', size: 1, eye: 'red',
    features: [
      F('vortexBody', 60, 54, '#e0c898', 0, 1.15, '#c9b078'),
      F('gritArc', 60, 40, '#e8d8b0', 0, 1.2),
      F('erodeHem', 60, 92, '#a8905c', 0, 1.1),
      F('wraithGlow', 60, 34, '#ffcf5e', 0, 0.8),
      F('armorGrind', 44, 56, '#a8905c', 0, 0.9),
      F('dustWake', 60, 100, '#c9b078', 0, 1.1),
    ],
  },
  'dune-tyrant': {
    kind: 'brute', hue: '#8a5c2c', hue2: '#5c3a14', glow: '#e0a43f', size: 1.2, eye: 'red',
    features: [
      F('twinScimitars', 60, 34, '#cfd3dc', 0, 1.1),
      F('sunScorch', 60, 50, '#e34325', 0, 1),
      F('ragePlume', 60, 16, '#e0a43f', 0, 0.9),
      F('duneSash', 60, 74, '#a87a3c', 0, 1),
      F('ironBite', 60, 40, '#5c3a14', 0, 0.9),
      F('stompDust', 60, 94, '#a8854a', 0, 1.1),
    ],
  },
  'sand-sovereign': {
    kind: 'statue', hue: '#c9a86c', hue2: '#8a6a34', glow: '#e0a43f', size: 1.3, eye: 'red',
    features: [
      F('sceptreHalberd', 30, 22, '#e0a43f', 6, 1.2),
      F('sandCrown', 60, 14, '#f0cd7d', 0, 1),
      F('duneThrone', 60, 84, '#a8854a', 0, 1.2),
      F('barrierWave', 60, 66, '#e0c898', 0, 1.1),
      F('stormHalo', 60, 30, '#e0a43f', 0, 1.2),
      F('sovereignMantle', 60, 56, '#8a6a34', 0, 1.15, '#c9a86c'),
      F('wraithEcho', 88, 40, '#d8c090', 0, 0.9),
    ],
  },

  /* ══ 陨石遗迹（frontier） ══ */
  'meteor-acolyte': {
    kind: 'humanoid', hue: '#4c4470', hue2: '#2c2648', glow: '#8fc3e8', size: 1, eye: 'glow',
    features: [
      F('chargeCore', 60, 52, '#8fc3e8', 0, 0.9),
      F('starShell', 86, 60, '#5c5488', 0, 0.9),
      F('acolyteCape', 60, 68, '#5c5488', 0, 1.1, '#363054'),
      F('burstFist', 30, 62, '#e8f4ff', 0, 0.9),
      F('starStubble', 60, 24, '#f0cd7d', 0, 0.9),
      F('orbitDust', 60, 90, '#8fc3e8', 0, 1.1),
    ],
  },
  'void-hound': {
    kind: 'wolf', hue: '#3c3450', hue2: '#1c1630', glow: '#8fc3e8', size: 0.95, eye: 'red',
    features: [
      F('phaseRift', 60, 52, '#8fc3e8', 0, 1.1),
      F('blinkMuzzle', 32, 58, '#2c2640', 0, 0.9),
      F('trackStar', 60, 26, '#f0cd7d', 0, 0.8),
      F('darkFur', 60, 64, '#2c2640', 0, 1.1, '#1c1630'),
      F('silentPaw', 60, 92, '#1c1630', 0, 1),
      F('twinShadow', 84, 84, '#3c3450', 0, 1),
    ],
  },
  'starbone-knight': {
    kind: 'knight', hue: '#5a5478', hue2: '#322e48', glow: '#f0cd7d', size: 1.1, eye: 'white',
    features: [
      F('starboneMail', 60, 58, '#6a6488', 0, 1.1, '#4a4468'),
      F('absorbCore', 60, 48, '#8fc3e8', 0, 0.9),
      F('starblade', 30, 28, '#f0cd7d', 8, 1.1),
      F('helmetCrest', 60, 14, '#f0cd7d', 0, 0.9),
      F('orbitalHalo', 60, 22, '#8fc3e8', 0, 1.1),
      F('boneDust', 60, 94, '#8a82a8', 0, 1),
    ],
  },
  riftweaver: {
    kind: 'humanoid', hue: '#4a3c6a', hue2: '#281e40', glow: '#8fc3e8', size: 1.05, eye: 'red',
    features: [
      F('riftHands', 60, 62, '#8fc3e8', 0, 1),
      F('weaveLoom', 86, 50, '#5c5488', 0, 1),
      F('erosionVein', 60, 50, '#ff4fd8', 0, 1),
      F('scorchCuff', 34, 68, '#e34325', 0, 0.9),
      F('weaverHood', 60, 24, '#281e40', 0, 0.9),
      F('threadTrail', 60, 94, '#8fc3e8', 0, 1.1),
    ],
  },
  'cosmic-behemoth': {
    kind: 'brute', hue: '#3a3450', hue2: '#1c1830', glow: '#ff4fd8', size: 1.3, eye: 'red',
    features: [
      F('behemothMass', 60, 60, '#4a4468', 0, 1.25, '#2c2648'),
      F('erosionBurst', 60, 44, '#ff4fd8', 0, 1.1),
      F('meteorShell', 84, 56, '#5c5488', 0, 1),
      F('crushStep', 60, 94, '#1c1830', 0, 1.2),
      F('starCracks', 60, 70, '#8fc3e8', 0, 1.1),
      F('hungerMaw', 34, 62, '#2c2648', 0, 1),
    ],
  },
  'terminus-warden': {
    kind: 'knight', hue: '#4a4468', hue2: '#282240', glow: '#8fc3e8', size: 1.2, eye: 'slit',
    features: [
      F('gateAegis', 88, 58, '#5c5488', 0, 1.1, '#322e48'),
      F('terminusMaul', 30, 28, '#8a8f9c', 10, 1.15),
      F('seamErosion', 60, 50, '#ff4fd8', 0, 1),
      F('wardenHelm', 60, 22, '#5c5488', 0, 0.9),
      F('echoHound', 60, 90, '#8fc3e8', 0, 0.9),
      F('collapseDust', 60, 98, '#322e48', 0, 1.1),
    ],
  },
  'world-ender': {
    kind: 'dragon', hue: '#241c38', hue2: '#120c20', glow: '#ff4fd8', size: 1.4, eye: 'red',
    features: [
      F('riftEye', 60, 30, '#ff4fd8', 0, 1),
      F('fourPhaseHalo', 60, 14, '#8fc3e8', 0, 1.3),
      F('crushFist', 30, 58, '#3a3450', 0, 1.2),
      F('battleRift', 60, 52, '#ff4fd8', 0, 1.2),
      F('riftSpawn', 86, 44, '#8fc3e8', 0, 1),
      F('enderTail', 60, 92, '#120c20', 0, 1.2),
      F('finalityWings', 60, 22, '#2c2648', 0, 1.3),
      F('starFall', 60, 8, '#f0cd7d', 0, 0.9),
    ],
  },

  /* ══ 旧日余响（legacy） ══ */
  'legacy-lone-orc-scout': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('tuskPair', 60, 36, '#e9e4d4', 0, 0.8),
      F('shortAxe', 30, 44, '#8a8f9c', 12, 0.9),
      F('leatherCuirass', 60, 62, '#6a5a38', 0, 1),
      F('scoutKnot', 60, 24, '#8a6f3f', 0, 0.8),
      F('grittyBoots', 60, 94, '#3a4224', 0, 0.9),
      F('scarKnuckle', 34, 66, '#4c5a34', 0, 0.7),
    ],
  },
  'legacy-patrol-orc-archer': {
    kind: 'humanoid', hue: '#4c6a4a', hue2: '#2e4230', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('bentBow', 30, 34, '#8a7350', 0, 1.1),
      F('quiverSpike', 86, 46, '#8a7350', 0, 1),
      F('tusks', 60, 36, '#e9e4d4', 0, 0.8),
      F('patrolBelt', 60, 80, '#6a5a38', 0, 1),
      F('warPaint', 60, 30, '#8a8f5c', 0, 0.8),
      F('sneakStance', 60, 94, '#2e4230', 0, 1),
    ],
  },
  'legacy-patrol-orc-scout': {
    kind: 'humanoid', hue: '#546a3c', hue2: '#324226', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('broadSword', 30, 38, '#8a8f9c', 16, 1),
      F('scoutHood', 60, 22, '#3a4a2c', 0, 0.9),
      F('wornPelt', 60, 62, '#6a5a38', 0, 1.05, '#4c4230'),
      F('trailMarks', 60, 94, '#324226', 0, 0.9),
      F('gapTooth', 60, 36, '#2b2115', 0, 0.8),
      F('packRope', 86, 70, '#8a6f3f', 0, 0.9),
    ],
  },
  'legacy-orc-warrior': {
    kind: 'brute', hue: '#5c6a3a', hue2: '#364228', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('heavyAxe', 30, 30, '#8a8f9c', 10, 1.1),
      F('shieldBoard', 88, 58, '#6a5a38', 0, 1, '#4c4230'),
      F('tusksBig', 60, 36, '#e9e4d4', 0, 0.9),
      F('warChiefPaint', 60, 52, '#8a8f5c', 0, 1),
      F('knuckleRing', 34, 68, '#8a8f9c', 0, 0.8),
      F('battleStance', 60, 94, '#364228', 0, 1),
    ],
  },
  'legacy-skeleton-warrior': {
    kind: 'statue', hue: '#d8cbb0', hue2: '#a89878', glow: '#c9a34f', size: 1, eye: 'glow',
    features: [
      F('ribCage', 60, 60, '#e9e4d4', 0, 1.1),
      F('rustSword', 30, 34, '#8a5a38', 8, 1),
      F('skullGap', 60, 26, '#2b2115', 0, 0.9),
      F('shieldBone', 88, 58, '#cbbfa4', 0, 1),
      F('jointRattle', 60, 84, '#a89878', 0, 0.9),
      F('boneDust', 60, 96, '#8a8268', 0, 1),
    ],
  },
  'legacy-jaw-worm': {
    kind: 'worm', hue: '#6a5a3a', hue2: '#423822', glow: '#8fae3c', size: 1, eye: 'red',
    features: [
      F('giantJaw', 32, 62, '#8a7a4c', 0, 1.2, '#6a5a3a'),
      F('ringBody', 60, 52, '#7a6a44', 0, 1.1, '#54482c'),
      F('burrowMouth', 30, 70, '#423822', 0, 0.9),
      F('grindDust', 60, 94, '#8a7a4c', 0, 1.1),
      F('blindPits', 44, 50, '#ffcf5e', 0, 0.7),
      F('guardBite', 60, 44, '#54482c', 0, 1),
    ],
  },
  'legacy-small-slime': {
    kind: 'blob', hue: '#8fae6a', hue2: '#5c7a44', glow: '#b8e04f', size: 0.85, eye: 'white',
    features: [
      F('gooBody', 60, 62, '#9cb878', 0, 1.05, '#7a9a5c'),
      F('dimpleEyes', 60, 54, '#e9e4d4', 0, 0.8),
      F('boingSprings', 60, 90, '#5c7a44', 0, 1),
      F('splitDrip', 44, 96, '#8fae6a', 0, 0.7),
      F('glossTop', 60, 44, '#c8e09c', 0, 0.8),
      F('slimeSplat', 84, 94, '#7a9a5c', 0, 1),
    ],
  },
  'legacy-orc-shaman': {
    kind: 'hag', hue: '#4a5a34', hue2: '#2c3a20', glow: '#e2ae4f', size: 0.9, eye: 'red',
    features: [
      F('lightningRod', 30, 26, '#e2ae4f', 0, 1),
      F('boneBeads', 60, 48, '#d8cbb0', 0, 0.9),
      F('shamanHair', 60, 18, '#3a4a2c', 0, 1),
      F('runeBelt', 60, 78, '#6a5a38', 0, 1),
      F('chantPosture', 60, 60, '#4a5a34', 0, 1),
      F('sacredAsh', 60, 92, '#8a8268', 0, 1),
    ],
  },
  'legacy-ghost': {
    kind: 'ghost', hue: '#c8d0d8', hue2: '#8a96a0', glow: '#e8f4ff', size: 0.9, eye: 'white',
    features: [
      F('sheetHem', 60, 92, '#a8b4bc', 0, 1.1),
      F('clingArms', 60, 62, '#d8e0e8', 0, 1),
      F('hollowHole', 60, 34, '#5c6a74', 0, 0.8),
      F('wrapTrail', 86, 70, '#c8d0d8', 0, 1),
      F('coldRing', 60, 46, '#e8f4ff', 0, 1.1),
      F('muffle', 60, 20, '#8a96a0', 0, 1),
    ],
  },
  'legacy-orc-berserker': {
    kind: 'brute', hue: '#6a5a34', hue2: '#423822', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('frenzyAxe', 30, 28, '#8a8f9c', 14, 1.15),
      F('vulnerableWound', 60, 52, '#e34325', 0, 1),
      F('ripostTusks', 60, 34, '#e9e4d4', 0, 0.9),
      F('tornPelt', 60, 66, '#4c4230', 0, 1.1),
      F('roarMouth', 60, 42, '#2b2115', 0, 0.9),
      F('rageStomp', 60, 94, '#423822', 0, 1.1),
    ],
  },
  'legacy-rat-pack-a': {
    kind: 'rat', hue: '#6a6054', hue2: '#423a32', glow: '#c9a34f', size: 0.8, eye: 'red',
    features: [
      F('bigCheeks', 40, 62, '#8a8072', 0, 0.9),
      F('longTailA', 90, 78, '#8a7a6a', 12),
      F('gritFur', 60, 56, '#5c544a', 0, 1),
      F('packEar', 74, 26, '#6a6054', 8),
      F('nibbleHands', 34, 70, '#8a7a6a', 0, 0.8),
      F('packScent', 60, 94, '#423a32', 0, 1),
    ],
  },
  'legacy-rat-pack-c': {
    kind: 'rat', hue: '#726858', hue2: '#4a4238', glow: '#c9a34f', size: 0.75, eye: 'red',
    features: [
      F('grayStripe', 60, 44, '#a89880', 0, 1),
      F('crookTailC', 90, 80, '#8a7e6c', 20),
      F('bandagedPaw', 36, 84, '#c8c0b0', 0, 0.8),
      F('wiryCoat', 60, 60, '#645a4c', 0, 1),
      F('smallFangs', 34, 66, '#e9e4d4', 0, 0.8),
      F('packMud', 60, 96, '#4a4238', 0, 1),
    ],
  },
  'legacy-troll': {
    kind: 'brute', hue: '#5c7a5c', hue2: '#3a4c3a', glow: '#8fae3c', size: 1.25, eye: 'glow',
    features: [
      F('clubArm', 30, 40, '#8a7350', 12, 1.15),
      F('regrowScar', 60, 56, '#8fae3c', 0, 1),
      F('longEars', 60, 16, '#5c7a5c', 0, 1),
      F('thickNeck', 60, 46, '#4a6a4a', 0, 1.1),
      F('rootToes', 60, 94, '#3a4c3a', 0, 1),
      F('mossShoulder', 44, 34, '#5c7a3c', 0, 0.9),
    ],
  },
  'legacy-death-knight': {
    kind: 'knight', hue: '#3c4450', hue2: '#222830', glow: '#8fc3e8', size: 1.15, eye: 'glow',
    features: [
      F('graveSword', 30, 28, '#c8ccd8', 8, 1.15),
      F('helmShadow', 60, 24, '#181c24', 0, 0.9),
      F('guardRune', 88, 58, '#8fc3e8', 0, 1),
      F('chainTail', 60, 88, '#3c4450', 0, 1.1),
      F('mortemMark', 60, 48, '#8fc3e8', 0, 0.9),
      F('silentWalk', 60, 96, '#222830', 0, 1),
    ],
  },
  'legacy-orc-warchief': {
    kind: 'brute', hue: '#546038', hue2: '#323a22', glow: '#e2ae4f', size: 1.2, eye: 'red',
    features: [
      F('chiefAxe', 30, 26, '#c9a34f', 10, 1.2),
      F('warCrest', 60, 14, '#8a6f3f', 0, 0.9),
      F('tusksGold', 60, 34, '#e2ae4f', 0, 0.9),
      F('warBand', 60, 60, '#6a5a38', 0, 1),
      F('commandVoice', 60, 42, '#8a8f5c', 0, 0.9),
      F('warchiefStep', 60, 94, '#323a22', 0, 1.1),
    ],
  },
  'legacy-ettin': {
    kind: 'brute', hue: '#6a5a48', hue2: '#423828', glow: '#8fae3c', size: 1.3, eye: 'red',
    features: [
      F('twinHeads', 60, 22, '#7a6a54', 0, 1.1, '#5c5040'),
      F('twoGazes', 60, 26, '#ff6a45', 0, 1),
      F('sharedAxe', 30, 34, '#8a8f9c', 8, 1.2),
      F('wideShoulders', 60, 52, '#6a5a48', 0, 1.2, '#423828'),
      F('staggerWalk', 60, 94, '#423828', 0, 1.1),
      F('oneShield', 88, 58, '#5c5040', 0, 1, '#3a3224'),
    ],
  },
  'legacy-ghost-cultist': {
    kind: 'ghost', hue: '#8a98a8', hue2: '#5c6a78', glow: '#8fc3e8', size: 0.9, eye: 'white',
    features: [
      F('cultRobe', 60, 64, '#a8b4c0', 0, 1.1, '#788898'),
      F('hollowChalice', 30, 56, '#8fc3e8', 0, 0.9),
      F('fadedHood', 60, 24, '#5c6a78', 0, 0.9),
      F('chantFaint', 60, 40, '#c8d0d8', 0, 0.9),
      F('paleKnees', 60, 92, '#8a98a8', 0, 0.9),
      F('weakAura', 60, 52, '#8fc3e8', 0, 1.1),
    ],
  },
  'legacy-hag': {
    kind: 'hag', hue: '#7a7060', hue2: '#4c463c', glow: '#e2ae4f', size: 0.95, eye: 'red',
    features: [
      F('gnarledStaff', 30, 34, '#8a7350', 8, 1.1),
      F('bushyBrows', 60, 24, '#a89880', 0, 1),
      F('crookBack', 60, 56, '#6a6050', 0, 1.1, '#4c463c'),
      F('pocketHerbs', 86, 72, '#5c7a3c', 0, 0.9),
      F('cackleLines', 60, 38, '#4c463c', 0, 0.9),
      F('shoeScuffs', 60, 94, '#3a342c', 0, 0.9),
    ],
  },
  'legacy-wraith': {
    kind: 'ghost', hue: '#5c6878', hue2: '#343c48', glow: '#c8d0d8', size: 0.9, eye: 'white',
    features: [
      F('wrathHalo', 60, 20, '#c8d0d8', 0, 1.1),
      F('reachHands', 60, 64, '#8a98a8', 0, 1.1),
      F('screamMouth', 60, 38, '#222830', 0, 0.9),
      F('tatterWing', 84, 52, '#4a5868', 0, 1),
      F('coldWake', 60, 94, '#5c6878', 0, 1.1),
      F('hollowRibs', 60, 56, '#343c48', 0, 1),
    ],
  },
  'legacy-ancient-dragon': {
    kind: 'dragon', hue: '#5c4a3c', hue2: '#362a20', glow: '#e34325', size: 1.3, eye: 'red',
    features: [
      F('oldWings', 60, 26, '#6a5844', 0, 1.3, '#4c3e30'),
      F('ashScale', 60, 58, '#7a6852', 0, 1.2, '#544434'),
      F('breathEmber', 34, 60, '#e34325', 0, 1),
      F('ancientClaw', 30, 78, '#8a7a60', 0, 1),
      F('weakHaze', 60, 40, '#8a8268', 0, 0.9),
      F('tailCoil', 88, 84, '#4c3e30', 0, 1.2),
      F('hoardDust', 60, 98, '#8a7a60', 0, 1.1),
    ],
  },
  'legacy-slime-king': {
    kind: 'blob', hue: '#7a9a5c', hue2: '#4c6a38', glow: '#b8e04f', size: 1.25, eye: 'white',
    features: [
      F('crownGoo', 60, 22, '#e2ae4f', 0, 1),
      F('kingBulk', 60, 60, '#8aab68', 0, 1.3, '#6a8a4c'),
      F('eightPress', 60, 94, '#4c6a38', 0, 1.2),
      F('royalGloss', 60, 44, '#c8e09c', 0, 1.1),
      F('courtDrips', 60, 84, '#7a9a5c', 0, 1.1),
      F('scepterStub', 30, 70, '#8a7350', 0, 0.9),
    ],
  },
};