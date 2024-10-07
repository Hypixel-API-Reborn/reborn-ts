import API from './API/index.js';
import Achievements from './structures/Static/Achievements/Achievements.js';
import Auction from './structures/SkyBlock/Auctions/Auction.js';
import BingoData from './structures/SkyBlock/Static/BingoData.js';
import Booster from './structures/Boosters/Booster.js';
import CacheHandler from './Private/CacheHandler.js';
import Challenges from './structures/Static/Challenges.js';
import Error, { Errors } from './Private/ErrorHandler.js';
import FireSale from './structures/SkyBlock/Static/FireSale.js';
import GameCounts from './structures/GameCounts.js';
import GovernmentData from './structures/SkyBlock/Static/Government.js';
import Guild from './structures/Guild/Guild.js';
import GuildAchievements from './structures/Static/Achievements/Guild.js';
import House from './structures/House.js';
import Leaderboard from './structures/Leaderboard.js';
import Player from './structures/Player/Player.js';
import Product from './structures/SkyBlock/Bazaar/Product.js';
import Quests from './structures/Static/Quests.js';
import RateLimit from './Private/RateLimit.js';
import RecentGame from './structures/RecentGame.js';
import RequestHandler, { RequestData, RequestOptions } from './Private/RequestHandler.js';
import SkyblockGarden from './structures/SkyBlock/SkyblockGarden.js';
import SkyblockMember from './structures/SkyBlock/SkyblockMember.js';
import SkyblockMuseum from './structures/SkyBlock/SkyblockMuseum.js';
import SkyblockNews from './structures/SkyBlock/News/SkyblockNews.js';
import SkyblockProfile from './structures/SkyBlock/SkyblockProfile.js';
import Status from './structures/Status.js';
import Updater from './Private/Updater.js';
import WatchdogStats from './structures/WatchdogStats.js';
import {
  AuctionFetchOptions,
  AuctionRequestOptions,
  GuildFetchOptions,
  PlayerRequestOptions,
  SkyblockAuctionsResult,
  SkyblockRequestOptions
} from './API/API.js';

export interface ClientOptions {
  cache?: boolean;
  cacheTime?: number;
  cacheMaxKeys?: number;
  cacheCheckPeriod?: number;
  rateLimit?: 'AUTO' | 'NONE';
  silent?: boolean;
  checkForUpdates?: boolean;
  checkForUpdatesInterval?: number;
}

const clients: Client[] = [];

