import { afterEach, describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { BASIC_CARDS } from '../src/data/cards/basicCards';
import { BASIC_ENEMIES } from '../src/data/enemies/basicEnemies';
import { ContentAppearance } from '../src/components/content/ContentAppearance';
import { MONSTER_VISUALS } from '../src/game/enemies/monsterVisuals';
import { resolveEnemyVisualSpec } from '../src/components/enemies/EnemySprite';
import {
  contentOrigin,
  importCustomContent,
  isBuiltInContentId,
  resetCustomContent,
  replaceCustomContent,
  type CustomContentPackV1,
} from '../src/game/content/customContent';

class MemoryStorage {
  private value: string | null = null;
  getItem(): string | null { return this.value; }
  setItem(_key: string, value: string): void { this.value = value; }
}

const emptyPack = (): CustomContentPackV1 => ({ version: 1, cards: {}, characters: {}, enemies: {}, relics: {}, potions: {} });

describe('content appearance boundaries', () => {
  afterEach(() => resetCustomContent());

  it('covers every live built-in enemy with a mapped visual specification', () => {
    const missing = Object.keys(BASIC_ENEMIES).filter((id) => !MONSTER_VISUALS[id]);
    expect(missing).toEqual([]);
    expect(MONSTER_VISUALS['legacy-rat-pack-b']).toBeUndefined();
    expect(resolveEnemyVisualSpec('ashling')).toBe(MONSTER_VISUALS.ashling);
    expect(resolveEnemyVisualSpec('new-player-enemy')).toBeUndefined();
  });

  it('classifies an overridden built-in ID as built-in and a new ID as custom', () => {
    const pack = emptyPack();
    pack.cards.strike = { ...BASIC_CARDS.strike, name: '玩家覆盖卡牌' };
    pack.cards['new-player-card'] = { ...BASIC_CARDS.strike, id: 'new-player-card', name: '新增卡牌' };
    replaceCustomContent(pack, new MemoryStorage());

    expect(isBuiltInContentId('cards', 'strike')).toBe(true);
    expect(contentOrigin('cards', 'strike')).toBe('builtin');
    expect(isBuiltInContentId('cards', 'new-player-card')).toBe(false);
    expect(contentOrigin('cards', 'new-player-card')).toBe('custom');
    expect(BASIC_CARDS.strike.name).toBe('玩家覆盖卡牌');
  });

  it('renders fixed default art only for new content in every category', () => {
    const categories = [
      ['characters', 'wanderer', 'new-player-character'],
      ['cards', 'strike', 'new-player-card'],
      ['enemies', 'ashling', 'new-player-enemy'],
      ['relics', 'ember-seal', 'new-player-relic'],
      ['potions', 'ember-tonic', 'new-player-potion'],
    ] as const;

    for (const [category, builtInId, customId] of categories) {
      const builtInMarkup = renderToStaticMarkup(createElement(ContentAppearance, {
        category,
        id: builtInId,
        label: builtInId,
        defaultLabel: 'System default appearance',
        enemyFallbackLabel: 'Custom fallback',
        featureHeading: 'Visual features',
      }));
      if (category === 'enemies') expect(builtInMarkup).toContain('data-content-origin="builtin"');
      else expect(builtInMarkup).toBe('');

      const customMarkup = renderToStaticMarkup(createElement(ContentAppearance, {
        category,
        id: customId,
        label: customId,
        defaultLabel: 'System default appearance',
        enemyFallbackLabel: 'Custom fallback',
        featureHeading: 'Visual features',
      }));
      expect(customMarkup).toContain('data-content-origin="custom"');
      if (category === 'enemies') expect(customMarkup).toContain('Custom fallback');
    }
  });

  it('rejects visual fields recursively without mutating the active overlay', () => {
    const pack = emptyPack();
    pack.enemies['visual-enemy'] = {
      id: 'visual-enemy',
      name: '带外观字段的敌人',
      maxHp: 20,
      behavior: { type: 'cycle', intents: [{ type: 'attack', amount: 5, label: '攻击 5', imageUrl: 'https://example.invalid/monster.svg' }] },
    };

    expect(() => importCustomContent(JSON.stringify(pack), undefined, false)).toThrow(/imageUrl|visual fields/);
    expect(Object.keys(pack.enemies)).toEqual(['visual-enemy']);
    expect(contentOrigin('enemies', 'visual-enemy')).toBe('custom');
  });
});
