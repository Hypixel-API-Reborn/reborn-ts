import Arcade from '../structures/MiniGames/Arcade';
import Player, {
  LevelProgress,
  PlayerRank,
  PlayerSocialMedia,
  PlayerStats,
  RanksPurchaseTime
} from '../structures/Player';
import Color, { ColorCode, ColorHex, ColorString, InGameCode } from '../structures/Color';
import BlitzSurvivalGames from '../structures/MiniGames/BlitzSurvivalGames';
import Game, { GameCode, GameID, GameString } from '../structures/Game';
import TurboKartRacers from '../structures/MiniGames/TurboKartRacers';
import MurderMystery from '../structures/MiniGames/MurderMystery';
import CopsAndCrims from '../structures/MiniGames/CopsAndCrims';
import SmashHeroes from '../structures/MiniGames/SmashHeroes';
import BuildBattle from '../structures/MiniGames/BuildBattle';
import PlayerCosmetics from '../structures/PlayerCosmetics';
import ArenaBrawl from '../structures/MiniGames/ArenaBrawl';
import Quakecraft from '../structures/MiniGames/Quakecraft';
import MegaWalls from '../structures/MiniGames/MegaWalls';
import Paintball from '../structures/MiniGames/Paintball';
import SpeedUHC from '../structures/MiniGames/SpeedUHC';
import { expect, expectTypeOf, test, vi } from 'vitest';
import TNTGames from '../structures/MiniGames/TNTGames';
import VampireZ from '../structures/MiniGames/VampireZ';
import Warlords from '../structures/MiniGames/Warlords';
import WoolWars from '../structures/MiniGames/WoolWars';
import BedWars from '../structures/MiniGames/BedWars';
import SkyWars from '../structures/MiniGames/SkyWars';
import RecentGame from '../structures/RecentGame';
import Walls from '../structures/MiniGames/Walls';
import Duels from '../structures/MiniGames/Duels';
import Pit from '../structures/MiniGames/Pit';
import UHC from '../structures/MiniGames/UHC';
import Guild from '../structures/Guild/Guild';
import House from '../structures/House';
import Client from '../Client';
import axios from 'axios';

test('getPlayer (never joinned hypixel)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  vi.spyOn(axios, 'get').mockResolvedValue({ status: 200, data: { success: true } });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getPlayer('14727faefbdc4aff848cd2713eb9939e')).rejects.toThrowError(
    client.errors.PLAYER_HAS_NEVER_LOGGED
  );
  vi.restoreAllMocks();
  client.destroy();
});

test('getPlayer (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getPlayer()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getPLayer (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getPlayer (guild)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e', { guild: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Player>();
  expect(data.guild).toBeDefined();
  expectTypeOf(data.guild).toEqualTypeOf<Guild | null>();
  expect(data.guild).toBeInstanceOf(Guild);
  client.destroy();
});

test('getPlayer (houses)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e', { houses: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Player>();
  expect(data.houses).toBeDefined();
  expectTypeOf(data.houses).toEqualTypeOf<House[] | null>();
  data.houses.forEach((house: House) => {
    expect(house).toBeDefined();
    expect(house).toBeInstanceOf(House);
    expectTypeOf(house).toEqualTypeOf<House>();
  });
  client.destroy();
});

test('getPlayer (recent games)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e', { recentGames: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Player>();
  expect(data.recentGames).toBeDefined();
  expectTypeOf(data.recentGames).toEqualTypeOf<RecentGame[] | null>();
  data.recentGames.forEach((game: RecentGame) => {
    expect(game).toBeDefined();
    expect(game).toBeInstanceOf(RecentGame);
    expectTypeOf(game).toEqualTypeOf<RecentGame>();
  });
  client.destroy();
});

