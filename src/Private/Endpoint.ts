import Client from '../Client';

class Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    this.client = client;
  }

  execute(...args: any[]): Promise<any> | any {
    throw new Error('Command execute method is not implemented yet!');
  }
}

export default Endpoint;
