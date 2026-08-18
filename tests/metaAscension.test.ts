import { describe, expect, it } from 'vitest';
import { activeAscensionModifiers } from '../src/data/ascension/modifiers';
import { createMetaProgress, recordVictory } from '../src/game/ascension/metaEngine';

describe('meta progress and ascension', () => {
  it('returns cumulative modifiers by level', () => expect(activeAscensionModifiers(2).map((item) => item.id)).toEqual(['a1-enemy-hp', 'a2-starting-gold']));
  it('records a victory once', () => {
    const meta = recordVictory(createMetaProgress());
    expect(recordVictory(meta).achievements).toEqual(['first-victory']);
  });
});
