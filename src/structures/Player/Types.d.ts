// Credits: Pixelic: https://github.com/pixelicc - Most types in player

import Arcade from '../MiniGames/Arcade';
import ArenaBrawl from '../MiniGames/ArenaBrawl';
import BedWars from '../MiniGames/BedWars';
import BlitzSurvivalGames from '../MiniGames/BlitzSurvivalGames';
import BuildBattle from '../MiniGames/BuildBattle';
import CopsAndCrims from '../MiniGames/CopsAndCrims';
import Duels from '../MiniGames/Duels';
import MegaWalls from '../MiniGames/MegaWalls';
import MurderMystery from '../MiniGames/MurderMystery';
import Paintball from '../MiniGames/Paintball';
import Pit from '../MiniGames/Pit';
import Quakecraft from '../MiniGames/Quakecraft';
import SkyWars from '../MiniGames/SkyWars';
import SmashHeroes from '../MiniGames/SmashHeroes';
import SpeedUHC from '../MiniGames/SpeedUHC';
import TNTGames from '../MiniGames/TNTGames';
import TurboKartRacers from '../MiniGames/TurboKartRacers';
import UHC from '../MiniGames/UHC';
import VampireZ from '../MiniGames/VampireZ';
import Walls from '../MiniGames/Walls';
import Warlords from '../MiniGames/Warlords';
import WoolGames from '../MiniGames/WoolGames';

type Language =
  | 'CHINESE_SIMPLIFIED'
  | 'CHINESE_TRADITIONAL'
  | 'CZECH'
  | 'DANISH'
  | 'DUTCH'
  | 'ENGLISH'
  | 'FINNISH'
  | 'FRENCH'
  | 'GERMAN'
  | 'GREEK'
  | 'HUNGARIAN'
  | 'ITALIAN'
  | 'JAPANESE'
  | 'KOREAN'
  | 'NORWEGIAN'
  | 'POLISH'
  | 'PORTUGUESE_BR'
  | 'PORTUGUESE_PT'
  | 'PIRATE'
  | 'ROMANIAN'
  | 'RUSSIAN'
  | 'SERBIAN_CYRILLIC'
  | 'SPANISH'
  | 'SWEDISH'
  | 'TURKISH'
  | 'UKRAINIAN';
type ChatChannel = 'ALL' | 'PARTY' | 'GUILD' | 'OFFICER' | 'PM' | 'SKYBLOCK_COOP';
type SeasonName = 'christmas' | 'easter' | 'summer' | 'halloween' | 'anniversary';
type SocialMediaId = 'DISCORD' | 'TWITTER' | 'YOUTUBE' | 'INSTAGRAM' | 'TIKTOK' | 'TWITCH' | 'HYPIXEL';

interface LevelProgress {
  level: number;
  xpToNext: number;
  remainingXP: number;
  currentXP: number;
  percent: number;
  percentRemaining: number;
}

interface PlayerStats {
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
  woolgames: WoolGames;
}

type PlayerRank =
  | null
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

interface RanksPurchaseTime {
  VIP: Date | null;
  VIP_PLUS: Date | null;
  MVP: Date | null;
  MVP_PLUS: Date | null;
}

interface ScorpiusBribe {
  year: number;
  timestamp: number;
}
