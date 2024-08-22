import Requests, { RequestOptions } from '../Private/Requests';
import CacheHandler from '../Private/CacheHandler';
import { ClientOptions } from '../Client';
import Updater from '../Private/Updater';
import Errors from '../Errors';
import Achievements from '../structures/Static/Achievements';
import House from '../structures/House';
import Booster from '../structures/Boosters/Booster';
import Challenges from '../structures/Static/Challenges';
import GameCounts from '../structures/GameCounts';
import Guild from '../structures/Guild/Guild';
import GuildAchievements from '../structures/Static/GuildAchievements';
import Player from '../structures/Player';
import Quests from '../structures/Static/Quests';
import RecentGame from '../structures/RecentGame';
import { AuctionRequestOptions, SkyblockRequestOptions } from '../API/API';
import Auction from '../structures/SkyBlock/Auctions/Auction';
import { getSkyblockAuctionsOptions } from '../API/skyblock/getAuctions';
import AuctionInfo from '../structures/SkyBlock/Auctions/AuctionInfo';
import Product from '../structures/SkyBlock/Bazzar/Product';
import BingoData from '../structures/SkyBlock/Static/BingoData';
import FireSale from '../structures/SkyBlock/Static/FireSale';
import SkyblockGarden from '../structures/SkyBlock/SkyblockGarden';
import GovernmentData from '../structures/SkyBlock/Static/Government';
import SkyblockMember from '../structures/SkyBlock/SkyblockMember';
import SkyblockMuseum from '../structures/SkyBlock/SkyblockMuseum';
import SkyblockNews from '../structures/SkyBlock/News/SkyblockNews';
import SkyblockProfile from '../structures/SkyBlock/SkyblockProfile';
import Status from '../structures/Status';
import WatchdogStats from '../structures/Watchdog/Stats';

export type StaticGameNames =
  | 'arcade'
  | 'arena'
  | 'bedwars'
  | 'hungergames'
  | 'buildbattle'
  | 'truecombat'
  | 'duels'
  | 'mcgo'
  | 'murdermystery'
  | 'paintball'
  | 'quake'
  | 'skyclash'
  | 'skywars'
  | 'supersmash'
  | 'speeduhc'
  | 'gingerbread'
  | 'tntgames'
  | 'uhc'
  | 'vampirez'
  | 'walls3'
  | 'walls'
  | 'battleground'
  | 'woolgames';

declare module 'hypixel-api-reborn' {
  class Client {
    readonly key: string;
    declare requests: Requests;
    declare cacheHandler: CacheHandler;
    declare updater: Updater;
    declare errors: Errors;
    declare options: ClientOptions;
    constructor(key: string, options?: ClientOptions);
    getAchievements(options?: RequestOptions): Promise<Achievements>;
    getActiveHouses(options?: RequestOptions): Promise<House[]>;
    getBoosters(options?: RequestOptions): Promise<Booster[]>;
    getChallenges(options?: RequestOptions): Promise<Challenges>;
    getGameCounts(options?: RequestOptions): Promise<GameCounts>;
    getGuild(searchParameter: 'id' | 'name' | 'player', query: string, options?: RequestOptions): Promise<Guild | null>;
    getGuildAchievements(options?: RequestOptions): Promise<GuildAchievements>;
    getHouse(query: string, options?: RequestOptions): Promise<House>;
    getLeaderboards(options?: RequestOptions): Promise<any>;
    getPlayer(query: string, options?: PlayerRequestOptions): Promise<Player>;
    getPlayerHouses(query: string, options?: RequestOptions): Promise<House[]>;
    getQuests(options?: RequestOptions): Promise<Quests>;
    getRecentGames(query: string, options?: RequestOptions): Promise<RecentGame[]>;
    getSkyblockAuction(
      query: string,
      type: 'profile' | 'player' | 'auction',
      options?: AuctionRequestOptions
    ): Promise<Auction[]>;
    getSkyblockAuctions(
      range: any,
      options?: getSkyblockAuctionsOptions
    ): Promise<{ info: AuctionInfo | null; auctions: Auction[] }>;
    getSkyblockAuctionsByPlayer(query: string, options?: AuctionRequestOptions): Promise<Auction[]>;
    getSkyblockBazaar(options?: RequestOptions): Promise<Product[]>;
    getSkyblockBingo(options?: RequestOptions): Promise<BingoData>;
    getSkyblockFireSales(options?: RequestOptions): Promise<FireSale[]>;
    getSkyblockGarden(profileId: string, options?: RequestOptions): Promise<SkyblockGarden>;
    getSkyblockGovernment(options?: RequestOptions): Promise<GovernmentData>;
    getSkyblockMember(query: string, options?: SkyblockRequestOptions): Promise<Map<string, SkyblockMember>>;
    getSkyblockMuseum(query: string, profileId: string, options?: RequestOptions): Promise<SkyblockMuseum>;
    getSkyblockNews(options?: RequestOptions): Promise<SkyblockNews[]>;
    getSkyblockProfiles(query: string, options?: SkyblockRequestOptions): Promise<SkyblockProfile[]>;
    getStatus(query: string, options?: RequestOptions): Promise<Status>;
    getWatchdogStats(options?: RequestOptions): Promise<WatchdogStats>;
  }
}
