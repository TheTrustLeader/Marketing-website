import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site || new URL('https://www.thetrustleader.com');
  const noindex = import.meta.env.PUBLIC_ROBOTS_NOINDEX === 'true';
  const rules = noindex
    ? 'User-agent: *\nDisallow: /'
    : 'User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: GPTBot\nDisallow: /';
  return new Response(`${rules}\n\nSitemap: ${new URL('/sitemap.xml', origin)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
