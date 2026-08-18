import { applyCombatEndRelics, applyCombatItemEffect, resolveCombatPhases } from '../combat/combatEngine';
import type { CombatState } from '../combat/combatTypes';
import type { PotionDefinition } from './potionTypes';

export function usePotion(state: CombatState, potion: PotionDefinition): CombatState {
  if (!state.potionIds.includes(potion.id)) throw new Error('Potion is not available');
  const consumed = { ...state, potionIds: state.potionIds.filter((id) => id !== potion.id), log: [...state.log, `Used ${potion.name}`] };
  const resolved = resolveCombatPhases(applyCombatItemEffect(consumed, potion.effect, potion.name));
  if (!resolved.enemies.every((enemy) => enemy.hp <= 0)) return resolved;
  return applyCombatEndRelics({ ...resolved, phase: 'victory', log: [...resolved.log, 'Victory'] });
}
