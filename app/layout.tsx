import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://meloscent.com'),
  title: { default: 'Meloscent — The Fragrance Publication', template: '%s | Meloscent' },
  description: 'The fragrance publication for people who take scent seriously. News, dupes, celebrity picks, and expert reviews.',
  openGraph: { siteName: 'Meloscent', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
        background: '#F5F2EE',
        margin: 0,
      }}>
        {children}
      </body>
    </html>
  );
}
