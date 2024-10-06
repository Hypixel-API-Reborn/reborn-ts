// Credits: Pixelic: https://github.com/pixelicc - Most types in player

import Arcade from '../MiniGames/Arcade.js';
import ArenaBrawl from '../MiniGames/ArenaBrawl.js';
import BedWars from '../MiniGames/BedWars.js';
import BlitzSurvivalGames from '../MiniGames/BlitzSurvivalGames.js';
import BuildBattle from '../MiniGames/BuildBattle.js';
import CopsAndCrims from '../MiniGames/CopsAndCrims.js';
import Duels from '../MiniGames/Duels.js';
import MegaWalls from '../MiniGames/MegaWalls.js';
import MurderMystery from '../MiniGames/MurderMystery.js';
import Paintball from '../MiniGames/Paintball.js';
import Pit from '../MiniGames/Pit.js';
import Quakecraft from '../MiniGames/Quakecraft.js';
import SkyWars from '../MiniGames/SkyWars.js';
import SmashHeroes from '../MiniGames/SmashHeroes.js';
import SpeedUHC from '../MiniGames/SpeedUHC.js';
import TNTGames from '../MiniGames/TNTGames.js';
import TurboKartRacers from '../MiniGames/TurboKartRacers.js';
import UHC from '../MiniGames/UHC.js';
import VampireZ from '../MiniGames/VampireZ.js';
import Walls from '../MiniGames/Walls.js';
import Warlords from '../MiniGames/Warlords.js';
import WoolGames from '../MiniGames/WoolGames.js';

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
