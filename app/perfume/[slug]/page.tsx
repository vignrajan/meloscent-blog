import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES, getPerfumeBySlug, getSimilarPerfumes } from '@/lib/mockPerfumes';
import { getCardColor } from '@/lib/utils';

export async function generateStaticParams() {
  return PERFUMES.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const perfume = getPerfumeBySlug(params.slug);
  if (!perfume) return { title: 'Not Found | Meloscent' };
  return {
    title: `${perfume.brand} ${perfume.name} ${perfume.concentration} Review`,
    description: perfume.description,
    openGraph: {
      title: `${perfume.brand} ${perfume.name}`,
      description: perfume.description,
      images: [{ url: perfume.image }],
    },
  };
}

function RatingBar({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{ fontSize: '13px', color: '#6B6460' }}>{label}</span>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#111111' }}>{value}/{max}</span>
      </div>
      <div style={{ height: '6px', backgroundColor: '#E8E4DE', borderRadius: '100px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${(value / max) * 100}%`,
          backgroundColor: '#B8860B',
          borderRadius: '100px',
        }} />
      </div>
    </div>
  );
}

function NotePill({ note }: { note: string }) {
  return (
    <Link href={`/notes/${note.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
      <span style={{
        display: 'inline-block',
        fontSize: '12px', padding: '4px 12px', borderRadius: '100px',
        backgroundColor: '#FFFFFF', color: '#374151',
        border: '1px solid #E8E4DE', whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: 'border-color 150ms',
      }}>
        {note}
      </span>
    </Link>
  );
}

function NotesTier({ label, notes, bg }: { label: string; notes: string[]; bg: string }) {
  return (
    <div style={{ backgroundColor: bg, borderRadius: '10px', padding: '14px 16px', marginBottom: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <span style={{
          fontSize: '9px', fontWeight: 700, color: '#B8860B',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          minWidth: '36px', paddingTop: '5px', flexShrink: 0,
        }}>
          {label}
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {notes.map((n) => <NotePill key={n} note={n} />)}
        </div>
      </div>
    </div>
  );
}

export default function PerfumeDetailPage({ params }: Props) {
  const perfume = getPerfumeBySlug(params.slug);
  if (!perfume) notFound();

  const similar = getSimilarPerfumes(perfume, 4);
  const bg = getCardColor(perfume.slug);

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>

        {/* Breadcrumb */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px 0' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: '#9A9590' }}>
            <Link href="/" style={{ color: '#9A9590', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/perfumes" style={{ color: '#9A9590', textDecoration: 'none' }}>Perfumes</Link>
            <span>/</span>
            <Link href={`/brands/${perfume.brand.toLowerCase().replace(/[\s&]/g, '-').replace(/[^a-z0-9-]/g, '')}`} style={{ color: '#9A9590', textDecoration: 'none' }}>{perfume.brand}</Link>
            <span>/</span>
            <span style={{ color: '#111111' }}>{perfume.name}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '56px', alignItems: 'start' }} className="hero-card">

            {/* Left — bottle image */}
            <div className="hero-left">
              <div style={{
                backgroundColor: bg, borderRadius: '20px', height: '400px',
                position: 'relative', overflow: 'hidden',
              }}>
                <span style={{
                  position: 'absolute', top: '16px', left: '16px', zIndex: 2,
                  fontSize: '11px', fontWeight: 700, color: '#374151',
                  backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '100px',
                  padding: '4px 12px', textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>
                  {perfume.gender}
                </span>
                <span style={{
                  position: 'absolute', top: '16px', right: '16px', zIndex: 2,
                  fontSize: '11px', color: '#6B7280',
                  backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '100px',
                  padding: '4px 12px',
                }}>
                  {perfume.year}
                </span>
                <Image
                  src={perfume.image}
                  alt={`${perfume.brand} ${perfume.name} bottle`}
                  fill
                  style={{ objectFit: 'contain', padding: '32px' }}
                  sizes="360px"
                  priority
                />
              </div>

              {perfume.dupeOf && (
                <div style={{
                  marginTop: '16px', backgroundColor: '#FFF8E1', borderRadius: '12px',
                  padding: '16px', border: '1px solid #F5E8C0',
                }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px' }}>DUPE FOR</p>
                  <p style={{ fontSize: '14px', color: '#374151', margin: 0, lineHeight: 1.5 }}>{perfume.dupeOf}</p>
                </div>
              )}

              {/* Tags */}
              <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {perfume.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: '11px', padding: '3px 10px', borderRadius: '100px',
                    backgroundColor: '#F7F4F0', color: '#6B6460', border: '1px solid #E8E4DE',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — info */}
            <div>
              <Link href={`/brands/${perfume.brand.toLowerCase().replace(/[\s&]/g, '-').replace(/[^a-z0-9-]/g, '')}`} style={{ textDecoration: 'none' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#B8860B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {perfume.brand}
                </p>
              </Link>
              <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#111111', margin: '0 0 12px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                {perfume.name}
              </h1>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', backgroundColor: '#F7F4F0', borderRadius: '6px', padding: '4px 10px', color: '#6B6460' }}>
                  {perfume.concentration}
                </span>
                <span style={{ fontSize: '12px', backgroundColor: '#F7F4F0', borderRadius: '6px', padding: '4px 10px', color: '#6B6460' }}>
                  {perfume.gender}
                </span>
                <span style={{ fontSize: '12px', backgroundColor: '#F7F4F0', borderRadius: '6px', padding: '4px 10px', color: '#6B6460' }}>
                  {perfume.seasons.join(' · ')}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#B8860B', backgroundColor: '#FFF8E1', borderRadius: '6px', padding: '4px 12px' }}>
                  ${perfume.price}
                </span>
              </div>

              <p style={{ fontSize: '17px', color: '#374151', lineHeight: 1.75, marginBottom: '32px' }}>
                {perfume.description}
              </p>

              {/* Score card */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '24px',
                backgroundColor: '#111111', borderRadius: '16px',
                padding: '16px 28px', marginBottom: '32px',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 700, color: '#F5F0E8', lineHeight: 1 }}>
                    {perfume.ratings.overall.toFixed(1)}
                  </div>
                  <div style={{ fontSize: '11px', color: '#9A9590', marginTop: '4px' }}>Overall</div>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: '#2A2720' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#F5F0E8', lineHeight: 1 }}>
                    {perfume.ratings.longevity}/5
                  </div>
                  <div style={{ fontSize: '11px', color: '#9A9590', marginTop: '4px' }}>Longevity</div>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: '#2A2720' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#F5F0E8', lineHeight: 1 }}>
                    {perfume.ratings.sillage}/5
                  </div>
                  <div style={{ fontSize: '11px', color: '#9A9590', marginTop: '4px' }}>Sillage</div>
                </div>
              </div>

              {/* Rating bars */}
              <div style={{ marginBottom: '32px', maxWidth: '400px' }}>
                <RatingBar label="Longevity" value={perfume.ratings.longevity} />
                <RatingBar label="Sillage (Projection)" value={perfume.ratings.sillage} />
              </div>

              {/* Accords */}
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#9A9590', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Main Accords</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {perfume.accords.map((accord) => (
                    <div key={accord.name} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{
                        fontSize: '13px', padding: '5px 14px', borderRadius: '100px',
                        backgroundColor: '#F7F4F0', color: '#374151', border: '1px solid #E8E4DE',
                      }}>
                        {accord.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Occasions */}
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#9A9590', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Best For</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {perfume.occasions.map((occ) => (
                    <span key={occ} style={{
                      fontSize: '12px', padding: '5px 14px', borderRadius: '100px',
                      backgroundColor: '#FFFFFF', color: '#374151', border: '1px solid #E8E4DE',
                      textTransform: 'capitalize',
                    }}>
                      {occ.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={`/go/${perfume.slug}`}
                style={{
                  display: 'inline-block', padding: '14px 32px',
                  backgroundColor: '#B8860B', color: '#FFFFFF',
                  borderRadius: '100px', fontWeight: 600, fontSize: '15px',
                  textDecoration: 'none', letterSpacing: '0.01em',
                }}
              >
                Find the Best Price →
              </a>
            </div>
          </div>

          {/* Notes Pyramid */}
          <div style={{ marginTop: '56px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '20px', letterSpacing: '-0.015em' }}>
              Fragrance Pyramid
            </h2>
            <div style={{ maxWidth: '580px' }}>
              <NotesTier label="TOP" notes={perfume.notes.top} bg="#FEF9EE" />
              <NotesTier label="HEART" notes={perfume.notes.heart} bg="#FEF3E4" />
              <NotesTier label="BASE" notes={perfume.notes.base} bg="#FEEAD4" />
            </div>
          </div>

          {/* Similar */}
          {similar.length > 0 && (
            <div style={{ marginTop: '64px', borderTop: '1px solid #E8E4DE', paddingTop: '48px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '24px', letterSpacing: '-0.015em' }}>
                You might also like
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="grid-4col">
                {similar.map((p) => (
                  <PerfumeCard key={p.slug} perfume={p} size="small" />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
