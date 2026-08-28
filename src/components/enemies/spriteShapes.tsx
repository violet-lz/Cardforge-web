// 怪物外形渲染引擎 · 身体原型 + 特征形状调度器
// 纯展示组件，可直接拷入 violet-lz/Cardforge-web 仓库。
import type { ReactNode } from 'react';
import type { FeatureSpec, MonsterVisualSpec } from '../../game/enemies/monsterVisualTypes';

/* ================= 特征形状 ================= */

const t = (f: FeatureSpec) => `translate(${f.x} ${f.y}) rotate(${f.r ?? 0}) scale(${f.sc ?? 1})`;
const has = (id: string, ...keys: string[]) => keys.some((k) => id.includes(k));

function flame(f: FeatureSpec, n = 1) {
  const d = 'M0 6C-4 2 -3 -3 0 -7C1 -3 5 -2 4 2C3 5 1 6 0 6Z';
  const off = n > 1 ? [-8, 0, 8] : [0];
  return (
    <g transform={t(f)}>
      {off.map((o, i) => (
        <path key={i} d={d} transform={`translate(${o} ${i === 1 ? -2 : 0}) scale(${i === 1 ? 1.15 : 0.85})`} fill={f.c} opacity={0.95} />
      ))}
    </g>
  );
}
function ring(f: FeatureSpec, dashed = false) {
  return (
    <g transform={t(f)}>
      <circle r={10} fill="none" stroke={f.c} strokeWidth={1.6} strokeDasharray={dashed ? '3 3' : undefined} opacity={0.9} />
      <circle r={13.5} fill="none" stroke={f.c} strokeWidth={0.8} opacity={0.4} />
    </g>
  );
}
function orbit(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <circle r={11} fill="none" stroke={f.c} strokeWidth={1} opacity={0.6} />
      {[-40, 40, 160].map((a) => (
        <circle key={a} cx={11 * Math.cos((a * Math.PI) / 180)} cy={11 * Math.sin((a * Math.PI) / 180)} r={1.8} fill={f.c} />
      ))}
    </g>
  );
}
function dots(f: FeatureSpec, n = 3) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <circle key={i} cx={-8 + i * 8} cy={i % 2 ? 3 : -2} r={2 - i * 0.25} fill={f.c} opacity={0.9 - i * 0.12} />
      ))}
    </g>
  );
}
function trail(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={-i * 7} cy={i * i * 0.8} r={2.4 - i * 0.4} fill={f.c} opacity={0.85 - i * 0.15} />
      ))}
    </g>
  );
}
function spikes(f: FeatureSpec, n = 4) {
  const w = 18;
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <path key={i} d={`M${-w / 2 + i * (w / n)} 4 L${-w / 2 + i * (w / n) + w / n / 2} -6 L${-w / 2 + (i + 1) * (w / n)} 4 Z`} fill={f.c} />
      ))}
    </g>
  );
}
function crack(f: FeatureSpec, n = 2) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.4} fill="none" strokeLinecap="round" opacity={0.9}>
      <path d="M-9 -5L-2 0L-6 4L2 9" />
      {n > 1 && <path d="M4 -8L8 -2L3 2L9 7" opacity={0.7} />}
    </g>
  );
}
function vein(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.3} fill="none" opacity={0.85} strokeLinecap="round">
      <path d="M-12 2C-6 -4 0 6 8 -2" />
      <path d="M-6 2L-2 -5M2 4L6 -6" strokeWidth={0.8} opacity={0.6} />
    </g>
  );
}
function wing(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.92}>
      <path d="M0 0C10 -8 22 -8 30 -3C22 -1 16 1 12 3C18 2 22 3 24 5C18 7 12 7 8 6C11 8 13 10 14 12C8 12 2 8 -2 4C-2 2 -1 1 0 0Z" />
      {f.c2 && <path d="M0 0C10 -8 22 -8 30 -3C22 -1 16 1 12 3C18 2 22 3 24 5C18 7 12 7 8 6C11 8 13 10 14 12C8 12 2 8 -2 4Z" fill={f.c2} opacity={0.35} />}
    </g>
  );
}
function feather(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeLinecap="round">
      <path d="M0 10C2 2 6 -6 10 -10" strokeWidth={1.6} />
      <path d="M2 4L-2 2M4 -2L0 -4M6 -7L3 -9" strokeWidth={1} opacity={0.7} />
    </g>
  );
}
function tail(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 0C10 -2 16 -10 14 -20" stroke={f.c} strokeWidth={5} fill="none" strokeLinecap="round" />
      <circle cx={14} cy={-20} r={3.4} fill={f.c} />
    </g>
  );
}
function fangs(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      {[-10, -4, 2, 8].map((x, i) => (
        <path key={i} d={`M${x} 0L${x + 3} 0L${x + 1.5} ${5 + (i % 2) * 3}Z`} />
      ))}
    </g>
  );
}
function jaw(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-14 -3C-8 3 6 3 14 -3" stroke={f.c} strokeWidth={3} fill="none" strokeLinecap="round" />
      <path d="M-12 1C-7 6 5 6 12 1" stroke={f.c2 ?? '#1a1410'} strokeWidth={1.4} fill="none" opacity={0.8} />
      {fangs(f)}
    </g>
  );
}
function mouth(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2} fill="none" strokeLinecap="round">
      <path d="M-8 -2C-4 4 4 4 8 -2" />
      <path d="M-5 0L-4 4M0 2L0 6M5 0L4 4" strokeWidth={1} opacity={0.7} />
    </g>
  );
}
function horn(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M-8 6C-14 0 -13 -8 -7 -12C-9 -6 -9 -1 -5 3Z" />
      <path d="M8 6C14 0 13 -8 7 -12C9 -6 9 -1 5 3Z" />
    </g>
  );
}
function crown(f: FeatureSpec, broken = false) {
  return (
    <g transform={t(f)}>
      <path d={broken ? 'M-10 4L-10 -3L-5 1L0 -6L5 0' : 'M-10 4L-10 -4L-5 0L0 -7L5 0L10 -4L10 4Z'} fill={f.c} stroke={f.c} strokeWidth={1} strokeLinejoin="round" />
      {!broken && <circle cx={0} cy={-1.5} r={1.4} fill={f.c2 ?? '#1a1410'} opacity={0.6} />}
    </g>
  );
}
function cloth(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.95}>
      <path d="M-12 -10C-6 -13 6 -13 12 -10C15 -2 13 8 10 16C6 13 4 17 0 14C-4 17 -6 13 -10 16C-13 8 -15 -2 -12 -10Z" />
      {f.c2 && <path d="M-12 -10C-6 -13 6 -13 12 -10C13 -6 13 -1 12 4L-12 4C-13 -1 -13 -6 -12 -10Z" fill={f.c2} opacity={0.4} />}
    </g>
  );
}
function chain(f: FeatureSpec, n = 4) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <ellipse key={i} cx={-9 + i * 6} cy={i * i * 0.7} rx={3.4} ry={2.4} fill="none" stroke={f.c} strokeWidth={1.6} transform={`rotate(${20 + i * 8} ${-9 + i * 6} ${i * i * 0.7})`} />
      ))}
    </g>
  );
}
function rope(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2.2} fill="none" strokeLinecap="round">
      <path d="M-12 0C-6 5 0 -5 12 0" />
      <circle cx={12} cy={0} r={2.4} strokeWidth={1.6} />
    </g>
  );
}
function lock(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.8}>
      <rect x={-5} y={-1} width={10} height={8} rx={1.5} />
      <path d="M-3 -1V-4a3 3 0 0 1 6 0V-1" />
      <circle cy={3} r={1.2} fill={f.c} stroke="none" />
    </g>
  );
}
function keyIcon(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.8} strokeLinecap="round">
      <circle r={4} />
      <path d="M3 3L11 11M8 8L11 5M10 10L13 7" />
    </g>
  );
}
function seal(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <circle r={5.5} fill={f.c} opacity={0.95} />
      <circle r={3} fill="none" stroke={f.c2 ?? '#1a1410'} strokeWidth={1} opacity={0.5} />
    </g>
  );
}
function coin(f: FeatureSpec, n = 3) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <g key={i} transform={`translate(${-8 + i * 8} ${i % 2 ? 3 : 0})`}>
          <circle r={4} fill={f.c} />
          <rect x={-1.6} y={-1.6} width={3.2} height={3.2} fill={f.c2 ?? '#1a1410'} opacity={0.55} />
        </g>
      ))}
    </g>
  );
}
function balance(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.6} strokeLinecap="round">
      <path d="M0 -8V8M-8 -8H8M0 8H-5M0 8H5" />
      <path d="M-8 -8L-11 -2M-8 -8L-5 -2M-8 -2A3 3 0 0 0 -2 -2" opacity={0.9} />
      <path d="M8 -8L5 -2M8 -8L11 -2M11 -2A3 3 0 0 1 5 -2" opacity={0.9} />
    </g>
  );
}
function cup(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-5 -6H5C5 0 3 3 0 3C-3 3 -5 0 -5 -6Z" fill={f.c} />
      <path d="M0 3V8M-3 8H3" stroke={f.c} strokeWidth={1.6} fill="none" strokeLinecap="round" />
    </g>
  );
}
function bowl(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-8 -2C-8 5 8 5 8 -2Z" fill={f.c} />
      <ellipse cy={-2} rx={8} ry={2} fill={f.c2 ?? '#1a1410'} opacity={0.5} />
    </g>
  );
}
function cauldron(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-8 -4C-9 4 -5 8 0 8C5 8 9 4 8 -4Z" fill={f.c} />
      <ellipse cy={-4} rx={8} ry={2.4} fill={f.c2 ?? '#1a1410'} />
      <path d="M-9 -4H9" stroke={f.c} strokeWidth={1.6} />
    </g>
  );
}
function jar(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-5} y={-4} width={10} height={11} rx={3} fill={f.c} />
      <rect x={-3.4} y={-7} width={6.8} height={3.4} rx={1} fill={f.c2 ?? '#1a1410'} opacity={0.7} />
    </g>
  );
}
function crate(f: FeatureSpec, n = 2) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <g key={i} transform={`translate(${-9 + i * 10} ${i % 2 ? 2 : -2}) rotate(${i % 2 ? -6 : 4})`}>
          <rect x={-5} y={-5} width={10} height={10} fill={f.c} />
          <path d="M-5 -5L5 5M5 -5L-5 5" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.9} opacity={0.5} />
        </g>
      ))}
    </g>
  );
}
function sack(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-7 -3C-9 6 9 6 7 -3C5 -8 -5 -8 -7 -3Z" fill={f.c} />
      <path d="M-3 -7C-1 -9 1 -9 3 -7" stroke={f.c2 ?? '#1a1410'} strokeWidth={1.6} fill="none" />
    </g>
  );
}
function staff(f: FeatureSpec, head: 'blade' | 'cross' | 'orb' | 'sickle' | 'trident' | 'bell' | 'hammer' | 'lantern' | 'crook' | 'rod' = 'rod') {
  const heads: Record<string, ReactNode> = {
    blade: <path d="M0 -14L3 -6L0 2L-3 -6Z" fill={f.c} />,
    cross: <path d="M-6 -12H6M0 -16V-6" stroke={f.c} strokeWidth={2.4} strokeLinecap="round" />,
    orb: <circle cy={-12} r={4} fill={f.c} />,
    sickle: <path d="M-8 -14C-2 -16 6 -12 8 -6C3 -9 -3 -10 -8 -14Z" fill={f.c} />,
    trident: <path d="M0 -16V-6M-6 -14V-8C-4 -6 4 -6 6 -8V-14" stroke={f.c} strokeWidth={1.8} fill="none" strokeLinecap="round" />,
    bell: <path d="M-4 -8C-4 -15 4 -15 4 -8L5 -5H-5Z" fill={f.c} />,
    hammer: <rect x={-4} y={-16} width={8} height={7} fill={f.c} />,
    lantern: (
      <g>
        <rect x={-3.4} y={-15} width={6.8} height={8} rx={2} fill="none" stroke={f.c} strokeWidth={1.4} />
        <circle cy={-11} r={1.8} fill={f.c} />
      </g>
    ),
    crook: <path d="M0 -6V-12C0 -16 5 -16 6 -13" stroke={f.c} strokeWidth={2.4} fill="none" strokeLinecap="round" />,
    rod: <circle cy={-14} r={2.2} fill={f.c} />,
  };
  return (
    <g transform={t(f)}>
      <path d="M0 16V-6" stroke={f.c2 ?? f.c} strokeWidth={2.6} strokeLinecap="round" />
      {heads[head]}
    </g>
  );
}
function blade(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 -16L3.4 -8L2 8L-2 8L-3.4 -8Z" fill={f.c} />
      <path d="M-5 8H5M0 8V13" stroke={f.c2 ?? '#8a7350'} strokeWidth={1.8} strokeLinecap="round" />
    </g>
  );
}
function hammer(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 16V-8" stroke={f.c2 ?? '#8a7350'} strokeWidth={2.6} strokeLinecap="round" />
      <rect x={-6} y={-15} width={12} height={8} rx={1.4} fill={f.c} />
    </g>
  );
}
function axe(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 16V-12" stroke={f.c2 ?? '#8a7350'} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M0 -14C6 -13 9 -8 9 -3C5 -6 2 -7 0 -7Z" fill={f.c} />
    </g>
  );
}
function scythe(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M2 16L-2 -12" stroke={f.c2 ?? '#8a7350'} strokeWidth={2.2} strokeLinecap="round" />
      <path d="M-2 -12C-10 -14 -16 -10 -18 -2C-12 -8 -6 -8 -2 -6Z" fill={f.c} />
    </g>
  );
}
function bow(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={2}>
      <path d="M-4 -12C6 -6 6 6 -4 12" strokeLinecap="round" />
      <path d="M-4 -12L-4 12" strokeWidth={0.8} opacity={0.7} />
      <path d="M-4 0L5 0M3.6 -1.6L5 0L3.6 1.6" strokeWidth={1.4} />
    </g>
  );
}
function shield(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 -11C6 -9 9 -8 9 -4C9 3 5 8 0 11C-5 8 -9 3 -9 -4C-9 -8 -6 -9 0 -11Z" fill={f.c} stroke={f.c2 ?? '#1a1410'} strokeWidth={1} opacity={0.95} />
      <path d="M0 -6V5M-4 -2H4" stroke={f.c2 ?? '#1a1410'} strokeWidth={1} opacity={0.5} />
    </g>
  );
}
function bellIcon(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-6 4C-6 -6 6 -6 6 4L7 6H-7Z" fill={f.c} />
      <circle cy={8} r={1.8} fill={f.c} />
      <path d="M-9 -8A10 10 0 0 1 9 -8" stroke={f.c2 ?? f.c} strokeWidth={1} fill="none" opacity={0.5} />
    </g>
  );
}
function lantern(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-4} y={-7} width={8} height={11} rx={2.4} fill="none" stroke={f.c} strokeWidth={1.6} />
      <circle cy={-1.5} r={2.6} fill={f.c} opacity={0.95} />
      <path d="M0 -7V-10M-3 4H3" stroke={f.c} strokeWidth={1.4} />
    </g>
  );
}
function candle(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-2.4} y={-4} width={4.8} height={12} fill={f.c2 ?? '#e9e4d4'} />
      <path d="M0 -9C-2.4 -7 -1.6 -4.4 0 -3.4C1.6 -4.4 2.4 -7 0 -9Z" fill={f.c} />
    </g>
  );
}
function gear(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <circle r={6} />
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={-1.4} y={-9.4} width={2.8} height={4} transform={`rotate(${i * 45})`} />
      ))}
      <circle r={2.4} fill={f.c2 ?? '#1a1410'} opacity={0.6} />
    </g>
  );
}
function orb(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <circle r={6.4} fill={f.c} opacity={0.95} />
      <circle r={6.4} fill="none" stroke={f.c2 ?? f.c} strokeWidth={1} opacity={0.5} transform="translate(0 1)" />
      <circle cx={-2} cy={-2.4} r={1.6} fill="#fff" opacity={0.5} />
    </g>
  );
}
function rune(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.4} fill="none" strokeLinecap="round" opacity={0.95}>
      <path d="M-3 -7L-3 7L3 -7L3 7M-3 0H3" />
    </g>
  );
}
function runeRow(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      {[-10, 0, 10].map((x, i) => (
        <g key={i} transform={`translate(${x} ${i % 2 ? 1 : -1})`} stroke={f.c} strokeWidth={1.2} fill="none" opacity={0.9}>
          {i === 0 && <path d="M-2.6 -5L-2.6 5L2.6 -5L2.6 5" />}
          {i === 1 && <path d="M0 -5V5M-3 -3H3M-3 3H3" />}
          {i === 2 && <path d="M-2.6 -5L2.6 5M2.6 -5L-2.6 5" />}
        </g>
      ))}
    </g>
  );
}
function book(f: FeatureSpec, n = 2) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <g key={i} transform={`translate(${-7 + i * 9} ${i % 2 ? 3 : -3}) rotate(${i % 2 ? 8 : -6})`}>
          <path d="M-5 -6H5V6H-5Z" fill={f.c} />
          <path d="M-5 0H5" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.9} opacity={0.5} />
          <path d="M-3 -3H3M-3 0H2M-3 3H3" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.6} opacity={0.45} />
        </g>
      ))}
    </g>
  );
}
function scroll(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-9} y={-5} width={18} height={10} fill={f.c} />
      <circle cx={-9} cy={0} r={5} fill={f.c} stroke={f.c2 ?? '#1a1410'} strokeWidth={0.8} />
      <circle cx={9} cy={0} r={5} fill={f.c} stroke={f.c2 ?? '#1a1410'} strokeWidth={0.8} />
      <path d="M-4 -2H4M-4 1H3" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.7} opacity={0.5} />
    </g>
  );
}
function quill(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeLinecap="round">
      <path d="M-8 10C-4 0 2 -8 8 -10" strokeWidth={1.8} />
      <path d="M-2 2L-6 0M2 -4L-2 -7M5 -8L2 -10" strokeWidth={1} opacity={0.7} />
      <path d="M-8 10L-9 13" strokeWidth={1.4} />
    </g>
  );
}
function inkBlot(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.9}>
      <path d="M0 -6C4 -7 7 -3 6 1C8 3 5 6 1 5C-3 7 -7 4 -6 0C-7 -4 -4 -6 0 -6Z" />
      <circle cx={8} cy={-6} r={1.4} />
      <circle cx={-8} cy={6} r={1.1} />
    </g>
  );
}
function drip(f: FeatureSpec, n = 3) {
  return (
    <g transform={t(f)} fill={f.c}>
      {Array.from({ length: n }, (_, i) => (
        <path key={i} d={`M${-7 + i * 7} 0C${-8.6 + i * 7} 3 ${-9 + i * 7} 5 ${-7 + i * 7} 6C${-5 + i * 7} 5 ${-5.4 + i * 7} 3 ${-7 + i * 7} 0Z`} opacity={0.85} />
      ))}
    </g>
  );
}
function drops(f: FeatureSpec, n = 3) {
  return (
    <g transform={t(f)} fill={f.c}>
      {Array.from({ length: n }, (_, i) => (
        <path key={i} d={`M${-8 + i * 8} ${i % 2 ? 4 : -2}C${-9.4 + i * 8} ${6 + (i % 2 ? 4 : -2)} ${-6.6 + i * 8} ${6 + (i % 2 ? 4 : -2)} ${-8 + i * 8} ${i % 2 ? 4 : -2}Z`} opacity={0.8} transform={`scale(1 1.6) translate(0 -2)`} />
      ))}
    </g>
  );
}
function bubbles(f: FeatureSpec, n = 4) {
  return (
    <g transform={t(f)} fill="none" stroke={f.c} strokeWidth={1.2} opacity={0.9}>
      {Array.from({ length: n }, (_, i) => (
        <circle key={i} cx={-8 + i * 6} cy={i % 2 ? -4 : 2} r={3.2 - i * 0.5} />
      ))}
    </g>
  );
}
function smoke(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.6} opacity={0.7} strokeLinecap="round">
      <path d="M-6 8C-8 4 -4 2 -6 -2C-8 -6 -4 -8 -5 -12" />
      <path d="M2 10C0 6 4 4 2 0C0 -4 4 -6 3 -10" opacity={0.7} />
    </g>
  );
}
function mist(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.6} opacity={0.6} strokeLinecap="round">
      <path d="M-14 0C-8 -3 -2 3 6 0C10 -1.6 13 0 14 1" />
      <path d="M-10 6C-4 3 2 9 10 6" opacity={0.7} />
    </g>
  );
}
function dust(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: 5 }, (_, i) => (
        <circle key={i} cx={-10 + i * 5} cy={2 - (i % 3) * 3} r={2.6 - (i % 3) * 0.7} fill={f.c} opacity={0.35 + (i % 3) * 0.15} />
      ))}
    </g>
  );
}
function waves(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.8} opacity={0.85} strokeLinecap="round">
      <path d="M-14 0C-9 -4 -5 4 0 0C5 -4 9 4 14 0" />
      <path d="M-11 6C-6 2 -2 8 3 4C7 1 10 5 12 3" opacity={0.6} />
    </g>
  );
}
function shell(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.4} opacity={0.9}>
      <path d="M0 8C-8 8 -12 0 -12 -4M0 8C-4 8 -8 0 -8 -6M0 8C0 8 0 -2 0 -8M0 8C4 8 8 0 8 -6M0 8C8 8 12 0 12 -4" />
      <path d="M-12 2H12" opacity={0.5} />
    </g>
  );
}
function scales(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.3} opacity={0.85}>
      {[-9, -3, 3, 9].map((x, i) => (
        <path key={i} d={`M${x} 0A3 3 0 0 0 ${x + 6} 0`} />
      ))}
      {[-6, 0, 6].map((x, i) => (
        <path key={i} d={`M${x} 5A3 3 0 0 0 ${x + 6} 5`} opacity={0.7} />
      ))}
    </g>
  );
}
function bone(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={3} strokeLinecap="round" fill={f.c}>
      <path d="M-6 0H6" />
      <circle cx={-7} cy={-2.4} r={2} stroke="none" />
      <circle cx={-7} cy={2.4} r={2} stroke="none" />
      <circle cx={7} cy={-2.4} r={2} stroke="none" />
      <circle cx={7} cy={2.4} r={2} stroke="none" />
    </g>
  );
}
function skull(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-6 -2C-6 -8 6 -8 6 -2C6 2 4 4 4 6H-4C-4 4 -6 2 -6 -2Z" fill={f.c} />
      <circle cx={-2.4} cy={-2} r={1.6} fill={f.c2 ?? '#1a1410'} />
      <circle cx={2.4} cy={-2} r={1.6} fill={f.c2 ?? '#1a1410'} />
      <path d="M-1.4 4V7M0 4V7M1.4 4V7" stroke={f.c} strokeWidth={1} />
    </g>
  );
}
function ribs(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.8} opacity={0.9} strokeLinecap="round">
      {[-6, 0, 6].map((y, i) => (
        <path key={i} d={`M-9 ${y}C-4 ${y + 3} 4 ${y + 3} 9 ${y}`} />
      ))}
    </g>
  );
}
function column(f: FeatureSpec, broken = false) {
  return (
    <g transform={t(f)}>
      <rect x={-6} y={broken ? -12 : -18} width={12} height={broken ? 24 : 36} fill={f.c} />
      <path d="M-6 -8H6M-6 0H6M-6 8H6" stroke={f.c2 ?? '#1a1410'} strokeWidth={1} opacity={0.4} />
      {broken ? <path d="M-6 -12L-2 -16L2 -11L6 -14" fill="none" stroke={f.c} strokeWidth={2} /> : <rect x={-8} y={-20} width={16} height={4} fill={f.c} />}
      <rect x={-8} y={broken ? 12 : 18} width={16} height={4} fill={f.c} />
    </g>
  );
}
function dome(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-12 6A12 12 0 0 1 12 6Z" fill={f.c} />
      <path d="M-8 6C-8 0 -4 -2 0 -2C4 -2 8 0 8 6" fill="none" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.9} opacity={0.4} />
    </g>
  );
}
function arch(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={2.4}>
      <path d="M-10 12V-2A10 10 0 0 1 10 -2V12" />
      <path d="M-10 12H10" strokeWidth={1.4} opacity={0.6} />
    </g>
  );
}
function gate(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-14} y={-12} width={5} height={26} fill={f.c} />
      <rect x={9} y={-12} width={5} height={26} fill={f.c} />
      <rect x={-15} y={-16} width={30} height={5} fill={f.c} />
      <rect x={-9} y={-7} width={18} height={21} fill={f.c2 ?? '#1a1410'} opacity={0.55} />
      <path d="M0 -7V14M-9 3H9" stroke={f.c} strokeWidth={1} opacity={0.6} />
    </g>
  );
}
function throne(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-11 -12H11V14H-11Z" fill={f.c} opacity={0.9} />
      <path d="M-11 -12L-8 -16L-4 -12L0 -17L4 -12L8 -16L11 -12" fill={f.c} />
      <rect x={-7} y={-8} width={14} height={16} fill={f.c2 ?? '#1a1410'} opacity={0.4} />
      <path d="M-14 14H14" stroke={f.c} strokeWidth={2} />
    </g>
  );
}
function steps(f: FeatureSpec, broken = false) {
  return (
    <g transform={t(f)} fill={f.c}>
      <rect x={-12} y={4} width={24} height={5} />
      <rect x={-8} y={-2} width={16} height={5} opacity={0.85} />
      <rect x={-4} y={-8} width={8} height={5} opacity={0.7} />
      {broken && <path d="M-12 9L-4 4L2 9L10 3" fill="none" stroke={f.c} strokeWidth={2} />}
    </g>
  );
}
function boat(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-14 -4C-8 4 8 4 14 -4C8 1 -8 1 -14 -4Z" fill={f.c} />
      <path d="M0 -4V-12" stroke={f.c2 ?? f.c} strokeWidth={1.6} />
    </g>
  );
}
function oar(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 -14L0 12" stroke={f.c2 ?? '#8a7350'} strokeWidth={2.4} strokeLinecap="round" />
      <ellipse cx={0} cy={14} rx={3} ry={5} fill={f.c} />
    </g>
  );
}
function anchor(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={2} strokeLinecap="round">
      <circle cy={-8} r={2.6} />
      <path d="M0 -5V8M-7 -2H7M0 8C-4 8 -7 5 -8 2M0 8C4 8 7 5 8 2" />
    </g>
  );
}
function hook(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={2} strokeLinecap="round">
      <path d="M0 -12V4A5 5 0 0 0 9 4" />
      <path d="M-3 -12H3" />
    </g>
  );
}
function whip(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2} fill="none" strokeLinecap="round">
      <path d="M-12 -6C-4 2 4 -10 12 -4C8 0 6 2 6 6" />
      <path d="M4 -8L10 -12M-6 2L-10 0" strokeWidth={1.2} opacity={0.7} />
    </g>
  );
}
function quiver(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-4 10L-7 -10M0 11L0 -13M4 10L7 -10" stroke={f.c2 ?? '#8a7350'} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M-8 -12L-7 -10M0 -15L0 -13M8 -12L7 -10" stroke={f.c} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M-6 2C-2 4 2 4 6 2" stroke={f.c} strokeWidth={1.2} fill="none" />
    </g>
  );
}
function mask(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-7 -6C-3 -8 3 -8 7 -6C7 0 4 6 0 7C-4 6 -7 0 -7 -6Z" fill={f.c} />
      <ellipse cx={-2.6} cy={-2} rx={1.6} ry={2.2} fill={f.c2 ?? '#1a1410'} />
      <ellipse cx={2.6} cy={-2} rx={1.6} ry={2.2} fill={f.c2 ?? '#1a1410'} />
    </g>
  );
}
function hood(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M0 -10C7 -10 10 -4 9 2C6 0 4 -2 0 -2C-4 -2 -6 0 -9 2C-10 -4 -7 -10 0 -10Z" />
      <path d="M0 -2C-3 -2 -5 0 -6 3C-3 1 3 1 6 3C5 0 3 -2 0 -2Z" fill={f.c2 ?? '#1a1410'} opacity={0.7} />
    </g>
  );
}
function bandage(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2.6} opacity={0.9} strokeLinecap="round">
      <path d="M-10 -6L10 2M-10 2L10 10M-10 8L4 14" />
    </g>
  );
}
function tatter(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.85}>
      <path d="M-12 0L-8 8L-4 1L0 9L4 1L8 7L12 0Z" />
    </g>
  );
}
function beads(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: 5 }, (_, i) => (
        <circle key={i} cx={-8 + i * 4} cy={Math.sin(i) * 3} r={2.2} fill={i % 2 ? (f.c2 ?? f.c) : f.c} />
      ))}
    </g>
  );
}
function plume(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M0 8C-1 0 -1 -6 2 -12C4 -6 4 0 2 8Z" />
      <path d="M-3 8C-5 2 -6 -2 -5 -8C-3 -4 -2 2 -2 8Z" opacity={0.7} />
      <path d="M4 8C5 2 6 -2 5 -7C3 -3 3 3 2 8Z" opacity={0.8} />
    </g>
  );
}
function tusk(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M-5 6C-7 -2 -3 -8 1 -9C-2 -5 -2 1 0 6Z" />
      <path d="M5 6C7 -2 3 -8 -1 -9C2 -5 2 1 0 6Z" />
    </g>
  );
}
function ear(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-4 6C-8 0 -7 -6 -2 -8C0 -4 0 2 -1 6Z" fill={f.c} />
      <path d="M4 6C8 0 7 -6 2 -8C0 -4 0 2 1 6Z" fill={f.c} opacity={0.9} />
    </g>
  );
}
function boots(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M-9 -6H-3V4H-12L-9 -1Z" />
      <path d="M3 -6H9V4H12L9 -1Z" transform="translate(-3 0)" />
    </g>
  );
}
function claw(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-8 6C-10 -2 -6 -8 0 -8C4 -8 7 -5 8 0" stroke={f.c2 ?? f.c} strokeWidth={3.4} fill="none" strokeLinecap="round" />
      {[-7, -1, 5].map((x, i) => (
        <path key={i} d={`M${x} ${-6 + i * 2}L${x + 3} ${-11 + i * 2}`} stroke={f.c} strokeWidth={1.8} strokeLinecap="round" />
      ))}
    </g>
  );
}
function paw(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <ellipse rx={4.4} ry={3.4} />
      {[-6, 0, 6].map((x, i) => (
        <circle key={i} cx={x} cy={-4} r={1.6} />
      ))}
    </g>
  );
}
function hand(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-6 6C-8 0 -6 -4 0 -4C5 -4 7 0 6 4" stroke={f.c} strokeWidth={3} fill="none" strokeLinecap="round" />
      {[-5, -1, 3].map((x, i) => (
        <path key={i} d={`M${x - 1} -4L${x - 2} -9`} stroke={f.c} strokeWidth={1.6} strokeLinecap="round" />
      ))}
    </g>
  );
}
function face(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <circle cx={-4} cy={-2} r={1.8} fill={f.c} />
      <circle cx={4} cy={-2} r={1.8} fill={f.c} />
      <path d="M-3 4C-1 5.5 1 5.5 3 4" stroke={f.c} strokeWidth={1.2} fill="none" />
    </g>
  );
}
function brow(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2.2} strokeLinecap="round">
      <path d="M-9 -3L-2 0M9 -3L2 0" />
    </g>
  );
}
function grin(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.8} fill="none" strokeLinecap="round">
      <path d="M-8 -1C-4 5 4 5 8 -1" />
      <path d="M-4 2V5M0 3V6M4 2V5" strokeWidth={1.1} />
    </g>
  );
}
function cloud(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.85}>
      <path d="M-10 4A5 5 0 0 1 -6 -4A6 6 0 0 1 5 -5A5 5 0 0 1 10 4Z" />
    </g>
  );
}
function crystal(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.4} fill={f.c} fillOpacity={0.25}>
      <path d="M0 -9L4 -2L0 9L-4 -2Z" />
      <path d="M0 -9V9M-4 -2H4" fill="none" strokeWidth={0.8} opacity={0.6} />
    </g>
  );
}
function star(f: FeatureSpec, n = 3) {
  const d = 'M0 -5L1.4 -1.4L5 0L1.4 1.4L0 5L-1.4 1.4L-5 0L-1.4 -1.4Z';
  return (
    <g transform={t(f)} fill={f.c}>
      <path d={d} />
      {n > 1 && (
        <>
          <path d={d} transform="translate(10 -6) scale(0.55)" opacity={0.8} />
          <path d={d} transform="translate(-9 6) scale(0.45)" opacity={0.6} />
        </>
      )}
    </g>
  );
}
function moon(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M2 -8A8 8 0 1 0 2 8A6.4 6.4 0 1 1 2 -8Z" />
    </g>
  );
}
function sun(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.6} strokeLinecap="round">
      <circle r={5.4} fill={f.c} fillOpacity={0.35} />
      {Array.from({ length: 8 }, (_, i) => (
        <path key={i} d={`M${8 * Math.cos((i * Math.PI) / 4)} ${8 * Math.sin((i * Math.PI) / 4)}L${11 * Math.cos((i * Math.PI) / 4)} ${11 * Math.sin((i * Math.PI) / 4)}`} />
      ))}
    </g>
  );
}
function leaf(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M0 8C-7 4 -7 -4 0 -8C7 -4 7 4 0 8Z" />
      <path d="M0 7V-6" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.9} opacity={0.4} />
    </g>
  );
}
function vine(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.8} fill="none" strokeLinecap="round">
      <path d="M-12 6C-6 -2 0 8 6 0C8 -3 11 -4 13 -8" />
      <path d="M-6 -1C-7 -4 -6 -6 -4 -7M3 2C4 -1 3 -3 5 -4" strokeWidth={1} opacity={0.7} />
    </g>
  );
}
function roots(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2} fill="none" strokeLinecap="round">
      <path d="M0 0C-2 6 -8 9 -11 12M0 0C0 7 2 10 1 13M0 0C3 5 9 8 12 9" />
    </g>
  );
}
function flower(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} rx={2.6} ry={5} fill={f.c} transform={`rotate(${a}) translate(0 -5)`} />
      ))}
      <circle r={2.2} fill={f.c2 ?? '#f0cd7d'} />
    </g>
  );
}
function mushroom(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-2.4} y={0} width={4.8} height={7} rx={1.4} fill={f.c2 ?? '#e9e4d4'} />
      <path d="M-7 1A7 6 0 0 1 7 1Z" fill={f.c} />
      <circle cx={-2.6} cy={-2.4} r={1} fill={f.c2 ?? '#e9e4d4'} opacity={0.7} />
      <circle cx={2.8} cy={-1} r={0.8} fill={f.c2 ?? '#e9e4d4'} opacity={0.7} />
    </g>
  );
}
function spores(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      {Array.from({ length: 6 }, (_, i) => (
        <circle key={i} cx={10 * Math.cos((i * Math.PI) / 3)} cy={7 * Math.sin((i * Math.PI) / 3)} r={1.6} opacity={0.6 + (i % 3) * 0.15} />
      ))}
    </g>
  );
}
function moss(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.9}>
      <path d="M-11 4C-10 -1 -6 -4 -3 -1C-2 -5 3 -6 4 -2C8 -4 11 -1 10 4Z" />
      <circle cx={-6} cy={2} r={1.4} opacity={0.6} />
      <circle cx={2} cy={1} r={1.2} opacity={0.6} />
    </g>
  );
}
function petal(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M0 0C-6 -2 -8 -8 -4 -12C0 -10 2 -4 0 0Z" />
      <path d="M0 0C6 -2 8 -8 4 -12C0 -10 -2 -4 0 0Z" opacity={0.7} />
    </g>
  );
}
function bolt(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M2 -10L-5 1H-1L-3 10L5 -1H1Z" />
    </g>
  );
}
function spark(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.6} strokeLinecap="round">
      {Array.from({ length: 4 }, (_, i) => (
        <path key={i} d={`M${-6 + i * 4} -3L${-4 + i * 4} 0L${-6 + i * 4} 3`} opacity={0.5 + i * 0.15} />
      ))}
    </g>
  );
}
function gauge(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <circle r={6.4} fill="none" stroke={f.c} strokeWidth={1.6} />
      <path d="M0 0L3.4 -4" stroke={f.c} strokeWidth={1.6} strokeLinecap="round" />
      <circle r={1.2} fill={f.c} />
    </g>
  );
}
function visor(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-9} y={-3} width={18} height={6} rx={3} fill={f.c} opacity={0.9} />
      <path d="M-6 0H6" stroke="#fff" strokeWidth={1} opacity={0.5} />
    </g>
  );
}
function reticle(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.4} fill="none">
      <circle r={8} />
      <path d="M-11 0H-5M5 0H11M0 -11V-5M0 5V11" />
      <circle r={1.4} fill={f.c} />
    </g>
  );
}
function screen(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-8} y={-6} width={16} height={12} rx={1.4} fill="none" stroke={f.c} strokeWidth={1.4} />
      <path d="M-5 -2H5M-5 1H3M-5 4H4" stroke={f.c} strokeWidth={0.9} opacity={0.7} />
    </g>
  );
}
function stripe(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-11} y={-2} width={22} height={4} rx={2} fill={f.c} opacity={0.9} />
      <rect x={-11} y={-2} width={10} height={4} rx={2} fill="#fff" opacity={0.3} />
    </g>
  );
}
function led(f: FeatureSpec, n = 3) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <circle key={i} cx={-6 + i * 6} r={1.8} fill={f.c} opacity={i === 0 ? 1 : 0.55} />
      ))}
    </g>
  );
}
function thruster(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-4 -6H4L5 0L0 10L-5 0Z" fill={f.c} opacity={0.9} />
      <path d="M-2 -4H2L3 0L0 6L-3 0Z" fill={f.c2 ?? '#fff'} opacity={0.7} />
    </g>
  );
}
function pipe(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={3} strokeLinecap="round">
      <path d="M-10 -8V4A6 6 0 0 0 -4 10H10" />
      <path d="M-10 0H-6" strokeWidth={1.4} opacity={0.6} />
    </g>
  );
}
function windmill(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <circle r={2.4} />
      {[45, 135, 225, 315].map((a) => (
        <path key={a} d="M0 0L13 -3L14 3Z" transform={`rotate(${a})`} opacity={0.9} />
      ))}
    </g>
  );
}
function propeller(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2} fill="none" opacity={0.8} strokeLinecap="round">
      <circle r={9} strokeDasharray="4 5" />
      <circle r={2} fill={f.c} stroke="none" />
    </g>
  );
}
function echo(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      {[2.6, 5.2, 7.8].map((o, i) => (
        <path key={i} d={`M${-o} 6C${-o - 2} -2 ${-o + 4} -6 0 -6C${o - 4} -6 ${o + 2} -2 ${o} 6Z`} fill="none" stroke={f.c} strokeWidth={1.4} opacity={0.7 - i * 0.2} />
      ))}
    </g>
  );
}
function shadow(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.55}>
      <path d="M-9 8C-11 -2 -6 -9 0 -9C6 -9 11 -2 9 8Z" />
    </g>
  );
}
function glowDot(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <circle r={7} fill={f.c} opacity={0.18} />
      <circle r={3.6} fill={f.c} opacity={0.8} />
    </g>
  );
}
function wall(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-10 -12H10V12H-10Z" fill="none" stroke={f.c} strokeWidth={2} opacity={0.85} />
      <path d="M-10 -4H10M-10 4H10M-5 -12V-4M5 -4V4M-5 4V12" stroke={f.c} strokeWidth={0.9} opacity={0.5} />
    </g>
  );
}
function fist(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-6 -6H5C9 -6 11 -2 10 2C11 6 7 9 3 8H-5C-8 8 -9 4 -8 1Z" fill={f.c} />
      <path d="M-4 -3H4M-4 0H4M-4 3H3" stroke={f.c2 ?? '#1a1410'} strokeWidth={1} opacity={0.4} />
    </g>
  );
}
function eyeIcon(f: FeatureSpec, n = 2, slit = false) {
  return (
    <g transform={t(f)}>
      {Array.from({ length: n }, (_, i) => (
        <g key={i} transform={`translate(${-5 + i * 10} 0)`}>
          <circle r={2.6} fill={f.c} />
          {slit && <rect x={-0.7} y={-2.6} width={1.4} height={5.2} fill={f.c2 ?? '#1a1410'} />}
          <circle r={2.6} fill="none" stroke={f.c} strokeWidth={0.8} opacity={0.5} />
        </g>
      ))}
    </g>
  );
}
function dot(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <circle r={2.6} opacity={0.9} />
      <circle cx={6} cy={-4} r={1.4} opacity={0.6} />
    </g>
  );
}
function straw(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.4} fill="none" strokeLinecap="round">
      <path d="M0 8L-4 -8M0 8L1 -10M0 8L6 -7M0 8L-8 -3" />
    </g>
  );
}
function hat(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <ellipse rx={11} ry={3.4} />
      <path d="M-6 -1C-6 -8 6 -8 6 -1Z" />
      <path d="M-6 -2C-2 1 2 1 6 -2" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.9} fill="none" opacity={0.5} />
    </g>
  );
}
function helm(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-8 6C-9 -4 -4 -9 0 -9C4 -9 9 -4 8 6Z" fill={f.c} />
      <path d="M-6 0H6" stroke={f.c2 ?? '#1a1410'} strokeWidth={1.8} opacity={0.7} />
    </g>
  );
}
function post(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 14V-12" stroke={f.c} strokeWidth={3} strokeLinecap="round" />
      <path d="M-8 -6H8" stroke={f.c} strokeWidth={2.4} strokeLinecap="round" opacity={0.85} />
    </g>
  );
}
function vent(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.4} opacity={0.85}>
      {[-6, 0, 6].map((x, i) => (
        <path key={i} d={`M${x} 6V-2M${x} -2C${x - 2} -5 ${x + 2} -7 ${x} -9`} strokeLinecap="round" fill="none" />
      ))}
    </g>
  );
}
function blood(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M-8 -4C-10 2 -6 5 -4 8C-2 4 1 5 2 9C4 5 8 3 7 -3C6 -8 -4 -8 -8 -4Z" opacity={0.9} />
      <circle cx={10} cy={6} r={1.6} opacity={0.7} />
    </g>
  );
}
function mud(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.9}>
      <path d="M-10 2C-8 -4 -2 -5 1 -2C5 -6 10 -2 9 3C12 5 8 8 5 7C2 10 -6 9 -7 6C-10 7 -11 4 -10 2Z" />
    </g>
  );
}
function pool(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <ellipse rx={13} ry={3.6} fill={f.c} opacity={0.75} />
      <ellipse rx={13} ry={3.6} fill="none" stroke={f.c} strokeWidth={0.8} opacity={0.4} />
    </g>
  );
}
function mail(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={0.9} opacity={0.8}>
      {Array.from({ length: 4 }, (_, r) =>
        Array.from({ length: 5 }, (_, c) => <circle key={`${r}-${c}`} cx={-8 + c * 4 + (r % 2) * 2} cy={-6 + r * 4} r={1.5} />)
      )}
    </g>
  );
}
function plate(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-10 -8H10L12 6L0 10L-12 6Z" fill={f.c} />
      <path d="M-10 -8H10" stroke={f.c2 ?? '#1a1410'} strokeWidth={1} opacity={0.4} />
    </g>
  );
}
function patch(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <rect x={-6} y={-5} width={12} height={10} fill={f.c} opacity={0.85} transform="rotate(-6)" />
      <path d="M-4 -2H4M-4 2H3" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.8} opacity={0.5} transform="rotate(-6)" />
    </g>
  );
}
function pelt(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c} opacity={0.9}>
      <path d="M-12 -8C-4 -11 6 -11 12 -8L10 10C6 8 4 12 0 9C-4 12 -6 8 -10 10Z" />
      <path d="M-10 9L-8 13M-4 10L-3 14M3 9L4 13M9 8L10 12" stroke={f.c} strokeWidth={1.6} />
    </g>
  );
}
function fluke(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M0 0C8 -8 16 -10 22 -8C17 -4 15 0 14 5C12 1 8 -1 0 0Z" />
    </g>
  );
}
function pincer(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={2.6} fill="none" strokeLinecap="round">
      <path d="M0 0C-6 -2 -9 -7 -8 -11" />
      <path d="M0 0C-7 1 -11 0 -13 -4" />
    </g>
  );
}
function flume(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.4} opacity={0.8}>
      <circle r={5} />
      <circle r={9} opacity={0.5} />
      <circle r={13} opacity={0.25} />
    </g>
  );
}
function icicle(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M-6 -8H6L2 8L0 4L-2 8Z" opacity={0.9} />
    </g>
  );
}
function fur(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.4} strokeLinecap="round" opacity={0.9}>
      <path d="M-10 2L-12 -4M-5 3L-7 -3M0 3L-1 -4M5 3L7 -3M10 2L12 -4" />
    </g>
  );
}
function mane(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M-11 6C-13 -2 -9 -9 -2 -10C-6 -6 -7 -1 -6 4Z" />
      <path d="M11 6C13 -2 9 -9 2 -10C6 -6 7 -1 6 4Z" />
    </g>
  );
}
function beard(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.6} strokeLinecap="round">
      <path d="M-7 -4C-6 2 -4 6 -3 9M0 -4C0 2 0 6 0 10M7 -4C6 2 4 6 3 9" />
    </g>
  );
}
function hair(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.6} fill="none" strokeLinecap="round">
      <path d="M-8 4C-11 -3 -8 -9 -1 -10C-6 -7 -7 -2 -5 3M8 4C11 -3 8 -9 1 -10C6 -7 7 -2 5 3" />
    </g>
  );
}
function nose(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <ellipse rx={3} ry={2.4} />
      <circle cx={-1} cy={-0.5} r={0.7} fill="#1a1410" opacity={0.5} />
      <circle cx={1} cy={-0.5} r={0.7} fill="#1a1410" opacity={0.5} />
    </g>
  );
}
function cheek(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} strokeWidth={1.2} opacity={0.8}>
      <circle cx={-6} cy={0} r={1.6} fill="none" />
      <circle cx={6} cy={0} r={1.6} fill="none" />
      <circle cx={0} cy={-5} r={1.2} fill="none" opacity={0.6} />
    </g>
  );
}
function eyeSlitIcon(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <rect x={-8} y={-1.6} width={7} height={3.2} rx={1.6} />
      <rect x={1} y={-1.6} width={7} height={3.2} rx={1.6} />
    </g>
  );
}
function buttonEyes(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      {[-5.5, 5.5].map((x, i) => (
        <g key={i}>
          <circle cx={x} r={3.2} fill={f.c} />
          <circle cx={x} r={3.2} fill="none" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.8} opacity={0.6} />
          <path d={`M${x - 1.6} -1.6L${x + 1.6} 1.6M${x + 1.6} -1.6L${x - 1.6} 1.6`} stroke={f.c2 ?? '#1a1410'} strokeWidth={0.8} />
        </g>
      ))}
    </g>
  );
}

