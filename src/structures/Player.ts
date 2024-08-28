import { getPlayerLevel, getRank, getSocialMedia, parseClaimedRewards, playerLevelProgress } from '../utils/Player';
import BlitzSurvivalGames from './MiniGames/BlitzSurvivalGames';
import TurboKartRacers from './MiniGames/TurboKartRacers';
import MurderMystery from './MiniGames/MurderMystery';
import { recursive } from '../utils/removeSnakeCase';
import CopsAndCrims from './MiniGames/CopsAndCrims';
import BuildBattle from './MiniGames/BuildBattle';
import SmashHeroes from './MiniGames/SmashHeroes';
import PlayerCosmetics from './PlayerCosmetics';
import Quakecraft from './MiniGames/Quakecraft';
import ArenaBrawl from './MiniGames/ArenaBrawl';
import MegaWalls from './MiniGames/MegaWalls';
import Paintball from './MiniGames/Paintball';
import SpeedUHC from './MiniGames/SpeedUHC';
import TNTGames from './MiniGames/TNTGames';
import VampireZ from './MiniGames/VampireZ';
import Warlords from './MiniGames/Warlords';
import WoolWars from './MiniGames/WoolWars';
import SkyWars from './MiniGames/SkyWars';
import BedWars from './MiniGames/BedWars';
import Arcade from './MiniGames/Arcade';
import Walls from './MiniGames/Walls';
import Duels from './MiniGames/Duels';
import RecentGame from './RecentGame';
import UHC from './MiniGames/UHC';
import Pit from './MiniGames/Pit';
import Guild from './Guild/Guild';
import Color from './Color';
import Game from './Game';
import House from './House';

export interface LevelProgress {
  xpToNext: number;
  remainingXP: number;
  currentXP: number;
  percent: number;
  percentRemaining: number;
}

export interface PlayerSocialMedia {
  name: string;
  link: string;
  id: string;
}

export interface PlayerStats {
  arcade: Arcade;
  arena: ArenaBrawl;
  bedwars: BedWars;
  blitzsg: BlitzSurvivalGames;
  buildbattle: BuildBattle;
  copsandcrims: CopsAndCrims;
  duels: Duels;
  megawalls: MegaWalls;
  murdermystery: MurderMystery;
  paintball: Paintball;
  pit: Pit;
  quakecraft: Quakecraft;
  skywars: SkyWars;
  smashheroes: SmashHeroes;
  speeduhc: SpeedUHC;
  tntgames: TNTGames;
  turbokartracers: TurboKartRacers;
  uhc: UHC;
  vampirez: VampireZ;
  walls: Walls;
  warlords: Warlords;
  woolwars: WoolWars;
}

export type PlayerRank =
  | 'Default'
  | 'VIP'
  | 'VIP+'
  | 'MVP'
  | 'MVP+'
  | 'MVP++'
  | 'Game Master'
  | 'Admin'
  | 'YouTube'
  | 'Events'
  | 'Mojang'
  | 'Owner'
  | 'PIG+++'
  | 'Innit';

export interface RanksPurchaseTime {
  VIP: Date | null;
  VIP_PLUS: Date | null;
  MVP: Date | null;
  MVP_PLUS: Date | null;
}

class Player {
  nickname: string;
  uuid: string;
  rank: PlayerRank;
  guild: Guild | null;
  houses: House[] | null;
  recentGames: RecentGame[] | null;
  channel: string | null;
  firstLoginTimestamp: number | null;
  firstLogin: Date | null;
  lastLoginTimestamp: number | null;
  lastLogin: Date | null;
  lastLogoutTimestamp: number | null;
  lastLogout: Date | null;
  recentlyPlayedGame: Game | null;
  plusColor: Color | null;
  prefixColor: Color | null;
  karma: number;
  achievements: object;
  achievementPoints: number;
  totalExperience: number;
  level: number;
  socialMedia: PlayerSocialMedia[];
  giftBundlesSent: number;
  giftBundlesReceived: number;
  giftsSent: number;
  isOnline: boolean;
  lastDailyReward: Date | null;
  lastDailyRewardTimestamp: number | null;
  totalRewards: number | null;
  totalDailyRewards: number | null;
  rewardStreak: number | null;
  rewardScore: number | null;
  rewardHighScore: number | null;
  levelProgress: LevelProgress;
  stats: PlayerStats;
  userLanguage: string;
  claimedLevelingRewards: number[];
  globalCosmetics: PlayerCosmetics | null;
  ranksPurchaseTime: RanksPurchaseTime;

