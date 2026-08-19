import { useLocale } from '../app/locale';
import { useContentLocale } from '../app/useContentLocale';
import { cardPresentation, resolveCard } from '../app/presentation';
import type { RewardState } from '../game/run/rewardTypes';
export function RewardPage({ reward, onClaim }: { reward: RewardState; onClaim: (cardId?: string) => void }) {
 const { t, locale } = useLocale(); const cl = useContentLocale();
 return <main className="run-shell reward-shell"><section className="panel reward-panel"><p className="eyebrow">{t('reward.eyebrow')}</p><span className="reward-mark" aria-hidden="true">✧</span><h1>{t('reward.title')}</h1><p>{t('reward.copy', { gold: reward.gold })}</p><div className="reward-list">{reward.cardChoices.map((id) => { const card = resolveCard(id); if (!card) return null; const info = cardPresentation(card, locale); return <button className={`card card-${card.type} card-rarity-${card.rarity}`} key={id} onClick={() => onClaim(id)}><span className="card-meta">{info.type} · {info.rarity}</span><span className="card-cost">{card.cost}</span><span className="card-art" aria-hidden="true" /><strong>{cl.cardName(card)}</strong><small>{cl.cardDesc(card)}</small><em>{info.target}</em></button>; })}</div><button className="text-button" onClick={() => onClaim()}>{t('reward.skip')}</button></section></main>;
}
