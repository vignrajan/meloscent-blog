import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AUTHORS } from '@/lib/mockData';

export const metadata: Metadata = {
  title: 'About Meloscent',
  description: 'Meloscent is the fragrance publication for people who take scent seriously.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px 60px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, letterSpacing: '-0.03em', color: '#111111', margin: '0 0 24px', lineHeight: 1.1 }}>
          We take fragrance seriously.
        </h1>
        <p style={{ fontSize: '18px', color: '#6B6460', lineHeight: 1.8, marginBottom: '20px', maxWidth: '680px' }}>
          Meloscent is an independent fragrance publication founded by people who believe scent deserves the same rigorous, honest editorial attention as food, fashion, or film.
        </p>
        <p style={{ fontSize: '17px', color: '#6B6460', lineHeight: 1.8, marginBottom: '20px', maxWidth: '680px' }}>
          We cover launches, review dupes with genuine blind-testing methodology, report on celebrity fragrance culture, and go deep on the Arabic and niche perfumery traditions that deserve wider attention.
        </p>
        <p style={{ fontSize: '17px', color: '#6B6460', lineHeight: 1.8, marginBottom: '48px', maxWidth: '680px' }}>
          Every affiliate link is disclosed. Every opinion is our own. We do not accept payment for editorial coverage.
        </p>

        <div style={{ height: '1px', backgroundColor: '#E8E4DE', margin: '48px 0' }} />

        <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', marginBottom: '32px', letterSpacing: '-0.02em' }}>Our Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {AUTHORS.map((author) => (
            <div key={author.slug.current} style={{ textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 12px' }}>
                <Image src={author.photo} alt={author.name} fill style={{ objectFit: 'cover' }} sizes="80px" />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#111111', margin: '0 0 4px' }}>{author.name}</h3>
              <p style={{ fontSize: '11px', color: '#B8860B', fontWeight: 500, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' } as React.CSSProperties}>
                {author.specialisation}
              </p>
              <p style={{ fontSize: '14px', color: '#6B6460', lineHeight: 1.6, margin: 0 }}>{author.bio.slice(0, 120)}...</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
