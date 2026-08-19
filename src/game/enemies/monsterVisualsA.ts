// 怪物外形视觉规格 · 前半（第一、二幕相关地域）
import { F, type MonsterVisualSpec } from './monsterVisualTypes';

export const VISUALS_A: Record<string, MonsterVisualSpec> = {
  /* ══ 灰烬荒原 ══ */
  ashling: {
    kind: 'beast', hue: '#5a544c', hue2: '#3a352f', glow: '#e34325', size: 0.9, eye: 'red',
    features: [
      F('spikeTufts', 60, 24, '#8a7350', 0, 1, '#5a544c'),
      F('emberVeins', 60, 58, '#ff6a45', 0, 1),
      F('burnTail', 92, 74, '#8a7350', 18),
      F('scarPaw', 34, 88, '#c98f2f', 0, 0.9),
      F('ashPuff', 28, 40, '#6f6a5c', 0, 0.8),
      F('smolderMouth', 40, 66, '#e34325', 0, 0.8),
    ],
  },
  'cinder-sprite': {
    kind: 'moth', hue: '#7a4a34', hue2: '#4a2c20', glow: '#ff6a45', size: 0.8, eye: 'glow',
    features: [
      F('glassWings', 60, 46, '#ffb27e', 0, 1, '#e34325'),
      F('emberTail', 60, 84, '#ff6a45', 0, 1),
      F('sparkHalo', 60, 22, '#f0cd7d', 0, 0.9),
      F('ashDust', 42, 76, '#8a7350', 0, 0.8),
      F('coalCore', 60, 56, '#2b2115', 0, 0.7),
      F('flameAntenna', 60, 20, '#f0cd7d', 0, 0.9),
    ],
  },
  'rust-hound': {
    kind: 'wolf', hue: '#6e4a32', hue2: '#42301f', glow: '#c98f2f', size: 1, eye: 'glow',
    features: [
      F('rustPatches', 52, 58, '#a3542c', 0, 1),
      F('boneJaw', 30, 64, '#d8cbb0', 0, 0.9),
      F('chainCollar', 44, 60, '#6f6a5c', 0, 1),
      F('hookTail', 88, 70, '#6e4a32', 12),
      F('flakingArmour', 70, 44, '#8a5a38', 0, 0.9),
      F('tornEar', 74, 24, '#42301f', 8),
      F('dustTrail', 90, 90, '#8a7350', 0, 0.8),
    ],
  },
  'glass-moth': {
    kind: 'moth', hue: '#cfd8dc', hue2: '#9aa8b2', glow: '#8be9d8', size: 0.85, eye: 'white',
    features: [
      F('paneWings', 60, 46, '#dfe9ee', 0, 1, '#8be9d8'),
      F('crackWing', 40, 40, '#e9e4d4', -12),
      F('prismDust', 60, 80, '#bfe8e0', 0, 1),
      F('glassAntennae', 60, 18, '#cfd8dc', 0, 0.9),
      F('refractBody', 60, 56, '#e9e4d4', 0, 0.9),
      F('shardLegs', 60, 86, '#9aa8b2', 0, 0.8),
    ],
  },
  'veil-monger': {
    kind: 'humanoid', hue: '#4a4360', hue2: '#2c2740', glow: '#f0cd7d', size: 1, eye: 'slit',
    features: [
      F('tatteredCloak', 60, 70, '#5c5478', 0, 1.1, '#2c2740'),
      F('maskLantern', 60, 26, '#f0cd7d', 0, 0.9),
      F('cutHands', 30, 72, '#c9a34f', 0, 0.9),
      F('priceTag', 80, 58, '#e9e4d4', 6, 0.8),
      F('veilSpool', 88, 78, '#6a628a', 0, 0.8),
      F('shadowHem', 60, 96, '#2c2740', 0, 1.1),
      F('haggleBrow', 60, 20, '#8a82a8', 0, 0.9),
    ],
  },
  'bell-tender': {
    kind: 'humanoid', hue: '#8a7350', hue2: '#5c4a30', glow: '#e2ae4f', size: 0.95, eye: 'glow',
    features: [
      F('shoulderBell', 74, 40, '#e2ae4f', 0, 0.9),
      F('ropeSleeve', 32, 70, '#8a6f3f', 0, 0.9),
      F('bellTollRing', 60, 30, '#f0cd7d', 0, 1),
      F('copperCuff', 88, 74, '#c98f2f', 0, 0.8),
      F('kneelWear', 60, 94, '#5c4a30', 0, 0.9),
      F('muffledHem', 46, 88, '#6a5a3c', 0, 0.8),
    ],
  },
  'kiln-brute': {
    kind: 'brute', hue: '#6e5a48', hue2: '#453628', glow: '#ff6a45', size: 1.15, eye: 'red',
    features: [
      F('glowCracks', 60, 60, '#ff6a45', 0, 1.2),
      F('moltenFist', 92, 66, '#ff6a45', 0, 1),
      F('ironCollar', 60, 40, '#453628', 0, 1),
      F('ashShelf', 60, 26, '#8a7350', 0, 1.1),
      F('clayBoots', 60, 96, '#453628', 0, 1),
      F('kilnMouth', 60, 46, '#2b2115', 0, 0.9),
      F('heatHalo', 60, 60, '#e34325', 0, 1.3),
    ],
  },
  'ink-leech': {
    kind: 'serpent', hue: '#2c3040', hue2: '#181b26', glow: '#4fd8c2', size: 0.95, eye: 'slit',
    features: [
      F('inkDrip', 60, 92, '#181b26', 0, 1),
      F('quillSpine', 60, 36, '#8a82a8', 0, 1),
      F('suckerMouth', 30, 66, '#4fd8c2', 0, 0.9),
      F('inkPool', 60, 100, '#181b26', 0, 1.1),
      F('fadedScales', 74, 52, '#3a4054', 0, 1),
      F('dabNose', 34, 58, '#181b26', 0, 0.8),
    ],
  },
  'bone-scrivener': {
    kind: 'statue', hue: '#d8cbb0', hue2: '#a89878', glow: '#f0cd7d', size: 1.05, eye: 'white',
    features: [
      F('ribCage', 60, 62, '#e9e4d4', 0, 1),
      F('femurQuill', 36, 44, '#e9e4d4', -20, 0.9),
      F('pageSash', 60, 70, '#c9a34f', 8, 1),
      F('jointKnuckles', 86, 68, '#a89878', 0, 0.9),
      F('spineStack', 78, 92, '#cbbfa4', -6, 0.9),
      F('eyeSockets', 60, 26, '#2b2115', 0, 0.8),
      F('inkStain', 46, 84, '#181b26', 0, 0.8),
    ],
  },
  'ashen-warden': {
    kind: 'knight', hue: '#5c544c', hue2: '#3a352f', glow: '#e2ae4f', size: 1.1, eye: 'red',
    features: [
      F('helmSlit', 60, 26, '#e2ae4f', 0, 0.9),
      F('clockFace', 60, 58, '#c9a34f', 0, 0.9),
      F('ashSeal', 60, 80, '#2b2115', 0, 0.8),
      F('ringHalo', 60, 18, '#e2ae4f', 0, 0.9),
      F('ashPlume', 60, 12, '#8a7350', 0, 0.9),
      F('wardenSpear', 94, 50, '#c9a34f', 0, 1.1),
      F('sealArms', 60, 66, '#453628', 0, 1),
    ],
  },
  'crownless-furnace': {
    kind: 'vessel', hue: '#5c4a3c', hue2: '#3a2e24', glow: '#ff6a45', size: 1.3, eye: 'red',
    features: [
      F('mouthGlow', 60, 34, '#ff6a45', 0, 1),
      F('ironRibs', 60, 62, '#3a2e24', 0, 1.1),
      F('crownGap', 60, 14, '#c98f2f', 0, 0.9),
      F('slagDrips', 60, 96, '#e34325', 0, 1),
      F('stokerDoor', 60, 78, '#2b2115', 0, 0.8),
      F('emberSprite', 92, 30, '#ff6a45', 0, 0.6),
      F('heatShimmer', 60, 40, '#f0cd7d', 0, 1),
      F('ashWings', 60, 50, '#8a7350', 0, 1),
    ],
  },

  /* ══ 落败村庄 ══ */
  'straw-effigy': {
    kind: 'effigy', hue: '#b9985c', hue2: '#7a5f33', glow: '#e2ae4f', size: 1, eye: 'none',
    features: [
      F('crookedScythe', 80, 22, '#cfd3dc', -18, 1, '#8a8f9c'),
      F('crackedHat', 60, 16, '#6d5527', 6, 0.9),
      F('buttonEyes', 60, 34, '#2b2115', 0, 0.9),
      F('strawBurst', 36, 66, '#d9b96c', 0, 1),
      F('ropeWaist', 60, 76, '#8a6f3f', 0, 1),
      F('tatteredRobe', 44, 92, '#7a5f33', 0, 1),
      F('crowPerch', 90, 28, '#23262e', 0, 0.8),
    ],
  },
  'village-scavenger': {
    kind: 'humanoid', hue: '#7a6a4c', hue2: '#4c4230', glow: '#c98f2f', size: 0.9, eye: 'white',
    features: [
      F('hoeStaff', 32, 40, '#8a7350', 8, 1.1),
      F('patchCloak', 60, 66, '#5c5240', 0, 1.1, '#4c4230'),
      F('bulgeSack', 88, 76, '#8a6f3f', 0, 0.9),
      F('bentPosture', 60, 50, '#7a6a4c', 0, 1),
      F('toothGap', 60, 40, '#2b2115', 0, 0.8),
      F('mudBoots', 60, 96, '#4c4230', 0, 0.9),
      F('coinGlint', 86, 70, '#e2ae4f', 0, 0.6),
    ],
  },
  'crow-swarm': {
    kind: 'swarm', hue: '#23262e', hue2: '#15171e', glow: '#f0cd7d', size: 1.05, eye: 'red',
    features: [
      F('crowRing', 60, 50, '#23262e', 0, 1.2, '#15171e'),
      F('glintEyes', 60, 46, '#f0cd7d', 0, 1),
      F('beakFlash', 44, 34, '#8a8f9c', 0, 0.8),
      F('wingsBlur', 74, 62, '#15171e', 0, 1.1),
      F('strawPick', 60, 84, '#d9b96c', 0, 0.7),
      F('dustWake', 60, 92, '#8a7350', 0, 1),
    ],
  },
  'harvest-hound': {
    kind: 'wolf', hue: '#6a5a3a', hue2: '#3f3520', glow: '#c98f2f', size: 0.95, eye: 'red',
    features: [
      F('weaveCollar', 44, 58, '#d9b96c', 0, 1),
      F('stubbleFur', 60, 52, '#8a7a4c', 0, 1),
      F('scarSnout', 30, 62, '#4c4230', 0, 0.8),
      F('thickTail', 90, 68, '#6a5a3a', 14),
      F('bloodScent', 90, 40, '#e34325', 0, 0.8),
      F('fieldHound', 60, 94, '#3f3520', 0, 1),
      F('chainedPaw', 36, 88, '#6f6a5c', 0, 0.8),
    ],
  },
  'scythe-warden': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 1.05, eye: 'glow',
    features: [
      F('greatScythe', 84, 18, '#cfd3dc', -14, 1.2, '#8a8f9c'),
      F('strawBraid', 60, 14, '#d9b96c', 0, 0.9),
      F('gatedGlove', 30, 72, '#5c4224', 0, 0.9),
      F('hollowHood', 60, 26, '#3a4224', 0, 0.9),
      F('scarePost', 96, 60, '#8a7350', 0, 1),
      F('sickleBelt', 60, 80, '#c98f2f', 0, 0.8),
      F('stalkersGait', 60, 96, '#3a4224', 0, 1),
    ],
  },
  'famine-effigy': {
    kind: 'effigy', hue: '#8a7350', hue2: '#5c4a30', glow: '#e34325', size: 1.2, eye: 'none',
    features: [
      F('hollowMouth', 60, 38, '#2b2115', 0, 1),
      F('grainSpines', 60, 20, '#d9b96c', 0, 1.1),
      F('doubleScythe', 60, 30, '#8a8f9c', 0, 1.1, '#cfd3dc'),
      F('emaciatedStraw', 42, 66, '#a8915c', 0, 1),
      F('hungryHalo', 60, 24, '#e34325', 0, 1),
      F('sunkShoulders', 60, 48, '#5c4a30', 0, 1),
      F('crowCrown', 60, 12, '#23262e', 0, 0.8),
    ],
  },
  'the-last-harvest': {
    kind: 'brute', hue: '#a8915c', hue2: '#6d5527', glow: '#e2ae4f', size: 1.3, eye: 'red',
    features: [
      F('twinGiantScythes', 60, 26, '#cfd3dc', 0, 1.3, '#8a8f9c'),
      F('wheatWall', 60, 92, '#d9b96c', 0, 1.3),
      F('sunkenCheeks', 60, 36, '#6d5527', 0, 0.9),
      F('strawBeard', 60, 46, '#d9b96c', 0, 1),
      F('blessingHands', 30, 62, '#c9a34f', 0, 0.9),
      F('harvestHalo', 60, 14, '#f0cd7d', 0, 1.1),
      F('drownedField', 60, 102, '#5c6a3a', 0, 1.2),
    ],
  },

  /* ══ 生机森林 ══ */
  'forest-wolf': {
    kind: 'wolf', hue: '#4a5a48', hue2: '#2c362c', glow: '#8be9d8', size: 0.9, eye: 'glow',
    features: [
      F('mossMane', 60, 40, '#2e9e6b', 0, 1),
      F('whitewing', 36, 60, '#e9e4d4', 0, 0.8),
      F('packScar', 70, 56, '#2c362c', 0, 0.9),
      F('greenEye', 60, 28, '#8be9d8', 0, 0.8),
      F('rootTail', 88, 70, '#4a5a48', 16),
      F('barkNails', 60, 90, '#6d5527', 0, 0.8),
    ],
  },
  'bramble-crawler': {
    kind: 'serpent', hue: '#3a5a3c', hue2: '#22332a', glow: '#6b8f3d', size: 1, eye: 'slit',
    features: [
      F('thornCoil', 60, 56, '#5c4224', 0, 1.1),
      F('venomTip', 30, 64, '#b8e04f', 0, 0.9),
      F('leafCap', 60, 26, '#2e9e6b', 0, 0.9),
      F('rootFeet', 60, 92, '#6d5527', 0, 1),
      F('barkPlate', 72, 48, '#5c4224', 0, 1),
      F('sporeMouth', 34, 68, '#b8e04f', 0, 0.8),
    ],
  },
  'glowmoth-cluster': {
    kind: 'swarm', hue: '#3a5a4c', hue2: '#22332a', glow: '#8be9d8', size: 1, eye: 'glow',
    features: [
      F('mothWheel', 60, 52, '#3a5a4c', 0, 1.15, '#22332a'),
      F('fireflyCore', 60, 52, '#8be9d8', 0, 0.9),
      F('dustVeil', 60, 40, '#bfe8e0', 0, 1.1),
      F('blinkWing', 44, 36, '#8be9d8', 0, 0.8),
      F('trailGlow', 60, 86, '#4fd8c2', 0, 1),
      F('huskShell', 76, 68, '#22332a', 0, 0.8),
    ],
  },
  'root-stalker': {
    kind: 'serpent', hue: '#5c4224', hue2: '#3a2c18', glow: '#c98f2f', size: 1, eye: 'slit',
    features: [
      F('rootWhip', 88, 40, '#6d5527', -24, 1.1),
      F('soilCrest', 60, 28, '#3a2c18', 0, 1),
      F('trenchMouth', 30, 66, '#22332a', 0, 0.9),
      F('sappingGrasp', 60, 90, '#5c4224', 0, 1),
      F('sapVine', 44, 48, '#b8e04f', 0, 0.9),
      F('burrowMud', 60, 100, '#3a2c18', 0, 1),
      F('eyePits', 34, 56, '#c98f2f', 0, 0.7),
    ],
  },
  'alpha-wolf': {
    kind: 'wolf', hue: '#3a4a3c', hue2: '#20281f', glow: '#f0cd7d', size: 1.15, eye: 'red',
    features: [
      F('boneCrown', 60, 16, '#d8cbb0', 0, 0.9),
      F('silverBite', 34, 58, '#c0c8d8', 0, 0.8),
      F('howlMouth', 30, 62, '#e9e4d4', 0, 0.9),
      F('tornBanner', 88, 34, '#4a3a20', 0, 0.9),
      F('pawPrints', 60, 94, '#20281f', 0, 1),
      F('packAura', 60, 60, '#f0cd7d', 0, 1.2),
      F('scarredEar', 74, 22, '#20281f', 6),
    ],
  },
  'ancient-treant': {
    kind: 'tree', hue: '#5c4224', hue2: '#3a2c18', glow: '#2e9e6b', size: 1.15, eye: 'glow',
    features: [
      F('knotFace', 60, 40, '#3a2c18', 0, 0.9),
      F('branchArms', 60, 56, '#6d5527', 0, 1.2),
      F('barkPlates', 60, 66, '#5c4224', 0, 1.1),
      F('canopyHalo', 60, 18, '#2e9e6b', 0, 1.1),
      F('pollenBurst', 78, 30, '#f0cd7d', 0, 0.9),
      F('rootAnchor', 60, 96, '#3a2c18', 0, 1.1),
      F('mossShoulder', 44, 34, '#2e9e6b', 0, 0.8),
    ],
  },
  'heart-of-the-grove': {
    kind: 'tree', hue: '#4a5a3c', hue2: '#26332a', glow: '#8be9d8', size: 1.3, eye: 'glow',
    features: [
      F('ringHeart', 60, 54, '#f0cd7d', 0, 1.1),
      F('thornCrown', 60, 16, '#2e9e6b', 0, 1.1),
      F('veinBark', 60, 70, '#8be9d8', 0, 1.2),
      F('rootPillars', 60, 94, '#26332a', 0, 1.2),
      F('wolfMark', 84, 44, '#e9e4d4', 0, 0.8),
      F('witherBough', 30, 26, '#6d5527', 0, 1),
      F('groveHalo', 60, 12, '#4fd8c2', 0, 1.1),
    ],
  },

  /* ══ 苔藓沼泽 ══ */
  'mire-crocodile': {
    kind: 'croc', hue: '#4c5a3a', hue2: '#2e3624', glow: '#6b8f3d', size: 1, eye: 'glow',
    features: [
      F('mossBack', 60, 40, '#5c7a3c', 0, 1.1),
      F('deadRoll', 60, 62, '#2e3624', 0, 1),
      F('mudMuzzle', 30, 66, '#3a2c18', 0, 0.9),
      F('siltEyes', 34, 56, '#b8e04f', 0, 0.7),
      F('tugClaw', 78, 74, '#4c5a3a', 0, 0.9),
      F('bubbleGulp', 36, 74, '#b8e04f', 0, 0.8),
      F('sapRing', 60, 84, '#6b8f3d', 0, 1.1),
    ],
  },
  'moss-lurker': {
    kind: 'blob', hue: '#3a5a42', hue2: '#22332a', glow: '#b8e04f', size: 0.95, eye: 'white',
    features: [
      F('mossFur', 60, 44, '#5c7a3c', 0, 1.1),
      F('sporePore', 60, 66, '#b8e04f', 0, 1),
      F('clawStump', 40, 86, '#22332a', 0, 0.8),
      F('dripVenom', 44, 94, '#8fae3c', 0, 0.9),
      F('halfSunken', 60, 98, '#2e3624', 0, 1),
      F('watchPit', 60, 40, '#e9e4d4', 0, 0.8),
    ],
  },
  'reed-stalker': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 0.95, eye: 'slit',
    features: [
      F('reedHood', 60, 24, '#7a8a4c', 0, 1),
      F('reedLance', 30, 36, '#8a9a5c', 10, 1.1),
      F('stemCloak', 60, 66, '#5c6a3a', 0, 1.1, '#3a4224'),
      F('stalkBend', 60, 50, '#7a8a4c', 0, 1),
      F('jointKnees', 60, 84, '#3a4224', 0, 0.9),
      F('reedShadow', 60, 96, '#3a4224', 0, 1),
    ],
  },
  'bog-witchling': {
    kind: 'hag', hue: '#4c5a3a', hue2: '#2e3624', glow: '#b8e04f', size: 0.85, eye: 'glow',
    features: [
      F('mudPigtails', 60, 16, '#3a2c18', 0, 0.9),
      F('gasBubbles', 74, 78, '#b8e04f', 0, 0.9),
      F('clayKettle', 88, 70, '#5c4224', 0, 0.8),
      F('swampWig', 60, 22, '#5c7a3c', 0, 1),
      F('mudSplat', 44, 66, '#3a2c18', 0, 1),
      F('cackleMouth', 60, 36, '#2e3624', 0, 0.9),
      F('toadFriend', 34, 88, '#6b8f3d', 0, 0.7),
    ],
  },
  'swamp-hag': {
    kind: 'hag', hue: '#3a4a34', hue2: '#22332a', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('cauldronArm', 84, 58, '#2b2115', 0, 1),
      F('boneStaff', 30, 30, '#d8cbb0', 6, 1.2),
      F('hairWisps', 60, 18, '#5c7a3c', 0, 1.1),
      F('curseBeads', 60, 58, '#b8e04f', 0, 0.9),
      F('festerHands', 44, 72, '#8fae3c', 0, 0.9),
      F('bogSkirt', 60, 92, '#22332a', 0, 1.1),
      F('toadThrone', 60, 98, '#4c5a3a', 0, 0.8),
    ],
  },
  'ancient-croc': {
    kind: 'croc', hue: '#3a4a32', hue2: '#20281f', glow: '#e2ae4f', size: 1.25, eye: 'red',
    features: [
      F('oldScale', 60, 44, '#4c5a3a', 0, 1.2),
      F('mossCrown', 60, 26, '#5c7a3c', 0, 1),
      F('giantJaw', 30, 66, '#20281f', 0, 1),
      F('rageVein', 70, 56, '#e34325', 0, 0.9),
      F('stumpLeg', 80, 80, '#2e3624', 0, 0.9),
      F('deepMud', 60, 98, '#2e3624', 0, 1),
      F('scarRidge', 60, 38, '#20281f', 0, 1),
    ],
  },
  'mother-of-the-mire': {
    kind: 'blob', hue: '#3a4436', hue2: '#222b22', glow: '#8fae3c', size: 1.3, eye: 'red',
    features: [
      F('mudBelly', 60, 66, '#3a4436', 0, 1.2, '#222b22'),
      F('twinClaw', 60, 44, '#222b22', 0, 1.1),
      F('siltRing', 60, 88, '#5c6a3a', 0, 1.3),
      F('sporeHalo', 60, 24, '#b8e04f', 0, 1.1),
      F('crocChild', 92, 80, '#4c5a3a', 0, 0.7),
      F('drainEyes', 60, 40, '#8fae3c', 0, 0.9),
      F('bogBloom', 44, 30, '#b8e04f', 0, 0.9),
    ],
  },

  /* ══ 恶臭下水道 ══ */
  'sewer-rat-king': {
    kind: 'rat', hue: '#5c5a4a', hue2: '#38362c', glow: '#e2ae4f', size: 1.15, eye: 'red',
    features: [
      F('tailCrown', 60, 16, '#6f6a5c', 0, 1),
      F('ironBands', 60, 60, '#8a8f9c', 0, 1),
      F('royalSlop', 60, 94, '#5c6a3a', 0, 1),
      F('yellowFangs', 34, 66, '#d8cbb0', 0, 0.9),
      F('subjectRing', 60, 76, '#38362c', 0, 1.1),
      F('plagueMuzzle', 36, 64, '#4a4838', 0, 0.8),
      F('coinStash', 88, 88, '#e2ae4f', 0, 0.8),
    ],
  },
  'plague-rat': {
    kind: 'rat', hue: '#54524a', hue2: '#32312c', glow: '#8fae3c', size: 0.8, eye: 'red',
    features: [
      F('sorePaw', 36, 86, '#8fae3c', 0, 0.8),
      F('wetFur', 60, 60, '#42413a', 0, 1),
      F('feverGlow', 60, 30, '#e34325', 0, 0.7),
      F('gnawedPipe', 88, 40, '#8a8f9c', 0, 0.8),
      F('twitchTail', 90, 76, '#54524a', 14),
      F('runawayEyes', 60, 28, '#e34325', 0, 0.7),
    ],
  },
  'filth-slime': {
    kind: 'blob', hue: '#6a6a4a', hue2: '#42422c', glow: '#8fae3c', size: 1.05, eye: 'white',
    features: [
      F('slopBody', 60, 62, '#6a6a4a', 0, 1.15, '#42422c'),
      F('corrodeMist', 60, 40, '#8fae3c', 0, 1.1),
      F('stinkLine', 60, 24, '#8a8f5c', 0, 1),
      F('gritSplat', 44, 92, '#42422c', 0, 1),
      F('dullEye', 60, 50, '#e9e4d4', 0, 0.8),
      F('pipeRind', 74, 78, '#5c5a4a', 0, 0.8),
    ],
  },
  'gutter-roach': {
    kind: 'roach', hue: '#4c3a2c', hue2: '#2c2018', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('glossShell', 60, 56, '#5c4232', 0, 1.1),
      F('whiskerFan', 34, 40, '#6d5527', 0, 1.2),
      F('clawSnaps', 30, 62, '#3a2c18', 0, 0.9),
      F('rotGoo', 60, 92, '#8fae3c', 0, 1),
      F('hopperLegs', 60, 84, '#4c3a2c', 0, 1),
      F('gritEye', 60, 36, '#e34325', 0, 0.7),
    ],
  },
  'pipe-warden': {
    kind: 'construct', hue: '#4a4c44', hue2: '#2c2e28', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('gateArmour', 60, 60, '#5c5e54', 0, 1.1),
      F('wrenchFist', 30, 68, '#8a8f9c', -16, 1),
      F('pipeVeins', 60, 44, '#6a6a5c', 0, 1.1),
      F('sludgeVent', 74, 30, '#8fae3c', 0, 0.9),
      F('valveEye', 60, 28, '#e34325', 0, 0.8),
      F('chainLeg', 84, 88, '#6f6a5c', 0, 1),
      F('dripHelm', 60, 18, '#4a4c44', 0, 0.9),
    ],
  },
  'the-bloated-sovereign': {
    kind: 'brute', hue: '#6a6248', hue2: '#423c2c', glow: '#8fae3c', size: 1.35, eye: 'white',
    features: [
      F('giantSlop', 60, 62, '#6a6248', 0, 1.25, '#423c2c'),
      F('festerPores', 60, 50, '#8fae3c', 0, 1.1),
      F('fatMembrane', 60, 84, '#7a7258', 0, 1.2),
      F('crownOintment', 60, 18, '#e2ae4f', 0, 0.9),
      F('roarStench', 60, 34, '#8a8f5c', 0, 1.1),
      F('crackedShell', 60, 72, '#423c2c', 0, 1),
      F('minionDrip', 84, 92, '#6a6a5c', 0, 1),
    ],
  },

  /* ══ 繁华皇都 ══ */
  'royal-halberdier': {
    kind: 'knight', hue: '#8a8f9c', hue2: '#5c5e68', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('halberdShaft', 32, 22, '#8a7350', 4, 1.2, '#cfd3dc'),
      F('crestPlume', 60, 14, '#e34325', 0, 0.9),
      F('lanceLivery', 60, 62, '#f0cd7d', 0, 0.9),
      F('breakArmour', 84, 60, '#cfd3dc', 0, 0.8),
      F('stepLines', 60, 94, '#5c5e68', 0, 1),
      F('shieldBoss', 90, 66, '#f0cd7d', 0, 0.8),
    ],
  },
  'white-tower-adept': {
    kind: 'humanoid', hue: '#e9e4d4', hue2: '#b8b0a0', glow: '#8fc3e8', size: 0.9, eye: 'glow',
    features: [
      F('towerRobe', 60, 64, '#f2eee0', 0, 1.1, '#b8b0a0'),
      F('bindSigil', 60, 56, '#8fc3e8', 0, 0.8),
      F('quillBelt', 30, 78, '#8a7350', 0, 0.8),
      F('chalkSmudge', 60, 44, '#c8c0ae', 0, 0.9),
      F('rookieHat', 60, 16, '#f2eee0', 8, 0.9),
      F('fumbleGlow', 60, 34, '#8fc3e8', 0, 0.8),
    ],
  },
  'gilded-inquisitor': {
    kind: 'knight', hue: '#c9a34f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.05, eye: 'slit',
    features: [
      F('goldHammer', 30, 30, '#e2ae4f', 10, 1.1),
      F('codeCodex', 86, 62, '#8a3a2c', 0, 0.9),
      F('guiltRing', 60, 22, '#f0cd7d', 0, 0.9),
      F('leafGold', 60, 52, '#f0cd7d', 0, 1),
      F('chainVerdict', 60, 84, '#8a6f2a', 0, 0.9),
      F('sermonCuff', 34, 70, '#e2ae4f', 0, 0.8),
    ],
  },
  'plaza-crier': {
    kind: 'humanoid', hue: '#8a3a2c', hue2: '#5c241c', glow: '#f0cd7d', size: 0.9, eye: 'white',
    features: [
      F('hornMegaphone', 34, 36, '#e2ae4f', 14, 0.9),
      F('drumBelt', 60, 80, '#8a6f2a', 0, 0.9),
      F('scrollQuiver', 88, 44, '#e9e4d4', 0, 1),
      F('medallion', 60, 54, '#f0cd7d', 0, 0.9),
      F('pointStaff', 30, 62, '#8a7350', 0, 1),
      F('shoutingMouth', 60, 34, '#5c241c', 0, 0.8),
    ],
  },
  'royal-champion': {
    kind: 'knight', hue: '#c0c8d8', hue2: '#8a92a8', glow: '#f0cd7d', size: 1.15, eye: 'red',
    features: [
      F('towerShield', 88, 60, '#c0c8d8', 0, 1.1, '#8a92a8'),
      F('lanceTip', 26, 28, '#e9e4d4', -12, 1.2),
      F('crushCharge', 60, 88, '#8a92a8', 0, 1),
      F('plumeGold', 60, 12, '#f0cd7d', 0, 0.9),
      F('chainMail', 60, 66, '#8a92a8', 0, 1.1),
      F('dentedBrim', 60, 22, '#c0c8d8', 0, 0.8),
    ],
  },
  'lord-inquisitor': {
    kind: 'knight', hue: '#e2ae4f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.15, eye: 'slit',
    features: [
      F('twinHammers', 60, 34, '#f0cd7d', 0, 1.1),
      F('haloJudge', 60, 14, '#f0cd7d', 0, 1),
      F('goldMantle', 60, 64, '#8a6f2a', 0, 1.15, '#8a3a2c'),
      F('sealSleeve', 34, 70, '#8a3a2c', 0, 0.8),
      F('murmurChin', 60, 38, '#5c241c', 0, 0.8),
      F('docketHand', 86, 56, '#e9e4d4', 0, 0.8),
    ],
  },
  'sun-crown-warden': {
    kind: 'statue', hue: '#f0cd7d', hue2: '#b8963a', glow: '#f0cd7d', size: 1.3, eye: 'glow',
    features: [
      F('sunCrown', 60, 14, '#f7e3ae', 0, 1.1),
      F('radiantHalo', 60, 30, '#f0cd7d', 0, 1.2),
      F('twinScepters', 60, 60, '#e2ae4f', 0, 1.1),
      F('crackLaw', 60, 76, '#8a6f2a', 0, 1),
      F('pillarBase', 60, 96, '#b8963a', 0, 1.1),
      F('decreeEyes', 60, 36, '#e34325', 0, 0.8),
      F('goldenDust', 60, 90, '#f7e3ae', 0, 1),
    ],
  },

  /* ══ 皇都外环 ══ */
  'toll-enforcer': {
    kind: 'knight', hue: '#6a5a42', hue2: '#423826', glow: '#c98f2f', size: 1, eye: 'slit',
    features: [
      F('ironRod', 30, 26, '#8a8f9c', 8, 1.1),
      F('gateShield', 88, 60, '#5c4e38', 0, 1, '#423826'),
      F('ledgerClamp', 60, 56, '#e9e4d4', 0, 0.9),
      F('seizureHands', 34, 72, '#6a5a42', 0, 0.9),
      F('dutyWhistle', 60, 42, '#c98f2f', 0, 0.7),
      F('borderStrap', 60, 82, '#423826', 0, 1),
    ],
  },
  'road-bandit': {
    kind: 'humanoid', hue: '#5c4a38', hue2: '#382c20', glow: '#e2ae4f', size: 0.95, eye: 'red',
    features: [
      F('lootBlade', 30, 30, '#cfd3dc', 20, 1.1),
      F('eyePatchCoin', 60, 28, '#e2ae4f', 0, 0.7),
      F('lootBelt', 60, 80, '#8a6f3f', 0, 1),
      F('greedyGrin', 60, 36, '#382c20', 0, 0.9),
      F('dustRag', 60, 46, '#6a5a42', 0, 0.9),
      F('bootSpurs', 60, 94, '#8a8f9c', 0, 0.8),
    ],
  },
  'caravan-deserter': {
    kind: 'humanoid', hue: '#7a6a54', hue2: '#4c4232', glow: '#c98f2f', size: 0.95, eye: 'white',
    features: [
      F('crateBack', 78, 56, '#8a7350', 0, 1),
      F('crossbowSlung', 32, 34, '#8a7350', 0, 1),
      F('dustHaze', 60, 88, '#a8915c', 0, 1.1),
      F('tornCrest', 60, 52, '#8a3a2c', 0, 0.8),
      F('shufflingGait', 60, 94, '#4c4232', 0, 0.9),
      F('waryEyes', 60, 30, '#e9e4d4', 0, 0.8),
    ],
  },
  'wall-sentinel': {
    kind: 'knight', hue: '#7a7268', hue2: '#4c463e', glow: '#c98f2f', size: 1.05, eye: 'slit',
    features: [
      F('cremeriePost', 90, 30, '#8a8272', 0, 1),
      F('pikeStand', 30, 20, '#cfd3dc', 14, 1.2),
      F('gateLantern', 86, 62, '#f0cd7d', 0, 0.8),
      F('cuffWorn', 34, 70, '#4c463e', 0, 0.8),
      F('wallShield', 60, 58, '#7a7268', 0, 1),
      F('dutyStains', 60, 88, '#4c463e', 0, 1),
    ],
  },
  'border-marshal': {
    kind: 'brute', hue: '#5c5248', hue2: '#38322c', glow: '#e2ae4f', size: 1.2, eye: 'red',
    features: [
      F('heavyMaul', 30, 34, '#8a8f9c', 12, 1.1),
      F('ironArray', 60, 60, '#4c463e', 0, 1.1),
      F('marshalCrest', 60, 16, '#e2ae4f', 0, 0.9),
      F('commandBolt', 84, 64, '#8a8f9c', 0, 0.8),
      F('grindJaw', 60, 40, '#38322c', 0, 0.9),
      F('stampBoots', 60, 94, '#38322c', 0, 1),
    ],
  },
  'broken-seal-gatekeeper': {
    kind: 'gate', hue: '#6a5a42', hue2: '#3f3424', glow: '#e2ae4f', size: 1.3, eye: 'red',
    features: [
      F('sealDoor', 60, 54, '#8a8f9c', 0, 1.2, '#423826'),
      F('crackedSeal', 60, 30, '#e2ae4f', 0, 1),
      F('gateMaul', 30, 40, '#8a8f9c', 0, 1.1),
      F('lockDownBars', 60, 72, '#5c4e38', 0, 1.1),
      F('callBells', 88, 26, '#c98f2f', 0, 0.8),
      F('dutyMud', 60, 98, '#3f3424', 0, 1.1),
      F('sentinelGlow', 60, 18, '#e2ae4f', 0, 0.9),
    ],
  },

  /* ══ 血色之地 ══ */
  'blood-cultist': {
    kind: 'humanoid', hue: '#5c241c', hue2: '#32120e', glow: '#e34325', size: 0.95, eye: 'red',
    features: [
      F('ritualBlade', 30, 34, '#8a8f9c', 10, 1),
      F('bloodSigil', 60, 54, '#e34325', 0, 0.9),
      F('offeringBowl', 86, 72, '#5c241c', 0, 0.8),
      F('scarLines', 60, 40, '#e34325', 0, 0.9),
      F('chantedHood', 60, 24, '#32120e', 0, 0.9),
      F('drippingHem', 60, 94, '#e34325', 0, 1.1),
    ],
  },
  'crimson-berserker': {
    kind: 'brute', hue: '#8a2c22', hue2: '#4c1610', glow: '#e34325', size: 1.2, eye: 'red',
    features: [
      F('wildCleaver', 30, 30, '#cfd3dc', 18, 1.2),
      F('rageVeins', 60, 50, '#e34325', 0, 1.1),
      F('tornPauldron', 84, 40, '#8a2c22', 0, 0.9),
      F('frenzyFoam', 60, 44, '#e9e4d4', 0, 0.8),
      F('bloodSashes', 60, 66, '#e34325', 0, 1.1),
      F('stompMarks', 60, 94, '#4c1610', 0, 1.1),
    ],
  },
  'bone-hill-lurker': {
    kind: 'serpent', hue: '#a83a30', hue2: '#5c1c14', glow: '#e9e4d4', size: 1.05, eye: 'red',
    features: [
      F('bonePile', 60, 92, '#d8cbb0', 0, 1.2),
      F('spikeRibs', 60, 56, '#e9e4d4', 0, 1.1),
      F('tornWound', 74, 62, '#5c1c14', 0, 0.9),
      F('hookEye', 40, 40, '#e9e4d4', 0, 0.7),
      F('clutchClaw', 34, 70, '#a83a30', 0, 0.9),
      F('hillShadow', 60, 84, '#5c1c14', 0, 1.1),
    ],
  },
  'gore-windmill': {
    kind: 'gate', hue: '#7a2c22', hue2: '#481812', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('millBlades', 60, 26, '#8a8f9c', 0, 1.1, '#cfd3dc'),
      F('grindHole', 60, 62, '#481812', 0, 1),
      F('bloodRain', 60, 40, '#e34325', 0, 1.1),
      F('millWheelBody', 60, 74, '#7a2c22', 0, 1.15, '#481812'),
      F('sackMouth', 60, 52, '#e9e4d4', 0, 0.9),
      F('creekBed', 60, 98, '#5c1c14', 0, 1.1),
    ],
  },
  'blood-marshal': {
    kind: 'knight', hue: '#6a1c14', hue2: '#3a0e0a', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('oathBlade', 30, 28, '#cfd3dc', 8, 1.1),
      F('brandSeal', 60, 52, '#e34325', 0, 0.9),
      F('commandPlume', 60, 14, '#e34325', 0, 0.9),
      F('ironMantle', 60, 64, '#4c1610', 0, 1.15, '#3a0e0a'),
      F('frostChill', 34, 44, '#e9e4d4', 0, 0.7),
      F('rallyCry', 60, 38, '#e34325', 0, 0.8),
    ],
  },
  'clotted-altar': {
    kind: 'gate', hue: '#5c1c14', hue2: '#32100c', glow: '#e34325', size: 1.3, eye: 'red',
    features: [
      F('altarSlab', 60, 70, '#6a241c', 0, 1.2, '#32100c'),
      F('twinOfferBlades', 60, 44, '#cfd3dc', 0, 1.1),
      F('bloodShell', 60, 58, '#8a2c22', 0, 1.15),
      F('flameCups', 60, 30, '#e34325', 0, 1),
      F('skinPeel', 84, 78, '#5c1c14', 0, 0.9),
      F('cultistRing', 60, 94, '#32100c', 0, 1.2),
      F('throbGlow', 60, 52, '#e34325', 0, 1.1),
    ],
  },

  /* ══ 魔法之地 ══ */
  'candle-apprentice': {
    kind: 'humanoid', hue: '#4a5a8a', hue2: '#2c3454', glow: '#f0cd7d', size: 0.9, eye: 'glow',
    features: [
      F('candleHalo', 60, 20, '#f0cd7d', 0, 1),
      F('fireSigil', 60, 52, '#ff6a45', 0, 0.8),
      F('bindSpell', 34, 44, '#8fc3e8', 0, 0.8),
      F('sootNose', 60, 32, '#2c3454', 0, 0.7),
      F('bookArm', 86, 62, '#e9e4d4', 0, 0.9),
      F('floatBoots', 60, 92, '#4a5a8a', 0, 0.9),
    ],
  },
  'rune-construct': {
    kind: 'construct', hue: '#3a4460', hue2: '#22283c', glow: '#8fc3e8', size: 1.1, eye: 'glow',
    features: [
      F('runeShield', 86, 58, '#8fc3e8', 0, 1),
      F('runeHammer', 30, 34, '#cfd3dc', 10, 1),
      F('engravedScar', 60, 60, '#8fc3e8', 0, 1),
      F('jointBolts', 60, 46, '#8a8f9c', 0, 1),
      F('stoneCore', 60, 54, '#22283c', 0, 0.8),
      F('sealFeet', 60, 94, '#3a4460', 0, 1),
    ],
  },
  'grimoire-swarm': {
    kind: 'swarm', hue: '#e9e4d4', hue2: '#b8b0a0', glow: '#8fc3e8', size: 1, eye: 'none',
    features: [
      F('bookVortex', 60, 50, '#e9e4d4', 0, 1.15, '#b8b0a0'),
      F('paperBlades', 44, 36, '#f2eee0', 0, 1),
      F('errantPages', 74, 66, '#e9e4d4', 0, 0.9),
      F('inkLeak', 60, 84, '#181b26', 0, 0.9),
      F('manaSip', 60, 40, '#8fc3e8', 0, 1),
      F('rustleSound', 60, 28, '#b8b0a0', 0, 1),
    ],
  },
  'astrolabe-keeper': {
    kind: 'humanoid', hue: '#4c4470', hue2: '#2c2848', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('astrolabe', 86, 50, '#c9a34f', 0, 1),
      F('ringHalo', 60, 22, '#f0cd7d', 0, 1.1),
      F('computeFingers', 34, 70, '#c9a34f', 0, 0.8),
      F('starChart', 60, 58, '#e9e4d4', 0, 0.9),
      F('brassCuff', 32, 64, '#c9a34f', 0, 0.8),
      F('nodCompute', 60, 30, '#2c2848', 0, 0.8),
    ],
  },
  'archmage-tutor': {
    kind: 'statue', hue: '#5c5488', hue2: '#363054', glow: '#8fc3e8', size: 1.25, eye: 'glow',
    features: [
      F('forbiddenSeal', 60, 54, '#e34325', 0, 1),
      F('tutorStaff', 30, 24, '#c9a34f', 6, 1.2),
      F('arcaneAuras', 60, 66, '#8fc3e8', 0, 1.3),
      F('whiteStreak', 60, 26, '#e9e4d4', 0, 1),
      F('gradingHand', 86, 60, '#5c5488', 0, 0.9),
      F('stoneSleeve', 60, 84, '#363054', 0, 1),
      F('gazeGrade', 60, 32, '#8fc3e8', 0, 0.8),
    ],
  },
  'bell-tower-of-spells': {
    kind: 'gate', hue: '#4c4470', hue2: '#2c2848', glow: '#8fc3e8', size: 1.3, eye: 'glow',
    features: [
      F('spireTower', 60, 46, '#5c5488', 0, 1.25, '#363054'),
      F('greatBell', 60, 30, '#c9a34f', 0, 1),
      F('chantRings', 60, 20, '#8fc3e8', 0, 1.15),
      F('brokenScript', 60, 64, '#e34325', 0, 1.1),
      F('suckMouth', 60, 80, '#2c2848', 0, 1),
      F('foundationRunes', 60, 96, '#8fc3e8', 0, 1.1),
    ],
  },

  /* ══ 科技之城 ══ */
  'neon-enforcer': {
    kind: 'construct', hue: '#2c3440', hue2: '#181c24', glow: '#4fd8c2', size: 1.05, eye: 'red',
    features: [
      F('energyShield', 60, 58, '#4fd8c2', 0, 1.1),
      F('taserRod', 30, 44, '#e8f4ff', 8, 1),
      F('visorScan', 60, 28, '#4fd8c2', 0, 0.9),
      F('plateVents', 60, 68, '#3a4450', 0, 1),
      F('neonStripe', 60, 50, '#ff4fd8', 0, 1),
      F('hoverSkids', 60, 94, '#181c24', 0, 1),
    ],
  },
  'drone-swarm': {
    kind: 'swarm', hue: '#2c3440', hue2: '#181c24', glow: '#4fd8c2', size: 1.05, eye: 'red',
    features: [
      F('droneRing', 60, 50, '#2c3440', 0, 1.2, '#181c24'),
      F('laserCross', 60, 46, '#ff4fd8', 0, 1.1),
      F('propBlur', 44, 36, '#8a92a8', 0, 0.9),
      F('jamSignal', 74, 66, '#4fd8c2', 0, 0.9),
      F('formationLights', 60, 76, '#e8f4ff', 0, 1),
      F('scanBeam', 60, 88, '#4fd8c2', 0, 1),
    ],
  },
  'circuit-leech': {
    kind: 'serpent', hue: '#3a4450', hue2: '#222830', glow: '#ff4fd8', size: 1, eye: 'red',
    features: [
      F('wireSkin', 60, 56, '#4a5460', 0, 1.1, '#3a4450'),
      F('siphonMouth', 32, 64, '#ff4fd8', 0, 0.9),
      F('overloadBolt', 74, 40, '#e8f4ff', 0, 1),
      F('chipScales', 70, 60, '#8a92a8', 0, 1),
      F('sparkTrail', 88, 78, '#4fd8c2', 0, 1),
      F('humVibe', 60, 48, '#ff4fd8', 0, 1.1),
    ],
  },
  'chrome-brute': {
    kind: 'brute', hue: '#8a92a8', hue2: '#5c6474', glow: '#4fd8c2', size: 1.25, eye: 'red',
    features: [
      F('hydraulicFist', 30, 62, '#cfd3dc', 0, 1.1),
      F('steamVents', 60, 36, '#e8f4ff', 0, 0.9),
      F('pressureGauge', 60, 58, '#ff4fd8', 0, 0.9),
      F('plateScore', 74, 50, '#5c6474', 0, 1),
      F('chromeGlare', 60, 26, '#e8f4ff', 0, 1),
      F('oilDrip', 84, 88, '#222830', 0, 0.8),
    ],
  },
  'firewall-sentinel': {
    kind: 'statue', hue: '#2c3440', hue2: '#181c24', glow: '#ff4fd8', size: 1.2, eye: 'red',
    features: [
      F('wallAegis', 60, 60, '#ff4fd8', 0, 1.15, '#4fd8c2'),
      F('ionBeam', 30, 40, '#e8f4ff', 10, 1),
      F('deconCannon', 60, 30, '#4fd8c2', 0, 0.9),
      F('circuitFace', 60, 26, '#ff4fd8', 0, 0.9),
      F('guardPost', 60, 94, '#181c24', 0, 1.1),
      F('dataMotes', 60, 18, '#e8f4ff', 0, 1),
    ],
  },
  'zero-shaft-core': {
    kind: 'construct', hue: '#3a4450', hue2: '#222830', glow: '#4fd8c2', size: 1.3, eye: 'glow',
    features: [
      F('shaftShaft', 60, 46, '#4a5460', 0, 1.25, '#2c3440'),
      F('magSeal', 60, 30, '#4fd8c2', 0, 1),
      F('thrustCore', 60, 66, '#ff6a45', 0, 1),
      F('droneBay', 34, 54, '#8a92a8', 0, 1),
      F('boostDials', 86, 44, '#ff4fd8', 0, 0.9),
      F('meltWire', 84, 84, '#ff6a45', 0, 0.9),
      F('pressurizeHalo', 60, 20, '#e8f4ff', 0, 1.1),
    ],
  },
};
