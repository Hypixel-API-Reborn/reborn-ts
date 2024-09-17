import romanize from './romanize';
import { expect, test } from 'vitest';

test('romanize', () => {
  expect(romanize('2')).toBe('II');
  expect(romanize(128)).toBe('CXXVIII');
  expect(romanize(500)).toBe('D');
  expect(romanize('7')).toBe('VII');
});
