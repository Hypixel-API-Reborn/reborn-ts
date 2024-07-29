/* eslint-disable max-len */
export default {
  INVALID_API_KEY: '[Hypixel-API-Reborn] Invalid API Key! For help join our Discord Server https://discord.gg/NSEBNMM',
  NO_API_KEY: '[Hypixel-API-Reborn] No API Key specified! For help join our Discord Server https://discord.gg/NSEBNMM',
  ERROR_CODE_CAUSE:
    '[Hypixel-API-Reborn] Code: {code} - {cause}! For help join our Discord Server https://discord.gg/NSEBNMM',
  ERROR_STATUSTEXT: '[Hypixel-API-Reborn] {statustext}! For help join our Discord Server https://discord.gg/NSEBNMM',
  KEY_MUST_BE_A_STRING:
    '[Hypixel-API-Reborn] Specified API Key must be a string! For help join our Discord Server https://discord.gg/NSEBNMM',
  OPTIONS_MUST_BE_AN_OBJECT:
    '[Hypixel-API-Reborn] Options must be an object! For help join our Discord Server https://discord.gg/NSEBNMM',
  CACHE_TIME_MUST_BE_A_NUMBER:
    '[Hypixel-API-Reborn] Cache Time must be a number! For help join our Discord Server https://discord.gg/NSEBNMM',
  CACHE_LIMIT_MUST_BE_A_NUMBER:
    '[Hypixel-API-Reborn] Cache Limit must be a number! For help join our Discord Server https://discord.gg/NSEBNMM',
  CACHE_FILTER_INVALID:
    '[Hypixel-API-Reborn] Cache Filter must be a function returning a boolean, an object, an array, or a string!',
  NO_NICKNAME_UUID: '[Hypixel-API-Reborn] No nickname or uuid specified.',
  NO_UUID: '[Hypixel-API-Reborn] No uuid specified.',
  UUID_NICKNAME_MUST_BE_A_STRING: '[Hypixel-API-Reborn] Nickname or uuid must be a string.',
  MALFORMED_UUID: '[Hypixel-API-Reborn] Malformed UUID!',
  PLAYER_DOES_NOT_EXIST: '[Hypixel-API-Reborn] Player does not exist.',
  PLAYER_HAS_NEVER_LOGGED: '[Hypixel-API-Reborn] Player has never logged into Hypixel.',
  PLAYER_IS_INACTIVE:
    "[Hypixel-API-Reborn] No records of recent games because player hasn't been online for more than 3 days or is lacking data to determine the cause of an empty response",
  PLAYER_DISABLED_ENDPOINT: '[Hypixel-API-Reborn] Player has disabled this endpoint.',
  NO_GUILD_QUERY: '[Hypixel-API-Reborn] No guild search query specified.',
  INVALID_GUILD_ID: '[Hypixel-API-Reborn] Specified Guild ID is invalid.',
  INVALID_GUILD_SEARCH_PARAMETER: "[Hypixel-API-Reborn] getGuild() searchParameter must be 'id', 'guild' or 'player'.",
  SOMETHING_WENT_WRONG: '[Hypixel-API-Reborn] Something went wrong. {cause}',
  GUILD_DOES_NOT_EXIST: '[Hypixel-API-Reborn] Guild does not exist.',
  PAGE_INDEX_ERROR:
    '[Hypixel-API-Reborn] Invalid page index. Must be an integer, an array of 2 integers, or a keyword. For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_OPTION_VALUE:
    '[Hypixel-API-Reborn] Invalid option value! For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_RESPONSE_BODY:
    '[Hypixel-API-Reborn] An error occurred while converting to JSON. Perhaps this is due to an update or maintenance. For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_RATE_LIMIT_OPTION:
    "[Hypixel-API-Reborn] Rate Limit provided in Client options must be 'HARD', 'AUTO', or 'NONE'. For help join our Discord Server https://discord.gg/NSEBNMM",
  INVALID_KEY_LIMIT_OPTION:
    '[Hypixel-API-Reborn] Key Limit provided in Client options must be an integer representing the amount of requests possible in one minute with your key.',
  INVALID_HEADER_SYNC_OPTION: '[Hypixel-API-Reborn] Invalid Value for maxSyncHeaders : must be a boolean',
  INVALID_BURST_OPTION: '[Hypixel-API-Reborn] maxBurstRequests provided in Client options must be a number',
  NODE_VERSION_ERR:
    "[Hypixel-API-Reborn] You are using a version of Nodejs that doesn't support certain features we use. Please upgrade to version 14 or above.",
  UPDATER_REQUEST_NOT_OK: '[Hypixel-API-Reborn] Something went wrong while checking for updates.',
  CONNECTION_ERROR: '[Hypixel-API-Reborn] Failed to connect.',
  RATE_LIMIT_INIT_ERROR:
    '[Hypixel-API-Reborn] An error happened whilst initializing rate limit. We strongly recommend restarting the code as this can lead to desynchronization.',
  MULTIPLE_INSTANCES:
    '[Hypixel-API-Reborn] Multiple instances of hypixel-api-reborn are found so we merged them for you. Please refrain from spawning multiple instances in the future. For more information, join our Discord Server https://discord.gg/NSEBNMM.',
  INVALID_HEADERS:
    '[Hypixel-API-Reborn] Invalid Headers are provided in ClientOptions. For help join our Discord Server https://discord.gg/NSEBNMM',
  INVALID_CACHE_HANDLER:
    '[Hypixel-API-Reborn] An invalid cache handler is provideed. For help join our Discord Server https://discord.gg/NSEBNMM',
  UNEXPECTED_ERROR:
    "[Hypixel-API-Reborn] The data provided to hypixel API is malformed and thus not recognized by hypixel, but this shouldn't be your fault. Please report this error in our Discord Server https://discord.gg/NSEBNMM or GitHub. ",
  RATE_LIMIT_EXCEEDED:
    "[Hypixel-API-Reborn] The rate limitations on your API Key has been exceeded. There might be an outage (Check Hypixel's status page), or you simply did too many requests in a short time. Hint: Enable rate limit options! They can help you avoid this error! For help join our Discord Server https://discord.gg/NSEBNMM",
  NO_SKYBLOCK_PROFILES: '[Hypixel-API-Reborn] The player has no skyblock profiles.',
  INVALID_SILENT_OPTION: '[Hypixel-API-Reborn] Invalid Value for silent : must be a boolean',
  INVALID_UPDATE_OPTION: '[Hypixel-API-Reborn] Invalid Value for update : must be a boolean',
  INVALID_THIRD_PARTY_API_OPTION: '[Hypixel-API-Reborn] Invalid Third Party API option : must be a boolean or string',
  BAD_AUCTION_FILTER:
    '[Hypixel-API-Reborn] Unexpected filter for Client#getSkyblockAuction. Expected one of "PLAYER", "AUCTION", "PROFILE", but got something else.'
};
