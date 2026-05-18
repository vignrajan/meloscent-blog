'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [open, setOpen] = useState(true);

  if (!items.length) return null;

  return (
    <div style={{ border: '1px solid #E8E4DE', borderRadius: '10px', padding: '16px 20px', margin: '32px 0', backgroundColor: '#FAF7F2' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#111111', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Contents</span>
        <ChevronDown size={16} style={{ color: '#9A9590', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 150ms ease' }} />
      </button>
      {open && (
        <ol style={{ margin: '12px 0 0', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {items.map((item) => (
            <li key={item.id} style={{ paddingLeft: item.level > 2 ? '16px' : '0' }}>
              <a href={`#${item.id}`} style={{ fontSize: '14px', color: '#6B6460', textDecoration: 'none', lineHeight: 1.5 }}>
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
