<<<<<<< HEAD:src/Private/Requests.ts
const BASE_URL = 'http://localhost:3000/hypixel/v2';
import isUUID from '../utils/isUUID';
import Client from '../Client';
import axios from 'axios';
=======
const BASE_URL = 'https://api.hypixel.net/v2';
import Client from '../Client.js';
import RequestData from './RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
>>>>>>> master:src/Private/RequestHandler.ts

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
      throw new Error(
        this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = (await res.json()) as Record<string, any>;
    if (400 === res.status) {
      throw new Error(
        this.client.errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(
          /{cause}/,
          parsedRes.cause || 'Unknown'
        )
      );
    }
    if (403 === res.status) throw new Error(this.client.errors.INVALID_API_KEY);
    if (422 === res.status) throw new Error(this.client.errors.UNEXPECTED_ERROR);
    if (
      429 === res.status &&
      'You have already looked up this player too recently, please try again shortly' === parsedRes.cause
    ) {
      throw new Error(this.client.errors.RECENT_REQUEST);
    }
    if (429 === res.status) throw new Error(this.client.errors.RATE_LIMIT_EXCEEDED);
    if (200 !== res.status) {
      throw new Error(this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    }
    if (!parsedRes.success && !endpoint.startsWith('/housing')) {
      throw new Error(this.client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.statusText));
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
    if (!input) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    if ('string' !== typeof input) throw new Error(this.client.errors.UUID_NICKNAME_MUST_BE_A_STRING);
<<<<<<< HEAD:src/Private/Requests.ts
    if (isUUID(input)) return input.replace(/-/g, '');
    const url = `http://localhost:3000/uuid/${input}`;
=======
    if (this.client.functions.isUUID(input)) return input.replace(/-/g, '');
    const url = `https://mowojang.matdoes.dev/${input}`;
>>>>>>> master:src/Private/RequestHandler.ts
    if (this.client.cacheHandler.has(url)) {
      return this.client.cacheHandler.get(url);
    }
    const res = await fetch(url);
    if (500 <= res.status && 528 > res.status) {
      throw new Error(
        this.client.errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = (await res.json()) as Record<string, any>;
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

<<<<<<< HEAD:src/Private/Requests.ts
  async fetchExternalData(url: string, options?: RequestOptions): Promise<RequestData> {
    options = { raw: options?.raw ?? false, noCache: options?.noCache ?? false };
=======
  async fetchExternalData(url: string): Promise<RequestData> {
>>>>>>> master:src/Private/RequestHandler.ts
    if (this.client.cacheHandler.has(url)) {
      const data = this.client.cacheHandler.get(url);
      return new RequestData(data.data, data.headers, {
        status: 200,
<<<<<<< HEAD:src/Private/Requests.ts
        options,
        url: url,
=======
        options: { raw: false, noCache: false },
        url,
>>>>>>> master:src/Private/RequestHandler.ts
        cached: true,
        timestamp: data.timestamp
      });
    }
<<<<<<< HEAD:src/Private/Requests.ts
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
=======
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
>>>>>>> master:src/Private/RequestHandler.ts
      this.client.cacheHandler.set(url, requestData);
    }
    return requestData;
  }
}

export default RequestHandler;
