import { describe, expect, it } from 'vitest';
import { createRun } from '../src/game/run/createRun';
import { loadGame, SAVE_KEY, saveGame } from '../src/game/save/saveSystem';

function memoryStorage(): Storage {
  const values = new Map<string, string>();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
    clear: () => values.clear(),
    key: (index) => [...values.keys()][index] ?? null,
    get length() { return values.size; },
  };
}

describe('save system', () => {
  it('round-trips a run through versioned JSON', () => {
    const storage = memoryStorage();
    const state = createRun(42, 1000);
    saveGame(state, storage);
    expect(storage.getItem(SAVE_KEY)).toContain('"version":5');
    expect(loadGame(storage)).toEqual(state);
  });

  it('migrates a v1 string deck into stable card instances and rejects malformed saves', () => {
    const storage = memoryStorage();
    const legacy = createRun(7, 1) as unknown as { player: { deck: string[] }; schemaVersion: number };
    legacy.schemaVersion = 1; legacy.player.deck = ['strike', 'defend'];
    storage.setItem(SAVE_KEY, JSON.stringify({ version: 1, savedAt: 1, state: legacy }));
    expect(loadGame(storage)?.player?.deck.map((card) => card.definitionId)).toEqual(['strike', 'defend']);
    storage.setItem(SAVE_KEY, JSON.stringify({ version: 2, state: { schemaVersion: 2, mode: 'nonsense' } }));
    expect(loadGame(storage)).toBeNull();
  });
});
