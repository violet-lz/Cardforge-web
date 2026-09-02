import { useEffect, useState } from 'react';
import { MONSTER_VISUALS, REGION_OF, REGIONS, enemyTier, tierLabel } from '../game/enemies/monsterVisuals';
import EnemySprite from '../components/enemies/EnemySprite';
import { F } from '../game/enemies/monsterVisualTypes';

// 过滤有效怪物 (有 7+ 特征且 6 个关节)
function filterValidMonsters() {
  const valid: string[] = [];
  for (const [id, spec] of Object.entries(MONSTER_VISUALS) as [string, any][]) {
    if (spec.features.length >= 7 && spec.joints?.length === 6) {
      valid.push(id);
    }
  }
  return valid;
}

// 按地域分组
function groupByRegion(ids: string[]) {
  const groups: Record<string, string[]> = {};
  for (const id of ids) {
    const region = REGION_OF[id];
    if (!region) continue;
    if (!groups[region]) groups[region] = [];
    groups[region].push(id);
  }
  return groups;
}

interface MonsterCardProps {
  id: string;
  label?: string;
}

interface AnimationControlProps {
  id: string;
  animationName: string;
  clipName: string;
}

interface MonsterCompendiumPageProps {
  onBack: () => void;
}

export function MonsterCompendiumPage({ onBack }: MonsterCompendiumPageProps) {
  const validIds = filterValidMonsters();
  const regionGroups = groupByRegion(validIds);
  const regionOrder = REGIONS.map(r => r.id);

  // 状态：选中的怪物和正在播放的动画
  const [selectedMonster, setSelectedMonster] = useState<string | null>(null);
  const [playingAnimation, setPlayingAnimation] = useState<string>('idle');

  return (
    <div style={{ padding: '1rem' }}>
      <header style={{ marginBottom: '1rem' }}>
        <button onClick={onBack}>← 返回</button>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>怪物图鉴</h1>
      </header>

      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '1rem',
        overflowY: 'auto',
        maxHeight: '80vh',
      }}>
        {regionOrder.map(regionId => {
          const regionMeta = REGIONS.find(r => r.id === regionId);
          if (!regionMeta) return null;
          const monsterIds = regionGroups[regionId] ?? [];
          
          return (
            <div key={regionId} style={{
              marginBottom: '1.5rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #ddd',
            }}>
              <h3 style={{ margin: '0.5rem 0', fontSize: '0.9rem', fontWeight: 500 }}>
                {regionMeta.name} ({regionMeta.en})
              </h3>
              {monsterIds.map(id => {
                const spec = MONSTER_VISUALS[id];
                if (!spec) return null;
                const tier = enemyTier(id);
                const size = spec.size ?? 1;
                
                return (
                  <div
                    key={id}
                    style={{
                      border: '1px solid #aaa',
                      borderRadius: '4px',
                      padding: '4px',
                      textAlign: 'center',
                      width: '120px',
                      display: 'inline-block',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedMonster(id)}
                  >
                    <EnemySprite
                      id={id}
                      size={120}
                      animate={false} // Idle 静态预览
                      />
                    <div style={{ marginTop: '4px', fontSize: '0.7rem', marginBottom: '2px' }}>
                      {id}\n{tierLabel(tier)}
                    </div>
                  </div>
                );
              })}

              {/* 点击的怪物展开详情面板 */}
              {selectedMonster === id && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#f8f8f8',
                  borderRadius: '4px',
                  maxHeight: '400px',
                  overflowY: 'auto',
                }}>
                  <h4 style={{ margin: '0.5rem 0', fontSize: '0.8rem' }}>
                    {spec.name || id} - {tierLabel(tier)}
                  </h4>
                  
                  <p style={{ margin: '0.5rem 0', fontSize: '0.7rem', color: '#666' }}>
                    <strong>外观特征:</strong> {spec.features.length} 个特征
                  </p>
                  
                  <p style={{ margin: '0.5rem 0', fontSize: '0.7rem', color: '#666' }}>
                    <strong>体型:</strong> {size}
                  </p>
                  
                  <div style={{ margin: '0.8rem 0', fontSize: '0.7rem' }}>
                    <strong>动画控制:</strong> {' '}
                    <button
                      onClick={() => setPlayingAnimation('idle')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Idle
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('hit')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Hit
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('attack1')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Attack1
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('attack2')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Attack2
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('attack3')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Attack3
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('skill1')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Skill1
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('skill2')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Skill2
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('block')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      Block
                    </button>
                    <button
                      onClick={() => setPlayingAnimation('blockReact')}
                      style={{ marginRight: '4px', padding: '4px 8px', fontSize: '0.65rem' }}
                    >
                      BlockReact
                    </button>
                  </div>
                  
                  {/* 动画预览区域 */}
                  <div style={{ marginTop: '1rem' }}>
                    <EnemySprite
                      id={selectedMonster}
                      size={200}
                      animate={true}
                      animation={playingAnimation}
                      onAnimationEnd={() => setPlayingAnimation('idle')}
                    />
                    <p style={{ fontSize: '0.65rem', marginTop: '0.5rem', color: '#666' }}>
                      正在播放: {playingAnimation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* 无数据区域占位 */}
        {regionOrder.map(regionId => {
          const monsterIds = regionGroups[regionId] ?? [];
          if (monsterIds.length === 0) {
            return (
              <div key={`empty-${regionId}`} style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                <p>暂无可展示的怪物</p>
              </div>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
}
