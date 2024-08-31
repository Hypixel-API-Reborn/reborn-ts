import Client from '../Client';
import SkyblockNews from '../structures/SkyBlock/News/SkyblockNews';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockNews (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockNews({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getSkyblockNews', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockNews();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockNews[]>();

  data.forEach((news: SkyblockNews) => {
    expect(news.title).toBeDefined();
    expectTypeOf(news.title).toEqualTypeOf<string>();

    expect(news.link).toBeDefined();
    expectTypeOf(news.link).toEqualTypeOf<string>();

    expect(news.rawDate).toBeDefined();
    expectTypeOf(news.rawDate).toEqualTypeOf<string>();

    expect(news.date).toBeDefined();
    expectTypeOf(news.date).toEqualTypeOf<Date | null>();

    expect(news.version).toBeDefined();
    expectTypeOf(news.version).toEqualTypeOf<string | null>();

    expect(news.toString()).toBeDefined();
    expect(news.toString()).toBe(news.title);
    expectTypeOf(news.toString()).toEqualTypeOf<string>();
  });

  client.destroy();
});
