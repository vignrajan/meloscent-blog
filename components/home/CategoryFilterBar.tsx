'use client';

import { useState } from 'react';
import CategoryPill from '@/components/ui/CategoryPill';

const FILTERS = [
  { slug: 'all', name: 'All' },
  { slug: 'news', name: 'News' },
  { slug: 'dupes', name: 'Dupes' },
  { slug: 'celebrity', name: 'Celebrity' },
  { slug: 'arabic', name: 'Arabic' },
  { slug: 'niche', name: 'Niche' },
  { slug: 'seasonal', name: 'Seasonal' },
  { slug: 'tiktok', name: 'TikTok' },
  { slug: 'luxury', name: 'Luxury' },
];

interface CategoryFilterBarProps {
  active?: string;
  onChange?: (slug: string) => void;
}

export default function CategoryFilterBar({ active: externalActive, onChange }: CategoryFilterBarProps) {
  const [internalActive, setInternalActive] = useState('all');
  const active = externalActive ?? internalActive;

  function handleClick(slug: string) {
    setInternalActive(slug);
    onChange?.(slug);
  }

  return (
    <div style={{
      display: 'flex',
      gap: '8px',
      overflowX: 'auto',
      paddingBottom: '4px',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}>
      {FILTERS.map((f) => (
        <CategoryPill
          key={f.slug}
          slug={f.slug}
          name={f.name}
          active={active === f.slug}
          onClick={() => handleClick(f.slug)}
        />
      ))}
    </div>
  );
}
