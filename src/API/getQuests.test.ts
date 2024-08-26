import GameQuests from '../structures/Static/GameQuests';
import { expect, expectTypeOf, test } from 'vitest';
import Quests from '../structures/Static/Quests';
import Quest from '../structures/Static/Quest';
import { StaticGameNames } from '../typings';
import Client from '../Client';

test('getQuests (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getQuests({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getQuests', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getQuests();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quests);
  expectTypeOf(data).toEqualTypeOf<Quests>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.questsPerGame).toBeDefined();
  expectTypeOf(data.questsPerGame).toEqualTypeOf<Record<StaticGameNames, GameQuests>>();
  Object.keys(data.questsPerGame).forEach((game) => {
    expect(data.questsPerGame[game]).toBeDefined();
    expect(data.questsPerGame[game]).toBeInstanceOf(GameQuests);
    expectTypeOf(data.questsPerGame[game]).toEqualTypeOf<GameQuests>();
    expect(data.questsPerGame[game].game).toBeDefined();
    expect(data.questsPerGame[game].game).toBe(game);
    expectTypeOf(data.questsPerGame[game].game).toEqualTypeOf<string>();
    expect(data.questsPerGame[game].quests).toBeDefined();
    expectTypeOf(data.questsPerGame[game].quests).toEqualTypeOf<Quest[]>();
    data.questsPerGame[game].quests.forEach((quest: Quest) => {
      expect(quest).toBeDefined();
      expect(quest).toBeInstanceOf(Quest);
      expectTypeOf(quest).toEqualTypeOf<Quest>();
      expect(quest.toString()).toBeDefined();
      expectTypeOf(quest.toString()).toEqualTypeOf<string>();
    });
  });
  client.destroy();
});
