import { RequestOptions } from '../Private/Requests';

export interface getPlayerRequestOptions extends RequestOptions {
  getGuild?: boolean;
}

export interface AuctionRequestOptions extends RequestOptions {
  includeItemBytes?: boolean;
}

export interface SkyblockRequestyOptions extends RequestOptions {
  garden?: boolean;
  museum?: boolean;
}
