import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PerfumeCard from '@/components/perfume/PerfumeCard';
import { PERFUMES, getAllNotes, getPerfumesByNote } from '@/lib/mockPerfumes';

export async function generateStaticParams() {
  return getAllNotes().map((note) => ({
    note: note.toLowerCase().replace(/\s+/g, '-'),
  }));
}

interface Props {
  params: { note: string };
}

export default function NotePage({ params }: Props) {
  const noteName = params.note.replace(/-/g, ' ');
  const perfumes = getPerfumesByNote(noteName);

  if (perfumes.length === 0) notFound();

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
              NOTE
            </p>
            <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#111111', margin: '0 0 8px', letterSpacing: '-0.02em', textTransform: 'capitalize' }}>
              {noteName}
            </h1>
            <p style={{ fontSize: '14px', color: '#9A9590', margin: 0 }}>
              {perfumes.length} fragrance{perfumes.length !== 1 ? 's' : ''} featuring {noteName}
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
