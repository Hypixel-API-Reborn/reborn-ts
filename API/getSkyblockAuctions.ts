import AuctionInfo from '../src/structures/SkyBlock/Auctions/AuctionInfo';
import Auction from '../src/structures/SkyBlock/Auctions/Auction';
import Errors from '../src/Errors';
async function getPage(this: any, page: any = 0, options: any = {}) {
  // eslint-disable-next-line no-underscore-dangle
  const content = await this._makeRequest(`/skyblock/auctions?page=${page}`, false);
  const result: any = {};
  if (!options.noInfo) result.info = new AuctionInfo(content);
  if (options.raw) result.auctions = content.auctions;
  else if (options.noAuctions) result.auctions = [];
  else result.auctions = content.auctions.map((x: any) => new Auction(x, options.includeItemBytes));
  return result;
}
async function noReject(promise: any, args: any = [], retries: any = 3, cooldown: any = 100) {
  try {
    const result = await promise.call(null, ...args);
    return result;
  } catch {
    if (retries) {
      await new Promise((resolve) => setTimeout(resolve, cooldown));
      return await noReject(promise, args, retries - 1, cooldown);
    }
    return null;
  }
}

import Endpoint from '../src/Private/Endpoint';
import Client from '../src/Client';
export default class getSkyblockAuctions extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getSkyblockAuctions';
  }

  async execute(range: any, options: any) {
    options.retries ||= 3;
    options.cooldown ||= 100;
    if (null === range || '*' === range) range = [0, (await getPage(0, { noAuctions: true })).info.totalPages];
    if (!Array.isArray(range)) range = [parseInt(range), parseInt(range)];
    if (isNaN(range[0])) throw new Error(Errors.PAGE_INDEX_ERROR);
    if (parseInt(options.retries) !== options.retries || 10 < options.retries || 0 > options.retries) {
      throw new Error(Errors.INVALID_OPTION_VALUE);
    }
    if (parseInt(options.cooldown) !== options.cooldown || 3000 < options.cooldown || 0 > options.cooldown) {
      throw new Error(Errors.INVALID_OPTION_VALUE);
    }
    range = range.sort();
    const result: any = { auctions: [] };
    const fetches = [];
    const failedPages = [];
    if (options.noAuctions) {
      return { info: options.noInfo ? null : (await getPage(range[1], { noAuctions: true })).info };
    }
    for (let i = range[0]; i <= range[1]; i++) {
      if (options.race) {
        fetches.push(noReject(getPage, [i, options], options.retries, options.cooldown));
      } else {
        const resp = await noReject(getPage, [i, options], options.retries, options.cooldown);
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
}
