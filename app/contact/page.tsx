'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #E0DDD8',
    borderRadius: '6px',
    fontSize: '15px',
    outline: 'none',
    backgroundColor: '#FFFFFF',
    boxSizing: 'border-box',
  };

  return (
    <>
      <Header />
      <main style={{ maxWidth: '640px', margin: '0 auto', padding: '100px 24px 80px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-0.025em', color: '#111111', margin: '0 0 8px', lineHeight: 1.1 }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '16px', color: '#6B6460', marginBottom: '40px', lineHeight: 1.7 }}>
          For press enquiries, advertising, corrections, or general questions.
        </p>

        {submitted ? (
          <div style={{ backgroundColor: '#D1FAE5', border: '1px solid #A7F3D0', borderRadius: '10px', padding: '24px', textAlign: 'center' }}>
            <p style={{ fontSize: '17px', fontWeight: 600, color: '#065F46', margin: 0 }}>Message sent — we&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#111111', display: 'block', marginBottom: '6px' }}>Name</label>
              <input type="text" name="name" required style={inputStyle} placeholder="Your name" />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#111111', display: 'block', marginBottom: '6px' }}>Email</label>
              <input type="email" name="email" required style={inputStyle} placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#111111', display: 'block', marginBottom: '6px' }}>Subject</label>
              <select name="subject" required style={{ ...inputStyle, appearance: 'none' }}>
                <option value="">Select a subject</option>
                <option value="general">General</option>
                <option value="press">Press</option>
                <option value="advertising">Advertising</option>
                <option value="corrections">Corrections</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#111111', display: 'block', marginBottom: '6px' }}>Message</label>
              <textarea name="message" required rows={6} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Your message..." />
            </div>
            <button
              type="submit"
              style={{ padding: '14px', backgroundColor: '#C9A84C', color: '#0F0D0A', fontWeight: 600, fontSize: '15px', borderRadius: '6px', border: 'none', cursor: 'pointer', transition: 'opacity 150ms ease' }}
            >
              Send Message
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
