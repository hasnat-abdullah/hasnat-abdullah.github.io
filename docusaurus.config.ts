import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Abu Hasnat Abdullah',
  tagline: 'Backend | ML | LLM | Building Scalable Systems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hasnat-abdullah.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'hasnat-abdullah',
  projectName: 'hasnat-abdullah.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable docs for personal site
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog',
          blogDescription: 'Thoughts on software engineering, AI, and technology',
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Categories',
          feedOptions: {
            type: 'all',
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/pic.jpeg',
    metadata: [
      {name: 'keywords', content: 'senior software engineer, backend, AI, ML, Anomaly detection, time series, forcasting, llm, graph database professional bangladesh,tech blog'},
      {name: 'author', content: 'Abu Hasnat Abdullah'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: false,
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          to: '/#skills',
          label: 'Skills',
          position: 'left',
        },
        {
          to: '/#experience',
          label: 'Experience',
          position: 'left',
        },
        {
          to: '/#projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Built with ❤️ | © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['python', 'java', 'bash', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
