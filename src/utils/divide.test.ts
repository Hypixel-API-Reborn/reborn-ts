import divide from './divide';
import { expect, expectTypeOf, test } from 'vitest';

test('Divide', () => {
  expect(divide(10, 2)).toBe(5);
  expectTypeOf(divide(10, 2)).toBeNumber();
  expect(divide(10, 0)).toBe(10);
  expectTypeOf(divide(10, 0)).toBeNumber();
  expect(divide(0, 0)).toBe(0);
  expectTypeOf(divide(0, 0)).toBeNumber();
  expect(divide(-5, 10)).toBe(-0.5);
  expectTypeOf(divide(-5, 10)).toBeNumber();
});
