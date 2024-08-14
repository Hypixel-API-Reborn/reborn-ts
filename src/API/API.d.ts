import { RequestOptions } from '../Private/Requests';

export interface PlayerRequestOptions extends RequestOptions {
  getGuild?: boolean;
}

export interface AuctionRequestOptions extends RequestOptions {
  includeItemBytes?: boolean;
}

export interface SkyblockRequestOptions extends RequestOptions {
  garden?: boolean;
  museum?: boolean;
}
