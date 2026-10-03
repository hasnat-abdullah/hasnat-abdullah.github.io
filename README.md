# hasnat-abdullah.github.io

Personal site and blog of Abu Hasnat Abdullah, built with [Astro](https://astro.build) as a fully static site and deployed to GitHub Pages.

## Develop

Requires Node 22.12+.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check (astro check) + static build into dist/
npm run preview   # serve the production build (CSP active)
```

## Editing content

- **Portfolio** (hero stats, projects, experience, skills, credentials): `src/data/site.ts`
- **Blog posts**: Markdown in `src/content/blog/`. Frontmatter is validated at build time (`src/content.config.ts`):

  ```yaml
  ---
  slug: my-post            # URL: /blog/my-post
  title: My post
  description: One-line excerpt shown in listings and meta tags.
  date: 2026-10-03
  tags: [Programming]      # first tag = category on the blog index
  references:              # optional, rendered under the article
    - label: Some source
      url: https://example.com
  draft: false
  ---
  ```

  Body headings start at `##`. For the numbered heading style use `### <span class="num">01</span> Title`;
  for an example call-out use `<aside class="example">…</aside>` (see `monkey-management.md`).
- **CV download**: replace `public/cv.pdf`.

## Notes

- Zero framework JS: the only client scripts are the project filter, blog filter/pagination and reading progress (`src/scripts/`), and pages work without them.
- A strict Content-Security-Policy is emitted as a meta tag in production builds (`src/layouts/Base.astro`). Fonts are self-hosted, so there are no third-party requests.
- Pages build as `*.html` files so existing `/blog/<slug>` URLs keep working.
- RSS: `/blog/rss.xml` · Sitemap: `/sitemap-index.xml`.

Pushing to `main` deploys via `.github/workflows/deploy.yml`.
