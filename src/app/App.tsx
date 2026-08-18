import { useEffect, type ReactNode } from 'react';
import { RegionTransitionOverlay } from '../components/RegionTransitionOverlay';
import { biomeById } from '../data/biomes/biomes';
import { CharacterSelectPage } from '../pages/CharacterSelectPage'; import { CombatPage } from '../pages/CombatPage'; import { CompendiumPage } from '../pages/CompendiumPage'; import { CustomContentPage } from '../pages/CustomContentPage'; import { EventPage } from '../pages/EventPage'; import { HomePage } from '../pages/HomePage'; import { SpecialNodePage } from '../pages/SpecialNodePage'; import { RewardPage } from '../pages/RewardPage'; import { RunPage } from '../pages/RunPage'; import { ShopPage } from '../pages/ShopPage'; import { useGameStore } from '../stores/gameStore';
export default function App() {
 const store = useGameStore(); const { gameState, hydrated, hydrate, openCharacterSelect } = store; const deck = gameState.player?.deck ?? [];
 useEffect(() => hydrate(), [hydrate]);
 if (!hydrated) return <main className="loading" aria-live="polite"><span className="loading-mark">✦</span>正在点燃余烬……</main>;
 let page: ReactNode;
 if (gameState.mode === 'character-select') page = <CharacterSelectPage state={gameState} onStart={store.startRun} onBack={() => openCharacterSelect(false)} />;
 else if (gameState.mode === 'compendium') page = <CompendiumPage state={gameState} onBack={() => store.openCompendium(false)} onUpgradeHp={store.spendHpUpgrade} onUpgradeStarterCard={store.spendStarterCardUpgrade} onUpgradeEnergy={store.spendEnergyUpgrade} onUpgradeGold={store.spendGoldUpgrade} />;
 else if (gameState.mode === 'custom-content') page = <CustomContentPage onBack={() => store.openCustomContent(false)} />;
 else if (gameState.mode === 'combat' && gameState.combat) page = <CombatPage combat={gameState.combat} characterId={gameState.player?.characterId ?? 'wanderer'} regionId={gameState.map?.nodes.find((node) => node.id === gameState.map?.currentNodeId)?.regionId ?? gameState.map?.biomeId} onPlayCard={store.playCard} onEndTurn={store.endTurn} onUsePotion={store.usePotion} onExit={store.exitCombat} />;
 else if (gameState.mode === 'reward' && gameState.reward) page = <RewardPage reward={gameState.reward} onClaim={store.claimReward} />;
 else if (gameState.mode === 'special' && gameState.special) page = <SpecialNodePage special={gameState.special} deck={deck} onChoose={store.chooseSpecial} onLeave={store.leaveSpecialNode} />;
 else if (gameState.mode === 'event' && gameState.event) page = <EventPage event={gameState.event} deck={deck} gold={gameState.player?.gold ?? 0} onChoose={store.chooseEvent} />;
 else if (gameState.mode === 'shop' && gameState.shop) page = <ShopPage shop={gameState.shop} deck={deck} gold={gameState.player?.gold ?? 0} onBuy={store.buyShopCard} onLeave={store.leaveSpecialNode} />;
 else if (gameState.mode === 'run-summary') page = <main className="run-shell summary-shell"><section className="panel special-panel summary-panel"><p className="eyebrow">远征记录已封存</p><span className="summary-mark" aria-hidden="true">☉</span><h1>{gameState.run?.status === 'victory' ? '余烬仍明' : '旅程终止'}</h1><p>Seed {gameState.seed} · 难度 {gameState.run?.ascensionLevel ?? 1} · 探索 {gameState.run?.visitedNodeIds.length ?? 0} 个节点。</p><button className="primary-button" onClick={() => openCharacterSelect()}>开始新的 Run</button></section></main>;
 else if (gameState.mode === 'map') page = <RunPage state={gameState} onBack={() => useGameStore.setState({ gameState: { ...gameState, mode: 'home' } })} onEnterNode={store.enterNode} />;
 else page = <HomePage state={gameState} onNewRun={() => openCharacterSelect()} onContinue={store.continueRun} onOpenCompendium={() => store.openCompendium()} onOpenCustomContent={() => store.openCustomContent()} onClearSave={store.clearSave} />;
 const currentNode = gameState.map?.nodes.find((node) => node.id === gameState.map?.currentNodeId); const regionId = currentNode?.regionId ?? gameState.map?.biomeId; const biome = biomeById(regionId);
 return <div className={`region-frame ${biome.accentClass}`}>{page}<RegionTransitionOverlay regionId={regionId} /></div>;
}
