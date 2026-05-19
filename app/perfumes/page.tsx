'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES } from '@/lib/mockPerfumes';
import { searchPerfumes } from '@/lib/search';
import { staggerContainer, cardEntry } from '@/lib/motion';

const GENDER_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'unisex', label: 'Unisex' },
];

const CONCENTRATIONS = ['EDP', 'EDT', 'Parfum', 'EDC', 'Cologne'];

function PerfumesInner() {
  const searchParams = useSearchParams();
  const urlGender = searchParams.get('gender') ?? '';
  const urlTag = searchParams.get('tag') ?? '';

  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [gender, setGender] = useState(urlGender || 'all');
  const [concentration, setConcentration] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('rating');

  const filtered = useMemo(() => {
    let results = searchPerfumes(query, {
      gender: gender !== 'all' ? gender : undefined,
      concentration: concentration || undefined,
    });

    if (urlTag === 'dupe') {
      results = results.filter((p) => p.dupeOf);
    }

    if (sortBy === 'price-asc') results = [...results].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') results = [...results].sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') results = [...results].sort((a, b) => b.ratings.overall - a.ratings.overall);

    return results;
  }, [query, gender, concentration, urlTag, sortBy]);

  const hasFilters = query || gender !== 'all' || concentration;

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>

          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
              {urlTag === 'dupe' ? 'Fragrance Dupes' : 'Perfume Finder'}
            </h1>
            <p style={{ fontSize: '14px', color: '#9A9590', margin: 0 }}>
              {urlTag === 'dupe'
                ? 'Budget alternatives that actually smell the same'
                : `${PERFUMES.length} fragrances — find yours`}
            </p>
          </div>

          {/* Filters row */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, brand, note…"
              style={{
                flex: 1, minWidth: '200px', maxWidth: '320px',
                padding: '9px 16px', fontSize: '14px',
                borderRadius: '100px', border: '1.5px solid #E8E4DE',
                backgroundColor: '#FFFFFF', color: '#111111', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            {GENDER_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setGender(f.value)}
                style={{
                  fontSize: '13px', fontWeight: 500, padding: '8px 16px',
                  borderRadius: '100px', border: '1.5px solid',
                  borderColor: gender === f.value ? '#111111' : '#E8E4DE',
                  backgroundColor: gender === f.value ? '#111111' : 'transparent',
                  color: gender === f.value ? '#FFFFFF' : '#374151',
                  cursor: 'pointer', transition: 'all 150ms',
                }}
              >
                {f.label}
              </button>
            ))}
            <select
              value={concentration}
              onChange={(e) => setConcentration(e.target.value)}
              style={{
                padding: '8px 14px', fontSize: '13px',
                borderRadius: '100px', border: '1.5px solid #E8E4DE',
                backgroundColor: 'transparent', color: concentration ? '#111111' : '#6B7280',
                cursor: 'pointer', outline: 'none',
              }}
            >
              <option value="">Concentration</option>
              {CONCENTRATIONS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              style={{
                padding: '8px 14px', fontSize: '13px',
                borderRadius: '100px', border: '1.5px solid #E8E4DE',
                backgroundColor: 'transparent', color: '#374151',
                cursor: 'pointer', outline: 'none',
              }}
            >
              <option value="rating">Top Rated</option>
              <option value="price-asc">Price: Low–High</option>
              <option value="price-desc">Price: High–Low</option>
              <option value="default">Default</option>
            </select>
            {hasFilters && (
              <button
                onClick={() => { setQuery(''); setGender('all'); setConcentration(''); }}
                style={{ fontSize: '13px', color: '#9A9590', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
              >
                Clear ×
              </button>
            )}
          </div>

          <p style={{ fontSize: '13px', color: '#9A9590', marginBottom: '24px' }}>
            {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#6B7280' }}>
              <p style={{ fontSize: '18px' }}>No fragrances match your filters.</p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
              className="grid-4col"
            >
              {filtered.map((perfume) => (
                <motion.div key={perfume.slug} variants={cardEntry}>
                  <PerfumeCard perfume={perfume} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function PerfumesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <PerfumesInner />
    </Suspense>
  );
}
