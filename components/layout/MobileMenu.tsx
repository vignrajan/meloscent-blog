'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'News', href: '/news' },
  { label: 'Dupes', href: '/dupes' },
  { label: 'Celebrity', href: '/celebrity' },
  { label: 'Arabic', href: '/arabic' },
  { label: 'Niche', href: '/niche' },
  { label: 'Seasonal', href: '/seasonal' },
  { label: 'TikTok', href: '/tiktok' },
  { label: 'Luxury', href: '/luxury' },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      backgroundColor: '#0F0D0A',
      display: 'flex', flexDirection: 'column',
      padding: '24px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <Link href="/" onClick={onClose} style={{ fontSize: '22px', fontWeight: 700, color: '#C9A84C', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          Meloscent
        </Link>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F5F0E8', padding: '4px' }}>
          <X size={24} />
        </button>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              fontSize: '24px', fontWeight: 600, color: '#F5F0E8',
              textDecoration: 'none', padding: '12px 0',
              borderBottom: '1px solid rgba(245,240,232,0.08)',
              transition: 'color 150ms ease',
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
