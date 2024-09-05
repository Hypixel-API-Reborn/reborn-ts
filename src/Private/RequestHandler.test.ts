import Client from '../Client';
import RequestHandler from './RequestHandler';
import { expect, expectTypeOf, test } from 'vitest';

test('RequestHandler', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.requestHandler).toBeDefined();
  expectTypeOf(client.requestHandler).toEqualTypeOf<RequestHandler>();

  expect(client.requestHandler.toUUID).toBeDefined();
  expectTypeOf(client.requestHandler.toUUID).toBeFunction();
  const data = await client.requestHandler.toUUID('pixelic');
  expect(data).toBe('14727faefbdc4aff848cd2713eb9939e');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.requestHandler.toUUID()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.requestHandler.toUUID(-1)).rejects.toThrowError(client.errors.UUID_NICKNAME_MUST_BE_A_STRING);

  client.destroy();
});

// test('RequestHandler (Invalid API Key)', () => {
//   const client = new Client(process.env.HYPIXEL_KEY ?? '');
//   expect(client.requestHandler.request).toBeDefined();
//   expectTypeOf(client.requestHandler.request).toBeFunction();
//   vi.spyOn(axios, 'get').mockResolvedValue({ status: 403, data: {} });
//   expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(client.errors.INVALID_API_KEY);
//   vi.restoreAllMocks();
//   client.destroy();
// });

// test('RequestHandler (Unprocessable Entity)', () => {
//   const client = new Client(process.env.HYPIXEL_KEY ?? '');
//   expect(client.requestHandler.request).toBeDefined();
//   expectTypeOf(client.requestHandler.request).toBeFunction();
//   vi.spyOn(axios, 'get').mockResolvedValue({ status: 422, data: {} });
//   expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(client.errors.UNEXPECTED_ERROR);
//   vi.restoreAllMocks();
//   client.destroy();
// });

// test('RequestHandler (Rate Limited)', () => {
//   const client = new Client(process.env.HYPIXEL_KEY ?? '');
//   expect(client.requestHandler.request).toBeDefined();
//   expectTypeOf(client.requestHandler.request).toBeFunction();
//   vi.spyOn(axios, 'get').mockResolvedValue({ status: 429, data: {} });
//   expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(client.errors.RATE_LIMIT_EXCEEDED);
//   vi.restoreAllMocks();
//   client.destroy();
// });
