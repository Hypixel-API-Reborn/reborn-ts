import GameAchievements from './GameAchievements';
import { StaticGameNames } from '../../typings';

/**
 * Achievement class
 */
class Achievements {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date | null;
  achievementsPerGame: Record<StaticGameNames, GameAchievements>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.achievementsPerGame = Object.fromEntries(
      Object.entries(data.achievements).map(([game, data]) => [
        game,
        new GameAchievements(game as StaticGameNames, data as Record<string, any>)
      ])
    ) as Record<StaticGameNames, GameAchievements>;
  }
}

export default Achievements;
