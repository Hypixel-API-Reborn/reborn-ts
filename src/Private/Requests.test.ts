import Client from '../Client';
import Requests from './Requests';
import axios from 'axios';
import { expect, expectTypeOf, test, vi } from 'vitest';

test('Requests', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.requests).toBeDefined();
  expectTypeOf(client.requests).toEqualTypeOf<Requests>();

  expect(client.requests.toUUID).toBeDefined();
  expectTypeOf(client.requests.toUUID).toBeFunction();
  const data = await client.requests.toUUID('pixelic');
  expect(data).toBe('14727faefbdc4aff848cd2713eb9939e');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.requests.toUUID()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.requests.toUUID(-1)).rejects.toThrowError(client.errors.UUID_NICKNAME_MUST_BE_A_STRING);

  client.destroy();
});

test('Requests (Invalid API Key)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client.requests.request).toBeDefined();
  expectTypeOf(client.requests.request).toBeFunction();
  vi.spyOn(axios, 'get').mockResolvedValue({ status: 403, data: {} });
  expect(() => client.requests.request('/boosters')).rejects.toThrowError(client.errors.INVALID_API_KEY);
  vi.restoreAllMocks();
  client.destroy();
});

test('Requests (Unprocessable Entity)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client.requests.request).toBeDefined();
  expectTypeOf(client.requests.request).toBeFunction();
  vi.spyOn(axios, 'get').mockResolvedValue({ status: 422, data: {} });
  expect(() => client.requests.request('/boosters')).rejects.toThrowError(client.errors.UNEXPECTED_ERROR);
  vi.restoreAllMocks();
  client.destroy();
});

test('Requests (Rate Limited)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client.requests.request).toBeDefined();
  expectTypeOf(client.requests.request).toBeFunction();
  vi.spyOn(axios, 'get').mockResolvedValue({ status: 429, data: {} });
  expect(() => client.requests.request('/boosters')).rejects.toThrowError(client.errors.RATE_LIMIT_EXCEEDED);
  vi.restoreAllMocks();
  client.destroy();
});
