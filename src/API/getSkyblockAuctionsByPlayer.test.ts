import Auction from '../structures/SkyBlock/Auctions/Auction.js';
import Bid from '../structures/SkyBlock/Auctions/Bid.js';
import Client from '../Client.js';
import ItemBytes from '../structures/ItemBytes.js';
import { Rarity } from '../structures/SkyBlock/SkyblockMemberTypes.js';
import { RequestData } from '../Private/RequestHandler.js';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockAuctionsByPlayer (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = await client.getSkyblockAuctions(1);
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  const data = await client.getSkyblockAuctionsByPlayer(auctions.auctions[0].auctioneerUuid, { raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<Auction[] | RequestData>();
  client.destroy();
});

test('getSkyblockAuctionsByPlayer (No Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockAuctionsByPlayer()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getSkyblockAuctionsByPlayer', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = await client.getSkyblockAuctions(1);
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  let data = await client.getSkyblockAuctionsByPlayer(auctions.auctions[0].auctioneerUuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Auction[] | RequestData>();
  data = data as Auction[];
  data.forEach((auction: Auction) => {
    expect(auction).toBeDefined();
    expect(auction).toBeInstanceOf(Auction);
    expectTypeOf(auction).toEqualTypeOf<Auction>();

    expect(auction.auctionId).toBeDefined();
    expectTypeOf(auction.auctionId).toEqualTypeOf<string | null>();

    expect(auction.auctioneerUuid).toBeDefined();
    expectTypeOf(auction.auctioneerUuid).toEqualTypeOf<string | null>();

    expect(auction.auctioneerProfile).toBeDefined();
    expectTypeOf(auction.auctioneerProfile).toEqualTypeOf<string | null>();

    expect(auction.bin).toBeDefined();
    expectTypeOf(auction.bin).toEqualTypeOf<boolean>();

    expect(auction.itemBytes).toBeDefined();
    expectTypeOf(auction.itemBytes).toEqualTypeOf<ItemBytes | null>();
    expect(auction.itemBytes).toBeDefined();
    expectTypeOf(auction.itemBytes).toEqualTypeOf<ItemBytes | null>();
    if (auction.itemBytes) {
      expect(auction.itemBytes).toBeDefined();
      expectTypeOf(auction.itemBytes).toEqualTypeOf<ItemBytes>();
      expect(auction.itemBytes.bytesBuffer).toBeDefined();
      expectTypeOf(auction.itemBytes.bytesBuffer).toEqualTypeOf<Buffer>();
      expect(auction.itemBytes.base64).toBeDefined();
      expectTypeOf(auction.itemBytes.base64).toEqualTypeOf<() => string>();
      expect(auction.itemBytes.base64()).toBeDefined();
      expectTypeOf(auction.itemBytes.base64()).toEqualTypeOf<string>();
    }
    expect(auction.coop).toBeDefined();
    expectTypeOf(auction.coop).toEqualTypeOf<string[]>();

    expect(auction.auctionStartTimestamp).toBeDefined();
    expect(auction.auctionStartTimestamp).toBeGreaterThanOrEqual(0);
    expectTypeOf(auction.auctionStartTimestamp).toEqualTypeOf<number>();

    expect(auction.auctionStart).toBeDefined();
    expectTypeOf(auction.auctionStart).toEqualTypeOf<Date>();

    expect(auction.auctionEndTimestamp).toBeDefined();
    expectTypeOf(auction.auctionEndTimestamp).toEqualTypeOf<number | null>();

    expect(auction.auctionEnd).toBeDefined();
    expectTypeOf(auction.auctionEnd).toEqualTypeOf<Date | null>();

    expect(auction.item).toBeDefined();
    expectTypeOf(auction.item).toEqualTypeOf<string>();

    expect(auction.itemLore).toBeDefined();
    expectTypeOf(auction.itemLore).toEqualTypeOf<string>();

    expect(auction.itemLoreRaw).toBeDefined();
    expectTypeOf(auction.itemLoreRaw).toEqualTypeOf<string>();

    expect(auction.rarity).toBeDefined();
    expectTypeOf(auction.rarity).toEqualTypeOf<Rarity>();

    expect(auction.startingBid).toBeDefined();
    expectTypeOf(auction.startingBid).toEqualTypeOf<number>();

    expect(auction.highestBid).toBeDefined();
    expectTypeOf(auction.highestBid).toEqualTypeOf<number>();

    expect(auction.bids).toBeDefined();
    expectTypeOf(auction.bids).toEqualTypeOf<Bid[]>();
    auction.bids.forEach((bid: Bid) => {
      expect(bid).toBeDefined();
      expect(bid).toBeInstanceOf(Bid);
      expectTypeOf(bid).toEqualTypeOf<Bid>();
      expect(bid.auctionId).toBeDefined();
      expectTypeOf(bid.auctionId).toEqualTypeOf<string>();
      expect(bid.profileId).toBeDefined();
      expectTypeOf(bid.profileId).toEqualTypeOf<string>();
      expect(bid.amount).toBeDefined();
      expect(bid.amount).toBeGreaterThanOrEqual(0);
      expectTypeOf(bid.amount).toEqualTypeOf<number>();
      expect(bid.timestamp).toBeDefined();
      expectTypeOf(bid.timestamp).toEqualTypeOf<number>();
      expect(bid.at).toBeDefined();
      expectTypeOf(bid.at).toEqualTypeOf<Date>();
      expect(bid.bidder).toBeDefined();
      expectTypeOf(bid.bidder).toEqualTypeOf<string>();
      expect(bid.toString()).toBeDefined();
      expect(bid.toString()).toBe(`${bid.bidder} bid ${bid.amount} coins`);
      expectTypeOf(bid.toString()).toEqualTypeOf<string>();
    });

    expect(auction.claimed).toBeDefined();
    expectTypeOf(auction.claimed).toEqualTypeOf<boolean>();

    expect(auction.claimedBidders).toBeDefined();
    expectTypeOf(auction.claimedBidders).toEqualTypeOf<string[]>();

    expect(auction.toString()).toBeDefined();
    expect(auction.toString()).toEqual(auction.item);
    expectTypeOf(auction.toString()).toEqualTypeOf<string>();
  });

  client.destroy();
});

test('getSkyblockAuctionsByPlayer (Item Bytes)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const auctions = await client.getSkyblockAuctions(1);
  if (undefined === auctions.auctions[0]) return;
  if (!auctions.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  let data = await client.getSkyblockAuctionsByPlayer(auctions.auctions[0].auctioneerUuid, { includeItemBytes: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Auction[] | RequestData>();
  data = data as Auction[];
  data.forEach((auction: Auction) => {
    expect(auction).toBeDefined();
    expect(auction).toBeInstanceOf(Auction);
    expectTypeOf(auction).toEqualTypeOf<Auction>();

    expect(auction.auctionId).toBeDefined();
    expectTypeOf(auction.auctionId).toEqualTypeOf<string | null>();

    expect(auction.auctioneerUuid).toBeDefined();
    expectTypeOf(auction.auctioneerUuid).toEqualTypeOf<string | null>();

    expect(auction.auctioneerProfile).toBeDefined();
    expectTypeOf(auction.auctioneerProfile).toEqualTypeOf<string | null>();

    expect(auction.bin).toBeDefined();
    expectTypeOf(auction.bin).toEqualTypeOf<boolean>();

    expect(auction.itemBytes).toBeDefined();
    expectTypeOf(auction.itemBytes).toEqualTypeOf<ItemBytes | null>();
    if (auction.itemBytes) {
      expect(auction.itemBytes).toBeDefined();
      expectTypeOf(auction.itemBytes).toEqualTypeOf<ItemBytes>();
      expect(auction.itemBytes.bytesBuffer).toBeDefined();
      expectTypeOf(auction.itemBytes.bytesBuffer).toEqualTypeOf<Buffer>();
      expect(auction.itemBytes.base64).toBeDefined();
      expectTypeOf(auction.itemBytes.base64).toEqualTypeOf<() => string>();
      expect(auction.itemBytes.base64()).toBeDefined();
      expectTypeOf(auction.itemBytes.base64()).toEqualTypeOf<string>();
    }

    expect(auction.coop).toBeDefined();
    expectTypeOf(auction.coop).toEqualTypeOf<string[]>();

    expect(auction.auctionStartTimestamp).toBeDefined();
    expect(auction.auctionStartTimestamp).toBeGreaterThanOrEqual(0);
    expectTypeOf(auction.auctionStartTimestamp).toEqualTypeOf<number>();

    expect(auction.auctionStart).toBeDefined();
    expectTypeOf(auction.auctionStart).toEqualTypeOf<Date>();

    expect(auction.auctionEndTimestamp).toBeDefined();
    expectTypeOf(auction.auctionEndTimestamp).toEqualTypeOf<number | null>();

    expect(auction.auctionEnd).toBeDefined();
    expectTypeOf(auction.auctionEnd).toEqualTypeOf<Date | null>();

    expect(auction.item).toBeDefined();
    expectTypeOf(auction.item).toEqualTypeOf<string>();

    expect(auction.itemLore).toBeDefined();
    expectTypeOf(auction.itemLore).toEqualTypeOf<string>();

    expect(auction.itemLoreRaw).toBeDefined();
    expectTypeOf(auction.itemLoreRaw).toEqualTypeOf<string>();

    expect(auction.rarity).toBeDefined();
    expectTypeOf(auction.rarity).toEqualTypeOf<Rarity>();

    expect(auction.startingBid).toBeDefined();
    expectTypeOf(auction.startingBid).toEqualTypeOf<number>();

    expect(auction.highestBid).toBeDefined();
    expectTypeOf(auction.highestBid).toEqualTypeOf<number>();

    expect(auction.bids).toBeDefined();
    expectTypeOf(auction.bids).toEqualTypeOf<Bid[]>();
    auction.bids.forEach((bid: Bid) => {
      expect(bid).toBeDefined();
      expect(bid).toBeInstanceOf(Bid);
      expectTypeOf(bid).toEqualTypeOf<Bid>();
      expect(bid.auctionId).toBeDefined();
      expectTypeOf(bid.auctionId).toEqualTypeOf<string>();
      expect(bid.profileId).toBeDefined();
      expectTypeOf(bid.profileId).toEqualTypeOf<string>();
      expect(bid.amount).toBeDefined();
      expect(bid.amount).toBeGreaterThanOrEqual(0);
      expectTypeOf(bid.amount).toEqualTypeOf<number>();
      expect(bid.timestamp).toBeDefined();
      expectTypeOf(bid.timestamp).toEqualTypeOf<number>();
      expect(bid.at).toBeDefined();
      expectTypeOf(bid.at).toEqualTypeOf<Date>();
      expect(bid.bidder).toBeDefined();
      expectTypeOf(bid.bidder).toEqualTypeOf<string>();
      expect(bid.toString()).toBeDefined();
      expect(bid.toString()).toBe(`${bid.bidder} bid ${bid.amount} coins`);
      expectTypeOf(bid.toString()).toEqualTypeOf<string>();
    });

    expect(auction.claimed).toBeDefined();
    expectTypeOf(auction.claimed).toEqualTypeOf<boolean>();

    expect(auction.claimedBidders).toBeDefined();
    expectTypeOf(auction.claimedBidders).toEqualTypeOf<string[]>();

    expect(auction.toString()).toBeDefined();
    expect(auction.toString()).toEqual(auction.item);
    expectTypeOf(auction.toString()).toEqualTypeOf<string>();
  });

  client.destroy();
});
