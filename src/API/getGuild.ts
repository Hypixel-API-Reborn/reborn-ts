import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Error from '../Private/ErrorHandler.js';
import Guild from '../structures/Guild/Guild.js';
import isGuildID from '../utils/isGuildID.js';
import { GuildFetchOptions } from './API.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getGuild extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(
    searchParameter: GuildFetchOptions,
    query: string,
    options?: RequestOptions
  ): Promise<Guild | null | RequestData> {
    if (!['id', 'name', 'player'].includes(searchParameter)) {
      throw new Error(this.client.errors.INVALID_GUILD_SEARCH_PARAMETER, 'Fetching Guild Stats');
    }
    if (!query) throw new Error(this.client.errors.NO_GUILD_QUERY, 'Fetching Guild Stats');
    if ('id' === searchParameter && !isGuildID(query)) {
      throw new Error(this.client.errors.INVALID_GUILD_ID, 'Fetching Guild Stats');
    }
    const isPlayerQuery = 'player' === searchParameter;
    if (isPlayerQuery) query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/guild?${searchParameter}=${encodeURI(query)}`, options);
    if (res.options.raw) return res;
    if (!res.data.guild && 'player' !== searchParameter) {
      throw new Error(this.client.errors.GUILD_DOES_NOT_EXIST, 'Fetching Guild Stats');
    }
    return res.data.guild ? new Guild(res.data.guild, isPlayerQuery ? query : undefined) : null;
  }
}

export default getGuild;
