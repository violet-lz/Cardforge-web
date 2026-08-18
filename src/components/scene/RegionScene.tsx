import { useMemo } from 'react';
import { SeededRng } from '../../game/rng/SeededRng';
import { biomeById, type BiomeId, type RegionId } from '../../data/biomes/biomes';

/**
 * Component-ized, config-driven SVG scene renderer. Each region is drawn from layered vector
 * primitives (sky → far silhouettes → terrain → structures → props → foreground → particles)
 * rather than a background image. Layout is deterministic (seeded + memoized) so it never
 * reshuffles across React renders, and ambient motion is CSS-driven and respects reduced motion.
 */

type SceneFamily =
  | 'village' | 'capital' | 'sewer' | 'swamp' | 'forest' | 'wastes' | 'desert' | 'arcane'
  | 'cyber' | 'sky' | 'crypt' | 'underworld' | 'ferry' | 'ocean' | 'marble' | 'meteor';

interface Palette { skyTop: string; skyLow: string; horizon: string; ground: string; groundLow: string; accent: string; ink: string; }
interface RegionSceneConfig { family: SceneFamily; palette: Palette; particle: 'dust' | 'embers' | 'fog' | 'bubbles' | 'sand' | 'starfall' | 'petals' | 'ash' | 'none'; luminary?: { x: number; y: number; r: number; color: string; glow?: boolean }; }

const P = (skyTop: string, skyLow: string, horizon: string, ground: string, groundLow: string, accent: string, ink = '#0c0a0d'): Palette => ({ skyTop, skyLow, horizon, ground, groundLow, accent, ink });

const CONFIGS: Record<RegionId, RegionSceneConfig> = {
  'ruined-village': { family: 'village', palette: P('#8794a1', '#c9c2b2', '#b6a888', '#7d6a4a', '#4a3c28', '#d7b45a'), particle: 'dust', luminary: { x: 74, y: 16, r: 7, color: '#e8dcb0' } },
  'verdant-forest': { family: 'forest', palette: P('#8fd39a', '#cdeeb6', '#7cae63', '#33702f', '#1c3f1c', '#eaffc8'), particle: 'petals', luminary: { x: 72, y: 15, r: 6, color: '#fff6c8', glow: true } },
  'moss-marsh': { family: 'swamp', palette: P('#5c6b52', '#8c9a6a', '#5f6a3a', '#3a4420', '#1a2010', '#9ead47'), particle: 'fog' },
  'fetid-sewers': { family: 'sewer', palette: P('#26301f', '#3a4a2a', '#2c3a1e', '#141c0c', '#0a1006', '#7fa83c'), particle: 'fog' },
  'radiant-capital': { family: 'capital', palette: P('#cfe0ff', '#fff0c0', '#d8c48a', '#c9b483', '#7d6a44', '#ffe07f'), particle: 'ash', luminary: { x: 76, y: 14, r: 8, color: '#fff3c0', glow: true } },
  'capital-outskirts': { family: 'capital', palette: P('#9aa6b0', '#d8cba9', '#b09a72', '#8a745a', '#4a3c2c', '#caa673'), particle: 'dust' },
  bloodlands: { family: 'wastes', palette: P('#5a1418', '#a5352a', '#7a1f1c', '#3a0d0e', '#1a0405', '#ff4b45'), particle: 'embers', luminary: { x: 74, y: 18, r: 9, color: '#ff6a4a', glow: true } },
  desert: { family: 'desert', palette: P('#e9b96a', '#f6dca0', '#d8a24e', '#c88a3e', '#7a5222', '#ffcf7a'), particle: 'sand', luminary: { x: 72, y: 15, r: 11, color: '#fff0b0', glow: true } },
  'arcane-march': { family: 'arcane', palette: P('#241a45', '#4b3a8a', '#3a2c6a', '#181030', '#0c0820', '#bd83ff'), particle: 'starfall', luminary: { x: 74, y: 16, r: 6, color: '#d8b7ff', glow: true } },
  'techno-city': { family: 'cyber', palette: P('#0a1230', '#12294a', '#1b3a66', '#05091b', '#04060f', '#3ce9ff'), particle: 'starfall' },
  'sky-island': { family: 'sky', palette: P('#8fd0ff', '#dff7ff', '#bfe6ff', '#8fbfe6', '#5a86b4', '#ffffff'), particle: 'petals', luminary: { x: 74, y: 14, r: 8, color: '#ffffff', glow: true } },
  'noble-castle': { family: 'capital', palette: P('#3a2430', '#7b2f3f', '#5a3040', '#241018', '#120810', '#e1bd62'), particle: 'ash', luminary: { x: 76, y: 16, r: 6, color: '#e1bd62' } },
  'castle-catacombs': { family: 'crypt', palette: P('#2a2a38', '#4a4a5c', '#38384a', '#141420', '#0a0a12', '#a9a9bb'), particle: 'fog' },
  underworld: { family: 'underworld', palette: P('#04122a', '#1b3a7a', '#0e2452', '#030817', '#020510', '#55bfff'), particle: 'starfall' },
  'ghost-ferry': { family: 'ferry', palette: P('#06202a', '#1a4a5a', '#0e3340', '#061118', '#03080c', '#75e1e9'), particle: 'fog' },
  'ocean-depths': { family: 'ocean', palette: P('#02306a', '#0a5aa0', '#0f4a86', '#02142a', '#010a1a', '#50cfff'), particle: 'bubbles' },
  atlantis: { family: 'marble', palette: P('#2a4c50', '#63c7c4', '#4a8c8a', '#243838', '#122020', '#f1f0df'), particle: 'bubbles', luminary: { x: 74, y: 16, r: 7, color: '#f1f0df', glow: true } },
  'meteor-ruins': { family: 'meteor', palette: P('#0a0620', '#2a1050', '#1a0c3a', '#0a0616', '#050308', '#bd83ff'), particle: 'starfall', luminary: { x: 70, y: 14, r: 5, color: '#e0b0ff', glow: true } },
  'bell-tower': { family: 'crypt', palette: P('#2a2620', '#5a4a38', '#463828', '#161210', '#0a0806', '#e4bd60'), particle: 'ash', luminary: { x: 74, y: 15, r: 6, color: '#e4bd60' } },
  'neon-court': { family: 'cyber', palette: P('#0c0a26', '#2a1250', '#3a1c6a', '#06041a', '#04030f', '#c23cff'), particle: 'starfall' },
  'demon-nest': { family: 'wastes', palette: P('#3a0810', '#7a1420', '#5a0e18', '#1a0206', '#0d0103', '#ff3b4b'), particle: 'embers', luminary: { x: 74, y: 18, r: 8, color: '#ff5a4a', glow: true } },
  'world-rampart': { family: 'meteor', palette: P('#100826', '#38186a', '#28104a', '#0a0618', '#050308', '#8fd3ff'), particle: 'starfall', luminary: { x: 70, y: 13, r: 6, color: '#c9e6ff', glow: true } },
};

