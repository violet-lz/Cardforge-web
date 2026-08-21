import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocale } from '../app/locale';
import EnemySprite from '../components/enemies/EnemySprite';
import { MONSTER_VISUALS, REGIONS, REGION_OF, enemyTier, tierLabel } from '../game/enemies/monsterVisuals';
import { BASIC_ENEMIES } from '../data/enemies/basicEnemies';

interface Props { onBack: () => void; }

interface RegionData {
  id: string;
  name: string;
  en: string;
  hue: string;
  monsters: string[];
}

function RegionSection({
  region,
  expanded,
  onExpand,
  playingClip,
  onPlay,
}: {
  region: RegionData;
  expanded: string | null;
  onExpand: (id: string | null) => void;
  playingClip: string | undefined;
  onPlay: (clip: string) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { rootMargin: '200px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="region-section" aria-label={region.name}>
      <div className="region-header" style={{ '--region-hue': region.hue } as React.CSSProperties}>
        <h2>{region.name}</h2>
        <small>{region.en}</small>
        <span className="region-count">{region.monsters.length}</span>
      </div>
      {visible && (
        <div className="monster-grid">
          {region.monsters.map((id) => {
            const tier = enemyTier(id);
            const isExpanded = expanded === id;
            return (
              <div key={id}>
                <article
                  className={`monster-card${isExpanded ? ' monster-card-active' : ''}`}
                  onClick={() => onExpand(isExpanded ? null : id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onExpand(isExpanded ? null : id); } }}
                >
                  <EnemySprite id={id} size={120} />
                  <span className="monster-name">{BASIC_ENEMIES[id]?.name ?? id}</span>
                  <span className={`tier-badge tier-${tier}`}>{tierLabel(tier)}</span>
                </article>
                {isExpanded && (
                  <div className="monster-detail-panel">
                    <EnemySprite id={id} size={240} animation={playingClip} onAnimationEnd={() => onPlay('')} />
                    <div className="anim-controls">
                      <button onClick={(e) => { e.stopPropagation(); onPlay('hit'); }}>受击</button>
                      <button onClick={(e) => { e.stopPropagation(); onPlay('attack1'); }}>攻击</button>
                      <button onClick={(e) => { e.stopPropagation(); onPlay('defend'); }}>防御</button>
                      <button onClick={(e) => { e.stopPropagation(); onPlay('skill1'); }}>技能</button>
                      <button onClick={(e) => { e.stopPropagation(); onPlay('skill2'); }}>召唤</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export function MonsterCompendiumPage({ onBack }: Props) {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [playingClip, setPlayingClip] = useState<string | undefined>(undefined);

  // Group monsters by region
  const monstersByRegion: RegionData[] = REGIONS.map((region) => ({
    ...region,
    monsters: Object.entries(REGION_OF)
      .filter(([, regionId]) => regionId === region.id)
      .map(([monsterId]) => monsterId)
      .filter((id) => MONSTER_VISUALS[id]),
  }));

  const handleAnimPlay = useCallback((clipName: string) => {
    if (!clipName) { setPlayingClip(undefined); return; }
    setPlayingClip(clipName);
    setTimeout(() => setPlayingClip(undefined), 1200);
  }, []);

  const totalMonsters = Object.keys(MONSTER_VISUALS).length;

  return (
    <main className="run-shell compendium-shell monster-compendium">
      <header className="run-header">
        <div>
          <p className="eyebrow">MONSTER ARCHIVE · 怪物图鉴</p>
          <h1>{t('home.monsterArchive')}</h1>
          <p className="subtitle">{t('home.monsterArchiveDetail')} · {totalMonsters}</p>
        </div>
        <button className="text-button" onClick={onBack}>{t('backHome')}</button>
      </header>

      {monstersByRegion.map((region) => (
        <RegionSection
          key={region.id}
          region={region}
          expanded={expanded}
          onExpand={setExpanded}
          playingClip={playingClip}
          onPlay={handleAnimPlay}
        />
      ))}
    </main>
  );
}
