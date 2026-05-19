import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES, getPerfumeBySlug, getSimilarPerfumes } from '@/lib/mockPerfumes';

export async function generateStaticParams() {
  return PERFUMES.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

const PASTEL_COLORS = [
  '#FFFDE7', '#FFF3E0', '#CCFBF1', '#FCE4EC',
  '#F3E5F5', '#E8F5E9', '#E3F2FD', '#FFF8E1',
];

function getCardColor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return PASTEL_COLORS[Math.abs(hash) % PASTEL_COLORS.length];
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
          transition: 'width 0.6s ease',
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
        <span style={{ fontSize: '9px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.12em', textTransform: 'uppercase', minWidth: '36px', paddingTop: '5px', flexShrink: 0 }}>
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
            <span style={{ color: '#111111' }}>{perfume.name}</span>
          </div>
        </div>

        {/* Hero */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '48px', alignItems: 'start' }} className="hero-card">

            {/* Left — bottle */}
            <div className="hero-left">
              <div style={{
                backgroundColor: bg, borderRadius: '20px', height: '360px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <span style={{
                  position: 'absolute', top: '16px', left: '16px',
                  fontSize: '11px', fontWeight: 700, color: '#374151',
                  backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '100px',
                  padding: '4px 12px', textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>
                  {perfume.gender}
                </span>
                <span style={{
                  position: 'absolute', top: '16px', right: '16px',
                  fontSize: '11px', color: '#6B7280',
                  backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '100px',
                  padding: '4px 12px',
                }}>
                  {perfume.year}
                </span>
                <div style={{
                  width: '120px', height: '180px',
                  background: 'rgba(0,0,0,0.08)', borderRadius: '10px 10px 6px 6px',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)',
                    width: '16px', height: '24px', background: 'rgba(0,0,0,0.1)',
                    borderRadius: '4px 4px 0 0',
                  }} />
                </div>
              </div>

              {perfume.dupeOf && (
                <div style={{
                  marginTop: '16px', backgroundColor: '#FFF8E1', borderRadius: '12px',
                  padding: '16px', border: '1px solid #F5E8C0',
                }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px' }}>DUPE FOR</p>
                  <p style={{ fontSize: '14px', color: '#374151', margin: 0 }}>{perfume.dupeOf}</p>
                </div>
              )}
            </div>

            {/* Right — info */}
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#9A9590', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                {perfume.brand}
              </p>
              <h1 style={{ fontSize: '40px', fontWeight: 700, color: '#111111', margin: '0 0 8px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                {perfume.name}
              </h1>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', backgroundColor: '#F7F4F0', borderRadius: '6px', padding: '4px 10px', color: '#6B6460' }}>
                  {perfume.concentration}
                </span>
                <span style={{ fontSize: '13px', backgroundColor: '#F7F4F0', borderRadius: '6px', padding: '4px 10px', color: '#6B6460' }}>
                  {perfume.seasons.join(', ')}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#B8860B', backgroundColor: '#FFF8E1', borderRadius: '6px', padding: '4px 10px' }}>
                  ${perfume.price}
                </span>
              </div>
              <p style={{ fontSize: '16px', color: '#6B6460', lineHeight: 1.7, marginBottom: '28px' }}>
                {perfume.description}
              </p>

              {/* Overall score */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#111111', borderRadius: '12px', padding: '12px 20px', marginBottom: '32px' }}>
                <span style={{ fontSize: '28px', fontWeight: 700, color: '#F5F0E8' }}>{perfume.ratings.overall.toFixed(1)}</span>
                <span style={{ fontSize: '13px', color: '#9A9590' }}>/10<br />overall</span>
              </div>

              {/* Ratings */}
              <div style={{ marginBottom: '32px' }}>
                <RatingBar label="Longevity" value={perfume.ratings.longevity} />
                <RatingBar label="Sillage" value={perfume.ratings.sillage} />
              </div>

              {/* Accords */}
              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#9A9590', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Main Accords</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {perfume.accords.map((accord) => (
                    <span key={accord.name} style={{
                      fontSize: '13px', padding: '5px 14px', borderRadius: '100px',
                      backgroundColor: '#F7F4F0', color: '#374151', border: '1px solid #E8E4DE',
                    }}>
                      {accord.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Occasions */}
              <div>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#9A9590', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Occasions</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {perfume.occasions.map((occ) => (
                    <span key={occ} style={{
                      fontSize: '13px', padding: '5px 14px', borderRadius: '100px',
                      backgroundColor: '#F7F4F0', color: '#374151',
                    }}>
                      {occ.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Notes Pyramid */}
          <div style={{ marginTop: '48px', maxWidth: '600px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111111', marginBottom: '20px', letterSpacing: '-0.015em' }}>
              Fragrance Pyramid
            </h2>
            <NotesTier label="TOP" notes={perfume.notes.top} bg="#FEF9EE" />
            <NotesTier label="HEART" notes={perfume.notes.heart} bg="#FEF3E4" />
            <NotesTier label="BASE" notes={perfume.notes.base} bg="#FEEAD4" />
          </div>

          {/* Similar */}
          {similar.length > 0 && (
            <div style={{ marginTop: '64px' }}>
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
