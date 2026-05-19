import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PERFUMES, getAllBrands, getPerfumesByBrand } from '@/lib/mockPerfumes';

export default function BrandsPage() {
  const brands = getAllBrands();

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#111111', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              Brands
            </h1>
            <p style={{ fontSize: '14px', color: '#9A9590', margin: 0 }}>
              {brands.length} brands in our database
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="grid-3col">
            {brands.map((brand) => {
              const count = getPerfumesByBrand(brand).length;
              const slug = brand.toLowerCase().replace(/[\s&]/g, '-').replace(/[^a-z0-9-]/g, '');
              return (
                <Link key={brand} href={`/brands/${slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '20px 24px',
                    border: '1px solid #E8E4DE', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#111111' }}>{brand}</span>
                    <span style={{ fontSize: '13px', color: '#9A9590', backgroundColor: '#F7F4F0', borderRadius: '6px', padding: '2px 8px' }}>
                      {count}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
