import { expect, test } from 'vitest';
import { parseType } from './Booster';

test('Booster (parseType)', () => {
  expect(parseType({ stacked: true })).toBe('STACKED');
  expect(parseType({ stacked: false })).toBe('QUEUED');
  expect(parseType({ stacked: 'meow' })).toBe('ACTIVE');
});
