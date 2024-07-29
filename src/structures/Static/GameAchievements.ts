import { StaticGameNames } from '../../typings';
import Achievement from './Achievement';

/**
 * Game achievements class
 */
class GameAchievements {
  category: StaticGameNames;
  totalPoints: number;
  totalLegacyPoints: number;
  achievements: Achievement[];
  constructor(name: StaticGameNames, data: Record<string, any>) {
    this.category = name;
    this.totalPoints = parseInt(data.total_points, 10) || 0;
    this.totalLegacyPoints = parseInt(data.total_legacy_points, 10) || 0;
    this.achievements = Object.entries({ ...(data.one_time || {}), ...(data.tiered || {}) }).map(
      ([name, data]) => new Achievement(name, data as Record<string, any>)
    );
  }
}

export default GameAchievements;
