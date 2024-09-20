import Slayers, { Slayer } from './Slayers';
import { expect, expectTypeOf, test } from 'vitest';

test('Slayers (Slayer)', () => {
  const data = new Slayer({ stats: 'meow' });
  expect(data.xp).toBeDefined();
  expect(data.xp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.xp).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.tier1Kills).toBeDefined();
  expect(data.tier1Kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier1Kills).toEqualTypeOf<number>();
  expect(data.tier2Kills).toBeDefined();
  expect(data.tier2Kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier2Kills).toEqualTypeOf<number>();
  expect(data.tier3Kills).toBeDefined();
  expect(data.tier3Kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier3Kills).toEqualTypeOf<number>();
  expect(data.tier4Kills).toBeDefined();
  expect(data.tier4Kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier4Kills).toEqualTypeOf<number>();
  expect(data.tier5Kills).toBeDefined();
  expect(data.tier5Kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier5Kills).toEqualTypeOf<number>();
});

test('Slayers', () => {
  const data = new Slayers({ stats: 'meow' });
  expect(data.zombie).toBeDefined();
  expectTypeOf(data.zombie).toEqualTypeOf<Slayer>();
  expect(data.spider).toBeDefined();
  expectTypeOf(data.spider).toEqualTypeOf<Slayer>();
  expect(data.wolf).toBeDefined();
  expectTypeOf(data.wolf).toEqualTypeOf<Slayer>();
  expect(data.enderman).toBeDefined();
  expectTypeOf(data.enderman).toEqualTypeOf<Slayer>();
  expect(data.blaze).toBeDefined();
  expectTypeOf(data.blaze).toEqualTypeOf<Slayer>();
  expect(data.vampire).toBeDefined();
  expectTypeOf(data.vampire).toEqualTypeOf<Slayer>();
});
