import Error from '../Private/ErrorHandler';
import Client from '../Client';

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
