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

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.string(),
    location: z.string(),
    summary: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    externalUrl: z.string().url().optional(),
    brochureUrl: z.string().optional(),
    brochureNote: z.string().optional(),
    mapUrl: z.string().url().optional(),
    overviewParagraphs: z.array(z.string()),
    pillars: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    locationIntro: z.array(z.string()),
    connectivity: z.array(
      z.object({
        name: z.string(),
        detail: z.string(),
      })
    ),
    lifestyleAmenities: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    clubAmenities: z.array(
      z.object({
        category: z.string(),
        name: z.string(),
      })
    ),
    masterPlanImage: z.string().optional(),
    masterPlanAlt: z.string().optional(),
    masterPlanIntro: z.string().optional(),
    masterPlanSpecs: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    plotSizesNote: z.string().optional(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    ),
    order: z.number().default(1),
  }),
});

export const collections = { insights, projects };
