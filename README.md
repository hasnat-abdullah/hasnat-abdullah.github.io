# Personal Website

A modern, sci-fi themed personal website built with Docusaurus, featuring a single-page layout with sections for About, Skills, Experience, Projects, Certifications, and Blog with infinite scroll.

## Features

- 🎨 **Sci-Fi/Coder Theme**: Dark and light mode with neon accents and terminal-inspired design
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♾️ **Infinite Scroll Blog**: Blog section with smooth infinite scrolling
- ⚡ **Fast Performance**: Built on Docusaurus for optimal performance
- 🎯 **Clean UX**: Minimal, professional design with smooth animations
- ♿ **Accessible**: WCAG compliant with keyboard navigation support

## Tech Stack

- **Framework**: Docusaurus (TypeScript)
- **Styling**: Custom CSS with CSS variables
- **Icons**: React Icons
- **Infinite Scroll**: React Intersection Observer
- **Content**: MDX for blog posts

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The site will open at `http://localhost:3000`

### Build

Build the static site:

```bash
npm run build
```

### Serve

Serve the built site locally:

```bash
npm run serve
```

## Customization

### Personal Information

Edit the data files in `src/data/`:

- `profile.ts` - Your name, title, bio, email, location
- `skills.ts` - Your technical skills organized by category
- `experience.ts` - Your work experience
- `projects.ts` - Your projects
- `certifications.ts` - Your certifications
- `social.ts` - Your social media links

### Blog Posts

Add blog posts in the `blog/` directory:

```markdown
---
slug: my-post
title: My Post Title
authors: your_name
tags: [tag1, tag2]
---

Your content here...
```

### Styling

Customize the theme in `src/css/custom.css`:

- Color scheme (light and dark mode)
- Typography
- Spacing
- Animations

### Configuration

Update `docusaurus.config.ts` for:

- Site metadata (title, tagline, URL)
- Navigation
- Footer
- SEO settings

## Project Structure

```
personal_web/
├── blog/                   # Blog posts (MDX/Markdown)
├── docs/                   # Documentation (optional)
├── src/
│   ├── components/
│   │   └── sections/      # Homepage sections
│   ├── css/
│   │   └── custom.css     # Custom styling
│   ├── data/              # Content data files
│   └── pages/
│       ├── index.tsx      # Homepage
│       └── 404.tsx        # 404 page
├── static/
│   └── img/               # Images and assets
├── docusaurus.config.ts   # Docusaurus configuration
├── package.json
└── tsconfig.json
```

## Sections

### Hero Section
- Name and title
- Tagline
- Avatar with sci-fi effects
- Call-to-action buttons

### About Section
- Professional bio
- Contact information
- Location

### Skills Section
- Categorized technical skills
- Interactive cards with hover effects

### Experience Section
- Timeline-based work history
- Job details and technologies
- Visual timeline with sci-fi styling

### Projects Section
- Featured and other projects
- Project descriptions and tech stack
- Links to GitHub/demos

### Certifications Section
- Professional certifications
- Course completions
- Credential links

### Blog Section
- Recent blog posts
- Infinite scroll loading
- Tags and reading time
- Link to full blog page

### Contact Section
- Social media links
- Email contact
- Icon-based navigation

## Deployment

### GitHub Pages

1. Update `docusaurus.config.ts`:
   - Set `url` to your GitHub Pages URL
   - Set `baseUrl` to your repository name

2. Deploy:
```bash
npm run deploy
```

### Vercel/Netlify

Connect your repository and deploy with these settings:

- **Build Command**: `npm run build`
- **Output Directory**: `build`

## Contributing

This is a personal website template. Feel free to fork and customize for your own use!

## License

MIT License - feel free to use this template for your own website.

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Inspired by modern developer portfolios and sci-fi aesthetics
