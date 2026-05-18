import type { Article } from '@/lib/mockData';

export default function ArticleSchema({ article }: { article: Article }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    image: [article.heroImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: `https://meloscent.com/author/${article.author.slug.current}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Meloscent',
      logo: { '@type': 'ImageObject', url: 'https://meloscent.com/logo.png' },
    },
    description: article.metaDescription,
    articleSection: article.category.name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
