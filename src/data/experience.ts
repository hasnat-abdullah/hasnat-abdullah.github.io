export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Cefalo Bangladesh Ltd. · Sensa AS, Norway',
    location: 'Dhaka, Bangladesh',
    period: 'Nov 2024 - Present',
    description: `Own AI engineering for Sensa, a Norwegian industrial-AI company — delivering LLM applications, computer-vision systems, time-series MLOps, and the underlying data platform end-to-end, with deep focus on evaluation, observability, and responsible-AI guardrails.`,
    technologies: ['LLM', 'OpenAI', 'RAG', 'Llama 3.2', 'DeepSeek', 'Qwen', 'Unsloth', 'QLoRA', 'YOLOv11', 'FastAPI', 'Python', 'Neo4j', 'InfluxDB', 'PGVector', 'Mage.ai', 'AzureML', 'MLflow', 'Azure'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Strativ AB',
    location: 'Sweden · Remote',
    period: 'Apr 2021 - Jan 2024',
    description: `Led a cross-functional team of 11 engineers across 6 concurrent enterprise projects for top-tier Swedish clients — owning system design, backend architecture (Python, Django), code review, and delivery, while staying hands-on with API and AI feature development.`,
    technologies: ['Python', 'Django', 'PostgreSQL', 'PGVector', 'LLM', 'OpenAI', 'RAG', 'REST API', 'Kafka', 'AWS', 'SaaS'],
  },
  {
    title: 'Software Engineer',
    company: 'Circle Fintech Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Sep 2020 - Apr 2021',
    description: `Shipped Boarding Bay — an eKYC platform for Jamuna Bank — modernizing customer onboarding and accelerating business financial transaction processing across branches. Built 3 production-grade microservices (NID OCR, face detection, billing) that automated identity verification and significantly reduced manual onboarding time.`,
    technologies: ['FastAPI', 'Flask', 'Django', 'REST API', 'Microservices', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'OCR'],
  },
  {
    title: 'Junior Research Analyst',
    company: 'Economic Research Group',
    location: 'Dhaka, Bangladesh',
    period: 'Apr 2020 - Aug 2020',
    description: `Analyzed mobile-app data for Romoni (on-demand beauty marketplace) to drive sales growth and forecast demand using regression models, informing pricing and marketing decisions.`,
    technologies: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'Regression'],
  },
  {
    title: 'Research Assistant',
    company: 'North South University',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2020 - Feb 2020',
    description: `Built the-Waves web application (the-waves.org) to publish research articles; contributed research on technology, innovation, and policy topics.`,
    technologies: ['Web Development', 'Research'],
  },
  {
    title: 'Founder & CEO',
    company: 'Shikhte Chai',
    location: 'Dhaka, Bangladesh',
    period: 'Apr 2016 - Jan 2020',
    description: `Founded and scaled an educational initiative in Bangladesh, leading strategy, operations, and program design to upskill students in technology and entrepreneurship.`,
    technologies: ['Leadership', 'Strategic Planning', 'Educational Technology'],
  },
];
