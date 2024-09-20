import HOTM, { HOTMPowder, HOTMPowderData } from './HOTM';
import { SkillLevel } from './Types';
import { expect, expectTypeOf, test } from 'vitest';

test('HOTM (PowderData)', () => {
  const data = new HOTMPowderData({ stats: 'meow' }, 'gemstone');
  expect(data.spent).toBeDefined();
  expect(data.spent).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.spent).toEqualTypeOf<number>();
  expect(data.current).toBeDefined();
  expect(data.current).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.current).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
});

test('HOTM (Powder)', () => {
  const data = new HOTMPowder({ stats: 'meow' });
  expect(data.mithril).toBeDefined();
  expectTypeOf(data.mithril).toEqualTypeOf<HOTMPowderData>();
  expect(data.gemstone).toBeDefined();
  expectTypeOf(data.gemstone).toEqualTypeOf<HOTMPowderData>();
  expect(data.glacite).toBeDefined();
  expectTypeOf(data.glacite).toEqualTypeOf<HOTMPowderData>();
});

test('HOTM', () => {
  const data = new HOTM({ stats: 'meow' });
  expect(data.experience).toBeDefined();
  expectTypeOf(data.experience).toEqualTypeOf<SkillLevel>();
  expect(data.ability).toBeDefined();
  expectTypeOf(data.ability).toEqualTypeOf<string>();
  expect(data.powder).toBeDefined();
  expectTypeOf(data.powder).toEqualTypeOf<HOTMPowder>();
});
