export class MonthlyCrate {
  date: string;
  REGULAR: boolean;
  VIP: boolean;
  VIP_PLUS: boolean;
  MVP: boolean;
  MVP_PLUS: boolean;
  constructor(data: Record<string, any>, date: string) {
    this.date = date;
    this.REGULAR = data.REGULAR || false;
    this.VIP = data.VIP || false;
    this.VIP_PLUS = data.VIP_PLUS || false;
    this.MVP = data.MVP || false;
    this.MVP_PLUS = data.MVP_PLUS || false;
  }
}

class Rewards {
  lastAdsenseGenerateTime: number;
  lastClaimedReward: number;
  rewardHighScore: number;
  rewardScore: number;
  rewardStreak: number;
  rewardTokens: number;
  totalDailyRewards: number;
  totalRewards: number;
  monthlyCrates: MonthlyCrate[];
  constructor(data: Record<string, any>) {
    this.lastAdsenseGenerateTime = data.lastAdsenseGenerateTime || 0;
    this.lastClaimedReward = data.lastClaimedReward || 0;
    this.rewardHighScore = data.rewardHighScore || 0;
    this.rewardScore = data.rewardScore || 0;
    this.rewardStreak = data.rewardStreak || 0;
    this.rewardTokens = data.adsence_tokens || 0;
    this.totalDailyRewards = data.totalDailyRewards || 0;
    this.totalRewards = data.totalRewards || 0;
    this.monthlyCrates = [];
    Object.keys(data?.monthlycrates || {}).forEach((key) =>
      this.monthlyCrates.push(new MonthlyCrate(data?.monthlycrates?.[key], key))
    );
  }
}

export default Rewards;
