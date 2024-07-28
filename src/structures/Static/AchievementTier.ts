/**
 * AchievementTier class
 */
class AchievementTier {
  maxTier: number;
  tierInfo: any;
  constructor(data: Record<string, any>) {
    this.maxTier = data.length;
    this.tierInfo = data.sort(
      ({ tier: tierA }: { tier: number }, { tier: tierB }: { tier: number }) => Number(tierA) - Number(tierB)
    );
  }

  getTier(tier: number): Record<'pointsRewarded' | 'amountRequired', number> {
    const index = tier - 1;
    const info = this.tierInfo[index];
    return {
      pointsRewarded: parseInt(info.points, 10) || 0,
      amountRequired: parseInt(info.amount, 10) || 0
    };
  }
}

export default AchievementTier;
