'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ARTICLES } from '@/lib/mockArticles';
import { staggerContainer, cardEntry, scrollReveal } from '@/lib/motion';

const CATEGORY_FILTERS = ['All', 'Reviews', 'Guides', 'Dupes', 'Tips', 'Seasonal', 'Education'];

const CATEGORY_COLORS: Record<string, string> = {
  Reviews: '#FEE2E2',
  Guides: '#DBEAFE',
  Dupes: '#D1FAE5',
  Tips: '#DCFCE7',
  Seasonal: '#FEF3C7',
  Education: '#FEF9C3',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.slug !== featured.slug);

  const filtered = activeCategory === 'All'
    ? rest
    : rest.filter((a) => a.category === activeCategory);

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: '#F7F4F0' }}>

        {/* Page header */}
        <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8E4DE', padding: '40px 24px 36px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '10px' }}>
              THE MAGAZINE
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: '0 0 12px', letterSpacing: '-0.03em' }}>
              Fragrance stories, reviews & guides
            </h1>
            <p style={{ fontSize: '16px', color: '#6B6460', margin: 0, maxWidth: '560px', lineHeight: 1.6 }}>
              Expert writing on the world of fine fragrance — from deep-dive reviews to buying guides and trend reports.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px 80px' }}>

          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E8E4DE',
                marginBottom: '48px',
                minHeight: '380px',
              }}
              className="hero-card"
              >
                <div style={{
                  backgroundImage: `url(${featured.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '320px',
                }} />
                <div style={{ padding: '40px 40px 40px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#B8860B',
                      backgroundColor: '#FEF9C3', padding: '3px 10px', borderRadius: '100px',
                    }}>
                      Featured
                    </span>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: '#6B6460',
                    }}>
                      {featured.category}
                    </span>
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, color: '#111111',
                    margin: '0 0 16px', letterSpacing: '-0.025em', lineHeight: 1.25,
                  }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#6B6460', lineHeight: 1.65, margin: '0 0 24px' }}>
                    {featured.excerpt}
                  </p>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <img
                      src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face&q=80`}
                      alt={featured.author}
                      style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: '#111111', margin: 0 }}>{featured.author}</p>
                      <p style={{ fontSize: '11px', color: '#9A9590', margin: 0 }}>{formatDate(featured.date)} · {featured.readTime} min read</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontSize: '13px', fontWeight: 500, padding: '7px 18px',
                  borderRadius: '100px', border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#111111' : '#E5E7EB',
                  backgroundColor: activeCategory === cat ? '#111111' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : '#374151',
                  cursor: 'pointer', transition: 'all 150ms',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article grid */}
          {filtered.length === 0 ? (
            <p style={{ fontSize: '15px', color: '#9A9590', padding: '48px 0' }}>No articles in this category yet.</p>
          ) : (
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
              }}
              className="grid-3col"
            >
              {filtered.map((article) => (
                <motion.div key={article.slug} variants={cardEntry}>
                  <Link href={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
                    <article style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid #E8E4DE',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'box-shadow 200ms, transform 200ms',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                    >
                      <div style={{
                        height: '200px',
                        backgroundImage: `url(${article.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0,
                      }} />
                      <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                          <span style={{
                            fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                            textTransform: 'uppercase', color: '#B8860B',
                            backgroundColor: CATEGORY_COLORS[article.category] ?? '#F7F4F0',
                            padding: '2px 8px', borderRadius: '100px',
                          }}>
                            {article.category}
                          </span>
                        </div>
                        <h3 style={{
                          fontSize: '17px', fontWeight: 700, color: '#111111',
                          margin: '0 0 10px', letterSpacing: '-0.015em', lineHeight: 1.35, flex: 1,
                        }}>
                          {article.title}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#6B6460', lineHeight: 1.6, margin: '0 0 16px' }}>
                          {article.excerpt.slice(0, 100)}…
                        </p>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <span style={{ fontSize: '12px', fontWeight: 500, color: '#374151' }}>{article.author}</span>
                          <span style={{ fontSize: '12px', color: '#D1D5DB' }}>·</span>
                          <span style={{ fontSize: '12px', color: '#9A9590' }}>{article.readTime} min</span>
                        </div>
                      </div>
                    </article>
                  </Link>
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
