import BingoData from '../../structures/SkyBlock/Static/BingoData';
import Bingo from '../../structures/SkyBlock/Static/Bingo';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../../Client';

test('Client#skyblock.Bingo (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getBingo({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('Client#skyblock.Bingo', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getBingo();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf(BingoData);
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<number>();
  expect(data.goals).toBeDefined();
  expectTypeOf(data.goals).toEqualTypeOf<Bingo[] | null>();
  data.goals.forEach((goal: Bingo) => {
    expect(goal).toBeDefined();
    expectTypeOf(goal).toEqualTypeOf<Bingo>();
    expect(goal).toBeInstanceOf(Bingo);
    expect(goal.toString()).toBeDefined();
    expect(goal.toString()).toBe(goal.id);
    expectTypeOf(goal.toString()).toEqualTypeOf<string>();
  });
  expect(data.getGoal(1, 1)).toBeDefined();
  expectTypeOf(data.getGoal(1, 1)).toEqualTypeOf<Bingo>();
  client.destroy();
});
