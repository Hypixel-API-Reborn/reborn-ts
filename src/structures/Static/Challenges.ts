import { StaticGameNames } from '../../typings';
import GameChallenges from './GameChallenges';

class Challenges {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date | null;
  challengesPerGame: Record<StaticGameNames, GameChallenges>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.challengesPerGame = Object.fromEntries(
      Object.entries(data.challenges).map(([game, data]) => [
        game,
        new GameChallenges(game as StaticGameNames, data as Record<string, any>)
      ])
    ) as Record<StaticGameNames, GameChallenges>;
  }
}

export default Challenges;
