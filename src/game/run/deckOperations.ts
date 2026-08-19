import type { CardInstance, CardModifier } from '../combat/cardTypes';
import { CARD_CATALOG } from '../../data/cards/basicCards';
import { removeCard, upgradeCard } from '../combat/deckEngine';

export type DeckOperation = 'remove' | 'upgrade';
export const STANDARD_UPGRADE: CardModifier = { damageDelta: 2, blockDelta: 2 };

/** A card can be upgraded in-run (篝火/商店/事件) if its upgradeLevel is still < 1. */
export function eligibleDeckCards(deck: CardInstance[], operation: DeckOperation): CardInstance[] {
  return deck.filter((card) => operation !== 'upgrade' || (card.upgradeLevel ?? (card.upgraded ? 1 : 0)) < 1);
}

export function applyDeckOperation(deck: CardInstance[], operation: DeckOperation, cardUid: string, modifier?: CardModifier): CardInstance[] {
  const target = deck.find((card) => card.uid === cardUid);
  if (!target) throw new Error(`Card ${cardUid} is not in the persistent deck`);
  if (operation === 'remove') return removeCard(deck, cardUid);
  const currentLevel = target.upgradeLevel ?? (target.upgraded ? 1 : 0);
  if (currentLevel >= 1) throw new Error(`Card ${cardUid} is already upgraded to level 1`);
  const appliedModifier = modifier ?? (CARD_CATALOG[target.definitionId]?.upgrade ? undefined : STANDARD_UPGRADE);
  return deck.map((card) => card.uid === cardUid ? { ...upgradeCard(card, appliedModifier), upgradeLevel: 1 } : card);
}

export function eventDeckOperation(choice: { removeFirstCard?: boolean; upgradeFirstCard?: boolean }): DeckOperation | undefined {
  if (choice.removeFirstCard) return 'remove';
  if (choice.upgradeFirstCard) return 'upgrade';
  return undefined;
}