function configFor(id?: BiomeId): RegionSceneConfig {
  const biome = biomeById(id);
  return CONFIGS[biome.id as RegionId] ?? CONFIGS['ruined-village'];
}

function seedFrom(text: string): number { let hash = 0x811c9dc5; for (let i = 0; i < text.length; i += 1) { hash ^= text.charCodeAt(i); hash = Math.imul(hash, 0x01000193); } return hash >>> 0; }
const round = (value: number) => Math.round(value * 100) / 100;

/** Deterministic wheat/reed cluster used by village and marsh. */
function stalks(rng: SeededRng, count: number, baseY: number, color: string, tall: number): JSX.Element[] {
  return Array.from({ length: count }, (_, index) => {
    const x = round(2 + (index + rng.nextFloat() * 0.6) * (96 / count));
    const height = round(tall + rng.nextFloat() * tall * 0.7);
    const lean = round((rng.nextFloat() - 0.5) * 4);
    return <path key={index} className="scene-stalk" d={`M ${x} ${baseY} q ${lean} ${-height * 0.6} ${lean * 1.4} ${-height}`} stroke={color} strokeWidth={round(0.4 + rng.nextFloat() * 0.3)} fill="none" style={{ ['--stalk-delay' as string]: `${round(rng.nextFloat() * 3)}s` }} />;
  });
}

