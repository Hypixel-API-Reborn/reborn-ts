import Player, { LevelProgress, PlayerRank, PlayerSocialMedia, RanksPurchaseTime } from '../structures/Player';
import { expect, expectTypeOf, test } from 'vitest';
import PlayerCosmetics from '../structures/PlayerCosmetics';
import Guild from '../structures/Guild/Guild';
import Color from '../structures/Color';
import Game from '../structures/Game';
import Client from '../Client';
import Errors from '../Errors';
import Arcade from '../structures/MiniGames/Arcade';
import ArenaBrawl from '../structures/MiniGames/ArenaBrawl';
import BedWars from '../structures/MiniGames/BedWars';
import BlitzSurvivalGames from '../structures/MiniGames/BlitzSurvivalGames';
import BuildBattle from '../structures/MiniGames/BuildBattle';
import CopsAndCrims from '../structures/MiniGames/CopsAndCrims';
import Duels from '../structures/MiniGames/Duels';
import MegaWalls from '../structures/MiniGames/MegaWalls';
import MurderMystery from '../structures/MiniGames/MurderMystery';
import Paintball from '../structures/MiniGames/Paintball';
import Pit, { PitArmor } from '../structures/MiniGames/Pit';
import Quakecraft from '../structures/MiniGames/Quakecraft';
import SkyWars from '../structures/MiniGames/SkyWars';
import SmashHeroes from '../structures/MiniGames/SmashHeroes';
import SpeedUHC from '../structures/MiniGames/SpeedUHC';
import TNTGames from '../structures/MiniGames/TNTGames';
import TurboKartRacers from '../structures/MiniGames/TurboKartRacers';
import UHC from '../structures/MiniGames/UHC';
import VampireZ from '../structures/MiniGames/VampireZ';
import Walls from '../structures/MiniGames/Walls';
import Warlords from '../structures/MiniGames/Warlords';
import WoolWars from '../structures/MiniGames/WoolWars';
import PitInventoryItem from '../structures/MiniGames/PitInventoryItem';

const errors = new Errors();

test('No Player Input', () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getPlayer()).rejects.toThrowError(errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getPLayer (raw)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getPlayer (guild)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e', { getGuild: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Player>();
  expect(data.guild).toBeDefined();
  expectTypeOf(data.guild).toEqualTypeOf<Guild | null>();
  expect(data.guild).toBeInstanceOf(Guild);
  client.destroy();
});

