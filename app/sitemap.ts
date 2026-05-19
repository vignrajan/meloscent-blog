import type { MetadataRoute } from 'next';
import { ARTICLES, CATEGORIES, AUTHORS } from '@/lib/mockData';
import { PERFUMES } from '@/lib/mockPerfumes';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://meloscent.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/editorial-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${base}/${c.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${base}/${a.category.slug.current}/${a.slug.current}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const authorPages: MetadataRoute.Sitemap = AUTHORS.map((a) => ({
    url: `${base}/author/${a.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const perfumePages: MetadataRoute.Sitemap = PERFUMES.map((p) => ({
    url: `${base}/perfume/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const perfumeIndexPage: MetadataRoute.Sitemap = [
    { url: `${base}/perfumes`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  return [...staticPages, ...categoryPages, ...articlePages, ...authorPages, ...perfumeIndexPage, ...perfumePages];
}