function tongue(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M0 -4C-3 -2 -4 2 -3 6C-2 9 0 10 1 8C2 6 3 4 4 6C5 9 3 10 2 10C4 11 6 9 6 6C7 2 5 -2 2 -4Z" />
      <path d="M-1 4V8" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.8} opacity={0.6} />
    </g>
  );
}
function ribcage(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.6} strokeLinecap="round">
      <path d="M0 -10V10" strokeWidth={2.2} />
      {[-8, -4, 0, 4, 8].map((y, i) => (
        <g key={i}>
          <path d={`M0 ${y}C-4 ${y - 1} -8 ${y + 1} -10 ${y + 3}`} />
          <path d={`M0 ${y}C4 ${y - 1} 8 ${y + 1} 10 ${y + 3}`} />
        </g>
      ))}
      {f.c2 && <path d="M-6 -4C-4 -6 4 -6 6 -4" stroke={f.c2} strokeWidth={1} opacity={0.5} />}
    </g>
  );
}
function tendons(f: FeatureSpec) {
  return (
    <g transform={t(f)} stroke={f.c} fill="none" strokeWidth={1.4} opacity={0.85} strokeLinecap="round">
      <path d="M-8 8C-6 2 -2 -4 0 -8" />
      <path d="M-4 9C-2 4 2 -2 4 -7" />
      <path d="M2 10C4 5 7 0 8 -6" />
      {f.c2 && <path d="M-6 4C-2 2 2 4 6 2" stroke={f.c2} strokeWidth={0.9} opacity={0.5} />}
    </g>
  );
}
function flail(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 14V4" stroke={f.c2 ?? '#8a7350'} strokeWidth={2.4} strokeLinecap="round" />
      {[0, 1, 2, 3].map((i) => (
        <ellipse key={i} cx={0} cy={4 - i * 4} rx={2.4} ry={1.8} fill="none" stroke={f.c} strokeWidth={1.4} transform={`rotate(${i * 12})`} />
      ))}
      <circle cy={-14} r={5} fill={f.c} />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle key={a} cx={5 * Math.cos((a * Math.PI) / 180)} cy={-14 + 5 * Math.sin((a * Math.PI) / 180)} r={1.4} fill={f.c2 ?? '#1a1410'} />
      ))}
    </g>
  );
}
function pauldron(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M-10 2C-10 -6 -4 -10 0 -10C4 -10 10 -6 10 2C8 6 4 8 0 8C-4 8 -8 6 -10 2Z" fill={f.c} />
      <path d="M-8 0C-4 -4 4 -4 8 0" stroke={f.c2 ?? '#1a1410'} strokeWidth={1} opacity={0.5} />
      <path d="M-6 4C-2 2 2 2 6 4" stroke={f.c2 ?? '#1a1410'} strokeWidth={0.8} opacity={0.4} />
      <circle cy={-6} r={1.8} fill={f.c2 ?? '#1a1410'} opacity={0.6} />
    </g>
  );
}
function pentagram(f: FeatureSpec) {
  const r = 9;
  const pts = Array.from({ length: 5 }, (_, i) => {
    const a = ((i * 72 - 90) * Math.PI) / 180;
    return [r * Math.cos(a), r * Math.sin(a)] as [number, number];
  });
  const starPath = `M${pts[0][0]} ${pts[0][1]}L${pts[2][0]} ${pts[2][1]}L${pts[4][0]} ${pts[4][1]}L${pts[1][0]} ${pts[1][1]}L${pts[3][0]} ${pts[3][1]}Z`;
  return (
    <g transform={t(f)}>
      <circle r={r + 2} fill="none" stroke={f.c} strokeWidth={1.2} opacity={0.6} />
      <path d={starPath} fill="none" stroke={f.c} strokeWidth={1.4} strokeLinejoin="round" opacity={0.9} />
      <circle r={2} fill={f.c2 ?? f.c} opacity={0.7} />
    </g>
  );
}
function antenna(f: FeatureSpec) {
  return (
    <g transform={t(f)}>
      <path d="M0 10V-6" stroke={f.c} strokeWidth={2} strokeLinecap="round" />
      <circle cy={-8} r={2.4} fill={f.c} />
      {[5, 9, 13].map((r, i) => (
        <path key={i} d={`M${-r * 0.6} ${-8 - r * 0.3}A${r} ${r} 0 0 1 ${r * 0.6} ${-8 - r * 0.3}`} fill="none" stroke={f.c2 ?? f.c} strokeWidth={1.2} opacity={0.7 - i * 0.2} />
      ))}
    </g>
  );
}
function barb(f: FeatureSpec) {
  return (
    <g transform={t(f)} fill={f.c}>
      <path d="M0 -10L3 -4L6 -6L4 0L8 2L2 4L0 10L-2 4L-8 2L-4 0L-6 -6L-3 -4Z" opacity={0.9} />
      {f.c2 && <circle r={2} fill={f.c2} opacity={0.6} />}
    </g>
  );
}

