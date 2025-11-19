export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Analytics Platform',
    description: `Built a real-time analytics platform with ML-based anomaly detection. 
    Processes millions of events per day with sub-second latency.`,
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'Kafka', 'ClickHouse'],
  },
  {
    title: 'Microservices E-Commerce Backend',
    description: `Designed and implemented a scalable microservices architecture for e-commerce platform. 
    Handles 100K+ concurrent users with 99.9% uptime.`,
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'ML Model Deployment Pipeline',
    description: `Created an automated MLOps pipeline for training, testing, and deploying ML models. 
    Reduced deployment time from days to hours.`,
    technologies: ['Python', 'MLflow', 'Docker', 'AWS SageMaker', 'GitHub Actions'],
  },
  {
    title: 'Real-time Chat Application',
    description: `Developed a scalable real-time chat system with WebSocket support. 
    Supports group chats, file sharing, and message encryption.`,
    technologies: ['Node.js', 'Socket.io', 'Redis', 'MongoDB', 'React'],
  },
  {
    title: 'Data Processing Pipeline',
    description: `Built ETL pipeline for processing and analyzing large datasets. 
    Automated data cleaning, transformation, and loading workflows.`,
    technologies: ['Python', 'Apache Spark', 'Airflow', 'AWS S3', 'Redshift'],
  },
];

