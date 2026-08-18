import type { CardDefinition, CardInstance, CardModifier } from './cardTypes';
import { SeededRng } from '../rng/SeededRng';

export interface DeckState { drawPile: CardInstance[]; hand: CardInstance[]; discardPile: CardInstance[]; exhaustPile: CardInstance[]; powerPile: CardInstance[]; }
export function createCardInstance(definitionId: string, uid: string, temporary = false): CardInstance { return { uid, definitionId, upgraded: false, modifiers: [], temporary }; }
export function createDeck(cards: CardInstance[] | string[]): DeckState {
  const instances = cards.map((card, index) => typeof card === 'string' ? createCardInstance(card, `${card}-${index}`) : { ...card, modifiers: [...(card.modifiers ?? [])] });
  return { drawPile: [...instances], hand: [], discardPile: [], exhaustPile: [], powerPile: [] };
}
export function drawCards(deck: DeckState, amount: number, rng: SeededRng): { deck: DeckState; drawn: CardInstance[] } {
  if (!Number.isInteger(amount) || amount < 0) throw new Error('Draw amount must be a non-negative integer'); const next = cloneDeck(deck); const drawn: CardInstance[] = [];
  while (drawn.length < amount) { if (!next.drawPile.length) { if (!next.discardPile.length) break; next.drawPile = rng.shuffle(next.discardPile); next.discardPile = []; } const card = next.drawPile.shift(); if (!card) break; next.hand.push(card); drawn.push(card); }
  return { deck: next, drawn };
}
export function discardHand(deck: DeckState, definitionFor: (card: CardInstance) => CardDefinition | undefined): DeckState {
  const next = cloneDeck(deck); for (const card of next.hand) { const definition = definitionFor(card); if (definition?.keywords?.includes('retain')) continue; if (definition?.keywords?.includes('ethereal')) next.exhaustPile.push(card); else next.discardPile.push(card); } next.hand = next.hand.filter((card) => definitionFor(card)?.keywords?.includes('retain')); return next;
}
export function moveCardFromHand(deck: DeckState, uid: string, destination: 'discard' | 'exhaust' | 'power'): DeckState { const next = cloneDeck(deck); const index = next.hand.findIndex((card) => card.uid === uid); if (index < 0) throw new Error(`Card ${uid} is not in hand`); const [card] = next.hand.splice(index, 1); next[destination === 'discard' ? 'discardPile' : destination === 'power' ? 'powerPile' : 'exhaustPile'].push(card); return next; }
export function addTemporaryCard(deck: DeckState, card: CardInstance): DeckState { return { ...cloneDeck(deck), discardPile: [...deck.discardPile, card] }; }
export function persistentCards(deck: DeckState): CardInstance[] { return [deck.drawPile, deck.hand, deck.discardPile, deck.exhaustPile, deck.powerPile].flat().filter((card) => !card.temporary).map((card) => ({ ...card, modifiers: [...(card.modifiers ?? [])] })); }
export function upgradeCard(card: CardInstance, modifier?: CardModifier): CardInstance { return { ...card, upgraded: true, modifiers: modifier ? [...(card.modifiers ?? []), modifier] : [...(card.modifiers ?? [])] }; }
export function transformCard(card: CardInstance, definitionId: string): CardInstance { if (!definitionId) throw new Error('Transformed card must have a definition id'); return { ...card, definitionId, upgraded: false, modifiers: [] }; }
export function removeCard(cards: CardInstance[], uid: string): CardInstance[] { const next = cards.filter((card) => card.uid !== uid); if (next.length === cards.length) throw new Error(`Card ${uid} was not found`); return next; }
function cloneDeck(deck: DeckState): DeckState { return { drawPile: [...deck.drawPile], hand: [...deck.hand], discardPile: [...deck.discardPile], exhaustPile: [...deck.exhaustPile], powerPile: [...deck.powerPile] }; }
