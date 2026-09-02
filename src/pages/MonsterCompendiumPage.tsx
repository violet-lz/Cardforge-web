import { useState } from 'react';
import { MONSTER_VISUALS, REGION_OF, REGIONS, enemyTier, tierLabel } from '../game/enemies/monsterVisuals';
import EnemySprite from '../components/enemies/EnemySprite';

// 过滤有效怪物（有 7+ 特征且 6 个关节）
function filterValidMonsters(): string[] {
  const valid: string[] = [];
  for (const [id, spec] of Object.entries(MONSTER_VISUALS)) {
    if (spec.features.length >= 7 && spec.joints?.length === 6) {
      valid.push(id);
    }
  }
  return valid;
}

// 按地域分组
function groupByRegion(ids: string[]): Record<string, string[]> {
  const groups: Record<string, string[]> = {};
  for (const id of ids) {
    const region = REGION_OF[id];
    if (!region) continue;
    if (!groups[region]) groups[region] = [];
    groups[region].push(id);
  }
  return groups;
}

const ANIMATION_CLIPS = ['idle', 'hit', 'attack1', 'attack2', 'attack3', 'skill1', 'skill2', 'block', 'blockReact'] as const;

interface MonsterCompendiumPageProps {
  onBack: () => void;
}

export function MonsterCompendiumPage({ onBack }: MonsterCompendiumPageProps) {
  const validIds = filterValidMonsters();
  const regionGroups = groupByRegion(validIds);
  const regionOrder = REGIONS.map((r) => r.id);

  const [selectedMonster, setSelectedMonster] = useState<string | null>(null);
  const [playingAnimation, setPlayingAnimation] = useState<string>('idle');

  const selectedSpec = selectedMonster ? MONSTER_VISUALS[selectedMonster] : undefined;

  return (
    <div className="monster-compendium" style={{ padding: '1rem' }}>
      <header style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="text-button" onClick={onBack}>← 返回</button>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>怪物图鉴</h1>
        <span style={{ fontSize: '0.8rem', color: '#888' }}>共 {validIds.length} 只</span>
      </header>

      {/* 展开的怪物详情面板（固定在顶部，便于查看动画） */}
      {selectedMonster && selectedSpec && (
        <div style={{
          marginBottom: '1.5rem',
          padding: '1rem',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '8px',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <EnemySprite
              id={selectedMonster}
              size={200}
              animate
              animation={playingAnimation}
              onAnimationEnd={() => setPlayingAnimation('idle')}
            />
            <p style={{ fontSize: '0.65rem', marginTop: '0.5rem', color: '#888' }}>
              正在播放: {playingAnimation}
            </p>
          </div>

          <div style={{ flex: 1, minWidth: '220px' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '1rem' }}>
              {selectedMonster} · {tierLabel(enemyTier(selectedMonster))}
            </h4>
            <p style={{ margin: '0.3rem 0', fontSize: '0.75rem', color: '#aaa' }}>
              <strong>外观特征:</strong> {selectedSpec.features.length} 个
            </p>
            <p style={{ margin: '0.3rem 0', fontSize: '0.75rem', color: '#aaa' }}>
              <strong>体型:</strong> {selectedSpec.size}
            </p>
            <div style={{ margin: '0.8rem 0 0', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {ANIMATION_CLIPS.map((clip) => (
                <button
                  key={clip}
                  onClick={() => setPlayingAnimation(clip)}
                  style={{
                    padding: '4px 8px',
                    fontSize: '0.65rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: playingAnimation === clip ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
                    color: 'inherit',
                    cursor: 'pointer',
                  }}
                >
                  {clip}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedMonster(null)}
              style={{ marginTop: '0.8rem', padding: '4px 10px', fontSize: '0.65rem', cursor: 'pointer' }}
            >
              收起
            </button>
          </div>
        </div>
      )}

      {/* 按地域分组的怪物网格 */}
      {regionOrder.map((regionId) => {
        const regionMeta = REGIONS.find((r) => r.id === regionId);
        if (!regionMeta) return null;
        const monsterIds = regionGroups[regionId] ?? [];
        if (monsterIds.length === 0) return null;

        return (
          <section key={regionId} style={{ marginBottom: '1.5rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.5rem 0.75rem',
              borderLeft: `4px solid ${regionMeta.hue}`,
              marginBottom: '0.75rem',
            }}>
              <h3 style={{ margin: 0, fontSize: '1rem' }}>{regionMeta.name}</h3>
              <small style={{ opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{regionMeta.en}</small>
              <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#888' }}>{monsterIds.length}</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
              gap: '0.75rem',
            }}>
              {monsterIds.map((id) => {
                const tier = enemyTier(id);
                const isSelected = selectedMonster === id;
                return (
                  <div
                    key={id}
                    role="button"
                    tabIndex={0}
                    onClick={() => { setSelectedMonster(id); setPlayingAnimation('idle'); }}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedMonster(id); setPlayingAnimation('idle'); } }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      background: isSelected ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.04)',
                      cursor: 'pointer',
                    }}
                  >
                    <EnemySprite id={id} size={110} animate={false} />
                    <span style={{ marginTop: '4px', fontSize: '0.7rem', textAlign: 'center' }}>{id}</span>
                    <span style={{ marginTop: '2px', fontSize: '0.6rem', color: '#888' }}>{tierLabel(tier)}</span>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
