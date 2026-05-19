import Fuse from 'fuse.js';
import { PERFUMES, Perfume } from './mockPerfumes';

const fuse = new Fuse(PERFUMES, {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'brand', weight: 0.25 },
    { name: 'notes.top', weight: 0.1 },
    { name: 'notes.heart', weight: 0.1 },
    { name: 'notes.base', weight: 0.08 },
    { name: 'accords.name', weight: 0.07 },
  ],
  threshold: 0.35,
  includeScore: true,
});

export interface SearchFilters {
  gender?: string;
  occasion?: string;
  season?: string;
  minPrice?: number;
  maxPrice?: number;
  concentration?: string;
}

export function searchPerfumes(query: string, filters: SearchFilters = {}): Perfume[] {
  let results: Perfume[];

  if (query.trim()) {
    results = fuse.search(query).map((r) => r.item);
  } else {
    results = [...PERFUMES];
  }

  if (filters.gender && filters.gender !== 'all') {
    results = results.filter((p) =>
      p.gender === filters.gender || (filters.gender !== 'unisex' && p.gender === 'unisex')
    );
  }

  if (filters.occasion) {
    results = results.filter((p) => p.occasions.includes(filters.occasion!));
  }

  if (filters.season) {
    results = results.filter((p) =>
      p.seasons.some((s) => s.toLowerCase() === filters.season!.toLowerCase())
    );
  }

  if (filters.minPrice !== undefined) {
    results = results.filter((p) => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    results = results.filter((p) => p.price <= filters.maxPrice!);
  }

  if (filters.concentration) {
    results = results.filter((p) => p.concentration === filters.concentration);
  }

  return results;
}
