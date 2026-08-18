export interface EnergyState {
  current: number;
  maximum: number;
}

export function createEnergy(maximum = 3): EnergyState {
  if (!Number.isInteger(maximum) || maximum < 0) throw new Error('Maximum energy must be non-negative');
  return { current: maximum, maximum };
}

export function canPayEnergy(energy: EnergyState, cost: number): boolean {
  return Number.isInteger(cost) && cost >= 0 && energy.current >= cost;
}

export function spendEnergy(energy: EnergyState, cost: number): EnergyState {
  if (!canPayEnergy(energy, cost)) throw new Error('Not enough energy');
  return { ...energy, current: energy.current - cost };
}

export function gainEnergy(energy: EnergyState, amount: number): EnergyState {
  if (!Number.isInteger(amount) || amount < 0) throw new Error('Energy gain must be non-negative');
  return { ...energy, current: energy.current + amount };
}

/** Applies a signed energy change while never allowing current energy below zero. */
export function adjustEnergy(energy: EnergyState, amount: number): EnergyState {
  if (!Number.isInteger(amount)) throw new Error('Energy adjustment must be an integer');
  return { ...energy, current: Math.max(0, energy.current + amount) };
}

export function refreshEnergy(energy: EnergyState): EnergyState {
  return { ...energy, current: energy.maximum };
}
