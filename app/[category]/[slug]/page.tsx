import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticlePage from '@/components/article/ArticlePage';
import ArticleSchema from '@/components/article/ArticleSchema';
import { ARTICLES, getArticleBySlug, getRecentArticles } from '@/lib/mockData';

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    category: a.category.slug.current,
    slug: a.slug.current,
  }));
}

interface Props {
  params: { category: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      images: [article.heroImage],
    },
  };
}

export default function ArticleRoute({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article || article.category.slug.current !== params.category) notFound();

  const related = ARTICLES.filter(
    (a) => a.category.slug.current === article.category.slug.current && a.slug.current !== article.slug.current
  ).slice(0, 3);

  const topArticles = getRecentArticles(5);

  return (
    <>
      <ArticleSchema article={article} />
      <Header />
      <div style={{ paddingTop: '60px' }}>
        <ArticlePage article={article} related={related} topArticles={topArticles} />
      </div>
      <Footer />
    </>
  );
}
