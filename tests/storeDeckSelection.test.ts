import { afterEach, describe, expect, it } from 'vitest';
import { createRun } from '../src/game/run/createRun';
import { createReplay } from '../src/game/replay/replayEngine';
import { useGameStore } from '../src/stores/gameStore';
function memoryStorage(): Storage { const values = new Map<string, string>(); return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key), clear: () => values.clear(), key: (index) => [...values.keys()][index] ?? null, get length() { return values.size; } }; }
const storage = memoryStorage(); Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage });
afterEach(() => useGameStore.setState({ gameState: createRun(1, 1), hydrated: false }));
describe('persistent deck selection in the game store', () => {
 it('rejects an unaffordable event, then records the selected instance UID for an affordable one', () => {
  const state = createRun(41, 1); const target = state.player!.deck[1]; const event = { id: 'test-event', title: '测试', description: '测试', choices: [{ id: 'remove', label: '剥离', description: '选择一张卡。', hpDelta: 0, goldDelta: -10, removeFirstCard: true }] };
  const setup = { ...state, mode: 'event' as const, event, player: { ...state.player!, gold: 9 }, replay: createReplay(41) }; useGameStore.setState({ gameState: setup, hydrated: true });
  useGameStore.getState().chooseEvent('remove', target.uid);
  expect(useGameStore.getState().gameState).toBe(setup);
  useGameStore.setState({ gameState: { ...setup, player: { ...setup.player, gold: 10 } } }); useGameStore.getState().chooseEvent('remove', target.uid);
  const result = useGameStore.getState().gameState;
  expect(result.player?.deck.some((card) => card.uid === target.uid)).toBe(false);
  expect(result.replay?.actions.at(-1)).toMatchObject({ type: 'event-choice', payload: { choiceId: 'remove', cardUid: target.uid } });
 });
});
