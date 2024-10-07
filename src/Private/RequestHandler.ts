const BASE_URL = 'https://api.hypixel.net/v2';
import Client from '../Client.js';
import Error from './ErrorHandler.js';
import isUUID from '../utils/isUUID.js';

export interface RequestOptions {
  raw?: boolean;
  noCache?: boolean;
}

export class RequestData {
  readonly data: any;
  readonly headers: Record<string, any>;
  readonly statusCode: number;
  readonly options: RequestOptions;
  readonly requestTimestamp: number;
  readonly requestAt: Date;
  readonly requestUrl: string;
  readonly cached: boolean;
  constructor(
    data: Record<string, any>,
    headers: Record<string, any>,
    info: { status: number; url: string; options: RequestOptions; cached: boolean; timestamp?: number }
  ) {
    this.data = data;
    this.headers = headers;
    this.statusCode = info.status;
    this.options = info.options;
    this.requestTimestamp = info.timestamp || Date.now();
    this.requestAt = new Date(this.requestTimestamp);
    this.requestUrl = info.url;
    this.cached = info.cached;
  }
}

class RequestHandler {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  async request(endpoint: string, options?: RequestOptions): Promise<RequestData> {
    options = { raw: options?.raw ?? false, noCache: options?.noCache ?? false };
    if (this.client.cacheHandler.has(endpoint)) {
      const data = this.client.cacheHandler.get(endpoint);
      return new RequestData(data.data, data.headers, {
        status: 200,
        options,
        url: endpoint,
        cached: true,
        timestamp: data.timestamp
      });
    }
    const res = await fetch(BASE_URL + endpoint, { headers: { 'API-Key': this.client.key } });
    if (500 <= res.status && 528 > res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT, 'Hypixel API Returned {statusCode} Invalid API Key.', {
        statusCode: `${res.status}`
      });
    }
    const parsedRes = (await res.json()) as Record<string, any>;
    if (400 === res.status) {
      throw new Error(this.client.errors.ERROR_CODE_CAUSE, 'Fetching Hypixel API', {
        code: '400 Bad Request',
        cause: parsedRes.cause || ''
      });
    }
    if (403 === res.status) throw new Error('Invalid API Key!', 'Hypixel API Returned 403 Invalid API Key.');
    if (422 === res.status) throw new Error(this.client.errors.UNEXPECTED_ERROR, 'Fetching Hypixel API');
    if (429 === res.status) throw new Error(this.client.errors.RATE_LIMIT_EXCEEDED, 'Fetching Hypixel API');
    if (
      429 === res.status &&
      'You have already looked up this player too recently, please try again shortly' === parsedRes.cause
    ) {
      throw new Error(this.client.errors.RECENT_REQUEST, 'Fetching Hypixel API');
    }
    if (200 !== res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT, 'Fetching the Hypixel API', { statustext: res.statusText });
    }
    if (!parsedRes.success && !endpoint.startsWith('/housing')) {
      throw new Error(this.client.errors.SOMETHING_WENT_WRONG, 'Fetching the Hypixel API', { cause: res.statusText });
    }
    this.client.rateLimit.requests++;
    const headers: Record<string, any> = {};
    res.headers.forEach((value, key) => (headers[key] = value));
    const requestData = new RequestData(parsedRes, headers, {
      status: res.status,
      options,
      url: endpoint,
      cached: false
    });
    if (options.noCache) return requestData;
    if (this.client.options.cache && !options.raw) {
      this.client.cacheHandler.set(endpoint, requestData);
    }
    return requestData;
  }

  async toUUID(input: string): Promise<string> {
    if (!input) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Converting a nickname to UUID');
    if ('string' !== typeof input) {
      throw new Error(this.client.errors.UUID_NICKNAME_MUST_BE_A_STRING, 'Converting a nickname to UUID');
    }
    if (isUUID(input)) return input.replace(/-/g, '');
    const url = `https://mowojang.matdoes.dev/${input}`;
    if (this.client.cacheHandler.has(url)) {
      return this.client.cacheHandler.get(url);
    }
    const res = await fetch(url);
    if (500 <= res.status && 528 > res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT, 'Hypixel API Returned {statusCode} Invalid API Key.', {
        statusCode: `${res.status}`
      });
    }
    const parsedRes = (await res.json()) as Record<string, any>;
    if (400 === res.status) {
      throw new Error(this.client.errors.ERROR_CODE_CAUSE, 'Converting nickname to UUI', {
        code: '400 Bad Request',
        cause: parsedRes.cause || ''
      });
    }
    if (422 === res.status) throw new Error(this.client.errors.UNEXPECTED_ERROR, 'Converting a nickname to UUID');
    if (200 !== res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT, 'Converting nickname to UUID', {
        statustext: res.statusText
      });
    }
    if ('string' !== typeof parsedRes.id || 'string' !== typeof parsedRes.name) {
      throw new Error(this.client.errors.MALFORMED_UUID, 'Converting a nickname to UUID');
    }
    if (this.client.options.cache) this.client.cacheHandler.set(url, parsedRes.id);
    return parsedRes.id;
  }

  async fetchExternalData(url: string): Promise<RequestData> {
    if (this.client.cacheHandler.has(url)) {
      const data = this.client.cacheHandler.get(url);
      return new RequestData(data.data, data.headers, {
        status: 200,
        options: { raw: false, noCache: false },
        url,
        cached: true,
        timestamp: data.timestamp
      });
    }
    const res = await fetch(url);
    const parsedRes = (await res.json()) as Record<string, any>;
    const headers: Record<string, any> = {};
    res.headers.forEach((value, key) => (headers[key] = value));
    const requestData = new RequestData(parsedRes, headers, {
      status: res.status,
      options: { raw: false, noCache: false },
      url,
      cached: false
    });
    if (this.client.options.cache) {
      this.client.cacheHandler.set(url, requestData);
    }
    return requestData;
  }
}

export default RequestHandler;
