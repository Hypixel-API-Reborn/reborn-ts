import { expect, expectTypeOf, test } from 'vitest';
import { version } from '../../package.json';
import Updater from './Updater';
import Client from '../Client';

test('Updater', () => {
  const client = new Client(process.env.key ?? '');
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.updater).toBeDefined();
  expectTypeOf(client.updater).toEqualTypeOf<Updater>();

  expect(client.updater.currentVersion).toBe(version);
  expect(client.updater.latestVersion).toBe('0.0.0');

  expect(client.updater.checkForUpdates).toBeDefined();
  expectTypeOf(client.updater.checkForUpdates).toBeFunction();
  expect(() => client.updater.checkForUpdates()).not.toThrow();

  expect(client.updater.getLatestVersion).toBeDefined();
  expectTypeOf(client.updater.getLatestVersion).toBeFunction();
  expect(() => client.updater.getLatestVersion()).not.toThrow();

  expect(client.updater.compareVersions).toBeDefined();
  expectTypeOf(client.updater.compareVersions).toBeFunction();
  expect(() => client.updater.compareVersions('1.0.0', '1.0.0')).not.toThrow();
  expect(client.updater.compareVersions('1.0.0', '1.0.0')).toBe(false);
  expect(client.updater.compareVersions('1.0.0', '1.0.1')).toBe(true);
  expect(client.updater.compareVersions('1.0.1', '1.0.0')).toBe(false);

  client.destroy();
});
