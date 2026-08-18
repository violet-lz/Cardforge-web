import { describe, expect, it } from 'vitest';
import { BASIC_CARDS } from '../src/data/cards/basicCards';
import { BASIC_ENEMIES } from '../src/data/enemies/basicEnemies';
import { finishPlayerTurn, playCardAndResolve, resolveEnemyTurn, startCombat } from '../src/game/combat/combatEngine';
import { createCardInstance, persistentCards, upgradeCard } from '../src/game/combat/deckEngine';
import type { PlayerState } from '../src/game/engine/types';
const player = (deck: string[]): PlayerState => ({ characterId: 'wanderer', hp: 70, maxHp: 70, gold: 0, deck: deck.map((id, index) => createCardInstance(id, `card-${index}`)), relics: [], potions: [] });
describe('persistent deck and keyword lifecycle', () => {
  it('keeps upgrades and played powers in the persistent post-combat deck', () => {
    const upgraded = upgradeCard(createCardInstance('first-watch', 'guard'), { blockDelta: 2 });
    const state = startCombat({ ...player(['ash-call']), deck: [upgraded, createCardInstance('ash-call', 'power')] }, 1, [BASIC_ENEMIES.ashling]);
    const power = state.deck.hand.find((card) => card.definitionId === 'ash-call')!;
    const played = playCardAndResolve(state, power.uid, BASIC_CARDS['ash-call']);
    expect(played.deck.powerPile.map((card) => card.definitionId)).toContain('ash-call');
    expect(persistentCards(played.deck).find((card) => card.uid === 'guard')?.upgraded).toBe(true);
  });
  it('retains retain cards and exhausts unplayed ethereal cards at end turn', () => {
    const state = startCombat(player(['hollow-compass', 'fading-script']), 2, [BASIC_ENEMIES.ashling]);
    const ended = finishPlayerTurn(state);
    expect(ended.deck.hand.map((card) => card.definitionId)).toContain('hollow-compass');
    expect(ended.deck.exhaustPile.map((card) => card.definitionId)).toContain('fading-script');
  });
  it('injects temporary pollution and removes it from the persistent deck', () => {
    const state = startCombat(player(['strike']), 3, [BASIC_ENEMIES['ink-leech']]);
    const polluted = resolveEnemyTurn({ ...state, phase: 'enemy-turn' });
    expect([polluted.deck.hand, polluted.deck.discardPile, polluted.deck.drawPile].flat().some((card) => card.polluted)).toBe(true);
    expect(persistentCards(polluted.deck).some((card) => card.polluted)).toBe(false);
  });
});