class Client {
  declare options: ClientOptions;
  declare requestHandler: RequestHandler;
  declare cacheHandler: CacheHandler;
  declare updater: Updater;
  declare errors: Errors;
  declare rateLimit: RateLimit;
  readonly key: string;
  declare interval: NodeJS.Timeout;
  constructor(key: string, options?: ClientOptions) {
    this.key = key;
    this.errors = new Errors();
    if (!this.key.length) throw new Error(this.errors.NO_API_KEY, 'Initializing Client');
    this.options = this.parasOptions(options);
    this.requestHandler = new RequestHandler(this);
    this.cacheHandler = new CacheHandler(this);
    this.updater = new Updater(this);
    this.rateLimit = new RateLimit(this);
    if ('NONE' !== this.options.rateLimit) this.rateLimit.initialize();
    for (const func in API) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const endpoint = new API[func](this);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this[func] = endpoint.execute.bind(endpoint);
    }
    if (clients.find((x) => x.key === key)) {
      // eslint-disable-next-line no-console
      console.warn(this.errors.MULTIPLE_INSTANCES);
      const found = clients.find((x) => x.key === key);
      if (found) {
        this.destroy();
        Object.assign(this, found);
      }
      return;
    }
    if (this.options.checkForUpdates) {
      this.interval = setInterval(
        () => {
          this.updater.checkForUpdates();
        },
        1000 * 60 * (this.options.checkForUpdatesInterval ?? 60)
      );
    }
    clients.push(this);
  }

  destroy() {
    const clientIndex = clients.findIndex((client) => client.key === this.key);
    if (-1 !== clientIndex) clients.splice(clientIndex, 1);
    if (this.interval) clearInterval(this.interval);
    if (this.rateLimit.interval) clearInterval(this.rateLimit.interval);
  }

  private parasOptions(options?: ClientOptions): ClientOptions {
    return {
      cache: options?.cache ?? true,
      cacheTime: options?.cacheTime ?? 300,
      cacheMaxKeys: options?.cacheMaxKeys ?? -1,
      cacheCheckPeriod: options?.cacheCheckPeriod ?? 180,
      rateLimit: options?.rateLimit ?? 'AUTO',
      silent: options?.silent ?? false,
      checkForUpdates: options?.checkForUpdates ?? true,
      checkForUpdatesInterval: options?.checkForUpdatesInterval ?? 60
    };
  }

  /* v8 ignore next 140 */
  public getAchievements(options?: RequestOptions): Promise<Achievements | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getAchievements');
  }

  public getActiveHouses(options?: RequestOptions): Promise<House[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getActiveHouses');
  }

  public getBoosters(options?: RequestOptions): Promise<Booster[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getBoosters');
  }

  public getChallenges(options?: RequestOptions): Promise<Challenges | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getChallenges');
  }

  public getGameCounts(options?: RequestOptions): Promise<GameCounts | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getGameCounts');
  }

  public getGuild(
    searchParameter: GuildFetchOptions,
    query: string,
    options?: RequestOptions
  ): Promise<Guild | null | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getGuild');
  }

  public getGuildAchievements(options?: RequestOptions): Promise<GuildAchievements | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getGuildAchievements');
  }

  public getHouse(query: string, options?: RequestOptions): Promise<House | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getHouse');
  }

  public getLeaderboards(options?: RequestOptions): Promise<Record<string, Leaderboard[]> | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getLeaderboards');
  }

  public getPlayer(query: string, options?: PlayerRequestOptions): Promise<Player | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getPlayer');
  }

  public getPlayerHouses(query: string, options?: RequestOptions): Promise<House[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getPlayerHouses');
  }

  public getQuests(options?: RequestOptions): Promise<Quests | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getQuests');
  }

  public getRecentGames(query: string, options?: RequestOptions): Promise<RecentGame[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getRecentGames');
  }

  public getSkyblockAuction(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<Auction[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockAuction');
  }

  public getSkyblockAuctions(query: number | '*', options?: AuctionRequestOptions): Promise<SkyblockAuctionsResult> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockAuctions');
  }

  public getSkyblockAuctionsByPlayer(query: string, options?: AuctionRequestOptions): Promise<Auction[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockAuctionsByPlayer');
  }

  public getSkyblockBazaar(options?: RequestOptions): Promise<Product[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockBazaar');
  }

  public getSkyblockBingo(options?: RequestOptions): Promise<BingoData | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockBingo');
  }

  public getSkyblockFireSales(options?: RequestOptions): Promise<FireSale[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockFireSales');
  }

  public getSkyblockGarden(profileId: string, options?: RequestOptions): Promise<SkyblockGarden | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockGarden');
  }

  public getSkyblockGovernment(options?: RequestOptions): Promise<GovernmentData | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockGovernment');
  }

  public getSkyblockMember(
    query: string,
    options?: SkyblockRequestOptions
  ): Promise<Map<string, SkyblockMember> | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockMember');
  }

  public getSkyblockMuseum(
    query: string,
    profileId: string,
    options?: RequestOptions
  ): Promise<SkyblockMuseum | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockMuseum');
  }

  public getSkyblockNews(options?: RequestOptions): Promise<SkyblockNews[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockNews');
  }

  public getSkyblockProfiles(
    query: string,
    options?: SkyblockRequestOptions
  ): Promise<SkyblockProfile[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getSkyblockProfiles');
  }

  public getStatus(query: string, options?: RequestOptions): Promise<Status | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getStatus');
  }

  public getWatchdogStats(options?: RequestOptions): Promise<WatchdogStats | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED, 'Fetching getWatchdogStats');
  }
}

export default Client;
