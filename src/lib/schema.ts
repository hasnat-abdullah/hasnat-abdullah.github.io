// Schema.org entities shared across pages. Every page points at the same Person @id,
// so Google merges the site, the articles and the external profiles into one entity.
import { profile, skills, certs, education } from '../data/site';

export const SITE = 'https://hasnat-abdullah.github.io/';
export const PERSON_ID = `${SITE}#person`;
export const WEBSITE_ID = `${SITE}#website`;
export const OG_IMAGE = new URL(profile.ogImage.src, SITE).href;

export const personRef = { '@id': PERSON_ID };

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: profile.name,
  givenName: profile.givenName,
  familyName: profile.familyName,
  alternateName: profile.alternateNames,
  description: profile.description,
  url: SITE,
  image: { '@type': 'ImageObject', url: OG_IMAGE, width: profile.ogImage.width, height: profile.ogImage.height },
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  worksFor: { '@type': 'Organization', name: profile.employer.name, url: profile.employer.url },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  nationality: { '@type': 'Country', name: 'Bangladesh' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'North South University', url: 'https://www.northsouth.edu' },
  hasOccupation: {
    '@type': 'Occupation',
    name: profile.role,
    occupationLocation: { '@type': 'City', name: 'Dhaka' },
    skills: skills.flatMap((s) => s.list).join(', '),
  },
  knowsAbout: [
    'Artificial intelligence', 'Machine learning', 'Large language models', 'Retrieval-augmented generation',
    'AI agents', 'Computer vision', 'MLOps', 'Time-series anomaly detection', 'Python', 'FastAPI', 'Django',
    'Neo4j', 'System design',
  ],
  knowsLanguage: ['English', 'Bengali'],
  hasCredential: [
    ...certs.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
      ...(c.url && { url: c.url }),
    })),
    {
      '@type': 'EducationalOccupationalCredential',
      name: education.degree,
      credentialCategory: 'degree',
      recognizedBy: { '@type': 'CollegeOrUniversity', name: 'North South University' },
    },
  ],
  sameAs: [profile.linkedin, profile.github],
};

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE,
  name: profile.name,
  alternateName: profile.alternateNames,
  description: profile.description,
  inLanguage: 'en',
  publisher: personRef,
};
