class AchievementsRewards {
  [key: string]: number;
  constructor(data: Record<string, any>) {
    Object.keys(data.achievementRewardsNew)
      .filter((key) => key.startsWith('for_points_'))
      .map((key) => ({ [key.replace('for_points_', '')]: data.achievementRewardsNew[key] }))
      .sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];
        return parseInt(keyA) - parseInt(keyB);
      })
      .forEach((item) => {
        const key = Object.keys(item)[0];
        this[key] = item[key];
      });
  }
}

class Achievements {
  points: number;
  rewards: AchievementsRewards;
  tracking: string[];
  achivements: Record<string, number>;
  oneTime: string[];
  totem: Record<string, any>;
  constructor(data: Record<string, any>) {
    this.points = data?.achievementPoints || 0;
    this.rewards = new AchievementsRewards(data?.achievementRewardsNew || {});
    this.tracking = data?.achievementTracking || [];
    this.achivements = data?.achievements || {};
    this.oneTime = data.achievementsOneTime || [];
    this.totem = data?.achievementTotem || {};
  }
}

export default Achievements;
