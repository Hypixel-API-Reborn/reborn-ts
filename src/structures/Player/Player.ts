import Achievements from './Achievements';
import Arcade from '../MiniGames/Arcade';
import ArenaBrawl from '../MiniGames/ArenaBrawl';
import BedWars from '../MiniGames/BedWars';
import BlitzSurvivalGames from '../MiniGames/BlitzSurvivalGames';
import BuildBattle from '../MiniGames/BuildBattle';
import Color from '../Color';
import CopsAndCrims from '../MiniGames/CopsAndCrims';
import Cosmetics from './Cosmetics';
import Duels from '../MiniGames/Duels';
import Gifting from './Gifting';
import Guild from '../Guild/Guild';
import House from '../House';
import Housing from '../Housing';
import MegaWalls from '../MiniGames/MegaWalls';
import MurderMystery from '../MiniGames/MurderMystery';
import Paintball from '../MiniGames/Paintball';
import Parkour from './Parkour';
import Pit from '../MiniGames/Pit';
import Quakecraft from '../MiniGames/Quakecraft';
import Quests from './Quests';
import RecentGame from '../RecentGame';
import Rewards from './Rewards';
import Seasonal from './Seasonal';
import SkyWars from '../MiniGames/SkyWars';
import SmashHeroes from '../MiniGames/SmashHeroes';
import SocialMedia, { parseSocialMedia } from './SocialMedia';
import SpeedUHC from '../MiniGames/SpeedUHC';
import TNTGames from '../MiniGames/TNTGames';
import Tourney from './Tourney';
import TurboKartRacers from '../MiniGames/TurboKartRacers';
import UHC from '../MiniGames/UHC';
import VampireZ from '../MiniGames/VampireZ';
import Walls from '../MiniGames/Walls';
import Warlords from '../MiniGames/Warlords';
import WoolGames from '../MiniGames/WoolGames';
import { ChatChannel, Language, LevelProgress, PlayerRank, PlayerStats, ScorpiusBribe } from './Types';
import { getRank, playerLevelProgress } from './Utils';

class Player {
  uuid: string;
  nickname: string;
  rank: PlayerRank;
  mvpPlusColor: Color | null;
  mvpPlusPlusColor: Color | null;
  gifting: Gifting;
  socialMedia: SocialMedia[];
  firstLoginTimestamp: number;
  firstLoginAt: Date;
  lastLoginTimestamp: number | null;
  lastLoginAt: Date | null;
  achievements: Achievements;
  language: Language;
  channel: ChatChannel;
  exp: number;
  level: LevelProgress;
  seasonal: Seasonal;
  karma: number;
  freeSkyblockCookie: number | null;
  tourney: Tourney;
  rewards: Rewards;
  challenges: object;
  parkour: Parkour[];
  housing: Housing;
  cosmetics: Cosmetics;
  scorpiusBribes: ScorpiusBribe[];
  quests: Quests;
  guild: Guild | null;
  houses: House[] | null;
  recentGames: RecentGame[] | null;
  stats: PlayerStats;
  constructor(
    data: Record<string, any>,
    extra: { guild: Guild | null; houses: House[] | null; recentGames: RecentGame[] | null }
  ) {
    this.uuid = data.uuid || '';
    this.nickname = data.displayname || '';
    this.rank = getRank(data);
    this.mvpPlusColor = data.rankPlusColor ? new Color(data.rankPlusColor) : null;
    this.mvpPlusPlusColor = data.monthlyRankColor ? new Color(data.monthlyRankColor) : null;
    this.gifting = new Gifting(data?.giftingMeta || {});
    this.socialMedia = parseSocialMedia(data?.socialMedia?.links || {});
    this.firstLoginTimestamp = data?.firstLogin || 0;
    this.firstLoginAt = new Date(this.firstLoginTimestamp);
    this.lastLoginTimestamp = data?.lastLogin || null;
    this.lastLoginAt = this.lastLoginTimestamp ? new Date(this.lastLoginTimestamp) : null;
    this.achievements = new Achievements(data);
    this.language = data?.userLanguage || 'ENGLISH';
    this.channel = data.channel || 'ALL';
    this.exp = data?.networkExp || 0;
    this.level = playerLevelProgress(this.exp);
    this.seasonal = new Seasonal(data?.seasonal || {});
    this.karma = data?.karma || 0;
    this.freeSkyblockCookie = data?.skyblock_free_cookie || null;
    this.tourney = new Tourney(data?.tourney || {});
    this.rewards = new Rewards(data);
    this.challenges = data?.challenges || {};
    this.parkour = [];
    Object.keys(data?.parkourCompletions || {}).map((location) => {
      this.parkour.push(new Parkour(data?.parkourCompletions || {}, data?.parkourCheckpointBests || {}, location));
    });
    this.housing = new Housing(data?.housingMeta || {});
    this.cosmetics = new Cosmetics(data);
    this.scorpiusBribes = [];
    Object.keys(data)
      .filter((key) => key.startsWith('scorpius_bribe_'))
      .forEach((key) => {
        this.scorpiusBribes.push({ year: Number(key), timestamp: data[key] });
      });
    this.quests = new Quests(data?.quests || {}, data?.questSettings?.autoActivate || false);
    this.guild = extra.guild || null;
    this.houses = extra.houses || null;
    this.recentGames = extra.recentGames || null;
    this.stats = {
      arcade: new Arcade({ ...data?.stats?.Arcade, ...data?.achievements }),
      arena: new ArenaBrawl(data?.stats?.Arena),
      bedwars: new BedWars(data?.stats?.Bedwars),
      blitzsg: new BlitzSurvivalGames(data?.stats?.HungerGames),
      buildbattle: new BuildBattle(data?.stats?.BuildBattle),
      copsandcrims: new CopsAndCrims(data?.stats?.MCGO),
      duels: new Duels(data?.stats?.Duels),
      megawalls: new MegaWalls(data?.stats?.Walls3),
      murdermystery: new MurderMystery(data?.stats?.MurderMystery),
      paintball: new Paintball(data?.stats?.Paintball),
      pit: new Pit(data?.stats?.Pit),
      quakecraft: new Quakecraft(data?.stats?.Quake),
      skywars: new SkyWars(data?.stats?.SkyWars),
      smashheroes: new SmashHeroes(data?.stats?.SuperSmash),
      speeduhc: new SpeedUHC(data?.stats?.SpeedUHC),
      tntgames: new TNTGames(data?.stats?.TNTGames),
      turbokartracers: new TurboKartRacers(data?.stats?.GingerBread),
      uhc: new UHC(data?.stats?.UHC),
      vampirez: new VampireZ(data?.stats?.VampireZ),
      walls: new Walls(data?.stats?.Walls),
      warlords: new Warlords(data?.stats?.Battleground),
      woolgames: new WoolGames(data?.stats?.WoolGames)
    };
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
