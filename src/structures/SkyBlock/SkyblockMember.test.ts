import SkyblockGarden from './SkyblockGarden';
import SkyblockMember, { MemberStats } from './SkyblockMember';
import SkyblockMuseum from './SkyblockMuseum';
import SkyblockPet from './SkyblockPet';
import {
  ChocolateFactoryData,
  Dungeons,
  JacobData,
  SkillLevel,
  Skills,
  Slayer,
  TrophyFishRank
} from './SkyblockMemberTypes';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMember', () => {
  const data = new SkyblockMember({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMember);
  expectTypeOf(data).toEqualTypeOf<SkyblockMember>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<string>();
  expect(data.gameMode).toBeDefined();
  expectTypeOf(data.gameMode).toEqualTypeOf<string | null>();
  expect(data.selected).toBeDefined();
  expectTypeOf(data.selected).toEqualTypeOf<boolean>();
  expect(data.garden).toBeDefined();
  expect(data.garden).toBeNull();
  expectTypeOf(data.garden).toEqualTypeOf<SkyblockGarden | null>();
  expect(data.museum).toBeDefined();
  expectTypeOf(data.museum).toEqualTypeOf<SkyblockMuseum | null>();
  expect(data.profileName).toBeDefined();
  expectTypeOf(data.profileName).toEqualTypeOf<string>();
  expect(data.profileId).toBeDefined();
  expectTypeOf(data.profileId).toEqualTypeOf<string>();
  expect(data.firstJoinTimestamp).toBeDefined();
  expectTypeOf(data.firstJoinTimestamp).toEqualTypeOf<number | null>();
  expect(data.firstJoinAt).toBeDefined();
  expectTypeOf(data.firstJoinAt).toEqualTypeOf<Date | null>();
  expect(data.experience).toBeDefined();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.hotm).toBeDefined();
  expectTypeOf(data.hotm).toEqualTypeOf<SkillLevel>();
  expect(data.trophyFish).toBeDefined();
  expectTypeOf(data.trophyFish).toEqualTypeOf<TrophyFishRank>();
  expect(data.highestMagicalPower).toBeDefined();
  expect(data.highestMagicalPower).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestMagicalPower).toEqualTypeOf<number>();
  expect(data.fairySouls).toBeDefined();
  expect(data.fairySouls).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fairySouls).toEqualTypeOf<number>();
  expect(data.fairyExchanges).toBeDefined();
  expect(data.fairyExchanges).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fairyExchanges).toEqualTypeOf<number>();
  expect(data.skills).toBeDefined();
  expectTypeOf(data.skills).toEqualTypeOf<Skills>();
  expect(data.bestiary).toBeDefined();
  expect(data.bestiary).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestiary).toEqualTypeOf<number>();
  expect(data.slayer).toBeDefined();
  expectTypeOf(data.slayer).toEqualTypeOf<Slayer | null>();
  expect(data.dungeons).toBeDefined();
  expectTypeOf(data.dungeons).toEqualTypeOf<Dungeons | null>();
  expect(data.collections).toBeDefined();
  expectTypeOf(data.collections).toEqualTypeOf<Record<string, number>>();
  expect(data.purse).toBeDefined();
  expect(data.purse).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.purse).toEqualTypeOf<number>();
  expect(data.stats).toBeDefined();
  expectTypeOf(data.stats).toEqualTypeOf<MemberStats>();
  expect(data.pets).toBeDefined();
  expectTypeOf(data.pets).toEqualTypeOf<SkyblockPet[]>();
  expect(data.jacob).toBeDefined();
  expectTypeOf(data.jacob).toEqualTypeOf<JacobData>();
  expect(data.chocolate).toBeDefined();
  expectTypeOf(data.chocolate).toEqualTypeOf<ChocolateFactoryData>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.uuid);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