function FarSilhouette({ config, rng }: { config: RegionSceneConfig; rng: SeededRng }) {
  const { family, palette } = config;
  if (family === 'capital') {
    const towers = Array.from({ length: 7 }, (_, i) => { const x = 6 + i * 13; const h = 14 + rng.nextInt(0, 12); return <g key={i}><rect x={x} y={42 - h} width={9} height={h} fill={palette.horizon} /><path d={`M ${x} ${42 - h} L ${x + 4.5} ${42 - h - 6} L ${x + 9} ${42 - h} Z`} fill={palette.accent} opacity={0.7} /></g>; });
    return <g opacity={0.85}>{towers}</g>;
  }
  if (family === 'cyber') return <g opacity={0.9}>{Array.from({ length: 9 }, (_, i) => { const x = 4 + i * 11; const h = 12 + rng.nextInt(0, 20); return <g key={i}><rect x={x} y={42 - h} width={7} height={h} fill={palette.horizon} /><rect x={x + 1} y={42 - h + 2} width={1} height={h - 3} fill={palette.accent} opacity={0.8} /><rect x={x + 4} y={42 - h + 4} width={1} height={h - 5} fill={palette.accent} opacity={0.6} /></g>; })}</g>;
  if (family === 'desert' || family === 'wastes') return <g opacity={0.8}>{Array.from({ length: 4 }, (_, i) => { const x = 8 + i * 24; return <path key={i} d={`M ${x} 42 q 12 ${-10 - rng.nextInt(0, 6)} 24 0 Z`} fill={palette.horizon} />; })}</g>;
  if (family === 'meteor') return <g opacity={0.85}>{Array.from({ length: 5 }, (_, i) => { const x = 6 + i * 20; const h = 10 + rng.nextInt(0, 14); return <path key={i} d={`M ${x} 44 L ${x + 3} ${44 - h} L ${x + 7} ${44 - h + 3} L ${x + 11} 44 Z`} fill={palette.horizon} />; })}</g>;
  if (family === 'forest' || family === 'swamp') return <g opacity={0.8}>{Array.from({ length: 8 }, (_, i) => { const x = 5 + i * 12; const h = 12 + rng.nextInt(0, 10); return <path key={i} d={`M ${x} 42 L ${x + 4} ${42 - h} L ${x + 8} 42 Z`} fill={palette.horizon} />; })}</g>;
  if (family === 'ocean' || family === 'ferry') return <g opacity={0.7}>{Array.from({ length: 3 }, (_, i) => <path key={i} d={`M ${10 + i * 30} 42 q 10 -8 20 0 Z`} fill={palette.horizon} />)}</g>;
  return <g opacity={0.75}>{Array.from({ length: 6 }, (_, i) => { const x = 4 + i * 16; const h = 10 + rng.nextInt(0, 12); return <path key={i} d={`M ${x} 42 q 8 ${-h} 16 0 Z`} fill={palette.horizon} />; })}</g>;
}

