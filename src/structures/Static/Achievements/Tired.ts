import BaseAchievement from './Base';

export interface AchivementTier {
  tier: number;
  points?: number;
  amount: number;
}

class TieredAchivement extends BaseAchievement {
  tiers: AchivementTier[];
  constructor(achivementName: string, data: Record<string, any>) {
    super(achivementName, data);
    this.tiers = data.tiers;
  }
}

export default TieredAchivement;
