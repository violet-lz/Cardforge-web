// 怪物外形组件 · 纯 SVG、零运行时依赖，可直接拷入 violet-lz/Cardforge-web 仓库。
// 用法：<EnemySprite id="kiln-brute" size={160} />
import { isBuiltInContentId } from '../../game/content/customContent';
import { MONSTER_VISUALS, enemyTier } from '../../game/enemies/monsterVisuals';
import { BodyGlyph, FeatureGlyph } from './spriteShapes';

export function resolveEnemyVisualSpec(id: string) {
  return isBuiltInContentId('enemies', id) ? MONSTER_VISUALS[id] : undefined;
}

export default function EnemySprite({
  id,
  label = id,
  size = 180,
  animate = true,
}: {
  id: string;
  label?: string;
  size?: number;
  animate?: boolean;
}) {
  const spec = resolveEnemyVisualSpec(id);
  const gid = `esg-${id.replace(/[^a-zA-Z0-9]/g, '')}`;

  if (!spec) {
    return (
      <svg viewBox="0 0 120 120" width={size} height={size} role="img" aria-label={label}>
        <circle cx={60} cy={60} r={26} fill="#262c48" />
        <circle cx={50} cy={56} r={3} fill="#a8a291" />
        <circle cx={70} cy={56} r={3} fill="#a8a291" />
      </svg>
    );
  }

  const tier = enemyTier(id);

  return (
    <svg viewBox="0 0 120 120" width={size} height={size} role="img" aria-label={id}>
      <defs>
        <radialGradient id={`${gid}-bg`} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor={spec.glow} stopOpacity={0.24} />
          <stop offset="100%" stopColor={spec.glow} stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx={60} cy={58} r={55} fill={`url(#${gid}-bg)`} />
      {tier === 'boss' && (
        <>
          <circle cx={60} cy={58} r={50} fill="none" stroke={spec.glow} strokeOpacity={0.4} strokeWidth={1} strokeDasharray="3 6" />
          <circle cx={60} cy={58} r={44} fill="none" stroke={spec.glow} strokeOpacity={0.14} strokeWidth={3} />
        </>
      )}
      {tier === 'elite' && <circle cx={60} cy={58} r={48} fill="none" stroke={spec.glow} strokeOpacity={0.22} strokeWidth={1} strokeDasharray="10 5" />}
      <ellipse cx={60} cy={103} rx={27} ry={4.4} fill="#000" opacity={0.42} />
      <g className={animate ? 'enemy-idle' : undefined}>
        <BodyGlyph spec={spec} gid={gid} />
        {spec.features.map((f, i) => (
          <FeatureGlyph key={i} id={f.s} f={f} />
        ))}
      </g>
    </svg>
  );
}
