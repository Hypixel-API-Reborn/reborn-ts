import Paintball from './Paintball';
import { expect, expectTypeOf, test } from 'vitest';

test('Paintball', () => {
  const data = new Paintball({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Paintball);
  expectTypeOf(data).toEqualTypeOf<Paintball>();
  expect(data.coins).toBeDefined();
  expect(data.coins).greaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).greaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).greaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.shotsFired).toBeDefined();
  expect(data.shotsFired).greaterThanOrEqual(0);
  expectTypeOf(data.shotsFired).toEqualTypeOf<number>();
  expect(data.killstreaks).toBeDefined();
  expect(data.killstreaks).greaterThanOrEqual(0);
  expectTypeOf(data.killstreaks).toEqualTypeOf<number>();
  expect(data.forceFieldTime).toBeDefined();
  expect(data.forceFieldTime).greaterThanOrEqual(0);
  expectTypeOf(data.forceFieldTime).toEqualTypeOf<number>();
  expect(data.hat).toBeDefined();
  expect(data.adrenaline).toBeDefined();
  expect(data.adrenaline).greaterThanOrEqual(0);
  expectTypeOf(data.adrenaline).toEqualTypeOf<number>();
  expect(data.endurance).toBeDefined();
  expect(data.endurance).greaterThanOrEqual(0);
  expectTypeOf(data.endurance).toEqualTypeOf<number>();
  expect(data.fortune).toBeDefined();
  expect(data.fortune).greaterThanOrEqual(0);
  expectTypeOf(data.fortune).toEqualTypeOf<number>();
  expect(data.godfather).toBeDefined();
  expect(data.godfather).greaterThanOrEqual(0);
  expectTypeOf(data.godfather).toEqualTypeOf<number>();
  expect(data.superluck).toBeDefined();
  expect(data.superluck).greaterThanOrEqual(0);
  expectTypeOf(data.superluck).toEqualTypeOf<number>();
  expect(data.transfusion).toBeDefined();
  expect(data.transfusion).greaterThanOrEqual(0);
  expectTypeOf(data.transfusion).toEqualTypeOf<number>();
});