import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../../data/site';
import { getPosts } from '../../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${site.name} — Blog`,
    description:
      'Thoughts on software engineering, AI, management and technology, by Abu Hasnat Abdullah.',
    site: context.site ?? site.url,
    items: posts.map(({ summary }) => ({
      title: summary.title,
      description: summary.description,
      pubDate: summary.date,
      link: summary.href,
      categories: [summary.category, ...summary.tags],
    })),
    customData: '<language>en</language>',
  });
}
