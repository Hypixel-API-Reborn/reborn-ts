import Tourney, { TourneyData } from './Tourney';
import { expect, expectTypeOf, test } from 'vitest';

test('Tourney Data', () => {
  const data = new TourneyData({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(TourneyData);
  expectTypeOf(data).toEqualTypeOf<TourneyData>();
  expect(data.playtime).toBeDefined();
  expect(data.playtime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playtime).toEqualTypeOf<number>();
  expect(data.tributes).toBeDefined();
  expect(data.tributes).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tributes).toEqualTypeOf<number>();
  expect(data.firstWin).toBeDefined();
  expect(data.firstWin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.firstWin).toEqualTypeOf<number>();
  expect(data.claimedReward).toBeDefined();
  expect(data.claimedReward).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.claimedReward).toEqualTypeOf<number>();
});

test('Tourney', () => {
  const data = new Tourney({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Tourney);
  expectTypeOf(data).toEqualTypeOf<Tourney>();
  expect(data.firstJoinLobby).toBeDefined();
  expectTypeOf(data.firstJoinLobby).toEqualTypeOf<string | null>();
  expect(data.totalTributes).toBeDefined();
  expectTypeOf(data.totalTributes).toEqualTypeOf<number>();
  expect(data.shopSort).toBeDefined();
  expectTypeOf(data.shopSort).toEqualTypeOf<string>();
  expect(data.hidePurchased).toBeDefined();
  expectTypeOf(data.hidePurchased).toEqualTypeOf<boolean>();
  expect(data.turneyData).toBeDefined();
  expectTypeOf(data.turneyData).toEqualTypeOf<TourneyData[]>();
});
