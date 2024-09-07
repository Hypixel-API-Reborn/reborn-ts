import Achievement from '../structures/Static/Achievement';
import AchievementTier from '../structures/Static/AchievementTier';
import Client from '../Client';
import GuildAchievements from '../structures/Static/GuildAchievements';
import { expect, expectTypeOf, test } from 'vitest';

test('getGuildAchievements (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGuildAchievements({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getGuildAchievements', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGuildAchievements();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<GuildAchievements>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date | null>();
  expect(data.achievements).toBeDefined();
  expectTypeOf(data.achievements).toEqualTypeOf<Record<string, Achievement>>();
  Object.keys(data.achievements).forEach((achievement) => {
    expect(data.achievements[achievement]).toBeDefined();
    expectTypeOf(data.achievements[achievement]).toEqualTypeOf<Achievement>();
    expect(data.achievements[achievement].name).toBeDefined();
    expectTypeOf(data.achievements[achievement].name).toEqualTypeOf<string>();
    expect(data.achievements[achievement].codeName).toBeDefined();
    expectTypeOf(data.achievements[achievement].codeName).toEqualTypeOf<string>();
    expect(data.achievements[achievement].description).toBeDefined();
    expectTypeOf(data.achievements[achievement].description).toEqualTypeOf<string>();
    expect(data.achievements[achievement].type).toBeDefined();
    expectTypeOf(data.achievements[achievement].type).toEqualTypeOf<'ONE_TIME' | 'TIERED'>();
    expect(['ONE_TIME', 'TIERED']).toContain(data.achievements[achievement].type);
    expect(data.achievements[achievement].rarity).toBeDefined();
    expectTypeOf(data.achievements[achievement].rarity).toEqualTypeOf<Record<
      'local' | 'localPercentage' | 'global' | 'globalPercentage',
      number
    > | null>();
    expect(data.achievements[achievement].tierInformation).toBeDefined();
    expectTypeOf(data.achievements[achievement].tierInformation).toEqualTypeOf<AchievementTier | null>();
    expect(data.achievements[achievement].points).toBeDefined();
    expectTypeOf(data.achievements[achievement].points).toEqualTypeOf<number>();
    if ('TIERED' === data.achievements[achievement].type) {
      expect(data.achievements[achievement].totalAmountRequired).toBeDefined();
      expectTypeOf(data.achievements[achievement].totalAmountRequired).toEqualTypeOf<number | null>();
    }
    expect(data.achievements[achievement].toString()).toBeDefined();
    expectTypeOf(data.achievements[achievement].toString()).toEqualTypeOf<string>();
  });
  client.destroy();
});
