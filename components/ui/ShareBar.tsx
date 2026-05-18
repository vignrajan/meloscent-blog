'use client';

import { Twitter, Link2 } from 'lucide-react';

interface ShareBarProps {
  title: string;
  url: string;
}

export default function ShareBar({ title, url }: ShareBarProps) {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  function copyLink() {
    navigator.clipboard.writeText(url).catch(() => {});
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '11px', fontWeight: 500, color: '#9A9590', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Share</span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#F5F2EE', color: '#6B6460', transition: 'all 150ms ease' }}
        aria-label="Share on X"
      >
        <Twitter size={14} />
      </a>
      <button
        onClick={copyLink}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#F5F2EE', color: '#6B6460', border: 'none', cursor: 'pointer', transition: 'all 150ms ease' }}
        aria-label="Copy link"
      >
        <Link2 size={14} />
      </button>
    </div>
  );
}
