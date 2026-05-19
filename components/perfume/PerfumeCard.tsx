'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import type { Perfume } from '@/lib/mockPerfumes';
import { cardHover } from '@/lib/motion';

const PASTEL_COLORS = [
  '#FFFDE7', '#FFF3E0', '#CCFBF1', '#FCE4EC',
  '#F3E5F5', '#E8F5E9', '#E3F2FD', '#FFF8E1',
];

function getCardColor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return PASTEL_COLORS[Math.abs(hash) % PASTEL_COLORS.length];
}

interface PerfumeCardProps {
  perfume: Perfume;
  size?: 'medium' | 'small';
}

export default function PerfumeCard({ perfume, size = 'medium' }: PerfumeCardProps) {
  const bgColor = getCardColor(perfume.slug);
  const topNotes = perfume.notes.top.slice(0, 3).join(' · ');
  const concentration = perfume.concentration === 'Parfum' ? 'P' : perfume.concentration;
  const imageHeight = size === 'small' ? '160px' : '210px';
  const overallScore = perfume.ratings.overall.toFixed(1);

  return (
    <Link href={`/perfume/${perfume.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E8E4DE',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Pastel image area */}
        <div style={{
          backgroundColor: bgColor,
          position: 'relative',
          height: imageHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{
            position: 'absolute', top: '10px', left: '10px', zIndex: 1,
            fontSize: '10px', fontWeight: 700, color: '#374151',
            backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: '100px',
            padding: '3px 9px', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {perfume.gender}
          </span>
          <span style={{
            position: 'absolute', top: '10px', right: '10px', zIndex: 1,
            fontSize: '10px', fontWeight: 500, color: '#6B7280',
            backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: '100px',
            padding: '3px 9px',
          }}>
            {perfume.year}
          </span>
          {/* Placeholder bottle visual */}
          <div style={{
            width: size === 'small' ? '70px' : '90px',
            height: size === 'small' ? '110px' : '140px',
            background: 'rgba(0,0,0,0.06)',
            borderRadius: '8px 8px 4px 4px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)',
              width: '12px', height: '18px',
              background: 'rgba(0,0,0,0.08)',
              borderRadius: '3px 3px 0 0',
            }} />
          </div>
        </div>

        {/* Text content */}
        <div style={{ padding: '14px 14px 12px' }}>
          <p style={{
            fontSize: '10px', fontWeight: 700, color: '#9CA3AF',
            textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 3px',
          }}>
            {perfume.brand}
          </p>
          <h3 style={{
            fontSize: size === 'small' ? '15px' : '17px',
            fontWeight: 700, color: '#111111',
            margin: '0 0 5px', lineHeight: 1.25,
            letterSpacing: '-0.01em',
          }}>
            {perfume.name}
          </h3>
          <p style={{ fontSize: '12px', color: '#9A9590', margin: '0 0 12px', lineHeight: 1.4 }}>
            {topNotes}
          </p>

          {/* Score row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              fontSize: '13px', fontWeight: 700, color: '#111111',
              backgroundColor: '#F7F4F0', borderRadius: '6px',
              padding: '2px 8px',
            }}>
              {overallScore}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', flex: 1 }}>
              <Clock size={11} style={{ color: '#B8860B' }} />
              <span style={{ fontSize: '11px', color: '#9A9590' }}>
                {perfume.ratings.longevity}/5
              </span>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 500, color: '#9A9590', backgroundColor: '#F7F4F0', borderRadius: '4px', padding: '1px 6px' }}>
              {concentration}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
