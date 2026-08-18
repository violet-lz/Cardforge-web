export type AscensionModifierType = 'enemy-hp' | 'starting-gold' | 'heal-penalty';

export interface AscensionModifier {
  id: string;
  level: number;
  type: AscensionModifierType;
  amount: number;
  description: string;
}
