import { ARTICLES } from '@/lib/mockData';

export async function GET() {
  const articles = ARTICLES;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${articles.map((a) => `  <url>
    <loc>https://meloscent.com/${a.category.slug.current}/${a.slug.current}</loc>
    <news:news>
      <news:publication>
        <news:name>Meloscent</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${a.publishedAt}</news:publication_date>
      <news:title><![CDATA[${a.title}]]></news:title>
    </news:news>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
