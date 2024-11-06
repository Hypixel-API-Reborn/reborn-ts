import CopsAndCrims from './CopsAndCrims.js';
import CopsAndCrimsDeathmatch from './CopsAndCrimsDeathmatch.js';
import CopsAndCrimsDefusal from './CopsAndCrimsDefusal.js';
import CopsAndCrimsGunGame from './CopsAndCrimsGunGame.js';
import { expect, expectTypeOf, test } from 'vitest';

test('CopsAndCrims', () => {
  const data = new CopsAndCrims({ stats: 'meow' });
  expect(data).toBeInstanceOf(CopsAndCrims);
  expectTypeOf(data).toEqualTypeOf<CopsAndCrims>();
  expect(data.defusal).toBeDefined();
  expectTypeOf(data.defusal).toEqualTypeOf<CopsAndCrimsDefusal>();
  expect(data.deathmath).toBeDefined();
  expectTypeOf(data.deathmath).toEqualTypeOf<CopsAndCrimsDeathmatch>();
  expect(data.gunGame).toBeDefined();
  expectTypeOf(data.gunGame).toEqualTypeOf<CopsAndCrimsGunGame>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.assists).toBeDefined();
  expect(data.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.assists).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.gamesPlayed).toBeDefined();
  expect(data.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gamesPlayed).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.killsAsCrim).toBeDefined();
  expect(data.killsAsCrim).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killsAsCrim).toEqualTypeOf<number>();
  expect(data.killsAsCop).toBeDefined();
  expect(data.killsAsCop).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killsAsCop).toEqualTypeOf<number>();
  expect(data.prefixColor).toBeDefined();
  expectTypeOf(data.prefixColor).toEqualTypeOf<string>();
  expect(data.showPrefix).toBeDefined();
  expectTypeOf(data.showPrefix).toEqualTypeOf<boolean>();
  expect(data.selectedPrefix).toBeDefined();
  expectTypeOf(data.selectedPrefix).toEqualTypeOf<string>();
  expect(data.killsInPrefix).toBeDefined();
  expectTypeOf(data.killsInPrefix).toEqualTypeOf<boolean>();
});
