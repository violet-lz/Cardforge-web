import { useEffect, useRef, useState } from 'react';
import { biomeById, transitionStory, type BiomeId } from '../data/biomes/biomes';

interface Transition { from: BiomeId; to: BiomeId; }

export function RegionTransitionOverlay({ regionId }: { regionId?: BiomeId }) {
  const previous = useRef<BiomeId>();
  const [transition, setTransition] = useState<Transition | null>(null);
  useEffect(() => {
    if (!regionId) return;
    if (!previous.current) { previous.current = regionId; return; }
    if (previous.current === regionId) return;
    const next = { from: previous.current, to: regionId };
    previous.current = regionId;
    setTransition(next);
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 900 : 4200;
    const timeout = window.setTimeout(() => setTransition(null), duration);
    return () => window.clearTimeout(timeout);
  }, [regionId]);
  if (!transition) return null;
  const destination = biomeById(transition.to);
  return <div className={`region-transition ${destination.accentClass}`} role="status" aria-live="polite">
    <div className="transition-smoke smoke-left" aria-hidden="true" />
    <div className="transition-smoke smoke-right" aria-hidden="true" />
    <section className="transition-barrier">
      <p className="eyebrow">THE ROAD CONTINUES</p>
      <h2>前往 · {destination.name}</h2>
      <p>{transitionStory(transition.from, transition.to)}</p>
      <button className="text-button" onClick={() => setTransition(null)}>跳过</button>
    </section>
  </div>;
}
