export interface ChallengeReward {
  type: 'MultipliedExperienceReward';
  amount: number;
}

export class Challenge {
  id: string;
  name: string;
  rewards: ChallengeReward[];
  constructor(data: Record<string, any>) {
    this.id = data.id;
    this.name = data.name;
    this.rewards = data.rewards;
  }
}

class GameChallenges {
  category: string;
  challenges: Challenge[];
  constructor(name: string, data: { id: string; name: string; rewards: { type: string; amount: number }[] }[]) {
    this.category = name;
    this.challenges = data.map((challenge) => new Challenge(challenge));
  }
}

export default GameChallenges;
