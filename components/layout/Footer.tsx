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
    <footer style={{ borderTop: '1px solid #F3F4F6', backgroundColor: '#FFFFFF', padding: '32px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '12px' }}>M</span>
          </div>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>Meloscent</span>
          <span style={{ fontSize: '13px', color: '#9CA3AF' }}>© 2026</span>
        </div>
        <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p style={{ fontSize: '12px', color: '#9CA3AF', margin: 0 }}>
          All affiliate links are disclosed.
        </p>
      </div>
    </footer>
  );
}
