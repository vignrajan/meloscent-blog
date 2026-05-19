import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '48px 24px' }}>
          <p style={{ fontSize: '80px', fontWeight: 700, color: '#E8E4DE', lineHeight: 1, marginBottom: '16px' }}>404</p>
          <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', marginBottom: '12px', letterSpacing: '-0.02em' }}>
            Page not found
          </h1>
          <p style={{ fontSize: '16px', color: '#9A9590', marginBottom: '32px', maxWidth: '360px', margin: '0 auto 32px' }}>
            The page you were looking for doesn&apos;t exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{
                padding: '12px 28px', backgroundColor: '#111111', color: '#FFFFFF',
                borderRadius: '100px', textDecoration: 'none', fontSize: '14px', fontWeight: 600,
              }}
            >
              Go home
            </Link>
            <Link
              href="/perfumes"
              style={{
                padding: '12px 28px', backgroundColor: 'transparent', color: '#374151',
                borderRadius: '100px', textDecoration: 'none', fontSize: '14px', fontWeight: 600,
                border: '1.5px solid #E8E4DE',
              }}
            >
              Browse perfumes
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
