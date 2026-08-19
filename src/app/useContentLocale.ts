/**
 * Hook that wraps game content resolvers with locale-aware name/description.
 * Use in pages that display card, enemy, relic, potion, or character info.
 */
import { useMemo } from 'react';
import { useLocale } from './locale';
import { localizedName, localizedDescription, CONTENT_EN, STATUS_EN } from './contentLocale';
import { CARD_CATALOG } from '../data/cards/basicCards';
import { BASIC_ENEMIES } from '../data/enemies/basicEnemies';
import { BASIC_POTIONS } from '../data/potions/basicPotions';
import { BASIC_RELICS } from '../data/relics/basicRelics';
import { BASIC_STATUSES } from '../data/statuses/basicStatuses';
import { CHARACTERS } from '../data/characters/characters';
import type { CardDefinition } from '../game/combat/cardTypes';

export function useContentLocale() {
  const { locale } = useLocale();
  return useMemo(() => ({
    cardName: (card: CardDefinition) => localizedName(card.id, card.name, locale),
    cardDesc: (card: CardDefinition) => localizedDescription(card.id, card.description, locale) ?? card.description,
    enemyName: (id: string) => { const e = BASIC_ENEMIES[id]; return e ? localizedName(id, e.name, locale) : id; },
    relicName: (id: string) => { const r = BASIC_RELICS[id]; return r ? localizedName(id, r.name, locale) : id; },
    relicDesc: (id: string) => { const r = BASIC_RELICS[id]; return r ? (localizedDescription(id, r.description, locale) ?? r.description) : ''; },
    potionName: (id: string) => { const p = BASIC_POTIONS[id]; return p ? localizedName(id, p.name, locale) : id; },
    potionDesc: (id: string) => { const p = BASIC_POTIONS[id]; return p ? (localizedDescription(id, p.description, locale) ?? p.description) : ''; },
    statusName: (id: string) => { const status = BASIC_STATUSES[id]; return status ? (locale === 'en' ? (STATUS_EN[id] ?? status.name) : status.name) : id; },
    characterName: (id: string) => { const c = CHARACTERS[id]; return c ? localizedName(id, c.name, locale) : id; },
    characterDesc: (id: string) => { const c = CHARACTERS[id]; return c ? (localizedDescription(id, c.description ?? '', locale) ?? c.description ?? '') : ''; },
    characterSig: (id: string) => { const c = CHARACTERS[id]; if (!c) return ''; return locale === 'en' ? (CONTENT_EN[id]?.signature ?? c.signature ?? '') : (c.signature ?? ''); },
    locale,
  }), [locale]);
}
