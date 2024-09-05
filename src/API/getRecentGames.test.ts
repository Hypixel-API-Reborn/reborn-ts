import Client from '../Client';
import RecentGame from '../structures/RecentGame';
import { expect, expectTypeOf, test } from 'vitest';

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
  const data = await client.getRecentGames('3b76b69ae5134296a730ed49171ad6f8', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getRecentGames', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getRecentGames('ea805d40e8284d8d8e64e9fc8ac301ca');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RecentGame[]>();
  data.forEach((game: RecentGame) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<RecentGame>();
    expect(game).toBeInstanceOf(RecentGame);
    expect(game.dateTimestamp).toBeDefined();
    expectTypeOf(game.dateTimestamp).toEqualTypeOf<number | null>();
    expect(game.dateAt).toBeDefined();
    expectTypeOf(game.dateAt).toEqualTypeOf<Date | null>();
    expect(game.mode).toBeDefined();
    expectTypeOf(game.mode).toEqualTypeOf<string | null>();
    expect(game.map).toBeDefined();
    expectTypeOf(game.map).toEqualTypeOf<string | null>();
    expect(game.ongoing).toBeDefined();
    expectTypeOf(game.ongoing).toEqualTypeOf<boolean>();
    expect(game.endedTimestamp).toBeDefined();
    expectTypeOf(game.endedTimestamp).toEqualTypeOf<number | null>();
    expect(game.endedAt).toBeDefined();
    expectTypeOf(game.endedAt).toEqualTypeOf<Date | null>();
  });
  client.destroy();
});
