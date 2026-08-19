// 怪物外形视觉规格 · 后半（第三幕之后 + 旧日余响）
import { F, type MonsterVisualSpec } from './monsterVisualTypes';

export const VISUALS_B: Record<string, MonsterVisualSpec> = {
  /* ══ 天空岛 ══ */
  'cloud-whale-calf': {
    kind: 'whale', hue: '#e9e4d4', hue2: '#c0c8d8', glow: '#8fc3e8', size: 1.1, eye: 'glow',
    features: [
      F('puffBody', 60, 60, '#f2eee0', '一身蓬松得像积云', 0, 1.15, '#c0c8d8'),
      F('bubbleSack', 44, 74, '#8fc3e8', '腹部吊着一只鼓胀气囊', 0, 0.9),
      F('flukeTail', 90, 70, '#e9e4d4', '尾鳍拍起来一阵小风', 14),
      F('mistBlow', 32, 50, '#c0c8d8', '喷出的不是水是一团雾', 0, 0.9),
      F('dimpleCheek', 40, 60, '#e8f4ff', '腮上三个浅浅的凹点', 0, 0.7),
      F('floatHalo', 60, 24, '#8fc3e8', '头顶飘着几缕碎云', 0, 1),
    ],
  },
  'gale-harrier': {
    kind: 'bird', hue: '#c0c8d8', hue2: '#8a92a8', glow: '#8fc3e8', size: 0.9, eye: 'red',
    features: [
      F('diveWings', 60, 40, '#dfe9ee', '双翼折成俯冲刀形', 0, 1.1, '#8a92a8'),
      F('windRake', 60, 78, '#e8f4ff', '尾后拖着一道撕风纹', 0, 1.1),
      F('circleTrail', 60, 26, '#8fc3e8', '盘旋时画出一圈风环', 0, 1),
      F('hookBeak', 34, 48, '#e2ae4f', '喙尖弯成钩刃', 0, 0.9),
      F('streamFeather', 74, 34, '#c0c8d8', '翎羽全部顺向后梳', 0, 1),
      F('fastShadow', 60, 94, '#8a92a8', '影子总比身子先到', 0, 1),
    ],
  },
  'skystone-sentry': {
    kind: 'statue', hue: '#8a92a8', hue2: '#5c6474', glow: '#8fc3e8', size: 1.05, eye: 'glow',
    features: [
      F('floatPebbles', 60, 18, '#8a92a8', '头顶浮着三颗失重的碎石', 0, 1),
      F('shellStone', 60, 60, '#8a92a8', '身披一块反重力的浮石壳', 0, 1.1, '#5c6474'),
      F('slamArm', 30, 56, '#a8b0c0', '单臂举着一块待砸的石锤', 0, 1),
      F('weightlessHem', 60, 92, '#5c6474', '袍角向上飘着', 0, 1),
      F('levitateEye', 60, 30, '#8fc3e8', '眼珠悬出眼眶一圈', 0, 0.8),
      F('dustUp', 60, 98, '#a8b0c0', '脚下尘埃往上飘', 0, 1),
    ],
  },
  'white-wing-warden': {
    kind: 'knight', hue: '#e9e4d4', hue2: '#c0c8d8', glow: '#8fc3e8', size: 1, eye: 'slit',
    features: [
      F('lockOnEye', 60, 28, '#ff6a45', '目镜里跳着一个锁定框', 0, 0.8),
      F('spearStand', 30, 20, '#f2eee0', '肩后插着白蜡长矛', 10, 1.2),
      F('featherShield', 88, 60, '#e9e4d4', '盾面覆满整排羽片', 0, 1, '#c0c8d8'),
      F('wingPauldron', 60, 44, '#f2eee0', '双肩羽甲支棱如翼', 0, 1),
      F('gustSash', 60, 76, '#8fc3e8', '腰带上飘着一圈风纹绶', 0, 1),
      F('windBoots', 60, 94, '#c0c8d8', '靴底刻着防滑风纹', 0, 0.9),
    ],
  },
  'storm-shepherd': {
    kind: 'humanoid', hue: '#5c6a8a', hue2: '#363c54', glow: '#e2ae4f', size: 1.1, eye: 'glow',
    features: [
      F('thunderWhip', 30, 30, '#e2ae4f', '手中雷鞭噼啪作响', 12, 1.2),
      F('shepherdCape', 60, 64, '#4a5678', '牧者大氅边缘滚着云纹', 0, 1.15, '#363c54'),
      F('gatherRing', 60, 20, '#8fc3e8', '头顶聚着一圈风暴环', 0, 1.1),
      F('staffCrook', 86, 34, '#8a7350', '左手拄着牧羊曲杖', 0, 1.1),
      F('cloudSleeve', 34, 66, '#8a92a8', '袖口化着两朵小云', 0, 0.9),
      F('windWall', 60, 88, '#8fc3e8', '身前横着一道弧形风墙', 0, 1.1),
    ],
  },
  'sky-lock-bridge': {
    kind: 'gate', hue: '#8a92a8', hue2: '#5c6474', glow: '#8fc3e8', size: 1.3, eye: 'red',
    features: [
      F('suspensionChain', 60, 20, '#5c6474', '两肩垂着两股锁天链', 0, 1.2),
      F('giantAnchor', 30, 50, '#8a8f9c', '右手提着一座船锚', 0, 1.1),
      F('bridgeDeck', 60, 76, '#a8b0c0', '本体是一截悬空的石桥', 0, 1.2, '#5c6474'),
      F('breakLink', 84, 34, '#e8f4ff', '链尾断口迸出失重光', 0, 0.9),
      F('lockGates', 60, 60, '#5c6474', '桥面四角立着锁门桩', 0, 1),
      F('freefallMist', 60, 98, '#c0c8d8', '桥下坠着一缕缕云屑', 0, 1.1),
    ],
  },

  /* ══ 贵族城堡 ══ */
  'silver-guard': {
    kind: 'knight', hue: '#c0c8d8', hue2: '#8a92a8', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('silverAegis', 88, 58, '#e9e4d4', '左盾银得能照见人', 0, 1, '#8a92a8'),
      F('swordLine', 30, 32, '#f2eee0', '长剑永远贴着银面甲', 8, 1.1),
      F('pierceScar', 60, 60, '#8a92a8', '胸甲一排刺甲凹点', 0, 1),
      F('silverPlume', 60, 14, '#e9e4d4', '羽冠是纯银丝编的', 0, 0.9),
      F('stepShadow', 60, 94, '#5c6474', '踏步声整齐得像列队', 0, 1),
      F('crestEagle', 60, 48, '#f0cd7d', '盾心一只展翅银鹰', 0, 0.8),
    ],
  },
  'feast-hound': {
    kind: 'wolf', hue: '#8a6a4c', hue2: '#5c422c', glow: '#f0cd7d', size: 1, eye: 'red',
    features: [
      F('goldCollar', 44, 56, '#e2ae4f', '颈上扣着宴金项圈', 0, 1),
      F('feastRing', 60, 92, '#e9e4d4', '爪边甩着半只宴骨', 0, 0.9),
      F('polishedCoat', 60, 52, '#a8845c', '皮毛油亮得像上过蜡', 0, 1),
      F('huntRing', 60, 28, '#f0cd7d', '鼻息里绕着一圈猎味金纹', 0, 1),
      F('tongueOut', 34, 64, '#c96a4f', '舌头耷拉滴着酱汁', 0, 0.8),
      F('banquetStain', 70, 68, '#8a2c22', '肋下一片宴酒渍', 0, 0.9),
    ],
  },
  'court-poisoner': {
    kind: 'humanoid', hue: '#4c4270', hue2: '#2c2448', glow: '#8fae3c', size: 0.95, eye: 'slit',
    features: [
      F('gobletHand', 30, 56, '#c9a34f', '左指间转着一只金杯', 0, 0.9),
      F('incenseVeil', 60, 40, '#8fae3c', '面纱飘着迷香青烟', 0, 1),
      F('daggerSleeve', 86, 66, '#cfd3dc', '袖中滑出一柄细匕', 0, 0.8),
      F('pearlRow', 60, 52, '#e9e4d4', '领口一排假珍珠', 0, 0.9),
      F('smilePoison', 60, 34, '#2c2448', '笑纹里泛着药气', 0, 0.8),
      F('courtFan', 60, 74, '#5c5488', '手中团扇遮住半张脸', 0, 0.9),
    ],
  },
  'heraldic-knight': {
    kind: 'knight', hue: '#8a4c9c', hue2: '#4c2c5c', glow: '#f0cd7d', size: 1.1, eye: 'white',
    features: [
      F('heraldicShield', 88, 58, '#e9e4d4', '家徽盾上立着一只金鹿', 0, 1, '#8a4c9c'),
      F('oathSash', 60, 62, '#e2ae4f', '斜披一条誓约绶带', 0, 1),
      F('lanceLivery', 30, 24, '#cfd3dc', '骑枪缠着家纹缠带', 10, 1.15),
      F('plumeSplit', 60, 12, '#e9e4d4', '羽冠从中分开两股', 0, 0.9),
      F('swearHand', 34, 72, '#8a4c9c', '左手按胸立誓的姿态', 0, 0.9),
      F('polishedHelm', 60, 26, '#e9e4d4', '面甲擦得能反光', 0, 0.9),
    ],
  },
  'castellan': {
    kind: 'humanoid', hue: '#5c4c6e', hue2: '#362c48', glow: '#f0cd7d', size: 1.1, eye: 'slit',
    features: [
      F('ledgerArm', 86, 60, '#e9e4d4', '左臂永远架着城规账册', 0, 1),
      F('keyRing', 60, 80, '#c9a34f', '腰后挂一整串城钥匙', 0, 1),
      F('scepterSeal', 30, 40, '#c9a34f', '权杖顶是城堡印章', 0, 1),
      F('collectRing', 60, 30, '#f0cd7d', '眉下压着一圈收缴纹', 0, 0.9),
      F('starchSleeve', 34, 66, '#e9e4d4', '袖口缀满星徽扣', 0, 0.9),
      F('towerBoots', 60, 94, '#362c48', '靴跟敲出点验节奏', 0, 0.9),
    ],
  },
  'throneless-heir': {
    kind: 'gate', hue: '#6a5c8a', hue2: '#3c3454', glow: '#f0cd7d', size: 1.3, eye: 'white',
    features: [
      F('emptyThrone', 60, 50, '#8a7cac', '本体是一座悬空的王座', 0, 1.25, '#4c4270'),
      F('ghostCrown', 60, 24, '#e2ae4f', '王座上方浮着一顶无主金冠', 0, 1),
      F('familyBlade', 60, 70, '#e9e4d4', '座垫里横着一柄家传剑', 0, 1.1),
      F('betrayalCrack', 60, 60, '#e34325', '扶手裂开一道背叛的红缝', 0, 1),
      F('courtShadows', 60, 94, '#3c3454', '座下跪伏一圈黑影侍从', 0, 1.2),
      F('bloodWine', 84, 66, '#8a2c22', '扶手上凝着一滴毒酒痕', 0, 0.8),
      F('lineageGlow', 60, 40, '#f0cd7d', '座背刻着不断熄灭的血统纹', 0, 1.1),
    ],
  },

  /* ══ 城堡地下墓道 ══ */
  'crypt-ossuary': {
    kind: 'statue', hue: '#d8cbb0', hue2: '#a89878', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('femurMaul', 30, 34, '#e9e4d4', '手里抡着一根股骨锤', 14, 1.1),
      F('boneShelf', 88, 50, '#cbbfa4', '背后一排骨架当胸甲', 0, 1.1),
      F('skullLantern', 60, 18, '#f0cd7d', '头顶一盏头骨提灯', 0, 0.8),
      F('crackJoint', 60, 64, '#a89878', '指缝里嵌着碎骨屑', 0, 1),
      F('guardPosture', 60, 84, '#3a3226', '常年拄地的守门姿态', 0, 1),
      F('mothDust', 60, 94, '#8a8268', '脚边一堆骨粉飞蛾', 0, 1),
    ],
  },
  'wax-sealed-corpse': {
    kind: 'humanoid', hue: '#e8e0c8', hue2: '#b8b098', glow: '#8fae3c', size: 0.95, eye: 'none',
    features: [
      F('waxShell', 60, 58, '#f2ead4', '全身浇着一层厚蜡壳', 0, 1.1, '#d8d0b8'),
      F('waxSeal', 60, 40, '#8a2c22', '唇上盖着一枚蜡封印', 0, 0.8),
      F('dripWax', 60, 94, '#f2ead4', '肩沿蜡泪凝成钟乳', 0, 1.1),
      F('stiffArm', 30, 62, '#d8d0b8', '僵手永远保持出殡姿势', 0, 1),
      F('venomPeele', 74, 66, '#8fae3c', '蜡皮渗出一线蜡毒', 0, 0.9),
      F('crackFace', 60, 34, '#b8b098', '面蜡裂开一道细纹', 0, 0.8),
    ],
  },
  'nameless-echo': {
    kind: 'ghost', hue: '#8a8298', hue2: '#5c5468', glow: '#c9a34f', size: 0.95, eye: 'white',
    features: [
      F('blankFace', 60, 30, '#a8a0b8', '脸上被擦掉，只剩模糊', 0, 1),
      F('whisperRings', 60, 44, '#c9a34f', '唇边荡出一圈圈低语纹', 0, 1.1),
      F('erasedName', 60, 58, '#5c5468', '胸口铭牌磨成一团白', 0, 0.9),
      F('fadeHem', 60, 92, '#5c5468', '下摆化成雾状', 0, 1.1),
      F('echoTail', 86, 66, '#a8a0b8', '身后拖着两个残影', 0, 1),
      F('forgetMist', 60, 20, '#8a8298', '头顶总罩着遗忘雾', 0, 1),
    ],
  },
  'tomb-stair-guard': {
    kind: 'knight', hue: '#6a6458', hue2: '#423e34', glow: '#f0cd7d', size: 1.05, eye: 'white',
    features: [
      F('stairHalberd', 30, 20, '#8a8f9c', '长戟拄在台阶扶手上', 12, 1.2),
      F('stepPlate', 60, 60, '#7a7468', '胸甲压着阶石纹路', 0, 1),
      F('lanternDuty', 88, 56, '#f0cd7d', '肩灯照不到自己的脸', 0, 0.8),
      F('pressedMouth', 60, 38, '#423e34', '下颌压着死寂', 0, 0.8),
      F('cuffChain', 34, 70, '#6a6458', '腕上一道拘压铁链', 0, 0.9),
      F('stairShadow', 60, 94, '#423e34', '影子拉长过三级台阶', 0, 1.1),
    ],
  },
  'first-interred': {
    kind: 'humanoid', hue: '#8a7c5c', hue2: '#544a34', glow: '#e2ae4f', size: 1.1, eye: 'glow',
    features: [
      F('royalBlood', 60, 52, '#e2ae4f', '胸甲内衬着王室金血纹', 0, 0.9),
      F('burialSword', 86, 30, '#cfd3dc', '背后斜插陪葬长剑', -14, 1.15),
      F('shroudRibbon', 60, 40, '#e9e4d4', '颈上绕着出殡白绫', 0, 0.9),
      F('wakeGesture', 30, 58, '#8a7c5c', '抬手作唤醒的手势', 0, 0.9),
      F('crownTassel', 60, 16, '#e2ae4f', '王冠只剩两根穗', 0, 0.8),
      F('oldGrave', 60, 94, '#544a34', '脚下地砖刻着最早的名字', 0, 1),
    ],
  },
  'underground-king-gate': {
    kind: 'gate', hue: '#7a7468', hue2: '#48443a', glow: '#f0cd7d', size: 1.3, eye: 'red',
    features: [
      F('tombDoor', 60, 54, '#8a8478', '本体是两扇对开的墓门', 0, 1.25, '#5a5448'),
      F('sealGlyph', 60, 30, '#e2ae4f', '门楣封印刻着王名', 0, 1),
      F('doorMaul', 30, 44, '#8a8f9c', '门侧一柄巨门锤', 0, 1.1),
      F('crackStone', 84, 70, '#48443a', '右扇崩出碎石的裂口', 0, 1),
      F('boneEcho', 60, 94, '#d8cbb0', '门下渗出一股骨室回声', 0, 1.1),
      F('descendLight', 60, 84, '#f0cd7d', '门缝透出下沉的灯', 0, 0.9),
    ],
  },

  /* ══ 冥界 ══ */
  'pale-flame-wisp': {
    kind: 'ghost', hue: '#8be9d8', hue2: '#4aa89c', glow: '#8be9d8', size: 0.85, eye: 'glow',
    features: [
      F('coldFlame', 60, 34, '#8be9d8', '本体是一团冷幽幽焰', 0, 1.1, '#4aa89c'),
      F('wispTail', 60, 84, '#8be9d8', '尾焰拖成一缕青丝', 0, 1.1),
      F('scorchTouch', 44, 56, '#e9f8f4', '触过之处泛着灼痕', 0, 0.9),
      F('shadowCore', 60, 52, '#2a3a38', '焰心一点深青的核', 0, 0.8),
      F('driftHaze', 60, 20, '#bfe8e0', '头前飘着一层雾', 0, 1),
      F('flickerRing', 60, 46, '#e9f8f4', '焰身一圈明灭的光环', 0, 1),
    ],
  },
  'market-of-the-dead-broker': {
    kind: 'humanoid', hue: '#4a5460', hue2: '#2a323c', glow: '#8be9d8', size: 1, eye: 'slit',
    features: [
      F('brassScale', 30, 50, '#c9a34f', '左臂一架铜天平秤', 0, 1),
      F('tollTag', 60, 58, '#8be9d8', '胸前一枚通行费牌', 0, 0.9),
      F('ledgerSmile', 60, 34, '#2a323c', '笑容像在对账', 0, 0.8),
      F('dealFingers', 86, 68, '#5a6470', '指间捻着冥币筹码', 0, 0.8),
      F('stallHood', 60, 22, '#3a4450', '兜帽是一角摊棚布', 0, 0.9),
      F('scaleChimes', 60, 90, '#c9a34f', '脚下吊着计价铜铃', 0, 1),
    ],
  },
  'dirge-stone': {
    kind: 'statue', hue: '#5c6a68', hue2: '#36403e', glow: '#8be9d8', size: 1.1, eye: 'none',
    features: [
      F('stonyHush', 60, 60, '#6a7876', '全身风化得像块碑', 0, 1.15, '#48544f'),
      F('dirgeRings', 60, 26, '#8be9d8', '无口的头侧荡着哀歌纹', 0, 1.1),
      F('stonePalm', 30, 64, '#7a8886', '掌心摊着一道刻槽', 0, 0.9),
      F('mossMourner', 60, 44, '#4a6a54', '肩头生着吊唁的青苔', 0, 0.9),
      F('graveBase', 60, 94, '#36403e', '基座刻满无名碑文', 0, 1.1),
      F('hollowEye', 60, 30, '#222a28', '眼窝是两道空洞', 0, 0.8),
    ],
  },
  'soul-shackler': {
    kind: 'humanoid', hue: '#3c4454', hue2: '#222834', glow: '#c9a34f', size: 1, eye: 'slit',
    features: [
      F('shackleChain', 60, 70, '#8a8f9c', '十指牵着十道魂链', 0, 1.1),
      F('soulHooks', 60, 40, '#c9a34f', '肩后挂着一排锁魂钩', 0, 1),
      F('sealKnuckle', 34, 62, '#e2ae4f', '指节全是契印火漆', 0, 0.9),
      F('coldGrip', 86, 66, '#3c4454', '手背冰凉泛着青', 0, 0.9),
      F('pactScroll', 60, 84, '#e9e4d4', '腰后卷着一册契卷', 0, 0.9),
      F('chainHiss', 60, 24, '#8a8f9c', '链子自己会低声响', 0, 1),
    ],
  },
  'lord-of-cold-hearth': {
    kind: 'statue', hue: '#4a5460', hue2: '#2a323c', glow: '#8be9d8', size: 1.25, eye: 'glow',
    features: [
      F('coldFlame', 60, 20, '#8be9d8', '炉口燃着一簇寒焰', 0, 1),
      F('hearthHalo', 60, 40, '#4aa89c', '肩后一圈冷炉光晕', 0, 1.15),
      F('stepHammer', 30, 34, '#8a8f9c', '手执断阶锤', 10, 1.1),
      F('frozenEmber', 60, 58, '#e9f8f4', '胸口嵌着一颗冻住的火种', 0, 0.8),
      F('ashCrown', 60, 14, '#5a6470', '王冠是一圈冷灰', 0, 0.9),
      F('wallHush', 60, 90, '#2a323c', '足边一圈幽闭石壁', 0, 1.1),
    ],
  },
  'broken-stair-of-hades': {
    kind: 'gate', hue: '#4a5460', hue2: '#28303a', glow: '#8be9d8', size: 1.3, eye: 'red',
    features: [
      F('stairBody', 60, 54, '#5a6470', '本体是一列断裂的长阶', 0, 1.25, '#3a4450'),
      F('wispHole', 44, 40, '#8be9d8', '阶缝里点着一盏盏幽火', 0, 1),
      F('shatterStep', 74, 72, '#28303a', '三级台阶直接砸断', 0, 1),
      F('descentChain', 88, 30, '#8a8f9c', '顶端垂着下行锁链', 0, 1.1),
      F('judgeGlow', 60, 18, '#c9a34f', '断口透出裁定金纹', 0, 1),
      F('wallOfDead', 60, 96, '#28303a', '阶下横着亡者之壁', 0, 1.1),
    ],
  },

  /* ══ 幽冥渡口 ══ */
  'lethe-boatman': {
    kind: 'humanoid', hue: '#2c3440', hue2: '#181c24', glow: '#58b8c8', size: 1, eye: 'white',
    features: [
      F('longOar', 30, 26, '#5c6470', '手撑一杆齐天的长桨', 8, 1.2),
      F('blackBoat', 60, 92, '#181c24', '脚下半沉着一只黑舟', 0, 1.1),
      F('forgetMist', 60, 30, '#58b8c8', '帽檐下罩着忘川雾', 0, 1),
      F('strawBoater', 60, 16, '#3a4450', '斗笠压得低低的', 0, 0.9),
      F('waterGrip', 86, 66, '#2c3440', '指尖渗着河水', 0, 0.8),
      F('tollCoin', 60, 56, '#c9a34f', '掌心托着一枚船资钱', 0, 0.7),
    ],
  },
  'paper-lantern-shade': {
    kind: 'ghost', hue: '#e8a860', hue2: '#a86a34', glow: '#f0cd7d', size: 0.9, eye: 'glow',
    features: [
      F('lanternBody', 60, 44, '#f0b878', '头是一盏纸灯笼', 0, 1, '#e8a860'),
      F('flameFlicker', 60, 34, '#f7e3ae', '灯芯一抖一抖', 0, 0.8),
      F('shadeHem', 60, 88, '#a86a34', '影身拖成一条灯罩边', 0, 1.1),
      F('lampRod', 30, 60, '#8a7350', '手执灯杖斜斜指着', 0, 1),
      F('snuffRing', 60, 72, '#58b8c8', '身侧绕着吹熄的冷环', 0, 1),
      F('paperCrease', 60, 48, '#f7e3ae', '纸面折痕像哭痕', 0, 0.9),
    ],
  },
  'tide-chanter': {
    kind: 'statue', hue: '#3c5460', hue2: '#22323c', glow: '#58b8c8', size: 1.05, eye: 'glow',
    features: [
      F('chantMouth', 60, 34, '#58b8c8', '无唇的石口涌出潮声', 0, 1),
      F('stoneWave', 60, 66, '#4a6470', '胸前一排石雕浪纹', 0, 1.1),
      F('monolithShadow', 60, 94, '#22323c', '背后立着一座碑影', 0, 1.1),
      F('tideBeads', 60, 52, '#8be9d8', '颈间一串涨潮石珠', 0, 0.9),
      F('gullCarve', 86, 40, '#58b8c8', '肩头刻着一只翔鸥', 0, 0.8),
      F('wetBase', 60, 100, '#3c5460', '基座永远湿的', 0, 1),
    ],
  },
  'coin-drowned': {
    kind: 'humanoid', hue: '#3a4a54', hue2: '#202c34', glow: '#58b8c8', size: 0.95, eye: 'white',
    features: [
      F('rustHook', 30, 56, '#8a5a38', '右手攥着一只锈钩', 0, 1),
      F('coinHair', 60, 20, '#c9a34f', '湿发里缠满铜钱', 0, 1),
      F('murkVein', 60, 60, '#58b8c8', '皮下浮着浊水青纹', 0, 1),
      F('bubbleLips', 60, 38, '#8be9d8', '唇边一直冒气泡', 0, 0.8),
      F('dragPosture', 60, 80, '#202c34', '姿势像被人往下拽', 0, 1),
      F('drownedAlgae', 60, 94, '#3c5448', '袍角缠着水藻', 0, 1),
    ],
  },
  'ferryman-of-names': {
    kind: 'humanoid', hue: '#2a3240', hue2: '#141a24', glow: '#58b8c8', size: 1.15, eye: 'slit',
    features: [
      F('ironOar', 30, 24, '#8a8f9c', '铁桨拖出一线白浪', 8, 1.25),
      F('nameScroll', 86, 56, '#e9e4d4', '左臂卷着一册旧名录', 0, 1),
      F('fogBoat', 60, 94, '#141a24', '雾舟头尖只露一角', 0, 1.1),
      F('erasedFace', 60, 30, '#3a4450', '脸被雾擦得只剩轮廓', 0, 1),
      F('oldNameSeal', 60, 58, '#c9a34f', '胸前叠着收走的旧名印', 0, 0.9),
      F('waterWeight', 60, 84, '#58b8c8', '衣摆沉得像吸满水', 0, 1.1),
    ],
  },
  'ferrymans-gate': {
    kind: 'gate', hue: '#2c3440', hue2: '#161c26', glow: '#58b8c8', size: 1.3, eye: 'red',
    features: [
      F('curtainGate', 60, 54, '#3a4450', '本体是渡口垂帘之门', 0, 1.25, '#222834'),
      F('oarSpike', 30, 34, '#8a8f9c', '门侧插着两杆巨桨', 0, 1.15),
      F('tollScale', 86, 44, '#c9a34f', '门楣架着一架船资秤', 0, 1),
      F('letheRipple', 60, 96, '#58b8c8', '门下淌出一线忘川', 0, 1.1),
      F('lanternRow', 60, 20, '#f0cd7d', '帘顶悬着一排纸灯', 0, 1.1),
      F('crossingRush', 60, 76, '#58b8c8', '门缝涌着渡河的急流', 0, 1.1),
    ],
  },

  /* ══ 海洋 ══ */
  'bubble-eel': {
    kind: 'serpent', hue: '#3a6a8a', hue2: '#22445a', glow: '#8fc3e8', size: 1, eye: 'glow',
    features: [
      F('bubbleTrain', 60, 30, '#bfe4f4', '脊背一串透明气泡', 0, 1.1),
      F('zapMouth', 32, 62, '#e8f4ff', '张口时吐出电弧', 0, 0.9),
      F('wrapCoil', 60, 70, '#4a7a9a', '身段缠成电圈', 0, 1.1, '#22445a'),
      F('finSpike', 60, 44, '#8fc3e8', '背鳍是一排电针', 0, 1),
      F('dischargeRings', 60, 54, '#e8f4ff', '周身一圈圈放电环', 0, 1.2),
      F('deepScales', 70, 62, '#22445a', '鳞片深得发黑', 0, 1),
    ],
  },
  'whalebone-drifter': {
    kind: 'statue', hue: '#d8e0e4', hue2: '#a0aab0', glow: '#8fc3e8', size: 1.1, eye: 'white',
    features: [
      F('ribCage', 60, 58, '#e9f0f4', '肋弓撑成一座小穹顶', 0, 1.2),
      F('driftJaw', 32, 64, '#c8d4da', '半截鲸颚斜插地面', 0, 1.1),
      F('pressureCrack', 60, 46, '#a0aab0', '骨面一道深压裂纹', 0, 1),
      F('mossBone', 60, 40, '#4a6a54', '骨缝里长着深海藻', 0, 0.9),
      F('driftRope', 88, 78, '#8a7350', '尾椎系着一根断缆', 0, 1),
      F('swayBase', 60, 96, '#a0aab0', '整个身子随浪轻摆', 0, 1.1),
    ],
  },
  'reef-stalker': {
    kind: 'croc', hue: '#4c5a70', hue2: '#2c3848', glow: '#8fc3e8', size: 0.95, eye: 'red',
    features: [
      F('lockEye', 40, 50, '#ff6a45', '双目锁定成一线', 0, 0.8),
      F('reefCamouflage', 60, 44, '#5c6a80', '体色与礁石完全一致', 0, 1.1, '#4c5a70'),
      F('biteRow', 34, 66, '#e9f0f4', '颚上一排连咬小齿', 0, 1),
      F('ambushFin', 60, 34, '#8fc3e8', '背鳍薄得像一层礁膜', 0, 1),
      F('stillTail', 88, 72, '#2c3848', '尾巴静止成礁石状', 0, 1),
      F('shadowLurk', 60, 92, '#2c3848', '礁影下藏得更深', 0, 1),
    ],
  },
  'sunken-lamp-keeper': {
    kind: 'humanoid', hue: '#3c4a58', hue2: '#22303c', glow: '#f0cd7d', size: 1, eye: 'white',
    features: [
      F('deckLamp', 60, 20, '#f0cd7d', '头顶一盏不灭船灯', 0, 0.9),
      F('anchorHammer', 30, 50, '#8a8f9c', '肩扛一柄锚锤', 10, 1.1),
      F('plankShield', 88, 60, '#5c4a34', '左臂夹着一块船板', 0, 1),
      F('pressureHem', 60, 92, '#22303c', '衣摆被水压压成铅色', 0, 1),
      F('bubbleBreath', 60, 38, '#8fc3e8', '呼吸吐着一串深泡', 0, 0.9),
      F('brassValve', 60, 58, '#c9a34f', '胸前一只黄铜阀门', 0, 0.8),
    ],
  },
  'deep-current-warden': {
    kind: 'crab', hue: '#2c4458', hue2: '#182834', glow: '#8fc3e8', size: 1.25, eye: 'red',
    features: [
      F('giantClaw', 30, 60, '#3c5468', '巨螯一钳能夹断桅杆', 0, 1.2, '#2c4458'),
      F('currentWall', 60, 78, '#4a6a88', '身侧一道洋流壁', 0, 1.1),
      F('deepCrush', 60, 44, '#182834', '甲壳压出深压暗纹', 0, 1.1),
      F('wardenLamp', 60, 24, '#8fc3e8', '额前一盏深海守灯', 0, 0.8),
      F('crackScythe', 84, 64, '#8fc3e8', '螯尖磨成解构刃', 0, 0.9),
      F('pressureRing', 60, 88, '#2c4458', '足下三圈深压环', 0, 1.2),
    ],
  },
  'abyss-maelstrom-gate': {
    kind: 'gate', hue: '#1c2c3c', hue2: '#0c141c', glow: '#58b8c8', size: 1.35, eye: 'red',
    features: [
      F('vortexEye', 60, 50, '#58b8c8', '本体是旋转的漩门', 0, 1.3, '#2c4458'),
      F('gateArch', 60, 26, '#3c5468', '漩涡外缘一圈石拱门', 0, 1.2, '#1c2c3c'),
      F('currentRim', 60, 66, '#4a6a88', '涡壁卷着三层洋流', 0, 1.2),
      F('eelSuction', 44, 76, '#8fc3e8', '涡心吸进的电鳗残影', 0, 0.8),
      F('crushRing', 60, 84, '#58b8c8', '底层一圈碾碎的骨环', 0, 1.2),
      F('depthGlow', 60, 34, '#8be9d8', '门顶透出深渊冷光', 0, 1),
      F('pressureVein', 60, 58, '#0c141c', '涡纹里沉着黑压纹', 0, 1.1),
    ],
  },

  /* ══ 亚特兰蒂斯 ══ */
  'marble-sentinel': {
    kind: 'statue', hue: '#e9eef0', hue2: '#b0bcc2', glow: '#8fc3e8', size: 1, eye: 'white',
    features: [
      F('marbleShell', 60, 58, '#f2f5f6', '通体一整块白石', 0, 1.1, '#d0d8dc'),
      F('crushFist', 30, 60, '#e9eef0', '石拳砸地碎出白粉', 0, 1),
      F('shellCrack', 74, 50, '#b0bcc2', '肩线一道碎石裂纹', 0, 0.9),
      F('columnBase', 60, 94, '#c8d0d4', '足踏一截断柱基座', 0, 1),
      F('starEtch', 60, 30, '#8fc3e8', '胸甲刻着沉星纹', 0, 0.8),
      F('whiteDust', 60, 100, '#e9eef0', '每步扬起细白石粉', 0, 1),
    ],
  },
  'broken-column-shade': {
    kind: 'ghost', hue: '#c8d0d4', hue2: '#8a969c', glow: '#8fc3e8', size: 0.95, eye: 'white',
    features: [
      F('columnCore', 60, 54, '#d8e0e4', '身段是一节断柱', 0, 1.1, '#a0aab0'),
      F('fractureTop', 60, 28, '#8a969c', '柱顶斜斜折断', 0, 1),
      F('inscription', 60, 60, '#8fc3e8', '柱身碑文泛着微光', 0, 1),
      F('ancientWord', 60, 38, '#8fc3e8', '低语着没人听懂的语', 0, 0.9),
      F('polluteScript', 44, 74, '#e34325', '一段字迹被红墨污染', 0, 0.8),
      F('driftShadow', 60, 92, '#8a969c', '影子比柱子多一截', 0, 1),
    ],
  },
  'bath-house-siren': {
    kind: 'humanoid', hue: '#7aa8b8', hue2: '#4a7080', glow: '#8be9d8', size: 0.95, eye: 'glow',
    features: [
      F('waterBlade', 30, 44, '#bfe4f4', '手中凝着一道水刃', 10, 1),
      F('echoHalo', 60, 22, '#8be9d8', '歌声荡出一圈圈回响环', 0, 1.1),
      F('rippleVeil', 60, 58, '#8ac0d0', '纱袍如水波一层层', 0, 1.1, '#4a7080'),
      F('singerLips', 60, 36, '#e9e4d4', '唇型永远在长音', 0, 0.8),
      F('poolMist', 60, 94, '#8be9d8', '足边一圈浴场水雾', 0, 1.1),
      F('jadeEarring', 74, 34, '#8be9d8', '耳垂一只白玉石环', 0, 0.7),
    ],
  },
  'star-senate-scribe': {
    kind: 'humanoid', hue: '#5a6a80', hue2: '#324054', glow: '#f0cd7d', size: 0.95, eye: 'white',
    features: [
      F('starQuill', 30, 50, '#f0cd7d', '笔尖磨成一颗小星', 0, 0.9),
      F('codexArm', 86, 62, '#e9e4d4', '臂弯夹着星议典', 0, 1),
      F('voteRing', 60, 20, '#f0cd7d', '头顶环着议决光星', 0, 1.1),
      F('inkWell', 60, 60, '#324054', '胸前垂着一只墨井', 0, 0.8),
      F('gavelNod', 60, 34, '#5a6a80', '点头像在下表决', 0, 0.8),
      F('starInk', 60, 76, '#8fc3e8', '落笔处凝着星屑', 0, 0.9),
    ],
  },
  'white-stone-archon': {
    kind: 'statue', hue: '#e9eef0', hue2: '#b0bcc2', glow: '#f0cd7d', size: 1.25, eye: 'white',
    features: [
      F('archonRobes', 60, 60, '#f2f5f6', '白石塑成的执政长袍', 0, 1.15, '#c8d0d4'),
      F('scepterStar', 30, 26, '#f0cd7d', '权杖顶嵌着执政星', 6, 1.1),
      F('crackHalo', 60, 18, '#b0bcc2', '光环裂成三段', 0, 1.1),
      F('ruleEtch', 60, 52, '#8fc3e8', '胸前一整面法条刻纹', 0, 1.1),
      F('crushWall', 60, 84, '#d0d8dc', '身后立着执政壁', 0, 1.1),
      F('starDust', 60, 98, '#f0cd7d', '足下金粉如星屑', 0, 1.1),
    ],
  },
  'atlantean-court': {
    kind: 'gate', hue: '#c8d4da', hue2: '#8a9aa2', glow: '#8fc3e8', size: 1.35, eye: 'red',
    features: [
      F('courtArch', 60, 50, '#d8e2e6', '本体是王庭白石拱廊', 0, 1.3, '#a0b0b8'),
      F('drownedDome', 60, 24, '#e9eef0', '穹顶浸着半层海水', 0, 1.15, '#8fc3e8'),
      F('sentinelStatue', 88, 66, '#c8d4da', '廊柱后立着白石哨卫', 0, 0.9),
      F('floodVein', 60, 80, '#58b8c8', '地砖下涌着倒灌的水纹', 0, 1.2),
      F('gavelMotes', 60, 38, '#f0cd7d', '穹顶垂着星屑王庭锤光', 0, 1),
      F('crackAll', 60, 62, '#8a9aa2', '全线裂纹正在蔓延', 0, 1.2),
      F('silenceHush', 60, 100, '#8a9aa2', '廊下安静得不正常', 0, 1.1),
    ],
  },

  /* ══ 钟楼 ══ */
  'bell-acolyte': {
    kind: 'humanoid', hue: '#8a7350', hue2: '#5c4a30', glow: '#e2ae4f', size: 0.9, eye: 'glow',
    features: [
      F('smallBell', 60, 20, '#e2ae4f', '头顶悬着一个小铜铃', 0, 0.8),
      F('malletHand', 30, 54, '#8a7350', '手中木槌抡个不停', 0, 0.9),
      F('tollMark', 60, 58, '#e34325', '胸甲刻着一枚钟痕印', 0, 0.8),
      F('ringingRing', 60, 30, '#f0cd7d', '铃身一圈圈荡开', 0, 1.1),
      F('climbBoot', 60, 94, '#5c4a30', '靴子沾满爬塔的灰', 0, 0.9),
      F('ropeBraid', 86, 70, '#8a6f3f', '腰后缠着摇铃绳', 0, 0.9),
    ],
  },
  'echo-wraith': {
    kind: 'ghost', hue: '#9aa0b8', hue2: '#5c6280', glow: '#f0cd7d', size: 0.9, eye: 'white',
    features: [
      F('echoBody', 60, 54, '#a8aec8', '身周三重残影叠着', 0, 1.1, '#787e98'),
      F('tollShock', 60, 30, '#f0cd7d', '头顶一圈钟鸣震纹', 0, 1.1),
      F('fadeBlade', 30, 60, '#c8ccd8', '影刃挥出两拍延迟', 0, 1),
      F('wobbleHem', 60, 92, '#5c6280', '下摆跟着钟声晃', 0, 1.1),
      F('afterglow', 84, 50, '#f0cd7d', '残影里留着上一拍的光', 0, 0.8),
      F('hollowBell', 60, 44, '#2c3248', '胸腔像一口空心钟', 0, 0.9),
    ],
  },
  'pendulum-blade': {
    kind: 'construct', hue: '#8a6f3f', hue2: '#5c4a28', glow: '#e2ae4f', size: 1, eye: 'none',
    features: [
      F('pendulumDisc', 60, 70, '#c9a34f', '主体是一面钟摆重锤', 0, 1.2, '#8a6f3f'),
      F('swingArc', 60, 40, '#f0cd7d', '摆动拉出一道金弧', 0, 1.2),
      F('bladeEdge', 60, 92, '#cfd3dc', '摆底锻着一圈刃口', 0, 1),
      F('anchorChain', 60, 24, '#6f6a5c', '顶端系在一条长链上', 0, 1.1),
      F('crackBell', 88, 44, '#8a6f3f', '身后裂开一口碎钟', 0, 0.9),
      F('tickWeight', 60, 60, '#e2ae4f', '摆内嵌着走时砣轮', 0, 0.8),
    ],
  },
  'bell-warden': {
    kind: 'knight', hue: '#7a5c34', hue2: '#4a3820', glow: '#e2ae4f', size: 1.1, eye: 'red',
    features: [
      F('tollHammer', 30, 30, '#c9a34f', '手执一柄落钟槌', 10, 1.1),
      F('chimeHalo', 60, 16, '#e2ae4f', '盔顶悬着一圈齐鸣铃', 0, 1),
      F('bronzePlate', 60, 58, '#8a6f3f', '胸甲是青铜钟皮', 0, 1.1),
      F('wraithCaller', 86, 56, '#9aa0b8', '肩后浮着一缕回音影', 0, 0.9),
      F('ropeGrip', 34, 68, '#6f6a5c', '指间勒着摇钟绳痕', 0, 0.8),
      F('dutyStep', 60, 94, '#4a3820', '步伐踩着钟声拍子', 0, 1),
    ],
  },
  'silent-king': {
    kind: 'statue', hue: '#5c4a34', hue2: '#322818', glow: '#e2ae4f', size: 1.3, eye: 'white',
    features: [
      F('muteCrown', 60, 14, '#c9a34f', '王冠的铃铛全被拆掉', 0, 1),
      F('crackedBell', 60, 34, '#8a6f3f', '头侧垂着半口碎钟', 0, 1),
      F('kingMallet', 30, 40, '#c9a34f', '手执王之钟槌不落', 0, 1.1),
      F('silenceHalo', 60, 24, '#f0cd7d', '头顶一圈不响的钟纹', 0, 1.1),
      F('bronzeWall', 60, 70, '#5c4a34', '身后一壁青铜钟皮', 0, 1.2, '#322818'),
      F('deathMark', 60, 56, '#e34325', '胸前一枚死亡钟痕', 0, 0.9),
      F('hushSteps', 60, 96, '#322818', '脚步声比钟慢半拍', 0, 1.1),
    ],
  },

  /* ══ 霓虹院 ══ */
  'data-bailiff': {
    kind: 'construct', hue: '#2a2438', hue2: '#161224', glow: '#ff4fd8', size: 1, eye: 'red',
    features: [
      F('dataShield', 60, 56, '#4fd8c2', '身前一道数据盾流', 0, 1.1),
      F('shockRod', 30, 48, '#ff4fd8', '执法棒噼啪放电', 8, 1),
      F('seizureLed', 60, 68, '#ff4fd8', '胸前一排扣押指示灯', 0, 1),
      F('codeVisor', 60, 28, '#4fd8c2', '目镜滚过判决书代码', 0, 0.9),
      F('neonStripe', 60, 46, '#ff4fd8', '肩线霓虹警灯常亮', 0, 1),
      F('hoverBase', 60, 94, '#161224', '底座悬浮着执行光', 0, 1),
    ],
  },
  'memory-leech': {
    kind: 'serpent', hue: '#3a3050', hue2: '#201830', glow: '#ff4fd8', size: 1, eye: 'red',
    features: [
      F('memorySiphon', 32, 60, '#ff4fd8', '吸口正抽出记忆光带', 0, 1),
      F('violetSkin', 60, 56, '#4a3e64', '紫黑皮下滑着数据纹', 0, 1.1, '#3a3050'),
      F('glitchHalo', 60, 30, '#4fd8c2', '头顶一圈干扰彩边', 0, 1),
      F('chipScales', 70, 62, '#8a7fb0', '鳞片是记忆芯片', 0, 1),
      F('overloadHum', 60, 72, '#ff4fd8', '全身过载嗡鸣', 0, 1.1),
      F('drainTrail', 88, 80, '#4fd8c2', '尾后拖着被抽空的灰带', 0, 1),
    ],
  },
  'verdict-drone': {
    kind: 'construct', hue: '#2a2438', hue2: '#161224', glow: '#ff4fd8', size: 0.95, eye: 'red',
    features: [
      F('verdictBeam', 30, 60, '#ff4fd8', '前炮射出定罪射线', 0, 1),
      F('markReticle', 60, 30, '#ff4fd8', '目镜画着罪证框', 0, 0.9),
      F('hoverRing', 60, 84, '#4fd8c2', '悬停环一圈执行光', 0, 1.1),
      F('gripAntenna', 60, 16, '#8a7fb0', '天线顶着判决徽章', 0, 0.8),
      F('caseFiles', 86, 54, '#e9e4d4', '侧舱弹出一叠案卷', 0, 0.8),
      F('dualSweep', 60, 46, '#ff4fd8', '双头扫射来回摆', 0, 1),
    ],
  },
  'neon-executioner': {
    kind: 'brute', hue: '#221c30', hue2: '#100c1a', glow: '#ff4fd8', size: 1.25, eye: 'red',
    features: [
      F('ionLance', 30, 30, '#e8f4ff', '离子断头镰高举过顶', 12, 1.2),
      F('overclockCore', 60, 54, '#ff4fd8', '胸腔超频核心发红', 0, 1),
      F('deconCuffs', 34, 70, '#4fd8c2', '腕部两道解构电箍', 0, 0.9),
      F('neonMantle', 60, 66, '#3a2c54', '黑氅边缘滚着霓虹', 0, 1.2, '#221c30'),
      F('execMask', 60, 28, '#ff4fd8', '面罩一条品红扫描线', 0, 0.9),
      F('strikePlatform', 60, 94, '#100c1a', '足下悬着行刑台架', 0, 1.1),
    ],
  },
  'neon-arbiter': {
    kind: 'gate', hue: '#1c1628', hue2: '#0c0814', glow: '#ff4fd8', size: 1.3, eye: 'red',
    features: [
      F('judgePlinth', 60, 60, '#2a2438', '本体是悬空裁决庭座', 0, 1.25, '#1c1628'),
      F('arcVerdict', 60, 34, '#ff4fd8', '座顶悬着一道判词电弧', 0, 1.1),
      F('droneBay', 86, 46, '#4fd8c2', '座侧舱门开着浮游炮', 0, 1),
      F('sealChamber', 60, 76, '#4fd8c2', '座腹一室封存证据', 0, 1),
      F('chainTrial', 30, 44, '#ff4fd8', '庭柱吊着连锁审判链', 0, 1.1),
      F('neonFloor', 60, 98, '#ff4fd8', '庭前地面霓虹判决纹', 0, 1.2),
    ],
  },

  /* ══ 恶魔巢穴 ══ */
  'brood-spawn': {
    kind: 'blob', hue: '#7a2420', hue2: '#481410', glow: '#e34325', size: 0.95, eye: 'red',
    features: [
      F('hullShell', 60, 58, '#8a3028', '未裂开的卵壳脊甲', 0, 1.1, '#5c1c14'),
      F('pawClaws', 40, 86, '#481410', '三对小爪已经磨尖', 0, 0.9),
      F('crawlingGlow', 60, 44, '#e34325', '壳缝渗着增殖的红光', 0, 1),
      F('jawPeek', 34, 64, '#e9e4d4', '壳口露出一圈小牙', 0, 0.8),
      F('wriggleTrail', 86, 84, '#5c1c14', '身后一条蠕动泥痕', 0, 1),
      F('membraneWing', 74, 40, '#8a3028', '翅芽是两片血膜', 0, 0.9),
    ],
  },
  'pact-cultist': {
    kind: 'humanoid', hue: '#4a1c20', hue2: '#28100e', glow: '#e34325', size: 0.95, eye: 'red',
    features: [
      F('pactBlade', 30, 44, '#cfd3dc', '献祭刃贴着血契纹', 10, 1),
      F('bloodPact', 60, 56, '#e34325', '前臂一道灼亮的血契', 0, 1),
      F('whisperHood', 60, 26, '#28100e', '兜帽里渗出低语', 0, 0.9),
      F('offerHands', 86, 66, '#4a1c20', '双掌摊着契约血槽', 0, 0.9),
      F('sealBelt', 60, 80, '#5c1c14', '腰带压着一排契印', 0, 1),
      F('kneelScar', 60, 94, '#28100e', '膝甲磨出跪拜疤', 0, 0.9),
    ],
  },
  'gore-fiend': {
    kind: 'brute', hue: '#6a1c1c', hue2: '#3a0c0c', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('giantClaws', 30, 62, '#8a2c22', '四指巨爪磨得发白', 0, 1.1),
      F('corrodeGrip', 84, 66, '#8fae3c', '爪尖滴着腐蚀之爪毒', 0, 0.9),
      F('riptide', 60, 52, '#e34325', '肋下裂着一道撕开口', 0, 1.1),
      F('fangRow', 44, 44, '#e9e4d4', '颚上两排噬血獠', 0, 1),
      F('bloodWing', 74, 36, '#3a0c0c', '肩后一对血膜翼', 0, 1),
      F('devourStain', 60, 84, '#6a1c1c', '周身一圈干涸血环', 0, 1.1),
    ],
  },
  'nest-broodmother': {
    kind: 'crab', hue: '#5c1c14', hue2: '#32100c', glow: '#e34325', size: 1.25, eye: 'red',
    features: [
      F('broodPlate', 60, 56, '#6a241c', '腹甲是满满一排卵室', 0, 1.2, '#481410'),
      F('stingerTail', 88, 74, '#8a2c22', '尾椎一根孵化尾刺', 14, 1.1),
      F('shellClaw', 30, 58, '#6a241c', '钳口夹着未破的卵', 0, 1.1),
      F('nurseryDrip', 60, 94, '#481410', '脚下滴落孵化血水', 0, 1.1),
      F('watchEyes', 60, 32, '#e34325', '六只母性小眼全亮着', 0, 1),
      F('pupaeMotes', 60, 20, '#8a2c22', '头顶浮着几粒卵壳屑', 0, 1),
    ],
  },
  'demon-progenitor': {
    kind: 'dragon', hue: '#5c1410', hue2: '#2c0806', glow: '#e34325', size: 1.35, eye: 'red',
    features: [
      F('spawnPool', 60, 92, '#e34325', '足下一池孵化血泊', 0, 1.2),
      F('giantJaw', 34, 58, '#8a2c22', '巨颚合拢时血雾喷出', 0, 1.2),
      F('broodBack', 60, 38, '#6a1c14', '脊背一排未破的卵棘', 0, 1.2, '#3a0c0c'),
      F('corrodeBreath', 60, 70, '#8fae3c', '口角渗着腐蚀吐息', 0, 1),
      F('twinTentacle', 60, 46, '#8a2c22', '颈侧两根产卵触须', 0, 1.1),
      F('membraneWings', 60, 24, '#3a0c0c', '双翼是两片巨血膜', 0, 1.3),
      F('apocalypseHalo', 60, 12, '#e34325', '头顶一圈母体崩解环', 0, 1.2),
    ],
  },

  /* ══ 世界地垒 ══ */
  'rampart-sentinel': {
    kind: 'statue', hue: '#6a6478', hue2: '#3c3848', glow: '#f0cd7d', size: 1.05, eye: 'glow',
    features: [
      F('starStone', 60, 56, '#7a7488', '星界石浇成的重躯', 0, 1.15, '#54506a'),
      F('collapseMaul', 30, 30, '#8a8f9c', '肩扛崩落重锤', 10, 1.1),
      F('rampartPlates', 60, 70, '#54506a', '胸甲是城垒砌纹', 0, 1.1),
      F('starEtch', 60, 30, '#f0cd7d', '面甲刻着星界坐标', 0, 0.8),
      F('shatterMark', 74, 52, '#f0cd7d', '肩线一道碎垒金纹', 0, 0.9),
      F('dustStomp', 60, 94, '#3c3848', '每步震落一层垒屑', 0, 1.1),
    ],
  },
  'starfall-archer': {
    kind: 'humanoid', hue: '#4c4460', hue2: '#2c2640', glow: '#f0cd7d', size: 1, eye: 'glow',
    features: [
      F('meteorBow', 30, 36, '#c9a34f', '一张陨铁弯弓', 0, 1.1),
      F('starQuiver', 86, 48, '#f0cd7d', '背后箭壶全是星矢', 0, 1),
      F('lockOn', 60, 28, '#ff6a45', '准星锁定一圈坐标环', 0, 0.9),
      F('impactScorch', 60, 60, '#e34325', '胸前一道陨矢灼痕', 0, 0.9),
      F('windChest', 60, 44, '#5c5478', '斗篷被高空风压吹得贴背', 0, 1),
      F('kneelShot', 60, 94, '#2c2640', '常年半跪在垒墙上', 0, 0.9),
    ],
  },
  'void-templar': {
    kind: 'knight', hue: '#3c3450', hue2: '#201a30', glow: '#8fc3e8', size: 1.1, eye: 'slit',
    features: [
      F('voidMail', 60, 58, '#4a4264', '虚空甲片会往里吸光', 0, 1.1, '#2c2640'),
      F('riftSword', 30, 28, '#8fc3e8', '裂界剑刃中段空了一块', 8, 1.15),
      F('cosmicSiphon', 60, 40, '#8fc3e8', '肩口一圈宇能吸环', 0, 1),
      F('templarCross', 60, 24, '#f0cd7d', '盔顶一枚裂开的圣徽', 0, 0.9),
      F('shadowBoots', 60, 94, '#201a30', '影子比人暗三个色阶', 0, 1.1),
      F('starVein', 74, 56, '#f0cd7d', '甲缝漏出几点星屑', 0, 0.8),
    ],
  },
  'rampart-warden': {
    kind: 'brute', hue: '#54506a', hue2: '#322e44', glow: '#f0cd7d', size: 1.25, eye: 'red',
    features: [
      F('twinMauls', 60, 34, '#8a8f9c', '双锤连着一条连崩链', 0, 1.15),
      F('rampartMantle', 60, 64, '#6a6478', '大氅是一面垒墙纹', 0, 1.2, '#423e56'),
      F('trumpHorn', 86, 30, '#c9a34f', '肩后一支终末号令号角', 0, 1),
      F('pierceMarks', 60, 52, '#f0cd7d', '胸甲一排穿垒金纹', 0, 1),
      F('commandBoots', 60, 94, '#322e44', '靴跟砸出整排城痕', 0, 1.1),
      F('starHalo', 60, 14, '#f0cd7d', '头顶一圈星域号令纹', 0, 1.1),
    ],
  },
  'rampart-heart': {
    kind: 'gate', hue: '#54506a', hue2: '#302c40', glow: '#f0cd7d', size: 1.35, eye: 'glow',
    features: [
      F('fortressCore', 60, 54, '#6a6478', '本体是地垒之心巨核', 0, 1.3, '#423e56'),
      F('starWall', 60, 40, '#f0cd7d', '核表嵌满星界城壁纹', 0, 1.2),
      F('collapseSeam', 60, 70, '#302c40', '核缝正渗着崩塌灰', 0, 1.1),
      F('wardenEcho', 88, 50, '#8fc3e8', '核侧浮着哨卫的残影', 0, 0.9),
      F('skyAnchor', 60, 16, '#f0cd7d', '核顶吊着天锚星链', 0, 1.1),
      F('collapseRing', 60, 94, '#54506a', '基座三圈塌陷环', 0, 1.2),
    ],
  },

  /* ══ 荒漠（frontier） ══ */
  'sand-worm': {
    kind: 'worm', hue: '#c9a05c', hue2: '#8a6a34', glow: '#e0a43f', size: 1.1, eye: 'red',
    features: [
      F('burrowJaw', 32, 66, '#e8d8b0', '半埋沙丘的巨大蠕颚', 0, 1.2),
      F('ridgeScales', 60, 36, '#8a6a34', '背部砂岩鳞脊一排', 0, 1.2),
      F('sandFangs', 34, 72, '#fff3d9', '两排沙粒色獠牙', 0, 1),
      F('sixStubs', 60, 88, '#a8854a', '六条短足残肢', 0, 1),
      F('sandVortex', 60, 22, '#e0c084', '头顶卷着一缕沙旋', 0, 1.1),
      F('brokenTail', 90, 78, '#8a6a34', '尾端是断掉的尾椎', 12),
      F('amberEyes', 40, 56, '#ffcf5e', '眼窝里两粒琥珀色光', 0, 0.7),
    ],
  },
  'desert-raider': {
    kind: 'humanoid', hue: '#a8854a', hue2: '#6a5428', glow: '#e0a43f', size: 0.95, eye: 'red',
    features: [
      F('raiderBlade', 30, 40, '#cfd3dc', '斜拖一柄掠袭弯刀', 14, 1.05),
      F('sandVeil', 60, 30, '#c9a86c', '面纱下只露出一只眼', 0, 1),
      F('lootSaddle', 88, 70, '#8a6a34', '腰后挂着缴获的水囊', 0, 0.9),
      F('dustBoot', 60, 94, '#6a5428', '靴跟刨出一线沙痕', 0, 1),
      F('sunScar', 60, 56, '#6a5428', '胸口一道烈日灼痕', 0, 0.9),
      F('blindDust', 60, 24, '#e0c084', '挥刀时扬起一片迷沙', 0, 1),
    ],
  },
  'sandstone-golem': {
    kind: 'brute', hue: '#b08a4c', hue2: '#7a5c2c', glow: '#e0a43f', size: 1.25, eye: 'red',
    features: [
      F('rockPlates', 60, 56, '#c9a05c', '肩背大块砂岩岩甲', 0, 1.2, '#a8854a'),
      F('crusherFist', 30, 64, '#c9a05c', '右拳是半块磨圆的岩', 0, 1.1),
      F('hardenedCore', 60, 46, '#e0a43f', '胸口晶化的一枚硬化核', 0, 0.8),
      F('erosionFace', 60, 28, '#7a5c2c', '面孔被风蚀成光滑凹坑', 0, 1),
      F('sandSeam', 60, 78, '#7a5c2c', '缝里不断漏出细沙', 0, 1.1),
      F('dustTrail', 60, 96, '#a8854a', '身后拖着一线沙暴痕', 0, 1.1),
    ],
  },
  'mummified-priest': {
    kind: 'humanoid', hue: '#c9b890', hue2: '#8a7a54', glow: '#e0a43f', size: 1, eye: 'slit',
    features: [
      F('mummyWrap', 60, 60, '#e0d4b0', '全身绷带缠得只剩眼缝', 0, 1.15, '#b8a878'),
      F('scorchSigil', 60, 44, '#e34325', '绷带上烙着焚咒红纹', 0, 0.9),
      F('witheredHand', 30, 64, '#c9b890', '枯手捏着一撮干尸沙', 0, 0.9),
      F('ankhPendant', 60, 56, '#c9a34f', '绷带间露出一枚金安卡', 0, 0.8),
      F('sandBleed', 60, 94, '#a8946c', '绷带下渗出细沙', 0, 1.1),
      F('priestCrown', 60, 20, '#8a7a54', '头顶残着一圈祭司头箍', 0, 0.8),
    ],
  },
  'sand-scorpion': {
    kind: 'scorpion', hue: '#b08a4c', hue2: '#7a5c2c', glow: '#e0a43f', size: 1, eye: 'red',
    features: [
      F('venomTail', 88, 30, '#8fae3c', '翘起的毒尾尖端发绿', -18, 1.1),
      F('gripPincers', 32, 62, '#c9a05c', '一对蓄力夹钳', 0, 1),
      F('ridgeShell', 60, 54, '#a8854a', '背甲一道砂岩脊', 0, 1),
      F('burrowLegs', 60, 88, '#7a5c2c', '八条腿插进沙里', 0, 1),
      F('chargeGlow', 60, 44, '#e0a43f', '蓄力时尾基发红', 0, 0.9),
      F('sandSpray', 60, 96, '#e0c084', '出洞时喷出一道沙', 0, 1),
    ],
  },
  'sandstorm-wraith': {
    kind: 'ghost', hue: '#d8c090', hue2: '#a8905c', glow: '#e0a43f', size: 1, eye: 'red',
    features: [
      F('vortexBody', 60, 54, '#e0c898', '身段是一团卷沙涡', 0, 1.15, '#c9b078'),
      F('gritArc', 60, 40, '#e8d8b0', '涡缘拉着一道道砾风纹', 0, 1.2),
      F('erodeHem', 60, 92, '#a8905c', '下摆磨蚀成飞沙', 0, 1.1),
      F('wraithGlow', 60, 34, '#ffcf5e', '涡心两粒残魂光', 0, 0.8),
      F('armorGrind', 44, 56, '#a8905c', '身上嵌着磨穿的甲片', 0, 0.9),
      F('dustWake', 60, 100, '#c9b078', '地面拖着一线磨蚀痕', 0, 1.1),
    ],
  },
  'dune-tyrant': {
    kind: 'brute', hue: '#8a5c2c', hue2: '#5c3a14', glow: '#e0a43f', size: 1.2, eye: 'red',
    features: [
      F('twinScimitars', 60, 34, '#cfd3dc', '双手各一柄沙金弯刀', 0, 1.1),
      F('sunScorch', 60, 50, '#e34325', '肩头一片烈日灼斑', 0, 1),
      F('ragePlume', 60, 16, '#e0a43f', '头巾上插着三根沙怒翎', 0, 0.9),
      F('duneSash', 60, 74, '#a87a3c', '腰缠一条流沙纹腰巾', 0, 1),
      F('ironBite', 60, 40, '#5c3a14', '颌骨外露着铁牙', 0, 0.9),
      F('stompDust', 60, 94, '#a8854a', '每一步踩出一圈沙爆', 0, 1.1),
    ],
  },
  'sand-sovereign': {
    kind: 'statue', hue: '#c9a86c', hue2: '#8a6a34', glow: '#e0a43f', size: 1.3, eye: 'red',
    features: [
      F('sceptreHalberd', 30, 22, '#e0a43f', '手执一柄流沙沙戟', 6, 1.2),
      F('sandCrown', 60, 14, '#f0cd7d', '王冠由七粒金砂悬成', 0, 1),
      F('duneThrone', 60, 84, '#a8854a', '座下沙丘自己隆成王座', 0, 1.2),
      F('barrierWave', 60, 66, '#e0c898', '身前一道流动沙屏障', 0, 1.1),
      F('stormHalo', 60, 30, '#e0a43f', '肩后一圈沙暴降光环', 0, 1.2),
      F('sovereignMantle', 60, 56, '#8a6a34', '大氅下摆是沙丘波纹', 0, 1.15, '#c9a86c'),
      F('wraithEcho', 88, 40, '#d8c090', '身侧浮着沙暴亡灵残影', 0, 0.9),
    ],
  },

  /* ══ 陨石遗迹（frontier） ══ */
  'meteor-acolyte': {
    kind: 'humanoid', hue: '#4c4470', hue2: '#2c2648', glow: '#8fc3e8', size: 1, eye: 'glow',
    features: [
      F('chargeCore', 60, 52, '#8fc3e8', '胸口悬着一枚陨能核', 0, 0.9),
      F('starShell', 86, 60, '#5c5488', '左臂一片陨壳甲', 0, 0.9),
      F('acolyteCape', 60, 68, '#5c5488', '斗篷边缘绣着陨环', 0, 1.1, '#363054'),
      F('burstFist', 30, 62, '#e8f4ff', '右拳凝着爆发光', 0, 0.9),
      F('starStubble', 60, 24, '#f0cd7d', '光头点着七粒星斑', 0, 0.9),
      F('orbitDust', 60, 90, '#8fc3e8', '脚下绕着一圈星尘', 0, 1.1),
    ],
  },
  'void-hound': {
    kind: 'wolf', hue: '#3c3450', hue2: '#1c1630', glow: '#8fc3e8', size: 0.95, eye: 'red',
    features: [
      F('phaseRift', 60, 52, '#8fc3e8', '身侧撕开一道相位痕', 0, 1.1),
      F('blinkMuzzle', 32, 58, '#2c2640', '吻部忽隐忽现地闪烁', 0, 0.9),
      F('trackStar', 60, 26, '#f0cd7d', '额前一枚追踪星纹', 0, 0.8),
      F('darkFur', 60, 64, '#2c2640', '毛色随阴影流动', 0, 1.1, '#1c1630'),
      F('silentPaw', 60, 92, '#1c1630', '落地没有声音', 0, 1),
      F('twinShadow', 84, 84, '#3c3450', '拖着两条错位的影子', 0, 1),
    ],
  },
  'starbone-knight': {
    kind: 'knight', hue: '#5a5478', hue2: '#322e48', glow: '#f0cd7d', size: 1.1, eye: 'white',
    features: [
      F('starboneMail', 60, 58, '#6a6488', '甲片是打磨的星骸骨', 0, 1.1, '#4a4468'),
      F('absorbCore', 60, 48, '#8fc3e8', '胸核吸着陨能蓝光', 0, 0.9),
      F('starblade', 30, 28, '#f0cd7d', '星刃刃身带一弯碎星', 8, 1.1),
      F('helmetCrest', 60, 14, '#f0cd7d', '盔顶一枚星骸角', 0, 0.9),
      F('orbitalHalo', 60, 22, '#8fc3e8', '肩后一圈轨道光环', 0, 1.1),
      F('boneDust', 60, 94, '#8a82a8', '足下散落星骨屑', 0, 1),
    ],
  },
  riftweaver: {
    kind: 'humanoid', hue: '#4a3c6a', hue2: '#281e40', glow: '#8fc3e8', size: 1.05, eye: 'red',
    features: [
      F('riftHands', 60, 62, '#8fc3e8', '十指间悬着细碎裂隙', 0, 1),
      F('weaveLoom', 86, 50, '#5c5488', '肩后一架织纹梭', 0, 1),
      F('erosionVein', 60, 50, '#ff4fd8', '皮下渗着紫红宇蚀纹', 0, 1),
      F('scorchCuff', 34, 68, '#e34325', '袖口烧着能量灼痕', 0, 0.9),
      F('weaverHood', 60, 24, '#281e40', '兜帽罩着一张裂线脸', 0, 0.9),
      F('threadTrail', 60, 94, '#8fc3e8', '脚下拖着一缕裂隙线', 0, 1.1),
    ],
  },
  'cosmic-behemoth': {
    kind: 'brute', hue: '#3a3450', hue2: '#1c1830', glow: '#ff4fd8', size: 1.3, eye: 'red',
    features: [
      F('behemothMass', 60, 60, '#4a4468', '四步一沉的巨兽躯', 0, 1.25, '#2c2648'),
      F('erosionBurst', 60, 44, '#ff4fd8', '背脊炸着一片宇蚀斑', 0, 1.1),
      F('meteorShell', 84, 56, '#5c5488', '右肩一块陨石壳', 0, 1),
      F('crushStep', 60, 94, '#1c1830', '足下地面直接塌陷', 0, 1.2),
      F('starCracks', 60, 70, '#8fc3e8', '肋缝里漏出星光', 0, 1.1),
      F('hungerMaw', 34, 62, '#2c2648', '巨口吸着碎屑进喉', 0, 1),
    ],
  },
  'terminus-warden': {
    kind: 'knight', hue: '#4a4468', hue2: '#282240', glow: '#8fc3e8', size: 1.2, eye: 'slit',
    features: [
      F('gateAegis', 88, 58, '#5c5488', '巨盾是一扇终焉门', 0, 1.1, '#322e48'),
      F('terminusMaul', 30, 28, '#8a8f9c', '门锤砸出环状震纹', 10, 1.15),
      F('seamErosion', 60, 50, '#ff4fd8', '胸甲门缝渗着宇蚀', 0, 1),
      F('wardenHelm', 60, 22, '#5c5488', '头盔刻着一道门缝光', 0, 0.9),
      F('echoHound', 60, 90, '#8fc3e8', '影里伏着一条虚空犬', 0, 0.9),
      F('collapseDust', 60, 98, '#322e48', '足边一圈崩解尘', 0, 1.1),
    ],
  },
  'world-ender': {
    kind: 'dragon', hue: '#241c38', hue2: '#120c20', glow: '#ff4fd8', size: 1.4, eye: 'red',
    features: [
      F('riftEye', 60, 30, '#ff4fd8', '独目是一道竖开的星隙', 0, 1),
      F('fourPhaseHalo', 60, 14, '#8fc3e8', '头顶四重相位光环', 0, 1.3),
      F('crushFist', 30, 58, '#3a3450', '右拳凝着陨能紫焰', 0, 1.2),
      F('battleRift', 60, 52, '#ff4fd8', '胸口撕着一道战场裂隙', 0, 1.2),
      F('riftSpawn', 86, 44, '#8fc3e8', '裂隙里浮着猎犬与侍从影', 0, 1),
      F('enderTail', 60, 92, '#120c20', '尾尖垂着一截坠星', 0, 1.2),
      F('finalityWings', 60, 22, '#2c2648', '双翼是两片撕裂的夜幕', 0, 1.3),
      F('starFall', 60, 8, '#f0cd7d', '头顶一颗星正在坠落', 0, 0.9),
    ],
  },

  /* ══ 旧日余响（legacy） ══ */
  'legacy-lone-orc-scout': {
    kind: 'humanoid', hue: '#5c6a3a', hue2: '#3a4224', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('tuskPair', 60, 36, '#e9e4d4', '两枚上翘的小獠牙', 0, 0.8),
      F('shortAxe', 30, 44, '#8a8f9c', '手挥一柄短战斧', 12, 0.9),
      F('leatherCuirass', 60, 62, '#6a5a38', '胸前一块旧皮甲', 0, 1),
      F('scoutKnot', 60, 24, '#8a6f3f', '头绳上系着斥候结', 0, 0.8),
      F('grittyBoots', 60, 94, '#3a4224', '靴底磨得发白', 0, 0.9),
      F('scarKnuckle', 34, 66, '#4c5a34', '指节一道旧疤', 0, 0.7),
    ],
  },
  'legacy-patrol-orc-archer': {
    kind: 'humanoid', hue: '#4c6a4a', hue2: '#2e4230', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('bentBow', 30, 34, '#8a7350', '一张拉满的旧弓', 0, 1.1),
      F('quiverSpike', 86, 46, '#8a7350', '背后箭壶插着巡逻旗', 0, 1),
      F('tusks', 60, 36, '#e9e4d4', '一对整齐獠牙', 0, 0.8),
      F('patrolBelt', 60, 80, '#6a5a38', '腰带挂着巡哨铃', 0, 1),
      F('warPaint', 60, 30, '#8a8f5c', '面颊一道旧战纹', 0, 0.8),
      F('sneakStance', 60, 94, '#2e4230', '弓步蹲成放箭姿态', 0, 1),
    ],
  },
  'legacy-patrol-orc-scout': {
    kind: 'humanoid', hue: '#546a3c', hue2: '#324226', glow: '#8fae3c', size: 0.9, eye: 'red',
    features: [
      F('broadSword', 30, 38, '#8a8f9c', '拖着一柄宽背剑', 16, 1),
      F('scoutHood', 60, 22, '#3a4a2c', '兜帽压着两只獠牙', 0, 0.9),
      F('wornPelt', 60, 62, '#6a5a38', '披一张磨秃的兽皮', 0, 1.05, '#4c4230'),
      F('trailMarks', 60, 94, '#324226', '靴边系着留痕骨片', 0, 0.9),
      F('gapTooth', 60, 36, '#2b2115', '獠牙间缺一颗门齿', 0, 0.8),
      F('packRope', 86, 70, '#8a6f3f', '肩后一根背行囊的绳', 0, 0.9),
    ],
  },
  'legacy-orc-warrior': {
    kind: 'brute', hue: '#5c6a3a', hue2: '#364228', glow: '#8fae3c', size: 1.1, eye: 'red',
    features: [
      F('heavyAxe', 30, 30, '#8a8f9c', '单手一柄巨刃斧', 10, 1.1),
      F('shieldBoard', 88, 58, '#6a5a38', '左盾是半块门板', 0, 1, '#4c4230'),
      F('tusksBig', 60, 36, '#e9e4d4', '獠牙大得露在护嘴外', 0, 0.9),
      F('warChiefPaint', 60, 52, '#8a8f5c', '胸口一道旧战纹', 0, 1),
      F('knuckleRing', 34, 68, '#8a8f9c', '指节套着一圈铁环', 0, 0.8),
      F('battleStance', 60, 94, '#364228', '站姿是标准冲锋步', 0, 1),
    ],
  },
  'legacy-skeleton-warrior': {
    kind: 'statue', hue: '#d8cbb0', hue2: '#a89878', glow: '#c9a34f', size: 1, eye: 'glow',
    features: [
      F('ribCage', 60, 60, '#e9e4d4', '骨架只靠五根肋骨撑住', 0, 1.1),
      F('rustSword', 30, 34, '#8a5a38', '锈剑握在骨手里', 8, 1),
      F('skullGap', 60, 26, '#2b2115', '颅骨缺了一角', 0, 0.9),
      F('shieldBone', 88, 58, '#cbbfa4', '左盾是半截肋骨弯成的', 0, 1),
      F('jointRattle', 60, 84, '#a89878', '膝骨缝里嵌着碎石', 0, 0.9),
      F('boneDust', 60, 96, '#8a8268', '每步掉一层骨粉', 0, 1),
    ],
  },
  'legacy-jaw-worm': {
    kind: 'worm', hue: '#6a5a3a', hue2: '#423822', glow: '#8fae3c', size: 1, eye: 'red',
    features: [
      F('giantJaw', 32, 62, '#8a7a4c', '一对对不上的大颚', 0, 1.2, '#6a5a3a'),
      F('ringBody', 60, 52, '#7a6a44', '虫身一圈圈的环纹', 0, 1.1, '#54482c'),
      F('burrowMouth', 30, 70, '#423822', '颚后还有一道副口', 0, 0.9),
      F('grindDust', 60, 94, '#8a7a4c', '啃咬时扬出一圈土', 0, 1.1),
      F('blindPits', 44, 50, '#ffcf5e', '头顶两粒退化的眼点', 0, 0.7),
      F('guardBite', 60, 44, '#54482c', '受护时会缩成一口活盾', 0, 1),
    ],
  },
  'legacy-small-slime': {
    kind: 'blob', hue: '#8fae6a', hue2: '#5c7a44', glow: '#b8e04f', size: 0.85, eye: 'white',
    features: [
      F('gooBody', 60, 62, '#9cb878', '一颗果冻似的小史莱姆', 0, 1.05, '#7a9a5c'),
      F('dimpleEyes', 60, 54, '#e9e4d4', '两个呆滞的凹陷眼', 0, 0.8),
      F('boingSprings', 60, 90, '#5c7a44', '底部一摊弹性黏液', 0, 1),
      F('splitDrip', 44, 96, '#8fae6a', '边上分出一滴小史莱姆', 0, 0.7),
      F('glossTop', 60, 44, '#c8e09c', '头顶一片反光', 0, 0.8),
      F('slimeSplat', 84, 94, '#7a9a5c', '身后一甩一甩的黏痕', 0, 1),
    ],
  },
  'legacy-orc-shaman': {
    kind: 'hag', hue: '#4a5a34', hue2: '#2c3a20', glow: '#e2ae4f', size: 0.9, eye: 'red',
    features: [
      F('lightningRod', 30, 26, '#e2ae4f', '法杖顶着一道小闪电', 0, 1),
      F('boneBeads', 60, 48, '#d8cbb0', '颈间一串兽骨珠', 0, 0.9),
      F('shamanHair', 60, 18, '#3a4a2c', '头发里插着三根骨针', 0, 1),
      F('runeBelt', 60, 78, '#6a5a38', '腰带刻着萨满符', 0, 1),
      F('chantPosture', 60, 60, '#4a5a34', '嘴型永远在吟诵', 0, 1),
      F('sacredAsh', 60, 92, '#8a8268', '足边一圈仪式灰纹', 0, 1),
    ],
  },
  'legacy-ghost': {
    kind: 'ghost', hue: '#c8d0d8', hue2: '#8a96a0', glow: '#e8f4ff', size: 0.9, eye: 'white',
    features: [
      F('sheetHem', 60, 92, '#a8b4bc', '下摆三截破烂飘动', 0, 1.1),
      F('clingArms', 60, 62, '#d8e0e8', '两只软爪垂在身侧', 0, 1),
      F('hollowHole', 60, 34, '#5c6a74', '眼洞深得看不见底', 0, 0.8),
      F('wrapTrail', 86, 70, '#c8d0d8', '身后拖着一条缠身尾', 0, 1),
      F('coldRing', 60, 46, '#e8f4ff', '周身一圈寒气环', 0, 1.1),
      F('muffle', 60, 20, '#8a96a0', '头型闷闷的一团', 0, 1),
    ],
  },
  'legacy-orc-berserker': {
    kind: 'brute', hue: '#6a5a34', hue2: '#423822', glow: '#e34325', size: 1.15, eye: 'red',
    features: [
      F('frenzyAxe', 30, 28, '#8a8f9c', '一柄豁了口的狂斧', 14, 1.15),
      F('vulnerableWound', 60, 52, '#e34325', '肋下豁着一道易伤口', 0, 1),
      F('ripostTusks', 60, 34, '#e9e4d4', '獠牙磨成两根长刺', 0, 0.9),
      F('tornPelt', 60, 66, '#4c4230', '兽皮撕得只剩几条', 0, 1.1),
      F('roarMouth', 60, 42, '#2b2115', '永远在怒吼的口型', 0, 0.9),
      F('rageStomp', 60, 94, '#423822', '双足交替重踏', 0, 1.1),
    ],
  },
  'legacy-rat-pack-a': {
    kind: 'rat', hue: '#6a6054', hue2: '#423a32', glow: '#c9a34f', size: 0.8, eye: 'red',
    features: [
      F('bigCheeks', 40, 62, '#8a8072', '鼓鼓的两袋颊囊', 0, 0.9),
      F('longTailA', 90, 78, '#8a7a6a', '细尾甩出 A 字结', 12),
      F('gritFur', 60, 56, '#5c544a', '皮毛沾满碎屑', 0, 1),
      F('packEar', 74, 26, '#6a6054', '左耳缺了个缺口', 8),
      F('nibbleHands', 34, 70, '#8a7a6a', '前爪捧着半块干粮', 0, 0.8),
      F('packScent', 60, 94, '#423a32', '脚边一圈同群气味的泥痕', 0, 1),
    ],
  },
  'legacy-rat-pack-c': {
    kind: 'rat', hue: '#726858', hue2: '#4a4238', glow: '#c9a34f', size: 0.75, eye: 'red',
    features: [
      F('grayStripe', 60, 44, '#a89880', '背上一条灰白条纹', 0, 1),
      F('crookTailC', 90, 80, '#8a7e6c', '尾巴折成 C 字', 20),
      F('bandagedPaw', 36, 84, '#c8c0b0', '前爪缠着一圈布条', 0, 0.8),
      F('wiryCoat', 60, 60, '#645a4c', '毛色干得像麻绳', 0, 1),
      F('smallFangs', 34, 66, '#e9e4d4', '一对还没长全的小牙', 0, 0.8),
      F('packMud', 60, 96, '#4a4238', '身后一串小泥脚印', 0, 1),
    ],
  },
  'legacy-troll': {
    kind: 'brute', hue: '#5c7a5c', hue2: '#3a4c3a', glow: '#8fae3c', size: 1.25, eye: 'glow',
    features: [
      F('clubArm', 30, 40, '#8a7350', '右臂是一根活树棍', 12, 1.15),
      F('regrowScar', 60, 56, '#8fae3c', '伤口处正冒出绿芽', 0, 1),
      F('longEars', 60, 16, '#5c7a5c', '两只耳朵长到拖肩', 0, 1),
      F('thickNeck', 60, 46, '#4a6a4a', '脖子粗得看不见头', 0, 1.1),
      F('rootToes', 60, 94, '#3a4c3a', '脚趾扎地像树根', 0, 1),
      F('mossShoulder', 44, 34, '#5c7a3c', '左肩长着一片青苔', 0, 0.9),
    ],
  },
  'legacy-death-knight': {
    kind: 'knight', hue: '#3c4450', hue2: '#222830', glow: '#8fc3e8', size: 1.15, eye: 'glow',
    features: [
      F('graveSword', 30, 28, '#c8ccd8', '长剑拖着一缕冷光', 8, 1.15),
      F('helmShadow', 60, 24, '#181c24', '盔内漆黑只有两点冷光', 0, 0.9),
      F('guardRune', 88, 58, '#8fc3e8', '盾牌刻着护身死纹', 0, 1),
      F('chainTail', 60, 88, '#3c4450', '披风尾端化成一串锁链', 0, 1.1),
      F('mortemMark', 60, 48, '#8fc3e8', '胸前一枚亡者徽', 0, 0.9),
      F('silentWalk', 60, 96, '#222830', '脚步没有声音', 0, 1),
    ],
  },
  'legacy-orc-warchief': {
    kind: 'brute', hue: '#546038', hue2: '#323a22', glow: '#e2ae4f', size: 1.2, eye: 'red',
    features: [
      F('chiefAxe', 30, 26, '#c9a34f', '巨斧刃面镶着金纹', 10, 1.2),
      F('warCrest', 60, 14, '#8a6f3f', '头箍上插着三根鹰羽', 0, 0.9),
      F('tusksGold', 60, 34, '#e2ae4f', '獠牙尖端包了一层金', 0, 0.9),
      F('warBand', 60, 60, '#6a5a38', '胸前斜挎一条战带', 0, 1),
      F('commandVoice', 60, 42, '#8a8f5c', '声纹像一面小旗在动', 0, 0.9),
      F('warchiefStep', 60, 94, '#323a22', '脚步带着整队冲锋的拍子', 0, 1.1),
    ],
  },
  'legacy-ettin': {
    kind: 'brute', hue: '#6a5a48', hue2: '#423828', glow: '#8fae3c', size: 1.3, eye: 'red',
    features: [
      F('twinHeads', 60, 22, '#7a6a54', '并排两颗错开的头', 0, 1.1, '#5c5040'),
      F('twoGazes', 60, 26, '#ff6a45', '两双互不一致的眼睛', 0, 1),
      F('sharedAxe', 30, 34, '#8a8f9c', '共用一柄过头巨斧', 8, 1.2),
      F('wideShoulders', 60, 52, '#6a5a48', '肩宽到挡住整条路', 0, 1.2, '#423828'),
      F('staggerWalk', 60, 94, '#423828', '两腿步调永远不同', 0, 1.1),
      F('oneShield', 88, 58, '#5c5040', '只有一侧扛着盾', 0, 1, '#3a3224'),
    ],
  },
  'legacy-ghost-cultist': {
    kind: 'ghost', hue: '#8a98a8', hue2: '#5c6a78', glow: '#8fc3e8', size: 0.9, eye: 'white',
    features: [
      F('cultRobe', 60, 64, '#a8b4c0', '幽灵身披一袭教袍', 0, 1.1, '#788898'),
      F('hollowChalice', 30, 56, '#8fc3e8', '手中捧着一只空圣杯', 0, 0.9),
      F('fadedHood', 60, 24, '#5c6a78', '兜帽淡得只剩轮廓', 0, 0.9),
      F('chantFaint', 60, 40, '#c8d0d8', '唇边飘出半句咒音', 0, 0.9),
      F('paleKnees', 60, 92, '#8a98a8', '双膝处最淡的一抹', 0, 0.9),
      F('weakAura', 60, 52, '#8fc3e8', '周身一圈虚弱光环', 0, 1.1),
    ],
  },
  'legacy-hag': {
    kind: 'hag', hue: '#7a7060', hue2: '#4c463c', glow: '#e2ae4f', size: 0.95, eye: 'red',
    features: [
      F('gnarledStaff', 30, 34, '#8a7350', '一根疙疙瘩瘩的老杖', 8, 1.1),
      F('bushyBrows', 60, 24, '#a89880', '眉毛浓到遮住半张脸', 0, 1),
      F('crookBack', 60, 56, '#6a6050', '脊背弯成一个问号', 0, 1.1, '#4c463c'),
      F('pocketHerbs', 86, 72, '#5c7a3c', '口袋鼓着一撮草药', 0, 0.9),
      F('cackleLines', 60, 38, '#4c463c', '笑纹堆出七层', 0, 0.9),
      F('shoeScuffs', 60, 94, '#3a342c', '木鞋后跟磨得发亮', 0, 0.9),
    ],
  },
  'legacy-wraith': {
    kind: 'ghost', hue: '#5c6878', hue2: '#343c48', glow: '#c8d0d8', size: 0.9, eye: 'white',
    features: [
      F('wrathHalo', 60, 20, '#c8d0d8', '头顶一圈怨气环', 0, 1.1),
      F('reachHands', 60, 64, '#8a98a8', '四只手朝外伸着', 0, 1.1),
      F('screamMouth', 60, 38, '#222830', '口型是拉长的哀号', 0, 0.9),
      F('tatterWing', 84, 52, '#4a5868', '肩后一缕破帔影', 0, 1),
      F('coldWake', 60, 94, '#5c6878', '过处寒气凝成霜痕', 0, 1.1),
      F('hollowRibs', 60, 56, '#343c48', '胸前隐约透出空肋影', 0, 1),
    ],
  },
  'legacy-ancient-dragon': {
    kind: 'dragon', hue: '#5c4a3c', hue2: '#362a20', glow: '#e34325', size: 1.3, eye: 'red',
    features: [
      F('oldWings', 60, 26, '#6a5844', '双翼破得像旧帆', 0, 1.3, '#4c3e30'),
      F('ashScale', 60, 58, '#7a6852', '鳞片磨得发白起霜', 0, 1.2, '#544434'),
      F('breathEmber', 34, 60, '#e34325', '口角渗着一线灰烬火', 0, 1),
      F('ancientClaw', 30, 78, '#8a7a60', '前爪爪尖磨成秃弧', 0, 1),
      F('weakHaze', 60, 40, '#8a8268', '眼瞳蒙着一层老雾', 0, 0.9),
      F('tailCoil', 88, 84, '#4c3e30', '长尾盘了三层半', 0, 1.2),
      F('hoardDust', 60, 98, '#8a7a60', '身下压着一片旧金粉', 0, 1.1),
    ],
  },
  'legacy-slime-king': {
    kind: 'blob', hue: '#7a9a5c', hue2: '#4c6a38', glow: '#b8e04f', size: 1.25, eye: 'white',
    features: [
      F('crownGoo', 60, 22, '#e2ae4f', '头顶一顶浇成史莱姆的王冠', 0, 1),
      F('kingBulk', 60, 60, '#8aab68', '圆滚的体量压过整屏', 0, 1.3, '#6a8a4c'),
      F('eightPress', 60, 94, '#4c6a38', '底部八道轮转的碾压印', 0, 1.2),
      F('royalGloss', 60, 44, '#c8e09c', '全身反着贵族般的光', 0, 1.1),
      F('courtDrips', 60, 84, '#7a9a5c', '边缘垂着十二滴慢速王浆', 0, 1.1),
      F('scepterStub', 30, 70, '#8a7350', '体内卡着一截旧权杖柄', 0, 0.9),
    ],
  },
};