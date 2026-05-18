import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleGrid from '@/components/home/ArticleGrid';
import { AUTHORS, getAuthorBySlug, getArticlesByAuthor } from '@/lib/mockData';

export async function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug.current }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};
  return {
    title: `${author.name} — ${author.specialisation}`,
    description: author.bio,
  };
}

export default function AuthorPage({ params }: Props) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const articles = getArticlesByAuthor(params.slug);

  return (
    <>
      <Header />
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px 60px' }}>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <Image src={author.photo} alt={author.name} fill style={{ objectFit: 'cover' }} sizes="120px" priority />
          </div>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', margin: '0 0 6px', letterSpacing: '-0.02em' }}>{author.name}</h1>
            <p style={{ fontSize: '16px', color: '#6B6460', margin: '0 0 16px' }}>{author.specialisation}</p>
            <p style={{ fontSize: '16px', color: '#6B6460', lineHeight: 1.7, maxWidth: '600px', margin: 0 }}>{author.bio}</p>
          </div>
        </div>

        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
          Articles by {author.name}
        </h2>

        {articles.length > 0 ? (
          <ArticleGrid articles={articles} columns={3} />
        ) : (
          <p style={{ fontSize: '16px', color: '#6B6460' }}>No articles yet.</p>
        )}
      </main>
      <Footer />
    </>
  );
}
