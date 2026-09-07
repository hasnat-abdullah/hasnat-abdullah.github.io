# Personal Website

The personal site of Abu Hasnat Abdullah, built with [Astro](https://astro.build) and deployed to
GitHub Pages at <https://hasnat-abdullah.github.io>.

## Tech stack

- **Astro 7** — static site generator, ships no JavaScript by default
- **Content collections** — Markdown blog posts with a typed frontmatter schema
- **Plain CSS** — design-system tokens plus a page-level layer, no framework
- **Sätteri** — Astro's Markdown processor, with one small plugin for heading levels

The site ships roughly 3 KB of JavaScript: a theme toggle, reveal-on-scroll, and the blog filter.
Everything else is static HTML, and every page works with JavaScript disabled.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serve the built site
npm run typecheck
```

Requires Node 20 or newer.

## Project layout

```
public/                  Static files copied verbatim (CV, favicon, images)
src/
  content/blog/          Blog posts, one Markdown file each
  content.config.ts      Frontmatter schema for the blog collection
  data/                  Site content as typed data
    site.ts              Name, links, hero copy
    work.ts              Metrics, selected work, "also shipped"
    profile.ts           Approach, experience, skills, credentials
  components/            Header, Footer, Corners
  layouts/Base.astro     HTML shell, metadata, theme script
  pages/
    index.astro          Home page
    blog/index.astro     Blog index with search, category and tag filters
    blog/[slug].astro    Post page with table of contents
    blog/rss.xml.ts      RSS feed
    404.astro
  scripts/               Theme toggle, reveal-on-scroll, reading progress
  styles/
    tokens.css           Design-system tokens and component classes
    global.css           Page-level styles, dark theme, responsive rules
  plugins/               Markdown heading-level normalisation
```

## Editing content

**Page content** lives in `src/data/`. Editing `work.ts` adds or reorders project cards; nothing in
the markup needs to change.

**Blog posts** are Markdown files in `src/content/blog/`. The filename carries the date for ordering
on disk, and the routed URL comes from the `slug` field:

```yaml
---
title: "Post title"
slug: post-slug
date: 2024-02-02
category: "Engineering"        # Engineering | AI & Data | Management | Product & Business
tags: ["Programming"]
description: "Card summary on the blog index, and the meta description."
---
```

Reading time is computed from the body at 200 words per minute. Heading levels are normalised so
each post's top heading becomes an `h2`, whatever level it was written at.

**Design tokens** live in `src/styles/tokens.css`. Changing an accent value there re-tints the whole
site, in both themes.

## Theming

The site follows the operating system's colour scheme, and a visitor's explicit choice is stored in
`localStorage` under `hasnat-theme`. The theme is applied by a small inline script in `<head>`, so
there is no flash on first paint. The dark palette re-points the same token names, so every
`var()` consumer follows without a second set of rules.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to GitHub Pages. In the repository settings, **Pages → Source** must be set to
**GitHub Actions**.

## License

MIT
