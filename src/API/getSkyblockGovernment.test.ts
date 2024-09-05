import Candidate from '../structures/SkyBlock/Static/Candidate';
import Client from '../Client';
import GovernmentData from '../structures/SkyBlock/Static/Government';
import Perk from '../structures/SkyBlock/Static/Perk';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockGovernment (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockGovernment({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getSkyblockGovernment', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockGovernment();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GovernmentData);
  expectTypeOf(data).toEqualTypeOf<GovernmentData>();

  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();

  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();

  expect(data.lastElectionResults).toBeDefined();
  expectTypeOf(data.lastElectionResults).toEqualTypeOf<Map<string, Candidate>>();
  data.lastElectionResults.forEach((candidate: Candidate) => {
    expect(candidate).toBeDefined();
    expect(candidate).toBeInstanceOf(Candidate);
    expectTypeOf(candidate).toEqualTypeOf<Candidate>();
    expect(candidate.name).toBeDefined();

    expectTypeOf(candidate.name).toEqualTypeOf<string>();

    expect(candidate.keyBenefit).toBeDefined();
    expectTypeOf(candidate.keyBenefit).toEqualTypeOf<string>();

    expect(candidate.perks).toBeDefined();
    expectTypeOf(candidate.perks).toEqualTypeOf<Perk[] | null>();

    expect(candidate.isMayor).toBeDefined();
    expectTypeOf(candidate.isMayor).toEqualTypeOf<boolean>();

    expect(candidate.votesReceived).toBeDefined();
    expectTypeOf(candidate.votesReceived).toEqualTypeOf<number>();

    expect(candidate.toString()).toBeDefined();
    expect(candidate.toString()).toBe(candidate.name);
    expectTypeOf(candidate.toString()).toEqualTypeOf<string>();
  });

  expect(data.mayor).toBeDefined();
  expectTypeOf(data.mayor).toEqualTypeOf<Candidate | undefined>();

  expect(data.runningYear).toBeDefined();
  expect(data.runningYear).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.runningYear).toEqualTypeOf<number>();

  expect(data.currentElectionResults).toBeDefined();
  expectTypeOf(data.currentElectionResults).toEqualTypeOf<Map<string, Candidate> | null>();

  expect(data.currentElectionFor).toBeDefined();
  expectTypeOf(data.currentElectionFor).toEqualTypeOf<number | null>();

  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.mayor?.name || '');
  expectTypeOf(data.toString()).toEqualTypeOf<string>();

  client.destroy();
});
