import Stats, {
  StatsAuctions,
  StatsAuctionsStats,
  StatsBurrow,
  StatsCandy,
  StatsCandyCollected,
  StatsCandyFestival,
  StatsFishing,
  StatsGifts,
  StatsKillsDeaths,
  StatsMythos,
  StatsPetMilestones
} from './Stats';
import { expect, expectTypeOf, test } from 'vitest';

test('Stats (Candy Collected)', () => {
  const data = new StatsCandyCollected({ stats: 'meow' }, '10');
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsCandyCollected);
  expectTypeOf(data).toEqualTypeOf<StatsCandyCollected>();
  expect(data.green).toBeDefined();
  expect(data.green).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expect(data.purple).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
});

test('Stats (Candy Festival)', () => {
  const data = new StatsCandyFestival({ stats: 'meow' }, '10');
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsCandyFestival);
  expectTypeOf(data).toEqualTypeOf<StatsCandyFestival>();
  expect(data.year).toBeDefined();
  expect(data.year).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.collected).toBeDefined();
  expectTypeOf(data.collected).toEqualTypeOf<StatsCandyCollected>();
});

test('Stats (Candy)', () => {
  const data = new StatsCandy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsCandy);
  expectTypeOf(data).toEqualTypeOf<StatsCandy>();
  expect(data.green).toBeDefined();
  expect(data.green).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expect(data.purple).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.festivals).toBeDefined();
  expectTypeOf(data.festivals).toEqualTypeOf<StatsCandyFestival[]>();
});

test('Stats (Pet Milestones)', () => {
  const data = new StatsPetMilestones({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsPetMilestones);
  expectTypeOf(data).toEqualTypeOf<StatsPetMilestones>();
  expect(data.oresMinned).toBeDefined();
  expect(data.oresMinned).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.oresMinned).toEqualTypeOf<number>();
  expect(data.seaCreaturesKilled).toBeDefined();
  expect(data.seaCreaturesKilled).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.seaCreaturesKilled).toEqualTypeOf<number>();
});

test('Stats (Kills Deaths)', () => {
  const data = new StatsKillsDeaths({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsKillsDeaths);
  expectTypeOf(data).toEqualTypeOf<StatsKillsDeaths>();
});

test('Stats (Auctions Stats)', () => {
  const data = new StatsAuctionsStats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsAuctionsStats);
  expectTypeOf(data).toEqualTypeOf<StatsAuctionsStats>();
});

test('Stats (Auctions)', () => {
  const data = new StatsAuctions({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsAuctions);
  expectTypeOf(data).toEqualTypeOf<StatsAuctions>();
  expect(data.bids).toBeDefined();
  expect(data.bids).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bids).toEqualTypeOf<number>();
  expect(data.highestBid).toBeDefined();
  expect(data.highestBid).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestBid).toEqualTypeOf<number>();
  expect(data.goldSpent).toBeDefined();
  expect(data.goldSpent).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goldSpent).toEqualTypeOf<number>();
  expect(data.goldEarnt).toBeDefined();
  expect(data.goldEarnt).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goldEarnt).toEqualTypeOf<number>();
  expect(data.auctionsWon).toBeDefined();
  expect(data.auctionsWon).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.auctionsWon).toEqualTypeOf<number>();
  expect(data.auctionsCompleted).toBeDefined();
  expect(data.auctionsCompleted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.auctionsCompleted).toEqualTypeOf<number>();
  expect(data.auctionsCreated).toBeDefined();
  expect(data.auctionsCreated).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.auctionsCreated).toEqualTypeOf<number>();
  expect(data.auctionFees).toBeDefined();
  expect(data.auctionFees).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.auctionFees).toEqualTypeOf<number>();
  expect(data.auctionsWithOutBids).toBeDefined();
  expect(data.auctionsWithOutBids).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.auctionsWithOutBids).toEqualTypeOf<number>();
  expect(data.bought).toBeDefined();
  expectTypeOf(data.bought).toEqualTypeOf<StatsAuctionsStats>();
  expect(data.sold).toBeDefined();
  expectTypeOf(data.sold).toEqualTypeOf<StatsAuctionsStats>();
});

test('Stats (Gifts)', () => {
  const data = new StatsGifts({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsGifts);
  expectTypeOf(data).toEqualTypeOf<StatsGifts>();
  expect(data.given).toBeDefined();
  expect(data.given).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.given).toEqualTypeOf<number>();
  expect(data.received).toBeDefined();
  expect(data.received).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.received).toEqualTypeOf<number>();
});

test('Stats (Fishing)', () => {
  const data = new StatsFishing({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsFishing);
  expectTypeOf(data).toEqualTypeOf<StatsFishing>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.normal).toBeDefined();
  expect(data.normal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.normal).toEqualTypeOf<number>();
  expect(data.tresure).toBeDefined();
  expect(data.tresure).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tresure).toEqualTypeOf<number>();
  expect(data.largeTresure).toBeDefined();
  expect(data.largeTresure).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.largeTresure).toEqualTypeOf<number>();
});

test('Stats (Burrow)', () => {
  const data = new StatsBurrow({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsBurrow);
  expectTypeOf(data).toEqualTypeOf<StatsBurrow>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.common).toBeDefined();
  expect(data.common).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.common).toEqualTypeOf<number>();
});

test('Stats (Mythos)', () => {
  const data = new StatsMythos({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(StatsMythos);
  expectTypeOf(data).toEqualTypeOf<StatsMythos>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.burrowsDugNext).toBeDefined();
  expectTypeOf(data.burrowsDugNext).toEqualTypeOf<StatsBurrow>();
  expect(data.burrowsDugCombat).toBeDefined();
  expectTypeOf(data.burrowsDugCombat).toEqualTypeOf<StatsBurrow>();
  expect(data.burrowsDugTreasure).toBeDefined();
  expectTypeOf(data.burrowsDugTreasure).toEqualTypeOf<StatsBurrow>();
  expect(data.burrowsDugComplate).toBeDefined();
  expectTypeOf(data.burrowsDugComplate).toEqualTypeOf<StatsBurrow>();
});

test('Stats', () => {
  const data = new Stats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(Stats);
  expectTypeOf(data).toEqualTypeOf<Stats>();
  expect(data.candy).toBeDefined();
  expectTypeOf(data.candy).toEqualTypeOf<StatsCandy>();
  expect(data.petMilestones).toBeDefined();
  expectTypeOf(data.petMilestones).toEqualTypeOf<StatsPetMilestones>();
  expect(data.highestCriticalDamage).toBeDefined();
  expect(data.highestCriticalDamage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestCriticalDamage).toEqualTypeOf<number>();
  expect(data.highestDamage).toBeDefined();
  expect(data.highestDamage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestDamage).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expectTypeOf(data.kills).toEqualTypeOf<StatsKillsDeaths>();
  expect(data.deaths).toBeDefined();
  expectTypeOf(data.deaths).toEqualTypeOf<StatsKillsDeaths>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<StatsAuctions>();
  expect(data.gifts).toBeDefined();
  expectTypeOf(data.gifts).toEqualTypeOf<StatsGifts>();
  expect(data.itemsFished).toBeDefined();
  expectTypeOf(data.itemsFished).toEqualTypeOf<StatsFishing>();
  expect(data.mythos).toBeDefined();
  expectTypeOf(data.mythos).toEqualTypeOf<StatsMythos>();
});
