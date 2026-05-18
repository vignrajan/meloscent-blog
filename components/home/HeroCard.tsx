'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/lib/mockData';

interface HeroCardProps {
  article: Article;
  className?: string;
}

export default function HeroCard({ article, className }: HeroCardProps) {
  const href = `/${article.category.slug.current}/${article.slug.current}`;

  return (
    <div className={className} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', minHeight: '320px', display: 'flex' }}>
      {/* Left panel */}
      <div style={{
        width: '40%',
        backgroundColor: '#0F2D2A',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{
          backgroundColor: 'rgba(201,168,76,0.15)',
          color: '#C9A84C',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          borderRadius: '4px',
          padding: '4px 8px',
          display: 'inline-block',
          marginBottom: '14px',
        }}>
          {article.category.name}
        </span>

        <h2 style={{
          fontSize: 'clamp(22px, 2.5vw, 32px)',
          fontWeight: 700,
          color: '#F5F0E8',
          letterSpacing: '-0.025em',
          lineHeight: 1.25,
          margin: '0 0 12px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {article.title}
        </h2>

        <p style={{
          fontSize: '14px',
          color: 'rgba(245,240,232,0.65)',
          lineHeight: 1.65,
          margin: '0 0 20px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {article.excerpt}
        </p>

        <p style={{ fontSize: '11px', color: 'rgba(245,240,232,0.45)', margin: '0 0 20px' }}>
          {article.author.name} · {formatDate(article.publishedAt)}
        </p>

        <Link href={href} style={{ color: '#C9A84C', fontSize: '13px', fontWeight: 600, textDecoration: 'none', transition: 'text-decoration 150ms ease' }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.textDecoration = 'underline'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.textDecoration = 'none'; }}>
          Read full article →
        </Link>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, position: 'relative', minHeight: '320px' }}>
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
    </div>
  );
}
