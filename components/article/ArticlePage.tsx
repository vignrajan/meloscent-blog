import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/mockData';
import { formatDate, readTime } from '@/lib/utils';
import CategoryTag from '@/components/ui/CategoryTag';
import ShareBar from '@/components/ui/ShareBar';
import Breadcrumb from '@/components/ui/Breadcrumb';
import AuthorBio from './AuthorBio';
import AffiliateBox from './AffiliateBox';
import RelatedArticles from './RelatedArticles';
import ArticleCard from './ArticleCard';

interface ArticlePageProps {
  article: Article;
  related: Article[];
  topArticles: Article[];
}

export default function ArticlePage({ article, related, topArticles }: ArticlePageProps) {
  const url = `https://meloscent.com/${article.category.slug.current}/${article.slug.current}`;
  const rt = readTime(article.body);

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px' }}>
      <Breadcrumb items={[
        { label: article.category.name, href: `/${article.category.slug.current}` },
        { label: article.title },
      ]} />

      <div style={{ display: 'grid', gridTemplateColumns: '70% 30%', gap: '48px', marginTop: '24px' }}>
        {/* Left: article body */}
        <article>
          <CategoryTag slug={article.category.slug.current} name={article.category.name} />
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#111111', margin: '16px 0 20px' }}>
            {article.title}
          </h1>

          {/* Byline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <Image src={article.author.photo} alt={article.author.name} fill style={{ objectFit: 'cover' }} sizes="40px" />
            </div>
            <div style={{ fontSize: '13px', color: '#6B6460', lineHeight: 1.4 }}>
              <Link href={`/author/${article.author.slug.current}`} style={{ color: '#111111', fontWeight: 600, textDecoration: 'none' }}>
                {article.author.name}
              </Link>
              {' · '}{formatDate(article.publishedAt)}{' · '}{rt}
            </div>
          </div>

          <ShareBar title={article.title} url={url} />

          <div style={{ height: '1px', backgroundColor: '#E8E4DE', margin: '24px 0' }} />

          {/* Hero image */}
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: '10px', overflow: 'hidden', marginBottom: '8px' }}>
            <Image src={article.heroImage} alt={article.heroImageAlt} fill style={{ objectFit: 'cover' }} priority sizes="(max-width: 1100px) 100vw, 770px" />
          </div>
          {article.heroImageAlt && (
            <p style={{ fontSize: '12px', fontStyle: 'italic', color: '#9A9590', margin: '6px 0 32px' }}>{article.heroImageAlt}</p>
          )}

          {/* Body */}
          <div style={{ maxWidth: '680px' }}>
            {article.body.map((block, i) => {
              if (block._type === 'block') {
                const text = block.children?.map((c) => c.text).join('') ?? '';
                if (block.style === 'h2') {
                  return <h2 key={i} style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.015em', color: '#111111', marginTop: '2em', marginBottom: '0.5em' }}>{text}</h2>;
                }
                if (block.style === 'h3') {
                  return <h3 key={i} style={{ fontSize: '18px', fontWeight: 600, color: '#111111', marginTop: '1.5em', marginBottom: '0.5em' }}>{text}</h3>;
                }
                return <p key={i} style={{ fontSize: '17px', lineHeight: 1.8, color: '#111111', marginBottom: '1.5em' }}>{text}</p>;
              }
              return null;
            })}
          </div>

          {/* Affiliate products */}
          {article.affiliateProducts?.map((product) => (
            <AffiliateBox key={product.productSlug} product={product} />
          ))}

          <AuthorBio author={article.author} />
          <RelatedArticles articles={related} />
        </article>

        {/* Right: sticky sidebar */}
        <aside style={{ position: 'sticky', top: '84px', alignSelf: 'start' }}>
          {article.affiliateProducts && article.affiliateProducts.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9A9590', marginBottom: '12px' }}>Featured Products</h4>
              {article.affiliateProducts.map((p) => (
                <AffiliateBox key={p.productSlug} product={p} />
              ))}
            </div>
          )}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111111', marginBottom: '6px' }}>The Scent Report</h4>
            <p style={{ fontSize: '13px', color: '#6B6460', marginBottom: '14px', lineHeight: 1.6 }}>Weekly fragrance picks in your inbox.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input type="email" placeholder="your@email.com" style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #E0DDD8', fontSize: '14px', outline: 'none' }} />
              <button type="submit" style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#C9A84C', color: '#0F0D0A', fontSize: '13px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                Subscribe Free
              </button>
            </form>
          </div>
          <h4 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9A9590', marginBottom: '12px' }}>Top Articles</h4>
          {topArticles.slice(0, 5).map((a) => (
            <ArticleCard key={a.slug.current} article={a} size="list" />
          ))}
        </aside>
      </div>
    </main>
  );
}
