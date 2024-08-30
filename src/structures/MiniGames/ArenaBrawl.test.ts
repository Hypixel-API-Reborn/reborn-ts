import ArenaBrawl, { ArenaBrawlMode } from './ArenaBrawl';
import { expect, expectTypeOf, test } from 'vitest';

test('ArenaBrawl', () => {
  const data = new ArenaBrawl({ stats: 'meow' });
  expect(data.coins).toBeDefined();
  expect(data.coins).greaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.coinsSpent).toBeDefined();
  expect(data.coinsSpent).greaterThanOrEqual(0);
  expectTypeOf(data.coinsSpent).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).greaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.keys).toBeDefined();
  expect(data.keys).greaterThanOrEqual(0);
  expectTypeOf(data.keys).toEqualTypeOf<number>();
  expect(data.chests).toBeDefined();
  expect(data.chests).greaterThanOrEqual(0);
  expectTypeOf(data.chests).toEqualTypeOf<number>();
  expect(data.rune).toBeDefined();
  expectTypeOf(data.rune).toEqualTypeOf<string>();
  expect(data['1v1']).toBeDefined();
  expectTypeOf(data['1v1']).toEqualTypeOf<ArenaBrawlMode>();
  expect(data['1v1'].damage).toBeDefined();
  expect(data['1v1'].damage).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].damage).toEqualTypeOf<number>();
  expect(data['1v1'].kills).toBeDefined();
  expect(data['1v1'].kills).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].kills).toEqualTypeOf<number>();
  expect(data['1v1'].deaths).toBeDefined();
  expect(data['1v1'].deaths).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].deaths).toEqualTypeOf<number>();
  expect(data['1v1'].KDRatio).toBeDefined();
  expect(data['1v1'].KDRatio).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].KDRatio).toEqualTypeOf<number>();
  expect(data['1v1'].healed).toBeDefined();
  expect(data['1v1'].healed).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].healed).toEqualTypeOf<number>();
  expect(data['1v1'].wins).toBeDefined();
  expect(data['1v1'].wins).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].wins).toEqualTypeOf<number>();
  expect(data['1v1'].losses).toBeDefined();
  expect(data['1v1'].losses).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].losses).toEqualTypeOf<number>();
  expect(data['1v1'].WLRatio).toBeDefined();
  expect(data['1v1'].WLRatio).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].WLRatio).toEqualTypeOf<number>();
  expect(data['1v1'].games).toBeDefined();
  expect(data['1v1'].games).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].games).toEqualTypeOf<number>();
  expect(data['1v1'].winstreak).toBeDefined();
  expect(data['1v1'].winstreak).greaterThanOrEqual(0);
  expectTypeOf(data['1v1'].winstreak).toEqualTypeOf<number>();
  expect(data['2v2']).toBeDefined();
  expectTypeOf(data['2v2']).toEqualTypeOf<ArenaBrawlMode>();
  expect(data['2v2'].damage).toBeDefined();
  expect(data['2v2'].damage).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].damage).toEqualTypeOf<number>();
  expect(data['2v2'].kills).toBeDefined();
  expect(data['2v2'].kills).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].kills).toEqualTypeOf<number>();
  expect(data['2v2'].deaths).toBeDefined();
  expect(data['2v2'].deaths).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].deaths).toEqualTypeOf<number>();
  expect(data['2v2'].KDRatio).toBeDefined();
  expect(data['2v2'].KDRatio).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].KDRatio).toEqualTypeOf<number>();
  expect(data['2v2'].healed).toBeDefined();
  expect(data['2v2'].healed).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].healed).toEqualTypeOf<number>();
  expect(data['2v2'].wins).toBeDefined();
  expect(data['2v2'].wins).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].wins).toEqualTypeOf<number>();
  expect(data['2v2'].losses).toBeDefined();
  expect(data['2v2'].losses).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].losses).toEqualTypeOf<number>();
  expect(data['2v2'].WLRatio).toBeDefined();
  expect(data['2v2'].WLRatio).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].WLRatio).toEqualTypeOf<number>();
  expect(data['2v2'].games).toBeDefined();
  expect(data['2v2'].games).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].games).toEqualTypeOf<number>();
  expect(data['2v2'].winstreak).toBeDefined();
  expect(data['2v2'].winstreak).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].winstreak).toEqualTypeOf<number>();
  expect(data['4v4']).toBeDefined();
  expectTypeOf(data['4v4']).toEqualTypeOf<ArenaBrawlMode>();
  expect(data['4v4'].damage).toBeDefined();
  expect(data['4v4'].damage).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].damage).toEqualTypeOf<number>();
  expect(data['4v4'].kills).toBeDefined();
  expect(data['4v4'].kills).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].kills).toEqualTypeOf<number>();
  expect(data['4v4'].deaths).toBeDefined();
  expect(data['4v4'].deaths).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].deaths).toEqualTypeOf<number>();
  expect(data['4v4'].KDRatio).toBeDefined();
  expect(data['4v4'].KDRatio).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].KDRatio).toEqualTypeOf<number>();
  expect(data['4v4'].healed).toBeDefined();
  expect(data['4v4'].healed).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].healed).toEqualTypeOf<number>();
  expect(data['4v4'].wins).toBeDefined();
  expect(data['4v4'].wins).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].wins).toEqualTypeOf<number>();
  expect(data['4v4'].losses).toBeDefined();
  expect(data['4v4'].losses).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].losses).toEqualTypeOf<number>();
  expect(data['4v4'].WLRatio).toBeDefined();
  expect(data['4v4'].WLRatio).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].WLRatio).toEqualTypeOf<number>();
  expect(data['4v4'].games).toBeDefined();
  expect(data['4v4'].games).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].games).toEqualTypeOf<number>();
  expect(data['4v4'].winstreak).toBeDefined();
  expect(data['4v4'].winstreak).greaterThanOrEqual(0);
  expectTypeOf(data['4v4'].winstreak).toEqualTypeOf<number>();
});