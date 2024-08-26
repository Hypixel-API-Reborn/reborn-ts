import { RequestOptions } from '../Private/Requests';
import Guild from '../structures/Guild/Guild';
import Error from '../Private/ErrorHandler';
import isGuildID from '../utils/isGuildID';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getGuild extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(
    searchParameter: 'id' | 'name' | 'player',
    query: string,
    options?: RequestOptions
  ): Promise<Guild | null> {
    if (!['id', 'name', 'player'].includes(searchParameter)) {
      throw new Error(this.client.errors.INVALID_GUILD_SEARCH_PARAMETER, 'Fetching Guild Stats');
    }
    if (!query) throw new Error(this.client.errors.NO_GUILD_QUERY, 'Fetching Guild Stats');
    if ('id' === searchParameter && !isGuildID(query)) {
      throw new Error(this.client.errors.INVALID_GUILD_ID, 'Fetching Guild Stats');
    }
    const isPlayerQuery = 'player' === searchParameter;
    if (isPlayerQuery) query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/guild?${searchParameter}=${encodeURI(query)}`, options);
    if (res.options.raw) return res.data;
    if (!res.data.guild && 'player' !== searchParameter) {
      throw new Error(this.client.errors.GUILD_DOES_NOT_EXIST, 'Fetching Guild Stats');
    }
    return res.data.guild ? new Guild(res.data.guild, isPlayerQuery ? query : undefined) : null;
  }
}

export default getGuild;
