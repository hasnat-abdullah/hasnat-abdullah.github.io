export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Neo4j & Generative AI Fundamentals',
    issuer: 'Neo4j GraphAcademy',
    date: 'Nov 2025',
    credentialId: 'd6ae6b92-1eca-4f97-9da4-f09b4507e9a4',
    url: 'https://graphacademy.neo4j.com/c/d6ae6b92-1eca-4f97-9da4-f09b4507e9a4/',
  },
  {
    title: 'Cypher Fundamentals',
    issuer: 'Neo4j GraphAcademy',
    date: 'Oct 2025',
    credentialId: '667e922e-a69f-45f8-846a-5916fd984740',
    url: 'https://graphacademy.neo4j.com/c/667e922e-a69f-45f8-846a-5916fd984740/',
  },
  {
    title: 'Neo4j Fundamentals',
    issuer: 'Neo4j GraphAcademy',
    date: 'Oct 2025',
    credentialId: '6713ce6b-96e2-47cb-8ac7-c23dc7f6f7e5',
    url: 'https://graphacademy.neo4j.com/c/6713ce6b-96e2-47cb-8ac7-c23dc7f6f7e5/',
  },
  {
    title: 'Data Science',
    issuer: 'Stanford University (Prof. Jennifer Widom)',
    date: '2024',
  },
  {
    title: 'Business Analysis & Prototyping',
    issuer: 'LICT (Bangladesh Govt.) & BracIT',
    date: '2019',
  },
];
