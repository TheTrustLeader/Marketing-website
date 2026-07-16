import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const coreRoutes = [
  '/',
  '/the-thinking/',
  '/how-it-works/',
  '/for-practitioners/',
  '/pricing/',
  '/about/',
  '/trust-telegraph/',
  '/contact/'
];

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (character) => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;'
})[character] || character);

export const GET: APIRoute = async ({ site }) => {
  const origin = site || new URL('https://www.thetrustleader.com');
  const [articles, knowledge] = await Promise.all([
    getCollection('articles', ({ data }) => data.status === 'published'),
    getCollection('knowledge', ({ data }) => data.status === 'published')
  ]);
  const routes = [
    ...coreRoutes.map((path) => ({ path, updated: '2026-07-14' })),
    ...articles.map((entry) => ({ path: `/articles/${entry.id}/`, updated: entry.data.updated.toISOString().slice(0, 10) })),
    ...knowledge.map((entry) => ({ path: `/knowledge-base/${entry.id}/`, updated: entry.data.updated.toISOString().slice(0, 10) })),
    { path: '/knowledge-base/flag-it-early/', updated: '2026-07-14' }
  ];
  if (articles.length > 0) routes.push({ path: '/articles/', updated: '2026-07-14' });
  if (knowledge.length > 0) routes.push({ path: '/knowledge-base/', updated: '2026-07-14' });

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(({ path, updated }) => `  <url><loc>${escapeXml(new URL(path, origin).toString())}</loc><lastmod>${updated}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
