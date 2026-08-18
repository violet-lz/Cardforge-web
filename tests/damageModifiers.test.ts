import { describe, expect, it } from 'vitest';
import { calculateModifiedDamage, resolveDamage } from '../src/game/combat/damageEngine';

describe('damage modifiers', () => {
  it('applies strength and weak in the damage pipeline', () => {
    expect(calculateModifiedDamage({ base: 8, strength: 2, weak: true })).toBe(7);
  });

  it('supports vulnerable and multi-hit attacks', () => {
    expect(resolveDamage({ base: 4, vulnerable: true, hits: 3 }, 0).hpLoss).toBe(18);
  });
});
