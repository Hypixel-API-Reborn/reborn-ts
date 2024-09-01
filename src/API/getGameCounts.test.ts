import Client from '../Client';
import GameCounts from '../structures/GameCounts';
import { expect, expectTypeOf, test } from 'vitest';

test('getGameCounts (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGameCounts({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getGameCounts', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGameCounts();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCounts);
  expectTypeOf(data).toEqualTypeOf<GameCounts>();
  expect(data.playerCount).toBeDefined();
  expectTypeOf(data.playerCount).toEqualTypeOf<number>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
  client.destroy();
});
