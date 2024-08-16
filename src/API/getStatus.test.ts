import { expect, expectTypeOf, test } from 'vitest';
import Client from '../Client';
import Status from '../structures/Status';
import Game from '../structures/Game';

test('getStatus (raw)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getStatus('Pixelic', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getStatus', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getStatus('Pixelic');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Status);
  expectTypeOf(data).toEqualTypeOf<Status>();

  expect(data.online).toBeDefined();
  expectTypeOf(data.online).toEqualTypeOf<boolean>();

  expect(data.game).toBeDefined();
  expectTypeOf(data.game).toEqualTypeOf<Game | null>();

  expect(data.mode).toBeDefined();
  expectTypeOf(data.mode).toEqualTypeOf<string | null>();

  expect(data.map).toBeDefined();
  expectTypeOf(data.map).toEqualTypeOf<string | null>();

  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<'Online' | 'Offline'>();
  expect(data.toString()).toBe(data.online ? 'Online' : 'Offline');

  client.destroy();
});
