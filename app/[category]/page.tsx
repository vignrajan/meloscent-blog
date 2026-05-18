import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleGrid from '@/components/home/ArticleGrid';
import CategoryFilterBar from '@/components/home/CategoryFilterBar';
import { CATEGORIES, getArticlesByCategory, getCategoryBySlug } from '@/lib/mockData';

export const revalidate = 3600;

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug.current }));
}

interface Props {
  params: { category: string };
}

const CATEGORY_COLORS: Record<string, string> = {
  news: '#FEE2E2',
  dupes: '#D1FAE5',
  celebrity: '#EDE9FE',
  arabic: '#FEF3C7',
  niche: '#DBEAFE',
  seasonal: '#DCFCE7',
  tiktok: '#FFE4E6',
  luxury: '#FEF9C3',
};

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const articles = getArticlesByCategory(params.category);
  const bgTint = CATEGORY_COLORS[params.category] ?? '#F5F2EE';

  return (
    <>
      <Header />
      <div style={{ backgroundColor: bgTint, paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-0.02em', color: '#111111', margin: '0 0 12px' }}>
            {category.name}
          </h1>
          <p style={{ fontSize: '16px', color: '#6B6460', margin: 0, maxWidth: '600px' }}>{category.description}</p>
        </div>
      </div>
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
        <CategoryFilterBar active={params.category} />
        <div style={{ marginTop: '24px' }}>
          {articles.length > 0 ? (
            <ArticleGrid articles={articles} columns={3} />
          ) : (
            <p style={{ fontSize: '16px', color: '#6B6460', padding: '48px 0' }}>No articles yet in this category.</p>
          )}
        </div>
        {articles.length >= 9 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button style={{ padding: '12px 32px', border: '1.5px solid #E0DDD8', borderRadius: '6px', backgroundColor: 'white', fontSize: '14px', fontWeight: 500, cursor: 'pointer', color: '#111111' }}>
              Load More
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
