'use client';

import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

const CATEGORIES = [
  { name: 'News', href: '/news' },
  { name: 'Dupes', href: '/dupes' },
  { name: 'Celebrity', href: '/celebrity' },
  { name: 'Arabic', href: '/arabic' },
  { name: 'Niche', href: '/niche' },
  { name: 'Seasonal', href: '/seasonal' },
  { name: 'TikTok', href: '/tiktok' },
  { name: 'Luxury', href: '/luxury' },
];

const COMPANY = [
  { name: 'About', href: '/about' },
  { name: 'Editorial Policy', href: '/editorial-policy' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Advertise', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F0D0A', paddingTop: '64px', paddingBottom: '32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '48px' }}>
          {/* Column 1: Brand */}
          <div>
            <Link href="/" style={{ fontSize: '22px', fontWeight: 700, color: '#C9A84C', textDecoration: 'none', letterSpacing: '-0.02em', display: 'block', marginBottom: '8px' }}>
              Meloscent
            </Link>
            <p style={{ fontSize: '14px', color: '#9A9590', lineHeight: 1.6, marginBottom: '20px' }}>The fragrance publication.</p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6B6460', transition: 'color 150ms ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B6460'; }}>
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6B6460', transition: 'color 150ms ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#C9A84C'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B6460'; }}>
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#F5F0E8', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Categories</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {CATEGORIES.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} style={{ fontSize: '14px', color: '#9A9590', textDecoration: 'none', transition: 'color 150ms ease' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F5F0E8'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#9A9590'; }}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#F5F0E8', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {COMPANY.map((item) => (
                <li key={item.href + item.name}>
                  <Link href={item.href} style={{ fontSize: '14px', color: '#9A9590', textDecoration: 'none', transition: 'color 150ms ease' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#F5F0E8'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#9A9590'; }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 style={{ fontSize: '11px', fontWeight: 600, color: '#F5F0E8', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px' }}>Newsletter</h4>
            <p style={{ fontSize: '13px', color: '#9A9590', marginBottom: '12px', lineHeight: 1.6 }}>Weekly fragrance picks, dupes, and news.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid rgba(245,240,232,0.12)', backgroundColor: 'rgba(245,240,232,0.06)', color: '#F5F0E8', fontSize: '13px', outline: 'none' }}
              />
              <button
                type="submit"
                style={{ padding: '10px', borderRadius: '6px', backgroundColor: '#C9A84C', color: '#0F0D0A', fontSize: '13px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: '24px' }}>
          <p style={{ fontSize: '12px', color: '#6B6460', margin: 0 }}>
            © 2026 Meloscent. All affiliate links are disclosed.
          </p>
        </div>
      </div>
    </footer>
  );
}
