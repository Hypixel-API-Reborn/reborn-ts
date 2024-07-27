import NodeCache from 'node-cache';
const cache = new NodeCache();
import axios from 'axios';

export interface CacheData {
  status: number;
  id: string | null;
  name: string | null;
}

export default async function (url: string, query: string, cacheTime: number): Promise<CacheData> {
  if (cache.has(query.toLowerCase())) return cache.get(query.toLowerCase()) as CacheData;
  const res = await axios.get(url);
  const data = await res.data.json();
  // Don't cache 4xx
  if (400 <= res.status) {
    return {
      status: res.status,
      id: null,
      name: null
    };
  }

  cache.set(query.toLowerCase(), { status: res.status, id: data.id, name: data.name }, cacheTime);
  cache.set(data.id.toLowerCase(), { status: res.status, id: data.id, name: data.name }, cacheTime);

  return {
    status: res.status,
    id: data.id,
    name: data.name
  };
}
