import Achievements from '../structures/Static/Achievements/Achievements.js';
import Client from '../Client.js';
import GameAchievements from '../structures/Static/Achievements/GameAchievements.js';
import OneTimeAchivement from '../structures/Static/Achievements/OneTimeAchivement.js';
import RequestData from '../Private/RequestData.js';
import TieredAchivement from '../structures/Static/Achievements/TieredAchivement.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { AchivementTier } from '../Types/Static.js';

test('getAchievements (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getAchievements({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<Achievements | RequestData>();
  client.destroy();
});

test('getAchievements', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getAchievements();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Achievements);
  expectTypeOf(data).toEqualTypeOf<Achievements | RequestData>();
  data = data as Achievements;
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.achievementsPerGame).toBeDefined();
  expectTypeOf(data.achievementsPerGame).toEqualTypeOf<Record<string, GameAchievements>>();
  Object.keys(data.achievementsPerGame).forEach((game) => {
    const gameData = data.achievementsPerGame[game] as GameAchievements;
    expect(gameData).toBeDefined();
    expect(gameData).toBeInstanceOf(GameAchievements);
    expectTypeOf(gameData).toEqualTypeOf<GameAchievements>();
    expect(gameData.game).toBeDefined();
    expectTypeOf(gameData.game).toEqualTypeOf<string>();
    expect(gameData.points).toBeDefined();
    expect(gameData.points).toBeGreaterThanOrEqual(0);
    expectTypeOf(gameData.points).toEqualTypeOf<number>();
    expect(gameData.legacyPoints).toBeDefined();
    expect(gameData.legacyPoints).toBeGreaterThanOrEqual(0);
    expectTypeOf(gameData.legacyPoints).toEqualTypeOf<number>();
    expect(gameData.oneTimeAchievements).toBeDefined();
    expectTypeOf(gameData.oneTimeAchievements).toEqualTypeOf<OneTimeAchivement[]>();
    gameData.oneTimeAchievements.forEach((achievement) => {
      expect(achievement.codeName).toBeDefined();
      expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
      expect(achievement.name).toBeDefined();
      expectTypeOf(achievement.name).toEqualTypeOf<string>();
      expect(achievement.description).toBeDefined();
      expectTypeOf(achievement.description).toEqualTypeOf<string>();
      expect(achievement.secret).toBeDefined();
      expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
      expect(achievement.legacy).toBeDefined();
      expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
      expect(achievement.points).toBeDefined();
      expectTypeOf(achievement.points).toEqualTypeOf<number>();
      expect(achievement.gamePercentUnlocked).toBeDefined();
      expectTypeOf(achievement.gamePercentUnlocked).toEqualTypeOf<number>();
      expect(achievement.globalPercentUnlocked).toBeDefined();
      expectTypeOf(achievement.globalPercentUnlocked).toEqualTypeOf<number>();
      expect(achievement.toString()).toBeDefined();
      expect(achievement.toString()).toBe(achievement.codeName);
      expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
    });
    expect(gameData.tieredAchievements).toBeDefined();
    expectTypeOf(gameData.tieredAchievements).toEqualTypeOf<TieredAchivement[]>();
    gameData.tieredAchievements.forEach((achievement) => {
      expect(achievement.codeName).toBeDefined();
      expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
      expect(achievement.name).toBeDefined();
      expectTypeOf(achievement.name).toEqualTypeOf<string>();
      expect(achievement.description).toBeDefined();
      expectTypeOf(achievement.description).toEqualTypeOf<string>();
      expect(achievement.secret).toBeDefined();
      expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
      expect(achievement.legacy).toBeDefined();
      expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
      expect(achievement.tiers).toBeDefined();
      expectTypeOf(achievement.tiers).toEqualTypeOf<AchivementTier[]>();
      achievement.tiers.forEach((tier) => {
        expect(tier).toBeDefined();
        expectTypeOf(tier).toEqualTypeOf<AchivementTier>();
        expect(tier.tier).toBeDefined();
        expect(tier.tier).toBeGreaterThanOrEqual(0);
        expectTypeOf(tier.tier).toEqualTypeOf<number>();
        expect(tier.points).toBeDefined();
        expect(tier.points).toBeGreaterThanOrEqual(0);
        expectTypeOf(tier.points).toEqualTypeOf<number | undefined>();
        expect(tier.amount).toBeDefined();
        expect(tier.amount).toBeGreaterThanOrEqual(0);
        expectTypeOf(tier.amount).toEqualTypeOf<number>();
      });
      expect(achievement.toString()).toBeDefined();
      expect(achievement.toString()).toBe(achievement.codeName);
      expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
    });
  });
  client.destroy();
});
