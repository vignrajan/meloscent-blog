'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { searchPerfumes } from '@/lib/search';
import { ARTICLES } from '@/lib/mockArticles';
import { staggerContainer, cardEntry } from '@/lib/motion';
import Link from 'next/link';

function SearchInner() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQ);
  const [tab, setTab] = useState<'perfumes' | 'articles'>('perfumes');

  const perfumeResults = useMemo(() => searchPerfumes(query), [query]);

  const articleResults = useMemo(() => {
    if (!query.trim()) return ARTICLES;
    const q = query.toLowerCase();
    return ARTICLES.filter((a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.includes(q))
    );
  }, [query]);

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>

          {/* Search header */}
          <div style={{ marginBottom: '32px' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search perfumes, brands, notes, articles..."
              autoFocus
              style={{
                width: '100%', maxWidth: '640px',
                padding: '16px 24px', fontSize: '18px',
                borderRadius: '100px', border: '2px solid #E8E4DE',
                backgroundColor: '#FFFFFF', color: '#111111', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            {query && (
              <p style={{ fontSize: '14px', color: '#9A9590', marginTop: '12px' }}>
                Showing results for &ldquo;<strong style={{ color: '#111111' }}>{query}</strong>&rdquo;
              </p>
            )}
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', borderBottom: '1px solid #E8E4DE', paddingBottom: '0' }}>
            {(['perfumes', 'articles'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontSize: '14px', fontWeight: 600, padding: '10px 20px',
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

          {/* Results */}
          {tab === 'perfumes' && (
            perfumeResults.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#9A9590' }}>
                <p style={{ fontSize: '18px' }}>No perfumes found for &ldquo;{query}&rdquo;</p>
                <Link href="/perfumes" style={{ color: '#B8860B', textDecoration: 'none', fontSize: '14px' }}>Browse all perfumes →</Link>
              </div>
            ) : (
              <motion.div
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
            )
          )}

          {tab === 'articles' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {articleResults.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.category.toLowerCase()}/${article.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    display: 'flex', gap: '20px', backgroundColor: '#FFFFFF',
                    borderRadius: '12px', padding: '20px', border: '1px solid #E8E4DE',
                  }}>
                    <div style={{
                      width: '100px', height: '80px', borderRadius: '8px', flexShrink: 0,
                      backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
                    }} />
                    <div>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {article.category}
                      </span>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111', margin: '4px 0 8px', lineHeight: 1.4 }}>
                        {article.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#9A9590', margin: 0, lineHeight: 1.5 }}>
                        {article.excerpt.slice(0, 120)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
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
