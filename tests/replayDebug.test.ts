import { describe, expect, it } from 'vitest';
import { createDebugSnapshot } from '../src/game/debug/debugSnapshot';
import { createReplay, recordReplayAction, replayFingerprint } from '../src/game/replay/replayEngine';
import { createRun } from '../src/game/run/createRun';
describe('replay and debug', () => {
 it('records a deterministic action fingerprint', () => { const action = { type: 'event-choice' as const, payload: { choiceId: 'strip-slate', cardUid: 'strike-2' } }; const first = recordReplayAction(createReplay(4), action); const second = recordReplayAction(createReplay(4), action); expect(replayFingerprint(first)).toBe(replayFingerprint(second)); expect(first.actions[0].payload.cardUid).toBe('strike-2'); });
 it('exposes a serializable debug snapshot', () => expect(createDebugSnapshot(createRun(4))).toMatchObject({ mode: 'map', seed: 4, combatLog: [] }));
});
