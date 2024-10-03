import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import Guild from '../structures/Guild/Guild';
import isGuildID from '../utils/isGuildID';
import { GuildFetchOptions } from './API';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

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
    if (!query) throw new Error(this.client.errors.NO_GUILD_QUERY);
    if ('id' === searchParameter && !isGuildID(query)) throw new Error(this.client.errors.INVALID_GUILD_ID);
    const isPlayerQuery = 'player' === searchParameter;
    if (isPlayerQuery) query = await this.client.requestHandler.toUUID(query);
    if (!['id', 'name', 'player'].includes(searchParameter)) {
      throw new Error(this.client.errors.INVALID_GUILD_SEARCH_PARAMETER);
    }
    const res = await this.client.requestHandler.request(`/guild?${searchParameter}=${encodeURI(query)}`, options);
    if (res.options.raw) return res;
    if (!res.data.guild && 'player' !== searchParameter) {
      throw new Error(this.client.errors.GUILD_DOES_NOT_EXIST);
    }
    return res.data.guild ? new Guild(res.data.guild, isPlayerQuery ? query : undefined) : null;
  }
}

export default getGuild;
