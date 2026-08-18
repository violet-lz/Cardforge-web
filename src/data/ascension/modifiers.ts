import { clampDifficulty, type AscensionModifier, type DifficultyDefinition, type DifficultyLevel } from '../../game/ascension/ascensionTypes';

export const DIFFICULTIES: DifficultyDefinition[] = [
  { level: 1, name: '余烬初燃', description: '标准远征，适合熟悉熄火圣殿的道路。', enemyHpMultiplier: 1, enemyDamageMultiplier: 1, eliteWeightMultiplier: 1, pollutionEncounterMultiplier: 1, pollutionChance: .55, restHealPenalty: 0, mapUnlocks: ['落败村庄', '生机森林', '苔藓沼泽'] },
  { level: 2, name: '灰风试炼', description: '敌人更坚韧，精英与污染更常逼近。', enemyHpMultiplier: 1.08, enemyDamageMultiplier: 1.05, eliteWeightMultiplier: 1.15, pollutionEncounterMultiplier: 1.1, pollutionChance: .65, restHealPenalty: 0, mapUnlocks: ['恶臭下水道', '繁华皇都'] },
  { level: 3, name: '守门者誓约', description: '高压远征；通关后解锁难度 4。', enemyHpMultiplier: 1.16, enemyDamageMultiplier: 1.1, eliteWeightMultiplier: 1.35, pollutionEncounterMultiplier: 1.2, pollutionChance: .75, restHealPenalty: 2, mapUnlocks: ['血色之地', '魔法之地'] },
  { level: 4, name: '天穹裂隙', description: '精英大幅增多，并开放科技之城与天空岛。', enemyHpMultiplier: 1.27, enemyDamageMultiplier: 1.16, eliteWeightMultiplier: 1.65, pollutionEncounterMultiplier: 1.35, pollutionChance: .88, restHealPenalty: 4, mapUnlocks: ['科技之城', '天空岛'] },
  { level: 5, name: '沉城终局', description: '最终难度；亚特兰蒂斯从深海废墟中显现。', enemyHpMultiplier: 1.4, enemyDamageMultiplier: 1.23, eliteWeightMultiplier: 2, pollutionEncounterMultiplier: 1.5, pollutionChance: 1, restHealPenalty: 6, mapUnlocks: ['亚特兰蒂斯'] },
];

export const ASCENSION_MODIFIERS: AscensionModifier[] = [
  { id: 'a1-enemy-hp', level: 1, type: 'enemy-hp', amount: 0, description: '标准敌人生命。' },
  { id: 'a2-starting-gold', level: 2, type: 'starting-gold', amount: 0, description: '敌人数值与危险遭遇开始提升。' },
  { id: 'a3-heal-penalty', level: 3, type: 'heal-penalty', amount: 2, description: '休息点治疗减少 2 点。' },
  { id: 'a4-elite-rate', level: 4, type: 'elite-rate', amount: 65, description: '精英权重提高，并解锁天穹路线。' },
  { id: 'a5-pollution-rate', level: 5, type: 'pollution-rate', amount: 50, description: '污染抵达最高频率，并解锁沉城终局。' },
];

export function difficultyFor(level: number): DifficultyDefinition {
  return DIFFICULTIES[clampDifficulty(level) - 1];
}

export function activeAscensionModifiers(level: number): AscensionModifier[] {
  const normalized = clampDifficulty(level);
  return ASCENSION_MODIFIERS.filter((modifier) => modifier.level <= normalized);
}

export function difficultyIsUnlocked(level: DifficultyLevel, maxUnlocked: number): boolean {
  return level <= clampDifficulty(maxUnlocked);
}
