import AuctionInfo from '../structures/SkyBlock/Auctions/AuctionInfo';
import Auction from '../structures/SkyBlock/Auctions/Auction';
import { AuctionRequestOptions } from './API';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export interface getSkyblockAuctionsOptions extends AuctionRequestOptions {
  retries?: number;
  cooldown?: number;
  race?: boolean;
  noAuctions?: boolean;
  noInfo?: boolean;
}

export default class getSkyblockAuctions extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(range: any, options?: getSkyblockAuctionsOptions) {
    options = this.parasOptions(options);
    options.retries ||= 3;
    options.cooldown ||= 100;
    if (null === range || '*' === range) range = [0, (await this.getPage(0, { noAuctions: true })).info.totalPages];
    if (!Array.isArray(range)) range = [parseInt(range), parseInt(range)];
    if (isNaN(range[0])) throw new Error(this.client.errors.PAGE_INDEX_ERROR);
    if (options.retries || 10 < options.retries || 0 > options.retries) {
      throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    }
    if (options.cooldown || 3000 < options.cooldown || 0 > options.cooldown) {
      throw new Error(this.client.errors.INVALID_OPTION_VALUE);
    }
    range = range.sort();
    const result: any = { auctions: [] };
    const fetches = [];
    const failedPages = [];
    if (options.noAuctions) {
      return { info: options.noInfo ? null : (await this.getPage(range[1], { noAuctions: true })).info };
    }
    for (let i = range[0]; i <= range[1]; i++) {
      if (options.race) {
        fetches.push(this.noReject(this.getPage, [i, options], options.retries, options.cooldown));
      } else {
        const resp = await this.noReject(this.getPage, [i, options], options.retries, options.cooldown);
        if (resp) {
          result.auctions = result.auctions.concat(resp.auctions);
          if (resp.info) result.info = resp.info;
        } else {
          failedPages.push(i);
        }
      }
    }
    if (fetches.length) {
      result.auctions = (await Promise.all(fetches)).reduce((pV, cV, index) => {
        if (!cV) {
          failedPages.push(index + range[0]);
          return pV;
        }
        if (cV.info) result.info = cV.info;
        if (cV.auctions.length) return pV.concat(cV.auctions);
        return pV;
      }, []);
    }
    // eslint-disable-next-line no-underscore-dangle
    result.info = result.info ? result.info._extend('failedPages', failedPages) : { failedPages };
    return result;
  }

  async getPage(page: number, options: getSkyblockAuctionsOptions): Promise<any> {
    const content = await this.client.requests.request(`/skyblock/auctions?page=${page}`, options);
    const result: any = {};
    if (!options.noInfo) result.info = new AuctionInfo(content);
    if (options.raw) result.auctions = content.auctions;
    else if (options.noAuctions) result.auctions = [];
    else result.auctions = content.auctions.map((x: any) => new Auction(x, options?.includeItemBytes ?? false));
    return result;
  }

  async noReject(promise: any, args: any = [], retries: any = 3, cooldown: any = 100): Promise<any> {
    try {
      const result = await promise.call(null, ...args);
      return result;
    } catch {
      if (retries) {
        await new Promise((resolve) => setTimeout(resolve, cooldown));
        return await this.noReject(promise, args, retries - 1, cooldown);
      }
      return null;
    }
  }

  private parasOptions(options?: getSkyblockAuctionsOptions): getSkyblockAuctionsOptions {
    return {
      retries: options?.retries ?? 3,
      cooldown: options?.cooldown ?? 100,
      race: options?.race ?? false,
      noAuctions: options?.noAuctions ?? false,
      noInfo: options?.noInfo ?? false
    };
  }
}
