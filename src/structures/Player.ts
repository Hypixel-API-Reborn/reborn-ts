import { getRank, getSocialMedia, LevelProgress, playerLevelProgress, SocialMedia } from '../utils/Player';
import BlitzSurvivalGames from './MiniGames/BlitzSurvivalGames';
import TurboKartRacers from './MiniGames/TurboKartRacers';
import MurderMystery from './MiniGames/MurderMystery';
import CopsAndCrims from './MiniGames/CopsAndCrims';
import BuildBattle from './MiniGames/BuildBattle';
import SmashHeroes from './MiniGames/SmashHeroes';
import Quakecraft from './MiniGames/Quakecraft';
import ArenaBrawl from './MiniGames/ArenaBrawl';
import PlayerCosmetics from './PlayerCosmetics';
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
import Guild from './Guild/Guild';
import UHC from './MiniGames/UHC';
import Pit from './MiniGames/Pit';
import Housing from './Housing';

export type PlayerRank = 'VIP' | 'VIP+' | 'MVP' | 'MVP+' | 'MVP++' | 'Game Master' | 'Admin' | 'YouTube';

export interface RanksPurchaseTime {
  VIP: Date | null;
  VIP_PLUS: Date | null;
  MVP: Date | null;
  MVP_PLUS: Date | null;
}

interface PlayerStats {
  arcade: Arcade | null;
  arena: ArenaBrawl | null;
  bedwars: BedWars | null;
  blitzsg: BlitzSurvivalGames | null;
  buildbattle: BuildBattle | null;
  copsandcrims: CopsAndCrims | null;
  duels: Duels | null;
  megawalls: MegaWalls | null;
  murdermystery: MurderMystery | null;
  paintball: Paintball | null;
  pit: Pit | null;
  quakecraft: Quakecraft | null;
  skywars: SkyWars | null;
  smashheroes: SmashHeroes | null;
  speeduhc: SpeedUHC | null;
  tntgames: TNTGames | null;
  turbokartracers: TurboKartRacers | null;
  uhc: UHC | null;
  vampirez: VampireZ | null;
  walls: Walls | null;
  warlords: Warlords | null;
  woolwars: WoolWars | null;
}

class PlayerGifting {
  bundlesReceived: number;
  bundlesGiven: number;
  milestones: string[];
  giftsGiven: number;
  ranksGiven: number;
  ranksGivenMilestones: string[];
  constructor(data: Record<string, any>) {
    this.bundlesReceived = data.realBundlesReceived || 0;
    this.bundlesGiven = data.realBundlesGiven || 0;
    this.milestones = (data.milestones || []).reverse();
    this.giftsGiven = data.giftsGiven || 0;
    this.ranksGiven = data.ranksGiven || 0;
    this.ranksGivenMilestones = (data.rankgiftingmilestones || []).reverse();
  }
}

class PlayerParkour {
  location: string;
  timeStart: number;
  timeTook: number;
  checkPoints: number[];
  constructor(data: Record<string, any>, checkPoints: Record<string, any>, location: string) {
    this.location = location;
    this.timeStart = data?.[location]?.[0].timeStart || 0;
    this.timeTook = data?.[location]?.[0].timeTook || 0;
    this.checkPoints = [];
    Object.keys(checkPoints?.[location]).map((checkPoint: string) => {
      checkPoints.push(checkPoints?.[location]?.[checkPoint]);
    });
  }
}

class Player {
  nickname: string;
  uuid: string;
  rank: PlayerRank;
  guild: Guild | null;

  firstLoginTimestamp: number;
  firstLoginAt: Date;
  exp: number;
  level: LevelProgress;
  karma: number;
  cosmetics: PlayerCosmetics;
  parkour: PlayerParkour[];
  housing: Housing;
  gifting: PlayerGifting;
  socialMedia: SocialMedia[];

  channel: string | null;
  stats: PlayerStats | null;

  constructor(data: Record<string, any>, guild?: Guild) {
    this.nickname = data.displayname;
    this.uuid = data.uuid;
    this.rank = getRank(data);
    this.guild = guild || null;

    this.firstLoginTimestamp = data.firstLogin;
    this.firstLoginAt = new Date(this.firstLoginTimestamp);
    this.exp = data.networkExp || 0;
    this.level = playerLevelProgress(this.exp);
    this.karma = data.karma || 0;
    this.cosmetics = new PlayerCosmetics(data);
    this.parkour = [];
    Object.keys(data.parkourCompletions).map((location) => {
      this.parkour.push(new PlayerParkour(data.parkourCompletions, data.parkourCheckpointBests, location));
    });
    this.housing = new Housing(data.housingMeta);
    this.gifting = new PlayerGifting(data.giftingMeta);
    this.socialMedia = getSocialMedia(data.socialMedia);

    this.channel = data.channel || null;
    this.stats = data.stats
      ? {
          arcade: data.stats.Arcade ? new Arcade({ ...data.stats.Arcade, ...data.achievements }) : null,
          arena: data.stats.Arena ? new ArenaBrawl(data.stats.Arena) : null,
          bedwars: data.stats.Bedwars ? new BedWars(data.stats.Bedwars) : null,
          blitzsg: data.stats.HungerGames ? new BlitzSurvivalGames(data.stats.HungerGames) : null,
          buildbattle: data.stats.BuildBattle ? new BuildBattle(data.stats.BuildBattle) : null,
          copsandcrims: data.stats.MCGO ? new CopsAndCrims(data.stats.MCGO) : null,
          duels: data.stats.Duels ? new Duels(data.stats.Duels) : null,
          megawalls: data.stats.Walls3 ? new MegaWalls(data.stats.Walls3) : null,
          murdermystery: data.stats.MurderMystery ? new MurderMystery(data.stats.MurderMystery) : null,
          paintball: data.stats.Paintball ? new Paintball(data.stats.Paintball) : null,
          pit: data.stats.Pit ? new Pit(data.stats.Pit) : null,
          quakecraft: data.stats.Quake ? new Quakecraft(data.stats.Quake) : null,
          skywars: data.stats.SkyWars ? new SkyWars(data.stats.SkyWars) : null,
          smashheroes: data.stats.SuperSmash ? new SmashHeroes(data.stats.SuperSmash) : null,
          speeduhc: data.stats.SpeedUHC ? new SpeedUHC(data.stats.SpeedUHC) : null,
          tntgames: data.stats.TNTGames ? new TNTGames(data.stats.TNTGames) : null,
          turbokartracers: data.stats.GingerBread ? new TurboKartRacers(data.stats.GingerBread) : null,
          uhc: data.stats.UHC ? new UHC(data.stats.UHC) : null,
          vampirez: data.stats.VampireZ ? new VampireZ(data.stats.VampireZ) : null,
          walls: data.stats.Walls ? new Walls(data.stats.Walls) : null,
          warlords: data.stats.Battleground ? new Warlords(data.stats.Battleground) : null,
          woolwars: data.stats.WoolGames ? new WoolWars(data.stats.WoolGames) : null
        }
      : null;
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
