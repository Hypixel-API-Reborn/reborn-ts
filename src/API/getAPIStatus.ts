import Status from '../structures/APIStatus.js';
import Rss from 'rss-parser';
const Parser = new Rss();
export default async function (options: any) {
  const parsed = await Parser.parseURL('https://status.hypixel.net/history.rss');
  if (options && options.raw) return parsed;
  return new Status(parsed);
}
