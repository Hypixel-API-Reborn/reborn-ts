import GameChallenges, { ChallengeData } from '../structures/Static/GameChallenges';
import Challenges from '../structures/Static/Challenges';
import { expect, expectTypeOf, test } from 'vitest';
import { StaticGameNames } from '../typings';
import Client from '../Client';

test('getChallenges', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getChallenges();

  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Challenges);
  expectTypeOf(data).toEqualTypeOf<Challenges>();

  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThan(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();

  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();

  expect(data.challengesPerGame).toBeDefined();
  expectTypeOf(data.challengesPerGame).toEqualTypeOf<Record<StaticGameNames, GameChallenges>>();

  Object.keys(data.challengesPerGame).forEach((game) => {
    expect(data.challengesPerGame[game]).toBeDefined();
    expect(data.challengesPerGame[game]).toBeInstanceOf(GameChallenges);
    expectTypeOf(data.challengesPerGame[game]).toEqualTypeOf<GameChallenges>();

    expect(data.challengesPerGame[game].category).toBeDefined();
    expect(data.challengesPerGame[game].category).toEqual(game);

    expect(data.challengesPerGame[game].challenges).toBeDefined();
    expectTypeOf(data.challengesPerGame[game].challenges).toEqualTypeOf<Map<string, ChallengeData>>();

    data.challengesPerGame[game].challenges.forEach((challenge: ChallengeData) => {
      expect(challenge).toBeDefined();
      expectTypeOf(challenge).toEqualTypeOf<ChallengeData>();

      expect(challenge.id).toBeDefined();
      expectTypeOf(challenge.id).toEqualTypeOf<string>();

      expect(challenge.name).toBeDefined();
      expectTypeOf(challenge.name).toEqualTypeOf<string>();

      expect(challenge.reward).toBeDefined();
      expectTypeOf(challenge.reward).toEqualTypeOf<number>();

      expect(challenge.rewardType).toBeDefined();
      expectTypeOf(challenge.rewardType).toEqualTypeOf<string>();
    });
  });

  client.destroy();
});
