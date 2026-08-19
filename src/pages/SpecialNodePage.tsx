import { useState } from 'react';
import { useLocale } from '../app/locale';
import { DeckChoicePanel } from '../components/DeckChoicePanel';
import type { CardInstance } from '../game/combat/cardTypes';
import type { SpecialNodeState } from '../game/engine/types';
export function SpecialNodePage({ special, deck, onChoose, onLeave }: { special: SpecialNodeState; deck: CardInstance[]; onChoose: (id: string, cardUid?: string) => void; onLeave: () => void }) {
 const { t } = useLocale(); const [pendingChoiceId, setPendingChoiceId] = useState<string>(); const pending = special.choices.find((choice) => choice.id === pendingChoiceId);
 return <main className={`run-shell special-shell special-${special.nodeType}`}><section className="panel special-panel"><span className="special-scene-mark" aria-hidden="true" /><p className="eyebrow">{special.nodeType === 'rest' ? t('special.rest') : special.nodeType === 'treasure' ? t('special.treasure') : t('special.intermission')}</p><h1>{special.title}</h1><p className="event-copy">{special.description}</p>{pending?.kind === 'upgrade' ? <DeckChoicePanel deck={deck} operation="upgrade" onChoose={(cardUid) => onChoose(pending.id, cardUid)} onCancel={() => setPendingChoiceId(undefined)} /> : <div className="choice-list">{special.choices.map((choice) => <button className="secondary-button choice-button" key={choice.id} onClick={() => { if (choice.kind === 'upgrade') setPendingChoiceId(choice.id); else onChoose(choice.id); }}><strong>{choice.label}</strong><small>{choice.description}</small></button>)}</div>}{special.nodeType !== 'intermission' && <button className="text-button" onClick={onLeave}>{t('special.leave')}</button>}</section></main>;
}
