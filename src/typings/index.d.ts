import CacheHandler from '../Private/CacheHandler';
import Requests from '../Private/Requests';
import { ClientOptions } from '../Client';

export type StaticGameNames =
  | 'arcade'
  | 'arena'
  | 'bedwars'
  | 'hungergames'
  | 'buildbattle'
  | 'truecombat'
  | 'duels'
  | 'mcgo'
  | 'murdermystery'
  | 'paintball'
  | 'quake'
  | 'skyclash'
  | 'skywars'
  | 'supersmash'
  | 'speeduhc'
  | 'gingerbread'
  | 'tntgames'
  | 'uhc'
  | 'vampirez'
  | 'walls3'
  | 'walls'
  | 'battleground'
  | 'woolgames';

declare module 'reborn-ts' {
  const version: string;

  class Client {
    readonly key: string;

    declare requests: Requests;
    declare cacheHandler: CacheHandler;

    declare cache: boolean;
    declare cacheTime: number;
    declare cacheMaxKeys: number;
    declare cacheCheckPeriod: number;
    declare rateLimit?: 'AUTO' | 'HARD' | 'NONE';
    declare silent: boolean;
    declare checkForUpdates: boolean;
    declare endpoints: any;

    constructor(key: string, options?: ClientOptions);
  }
}
