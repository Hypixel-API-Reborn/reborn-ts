/* v8 ignore next 400 */
/* eslint-disable max-len */

import Client from './Client.js';
import Errors from './Errors.js';

export * from './Types/API.js';
export * from './Types/Booster.js';
export * from './Types/Client.js';
export * from './Types/Color.js';
export * from './Types/Game.js';
export * from './Types/Guild.js';
export * from './Types/Player.js';
export * from './Types/Requests.js';
export * from './Types/Skyblock.js';
export * from './Types/Static.js';

import Achievements from './structures/Static/Achievements/Achievements.js';
import Arcade from './structures/MiniGames/Arcade/Arcade.js';
import ArenaBrawl from './structures/MiniGames/ArenaBrawl/ArenaBrawl.js';
import ArenaBrawlMode from './structures/MiniGames/ArenaBrawl/ArenaBrawlMode.js';
import Auction from './structures/SkyBlock/Auctions/Auction.js';
import AuctionInfo from './structures/SkyBlock/Auctions/AuctionInfo.js';
import BaseAchievement from './structures/Static/Achievements/BaseAchievement.js';
import BaseAuction from './structures/SkyBlock/Auctions/BaseAuction.js';
import BedWars from './structures/MiniGames/BedWars/BedWars.js';
import BedWarsBeds from './structures/MiniGames/BedWars/BedWarsBeds.js';
import BedWarsCollectedItems from './structures/MiniGames/BedWars/BedWarsCollectedItems.js';
import BedWarsDreamMode from './structures/MiniGames/BedWars/BedWarsDreamMode.js';
import BedWarsDreamStats from './structures/MiniGames/BedWars/BedWarsDreamStats.js';
import BedWarsMode from './structures/MiniGames/BedWars/BedWarsMode.js';
import BedWarsPracticeBase from './structures/MiniGames/BedWars/Practice/BedWarsPracticeBase.js';
import BedWarsPracticeBaseBlocksPlaced from './structures/MiniGames/BedWars/Practice/BedWarsPracticeBaseBlocksPlaced.js';
import BedWarsPracticeBridging from './structures/MiniGames/BedWars/Practice/BedWarsPracticeBridging.js';
import BedWarsPracticeBridgingRecords from './structures/MiniGames/BedWars/Practice/BedWarsPracticeBridgingRecords.js';
import BedWarsPracticeModeAttempts from './structures/MiniGames/BedWars/Practice/BedWarsPracticeModeAttempts.js';
import BedWarsPracticeRecord from './structures/MiniGames/BedWars/Practice/BedWarsPracticeRecord.js';
import BedWarsPracticeRecordElevation from './structures/MiniGames/BedWars/Practice/BedWarsPracticeRecordElevation.js';
import BedWarsPracticeStats from './structures/MiniGames/BedWars/Practice/BedWarsPracticeStats.js';
import Bid from './structures/SkyBlock/Auctions/Bid.js';
import Bingo from './structures/SkyBlock/Static/Bingo.js';
import BingoData from './structures/SkyBlock/Static/BingoData.js';
import BlitzSurvivalGames from './structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGames.js';
import BlitzSurvivalGamesKit from './structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGamesKit.js';
import BlockingDead from './structures/MiniGames/Arcade/BlockingDead.js';
import Booster from './structures/Boosters/Booster.js';
import BountyHunters from './structures/MiniGames/Arcade/BountyHunters.js';
import BowSpleef from './structures/MiniGames/TNTGames/BowSpleef.js';
import BuildBattle from './structures/MiniGames/BuildBattle.js';
import Candidate from './structures/SkyBlock/Static/Candidate.js';
import CaptureTheWool from './structures/MiniGames/WoolGames/CaptureTheWool.js';
import Challenge from './structures/Static/Challenge.js';
import Challenges from './structures/Static/Challenges.js';
import Color from './structures/Color.js';
import CopsAndCrims from './structures/MiniGames/CopsAndCrims/CopsAndCrims.js';
import CopsAndCrimsDeathmatch from './structures/MiniGames/CopsAndCrims/CopsAndCrimsDeathmatch.js';
import CopsAndCrimsDefusal from './structures/MiniGames/CopsAndCrims/CopsAndCrimsDefusal.js';
import CopsAndCrimsGunGame from './structures/MiniGames/CopsAndCrims/CopsAndCrimsGunGame.js';
import Cosmetics from './structures/Player/Cosmetics.js';
import DragonWars from './structures/MiniGames/Arcade/DragonWars.js';
import Dropper from './structures/MiniGames/Arcade/Dropper.js';
import DropperMap from './structures/MiniGames/Arcade/DropperMap.js';
import Duels from './structures/MiniGames/Duels/Duels.js';
import DuelsBridge from './structures/MiniGames/Duels/DuelsBridge.js';
import DuelsGamemode from './structures/MiniGames/Duels/DuelsGamemode.js';
import DuelsMegaWalls from './structures/MiniGames/Duels/DuelsMegaWalls.js';
import DuelsOP from './structures/MiniGames/Duels/DuelsOP.js';
import DuelsSkyWars from './structures/MiniGames/Duels/DuelsSkyWars.js';
import DuelsUHC from './structures/MiniGames/Duels/DuelsUHC.js';
import EnderSpleef from './structures/MiniGames/Arcade/EnderSpleef.js';
import FarmHunt from './structures/MiniGames/Arcade/FarmHunt.js';
import FireSale from './structures/SkyBlock/Static/FireSale.js';
import Football from './structures/MiniGames/Arcade/Football.js';
import GalaxyWars from './structures/MiniGames/Arcade/GalaxyWars.js';
import Game from './structures/Game.js';
import GameAchievements from './structures/Static/Achievements/GameAchievements.js';
import GameChallenges from './structures/Static/GameChallenges.js';
import GameCounts from './structures/GameCounts.js';
import GameQuests from './structures/Static/GameQuests.js';
import Gifting from './structures/Player/Gifting.js';
import Government from './structures/SkyBlock/Static/Government.js';
import Guild from './structures/Guild/Guild.js';
import GuildAchievements from './structures/Static/Achievements/GuildAchievements.js';
import GuildMember from './structures/Guild/GuildMember.js';
import GuildRank from './structures/Guild/GuildRank.js';
import HideAndSeek from './structures/MiniGames/Arcade/HideAndSeek.js';
import HoleInTheWall from './structures/MiniGames/Arcade/HoleInTheWall.js';
import House from './structures/House.js';
import Housing from './structures/Housing.js';
import HypixelSays from './structures/MiniGames/Arcade/HypixelSays.js';
import ItemBytes from './structures/ItemBytes.js';
import Leaderboard from './structures/Leaderboard.js';
import MegaWalls from './structures/MiniGames/MegaWalls/MegaWalls.js';
import MegaWallsKitStats from './structures/MiniGames/MegaWalls/MegaWallsKitStats.js';
import MegaWallsModeStats from './structures/MiniGames/MegaWalls/MegaWallsModeStats.js';
import MiniWalls from './structures/MiniGames/Arcade/MiniWalls.js';
import MonthlyCrate from './structures/Player/MonthlyCrate.js';
import MurderMystery from './structures/MiniGames/MurderMystery/MurderMystery.js';
import MurderMysteryModeStats from './structures/MiniGames/MurderMystery/MurderMysteryModeStats.js';
import OneTimeAchivement from './structures/Static/Achievements/OneTimeAchivement.js';
import Order from './structures/SkyBlock/Bazaar/Order.js';
import PVPRun from './structures/MiniGames/TNTGames/PVPRun.js';
import Paintball from './structures/MiniGames/Paintball.js';
import Parkour from './structures/Player/Parkour.js';
import PartyGames from './structures/MiniGames/Arcade/PartyGames.js';
import PartyPooper from './structures/MiniGames/Arcade/PartyPooper.js';
import Perk from './structures/SkyBlock/Static/Perk.js';
import Pet from './structures/Player/Pet.js';
import PetConsumables from './structures/Player/PetConsumables.js';
import Pets from './structures/Player/Pets.js';
import Pit from './structures/MiniGames/Pit/Pit.js';
import PitInventoryItem from './structures/MiniGames/Pit/PitInventoryItem.js';
import PixelParty from './structures/MiniGames/Arcade/PixelParty.js';
import PixelPartyGameMode from './structures/MiniGames/Arcade/PixelPartyGameMode.js';
import Player from './structures/Player/Player.js';
import PlayerAchievements from './structures/Player/PlayerAchievements.js';
import PlayerAchievementsRewards from './structures/Player/PlayerAchievementsRewards.js';
import PlayerQuest from './structures/Player/Quests/PlayerQuest.js';
import PlayerQuestCompletion from './structures/Player/Quests/PlayerQuestCompletion.js';
import PlayerQuestCompletions from './structures/Player/Quests/PlayerQuestCompletions.js';
import PlayerQuests from './structures/Player/Quests/PlayerQuests.js';
import Product from './structures/SkyBlock/Bazaar/Product.js';
import PropHunt from './structures/MiniGames/Arcade/PropHunt.js';
import Quakecraft from './structures/MiniGames/Quakecraft/Quakecraft.js';
import QuakecraftMode from './structures/MiniGames/Quakecraft/QuakecraftMode.js';
import Quest from './structures/Static/Quest.js';
import QuestObjective from './structures/Static/QuestObjective.js';
import Quests from './structures/Static/Quests.js';
import RecentGame from './structures/RecentGame.js';
import Rewards from './structures/Player/Rewards.js';
import Season from './structures/Player/Seasonal/Season.js';
import SeasonBingo from './structures/Player/Seasonal/SeasonBingo.js';
import SeasonBingoTier from './structures/Player/Seasonal/SeasonBingoTier.js';
import SeasonYear from './structures/Player/Seasonal/SeasonYear.js';
import Seasonal from './structures/Player/Seasonal/Seasonal.js';
import SheepWars from './structures/MiniGames/WoolGames/SheepWars.js';
import SkyWars from './structures/MiniGames/SkyWars/SkyWars.js';
import SkyWarsKit from './structures/MiniGames/SkyWars/SkyWarsKit.js';
import SkyWarsKits from './structures/MiniGames/SkyWars/SkyWarsKits.js';
import SkyWarsMode from './structures/MiniGames/SkyWars/SkyWarsMode.js';
import SkyWarsModeStats from './structures/MiniGames/SkyWars/SkyWarsModeStats.js';
import SkyWarsPackages from './structures/MiniGames/SkyWars/SkyWarsPackages.js';
import SkyblockGarden from './structures/SkyBlock/SkyblockGarden.js';
import SkyblockGemstone from './structures/SkyBlock/SkyblockGemstone.js';
import SkyblockInventoryItem from './structures/SkyBlock/SkyblockInventoryItem.js';
import SkyblockMember from './structures/SkyBlock/SkyblockMember.js';
import SkyblockMemberMinion from './structures/SkyBlock/SkyblockMemberMinion.js';
import SkyblockMemberMinions from './structures/SkyBlock/SkyblockMemberMinions.js';
import SkyblockMemberStats from './structures/SkyBlock/SkyblockMemberStats.js';
import SkyblockMuseum from './structures/SkyBlock/SkyblockMuseum.js';
import SkyblockMuseumItem from './structures/SkyBlock/SkyblockMuseumItem.js';
import SkyblockNews from './structures/SkyBlock/News/SkyblockNews.js';
import SkyblockPet from './structures/SkyBlock/SkyblockPet.js';
import SkyblockProfile from './structures/SkyBlock/SkyblockProfile.js';
import SmashHeoresHero from './structures/MiniGames/SmashHeroes/SmashHeoresHero.js';
import SmashHeroes from './structures/MiniGames/SmashHeroes/SmashHeroes.js';
import SmashHeroesMode from './structures/MiniGames/SmashHeroes/SmashHeroesMode.js';
import SocialMedia from './structures/Player/SocialMedia.js';
import SpeedUHC from './structures/MiniGames/SpeedUHC/SpeedUHC.js';
import SpeedUHCMode from './structures/MiniGames/SpeedUHC/SpeedUHCMode.js';
import Status from './structures/Status.js';
import TNTGames from './structures/MiniGames/TNTGames/TNTGames.js';
import TNTRun from './structures/MiniGames/TNTGames/TNTRun.js';
import TNTTag from './structures/MiniGames/TNTGames/TNTTag.js';
import TNTWizards from './structures/MiniGames/TNTGames/TNTWizards.js';
import ThrowOut from './structures/MiniGames/Arcade/ThrowOut.js';
import TieredAchivement from './structures/Static/Achievements/TieredAchivement.js';
import Tourney from './structures/Player/Tourney/Tourney.js';
import TourneyData from './structures/Player/Tourney/TourneyData.js';
import TurboKartRacers from './structures/MiniGames/TurboKartRacers/TurboKartRacers.js';
import TurboKartRacersMap from './structures/MiniGames/TurboKartRacers/TurboKartRacersMap.js';
import UHC from './structures/MiniGames/UHC/UHC.js';
import UHCGamemode from './structures/MiniGames/UHC/UHCGamemode.js';
import VampireZ from './structures/MiniGames/VampireZ/VampireZ.js';
import VampireZRole from './structures/MiniGames/VampireZ/VampireZRole.js';
import Walls from './structures/MiniGames/Walls.js';
import Warlords from './structures/MiniGames/Warlords/Warlords.js';
import WarlordsClass from './structures/MiniGames/Warlords/WarlordsClass.js';
import WatchdogStats from './structures/WatchdogStats.js';
import WoolGames from './structures/MiniGames/WoolGames/WoolGames.js';
import WoolWars from './structures/MiniGames/WoolGames/WoolWars.js';
import WoolWarsClass from './structures/MiniGames/WoolGames/WoolWarsClass.js';
import Zombies from './structures/MiniGames/Arcade/Zombies.js';
import ZombiesStats from './structures/MiniGames/Arcade/ZombiesStats.js';

