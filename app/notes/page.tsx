import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllNotes, getPerfumesByNote } from '@/lib/mockPerfumes';

export const metadata: Metadata = {
  title: 'Fragrance Notes Directory | Meloscent',
  description: 'Explore perfumes by ingredient — from oud and sandalwood to bergamot and rose.',
};

const POPULAR_NOTES = [
  'Oud', 'Sandalwood', 'Rose', 'Vanilla', 'Bergamot', 'Patchouli',
  'Musk', 'Amber', 'Jasmine', 'Cedar', 'Vetiver', 'Iris',
];

export default function NotesIndexPage() {
  const allNotes = getAllNotes();

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#111111', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              Fragrance Notes
            </h1>
            <p style={{ fontSize: '15px', color: '#9A9590', margin: 0 }}>
              Explore our collection by ingredient — {allNotes.length} notes across 50 fragrances
            </p>
          </div>

          {/* Popular notes */}
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#B8860B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Popular Notes
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {POPULAR_NOTES.map((note) => {
                const count = getPerfumesByNote(note).length;
                return (
                  <Link
                    key={note}
                    href={`/notes/${note.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      backgroundColor: '#FFFFFF', border: '1.5px solid #E8E4DE',
                      borderRadius: '100px', padding: '8px 18px',
                      transition: 'border-color 150ms',
                    }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#111111' }}>{note}</span>
                      <span style={{
                        fontSize: '11px', color: '#B8860B', backgroundColor: '#FFF8E1',
                        borderRadius: '100px', padding: '1px 8px', fontWeight: 700,
                      }}>
                        {count}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All notes A-Z */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: '#9A9590', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
              All Notes A–Z
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }} className="grid-4col">
              {allNotes.map((note) => {
                const count = getPerfumesByNote(note).length;
                return (
                  <Link
                    key={note}
                    href={`/notes/${note.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      backgroundColor: '#FFFFFF', borderRadius: '8px',
                      padding: '10px 14px', border: '1px solid #E8E4DE',
                    }}>
                      <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>{note}</span>
                      <span style={{ fontSize: '11px', color: '#9A9590' }}>{count}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
