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

export type GuildFetchOptions = 'id' | 'name' | 'player';
