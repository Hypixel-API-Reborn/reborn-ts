import Client from '../Client';
import Leaderboard from '../structures/Leaderboard';
import { expect, expectTypeOf, test } from 'vitest';

test('getLeaderboards (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getLeaderboards({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getLeaderboards', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getLeaderboards();
  Object.keys(data).forEach((key) => {
    expect(data[key]).toBeDefined();
    expectTypeOf(data[key]).toEqualTypeOf<Leaderboard[]>();
    data[key].forEach((leaderboard: Leaderboard) => {
      expect(leaderboard).toBeDefined();
      expect(leaderboard).instanceOf(Leaderboard);
      expectTypeOf(leaderboard).toEqualTypeOf<Leaderboard>();

      expect(leaderboard.path).toBeDefined();
      expectTypeOf(leaderboard.path).toEqualTypeOf<string>();
      expect(leaderboard.prefix).toBeDefined();
      expectTypeOf(leaderboard.prefix).toEqualTypeOf<string>();
      expect(leaderboard.title).toBeDefined();
      expectTypeOf(leaderboard.title).toEqualTypeOf<string>();
      expect(leaderboard.location).toBeDefined();
      expectTypeOf(leaderboard.location).toEqualTypeOf<string>();
      expect(leaderboard.count).toBeDefined();
      expect(leaderboard.count).toBeGreaterThanOrEqual(0);
      expectTypeOf(leaderboard.count).toEqualTypeOf<number>();
      expect(leaderboard.leaders).toBeDefined();
      expectTypeOf(leaderboard.leaders).toEqualTypeOf<string[]>();
      leaderboard.leaders.forEach((leader: string) => {
        expect(leader).toBeDefined();
        expectTypeOf(leader).toEqualTypeOf<string>();
      });
    });
  });
  client.destroy();
});

// test('getLeaderboards (Missing Data)', () => {
//   const client = new Client(process.env.HYPIXEL_KEY ?? '');
//   vi.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: { success: true } });
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-expect-error
//   expect(() => client.getLeaderboards()).rejects.toThrowError(
//     client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.')
//   );
//   vi.restoreAllMocks();
//   client.destroy();
// });
