import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts. Files keep their `YYYY-MM-DD-name.md` filenames for ordering on
 * disk, but the routed slug comes from the `slug` frontmatter field so the
 * URLs the site published before the rebuild keep working.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    /** Sidebar facet on the blog index. */
    category: z.enum(['Engineering', 'AI & Data', 'Management', 'Product & Business']),
    tags: z.array(z.string()).default([]),
    /** Card summary on the blog index; falls back to the post's first paragraph. */
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
