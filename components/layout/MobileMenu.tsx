'use client';

import { X } from 'lucide-react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Finder', href: '/perfumes' },
  { label: 'Men', href: '/perfumes?gender=men' },
  { label: 'Women', href: '/perfumes?gender=women' },
  { label: 'Date Night', href: '/perfumes?occasion=date-night' },
  { label: 'Office', href: '/perfumes?occasion=office' },
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
      backgroundColor: '#FFFFFF',
      display: 'flex', flexDirection: 'column',
      padding: '24px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '14px' }}>M</span>
          </div>
          <span style={{ fontSize: '17px', fontWeight: 700, color: '#111111' }}>Meloscent</span>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#374151', padding: '4px' }}>
          <X size={24} />
        </button>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            style={{
              fontSize: '22px', fontWeight: 600, color: '#111111',
              textDecoration: 'none', padding: '14px 0',
              borderBottom: '1px solid #F3F4F6',
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
