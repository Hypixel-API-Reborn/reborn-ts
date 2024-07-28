import { ClientOptions } from '../typings';
import Errors from '../Errors';

/**
 * Validation Class, used internally to validate provided arguments
 */
class Validation {
  static validateOptions(options: ClientOptions): void {
    if ('number' !== typeof options.hypixelCacheTime) throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if ('number' !== typeof options.mojangCacheTime) throw new Error(Errors.CACHE_TIME_MUST_BE_A_NUMBER);
    if ('number' !== typeof options.cacheSize) throw new Error(Errors.CACHE_LIMIT_MUST_BE_A_NUMBER);
    if ('string' !== typeof options.rateLimit || !['AUTO', 'HARD', 'NONE'].includes(options.rateLimit)) {
      throw new Error(Errors.INVALID_RATE_LIMIT_OPTION);
    }
    if ('number' !== typeof options.keyLimit) throw new Error(Errors.INVALID_KEY_LIMIT_OPTION);
    if ('boolean' !== typeof options.syncWithHeaders) throw new Error(Errors.INVALID_HEADER_SYNC_OPTION);
    if ('object' !== typeof options.headers) throw new Error(Errors.INVALID_HEADERS);
    if ('boolean' !== typeof options.silent) throw new Error(Errors.INVALID_SILENT_OPTION);
    if ('boolean' !== typeof options.checkForUpdates) throw new Error(Errors.INVALID_UPDATE_OPTION);
    if (!['boolean', 'string'].includes(typeof options.useThirdPartyAPI)) {
      throw new Error(Errors.INVALID_THIRD_PARTY_API_OPTION);
    }
  }

  static parseOptions(options: ClientOptions): ClientOptions {
    if ('object' !== typeof options || null === options) throw new Error(Errors.OPTIONS_MUST_BE_AN_OBJECT);
    return {
      cache: options.cache ?? true,
      hypixelCacheTime: options.hypixelCacheTime ?? 60,
      mojangCacheTime: options.mojangCacheTime ?? 600,
      cacheSize: (-1 === options.cacheSize ? Infinity : options.cacheSize) || Infinity,
      rateLimit: options.rateLimit ?? 'AUTO',
      keyLimit: options.keyLimit ?? 60,
      syncWithHeaders: Boolean(options.syncWithHeaders),
      headers: options.headers ?? {},
      silent: Boolean(options.silent),
      checkForUpdates: options.checkForUpdates ?? true,
      useThirdPartyAPI: options.useThirdPartyAPI ?? false
    };
  }

  static validateKey(key: string): string {
    if (!key) throw new Error(Errors.NO_API_KEY);
    if ('string' !== typeof key) throw new Error(Errors.KEY_MUST_BE_A_STRING);
    return key;
  }

  static cacheSuboptions(input: any): boolean {
    if ('object' !== typeof input || null === input) return false;
    if (!input.noCacheCheck && !input.noCaching && !input.raw) return false;
    return true;
  }

  static validateNodeVersion() {
    const versionMatch = process.version.match(/v(\d{2})\.\d{1,}\.\d+/);
    const nodeVersion = parseInt(versionMatch ? versionMatch[1] : '', 10);
    if (12 > nodeVersion) throw new Error(Errors.NODE_VERSION_ERR);
  }
}

export default Validation;
