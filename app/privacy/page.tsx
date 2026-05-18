import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Meloscent collects, uses, and protects your personal data.',
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

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '100px 24px 80px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-0.025em', color: '#111111', margin: '0 0 16px', lineHeight: 1.1 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '14px', color: '#9A9590', marginBottom: '48px' }}>Last updated: May 2026</p>

        <Section title="What We Collect">
          <P>When you subscribe to our newsletter, we collect your email address. When you contact us, we collect your name, email, and message. We do not sell or share this data with third parties for marketing purposes.</P>
          <P>We use standard analytics tools to understand how people use our website. This data is aggregated and anonymised — we cannot identify individual users from it.</P>
        </Section>

        <Section title="How We Use Your Data">
          <P>Your email address is used solely to send you the Scent Report newsletter if you have subscribed. You can unsubscribe at any time using the link in any email we send.</P>
          <P>Contact form submissions are used only to respond to your enquiry. We do not retain them beyond 12 months.</P>
        </Section>

        <Section title="Cookies">
          <P>We use essential cookies required for the website to function. We use analytics cookies (Google Analytics) to understand traffic patterns. You can opt out of analytics cookies through your browser settings or a cookie opt-out tool.</P>
        </Section>

        <Section title="Affiliate Links">
          <P>Our website contains affiliate links. When you click these links, the retailer may set cookies on your device to track the referral. These cookies are governed by the retailer&apos;s privacy policy, not ours.</P>
        </Section>

        <Section title="Your Rights">
          <P>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at privacy@meloscent.com.</P>
        </Section>

        <Section title="Contact">
          <P>For privacy-related questions, email privacy@meloscent.com. We aim to respond within 5 working days.</P>
        </Section>
      </main>
      <Footer />
    </>
  );
}
