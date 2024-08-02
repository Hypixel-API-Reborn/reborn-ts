/* eslint-disable no-console */
import { version } from '../../package.json';
import Errors from '../Errors';
import axios from 'axios';

function compareVersions(a: string, b: string): boolean {
  const pa = a.split('.');
  const pb = b.split('.');
  for (let i = 0; 3 > i; i++) {
    const na = Number(pa[i]);
    const nb = Number(pb[i]);
    if (na > nb) return false;
    if (nb > na) return true;
    if (!isNaN(na) && isNaN(nb)) return false;
    if (isNaN(na) && !isNaN(nb)) return true;
  }
  return false;
}

export default async function (): Promise<void> {
  const request = await axios.get('https://registry.npmjs.org/hypixel-api-reborn');
  if (200 !== request.status) return console.log(Errors.UPDATER_REQUEST_NOT_OK);
  const metadata = await request.data;
  const latest = metadata['dist-tags'].latest;
  const compare = compareVersions(version, latest);
  if (compare) {
    console.log(
      `New version of hypixel-api-reborn is available! Current version: ${version}, Latest version: ${latest}`
    );
  }
}
