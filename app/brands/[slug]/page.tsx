import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES, getAllBrands, getPerfumesByBrand } from '@/lib/mockPerfumes';

export async function generateStaticParams() {
  return getAllBrands().map((brand) => ({
    slug: brand.toLowerCase().replace(/[\s&]/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));
}

interface Props {
  params: { slug: string };
}

function slugToBrand(slug: string): string | undefined {
  return getAllBrands().find(
    (b) => b.toLowerCase().replace(/[\s&]/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );
}

export default function BrandPage({ params }: Props) {
  const brand = slugToBrand(params.slug);
  if (!brand) notFound();

  const perfumes = getPerfumesByBrand(brand);

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
              BRAND
            </p>
            <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#111111', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              {brand}
            </h1>
            <p style={{ fontSize: '14px', color: '#9A9590', margin: 0 }}>
              {perfumes.length} fragrance{perfumes.length !== 1 ? 's' : ''} in our database
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="grid-4col">
            {perfumes.map((p) => (
              <PerfumeCard key={p.slug} perfume={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
