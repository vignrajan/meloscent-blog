import Link from 'next/link';
import type { AffiliateProduct } from '@/lib/mockData';

interface AffiliateBoxProps {
  product: AffiliateProduct;
}

export default function AffiliateBox({ product }: AffiliateBoxProps) {
  return (
    <div style={{ border: '1px solid rgba(201,168,76,0.4)', borderRadius: '10px', padding: '20px', backgroundColor: '#FFFBF0', margin: '24px 0' }}>
      <p style={{ fontSize: '16px', fontWeight: 600, color: '#111111', margin: '0 0 4px' }}>{product.productName}</p>
      <p style={{ fontSize: '22px', fontWeight: 700, color: '#111111', margin: '0 0 16px' }}>{product.price}</p>
      <Link
        href={`/go/${product.productSlug}`}
        style={{ display: 'block', backgroundColor: '#C9A84C', color: '#0F0D0A', fontWeight: 600, borderRadius: '6px', padding: '12px', textAlign: 'center', fontSize: '15px', textDecoration: 'none', width: '100%', boxSizing: 'border-box' }}
      >
        {product.buttonLabel} →
      </Link>
      <p style={{ fontSize: '11px', color: '#9A9590', textAlign: 'center', margin: '10px 0 0' }}>
        Affiliate link — we earn a small commission. Price may vary.
      </p>
    </div>
  );
}
