'use client';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { label: 'News', href: '/news' },
  { label: 'Dupes', href: '/dupes' },
  { label: 'Celebrity', href: '/celebrity' },
  { label: 'Arabic', href: '/arabic' },
  { label: 'Niche', href: '/niche' },
  { label: 'Seasonal', href: '/seasonal' },
  { label: 'TikTok', href: '/tiktok' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(15,13,10,0.97)' : '#0F0D0A',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        transition: 'background-color 150ms ease',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ fontSize: '22px', fontWeight: 700, color: '#C9A84C', textDecoration: 'none', letterSpacing: '-0.02em', flexShrink: 0 }}>
            Meloscent
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: '12px', fontWeight: 500, color: '#F5F0E8', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 150ms ease' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#C9A84C'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#F5F0E8'; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F5F0E8', display: 'flex', alignItems: 'center', padding: '4px' }} aria-label="Search">
              <Search size={18} />
            </button>
            <Link
              href="/newsletter"
              style={{ fontSize: '11px', fontWeight: 500, color: '#C9A84C', border: '1px solid #C9A84C', borderRadius: '4px', padding: '6px 16px', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 150ms ease', whiteSpace: 'nowrap' }}
              className="hidden-mobile"
            >
              Get The Scent Report
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F5F0E8', display: 'flex', alignItems: 'center', padding: '4px' }}
              className="show-mobile"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
