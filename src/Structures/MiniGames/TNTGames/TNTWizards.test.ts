import TNTWizards from './TNTWizards.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ColorString } from '../../../Types/Color.js';

test('TNTWizards', () => {
  const data = new TNTWizards({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(TNTWizards);
  expectTypeOf(data).toEqualTypeOf<TNTWizards>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
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
  expect(data.points).toBeDefined();
  expect(data.points).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.kineticHealing).toBeDefined();
  expect(data.kineticHealing).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kineticHealing).toEqualTypeOf<number>();
  expect(data.airTime).toBeDefined();
  expect(data.airTime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.airTime).toEqualTypeOf<number>();
  expect(data.prefix).toBeDefined();
  expectTypeOf(data.prefix).toEqualTypeOf<ColorString | 'Rainbow'>();
});