import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['News', 'Guides']),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    oldUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
