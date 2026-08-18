import { describe, expect, it } from 'vitest';
import { BIOMES, type BiomeId } from '../src/data/biomes/biomes';
import { BASIC_CARDS } from '../src/data/cards/basicCards';
import { BASIC_ENEMIES } from '../src/data/enemies/basicEnemies';
import { encounterCatalog, selectEncounter } from '../src/data/encounters/basicEncounters';
import { eventCatalog, selectEvent } from '../src/data/events/basicEvents';
import { createShop, shopCatalog } from '../src/data/shops/basicShops';
import { createReward, rewardCardCatalog } from '../src/game/run/contentSelection';
import { startCombat, resolveEnemyTurn } from '../src/game/combat/combatEngine';
import { createCardInstance } from '../src/game/combat/deckEngine';
import type { PlayerState } from '../src/game/engine/types';

function isAllowed(entry: { biomeIds?: readonly BiomeId[] }, biomeId: BiomeId): boolean {
  return !entry.biomeIds?.length || entry.biomeIds.includes(biomeId);
}

describe('content pools', () => {
  it('selects deterministic encounters, events, shops, and rewards', () => {
    expect(selectEncounter(31, 'combat', 3)).toEqual(selectEncounter(31, 'combat', 3));
    expect(selectEvent(31, 2)).toEqual(selectEvent(31, 2));
    expect(createShop(31, 2)).toEqual(createShop(31, 2));
    expect(createReward(31, 2, false)).toEqual(createReward(31, 2, false));
    expect(new Set(createShop(31, 2).items.map((item) => `${item.kind}:${item.id}`)).size).toBe(createShop(31, 2).items.length);
    expect(eventCatalog().length).toBeGreaterThanOrEqual(8);
  });

  it('filters encounter, event, shop, and reward pools by the active biome', () => {
    for (const biome of BIOMES) {
      for (let seed = 1; seed <= 30; seed += 1) {
        const encounter = selectEncounter(seed, 'combat', 8, biome.id === 'cinder-fields' ? 1 : biome.id === 'bonebind-hamlet' ? 2 : 3, biome.id);
        const matchingEncounters = encounterCatalog().filter((entry) => entry.enemyIds.join('|') === encounter.map((enemy) => enemy.id).join('|'));
        expect(matchingEncounters.some((entry) => isAllowed(entry, biome.id))).toBe(true);
        const event = selectEvent(seed, 6, biome.id);
        expect(isAllowed(eventCatalog().find((entry) => entry.id === event.id)!, biome.id)).toBe(true);
        const shop = createShop(seed, 6, biome.id);
        expect(shop.items.every((item) => isAllowed(shopCatalog().find((entry) => entry.id === item.id && entry.kind === item.kind)!, biome.id))).toBe(true);
        const reward = createReward(seed, 6, false, biome.id);
        expect(reward.cardChoices.every((id) => isAllowed(rewardCardCatalog().find((entry) => entry.id === id)!, biome.id))).toBe(true);
      }
    }
  });

  it('keeps shared content as a deterministic fallback in every biome', () => {
    for (const biome of BIOMES) {
      expect(createShop(99, 4, biome.id).items.some((item) => item.kind === 'remove' || item.kind === 'upgrade')).toBe(true);
      expect([selectEvent(99, 4, biome.id), selectEvent(99, 4, biome.id)]).toEqual([selectEvent(99, 4, biome.id), selectEvent(99, 4, biome.id)]);
    }
  });

  it('offers distinct enemy responsibilities and broader card archetypes', () => {
    expect(Object.keys(BASIC_CARDS).length).toBeGreaterThanOrEqual(50);
    expect(new Set(Object.keys(BASIC_CARDS)).size).toBe(Object.keys(BASIC_CARDS).length);
    expect(Object.values(BASIC_ENEMIES).some((enemy) => enemy.behavior.intents.some((intent) => intent.type === 'pollute'))).toBe(true);
    expect(['ember-scar', 'fading-script', 'iron-mire', 'rattling-burden', 'black-seal'].every((id) => Boolean(BASIC_CARDS[id]))).toBe(true);
    expect(Object.values(BASIC_ENEMIES).some((enemy) => enemy.behavior.intents.some((intent) => intent.type === 'status'))).toBe(true);
    expect(Object.values(BASIC_CARDS).some((card) => card.effects.some((effect) => effect.type === 'damage' && (effect.hits ?? 1) > 1))).toBe(true);
    expect(Object.values(BASIC_CARDS).some((card) => card.target === 'all-enemies')).toBe(true);
    expect(Object.values(BASIC_CARDS).some((card) => card.type === 'power')).toBe(true);
  });

  it('resolves a status intent against the player', () => {
    const player: PlayerState = { characterId: 'wanderer', hp: 70, maxHp: 70, gold: 0, deck: [createCardInstance('strike', 'test-strike')], relics: [], potions: [] };
    const combat = startCombat(player, 5, [BASIC_ENEMIES['glass-moth']]);
    expect(resolveEnemyTurn({ ...combat, phase: 'enemy-turn' }).player.weak).toBeGreaterThan(0);
  });
});
