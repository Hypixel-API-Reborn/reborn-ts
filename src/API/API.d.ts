import Auction from '../structures/SkyBlock/Auctions/Auction';
import AuctionInfo from '../structures/SkyBlock/Auctions/AuctionInfo';
import { RequestOptions } from '../Private/RequestHandler';

export interface PlayerRequestOptions extends RequestOptions {
  guild?: boolean;
  houses?: boolean;
  recentGames?: boolean;
}

export interface AuctionRequestOptions extends RequestOptions {
  includeItemBytes?: boolean;
}

export interface SkyblockRequestOptions extends RequestOptions {
  garden?: boolean;
  museum?: boolean;
}

export interface SkyblockAuctionsResult {
  info: AuctionInfo;
  auctions: Auction[];
}

export type GuildFetchOptions = 'id' | 'name' | 'player';
export type AuctionFetchOptions = 'profile' | 'player' | 'auction';
