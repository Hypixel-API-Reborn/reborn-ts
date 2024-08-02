const BASE_URL = 'https://api.hypixel.net/v2';
import Client from '../Client';
import Errors from '../Errors';
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
        Errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = await res.data;
    if (400 === res.status) {
      throw new Error(
        Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, parsedRes.cause || '')
      );
    }
    if (403 === res.status) throw new Error(Errors.INVALID_API_KEY);
    if (422 === res.status) throw new Error(Errors.UNEXPECTED_ERROR);
    if (429 === res.status) throw new Error(Errors.RATE_LIMIT_EXCEEDED);
    if (200 !== res.status) throw new Error(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    if (!parsedRes.success && !endpoint.startsWith('/housing')) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.statusText));
    }

    // eslint-disable-next-line no-underscore-dangle
    parsedRes._headers = res.headers;
    parsedRes.raw = Boolean(info.raw);
    if (info.noCache) return parsedRes;
    if (this.client.cache && !info.raw) {
      this.client.cacheHandler.set(endpoint, parsedRes);
    }

    return parsedRes;
  }
}

export default Requests;
