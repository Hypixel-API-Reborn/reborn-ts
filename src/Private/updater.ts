import { UpdateHandler } from '../typings';
import Errors from '../Errors';
import axios from 'axios';

class Updater implements UpdateHandler {
  async checkForUpdates() {
    const version = require('../../package.json').version;
    const request = await axios.get('https://registry.npmjs.org/hypixel-api-reborn');
    if (request.status !== 200) return console.log(Errors.UPDATER_REQUEST_NOT_OK);
    const metadata = await request.data;
    const latest = metadata['dist-tags'].latest;
    const compare = this.compare(version, latest);
    if (-1 === compare) {
      console.log(
        `New version of hypixel-api-reborn is available! Current version: ${version}, Latest version: ${latest}`
      );
    }
  }

  compare(a: string, b: string) {
    const pa = a.split('.');
    const pb = b.split('.');
    for (let i = 0; 3 > i; i++) {
      const na = Number(pa[i]);
      const nb = Number(pb[i]);
      if (na > nb) return 1;
      if (nb > na) return -1;
      if (!isNaN(na) && isNaN(nb)) return 1;
      if (isNaN(na) && !isNaN(nb)) return -1;
    }
    return 0;
  }
}

export default Updater;
