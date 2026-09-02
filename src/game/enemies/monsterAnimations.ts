// 怪物动画数据模块 · 基于身体原型(kind)的模板化动画剪辑
// 每个 BodyKind 提供 7 个动画: hit, attack1, block, skill1, skill2, idle, blockReact

import type { AnimationClip, MonsterVisualSpec, BodyKind } from './monsterVisualTypes';

// ─── 通用命中后退动画（所有类型共享基础模板） ───

const hitBase = (recoilX: number, headTilt: number, duration = 400): AnimationClip => ({
  name: 'hit',
  duration,
  keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [
      { jointId: 'root', rotation: -5, translateX: recoilX },
      { jointId: 'head', rotation: headTilt },
    ], easing: 'ease-out' },
    { time: 1, joints: [] },
  ],
});

// ─── 各 BodyKind 动画模板 ───

const beastAnims: AnimationClip[] = [
  hitBase(-4, -8),
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateX: -3 }, { jointId: 'legL', rotation: -8 }, { jointId: 'legR', rotation: -8 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', translateX: 5 }, { jointId: 'head', rotation: 12, translateX: 4 }, { jointId: 'armL', rotation: 10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', rotation: -4, translateY: 3 }, { jointId: 'armL', rotation: -12 }, { jointId: 'armR', rotation: -12 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'head', rotation: -10 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'head', rotation: 8, translateX: 2 }, { jointId: 'armL', rotation: 15 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -4 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: -6 }, { jointId: 'head', rotation: -12 }, { jointId: 'armL', rotation: -10 }, { jointId: 'armR', rotation: -10 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: 4 }, { jointId: 'head', rotation: 6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: slight breathing + tail wag
  { name: 'idle', duration: 2400, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -1 }, { jointId: 'legR', rotation: 3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 1 }, { jointId: 'legR', rotation: -3 }], easing: 'ease-in-out' },
  ]},
  // blockReact: body jerks back slightly but holds ground
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -2, translateY: 1 }, { jointId: 'head', rotation: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const wolfAnims: AnimationClip[] = [
  hitBase(-5, -10, 350),
  // attack1: lunging bite — head + armL thrust forward
  { name: 'attack1', duration: 550, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.15, joints: [{ jointId: 'root', translateX: -3 }, { jointId: 'legL', rotation: -10 }, { jointId: 'legR', rotation: -10 }], easing: 'ease-in' },
    { time: 0.45, joints: [{ jointId: 'root', translateX: 6 }, { jointId: 'head', rotation: 15, translateX: 5 }, { jointId: 'armL', rotation: 12, translateX: 3 }], easing: 'ease-out' },
    { time: 0.7, joints: [{ jointId: 'head', rotation: -5, translateX: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: hunker down
  { name: 'block', duration: 450, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 4, rotation: -3 }, { jointId: 'head', rotation: -6 }, { jointId: 'legL', rotation: 6 }, { jointId: 'legR', rotation: 6 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: pounce leap
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: 3, rotation: -6 }, { jointId: 'legL', rotation: -12 }, { jointId: 'legR', rotation: -12 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: -5, translateX: 4 }, { jointId: 'head', rotation: 10, translateX: 4 }, { jointId: 'armL', rotation: 14 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: howl summon
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -2 }, { jointId: 'head', rotation: -18, translateY: -3 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'head', rotation: -22, translateY: -4 }, { jointId: 'armL', rotation: -8 }, { jointId: 'armR', rotation: -8 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: slight breathing + tail wag
  { name: 'idle', duration: 2400, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -1 }, { jointId: 'legR', rotation: 3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 1 }, { jointId: 'legR', rotation: -3 }], easing: 'ease-in-out' },
  ]},
  // blockReact: body jerks back but holds ground
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -2, translateY: 1 }, { jointId: 'head', rotation: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const dragonAnims: AnimationClip[] = [
  hitBase(-4, -6, 450),
  // attack1: massive wing sweep + breath
  { name: 'attack1', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'armL', rotation: -20 }, { jointId: 'armR', rotation: 20 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'head', rotation: 12, translateX: 5 }, { jointId: 'armL', rotation: 25, translateX: -4 }, { jointId: 'armR', rotation: -25, translateX: 4 }], easing: 'ease-out' },
    { time: 0.75, joints: [{ jointId: 'head', rotation: 6, translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // attack2: tail sweep + body twist
  { name: 'attack2', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', rotation: 10 }, { jointId: 'legL', rotation: -15 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: -10 }, { jointId: 'legR', rotation: 15 }], easing: 'ease-out' },
    { time: 0.75, joints: [{ jointId: 'head', rotation: 5 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // attack3: fiery breath charge
  { name: 'attack3', duration: 900, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'head', rotation: 20 }, { jointId: 'root', translateY: -5 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -30 }, { jointId: 'armR', rotation: 30 }, { jointId: 'head', rotation: 25 }], easing: 'ease-out' },
    { time: 0.8, joints: [{ jointId: 'head', rotation: 15 }, { jointId: 'root', translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: wings fold in
  { name: 'block', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 2 }, { jointId: 'armL', rotation: -18, translateX: 3 }, { jointId: 'armR', rotation: 18, translateX: -3 }, { jointId: 'head', rotation: -8 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: breath attack — head forward channeling
  { name: 'skill1', duration: 900, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'head', rotation: -10 }, { jointId: 'root', translateY: -2 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'head', rotation: 15, translateX: 6 }, { jointId: 'armL', rotation: 14 }, { jointId: 'armR', rotation: -14 }], easing: 'ease-out' },
    { time: 0.8, joints: [{ jointId: 'head', rotation: 10, translateX: 4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: summon roar — wings wide + head up
  { name: 'skill2', duration: 900, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -4 }, { jointId: 'head', rotation: -20, translateY: -4 }, { jointId: 'armL', rotation: -30, translateX: -5 }, { jointId: 'armR', rotation: 30, translateX: 5 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'head', rotation: -24, translateY: -5 }, { jointId: 'armL', rotation: -35 }, { jointId: 'armR', rotation: 35 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: chest heave + wing micro-flutter
  { name: 'idle', duration: 2800, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -2 }, { jointId: 'armL', rotation: -2 }, { jointId: 'armR', rotation: 2 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 2 }, { jointId: 'armL', rotation: 2 }, { jointId: 'armR', rotation: -2 }], easing: 'ease-in-out' },
  ]},
  // blockReact: wings pulse forward absorbing impact
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: 6 }, { jointId: 'armR', rotation: -6 }, { jointId: 'root', translateX: -1 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -6 }, { jointId: 'armR', rotation: 6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const humanoidAnims: AnimationClip[] = [
  hitBase(-3, -6, 380),
  // attack1: weapon swing — armL/armR rotation
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -20 }, { jointId: 'root', rotation: -4 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 18, translateX: 3 }, { jointId: 'root', rotation: 6 }, { jointId: 'head', rotation: 4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: arms inward, body hunches
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.35, joints: [{ jointId: 'root', translateY: 2, rotation: -3 }, { jointId: 'armL', rotation: -14, translateX: 2 }, { jointId: 'armR', rotation: 14, translateX: -2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: staff strike/cast — arm raises and releases
  { name: 'skill1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: -25, translateY: -3 }, { jointId: 'head', rotation: -6 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'armL', rotation: 12, translateX: 3 }, { jointId: 'armR', rotation: -8 }, { jointId: 'head', rotation: 4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: channeling pose — both arms raise
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: -20, translateY: -4 }, { jointId: 'armR', rotation: 20, translateY: -4 }, { jointId: 'root', translateY: -2 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -25, translateY: -5 }, { jointId: 'armR', rotation: 25, translateY: -5 }, { jointId: 'head', rotation: -8 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: weight shift + head micro-nod
  { name: 'idle', duration: 2600, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateX: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateX: 1 }, { jointId: 'head', rotation: 1 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateX: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateX: -1 }, { jointId: 'head', rotation: -1 }], easing: 'ease-in-out' },
  ]},
  // blockReact: shield/arm absorbs with slight bend
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: 4 }, { jointId: 'root', translateX: -2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const knightAnims: AnimationClip[] = [
  hitBase(-3, -5, 400),
  // attack1: heavy weapon swing
  { name: 'attack1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -28 }, { jointId: 'armR', rotation: -10 }, { jointId: 'root', rotation: -6 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 22, translateX: 4 }, { jointId: 'armR', rotation: 8, translateX: 2 }, { jointId: 'root', rotation: 8 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: shield raise
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.3, joints: [{ jointId: 'armR', rotation: -18, translateY: -3 }, { jointId: 'root', translateY: 2, rotation: -2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: charged thrust
  { name: 'skill1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -3, rotation: -4 }, { jointId: 'armL', rotation: -22 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'root', translateX: 5, rotation: 6 }, { jointId: 'armL', rotation: 20, translateX: 5 }, { jointId: 'head', rotation: 5 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: war cry — helmet forward, arms wide
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.35, joints: [{ jointId: 'root', translateY: -2 }, { jointId: 'armL', rotation: -16, translateX: -3 }, { jointId: 'armR', rotation: 16, translateX: 3 }, { jointId: 'head', rotation: -10 }], easing: 'ease-in-out' },
    { time: 0.65, joints: [{ jointId: 'armL', rotation: -20 }, { jointId: 'armR', rotation: 20 }, { jointId: 'head', rotation: -14 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: weight shift + head micro-nod
  { name: 'idle', duration: 2600, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateX: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateX: 1 }, { jointId: 'head', rotation: 1 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateX: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateX: -1 }, { jointId: 'head', rotation: -1 }], easing: 'ease-in-out' },
  ]},
  // blockReact: shield/arm absorbs with slight bend
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: 4 }, { jointId: 'root', translateX: -2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const ratAnims: AnimationClip[] = [
  hitBase(-4, -10, 300),
  // attack1: quick nibble — rapid head rotations
  { name: 'attack1', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'linear' },
    { time: 0.15, joints: [{ jointId: 'head', rotation: 8, translateX: 3 }], easing: 'linear' },
    { time: 0.3, joints: [{ jointId: 'head', rotation: -6, translateX: 4 }], easing: 'linear' },
    { time: 0.5, joints: [{ jointId: 'head', rotation: 10, translateX: 5 }, { jointId: 'root', translateX: 3 }], easing: 'ease-out' },
    { time: 0.7, joints: [{ jointId: 'head', rotation: -4, translateX: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: curl up
  { name: 'block', duration: 400, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.35, joints: [{ jointId: 'root', translateY: 3, rotation: -6 }, { jointId: 'head', rotation: -10 }, { jointId: 'legL', rotation: 8 }, { jointId: 'legR', rotation: 8 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: plague spray — head tilt + shake
  { name: 'skill1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'head', rotation: -12 }, { jointId: 'root', translateY: -2 }], easing: 'ease-in' },
    { time: 0.4, joints: [{ jointId: 'head', rotation: 14, translateX: 3 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'head', rotation: -8, translateX: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: swarm call — body vibrates
  { name: 'skill2', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'linear' },
    { time: 0.15, joints: [{ jointId: 'root', rotation: 3, translateX: 2 }], easing: 'linear' },
    { time: 0.3, joints: [{ jointId: 'root', rotation: -3, translateX: -2 }], easing: 'linear' },
    { time: 0.45, joints: [{ jointId: 'root', rotation: 3, translateX: 2 }, { jointId: 'head', rotation: -14 }], easing: 'linear' },
    { time: 0.6, joints: [{ jointId: 'root', rotation: -2, translateX: -1 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: nervous twitch
  { name: 'idle', duration: 2000, keyframes: [
    { time: 0, joints: [{ jointId: 'head', rotation: 0 }, { jointId: 'root', translateX: 0 }], easing: 'linear' },
    { time: 0.25, joints: [{ jointId: 'head', rotation: 4 }, { jointId: 'root', translateX: 1 }], easing: 'linear' },
    { time: 0.5, joints: [{ jointId: 'head', rotation: -4 }, { jointId: 'root', translateX: 0 }], easing: 'linear' },
    { time: 0.75, joints: [{ jointId: 'head', rotation: 4 }, { jointId: 'root', translateX: -1 }], easing: 'linear' },
  ]},
  // blockReact: whole body hunkers deeper
  { name: 'blockReact', duration: 300, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: 2 }, { jointId: 'head', rotation: -6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const mothAnims: AnimationClip[] = [
  hitBase(-3, -8, 350),
  // attack1: dive — root plunges forward
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: -4 }, { jointId: 'armL', rotation: -15 }, { jointId: 'armR', rotation: 15 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 3, translateX: 4 }, { jointId: 'armL', rotation: 12 }, { jointId: 'armR', rotation: -12 }, { jointId: 'head', rotation: 10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: wings wrap
  { name: 'block', duration: 450, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'armL', rotation: 18, translateX: 3 }, { jointId: 'armR', rotation: -18, translateX: -3 }, { jointId: 'root', translateY: 2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: wing flutter dust — rapid wing oscillation
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'linear' },
    { time: 0.15, joints: [{ jointId: 'armL', rotation: -20 }, { jointId: 'armR', rotation: 20 }], easing: 'linear' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: 15 }, { jointId: 'armR', rotation: -15 }], easing: 'linear' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: -18 }, { jointId: 'armR', rotation: 18 }, { jointId: 'root', translateY: -3 }], easing: 'linear' },
    { time: 0.7, joints: [{ jointId: 'armL', rotation: 10 }, { jointId: 'armR', rotation: -10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: pheromone call — hover + pulse
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -5 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: -6 }, { jointId: 'armL', rotation: -22 }, { jointId: 'armR', rotation: 22 }, { jointId: 'head', rotation: -6 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: -4 }, { jointId: 'armL', rotation: -10 }, { jointId: 'armR', rotation: 10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: hover bob + wing oscillation
  { name: 'idle', duration: 2200, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'armL', rotation: -5 }, { jointId: 'armR', rotation: 5 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 3 }, { jointId: 'armL', rotation: 5 }, { jointId: 'armR', rotation: -5 }], easing: 'ease-in-out' },
  ]},
  // blockReact: wings fold tight then spring
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: 8 }, { jointId: 'armR', rotation: -8 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -8 }, { jointId: 'armR', rotation: 8 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const birdAnims: AnimationClip[] = [
  hitBase(-4, -8, 350),
  // attack1: dive attack
  { name: 'attack1', duration: 550, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: -5 }, { jointId: 'armL', rotation: -18 }, { jointId: 'armR', rotation: 18 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 4, translateX: 5 }, { jointId: 'head', rotation: 14, translateX: 4 }, { jointId: 'armL', rotation: 10 }, { jointId: 'armR', rotation: -10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: wings fold tight
  { name: 'block', duration: 450, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.35, joints: [{ jointId: 'armL', rotation: 20, translateX: 4 }, { jointId: 'armR', rotation: -20, translateX: -4 }, { jointId: 'root', translateY: 3, rotation: -4 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: gust blast — wings flap outward
  { name: 'skill1', duration: 650, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: -24, translateX: -4 }, { jointId: 'armR', rotation: 24, translateX: 4 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: 16 }, { jointId: 'armR', rotation: -16 }, { jointId: 'root', translateY: -3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: flock call
  { name: 'skill2', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -4 }, { jointId: 'head', rotation: -16, translateY: -3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'head', rotation: -20, translateY: -4 }, { jointId: 'armL', rotation: -18 }, { jointId: 'armR', rotation: 18 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: hover bob + wing oscillation
  { name: 'idle', duration: 2200, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'armL', rotation: -5 }, { jointId: 'armR', rotation: 5 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 3 }, { jointId: 'armL', rotation: 5 }, { jointId: 'armR', rotation: -5 }], easing: 'ease-in-out' },
  ]},
  // blockReact: wings fold tight then spring
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: 8 }, { jointId: 'armR', rotation: -8 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -8 }, { jointId: 'armR', rotation: 8 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const swarmAnims: AnimationClip[] = [
  hitBase(-3, -6, 320),
  // attack1: swarm rush — cloud surges forward
  { name: 'attack1', duration: 550, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -10 }, { jointId: 'armR', rotation: 10 }], easing: 'linear' },
    { time: 0.45, joints: [{ jointId: 'root', translateX: 5 }, { jointId: 'armL', rotation: 12, translateX: 3 }, { jointId: 'armR', rotation: -12, translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: swarm condenses
  { name: 'block', duration: 450, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'armL', rotation: 14, translateX: 3 }, { jointId: 'armR', rotation: -14, translateX: -3 }, { jointId: 'head', translateY: 2 }, { jointId: 'legL', translateY: -2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: scatter burst
  { name: 'skill1', duration: 650, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -2 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: -20, translateX: -4 }, { jointId: 'armR', rotation: 20, translateX: 4 }, { jointId: 'head', translateY: -3 }, { jointId: 'legL', translateY: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: replication pulse
  { name: 'skill2', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: -3 }], easing: 'linear' },
    { time: 0.4, joints: [{ jointId: 'armL', rotation: -16, translateX: -3 }, { jointId: 'armR', rotation: 16, translateX: 3 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -22, translateX: -5 }, { jointId: 'armR', rotation: 22, translateX: 5 }, { jointId: 'head', translateY: -4 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: hover bob + wing oscillation
  { name: 'idle', duration: 2200, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'armL', rotation: -5 }, { jointId: 'armR', rotation: 5 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 3 }, { jointId: 'armL', rotation: 5 }, { jointId: 'armR', rotation: -5 }], easing: 'ease-in-out' },
  ]},
  // blockReact: wings fold tight then spring
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: 8 }, { jointId: 'armR', rotation: -8 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -8 }, { jointId: 'armR', rotation: 8 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const serpentAnims: AnimationClip[] = [
  hitBase(-4, -8, 380),
  // attack1: coiling strike — root rotation + forward lunge
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', rotation: -10 }, { jointId: 'legL', rotation: 8 }, { jointId: 'legR', rotation: -8 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 12, translateX: 4 }, { jointId: 'head', rotation: 16, translateX: 5 }, { jointId: 'legL', rotation: -6 }, { jointId: 'legR', rotation: 6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: coil tighten
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', rotation: -8, translateY: 3 }, { jointId: 'legL', rotation: 12 }, { jointId: 'legR', rotation: -12 }, { jointId: 'head', rotation: -6 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: venom spray
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: -6 }, { jointId: 'head', rotation: -14, translateY: -2 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'head', rotation: 18, translateX: 5, translateY: 2 }, { jointId: 'root', rotation: 8 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: constrict — body wraps
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', rotation: 10 }, { jointId: 'legL', rotation: 14 }, { jointId: 'legR', rotation: -14 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: -12 }, { jointId: 'legL', rotation: -16 }, { jointId: 'legR', rotation: 16 }, { jointId: 'head', rotation: 10 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: 6 }, { jointId: 'legL', rotation: 8 }, { jointId: 'legR', rotation: -8 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: body undulation
  { name: 'idle', duration: 2600, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'legL', rotation: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 2 }, { jointId: 'legL', rotation: 3 }, { jointId: 'legR', rotation: -3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'legL', rotation: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: -2 }, { jointId: 'legL', rotation: -3 }, { jointId: 'legR', rotation: 3 }], easing: 'ease-in-out' },
  ]},
  // blockReact: coil tightens on impact
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', rotation: -4 }, { jointId: 'legL', rotation: 5 }, { jointId: 'legR', rotation: -5 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const wormAnims: AnimationClip[] = [
  hitBase(-3, -6, 350),
  // attack1: burrow strike — root drops then lunges up
  { name: 'attack1', duration: 650, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: 4 }, { jointId: 'legL', rotation: 10 }, { jointId: 'legR', rotation: -10 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: -4, translateX: 3 }, { jointId: 'head', rotation: 14, translateX: 4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: body segments tighten
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 3 }, { jointId: 'legL', rotation: 10 }, { jointId: 'legR', rotation: -10 }, { jointId: 'head', rotation: -8 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: acid spit
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', rotation: -8 }, { jointId: 'head', rotation: -12 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'head', rotation: 16, translateX: 4 }, { jointId: 'root', rotation: 6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: tremor call — body oscillates
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'linear' },
    { time: 0.2, joints: [{ jointId: 'root', rotation: 6 }, { jointId: 'legL', rotation: 8 }], easing: 'linear' },
    { time: 0.4, joints: [{ jointId: 'root', rotation: -6 }, { jointId: 'legR', rotation: -8 }], easing: 'linear' },
    { time: 0.6, joints: [{ jointId: 'root', rotation: 8 }, { jointId: 'legL', rotation: 10 }, { jointId: 'legR', rotation: -10 }], easing: 'linear' },
    { time: 1, joints: [] },
  ]},
  // idle: body undulation
  { name: 'idle', duration: 2600, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'legL', rotation: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 2 }, { jointId: 'legL', rotation: 3 }, { jointId: 'legR', rotation: -3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'legL', rotation: 0 }, { jointId: 'legR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: -2 }, { jointId: 'legL', rotation: -3 }, { jointId: 'legR', rotation: 3 }], easing: 'ease-in-out' },
  ]},
  // blockReact: coil tightens on impact
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', rotation: -4 }, { jointId: 'legL', rotation: 5 }, { jointId: 'legR', rotation: -5 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const blobAnims: AnimationClip[] = [
  hitBase(-3, -4, 380),
  // attack1: expansion slam — body expands then contracts
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -2 }, { jointId: 'armL', translateX: -3 }, { jointId: 'armR', translateX: 3 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'root', translateX: 4, translateY: 2 }, { jointId: 'armL', translateX: 3 }, { jointId: 'armR', translateX: -2 }, { jointId: 'head', translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: contraction — body pulls inward
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'armL', translateX: 3 }, { jointId: 'armR', translateX: -3 }, { jointId: 'head', translateY: 2 }, { jointId: 'legL', translateY: -2 }, { jointId: 'legR', translateY: -2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: acid pulse — expand outward
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: 2 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', translateX: -5 }, { jointId: 'armR', translateX: 5 }, { jointId: 'head', translateY: -4 }, { jointId: 'legL', translateY: 3 }, { jointId: 'legR', translateY: 3 }], easing: 'ease-out' },
    { time: 0.75, joints: [{ jointId: 'armL', translateX: -3 }, { jointId: 'armR', translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: split form — body vibrates then expands
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'linear' },
    { time: 0.15, joints: [{ jointId: 'root', translateX: 2 }], easing: 'linear' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -2 }], easing: 'linear' },
    { time: 0.5, joints: [{ jointId: 'armL', translateX: -6 }, { jointId: 'armR', translateX: 6 }, { jointId: 'head', translateY: -5 }, { jointId: 'legL', translateY: 4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: pulsing expand/contract
  { name: 'idle', duration: 2400, keyframes: [
    { time: 0, joints: [{ jointId: 'armL', translateX: 0 }, { jointId: 'armR', translateX: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'armL', translateX: -2 }, { jointId: 'armR', translateX: 2 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'armL', translateX: 0 }, { jointId: 'armR', translateX: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'armL', translateX: 2 }, { jointId: 'armR', translateX: -2 }], easing: 'ease-in-out' },
  ]},
  // blockReact: surface ripple
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.2, joints: [{ jointId: 'armL', translateX: -3 }, { jointId: 'armR', translateX: 3 }], easing: 'ease-out' },
    { time: 0.5, joints: [{ jointId: 'armL', translateX: 3 }, { jointId: 'armR', translateX: -3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const constructAnims: AnimationClip[] = [
  hitBase(-2, -4, 450),
  // attack1: heavy slam — arm raises high then crashes down
  { name: 'attack1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: -30, translateY: -4 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'armL', rotation: 18, translateY: 3, translateX: 3 }, { jointId: 'root', translateY: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: lock — minimal movement, hunkers
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 2 }, { jointId: 'armL', rotation: -10, translateX: 2 }, { jointId: 'armR', rotation: 10, translateX: -2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: energy discharge — mechanical shudder
  { name: 'skill1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: -2 }], easing: 'linear' },
    { time: 0.4, joints: [{ jointId: 'armL', rotation: -16 }, { jointId: 'armR', rotation: 16 }, { jointId: 'head', rotation: 4 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: 8 }, { jointId: 'armR', rotation: -8 }, { jointId: 'root', translateY: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: summoning grind — parts spin
  { name: 'skill2', duration: 900, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -20 }, { jointId: 'armR', rotation: 20 }], easing: 'linear' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 16 }, { jointId: 'armR', rotation: -16 }, { jointId: 'root', rotation: 4 }], easing: 'linear' },
    { time: 0.75, joints: [{ jointId: 'armL', rotation: -12 }, { jointId: 'armR', rotation: 12 }, { jointId: 'head', rotation: -6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: minimal creak
  { name: 'idle', duration: 3000, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 0.5 }, { jointId: 'head', rotation: 1 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: -0.5 }, { jointId: 'head', rotation: -1 }], easing: 'ease-in-out' },
  ]},
  // blockReact: structure shudders
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -1, rotation: -2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const statueAnims: AnimationClip[] = [
  hitBase(-2, -3, 450),
  // attack1: stone strike — stiff arm swing
  { name: 'attack1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: -24 }, { jointId: 'root', rotation: -4 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: 16, translateX: 3 }, { jointId: 'root', rotation: 6, translateX: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: petrify stance
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: 1 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: eye beam — head tilts forward with glow
  { name: 'skill1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'head', rotation: 8, translateX: 2, translateY: 2 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'head', rotation: 12, translateX: 4 }, { jointId: 'root', rotation: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: awaken — slow rise
  { name: 'skill2', duration: 900, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -2 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'root', translateY: -4 }, { jointId: 'armL', rotation: -14 }, { jointId: 'armR', rotation: 14 }, { jointId: 'head', rotation: -6 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: minimal creak
  { name: 'idle', duration: 3000, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 0.5 }, { jointId: 'head', rotation: 1 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: -0.5 }, { jointId: 'head', rotation: -1 }], easing: 'ease-in-out' },
  ]},
  // blockReact: structure shudders
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -1, rotation: -2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const gateAnims: AnimationClip[] = [
  hitBase(-2, -3, 500),
  // attack1: gate slam — whole structure lurches
  { name: 'attack1', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'armL', rotation: -12 }, { jointId: 'armR', rotation: 12 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'root', translateY: 3, translateX: 3 }, { jointId: 'armL', rotation: 10, translateX: 3 }, { jointId: 'armR', rotation: -10, translateX: -3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: seal shut
  { name: 'block', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'armL', rotation: 16, translateX: 4 }, { jointId: 'armR', rotation: -16, translateX: -4 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: energy pulse from core
  { name: 'skill1', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -2 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'armL', rotation: -18, translateX: -4 }, { jointId: 'armR', rotation: 18, translateX: 4 }, { jointId: 'head', translateY: -3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: portal open — arms spread wide
  { name: 'skill2', duration: 900, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: -10 }, { jointId: 'armR', rotation: 10 }], easing: 'ease-in' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -24, translateX: -5 }, { jointId: 'armR', rotation: 24, translateX: 5 }, { jointId: 'head', translateY: -4 }, { jointId: 'root', translateY: -2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: minimal creak
  { name: 'idle', duration: 3000, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 0.5 }, { jointId: 'head', rotation: 1 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: -0.5 }, { jointId: 'head', rotation: -1 }], easing: 'ease-in-out' },
  ]},
  // blockReact: structure shudders
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -1, rotation: -2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const ghostAnims: AnimationClip[] = [
  { name: 'hit', duration: 400, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -5, rotation: -4 }, { jointId: 'head', rotation: -6 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'root', translateX: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // attack1: phase shift strike — phase forward
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.15, joints: [{ jointId: 'root', translateX: -3 }], easing: 'ease-in' },
    { time: 0.4, joints: [{ jointId: 'root', translateX: 6 }, { jointId: 'head', translateX: 4, rotation: 6 }, { jointId: 'armL', rotation: 10 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'root', translateX: 4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: fade/phase — root moves slightly up and fades (simulated via translation)
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.35, joints: [{ jointId: 'root', translateY: -4 }, { jointId: 'armL', rotation: -8 }, { jointId: 'armR', rotation: 8 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: ethereal sweep — arms swing through
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: -18, translateX: -3 }, { jointId: 'armR', rotation: 18, translateX: 3 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 14, translateX: 4 }, { jointId: 'armR', rotation: -14, translateX: -4 }, { jointId: 'root', translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: soul drain channel — hover and pulse
  { name: 'skill2', duration: 850, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -5 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: -6 }, { jointId: 'armL', rotation: -15, translateX: -3 }, { jointId: 'armR', rotation: 15, translateX: 3 }, { jointId: 'head', rotation: -8 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: ethereal float
  { name: 'idle', duration: 2800, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'head', rotation: 2 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 3 }, { jointId: 'head', rotation: -2 }], easing: 'ease-in-out' },
  ]},
  // blockReact: flickers/phases
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.2, joints: [{ jointId: 'root', translateX: -3, translateY: -2 }], easing: 'ease-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateX: 2, translateY: 1 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const bruteAnims: AnimationClip[] = [
  hitBase(-3, -5, 450),
  // attack1: massive overhead smash — armL/armR large rotation
  { name: 'attack1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: -35, translateY: -5 }, { jointId: 'armR', rotation: -30, translateY: -5 }, { jointId: 'root', translateY: -2 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'armL', rotation: 22, translateY: 4 }, { jointId: 'armR', rotation: 18, translateY: 4 }, { jointId: 'root', translateY: 3, translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: arms cross guard
  { name: 'block', duration: 550, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.35, joints: [{ jointId: 'armL', rotation: 14, translateX: 4 }, { jointId: 'armR', rotation: -14, translateX: -4 }, { jointId: 'root', translateY: 2, rotation: -3 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: ground pound — both arms slam down
  { name: 'skill1', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -28, translateY: -4 }, { jointId: 'armR', rotation: -28, translateY: -4 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 20, translateY: 5 }, { jointId: 'armR', rotation: 20, translateY: 5 }, { jointId: 'root', translateY: 4 }], easing: 'ease-out' },
    { time: 0.7, joints: [{ jointId: 'root', translateY: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: rage roar — head back, arms wide
  { name: 'skill2', duration: 850, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'head', rotation: -18, translateY: -3 }, { jointId: 'armL', rotation: -22, translateX: -4 }, { jointId: 'armR', rotation: 22, translateX: 4 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'head', rotation: -22, translateY: -4 }, { jointId: 'armL', rotation: -28 }, { jointId: 'armR', rotation: 28 }, { jointId: 'root', translateY: -2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: heavy breathing
  { name: 'idle', duration: 2600, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -2 }, { jointId: 'armL', rotation: -2 }, { jointId: 'armR', rotation: 2 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 2 }, { jointId: 'armL', rotation: 2 }, { jointId: 'armR', rotation: -2 }], easing: 'ease-in-out' },
  ]},
  // blockReact: arms absorb with grunt
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: 4 }, { jointId: 'armR', rotation: -4 }, { jointId: 'root', translateX: -2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const treeAnims: AnimationClip[] = [
  hitBase(-2, -4, 450),
  // attack1: branch sweep — armL/armR sweep outward
  { name: 'attack1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: -18, translateX: -2 }, { jointId: 'armR', rotation: -12 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'armL', rotation: 20, translateX: 4 }, { jointId: 'armR', rotation: 14, translateX: 3 }, { jointId: 'root', rotation: 5 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: roots brace — legs tighten, body lowers
  { name: 'block', duration: 550, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 3 }, { jointId: 'legL', rotation: 8, translateY: 2 }, { jointId: 'legR', rotation: -8, translateY: 2 }, { jointId: 'armL', rotation: -6 }, { jointId: 'armR', rotation: 6 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: root stomp — body slams down
  { name: 'skill1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: -3 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 4 }, { jointId: 'legL', rotation: 12, translateY: 3 }, { jointId: 'legR', rotation: -12, translateY: 3 }], easing: 'ease-out' },
    { time: 0.7, joints: [{ jointId: 'root', translateY: 2 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: nature call — arms spread wide, body grows
  { name: 'skill2', duration: 850, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'armL', rotation: -20, translateX: -4 }, { jointId: 'armR', rotation: 20, translateX: 4 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -26, translateX: -5, translateY: -3 }, { jointId: 'armR', rotation: 26, translateX: 5, translateY: -3 }, { jointId: 'head', rotation: -6 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // idle: gentle sway
  { name: 'idle', duration: 3000, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 2 }, { jointId: 'armL', rotation: 3 }, { jointId: 'armR', rotation: -3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: -2 }, { jointId: 'armL', rotation: -3 }, { jointId: 'armR', rotation: 3 }], easing: 'ease-in-out' },
  ]},
  // blockReact: bark plates absorb
  { name: 'blockReact', duration: 380, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', rotation: -2 }, { jointId: 'armL', rotation: -4 }, { jointId: 'armR', rotation: 4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const hagAnims: AnimationClip[] = [
  hitBase(-4, -8, 380),
  // attack1: hex gesture — one arm thrusts forward with twisting motion
  { name: 'attack1', duration: 650, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -16, translateY: -2 }, { jointId: 'root', rotation: -4 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 18, translateX: 4, translateY: 2 }, { jointId: 'head', rotation: 8 }, { jointId: 'root', rotation: 5 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: cauldron hunch
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 3, rotation: -6 }, { jointId: 'head', rotation: -10 }, { jointId: 'armL', rotation: -12 }, { jointId: 'armR', rotation: 12 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: cauldron stir — circular arm motion
  { name: 'skill1', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -14, translateX: -2 }, { jointId: 'armR', rotation: 8 }], easing: 'ease-in' },
    { time: 0.4, joints: [{ jointId: 'armL', rotation: 10, translateX: 3 }, { jointId: 'armR', rotation: -10, translateX: -2 }], easing: 'ease-in-out' },
    { time: 0.6, joints: [{ jointId: 'armL', rotation: -8, translateX: -2 }, { jointId: 'armR', rotation: 12, translateX: 2 }, { jointId: 'head', rotation: 6 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: curse weave — both arms gesture with head tilt
  { name: 'skill2', duration: 850, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'armL', rotation: -18, translateY: -3 }, { jointId: 'armR', rotation: 18, translateY: -3 }, { jointId: 'head', rotation: -12 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 14, translateX: 3 }, { jointId: 'armR', rotation: -14, translateX: -3 }, { jointId: 'head', rotation: 8 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'armL', rotation: -10 }, { jointId: 'armR', rotation: 10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: hunched rocking
  { name: 'idle', duration: 2600, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 2 }, { jointId: 'head', rotation: 3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: -2 }, { jointId: 'head', rotation: -3 }], easing: 'ease-in-out' },
  ]},
  // blockReact: shield flare
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'armL', rotation: 6 }, { jointId: 'root', translateX: -3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const scorpionAnims: AnimationClip[] = [
  hitBase(-4, -6, 380),
  // attack1: tail strike — legR (tail) thrusts over head
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'legR', rotation: -20, translateY: -4 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'legR', rotation: 18, translateY: 3, translateX: 4 }, { jointId: 'head', rotation: 6, translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: pincers guard — arms inward
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.35, joints: [{ jointId: 'armL', rotation: 14, translateX: 3 }, { jointId: 'armR', rotation: -14, translateX: -3 }, { jointId: 'root', translateY: 2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: pincer snap — arms spread then clamp
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -20, translateX: -4 }, { jointId: 'armR', rotation: 20, translateX: 4 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'armL', rotation: 16, translateX: 4 }, { jointId: 'armR', rotation: -16, translateX: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: venom channel — tail raises + body pulses
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'legR', rotation: -22, translateY: -5 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'legR', rotation: -26, translateY: -6 }, { jointId: 'root', translateY: -2 }, { jointId: 'armL', rotation: -8 }, { jointId: 'armR', rotation: 8 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'legR', rotation: -20, translateY: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: leg shifting
  { name: 'idle', duration: 2400, keyframes: [
    { time: 0, joints: [{ jointId: 'legL', rotation: 0 }, { jointId: 'legR', rotation: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'legL', rotation: 3 }, { jointId: 'legR', rotation: -3 }, { jointId: 'armL', rotation: 2 }, { jointId: 'armR', rotation: -2 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'legL', rotation: 0 }, { jointId: 'legR', rotation: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'legL', rotation: -3 }, { jointId: 'legR', rotation: 3 }, { jointId: 'armL', rotation: -2 }, { jointId: 'armR', rotation: 2 }], easing: 'ease-in-out' },
  ]},
  // blockReact: shell absorbs
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: 2 }, { jointId: 'armL', rotation: 4 }, { jointId: 'armR', rotation: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const effigyAnims: AnimationClip[] = [
  hitBase(-4, -8, 380),
  // attack1: scarecrow lurch — whole body lurches forward erratically
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'linear' },
    { time: 0.15, joints: [{ jointId: 'root', rotation: 6, translateX: 2 }], easing: 'linear' },
    { time: 0.35, joints: [{ jointId: 'root', rotation: -4, translateX: 5 }, { jointId: 'head', rotation: 12 }, { jointId: 'armL', rotation: 14 }], easing: 'ease-out' },
    { time: 0.6, joints: [{ jointId: 'root', rotation: 3, translateX: 3 }, { jointId: 'armR', rotation: -10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: slump — body collapses slightly
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 4, rotation: -8 }, { jointId: 'head', rotation: -12 }, { jointId: 'armL', rotation: 10 }, { jointId: 'armR', rotation: -10 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: cursed stare — head tilts unnaturally
  { name: 'skill1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.3, joints: [{ jointId: 'head', rotation: 20, translateX: 3 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'head', rotation: -15, translateX: -2 }, { jointId: 'root', rotation: 4 }], easing: 'ease-out' },
    { time: 0.7, joints: [{ jointId: 'head', rotation: 10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: puppet strings — jerky arm/leg motion
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'linear' },
    { time: 0.2, joints: [{ jointId: 'armL', rotation: -20, translateY: -4 }, { jointId: 'root', translateY: -3 }], easing: 'linear' },
    { time: 0.4, joints: [{ jointId: 'armR', rotation: 18, translateY: -4 }, { jointId: 'armL', rotation: 6 }], easing: 'linear' },
    { time: 0.6, joints: [{ jointId: 'legL', rotation: 10 }, { jointId: 'legR', rotation: -10 }, { jointId: 'root', translateY: -2 }], easing: 'linear' },
    { time: 1, joints: [] },
  ]},
  // idle: creepy twitching
  { name: 'idle', duration: 2200, keyframes: [
    { time: 0, joints: [{ jointId: 'root', rotation: 0 }, { jointId: 'head', rotation: 0 }], easing: 'linear' },
    { time: 0.25, joints: [{ jointId: 'root', rotation: 3 }, { jointId: 'head', rotation: -5 }], easing: 'linear' },
    { time: 0.5, joints: [{ jointId: 'root', rotation: -3 }, { jointId: 'head', rotation: 5 }], easing: 'linear' },
    { time: 0.75, joints: [{ jointId: 'root', rotation: 2 }, { jointId: 'head', rotation: -3 }], easing: 'linear' },
  ]},
  // blockReact: jerks rigidly
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', rotation: -4 }, { jointId: 'head', rotation: 6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const crocAnims: AnimationClip[] = [
  hitBase(-4, -6, 400),
  // attack1: jaw snap — head thrusts forward with rotation
  { name: 'attack1', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'head', rotation: -10, translateY: -2 }], easing: 'ease-in' },
    { time: 0.45, joints: [{ jointId: 'head', rotation: 16, translateX: 5, translateY: 2 }, { jointId: 'root', translateX: 3 }], easing: 'ease-out' },
    { time: 0.65, joints: [{ jointId: 'head', rotation: 8, translateX: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: flatten — body lowers and legs spread
  { name: 'block', duration: 500, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 4, rotation: -3 }, { jointId: 'legL', rotation: 8, translateX: -2 }, { jointId: 'legR', rotation: -8, translateX: 2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: death roll — root rotates with body
  { name: 'skill1', duration: 750, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', rotation: 12 }, { jointId: 'legL', rotation: 10 }, { jointId: 'legR', rotation: -10 }], easing: 'ease-in' },
    { time: 0.45, joints: [{ jointId: 'root', rotation: -14 }, { jointId: 'legL', rotation: -12 }, { jointId: 'legR', rotation: 12 }], easing: 'ease-in-out' },
    { time: 0.7, joints: [{ jointId: 'root', rotation: 8 }, { jointId: 'head', rotation: 6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: tail whip summon
  { name: 'skill2', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'legR', rotation: -16 }, { jointId: 'root', rotation: -6 }], easing: 'ease-in' },
    { time: 0.5, joints: [{ jointId: 'legR', rotation: 20, translateX: 4 }, { jointId: 'root', rotation: 8 }], easing: 'ease-out' },
    { time: 0.75, joints: [{ jointId: 'legR', rotation: 10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: low breathing
  { name: 'idle', duration: 2600, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -1 }, { jointId: 'head', rotation: 2 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'head', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 1 }, { jointId: 'head', rotation: -2 }], easing: 'ease-in-out' },
  ]},
  // blockReact: low absorb
  { name: 'blockReact', duration: 350, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateY: 2 }, { jointId: 'head', rotation: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

const whaleAnims: AnimationClip[] = [
  hitBase(-3, -4, 450),
  // attack1: tail slap — legL/legR swing
  { name: 'attack1', duration: 700, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'legL', rotation: -14 }, { jointId: 'legR', rotation: -14 }, { jointId: 'root', rotation: -4 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'legL', rotation: 18, translateX: 4 }, { jointId: 'legR', rotation: 18, translateX: 4 }, { jointId: 'root', rotation: 6 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // block: dive down
  { name: 'block', duration: 600, keyframes: [
    { time: 0, joints: [], easing: 'ease-in-out' },
    { time: 0.4, joints: [{ jointId: 'root', translateY: 4, rotation: -4 }, { jointId: 'head', rotation: -8, translateY: 2 }], easing: 'ease-in-out' },
    { time: 1, joints: [] },
  ]},
  // skill1: breach — body rises then slams
  { name: 'skill1', duration: 800, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -5 }, { jointId: 'head', rotation: -10, translateY: -3 }], easing: 'ease-in' },
    { time: 0.55, joints: [{ jointId: 'root', translateY: 4 }, { jointId: 'head', rotation: 8, translateY: 2 }, { jointId: 'legL', rotation: -10 }, { jointId: 'legR', rotation: -10 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // skill2: song call — body oscillates gently
  { name: 'skill2', duration: 900, keyframes: [
    { time: 0, joints: [], easing: 'ease-in' },
    { time: 0.2, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'head', rotation: -6 }], easing: 'ease-in-out' },
    { time: 0.45, joints: [{ jointId: 'root', translateY: -4 }, { jointId: 'head', rotation: 4 }, { jointId: 'armL', rotation: -10 }, { jointId: 'armR', rotation: 10 }], easing: 'ease-in-out' },
    { time: 0.7, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'head', rotation: -4 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
  // idle: gentle drift
  { name: 'idle', duration: 3000, keyframes: [
    { time: 0, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.25, joints: [{ jointId: 'root', translateY: -3 }, { jointId: 'armL', rotation: -3 }, { jointId: 'armR', rotation: 3 }], easing: 'ease-in-out' },
    { time: 0.5, joints: [{ jointId: 'root', translateY: 0 }, { jointId: 'armL', rotation: 0 }, { jointId: 'armR', rotation: 0 }], easing: 'ease-in-out' },
    { time: 0.75, joints: [{ jointId: 'root', translateY: 3 }, { jointId: 'armL', rotation: 3 }, { jointId: 'armR', rotation: -3 }], easing: 'ease-in-out' },
  ]},
  // blockReact: mass absorbs
  { name: 'blockReact', duration: 380, keyframes: [
    { time: 0, joints: [], easing: 'ease-out' },
    { time: 0.3, joints: [{ jointId: 'root', translateX: -2 }, { jointId: 'armL', rotation: -3 }, { jointId: 'armR', rotation: 3 }], easing: 'ease-out' },
    { time: 1, joints: [] },
  ]},
];

// roach 复用 rat 模板（快速小型生物）
const roachAnims = ratAnims;
// crab 复用 scorpion 模板（节肢动物同族）
const crabAnims = scorpionAnims;
// vessel 复用 construct 模板（人造容器）
const vesselAnims = constructAnims;

// ─── 模板映射表 ───

const ANIM_TEMPLATES: Record<BodyKind, AnimationClip[]> = {
  beast: beastAnims,
  wolf: wolfAnims,
  dragon: dragonAnims,
  humanoid: humanoidAnims,
  knight: knightAnims,
  rat: ratAnims,
  moth: mothAnims,
  bird: birdAnims,
  swarm: swarmAnims,
  serpent: serpentAnims,
  worm: wormAnims,
  blob: blobAnims,
  construct: constructAnims,
  statue: statueAnims,
  gate: gateAnims,
  ghost: ghostAnims,
  brute: bruteAnims,
  tree: treeAnims,
  hag: hagAnims,
  scorpion: scorpionAnims,
  effigy: effigyAnims,
  croc: crocAnims,
  whale: whaleAnims,
  roach: roachAnims,
  crab: crabAnims,
  vessel: vesselAnims,
};

/** 将动画数据注入所有怪物视觉规格 */
export function applyAnimations(visuals: Record<string, MonsterVisualSpec>): void {
  for (const spec of Object.values(visuals)) {
    if (!spec.joints || spec.joints.length !== 6) continue;
    spec.animations = ANIM_TEMPLATES[spec.kind] ?? ANIM_TEMPLATES.beast;
  }
}
