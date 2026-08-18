import type { AscensionModifier } from '../../game/ascension/ascensionTypes';

export const ASCENSION_MODIFIERS: AscensionModifier[] = [
  { id: 'a1-enemy-hp', level: 1, type: 'enemy-hp', amount: 10, description: '敌人最大生命 +10%。' },
  { id: 'a2-starting-gold', level: 2, type: 'starting-gold', amount: -20, description: '初始金币 -20。' },
  { id: 'a3-heal-penalty', level: 3, type: 'heal-penalty', amount: 5, description: '休息点治疗减少 5 点。' },
];

export function activeAscensionModifiers(level: number): AscensionModifier[] {
  return ASCENSION_MODIFIERS.filter((modifier) => modifier.level <= level);
}
