import { describe, expect, it } from 'vitest';
import { resolveDamage } from '../src/game/combat/damageEngine';
import { createDeck, drawCards } from '../src/game/combat/deckEngine';
import { createEnergy, spendEnergy } from '../src/game/combat/energyEngine';
import { SeededRng } from '../src/game/rng/SeededRng';

describe('combat foundation engines', () => {
  it('applies block before hp damage', () => {
    expect(resolveDamage({ base: 10 }, 8)).toMatchObject({ hpLoss: 2, blocked: 8, remainingBlock: 0 });
  });

  it('reshuffles discard when the draw pile is empty', () => {
    const deck = createDeck(['a', 'b']);
    const first = drawCards(deck, 2, new SeededRng(1)).deck;
    first.discardPile = first.hand;
    first.hand = [];
    const result = drawCards(first, 2, new SeededRng(1));
    expect(result.drawn).toHaveLength(2);
    expect(result.deck.discardPile).toHaveLength(0);
  });

  it('spends energy without allowing negative energy', () => {
    expect(spendEnergy(createEnergy(3), 2).current).toBe(1);
    expect(() => spendEnergy(createEnergy(1), 2)).toThrow('Not enough energy');
  });
});