/** 语义调度：特征 id → 具体绘制 */
export function FeatureGlyph({ id, f }: { id: string; f: FeatureSpec }) {
  let node: ReactNode;
  if (id === 'vortexEye') node = (
    <g>
      <FeatureGlyph id="vortexCore" f={f} />
    </g>
  );
  else if (has(id, 'button')) node = buttonEyes(f);
  else if (has(id, 'slit', 'eyeSlit')) node = eyeSlitIcon(f);
  else if (has(id, 'eye', 'gaze', 'pit')) node = eyeIcon(f, 2);
  else if (has(id, 'vortex', 'maelstrom', 'swirl', 'coil', 'whirl', 'core')) node = flume(f);
  else if (has(id, 'ring', 'halo', 'orbit', 'aura', 'circle', 'ripple', 'hush', 'shimmer', 'throb', 'drift', 'toll', 'wobble')) node = ring(f, id.endsWith('Ring') || id.includes('dashed'));
  else if (has(id, 'siphon', 'satellite')) node = orbit(f);
  else if (has(id, 'candle')) node = candle(f);
  else if (has(id, 'flame', 'ember', 'scorch', 'smolder', 'burn', 'fireSigil', 'ignite', 'flames', 'flameCups')) node = flame(f, id.includes('Cups') || id.includes('flames') ? 3 : 1);
  else if (has(id, 'lamp', 'lantern', 'beacon')) node = lantern(f);
  else if (has(id, 'bell', 'chime', 'bells')) node = bellIcon(f);
  else if (has(id, 'wing')) node = wing(f);
  else if (has(id, 'plume')) node = plume(f);
  else if (has(id, 'feather', 'stream')) node = feather(f);
  else if (has(id, 'fluke')) node = fluke(f);
  else if (has(id, 'tail')) node = tail(f);
  else if (has(id, 'fang', 'tooth', 'tusks', 'tusk')) node = has(id, 'tusk') ? tusk(f) : fangs(f);
  else if (has(id, 'jaw')) node = jaw(f);
  else if (has(id, 'maw', 'mouth', 'grindHole', 'suck')) node = mouth(f);
  else if (has(id, 'horn', 'antlers', 'goreWing')) node = horn(f);
  else if (has(id, 'crown', 'tiara')) node = crown(f, id.includes('Broken') || id.includes('mute') || id.includes('tassel'));
  else if (has(id, 'crest', 'spines', 'spike', 'spine', 'ridge', 'finSpike', 'pupae', 'brow')) node = has(id, 'brow') ? brow(f) : spikes(f);
  else if (has(id, 'pelt')) node = pelt(f);
  else if (has(id, 'cloak', 'mantle', 'robe', 'cape', 'veil', 'coat', 'hem', 'skirt', 'weight')) node = cloth(f);
  else if (has(id, 'chain', 'links', 'lockDown')) node = chain(f, id.includes('Trial') ? 5 : 4);
  else if (has(id, 'rope', 'braid', 'knot', 'tether')) node = rope(f);
  else if (has(id, 'lockOn', 'reticle', 'target', 'lockEye', 'coordinate')) node = reticle(f);
  else if (has(id, 'lock')) node = lock(f);
  else if (has(id, 'key')) node = keyIcon(f);
  else if (has(id, 'seal')) node = seal(f);
  else if (has(id, 'coin', 'cash', 'tally')) node = coin(f, 3);
  else if (has(id, 'scale', 'brass')) node = has(id, 'brassScale') ? balance(f) : scales(f);
  else if (has(id, 'cup', 'goblet', 'chalice')) node = cup(f);
  else if (has(id, 'bowl')) node = bowl(f);
  else if (has(id, 'cauldron')) node = cauldron(f);
  else if (has(id, 'kettle', 'jar', 'vessel', 'pot')) node = jar(f);
  else if (has(id, 'crate', 'case', 'box')) node = crate(f, 2);
  else if (has(id, 'sack', 'saddle', 'bag')) node = sack(f);
  else if (has(id, 'staff', 'rod', 'oar', 'pole', 'wand', 'spear', 'lance', 'pike', 'scythe', 'halberd', 'crook', 'bow', 'quiver', 'halberd')) node = has(id, 'bow') ? bow(f) : has(id, 'quiver') ? quiver(f) : has(id, 'scythe') ? scythe(f) : has(id, 'oar') ? oar(f) : has(id, 'halberd', 'pike') ? staff(f, 'blade') : has(id, 'crook') ? staff(f, 'crook') : has(id, 'candle') ? staff(f, 'lantern') : has(id, 'bell') ? staff(f, 'bell') : has(id, 'orb', 'star', 'crown') ? staff(f, 'orb') : has(id, 'hammer', 'maul', 'mallet') ? staff(f, 'hammer') : staff(f, 'rod');
  else if (has(id, 'blade', 'sword', 'cleaver', 'saber')) node = blade(f);
  else if (has(id, 'maul', 'hammer', 'mallet', 'anvil')) node = hammer(f);
  else if (has(id, 'axe')) node = axe(f);
  else if (has(id, 'shield', 'aegis')) node = shield(f);
  else if (has(id, 'windmill', 'mill', 'propeller', 'whirlBlades')) node = has(id, 'prop') ? propeller(f) : windmill(f);
  else if (has(id, 'gear', 'cog')) node = gear(f);
  else if (has(id, 'orb', 'core', 'nucleus', 'suction')) node = orb(f);
  else if (has(id, 'rune', 'glyph', 'sigil', 'inscription', 'script', 'etch', 'engraved', 'text', 'carve', 'gull', 'starEtch', 'sealGlyph')) node = has(id, 'row') ? runeRow(f) : rune(f);
  else if (has(id, 'book', 'codex', 'ledger', 'doquet', 'docket', 'page', 'pages', 'files', 'scroll', 'quiver', 'sash')) node = has(id, 'scroll', 'sash', 'quiver') ? scroll(f) : book(f, 2);
  else if (has(id, 'quill', 'pen')) node = quill(f);
  else if (has(id, 'ink')) node = inkBlot(f);
  else if (has(id, 'drip', 'ooze', 'leak', 'bleed', 'weep', 'slop', 'drain')) node = drip(f, 3);
  else if (has(id, 'drop', 'goo', 'venom', 'splatter', 'dab')) node = drops(f, 3);
  else if (has(id, 'bubble', 'foam')) node = bubbles(f, 4);
  else if (has(id, 'smoke', 'puff', 'stink', 'fume')) node = smoke(f);
  else if (has(id, 'mist', 'haze', 'fog', 'fog', 'cloud', 'shroud', 'wisp', 'steam', 'exhaust', 'haze')) node = has(id, 'cloud') ? cloud(f) : mist(f);
  else if (has(id, 'dust', 'ash', 'mote', 'granule', 'debris', 'powder', 'stubble', 'scrim')) node = dust(f);
  else if (has(id, 'wave', 'current', 'tide', 'surge', 'swell')) node = waves(f);
  else if (has(id, 'shell', 'carapace', 'plateShell')) node = has(id, 'shell') ? shell(f) : plate(f);
  else if (has(id, 'bone', 'skull', 'rib', 'marrow')) node = has(id, 'skull') ? skull(f) : has(id, 'rib') ? ribs(f) : bone(f);
  else if (has(id, 'column', 'pillar')) node = column(f, id.includes('Broken') || id.includes('fracture'));
  else if (has(id, 'dome')) node = dome(f);
  else if (has(id, 'arch', 'arc', 'gate', 'door')) node = has(id, 'gate', 'door') ? gate(f) : arch(f);
  else if (has(id, 'throne', 'plinth', 'seating')) node = throne(f);
  else if (has(id, 'step', 'stair', 'stairs', 'staircase')) node = steps(f, id.includes('Broken') || id.includes('shatter'));
  else if (has(id, 'boat', 'hull', 'vessel', 'skiff')) node = boat(f);
  else if (has(id, 'anchor')) node = anchor(f);
  else if (has(id, 'hook')) node = hook(f);
  else if (has(id, 'whip', 'vine', 'tendril', 'tentacle', 'strand')) node = has(id, 'whip') ? whip(f) : vine(f);
  else if (has(id, 'mask')) node = mask(f);
  else if (has(id, 'hood', 'veilHood')) node = hood(f);
  else if (has(id, 'bandage', 'stitch', 'binding', 'strap', 'sash', 'band', 'belt', 'sash', 'grip', 'collar', 'brace')) node = has(id, 'collar', 'grip') ? ring(f, true) : bandage(f);
  else if (has(id, 'bead', 'charm', 'pearl')) node = beads(f);
  else if (has(id, 'tatter', 'fray', 'shred')) node = tatter(f);
  else if (has(id, 'ear')) node = ear(f);
  else if (has(id, 'boot', 'shoe', 'foot', 'stomp', 'walk', 'stomp', 'gait', 'step')) node = boots(f);
  else if (has(id, 'claw', 'pincer')) node = has(id, 'pincer') ? pincer(f) : claw(f);
  else if (has(id, 'paw', 'hoof', 'toe')) node = paw(f);
  else if (has(id, 'hand', 'fist', 'grip', 'finger', 'knuckle', 'stump', 'clawArms', 'arm')) node = has(id, 'fist') ? fist(f) : hand(f);
  else if (has(id, 'face')) node = face(f);
  else if (has(id, 'brow')) node = brow(f);
  else if (has(id, 'grin', 'smile', 'cackle')) node = grin(f);
  else if (has(id, 'crack', 'seam', 'fracture', 'scar', 'score', 'etchCrack', 'wound', 'tear', 'rift')) node = has(id, 'rift') ? crack(f, 3) : crack(f, 2);
  else if (has(id, 'vein', 'veinBark', 'vessel')) node = vein(f);
  else if (has(id, 'star')) node = star(f, 3);
  else if (has(id, 'moon')) node = moon(f);
  else if (has(id, 'sun', 'ray', 'solar')) node = sun(f);
  else if (has(id, 'leaf')) node = leaf(f);
  else if (has(id, 'root', 'rooting')) node = roots(f);
  else if (has(id, 'flower', 'bloom', 'petal')) node = has(id, 'petal') ? petal(f) : flower(f);
  else if (has(id, 'mushroom', 'fungus')) node = mushroom(f);
  else if (has(id, 'spore', 'pollen', 'mote', 'seed', 'grain')) node = spores(f);
  else if (has(id, 'moss', 'algae', 'lichen', 'fern')) node = moss(f);
  else if (has(id, 'bolt', 'zap', 'shock', 'taser', 'electric', 'ion', 'shock', 'arc')) node = bolt(f);
  else if (has(id, 'spark', 'flint')) node = spark(f);
  else if (has(id, 'gauge', 'dial', 'meter')) node = gauge(f);
  else if (has(id, 'visor', 'lens', 'scan', 'code')) node = visor(f);
  else if (has(id, 'screen', 'panel', 'monitor')) node = screen(f);
  else if (has(id, 'stripe', 'strip', 'band')) node = stripe(f);
  else if (has(id, 'led', 'light', 'lamp', 'beacon', 'signal')) node = led(f, 3);
  else if (has(id, 'thruster', 'jet', 'flameJet')) node = thruster(f);
  else if (has(id, 'pipe', 'duct', 'tube')) node = pipe(f);
  else if (has(id, 'echo', 'wraith', 'shade', 'ghost', 'caller', 'residue')) node = echo(f);
  else if (has(id, 'shadow', 'silhouette', 'shade')) node = shadow(f);
  else if (has(id, 'glow', 'lum', 'beacon', 'haloDot')) node = glowDot(f);
  else if (has(id, 'wall', 'barrier', 'bulwark', 'membrane', 'aegis')) node = wall(f);
  else if (has(id, 'blood', 'gore', 'sanguine')) node = blood(f);
  else if (has(id, 'mud', 'silt', 'slop', 'goo', 'filth')) node = mud(f);
  else if (has(id, 'pool', 'puddle', 'slop')) node = pool(f);
  else if (has(id, 'mail', 'scale', 'chainmail')) node = mail(f);
  else if (has(id, 'plate', 'armour', 'armor', 'carapace', 'shell')) node = plate(f);
  else if (has(id, 'patch')) node = patch(f);
  else if (has(id, 'icicle', 'frost', 'ice', 'crystal', 'gem', 'shard', 'prism')) node = has(id, 'icicle') ? icicle(f) : crystal(f);
  else if (has(id, 'fur')) node = fur(f);
  else if (has(id, 'mane', 'hair', 'wig', 'braid', 'tress')) node = has(id, 'mane') ? mane(f) : hair(f);
  else if (has(id, 'beard')) node = beard(f);
  else if (has(id, 'nose', 'nostril')) node = nose(f);
  else if (has(id, 'cheek', 'dimple')) node = cheek(f);
  else if (has(id, 'hat', 'boater', 'brim', 'cap', 'crownHat')) node = hat(f);
  else if (has(id, 'helm', 'helmet')) node = helm(f);
  else if (has(id, 'post', 'pole', 'stake', 'banner')) node = post(f);
  else if (has(id, 'vent', 'grille', 'slit')) node = vent(f);
  else if (has(id, 'straw', 'wheat', 'stalk', 'hay')) node = straw(f);
  else if (has(id, 'trail', 'streak')) node = trail(f);
  else if (has(id, 'tongue', 'lick', 'lolling')) node = tongue(f);
  else if (has(id, 'ribcage', 'ribExpose')) node = ribcage(f);
  else if (has(id, 'tendon', 'sinew', 'ligament')) node = tendons(f);
  else if (has(id, 'flail', 'morningstar')) node = flail(f);
  else if (has(id, 'pauldron', 'shoulderPlate', 'shoulderGuard')) node = pauldron(f);
  else if (has(id, 'pentagram', 'pentacle', 'fivePoint')) node = pentagram(f);
  else if (has(id, 'antenna', 'aerial', 'signalMast')) node = antenna(f);
  else if (has(id, 'barb', 'hookBarb', 'thornBarb')) node = barb(f);
  else if (has(id, 'dot', 'glint', 'pupil', 'speck')) node = id.endsWith('dots') ? dots(f, 3) : dot(f);

  // ─── Extended dispatch: catch remaining IDs ───
  else if (has(id, 'Slab', 'chitin', 'ironHide', 'ironShoulder', 'gorget', 'cuirass', 'Chrome', 'Cuff', 'Wrap', 'Suit', 'wireSkin', 'violetSkin', 'skinPeel', 'eightPress')) node = plate(f);
  else if (has(id, 'Breath', 'socketFire', 'overloadHum', 'humVibe')) node = flame(f, 1);
  else if (has(id, 'Bite', 'Muzzle', 'Chin', 'Lips')) node = mouth(f);
  else if (has(id, 'Grasp', 'clutchEgg', 'crushCharge', 'crocChild')) node = claw(f);
  else if (has(id, 'ambushFin', 'windRake', 'floatPebble')) node = spikes(f);
  else if (has(id, 'Sleeve', 'Drape', 'courtFan', 'ragBundle')) node = cloth(f);
  else if (has(id, 'dutyStain', 'gritSplat', 'dirtCrust', 'Base', 'neonFloor', 'Platform', 'creekBed')) node = dust(f);
  else if (has(id, 'jointKnee', 'barkKnee', 'slagKnee', 'paleKnee', 'Stance', 'hopperLeg', 'sixStub', 'kneelShot')) node = boots(f);
  else if (has(id, 'hoverDisc', 'Obelisk', 'shaftShaft', 'scepterStub', 'mothWheel', 'kingBulk')) node = orb(f);
  else if (has(id, 'judgmentBeam', 'verdictBeam', 'laserCross', 'deconCannon')) node = bolt(f);
  else if (has(id, 'banquetStain', 'devourStain', 'slimeSplat', 'barnacleCluster', 'blotTip')) node = drops(f, 3);
  else if (has(id, 'coldWake', 'muffle')) node = smoke(f);
  else if (has(id, 'deathMark', 'mortemMark', 'voidMark', 'warPaint', 'pierceMark', 'ancientWord', 'erasedName')) node = rune(f);
  else if (has(id, 'sentenceGrid', 'holoGavel')) node = ring(f, false);
  else if (has(id, 'hollowHole', 'hollowWhisper', 'oldGrave')) node = skull(f);
  else if (has(id, 'thickNeck', 'wideShoulder', 'twinHead')) node = horn(f);
  else if (has(id, 'twinScepter', 'twinScimitar', 'vesperClapper')) node = staff(f, 'rod');
  else if (has(id, 'paperCrease', 'soulAbacus', 'nodCompute')) node = scroll(f);
  else if (has(id, 'spireTower', 'spiritFunnel', 'refractBody')) node = crystal(f);
  else if (has(id, 'weaveLoom', 'rustleSound')) node = vine(f);
  else if (has(id, 'fieldHound', 'packScent')) node = paw(f);
  else if (has(id, 'whiskerFan', 'whiskerTwitch')) node = ear(f);
  else if (has(id, 'broodBack', 'broodSac', 'swollenGut')) node = fur(f);
  else if (has(id, 'droneBay', 'meltWire', 'hoverSkid')) node = led(f, 3);
  else if (has(id, 'gavelNod', 'glossTop', 'goldLaurel', 'rallyCry', 'wakeGesture')) node = face(f);
  else if (has(id, 'ruinFragment', 'crossingRush', 'windChest')) node = post(f);
  else if (has(id, 'jointRattle')) node = gear(f);
  else if (has(id, 'royalGloss')) node = coin(f, 3);
  else if (has(id, 'toadFriend', 'pocketHerb')) node = cauldron(f);
  else if (has(id, 'cosmicHowl', 'voidPulse', 'astrolabe')) node = star(f, 3);
  else if (has(id, 'festerPore')) node = blood(f);
  else if (has(id, 'manaSip', 'bindSpell')) node = reticle(f);
  else if (has(id, 'warDrum')) node = bellIcon(f);
  else if (has(id, 'wolfMark', 'witherBough', 'barkNail')) node = mane(f);
  else if (has(id, 'silverBite')) node = fangs(f);
  else if (has(id, 'sentinelStatue', 'stoneSleeve')) node = shield(f);
  else if (has(id, 'deadRoll')) node = tail(f);
  else if (has(id, 'beakCluster', 'talonsRake')) node = fangs(f);
  else if (has(id, 'gauntFrame', 'muscleHaunch', 'thickBark')) node = plate(f);
  else if (has(id, 'leatherGlove', 'overallBib')) node = cloth(f);
  else if (has(id, 'witherBranch')) node = vine(f);
  else if (has(id, 'chantFaint', 'dutyWhistle')) node = smoke(f);
  else if (has(id, 'deepCrush', 'stonePalm')) node = fist(f);
  else if (has(id, 'goldenBuckle')) node = coin(f, 3);
  else if (has(id, 'reefCamouflage')) node = moss(f);

  else node = dot(f);

  return <>{node}</>;
}

