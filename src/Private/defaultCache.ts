import type { CacheHandler } from '../typings';

class Cache implements CacheHandler {
  storage: Map<string, unknown>;
  constructor() {
    this.storage = new Map();
  }

  set(key: string, value: any): void {
    this.storage.set(key, value);
  }

  get(key: string): any {
    return this.storage.get(key);
  }

  has(key: string): boolean {
    return this.storage.has(key);
  }

  delete(key: string): boolean {
    return this.storage.delete(key);
  }

  keys(): string[] {
    return Array.from(this.storage.keys());
  }

  size(): number {
    return this.storage.size;
  }

  clear(): void {
    this.storage.clear();
  }
}

export default Cache;
