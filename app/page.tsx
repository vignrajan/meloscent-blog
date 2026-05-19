'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES } from '@/lib/mockPerfumes';
import { ARTICLES } from '@/lib/mockArticles';
import { staggerContainer, cardEntry, scrollReveal } from '@/lib/motion';

const GENDER_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'unisex', label: 'Unisex' },
];

const TRENDING_NOTES = ['Oud', 'Sandalwood', 'Vanilla', 'Rose', 'Amber', 'Musk', 'Bergamot', 'Patchouli'];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  const filtered = activeFilter === 'all'
    ? PERFUMES
    : PERFUMES.filter((p) => p.gender === activeFilter);

  const featuredArticles = ARTICLES.slice(0, 4);
  const dupes = PERFUMES.filter((p) => p.dupeOf).slice(0, 4);

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>

        {/* Hero Search */}
        <section style={{
          background: 'linear-gradient(160deg, #0F0D0A 0%, #1C1A17 100%)',
          padding: '72px 24px 80px',
          textAlign: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '16px' }}>
              FRAGRANCE DISCOVERY
            </p>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 68px)',
              fontWeight: 500,
              color: '#F5F0E8',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              margin: '0 auto 24px',
              maxWidth: '720px',
            }}>
              Find your perfect<br /><span style={{ color: '#B8860B' }}>scent</span>
            </h1>
            <p style={{ fontSize: '16px', color: '#6B6460', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
              50 curated fragrances. Expert reviews. Budget dupes that actually smell the same.
            </p>

            <form onSubmit={handleSearch} style={{ maxWidth: '560px', margin: '0 auto 32px' }}>
              <div style={{ position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#6B6460', pointerEvents: 'none' }} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try &quot;oud for beginners&quot; or &quot;Chanel No.5&quot;..."
                  style={{
                    width: '100%',
                    padding: '18px 60px 18px 52px',
                    fontSize: '15px',
                    borderRadius: '100px',
                    border: '1.5px solid #2A2720',
                    backgroundColor: '#1C1A17',
                    color: '#F5F0E8',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
                    backgroundColor: '#B8860B', color: '#FFFFFF', border: 'none',
                    borderRadius: '100px', padding: '10px 20px', fontSize: '13px',
                    fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  Search
                </button>
              </div>
            </form>

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {TRENDING_NOTES.map((note) => (
                <Link
                  key={note}
                  href={`/notes/${note.toLowerCase()}`}
                  style={{
                    fontSize: '12px', padding: '5px 14px', borderRadius: '100px',
                    border: '1px solid #2A2720', color: '#9A9590',
                    textDecoration: 'none', backgroundColor: 'transparent',
                    transition: 'all 150ms',
                  }}
                >
                  {note}
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Popular Perfumes */}
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111111', margin: 0, letterSpacing: '-0.02em' }}>
              Popular perfumes
            </h2>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {GENDER_FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  style={{
                    fontSize: '13px', fontWeight: 500, padding: '6px 16px',
                    borderRadius: '100px', border: '1.5px solid',
                    borderColor: activeFilter === f.value ? '#111111' : '#E5E7EB',
                    backgroundColor: activeFilter === f.value ? '#111111' : 'transparent',
                    color: activeFilter === f.value ? '#FFFFFF' : '#374151',
                    cursor: 'pointer', transition: 'all 150ms',
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}
            className="grid-4col"
          >
            {filtered.slice(0, 8).map((perfume) => (
              <motion.div key={perfume.slug} variants={cardEntry}>
                <PerfumeCard perfume={perfume} />
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/perfumes"
              style={{
                display: 'inline-block', padding: '12px 32px', borderRadius: '100px',
                border: '1.5px solid #E5E7EB', fontSize: '14px', fontWeight: 500,
                color: '#374151', textDecoration: 'none', backgroundColor: 'transparent',
              }}
            >
              Browse all {PERFUMES.length} perfumes →
            </Link>
          </div>
        </section>

        {/* Dupe Spotlight */}
        {dupes.length > 0 && (
          <section style={{ backgroundColor: '#111111', padding: '56px 0' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '6px' }}>DUPES</p>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#F5F0E8', margin: 0, letterSpacing: '-0.02em' }}>Same scent, fraction of the price</h2>
                </div>
                <Link href="/perfumes?tag=dupe" style={{ fontSize: '13px', color: '#6B6460', textDecoration: 'none', fontWeight: 500 }}>View all →</Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="grid-4col">
                {dupes.map((perfume) => (
                  <Link key={perfume.slug} href={`/perfume/${perfume.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      backgroundColor: '#1C1A17', borderRadius: '12px', padding: '20px',
                      border: '1px solid #2A2720',
                    }}>
                      <div style={{
                        fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: '#B8860B', marginBottom: '8px',
                      }}>
                        DUPE FOR
                      </div>
                      <p style={{ fontSize: '12px', color: '#6B6460', marginBottom: '12px', margin: '0 0 12px' }}>{perfume.dupeOf}</p>
                      <p style={{ fontSize: '16px', fontWeight: 700, color: '#F5F0E8', marginBottom: '4px', margin: '0 0 4px' }}>{perfume.name}</p>
                      <p style={{ fontSize: '12px', color: '#9A9590', margin: '0 0 12px' }}>{perfume.brand}</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '18px', fontWeight: 700, color: '#B8860B' }}>${perfume.price}</span>
                        <span style={{ fontSize: '12px', color: '#6B6460' }}>vs $300+</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Magazine Section */}
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '56px 24px 80px' }}>
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111111', margin: 0, letterSpacing: '-0.02em' }}>
                From the magazine
              </h2>
              <Link href="/guides" style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none', fontWeight: 500 }}>View all →</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-2col">
              {/* Featured large */}
              <Link href={`/${featuredArticles[0].category.toLowerCase()}/${featuredArticles[0].slug}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  borderRadius: '16px', overflow: 'hidden', backgroundColor: '#FFFFFF',
                  border: '1px solid #E8E4DE', height: '100%',
                }}>
                  <div style={{
                    height: '240px', backgroundImage: `url(${featuredArticles[0].image})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                  }} />
                  <div style={{ padding: '24px' }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: '#B8860B',
                    }}>
                      {featuredArticles[0].category}
                    </span>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111111', margin: '8px 0 12px', letterSpacing: '-0.015em', lineHeight: 1.3 }}>
                      {featuredArticles[0].title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6B6460', lineHeight: 1.6, margin: 0 }}>
                      {featuredArticles[0].excerpt}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Smaller articles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {featuredArticles.slice(1).map((article) => (
                  <Link key={article.slug} href={`/${article.category.toLowerCase()}/${article.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      display: 'flex', gap: '16px', backgroundColor: '#FFFFFF',
                      borderRadius: '12px', padding: '16px', border: '1px solid #E8E4DE',
                    }}>
                      <div style={{
                        width: '80px', height: '80px', borderRadius: '8px', flexShrink: 0,
                        backgroundImage: `url(${article.image})`, backgroundSize: 'cover', backgroundPosition: 'center',
                      }} />
                      <div>
                        <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8860B' }}>
                          {article.category}
                        </span>
                        <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#111111', margin: '4px 0 6px', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                          {article.title}
                        </h3>
                        <span style={{ fontSize: '12px', color: '#9A9590' }}>{article.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
