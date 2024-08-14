import Guild from '../structures/Guild/Guild';
import isGuildID from '../utils/isGuildID';
import Endpoint from '../Private/Endpoint';
import toUuid from '../utils/toUuid';
import Client from '../Client';

export default class getGuild extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(searchParameter: 'id' | 'name' | 'player', query: string): Promise<Guild | null> {
    if (!query) throw new Error(this.client.errors.NO_GUILD_QUERY);
    if ('id' === searchParameter && !isGuildID(query)) throw new Error(this.client.errors.INVALID_GUILD_ID);
    const isPlayerQuery = 'player' === searchParameter;
    if (isPlayerQuery) query = await toUuid(query);
    if (!['id', 'name', 'player'].includes(searchParameter)) {
      throw new Error(this.client.errors.INVALID_GUILD_SEARCH_PARAMETER);
    }
    const res = await this.client.requests.request(`/guild?${searchParameter}=${encodeURI(query)}`);
    if (res.raw) return res;
    if (!res.guild && 'player' !== searchParameter) {
      throw new Error(this.client.errors.GUILD_DOES_NOT_EXIST);
    }

    return res.guild ? new Guild(res.guild, isPlayerQuery ? query : undefined) : null;
  }
}
