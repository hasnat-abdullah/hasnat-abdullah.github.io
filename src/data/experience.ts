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
    company: 'Cefalo Bangladesh Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Nov 2024 - Present',
    description: `Building scalable ML solutions to unlock value from industrial time series data. Specializing in anomaly detection, predictive analytics, and MLOps, I develop AI-driven insights for business transformation.`,
    technologies: ['FastAPI', 'Python', 'scikit-learn', 'AzureML', 'MLflow', 'LLM', 'OpenAI', 'Neo4j', 'Pandas', 'InfluxDB'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Strativ AB',
    location: 'Dhaka, Bangladesh',
    period: 'Apr 2021 - Jan 2024',
    description: `Led a team of 11 people in managing 6 complex projects for prestigious Swedish companies, balancing project management, system design, backend coding, and code review.`,
    technologies: ['Python', 'Django', 'PostgreSQL', 'PGVector', 'LLM', 'OpenAI', 'REST API', 'Kafka', 'AWS'],
  },
  {
    title: 'Software Engineer',
    company: 'Circle Fintech Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Sep 2020 - Apr 2021',
    description: `Developed eKYC system for Jamuna Bank, modernizing customer onboarding. Built 3 microservices: NID OCR, Face detection, and Billing, enhancing data processing and customer interactions.`,
    technologies: ['FastAPI', 'Flask', 'Django', 'REST API', 'Microservices', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
  },
  {
    title: 'Junior Research Analyst',
    company: 'Economic Research Group',
    location: 'Dhaka, Bangladesh',
    period: 'Apr 2020 - Aug 2020',
    description: `Analyzed Romoni mobile app's data to draw meaningful insights and drive sales growth and forecasting.`,
    technologies: ['Python', 'PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'Regression'],
  },
  {
    title: 'Research Assistant',
    company: 'North South University',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2020 - Feb 2020',
    description: `Developed the-Waves web application to publish research articles. Investigated topics on Technology, Innovation, and Policy.`,
    technologies: ['Web Development', 'Research'],
  },
  {
    title: 'CEO & Founder',
    company: 'Shikhte Chai',
    location: 'Dhaka, Bangladesh',
    period: 'Apr 2016 - Jan 2019',
    description: `Founded and led Shikhte Chai Bangladesh as CEO, driving organizational growth and strategic vision. Pioneered impactful educational initiatives, empowering individuals with essential knowledge and skills.`,
    technologies: ['Leadership', 'Strategic Planning', 'Educational Technology'],
  },
];

