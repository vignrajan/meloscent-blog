import ArticleCard from '@/components/article/ArticleCard';
import type { Article } from '@/lib/mockData';

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles.length) return null;

  return (
    <section style={{ margin: '48px 0' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111111', marginBottom: '20px' }}>Related Articles</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.slug.current} article={article} size="small" />
        ))}
      </div>
    </section>
  );
}
