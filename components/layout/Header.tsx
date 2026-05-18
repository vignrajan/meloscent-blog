'use client';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MobileMenu from './MobileMenu';

const NAV_LINKS = [
  { label: 'Finder', href: '/perfumes' },
  { label: 'Men', href: '/perfumes?gender=men' },
  { label: 'Women', href: '/perfumes?gender=women' },
  { label: 'Date Night', href: '/perfumes?occasion=date-night' },
  { label: 'Office', href: '/perfumes?occasion=office' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) router.push(`/perfumes?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E5E7EB',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#111111',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '16px', lineHeight: 1 }}>M</span>
          </div>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#111111', letterSpacing: '-0.01em' }}>Meloscent</span>
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: '560px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search perfumes, brands, notes..."
              style={{
                width: '100%',
                padding: '10px 16px 10px 40px',
                fontSize: '14px',
                borderRadius: '100px',
                border: '1.5px solid #E5E7EB',
                backgroundColor: '#FAFAFA',
                color: '#111111',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </form>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px', flexShrink: 0 }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: '14px', fontWeight: 500, color: '#374151', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#374151', padding: '4px', display: 'flex', alignItems: 'center' }}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
