'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import type { Perfume } from '@/lib/perfumeData';

// Deterministic pastel bg per perfume slug
const PASTEL_COLORS = [
  '#FFFDE7', // pale yellow
  '#FFF3E0', // pale peach
  '#CCFBF1', // pale mint
  '#FCE4EC', // pale pink
  '#F3E5F5', // pale lavender
  '#E8F5E9', // pale green
  '#E3F2FD', // pale blue
  '#FFF8E1', // pale amber
];

function getCardColor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return PASTEL_COLORS[Math.abs(hash) % PASTEL_COLORS.length];
}

// Convert 1-5 longevity → x.x out of 10
function longevityScore(val: number): string {
  return (val * 1.8 + 1).toFixed(1);
}

// Convert 1-5 sillage → x.x out of 10
function sillageScore(val: number): string {
  return (val * 1.5 + 1.5).toFixed(1);
}

interface PerfumeCardProps {
  perfume: Perfume;
  size?: 'medium' | 'small';
}

export default function PerfumeCard({ perfume, size = 'medium' }: PerfumeCardProps) {
  const bgColor = getCardColor(perfume.slug);
  const topNotes = perfume.notes.top.slice(0, 3).map((n) => n.toLowerCase()).join(' · ');
  const concentration = perfume.concentration === 'Parfum' ? 'P' : perfume.concentration;
  const imageHeight = size === 'small' ? '160px' : '210px';

  return (
    <Link href={`/perfumes/${perfume.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #F0F0F0',
          overflow: 'hidden',
          transition: 'box-shadow 200ms ease, transform 200ms ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)';
          el.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.boxShadow = 'none';
          el.style.transform = 'translateY(0)';
        }}
      >
        {/* Pastel image area */}
        <div style={{
          backgroundColor: bgColor,
          position: 'relative',
          height: imageHeight,
        }}>
          {/* Gender badge */}
          <span style={{
            position: 'absolute', top: '12px', left: '12px', zIndex: 1,
            fontSize: '11px', fontWeight: 600, color: '#374151',
            backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '100px',
            padding: '3px 10px', letterSpacing: '0.05em',
          }}>
            {perfume.gender.toUpperCase()}
          </span>
          {/* Year badge */}
          <span style={{
            position: 'absolute', top: '12px', right: '12px', zIndex: 1,
            fontSize: '11px', fontWeight: 500, color: '#6B7280',
            backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '100px',
            padding: '3px 10px',
          }}>
            {perfume.year}
          </span>
          {/* Bottle image */}
          <Image
            src={perfume.bottleImage}
            alt={`${perfume.brand} ${perfume.name}`}
            fill
            style={{ objectFit: 'contain', padding: '32px 24px' }}
            sizes={size === 'small' ? '180px' : '300px'}
          />
        </div>

        {/* Text content */}
        <div style={{ padding: '16px 16px 14px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, color: '#9CA3AF',
            textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 3px',
          }}>
            {perfume.brand}
          </p>
          <h3 style={{
            fontSize: size === 'small' ? '16px' : '20px',
            fontWeight: 700, color: '#111111',
            margin: '0 0 5px', lineHeight: 1.2,
          }}>
            {perfume.name}
          </h3>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 14px' }}>
            {topNotes}
          </p>

          {/* Score row */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Clock size={13} style={{ color: '#9CA3AF', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginLeft: '4px', marginRight: '14px' }}>
              {longevityScore(perfume.longevity)}
            </span>
            <span style={{ fontSize: '14px', lineHeight: 1 }}>🌈</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151', marginLeft: '4px', flex: 1 }}>
              {sillageScore(perfume.sillage)}
            </span>
            <span style={{ fontSize: '11px', fontWeight: 500, color: '#9CA3AF' }}>
              {concentration}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
