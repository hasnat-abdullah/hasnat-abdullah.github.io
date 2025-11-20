export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j',
    date: '2025',
  },
  {
    title: 'Data Science',
    issuer: 'Stanford University & NSU',
    date: '2024',
  },
  {
    title: 'Behavioral Economics In Action',
    issuer: 'University of Toronto & edx',
    date: '2022',
  },
  {
    title: 'Business Analysis & Prototyping',
    issuer: 'LICT & BracIT',
    date: '2019',
  }
];

