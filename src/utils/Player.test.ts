/* eslint-disable camelcase */
import { describe, expect, test } from 'vitest';
import {
  getPlayerLevel,
  getRank,
  getSocialMedia,
  levelToXP,
  parseClaimedRewards,
  playerLevelProgress,
  xpToNextLevel
} from '../utils/Player';

test('getRank', () => {
  expect(getRank({ prefix: '[EVENTS]' })).toBe('Events');
  expect(getRank({ prefix: '[MOJANG]' })).toBe('Mojang');
  expect(getRank({ prefix: '[PIG+++]' })).toBe('PIG+++');
  expect(getRank({ prefix: '[INNIT]' })).toBe('Innit');
  expect(getRank({ prefix: '[meow]' })).toBe('Default');

  expect(getRank({ rank: 'ADMIN' })).toBe('Admin');
  expect(getRank({ rank: 'GAME_MASTER' })).toBe('Game Master');
  expect(getRank({ rank: 'Meow' })).toBe('Default');

  expect(getRank({ newPackageRank: 'MVP_PLUS', monthlyPackageRank: 'SUPERSTAR' })).toBe('MVP++');
  expect(getRank({ newPackageRank: 'MVP_PLUS', monthlyPackageRank: 'Meow' })).toBe('MVP+');
  expect(getRank({ newPackageRank: 'MVP' })).toBe('MVP');
  expect(getRank({ newPackageRank: 'VIP_PLUS' })).toBe('VIP+');
  expect(getRank({ newPackageRank: 'VIP' })).toBe('VIP');
  expect(getRank({ newPackageRank: 'meow' })).toBe('Default');
});

test('getPlayerLevel', () => {
  describe('should calculate the player level correctly', () => {
    const exp = 10000;
    expect(getPlayerLevel(exp)).toBe(1);
  });
});

test('xpToNextLevel', () => {
  describe('should calculate the XP required for the next level correctly', () => {
    const xp = 10000;
    expect(xpToNextLevel(xp)).toBe(25000);
  });

  describe('should return 10000 if the XP is less than 10000', () => {
    const xp = 5000;
    expect(xpToNextLevel(xp)).toBe(10000);
  });
});

test('levelToXP', () => {
  describe('should calculate the XP required for a given level correctly', () => {
    const level = 2;
    expect(levelToXP(level)).toBe(20000);
  });
});

test('playerLevelProgress', () => {
  describe('should calculate the player level progress correctly', () => {
    const xp = 15000;
    const expectedProgress = {
      xpToNext: 37500,
      remainingXP: 22500,
      currentXP: 12500,
      percent: 33.33,
      percentRemaining: 66.67
    };
    expect(playerLevelProgress(xp)).toEqual(expectedProgress);
  });
});

test('getSocialMedia', () => {
  describe('should return the formatted social media links', () => {
    const data = {
      links: {
        TWITTER: 'https://twitter.com/example',
        YOUTUBE: 'https://youtube.com/example',
        INSTAGRAM: 'https://instagram.com/example'
      }
    };
    const expectedSocialMedia = [
      { name: 'Twitter', link: 'https://twitter.com/example', id: 'TWITTER' },
      { name: 'YouTube', link: 'https://youtube.com/example', id: 'YOUTUBE' },
      { name: 'Instagram', link: 'https://instagram.com/example', id: 'INSTAGRAM' }
    ];
    expect(getSocialMedia(data)).toEqual(expectedSocialMedia);
  });
});

test('parseClaimedRewards', () => {
  describe('should parse the claimed rewards correctly', () => {
    const data = {
      levelingReward_1: true,
      levelingReward_3: true,
      levelingReward_5: true
    };
    const expectedRewards = [1, 3, 5];
    expect(parseClaimedRewards(data)).toEqual(expectedRewards);
  });
});
