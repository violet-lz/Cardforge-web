import { describe, expect, it } from 'vitest';
import { SeededRng } from '../src/game/rng/SeededRng';

describe('SeededRng', () => {
  it('returns the same sequence for the same seed', () => {
    const first = new SeededRng(12345);
    const second = new SeededRng(12345);
    expect([first.nextUint32(), first.nextUint32(), first.nextUint32()]).toEqual([
      second.nextUint32(), second.nextUint32(), second.nextUint32(),
    ]);
  });

  it('returns integers inside an inclusive range', () => {
    const rng = new SeededRng(7);
    for (let i = 0; i < 20; i += 1) expect(rng.nextInt(2, 4)).toBeGreaterThanOrEqual(2);
  });
});