  constructor(
    data: Record<string, any>,
    extra: { guild: Guild | null; houses: House[] | null; recentGames: RecentGame[] | null }
  ) {
    this.nickname = data.displayname;
    this.uuid = data.uuid;
    this.rank = getRank(data);
    this.guild = extra.guild;
    this.houses = extra.houses;
    this.recentGames = extra.recentGames;
    this.channel = data.channel || null;
    this.firstLoginTimestamp = data.firstLogin || null;
    this.firstLogin = data.firstLogin ? new Date(data.firstLogin) : null;
    this.lastLoginTimestamp = data.lastLogin || null;
    this.lastLogin = data.lastLogin ? new Date(data.lastLogin) : null;
    this.lastLogoutTimestamp = data.lastLogout || null;
    this.lastLogout = data.lastLogout ? new Date(data.lastLogout) : null;
    this.recentlyPlayedGame = data.mostRecentGameType ? new Game(data.mostRecentGameType) : null;
    this.plusColor =
      'MVP+' === this.rank || 'MVP++' === this.rank
        ? data.rankPlusColor
          ? new Color(data.rankPlusColor)
          : new Color('RED')
        : null;
    this.prefixColor =
      'MVP++' === this.rank ? (data.monthlyRankColor ? new Color(data.monthlyRankColor) : new Color('GOLD')) : null;
    this.karma = data.karma || 0;
    this.achievements = recursive(data.achievements);
    this.achievementPoints = data.achievementPoints || 0;
    this.totalExperience = data.networkExp || 0;
    this.level = getPlayerLevel(this.totalExperience) || 0;
    this.socialMedia = getSocialMedia(data.socialMedia) || [];
    this.giftBundlesSent = data.giftingMeta ? data.giftingMeta.realBundlesGiven || 0 : null;
    this.giftBundlesReceived = data.giftingMeta ? data.giftingMeta.realBundlesReceived || 0 : null;
    this.giftsSent = data.giftingMeta ? data.giftingMeta.giftsGiven || 0 : null;
    this.isOnline =
      null !== this.lastLoginTimestamp &&
      null !== this.lastLogoutTimestamp &&
      this.lastLoginTimestamp > this.lastLogoutTimestamp;
    this.lastDailyReward = data.lastAdsenseGenerateTime ? new Date(data.lastAdsenseGenerateTime) : null;
    this.lastDailyRewardTimestamp = data.lastAdsenseGenerateTime || null;
    this.totalRewards = data.totalRewards || null;
    this.totalDailyRewards = data.totalDailyRewards || null;
    this.rewardStreak = data.rewardStreak || null;
    this.rewardScore = data.rewardScore || null;
    this.rewardHighScore = data.rewardHighScore || null;
    this.levelProgress = playerLevelProgress(data.networkExp);
    this.stats = {
      arcade: new Arcade({ ...data.stats.Arcade, ...data.achievements }),
      arena: new ArenaBrawl(data.stats.Arena),
      bedwars: new BedWars(data.stats.Bedwars),
      blitzsg: new BlitzSurvivalGames(data.stats.HungerGames),
      buildbattle: new BuildBattle(data.stats.BuildBattle),
      copsandcrims: new CopsAndCrims(data.stats.MCGO),
      duels: new Duels(data.stats.Duels),
      megawalls: new MegaWalls(data.stats.Walls3),
      murdermystery: new MurderMystery(data.stats.MurderMystery),
      paintball: new Paintball(data.stats.Paintball),
      pit: new Pit(data.stats.Pit),
      quakecraft: new Quakecraft(data.stats.Quake),
      skywars: new SkyWars(data.stats.SkyWars),
      smashheroes: new SmashHeroes(data.stats.SuperSmash),
      speeduhc: new SpeedUHC(data.stats.SpeedUHC),
      tntgames: new TNTGames(data.stats.TNTGames),
      turbokartracers: new TurboKartRacers(data.stats.GingerBread),
      uhc: new UHC(data.stats.UHC),
      vampirez: new VampireZ(data.stats.VampireZ),
      walls: new Walls(data.stats.Walls),
      warlords: new Warlords(data.stats.Battleground),
      woolwars: new WoolWars(data.stats.WoolGames)
    };
    this.userLanguage = data.userLanguage || 'ENGLISH';
    this.claimedLevelingRewards = parseClaimedRewards(data) || [];
    this.globalCosmetics = data ? new PlayerCosmetics(data) : null;
    this.ranksPurchaseTime = {
      VIP: data.levelUp_VIP ? new Date(data.levelUp_VIP) : null,
      VIP_PLUS: data.levelUp_VIP_PLUS ? new Date(data.levelUp_VIP_PLUS) : null,
      MVP: data.levelUp_MVP ? new Date(data.levelUp_MVP) : null,
      MVP_PLUS: data.levelUp_MVP_PLUS ? new Date(data.levelUp_MVP_PLUS) : null
    };
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
