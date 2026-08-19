import { useState } from 'react';
import { useLocale } from '../app/locale';
import { DeckChoicePanel } from '../components/DeckChoicePanel';
import type { CardInstance } from '../game/combat/cardTypes';
import { eventDeckOperation } from '../game/run/deckOperations';
import type { EventState } from '../game/run/eventTypes';
export function EventPage({ event, deck, gold, onChoose }: { event: EventState; deck: CardInstance[]; gold: number; onChoose: (id: string, cardUid?: string) => void }) {
 const { t } = useLocale(); const consequence = (value: number, noun: string) => value === 0 ? t('event.noChange', { noun }) : `${value > 0 ? '+' : ''}${value} ${noun}`;
 const [pendingChoiceId, setPendingChoiceId] = useState<string>(); const pending = event.choices.find((choice) => choice.id === pendingChoiceId); const operation = pending && eventDeckOperation(pending);
 return <main className={`run-shell event-${event.id}`}><section className="panel special-panel event-panel"><p className="eyebrow">{t('event.eyebrow')}</p><span className="event-mark" aria-hidden="true">◌</span><h1>{event.title}</h1><p className="event-copy">{event.description}</p>{pending && operation ? <DeckChoicePanel deck={deck} operation={operation} onChoose={(cardUid) => onChoose(pending.id, cardUid)} onCancel={() => setPendingChoiceId(undefined)} /> : <div className="choice-list">{event.choices.map((choice) => { const unaffordable = choice.goldDelta < 0 && gold < -choice.goldDelta; return <button className="secondary-button choice-button" key={choice.id} disabled={unaffordable} onClick={() => { if (eventDeckOperation(choice)) setPendingChoiceId(choice.id); else onChoose(choice.id); }}><strong>{choice.label}</strong><small>{choice.description}</small><span className="choice-consequences"><b>{consequence(choice.hpDelta, t('event.hp'))}</b><b>{consequence(choice.goldDelta, t('event.gold'))}</b>{unaffordable && <b>{t('event.shortGold')}</b>}</span></button>; })}</div>}</section></main>;
}
