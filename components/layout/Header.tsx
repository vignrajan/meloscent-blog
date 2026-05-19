'use client';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { headerSlideDown } from '@/lib/motion';

const NAV_LINKS = [
  { label: 'Finder', href: '/perfumes' },
  { label: 'Dupes', href: '/perfumes?tag=dupe' },
  { label: 'Magazine', href: '/guides' },
  { label: 'Notes', href: '/notes' },
  { label: 'Brands', href: '/brands' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <motion.header
      variants={headerSlideDown}
      initial="initial"
      animate="animate"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(247,244,240,0.88)',
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
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
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#111111',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '15px', lineHeight: 1 }}>M</span>
          </div>
          <span style={{ fontSize: '17px', fontWeight: 700, color: '#111111', letterSpacing: '-0.02em' }}>
            Melo<span style={{ color: '#B8860B' }}>scent</span>
          </span>
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: '480px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none' }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search perfumes, brands, notes..."
              style={{
                width: '100%',
                padding: '8px 16px 8px 36px',
                fontSize: '13px',
                borderRadius: '100px',
                border: '1.5px solid #E5E7EB',
                backgroundColor: '#FFFFFF',
                color: '#111111',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </form>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: '13px', fontWeight: 500, color: '#374151', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#374151', padding: '4px', display: 'flex', alignItems: 'center', marginLeft: 'auto' }}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
}