export default {
  Client,
  Errors,

  Booster,
  Color,
  Game,
  GameCounts,
  Guild,
  GuildMember,
  GuildRank,
  House,
  Housing,
  ItemBytes,
  Leaderboard,
  Arcade,
  BlockingDead,
  BountyHunters,
  DragonWars,
  Dropper,
  DropperMap,
  EnderSpleef,
  FarmHunt,
  Football,
  GalaxyWars,
  HideAndSeek,
  HoleInTheWall,
  HypixelSays,
  MiniWalls,
  PartyGames,
  PartyPooper,
  PixelParty,
  PixelPartyGameMode,
  PropHunt,
  ThrowOut,
  Zombies,
  ZombiesStats,
  ArenaBrawl,
  ArenaBrawlMode,
  BedWars,
  BedWarsBeds,
  BedWarsCollectedItems,
  BedWarsDreamMode,
  BedWarsDreamStats,
  BedWarsMode,
  BedWarsPracticeBase,
  BedWarsPracticeBaseBlocksPlaced,
  BedWarsPracticeBridging,
  BedWarsPracticeBridgingRecords,
  BedWarsPracticeModeAttempts,
  BedWarsPracticeRecord,
  BedWarsPracticeRecordElevation,
  BedWarsPracticeStats,
  BlitzSurvivalGames,
  BlitzSurvivalGamesKit,
  BuildBattle,
  CopsAndCrims,
  CopsAndCrimsDeathmatch,
  CopsAndCrimsDefusal,
  CopsAndCrimsGunGame,
  Duels,
  DuelsBridge,
  DuelsGamemode,
  DuelsMegaWalls,
  DuelsOP,
  DuelsSkyWars,
  DuelsUHC,
  MegaWalls,
  MegaWallsKitStats,
  MegaWallsModeStats,
  MurderMystery,
  MurderMysteryModeStats,
  Paintball,
  Pit,
  PitInventoryItem,
  Quakecraft,
  QuakecraftMode,
  SkyWars,
  SkyWarsKit,
  SkyWarsKits,
  SkyWarsMode,
  SkyWarsModeStats,
  SkyWarsPackages,
  SmashHeoresHero,
  SmashHeroes,
  SmashHeroesMode,
  SpeedUHC,
  SpeedUHCMode,
  BowSpleef,
  PVPRun,
  TNTGames,
  TNTRun,
  TNTTag,
  TNTWizards,
  TurboKartRacers,
  TurboKartRacersMap,
  UHC,
  UHCGamemode,
  VampireZ,
  VampireZRole,
  Walls,
  Warlords,
  WarlordsClass,
  CaptureTheWool,
  SheepWars,
  WoolGames,
  WoolWars,
  WoolWarsClass,
  Cosmetics,
  Gifting,
  MonthlyCrate,
  Parkour,
  Pet,
  PetConsumables,
  Pets,
  Player,
  PlayerAchievements,
  PlayerAchievementsRewards,
  PlayerQuest,
  PlayerQuestCompletion,
  PlayerQuestCompletions,
  PlayerQuests,
  Rewards,
  Season,
  SeasonBingo,
  SeasonBingoTier,
  SeasonYear,
  Seasonal,
  SocialMedia,
  Tourney,
  TourneyData,
  RecentGame,
  Auction,
  AuctionInfo,
  BaseAuction,
  Bid,
  Order,
  Product,
  SkyblockNews,
  SkyblockGarden,
  SkyblockGemstone,
  SkyblockInventoryItem,
  SkyblockMember,
  SkyblockMemberMinion,
  SkyblockMemberMinions,
  SkyblockMemberStats,
  SkyblockMuseum,
  SkyblockMuseumItem,
  SkyblockPet,
  SkyblockProfile,
  Bingo,
  BingoData,
  Candidate,
  FireSale,
  Government,
  Perk,
  Achievements,
  BaseAchievement,
  GameAchievements,
  GuildAchievements,
  OneTimeAchivement,
  TieredAchivement,
  Challenge,
  Challenges,
  GameChallenges,
  GameQuests,
  Quest,
  QuestObjective,
  Quests,
  Status,
  WatchdogStats
};
