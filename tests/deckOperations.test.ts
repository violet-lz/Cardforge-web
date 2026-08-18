import { describe, expect, it } from 'vitest';
import { createCardInstance } from '../src/game/combat/deckEngine';
import { applyDeckOperation, eligibleDeckCards } from '../src/game/run/deckOperations';

describe('persistent deck selection operations', () => {
  it('removes the selected UID without affecting another copy of the same definition', () => {
    const first = createCardInstance('strike', 'strike-a');
    const second = createCardInstance('strike', 'strike-b');
    expect(applyDeckOperation([first, second], 'remove', 'strike-b')).toEqual([first]);
  });

  it('upgrades only the selected eligible instance and preserves its UID', () => {
    const first = createCardInstance('defend', 'defend-a');
    const second = createCardInstance('defend', 'defend-b');
    const result = applyDeckOperation([first, second], 'upgrade', 'defend-b');
    expect(result[0]).toEqual(first);
    expect(result[1]).toMatchObject({ uid: 'defend-b', upgraded: true });
    expect(result[1].modifiers).toContainEqual({ damageDelta: 2, blockDelta: 2 });
  });

  it('rejects targets that are missing or already upgraded', () => {
    const upgraded = { ...createCardInstance('defend', 'defend-a'), upgraded: true };
    expect(eligibleDeckCards([upgraded], 'upgrade')).toEqual([]);
    expect(() => applyDeckOperation([upgraded], 'upgrade', 'defend-a')).toThrow('already upgraded');
    expect(() => applyDeckOperation([upgraded], 'remove', 'missing')).toThrow('not in the persistent deck');
  });
});
