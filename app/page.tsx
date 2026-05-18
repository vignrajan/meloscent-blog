'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import ArticleCard from '@/components/article/ArticleCard';
import { PERFUMES } from '@/lib/perfumeData';
import { getRecentArticles } from '@/lib/mockData';

const GENDER_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'unisex', label: 'Oud' },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const recentArticles = getRecentArticles(4);

  const filtered = activeFilter === 'all'
    ? PERFUMES
    : PERFUMES.filter((p) => p.gender === activeFilter);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', margin: 0, letterSpacing: '-0.02em' }}>
              Popular perfumes
            </h1>
            <div style={{ display: 'flex', gap: '8px' }}>
              {GENDER_FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    padding: '6px 16px',
                    borderRadius: '100px',
                    border: '1.5px solid',
                    borderColor: activeFilter === f.value ? '#111111' : '#E5E7EB',
                    backgroundColor: activeFilter === f.value ? '#111111' : '#FFFFFF',
                    color: activeFilter === f.value ? '#FFFFFF' : '#374151',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Perfume grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '64px' }}>
            {filtered.slice(0, 8).map((perfume) => (
              <PerfumeCard key={perfume.slug} perfume={perfume} />
            ))}
          </div>

          {filtered.length > 8 && (
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <a
                href="/perfumes"
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  borderRadius: '100px',
                  border: '1.5px solid #E5E7EB',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#374151',
                  textDecoration: 'none',
                }}
              >
                Browse all {PERFUMES.length} perfumes →
              </a>
            </div>
          )}

          {/* Latest articles */}
          <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', margin: 0, letterSpacing: '-0.015em' }}>
                Latest from the journal
              </h2>
              <a href="/news" style={{ fontSize: '14px', color: '#6B7280', textDecoration: 'none', fontWeight: 500 }}>
                View all →
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {recentArticles.map((article) => (
                <ArticleCard key={article.slug.current} article={article} size="medium" />
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
