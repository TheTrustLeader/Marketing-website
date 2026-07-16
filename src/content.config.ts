import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sourceSchema = z.object({
  title: z.string(),
  href: z.url(),
  publisher: z.string().optional(),
  note: z.string().optional()
});

const contentSchema = z.object({
  title: z.string(),
  seoTitle: z.string().optional(),
  description: z.string(),
  eyebrow: z.string(),
  introduction: z.string(),
  author: z.string().default('Scott Hunter'),
  published: z.coerce.date(),
  updated: z.coerce.date(),
  readTime: z.string(),
  status: z.enum(['draft', 'published']).default('draft'),
  accent: z.enum(['green', 'yellow', 'navy']).default('green'),
  featured: z.boolean().default(false),
  searchIntent: z.string(),
  keywords: z.array(z.string()).default([]),
  showToc: z.boolean().default(true),
  evidenceReview: z.enum(['pending', 'complete']).default('pending'),
  sources: z.array(sourceSchema).default([]),
  related: z.array(z.object({
    href: z.string(),
    title: z.string(),
    description: z.string(),
    label: z.string().optional()
  })).default([])
}).superRefine((entry, context) => {
  if (entry.status === 'published' && entry.evidenceReview !== 'complete') {
    context.addIssue({
      code: 'custom',
      path: ['evidenceReview'],
      message: 'Published content must complete the evidence and source review.'
    });
  }
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: contentSchema
});

const knowledge = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/knowledge' }),
  schema: contentSchema
});

export const collections = { articles, knowledge };
