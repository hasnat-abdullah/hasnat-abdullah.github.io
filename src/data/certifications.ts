export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: '2023',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: '2022',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    date: '2022',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University / Coursera',
    date: '2021',
  },
];

