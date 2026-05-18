import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'How Meloscent reviews fragrances, discloses affiliates, and handles corrections.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '16px', letterSpacing: '-0.015em' }}>{title}</h2>
      {children}
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: '16px', color: '#6B6460', lineHeight: 1.8, marginBottom: '16px' }}>{children}</p>;
}

export default function EditorialPolicyPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-0.025em', color: '#111111', margin: '0 0 16px', lineHeight: 1.1 }}>
          Editorial Policy
        </h1>
        <p style={{ fontSize: '14px', color: '#9A9590', marginBottom: '48px' }}>Last updated: May 2026</p>

        <Section title="Review Methodology">
          <P>Every fragrance we review is tested on skin — not paper strips — for a minimum of 4 hours. For dupes comparisons, we conduct blind tests with multiple testers who do not know which fragrance they are evaluating. Results are averaged and any strong dissenting opinions are noted in the final piece.</P>
          <P>We do not accept samples in exchange for guaranteed positive coverage. Samples received for review are disclosed at the bottom of the article. All opinions are the reviewer&apos;s own.</P>
        </Section>

        <Section title="Affiliate Disclosure">
          <P>Meloscent participates in affiliate programmes. This means we may earn a small commission when you purchase a product through a link on our site, at no additional cost to you. All affiliate links are clearly marked.</P>
          <P>Affiliate relationships do not influence our editorial coverage. We do not recommend products solely because we earn a commission on them. Our review process is independent of our commercial relationships.</P>
        </Section>

        <Section title="Corrections Policy">
          <P>We take accuracy seriously. If you believe we have made a factual error, please contact us at editorial@meloscent.com with &quot;Correction Request&quot; in the subject line. We will investigate and, if an error is confirmed, update the article with a correction notice within 5 working days.</P>
          <P>Significant corrections will be noted at the top of the article. Minor corrections (typos, formatting) will be corrected silently.</P>
        </Section>

        <Section title="Independence">
          <P>Meloscent is editorially independent. We have no commercial relationships that grant editorial influence to any brand, retailer, or PR agency. Our writers are not permitted to hold undisclosed financial interests in the brands they cover.</P>
        </Section>
      </main>
      <Footer />
    </>
  );
}
