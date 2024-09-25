import Achievements, { AchievementsRewards } from './Achievements';
import { expect, expectTypeOf, test } from 'vitest';

test('Achievements Rewards', () => {
  const data = new AchievementsRewards({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(AchievementsRewards);
  expectTypeOf(data).toEqualTypeOf<AchievementsRewards>();
});

test('Achievements', () => {
  const data = new Achievements({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Achievements);
  expectTypeOf(data).toEqualTypeOf<Achievements>();
  expect(data.points).toBeDefined();
  expect(data.points).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.rewards).toBeDefined();
  expectTypeOf(data.rewards).toEqualTypeOf<AchievementsRewards>();
  expect(data.tracking).toBeDefined();
  expectTypeOf(data.tracking).toEqualTypeOf<string[]>();
  expect(data.achivements).toBeDefined();
  expectTypeOf(data.achivements).toEqualTypeOf<Record<string, number>>();
  expect(data.oneTime).toBeDefined();
  expectTypeOf(data.oneTime).toEqualTypeOf<string[]>();
  expect(data.totem).toBeDefined();
  expectTypeOf(data.totem).toEqualTypeOf<Record<string, any>>();
});
