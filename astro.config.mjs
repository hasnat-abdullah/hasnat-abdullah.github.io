// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { normalizeHeadings } from './src/plugins/normalize-headings.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://hasnat-abdullah.github.io',
  base: '/',
  trailingSlash: 'never',
  build: {
    // Directory output (blog/being-cashless/index.html). GitHub Pages resolves
    // the extensionless URLs the previous site published from these, with no
    // ambiguity between a blog.html file and a blog/ directory.
    format: 'directory',
  },
  integrations: [sitemap()],
  markdown: {
    processor: satteri({
      mdastPlugins: [normalizeHeadings],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
