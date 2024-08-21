import { expect, expectTypeOf, test } from 'vitest';
import House from '../structures/House';
import Client from '../Client';
import Errors from '../Errors';
const errors = new Errors();

test('getHouse (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const houses = await client.getActiveHouses();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getHouse(houses[0].uuid, { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getHouse (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getHouse()).rejects.toThrowError(errors.NO_UUID);
  client.destroy();
});

test('getHouse', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const houses = await client.getActiveHouses();
  expect(houses).toBeDefined();
  expectTypeOf(houses).toEqualTypeOf<House[]>();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getHouse(houses[0].uuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<House>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<string>();
  expect(data.owner).toBeDefined();
  expectTypeOf(data.owner).toEqualTypeOf<string>();
  expect(data.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.createdAtTimestamp).toEqualTypeOf<number>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date>();
  expect(data.players).toBeDefined();
  expectTypeOf(data.players).toEqualTypeOf<number>();
  expect(data.cookies).toBeDefined();
  expectTypeOf(data.cookies).toEqualTypeOf<number>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
  client.destroy();
});
