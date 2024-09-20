import Jacob, { JacobMedals, JacobPerks } from './Jacob';
import { expect, expectTypeOf, test } from 'vitest';
test('Jacob (Medals)', () => {
  const data = new JacobMedals({ stats: 'meow' });
  expect(data.gold).toBeDefined();
  expect(data.gold).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gold).toEqualTypeOf<number>();
  expect(data.silver).toBeDefined();
  expect(data.silver).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.bronze).toBeDefined();
  expect(data.bronze).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bronze).toEqualTypeOf<number>();
});

test('Jacob (Perks)', () => {
  const data = new JacobPerks({ stats: 'meow' });
  expect(data.doubleDrops).toBeDefined();
  expect(data.doubleDrops).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.doubleDrops).toEqualTypeOf<number>();
  expect(data.farmingLevelCap).toBeDefined();
  expect(data.farmingLevelCap).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmingLevelCap).toEqualTypeOf<number>();
  expect(data.personalBests).toBeDefined();
  expectTypeOf(data.personalBests).toEqualTypeOf<boolean>();
});

test('Jacob', () => {
  const data = new Jacob({ stats: 'meow' });
  expect(data.medals).toBeDefined();
  expectTypeOf(data.medals).toEqualTypeOf<JacobMedals>();
  expect(data.perks).toBeDefined();
  expectTypeOf(data.perks).toEqualTypeOf<JacobPerks>();
  expect(data.contests).toBeDefined();
  expectTypeOf(data.contests).toEqualTypeOf<Record<string, any>>();
});
