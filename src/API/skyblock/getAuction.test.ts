import Auction from '../../structures/SkyBlock/Auctions/Auction';
import { SkyblockRarity } from '../../utils/SkyblockUtils';
import Bid from '../../structures/SkyBlock/Auctions/Bid';
import { expect, expectTypeOf, test } from 'vitest';
import ItemBytes from '../../structures/ItemBytes';
import Client from '../../Client';

test('Client#skyblock.Auction (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  const auctions = await client.skyblock.getAuctions(1);
  const data = await client.skyblock.getAuction('player', auctions.auctions[0].auctioneerUuid, { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('Client#skyblock.Auction (No Query)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  expect(() => client.skyblock.getAuction('player')).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('Client#skyblock.Auction (Bad Filter)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  expect(() => client.skyblock.getAuction('meow')).rejects.toThrowError(client.errors.BAD_AUCTION_FILTER);
  client.destroy();
});

test('Client#skyblock.Auction (Auction)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  const auctions = await client.skyblock.getAuctions(1);
  const data = await client.skyblock.getAuction('auction', auctions.auctions[0].auctioneerUuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();

  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Auction[]>();
  expect(data.length).greaterThanOrEqual(0);
  expectTypeOf(data.length).toEqualTypeOf<number>();
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
    expect(auction.coop).toBeDefined();
    expectTypeOf(auction.coop).toEqualTypeOf<string[]>();
    expect(auction.auctionStartTimestamp).toBeDefined();
    expect(auction.auctionStartTimestamp).greaterThanOrEqual(0);
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
    expectTypeOf(auction.rarity).toEqualTypeOf<SkyblockRarity>();
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
      expectTypeOf(bid.auctionId).toEqualTypeOf<string | null>();
      expect(bid.profileId).toBeDefined();
      expectTypeOf(bid.profileId).toEqualTypeOf<string | null>();
      expect(bid.amount).toBeDefined();
      expect(bid.amount).greaterThanOrEqual(0);
      expectTypeOf(bid.amount).toEqualTypeOf<number>();
      expect(bid.timestamp).toBeDefined();
      expectTypeOf(bid.timestamp).toEqualTypeOf<number | null>();
      expect(bid.at).toBeDefined();
      expectTypeOf(bid.at).toEqualTypeOf<Date | null>();
      expect(bid.bidder).toBeDefined();
      expectTypeOf(bid.bidder).toEqualTypeOf<string | null>();
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

test('Client#skyblock.Auction (Player)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const auctions = await client.skyblock.getAuctions(1);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getAuction('player', auctions.auctions[0].auctioneerUuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();

  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Auction[]>();
  expect(data.length).greaterThanOrEqual(0);
  expectTypeOf(data.length).toEqualTypeOf<number>();
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
    expect(auction.coop).toBeDefined();
    expectTypeOf(auction.coop).toEqualTypeOf<string[]>();
    expect(auction.auctionStartTimestamp).toBeDefined();
    expect(auction.auctionStartTimestamp).greaterThanOrEqual(0);
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
    expectTypeOf(auction.rarity).toEqualTypeOf<SkyblockRarity>();
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
      expectTypeOf(bid.auctionId).toEqualTypeOf<string | null>();
      expect(bid.profileId).toBeDefined();
      expectTypeOf(bid.profileId).toEqualTypeOf<string | null>();
      expect(bid.amount).toBeDefined();
      expect(bid.amount).greaterThanOrEqual(0);
      expectTypeOf(bid.amount).toEqualTypeOf<number>();
      expect(bid.timestamp).toBeDefined();
      expectTypeOf(bid.timestamp).toEqualTypeOf<number | null>();
      expect(bid.at).toBeDefined();
      expectTypeOf(bid.at).toEqualTypeOf<Date | null>();
      expect(bid.bidder).toBeDefined();
      expectTypeOf(bid.bidder).toEqualTypeOf<string | null>();
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

test('Client#skyblock.Auction (Profile)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const auctions = await client.skyblock.getAuctions(1);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getAuction('profile', auctions.auctions[0].auctioneerProfile);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();

  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Auction[]>();
  expect(data.length).greaterThanOrEqual(0);
  expectTypeOf(data.length).toEqualTypeOf<number>();
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
    expect(auction.coop).toBeDefined();
    expectTypeOf(auction.coop).toEqualTypeOf<string[]>();
    expect(auction.auctionStartTimestamp).toBeDefined();
    expect(auction.auctionStartTimestamp).greaterThanOrEqual(0);
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
    expectTypeOf(auction.rarity).toEqualTypeOf<SkyblockRarity>();
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
      expectTypeOf(bid.auctionId).toEqualTypeOf<string | null>();
      expect(bid.profileId).toBeDefined();
      expectTypeOf(bid.profileId).toEqualTypeOf<string | null>();
      expect(bid.amount).toBeDefined();
      expect(bid.amount).greaterThanOrEqual(0);
      expectTypeOf(bid.amount).toEqualTypeOf<number>();
      expect(bid.timestamp).toBeDefined();
      expectTypeOf(bid.timestamp).toEqualTypeOf<number | null>();
      expect(bid.at).toBeDefined();
      expectTypeOf(bid.at).toEqualTypeOf<Date | null>();
      expect(bid.bidder).toBeDefined();
      expectTypeOf(bid.bidder).toEqualTypeOf<string | null>();
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
