import ArticleCard from '@/components/article/ArticleCard';
import type { Article } from '@/lib/mockData';

interface LatestFeedProps {
  articles: Article[];
  topArticles: Article[];
}

export default function LatestFeed({ articles, topArticles }: LatestFeedProps) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '65% 35%', gap: '40px', padding: '60px 0' }}>
      {/* Left: latest feed */}
      <div>
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>Latest</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {articles.map((article) => (
            <ArticleCard key={article.slug.current} article={article} size="medium" />
          ))}
        </div>
      </div>

      {/* Right: sticky sidebar */}
      <aside style={{ position: 'sticky', top: '80px', alignSelf: 'start' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#111111', marginBottom: '16px' }}>
          Top This Week
        </h3>
        <div>
          {topArticles.slice(0, 5).map((article) => (
            <ArticleCard key={article.slug.current} article={article} size="list" />
          ))}
        </div>

        {/* Mini newsletter */}
        <div style={{ marginTop: '32px', backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.07)' }}>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>The Scent Report</h4>
          <p style={{ fontSize: '13px', color: '#6B6460', marginBottom: '14px', lineHeight: 1.6 }}>Weekly fragrance picks in your inbox.</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input type="email" placeholder="your@email.com" style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #E0DDD8', fontSize: '14px', outline: 'none' }} />
            <button type="submit" style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#C9A84C', color: '#0F0D0A', fontSize: '13px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
              Subscribe Free
            </button>
          </form>
          <p style={{ fontSize: '11px', color: '#9A9590', textAlign: 'center', margin: '8px 0 0' }}>No spam. Unsubscribe anytime.</p>
        </div>
      </aside>
    </section>
  );
}
