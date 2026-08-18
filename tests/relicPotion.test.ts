import { describe, expect, it } from 'vitest';
import { BASIC_ENEMIES } from '../src/data/enemies/basicEnemies';
import { BASIC_POTIONS } from '../src/data/potions/basicPotions';
import { startCombat } from '../src/game/combat/combatEngine';
import { usePotion } from '../src/game/potion/potionEngine';
import { createCardInstance } from '../src/game/combat/deckEngine';
import type { PlayerState } from '../src/game/engine/types';

const player: PlayerState = { characterId: 'wanderer', hp: 40, maxHp: 70, gold: 0, deck: [createCardInstance('strike', 'test-strike')], relics: ['ember-seal'], potions: ['ember-tonic'] };

describe('relic and potion systems', () => {
  it('applies combat-start relic triggers', () => expect(startCombat(player, 1, [BASIC_ENEMIES.ashling]).player.strength).toBe(1));
  it('consumes a potion and clamps healing at max hp', () => {
    const combat = startCombat(player, 1, [BASIC_ENEMIES.ashling]);
    const healed = usePotion(combat, BASIC_POTIONS['ember-tonic']);
    expect(healed.player.hp).toBe(52);
    expect(healed.potionIds).toEqual([]);
  });
});
