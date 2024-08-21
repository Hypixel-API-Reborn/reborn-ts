import Client from '../Client';

class RateLimit {
  readonly client: Client;
  declare requests: number;
  declare limit: number;
  declare initialized: boolean;
  declare interval: NodeJS.Timeout;
  constructor(client: Client) {
    this.client = client;

    this.requests = 0;
    this.limit = 0;
    this.initialized = false;

    this.interval = setInterval(() => this.reset(), 300000);
  }

  async sync() {
    const { _headers: headers } = await this.client.requests.request('/boosters', { raw: true });
    if (
      headers?.['ratelimit-limit'] === undefined ||
      headers?.['ratelimit-remaining'] === undefined ||
      headers?.['ratelimit-reset'] === undefined
    ) {
      throw new Error(this.client.errors.RATE_LIMIT_INIT_ERROR);
    }
    this.requests = headers['ratelimit-limit'] - headers['ratelimit-remaining'];
    this.limit = Number(headers['ratelimit-limit']);
  }

  reset() {
    if (false === this.initialized) return;
    this.requests = 0;
  }

  async initialize() {
    if (this.initialized) return;
    if ('AUTO' !== this.client.options.rateLimit) return;
    await this.sync();
    this.initialized = true;
  }
}

export default RateLimit;
