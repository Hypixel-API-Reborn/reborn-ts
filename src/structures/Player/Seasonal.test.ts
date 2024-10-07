import Seasonal, { Season, SeasonBingo, SeasonBingoTier, SeasonYear } from './Seasonal.js';
import { SeasonName } from './Types.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Season Bingo Tier', () => {
  const data = new SeasonBingoTier({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SeasonBingoTier);
  expectTypeOf(data).toEqualTypeOf<SeasonBingoTier>();
  expect(data.objectives).toBeDefined();
  expectTypeOf(data.objectives).toEqualTypeOf<Record<string, number>>();
  expect(data.rewards).toBeDefined();
  expectTypeOf(data.rewards).toEqualTypeOf<string[]>();
});

test('Season Bingo', () => {
  const data = new SeasonBingo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SeasonBingo);
  expectTypeOf(data).toEqualTypeOf<SeasonBingo>();
  expect(data.easy).toBeDefined();
  expectTypeOf(data.easy).toEqualTypeOf<SeasonBingoTier | null>();
  expect(data.medium).toBeDefined();
  expectTypeOf(data.medium).toEqualTypeOf<SeasonBingoTier | null>();
  expect(data.hard).toBeDefined();
  expectTypeOf(data.hard).toEqualTypeOf<SeasonBingoTier | null>();
});

test('Season Year', () => {
  const data = new SeasonYear({ stats: 'meow' }, '100');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SeasonYear);
  expectTypeOf(data).toEqualTypeOf<SeasonYear>();
  expect(data.year).toBeDefined();
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.experience).toBeDefined();
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.season).toBeDefined();
  expectTypeOf(data.season).toEqualTypeOf<Record<string, any>>();
  expect(data.bingo).toBeDefined();
  expectTypeOf(data.bingo).toEqualTypeOf<SeasonBingo | null>();
  expect(data.adventRewards).toBeDefined();
  expectTypeOf(data.adventRewards).toEqualTypeOf<Record<string, number> | null>();
  expect(data.presents).toBeDefined();
  expectTypeOf(data.presents).toEqualTypeOf<Record<string, boolean> | null>();
});

test('Season', () => {
  const data = new Season({ stats: 'meow' }, 'anniversary');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Season);
  expectTypeOf(data).toEqualTypeOf<Season>();
  expect(data.season).toBeDefined();
  expectTypeOf(data.season).toEqualTypeOf<SeasonName>();
  expect(data.years).toBeDefined();
  expectTypeOf(data.years).toEqualTypeOf<SeasonYear[]>();
});

test('Seasonal', () => {
  const data = new Seasonal({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Seasonal);
  expectTypeOf(data).toEqualTypeOf<Seasonal>();
  expect(data.silver).toBeDefined();
  expect(data.silver).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.anniversary).toBeDefined();
  expectTypeOf(data.anniversary).toEqualTypeOf<Season>();
  expect(data.christmas).toBeDefined();
  expectTypeOf(data.christmas).toEqualTypeOf<Season>();
  expect(data.easter).toBeDefined();
  expectTypeOf(data.easter).toEqualTypeOf<Season>();
  expect(data.halloween).toBeDefined();
  expectTypeOf(data.halloween).toEqualTypeOf<Season>();
  expect(data.summer).toBeDefined();
  expectTypeOf(data.summer).toEqualTypeOf<Season>();
});
