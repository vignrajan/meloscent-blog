'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import type { Perfume } from '@/lib/mockPerfumes';
import { cardHover } from '@/lib/motion';
import { getCardColor } from '@/lib/utils';

interface PerfumeCardProps {
  perfume: Perfume;
  size?: 'medium' | 'small';
}

export default function PerfumeCard({ perfume, size = 'medium' }: PerfumeCardProps) {
  const bgColor = getCardColor(perfume.slug);
  const topNotes = perfume.notes.top.slice(0, 3).join(' · ');
  const concentration = perfume.concentration === 'Parfum' ? 'P' : perfume.concentration;
  const imageHeight = size === 'small' ? '160px' : '210px';

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
        {/* Image area */}
        <div style={{
          backgroundColor: bgColor,
          position: 'relative',
          height: imageHeight,
        }}>
          <span style={{
            position: 'absolute', top: '10px', left: '10px', zIndex: 2,
            fontSize: '10px', fontWeight: 700, color: '#374151',
            backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: '100px',
            padding: '3px 9px', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            {perfume.gender}
          </span>
          <span style={{
            position: 'absolute', top: '10px', right: '10px', zIndex: 2,
            fontSize: '10px', fontWeight: 500, color: '#6B7280',
            backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: '100px',
            padding: '3px 9px',
          }}>
            {perfume.year}
          </span>
          <img
            src={perfume.image}
            alt={`${perfume.brand} ${perfume.name}`}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'contain',
              padding: size === 'small' ? '20px 16px' : '28px 20px',
              boxSizing: 'border-box',
            }}
          />
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontSize: '12px', fontWeight: 700, color: '#111111',
              backgroundColor: '#F7F4F0', borderRadius: '6px',
              padding: '2px 8px',
            }}>
              {perfume.ratings.overall.toFixed(1)}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', flex: 1 }}>
              <Clock size={11} style={{ color: '#B8860B' }} />
              <span style={{ fontSize: '11px', color: '#9A9590' }}>
                {perfume.ratings.longevity}/5
              </span>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#B8860B', backgroundColor: '#FFF8E1', borderRadius: '4px', padding: '1px 6px' }}>
              {concentration}
            </span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#111111' }}>
              ${perfume.price}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
