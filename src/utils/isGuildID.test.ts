import isGuildID from './isGuildID.js';
import { expect, expectTypeOf, test } from 'vitest';

const ids = ['5b8dd8cb0cf24573ab84c9ad', '656618008ea8c9dca6f3668d', '5ba94ed50cf2cc24cf043706'];
const idsInvalid = ['invalid', 'hello why are you here?', ''];

test('Valid Guild ID', () => {
  ids.forEach((id) => {
    expect(isGuildID(id)).toBe(true);
    expectTypeOf(isGuildID(id)).toBeBoolean();
  });
});

test('Invalid Guild ID', () => {
  idsInvalid.forEach((id) => {
    expect(isGuildID(id)).toBe(false);
    expectTypeOf(isGuildID(id)).toBeBoolean();
  });
});
