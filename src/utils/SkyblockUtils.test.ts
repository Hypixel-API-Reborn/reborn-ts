import { getTrophyFishRank } from './SkyblockUtils';
import { expect, test } from 'vitest';

test('getTrophyFishRank', () => {
  expect(getTrophyFishRank(1)).toBe('Bronze');
  expect(getTrophyFishRank(2)).toBe('Silver');
  expect(getTrophyFishRank(3)).toBe('Gold');
  expect(getTrophyFishRank(4)).toBe('Diamond');
});
