// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hasnat-abdullah.github.io',
  // Emit /blog/<slug>.html so the old Docusaurus URLs (/blog/<slug>) keep working on GitHub Pages.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  vite: {
    // Never inline scripts/assets as data: URIs so the CSP can stay at script-src 'self'.
    build: { assetsInlineLimit: 0 },
  },
});