test('getPlayer', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Player);
  expectTypeOf(data).toEqualTypeOf<Player>();
  expect(data.nickname).toBeDefined();
  expectTypeOf(data.nickname).toEqualTypeOf<string>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<string>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<PlayerRank>();
  expect(data.guild).toBeDefined();
  expectTypeOf(data.guild).toEqualTypeOf<Guild | null>();
  expect(data.channel).toBeDefined();
  expectTypeOf(data.channel).toEqualTypeOf<string | null>();
  expect(data.firstLoginTimestamp).toBeDefined();
  expectTypeOf(data.firstLoginTimestamp).toEqualTypeOf<number | null>();
  expect(data.firstLogin).toBeDefined();
  expectTypeOf(data.firstLogin).toEqualTypeOf<Date | null>();
  expect(data.lastLoginTimestamp).toBeDefined();
  expectTypeOf(data.lastLoginTimestamp).toEqualTypeOf<number | null>();
  expect(data.lastLogin).toBeDefined();
  expectTypeOf(data.lastLogin).toEqualTypeOf<Date | null>();
  expect(data.lastLogoutTimestamp).toBeDefined();
  expectTypeOf(data.lastLogoutTimestamp).toEqualTypeOf<number | null>();
  expect(data.lastLogout).toBeDefined();
  expectTypeOf(data.lastLogout).toEqualTypeOf<Date | null>();
  expect(data.recentlyPlayedGame).toBeDefined();
  expectTypeOf(data.recentlyPlayedGame).toEqualTypeOf<Game | null>();
  expect(data.plusColor).toBeDefined();
  expectTypeOf(data.plusColor).toEqualTypeOf<Color | null>();
  expect(data.prefixColor).toBeDefined();
  expectTypeOf(data.prefixColor).toEqualTypeOf<Color | null>();
  expect(data.karma).toBeDefined();
  expectTypeOf(data.karma).toEqualTypeOf<number>();
  expect(data.achievements).toBeDefined();
  expectTypeOf(data.achievements).toEqualTypeOf<object>();
  expect(data.achievementPoints).toBeDefined();
  expectTypeOf(data.achievementPoints).toEqualTypeOf<number>();
  expect(data.totalExperience).toBeDefined();
  expectTypeOf(data.totalExperience).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.socialMedia).toBeDefined();
  expectTypeOf(data.socialMedia).toEqualTypeOf<PlayerSocialMedia[]>();
  expect(data.giftBundlesSent).toBeDefined();
  expectTypeOf(data.giftBundlesSent).toEqualTypeOf<number>();
  expect(data.giftBundlesReceived).toBeDefined();
  expectTypeOf(data.giftBundlesReceived).toEqualTypeOf<number>();
  expect(data.giftsSent).toBeDefined();
  expectTypeOf(data.giftsSent).toEqualTypeOf<number>();
  expect(data.isOnline).toBeDefined();
  expectTypeOf(data.isOnline).toEqualTypeOf<boolean>();
  expect(data.lastDailyReward).toBeDefined();
  expectTypeOf(data.lastDailyReward).toEqualTypeOf<Date | null>();
  expect(data.lastDailyRewardTimestamp).toBeDefined();
  expectTypeOf(data.lastDailyRewardTimestamp).toEqualTypeOf<number | null>();
  expect(data.totalRewards).toBeDefined();
  expectTypeOf(data.totalRewards).toEqualTypeOf<number | null>();
  expect(data.totalDailyRewards).toBeDefined();
  expectTypeOf(data.totalDailyRewards).toEqualTypeOf<number | null>();
  expect(data.rewardStreak).toBeDefined();
  expectTypeOf(data.rewardStreak).toEqualTypeOf<number | null>();
  expect(data.rewardScore).toBeDefined();
  expectTypeOf(data.rewardScore).toEqualTypeOf<number | null>();
  expect(data.rewardHighScore).toBeDefined();
  expectTypeOf(data.rewardHighScore).toEqualTypeOf<number | null>();
  expect(data.levelProgress).toBeDefined();
  expectTypeOf(data.levelProgress).toEqualTypeOf<LevelProgress>();
  expect(data.stats).toBeDefined();
  expectTypeOf(data.stats).toEqualTypeOf<object | null>();
  if (null !== data.stats) {
    expect(data.stats).toBeDefined();
    expectTypeOf(data.stats).toEqualTypeOf<object>();
    expect(data.stats.arcade).toBeDefined();
    expectTypeOf(data.stats.arcade).toEqualTypeOf<Arcade | null>();
    expect(data.stats.arena).toBeDefined();
    expectTypeOf(data.stats.arena).toEqualTypeOf<ArenaBrawl | null>();
    expect(data.stats.bedwars).toBeDefined();
    expectTypeOf(data.stats.bedwars).toEqualTypeOf<BedWars | null>();
    if (null !== data.stats.bedwars) {
      expect(data.stats.bedwars).toBeInstanceOf(BedWars);
    }
    expect(data.stats.blitzsg).toBeDefined();
    expectTypeOf(data.stats.blitzsg).toEqualTypeOf<BlitzSurvivalGames | null>();
    if (null !== data.stats.blitzsg) {
      expect(data.stats.blitzsg).toBeInstanceOf(BlitzSurvivalGames);
    }
    expect(data.stats.buildbattle).toBeDefined();
    expectTypeOf(data.stats.buildbattle).toEqualTypeOf<BuildBattle | null>();
    if (null !== data.stats.buildbattle) {
      expect(data.stats.buildbattle).toBeInstanceOf(BuildBattle);
    }
    expect(data.stats.copsandcrims).toBeDefined();
    expectTypeOf(data.stats.copsandcrims).toEqualTypeOf<CopsAndCrims | null>();
    if (null !== data.stats.copsandcrims) {
      expect(data.stats.copsandcrims).toBeInstanceOf(CopsAndCrims);
    }
    expect(data.stats.duels).toBeDefined();
    expectTypeOf(data.stats.duels).toEqualTypeOf<Duels | null>();
    if (null !== data.stats.duels) {
      expect(data.stats.duels).toBeInstanceOf(Duels);
    }
    expect(data.stats.megawalls).toBeDefined();
    expectTypeOf(data.stats.megawalls).toEqualTypeOf<MegaWalls | null>();
    if (null !== data.stats.megawalls) {
      expect(data.stats.megawalls).toBeInstanceOf(MegaWalls);
    }
    expect(data.stats.murdermystery).toBeDefined();
    expectTypeOf(data.stats.murdermystery).toEqualTypeOf<MurderMystery | null>();
    if (null !== data.stats.murdermystery) {
      expect(data.stats.murdermystery).toBeInstanceOf(MurderMystery);
    }
    expect(data.stats.paintball).toBeDefined();
    expectTypeOf(data.stats.paintball).toEqualTypeOf<Paintball | null>();
    if (null !== data.stats.paintball) {
      expect(data.stats.paintball).toBeInstanceOf(Paintball);
    }
    expect(data.stats.pit).toBeDefined();
    expectTypeOf(data.stats.pit).toEqualTypeOf<Pit | null>();
    if (null !== data.stats.pit) {
      expect(data.stats.pit).toBeInstanceOf(Pit);
      expect(data.stats.pit.prestige).toBeDefined();
      expectTypeOf(data.stats.pit.prestige).toEqualTypeOf<number>();
      expect(data.stats.pit.prestige).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.xp).toBeDefined();
      expectTypeOf(data.stats.pit.xp).toEqualTypeOf<number>();
      expect(data.stats.pit.xp).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.level).toBeDefined();
      expectTypeOf(data.stats.pit.level).toEqualTypeOf<number>();
      expect(data.stats.pit.level).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.kills).toBeDefined();
      expectTypeOf(data.stats.pit.kills).toEqualTypeOf<number>();
      expect(data.stats.pit.kills).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.deaths).toBeDefined();
      expectTypeOf(data.stats.pit.deaths).toEqualTypeOf<number>();
      expect(data.stats.pit.deaths).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.KDRatio).toBeDefined();
      expectTypeOf(data.stats.pit.KDRatio).toEqualTypeOf<number>();
      expect(data.stats.pit.KDRatio).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.assists).toBeDefined();
      expectTypeOf(data.stats.pit.assists).toEqualTypeOf<number>();
      expect(data.stats.pit.assists).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.maxKillStreak).toBeDefined();
      expectTypeOf(data.stats.pit.maxKillStreak).toEqualTypeOf<number>();
      expect(data.stats.pit.maxKillStreak).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.playtime).toBeDefined();
      expectTypeOf(data.stats.pit.playtime).toEqualTypeOf<number>();
      expect(data.stats.pit.playtime).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.joins).toBeDefined();
      expectTypeOf(data.stats.pit.joins).toEqualTypeOf<number>();
      expect(data.stats.pit.joins).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.damageReceived).toBeDefined();
      expectTypeOf(data.stats.pit.damageReceived).toEqualTypeOf<number>();
      expect(data.stats.pit.damageReceived).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.damageDealt).toBeDefined();
      expectTypeOf(data.stats.pit.damageDealt).toEqualTypeOf<number>();
      expect(data.stats.pit.damageDealt).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.damageRatio).toBeDefined();
      expectTypeOf(data.stats.pit.damageRatio).toEqualTypeOf<number>();
      expect(data.stats.pit.damageRatio).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.meleeDamageReceived).toBeDefined();
      expectTypeOf(data.stats.pit.meleeDamageReceived).toEqualTypeOf<number>();
      expect(data.stats.pit.meleeDamageReceived).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.meleeDamageDealt).toBeDefined();
      expectTypeOf(data.stats.pit.meleeDamageDealt).toEqualTypeOf<number>();
      expect(data.stats.pit.meleeDamageDealt).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.swordHits).toBeDefined();
      expectTypeOf(data.stats.pit.swordHits).toEqualTypeOf<number>();
      expect(data.stats.pit.swordHits).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.leftClicks).toBeDefined();
      expectTypeOf(data.stats.pit.leftClicks).toEqualTypeOf<number>();
      expect(data.stats.pit.leftClicks).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.meleeAccuracy).toBeDefined();
      expectTypeOf(data.stats.pit.meleeAccuracy).toEqualTypeOf<number>();
      expect(data.stats.pit.meleeAccuracy).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.meleeDamageRatio).toBeDefined();
      expectTypeOf(data.stats.pit.meleeDamageRatio).toEqualTypeOf<number>();
      expect(data.stats.pit.meleeDamageRatio).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.bowDamageReceived).toBeDefined();
      expectTypeOf(data.stats.pit.bowDamageReceived).toEqualTypeOf<number>();
      expect(data.stats.pit.bowDamageReceived).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.bowDamageDealt).toBeDefined();
      expectTypeOf(data.stats.pit.bowDamageDealt).toEqualTypeOf<number>();
      expect(data.stats.pit.bowDamageDealt).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.arrowsHit).toBeDefined();
      expectTypeOf(data.stats.pit.arrowsHit).toEqualTypeOf<number>();
      expect(data.stats.pit.arrowsHit).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.arrowsFired).toBeDefined();
      expectTypeOf(data.stats.pit.arrowsFired).toEqualTypeOf<number>();
      expect(data.stats.pit.arrowsFired).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.bowAccuracy).toBeDefined();
      expectTypeOf(data.stats.pit.bowAccuracy).toEqualTypeOf<number>();
      expect(data.stats.pit.bowAccuracy).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.bowDamageRatio).toBeDefined();
      expectTypeOf(data.stats.pit.bowDamageRatio).toEqualTypeOf<number>();
      expect(data.stats.pit.bowDamageRatio).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.goldenHeadsEaten).toBeDefined();
      expectTypeOf(data.stats.pit.goldenHeadsEaten).toEqualTypeOf<number>();
      expect(data.stats.pit.goldenHeadsEaten).toBeGreaterThanOrEqual(0);
      expect(data.stats.pit.getInventory).toBeDefined();
      expectTypeOf(data.stats.pit.getInventory).toEqualTypeOf<() => Promise<PitInventoryItem[]>>();
      expect(data.stats.pit.getInventory).toBeInstanceOf(Function);
      const pitInventory = await data.stats.pit.getInventory();
      expect(pitInventory).toBeDefined();
      pitInventory.forEach((item: PitInventoryItem) => {
        expect(item).toBeDefined();
        expect(item).toBeInstanceOf(PitInventoryItem);
        expectTypeOf(item).toEqualTypeOf<PitInventoryItem>();
        expect(item.itemId).toBeDefined();
        expectTypeOf(item.itemId).toEqualTypeOf<number>();
        expect(item.count).toBeDefined();
        expectTypeOf(item.count).toEqualTypeOf<number>();
        expect(item.name).toBeDefined();
        expectTypeOf(item.name).toEqualTypeOf<string | null>();
        expect(item.lore).toBeDefined();
        expectTypeOf(item.lore).toEqualTypeOf<string | null>();
        expect(item.loreArray).toBeDefined();
        expectTypeOf(item.loreArray).toEqualTypeOf<string[]>();
        expect(item.extraAttributes).toBeDefined();
        expectTypeOf(item.extraAttributes).toEqualTypeOf<object | null>();
      });
      expect(data.stats.pit.getEnterChest).toBeDefined();
      expectTypeOf(data.stats.pit.getEnterChest).toEqualTypeOf<() => Promise<PitInventoryItem[]>>();
      expect(data.stats.pit.getEnterChest).toBeInstanceOf(Function);
      const pitEnterChest = await data.stats.pit.getEnterChest();
      expect(pitEnterChest).toBeDefined();
      pitEnterChest.forEach((item: PitInventoryItem) => {
        expect(item).toBeDefined();
        expect(item).toBeInstanceOf(PitInventoryItem);
        expectTypeOf(item).toEqualTypeOf<PitInventoryItem>();
        expect(item.itemId).toBeDefined();
        expectTypeOf(item.itemId).toEqualTypeOf<number>();
        expect(item.count).toBeDefined();
        expectTypeOf(item.count).toEqualTypeOf<number>();
        expect(item.name).toBeDefined();
        expectTypeOf(item.name).toEqualTypeOf<string | null>();
        expect(item.lore).toBeDefined();
        expectTypeOf(item.lore).toEqualTypeOf<string | null>();
        expect(item.loreArray).toBeDefined();
        expectTypeOf(item.loreArray).toEqualTypeOf<string[]>();
        expect(item.extraAttributes).toBeDefined();
        expectTypeOf(item.extraAttributes).toEqualTypeOf<object | null>();
      });
      expect(data.stats.pit.getArmor).toBeDefined();
      expectTypeOf(data.stats.pit.getArmor).toEqualTypeOf<() => Promise<PitArmor>>();
      expect(data.stats.pit.getArmor).toBeInstanceOf(Function);
      const pitArmor = await data.stats.pit.getArmor();
      expect(pitArmor).toBeDefined();
      expectTypeOf(pitArmor).toEqualTypeOf<PitArmor>();
      expect(pitArmor.helmet).toBeDefined();
      expectTypeOf(pitArmor.helmet).toEqualTypeOf<PitInventoryItem | null>();
      if (null !== pitArmor.helmet) {
        expect(pitArmor.helmet).toBeDefined();
        expect(pitArmor.helmet).toBeInstanceOf(PitInventoryItem);
        expectTypeOf(pitArmor.helmet).toEqualTypeOf<PitInventoryItem>();
        expect(pitArmor.helmet.itemId).toBeDefined();
        expectTypeOf(pitArmor.helmet.itemId).toEqualTypeOf<number>();
        expect(pitArmor.helmet.count).toBeDefined();
        expectTypeOf(pitArmor.helmet.count).toEqualTypeOf<number>();
        expect(pitArmor.helmet.name).toBeDefined();
        expectTypeOf(pitArmor.helmet.name).toEqualTypeOf<string | null>();
        expect(pitArmor.helmet.lore).toBeDefined();
        expectTypeOf(pitArmor.helmet.lore).toEqualTypeOf<string | null>();
        expect(pitArmor.helmet.loreArray).toBeDefined();
        expectTypeOf(pitArmor.helmet.loreArray).toEqualTypeOf<string[]>();
        expect(pitArmor.helmet.extraAttributes).toBeDefined();
        expectTypeOf(pitArmor.helmet.extraAttributes).toEqualTypeOf<object | null>();
      }
      expect(pitArmor.chestplate).toBeDefined();
      expectTypeOf(pitArmor.chestplate).toEqualTypeOf<PitInventoryItem | null>();
      if (null !== pitArmor.chestplate) {
        expect(pitArmor.chestplate).toBeDefined();
        expect(pitArmor.chestplate).toBeInstanceOf(PitInventoryItem);
        expectTypeOf(pitArmor.chestplate).toEqualTypeOf<PitInventoryItem>();
        expect(pitArmor.chestplate.itemId).toBeDefined();
        expectTypeOf(pitArmor.chestplate.itemId).toEqualTypeOf<number>();
        expect(pitArmor.chestplate.count).toBeDefined();
        expectTypeOf(pitArmor.chestplate.count).toEqualTypeOf<number>();
        expect(pitArmor.chestplate.name).toBeDefined();
        expectTypeOf(pitArmor.chestplate.name).toEqualTypeOf<string | null>();
        expect(pitArmor.chestplate.lore).toBeDefined();
        expectTypeOf(pitArmor.chestplate.lore).toEqualTypeOf<string | null>();
        expect(pitArmor.chestplate.loreArray).toBeDefined();
        expectTypeOf(pitArmor.chestplate.loreArray).toEqualTypeOf<string[]>();
        expect(pitArmor.chestplate.extraAttributes).toBeDefined();
        expectTypeOf(pitArmor.chestplate.extraAttributes).toEqualTypeOf<object | null>();
      }
      expect(pitArmor.leggings).toBeDefined();
      expectTypeOf(pitArmor.leggings).toEqualTypeOf<PitInventoryItem | null>();
      if (null !== pitArmor.leggings) {
        expect(pitArmor.leggings).toBeDefined();
        expect(pitArmor.leggings).toBeInstanceOf(PitInventoryItem);
        expectTypeOf(pitArmor.leggings).toEqualTypeOf<PitInventoryItem>();
        expect(pitArmor.leggings.itemId).toBeDefined();
        expectTypeOf(pitArmor.leggings.itemId).toEqualTypeOf<number>();
        expect(pitArmor.leggings.count).toBeDefined();
        expectTypeOf(pitArmor.leggings.count).toEqualTypeOf<number>();
        expect(pitArmor.leggings.name).toBeDefined();
        expectTypeOf(pitArmor.leggings.name).toEqualTypeOf<string | null>();
        expect(pitArmor.leggings.lore).toBeDefined();
        expectTypeOf(pitArmor.leggings.lore).toEqualTypeOf<string | null>();
        expect(pitArmor.leggings.loreArray).toBeDefined();
        expectTypeOf(pitArmor.leggings.loreArray).toEqualTypeOf<string[]>();
        expect(pitArmor.leggings.extraAttributes).toBeDefined();
        expectTypeOf(pitArmor.leggings.extraAttributes).toEqualTypeOf<object | null>();
      }
      expect(pitArmor.boots).toBeDefined();
      expectTypeOf(pitArmor.boots).toEqualTypeOf<PitInventoryItem | null>();
      if (null !== pitArmor.boots) {
        expect(pitArmor.boots).toBeDefined();
        expect(pitArmor.boots).toBeInstanceOf(PitInventoryItem);
        expectTypeOf(pitArmor.boots).toEqualTypeOf<PitInventoryItem>();
        expect(pitArmor.boots.itemId).toBeDefined();
        expectTypeOf(pitArmor.boots.itemId).toEqualTypeOf<number>();
        expect(pitArmor.boots.count).toBeDefined();
        expectTypeOf(pitArmor.boots.count).toEqualTypeOf<number>();
        expect(pitArmor.boots.name).toBeDefined();
        expectTypeOf(pitArmor.boots.name).toEqualTypeOf<string | null>();
        expect(pitArmor.boots.lore).toBeDefined();
        expectTypeOf(pitArmor.boots.lore).toEqualTypeOf<string | null>();
        expect(pitArmor.boots.loreArray).toBeDefined();
        expectTypeOf(pitArmor.boots.loreArray).toEqualTypeOf<string[]>();
        expect(pitArmor.boots.extraAttributes).toBeDefined();
        expectTypeOf(pitArmor.boots.extraAttributes).toEqualTypeOf<object | null>();
      }
    }
    expect(data.stats.quakecraft).toBeDefined();
    expectTypeOf(data.stats.quakecraft).toEqualTypeOf<Quakecraft | null>();
    if (null !== data.stats.quakecraft) {
      expect(data.stats.quakecraft).toBeInstanceOf(Quakecraft);
    }
    expect(data.stats.skywars).toBeDefined();
    expectTypeOf(data.stats.skywars).toEqualTypeOf<SkyWars | null>();
    if (null !== data.stats.skywars) {
      expect(data.stats.skywars).toBeInstanceOf(SkyWars);
    }
    expect(data.stats.smashheroes).toBeDefined();
    expectTypeOf(data.stats.smashheroes).toEqualTypeOf<SmashHeroes | null>();
    if (null !== data.stats.smashheroes) {
      expect(data.stats.smashheroes).toBeInstanceOf(SmashHeroes);
    }
    expect(data.stats.speeduhc).toBeDefined();
    expectTypeOf(data.stats.speeduhc).toEqualTypeOf<SpeedUHC | null>();
    if (null !== data.stats.speeduhc) {
      expect(data.stats.speeduhc).toBeInstanceOf(SpeedUHC);
    }
    expect(data.stats.tntgames).toBeDefined();
    expectTypeOf(data.stats.tntgames).toEqualTypeOf<TNTGames | null>();
    if (null !== data.stats.tntgames) {
      expect(data.stats.tntgames).toBeInstanceOf(TNTGames);
    }
    expect(data.stats.turbokartracers).toBeDefined();
    expectTypeOf(data.stats.turbokartracers).toEqualTypeOf<TurboKartRacers | null>();
    if (null !== data.stats.turbokartracers) {
      expect(data.stats.turbokartracers).toBeInstanceOf(TurboKartRacers);
    }
    expect(data.stats.uhc).toBeDefined();
    expectTypeOf(data.stats.uhc).toEqualTypeOf<UHC | null>();
    if (null !== data.stats.uhc) {
      expect(data.stats.uhc).toBeInstanceOf(UHC);
    }
    expect(data.stats.vampirez).toBeDefined();
    expectTypeOf(data.stats.vampirez).toEqualTypeOf<VampireZ | null>();
    if (null !== data.stats.vampirez) {
      expect(data.stats.vampirez).toBeInstanceOf(VampireZ);
    }
    expect(data.stats.walls).toBeDefined();
    expectTypeOf(data.stats.walls).toEqualTypeOf<Walls | null>();
    if (null !== data.stats.walls) {
      expect(data.stats.walls).toBeInstanceOf(Walls);
    }
    expect(data.stats.warlords).toBeDefined();
    expectTypeOf(data.stats.warlords).toEqualTypeOf<Warlords | null>();
    if (null !== data.stats.warlords) {
      expect(data.stats.warlords).toBeInstanceOf(Warlords);
    }
    expect(data.stats.woolwars).toBeDefined();
    expectTypeOf(data.stats.woolwars).toEqualTypeOf<WoolWars | null>();
    if (null !== data.stats.woolwars) {
      expect(data.stats.woolwars).toBeInstanceOf(WoolWars);
    }
  }
  expect(data.userLanguage).toBeDefined();
  expectTypeOf(data.userLanguage).toEqualTypeOf<string>();
  expect(data.claimedLevelingRewards).toBeDefined();
  expectTypeOf(data.claimedLevelingRewards).toEqualTypeOf<number[]>();
  expect(data.globalCosmetics).toBeDefined();
  expectTypeOf(data.globalCosmetics).toEqualTypeOf<PlayerCosmetics | null>();
  expect(data.ranksPurchaseTime).toBeDefined();
  expectTypeOf(data.ranksPurchaseTime).toEqualTypeOf<RanksPurchaseTime>();
  client.destroy();
});
