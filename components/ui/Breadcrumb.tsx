import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#9A9590' }}>
      <Link href="/" style={{ color: '#9A9590', textDecoration: 'none' }}>Home</Link>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <ChevronRight size={12} />
          {item.href ? (
            <Link href={item.href} style={{ color: '#9A9590', textDecoration: 'none' }}>{item.label}</Link>
          ) : (
            <span style={{ color: '#6B6460' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
