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
    category: 'Generative AI & LLMs',
    skills: [
      { name: 'OpenAI GPT' },
      { name: 'Anthropic Claude' },
      { name: 'Llama 3 / 3.2' },
      { name: 'Mistral' },
      { name: 'DeepSeek' },
      { name: 'Qwen' },
      { name: 'Prompt Engineering' },
      { name: 'RAG Pipelines' },
      { name: 'Semantic Chunking' },
      { name: 'Evaluation Frameworks' },
      { name: 'Hallucination Guardrails' },
    ],
  },
  {
    category: 'Model Fine-Tuning',
    skills: [
      { name: 'LoRA' },
      { name: 'QLoRA' },
      { name: 'PEFT' },
      { name: 'Unsloth' },
      { name: 'HuggingFace Transformers' },
      { name: 'Domain Adaptation' },
    ],
  },
  {
    category: 'Vector & Knowledge Stores',
    skills: [
      { name: 'PGVector' },
      { name: 'Chroma' },
      { name: 'Neo4j Knowledge Graphs' },
      { name: 'Cypher' },
      { name: 'Embedding Optimization' },
    ],
  },
  {
    category: 'ML & Computer Vision',
    skills: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'scikit-learn' },
      { name: 'YOLOv11' },
      { name: 'OpenCV' },
      { name: 'OCR' },
      { name: 'Object Detection' },
      { name: 'Time-Series Forecasting' },
      { name: 'Anomaly Detection' },
      { name: 'Pandas' },
      { name: 'NumPy' },
    ],
  },
  {
    category: 'MLOps & Data Engineering',
    skills: [
      { name: 'Mage.ai (ETL / orchestration)' },
      { name: 'MLflow' },
      { name: 'AzureML' },
      { name: 'Model Registry' },
      { name: 'Feature Stores' },
      { name: 'Drift Monitoring' },
      { name: 'CI/CD' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Django' },
      { name: 'Flask' },
      { name: 'REST APIs' },
      { name: 'Async Services' },
      { name: 'Microservices' },
      { name: 'SaaS' },
      { name: 'Kafka' },
      { name: 'Redis' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'InfluxDB (time-series)' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (Lambda, EC2, ECS, S3, RDS, API Gateway)' },
      { name: 'Azure (AKS, ACR)' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Terraform' },
    ],
  },
  {
    category: 'Leadership & Delivery',
    skills: [
      { name: 'Cross-functional Team Leadership (11+ engineers)' },
      { name: 'System Design' },
      { name: 'Technical Mentorship' },
      { name: 'Agile / Scrum' },
      { name: 'Sprint Planning' },
      { name: 'Stakeholder Management' },
      { name: 'Requirement Analysis' },
      { name: 'Design Thinking' },
    ],
  },
];
