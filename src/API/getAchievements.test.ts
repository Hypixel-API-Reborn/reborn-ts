import GameAchievements from '../structures/Static/GameAchievements';
import AchievementTier from '../structures/Static/AchievementTier';
import Achievements from '../structures/Static/Achievements';
import Achievement from '../structures/Static/Achievement';
import { expect, expectTypeOf, test } from 'vitest';
import { StaticGameNames } from '../typings';
import Client from '../Client';

test('getAchievements (raw)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getAchievements({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getAchievements', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getAchievements();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Achievements);
  expectTypeOf(data).toEqualTypeOf<Achievements>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedTimestamp).toBeGreaterThan(0);
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.achievementsPerGame).toBeDefined();
  expectTypeOf(data.achievementsPerGame).toEqualTypeOf<Record<StaticGameNames, GameAchievements>>();
  Object.keys(data.achievementsPerGame).forEach((game) => {
    expect(data.achievementsPerGame[game]).toBeDefined();
    expect(data.achievementsPerGame[game]).toBeInstanceOf(GameAchievements);
    expectTypeOf(data.achievementsPerGame[game]).toEqualTypeOf<GameAchievements>();
    expect(data.achievementsPerGame[game].category).toBeDefined();
    expect(data.achievementsPerGame[game].category).toBe(game);
    expectTypeOf(data.achievementsPerGame[game].totalPoints).toEqualTypeOf<string>();
    expect(data.achievementsPerGame[game].totalPoints).toBeDefined();
    expect(data.achievementsPerGame[game].totalPoints).toBeGreaterThanOrEqual(0);
    expectTypeOf(data.achievementsPerGame[game].totalPoints).toEqualTypeOf<number>();
    expect(data.achievementsPerGame[game].totalLegacyPoints).toBeDefined();
    expect(data.achievementsPerGame[game].totalLegacyPoints).toBeGreaterThanOrEqual(0);
    expect(data.achievementsPerGame[game].totalLegacyPoints).toBeDefined();
    expectTypeOf(data.achievementsPerGame[game].totalLegacyPoints).toEqualTypeOf<number>();
    expect(data.achievementsPerGame[game].achievements).toBeDefined();
    expectTypeOf(data.achievementsPerGame[game].achievements).toEqualTypeOf<Achievement[]>();
    data.achievementsPerGame[game].achievements.forEach((gameAchievement: Achievement) => {
      expect(gameAchievement).toBeDefined();
      expect(gameAchievement).toBeInstanceOf(Achievement);
      expectTypeOf(gameAchievement).toEqualTypeOf<Achievement>();
      expect(gameAchievement.name).toBeDefined();
      expectTypeOf(gameAchievement.name).toEqualTypeOf<string>();
      expect(gameAchievement.codeName).toBeDefined();
      expectTypeOf(gameAchievement.codeName).toEqualTypeOf<string>();
      expect(gameAchievement.description).toBeDefined();
      expectTypeOf(gameAchievement.description).toEqualTypeOf<string>();
      expect(gameAchievement.type).toBeDefined();
      expectTypeOf(gameAchievement.type).toEqualTypeOf<'ONE_TIME' | 'TIERED'>();
      expect(['ONE_TIME', 'TIERED']).toContain(gameAchievement.type);
      expect(gameAchievement.rarity).toBeDefined();
      expectTypeOf(gameAchievement.rarity).toEqualTypeOf<Record<
        'local' | 'localPercentage' | 'global' | 'globalPercentage',
        number
      > | null>();
      expect(gameAchievement.tierInformation).toBeDefined();
      expectTypeOf(gameAchievement.tierInformation).toEqualTypeOf<AchievementTier | null>();
      expect(gameAchievement.points).toBeDefined();
      expectTypeOf(gameAchievement.points).toEqualTypeOf<number>();
      if ('TIERED' === gameAchievement.type) {
        expect(gameAchievement.totalAmountRequired).toBeDefined();
        expectTypeOf(gameAchievement.totalAmountRequired).toEqualTypeOf<number | null>();
      }
      expect(gameAchievement.toString()).toBeDefined();
      expectTypeOf(gameAchievement.toString()).toEqualTypeOf<string>();
    });
  });
  client.destroy();
});
