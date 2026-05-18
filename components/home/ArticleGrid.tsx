import ArticleCard from '@/components/article/ArticleCard';
import type { Article } from '@/lib/mockData';

interface ArticleGridProps {
  articles: Article[];
  columns?: number;
  className?: string;
}

export default function ArticleGrid({ articles, className }: ArticleGridProps) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}
    >
      {articles.map((article) => (
        <ArticleCard key={article.slug.current} article={article} size="medium" />
      ))}
      <style>{`
        @media (max-width: 1024px) {
          .article-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .article-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
