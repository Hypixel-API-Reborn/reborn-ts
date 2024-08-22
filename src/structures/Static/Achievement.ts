import AchievementTier from './AchievementTier';

function collectAll(data: AchievementTier | null) {
  if (null === data) {
    return { totalPoints: 0, totalAmount: 0 };
  }
  const mTier = data.maxTier;
  let totalPoints = 0;
  let totalAmount = 0;
  for (let i = 1; i <= mTier; i++) {
    totalPoints += data.getTier(i).pointsRewarded;
    totalAmount += data.getTier(i).amountRequired;
  }
  return { totalPoints, totalAmount };
}

class Achievement {
  name: string;
  codeName: string;
  description: string;
  type: 'ONE_TIME' | 'TIERED';
  rarity: Record<'local' | 'localPercentage' | 'global' | 'globalPercentage', number> | null;
  tierInformation: AchievementTier | null;
  points: number;
  totalAmountRequired: number | null;
  constructor(achievementName: string, data: Record<string, any>) {
    this.name = data.name.trim();
    this.codeName = achievementName;
    this.description = data.description.trim();
    this.type = data.tiers ? 'TIERED' : 'ONE_TIME';
    this.rarity = {
      local: parseFloat(data.gamePercentUnlocked) || 0,
      localPercentage: parseFloat(data.gamePercentUnlocked) * 100 || 0,
      global: data.globalPercentUnlocked,
      globalPercentage: parseFloat(data.globalPercentUnlocked) * 100 || 0
    };
    this.tierInformation = 'TIERED' === this.type ? new AchievementTier(data.tiers) : null;
    const { totalPoints = 0, totalAmount = 0 }: { totalPoints: number; totalAmount: number } =
      'TIERED' === this.type ? collectAll(this.tierInformation) : { totalPoints: 0, totalAmount: 0 };
    this.points = 'ONE_TIME' === this.type ? parseInt(data.points, 10) : totalPoints;
    this.totalAmountRequired = 'TIERED' === this.type ? totalAmount : null;
  }

  toString(): string {
    return this.codeName;
  }
}

export default Achievement;
