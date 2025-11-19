export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Backend & Systems',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Node.js' },
      { name: 'Go' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'RabbitMQ' },
      { name: 'Kafka' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'scikit-learn' },
      { name: 'NLP' },
      { name: 'Computer Vision' },
      { name: 'Deep Learning' },
      { name: 'MLOps' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'CI/CD' },
      { name: 'Terraform' },
      { name: 'Linux' },
    ],
  },
  {
    category: 'Architecture & Design',
    skills: [
      { name: 'Microservices' },
      { name: 'REST API' },
      { name: 'GraphQL' },
      { name: 'System Design' },
      { name: 'Event-Driven Architecture' },
      { name: 'Design Patterns' },
    ],
  },
];

