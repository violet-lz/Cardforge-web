// 怪物外形视觉规格 · 前半（第一、二幕相关地域）
import { F, type MonsterVisualSpec } from './monsterVisualTypes';

export const VISUALS_A: Record<string, MonsterVisualSpec> = {
  /* ══ 灰烬荒原 ══ */
  ashling: {
    kind: 'beast', hue: '#5a544c', hue2: '#3a352f', glow: '#e34325', size: 0.9, eye: 'red',
    features: [
      F('crackVein', 60, 55, '#ff6a45', 0, 1.1),           // 0: torso ember-cracked skin
      F('scorchSpines', 60, 18, '#8a7350', 0, 0.9, '#5a544c'), // 1: head spiky tufts
      F('clawArms', 28, 48, '#c98f2f', -10, 0.9),          // 2: left attack claw
      F('clawArms', 92, 48, '#c98f2f', 10, 0.9),           // 3: right attack claw
      F('burnTail', 96, 78, '#ff6a45', 22, 1.0),           // 4: curving ember tail
      F('smolderMouth', 48, 32, '#e34325', 0, 0.8),        // 5: fire maw
      F('ashDust', 60, 92, '#6f6a5c', 0, 0.7),             // 6: ground ash cloud
      F('emberGlow', 60, 65, '#e34325', 0, 1.2, '#3a352f'), // 7: inner body glow
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 52, y: 22 }, boundFeatures: [1, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 48 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 92, y: 48 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 42, y: 88 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 96, y: 78 }, boundFeatures: [4] },
    ],
  },
  'cinder-sprite': {
    kind: 'moth', hue: '#7a4a34', hue2: '#4a2c20', glow: '#ff6a45', size: 0.7, eye: 'glow',
    features: [
      F('glassWings', 38, 44, '#ffb27e', -8, 1.1, '#ff6a45'),  // 0: left glass-fire wing
      F('glassWings', 82, 44, '#ffb27e', 8, 1.1, '#e34325'),   // 1: right glass-fire wing
      F('flameAntenna', 48, 16, '#f0cd7d', -12, 0.8),       // 2: left antenna
      F('flameAntenna', 72, 16, '#f0cd7d', 12, 0.8),        // 3: right antenna
      F('coalCore', 60, 56, '#2b2115', 0, 0.8),             // 4: dark thorax core
      F('emberHalo', 60, 30, '#ff6a45', 0, 0.9),            // 5: hovering ember ring
      F('sparkDust', 60, 80, '#f0cd7d', 0, 0.7),            // 6: trailing spark dust
      F('flickerMote', 26, 62, '#ff6a45', 0, 0.6),          // 7: floating mote particle
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [2, 3, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 38, y: 44 }, boundFeatures: [0, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 82, y: 44 }, boundFeatures: [1] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 80 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 70, y: 80 }, boundFeatures: [] },
    ],
  },
  'rust-hound': {
    kind: 'wolf', hue: '#6e4a32', hue2: '#42301f', glow: '#c98f2f', size: 0.95, eye: 'glow',
    features: [
      F('rustPlate', 55, 56, '#a3542c', 0, 1.1, '#6e4a32'), // 0: corroded body armour
      F('boneJaw', 24, 52, '#d8cbb0', -6, 0.9),            // 1: exposed iron jaw
      F('chainCollar', 42, 42, '#6f6a5c', 0, 1.0),         // 2: corroded iron collar
      F('hookTail', 96, 64, '#42301f', 16, 0.9),            // 3: hooked metal tail
      F('tornEar', 32, 22, '#42301f', -8, 0.8),             // 4: torn left ear
      F('tornEar', 48, 18, '#6e4a32', 6, 0.7),              // 5: torn right ear
      F('scarPaw', 36, 88, '#a3542c', 0, 0.8),              // 6: scarred front paw
      F('dustTrail', 78, 94, '#8a7350', 0, 0.7),            // 7: ground rust dust
      F('corrodedFang', 22, 60, '#c98f2f', 0, 0.8),         // 8: exposed fangs
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 55, y: 56 }, boundFeatures: [0, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 30, y: 36 }, boundFeatures: [1, 4, 5, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 70 }, boundFeatures: [6] },
      { id: 'armR', parentId: 'root', anchor: { x: 76, y: 70 }, boundFeatures: [] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 92 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 96, y: 64 }, boundFeatures: [3] },
    ],
  },
  'glass-moth': {
    kind: 'moth', hue: '#cfd8dc', hue2: '#9aa8b2', glow: '#8be9d8', size: 0.75, eye: 'white',
    features: [
      F('crystalWings', 36, 44, '#dfe9ee', -6, 1.1, '#8be9d8'), // 0: left prism wing
      F('crystalWings', 84, 44, '#dfe9ee', 6, 1.1, '#bfe8e0'),  // 1: right prism wing
      F('glassAntennae', 50, 14, '#cfd8dc', -10, 0.9),       // 2: left antenna
      F('glassAntennae', 70, 14, '#9aa8b2', 10, 0.9),        // 3: right antenna
      F('prismDust', 60, 78, '#bfe8e0', 0, 0.9),             // 4: trailing prism powder
      F('shardBody', 60, 54, '#e9e4d4', 0, 1.0, '#8be9d8'),  // 5: crystalline thorax
      F('crackSeam', 44, 58, '#9aa8b2', -4, 0.7),            // 6: fracture line on wing
      F('sparkMote', 78, 30, '#8be9d8', 0, 0.6),             // 7: refracted light mote
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [2, 3, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 44 }, boundFeatures: [0, 6] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 44 }, boundFeatures: [1] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 78 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 70, y: 82 }, boundFeatures: [] },
    ],
  },
  'veil-monger': {
    kind: 'humanoid', hue: '#4a4360', hue2: '#2c2740', glow: '#f0cd7d', size: 0.95, eye: 'slit',
    features: [
      F('tatteredCloak', 60, 66, '#5c5478', 0, 1.15, '#2c2740'), // 0: main draped cloak
      F('maskLantern', 60, 22, '#f0cd7d', 0, 0.9),            // 1: glowing merchant mask
      F('bladeHand', 26, 62, '#cfd3dc', -14, 1.0),            // 2: left cutting tool
      F('veilSpool', 94, 54, '#6a628a', 6, 0.9),              // 3: spool of cursed veils
      F('priceTag', 84, 74, '#e9e4d4', 8, 0.7),               // 4: dangling price tag
      F('shadowHem', 60, 96, '#2c2740', 0, 1.1),              // 5: pooling shadow hem
      F('woundMark', 60, 44, '#e34325', 0, 0.7),              // 6: reveal-wounds sigil
      F('haggleBrow', 60, 14, '#8a82a8', 0, 0.8),             // 7: furrowed merchant brow
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [0, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [1, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 26, y: 62 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 94, y: 58 }, boundFeatures: [3, 4] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 96 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 96 }, boundFeatures: [] },
    ],
  },
  'bell-tender': {
    kind: 'humanoid', hue: '#8a7350', hue2: '#5c4a30', glow: '#e2ae4f', size: 0.9, eye: 'glow',
    features: [
      F('bellWeapon', 80, 36, '#e2ae4f', -6, 1.1, '#c98f2f'),  // 0: heavy bell weapon
      F('robeCloak', 60, 70, '#8a7350', 0, 1.1, '#5c4a30'),    // 1: long keeper's robe
      F('brassCollar', 60, 42, '#c98f2f', 0, 0.9),             // 2: brass neck ornament
      F('ropeSleeve', 30, 64, '#8a6f3f', 0, 0.9),              // 3: rope-bound sleeve
      F('bellChime', 60, 14, '#f0cd7d', 0, 0.8),               // 4: top resonance chime
      F('kneelBoots', 60, 94, '#5c4a30', 0, 0.9),              // 5: kneeling worn boots
      F('echoHalo', 60, 28, '#e2ae4f', 0, 0.9),                // 6: resonance aura ring
      F('copperCuff', 92, 72, '#c98f2f', 0, 0.7),              // 7: copper wrist cuff
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [1, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [4, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 64 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 42 }, boundFeatures: [0, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 90 }, boundFeatures: [] },
    ],
  },
  'kiln-brute': {
    kind: 'brute', hue: '#6e5a48', hue2: '#453628', glow: '#ff6a45', size: 1.15, eye: 'red',
    features: [
      F('crackVein', 60, 56, '#ff6a45', 0, 1.3, '#e34325'),   // 0: glowing body cracks (dominant)
      F('ironFist', 94, 58, '#453628', 0, 1.1),                // 1: right iron fist
      F('ironFist', 26, 58, '#453628', 0, 1.0),                // 2: left iron fist
      F('ashPlume', 60, 14, '#8a7350', 0, 1.0),                // 3: ash plume from head
      F('kilnMouth', 60, 36, '#2b2115', 0, 1.0),              // 4: furnace mouth
      F('heatHalo', 60, 26, '#e34325', 0, 1.2),               // 5: radiant heat ring
      F('slagBoots', 44, 94, '#6e5a48', 0, 1.0),              // 6: left slag boot
      F('slagBoots', 76, 94, '#453628', 0, 1.0),              // 7: right slag boot
      F('emberBreath', 60, 72, '#ff6a45', 0, 0.8),            // 8: chest vent glow
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [3, 4, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 26, y: 58 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 94, y: 58 }, boundFeatures: [1] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [7] },
    ],
  },
  'ink-leech': {
    kind: 'serpent', hue: '#2c3040', hue2: '#181b26', glow: '#4fd8c2', size: 0.85, eye: 'slit',
    features: [
      F('inkDrip', 60, 90, '#181b26', 0, 1.0),              // 0: dripping black ink pool
      F('quillSpines', 62, 34, '#8a82a8', 0, 1.0),          // 1: quill-like dorsal spines
      F('suctionMouth', 26, 58, '#4fd8c2', 0, 0.9),         // 2: sucker mouth (attack)
      F('inkFog', 40, 76, '#181b26', 0, 1.1),               // 3: ink fog background
      F('fadedScales', 72, 50, '#3a4054', 0, 1.0, '#2c3040'), // 4: serpentine body scales
      F('venomGland', 86, 40, '#4fd8c2', 0, 0.7),           // 5: glow gland near head
      F('blotTip', 90, 72, '#181b26', 0, 0.7),              // 6: ink blob at tail tip
      F('quillBarb', 50, 22, '#8a82a8', -14, 0.8),          // 7: forward-facing quill barb
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [4, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 34, y: 36 }, boundFeatures: [1, 7, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 26, y: 58 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 90, y: 56 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [0] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 90 }, boundFeatures: [] },
    ],
  },
  'bone-scrivener': {
    kind: 'statue', hue: '#d8cbb0', hue2: '#a89878', glow: '#f0cd7d', size: 1.0, eye: 'white',
    features: [
      F('ribCage', 60, 58, '#e9e4d4', 0, 1.1),             // 0: exposed bone rib cage
      F('quillHand', 30, 46, '#d8cbb0', -18, 0.9),          // 1: quill-writing left hand
      F('pageScroll', 88, 52, '#c9a34f', 6, 1.0),           // 2: held bone-page scroll
      F('skullFace', 60, 22, '#e9e4d4', 0, 0.9),            // 3: skeletal face/skull
      F('spineStack', 60, 74, '#cbbfa4', 0, 1.0),           // 4: visible spine column
      F('inkStain', 42, 82, '#181b26', 0, 0.8),             // 5: curse ink on lower body
      F('boneKnee', 44, 92, '#a89878', 0, 0.8),             // 6: skeletal knee joint
      F('curseGlyph', 76, 34, '#f0cd7d', 0, 0.7),           // 7: floating curse symbol
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [3, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 46 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 52 }, boundFeatures: [2] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [5, 6] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 92 }, boundFeatures: [] },
    ],
  },
  'ashen-warden': {
    kind: 'knight', hue: '#5c544c', hue2: '#3a352f', glow: '#e2ae4f', size: 1.1, eye: 'red',
    features: [
      F('helmVisor', 60, 20, '#5c544c', 0, 0.9, '#3a352f'),   // 0: heavy gate-keeper helm
      F('bellMace', 92, 40, '#e2ae4f', -8, 1.2),              // 1: bell-shaped mace weapon
      F('plateArmour', 60, 56, '#5c544c', 0, 1.1, '#3a352f'), // 2: heavy gate armor
      F('ashSeal', 60, 76, '#2b2115', 0, 0.9),                // 3: seal of the gate (torso)
      F('chainSkirt', 60, 88, '#6f6a5c', 0, 1.0),             // 4: chain mail lower body
      F('bellShield', 28, 56, '#c98f2f', 0, 1.0),             // 5: bell-wall shield
      F('ashPlume', 60, 10, '#8a7350', 0, 0.8),               // 6: ashen helm plume
      F('greavePlate', 76, 96, '#5c544c', 0, 0.8),            // 7: right greave
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [2, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [0, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 56 }, boundFeatures: [5] },
      { id: 'armR', parentId: 'root', anchor: { x: 92, y: 44 }, boundFeatures: [1] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 92 }, boundFeatures: [7] },
    ],
  },
  'crownless-furnace': {
    kind: 'gate', hue: '#5c4a3c', hue2: '#3a2e24', glow: '#ff6a45', size: 1.4, eye: 'red',
    features: [
      F('furnaceMaw', 60, 34, '#ff6a45', 0, 1.2),             // 0: blazing maw (no head)
      F('ironRibs', 60, 56, '#3a2e24', 0, 1.2, '#5c4a3c'),    // 1: massive iron rib cage
      F('crownGap', 60, 12, '#c98f2f', 0, 1.0),               // 2: broken crown-gap top
      F('slagDrip', 40, 92, '#e34325', 0, 1.0),               // 3: left molten slag drip
      F('slagDrip', 80, 92, '#ff6a45', 0, 1.0),               // 4: right molten slag drip
      F('moltenCore', 60, 68, '#ff6a45', 0, 1.1, '#e34325'),   // 5: interior molten glow
      F('ashWings', 28, 44, '#8a7350', -10, 1.0),             // 6: left ash wing/plate
      F('ashWings', 92, 44, '#6f6a5c', 10, 1.0),              // 7: right ash wing/plate
      F('heatShimmer', 60, 22, '#f0cd7d', 0, 0.9),            // 8: heat distortion above
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [1, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [0, 2, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 44 }, boundFeatures: [6] },
      { id: 'armR', parentId: 'root', anchor: { x: 92, y: 44 }, boundFeatures: [7] },
      { id: 'legL', parentId: 'root', anchor: { x: 40, y: 88 }, boundFeatures: [3] },
      { id: 'legR', parentId: 'root', anchor: { x: 80, y: 88 }, boundFeatures: [4] },
    ],
  },

  /* ══ 落败村庄 ══ */
  'straw-effigy': {
    kind: 'effigy', hue: '#b9985c', hue2: '#7a5f33', glow: '#e2ae4f', size: 0.95, eye: 'none',
    features: [
      F('crookedScythe', 80, 22, '#cfd3dc', -18, 1, '#8a8f9c'),
      F('crackedHat', 60, 16, '#6d5527', 6, 0.9),
      F('buttonEyes', 60, 34, '#2b2115', 0, 0.9),
      F('strawBurst', 36, 66, '#d9b96c', 0, 1),
      F('ropeWaist', 60, 76, '#8a6f3f', 0, 1),
      F('tatteredRobe', 44, 92, '#7a5f33', 0, 1),
      F('crowPerch', 90, 28, '#23262e', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 65 }, boundFeatures: [3, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [1, 2] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 50 }, boundFeatures: [] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 22 }, boundFeatures: [0, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 92 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 92 }, boundFeatures: [] },
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
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [1, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 35 }, boundFeatures: [4] },
      { id: 'armL', parentId: 'root', anchor: { x: 32, y: 40 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 76 }, boundFeatures: [2, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 96 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 96 }, boundFeatures: [] },
    ],
  },
  'crow-swarm': {
    kind: 'swarm', hue: '#23262e', hue2: '#15171e', glow: '#f0cd7d', size: 0.75, eye: 'red',
    features: [
      F('crowRing', 60, 50, '#23262e', 0, 1.2, '#15171e'),
      F('glintEyes', 60, 46, '#f0cd7d', 0, 1),
      F('beakFlash', 44, 34, '#8a8f9c', 0, 0.8),
      F('wingsBlur', 74, 62, '#15171e', 0, 1.1),
      F('strawPick', 60, 84, '#d9b96c', 0, 0.7),
      F('dustWake', 60, 92, '#8a7350', 0, 1),
      F('featherDrift', 82, 38, '#23262e', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 50 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 44, y: 34 }, boundFeatures: [2] },
      { id: 'armL', parentId: 'root', anchor: { x: 40, y: 50 }, boundFeatures: [] },
      { id: 'armR', parentId: 'root', anchor: { x: 82, y: 50 }, boundFeatures: [3, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 84 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 70, y: 92 }, boundFeatures: [5] },
    ],
  },
  'harvest-hound': {
    kind: 'wolf', hue: '#6a5a3a', hue2: '#3f3520', glow: '#c98f2f', size: 1.0, eye: 'red',
    features: [
      F('weaveCollar', 44, 58, '#d9b96c', 0, 1),
      F('stubbleFur', 60, 52, '#8a7a4c', 0, 1),
      F('scarSnout', 30, 62, '#4c4230', 0, 0.8),
      F('thickTail', 90, 68, '#6a5a3a', 14),
      F('bloodScent', 90, 40, '#e34325', 0, 0.8),
      F('fieldHound', 60, 94, '#3f3520', 0, 1),
      F('chainedPaw', 36, 88, '#6f6a5c', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 55, y: 58 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 30, y: 42 }, boundFeatures: [2, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 70 }, boundFeatures: [6] },
      { id: 'armR', parentId: 'root', anchor: { x: 74, y: 70 }, boundFeatures: [] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 94 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 90, y: 68 }, boundFeatures: [3] },
    ],
  },
  'scythe-warden': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 1.1, eye: 'glow',
    features: [
      F('greatScythe', 84, 18, '#cfd3dc', -14, 1.2, '#8a8f9c'),
      F('strawBraid', 60, 14, '#d9b96c', 0, 0.9),
      F('gatedGlove', 30, 72, '#5c4224', 0, 0.9),
      F('hollowHood', 60, 26, '#3a4224', 0, 0.9),
      F('scarePost', 96, 60, '#8a7350', 0, 1),
      F('sickleBelt', 60, 80, '#c98f2f', 0, 0.8),
      F('stalkersGait', 60, 96, '#3a4224', 0, 1),
      F('patchQuilt', 44, 56, '#5c6a3a', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [5, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [1, 3] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 55 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 40 }, boundFeatures: [0, 4] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 90 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 90 }, boundFeatures: [] },
    ],
  },
  'famine-effigy': {
    kind: 'effigy', hue: '#8a7350', hue2: '#5c4a30', glow: '#e34325', size: 1.15, eye: 'none',
    features: [
      F('hollowMouth', 60, 38, '#2b2115', 0, 1),
      F('grainSpines', 60, 20, '#d9b96c', 0, 1.1),
      F('doubleScythe', 60, 30, '#8a8f9c', 0, 1.1, '#cfd3dc'),
      F('emaciatedStraw', 42, 66, '#a8915c', 0, 1),
      F('hungryHalo', 60, 24, '#e34325', 0, 1),
      F('sunkShoulders', 60, 48, '#5c4a30', 0, 1),
      F('crowCrown', 60, 12, '#23262e', 0, 0.8),
      F('dryMarrow', 76, 82, '#a89878', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 55 }, boundFeatures: [3, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [1, 4, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 35, y: 48 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 85, y: 48 }, boundFeatures: [] },
      { id: 'legL', parentId: 'root', anchor: { x: 42, y: 82 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 82 }, boundFeatures: [0] },
    ],
  },
  'the-last-harvest': {
    kind: 'brute', hue: '#a8915c', hue2: '#6d5527', glow: '#e2ae4f', size: 1.4, eye: 'red',
    features: [
      F('twinGiantScythes', 60, 26, '#cfd3dc', 0, 1.3, '#8a8f9c'),
      F('wheatWall', 60, 92, '#d9b96c', 0, 1.3),
      F('sunkenCheeks', 60, 36, '#6d5527', 0, 0.9),
      F('strawBeard', 60, 46, '#d9b96c', 0, 1),
      F('blessingHands', 30, 62, '#c9a34f', 0, 0.9),
      F('harvestHalo', 60, 14, '#f0cd7d', 0, 1.1),
      F('drownedField', 60, 102, '#5c6a3a', 0, 1.2),
      F('effigyChains', 86, 54, '#6f6a5c', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [2, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [5] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 50 }, boundFeatures: [0, 4] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 92 }, boundFeatures: [1, 6] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 92 }, boundFeatures: [] },
    ],
  },

  /* ══ 生机森林 ══ */
  'forest-wolf': {
    kind: 'wolf', hue: '#4a5a48', hue2: '#2c362c', glow: '#8be9d8', size: 0.95, eye: 'glow',
    features: [
      F('mossMane', 60, 40, '#2e9e6b', 0, 1),
      F('whitewing', 36, 60, '#e9e4d4', 0, 0.8),
      F('packScar', 70, 56, '#2c362c', 0, 0.9),
      F('greenEye', 60, 28, '#8be9d8', 0, 0.8),
      F('rootTail', 88, 70, '#4a5a48', 16),
      F('barkNails', 60, 90, '#6d5527', 0, 0.8),
      F('leafTuft', 74, 36, '#2e9e6b', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 55, y: 55 }, boundFeatures: [1, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 40, y: 30 }, boundFeatures: [0, 3, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 60 }, boundFeatures: [] },
      { id: 'armR', parentId: 'root', anchor: { x: 70, y: 56 }, boundFeatures: [] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 90 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 88, y: 70 }, boundFeatures: [4] },
    ],
  },
  'bramble-crawler': {
    kind: 'serpent', hue: '#3a5a3c', hue2: '#22332a', glow: '#6b8f3d', size: 0.85, eye: 'slit',
    features: [
      F('thornCoil', 60, 56, '#5c4224', 0, 1.1),
      F('venomTip', 30, 64, '#b8e04f', 0, 0.9),
      F('leafCap', 60, 26, '#2e9e6b', 0, 0.9),
      F('rootFeet', 60, 92, '#6d5527', 0, 1),
      F('barkPlate', 72, 48, '#5c4224', 0, 1),
      F('sporeMouth', 34, 68, '#b8e04f', 0, 0.8),
      F('vineWhip', 86, 58, '#3a5a3c', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 44, y: 30 }, boundFeatures: [2] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 64 }, boundFeatures: [1, 5] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 58 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 92 }, boundFeatures: [3] },
      { id: 'legR', parentId: 'root', anchor: { x: 70, y: 92 }, boundFeatures: [] },
    ],
  },
  'glowmoth-cluster': {
    kind: 'swarm', hue: '#3a5a4c', hue2: '#22332a', glow: '#8be9d8', size: 0.7, eye: 'glow',
    features: [
      F('mothWheel', 60, 52, '#3a5a4c', 0, 1.15, '#22332a'),
      F('fireflyCore', 60, 52, '#8be9d8', 0, 0.9),
      F('dustVeil', 60, 40, '#bfe8e0', 0, 1.1),
      F('blinkWing', 44, 36, '#8be9d8', 0, 0.8),
      F('trailGlow', 60, 86, '#4fd8c2', 0, 1),
      F('huskShell', 76, 68, '#22332a', 0, 0.8),
      F('pollenMist', 60, 24, '#bfe8e0', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 52 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [2, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 44, y: 46 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 76, y: 52 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 80 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 70, y: 80 }, boundFeatures: [] },
    ],
  },
  'root-stalker': {
    kind: 'serpent', hue: '#5c4224', hue2: '#3a2c18', glow: '#c98f2f', size: 0.9, eye: 'slit',
    features: [
      F('rootWhip', 88, 40, '#6d5527', -24, 1.1),
      F('soilCrest', 60, 28, '#3a2c18', 0, 1),
      F('trenchMouth', 30, 66, '#22332a', 0, 0.9),
      F('sappingGrasp', 60, 90, '#5c4224', 0, 1),
      F('sapVine', 44, 48, '#b8e04f', 0, 0.9),
      F('burrowMud', 60, 100, '#3a2c18', 0, 1),
      F('eyePits', 34, 56, '#c98f2f', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [3, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 34, y: 38 }, boundFeatures: [1, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 66 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 40 }, boundFeatures: [0] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 90 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 90 }, boundFeatures: [] },
    ],
  },
  'alpha-wolf': {
    kind: 'wolf', hue: '#3a4a3c', hue2: '#20281f', glow: '#f0cd7d', size: 1.1, eye: 'red',
    features: [
      F('boneCrown', 60, 16, '#d8cbb0', 0, 0.9),
      F('silverBite', 34, 58, '#c0c8d8', 0, 0.8),
      F('howlMouth', 30, 62, '#e9e4d4', 0, 0.9),
      F('tornBanner', 88, 34, '#4a3a20', 0, 0.9),
      F('pawPrints', 60, 94, '#20281f', 0, 1),
      F('packAura', 60, 60, '#f0cd7d', 0, 1.2),
      F('scarredEar', 74, 22, '#20281f', 6),
      F('alphaFang', 42, 50, '#e9e4d4', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 55, y: 58 }, boundFeatures: [5] },
      { id: 'head', parentId: 'root', anchor: { x: 34, y: 28 }, boundFeatures: [0, 1, 2, 6, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 64 }, boundFeatures: [] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 50 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 88 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  'ancient-treant': {
    kind: 'tree', hue: '#5c4224', hue2: '#3a2c18', glow: '#2e9e6b', size: 1.2, eye: 'glow',
    features: [
      F('knotFace', 60, 40, '#3a2c18', 0, 0.9),
      F('branchArms', 60, 56, '#6d5527', 0, 1.2),
      F('barkPlates', 60, 66, '#5c4224', 0, 1.1),
      F('canopyHalo', 60, 18, '#2e9e6b', 0, 1.1),
      F('pollenBurst', 78, 30, '#f0cd7d', 0, 0.9),
      F('rootAnchor', 60, 96, '#3a2c18', 0, 1.1),
      F('mossShoulder', 44, 34, '#2e9e6b', 0, 0.8),
      F('sapBleed', 72, 72, '#b8e04f', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [0, 3, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 38, y: 50 }, boundFeatures: [1, 6] },
      { id: 'armR', parentId: 'root', anchor: { x: 82, y: 50 }, boundFeatures: [7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 90 }, boundFeatures: [] },
    ],
  },
  'heart-of-the-grove': {
    kind: 'tree', hue: '#4a5a3c', hue2: '#26332a', glow: '#8be9d8', size: 1.5, eye: 'glow',
    features: [
      F('ringHeart', 60, 54, '#f0cd7d', 0, 1.1),
      F('thornCrown', 60, 16, '#2e9e6b', 0, 1.1),
      F('veinBark', 60, 70, '#8be9d8', 0, 1.2),
      F('rootPillars', 60, 94, '#26332a', 0, 1.2),
      F('wolfMark', 84, 44, '#e9e4d4', 0, 0.8),
      F('witherBough', 30, 26, '#6d5527', 0, 1),
      F('groveHalo', 60, 12, '#4fd8c2', 0, 1.1),
      F('heartbeatPulse', 60, 60, '#8be9d8', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [0, 2, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [1, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 44 }, boundFeatures: [5] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 44 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [3] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 90 }, boundFeatures: [] },
    ],
  },

  /* ══ 苔藓沼泽 ══ */
  'mire-crocodile': {
    kind: 'croc', hue: '#4c5a3a', hue2: '#2e3624', glow: '#6b8f3d', size: 1.0, eye: 'glow',
    features: [
      F('mossBack', 60, 40, '#5c7a3c', 0, 1.1),
      F('deadRoll', 60, 62, '#2e3624', 0, 1),
      F('mudMuzzle', 30, 66, '#3a2c18', 0, 0.9),
      F('siltEyes', 34, 56, '#b8e04f', 0, 0.7),
      F('tugClaw', 78, 74, '#4c5a3a', 0, 0.9),
      F('bubbleGulp', 36, 74, '#b8e04f', 0, 0.8),
      F('sapRing', 60, 84, '#6b8f3d', 0, 1.1),
      F('swampTail', 90, 80, '#2e3624', 12, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 34, y: 56 }, boundFeatures: [2, 3] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 74 }, boundFeatures: [5] },
      { id: 'armR', parentId: 'root', anchor: { x: 78, y: 74 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 60, y: 84 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 90, y: 80 }, boundFeatures: [7] },
    ],
  },
  'moss-lurker': {
    kind: 'blob', hue: '#3a5a42', hue2: '#22332a', glow: '#b8e04f', size: 0.85, eye: 'white',
    features: [
      F('mossFur', 60, 44, '#5c7a3c', 0, 1.1),
      F('sporePore', 60, 66, '#b8e04f', 0, 1),
      F('clawStump', 40, 86, '#22332a', 0, 0.8),
      F('dripVenom', 44, 94, '#8fae3c', 0, 0.9),
      F('halfSunken', 60, 98, '#2e3624', 0, 1),
      F('watchPit', 60, 40, '#e9e4d4', 0, 0.8),
      F('fernTuft', 76, 36, '#5c7a3c', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 40 }, boundFeatures: [5, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 40, y: 66 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 76, y: 66 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 94 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 60, y: 98 }, boundFeatures: [] },
    ],
  },
  'reed-stalker': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 0.9, eye: 'slit',
    features: [
      F('reedHood', 60, 24, '#7a8a4c', 0, 1),
      F('reedLance', 30, 36, '#8a9a5c', 10, 1.1),
      F('stemCloak', 60, 66, '#5c6a3a', 0, 1.1, '#3a4224'),
      F('stalkBend', 60, 50, '#7a8a4c', 0, 1),
      F('jointKnees', 60, 84, '#3a4224', 0, 0.9),
      F('reedShadow', 60, 96, '#3a4224', 0, 1),
      F('marshWraps', 34, 72, '#6b8f3d', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [2, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 24 }, boundFeatures: [0] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 46 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 50 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 84 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 96 }, boundFeatures: [5] },
    ],
  },
  'bog-witchling': {
    kind: 'hag', hue: '#4c5a3a', hue2: '#2e3624', glow: '#b8e04f', size: 0.9, eye: 'glow',
    features: [
      F('mudPigtails', 60, 16, '#3a2c18', 0, 0.9),
      F('gasBubbles', 74, 78, '#b8e04f', 0, 0.9),
      F('clayKettle', 88, 70, '#5c4224', 0, 0.8),
      F('swampWig', 60, 22, '#5c7a3c', 0, 1),
      F('mudSplat', 44, 66, '#3a2c18', 0, 1),
      F('cackleMouth', 60, 36, '#2e3624', 0, 0.9),
      F('toadFriend', 34, 88, '#6b8f3d', 0, 0.7),
      F('curseCharm', 80, 48, '#b8e04f', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [4, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [0, 3] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 60 }, boundFeatures: [6] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 60 }, boundFeatures: [2, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [1] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 78 }, boundFeatures: [] },
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
      F('venomVial', 76, 44, '#8fae3c', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [3, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [2] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 44 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 52 }, boundFeatures: [0, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 92 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 98 }, boundFeatures: [6] },
    ],
  },
  'ancient-croc': {
    kind: 'croc', hue: '#3a4a32', hue2: '#20281f', glow: '#e2ae4f', size: 1.15, eye: 'red',
    features: [
      F('oldScale', 60, 44, '#4c5a3a', 0, 1.2),
      F('mossCrown', 60, 26, '#5c7a3c', 0, 1),
      F('giantJaw', 30, 66, '#20281f', 0, 1),
      F('rageVein', 70, 56, '#e34325', 0, 0.9),
      F('stumpLeg', 80, 80, '#2e3624', 0, 0.9),
      F('deepMud', 60, 98, '#2e3624', 0, 1),
      F('scarRidge', 60, 38, '#20281f', 0, 1),
      F('ironHide', 46, 72, '#3a4a32', 0, 1.1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 30, y: 44 }, boundFeatures: [1, 2] },
      { id: 'armL', parentId: 'root', anchor: { x: 46, y: 72 }, boundFeatures: [7] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 80 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 60, y: 98 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 60, y: 38 }, boundFeatures: [6] },
    ],
  },
  'mother-of-the-mire': {
    kind: 'blob', hue: '#3a4436', hue2: '#222b22', glow: '#8fae3c', size: 1.4, eye: 'red',
    features: [
      F('mudBelly', 60, 66, '#3a4436', 0, 1.2, '#222b22'),
      F('twinClaw', 60, 44, '#222b22', 0, 1.1),
      F('siltRing', 60, 88, '#5c6a3a', 0, 1.3),
      F('sporeHalo', 60, 24, '#b8e04f', 0, 1.1),
      F('crocChild', 92, 80, '#4c5a3a', 0, 0.7),
      F('drainEyes', 60, 40, '#8fae3c', 0, 0.9),
      F('bogBloom', 44, 30, '#b8e04f', 0, 0.9),
      F('rootTendrils', 34, 76, '#2e3624', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [3, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 66 }, boundFeatures: [6, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 92, y: 80 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [2] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },

  /* ══ 恶臭下水道 ══ */
  'sewer-rat-king': {
    kind: 'rat', hue: '#5c5a4a', hue2: '#38362c', glow: '#e2ae4f', size: 1.0, eye: 'red',
    features: [
      F('tailCrown', 60, 16, '#6f6a5c', 0, 1),
      F('ironBands', 60, 60, '#8a8f9c', 0, 1),
      F('royalSlop', 60, 94, '#5c6a3a', 0, 1),
      F('yellowFangs', 34, 66, '#d8cbb0', 0, 0.9),
      F('subjectRing', 60, 76, '#38362c', 0, 1.1),
      F('plagueMuzzle', 36, 64, '#4a4838', 0, 0.8),
      F('coinStash', 88, 88, '#e2ae4f', 0, 0.8),
      F('crownSewage', 74, 26, '#6f6a5c', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [1, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 44, y: 30 }, boundFeatures: [0, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 66 }, boundFeatures: [3, 5] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 66 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [2] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'plague-rat': {
    kind: 'rat', hue: '#54524a', hue2: '#32312c', glow: '#8fae3c', size: 0.65, eye: 'red',
    features: [
      F('sorePaw', 36, 86, '#8fae3c', 0, 0.8),
      F('wetFur', 60, 60, '#42413a', 0, 1),
      F('feverGlow', 60, 30, '#e34325', 0, 0.7),
      F('gnawedPipe', 88, 40, '#8a8f9c', 0, 0.8),
      F('twitchTail', 90, 76, '#54524a', 14),
      F('runawayEyes', 60, 28, '#e34325', 0, 0.7),
      F('scabPatch', 74, 54, '#8fae3c', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [1, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [2, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 66 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 50 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 86 }, boundFeatures: [] },
      { id: 'legR', parentId: 'root', anchor: { x: 90, y: 76 }, boundFeatures: [4] },
    ],
  },
  'filth-slime': {
    kind: 'blob', hue: '#6a6a4a', hue2: '#42422c', glow: '#8fae3c', size: 0.85, eye: 'white',
    features: [
      F('slopBody', 60, 62, '#6a6a4a', 0, 1.15, '#42422c'),
      F('corrodeMist', 60, 40, '#8fae3c', 0, 1.1),
      F('stinkLine', 60, 24, '#8a8f5c', 0, 1),
      F('gritSplat', 44, 92, '#42422c', 0, 1),
      F('dullEye', 60, 50, '#e9e4d4', 0, 0.8),
      F('pipeRind', 74, 78, '#5c5a4a', 0, 0.8),
      F('oozeDrip', 30, 74, '#8fae3c', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [1, 2] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 68 }, boundFeatures: [6] },
      { id: 'armR', parentId: 'root', anchor: { x: 74, y: 68 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 92 }, boundFeatures: [3] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 92 }, boundFeatures: [] },
    ],
  },
  'gutter-roach': {
    kind: 'roach', hue: '#4c3a2c', hue2: '#2c2018', glow: '#8fae3c', size: 0.7, eye: 'red',
    features: [
      F('glossShell', 60, 56, '#5c4232', 0, 1.1),
      F('whiskerFan', 34, 40, '#6d5527', 0, 1.2),
      F('clawSnaps', 30, 62, '#3a2c18', 0, 0.9),
      F('rotGoo', 60, 92, '#8fae3c', 0, 1),
      F('hopperLegs', 60, 84, '#4c3a2c', 0, 1),
      F('gritEye', 60, 36, '#e34325', 0, 0.7),
      F('antennaTwitch', 72, 26, '#6d5527', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 50, y: 36 }, boundFeatures: [1, 5, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 56 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 56 }, boundFeatures: [] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 84 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 92 }, boundFeatures: [] },
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
      F('pressureGauge', 86, 54, '#8a8f9c', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 24 }, boundFeatures: [4, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 60 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [3, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'the-bloated-sovereign': {
    kind: 'brute', hue: '#6a6248', hue2: '#423c2c', glow: '#8fae3c', size: 1.45, eye: 'white',
    features: [
      F('giantSlop', 60, 62, '#6a6248', 0, 1.25, '#423c2c'),
      F('festerPores', 60, 50, '#8fae3c', 0, 1.1),
      F('fatMembrane', 60, 84, '#7a7258', 0, 1.2),
      F('crownOintment', 60, 18, '#e2ae4f', 0, 0.9),
      F('roarStench', 60, 34, '#8a8f5c', 0, 1.1),
      F('crackedShell', 60, 72, '#423c2c', 0, 1),
      F('minionDrip', 84, 92, '#6a6a5c', 0, 1),
      F('swollenGut', 44, 76, '#7a7258', 0, 1.1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [0, 2, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 26 }, boundFeatures: [3, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 62 }, boundFeatures: [7] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 62 }, boundFeatures: [6] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 90 }, boundFeatures: [1] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 90 }, boundFeatures: [] },
    ],
  },

  /* ══ 繁华皇都 ══ */
  'royal-halberdier': {
    kind: 'knight', hue: '#8a8f9c', hue2: '#5c5e68', glow: '#f0cd7d', size: 1.0, eye: 'white',
    features: [
      F('halberdShaft', 32, 22, '#8a7350', 4, 1.2, '#cfd3dc'),
      F('crestPlume', 60, 14, '#e34325', 0, 0.9),
      F('lanceLivery', 60, 62, '#f0cd7d', 0, 0.9),
      F('breakArmour', 84, 60, '#cfd3dc', 0, 0.8),
      F('stepLines', 60, 94, '#5c5e68', 0, 1),
      F('shieldBoss', 90, 66, '#f0cd7d', 0, 0.8),
      F('chainGuard', 44, 50, '#8a8f9c', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [2, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [1] },
      { id: 'armL', parentId: 'root', anchor: { x: 32, y: 44 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 90, y: 58 }, boundFeatures: [3, 5] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [4] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
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
      F('scrollTuck', 86, 70, '#e9e4d4', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [4, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 56 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 56 }, boundFeatures: [1, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'gilded-inquisitor': {
    kind: 'knight', hue: '#c9a34f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.0, eye: 'slit',
    features: [
      F('goldHammer', 30, 30, '#e2ae4f', 10, 1.1),
      F('codeCodex', 86, 62, '#8a3a2c', 0, 0.9),
      F('guiltRing', 60, 22, '#f0cd7d', 0, 0.9),
      F('leafGold', 60, 52, '#f0cd7d', 0, 1),
      F('chainVerdict', 60, 84, '#8a6f2a', 0, 0.9),
      F('sermonCuff', 34, 70, '#e2ae4f', 0, 0.8),
      F('verdictScroll', 88, 42, '#e9e4d4', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [3, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [2] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 46 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 52 }, boundFeatures: [1, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 84 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 84 }, boundFeatures: [] },
    ],
  },
  'plaza-crier': {
    kind: 'humanoid', hue: '#8a3a2c', hue2: '#5c241c', glow: '#f0cd7d', size: 0.85, eye: 'white',
    features: [
      F('hornMegaphone', 34, 36, '#e2ae4f', 14, 0.9),
      F('drumBelt', 60, 80, '#8a6f2a', 0, 0.9),
      F('scrollQuiver', 88, 44, '#e9e4d4', 0, 1),
      F('medallion', 60, 54, '#f0cd7d', 0, 0.9),
      F('pointStaff', 30, 62, '#8a7350', 0, 1),
      F('shoutingMouth', 60, 34, '#5c241c', 0, 0.8),
      F('bellTassel', 76, 72, '#f0cd7d', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [1, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [5] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 50 }, boundFeatures: [0, 4] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 50 }, boundFeatures: [2] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 80 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
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
      F('victorySash', 60, 48, '#e34325', 0, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [4, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [3, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 26, y: 48 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 54 }, boundFeatures: [0] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [2] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'lord-inquisitor': {
    kind: 'knight', hue: '#e2ae4f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.1, eye: 'slit',
    features: [
      F('twinHammers', 60, 34, '#f0cd7d', 0, 1.1),
      F('haloJudge', 60, 14, '#f0cd7d', 0, 1),
      F('goldMantle', 60, 64, '#8a6f2a', 0, 1.15, '#8a3a2c'),
      F('sealSleeve', 34, 70, '#8a3a2c', 0, 0.8),
      F('murmurChin', 60, 38, '#5c241c', 0, 0.8),
      F('docketHand', 86, 56, '#e9e4d4', 0, 0.8),
      F('lawChain', 60, 82, '#c9a34f', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [2, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [1, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 52 }, boundFeatures: [0, 3] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 52 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'sun-crown-warden': {
    kind: 'statue', hue: '#f0cd7d', hue2: '#b8963a', glow: '#f0cd7d', size: 1.4, eye: 'glow',
    features: [
      F('sunCrown', 60, 14, '#f7e3ae', 0, 1.1),
      F('radiantHalo', 60, 30, '#f0cd7d', 0, 1.2),
      F('twinScepters', 60, 60, '#e2ae4f', 0, 1.1),
      F('crackLaw', 60, 76, '#8a6f2a', 0, 1),
      F('pillarBase', 60, 96, '#b8963a', 0, 1.1),
      F('decreeEyes', 60, 36, '#e34325', 0, 0.8),
      F('goldenDust', 60, 90, '#f7e3ae', 0, 1),
      F('judgmentBeam', 34, 50, '#f0cd7d', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [2, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [0, 1, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 54 }, boundFeatures: [7] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 90 }, boundFeatures: [4, 6] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 96 }, boundFeatures: [] },
    ],
  },

};
