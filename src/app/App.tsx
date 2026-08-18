import { useEffect } from 'react';
import { CharacterSelectPage } from '../pages/CharacterSelectPage'; import { CombatPage } from '../pages/CombatPage'; import { CompendiumPage } from '../pages/CompendiumPage'; import { CustomContentPage } from '../pages/CustomContentPage'; import { EventPage } from '../pages/EventPage'; import { HomePage } from '../pages/HomePage'; import { SpecialNodePage } from '../pages/SpecialNodePage'; import { RewardPage } from '../pages/RewardPage'; import { RunPage } from '../pages/RunPage'; import { ShopPage } from '../pages/ShopPage'; import { useGameStore } from '../stores/gameStore';
export default function App() {
 const store = useGameStore(); const { gameState, hydrated, hydrate, openCharacterSelect } = store; const deck = gameState.player?.deck ?? [];
 useEffect(() => hydrate(), [hydrate]);
 if (!hydrated) return <main className="loading" aria-live="polite"><span className="loading-mark">✦</span>正在点燃余烬……</main>;
 if (gameState.mode === 'character-select') return <CharacterSelectPage state={gameState} onStart={store.startRun} onBack={() => openCharacterSelect(false)} />;
 if (gameState.mode === 'compendium') return <CompendiumPage state={gameState} onBack={() => store.openCompendium(false)} onUpgradeHp={store.spendHpUpgrade} onUpgradeStarterCard={store.spendStarterCardUpgrade} onUpgradeEnergy={store.spendEnergyUpgrade} onUpgradeGold={store.spendGoldUpgrade} />;
 if (gameState.mode === 'custom-content') return <CustomContentPage onBack={() => store.openCustomContent(false)} />;
 if (gameState.mode === 'combat' && gameState.combat) return <CombatPage combat={gameState.combat} characterId={gameState.player?.characterId ?? 'wanderer'} onPlayCard={store.playCard} onEndTurn={store.endTurn} onUsePotion={store.usePotion} onExit={store.exitCombat} />;
 if (gameState.mode === 'reward' && gameState.reward) return <RewardPage reward={gameState.reward} onClaim={store.claimReward} />;
 if (gameState.mode === 'special' && gameState.special) return <SpecialNodePage special={gameState.special} deck={deck} onChoose={store.chooseSpecial} onLeave={store.leaveSpecialNode} />;
 if (gameState.mode === 'event' && gameState.event) return <EventPage event={gameState.event} deck={deck} gold={gameState.player?.gold ?? 0} onChoose={store.chooseEvent} />;
 if (gameState.mode === 'shop' && gameState.shop) return <ShopPage shop={gameState.shop} deck={deck} gold={gameState.player?.gold ?? 0} onBuy={store.buyShopCard} onLeave={store.leaveSpecialNode} />;
 if (gameState.mode === 'run-summary') return <main className="run-shell"><section className="panel special-panel summary-panel"><p className="eyebrow">远征记录已封存</p><span className="summary-mark" aria-hidden="true">☉</span><h1>{gameState.run?.status === 'victory' ? '余烬仍明' : '旅程终止'}</h1><p>Seed {gameState.seed} · 探索 {gameState.run?.visitedNodeIds.length ?? 0} 个节点。</p><button className="primary-button" onClick={() => openCharacterSelect()}>开始新的 Run</button></section></main>;
 if (gameState.mode === 'map') return <RunPage state={gameState} onBack={() => useGameStore.setState({ gameState: { ...gameState, mode: 'home' } })} onEnterNode={store.enterNode} />;
 return <HomePage state={gameState} onNewRun={() => openCharacterSelect()} onContinue={store.continueRun} onOpenCompendium={() => store.openCompendium()} onOpenCustomContent={() => store.openCustomContent()} onClearSave={store.clearSave} />;
}
