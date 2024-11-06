import UHCGamemode from './UHCGamemode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('UHCGamemode', () => {
  const data = new UHCGamemode({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(UHCGamemode);
  expectTypeOf(data).toEqualTypeOf<UHCGamemode>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.headsEaten).toBeDefined();
  expect(data.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headsEaten).toEqualTypeOf<number>();
  expect(data.ultimatesCrafted).toBeDefined();
  expect(data.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.extraUltimatesCrafted).toBeDefined();
  expect(data.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.extraUltimatesCrafted).toEqualTypeOf<number>();
});
