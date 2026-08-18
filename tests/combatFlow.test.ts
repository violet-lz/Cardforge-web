import { describe, expect, it } from 'vitest';
import { BASIC_ENEMIES } from '../src/data/enemies/basicEnemies';
import { BASIC_CARDS } from '../src/data/cards/basicCards';
import { playCardAndResolve, resolveEnemyTurn, resolveSingleEnemyTarget, startCombat } from '../src/game/combat/combatEngine';
import { createCardInstance } from '../src/game/combat/deckEngine';
import type { PlayerState } from '../src/game/engine/types';

const player: PlayerState = { characterId: 'wanderer', hp: 70, maxHp: 70, gold: 0, deck: ['strike', 'defend', 'insight'].map((id, index) => createCardInstance(id, `test-${index}`)), relics: [], potions: [] };

describe('combat flow', () => {
  it('starts with a player hand, energy, and enemy intent', () => {
    const combat = startCombat(player, 9, [BASIC_ENEMIES.ashling]);
    expect(combat.phase).toBe('player-turn');
    expect(combat.deck.hand).toHaveLength(3);
    expect(combat.energy.current).toBe(3);
    expect(combat.enemies[0].intent.label).toBe('爪击 7');
  });

  it('plays a card and resolves an enemy turn', () => {
    const started = startCombat(player, 9, [BASIC_ENEMIES.ashling]);
    const card = started.deck.hand.find((item) => item.definitionId === 'strike')!;
    const afterCard = playCardAndResolve(started, card.uid, BASIC_CARDS.strike, started.enemies[0].uid);
    expect(afterCard.enemies[0].hp).toBe(36);
    const afterEnemy = resolveEnemyTurn({ ...afterCard, phase: 'enemy-turn' });
    expect(afterEnemy.phase).toBe('player-turn');
    expect(afterEnemy.player.hp).toBe(63);
  });

  it('forces single-target cards into the foremost living enemy', () => {
    const started = startCombat(player, 9, [BASIC_ENEMIES.ashling, BASIC_ENEMIES['cinder-sprite']]);
    expect(resolveSingleEnemyTarget(started.enemies, started.enemies[1].uid).uid).toBe(started.enemies[0].uid);
    const card = started.deck.hand.find((item) => item.definitionId === 'strike')!;
    const afterCard = playCardAndResolve(started, card.uid, BASIC_CARDS.strike, started.enemies[1].uid);
    expect(afterCard.enemies[0].hp).toBe(36);
    expect(afterCard.enemies[1].hp).toBe(28);
  });

  it('inserts summons before their summoner without advancing or acting them immediately', () => {
    const started = startCombat(player, 9, [BASIC_ENEMIES['ashen-warden']]);
    const summoner = { ...started.enemies[0], intent: { type: 'summon' as const, summonIds: ['ashling'], label: '召唤测试' } };
    const afterTurn = resolveEnemyTurn({ ...started, phase: 'enemy-turn', enemies: [summoner] });
    expect(afterTurn.enemies.map((enemy) => enemy.definitionId)).toEqual(['ashling', 'ashen-warden']);
    expect(afterTurn.enemies[0].intentIndex).toBe(0);
    expect(afterTurn.enemies[0]).not.toHaveProperty('lastAction');
    expect(afterTurn.player.hp).toBe(player.hp);
    expect(afterTurn.enemies[1].lastAction).toBe('summon');
  });

  it('promotes the next living foe to the front and respects the four-foe summon cap', () => {
    const started = startCombat(player, 9, [BASIC_ENEMIES.ashling, BASIC_ENEMIES['cinder-sprite']]);
    const fallenFront = { ...started.enemies[0], hp: 0 };
    expect(resolveSingleEnemyTarget([fallenFront, started.enemies[1]]).uid).toBe(started.enemies[1].uid);
    const summoner = { ...started.enemies[1], intent: { type: 'summon' as const, summonIds: ['ashling', 'rust-hound', 'glass-moth'], label: '召唤测试' } };
    const capped = resolveEnemyTurn({ ...started, phase: 'enemy-turn', enemies: [started.enemies[0], summoner, { ...started.enemies[0], uid: 'ashling-extra-a' }, { ...started.enemies[0], uid: 'ashling-extra-b' }] });
    expect(capped.enemies.filter((enemy) => enemy.hp > 0)).toHaveLength(4);
  });
});
