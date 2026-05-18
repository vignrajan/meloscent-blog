import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TrendingBar from '@/components/home/TrendingBar';
import CategoryFilterBar from '@/components/home/CategoryFilterBar';
import HeroCard from '@/components/home/HeroCard';
import ArticleGrid from '@/components/home/ArticleGrid';
import DupeSpotlight from '@/components/home/DupeSpotlight';
import LatestFeed from '@/components/home/LatestFeed';
import NewsletterBanner from '@/components/home/NewsletterBanner';
import PerfumeTeaser from '@/components/home/PerfumeTeaser';
import { ARTICLES, getFeaturedArticle, getRecentArticles, getArticlesByCategory } from '@/lib/mockData';

export const revalidate = 3600;

export default function HomePage() {
  const featured = getFeaturedArticle();
  const recent = getRecentArticles(9);
  const dupeArticles = getArticlesByCategory('dupes');
  const secondary = recent.filter((a) => a.slug.current !== featured.slug.current).slice(0, 6);

  return (
    <>
      <Header />
      <TrendingBar articles={ARTICLES.slice(0, 6)} />
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '20px', color: '#111111' }}>
          Fragrance
        </h1>
        <CategoryFilterBar />
        <div style={{ marginTop: '24px', marginBottom: '32px' }}>
          <HeroCard article={featured} className="hero-card" />
        </div>
        <ArticleGrid articles={secondary} columns={3} className="mb-12" />
      </main>
      <DupeSpotlight articles={dupeArticles.length >= 4 ? dupeArticles : ARTICLES.slice(0, 4)} />
      <PerfumeTeaser />
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <LatestFeed articles={recent.slice(0, 6)} topArticles={recent} />
      </main>
      <NewsletterBanner />
      <Footer />
    </>
  );
}
