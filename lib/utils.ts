import type { BodyBlock } from './mockData';

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function readTime(body: BodyBlock[]): string {
  const text =
    body
      ?.map((b) => b.children?.map((c) => c.text).join(' '))
      .join(' ') ?? '';
  const words = text.split(' ').filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Shared pastel card color utility
const PASTEL_COLORS = [
  '#FFFDE7', '#FFF3E0', '#CCFBF1', '#FCE4EC',
  '#F3E5F5', '#E8F5E9', '#E3F2FD', '#FFF8E1',
];

export function getCardColor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  return PASTEL_COLORS[Math.abs(hash) % PASTEL_COLORS.length];
}
