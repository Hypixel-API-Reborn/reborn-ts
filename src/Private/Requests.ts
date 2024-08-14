const BASE_URL = 'https://api.hypixel.net/v2';
import isUUID from '../utils/isUUID';
import Client from '../Client';
import axios from 'axios';

export interface RequestOptions {
  raw?: boolean;
  noCache?: boolean;
}

class Requests {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  async request(endpoint: string, options?: RequestOptions): Promise<any> {
    const info = {
      raw: options?.raw ?? false,
      noCache: options?.noCache ?? false
    };
    if (this.client.cacheHandler.has(endpoint)) {
      return this.client.cacheHandler.get(endpoint);
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

    // eslint-disable-next-line no-underscore-dangle
    parsedRes._headers = res.headers;
    parsedRes.raw = Boolean(info.raw);
    if (info.noCache) return parsedRes;
    if (this.client.options.cache && !info.raw) {
      this.client.cacheHandler.set(endpoint, parsedRes);
    }

    return parsedRes;
  }

  async toUUID(input: string): Promise<string> {
    if (!input) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    if ('string' !== typeof input) throw new Error(this.client.errors.UUID_NICKNAME_MUST_BE_A_STRING);
    if (isUUID(input)) return input.replace(/-/g, '');
    const url = `https://mowojang.matdoes.dev/${input}`;
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
}

export default Requests;
