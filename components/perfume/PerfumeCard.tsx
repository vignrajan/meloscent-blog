'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Perfume } from '@/lib/perfumeData';

const ACCORD_COLORS: Record<string, string> = {
  Woody: '#8B6F47',
  Citrus: '#F5A623',
  Floral: '#E8A0BF',
  Aromatic: '#7B9E87',
  Musky: '#C4A882',
  'Amber/Warm': '#C9843C',
  Fresh: '#7EC8C8',
  Spicy: '#C24B2A',
  Sweet: '#D4899A',
  Powdery: '#C8A8C8',
  Smoky: '#8B8B8B',
  Fruity: '#E8733A',
  Green: '#6B9E5E',
  Leather: '#8B5E3C',
  Oud: '#5C3317',
  Vanilla: '#D4A853',
};

function LongevityDots({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: i < value ? '#C9A84C' : '#E8E4DE',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

interface PerfumeCardProps {
  perfume: Perfume;
  size?: 'medium' | 'small';
}

export default function PerfumeCard({ perfume, size = 'medium' }: PerfumeCardProps) {
  const isSmall = size === 'small';
  const accordColor = ACCORD_COLORS[perfume.mainAccord] ?? '#9A9590';

  return (
    <Link
      href={`/perfumes/${perfume.slug}`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
          overflow: 'hidden',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.07)';
        }}
      >
        {/* Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: isSmall ? '100%' : '125%',
            backgroundColor: '#F5F2EE',
          }}
        >
          <Image
            src={perfume.bottleImage}
            alt={`${perfume.brand} ${perfume.name} bottle`}
            fill
            style={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
            sizes={isSmall ? '200px' : '300px'}
          />
        </div>

        {/* Content */}
        <div style={{ padding: isSmall ? '10px' : '14px' }}>
          {/* Brand */}
          <p
            style={{
              fontSize: '10px',
              fontWeight: 600,
              color: '#C9A84C',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              margin: '0 0 4px 0',
            }}
          >
            {perfume.brand}
          </p>

          {/* Name */}
          <h3
            style={{
              fontSize: isSmall ? '14px' : '16px',
              fontWeight: 600,
              color: '#111111',
              margin: '0 0 8px 0',
              lineHeight: 1.3,
            }}
          >
            {perfume.name}
          </h3>

          {/* Badges row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
            {/* Gender badge */}
            <span
              style={{
                fontSize: '10px',
                fontWeight: 500,
                padding: '2px 7px',
                borderRadius: '20px',
                backgroundColor: '#F5F2EE',
                color: '#666',
                textTransform: 'capitalize',
              }}
            >
              {perfume.gender}
            </span>
            {/* Concentration badge */}
            <span
              style={{
                fontSize: '10px',
                fontWeight: 500,
                padding: '2px 7px',
                borderRadius: '20px',
                backgroundColor: '#F5F2EE',
                color: '#666',
              }}
            >
              {perfume.concentration}
            </span>
          </div>

          {/* Accord chip + Price */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 500,
                padding: '2px 8px',
                borderRadius: '20px',
                backgroundColor: accordColor + '22',
                color: accordColor,
                border: `1px solid ${accordColor}44`,
              }}
            >
              {perfume.mainAccord}
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: '#9A9590',
                letterSpacing: '0.04em',
              }}
            >
              {perfume.priceRange}
            </span>
          </div>

          {/* Longevity dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '10px', color: '#9A9590' }}>Longevity</span>
            <LongevityDots value={perfume.longevity} />
          </div>
        </div>
      </div>
    </Link>
  );
}
