import { expect, expectTypeOf, test } from 'vitest';
import RecentGame from '../structures/RecentGame';
import Client from '../Client';

test('getRecentGames (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getRecentGames()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getRecentGames (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getRecentGames('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getRecentGames', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getRecentGames('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RecentGame[]>();
  data.forEach((game: RecentGame) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<RecentGame>();
    expect(game).toBeInstanceOf(RecentGame);
    expect(game.dateTimestamp).toBeDefined();
    expectTypeOf(game.dateTimestamp).toEqualTypeOf<number | null>();
    expect(data.dateTimestamp).toBeGreaterThanOrEqual(0);
    expect(game.date).toBeDefined();
    expectTypeOf(game.date).toEqualTypeOf<Date | null>();
    expect(game.mode).toBeDefined();
    expectTypeOf(game.mode).toEqualTypeOf<string | null>();
    expect(game.map).toBeDefined();
    expectTypeOf(game.map).toEqualTypeOf<string | null>();
    expect(game.ongoing).toBeDefined();
    expectTypeOf(game.ongoing).toEqualTypeOf<boolean>();
    expect(data.endedAt).toBeDefined();
    expectTypeOf(data.endedAt).toEqualTypeOf<Date | null>();
    expect(data.endedTimestamp).toBeDefined();
    expectTypeOf(data.endedTimestamp).toEqualTypeOf<number | null>();
  });
  client.destroy();
});
