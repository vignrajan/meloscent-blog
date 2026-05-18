'use client';

import { useState } from 'react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section style={{ backgroundColor: '#FAF7F2', borderTop: '1px solid #E8E4DE', borderBottom: '1px solid #E8E4DE', padding: '64px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-0.02em', color: '#111111', margin: '0 0 12px' }}>
            Join 10,000+ fragrance obsessives
          </h2>
          <p style={{ fontSize: '15px', color: '#6B6460', lineHeight: 1.65, margin: 0 }}>
            Get the weekly Scent Report — the best fragrance dupes, news, and expert picks, every Friday.
          </p>
        </div>
        <div>
          {submitted ? (
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#065F46' }}>You&apos;re in! Check your inbox.</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ border: '1px solid #E0DDD8', borderRadius: '6px', padding: '12px 16px', fontSize: '15px', outline: 'none', width: '100%', boxSizing: 'border-box' }}
              />
              <button
                type="submit"
                style={{ backgroundColor: '#C9A84C', color: '#0F0D0A', fontWeight: 600, borderRadius: '6px', padding: '12px', fontSize: '15px', border: 'none', cursor: 'pointer', transition: 'opacity 150ms ease' }}
              >
                Subscribe Free
              </button>
              <p style={{ fontSize: '11px', color: '#9A9590', margin: 0, textAlign: 'center' }}>No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
