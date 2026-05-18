'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES, ALL_ACCORDS, type Perfume } from '@/lib/perfumeData';

const GENDER_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'unisex', label: 'Unisex' },
  { value: 'oud', label: 'Oud' },
];

function PerfumesInner() {
  const searchParams = useSearchParams();
  const urlGender = searchParams.get('gender') ?? '';

  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [gender, setGender] = useState(urlGender || 'all');
  const [accord, setAccord] = useState('');
  const [price, setPrice] = useState('');

  const filtered = useMemo(() => {
    let results: Perfume[] = [...PERFUMES];

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.notes.top.some((n) => n.toLowerCase().includes(q)) ||
        p.notes.heart.some((n) => n.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (gender !== 'all' && gender !== 'oud') {
      results = results.filter((p) => p.gender === gender);
    }
    if (gender === 'oud') {
      results = results.filter((p) => p.mainAccord === 'Oud' || p.tags.includes('Oud'));
    }
    if (accord) results = results.filter((p) => p.mainAccord === accord);
    if (price) results = results.filter((p) => p.priceRange === price);

    return results;
  }, [query, gender, accord, price]);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>

          {/* Heading + filter pills */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', margin: 0, letterSpacing: '-0.02em' }}>
              Popular perfumes
            </h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {GENDER_FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setGender(f.value)}
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    padding: '6px 16px',
                    borderRadius: '100px',
                    border: '1.5px solid',
                    borderColor: gender === f.value ? '#111111' : '#E5E7EB',
                    backgroundColor: gender === f.value ? '#111111' : '#FFFFFF',
                    color: gender === f.value ? '#FFFFFF' : '#374151',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search + accord + price row */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, brand, or note…"
              style={{
                flex: 1,
                minWidth: '200px',
                maxWidth: '360px',
                padding: '9px 16px',
                fontSize: '14px',
                borderRadius: '100px',
                border: '1.5px solid #E5E7EB',
                backgroundColor: '#FAFAFA',
                color: '#111111',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <select
              value={accord}
              onChange={(e) => setAccord(e.target.value)}
              style={{
                padding: '9px 14px',
                fontSize: '13px',
                borderRadius: '100px',
                border: '1.5px solid #E5E7EB',
                backgroundColor: '#FAFAFA',
                color: accord ? '#111111' : '#6B7280',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="">All accords</option>
              {ALL_ACCORDS.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
            {(['$', '$$', '$$$', '$$$$'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPrice(price === p ? '' : p)}
                style={{
                  padding: '8px 14px',
                  fontSize: '13px',
                  borderRadius: '100px',
                  border: '1.5px solid',
                  borderColor: price === p ? '#111111' : '#E5E7EB',
                  backgroundColor: price === p ? '#111111' : '#FFFFFF',
                  color: price === p ? '#FFFFFF' : '#6B7280',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'all 150ms ease',
                }}
              >
                {p}
              </button>
            ))}
            {(query || gender !== 'all' || accord || price) && (
              <button
                onClick={() => { setQuery(''); setGender('all'); setAccord(''); setPrice(''); }}
                style={{ fontSize: '13px', color: '#9CA3AF', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
              >
                Clear ×
              </button>
            )}
          </div>

          {/* Results count */}
          <p style={{ fontSize: '13px', color: '#9CA3AF', marginBottom: '20px' }}>
            {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#6B7280' }}>
              <p style={{ fontSize: '18px' }}>No fragrances match your filters.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {filtered.map((perfume) => (
                <PerfumeCard key={perfume.slug} perfume={perfume} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function PerfumesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }} />}>
      <PerfumesInner />
    </Suspense>
  );
}
