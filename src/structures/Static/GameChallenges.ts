import { StaticGameNames } from '../../typings';

export interface ChallengeData {
  id: string;
  name: string;
  reward: number;
  rewardType: string;
}

class GameChallenges {
  category: StaticGameNames;
  challenges: Map<string, ChallengeData>;
  constructor(name: StaticGameNames, data: Record<string, any>) {
    this.category = name;
    this.challenges = new Map();

    data.forEach((challenge: any) => {
      const content = {
        id: challenge.id,
        name: challenge.name,
        reward: parseInt(challenge.rewards[0].amount, 10) || 0,
        rewardType: challenge.rewards[0].type
      };
      this.challenges.set(challenge.id, content);
    });
  }
}

export default GameChallenges;