/* ================= 身体原型 ================= */

function Eye({ spec, x, y, s = 1 }: { spec: MonsterVisualSpec; x: number; y: number; s?: number }) {
  const c = spec.eye === 'red' ? '#fb5234' : spec.eye === 'white' ? '#e9e4d4' : spec.glow;
  if (spec.eye === 'none') return null;
  if (spec.eye === 'slit') return <rect x={x - 2.2 * s} y={y - 3.4 * s} width={2.4 * s} height={6.8 * s} rx={1.2} fill={c} />;
  return (
    <g>
      <circle cx={x} cy={y} r={4.2 * s} fill={c} opacity={0.25} />
      <circle cx={x} cy={y} r={2.4 * s} fill={c} />
    </g>
  );
}

export function BodyGlyph({ spec, gid }: { spec: MonsterVisualSpec; gid: string }) {
  const { hue, hue2, glow, size } = spec;
  const grad = gid + '-body';
  const inner = (() => {
    switch (spec.kind) {
      case 'beast':
        return (
          <g>
            <path d="M82 60C92 58 98 50 96 42" stroke={hue2} strokeWidth={6} fill="none" strokeLinecap="round" />
            <rect x={38} y={82} width={9} height={18} rx={4} fill={hue2} />
            <rect x={56} y={84} width={9} height={16} rx={4} fill={hue2} />
            <rect x={68} y={82} width={9} height={18} rx={4} fill={hue2} />
            <ellipse cx={58} cy={70} rx={28} ry={18} fill={`url(#${grad})`} />
            <circle cx={30} cy={58} r={14} fill={hue} />
            <path d="M22 48L18 38L28 44Z" fill={hue2} />
            <path d="M18 58L8 60L18 64Z" fill={hue2} />
            <Eye spec={spec} x={26} y={54} />
          </g>
        );
      case 'wolf':
        return (
          <g>
            <path d="M84 62C94 60 99 52 97 44" stroke={hue2} strokeWidth={7} fill="none" strokeLinecap="round" />
            <path d="M34 88L40 66H84L92 88H76L68 74L58 88Z" fill={`url(#${grad})`} />
            <path d="M20 52L34 40L46 52L36 68L20 62Z" fill={hue} />
            <path d="M28 40L26 28L36 36Z" fill={hue2} />
            <path d="M38 38L40 27L46 37Z" fill={hue2} />
            <path d="M20 58L10 62L20 65Z" fill={hue2} />
            <Eye spec={spec} x={30} y={50} s={0.9} />
          </g>
        );
      case 'rat':
        return (
          <g>
            <path d="M72 76C86 80 94 74 96 64" stroke={hue2} strokeWidth={3.4} fill="none" strokeLinecap="round" />
            <ellipse cx={54} cy={70} rx={20} ry={13} fill={`url(#${grad})`} />
            <circle cx={34} cy={62} r={10} fill={hue} />
            <circle cx={28} cy={52} r={5.4} fill={hue2} />
            <circle cx={39} cy={50} r={5.4} fill={hue2} />
            <path d="M26 62L18 64L26 67Z" fill={hue2} />
            <Eye spec={spec} x={31} y={60} s={0.8} />
            <rect x={48} y={80} width={7} height={12} rx={3.4} fill={hue2} />
            <rect x={60} y={80} width={7} height={12} rx={3.4} fill={hue2} />
          </g>
        );
      case 'scorpion':
        return (
          <g>
            <path d="M80 62C92 56 94 44 88 34" stroke={hue} strokeWidth={6} fill="none" strokeLinecap="round" />
            <circle cx={87} cy={31} r={4} fill={glow} />
            {[[28, 74], [38, 80], [50, 84], [62, 84], [72, 80], [78, 74]].map(([x, y], i) => (
              <path key={i} d={`M${x} ${y - 12}L${x - 4} ${y}`} stroke={hue2} strokeWidth={3} strokeLinecap="round" />
            ))}
            <ellipse cx={56} cy={66} rx={24} ry={14} fill={`url(#${grad})`} />
            <path d="M30 60C22 54 22 46 30 44C28 50 30 54 34 56Z" fill={hue2} />
            <path d="M30 66C20 66 16 58 20 52C24 56 28 58 32 58Z" fill={hue2} />
            <Eye spec={spec} x={36} y={60} s={0.7} />
          </g>
        );
      case 'worm':
        return (
          <g>
            <path d="M94 58C84 76 66 84 50 78C36 72 30 62 30 54" stroke={`url(#${grad})`} strokeWidth={22} fill="none" strokeLinecap="round" />
            <path d="M88 56C80 68 70 74 60 72" stroke={hue2} strokeWidth={2} fill="none" opacity={0.5} />
            <path d="M74 64C68 72 60 76 54 74" stroke={hue2} strokeWidth={2} fill="none" opacity={0.5} />
            <circle cx={30} cy={52} r={15} fill={hue} />
            <path d="M18 58C22 66 30 68 36 64" stroke={hue2} strokeWidth={3} fill="none" strokeLinecap="round" />
            <path d="M19 56L25 59M23 53L29 56M29 51L33 54" stroke={glow} strokeWidth={1.6} strokeLinecap="round" opacity={0.8} />
            <Eye spec={spec} x={26} y={46} s={0.8} />
          </g>
        );
      case 'serpent':
        return (
          <g>
            <path d="M26 46C44 34 62 40 62 54C62 66 46 68 40 76C34 84 40 94 54 94C70 94 84 86 88 72" stroke={`url(#${grad})`} strokeWidth={15} fill="none" strokeLinecap="round" />
            <path d="M54 94C64 96 76 92 84 82" stroke={hue2} strokeWidth={2.4} fill="none" opacity={0.5} strokeDasharray="3 4" />
            <circle cx={26} cy={44} r={12} fill={hue} />
            <path d="M16 48L8 52L16 56" fill={hue2} />
            <Eye spec={spec} x={23} y={40} s={0.8} />
          </g>
        );
      case 'moth':
        return (
          <g>
            <path d="M52 52C34 34 18 38 14 52C18 64 38 66 52 58Z" fill={hue} opacity={0.85} />
            <path d="M68 52C86 34 102 38 106 52C102 64 82 66 68 58Z" fill={hue} opacity={0.85} />
            <path d="M52 60C40 68 30 68 24 62C32 72 46 70 54 64Z" fill={hue2} opacity={0.9} />
            <path d="M68 60C80 68 90 68 96 62C88 72 74 70 66 64Z" fill={hue2} opacity={0.9} />
            <ellipse cx={60} cy={56} rx={7} ry={16} fill={hue2} />
            <path d="M57 42C54 36 50 33 46 32M63 42C66 36 70 33 74 32" stroke={hue2} strokeWidth={1.8} fill="none" strokeLinecap="round" />
            <circle cx={57} cy={31} r={1.8} fill={glow} />
            <circle cx={74} cy={31} r={1.8} fill={glow} />
            <Eye spec={spec} x={60} y={46} s={0.7} />
          </g>
        );
      case 'bird':
        return (
          <g>
            <path d="M60 50C84 30 100 34 104 44C88 42 76 50 68 60Z" fill={hue} opacity={0.9} />
            <ellipse cx={50} cy={56} rx={16} ry={11} fill={`url(#${grad})`} />
            <circle cx={36} cy={46} r={9} fill={hue} />
            <path d="M28 46L16 49L28 53Z" fill={glow} />
            <path d="M56 64C64 72 62 80 54 86" stroke={hue2} strokeWidth={4} fill="none" strokeLinecap="round" />
            <path d="M42 66L36 78L48 72Z" fill={hue2} />
            <Eye spec={spec} x={34} y={44} s={0.7} />
          </g>
        );
      case 'whale':
        return (
          <g>
            <path d="M86 58C96 48 104 44 108 46C102 54 104 60 108 66C100 64 92 66 86 66Z" fill={hue2} />
            <ellipse cx={54} cy={62} rx={32} ry={20} fill={`url(#${grad})`} />
            <path d="M40 76C44 82 52 84 58 82" stroke={hue2} strokeWidth={4} fill="none" strokeLinecap="round" />
            <path d="M34 46C32 40 36 36 40 38" stroke={hue2} strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <circle cx={54} cy={82} r={2} fill={hue2} opacity={0.5} />
            <circle cx={66} cy={82} r={1.6} fill={hue2} opacity={0.5} />
            <Eye spec={spec} x={32} y={58} s={0.9} />
          </g>
        );
      case 'blob':
        return (
          <g>
            <path d={`M26 84C20 62 34 40 60 40C86 40 100 62 94 84C88 92 80 88 74 92C68 96 60 90 54 93C48 96 40 90 34 92C30 93 27 89 26 84Z`} fill={`url(#${grad})`} />
            <path d="M40 56C46 48 56 46 62 50" stroke="#fff" strokeWidth={3} opacity={0.25} fill="none" strokeLinecap="round" />
            <circle cx={48} cy={96} r={3} fill={hue} opacity={0.7} />
            <circle cx={72} cy={98} r={2.4} fill={hue} opacity={0.6} />
            <Eye spec={spec} x={50} y={60} s={0.9} />
            <Eye spec={spec} x={68} y={60} s={0.9} />
          </g>
        );
      case 'roach':
        return (
          <g>
            {[[34, 68], [42, 72], [52, 74], [64, 74], [74, 72], [82, 68]].map(([x, y], i) => (
              <path key={i} d={`M${x} ${y - 12}L${x - 3 - (i % 3)} ${y + 2}`} stroke={hue2} strokeWidth={2.6} strokeLinecap="round" />
            ))}
            <ellipse cx={58} cy={58} rx={26} ry={14} fill={`url(#${grad})`} />
            <path d="M32 52L12 40M32 58L10 56" stroke={hue2} strokeWidth={1.8} fill="none" strokeLinecap="round" />
            <circle cx={34} cy={54} r={8} fill={hue} />
            <Eye spec={spec} x={32} y={52} s={0.7} />
          </g>
        );
      case 'croc':
        return (
          <g>
            {[[44, 82], [58, 84], [74, 84], [84, 80]].map(([x, y], i) => (
              <rect key={i} x={x} y={y - 8} width={7} height={14} rx={3} fill={hue2} />
            ))}
            <path d="M92 66C100 62 104 54 102 46" stroke={hue2} strokeWidth={6} fill="none" strokeLinecap="round" />
            <ellipse cx={62} cy={68} rx={30} ry={15} fill={`url(#${grad})`} />
            <path d="M14 62L46 58L48 72L14 70Z" fill={hue} />
            <path d="M16 66L46 64" stroke={hue2} strokeWidth={1.6} />
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} d={`M${20 + i * 6} 65L${22 + i * 6} 62L${24 + i * 6} 65Z`} fill="#e9e4d4" opacity={0.85} />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path key={i} d={`M${46 + i * 8} 54L${50 + i * 8} 48L${54 + i * 8} 54Z`} fill={hue2} />
            ))}
            <Eye spec={spec} x={44} y={56} s={0.7} />
          </g>
        );
      case 'crab':
        return (
          <g>
            {[[-1, 0], [-1, 1], [-1, 2], [1, 0], [1, 1], [1, 2]].map(([s, i], k) => (
              <path key={k} d={`M${60 + s * 20} ${62 + i * 6}L${60 + s * 34} ${76 + i * 5}`} stroke={hue2} strokeWidth={3} strokeLinecap="round" />
            ))}
            <path d="M22 52C14 46 14 38 22 36C20 42 24 46 28 46Z" fill={hue} />
            <path d="M22 58C12 58 8 50 12 44C18 48 22 48 26 48Z" fill={hue} />
            <path d={`M28 76C24 56 40 40 60 40C80 40 96 56 92 76C84 84 74 80 66 83C58 86 46 84 38 81C32 79 30 78 28 76Z`} fill={`url(#${grad})`} />
            <circle cx={48} cy={44} r={4.4} fill={hue2} />
            <circle cx={72} cy={44} r={4.4} fill={hue2} />
            <Eye spec={spec} x={48} y={44} s={0.8} />
            <Eye spec={spec} x={72} y={44} s={0.8} />
          </g>
        );
      case 'humanoid':
        return (
          <g>
            <path d="M42 44C42 36 78 36 78 44L72 90C64 94 56 94 48 90Z" fill={`url(#${grad})`} />
            <circle cx={60} cy={30} r={10.5} fill={hue} />
            <path d="M46 50L36 68M74 50L84 68" stroke={hue2} strokeWidth={5.4} strokeLinecap="round" />
            <rect x={48} y={88} width={9} height={12} rx={3.4} fill={hue2} />
            <rect x={63} y={88} width={9} height={12} rx={3.4} fill={hue2} />
            <Eye spec={spec} x={56} y={28} s={0.6} />
            <Eye spec={spec} x={64} y={28} s={0.6} />
          </g>
        );
      case 'knight':
        return (
          <g>
            <path d="M40 44H80L74 92C64 96 56 96 46 92Z" fill={`url(#${grad})`} />
            <rect x={44} y={40} width={32} height={10} rx={4} fill={hue2} />
            <path d="M44 42C40 34 48 26 60 26C72 26 80 34 76 42L70 46H50Z" fill={hue} />
            <path d="M50 37H70" stroke={glow} strokeWidth={2.4} strokeLinecap="round" />
            <circle cx={60} cy={37} r={5} fill={hue2} opacity={0.5} />
            <path d="M44 52L34 70M76 52L86 70" stroke={hue2} strokeWidth={6} strokeLinecap="round" />
            <rect x={46} y={90} width={10} height={11} rx={3} fill={hue2} />
            <rect x={64} y={90} width={10} height={11} rx={3} fill={hue2} />
          </g>
        );
      case 'ghost':
        return (
          <g opacity={0.92}>
            <path d={`M32 84C24 60 36 36 60 36C84 36 96 60 88 84C84 80 80 88 74 84C70 90 62 82 58 88C52 82 46 90 42 84C38 88 34 86 32 84Z`} fill={`url(#${grad})`} />
            <path d="M42 52C46 44 54 42 60 44" stroke="#fff" strokeWidth={3} opacity={0.3} fill="none" strokeLinecap="round" />
            <circle cx={52} cy={56} r={3} fill={hue2} />
            <circle cx={68} cy={56} r={3} fill={hue2} />
            <Eye spec={spec} x={52} y={56} s={0.55} />
            <Eye spec={spec} x={68} y={56} s={0.55} />
          </g>
        );
      case 'statue':
        return (
          <g>
            <path d="M42 40C42 32 78 32 78 40L76 92H44Z" fill={`url(#${grad})`} />
            <rect x={40} y={92} width={40} height={7} fill={hue2} />
            <rect x={46} y={24} width={28} height={17} rx={5} fill={hue} />
            <path d="M50 32H70M52 37H68" stroke={hue2} strokeWidth={1.6} opacity={0.6} />
            <path d="M44 52H76M44 62H76M44 72H76" stroke={hue2} strokeWidth={1.4} opacity={0.45} />
            <Eye spec={spec} x={54} y={31} s={0.55} />
            <Eye spec={spec} x={66} y={31} s={0.55} />
          </g>
        );
      case 'construct':
        return (
          <g>
            <rect x={42} y={44} width={36} height={40} rx={4} fill={`url(#${grad})`} />
            <rect x={46} y={26} width={28} height={16} rx={3} fill={hue} />
            <path d="M50 34H70" stroke={glow} strokeWidth={3} strokeLinecap="round" />
            <rect x={32} y={48} width={10} height={26} rx={3} fill={hue2} />
            <rect x={78} y={48} width={10} height={26} rx={3} fill={hue2} />
            <rect x={48} y={84} width={10} height={10} rx={2} fill={hue2} />
            <rect x={62} y={84} width={10} height={10} rx={2} fill={hue2} />
            <circle cx={60} cy={64} r={6} fill="none" stroke={glow} strokeWidth={1.6} opacity={0.8} />
            <path d="M48 52H72M48 76H72" stroke={hue2} strokeWidth={1.2} opacity={0.6} />
          </g>
        );
      case 'swarm':
        return (
          <g>
            {Array.from({ length: 7 }, (_, i) => {
              const a = (i * Math.PI * 2) / 7;
              const cx = 60 + 26 * Math.cos(a);
              const cy = 56 + 20 * Math.sin(a);
              return (
                <g key={i} transform={`translate(${cx} ${cy}) rotate(${a * 57})`}>
                  <path d="M-8 -4L0 0L-8 4L-4 0Z" fill={hue} opacity={0.9} />
                  <path d="M2 -5L10 0L2 5L6 0Z" fill={hue2} opacity={0.85} />
                </g>
              );
            })}
            <circle cx={60} cy={56} r={5} fill={glow} opacity={0.9} />
            <circle cx={60} cy={56} r={9} fill="none" stroke={glow} strokeWidth={1} opacity={0.4} />
          </g>
        );
      case 'tree':
        return (
          <g>
            <path d="M52 96C50 76 50 58 54 46H66C70 58 70 76 68 96Z" fill={`url(#${grad})`} />
            <path d="M54 52C44 48 38 40 38 32C48 34 54 42 56 48Z" fill={hue2} />
            <path d="M66 52C76 48 82 40 82 32C72 34 66 42 64 48Z" fill={hue2} />
            <circle cx={46} cy={30} r={14} fill={hue} opacity={0.9} />
            <circle cx={60} cy={22} r={16} fill={hue} />
            <circle cx={74} cy={30} r={14} fill={hue} opacity={0.9} />
            <path d="M54 64C57 62 63 62 66 64" stroke={hue2} strokeWidth={2} fill="none" opacity={0.6} />
            <circle cx={56} cy={28} r={2.4} fill={glow} opacity={0.9} />
            <circle cx={64} cy={28} r={2.4} fill={glow} opacity={0.9} />
          </g>
        );
      case 'vessel':
        return (
          <g>
            <path d={`M38 92C30 74 34 52 44 42C48 34 72 34 76 42C86 52 90 74 82 92Z`} fill={`url(#${grad})`} />
            <ellipse cx={60} cy={38} rx={15} ry={5.4} fill={hue2} />
            <ellipse cx={60} cy={38} rx={10} ry={3.4} fill={glow} opacity={0.85} />
            <path d="M42 58H78M40 70H80" stroke={hue2} strokeWidth={2.4} opacity={0.7} />
            <rect x={48} y={48} width={24} height={8} rx={2} fill={hue2} opacity={0.5} />
            <Eye spec={spec} x={60} y={38} s={0.8} />
          </g>
        );
      case 'gate':
        return (
          <g>
            <rect x={32} y={34} width={10} height={60} fill={hue} />
            <rect x={78} y={34} width={10} height={60} fill={hue} />
            <rect x={28} y={26} width={64} height={10} fill={hue2} />
            <rect x={42} y={40} width={36} height={54} fill={`url(#${grad})`} opacity={0.9} />
            <path d="M60 40V94M42 62H78" stroke={hue2} strokeWidth={2.4} opacity={0.7} />
            <circle cx={60} cy={62} r={5} fill={glow} opacity={0.9} />
            <circle cx={50} cy={31} r={2.4} fill={glow} opacity={0.7} />
            <circle cx={70} cy={31} r={2.4} fill={glow} opacity={0.7} />
          </g>
        );
      case 'brute':
        return (
          <g>
            <path d="M40 40C34 46 32 58 36 70L30 88H44L48 72H72L76 88H90L84 70C88 58 86 46 80 40C66 32 54 32 40 40Z" fill={`url(#${grad})`} />
            <circle cx={60} cy={30} r={11} fill={hue} />
            <path d="M40 46C34 50 30 60 30 72L22 80C26 84 32 84 36 80M80 46C86 50 90 60 90 72L98 80C94 84 88 84 84 80" stroke={hue2} strokeWidth={9} fill="none" strokeLinecap="round" />
            <path d="M52 28H68" stroke={glow} strokeWidth={2.2} strokeLinecap="round" />
            <rect x={50} y={88} width={9} height={9} rx={2} fill={hue2} />
            <rect x={62} y={88} width={9} height={9} rx={2} fill={hue2} />
          </g>
        );
      case 'effigy':
        return (
          <g>
            <path d="M60 14V86" stroke={hue2} strokeWidth={4} strokeLinecap="round" />
            <path d="M42 26H78" stroke={hue2} strokeWidth={3.4} strokeLinecap="round" />
            <path d="M44 32L60 26L76 32L72 86C64 90 56 90 48 86Z" fill={`url(#${grad})`} />
            <circle cx={60} cy={20} r={9} fill={hue} />
            <path d="M52 40H68M52 52H68M52 64H68" stroke={hue2} strokeWidth={1.6} opacity={0.6} />
            <path d="M48 86L52 94M58 88L60 96M68 86L66 94" stroke={hue} strokeWidth={2.4} strokeLinecap="round" />
            <circle cx={57} cy={19} r={1.6} fill="#1a1410" />
            <circle cx={63} cy={19} r={1.6} fill="#1a1410" />
          </g>
        );
      case 'hag':
        return (
          <g>
            <path d="M46 48C44 40 58 34 68 40C78 44 82 54 78 66L74 90H52Z" fill={`url(#${grad})`} />
            <circle cx={56} cy={34} r={10} fill={hue} />
            <path d="M56 26C50 22 46 24 44 28M58 24C56 18 50 18 47 21" stroke={hue2} strokeWidth={2} fill="none" strokeLinecap="round" />
            <path d="M78 52C84 50 88 44 88 38" stroke={hue2} strokeWidth={5} fill="none" strokeLinecap="round" />
            <path d="M48 66L38 76" stroke={hue2} strokeWidth={5} strokeLinecap="round" />
            <rect x={54} y={90} width={8} height={8} rx={2.4} fill={hue2} />
            <rect x={66} y={90} width={8} height={8} rx={2.4} fill={hue2} />
            <Eye spec={spec} x={53} y={33} s={0.6} />
            <Eye spec={spec} x={60} y={33} s={0.6} />
          </g>
        );
      case 'dragon':
        return (
          <g>
            <path d="M30 46C8 30 0 38 6 48C14 44 22 48 30 54Z" fill={hue2} opacity={0.95} />
            <path d="M84 46C106 30 114 38 108 48C100 44 92 48 84 54Z" fill={hue2} opacity={0.95} />
            <path d="M92 66C106 62 112 52 108 40" stroke={hue2} strokeWidth={8} fill="none" strokeLinecap="round" />
            <path d="M36 90L46 62H84L94 90H74L66 74L58 90Z" fill={`url(#${grad})`} />
            <path d="M46 62C42 48 50 38 62 36C74 34 80 42 78 54L60 66Z" fill={hue} />
            <path d="M58 30L64 18L70 30Z" fill={hue2} />
            <path d="M44 40L36 30L50 36Z" fill={hue2} />
            <path d="M78 52C84 54 86 58 82 62" stroke={hue2} strokeWidth={2.4} fill="none" strokeLinecap="round" />
            <Eye spec={spec} x={66} y={44} s={0.9} />
            {[0, 1, 2].map((i) => (
              <path key={i} d={`M${50 + i * 10} 60L${54 + i * 10} 54L${58 + i * 10} 60Z`} fill={hue2} />
            ))}
          </g>
        );
      default:
        return <circle cx={60} cy={60} r={24} fill={`url(#${grad})`} />;
    }
  })();
  return (
    <g transform={`translate(60 60) scale(${size}) translate(-60 -60)`}>
      <defs>
        <radialGradient id={grad} cx="45%" cy="35%" r="80%">
          <stop offset="0%" stopColor={hue} />
          <stop offset="100%" stopColor={hue2} />
        </radialGradient>
      </defs>
      {inner}
    </g>
  );
}
