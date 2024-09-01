import GameQuests from './GameQuests';
import { StaticGameNames } from '../../typings';

class Quests {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date | null;
  questsPerGame: Record<StaticGameNames, GameQuests>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.questsPerGame = Object.fromEntries(
      Object.entries(data.quests).map(([game, data]) => [
        game,
        new GameQuests(game as StaticGameNames, data as Record<string, any>)
      ])
    ) as Record<StaticGameNames, GameQuests>;
  }
}

export default Quests;
