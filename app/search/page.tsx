'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { searchPerfumes } from '@/lib/search';
import { ARTICLES } from '@/lib/mockArticles';
import { PERFUMES } from '@/lib/mockPerfumes';
import { staggerContainer, cardEntry } from '@/lib/motion';
import Link from 'next/link';

function SearchInner() {
  const searchParams = useSearchParams();
  const urlQ = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(urlQ);
  const [tab, setTab] = useState<'perfumes' | 'articles'>('perfumes');

  useEffect(() => {
    setQuery(urlQ);
  }, [urlQ]);

  const perfumeResults = useMemo(() => {
    if (!query.trim()) return PERFUMES.slice(0, 12);
    return searchPerfumes(query);
  }, [query]);

  const articleResults = useMemo(() => {
    if (!query.trim()) return ARTICLES.slice(0, 6);
    const q = query.toLowerCase();
    return ARTICLES.filter((a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.includes(q))
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>

          {/* Search input */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', margin: '0 0 20px', letterSpacing: '-0.02em' }}>
              {hasQuery ? `Results for "${query}"` : 'Search Meloscent'}
            </h1>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search perfumes, brands, notes, articles..."
              autoFocus
              style={{
                width: '100%', maxWidth: '640px',
                padding: '14px 24px', fontSize: '16px',
                borderRadius: '100px', border: '2px solid #E8E4DE',
                backgroundColor: '#FFFFFF', color: '#111111', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '28px', borderBottom: '1px solid #E8E4DE' }}>
            {(['perfumes', 'articles'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontSize: '14px', fontWeight: 600, padding: '10px 24px',
                  border: 'none', background: 'none', cursor: 'pointer',
                  color: tab === t ? '#111111' : '#9A9590',
                  borderBottom: tab === t ? '2px solid #111111' : '2px solid transparent',
                  marginBottom: '-1px',
                  textTransform: 'capitalize',
                }}
              >
                {t} ({t === 'perfumes' ? perfumeResults.length : articleResults.length})
              </button>
            ))}
          </div>

          {/* Perfume results */}
          {tab === 'perfumes' && (
            perfumeResults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#9A9590' }}>
                <p style={{ fontSize: '18px', marginBottom: '12px' }}>No perfumes found for &ldquo;{query}&rdquo;</p>
                <Link href="/perfumes" style={{ color: '#B8860B', textDecoration: 'none', fontSize: '14px' }}>
                  Browse all 50 perfumes →
                </Link>
              </div>
            ) : (
              <>
                {!hasQuery && (
                  <p style={{ fontSize: '13px', color: '#9A9590', marginBottom: '20px' }}>
                    Showing popular perfumes — type to search
                  </p>
                )}
                <motion.div
                  key={query}
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
                  className="grid-4col"
                >
                  {perfumeResults.map((p) => (
                    <motion.div key={p.slug} variants={cardEntry}>
                      <PerfumeCard perfume={p} />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )
          )}

          {/* Article results */}
          {tab === 'articles' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {!hasQuery && (
                <p style={{ fontSize: '13px', color: '#9A9590', marginBottom: '8px' }}>
                  Recent articles — type to search
                </p>
              )}
              {articleResults.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: '#9A9590' }}>
                  <p style={{ fontSize: '18px' }}>No articles found for &ldquo;{query}&rdquo;</p>
                </div>
              ) : (
                articleResults.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/${article.category.toLowerCase()}/${article.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      display: 'flex', gap: '20px', backgroundColor: '#FFFFFF',
                      borderRadius: '12px', padding: '20px', border: '1px solid #E8E4DE',
                      transition: 'box-shadow 150ms',
                    }}>
                      <div style={{
                        width: '96px', height: '72px', borderRadius: '8px', flexShrink: 0,
                        backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                          {article.category}
                        </span>
                        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111', margin: '4px 0 8px', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                          {article.title}
                        </h3>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                          <span style={{ fontSize: '12px', color: '#9A9590' }}>{article.author}</span>
                          <span style={{ fontSize: '12px', color: '#9A9590' }}>·</span>
                          <span style={{ fontSize: '12px', color: '#9A9590' }}>{article.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <SearchInner />
    </Suspense>
  );
}