test('getPlayer', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
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
  if (data.recentlyPlayedGame) {
    expect(data.recentlyPlayedGame).toBeDefined();
    expectTypeOf(data.recentlyPlayedGame).toEqualTypeOf<Game>();
    expect(data.recentlyPlayedGame.game).toBeDefined();
    expectTypeOf(data.recentlyPlayedGame.game).toEqualTypeOf<GameID | GameCode>();
    expect(data.recentlyPlayedGame.id).toBeDefined();
    expectTypeOf(data.recentlyPlayedGame.id).toEqualTypeOf<GameID | null>();
    expect(data.recentlyPlayedGame.code).toBeDefined();
    expectTypeOf(data.recentlyPlayedGame.code).toEqualTypeOf<GameCode | null>();
    expect(data.recentlyPlayedGame.name).toBeDefined();
    expectTypeOf(data.recentlyPlayedGame.name).toEqualTypeOf<GameString | null>();
    expect(data.recentlyPlayedGame.found).toBeDefined();
    expectTypeOf(data.recentlyPlayedGame.found).toEqualTypeOf<boolean>();
    expect(data.recentlyPlayedGame.toString()).toBeDefined();
    expect(data.recentlyPlayedGame.toString()).toBe(data.recentlyPlayedGame.name);
    expectTypeOf(data.recentlyPlayedGame.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
  }
  expect(data.plusColor).toBeDefined();
  expectTypeOf(data.plusColor).toEqualTypeOf<Color | null>();
  if (data.plusColor) {
    expect(data.plusColor).toBeDefined();
    expectTypeOf(data.plusColor).toEqualTypeOf<Color>();
    expect(data.plusColor.color).toBeDefined();
    expectTypeOf(data.plusColor.color).toEqualTypeOf<ColorCode>();
    expect(data.plusColor.toString).toBeDefined();
    expectTypeOf(data.plusColor.toString).toEqualTypeOf<() => ColorString>();
    expect(data.plusColor.toString()).toBeDefined();
    expectTypeOf(data.plusColor.toString()).toEqualTypeOf<ColorString>();
    expect(data.plusColor.toHex).toBeDefined();
    expectTypeOf(data.plusColor.toHex).toEqualTypeOf<() => ColorHex>();
    expect(data.plusColor.toHex()).toBeDefined();
    expectTypeOf(data.plusColor.toHex()).toEqualTypeOf<ColorHex>();
    expect(data.plusColor.toCode).toBeDefined();
    expectTypeOf(data.plusColor.toCode).toEqualTypeOf<() => ColorCode>();
    expect(data.plusColor.toCode()).toBeDefined();
    expectTypeOf(data.plusColor.toCode()).toEqualTypeOf<ColorCode>();
    expect(data.plusColor.toInGameCode).toBeDefined();
    expectTypeOf(data.plusColor.toInGameCode).toEqualTypeOf<() => InGameCode>();
    expect(data.plusColor.toInGameCode()).toBeDefined();
    expectTypeOf(data.plusColor.toInGameCode()).toEqualTypeOf<InGameCode>();
  }
  expect(data.prefixColor).toBeDefined();
  expectTypeOf(data.prefixColor).toEqualTypeOf<Color | null>();
  if (data.prefixColor) {
    expect(data.prefixColor).toBeDefined();
    expectTypeOf(data.prefixColor).toEqualTypeOf<Color>();
    expect(data.prefixColor.color).toBeDefined();
    expectTypeOf(data.prefixColor.color).toEqualTypeOf<ColorCode>();
    expect(data.prefixColor.toString).toBeDefined();
    expectTypeOf(data.prefixColor.toString).toEqualTypeOf<() => ColorString>();
    expect(data.prefixColor.toString()).toBeDefined();
    expectTypeOf(data.prefixColor.toString()).toEqualTypeOf<ColorString>();
    expect(data.prefixColor.toHex).toBeDefined();
    expectTypeOf(data.prefixColor.toHex).toEqualTypeOf<() => ColorHex>();
    expect(data.prefixColor.toHex()).toBeDefined();
    expectTypeOf(data.prefixColor.toHex()).toEqualTypeOf<ColorHex>();
    expect(data.prefixColor.toCode).toBeDefined();
    expectTypeOf(data.prefixColor.toCode).toEqualTypeOf<() => ColorCode>();
    expect(data.prefixColor.toCode()).toBeDefined();
    expectTypeOf(data.prefixColor.toCode()).toEqualTypeOf<ColorCode>();
    expect(data.prefixColor.toInGameCode).toBeDefined();
    expectTypeOf(data.prefixColor.toInGameCode).toEqualTypeOf<() => InGameCode>();
    expect(data.prefixColor.toInGameCode()).toBeDefined();
    expectTypeOf(data.prefixColor.toInGameCode()).toEqualTypeOf<InGameCode>();
  }
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
  expectTypeOf(data.stats).toEqualTypeOf<PlayerStats>();

  expect(data.stats.arcade).toBeDefined();
  expect(data.stats.arcade).instanceOf(Arcade);
  expectTypeOf(data.stats.arcade).toEqualTypeOf<Arcade>();

  expect(data.stats.arena).toBeDefined();
  expect(data.stats.arena).instanceOf(ArenaBrawl);
  expectTypeOf(data.stats.arena).toEqualTypeOf<ArenaBrawl>();

  expect(data.stats.bedwars).toBeDefined();
  expect(data.stats.bedwars).instanceOf(BedWars);
  expectTypeOf(data.stats.bedwars).toEqualTypeOf<BedWars>();

  expect(data.stats.blitzsg).toBeDefined();
  expect(data.stats.blitzsg).instanceOf(BlitzSurvivalGames);
  expectTypeOf(data.stats.blitzsg).toEqualTypeOf<BlitzSurvivalGames>();

  expect(data.stats.buildbattle).toBeDefined();
  expect(data.stats.buildbattle).instanceOf(BuildBattle);
  expectTypeOf(data.stats.buildbattle).toEqualTypeOf<BuildBattle>();

  expect(data.stats.copsandcrims).toBeDefined();
  expect(data.stats.copsandcrims).instanceOf(CopsAndCrims);
  expectTypeOf(data.stats.copsandcrims).toEqualTypeOf<CopsAndCrims>();

  expect(data.stats.duels).toBeDefined();
  expect(data.stats.duels).instanceOf(Duels);
  expectTypeOf(data.stats.duels).toEqualTypeOf<Duels>();

  expect(data.stats.megawalls).toBeDefined();
  expect(data.stats.megawalls).instanceOf(MegaWalls);
  expectTypeOf(data.stats.megawalls).toEqualTypeOf<MegaWalls>();

  expect(data.stats.murdermystery).toBeDefined();
  expect(data.stats.murdermystery).instanceOf(MurderMystery);
  expectTypeOf(data.stats.murdermystery).toEqualTypeOf<MurderMystery>();

  expect(data.stats.paintball).toBeDefined();
  expect(data.stats.paintball).instanceOf(Paintball);
  expectTypeOf(data.stats.paintball).toEqualTypeOf<Paintball>();

  expect(data.stats.pit).toBeDefined();
  expect(data.stats.pit).instanceOf(Pit);
  expectTypeOf(data.stats.pit).toEqualTypeOf<Pit>();

  expect(data.stats.quakecraft).toBeDefined();
  expect(data.stats.quakecraft).instanceOf(Quakecraft);
  expectTypeOf(data.stats.quakecraft).toEqualTypeOf<Quakecraft>();

  expect(data.stats.skywars).toBeDefined();
  expect(data.stats.skywars).instanceOf(SkyWars);
  expectTypeOf(data.stats.skywars).toEqualTypeOf<SkyWars>();

  expect(data.stats.smashheroes).toBeDefined();
  expect(data.stats.smashheroes).instanceOf(SmashHeroes);
  expectTypeOf(data.stats.smashheroes).toEqualTypeOf<SmashHeroes>();

  expect(data.stats.speeduhc).toBeDefined();
  expect(data.stats.speeduhc).instanceOf(SpeedUHC);
  expectTypeOf(data.stats.speeduhc).toEqualTypeOf<SpeedUHC>();

  expect(data.stats.tntgames).toBeDefined();
  expect(data.stats.tntgames).instanceOf(TNTGames);
  expectTypeOf(data.stats.tntgames).toEqualTypeOf<TNTGames>();

  expect(data.stats.turbokartracers).toBeDefined();
  expect(data.stats.turbokartracers).instanceOf(TurboKartRacers);
  expectTypeOf(data.stats.turbokartracers).toEqualTypeOf<TurboKartRacers>();

  expect(data.stats.uhc).toBeDefined();
  expect(data.stats.uhc).instanceOf(UHC);
  expectTypeOf(data.stats.uhc).toEqualTypeOf<UHC>();

  expect(data.stats.vampirez).toBeDefined();
  expect(data.stats.vampirez).instanceOf(VampireZ);
  expectTypeOf(data.stats.vampirez).toEqualTypeOf<VampireZ>();

  expect(data.stats.walls).toBeDefined();
  expect(data.stats.walls).instanceOf(Walls);
  expectTypeOf(data.stats.walls).toEqualTypeOf<Walls>();

  expect(data.stats.warlords).toBeDefined();
  expect(data.stats.warlords).instanceOf(Warlords);
  expectTypeOf(data.stats.warlords).toEqualTypeOf<Warlords>();

  expect(data.stats.woolwars).toBeDefined();
  expect(data.stats.woolwars).instanceOf(WoolWars);
  expectTypeOf(data.stats.woolwars).toEqualTypeOf<WoolWars>();

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
