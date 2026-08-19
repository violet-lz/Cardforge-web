// 怪物外形视觉规格 · 前半（第一、二幕相关地域）
import { F, type MonsterVisualSpec } from './monsterVisualTypes';

export const VISUALS_A: Record<string, MonsterVisualSpec> = {
  /* ══ 灰烬荒原 ══ */
  ashling: {
    kind: 'beast', hue: '#5a544c', hue2: '#3a352f', glow: '#e34325', size: 0.9, eye: 'red',
    features: [
      F('spikeTufts', 60, 24, '#8a7350', '背部三簇翘起的灰烬棘毛', 0, 1, '#5a544c'),
      F('emberVeins', 60, 58, '#ff6a45', '灰皮下若隐若现的橙红余烬纹路', 0, 1),
      F('burnTail', 92, 74, '#8a7350', '尾尖永远带着一小簇火苗', 18),
      F('scarPaw', 34, 88, '#c98f2f', '左前爪一道未愈的灼痕', 0, 0.9),
      F('ashPuff', 28, 40, '#6f6a5c', '呼出的气里裹着细灰', 0, 0.8),
      F('smolderMouth', 40, 66, '#e34325', '咧开的嘴角冒着火星', 0, 0.8),
    ],
  },
  'cinder-sprite': {
    kind: 'moth', hue: '#7a4a34', hue2: '#4a2c20', glow: '#ff6a45', size: 0.8, eye: 'glow',
    features: [
      F('glassWings', 60, 46, '#ffb27e', '薄如炉膛玻璃的半透明翅', 0, 1, '#e34325'),
      F('emberTail', 60, 84, '#ff6a45', '尾端拖着一串不熄的余烬', 0, 1),
      F('sparkHalo', 60, 22, '#f0cd7d', '头顶环飞着三粒火种', 0, 0.9),
      F('ashDust', 42, 76, '#8a7350', '翅缘撒落的灰白鳞粉', 0, 0.8),
      F('coalCore', 60, 56, '#2b2115', '胸口嵌着一块发光的煤核', 0, 0.7),
      F('flameAntenna', 60, 20, '#f0cd7d', '触角尖端各燃一粒火星', 0, 0.9),
    ],
  },
  'rust-hound': {
    kind: 'wolf', hue: '#6e4a32', hue2: '#42301f', glow: '#c98f2f', size: 1, eye: 'glow',
    features: [
      F('rustPatches', 52, 58, '#a3542c', '肩背大片剥落的铁锈斑', 0, 1),
      F('boneJaw', 30, 64, '#d8cbb0', '半截外露的灰白骨颚', 0, 0.9),
      F('chainCollar', 44, 60, '#6f6a5c', '脖子上扣着生锈钢圈', 0, 1),
      F('hookTail', 88, 70, '#6e4a32', '尾巴断成一道铁钩', 12),
      F('flakingArmour', 70, 44, '#8a5a38', '脊甲裂口正往下掉锈屑', 0, 0.9),
      F('tornEar', 74, 24, '#42301f', '右耳撕成三瓣', 8),
      F('dustTrail', 90, 90, '#8a7350', '跑动时扬起一路铁锈尘', 0, 0.8),
    ],
  },
  'glass-moth': {
    kind: 'moth', hue: '#cfd8dc', hue2: '#9aa8b2', glow: '#8be9d8', size: 0.85, eye: 'white',
    features: [
      F('paneWings', 60, 46, '#dfe9ee', '四片棱面像碎玻璃的翅', 0, 1, '#8be9d8'),
      F('crackWing', 40, 40, '#e9e4d4', '左翅一道清晰的裂纹', -12),
      F('prismDust', 60, 80, '#bfe8e0', '飞时撒下七彩微尘', 0, 1),
      F('glassAntennae', 60, 18, '#cfd8dc', '两根中空的玻璃棒触角', 0, 0.9),
      F('refractBody', 60, 56, '#e9e4d4', '身体边缘折射出细光棱', 0, 0.9),
      F('shardLegs', 60, 86, '#9aa8b2', '足尖各坠着一粒小玻璃碴', 0, 0.8),
    ],
  },
  'veil-monger': {
    kind: 'humanoid', hue: '#4a4360', hue2: '#2c2740', glow: '#f0cd7d', size: 1, eye: 'slit',
    features: [
      F('tatteredCloak', 60, 70, '#5c5478', '披着一块边缘割烂的灰紫帷幕', 0, 1.1, '#2c2740'),
      F('maskLantern', 60, 26, '#f0cd7d', '脸上罩着灯芯忽明忽暗的面具', 0, 0.9),
      F('cutHands', 30, 72, '#c9a34f', '十指缝里夹着裁帷幕的钝刀', 0, 0.9),
      F('priceTag', 80, 58, '#e9e4d4', '袖口挂着一串价签牌', 6, 0.8),
      F('veilSpool', 88, 78, '#6a628a', '腰后缠着一卷未售的帷幕布', 0, 0.8),
      F('shadowHem', 60, 96, '#2c2740', '袍摆拖地，阴影比人长', 0, 1.1),
      F('haggleBrow', 60, 20, '#8a82a8', '眉骨挑着像在报价', 0, 0.9),
    ],
  },
  'bell-tender': {
    kind: 'humanoid', hue: '#8a7350', hue2: '#5c4a30', glow: '#e2ae4f', size: 0.95, eye: 'glow',
    features: [
      F('shoulderBell', 74, 40, '#e2ae4f', '左肩驮着一口小铜钟', 0, 0.9),
      F('ropeSleeve', 32, 70, '#8a6f3f', '右臂缠满拉钟的粗绳', 0, 0.9),
      F('bellTollRing', 60, 30, '#f0cd7d', '头顶荡着一圈钟鸣波纹', 0, 1),
      F('copperCuff', 88, 74, '#c98f2f', '袖口镶着磨亮的铜箍', 0, 0.8),
      F('kneelWear', 60, 94, '#5c4a30', '跪痕磨秃的膝甲', 0, 0.9),
      F('muffledHem', 46, 88, '#6a5a3c', '袍角缝着止音的毡布', 0, 0.8),
    ],
  },
  'kiln-brute': {
    kind: 'brute', hue: '#6e5a48', hue2: '#453628', glow: '#ff6a45', size: 1.15, eye: 'red',
    features: [
      F('glowCracks', 60, 60, '#ff6a45', '浑身裂纹里透出窑火橙光', 0, 1.2),
      F('moltenFist', 92, 66, '#ff6a45', '右拳熔成通红半流质', 0, 1),
      F('ironCollar', 60, 40, '#453628', '铁箍烙在粗短的脖子上', 0, 1),
      F('ashShelf', 60, 26, '#8a7350', '肩背像搁了一架冷灰', 0, 1.1),
      F('clayBoots', 60, 96, '#453628', '双脚烧成两块实心黏土', 0, 1),
      F('kilnMouth', 60, 46, '#2b2115', '咧开的嘴像一孔窑门', 0, 0.9),
      F('heatHalo', 60, 60, '#e34325', '周身蒸腾一圈热浪', 0, 1.3),
    ],
  },
  'ink-leech': {
    kind: 'serpent', hue: '#2c3040', hue2: '#181b26', glow: '#4fd8c2', size: 0.95, eye: 'slit',
    features: [
      F('inkDrip', 60, 92, '#181b26', '身下不断滴落化不开的浓墨', 0, 1),
      F('quillSpine', 60, 36, '#8a82a8', '脊背排着一列笔锋倒刺', 0, 1),
      F('suckerMouth', 30, 66, '#4fd8c2', '吸盘口边缘泛着墨绿光泽', 0, 0.9),
      F('inkPool', 60, 100, '#181b26', '尾端拖出一条墨带', 0, 1.1),
      F('fadedScales', 74, 52, '#3a4054', '鳞片像洇开又干透的字迹', 0, 1),
      F('dabNose', 34, 58, '#181b26', '鼻尖沾着刚蘸满的墨', 0, 0.8),
    ],
  },
  'bone-scrivener': {
    kind: 'statue', hue: '#d8cbb0', hue2: '#a89878', glow: '#f0cd7d', size: 1.05, eye: 'white',
    features: [
      F('ribCage', 60, 62, '#e9e4d4', '胸廓由五根肋骨撑成', 0, 1),
      F('femurQuill', 36, 44, '#e9e4d4', '右手握着一根股骨削成的笔', -20, 0.9),
      F('pageSash', 60, 70, '#c9a34f', '肩上斜挂一串未干的骨页', 8, 1),
      F('jointKnuckles', 86, 68, '#a89878', '指节全是突出的骨臼', 0, 0.9),
      F('spineStack', 78, 92, '#cbbfa4', '腰后插着一摞抄稿卷', -6, 0.9),
      F('eyeSockets', 60, 26, '#2b2115', '眼窝里搁着两颗磨圆的指骨', 0, 0.8),
      F('inkStain', 46, 84, '#181b26', '袍口溅着一块墨渍', 0, 0.8),
    ],
  },
  'ashen-warden': {
    kind: 'knight', hue: '#5c544c', hue2: '#3a352f', glow: '#e2ae4f', size: 1.1, eye: 'red',
    features: [
      F('helmSlit', 60, 26, '#e2ae4f', '头盔只开一道熔金色视缝', 0, 0.9),
      F('clockFace', 60, 58, '#c9a34f', '胸甲嵌着一面停摆的钟盘', 0, 0.9),
      F('ashSeal', 60, 80, '#2b2115', '腰封上压着一枚黑灰火漆', 0, 0.8),
      F('ringHalo', 60, 18, '#e2ae4f', '盔顶浮着一圈钟形光纹', 0, 0.9),
      F('ashPlume', 60, 12, '#8a7350', '羽饰早已烧成灰白一撮', 0, 0.9),
      F('wardenSpear', 94, 50, '#c9a34f', '左手拄着断尖的守门戟', 0, 1.1),
      F('sealArms', 60, 66, '#453628', '前臂缠满封印纹黑带', 0, 1),
    ],
  },
  'crownless-furnace': {
    kind: 'vessel', hue: '#5c4a3c', hue2: '#3a2e24', glow: '#ff6a45', size: 1.3, eye: 'red',
    features: [
      F('mouthGlow', 60, 34, '#ff6a45', '炉口喷吐着两道熔金气流', 0, 1),
      F('ironRibs', 60, 62, '#3a2e24', '炉身箍着六道开口的铁肋', 0, 1.1),
      F('crownGap', 60, 14, '#c98f2f', '炉顶空着本该放王冠的凹槽', 0, 0.9),
      F('slagDrips', 60, 96, '#e34325', '炉底淌着凝不成块的炉渣', 0, 1),
      F('stokerDoor', 60, 78, '#2b2115', '腹部一扇小炉门永远半开', 0, 0.8),
      F('emberSprite', 92, 30, '#ff6a45', '炉口盘旋着被喷出的余烬小精灵', 0, 0.6),
      F('heatShimmer', 60, 40, '#f0cd7d', '炉口上方热浪扭曲成环', 0, 1),
      F('ashWings', 60, 50, '#8a7350', '两侧残存的烟道像烧焦的翅', 0, 1),
    ],
  },

  /* ══ 落败村庄 ══ */
  'straw-effigy': {
    kind: 'effigy', hue: '#b9985c', hue2: '#7a5f33', glow: '#e2ae4f', size: 1, eye: 'none',
    features: [
      F('crookedScythe', 80, 22, '#cfd3dc', '肩头斜扛一柄卷刃的镰', -18, 1, '#8a8f9c'),
      F('crackedHat', 60, 16, '#6d5527', '歪戴一顶裂开的草檐帽', 6, 0.9),
      F('buttonEyes', 60, 34, '#2b2115', '两枚焦黑的扣子当眼睛', 0, 0.9),
      F('strawBurst', 36, 66, '#d9b96c', '袖口和破袍里迸出干草束', 0, 1),
      F('ropeWaist', 60, 76, '#8a6f3f', '腰间绕死一道粗草绳', 0, 1),
      F('tatteredRobe', 44, 92, '#7a5f33', '袍摆撕成参差的穗边', 0, 1),
      F('crowPerch', 90, 28, '#23262e', '帽檐上蹲着一只黑鸦', 0, 0.8),
    ],
  },
  'village-scavenger': {
    kind: 'humanoid', hue: '#7a6a4c', hue2: '#4c4230', glow: '#c98f2f', size: 0.9, eye: 'white',
    features: [
      F('hoeStaff', 32, 40, '#8a7350', '右手拄着磨秃的木锄', 8, 1.1),
      F('patchCloak', 60, 66, '#5c5240', '披满补丁的旧斗篷', 0, 1.1, '#4c4230'),
      F('bulgeSack', 88, 76, '#8a6f3f', '背上拖着一个鼓胀的拾荒袋', 0, 0.9),
      F('bentPosture', 60, 50, '#7a6a4c', '常年弯腰驼背的骨架', 0, 1),
      F('toothGap', 60, 40, '#2b2115', '豁牙的嘴咧着笑', 0, 0.8),
      F('mudBoots', 60, 96, '#4c4230', '草鞋糊满黑泥', 0, 0.9),
      F('coinGlint', 86, 70, '#e2ae4f', '口袋里漏出一枚铜钱反光', 0, 0.6),
    ],
  },
  'crow-swarm': {
    kind: 'swarm', hue: '#23262e', hue2: '#15171e', glow: '#f0cd7d', size: 1.05, eye: 'red',
    features: [
      F('crowRing', 60, 50, '#23262e', '七只黑鸦绕成一圈涡旋', 0, 1.2, '#15171e'),
      F('glintEyes', 60, 46, '#f0cd7d', '旋心透出几点金红眼光', 0, 1),
      F('beakFlash', 44, 34, '#8a8f9c', '掠过的喙尖闪着钝光', 0, 0.8),
      F('wingsBlur', 74, 62, '#15171e', '翅膀拉出一道道残影', 0, 1.1),
      F('strawPick', 60, 84, '#d9b96c', '爪间叼着抢来的草束', 0, 0.7),
      F('dustWake', 60, 92, '#8a7350', '落地时扬起一圈草屑', 0, 1),
    ],
  },
  'harvest-hound': {
    kind: 'wolf', hue: '#6a5a3a', hue2: '#3f3520', glow: '#c98f2f', size: 0.95, eye: 'red',
    features: [
      F('weaveCollar', 44, 58, '#d9b96c', '脖子上缠着破草编项圈', 0, 1),
      F('stubbleFur', 60, 52, '#8a7a4c', '皮毛里混着没割尽的麦茬', 0, 1),
      F('scarSnout', 30, 62, '#4c4230', '鼻尖一道旧刀疤', 0, 0.8),
      F('thickTail', 90, 68, '#6a5a3a', '尾巴粗得像一捆麦秸', 14),
      F('bloodScent', 90, 40, '#e34325', '鼻孔翕动，飘着暗红气息', 0, 0.8),
      F('fieldHound', 60, 94, '#3f3520', '四肢沾满田垄的干土', 0, 1),
      F('chainedPaw', 36, 88, '#6f6a5c', '右爪还套着生锈铁环', 0, 0.8),
    ],
  },
  'scythe-warden': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 1.05, eye: 'glow',
    features: [
      F('greatScythe', 84, 18, '#cfd3dc', '肩扛一柄齐身高的大镰', -14, 1.2, '#8a8f9c'),
      F('strawBraid', 60, 14, '#d9b96c', '帽檐编着一圈干麦穗', 0, 0.9),
      F('gatedGlove', 30, 72, '#5c4224', '左手套着铁爪手套', 0, 0.9),
      F('hollowHood', 60, 26, '#3a4224', '兜帽里黑得像没长脸', 0, 0.9),
      F('scarePost', 96, 60, '#8a7350', '背后插着一根稻草人桩', 0, 1),
      F('sickleBelt', 60, 80, '#c98f2f', '腰带上别着三把小镰', 0, 0.8),
      F('stalkersGait', 60, 96, '#3a4224', '草鞋踩田垄不留痕', 0, 1),
    ],
  },
  'famine-effigy': {
    kind: 'effigy', hue: '#8a7350', hue2: '#5c4a30', glow: '#e34325', size: 1.2, eye: 'none',
    features: [
      F('hollowMouth', 60, 38, '#2b2115', '咧到耳根的豁口像在吞气', 0, 1),
      F('grainSpines', 60, 20, '#d9b96c', '头顶扎满干枯的谷穗刺', 0, 1.1),
      F('doubleScythe', 60, 30, '#8a8f9c', '两肩斜交叉着两柄断镰', 0, 1.1, '#cfd3dc'),
      F('emaciatedStraw', 42, 66, '#a8915c', '袍子里的草束稀得像肋骨', 0, 1),
      F('hungryHalo', 60, 24, '#e34325', '头顶一圈暗红的饥荒光晕', 0, 1),
      F('sunkShoulders', 60, 48, '#5c4a30', '双肩塌进领口', 0, 1),
      F('crowCrown', 60, 12, '#23262e', '帽顶停着三只哑鸦', 0, 0.8),
    ],
  },
  'the-last-harvest': {
    kind: 'brute', hue: '#a8915c', hue2: '#6d5527', glow: '#e2ae4f', size: 1.3, eye: 'red',
    features: [
      F('twinGiantScythes', 60, 26, '#cfd3dc', '双手各握一柄三米巨镰', 0, 1.3, '#8a8f9c'),
      F('wheatWall', 60, 92, '#d9b96c', '足边围着一圈齐腰的麦墙', 0, 1.3),
      F('sunkenCheeks', 60, 36, '#6d5527', '脸颊凹进两团阴影', 0, 0.9),
      F('strawBeard', 60, 46, '#d9b96c', '胡须是一大把焦黄的麦芒', 0, 1),
      F('blessingHands', 30, 62, '#c9a34f', '掌心刻着丰歉祷文', 0, 0.9),
      F('harvestHalo', 60, 14, '#f0cd7d', '头顶一圈收割季的光环', 0, 1.1),
      F('drownedField', 60, 102, '#5c6a3a', '脚下田水翻涌出枯苗', 0, 1.2),
    ],
  },

  /* ══ 生机森林 ══ */
  'forest-wolf': {
    kind: 'wolf', hue: '#4a5a48', hue2: '#2c362c', glow: '#8be9d8', size: 0.9, eye: 'glow',
    features: [
      F('mossMane', 60, 40, '#2e9e6b', '颈鬃上落着活苔藓', 0, 1),
      F('whitewing', 36, 60, '#e9e4d4', '左肋一道天生白斑', 0, 0.8),
      F('packScar', 70, 56, '#2c362c', '右肩三排交错的旧爪痕', 0, 0.9),
      F('greenEye', 60, 28, '#8be9d8', '眼瞳亮着荧绿的狼光', 0, 0.8),
      F('rootTail', 88, 70, '#4a5a48', '尾尖毛色像一截老根', 16),
      F('barkNails', 60, 90, '#6d5527', '爪尖硬得像树皮', 0, 0.8),
    ],
  },
  'bramble-crawler': {
    kind: 'serpent', hue: '#3a5a3c', hue2: '#22332a', glow: '#6b8f3d', size: 1, eye: 'slit',
    features: [
      F('thornCoil', 60, 56, '#5c4224', '身缠带刺的活藤，刺尖朝外', 0, 1.1),
      F('venomTip', 30, 64, '#b8e04f', '藤鞭端滴着荧绿毒液', 0, 0.9),
      F('leafCap', 60, 26, '#2e9e6b', '头顶扣着一片卷边的叶盾', 0, 0.9),
      F('rootFeet', 60, 92, '#6d5527', '爪根扎地，抠出十字土痕', 0, 1),
      F('barkPlate', 72, 48, '#5c4224', '背上嵌着几片厚树皮甲', 0, 1),
      F('sporeMouth', 34, 68, '#b8e04f', '张口时喷出一缕孢子雾', 0, 0.8),
    ],
  },
  'glowmoth-cluster': {
    kind: 'swarm', hue: '#3a5a4c', hue2: '#22332a', glow: '#8be9d8', size: 1, eye: 'glow',
    features: [
      F('mothWheel', 60, 52, '#3a5a4c', '十几只小蛾绕成发光轮盘', 0, 1.15, '#22332a'),
      F('fireflyCore', 60, 52, '#8be9d8', '旋心一盏荧绿光核', 0, 0.9),
      F('dustVeil', 60, 40, '#bfe8e0', '轮缘撒下迷障鳞粉', 0, 1.1),
      F('blinkWing', 44, 36, '#8be9d8', '翅面明灭像呼吸的灯', 0, 0.8),
      F('trailGlow', 60, 86, '#4fd8c2', '飞过处留下一串萤迹', 0, 1),
      F('huskShell', 76, 68, '#22332a', '一只大蛾披着灰褐壳翅', 0, 0.8),
    ],
  },
  'root-stalker': {
    kind: 'serpent', hue: '#5c4224', hue2: '#3a2c18', glow: '#c98f2f', size: 1, eye: 'slit',
    features: [
      F('rootWhip', 88, 40, '#6d5527', '头顶甩出一根长根须鞭', -24, 1.1),
      F('soilCrest', 60, 28, '#3a2c18', '脊背隆起一行带土的根瘤', 0, 1),
      F('trenchMouth', 30, 66, '#22332a', '张口时露出一道沟状吸口', 0, 0.9),
      F('sappingGrasp', 60, 90, '#5c4224', '三股根爪攥地，渗出黏液', 0, 1),
      F('sapVine', 44, 48, '#b8e04f', '缠身的细藤挂着涸竭黏珠', 0, 0.9),
      F('burrowMud', 60, 100, '#3a2c18', '尾端拖着一线松土', 0, 1),
      F('eyePits', 34, 56, '#c98f2f', '两根短根下藏着两点根眼', 0, 0.7),
    ],
  },
  'alpha-wolf': {
    kind: 'wolf', hue: '#3a4a3c', hue2: '#20281f', glow: '#f0cd7d', size: 1.15, eye: 'red',
    features: [
      F('boneCrown', 60, 16, '#d8cbb0', '额前架着一枚骨角头冠', 0, 0.9),
      F('silverBite', 34, 58, '#c0c8d8', '左颊咬掉一块露出银色骨面', 0, 0.8),
      F('howlMouth', 30, 62, '#e9e4d4', '永远咧着嚎令的巨口', 0, 0.9),
      F('tornBanner', 88, 34, '#4a3a20', '颈上披着一角破兽皮旗', 0, 0.9),
      F('pawPrints', 60, 94, '#20281f', '足印比同伴深一倍', 0, 1),
      F('packAura', 60, 60, '#f0cd7d', '周身浮着号令的金纹', 0, 1.2),
      F('scarredEar', 74, 22, '#20281f', '双耳各缺一个口', 6),
    ],
  },
  'ancient-treant': {
    kind: 'tree', hue: '#5c4224', hue2: '#3a2c18', glow: '#2e9e6b', size: 1.15, eye: 'glow',
    features: [
      F('knotFace', 60, 40, '#3a2c18', '树干结眼，是它的脸', 0, 0.9),
      F('branchArms', 60, 56, '#6d5527', '两臂是甩得动的巨枝', 0, 1.2),
      F('barkPlates', 60, 66, '#5c4224', '躯干覆着层叠老树皮甲', 0, 1.1),
      F('canopyHalo', 60, 18, '#2e9e6b', '树冠顶着一圈常绿光晕', 0, 1.1),
      F('pollenBurst', 78, 30, '#f0cd7d', '枝杈间爆开一团花粉', 0, 0.9),
      F('rootAnchor', 60, 96, '#3a2c18', '五根气根深深钉进地面', 0, 1.1),
      F('mossShoulder', 44, 34, '#2e9e6b', '左肩苔毯里开着小花', 0, 0.8),
    ],
  },
  'heart-of-the-grove': {
    kind: 'tree', hue: '#4a5a3c', hue2: '#26332a', glow: '#8be9d8', size: 1.3, eye: 'glow',
    features: [
      F('ringHeart', 60, 54, '#f0cd7d', '胸口年轮围成一颗发光的心', 0, 1.1),
      F('thornCrown', 60, 16, '#2e9e6b', '树冠压着一圈荆棘王冠', 0, 1.1),
      F('veinBark', 60, 70, '#8be9d8', '树皮里奔流着荧绿的树液脉', 0, 1.2),
      F('rootPillars', 60, 94, '#26332a', '四根柱根撑起整片林地', 0, 1.2),
      F('wolfMark', 84, 44, '#e9e4d4', '身侧刻着一枚旧狼牙印', 0, 0.8),
      F('witherBough', 30, 26, '#6d5527', '一枝枯臂垂落腐叶', 0, 1),
      F('groveHalo', 60, 12, '#4fd8c2', '顶着一圈林地守护的光环', 0, 1.1),
    ],
  },

  /* ══ 苔藓沼泽 ══ */
  'mire-crocodile': {
    kind: 'croc', hue: '#4c5a3a', hue2: '#2e3624', glow: '#6b8f3d', size: 1, eye: 'glow',
    features: [
      F('mossBack', 60, 40, '#5c7a3c', '背甲缝里长着活苔', 0, 1.1),
      F('deadRoll', 60, 62, '#2e3624', '尾椎扭成死亡翻滚的钩弧', 0, 1),
      F('mudMuzzle', 30, 66, '#3a2c18', '吻部糊着半干的淤泥', 0, 0.9),
      F('siltEyes', 34, 56, '#b8e04f', '眼珠浮在泥线之上两点', 0, 0.7),
      F('tugClaw', 78, 74, '#4c5a3a', '前爪扣着拖人的淤泥纹', 0, 0.9),
      F('bubbleGulp', 36, 74, '#b8e04f', '鼻孔咕噜吐着泥泡', 0, 0.8),
      F('sapRing', 60, 84, '#6b8f3d', '周身一圈涸竭的黏环', 0, 1.1),
    ],
  },
  'moss-lurker': {
    kind: 'blob', hue: '#3a5a42', hue2: '#22332a', glow: '#b8e04f', size: 0.95, eye: 'white',
    features: [
      F('mossFur', 60, 44, '#5c7a3c', '体表盖着厚厚的软苔', 0, 1.1),
      F('sporePore', 60, 66, '#b8e04f', '腹下排着一列孢囊孔', 0, 1),
      F('clawStump', 40, 86, '#22332a', '苔皮下伸出一截灰白爪', 0, 0.8),
      F('dripVenom', 44, 94, '#8fae3c', '苔边滴下荧绿的毒涎', 0, 0.9),
      F('halfSunken', 60, 98, '#2e3624', '下半身沉在泥里看不见', 0, 1),
      F('watchPit', 60, 40, '#e9e4d4', '苔毯里只露两个眼坑', 0, 0.8),
    ],
  },
  'reed-stalker': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#c98f2f', size: 0.95, eye: 'slit',
    features: [
      F('reedHood', 60, 24, '#7a8a4c', '兜帽是一捆直芦苇', 0, 1),
      F('reedLance', 30, 36, '#8a9a5c', '手握削尖的芦枪', 10, 1.1),
      F('stemCloak', 60, 66, '#5c6a3a', '披叶披成一件茎秆斗篷', 0, 1.1, '#3a4224'),
      F('stalkBend', 60, 50, '#7a8a4c', '腰肢能像芦苇一样折弯', 0, 1),
      F('jointKnees', 60, 84, '#3a4224', '膝盖反折成芦苇节', 0, 0.9),
      F('reedShadow', 60, 96, '#3a4224', '踩水无声，影被芦苇分碎', 0, 1),
    ],
  },
  'bog-witchling': {
    kind: 'hag', hue: '#4c5a3a', hue2: '#2e3624', glow: '#b8e04f', size: 0.85, eye: 'glow',
    features: [
      F('mudPigtails', 60, 16, '#3a2c18', '两股泥搓的辫子甩在脑后', 0, 0.9),
      F('gasBubbles', 74, 78, '#b8e04f', '嘴里含着一团沼气泡泡', 0, 0.9),
      F('clayKettle', 88, 70, '#5c4224', '臂弯夹着半只黏土罐', 0, 0.8),
      F('swampWig', 60, 22, '#5c7a3c', '头发是一蓬湿透的浮萍', 0, 1),
      F('mudSplat', 44, 66, '#3a2c18', '裙摆溅满抛出去的泥点', 0, 1),
      F('cackleMouth', 60, 36, '#2e3624', '咧到耳根的坏笑', 0, 0.9),
      F('toadFriend', 34, 88, '#6b8f3d', '脚边趴着一只鼓腮蛙', 0, 0.7),
    ],
  },
  'swamp-hag': {
    kind: 'hag', hue: '#3a4a34', hue2: '#22332a', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('cauldronArm', 84, 58, '#2b2115', '左臂环抱一口咕嘟的毒釜', 0, 1),
      F('boneStaff', 30, 30, '#d8cbb0', '右杖是一根人骨磨尖', 6, 1.2),
      F('hairWisps', 60, 18, '#5c7a3c', '发丝里缠着水藻和蛙卵', 0, 1.1),
      F('curseBeads', 60, 58, '#b8e04f', '胸前一串发光的诅咒珠', 0, 0.9),
      F('festerHands', 44, 72, '#8fae3c', '指节肿大，指缝渗毒液', 0, 0.9),
      F('bogSkirt', 60, 92, '#22332a', '裙底拖出沼泽的湿痕', 0, 1.1),
      F('toadThrone', 60, 98, '#4c5a3a', '脚下三只蟾蜍叠成小凳', 0, 0.8),
    ],
  },
  'ancient-croc': {
    kind: 'croc', hue: '#3a4a32', hue2: '#20281f', glow: '#e2ae4f', size: 1.25, eye: 'red',
    features: [
      F('oldScale', 60, 44, '#4c5a3a', '鳞甲磨成一片片的古铜', 0, 1.2),
      F('mossCrown', 60, 26, '#5c7a3c', '吻脊上苔藓堆成王冠状', 0, 1),
      F('giantJaw', 30, 66, '#20281f', '巨颚缝里全是断齿', 0, 1),
      F('rageVein', 70, 56, '#e34325', '暴怒时颈侧青筋发红', 0, 0.9),
      F('stumpLeg', 80, 80, '#2e3624', '右后腿断成秃桩', 0, 0.9),
      F('deepMud', 60, 98, '#2e3624', '半个身子沉在古泥里', 0, 1),
      F('scarRidge', 60, 38, '#20281f', '背脊一道百年旧疤', 0, 1),
    ],
  },
  'mother-of-the-mire': {
    kind: 'blob', hue: '#3a4436', hue2: '#222b22', glow: '#8fae3c', size: 1.3, eye: 'red',
    features: [
      F('mudBelly', 60, 66, '#3a4436', '浑圆的身躯是活淤泥', 0, 1.2, '#222b22'),
      F('twinClaw', 60, 44, '#222b22', '泥面浮出两排泥爪', 0, 1.1),
      F('siltRing', 60, 88, '#5c6a3a', '周身绕着三层深陷泥环', 0, 1.3),
      F('sporeHalo', 60, 24, '#b8e04f', '头顶浮起一圈沼毒孢子', 0, 1.1),
      F('crocChild', 92, 80, '#4c5a3a', '身侧拱出一只沼鳄的头', 0, 0.7),
      F('drainEyes', 60, 40, '#8fae3c', '两排涸竭的小眼沉在泥里', 0, 0.9),
      F('bogBloom', 44, 30, '#b8e04f', '泥背上开着一朵黑睡莲', 0, 0.9),
    ],
  },

  /* ══ 恶臭下水道 ══ */
  'sewer-rat-king': {
    kind: 'rat', hue: '#5c5a4a', hue2: '#38362c', glow: '#e2ae4f', size: 1.15, eye: 'red',
    features: [
      F('tailCrown', 60, 16, '#6f6a5c', '七条鼠尾在头顶编成王冠', 0, 1),
      F('ironBands', 60, 60, '#8a8f9c', '肋上勒着三道铁箍', 0, 1),
      F('royalSlop', 60, 94, '#5c6a3a', '王座是一摊发亮的泔水', 0, 1),
      F('yellowFangs', 34, 66, '#d8cbb0', '一对磨得锃亮的黄牙', 0, 0.9),
      F('subjectRing', 60, 76, '#38362c', '身下围着一圈小疫鼠', 0, 1.1),
      F('plagueMuzzle', 36, 64, '#4a4838', '吻部肿着一块疫斑', 0, 0.8),
      F('coinStash', 88, 88, '#e2ae4f', '尾巴扫开一堆啃过的铜钱', 0, 0.8),
    ],
  },
  'plague-rat': {
    kind: 'rat', hue: '#54524a', hue2: '#32312c', glow: '#8fae3c', size: 0.8, eye: 'red',
    features: [
      F('sorePaw', 36, 86, '#8fae3c', '左爪溃着一块荧绿脓包', 0, 0.8),
      F('wetFur', 60, 60, '#42413a', '皮毛湿成一绺一绺', 0, 1),
      F('feverGlow', 60, 30, '#e34325', '鼻孔里透着发热的光', 0, 0.7),
      F('gnawedPipe', 88, 40, '#8a8f9c', '嘴刁着一截啃过的铅皮', 0, 0.8),
      F('twitchTail', 90, 76, '#54524a', '尾巴不停抽动', 14),
      F('runawayEyes', 60, 28, '#e34325', '眼珠乱转像受惊', 0, 0.7),
    ],
  },
  'filth-slime': {
    kind: 'blob', hue: '#6a6a4a', hue2: '#42422c', glow: '#8fae3c', size: 1.05, eye: 'white',
    features: [
      F('slopBody', 60, 62, '#6a6a4a', '浑身是甩不干的灰绿污泥', 0, 1.15, '#42422c'),
      F('corrodeMist', 60, 40, '#8fae3c', '体表蒸出一圈腐蚀酸雾', 0, 1.1),
      F('stinkLine', 60, 24, '#8a8f5c', '头顶飘着三道臭气纹', 0, 1),
      F('gritSplat', 44, 92, '#42422c', '拖行时甩出泥点', 0, 1),
      F('dullEye', 60, 50, '#e9e4d4', '糊着眼白的一双呆眼', 0, 0.8),
      F('pipeRind', 74, 78, '#5c5a4a', '体内嵌着半截铁丝', 0, 0.8),
    ],
  },
  'gutter-roach': {
    kind: 'roach', hue: '#4c3a2c', hue2: '#2c2018', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('glossShell', 60, 56, '#5c4232', '甲壳油亮得像涂了油', 0, 1.1),
      F('whiskerFan', 34, 40, '#6d5527', '两根须子长过体宽一倍', 0, 1.2),
      F('clawSnaps', 30, 62, '#3a2c18', '前足弯成两把弹簧钳', 0, 0.9),
      F('rotGoo', 60, 92, '#8fae3c', '足底抹着一道腐液', 0, 1),
      F('hopperLegs', 60, 84, '#4c3a2c', '后腿弓起随时弹射', 0, 1),
      F('gritEye', 60, 36, '#e34325', '复眼里积着两点红砂', 0, 0.7),
    ],
  },
  'pipe-warden': {
    kind: 'construct', hue: '#4a4c44', hue2: '#2c2e28', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('gateArmour', 60, 60, '#5c5e54', '胸腔是一扇锈死的铁闸', 0, 1.1),
      F('wrenchFist', 30, 68, '#8a8f9c', '右拳拧成一把巨扳手', -16, 1),
      F('pipeVeins', 60, 44, '#6a6a5c', '肩颈爬满排污细管', 0, 1.1),
      F('sludgeVent', 74, 30, '#8fae3c', '排气孔不断喷着污水', 0, 0.9),
      F('valveEye', 60, 28, '#e34325', '独眼是一个锈红阀门', 0, 0.8),
      F('chainLeg', 84, 88, '#6f6a5c', '左腿拖着锁链铁环', 0, 1),
      F('dripHelm', 60, 18, '#4a4c44', '头顶沿帽沿滴下水珠', 0, 0.9),
    ],
  },
  'the-bloated-sovereign': {
    kind: 'brute', hue: '#6a6248', hue2: '#423c2c', glow: '#8fae3c', size: 1.35, eye: 'white',
    features: [
      F('giantSlop', 60, 62, '#6a6248', '鼓胀成山丘的肥硕巨躯', 0, 1.25, '#423c2c'),
      F('festerPores', 60, 50, '#8fae3c', '皮面布满溃烂的脓孔', 0, 1.1),
      F('fatMembrane', 60, 84, '#7a7258', '周身绷着一层发亮的脂膜', 0, 1.2),
      F('crownOintment', 60, 18, '#e2ae4f', '秃顶抹着一圈廉价金膏', 0, 0.9),
      F('roarStench', 60, 34, '#8a8f5c', '张口喷出整片臭雾', 0, 1.1),
      F('crackedShell', 60, 72, '#423c2c', '身侧绷开一道将裂的缝', 0, 1),
      F('minionDrip', 84, 92, '#6a6a5c', '脚下滴落一群小污物', 0, 1),
    ],
  },

  /* ══ 繁华皇都 ══ */
  'royal-halberdier': {
    kind: 'knight', hue: '#8a8f9c', hue2: '#5c5e68', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('halberdShaft', 32, 22, '#8a7350', '手执一杆齐颈的长戟', 4, 1.2, '#cfd3dc'),
      F('crestPlume', 60, 14, '#e34325', '盔顶一绺猩红羽缨', 0, 0.9),
      F('lanceLivery', 60, 62, '#f0cd7d', '胸前绣着金线列阵纹', 0, 0.9),
      F('breakArmour', 84, 60, '#cfd3dc', '左臂甲片已崩出豁口', 0, 0.8),
      F('stepLines', 60, 94, '#5c5e68', '军靴踏出列阵的白线', 0, 1),
      F('shieldBoss', 90, 66, '#f0cd7d', '塔盾中央凸起都徽金钉', 0, 0.8),
    ],
  },
  'white-tower-adept': {
    kind: 'humanoid', hue: '#e9e4d4', hue2: '#b8b0a0', glow: '#8fc3e8', size: 0.9, eye: 'glow',
    features: [
      F('towerRobe', 60, 64, '#f2eee0', '披着塔白的学徒长袍', 0, 1.1, '#b8b0a0'),
      F('bindSigil', 60, 56, '#8fc3e8', '掌心贴着一枚缚言符', 0, 0.8),
      F('quillBelt', 30, 78, '#8a7350', '腰带别着三管符墨', 0, 0.8),
      F('chalkSmudge', 60, 44, '#c8c0ae', '袖口沾满粉笔灰', 0, 0.9),
      F('rookieHat', 60, 16, '#f2eee0', '方帽还歪着没戴正', 8, 0.9),
      F('fumbleGlow', 60, 34, '#8fc3e8', '指尖漏出一圈不稳的符光', 0, 0.8),
    ],
  },
  'gilded-inquisitor': {
    kind: 'knight', hue: '#c9a34f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.05, eye: 'slit',
    features: [
      F('goldHammer', 30, 30, '#e2ae4f', '手执鎏金审判锤', 10, 1.1),
      F('codeCodex', 86, 62, '#8a3a2c', '左臂夹着一册烫金教典', 0, 0.9),
      F('guiltRing', 60, 22, '#f0cd7d', '眉上浮着一圈罪状刻环', 0, 0.9),
      F('leafGold', 60, 52, '#f0cd7d', '面甲贴着碎金箔', 0, 1),
      F('chainVerdict', 60, 84, '#8a6f2a', '腰带垂着宣判用的铁链', 0, 0.9),
      F('sermonCuff', 34, 70, '#e2ae4f', '袖口绣满判词经文', 0, 0.8),
    ],
  },
  'plaza-crier': {
    kind: 'humanoid', hue: '#8a3a2c', hue2: '#5c241c', glow: '#f0cd7d', size: 0.9, eye: 'white',
    features: [
      F('hornMegaphone', 34, 36, '#e2ae4f', '嘴前架着一只铜喇叭', 14, 0.9),
      F('drumBelt', 60, 80, '#8a6f2a', '腰后挂着一面令鼓', 0, 0.9),
      F('scrollQuiver', 88, 44, '#e9e4d4', '背后插满征税告示', 0, 1),
      F('medallion', 60, 54, '#f0cd7d', '胸前一枚大号都徽', 0, 0.9),
      F('pointStaff', 30, 62, '#8a7350', '权杖不停点着人群', 0, 1),
      F('shoutingMouth', 60, 34, '#5c241c', '嘴张成铜号口型', 0, 0.8),
    ],
  },
  'royal-champion': {
    kind: 'knight', hue: '#c0c8d8', hue2: '#8a92a8', glow: '#f0cd7d', size: 1.15, eye: 'red',
    features: [
      F('towerShield', 88, 60, '#c0c8d8', '左盾高过胸口的塔盾', 0, 1.1, '#8a92a8'),
      F('lanceTip', 26, 28, '#e9e4d4', '右枪的枪尖闪着寒光', -12, 1.2),
      F('crushCharge', 60, 88, '#8a92a8', '肩甲崩出碎甲冲锋的裂痕', 0, 1),
      F('plumeGold', 60, 12, '#f0cd7d', '羽冠是足金织的', 0, 0.9),
      F('chainMail', 60, 66, '#8a92a8', '锁子甲密得像雨幕', 0, 1.1),
      F('dentedBrim', 60, 22, '#c0c8d8', '头盔压着一道凹痕', 0, 0.8),
    ],
  },
  'lord-inquisitor': {
    kind: 'knight', hue: '#e2ae4f', hue2: '#8a6f2a', glow: '#f0cd7d', size: 1.15, eye: 'slit',
    features: [
      F('twinHammers', 60, 34, '#f0cd7d', '双手各提一柄金锤', 0, 1.1),
      F('haloJudge', 60, 14, '#f0cd7d', '头顶悬着一圈判词光环', 0, 1),
      F('goldMantle', 60, 64, '#8a6f2a', '金红大氅拖到地面', 0, 1.15, '#8a3a2c'),
      F('sealSleeve', 34, 70, '#8a3a2c', '袖口三枚定罪火漆', 0, 0.8),
      F('murmurChin', 60, 38, '#5c241c', '下颌一直念叨着判词', 0, 0.8),
      F('docketHand', 86, 56, '#e9e4d4', '左手捏着一卷罪状', 0, 0.8),
    ],
  },
  'sun-crown-warden': {
    kind: 'statue', hue: '#f0cd7d', hue2: '#b8963a', glow: '#f0cd7d', size: 1.3, eye: 'glow',
    features: [
      F('sunCrown', 60, 14, '#f7e3ae', '头顶一轮十二芒的日冕', 0, 1.1),
      F('radiantHalo', 60, 30, '#f0cd7d', '肩后展开一圈日光环', 0, 1.2),
      F('twinScepters', 60, 60, '#e2ae4f', '双手分执日月权杖', 0, 1.1),
      F('crackLaw', 60, 76, '#8a6f2a', '胸甲崩出碎律的裂纹', 0, 1),
      F('pillarBase', 60, 96, '#b8963a', '足踏六棱日晷基座', 0, 1.1),
      F('decreeEyes', 60, 36, '#e34325', '眼中刻着宣判的朱纹', 0, 0.8),
      F('goldenDust', 60, 90, '#f7e3ae', '基座洒落一圈金粉', 0, 1),
    ],
  },

  /* ══ 皇都外环 ══ */
  'toll-enforcer': {
    kind: 'knight', hue: '#6a5a42', hue2: '#423826', glow: '#c98f2f', size: 1, eye: 'slit',
    features: [
      F('ironRod', 30, 26, '#8a8f9c', '手挥一截税关铁棍', 8, 1.1),
      F('gateShield', 88, 60, '#5c4e38', '盾面是半扇铁门', 0, 1, '#423826'),
      F('ledgerClamp', 60, 56, '#e9e4d4', '胸前夹着一块账板', 0, 0.9),
      F('seizureHands', 34, 72, '#6a5a42', '十指铁指，专门扣货', 0, 0.9),
      F('dutyWhistle', 60, 42, '#c98f2f', '喉间吊着一只铁哨', 0, 0.7),
      F('borderStrap', 60, 82, '#423826', '横挎一条没完没了的税带', 0, 1),
    ],
  },
  'road-bandit': {
    kind: 'humanoid', hue: '#5c4a38', hue2: '#382c20', glow: '#e2ae4f', size: 0.95, eye: 'red',
    features: [
      F('lootBlade', 30, 30, '#cfd3dc', '反手拖着一条劫刀', 20, 1.1),
      F('eyePatchCoin', 60, 28, '#e2ae4f', '眼罩缝着一枚亮铜钱', 0, 0.7),
      F('lootBelt', 60, 80, '#8a6f3f', '腰带挂满抢来的瓶瓶罐罐', 0, 1),
      F('greedyGrin', 60, 36, '#382c20', '见钱就咧的贪笑', 0, 0.9),
      F('dustRag', 60, 46, '#6a5a42', '脖子上蒙着防沙布', 0, 0.9),
      F('bootSpurs', 60, 94, '#8a8f9c', '马刺磨得锃亮', 0, 0.8),
    ],
  },
  'caravan-deserter': {
    kind: 'humanoid', hue: '#7a6a54', hue2: '#4c4232', glow: '#c98f2f', size: 0.95, eye: 'white',
    features: [
      F('crateBack', 78, 56, '#8a7350', '背上绑着三只逃出货箱', 0, 1),
      F('crossbowSlung', 32, 34, '#8a7350', '斜背一把没弦的短弩', 0, 1),
      F('dustHaze', 60, 88, '#a8915c', '身后拖着一道扬尘', 0, 1.1),
      F('tornCrest', 60, 52, '#8a3a2c', '肩章撕掉一半露出驿徽', 0, 0.8),
      F('shufflingGait', 60, 94, '#4c4232', '步态拖沓，靴跟磨穿', 0, 0.9),
      F('waryEyes', 60, 30, '#e9e4d4', '眼神一直在躲闪', 0, 0.8),
    ],
  },
  'wall-sentinel': {
    kind: 'knight', hue: '#7a7268', hue2: '#4c463e', glow: '#c98f2f', size: 1.05, eye: 'slit',
    features: [
      F('cremeriePost', 90, 30, '#8a8272', '背后探出一截垛口石栏', 0, 1),
      F('pikeStand', 30, 20, '#cfd3dc', '长枪斜插在肩后', 14, 1.2),
      F('gateLantern', 86, 62, '#f0cd7d', '左臂挑着一盏关门灯', 0, 0.8),
      F('cuffWorn', 34, 70, '#4c463e', '袖口磨成布条', 0, 0.8),
      F('wallShield', 60, 58, '#7a7268', '胸盾压着城墙砖纹', 0, 1),
      F('dutyStains', 60, 88, '#4c463e', '甲缝里全是守夜的灰', 0, 1),
    ],
  },
  'border-marshal': {
    kind: 'brute', hue: '#5c5248', hue2: '#38322c', glow: '#e2ae4f', size: 1.2, eye: 'red',
    features: [
      F('heavyMaul', 30, 34, '#8a8f9c', '手摇一柄门轴级重锤', 12, 1.1),
      F('ironArray', 60, 60, '#4c463e', '肩甲排成整备的铁阵纹', 0, 1.1),
      F('marshalCrest', 60, 16, '#e2ae4f', '盔顶一枚铁鹰边徽', 0, 0.9),
      F('commandBolt', 84, 64, '#8a8f9c', '腰侧插着三枚传令铁钉', 0, 0.8),
      F('grindJaw', 60, 40, '#38322c', '下颌一直在磨牙', 0, 0.9),
      F('stampBoots', 60, 94, '#38322c', '军靴每步都砸出印', 0, 1),
    ],
  },
  'broken-seal-gatekeeper': {
    kind: 'gate', hue: '#6a5a42', hue2: '#3f3424', glow: '#e2ae4f', size: 1.3, eye: 'red',
    features: [
      F('sealDoor', 60, 54, '#8a8f9c', '身躯就是一扇半开的铁门', 0, 1.2, '#423826'),
      F('crackedSeal', 60, 30, '#e2ae4f', '门楣火漆裂成两半', 0, 1),
      F('gateMaul', 30, 40, '#8a8f9c', '门侧吊着一柄闸锤', 0, 1.1),
      F('lockDownBars', 60, 72, '#5c4e38', '门缝里横着三道落杆', 0, 1.1),
      F('callBells', 88, 26, '#c98f2f', '门顶两只报警铜铃', 0, 0.8),
      F('dutyMud', 60, 98, '#3f3424', '门槛积着多年的泥', 0, 1.1),
      F('sentinelGlow', 60, 18, '#e2ae4f', '门缝里透出哨位的灯', 0, 0.9),
    ],
  },

  /* ══ 血色之地 ══ */
  'blood-cultist': {
    kind: 'humanoid', hue: '#5c241c', hue2: '#32120e', glow: '#e34325', size: 0.95, eye: 'red',
    features: [
      F('ritualBlade', 30, 34, '#8a8f9c', '手执一柄滴血的仪刀', 10, 1),
      F('bloodSigil', 60, 54, '#e34325', '胸口烙着血契纹', 0, 0.9),
      F('offeringBowl', 86, 72, '#5c241c', '左盘捧着一只献祭碗', 0, 0.8),
      F('scarLines', 60, 40, '#e34325', '面颊刻着三道灼痕', 0, 0.9),
      F('chantedHood', 60, 24, '#32120e', '兜帽下嘴唇一直在念', 0, 0.9),
      F('drippingHem', 60, 94, '#e34325', '袍摆一滴不落的全是血', 0, 1.1),
    ],
  },
  'crimson-berserker': {
    kind: 'brute', hue: '#8a2c22', hue2: '#4c1610', glow: '#e34325', size: 1.2, eye: 'red',
    features: [
      F('wildCleaver', 30, 30, '#cfd3dc', '单手抡着一条豁口狂斩刀', 18, 1.2),
      F('rageVeins', 60, 50, '#e34325', '脖颈爬满暴起血筋', 0, 1.1),
      F('tornPauldron', 84, 40, '#8a2c22', '肩甲被自己砍掉半边', 0, 0.9),
      F('frenzyFoam', 60, 44, '#e9e4d4', '嘴角挂着狂怒的白沫', 0, 0.8),
      F('bloodSashes', 60, 66, '#e34325', '身上缠满染血布条', 0, 1.1),
      F('stompMarks', 60, 94, '#4c1610', '脚下一圈踏裂的血坑', 0, 1.1),
    ],
  },
  'bone-hill-lurker': {
    kind: 'serpent', hue: '#a83a30', hue2: '#5c1c14', glow: '#e9e4d4', size: 1.05, eye: 'red',
    features: [
      F('bonePile', 60, 92, '#d8cbb0', '下半身埋在一座骨丘里', 0, 1.2),
      F('spikeRibs', 60, 56, '#e9e4d4', '赤红的脊背顶出一排骨刺', 0, 1.1),
      F('tornWound', 74, 62, '#5c1c14', '体侧裂着新鲜的伤口', 0, 0.9),
      F('hookEye', 40, 40, '#e9e4d4', '眼里挂着两枚骨钩', 0, 0.7),
      F('clutchClaw', 34, 70, '#a83a30', '骨丘里伸出一只抓握爪', 0, 0.9),
      F('hillShadow', 60, 84, '#5c1c14', '骨丘下藏着更深的黑', 0, 1.1),
    ],
  },
  'gore-windmill': {
    kind: 'gate', hue: '#7a2c22', hue2: '#481812', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('millBlades', 60, 26, '#8a8f9c', '头顶四片带血的磨刀轮', 0, 1.1, '#cfd3dc'),
      F('grindHole', 60, 62, '#481812', '磨盘中央开着一孔血洞', 0, 1),
      F('bloodRain', 60, 40, '#e34325', '轮缘甩下细细的血雨', 0, 1.1),
      F('millWheelBody', 60, 74, '#7a2c22', '躯干是一只旋转的大磨盘', 0, 1.15, '#481812'),
      F('sackMouth', 60, 52, '#e9e4d4', '磨口漏出的粉屑像骨粉', 0, 0.9),
      F('creekBed', 60, 98, '#5c1c14', '脚边淌着一线血色水渠', 0, 1.1),
    ],
  },
  'blood-marshal': {
    kind: 'knight', hue: '#6a1c14', hue2: '#3a0e0a', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('oathBlade', 30, 28, '#cfd3dc', '腰刀缠着血誓黑绸', 8, 1.1),
      F('brandSeal', 60, 52, '#e34325', '肩甲烙着滚烫的血印', 0, 0.9),
      F('commandPlume', 60, 14, '#e34325', '羽冠是一束血缨', 0, 0.9),
      F('ironMantle', 60, 64, '#4c1610', '大氅是整块血铁浇的', 0, 1.15, '#3a0e0a'),
      F('frostChill', 34, 44, '#e9e4d4', '刃口却冷得像霜', 0, 0.7),
      F('rallyCry', 60, 38, '#e34325', '喉间滚着号令的嗡鸣', 0, 0.8),
    ],
  },
  'clotted-altar': {
    kind: 'gate', hue: '#5c1c14', hue2: '#32100c', glow: '#e34325', size: 1.3, eye: 'red',
    features: [
      F('altarSlab', 60, 70, '#6a241c', '本体是六棱凝血祭坛', 0, 1.2, '#32100c'),
      F('twinOfferBlades', 60, 44, '#cfd3dc', '坛顶插着两把交叠祭刃', 0, 1.1),
      F('bloodShell', 60, 58, '#8a2c22', '坛壁结着一层厚血壳', 0, 1.15),
      F('flameCups', 60, 30, '#e34325', '四角血焰长明灯', 0, 1),
      F('skinPeel', 84, 78, '#5c1c14', '坛沿剥落着皮状碎屑', 0, 0.9),
      F('cultistRing', 60, 94, '#32100c', '坛下围着一圈跪伏黑影', 0, 1.2),
      F('throbGlow', 60, 52, '#e34325', '整座祭坛在一下下搏动', 0, 1.1),
    ],
  },

  /* ══ 魔法之地 ══ */
  'candle-apprentice': {
    kind: 'humanoid', hue: '#4a5a8a', hue2: '#2c3454', glow: '#f0cd7d', size: 0.9, eye: 'glow',
    features: [
      F('candleHalo', 60, 20, '#f0cd7d', '头边悬着一圈浮动烛环', 0, 1),
      F('fireSigil', 60, 52, '#ff6a45', '掌心按着一枚火符', 0, 0.8),
      F('bindSpell', 34, 44, '#8fc3e8', '左腕缠着没念完的缚咒', 0, 0.8),
      F('sootNose', 60, 32, '#2c3454', '鼻尖蹭着黑灰', 0, 0.7),
      F('bookArm', 86, 62, '#e9e4d4', '左臂夹着半烧的书页', 0, 0.9),
      F('floatBoots', 60, 92, '#4a5a8a', '脚尖离地三寸打滑', 0, 0.9),
    ],
  },
  'rune-construct': {
    kind: 'construct', hue: '#3a4460', hue2: '#22283c', glow: '#8fc3e8', size: 1.1, eye: 'glow',
    features: [
      F('runeShield', 86, 58, '#8fc3e8', '左盾上符环一圈圈流转', 0, 1),
      F('runeHammer', 30, 34, '#cfd3dc', '右锤刻满打击符文', 10, 1),
      F('engravedScar', 60, 60, '#8fc3e8', '胸甲新刻的符痕还在发光', 0, 1),
      F('jointBolts', 60, 46, '#8a8f9c', '肩颈露出一排符文螺栓', 0, 1),
      F('stoneCore', 60, 54, '#22283c', '腹腔嵌着一颗蓝色晶核', 0, 0.8),
      F('sealFeet', 60, 94, '#3a4460', '足底压着两道封印线', 0, 1),
    ],
  },
  'grimoire-swarm': {
    kind: 'swarm', hue: '#e9e4d4', hue2: '#b8b0a0', glow: '#8fc3e8', size: 1, eye: 'none',
    features: [
      F('bookVortex', 60, 50, '#e9e4d4', '十几本古书盘旋成漩涡', 0, 1.15, '#b8b0a0'),
      F('paperBlades', 44, 36, '#f2eee0', '书页翻卷成纸刃', 0, 1),
      F('errantPages', 74, 66, '#e9e4d4', '错位的书页互相撕扯', 0, 0.9),
      F('inkLeak', 60, 84, '#181b26', '漩涡底漏出一缕墨汁', 0, 0.9),
      F('manaSip', 60, 40, '#8fc3e8', '页缝里吸着淡蓝法力丝', 0, 1),
      F('rustleSound', 60, 28, '#b8b0a0', '整团书页哗哗作响', 0, 1),
    ],
  },
  'astrolabe-keeper': {
    kind: 'humanoid', hue: '#4c4470', hue2: '#2c2848', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('astrolabe', 86, 50, '#c9a34f', '左臂展开一座黄铜星盘', 0, 1),
      F('ringHalo', 60, 22, '#f0cd7d', '头后悬着三环星轨', 0, 1.1),
      F('computeFingers', 34, 70, '#c9a34f', '指尖掐着天权击的星位', 0, 0.8),
      F('starChart', 60, 58, '#e9e4d4', '胸前披着一幅星图', 0, 0.9),
      F('brassCuff', 32, 64, '#c9a34f', '袖口一圈黄铜环', 0, 0.8),
      F('nodCompute', 60, 30, '#2c2848', '脑袋点得像在演算', 0, 0.8),
    ],
  },
  'archmage-tutor': {
    kind: 'statue', hue: '#5c5488', hue2: '#363054', glow: '#8fc3e8', size: 1.25, eye: 'glow',
    features: [
      F('forbiddenSeal', 60, 54, '#e34325', '胸口压着一枚禁咒封印', 0, 1),
      F('tutorStaff', 30, 24, '#c9a34f', '长杖顶着一圈奥盾环', 6, 1.2),
      F('arcaneAuras', 60, 66, '#8fc3e8', '周身套着三层奥术场', 0, 1.3),
      F('whiteStreak', 60, 26, '#e9e4d4', '白眉白须长过腰', 0, 1),
      F('gradingHand', 86, 60, '#5c5488', '左手不停批改虚空', 0, 0.9),
      F('stoneSleeve', 60, 84, '#363054', '袖口垂着一串法印石', 0, 1),
      F('gazeGrade', 60, 32, '#8fc3e8', '目光像在给对手打分', 0, 0.8),
    ],
  },
  'bell-tower-of-spells': {
    kind: 'gate', hue: '#4c4470', hue2: '#2c2848', glow: '#8fc3e8', size: 1.3, eye: 'glow',
    features: [
      F('spireTower', 60, 46, '#5c5488', '本体是尖顶咒文钟塔', 0, 1.25, '#363054'),
      F('greatBell', 60, 30, '#c9a34f', '塔心悬着一口失控大钟', 0, 1),
      F('chantRings', 60, 20, '#8fc3e8', '塔尖荡出一圈圈咒环', 0, 1.15),
      F('brokenScript', 60, 64, '#e34325', '塔身符刻崩解成一缕缕', 0, 1.1),
      F('suckMouth', 60, 80, '#2c2848', '底层黑洞洞地汲取魔力', 0, 1),
      F('foundationRunes', 60, 96, '#8fc3e8', '基座符文忽明忽暗', 0, 1.1),
    ],
  },

  /* ══ 科技之城 ══ */
  'neon-enforcer': {
    kind: 'construct', hue: '#2c3440', hue2: '#181c24', glow: '#4fd8c2', size: 1.05, eye: 'red',
    features: [
      F('energyShield', 60, 58, '#4fd8c2', '身前立着一道能量盾弧', 0, 1.1),
      F('taserRod', 30, 44, '#e8f4ff', '右臂伸出带电电棍', 8, 1),
      F('visorScan', 60, 28, '#4fd8c2', '面甲扫线亮着扫描纹', 0, 0.9),
      F('plateVents', 60, 68, '#3a4450', '胸甲一排散热鳍片', 0, 1),
      F('neonStripe', 60, 50, '#ff4fd8', '肩线一道品红警灯', 0, 1),
      F('hoverSkids', 60, 94, '#181c24', '足底磁悬浮喷着蓝光', 0, 1),
    ],
  },
  'drone-swarm': {
    kind: 'swarm', hue: '#2c3440', hue2: '#181c24', glow: '#4fd8c2', size: 1.05, eye: 'red',
    features: [
      F('droneRing', 60, 50, '#2c3440', '九台浮游机列成三角阵', 0, 1.2, '#181c24'),
      F('laserCross', 60, 46, '#ff4fd8', '机间激光交叉成网', 0, 1.1),
      F('propBlur', 44, 36, '#8a92a8', '桨叶搅成一圈残影', 0, 0.9),
      F('jamSignal', 74, 66, '#4fd8c2', '中央机不断甩出干扰波', 0, 0.9),
      F('formationLights', 60, 76, '#e8f4ff', '队尾一串编队灯', 0, 1),
      F('scanBeam', 60, 88, '#4fd8c2', '地上一片扇形扫描光', 0, 1),
    ],
  },
  'circuit-leech': {
    kind: 'serpent', hue: '#3a4450', hue2: '#222830', glow: '#ff4fd8', size: 1, eye: 'red',
    features: [
      F('wireSkin', 60, 56, '#4a5460', '皮肉下全是裸露线路', 0, 1.1, '#3a4450'),
      F('siphonMouth', 32, 64, '#ff4fd8', '吸口正对着电缆放电', 0, 0.9),
      F('overloadBolt', 74, 40, '#e8f4ff', '脊背窜着过载电火花', 0, 1),
      F('chipScales', 70, 60, '#8a92a8', '鳞片是一块块小芯片', 0, 1),
      F('sparkTrail', 88, 78, '#4fd8c2', '尾巴扫过处拉出电弧', 0, 1),
      F('humVibe', 60, 48, '#ff4fd8', '全身嗡嗡地震动', 0, 1.1),
    ],
  },
  'chrome-brute': {
    kind: 'brute', hue: '#8a92a8', hue2: '#5c6474', glow: '#4fd8c2', size: 1.25, eye: 'red',
    features: [
      F('hydraulicFist', 30, 62, '#cfd3dc', '右拳是外露液压杆的巨拳', 0, 1.1),
      F('steamVents', 60, 36, '#e8f4ff', '颈侧两排蒸汽喷口', 0, 0.9),
      F('pressureGauge', 60, 58, '#ff4fd8', '胸前一具爆表的压力计', 0, 0.9),
      F('plateScore', 74, 50, '#5c6474', '装甲上全是拳印凹痕', 0, 1),
      F('chromeGlare', 60, 26, '#e8f4ff', '镀铬面颊反着白光', 0, 1),
      F('oilDrip', 84, 88, '#222830', '膝弯滴着黑油', 0, 0.8),
    ],
  },
  'firewall-sentinel': {
    kind: 'statue', hue: '#2c3440', hue2: '#181c24', glow: '#ff4fd8', size: 1.2, eye: 'red',
    features: [
      F('wallAegis', 60, 60, '#ff4fd8', '身前一面品红防火墙', 0, 1.15, '#4fd8c2'),
      F('ionBeam', 30, 40, '#e8f4ff', '右臂充能着一管离子束', 10, 1),
      F('deconCannon', 60, 30, '#4fd8c2', '顶炮刻着解构纹', 0, 0.9),
      F('circuitFace', 60, 26, '#ff4fd8', '面甲是一张发光回路图', 0, 0.9),
      F('guardPost', 60, 94, '#181c24', '基座是四角警卫桩', 0, 1.1),
      F('dataMotes', 60, 18, '#e8f4ff', '头顶飘着校验数据点', 0, 1),
    ],
  },
  'zero-shaft-core': {
    kind: 'construct', hue: '#3a4450', hue2: '#222830', glow: '#4fd8c2', size: 1.3, eye: 'glow',
    features: [
      F('shaftShaft', 60, 46, '#4a5460', '本体是一口竖起的升空井', 0, 1.25, '#2c3440'),
      F('magSeal', 60, 30, '#4fd8c2', '井口锁着一圈磁封环', 0, 1),
      F('thrustCore', 60, 66, '#ff6a45', '井腹喷着橘色推进焰', 0, 1),
      F('droneBay', 34, 54, '#8a92a8', '井壁开着六扇无人机舱', 0, 1),
      F('boostDials', 86, 44, '#ff4fd8', '侧壁一排增压表全红', 0, 0.9),
      F('meltWire', 84, 84, '#ff6a45', '底部熔线冒着火花', 0, 0.9),
      F('pressurizeHalo', 60, 20, '#e8f4ff', '井顶一圈增压光环', 0, 1.1),
    ],
  },
};
