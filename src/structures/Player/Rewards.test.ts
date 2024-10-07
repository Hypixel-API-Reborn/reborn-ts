import Rewards, { MonthlyCrate } from './Rewards.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Monthly Crate', () => {
  const data = new MonthlyCrate({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(MonthlyCrate);
  expectTypeOf(data).toEqualTypeOf<MonthlyCrate>();
  expect(data.date).toBeDefined();
  expectTypeOf(data.date).toEqualTypeOf<string>();
  expect(data.REGULAR).toBeDefined();
  expectTypeOf(data.REGULAR).toEqualTypeOf<boolean>();
  expect(data.VIP).toBeDefined();
  expectTypeOf(data.VIP).toEqualTypeOf<boolean>();
  expect(data.VIP_PLUS).toBeDefined();
  expectTypeOf(data.VIP_PLUS).toEqualTypeOf<boolean>();
  expect(data.MVP).toBeDefined();
  expectTypeOf(data.MVP).toEqualTypeOf<boolean>();
  expect(data.MVP_PLUS).toBeDefined();
  expectTypeOf(data.MVP_PLUS).toEqualTypeOf<boolean>();
});

test('Rewards', () => {
  const data = new Rewards({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Rewards);
  expectTypeOf(data).toEqualTypeOf<Rewards>();
  expect(data.lastAdsenseGenerateTime).toBeDefined();
  expectTypeOf(data.lastAdsenseGenerateTime).toEqualTypeOf<number>();
  expect(data.lastClaimedReward).toBeDefined();
  expectTypeOf(data.lastClaimedReward).toEqualTypeOf<number>();
  expect(data.rewardHighScore).toBeDefined();
  expectTypeOf(data.rewardHighScore).toEqualTypeOf<number>();
  expect(data.rewardScore).toBeDefined();
  expectTypeOf(data.rewardScore).toEqualTypeOf<number>();
  expect(data.rewardStreak).toBeDefined();
  expectTypeOf(data.rewardStreak).toEqualTypeOf<number>();
  expect(data.rewardTokens).toBeDefined();
  expectTypeOf(data.rewardTokens).toEqualTypeOf<number>();
  expect(data.totalDailyRewards).toBeDefined();
  expectTypeOf(data.totalDailyRewards).toEqualTypeOf<number>();
  expect(data.totalRewards).toBeDefined();
  expectTypeOf(data.totalRewards).toEqualTypeOf<number>();
  expect(data.monthlyCrates).toBeDefined();
  expectTypeOf(data.monthlyCrates).toEqualTypeOf<MonthlyCrate[]>();
});