function Structures({ config, rng }: { config: RegionSceneConfig; rng: SeededRng }) {
  const { family, palette } = config;
  if (family === 'village') return <g>
    {stalks(rng, 46, 60, palette.accent, 6)}
    {[18, 44, 70].map((x, i) => { const w = 16 + rng.nextInt(0, 4); const h = 12 + rng.nextInt(0, 4); return <g key={i}>
      <rect x={x} y={48 - h} width={w} height={h} fill={palette.ground} stroke={palette.ink} strokeWidth={0.5} />
      <path d={`M ${x - 2} ${48 - h} L ${x + w / 2} ${48 - h - 7} L ${x + w + 2} ${48 - h} Z`} fill={palette.groundLow} stroke={palette.ink} strokeWidth={0.5} />
      <rect x={x + w * 0.6} y={48 - h - 12} width={2.4} height={7} fill={palette.ink} />
      <rect x={x + 3} y={48 - 7} width={4} height={7} fill={palette.ink} opacity={0.8} />
      <rect x={x + w - 7} y={48 - h + 3} width={4} height={4} fill={palette.ink} opacity={0.6} />
      {Array.from({ length: 4 }, (_, r) => <line key={r} x1={x} y1={48 - h + r * (h / 4)} x2={x + w} y2={48 - h + r * (h / 4)} stroke={palette.ink} strokeWidth={0.2} opacity={0.5} />)}
    </g>; })}
    {Array.from({ length: 9 }, (_, i) => <line key={`f${i}`} x1={4 + i * 4} y1={49} x2={4 + i * 4} y2={45} stroke={palette.ink} strokeWidth={0.5} opacity={0.7} />)}
    <line x1={4} y1={46.5} x2={38} y2={46.5} stroke={palette.ink} strokeWidth={0.5} opacity={0.7} />
  </g>;
  if (family === 'capital') return <g>
    <rect x={0} y={30} width={100} height={18} fill={palette.ground} />
    {Array.from({ length: 20 }, (_, i) => <rect key={i} x={i * 5} y={30} width={4.6} height={4} fill={palette.groundLow} stroke={palette.ink} strokeWidth={0.2} opacity={0.6} />)}
    {[8, 84].map((x, i) => <g key={i}><rect x={x} y={18} width={8} height={30} fill={palette.groundLow} stroke={palette.ink} strokeWidth={0.5} /><path d={`M ${x} 18 L ${x + 4} 12 L ${x + 8} 18 Z`} fill={palette.accent} /><rect x={x + 3} y={14} width={2} height={4} fill={palette.accent} /></g>)}
    <path d="M 42 48 L 42 26 Q 50 18 58 26 L 58 48 Z" fill={palette.ink} stroke={palette.accent} strokeWidth={0.6} />
    {Array.from({ length: 5 }, (_, r) => Array.from({ length: 3 }, (_, cIdx) => <circle key={`${r}-${cIdx}`} cx={45 + cIdx * 5} cy={30 + r * 3.4} r={0.6} fill={palette.accent} opacity={0.8} />))}
    <line x1={50} y1={26} x2={50} y2={48} stroke={palette.accent} strokeWidth={0.4} opacity={0.5} />
  </g>;
  if (family === 'sewer') return <g>
    <rect x={0} y={20} width={100} height={30} fill={palette.ground} />
    {[16, 50, 84].map((x, i) => <path key={i} d={`M ${x - 15} 48 L ${x - 15} 30 Q ${x} 16 ${x + 15} 30 L ${x + 15} 48`} fill="none" stroke={palette.groundLow} strokeWidth={2.4} />)}
    <rect x={0} y={44} width={100} height={6} className="scene-flow" fill={palette.accent} opacity={0.5} />
    {Array.from({ length: 6 }, (_, i) => <circle key={i} cx={10 + i * 15} cy={47} r={0.8} className="scene-drip" fill={palette.accent} opacity={0.6} style={{ ['--drip-delay' as string]: `${i * 0.4}s` }} />)}
    {[24, 60].map((x, i) => <rect key={`p${i}`} x={x} y={26} width={3} height={18} fill={palette.ink} opacity={0.7} />)}
  </g>;
  if (family === 'swamp') return <g>
    <ellipse cx={30} cy={50} rx={22} ry={4} className="scene-ripple" fill={palette.accent} opacity={0.35} />
    <ellipse cx={74} cy={53} rx={18} ry={3.4} className="scene-ripple" fill={palette.accent} opacity={0.3} style={{ ['--ripple-delay' as string]: '1.4s' }} />
    {[14, 58, 88].map((x, i) => <g key={i}><path d={`M ${x} 48 Q ${x - 4} 34 ${x} 22 Q ${x + 5} 33 ${x + 2} 48 Z`} fill={palette.ground} stroke={palette.ink} strokeWidth={0.4} /><path d={`M ${x} 30 q -7 -3 -11 -8 M ${x} 26 q 6 -3 11 -7`} stroke={palette.groundLow} strokeWidth={0.6} fill="none" /></g>)}
    {stalks(rng, 30, 52, palette.accent, 5)}
  </g>;
  if (family === 'desert') return <g>
    {[{ y: 40, o: 0.9 }, { y: 46, o: 1 }].map((dune, i) => <path key={i} d={`M 0 ${dune.y} Q 30 ${dune.y - 8} 55 ${dune.y} T 100 ${dune.y - 3} L 100 60 L 0 60 Z`} fill={i === 0 ? palette.groundLow : palette.ground} opacity={dune.o} />)}
    {[14, 22, 30].map((x, i) => <rect key={i} x={x} y={30 - i * 2} width={3.4} height={16 + i * 2} fill={palette.horizon} stroke={palette.ink} strokeWidth={0.3} transform={`rotate(${i * 4 - 4} ${x} 40)`} />)}
    <g transform="translate(64 34)"><path d="M0 8 Q3 0 6 8 Q9 2 12 8 L12 12 L0 12 Z" fill={palette.ink} opacity={0.75} /><rect x={-2} y={11} width={16} height={1.5} fill={palette.ink} opacity={0.6} /></g>
    <path className="scene-sandsweep" d="M -10 24 Q 40 20 110 26" stroke={palette.accent} strokeWidth={1.2} fill="none" opacity={0.35} />
  </g>;
  if (family === 'meteor') return <g>
    <ellipse cx={50} cy={52} rx={44} ry={10} fill={palette.groundLow} />
    <ellipse cx={50} cy={52} rx={30} ry={6} fill={palette.ink} />
    <path className="scene-rift" d="M 20 40 L 44 30 L 40 44 L 62 34 L 56 48" stroke={palette.accent} strokeWidth={0.8} fill="none" opacity={0.8} />
    {Array.from({ length: 6 }, (_, i) => { const x = 12 + i * 14; const y = 18 + rng.nextInt(0, 10); return <path key={i} className="scene-float" d={`M ${x} ${y} l 3 -2 l 3 3 l -2 3 l -4 -1 Z`} fill={palette.horizon} stroke={palette.accent} strokeWidth={0.3} style={{ ['--float-delay' as string]: `${i * 0.5}s` }} />; })}
    <path className="scene-rift" d="M 30 2 Q 52 14 48 26 M 70 0 Q 60 12 72 22" stroke={palette.accent} strokeWidth={0.5} fill="none" opacity={0.6} />
  </g>;
  if (family === 'ocean') return <g>
    {[46, 50, 54].map((y, i) => <path key={i} className="scene-wave" d={`M -5 ${y} Q 25 ${y - 3} 50 ${y} T 105 ${y}`} stroke={palette.accent} strokeWidth={0.8} fill="none" opacity={0.4 - i * 0.08} style={{ ['--wave-delay' as string]: `${i * 0.7}s` }} />)}
    <path d="M 60 48 L 66 30 L 70 30 L 74 48 Z" fill={palette.ink} opacity={0.7} transform="rotate(-8 67 40)" />
    {[20, 32].map((x, i) => <path key={i} className="scene-stalk" d={`M ${x} 50 q -2 -8 1 -14`} stroke={palette.horizon} strokeWidth={1} fill="none" />)}
  </g>;
  if (family === 'marble') return <g>
    <rect x={0} y={44} width={100} height={16} fill={palette.ground} />
    {[10, 26, 42, 70, 86].map((x, i) => { const broken = i % 2 === 0; const h = broken ? 16 : 24; return <g key={i}><rect x={x} y={44 - h} width={6} height={h} fill={palette.accent} opacity={0.85} /><rect x={x - 1} y={44 - h} width={8} height={2} fill={palette.horizon} /></g>; })}
    <rect x={4} y={42} width={92} height={2} fill={palette.horizon} opacity={0.7} />
  </g>;
  if (family === 'cyber') return <g>
    {Array.from({ length: 11 }, (_, i) => { const x = 3 + i * 9; const h = 10 + rng.nextInt(0, 26); return <g key={i}><rect x={x} y={48 - h} width={6} height={h} fill={palette.ground} stroke={palette.accent} strokeWidth={0.2} />{Array.from({ length: Math.floor(h / 3) }, (_, w) => <rect key={w} x={x + 1} y={48 - h + 2 + w * 3} width={1} height={1} fill={palette.accent} opacity={rng.nextFloat() > 0.5 ? 0.9 : 0.3} />)}</g>; })}
  </g>;
  if (family === 'arcane') return <g>
    {[18, 50, 80].map((x, i) => <g key={i}><rect x={x} y={20} width={7} height={28} fill={palette.ground} stroke={palette.accent} strokeWidth={0.3} /><path d={`M ${x} 20 L ${x + 3.5} 13 L ${x + 7} 20 Z`} fill={palette.accent} opacity={0.7} /></g>)}
    {Array.from({ length: 7 }, (_, i) => <circle key={i} className="scene-float" cx={12 + i * 12} cy={24 + rng.nextInt(0, 10)} r={0.9} fill={palette.accent} style={{ ['--float-delay' as string]: `${i * 0.4}s` }} />)}
  </g>;
  if (family === 'underworld' || family === 'crypt') return <g>
    {[14, 50, 84].map((x, i) => <path key={i} d={`M ${x - 12} 48 L ${x - 12} 28 Q ${x} 16 ${x + 12} 28 L ${x + 12} 48`} fill="none" stroke={palette.groundLow} strokeWidth={2} />)}
    {Array.from({ length: 5 }, (_, i) => <circle key={i} className="scene-float" cx={12 + i * 20} cy={40 + rng.nextInt(0, 6)} r={1.4} fill={palette.accent} opacity={0.7} style={{ ['--float-delay' as string]: `${i * 0.6}s` }} />)}
  </g>;
  if (family === 'ferry') return <g>
    <rect x={6} y={46} width={40} height={2.4} fill={palette.ground} />
    {[10, 18, 26, 34, 42].map((x, i) => <rect key={i} x={x} y={48} width={1.6} height={8} fill={palette.ink} />)}
    <path d="M 56 46 Q 66 42 82 46 L 78 50 L 60 50 Z" fill={palette.ink} stroke={palette.accent} strokeWidth={0.3} />
    <rect x={68} y={38} width={0.8} height={8} fill={palette.ink} />
    {[46, 50].map((y, i) => <path key={i} className="scene-wave" d={`M 0 ${y} Q 30 ${y - 2} 60 ${y} T 120 ${y}`} stroke={palette.accent} strokeWidth={0.6} fill="none" opacity={0.3} style={{ ['--wave-delay' as string]: `${i * 0.6}s` }} />)}
  </g>;
  if (family === 'wastes') return <g>
    {[{ y: 42, c: palette.groundLow }, { y: 47, c: palette.ground }].map((r, i) => <path key={i} d={`M 0 ${r.y} Q 26 ${r.y - 6} 52 ${r.y} T 100 ${r.y - 2} L 100 60 L 0 60 Z`} fill={r.c} />)}
    {[20, 46, 74].map((x, i) => <g key={i}><rect x={x} y={30} width={0.8} height={14} fill={palette.ink} /><path d={`M ${x + 0.8} 30 L ${x + 6} 31 L ${x + 0.8} 34 Z`} className="scene-flag" fill={palette.accent} opacity={0.8} /></g>)}
  </g>;
  // forest fallback
  return <g>
    {[12, 30, 52, 72, 90].map((x, i) => { const h = 16 + rng.nextInt(0, 8); return <g key={i}><rect x={x - 0.8} y={48 - h * 0.35} width={1.6} height={h * 0.35} fill={palette.ink} /><path d={`M ${x} ${48 - h} L ${x - 6} ${48 - h * 0.35} L ${x + 6} ${48 - h * 0.35} Z`} fill={palette.ground} /><path d={`M ${x} ${48 - h + 4} L ${x - 4.5} ${48 - h * 0.5} L ${x + 4.5} ${48 - h * 0.5} Z`} fill={palette.groundLow} /></g>; })}
    {stalks(rng, 26, 52, palette.accent, 4)}
  </g>;
}

