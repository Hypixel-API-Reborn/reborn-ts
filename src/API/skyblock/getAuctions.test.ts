import AuctionInfo from '../../structures/SkyBlock/Auctions/AuctionInfo';
import Auction from '../../structures/SkyBlock/Auctions/Auction';
import { SkyblockRarity } from '../../utils/SkyblockUtils';
import Bid from '../../structures/SkyBlock/Auctions/Bid';
import { expect, expectTypeOf, test } from 'vitest';
import ItemBytes from '../../structures/ItemBytes';
import Client from '../../Client';

test('Client#skyblock.Auctions (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getAuctions(1, { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('Client#skyblock.Auctions (No input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.skyblock.getAuctions()).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#skyblock.Auctions (Negative Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.skyblock.getAuctions(-1)).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#skyblock.Auctions (Page 0)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.skyblock.getAuctions(0)).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#skyblock.Auctions (String Input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.skyblock.getAuctions('hi')).rejects.toThrowError(client.errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#skyblock.Auctions (One Page)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getAuctions(1);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<{ info: AuctionInfo; auctions: Auction[] }>();
  expect(data.info).toBeDefined();
  expect(data.info).toBeInstanceOf(AuctionInfo);
  expectTypeOf(data.info).toEqualTypeOf<AuctionInfo>();
  expect(data.info.page).toBeDefined();
  expect(data.info.page).greaterThanOrEqual(0);
  expectTypeOf(data.info.page).toEqualTypeOf<number>();
  expect(data.info.totalPages).toBeDefined();
  expect(data.info.totalPages).greaterThanOrEqual(0);
  expectTypeOf(data.info.totalPages).toEqualTypeOf<number>();
  expect(data.info.totalAuctions).toBeDefined();
  expect(data.info.totalAuctions).greaterThanOrEqual(0);
  expectTypeOf(data.info.totalAuctions).toEqualTypeOf<number>();
  expect(data.info.lastUpdatedTimestamp).toBeDefined();
  expect(data.info.lastUpdatedTimestamp).greaterThanOrEqual(0);
  expectTypeOf(data.info.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.info.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.info.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<Auction[]>();
  expect(data.auctions.length).greaterThanOrEqual(0);
  expectTypeOf(data.auctions.length).toEqualTypeOf<number>();
  data.auctions.forEach((auction: Auction) => {
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

test('Client#skyblock.Auctions (One Page Include Item Bytes)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getAuctions(1, { includeItemBytes: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<{ info: AuctionInfo; auctions: Auction[] }>();
  expect(data.info).toBeDefined();
  expect(data.info).toBeInstanceOf(AuctionInfo);
  expectTypeOf(data.info).toEqualTypeOf<AuctionInfo>();
  expect(data.info.page).toBeDefined();
  expect(data.info.page).greaterThanOrEqual(0);
  expectTypeOf(data.info.page).toEqualTypeOf<number>();
  expect(data.info.totalPages).toBeDefined();
  expect(data.info.totalPages).greaterThanOrEqual(0);
  expectTypeOf(data.info.totalPages).toEqualTypeOf<number>();
  expect(data.info.totalAuctions).toBeDefined();
  expect(data.info.totalAuctions).greaterThanOrEqual(0);
  expectTypeOf(data.info.totalAuctions).toEqualTypeOf<number>();
  expect(data.info.lastUpdatedTimestamp).toBeDefined();
  expect(data.info.lastUpdatedTimestamp).greaterThanOrEqual(0);
  expectTypeOf(data.info.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.info.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.info.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<Auction[]>();
  expect(data.auctions.length).greaterThanOrEqual(0);
  expectTypeOf(data.auctions.length).toEqualTypeOf<number>();
  data.auctions.forEach((auction: Auction) => {
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

test('Client#skyblock.Auctions (All Pages)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getAuctions('*');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<{ info: AuctionInfo; auctions: Auction[] }>();
  expect(data.info).toBeDefined();
  expect(data.info).toBeInstanceOf(AuctionInfo);
  expectTypeOf(data.info).toEqualTypeOf<AuctionInfo>();
  expect(data.info.page).toBeDefined();
  expect(data.info.page).greaterThanOrEqual(0);
  expectTypeOf(data.info.page).toEqualTypeOf<number>();
  expect(data.info.totalPages).toBeDefined();
  expect(data.info.totalPages).greaterThanOrEqual(0);
  expectTypeOf(data.info.totalPages).toEqualTypeOf<number>();
  expect(data.info.totalAuctions).toBeDefined();
  expect(data.info.totalAuctions).greaterThanOrEqual(0);
  expectTypeOf(data.info.totalAuctions).toEqualTypeOf<number>();
  expect(data.info.lastUpdatedTimestamp).toBeDefined();
  expect(data.info.lastUpdatedTimestamp).greaterThanOrEqual(0);
  expectTypeOf(data.info.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.info.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.info.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.auctions).toBeDefined();
  expectTypeOf(data.auctions).toEqualTypeOf<Auction[]>();
  expect(data.auctions.length).greaterThanOrEqual(0);
  expectTypeOf(data.auctions.length).toEqualTypeOf<number>();
  data.auctions.forEach((auction: Auction) => {
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
