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
      F('scytheArm', 86, 38, '#cfd3dc', -22, 1.1, '#8a8f9c'),
      F('strawHat', 60, 14, '#6d5527', 4, 0.95),
      F('hollowGaze', 60, 30, '#2b2115', 0, 0.85),
      F('strawTorso', 60, 58, '#d9b96c', 0, 1.1, '#b9985c'),
      F('ropeBinding', 60, 72, '#8a6f3f', 0, 0.9),
      F('tatteredHem', 40, 94, '#7a5f33', -4, 1),
      F('patchCoat', 60, 66, '#5c4a30', 0, 1),
      F('strawLeak', 78, 80, '#d9b96c', 0, 0.7),
      F('perchCrow', 92, 22, '#23262e', 8, 0.75),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [3, 4, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [1, 2] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 52 }, boundFeatures: [7] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 38 }, boundFeatures: [0, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 94 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 94 }, boundFeatures: [] },
    ],
  },
  'village-scavenger': {
    kind: 'humanoid', hue: '#7a6a4c', hue2: '#4c4230', glow: '#c98f2f', size: 0.9, eye: 'white',
    features: [
      F('hoeStaff', 28, 36, '#8a7350', 12, 1.15),
      F('patchCloak', 60, 62, '#5c5240', 0, 1.1, '#4c4230'),
      F('scavengerSack', 90, 72, '#8a6f3f', -6, 0.9),
      F('hunchedSpine', 56, 48, '#7a6a4c', 4, 1),
      F('wornFace', 60, 28, '#9a8a6c', 0, 0.8),
      F('mudBoots', 50, 96, '#4c4230', 0, 0.9),
      F('coinGlint', 88, 66, '#e2ae4f', 0, 0.6),
      F('ropeBelt', 60, 78, '#8a6f3f', 0, 0.8),
      F('bladeShiv', 82, 50, '#a09080', 14, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 58, y: 58 }, boundFeatures: [1, 3, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 30 }, boundFeatures: [4] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 44 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 58 }, boundFeatures: [2, 6, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 96 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 96 }, boundFeatures: [] },
    ],
  },
  'crow-swarm': {
    kind: 'swarm', hue: '#23262e', hue2: '#15171e', glow: '#f0cd7d', size: 0.75, eye: 'red',
    features: [
      F('wingCloud', 60, 48, '#23262e', 0, 1.2, '#15171e'),
      F('beakCluster', 40, 36, '#8a8f9c', -6, 0.9),
      F('glintEyes', 58, 42, '#f0cd7d', 0, 0.85),
      F('featherStorm', 80, 56, '#15171e', 12, 1.1),
      F('talonsRake', 48, 78, '#4c4230', 0, 0.8),
      F('dustTrail', 60, 92, '#8a7350', 0, 1),
      F('scatterPlume', 24, 52, '#23262e', -8, 0.75),
      F('strawDebris', 72, 86, '#d9b96c', 0, 0.7),
      F('bloodDrop', 86, 70, '#e34325', 0, 0.6),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 52 }, boundFeatures: [0, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 40, y: 36 }, boundFeatures: [1, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 52 }, boundFeatures: [4] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 48 }, boundFeatures: [3, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 86 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 92 }, boundFeatures: [5] },
    ],
  },
  'harvest-hound': {
    kind: 'wolf', hue: '#6a5a3a', hue2: '#3f3520', glow: '#c98f2f', size: 1.0, eye: 'red',
    features: [
      F('chainCollar', 44, 50, '#6f6a5c', 0, 1),
      F('mattedFur', 60, 54, '#8a7a4c', 0, 1.1, '#6a5a3a'),
      F('scarMuzzle', 28, 40, '#4c4230', 0, 0.85),
      F('bristleTail', 94, 62, '#6a5a3a', 18, 0.9),
      F('bloodMaw', 26, 48, '#e34325', 0, 0.75),
      F('clawScratch', 38, 88, '#3f3520', 0, 0.9),
      F('muscleHaunch', 72, 70, '#8a7350', 0, 1),
      F('chainSnap', 56, 84, '#6f6a5c', -10, 0.8),
      F('pawStrike', 80, 90, '#3f3520', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 56, y: 58 }, boundFeatures: [0, 1, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 28, y: 42 }, boundFeatures: [2, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 38, y: 76 }, boundFeatures: [5, 7] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 76 }, boundFeatures: [8] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 92 }, boundFeatures: [] },
      { id: 'legR', parentId: 'root', anchor: { x: 94, y: 62 }, boundFeatures: [3] },
    ],
  },
  'scythe-warden': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 1.1, eye: 'glow',
    features: [
      F('giantScythe', 88, 24, '#cfd3dc', -16, 1.3, '#8a8f9c'),
      F('strawHat', 60, 12, '#d9b96c', 0, 1),
      F('hollowHood', 60, 24, '#3a4224', 0, 0.95),
      F('overallBib', 60, 58, '#5c6a3a', 0, 1.1, '#3a4224'),
      F('leatherGlove', 30, 66, '#5c4224', 0, 0.9),
      F('beltSickle', 48, 78, '#c98f2f', 0, 0.8),
      F('stakePost', 96, 56, '#8a7350', 0, 1.1),
      F('heavyBoots', 60, 98, '#3a4224', 0, 1),
      F('wheatSheaf', 22, 44, '#d9b96c', 8, 0.8),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [3, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [1, 2] },
      { id: 'armL', parentId: 'root', anchor: { x: 26, y: 52 }, boundFeatures: [4, 8] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 38 }, boundFeatures: [0, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 92 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 92 }, boundFeatures: [] },
    ],
  },
  'famine-effigy': {
    kind: 'effigy', hue: '#8a7350', hue2: '#5c4a30', glow: '#e34325', size: 1.15, eye: 'none',
    features: [
      F('grainSpikeCrown', 60, 12, '#d9b96c', 0, 1.1),
      F('hollowMouth', 60, 36, '#2b2115', 0, 1),
      F('dualScythe', 32, 42, '#8a8f9c', -12, 1.1, '#cfd3dc'),
      F('gauntFrame', 60, 58, '#a8915c', 0, 1.05),
      F('famineHalo', 60, 20, '#e34325', 0, 1.05),
      F('emaciatedArm', 88, 50, '#5c4a30', 8, 1),
      F('crowCrown', 60, 10, '#23262e', 0, 0.8),
      F('boneRib', 68, 68, '#a89878', 0, 0.85),
      F('strawDrip', 44, 84, '#d9b96c', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [3, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 16 }, boundFeatures: [0, 4, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 32, y: 46 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 50 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 80 }, boundFeatures: [8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 80 }, boundFeatures: [1] },
    ],
  },
  'the-last-harvest': {
    kind: 'brute', hue: '#a8915c', hue2: '#6d5527', glow: '#e2ae4f', size: 1.4, eye: 'red',
    features: [
      F('twinScythe', 34, 32, '#cfd3dc', -10, 1.3, '#8a8f9c'),
      F('wheatWall', 60, 96, '#d9b96c', 0, 1.3),
      F('harvestHalo', 60, 10, '#f0cd7d', 0, 1.2),
      F('effigyFace', 60, 30, '#6d5527', 0, 1),
      F('grainBeard', 60, 44, '#d9b96c', 0, 1.1),
      F('blessingHand', 26, 58, '#c9a34f', 0, 0.95),
      F('chainDrape', 88, 52, '#6f6a5c', 0, 0.9),
      F('rootBase', 60, 106, '#5c6a3a', 0, 1.2),
      F('scytheRight', 90, 36, '#cfd3dc', 14, 1.2, '#8a8f9c'),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [3, 4, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 16 }, boundFeatures: [2] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 48 }, boundFeatures: [0, 5] },
      { id: 'armR', parentId: 'root', anchor: { x: 90, y: 44 }, boundFeatures: [8] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 96 }, boundFeatures: [1, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 96 }, boundFeatures: [] },
    ],
  },

  /* ══ 生机森林 ══ */
  'forest-wolf': {
    kind: 'wolf', hue: '#4a5a48', hue2: '#2c362c', glow: '#8be9d8', size: 0.95, eye: 'glow',
    features: [
      F('mossMane', 50, 32, '#2e9e6b', 0, 1.05),
      F('leafTuft', 72, 28, '#4a8a5c', -8, 0.75),
      F('barkClaw', 30, 80, '#6d5527', 0, 0.85),
      F('glowEye', 38, 26, '#8be9d8', 0, 0.7),
      F('rootTail', 92, 64, '#4a5a48', 20, 0.95),
      F('furRuff', 60, 48, '#2c362c', 0, 1.1),
      F('leafScar', 68, 54, '#4a8a5c', 0, 0.8),
      F('pawMoss', 56, 92, '#2e9e6b', 0, 0.8),
      F('earPoint', 44, 18, '#4a5a48', -6, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 55, y: 52 }, boundFeatures: [5, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 40, y: 26 }, boundFeatures: [0, 3, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 68 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 76, y: 68 }, boundFeatures: [1] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 92 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 92, y: 64 }, boundFeatures: [4] },
    ],
  },
  'bramble-crawler': {
    kind: 'serpent', hue: '#3a5a3c', hue2: '#22332a', glow: '#6b8f3d', size: 0.85, eye: 'slit',
    features: [
      F('thornSpines', 60, 40, '#5c4224', 0, 1.1),
      F('venomDrop', 28, 58, '#b8e04f', 0, 0.85),
      F('barkShell', 60, 54, '#6d5527', 0, 1.15, '#3a5a3c'),
      F('vineWhip', 88, 48, '#3a5a3c', -14, 1),
      F('leafCrest', 60, 22, '#2e9e6b', 0, 0.9),
      F('rootFoot', 50, 88, '#6d5527', 0, 0.9),
      F('sporePatch', 76, 70, '#b8e04f', 0, 0.75),
      F('mandibleClaw', 36, 34, '#5c4224', 8, 0.8),
      F('mudBase', 60, 96, '#3a2c18', 0, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [0, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 40, y: 28 }, boundFeatures: [4, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 56 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 48 }, boundFeatures: [3, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 90 }, boundFeatures: [5, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 90 }, boundFeatures: [] },
    ],
  },
  'glowmoth-cluster': {
    kind: 'swarm', hue: '#3a5a4c', hue2: '#22332a', glow: '#8be9d8', size: 0.7, eye: 'glow',
    features: [
      F('mothWing', 44, 42, '#3a5a4c', -10, 1.1, '#22332a'),
      F('dustVeil', 60, 34, '#bfe8e0', 0, 1.05),
      F('glowCore', 60, 52, '#8be9d8', 0, 0.9),
      F('scaleTrail', 60, 78, '#4fd8c2', 0, 1),
      F('wingPairR', 78, 44, '#3a5a4c', 12, 1),
      F('pollenMist', 60, 20, '#bfe8e0', 0, 0.8),
      F('huskShell', 80, 64, '#22332a', 0, 0.75),
      F('antennaLeft', 48, 24, '#8be9d8', -14, 0.65),
      F('antennaRight', 72, 24, '#8be9d8', 14, 0.65),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 50 }, boundFeatures: [2, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 24 }, boundFeatures: [1, 5, 7, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 40, y: 44 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 44 }, boundFeatures: [4, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 78 }, boundFeatures: [] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 78 }, boundFeatures: [] },
    ],
  },
  'root-stalker': {
    kind: 'serpent', hue: '#5c4224', hue2: '#3a2c18', glow: '#c98f2f', size: 0.9, eye: 'slit',
    features: [
      F('rootTendril', 90, 38, '#6d5527', -20, 1.15),
      F('soilCrest', 60, 24, '#3a2c18', 0, 1),
      F('mawCrack', 30, 46, '#22332a', 0, 0.9),
      F('wrapVine', 70, 66, '#5c4224', 8, 1),
      F('sapVein', 44, 54, '#b8e04f', 0, 0.85),
      F('burrowMud', 60, 94, '#3a2c18', 0, 1.1),
      F('slitGaze', 34, 32, '#c98f2f', 0, 0.7),
      F('rootKnot', 76, 80, '#6d5527', 0, 0.8),
      F('dirtTrail', 48, 100, '#5c4224', 0, 0.9),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 58, y: 58 }, boundFeatures: [3, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 34, y: 32 }, boundFeatures: [1, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 50 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 90, y: 42 }, boundFeatures: [0] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 90 }, boundFeatures: [5, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 80 }, boundFeatures: [7] },
    ],
  },
  'alpha-wolf': {
    kind: 'wolf', hue: '#3a4a3c', hue2: '#20281f', glow: '#f0cd7d', size: 1.1, eye: 'red',
    features: [
      F('boneCrown', 48, 14, '#d8cbb0', 0, 0.95),
      F('alphaFang', 26, 44, '#e9e4d4', -4, 0.8),
      F('howlMaw', 28, 50, '#e9e4d4', 0, 0.9),
      F('tornBanner', 92, 30, '#4a3a20', 6, 0.95),
      F('deepScar', 62, 40, '#20281f', 0, 0.85),
      F('packAura', 60, 58, '#f0cd7d', 0, 1.2),
      F('scarEar', 66, 16, '#20281f', 8, 0.7),
      F('furMantle', 56, 36, '#3a4a3c', 0, 1.1, '#20281f'),
      F('clawPaw', 42, 88, '#20281f', 0, 0.85),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 54, y: 56 }, boundFeatures: [4, 5, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 36, y: 24 }, boundFeatures: [0, 1, 2, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 66 }, boundFeatures: [8] },
      { id: 'armR', parentId: 'root', anchor: { x: 92, y: 44 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 88 }, boundFeatures: [] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'ancient-treant': {
    kind: 'tree', hue: '#5c4224', hue2: '#3a2c18', glow: '#2e9e6b', size: 1.2, eye: 'glow',
    features: [
      F('knotFace', 60, 34, '#3a2c18', 0, 1),
      F('thickBark', 60, 56, '#5c4224', 0, 1.2, '#3a2c18'),
      F('canopyLeaf', 60, 14, '#2e9e6b', 0, 1.15),
      F('branchArmL', 30, 46, '#6d5527', -18, 1.1),
      F('branchArmR', 90, 46, '#6d5527', 16, 1.1),
      F('rootAnchor', 60, 94, '#3a2c18', 0, 1.15),
      F('mossPatches', 42, 64, '#2e9e6b', 0, 0.85),
      F('pollenBurst', 78, 26, '#f0cd7d', 0, 0.8),
      F('sapBleed', 74, 72, '#b8e04f', 0, 0.7),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [1, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [0, 2, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 32, y: 46 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 46 }, boundFeatures: [4, 8] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 90 }, boundFeatures: [] },
    ],
  },
  'heart-of-the-grove': {
    kind: 'tree', hue: '#4a5a3c', hue2: '#26332a', glow: '#8be9d8', size: 1.5, eye: 'glow',
    features: [
      F('ringHeart', 60, 52, '#f0cd7d', 0, 1.15),
      F('vineCrown', 60, 12, '#2e9e6b', 0, 1.1),
      F('biolumVein', 60, 66, '#8be9d8', 0, 1.2),
      F('rootPillar', 40, 96, '#26332a', 0, 1.2),
      F('rootPillarR', 80, 96, '#26332a', 0, 1.2),
      F('wolfMark', 86, 40, '#e9e4d4', 0, 0.8),
      F('groveHalo', 60, 8, '#4fd8c2', 0, 1.15),
      F('heartPulse', 60, 56, '#8be9d8', 0, 0.85),
      F('witherBranch', 28, 32, '#6d5527', -12, 1),
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 2, 7] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 14 }, boundFeatures: [1, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 40 }, boundFeatures: [8] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 40 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 40, y: 92 }, boundFeatures: [3] },
      { id: 'legR', parentId: 'root', anchor: { x: 80, y: 92 }, boundFeatures: [4] },
    ],
  },

  /* ══ 苔藓沼泽 ══ */
  'mire-crocodile': {
    kind: 'croc', hue: '#4c5a3a', hue2: '#2e3624', glow: '#6b8f3d', size: 1.0, eye: 'glow',
    features: [
      F('scutePlate', 60, 48, '#3a4a30', 0, 1.15, '#2e3624'),  // 0: dorsal scute armour
      F('mudSubmerse', 60, 88, '#2c1f10', 0, 1.2),              // 1: half-submerged mud pool
      F('rollSpine', 60, 60, '#4c5a3a', 18, 1.0),              // 2: torso death-roll twist
      F('jawHinge', 28, 62, '#2e3624', 0, 1.0),                // 3: massive hinged jaw
      F('dragClaw', 80, 76, '#3a4a30', -8, 0.9),               // 4: right drag claw
      F('mireFilm', 60, 94, '#6b8f3d', 0, 1.1),               // 5: swamp film underfoot
      F('nostrilBubble', 34, 54, '#b8e04f', 0, 0.7),           // 6: nostril gas bubble
      F('sapVent', 44, 78, '#6b8f3d', 0, 0.8),                 // 7: sap-drain vent on belly
      F('scarredTail', 92, 72, '#2e3624', 22, 1.0),            // 8: thick scarred tail
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 62 }, boundFeatures: [0, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 30, y: 58 }, boundFeatures: [3, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 44, y: 78 }, boundFeatures: [7] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 76 }, boundFeatures: [4] },
      { id: 'legL', parentId: 'root', anchor: { x: 60, y: 90 }, boundFeatures: [1, 5] },
      { id: 'legR', parentId: 'root', anchor: { x: 92, y: 72 }, boundFeatures: [8] },
    ],
  },
  'moss-lurker': {
    kind: 'blob', hue: '#3a5a42', hue2: '#22332a', glow: '#b8e04f', size: 0.85, eye: 'white',
    features: [
      F('sporeSac', 54, 30, '#b8e04f', 0, 0.9),               // 0: dorsal spore sac
      F('mossMantle', 60, 52, '#5c7a3c', 0, 1.15, '#22332a'), // 1: amorphous moss body
      F('hiddenClaw', 36, 72, '#22332a', -6, 0.85),           // 2: left concealed claw
      F('hiddenClaw2', 82, 72, '#22332a', 6, 0.85),           // 3: right concealed claw
      F('poreVent', 70, 38, '#b8e04f', 0, 0.7),               // 4: spore vent opening
      F('poreVent2', 48, 44, '#b8e04f', 0, 0.65),             // 5: secondary vent
      F('rootGrip', 60, 92, '#2e3624', 0, 1.0),               // 6: root tendrils base
      F('toxinDrip', 44, 82, '#8fae3c', 0, 0.8),              // 7: poison drip trail
      F('dimEye', 60, 42, '#e9e4d4', 0, 0.6),                 // 8: faint watching eye
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [1, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 58, y: 34 }, boundFeatures: [0, 4, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 72 }, boundFeatures: [2] },
      { id: 'armR', parentId: 'root', anchor: { x: 82, y: 72 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 60, y: 92 }, boundFeatures: [6] },
    ],
  },
  'reed-stalker': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 0.9, eye: 'slit',
    features: [
      F('reedCamo', 60, 54, '#7a8a4c', 0, 1.1, '#3a4224'),   // 0: reed-woven torso wrap
      F('reedSpear', 28, 28, '#8a9a5c', 8, 1.2),              // 1: long reed spear
      F('splitHood', 60, 18, '#5c6a3a', 0, 0.9),              // 2: split reed hood
      F('leanTorso', 60, 44, '#6b7a42', 0, 1.0),              // 3: lean angular torso
      F('marshBind', 38, 70, '#6b8f3d', 0, 0.8),              // 4: left marsh wrapping
      F('marshBind2', 78, 70, '#6b8f3d', 0, 0.8),             // 5: right marsh wrapping
      F('stabStance', 52, 86, '#3a4224', 0, 0.9),             // 6: lunging leg stance
      F('slitGaze', 60, 24, '#c98f2f', 0, 0.6),              // 7: predatory slit gaze
      F('muddySole', 68, 94, '#2e3624', 0, 0.8),             // 8: mud-caked feet
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 50 }, boundFeatures: [0, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [2, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 42 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 48 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 82 }, boundFeatures: [4, 6] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 94 }, boundFeatures: [8] },
    ],
  },
  'bog-witchling': {
    kind: 'hag', hue: '#4c5a3a', hue2: '#2e3624', glow: '#b8e04f', size: 0.9, eye: 'glow',
    features: [
      F('mudKettle', 84, 68, '#5c4224', 0, 0.9),              // 0: bubbling mud kettle
      F('toadPerch', 32, 86, '#6b8f3d', 0, 0.7),              // 1: toad companion
      F('gasBurst', 78, 50, '#b8e04f', 0, 0.8),               // 2: swamp gas burst
      F('tangledHair', 60, 14, '#3a2c18', 0, 0.95),           // 3: tangled mud hair
      F('patchRobe', 60, 56, '#4c5a3a', 0, 1.05, '#2e3624'), // 4: patched swamp robe
      F('mudBall', 38, 54, '#3a2c18', 0, 0.8),                // 5: prepared mud ball
      F('witchGrin', 60, 32, '#2e3624', 0, 0.75),             // 6: cackling grin
      F('charmDangle', 76, 38, '#b8e04f', 0, 0.65),           // 7: hanging curse charm
      F('bareFootMud', 60, 94, '#3a2c18', 0, 0.8),            // 8: muddy bare feet
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [4, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [3, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 58 }, boundFeatures: [5, 1] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 62 }, boundFeatures: [0, 2] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 88 }, boundFeatures: [8] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 90 }, boundFeatures: [] },
    ],
  },
  'swamp-hag': {
    kind: 'hag', hue: '#3a4a34', hue2: '#22332a', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('boneStaff', 26, 26, '#d8cbb0', 6, 1.25),             // 0: gnarled bone staff
      F('cauldronBig', 86, 62, '#2b2115', 0, 1.05),           // 1: iron cauldron
      F('poisonFume', 86, 46, '#8fae3c', 0, 0.85),            // 2: cauldron poison fume
      F('curseBeadNeck', 60, 44, '#b8e04f', 0, 0.9),          // 3: curse bead necklace
      F('ragCloak', 60, 68, '#22332a', 0, 1.15, '#3a4a34'),   // 4: tattered rag cloak
      F('wispHair', 60, 14, '#5c7a3c', 0, 1.1),               // 5: wild wispy hair
      F('warpedHands', 40, 74, '#8fae3c', 0, 0.85),           // 6: warped green hands
      F('bogHemSkirt', 60, 90, '#22332a', 0, 1.1),            // 7: frayed bog-hem skirt
      F('hexEye', 60, 28, '#e34325', 0, 0.7),                 // 8: glowing hex eye
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [3, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [5, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 26, y: 42 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 54 }, boundFeatures: [1, 2] },
      { id: 'legL', parentId: 'root', anchor: { x: 40, y: 86 }, boundFeatures: [6, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 92 }, boundFeatures: [] },
    ],
  },
  'ancient-croc': {
    kind: 'croc', hue: '#3a4a32', hue2: '#20281f', glow: '#e2ae4f', size: 1.15, eye: 'red',
    features: [
      F('thickScales', 60, 50, '#4c5a3a', 0, 1.25, '#20281f'), // 0: layered thick scales
      F('massiveJaw', 24, 60, '#20281f', -4, 1.1),             // 1: oversized crushing jaw
      F('mossGrowth', 60, 34, '#5c7a3c', 0, 1.0),             // 2: ancient moss on back
      F('rageVeins', 72, 54, '#e34325', 0, 0.85),             // 3: rage-glowing veins
      F('stoneHide', 44, 70, '#3a4a32', 0, 1.1),              // 4: stone-hard flank
      F('ancientEye', 30, 48, '#e2ae4f', 0, 0.7),             // 5: ancient amber eye
      F('mudArmour', 60, 80, '#2e3624', 0, 1.15),             // 6: caked mud armour
      F('tailClub', 94, 68, '#20281f', 16, 1.05),             // 7: club-like tail tip
      F('scarMark', 58, 42, '#20281f', 0, 0.8),               // 8: battle scar ridge
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 26, y: 52 }, boundFeatures: [1, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 44, y: 70 }, boundFeatures: [4] },
      { id: 'armR', parentId: 'root', anchor: { x: 78, y: 66 }, boundFeatures: [3] },
      { id: 'legL', parentId: 'root', anchor: { x: 60, y: 82 }, boundFeatures: [2, 6] },
      { id: 'legR', parentId: 'root', anchor: { x: 94, y: 68 }, boundFeatures: [7] },
    ],
  },
  'mother-of-the-mire': {
    kind: 'blob', hue: '#3a4436', hue2: '#222b22', glow: '#8fae3c', size: 1.4, eye: 'red',
    features: [
      F('vastMudBody', 60, 60, '#3a4436', 0, 1.3, '#222b22'),  // 0: massive mud mass
      F('crocNursery', 88, 78, '#4c5a3a', 0, 0.75),            // 1: croc spawn pod
      F('deepMaw', 60, 46, '#222b22', 0, 1.1),                 // 2: gaping central maw
      F('twinClaw', 32, 54, '#222b22', -10, 1.0),              // 3: left rending claw
      F('twinClaw2', 86, 54, '#222b22', 10, 1.0),              // 4: right rending claw
      F('sapAura', 60, 82, '#8fae3c', 0, 1.2),                 // 5: sap-drain miasma
      F('sporeCanopy', 60, 22, '#b8e04f', 0, 1.15),            // 6: spore cloud crown
      F('rootNetwork', 40, 92, '#2e3624', 0, 1.0),             // 7: spreading root system
      F('bossEye', 60, 36, '#e34325', 0, 0.9),                 // 8: baleful boss eye
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [0, 2] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [6, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 32, y: 54 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 60 }, boundFeatures: [1, 4] },
      { id: 'legL', parentId: 'root', anchor: { x: 40, y: 88 }, boundFeatures: [5, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 90 }, boundFeatures: [] },
    ],
  },

  /* ══ 恶臭下水道 ══ */
  'sewer-rat-king': {
    kind: 'rat', hue: '#5c5a4a', hue2: '#38362c', glow: '#e2ae4f', size: 1.0, eye: 'red',
    features: [
      F('rattyCrown', 60, 14, '#e2ae4f', 0, 0.9),              // 0: crude sewer crown
      F('ironBandBody', 60, 56, '#8a8f9c', 0, 1.05),           // 1: iron band harness
      F('subjectCircle', 60, 80, '#38362c', 0, 1.1),           // 2: rat subject ring
      F('gnarlFangs', 38, 38, '#d8cbb0', 0, 0.85),             // 3: plague-yellow fangs
      F('swarmTail', 88, 28, '#5c5a4a', 18, 1.0),              // 4: coiled tail throne
      F('plagueSore', 74, 62, '#8fae3c', 0, 0.7),              // 5: plague sore
      F('lordlyPose', 60, 66, '#5c5a4a', 0, 1.0),              // 6: regal hunched pose
      F('slopCarpet', 60, 94, '#5c6a3a', 0, 1.0),              // 7: sewage carpet
      F('summonScratch', 34, 72, '#38362c', 0, 0.8),           // 8: summoning scratch mark
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 58 }, boundFeatures: [1, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 50, y: 26 }, boundFeatures: [0, 3] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 64 }, boundFeatures: [8] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 44 }, boundFeatures: [4, 5] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 86 }, boundFeatures: [2] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 94 }, boundFeatures: [7] },
    ],
  },
  'plague-rat': {
    kind: 'rat', hue: '#54524a', hue2: '#32312c', glow: '#8fae3c', size: 0.65, eye: 'red',
    features: [
      F('mangeFur', 60, 54, '#42413a', 0, 1.0),                // 0: patchy mange fur
      F('sorePaws', 34, 78, '#8fae3c', 0, 0.75),               // 1: sore-riddled paws
      F('sorePaws2', 80, 78, '#8fae3c', 0, 0.75),              // 2: right sore paw
      F('wetSheen', 60, 60, '#54524a', 0, 1.05),               // 3: wet-slick body
      F('feverEyes', 60, 30, '#e34325', 0, 0.65),              // 4: feverish red eyes
      F('scrawnyTail', 90, 68, '#32312c', 14, 0.9),            // 5: thin twitching tail
      F('biteTeeth', 54, 40, '#d8cbb0', 0, 0.6),               // 6: exposed bite teeth
      F('filthMat', 60, 90, '#32312c', 0, 0.9),                // 7: filth-matted underbelly
      F('infectedNose', 48, 34, '#8fae3c', 0, 0.5),            // 8: infected pink nose
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [0, 3] },
      { id: 'head', parentId: 'root', anchor: { x: 52, y: 34 }, boundFeatures: [4, 6, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 72 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 72 }, boundFeatures: [2] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 88 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 90, y: 68 }, boundFeatures: [5] },
    ],
  },
  'filth-slime': {
    kind: 'blob', hue: '#6a6a4a', hue2: '#42422c', glow: '#8fae3c', size: 0.85, eye: 'white',
    features: [
      F('toxicMass', 60, 58, '#6a6a4a', 0, 1.2, '#42422c'),   // 0: main toxic body mass
      F('corrodeMist', 60, 34, '#8fae3c', 0, 1.05),            // 1: rising corrosive mist
      F('membraneShell', 60, 48, '#7a7a5a', 0, 1.1),           // 2: protective membrane
      F('acidDrip', 36, 76, '#8fae3c', 0, 0.85),               // 3: left acid drip
      F('acidDrip2', 80, 76, '#8fae3c', 0, 0.85),              // 4: right acid drip
      F('splashRing', 60, 88, '#42422c', 0, 1.15),             // 5: splash ring on ground
      F('nucleusEye', 60, 46, '#e9e4d4', 0, 0.7),              // 6: inner nucleus eye
      F('pipeDebris', 78, 64, '#5c5a4a', 0, 0.8),              // 7: embedded pipe debris
      F('stenchWave', 60, 22, '#8a8f5c', 0, 0.9),              // 8: stench wave lines
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [0, 2, 6] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 28 }, boundFeatures: [1, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 36, y: 68 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 80, y: 68 }, boundFeatures: [4, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 88 }, boundFeatures: [5] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 88 }, boundFeatures: [] },
    ],
  },
  'gutter-roach': {
    kind: 'roach', hue: '#4c3a2c', hue2: '#2c2018', glow: '#8fae3c', size: 0.7, eye: 'red',
    features: [
      F('chitinShell', 60, 52, '#5c4232', 0, 1.15),            // 0: glossy chitin shell
      F('pincerL', 30, 56, '#3a2c18', -8, 0.9),                // 1: left pincer claw
      F('pincerR', 88, 56, '#3a2c18', 8, 0.9),                 // 2: right pincer claw
      F('antennaL', 40, 24, '#6d5527', -12, 0.85),             // 3: left antenna
      F('antennaR', 76, 24, '#6d5527', 12, 0.85),              // 4: right antenna
      F('rotOoze', 60, 86, '#8fae3c', 0, 0.9),                 // 5: rot ooze trail
      F('legCluster', 60, 74, '#4c3a2c', 0, 1.0),              // 6: skittering leg cluster
      F('compoundEye', 56, 34, '#e34325', 0, 0.65),            // 7: compound red eye
      F('carapaceRidge', 60, 44, '#2c2018', 0, 1.0),           // 8: carapace ridge line
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [0, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 56, y: 30 }, boundFeatures: [3, 4, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 56 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 56 }, boundFeatures: [2] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 78 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 86 }, boundFeatures: [5] },
    ],
  },
  'pipe-warden': {
    kind: 'construct', hue: '#4a4c44', hue2: '#2c2e28', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('pipeChest', 60, 54, '#5c5e54', 0, 1.15, '#2c2e28'),  // 0: pipe-lattice chest
      F('bigWrench', 28, 58, '#8a8f9c', -14, 1.1),             // 1: oversized wrench arm
      F('gateShutter', 86, 58, '#6a6a5c', 0, 1.0),             // 2: iron gate shutter shield
      F('valveHead', 60, 22, '#8a8f9c', 0, 0.95),              // 3: valve-wheel head
      F('sludgePour', 74, 36, '#8fae3c', 0, 0.85),             // 4: sludge pour spout
      F('pressureDial', 84, 42, '#e34325', 0, 0.7),            // 5: pressure dial
      F('drainLegs', 50, 86, '#4a4c44', 0, 1.0),               // 6: left drain-pipe leg
      F('drainLegs2', 72, 86, '#4a4c44', 0, 1.0),              // 7: right drain-pipe leg
      F('rivetLine', 60, 68, '#6f6a5c', 0, 0.9),               // 8: rivet seam line
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [0, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [3, 4] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 54 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 50 }, boundFeatures: [2, 5] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 86 }, boundFeatures: [6] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 86 }, boundFeatures: [7] },
    ],
  },
  'the-bloated-sovereign': {
    kind: 'brute', hue: '#6a6248', hue2: '#423c2c', glow: '#8fae3c', size: 1.45, eye: 'white',
    features: [
      F('bloatBelly', 60, 62, '#6a6248', 0, 1.3, '#423c2c'),   // 0: grotesque bloat belly
      F('plagueGeyser', 60, 38, '#8fae3c', 0, 1.1),            // 1: plague geyser pores
      F('fatMembraneSkirt', 60, 82, '#7a7258', 0, 1.25),       // 2: fat membrane skirt
      F('crownSlime', 60, 14, '#e2ae4f', 0, 0.9),              // 3: slime-dripping crown
      F('crushArm', 32, 60, '#423c2c', -6, 1.05),              // 4: left crushing arm
      F('crushArm2', 86, 60, '#423c2c', 6, 1.05),              // 5: right crushing arm
      F('summonMaw', 84, 86, '#6a6a5c', 0, 0.9),               // 6: minion-spawn orifice
      F('toxicCrown', 60, 24, '#8a8f5c', 0, 1.0),              // 7: toxic crown fumes
      F('crackShell', 60, 72, '#423c2c', 0, 1.05),             // 8: cracked carapace
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 60 }, boundFeatures: [0, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 20 }, boundFeatures: [3, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 32, y: 58 }, boundFeatures: [4, 1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 58 }, boundFeatures: [5, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 86 }, boundFeatures: [2] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 90 }, boundFeatures: [] },
    ],
  },

  /* ══ 繁华皇都 ══ */
  'royal-halberdier': {
    kind: 'knight', hue: '#8a8f9c', hue2: '#5c5e68', glow: '#f0cd7d', size: 1.0, eye: 'white',
    features: [
      F('halberdPole', 28, 18, '#8a7350', 4, 1.3, '#cfd3dc'),  // 0: tall halberd weapon
      F('formShield', 88, 60, '#cfd3dc', 0, 0.9),              // 1: formation shield
      F('plumedHelm', 60, 14, '#e34325', 0, 0.9),              // 2: plumed helmet crest
      F('plateChest', 60, 52, '#8a8f9c', 0, 1.1, '#5c5e68'),  // 3: plate armour chest
      F('armourSkirt', 60, 78, '#5c5e68', 0, 1.05),            // 4: armour skirt
      F('breakPoint', 78, 48, '#f0cd7d', 0, 0.7),              // 5: armour-break tip
      F('marchStance', 48, 90, '#5c5e68', 0, 0.9),             // 6: disciplined stance
      F('chainMaille', 44, 62, '#8a8f9c', 0, 0.9),             // 7: chain mail detail
      F('regimentBelt', 60, 68, '#8a7350', 0, 0.85),           // 8: regiment belt buckle
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [3, 7, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 16 }, boundFeatures: [2] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 42 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 54 }, boundFeatures: [1, 5] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 84 }, boundFeatures: [4, 6] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'white-tower-adept': {
    kind: 'humanoid', hue: '#e9e4d4', hue2: '#b8b0a0', glow: '#8fc3e8', size: 0.9, eye: 'glow',
    features: [
      F('prayerRobe', 60, 62, '#f2eee0', 0, 1.1, '#b8b0a0'),  // 0: white prayer robe
      F('glyphCircle', 60, 48, '#8fc3e8', 0, 0.9),             // 1: orbiting glyph circle
      F('chantGlow', 60, 34, '#8fc3e8', 0, 0.8),               // 2: chanting glow aura
      F('apprenticeHat', 60, 12, '#f2eee0', 8, 0.9),           // 3: apprentice pointed hat
      F('bindRune', 34, 56, '#8fc3e8', 0, 0.75),               // 4: left binding rune
      F('scrollHand', 86, 60, '#e9e4d4', 0, 0.8),              // 5: scroll in hand
      F('buffAura', 60, 26, '#8fc3e8', 0, 0.85),               // 6: chanting buff shimmer
      F('inkStain', 50, 74, '#b8b0a0', 0, 0.7),                // 7: ink stain on robe
      F('sandals', 60, 92, '#8a7350', 0, 0.75),                // 8: simple sandals
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [0, 1] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [3, 6] },
      { id: 'armL', parentId: 'root', anchor: { x: 34, y: 52 }, boundFeatures: [4, 2] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 56 }, boundFeatures: [5] },
      { id: 'legL', parentId: 'root', anchor: { x: 48, y: 86 }, boundFeatures: [7, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 88 }, boundFeatures: [] },
    ],
  },
  'gilded-inquisitor': {
    kind: 'knight', hue: '#c9a34f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.0, eye: 'slit',
    features: [
      F('judgHammer', 28, 32, '#e2ae4f', 10, 1.15),            // 0: judgment hammer
      F('lawCodex', 86, 58, '#8a3a2c', 0, 0.9),                // 1: law codex book
      F('gildPlate', 60, 52, '#f0cd7d', 0, 1.05, '#8a6f2a'),  // 2: gilded plate body
      F('guiltHalo', 60, 12, '#f0cd7d', 0, 0.95),              // 3: halo of guilt
      F('verdictSeal', 60, 38, '#c9a34f', 0, 0.8),             // 4: verdict seal emblem
      F('goldChainSkirt', 60, 78, '#8a6f2a', 0, 1.0),          // 5: gold chain skirt
      F('accuseFinger', 34, 66, '#e2ae4f', 0, 0.75),           // 6: accusing finger point
      F('solemnMask', 60, 22, '#c9a34f', 0, 0.85),             // 7: solemn judging mask
      F('tribunalBoot', 60, 92, '#5c241c', 0, 0.85),           // 8: tribunal boots
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 52 }, boundFeatures: [2, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [3, 7] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 44 }, boundFeatures: [0, 6] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 52 }, boundFeatures: [1] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 82 }, boundFeatures: [5, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 86 }, boundFeatures: [] },
    ],
  },
  'plaza-crier': {
    kind: 'humanoid', hue: '#8a3a2c', hue2: '#5c241c', glow: '#f0cd7d', size: 0.85, eye: 'white',
    features: [
      F('warDrum', 60, 72, '#8a6f2a', 0, 0.95),                // 0: belt-mounted war drum
      F('crierScepter', 30, 50, '#8a7350', 4, 1.05),           // 1: decree scepter
      F('heraldTabard', 60, 54, '#8a3a2c', 0, 1.05, '#5c241c'), // 2: herald tabard
      F('bellCap', 60, 14, '#f0cd7d', 0, 0.85),                // 3: bell-tipped cap
      F('taxPouch', 84, 70, '#8a6f2a', 0, 0.75),               // 4: tax collection pouch
      F('shoutMouth', 60, 30, '#5c241c', 0, 0.7),              // 5: wide shouting mouth
      F('buffDrumstick', 82, 52, '#e2ae4f', 0, 0.7),           // 6: drumstick in hand
      F('scrollCase', 88, 36, '#e9e4d4', 0, 0.8),              // 7: scroll case on back
      F('crierBoots', 60, 90, '#5c241c', 0, 0.8),              // 8: pointed crier boots
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [2, 0] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 22 }, boundFeatures: [3, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 48 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 84, y: 50 }, boundFeatures: [6, 4] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 86 }, boundFeatures: [8] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 84 }, boundFeatures: [7] },
    ],
  },
  'royal-champion': {
    kind: 'knight', hue: '#c0c8d8', hue2: '#8a92a8', glow: '#f0cd7d', size: 1.15, eye: 'red',
    features: [
      F('towerShield', 86, 56, '#c0c8d8', 0, 1.15, '#8a92a8'), // 0: massive tower shield
      F('warlance', 24, 22, '#e9e4d4', -10, 1.25),             // 1: charging war lance
      F('fullPlate', 60, 54, '#c0c8d8', 0, 1.1, '#8a92a8'),   // 2: full plate armour
      F('goldPlume', 60, 8, '#f0cd7d', 0, 0.9),                // 3: golden plume crest
      F('crushGreave', 50, 84, '#8a92a8', 0, 1.0),             // 4: crushing greave
      F('crushGreave2', 72, 84, '#8a92a8', 0, 1.0),            // 5: right greave
      F('brittleMark', 76, 44, '#f0cd7d', 0, 0.7),             // 6: brittle-break mark
      F('chargeDust', 60, 96, '#8a92a8', 0, 1.0),              // 7: charge dust cloud
      F('victorCape', 60, 66, '#e34325', 0, 0.85),             // 8: victor's cape
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [2, 8] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 14 }, boundFeatures: [3] },
      { id: 'armL', parentId: 'root', anchor: { x: 24, y: 40 }, boundFeatures: [1] },
      { id: 'armR', parentId: 'root', anchor: { x: 86, y: 50 }, boundFeatures: [0, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 50, y: 84 }, boundFeatures: [4, 7] },
      { id: 'legR', parentId: 'root', anchor: { x: 72, y: 84 }, boundFeatures: [5] },
    ],
  },
  'lord-inquisitor': {
    kind: 'knight', hue: '#e2ae4f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.1, eye: 'slit',
    features: [
      F('twinHammerL', 30, 38, '#f0cd7d', -8, 1.1),            // 0: left judgment hammer
      F('twinHammerR', 88, 38, '#f0cd7d', 8, 1.1),             // 1: right judgment hammer
      F('verdictMantle', 60, 58, '#8a6f2a', 0, 1.15, '#8a3a2c'), // 2: verdict mantle
      F('judgeHalo', 60, 10, '#f0cd7d', 0, 1.0),               // 3: senior judge halo
      F('sealBadge', 60, 44, '#c9a34f', 0, 0.8),               // 4: verdict seal badge
      F('condemnGaze', 60, 26, '#e34325', 0, 0.75),            // 5: condemning slit gaze
      F('chainRobe', 60, 76, '#8a3a2c', 0, 1.05),              // 6: chain-linked robe
      F('docketScroll', 86, 66, '#e9e4d4', 0, 0.8),            // 7: docket scroll
      F('lawBoots', 60, 92, '#5c241c', 0, 0.9),                // 8: heavy law boots
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 54 }, boundFeatures: [2, 4] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 18 }, boundFeatures: [3, 5] },
      { id: 'armL', parentId: 'root', anchor: { x: 30, y: 44 }, boundFeatures: [0] },
      { id: 'armR', parentId: 'root', anchor: { x: 88, y: 44 }, boundFeatures: [1, 7] },
      { id: 'legL', parentId: 'root', anchor: { x: 44, y: 86 }, boundFeatures: [6, 8] },
      { id: 'legR', parentId: 'root', anchor: { x: 76, y: 88 }, boundFeatures: [] },
    ],
  },
  'sun-crown-warden': {
    kind: 'statue', hue: '#f0cd7d', hue2: '#b8963a', glow: '#f0cd7d', size: 1.4, eye: 'glow',
    features: [
      F('sunCrownMassive', 60, 10, '#f7e3ae', 0, 1.2),         // 0: massive sun crown
      F('coronaFlare', 60, 24, '#f0cd7d', 0, 1.15),            // 1: corona flare halo
      F('gateBody', 60, 56, '#b8963a', 0, 1.25, '#8a6f2a'),   // 2: gate-like stone body
      F('doubleHammerL', 28, 50, '#e2ae4f', -8, 1.1),          // 3: left execution hammer
      F('doubleHammerR', 90, 50, '#e2ae4f', 8, 1.1),           // 4: right execution hammer
      F('brittleDecree', 60, 70, '#8a6f2a', 0, 1.0),           // 5: brittle decree cracks
      F('guardSummon', 86, 82, '#cfd3dc', 0, 0.8),             // 6: guard summon sigil
      F('pillarLegs', 60, 92, '#b8963a', 0, 1.15),             // 7: pillar-like legs
      F('verdictBeam', 60, 40, '#f7e3ae', 0, 0.9),             // 8: verdict energy beam
    ],
    joints: [
      { id: 'root', parentId: null, anchor: { x: 60, y: 56 }, boundFeatures: [2, 5] },
      { id: 'head', parentId: 'root', anchor: { x: 60, y: 16 }, boundFeatures: [0, 1, 8] },
      { id: 'armL', parentId: 'root', anchor: { x: 28, y: 50 }, boundFeatures: [3] },
      { id: 'armR', parentId: 'root', anchor: { x: 90, y: 54 }, boundFeatures: [4, 6] },
      { id: 'legL', parentId: 'root', anchor: { x: 46, y: 90 }, boundFeatures: [7] },
      { id: 'legR', parentId: 'root', anchor: { x: 74, y: 92 }, boundFeatures: [] },
    ],
  },

};
