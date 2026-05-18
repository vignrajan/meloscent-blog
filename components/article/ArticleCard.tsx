'use client';

import Image from 'next/image';
import Link from 'next/link';
import CategoryTag from '@/components/ui/CategoryTag';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/lib/mockData';

interface ArticleCardProps {
  article: Article;
  size?: 'large' | 'medium' | 'small' | 'list';
}

export default function ArticleCard({ article, size = 'medium' }: ArticleCardProps) {
  const href = `/${article.category.slug.current}/${article.slug.current}`;

  if (size === 'list') {
    return (
      <Link href={href} style={{ display: 'block', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #F0EDE8', cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <CategoryTag slug={article.category.slug.current} name={article.category.name} />
          <span style={{ fontSize: '10px', color: '#9A9590' }}>{formatDate(article.publishedAt)}</span>
        </div>
        <p style={{ fontSize: '14px', fontWeight: 500, color: '#111111', lineHeight: 1.4, margin: 0 }}>{article.title}</p>
      </Link>
    );
  }

  if (size === 'small') {
    return (
      <Link href={href} style={{ display: 'flex', gap: '12px', textDecoration: 'none', cursor: 'pointer' }}>
        <div style={{ position: 'relative', width: '80px', height: '60px', flexShrink: 0, borderRadius: '6px', overflow: 'hidden' }}>
          <Image src={article.heroImage} alt={article.heroImageAlt} fill style={{ objectFit: 'cover' }} sizes="80px" />
        </div>
        <div style={{ flex: 1 }}>
          <CategoryTag slug={article.category.slug.current} name={article.category.name} />
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#111111', lineHeight: 1.4, margin: '4px 0 0' }}>{article.title}</p>
        </div>
      </Link>
    );
  }

  if (size === 'large') {
    return (
      <Link href={href} style={{ display: 'block', textDecoration: 'none', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', cursor: 'pointer', transition: 'all 150ms ease' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.10)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)'; }}
      >
        <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
          <Image src={article.heroImage} alt={article.heroImageAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div style={{ padding: '16px 18px' }}>
          <CategoryTag slug={article.category.slug.current} name={article.category.name} />
          <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#111111', lineHeight: 1.3, margin: '8px 0 6px', letterSpacing: '-0.015em' }}>{article.title}</h3>
          <p style={{ fontSize: '14px', color: '#6B6460', lineHeight: 1.65, margin: '0 0 10px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.excerpt}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #F0EDE8', paddingTop: '10px', marginTop: '10px' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
              <Image src={article.author.photo} alt={article.author.name} fill style={{ objectFit: 'cover' }} sizes="24px" />
            </div>
            <span style={{ fontSize: '11px', color: '#6B6460' }}>{article.author.name}</span>
          </div>
        </div>
      </Link>
    );
  }

  // medium (default)
  return (
    <Link href={href} style={{ display: 'block', textDecoration: 'none', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.07)', cursor: 'pointer', transition: 'all 150ms ease' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.10)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)'; }}
    >
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
        <Image src={article.heroImage} alt={article.heroImageAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
      </div>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <CategoryTag slug={article.category.slug.current} name={article.category.name} />
          <span style={{ fontSize: '10px', color: '#9A9590' }}>{formatDate(article.publishedAt)}</span>
        </div>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111111', lineHeight: 1.35, margin: '0 0 10px', letterSpacing: '-0.01em' }}>{article.title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #F0EDE8', paddingTop: '10px', marginTop: '10px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
            <Image src={article.author.photo} alt={article.author.name} fill style={{ objectFit: 'cover' }} sizes="24px" />
          </div>
          <span style={{ fontSize: '11px', color: '#6B6460' }}>{article.author.name}</span>
        </div>
      </div>
    </Link>
  );
}
