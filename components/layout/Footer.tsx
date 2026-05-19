'use client';

import Link from 'next/link';

const LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Editorial Policy', href: '/editorial-policy' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F0D0A', padding: '48px 0 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#111111', fontWeight: 700, fontSize: '13px' }}>M</span>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#F5F0E8', letterSpacing: '-0.02em' }}>
                Melo<span style={{ color: '#B8860B' }}>scent</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#6B6460', lineHeight: 1.6, margin: 0 }}>
              Your guide to finding the perfect fragrance. Reviews, dupes, and discovery — all in one place.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#6B6460', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Explore</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[['Finder', '/perfumes'], ['Dupes', '/perfumes?tag=dupe'], ['Brands', '/brands'], ['Notes', '/notes']].map(([label, href]) => (
                  <Link key={href} href={href} style={{ fontSize: '13px', color: '#9A9590', textDecoration: 'none' }}>{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#6B6460', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Magazine</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[['Reviews', '/reviews'], ['Guides', '/guides'], ['Seasonal', '/seasonal'], ['Education', '/education']].map(([label, href]) => (
                  <Link key={href} href={href} style={{ fontSize: '13px', color: '#9A9590', textDecoration: 'none' }}>{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#6B6460', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Company</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {LINKS.map((l) => (
                  <Link key={l.href} href={l.href} style={{ fontSize: '13px', color: '#9A9590', textDecoration: 'none' }}>{l.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1C1A17', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#6B6460' }}>© 2026 Meloscent. All rights reserved.</span>
          <span style={{ fontSize: '12px', color: '#6B6460' }}>All affiliate links are disclosed.</span>
        </div>
      </div>
    </footer>
  );
}
