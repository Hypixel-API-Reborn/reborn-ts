import Errors from '../Errors';

class RateLimit {
  initialized: number;
  requests: any;
  requestQueue: any;
  options: any;
  lastResetHappenedAt: any;
  resetTimer: any;
  cooldownTime: any;
  client: any;
  static options: any;
  static requests: any;
  static lastResetHappenedAt: number;
  static reset: any;
  constructor() {
    this.initialized = 0;
  }

  static async rateLimitManager() {
    if (!this.initialized) return;
    this.requests++;
    this.requestQueue.unshift(Date.now());
    if ('NONE' === this.options.rateLimit || !this.requestQueue.length) return;
    if ('AUTO' === this.options.rateLimit && this.requests <= this.options.keyLimit / 2) return;
    const cooldown = this.computeCooldownTime();
    this.requestQueue[0] = Date.now() + cooldown;
    return await new Promise((r) => setTimeout(r, cooldown));
  }

  static sync(data: any): void {
    this.options.keyLimit = parseInt(data.get('ratelimit-limit'), 10) || this.options.keyLimit;
    this.requests = parseInt(data.get('ratelimit-remaining'), 10) || this.requests;
    if (
      data.get('ratelimit-reset') &&
      Math.round(Date.now() / 1000) - (300 - parseInt(data.get('ratelimit-reset'), 10)) !==
        Math.round(this.lastResetHappenedAt / 1000)
    ) {
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(this.reset.bind(this), parseInt(data.get('ratelimit-reset'), 10) * 1000);
    }
  }
  static resetTimer(resetTimer: any) {
    throw new Error('Method not implemented.');
  }

  computeCooldownTime() {
    const overhead = this.requestQueue[1] <= Date.now() ? 0 : this.requestQueue[1] - Date.now();
    const multiplier = Math.floor(this.requests / this.options.keyLimit) + 1;
    return (
      overhead +
      (-overhead - Date.now() + 300000 * multiplier + this.lastResetHappenedAt) /
        (this.options.keyLimit * multiplier - this.requests)
    );
  }

  reset() {
    this.requests = this.requests - this.options.keyLimit;
    if (0 > this.requests) this.requests = 0;
    this.lastResetHappenedAt = Date.now();
    this.resetTimer = setTimeout(this.reset.bind(this), 300000);
    this.requestQueue = this.requestQueue.filter((x: any) => x >= Date.now());
  }

  rateLimitMonitor() {
    this.resetTimer = setTimeout(this.reset.bind(this), 1000 * 300);
  }

  init(keyInfo: any, options: any, client: any) {
    this.options = options;
    this.requests = 0;
    this.cooldownTime = 300000 / this.options.keyLimit;
    this.requestQueue = [];
    this.client = client;
    return keyInfo
      .then((info: any) => {
        this.requests = info.requestsInPastMin;
        this.lastResetHappenedAt = Date.now() - (300 - info.resetsAfter) * 1000;
        this.resetTimer = setTimeout(this.rateLimitMonitor.bind(this), 1000 * info.resetsAfter);
        this.initialized = 1;
      })
      .catch(() => {
        client.emit('warn', Errors.RATE_LIMIT_INIT_ERROR);
        this.requests = 0;
        this.lastResetHappenedAt = Date.now();
        this.rateLimitMonitor();
        this.initialized = 1;
      });
    // Still make the requests per min possible
  }
}

export default RateLimit;
