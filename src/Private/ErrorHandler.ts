/* eslint-disable max-len */

const baseVariables = {
  discordInvite: 'https://discord.gg/NSEBNMM',
  packageName: 'hypixel-api-reborn'
};

export class Errors {
  NO_API_KEY: string = 'No API Key specified! For help join our Discord Server {discordInvite}';
  ERROR_CODE_CAUSE: string = 'Code: {code} - {cause}! For help join our Discord Server {discordInvite}';
  ERROR_STATUSTEXT: string = '{statusCode}! For help join our Discord Server {discordInvite}';
  NO_NICKNAME_UUID: string = 'No nickname or uuid specified.';
  NO_UUID: string = 'No uuid specified.';
  UUID_NICKNAME_MUST_BE_A_STRING: string = 'Nickname or uuid must be a string.';
  MALFORMED_UUID: string = 'Malformed UUID!';
  PLAYER_HAS_NEVER_LOGGED: string = 'Player has never logged into Hypixel.';
  NO_GUILD_QUERY: string = 'No guild search query specified.';
  INVALID_GUILD_ID: string = 'Specified Guild ID is invalid.';
  INVALID_GUILD_SEARCH_PARAMETER: string = "getGuild() searchParameter must be 'id'; 'guild' or 'player'.";
  SOMETHING_WENT_WRONG: string = 'Something went wrong. {cause}';
  GUILD_DOES_NOT_EXIST: string = 'Guild does not exist.';
  PAGE_INDEX_ERROR: string =
    'Invalid page index. Must be an integer, an array of 2 integers, or a keyword. For help join our Discord Server {discordInvite}';
  INVALID_OPTION_VALUE: string = 'Invalid option value! For help join our Discord Server {discordInvite}';
  UPDATER_REQUEST_NOT_OK: string = 'Something went wrong while checking for updates.';
  MULTIPLE_INSTANCES: string =
    'Multiple instances of hypixel-api-reborn are found so we merged them for you. Please refrain from spawning multiple instances in the future. For more information, join our Discord Server {discordInvite}.';
  UNEXPECTED_ERROR: string =
    "The data provided to hypixel API is malformed and thus not recognized by hypixel, but this shouldn't be your fault. Please report this error in our Discord Server {discordInvite} or GitHub.";
  RATE_LIMIT_EXCEEDED: string =
    "The rate limitations on your API Key has been exceeded. There might be an outage (Check Hypixel's status page), or you simply did too many requests in a short time. Hint: Enable rate limit options! They can help you avoid this error! For help join our Discord Server {discordInvite}";
  NO_SKYBLOCK_PROFILES: string = 'The player has no skyblock profiles.';
  BAD_AUCTION_FILTER: string =
    'Unexpected filter for Client#getSkyblockAuction. Expected one of "PLAYER", "AUCTION", "PROFILE", but got something else.';
  NOT_IMPLEMENTED: string = 'Endpoint execute method is not implemented yet! Please report this {discordInvite}';
  RATE_LIMIT_INIT_ERROR: string =
    'An error happened whilst initializing rate limit. We strongly recommend restarting the code as this can lead to desynchronization.';
  ENDPOINT_NOT_LOADED: string = '[hypixel-api-reborn] This endpoint has not been loaded yet. Please restart your code';
  RECENT_REQUEST: string =
    '[Hypixel-API-Reborn] You have requested that player recently. Try turning on cache. For help join our Discord Server {discordInvite}';
}

// Credit: https://github.com/DuckySoLucky/hypixel-discord-chat-bridge/blob/4926194c7fb99dd7773a78b9cb827ec029d11bd8/src/contracts/helperFunctions.js#L264-L266
export function replaceVariables(template: string, variables: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, name) => variables[name] ?? match);
}
class HypixelAPIRebornError extends Error {
  source: string;
  constructor(message: string, source: string, variables: Record<string, string> = {}) {
    super(replaceVariables(message, { ...baseVariables, ...variables }));
    this.name = 'HypixelAPIReborn';
    this.source = replaceVariables(source, { ...baseVariables, ...variables });
  }

  toString() {
    return this.message;
  }
}

export default HypixelAPIRebornError;
