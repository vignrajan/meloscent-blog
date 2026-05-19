'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { mobileMenuVariants, mobileLinkVariants } from '@/lib/motion';

const NAV_LINKS = [
  { label: 'Finder', href: '/perfumes' },
  { label: 'Dupes', href: '/perfumes?tag=dupe' },
  { label: 'Magazine', href: '/guides' },
  { label: 'Notes', href: '/notes' },
  { label: 'Brands', href: '/brands' },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={mobileMenuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: '#F7F4F0',
            display: 'flex', flexDirection: 'column',
            padding: '0 24px 32px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '56px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#111111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '15px' }}>M</span>
              </div>
              <span style={{ fontSize: '17px', fontWeight: 700, color: '#111111', letterSpacing: '-0.02em' }}>
                Melo<span style={{ color: '#B8860B' }}>scent</span>
              </span>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#374151', padding: '4px' }}>
              <X size={22} />
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                variants={mobileLinkVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  style={{
                    fontSize: '22px', fontWeight: 600, color: '#111111',
                    textDecoration: 'none', padding: '14px 0',
                    borderBottom: '1px solid #E8E4DE',
                    display: 'block',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
