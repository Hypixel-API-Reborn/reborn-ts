import Client from '../Client.js';
import Error from '../Private/ErrorHandler.js';

class Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  execute(...args: any[]): Promise<any> | any {
    throw new Error(this.client.errors.NOT_IMPLEMENTED, 'Unknown endpoint');
  }
}

export default Endpoint;
