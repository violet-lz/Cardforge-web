import { describe, expect, it } from 'vitest';
import { CHARACTERS } from '../src/data/characters/characters';
import { simulateFirstAct } from '../src/game/run/firstActSimulator';

const SEED_GROUPS = [103, 211, 307, 419, 523, 631, 743, 857, 971, 1087];
const CHARACTER_IDS = Object.keys(CHARACTERS).filter((id) => !id.startsWith('legacy-'));

describe('first-act base-deck survival corpus', () => {
  for (const seed of SEED_GROUPS) {
    it(`group seed ${seed}: every starting character reaches the first boss alive`, () => {
      for (const characterId of CHARACTER_IDS) {
        const first = simulateFirstAct(seed, characterId);
        const replay = simulateFirstAct(seed, characterId);
        expect(replay).toEqual(first);
        expect(first.deckUnchanged, `${characterId} must retain its unmodified base deck`).toBe(true);
        expect(first.route.at(-1)).toContain('-L11-N0');
        expect(first.combats).toBeGreaterThanOrEqual(1);
        expect(first.survived, `${characterId} failed seed ${seed}; HP ${first.finalHp}; route ${first.route.join(' > ')}`).toBe(true);
        expect(first.finalHp).toBeGreaterThanOrEqual(1);
      }
    });
  }
});
