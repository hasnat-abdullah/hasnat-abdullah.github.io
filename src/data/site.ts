export const site = {
  name: 'Abu Hasnat Abdullah',
  role: 'Senior AI Engineer',
  location: 'Dhaka, Bangladesh',
  timezone: 'UTC+6',
  email: 'abdullah.2010bd@gmail.com',
  github: 'https://github.com/hasnat-abdullah',
  linkedin: 'https://linkedin.com/in/hasnatabdullah',
  githubHandle: 'hasnat-abdullah',
  linkedinHandle: 'hasnatabdullah',
  cv: '/Abu_Hasnat_Abdullah_Resume.pdf',
  cvFilename: 'Abu_Hasnat_Abdullah_Resume.pdf',
  portrait: '/img/hasnat.jpg',
  url: 'https://hasnat-abdullah.github.io',
  description:
    'Senior AI Engineer building LLM, RAG and computer-vision systems that hold up in production. Ten years in software, six on production AI for clients in Norway, Sweden and Bangladesh.',
} as const;

export const nav = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#credentials', label: 'Credentials' },
] as const;

export const hero = {
  eyebrow: 'Senior AI Engineer — Dhaka, Bangladesh',
  headline: ['Abu Hasnat', 'Abdullah'],
  lede: 'I build LLM and computer-vision systems that hold up in production.',
  standfirst:
    'Ten years in software, six on production AI. Currently AI engineering lead for <strong style="font-weight:700;color:var(--color-text)">Sensa AS</strong>, Norway.',
  showAvailability: true,
  availability: 'Open to senior and staff AI roles, and to selected consulting.',
  figcaption: 'Fig. 01 — A. H. Abdullah',
  portraitAlt: 'Portrait of Abu Hasnat Abdullah',
} as const;
