import WatchdogStats from '../structures/Watchdog/Stats';

export default async function (this:any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/punishmentstats');
  if (res.raw) return res;
  return new WatchdogStats(res);
}
