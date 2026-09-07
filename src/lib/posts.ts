import { getCollection, type CollectionEntry } from 'astro:content';

export interface PostSummary {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: Date;
  dateLabel: string;
  dateISO: string;
  readingTime: number;
  /** "Management · 5 April 2023 · 6 min read" */
  meta: string;
}

/** Words per minute used for the "n min read" label. */
const WPM = 200;

export function readingTime(body: string): number {
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WPM));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Every published post, newest first. */
export async function getPosts() {
  const entries = await getCollection('blog', ({ data }: CollectionEntry<'blog'>) =>
    import.meta.env.DEV ? true : !data.draft,
  );

  const posts = entries.map((entry: CollectionEntry<'blog'>) => {
    const minutes = readingTime(entry.body ?? '');
    const date: Date = entry.data.date;
    const dateLabel = formatDate(date);

    const summary: PostSummary = {
      slug: entry.data.slug,
      href: `/blog/${entry.data.slug}`,
      title: entry.data.title,
      description: entry.data.description,
      category: entry.data.category,
      tags: entry.data.tags,
      date,
      dateLabel,
      dateISO: date.toISOString(),
      readingTime: minutes,
      meta: `${entry.data.category} · ${dateLabel} · ${minutes} min read`,
    };

    return { entry, summary };
  });

  posts.sort((a, b) => b.summary.date.getTime() - a.summary.date.getTime());
  return posts;
}

/** Facet order on the blog sidebar; empty categories are dropped. */
export const CATEGORY_ORDER = [
  'Engineering',
  'AI & Data',
  'Management',
  'Product & Business',
] as const;

/** Tag order on the blog sidebar; unknown tags are appended alphabetically. */
export const TAG_ORDER = [
  'Business',
  'Innovation',
  'Management',
  'Behavioral Science',
  'Programming',
] as const;

export function countBy(posts: PostSummary[], pick: (post: PostSummary) => string[]) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const key of pick(post)) {
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return counts;
}
