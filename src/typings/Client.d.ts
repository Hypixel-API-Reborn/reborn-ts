export interface ClientOptions {
  cache?: boolean;
  cacheTime?: number;
  cacheMaxKeys?: number;
  cacheCheckPeriod?: number;
  rateLimit?: 'AUTO' | 'HARD' | 'NONE';
  silent?: boolean;
  checkForUpdates?: boolean;
  checkForUpdatesInterval?: number;
}
