import { expect, expectTypeOf, test, vi } from 'vitest';
import Leaderboard from '../structures/Leaderboard';
import Client from '../Client';
import axios from 'axios';

test('getLeaderboards (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getLeaderboards({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getLeaderboards', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getLeaderboards();
  Object.keys(data).forEach((key) => {
    expect(data[key]).toBeDefined();
    expectTypeOf(data[key]).toEqualTypeOf<Leaderboard[]>();
    data[key].forEach((leaderboard: Leaderboard) => {
      expect(leaderboard).toBeDefined();
      expectTypeOf(leaderboard).toEqualTypeOf<Leaderboard>();
      expect(leaderboard.name).toBeDefined();
      expectTypeOf(leaderboard.name).toEqualTypeOf<string | null>();
      expect(leaderboard.title).toBeDefined();
      expectTypeOf(leaderboard.title).toEqualTypeOf<string>();
      expect(leaderboard.playerCount).toBeDefined();
      expectTypeOf(leaderboard.playerCount).toEqualTypeOf<number>();
      expect(leaderboard.leaders).toBeDefined();
      expectTypeOf(leaderboard.leaders).toEqualTypeOf<string[]>();
      leaderboard.leaders.forEach((leader) => {
        expect(leader).toBeDefined();
        expectTypeOf(leader).toEqualTypeOf<string>();
      });
    });
  });
  client.destroy();
});

test('getLeaderboards (Missing Data)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  const mockRequest = { status: 200, data: { success: true } };
  vi.spyOn(axios, 'get').mockResolvedValue(mockRequest);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getLeaderboards()).rejects.toThrowError(
    client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.')
  );
  vi.restoreAllMocks();
  client.destroy();
});
