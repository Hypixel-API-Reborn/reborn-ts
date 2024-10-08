import CopsAndCrims, { CopsAndCrimsDeathmatch, CopsAndCrimsDefusal, CopsAndCrimsGunGame } from './CopsAndCrims.js';
import { expect, expectTypeOf, test } from 'vitest';

test('CopsAndCrims', () => {
  const data = new CopsAndCrims({ stats: 'meow' });
  expect(data).toBeInstanceOf(CopsAndCrims);
  expectTypeOf(data).toEqualTypeOf<CopsAndCrims>();
  expect(data.defusal).toBeDefined();
  expectTypeOf(data.defusal).toEqualTypeOf<CopsAndCrimsDefusal>();
  expect(data.defusal.kills).toBeDefined();
  expect(data.defusal.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.kills).toEqualTypeOf<number>();
  expect(data.defusal.headshotKills).toBeDefined();
  expect(data.defusal.headshotKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.headshotKills).toEqualTypeOf<number>();
  expect(data.defusal.assists).toBeDefined();
  expect(data.defusal.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.assists).toEqualTypeOf<number>();
  expect(data.defusal.deaths).toBeDefined();
  expect(data.defusal.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.deaths).toEqualTypeOf<number>();
  expect(data.defusal.KDR).toBeDefined();
  expect(data.defusal.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.KDR).toEqualTypeOf<number>();
  expect(data.defusal.wins).toBeDefined();
  expect(data.defusal.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.wins).toEqualTypeOf<number>();
  expect(data.defusal.gamesPlayed).toBeDefined();
  expect(data.defusal.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.gamesPlayed).toEqualTypeOf<number>();
  expect(data.defusal.losses).toBeDefined();
  expect(data.defusal.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.losses).toEqualTypeOf<number>();
  expect(data.defusal.WLR).toBeDefined();
  expect(data.defusal.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.WLR).toEqualTypeOf<number>();
  expect(data.defusal.roundWins).toBeDefined();
  expect(data.defusal.roundWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.roundWins).toEqualTypeOf<number>();
  expect(data.defusal.shotsFired).toBeDefined();
  expect(data.defusal.shotsFired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.shotsFired).toEqualTypeOf<number>();
  expect(data.defusal.bombsDefused).toBeDefined();
  expect(data.defusal.bombsDefused).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.bombsDefused).toEqualTypeOf<number>();
  expect(data.defusal.bombsPlanted).toBeDefined();
  expect(data.defusal.bombsPlanted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.bombsPlanted).toEqualTypeOf<number>();
  expect(data.defusal.killsAsCrim).toBeDefined();
  expect(data.defusal.killsAsCrim).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.killsAsCrim).toEqualTypeOf<number>();
  expect(data.defusal.killsAsCop).toBeDefined();
  expect(data.defusal.killsAsCop).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.defusal.killsAsCop).toEqualTypeOf<number>();
  expect(data.deathmath).toBeDefined();
  expectTypeOf(data.deathmath).toEqualTypeOf<CopsAndCrimsDeathmatch>();
  expect(data.deathmath.kills).toBeDefined();
  expect(data.deathmath.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.kills).toEqualTypeOf<number>();
  expect(data.deathmath.assists).toBeDefined();
  expect(data.deathmath.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.assists).toEqualTypeOf<number>();
  expect(data.deathmath.deaths).toBeDefined();
  expect(data.deathmath.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.deaths).toEqualTypeOf<number>();
  expect(data.deathmath.KDR).toBeDefined();
  expect(data.deathmath.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.KDR).toEqualTypeOf<number>();
  expect(data.deathmath.wins).toBeDefined();
  expect(data.deathmath.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.wins).toEqualTypeOf<number>();
  expect(data.deathmath.gamesPlayed).toBeDefined();
  expect(data.deathmath.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.gamesPlayed).toEqualTypeOf<number>();
  expect(data.deathmath.losses).toBeDefined();
  expect(data.deathmath.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.losses).toEqualTypeOf<number>();
  expect(data.deathmath.WLR).toBeDefined();
  expect(data.deathmath.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.WLR).toEqualTypeOf<number>();
  expect(data.deathmath.killsAsCrim).toBeDefined();
  expect(data.deathmath.killsAsCrim).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.killsAsCrim).toEqualTypeOf<number>();
  expect(data.deathmath.killsAsCop).toBeDefined();
  expect(data.deathmath.killsAsCop).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmath.killsAsCop).toEqualTypeOf<number>();
  expect(data.gunGame).toBeDefined();
  expectTypeOf(data.gunGame).toEqualTypeOf<CopsAndCrimsGunGame>();
  expect(data.gunGame.kills).toBeDefined();
  expect(data.gunGame.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.kills).toEqualTypeOf<number>();
  expect(data.gunGame.assists).toBeDefined();
  expect(data.gunGame.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.assists).toEqualTypeOf<number>();
  expect(data.gunGame.deaths).toBeDefined();
  expect(data.gunGame.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.deaths).toEqualTypeOf<number>();
  expect(data.gunGame.KDR).toBeDefined();
  expect(data.gunGame.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.KDR).toEqualTypeOf<number>();
  expect(data.gunGame.wins).toBeDefined();
  expect(data.gunGame.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.wins).toEqualTypeOf<number>();
  expect(data.gunGame.gamesPlayed).toBeDefined();
  expect(data.gunGame.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.gamesPlayed).toEqualTypeOf<number>();
  expect(data.gunGame.losses).toBeDefined();
  expect(data.gunGame.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.losses).toEqualTypeOf<number>();
  expect(data.gunGame.WLR).toBeDefined();
  expect(data.gunGame.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.WLR).toEqualTypeOf<number>();
  expect(data.gunGame.killsAsCrim).toBeDefined();
  expect(data.gunGame.killsAsCrim).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.killsAsCrim).toEqualTypeOf<number>();
  expect(data.gunGame.killsAsCop).toBeDefined();
  expect(data.gunGame.killsAsCop).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.killsAsCop).toEqualTypeOf<number>();
  expect(data.gunGame.fastestWin).toBeDefined();
  expect(data.gunGame.fastestWin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gunGame.fastestWin).toEqualTypeOf<number>();
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
