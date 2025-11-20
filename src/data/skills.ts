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
    category: 'Data Science & ML',
    skills: [
      { name: 'ETL Pipeline' },
      { name: 'MLflow' },
      { name: 'Time Series Forecast' },
      { name: 'Anomaly Detection' },
      { name: 'LLM fine-tune' },
      { name: 'OCR' },
      { name: 'Object Detection' },
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'OpenCV' },
      { name: 'Pandas' },
      { name: 'MLOps' },

    ],
  },
  {
    category: 'Backend & Architecture',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'FastAPI' },
      { name: 'Async IO' },
      { name: 'REST API' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'PGVector' },
      { name: 'Neo4j' },
      { name: 'Microservices' },
      { name: 'System Design' },
      { name: 'SaaS' },
      { name: 'Message Broker (Kafka)' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'Kubernetes' },
      { name: 'Terraform' },
      { name: 'Azure (AKS, ACR)' },
      { name: 'Azure ML studio' },
      { name: 'AWS (Lambda, ECS, EC2, S3)' },

    ],
  },
  {
    category: 'Management & Leadership',
    skills: [
      { name: 'Project Management' },
      { name: 'Agile Methodology' },
      { name: 'Scrum' },
      { name: 'Sprint Planning' },
      { name: 'Requirement Analysis' },
      { name: 'Team Work' },
      { name: 'Design Thinking' },
    ],
  },
];