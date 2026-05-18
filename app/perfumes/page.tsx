'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES, ALL_ACCORDS, Perfume } from '@/lib/perfumeData';

function PerfumesPageInner() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';

  const [query, setQuery] = useState(initialQuery);
  const [gender, setGender] = useState<string>('all');
  const [accord, setAccord] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [sort, setSort] = useState<string>('az');

  const filtered = useMemo(() => {
    let results: Perfume[] = [...PERFUMES];

    // Search
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.accords.some((a) => a.name.toLowerCase().includes(q)) ||
          p.notes.top.some((n) => n.toLowerCase().includes(q)) ||
          p.notes.heart.some((n) => n.toLowerCase().includes(q)) ||
          p.notes.base.some((n) => n.toLowerCase().includes(q)) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    // Gender filter
    if (gender !== 'all') {
      results = results.filter((p) => p.gender === gender);
    }

    // Accord filter
    if (accord) {
      results = results.filter((p) => p.mainAccord === accord);
    }

    // Price filter
    if (price) {
      results = results.filter((p) => p.priceRange === price);
    }

    // Sort
    switch (sort) {
      case 'az':
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        results.sort((a, b) => b.year - a.year);
        break;
      case 'price_asc':
        results.sort((a, b) => a.priceRange.length - b.priceRange.length);
        break;
      case 'price_desc':
        results.sort((a, b) => b.priceRange.length - a.priceRange.length);
        break;
    }

    return results;
  }, [query, gender, accord, price, sort]);

  const genderOptions = [
    { value: 'all', label: 'All' },
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'unisex', label: 'Unisex' },
  ];

  const priceOptions = ['$', '$$', '$$$', '$$$$'];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section
        style={{
          backgroundColor: '#0F0D0A',
          paddingTop: '100px',
          paddingBottom: '60px',
          textAlign: 'center',
          marginTop: '60px',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
          <h1
            style={{
              fontSize: '42px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '8px',
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: '#C9A84C' }}>Perfume</span>{' '}
            <span style={{ color: '#F5F0E8' }}>Database</span>
          </h1>
          <p style={{ fontSize: '15px', color: '#9A9590', marginBottom: '28px', letterSpacing: '0.02em' }}>
            {PERFUMES.length.toLocaleString()} fragrances reviewed and catalogued
          </p>

          {/* Search input */}
          <div style={{ position: 'relative', maxWidth: '560px', margin: '0 auto' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, brand, or note..."
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '15px',
                borderRadius: '8px',
                border: '1px solid rgba(201,168,76,0.3)',
                backgroundColor: 'rgba(245,240,232,0.05)',
                color: '#F5F0E8',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E8E4DE',
          padding: '12px 0',
          position: 'sticky',
          top: '60px',
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Gender toggles */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {genderOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setGender(opt.value)}
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '5px 14px',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: gender === opt.value ? '#C9A84C' : '#E8E4DE',
                  backgroundColor: gender === opt.value ? '#C9A84C' : 'transparent',
                  color: gender === opt.value ? '#0F0D0A' : '#666',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <span style={{ color: '#E8E4DE', fontSize: '16px' }}>|</span>

          {/* Accord select */}
          <select
            value={accord}
            onChange={(e) => setAccord(e.target.value)}
            style={{
              fontSize: '12px',
              padding: '5px 12px',
              borderRadius: '20px',
              border: '1px solid #E8E4DE',
              backgroundColor: accord ? '#F5F2EE' : 'transparent',
              color: '#555',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="">All Accords</option>
            {ALL_ACCORDS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>

          {/* Price toggles */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {priceOptions.map((p) => (
              <button
                key={p}
                onClick={() => setPrice(price === p ? '' : p)}
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '5px 10px',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: price === p ? '#C9A84C' : '#E8E4DE',
                  backgroundColor: price === p ? '#C9A84C' : 'transparent',
                  color: price === p ? '#0F0D0A' : '#666',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  letterSpacing: '0.02em',
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Divider */}
          <span style={{ color: '#E8E4DE', fontSize: '16px' }}>|</span>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              fontSize: '12px',
              padding: '5px 12px',
              borderRadius: '20px',
              border: '1px solid #E8E4DE',
              backgroundColor: 'transparent',
              color: '#555',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="az">A–Z</option>
            <option value="newest">Newest</option>
            <option value="price_asc">Price ↑</option>
            <option value="price_desc">Price ↓</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '32px 24px 64px',
          backgroundColor: '#F5F2EE',
          minHeight: '60vh',
        }}
      >
        {/* Count */}
        <p
          style={{
            fontSize: '13px',
            color: '#9A9590',
            marginBottom: '20px',
          }}
        >
          {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'} found
        </p>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontSize: '18px', color: '#9A9590' }}>No fragrances match your search.</p>
            <button
              onClick={() => { setQuery(''); setGender('all'); setAccord(''); setPrice(''); }}
              style={{
                marginTop: '16px',
                padding: '10px 24px',
                borderRadius: '6px',
                backgroundColor: '#C9A84C',
                color: '#0F0D0A',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {filtered.map((perfume) => (
              <PerfumeCard key={perfume.slug} perfume={perfume} size="medium" />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default function PerfumesPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#F5F2EE' }} />}>
      <PerfumesPageInner />
    </Suspense>
  );
}
