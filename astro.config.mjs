// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// lastmod per blog URL, read from post frontmatter (`updated`, else `date`) so crawlers revisit edited posts.
const postDates = new Map(
  readdirSync('./src/content/blog')
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fm = readFileSync(`./src/content/blog/${f}`, 'utf8').split('---')[1] ?? '';
      const get = (/** @type {string} */ k) => fm.match(new RegExp(`^${k}:\\s*(\\S+)`, 'm'))?.[1];
      return [`/blog/${get('slug')}`, get('updated') ?? get('date')];
    }),
);
const buildDate = new Date().toISOString();

export default defineConfig({
  site: 'https://hasnat-abdullah.github.io',
  // Emit /blog/<slug>.html so the old Docusaurus URLs (/blog/<slug>) keep working on GitHub Pages.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const date = postDates.get(path);
        item.lastmod = date ? new Date(date).toISOString() : buildDate;
        item.priority = path === '/' ? 1.0 : path === '/blog' ? 0.8 : 0.6;
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  vite: {
    // Never inline scripts/assets as data: URIs so the CSP can stay at script-src 'self'.
    build: { assetsInlineLimit: 0 },
  },
});
