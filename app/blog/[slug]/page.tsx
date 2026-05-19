import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ARTICLES, getRelatedArticles, type ArticleBody } from '@/lib/mockArticles';

export const revalidate = 3600;

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

interface Props {
  params: { slug: string };
}

const AUTHOR_IMAGES: Record<string, string> = {
  'sophie-laurent': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&crop=face&q=80',
  'james-harlow': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face&q=80',
  'aisha-mensah': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=128&h=128&fit=crop&crop=face&q=80',
};

const AUTHOR_BIOS: Record<string, string> = {
  'sophie-laurent': 'Sophie Laurent is a fragrance writer and consultant based in Paris. She has been reviewing fine perfumes for over a decade and contributes to several international fragrance publications.',
  'james-harlow': 'James Harlow is a fragrance editor with a particular obsession with oud, incense, and the niche houses of the Middle East. He has visited over 40 perfumeries worldwide.',
  'aisha-mensah': 'Aisha Mensah covers fragrance trends, celebrity scents, and the business of perfumery. She is based in London and has interviewed some of the world\'s leading perfumers.',
};

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

function BodyBlock({ block }: { block: ArticleBody }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 style={{
          fontSize: '22px', fontWeight: 700, color: '#111111',
          margin: '40px 0 16px', letterSpacing: '-0.02em', lineHeight: 1.3,
        }}>
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 style={{
          fontSize: '18px', fontWeight: 600, color: '#111111',
          margin: '28px 0 12px', letterSpacing: '-0.015em', lineHeight: 1.4,
        }}>
          {block.text}
        </h3>
      );
    case 'quote':
      return (
        <blockquote style={{
          margin: '32px 0',
          padding: '20px 24px',
          borderLeft: '3px solid #B8860B',
          backgroundColor: '#FFFBF0',
          borderRadius: '0 8px 8px 0',
        }}>
          <p style={{
            fontSize: '18px', fontStyle: 'italic', color: '#374151',
            lineHeight: 1.65, margin: 0, letterSpacing: '-0.01em',
          }}>
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
    case 'tip':
      return (
        <div style={{
          margin: '28px 0',
          padding: '16px 20px',
          backgroundColor: '#F0FDF4',
          border: '1px solid #BBF7D0',
          borderRadius: '10px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>💡</span>
          <p style={{ fontSize: '14px', color: '#166534', lineHeight: 1.6, margin: 0 }}>
            {block.text}
          </p>
        </div>
      );
    default:
      return (
        <p style={{
          fontSize: '17px', color: '#374151', lineHeight: 1.8,
          margin: '0 0 20px', letterSpacing: '-0.005em',
        }}>
          {block.text}
        </p>
      );
  }
}

export default function BlogArticlePage({ params }: Props) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, 3);
  const authorImg = AUTHOR_IMAGES[article.authorSlug];
  const authorBio = AUTHOR_BIOS[article.authorSlug] ?? '';
  const catColor = CATEGORY_COLORS[article.category] ?? '#F7F4F0';

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: '#F7F4F0' }}>

        {/* Hero */}
        <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8E4DE' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px 0' }}>

            {/* Breadcrumb */}
            <nav style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap' }}>
              <Link href="/" style={{ fontSize: '13px', color: '#9A9590', textDecoration: 'none' }}>Home</Link>
              <span style={{ fontSize: '13px', color: '#D1D5DB' }}>/</span>
              <Link href="/blog" style={{ fontSize: '13px', color: '#9A9590', textDecoration: 'none' }}>Magazine</Link>
              <span style={{ fontSize: '13px', color: '#D1D5DB' }}>/</span>
              <span style={{ fontSize: '13px', color: '#374151' }}>{article.category}</span>
            </nav>

            <span style={{
              display: 'inline-block',
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#B8860B',
              backgroundColor: catColor,
              padding: '3px 12px', borderRadius: '100px',
              marginBottom: '20px',
            }}>
              {article.category}
            </span>

            <h1 style={{
              fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#111111',
              margin: '0 0 20px', letterSpacing: '-0.03em', lineHeight: 1.2,
            }}>
              {article.title}
            </h1>

            <p style={{
              fontSize: '18px', color: '#6B6460', lineHeight: 1.65, margin: '0 0 28px',
            }}>
              {article.excerpt}
            </p>

            {/* Author row */}
            <div style={{
              display: 'flex', gap: '12px', alignItems: 'center',
              paddingBottom: '28px', borderBottom: '1px solid #E8E4DE',
            }}>
              {authorImg && (
                <img
                  src={authorImg}
                  alt={article.author}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
              )}
              <div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111111', margin: 0 }}>{article.author}</p>
                <p style={{ fontSize: '12px', color: '#9A9590', margin: 0 }}>
                  {formatDate(article.date)} · {article.readTime} min read
                </p>
              </div>
            </div>
          </div>

          {/* Cover image */}
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{
              height: 'clamp(260px, 40vw, 480px)',
              backgroundImage: `url(${article.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '0 0 16px 16px',
              marginTop: '32px',
            }} />
          </div>
        </div>

        {/* Article body */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
          {article.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}

          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #E8E4DE' }}>
            {article.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: '12px', fontWeight: 500, color: '#6B6460',
                backgroundColor: '#F3F4F6', padding: '4px 12px',
                borderRadius: '100px', border: '1px solid #E5E7EB',
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author bio */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 48px' }}>
          <div style={{
            backgroundColor: '#FFFFFF', borderRadius: '16px',
            padding: '28px', border: '1px solid #E8E4DE',
            display: 'flex', gap: '20px', alignItems: 'flex-start',
          }}>
            {authorImg && (
              <img
                src={authorImg}
                alt={article.author}
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
            )}
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8860B', margin: '0 0 4px' }}>
                About the author
              </p>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#111111', margin: '0 0 8px' }}>{article.author}</p>
              <p style={{ fontSize: '14px', color: '#6B6460', lineHeight: 1.65, margin: 0 }}>{authorBio}</p>
            </div>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E4DE', padding: '56px 24px' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <h2 style={{
                fontSize: '22px', fontWeight: 700, color: '#111111',
                margin: '0 0 28px', letterSpacing: '-0.02em',
              }}>
                Related articles
              </h2>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px',
              }} className="grid-3col">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{
                      borderRadius: '12px', overflow: 'hidden',
                      border: '1px solid #E8E4DE', backgroundColor: '#F7F4F0',
                    }}>
                      <div style={{
                        height: '160px',
                        backgroundImage: `url(${rel.image})`,
                        backgroundSize: 'cover', backgroundPosition: 'center',
                      }} />
                      <div style={{ padding: '16px' }}>
                        <span style={{
                          fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', color: '#B8860B',
                        }}>
                          {rel.category}
                        </span>
                        <h3 style={{
                          fontSize: '15px', fontWeight: 600, color: '#111111',
                          margin: '6px 0 8px', lineHeight: 1.4, letterSpacing: '-0.01em',
                        }}>
                          {rel.title}
                        </h3>
                        <span style={{ fontSize: '12px', color: '#9A9590' }}>{rel.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
