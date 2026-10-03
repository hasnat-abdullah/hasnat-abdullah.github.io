import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '../../data/site';
import { getPosts, postUrl } from '../../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${profile.name} — Writing`,
    description: 'Essays on software engineering, AI, management and behaviour.',
    site: context.site!,
    trailingSlash: false,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: postUrl(p),
      categories: p.data.tags,
    })),
  });
}
