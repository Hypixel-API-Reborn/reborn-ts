import NodeCache from 'node-cache';
const cache = new NodeCache();
import axios from 'axios';

export default async (url: string, query: string, cacheTime: number) => {
  if (cache.has(query.toLowerCase())) return cache.get(query.toLowerCase());
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
};
