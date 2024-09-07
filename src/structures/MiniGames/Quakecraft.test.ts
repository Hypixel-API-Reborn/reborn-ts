import Quakecraft, { QuakecraftMode } from './Quakecraft';
import { expect, expectTypeOf, test } from 'vitest';

test('Quakecraft', () => {
  const data = new Quakecraft({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quakecraft);
  expectTypeOf(data).toEqualTypeOf<Quakecraft>();
  expect(data.coins).toBeDefined();
  expect(data.coins).greaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.solo).toBeDefined();
  expectTypeOf(data.solo).toEqualTypeOf<QuakecraftMode>();
  expect(data.solo.wins).toBeDefined();
  expect(data.solo.wins).greaterThanOrEqual(0);
  expectTypeOf(data.solo.wins).toEqualTypeOf<number>();
  expect(data.solo.kills).toBeDefined();
  expect(data.solo.kills).greaterThanOrEqual(0);
  expectTypeOf(data.solo.kills).toEqualTypeOf<number>();
  expect(data.solo.deaths).toBeDefined();
  expect(data.solo.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.solo.deaths).toEqualTypeOf<number>();
  expect(data.solo.KDR).toBeDefined();
  expect(data.solo.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.solo.KDR).toEqualTypeOf<number>();
  expect(data.solo.killstreaks).toBeDefined();
  expect(data.solo.killstreaks).greaterThanOrEqual(0);
  expectTypeOf(data.solo.killstreaks).toEqualTypeOf<number>();
  expect(data.solo.distanceTravelled).toBeDefined();
  expect(data.solo.distanceTravelled).greaterThanOrEqual(0);
  expectTypeOf(data.solo.distanceTravelled).toEqualTypeOf<number>();
  expect(data.solo.shotsFired).toBeDefined();
  expect(data.solo.shotsFired).greaterThanOrEqual(0);
  expectTypeOf(data.solo.shotsFired).toEqualTypeOf<number>();
  expect(data.solo.headshots).toBeDefined();
  expect(data.solo.headshots).greaterThanOrEqual(0);
  expectTypeOf(data.solo.headshots).toEqualTypeOf<number>();
  expect(data.teams).toBeDefined();
  expectTypeOf(data.teams).toEqualTypeOf<QuakecraftMode>();
  expect(data.teams.wins).toBeDefined();
  expect(data.teams.wins).greaterThanOrEqual(0);
  expectTypeOf(data.teams.wins).toEqualTypeOf<number>();
  expect(data.teams.kills).toBeDefined();
  expect(data.teams.kills).greaterThanOrEqual(0);
  expectTypeOf(data.teams.kills).toEqualTypeOf<number>();
  expect(data.teams.deaths).toBeDefined();
  expect(data.teams.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.teams.deaths).toEqualTypeOf<number>();
  expect(data.teams.KDR).toBeDefined();
  expect(data.teams.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.teams.KDR).toEqualTypeOf<number>();
  expect(data.teams.killstreaks).toBeDefined();
  expect(data.teams.killstreaks).greaterThanOrEqual(0);
  expectTypeOf(data.teams.killstreaks).toEqualTypeOf<number>();
  expect(data.teams.distanceTravelled).toBeDefined();
  expect(data.teams.distanceTravelled).greaterThanOrEqual(0);
  expectTypeOf(data.teams.distanceTravelled).toEqualTypeOf<number>();
  expect(data.teams.shotsFired).toBeDefined();
  expect(data.teams.shotsFired).greaterThanOrEqual(0);
  expectTypeOf(data.teams.shotsFired).toEqualTypeOf<number>();
  expect(data.teams.headshots).toBeDefined();
  expect(data.teams.headshots).greaterThanOrEqual(0);
  expectTypeOf(data.teams.headshots).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).greaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).greaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.killstreaks).toBeDefined();
  expect(data.killstreaks).greaterThanOrEqual(0);
  expectTypeOf(data.killstreaks).toEqualTypeOf<number>();
  expect(data.distanceTravelled).toBeDefined();
  expect(data.distanceTravelled).greaterThanOrEqual(0);
  expectTypeOf(data.distanceTravelled).toEqualTypeOf<number>();
  expect(data.shotsFired).toBeDefined();
  expect(data.shotsFired).greaterThanOrEqual(0);
  expectTypeOf(data.shotsFired).toEqualTypeOf<number>();
  expect(data.headshots).toBeDefined();
  expect(data.headshots).greaterThanOrEqual(0);
  expectTypeOf(data.headshots).toEqualTypeOf<number>();
  expect(data.instantRespawn).toBeDefined();
  expectTypeOf(data.instantRespawn).toEqualTypeOf<boolean>();
  expect(data.killPrefixColor).toBeDefined();
  expectTypeOf(data.killPrefixColor).toEqualTypeOf<string>();
  expect(data.showPrefix).toBeDefined();
  expectTypeOf(data.showPrefix).toEqualTypeOf<boolean>();
  expect(data.killSound).toBeDefined();
  expectTypeOf(data.killSound).toEqualTypeOf<string>();
  expect(data.barrel).toBeDefined();
  expectTypeOf(data.barrel).toEqualTypeOf<string>();
  expect(data.case).toBeDefined();
  expectTypeOf(data.case).toEqualTypeOf<string>();
  expect(data.muzzle).toBeDefined();
  expectTypeOf(data.muzzle).toEqualTypeOf<string>();
  expect(data.sight).toBeDefined();
  expectTypeOf(data.sight).toEqualTypeOf<string>();
  expect(data.trigger).toBeDefined();
  expectTypeOf(data.trigger).toEqualTypeOf<string>();
});
