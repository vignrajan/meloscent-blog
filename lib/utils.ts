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
