import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NotesPyramid from '@/components/perfume/NotesPyramid';
import AccordsChart from '@/components/perfume/AccordsChart';
import RatingBars from '@/components/perfume/RatingBars';
import SeasonBadges from '@/components/perfume/SeasonBadges';
import SimilarFragrances from '@/components/perfume/SimilarFragrances';
import { PERFUMES, getPerfumeBySlug, getSimilarPerfumes } from '@/lib/perfumeData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PERFUMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const perfume = getPerfumeBySlug(slug);
  if (!perfume) return { title: 'Perfume Not Found | Meloscent' };

  return {
    title: `${perfume.brand} ${perfume.name} ${perfume.concentration} Review | Meloscent`,
    description: `${perfume.brand} ${perfume.name} — ${perfume.description.slice(0, 155)}...`,
    openGraph: {
      title: `${perfume.brand} ${perfume.name} ${perfume.concentration}`,
      description: perfume.description.slice(0, 155),
      images: [{ url: perfume.bottleImage }],
    },
  };
}

const GENDER_LABELS: Record<string, string> = {
  men: 'Men',
  women: 'Women',
  unisex: 'Unisex',
};

export default async function PerfumePage({ params }: PageProps) {
  const { slug } = await params;
  const perfume = getPerfumeBySlug(slug);
  if (!perfume) notFound();

  const similar = getSimilarPerfumes(slug);

  return (
    <>
      <Header />

      <main style={{ backgroundColor: '#F5F2EE', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '24px', fontSize: '13px', color: '#9A9590' }}>
            <Link href="/" style={{ color: '#9A9590', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/perfumes" style={{ color: '#9A9590', textDecoration: 'none' }}>Perfumes</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#111111' }}>{perfume.name}</span>
          </nav>

          {/* Two-column layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '65fr 35fr',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN */}
            <div>
              {/* Brand + Name */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#C9A84C',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  margin: '0 0 6px 0',
                }}
              >
                {perfume.brand}
              </p>
              <h1
                style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: '#111111',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {perfume.name}
              </h1>

              {/* Byline */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '28px',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: '13px', color: '#666' }}>{perfume.year}</span>
                <span style={{ color: '#E8E4DE' }}>•</span>
                <span style={{ fontSize: '13px', color: '#666' }}>{GENDER_LABELS[perfume.gender]}</span>
                <span style={{ color: '#E8E4DE' }}>•</span>
                <span style={{ fontSize: '13px', color: '#666' }}>{perfume.concentration}</span>
                <span style={{ color: '#E8E4DE' }}>•</span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#555',
                    letterSpacing: '0.04em',
                  }}
                >
                  {perfume.priceRange}
                </span>
              </div>

              {/* Notes Pyramid */}
              <div style={{ marginBottom: '32px' }}>
                <h2
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#111',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                  }}
                >
                  Fragrance Notes
                </h2>
                <NotesPyramid notes={perfume.notes} />
              </div>

              {/* Description */}
              <div style={{ marginBottom: '32px' }}>
                <h2
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#111',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '14px',
                  }}
                >
                  About This Fragrance
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#333',
                  }}
                >
                  {perfume.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
                {perfume.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      backgroundColor: '#EEEBE5',
                      color: '#666',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Similar Fragrances */}
              <SimilarFragrances perfumes={similar} />
            </div>

            {/* RIGHT COLUMN (sticky) */}
            <div style={{ position: 'sticky', top: '80px' }}>
              {/* Bottle Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '133%',
                  marginBottom: '20px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#F0ECE5',
                }}
              >
                <Image
                  src={perfume.bottleImage}
                  alt={`${perfume.brand} ${perfume.name} bottle`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="400px"
                  priority
                />
              </div>

              {/* Accords Chart */}
              <div style={{ marginBottom: '16px' }}>
                <AccordsChart accords={perfume.accords} />
              </div>

              {/* Rating Bars */}
              <div style={{ marginBottom: '16px' }}>
                <RatingBars
                  longevity={perfume.longevity}
                  sillage={perfume.sillage}
                  versatility={perfume.versatility}
                />
              </div>

              {/* Season Badges */}
              <div style={{ marginBottom: '20px' }}>
                <SeasonBadges seasons={perfume.seasons} timeOfDay={perfume.timeOfDay} />
              </div>

              {/* CTA Button */}
              <Link
                href={`/go/${perfume.slug}`}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  borderRadius: '8px',
                  backgroundColor: '#C9A84C',
                  color: '#0F0D0A',
                  fontWeight: 700,
                  fontSize: '15px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'opacity 150ms ease',
                  boxSizing: 'border-box',
                }}
              >
                Find the Best Price →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
