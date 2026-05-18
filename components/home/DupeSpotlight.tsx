import Link from 'next/link';
import ArticleCard from '@/components/article/ArticleCard';
import type { Article } from '@/lib/mockData';

interface DupeSpotlightProps {
  articles: Article[];
}

export default function DupeSpotlight({ articles }: DupeSpotlightProps) {
  return (
    <section style={{ backgroundColor: '#111111', padding: '80px 0', margin: '0 -24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', margin: '0 0 12px' }}>
          Clone Hunters
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.025em', color: '#F5F0E8', margin: 0 }}>
            The Best Fragrance Dupes — Ranked
          </h2>
          <Link href="/dupes" style={{ color: '#C9A84C', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
            View All Dupes →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {articles.slice(0, 4).map((article) => (
            <div key={article.slug.current} style={{ backgroundColor: '#1E1E1E', borderRadius: '10px', overflow: 'hidden' }}>
              <ArticleCard article={article} size="large" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .dupe-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .dupe-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
