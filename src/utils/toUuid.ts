import fetch from '../Private/uuidCache';
import Errors from '../Errors';
import isUUID from './isUUID';

export default async function (input: string, cacheTime: number = 600, useThirdPartyAPI: string = '') {
  if (!input) throw new Error(Errors.NO_NICKNAME_UUID);
  if ('string' !== typeof input) throw new Error(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
  if (isUUID(input)) return input.replace(/-/g, '');
  try {
    const customUrl = useThirdPartyAPI ? 'https://api.minetools.eu/uuid/' : useThirdPartyAPI;
    const url = useThirdPartyAPI ? `${customUrl}${input}` : `https://mowojang.matdoes.dev/${input}`;
    const res = await fetch(url, input, cacheTime);
    if (404 === res.status) {
      return Promise.reject(new Error(Errors.PLAYER_DOES_NOT_EXIST));
    } else if (200 !== res.status) {
      throw new Error('Unknown Error whilst retrieving player information');
    }
    return res.id;
  } catch {
    // 2nd Try
    if (!useThirdPartyAPI) return module.exports(input, cacheTime, true);
    throw new Error(Errors.PLAYER_DOES_NOT_EXIST);
  }
}
