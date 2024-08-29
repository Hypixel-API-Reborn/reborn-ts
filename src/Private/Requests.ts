const BASE_URL = 'http://localhost:3000/hypixel/v2';
import isUUID from '../utils/isUUID';
import Client from '../Client';
import axios from 'axios';

export interface RequestOptions {
  raw?: boolean;
  noCache?: boolean;
}

class RequestData {
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

class Requests {
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
    const res = await axios.get(BASE_URL + endpoint, { headers: { 'API-Key': this.client.key } });
    if (500 <= res.status && 528 > res.status) {
      throw new Error(
        this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = await res.data;
    if (400 === res.status) {
      throw new Error(
        this.client.errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(
          /{cause}/,
          parsedRes.cause || ''
        )
      );
    }
    if (403 === res.status) throw new Error(this.client.errors.INVALID_API_KEY);
    if (422 === res.status) throw new Error(this.client.errors.UNEXPECTED_ERROR);
    if (429 === res.status) throw new Error(this.client.errors.RATE_LIMIT_EXCEEDED);
    if (200 !== res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    }
    if (!parsedRes.success && !endpoint.startsWith('/housing')) {
      throw new Error(this.client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.statusText));
    }
    this.client.rateLimit.requests++;
    const requestData = new RequestData(parsedRes, res.headers, {
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
    if (!input) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    if ('string' !== typeof input) throw new Error(this.client.errors.UUID_NICKNAME_MUST_BE_A_STRING);
    if (isUUID(input)) return input.replace(/-/g, '');
    const url = `http://localhost:3000/uuid/${input}`;
    if (this.client.cacheHandler.has(url)) {
      return this.client.cacheHandler.get(url);
    }
    const res = await axios.get(url);
    if (500 <= res.status && 528 > res.status) {
      throw new Error(
        this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = await res.data;
    if (400 === res.status) {
      throw new Error(
        this.client.errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(
          /{cause}/,
          parsedRes.cause || ''
        )
      );
    }
    if (200 !== res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    }
    if ('string' !== typeof parsedRes.id || 'string' !== typeof parsedRes.name) {
      throw new Error(this.client.errors.MALFORMED_UUID);
    }
    if (this.client.options.cache) {
      this.client.cacheHandler.set(url, parsedRes.id);
    }
    return parsedRes.id;
  }

  async fetchExternalData(url: string, options?: RequestOptions): Promise<RequestData> {
    options = { raw: options?.raw ?? false, noCache: options?.noCache ?? false };
    if (this.client.cacheHandler.has(url)) {
      const data = this.client.cacheHandler.get(url);
      return new RequestData(data.data, data.headers, {
        status: 200,
        options,
        url: url,
        cached: true,
        timestamp: data.timestamp
      });
    }
    const res = await axios.get(url);
    if (500 <= res.status && 528 > res.status) {
      throw new Error(
        this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = await res.data;
    if (400 === res.status) {
      throw new Error(
        this.client.errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(
          /{cause}/,
          parsedRes.cause || ''
        )
      );
    }
    if (422 === res.status) throw new Error(this.client.errors.UNEXPECTED_ERROR);
    if (200 !== res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    }
    const requestData = new RequestData(parsedRes, res.headers, {
      status: res.status,
      options,
      url: url,
      cached: false
    });
    if (options.noCache) return requestData;
    if (this.client.options.cache && !options.raw) {
      this.client.cacheHandler.set(url, requestData);
    }
    return requestData;
  }
}

export default Requests;
