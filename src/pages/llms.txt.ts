import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const origin = site || new URL('https://thetrustleader.com');
  const [articles, knowledge] = await Promise.all([
    getCollection('articles', ({ data }) => data.status === 'published'),
    getCollection('knowledge', ({ data }) => data.status === 'published')
  ]);
  const link = (path: string, label: string, description: string) => `- [${label}](${new URL(path, origin)}): ${description}`;
  const lines = [
    '# Trust Leader',
    '',
    '> Trust Leader helps coaches, consultants and L&D practitioners turn trust from a broad idea into specific behaviour people can practise in real working relationships.',
    '',
    'The locked definition is: Trust is someone’s confidence in you with something they care about.',
    '',
    '## Core pages',
    link('/the-thinking/', 'The thinking', 'The Trust Leader definition and outside-in view of trust.'),
    link('/how-it-works/', 'How it works', 'Trust Map, behavioural focus, practice, private reflection and review.'),
    link('/for-practitioners/', 'For practitioners', 'How coaches, consultants and L&D practitioners use the platform.'),
    link('/pricing/', 'Pricing', 'Trial, practitioner membership, certification and partnership routes.'),
    link('/about/', 'About Scott Hunter', 'The practical experience behind Trust Leader.'),
    '',
    '## Published knowledge pages',
    ...(knowledge.length ? knowledge.map((entry) => link(`/knowledge-base/${entry.id}/`, entry.data.title, entry.data.description)) : ['No Knowledge Base drafts are marked published yet.']),
    link('/knowledge-base/flag-it-early/', 'Why flagging a risk early strengthens delivery trust', 'How to raise a risk while the other person still has useful choices.'),
    '',
    '## Published articles',
    ...(articles.length ? articles.map((entry) => link(`/articles/${entry.id}/`, entry.data.title, entry.data.description)) : ['No article drafts are marked published yet.'])
  ];
  return new Response(`${lines.join('\n')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
