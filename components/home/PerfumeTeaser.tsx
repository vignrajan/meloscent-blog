'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES } from '@/lib/perfumeData';

const FEATURED = PERFUMES.slice(0, 4);

export default function PerfumeTeaser() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/perfumes?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push('/perfumes');
    }
  }

  return (
    <section style={{ backgroundColor: '#F5F2EE', padding: '64px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#111111',
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}
          >
            Explore the{' '}
            <span style={{ color: '#C9A84C' }}>Perfume Database</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#9A9590', marginBottom: '24px' }}>
            {PERFUMES.length} fragrances with notes, accords, ratings, and more
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            style={{
              display: 'flex',
              maxWidth: '480px',
              margin: '0 auto',
              gap: '0',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #E8E4DE',
              backgroundColor: '#FFFFFF',
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search perfumes, notes, brands..."
              style={{
                flex: 1,
                padding: '12px 16px',
                fontSize: '14px',
                border: 'none',
                outline: 'none',
                color: '#111',
                backgroundColor: 'transparent',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '12px 20px',
                backgroundColor: '#C9A84C',
                color: '#0F0D0A',
                fontWeight: 600,
                fontSize: '13px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                letterSpacing: '0.02em',
              }}
            >
              Search
            </button>
          </form>
        </div>

        {/* Featured cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '28px',
          }}
        >
          {FEATURED.map((perfume) => (
            <PerfumeCard key={perfume.slug} perfume={perfume} size="medium" />
          ))}
        </div>

        {/* CTA link */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/perfumes"
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#C9A84C',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              borderBottom: '1px solid rgba(201,168,76,0.4)',
              paddingBottom: '2px',
              transition: 'borderColor 150ms ease',
            }}
          >
            Browse All Perfumes →
          </Link>
        </div>
      </div>
    </section>
  );
}
