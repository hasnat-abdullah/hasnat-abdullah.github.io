import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // Set when a post is meaningfully revised; feeds dateModified and the sitemap's lastmod.
    updated: z.coerce.date().optional(),
    // The first tag is the post's category on the blog index.
    tags: z.array(z.string()).min(1),
    draft: z.boolean().default(false),
    references: z
      .array(z.object({ label: z.string(), url: z.url().optional() }))
      .default([]),
  }),
});

export const collections = { blog };
