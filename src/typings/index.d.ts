import Achievements from '../structures/Static/Achievements';
import Auction from '../structures/SkyBlock/Auctions/Auction';
import AuctionInfo from '../structures/SkyBlock/Auctions/AuctionInfo';
import BingoData from '../structures/SkyBlock/Static/BingoData';
import Booster from '../structures/Boosters/Booster';
import CacheHandler from '../Private/CacheHandler';
import Challenges from '../structures/Static/Challenges';
import Errors from '../Errors';
import FireSale from '../structures/SkyBlock/Static/FireSale';
import GameCounts from '../structures/GameCounts';
import GovernmentData from '../structures/SkyBlock/Static/Government';
import Guild from '../structures/Guild/Guild';
import GuildAchievements from '../structures/Static/GuildAchievements';
import House from '../structures/House';
import Player from '../structures/Player';
import Product from '../structures/SkyBlock/Bazaar/Product';
import Quests from '../structures/Static/Quests';
import RecentGame from '../structures/RecentGame';
import Requests, { RequestOptions } from '../Private/Requests';
import SkyblockGarden from '../structures/SkyBlock/SkyblockGarden';
import SkyblockMember from '../structures/SkyBlock/SkyblockMember';
import SkyblockMuseum from '../structures/SkyBlock/SkyblockMuseum';
import SkyblockNews from '../structures/SkyBlock/News/SkyblockNews';
import SkyblockProfile from '../structures/SkyBlock/SkyblockProfile';
import Status from '../structures/Status';
import Updater from '../Private/Updater';
import WatchdogStats from '../structures/WatchdogStats';
import { AuctionRequestOptions, GuildFetchOptions, PlayerRequestOptions, SkyblockRequestOptions } from '../API/API';
import { ClientOptions } from './Client';

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

    getAchievements(options: RequestOptions): Promise<Achievements>;
    getActiveHouses(options: RequestOptions): Promise<House[]>;
    getBoosters(options: RequestOptions): Promise<Booster[]>;
    getChallenges(options: RequestOptions): Promise<Challenges>;
    getGameCounts(options: RequestOptions): Promise<GameCounts>;
    getGuild(searchParameter: GuildFetchOptions, query: string, options: RequestOptions): Promise<Guild | null>;
    getGuildAchievements(options: RequestOptions): Promise<GuildAchievements>;
    getHouse(query: string, options: RequestOptions): Promise<House>;
    getLeaderboards(options: RequestOptions): Promise<any>;
    getPlayer(query: string, options: PlayerRequestOptions): Promise<Player>;
    getPlayerHouses(query: string, options: RequestOptions): Promise<House[]>;
    getQuests(options: RequestOptions): Promise<Quests>;
    getRecentGames(query: string, options: RequestOptions): Promise<RecentGame[]>;
    getSkyblockAuction(
      type: 'profile' | 'player' | 'auction',
      query: string,
      options: AuctionRequestOptions
    ): Promise<Auction[]>;
    getSkyblockAuctions(
      query: number | '*',
      options: AuctionRequestOptions
    ): Promise<{ info: AuctionInfo; auctions: Auction[] }>;
    getSkyblockAuctionsByPlayer(query: string, options: AuctionRequestOptions): Promise<Auction[]>;
    getSkyblockBazaar(options: RequestOptions): Promise<Product[]>;
    getSkyblockBingo(options: RequestOptions): Promise<BingoData>;
    getSkyblockFireSales(options: RequestOptions): Promise<FireSale[]>;
    getSkyblockGarden(profileId: string, options: RequestOptions): Promise<SkyblockGarden>;
    getSkyblockGovernment(options: RequestOptions): Promise<GovernmentData>;
    getSkyblockMember(query: string, options: SkyblockRequestOptions): Promise<Map<string, SkyblockMember>>;
    getSkyblockMuseum(query: string, profileId: string, options: RequestOptions): Promise<SkyblockMuseum>;
    getSkyblockNews(options: RequestOptions): Promise<SkyblockNews[]>;
    getSkyblockProfiles(query: string, options: SkyblockRequestOptions): Promise<SkyblockProfile[]>;
    getStatus(query: string, options: RequestOptions): Promise<Status>;
    getWatchdogStats(options: RequestOptions): Promise<WatchdogStats>;
  }
}
