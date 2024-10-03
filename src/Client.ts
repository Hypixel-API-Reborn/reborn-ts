import API from './API';
import Achievements from './structures/Static/Achievements/Achievements';
import Auction from './structures/SkyBlock/Auctions/Auction';
import BingoData from './structures/SkyBlock/Static/BingoData';
import Booster from './structures/Boosters/Booster';
import CacheHandler from './Private/CacheHandler';
import Challenges from './structures/Static/Challenges';
import Errors from './Errors';
import FireSale from './structures/SkyBlock/Static/FireSale';
import GameCounts from './structures/GameCounts';
import GovernmentData from './structures/SkyBlock/Static/Government';
import Guild from './structures/Guild/Guild';
import GuildAchievements from './structures/Static/Achievements/Guild';
import House from './structures/House';
import Leaderboard from './structures/Leaderboard';
import Player from './structures/Player';
import Product from './structures/SkyBlock/Bazaar/Product';
import Quests from './structures/Static/Quests';
import RateLimit from './Private/RateLimit';
import RecentGame from './structures/RecentGame';
import RequestHandler, { RequestData, RequestOptions } from './Private/RequestHandler';
import SkyblockGarden from './structures/SkyBlock/SkyblockGarden';
import SkyblockMember from './structures/SkyBlock/SkyblockMember';
import SkyblockMuseum from './structures/SkyBlock/SkyblockMuseum';
import SkyblockNews from './structures/SkyBlock/News/SkyblockNews';
import SkyblockProfile from './structures/SkyBlock/SkyblockProfile';
import Status from './structures/Status';
import Updater from './Private/Updater';
import WatchdogStats from './structures/WatchdogStats';
import {
  AuctionFetchOptions,
  AuctionRequestOptions,
  GuildFetchOptions,
  PlayerRequestOptions,
  SkyblockAuctionsResult,
  SkyblockRequestOptions
} from './API/API';

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
    if (!this.key.length) throw new Error(this.errors.NO_API_KEY);
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

  public getAchievements(options?: RequestOptions): Promise<Achievements | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getActiveHouses(options?: RequestOptions): Promise<House[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getBoosters(options?: RequestOptions): Promise<Booster[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getChallenges(options?: RequestOptions): Promise<Challenges | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getGameCounts(options?: RequestOptions): Promise<GameCounts | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getGuild(
    searchParameter: GuildFetchOptions,
    query: string,
    options?: RequestOptions
  ): Promise<Guild | null | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getGuildAchievements(options?: RequestOptions): Promise<GuildAchievements | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getHouse(query: string, options?: RequestOptions): Promise<House | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getLeaderboards(options?: RequestOptions): Promise<Record<string, Leaderboard[]> | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getPlayer(query: string, options?: PlayerRequestOptions): Promise<Player | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getPlayerHouses(query: string, options?: RequestOptions): Promise<House[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getQuests(options?: RequestOptions): Promise<Quests | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getRecentGames(query: string, options?: RequestOptions): Promise<RecentGame[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockAuction(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<Auction[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockAuctions(query: number | '*', options?: AuctionRequestOptions): Promise<SkyblockAuctionsResult> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockAuctionsByPlayer(query: string, options?: AuctionRequestOptions): Promise<Auction[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockBazaar(options?: RequestOptions): Promise<Product[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockBingo(options?: RequestOptions): Promise<BingoData | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockFireSales(options?: RequestOptions): Promise<FireSale[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockGarden(profileId: string, options?: RequestOptions): Promise<SkyblockGarden | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockGovernment(options?: RequestOptions): Promise<GovernmentData | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockMember(
    query: string,
    options?: SkyblockRequestOptions
  ): Promise<Map<string, SkyblockMember> | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockMuseum(
    query: string,
    profileId: string,
    options?: RequestOptions
  ): Promise<SkyblockMuseum | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockNews(options?: RequestOptions): Promise<SkyblockNews[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockProfiles(
    query: string,
    options?: SkyblockRequestOptions
  ): Promise<SkyblockProfile[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getStatus(query: string, options?: RequestOptions): Promise<Status | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getWatchdogStats(options?: RequestOptions): Promise<WatchdogStats | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }
}

export default Client;
