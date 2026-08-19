// 怪物外形视觉规格 · 供 src/components/enemies/EnemySprite.tsx 渲染。
// 每个怪物 = 一个身体原型 (kind) + 5~9 处显式声明的独特外貌特征 (features)。
// 该文件为纯数据，可直接拷入 violet-lz/Cardforge-web 仓库使用。

export type BodyKind =
  | 'beast' | 'wolf' | 'rat' | 'scorpion' | 'worm' | 'serpent' | 'moth' | 'bird'
  | 'whale' | 'blob' | 'roach' | 'croc' | 'crab' | 'humanoid' | 'knight' | 'ghost'
  | 'statue' | 'construct' | 'swarm' | 'tree' | 'vessel' | 'gate' | 'brute'
  | 'effigy' | 'hag' | 'dragon';

export type EyeStyle = 'glow' | 'slit' | 'red' | 'white' | 'none';

export interface FeatureSpec {
  s: string;   // 特征形状 id（spriteShapes 中的键）
  x: number;   // 120×120 画布坐标
  y: number;
  c: string;   // 主色
  c2?: string; // 辅色
  r?: number;  // 旋转（度）
  sc?: number; // 缩放
}

export interface MonsterVisualSpec {
  kind: BodyKind;
  hue: string;
  hue2: string;
  glow: string;
  size: number;
  eye: EyeStyle;
  features: FeatureSpec[];
}

export type EnemyTier = 'boss' | 'elite' | 'normal';

export interface RegionMeta {
  id: string;
  name: string;
  en: string;
  hue: string;
}

export const F = (s: string, x: number, y: number, c: string, r = 0, sc = 1, c2?: string): FeatureSpec => ({
  s, x, y, c, c2, r, sc,
});
