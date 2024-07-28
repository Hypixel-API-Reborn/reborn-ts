import Achievement from './Achievement';

/**
 * Achievement class
 */
class GuildAchievements {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date | null;
  achievements: Record<string, Achievement>;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated, 10);
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
    this.achievements = Object.fromEntries(
      Object.entries({ ...(data.tiered || {}), ...(data.one_time || {}) }).map(([name, value]) => [
        name,
        new Achievement(name, value as Record<string, any>)
      ])
    );
  }
}

export default GuildAchievements;
