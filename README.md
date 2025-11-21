# Personal Website

A modern personal website built with Docusaurus, featuring a single-page layout with sections for About, Skills, Experience, Projects, Certifications, and Blog with infinite scroll.

## Tech Stack

- Docusaurus (TypeScript)
- Custom CSS with CSS variables
- React Icons
- React Intersection Observer
- MDX for blog posts

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Site opens at `http://localhost:3000`

### Build

```bash
npm run build
```

## Customization

Edit data files in `src/data/`:
- `profile.ts` - Personal info
- `skills.ts` - Technical skills
- `experience.ts` - Work experience
- `projects.ts` - Projects
- `certifications.ts` - Certifications

Add blog posts in `blog/` directory. Customize styling in `src/css/custom.css`.

## Deployment

### GitHub Pages

```bash
npm run deploy
```

### Vercel/Netlify

- Build Command: `npm run build`
- Output Directory: `build`

## License

MIT License
