import { expect, expectTypeOf, test } from 'vitest';
import Endpoint from './Endpoint';
import Client from '../Client';

test('Endpoint', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  const endpoint = new Endpoint(client);

  expect(endpoint).toBeDefined();
  expectTypeOf(endpoint).toEqualTypeOf<Endpoint>();

  expect(endpoint.client).toBeDefined();
  expectTypeOf(endpoint.client).toEqualTypeOf<Client>();

  expect(endpoint.execute).toBeDefined();
  expectTypeOf(endpoint.execute).toBeFunction();
  expect(() => endpoint.execute()).toThrowError(client.errors.NOT_IMPLEMENTED);

  client.destroy();
});