function Particles({ kind }: { kind: RegionSceneConfig['particle'] }) {
  if (kind === 'none') return null;
  const count = kind === 'starfall' || kind === 'bubbles' ? 22 : 16;
  const rng = new SeededRng(seedFrom(kind));
  return <div className={`scene-particles particle-${kind}`} aria-hidden="true">{Array.from({ length: count }, (_, i) => <span key={i} style={{ left: `${round(rng.nextFloat() * 100)}%`, top: `${round(rng.nextFloat() * 100)}%`, ['--p-delay' as string]: `${round(rng.nextFloat() * 6)}s`, ['--p-dur' as string]: `${round(4 + rng.nextFloat() * 6)}s`, ['--p-scale' as string]: round(0.5 + rng.nextFloat()) }} />)}</div>;
}

export function RegionScene({ regionId, variant = 'map' }: { regionId?: BiomeId; variant?: 'map' | 'combat' }) {
  const config = configFor(regionId);
  const svg = useMemo(() => {
    const rng = new SeededRng(seedFrom(`${biomeById(regionId).id}-${variant}`));
    const { palette, luminary } = config;
    return <svg className="scene-svg" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="scene-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={palette.skyTop} /><stop offset="1" stopColor={palette.skyLow} /></linearGradient>
        <linearGradient id="scene-ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={palette.ground} /><stop offset="1" stopColor={palette.groundLow} /></linearGradient>
      </defs>
      <rect x={0} y={0} width={100} height={60} fill="url(#scene-sky)" />
      {luminary && <circle cx={luminary.x} cy={luminary.y} r={luminary.r} fill={luminary.color} opacity={0.9} className={luminary.glow ? 'scene-luminary glow' : 'scene-luminary'} />}
      <FarSilhouette config={config} rng={rng} />
      <rect x={0} y={44} width={100} height={16} fill="url(#scene-ground)" />
      <Structures config={config} rng={rng} />
      <rect x={0} y={54} width={100} height={6} fill={palette.ink} opacity={0.35} />
    </svg>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, regionId, variant]);
  return <div className={`region-scene ${biomeById(regionId).accentClass} scene-${config.family} scene-variant-${variant}`} aria-hidden="true">{svg}<Particles kind={config.particle} /></div>;
}
