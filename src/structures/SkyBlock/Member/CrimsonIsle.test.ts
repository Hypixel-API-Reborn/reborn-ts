import CrimsonIsle, {
  CrimsonIsleDojo,
  CrimsonIsleDojoMinigame,
  CrimsonIsleKuudra,
  CrimsonIsleReputation,
  CrimsonIsleTrophyFish,
  CrimsonIsleTrophyFishCaught
} from './CrimsonIsle';
import { CrimsonIsleBelt, CrimsonIsleDojoRank, CrimsonIsleFactions, TrophyFishRank } from './Types';
import { expect, expectTypeOf, test } from 'vitest';

test('CrimsonIsle (Reputation)', () => {
  const data = new CrimsonIsleReputation({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(CrimsonIsleReputation);
  expectTypeOf(data).toEqualTypeOf<CrimsonIsleReputation>();
  expect(data.mages).toBeDefined();
  expect(data.mages).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mages).toEqualTypeOf<number>();
  expect(data.barbarians).toBeDefined();
  expect(data.barbarians).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.barbarians).toEqualTypeOf<number>();
});

test('CrimsonIsle (TrophyFishCaught)', () => {
  const data = new CrimsonIsleTrophyFishCaught({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(CrimsonIsleTrophyFishCaught);
  expectTypeOf(data).toEqualTypeOf<CrimsonIsleTrophyFishCaught>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.bronze).toBeDefined();
  expect(data.bronze).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bronze).toEqualTypeOf<number>();
  expect(data.silver).toBeDefined();
  expect(data.silver).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.silver).toEqualTypeOf<number>();
  expect(data.gold).toBeDefined();
  expect(data.gold).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gold).toEqualTypeOf<number>();
  expect(data.diamond).toBeDefined();
  expect(data.diamond).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.diamond).toEqualTypeOf<number>();
});

test('CrimsonIsle (TrophyFish)', () => {
  const data = new CrimsonIsleTrophyFish({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(CrimsonIsleTrophyFish);
  expectTypeOf(data).toEqualTypeOf<CrimsonIsleTrophyFish>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<TrophyFishRank>();
  expect(data.caught).toBeDefined();
  expectTypeOf(data.caught).toEqualTypeOf<CrimsonIsleTrophyFishCaught>();
});

test('CrimsonIsle (DojoMinigame)', () => {
  const data = new CrimsonIsleDojoMinigame({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).instanceOf(CrimsonIsleDojoMinigame);
  expectTypeOf(data).toEqualTypeOf<CrimsonIsleDojoMinigame>();
  expect(data.points).toBeDefined();
  expect(data.points).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleDojoRank>();
});

test('CrimsonIsle (Dojo)', () => {
  const data = new CrimsonIsleDojo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(CrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<CrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expectTypeOf(data.belt).toEqualTypeOf<CrimsonIsleBelt>();
  expect(data.force).toBeDefined();
  expectTypeOf(data.force).toEqualTypeOf<CrimsonIsleDojoMinigame>();
  expect(data.stamina).toBeDefined();
  expectTypeOf(data.stamina).toEqualTypeOf<CrimsonIsleDojoMinigame>();
  expect(data.mastery).toBeDefined();
  expectTypeOf(data.mastery).toEqualTypeOf<CrimsonIsleDojoMinigame>();
  expect(data.discipline).toBeDefined();
  expectTypeOf(data.discipline).toEqualTypeOf<CrimsonIsleDojoMinigame>();
  expect(data.swiftness).toBeDefined();
  expectTypeOf(data.swiftness).toEqualTypeOf<CrimsonIsleDojoMinigame>();
  expect(data.control).toBeDefined();
  expectTypeOf(data.control).toEqualTypeOf<CrimsonIsleDojoMinigame>();
  expect(data.tenacity).toBeDefined();
  expectTypeOf(data.tenacity).toEqualTypeOf<CrimsonIsleDojoMinigame>();
});

test('CrimsonIsle (Kuudra)', () => {
  const data = new CrimsonIsleKuudra({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(CrimsonIsleKuudra);
  expectTypeOf(data).toEqualTypeOf<CrimsonIsleKuudra>();
  expect(data.none).toBeDefined();
  expect(data.none).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.none).toEqualTypeOf<number>();
  expect(data.hot).toBeDefined();
  expect(data.hot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hot).toEqualTypeOf<number>();
  expect(data.burning).toBeDefined();
  expect(data.burning).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.burning).toEqualTypeOf<number>();
  expect(data.fiery).toBeDefined();
  expect(data.fiery).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fiery).toEqualTypeOf<number>();
  expect(data.highestWaveHot).toBeDefined();
  expect(data.highestWaveHot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestWaveHot).toEqualTypeOf<number>();
  expect(data.highestWaveFiery).toBeDefined();
  expect(data.highestWaveFiery).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestWaveFiery).toEqualTypeOf<number>();
  expect(data.infernal).toBeDefined();
  expect(data.infernal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.infernal).toEqualTypeOf<number>();
  expect(data.highestWaveInfernal).toBeDefined();
  expect(data.highestWaveInfernal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestWaveInfernal).toEqualTypeOf<number>();
  expect(data.highestWaveBurning).toBeDefined();
  expect(data.highestWaveBurning).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestWaveBurning).toEqualTypeOf<number>();
});

test('CrimsonIsle', () => {
  const data = new CrimsonIsle({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(CrimsonIsle);
  expectTypeOf(data).toEqualTypeOf<CrimsonIsle>();
  expect(data.faction).toBeDefined();
  expectTypeOf(data.faction).toEqualTypeOf<CrimsonIsleFactions | null>();
  expect(data.reputation).toBeDefined();
  expectTypeOf(data.reputation).toEqualTypeOf<CrimsonIsleReputation>();
  expect(data.trophyFish).toBeDefined();
  expectTypeOf(data.trophyFish).toEqualTypeOf<CrimsonIsleTrophyFish>();
  expect(data.dojo).toBeDefined();
  expectTypeOf(data.dojo).toEqualTypeOf<CrimsonIsleDojo>();
  expect(data.kuudra).toBeDefined();
  expectTypeOf(data.kuudra).toEqualTypeOf<CrimsonIsleKuudra>();
});
