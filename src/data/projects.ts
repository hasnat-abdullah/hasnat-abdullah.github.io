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
    title: 'Unity Data Explorer',
    description: `Developed LLM powered SaaS based data explorer for industrial time series data analysis.`,
    technologies: ['LLM', 'OpenAI', 'FastAPI', 'Neo4j', 'Pandas', 'InfluxDB', 'SaaS', 'Azure'],
    featured: true,
  },
  {
    title: 'Unity-MLOps',
    description: `Detecting Anomalies from time series data produced by aqua sensors using machine learning.`,
    technologies: ['FastAPI', 'Python', 'scikit-learn', 'AzureML', 'MLflow'],
    featured: true,
  },
  {
    title: 'TourGPT',
    description: `A SaaS AI chatbot that utilizes a custom knowledge base, offers personalized tour suggestions, and ensures seamless order management.`,
    technologies: ['LLM', 'OpenAI', 'Django', 'PostgreSQL', 'PGVector', 'SaaS', 'AWS'],
    featured: true,
  },
  {
    title: 'Investment Management System',
    description: `Managing portfolio companies' performance, sales, and accounting, integrating third-party data seamlessly.`,
    technologies: ['Django', 'REST API', 'PostgreSQL', 'SaaS', 'Kafka', 'AWS'],
  },
  {
    title: 'Health Check',
    description: `Provide primary digital healthcare support based on essential health metrics including physical measurements and blood test reports from third-party labs via API.`,
    technologies: ['Django', 'REST API', 'PostgreSQL', 'Kafka', 'NumPy', 'AWS'],
  },
  {
    title: 'Boarding Bay',
    description: `Developed 3 microservices for eKYC system: NID OCR, Face detection, and Billing, enhancing data processing and customer interactions for Jamuna Bank.`,
    technologies: ['FastAPI', 'Flask', 'Django', 'REST API', 'Microservices', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Customized Universal AI Chatbot',
    description: `AI chatbot tailored with OpenAI for versatile applications, custom knowledge base for each user, and fine-tune their model.`,
    technologies: ['LLM', 'OpenAI', 'Django', 'PostgreSQL', 'PGVector', 'SaaS', 'AWS'],
  },
  {
    title: 'Smart College Management with Biometric Attendance',
    description: `Offering features like probabilistic student performance analysis, absence notifications, result tracking, fee management, report card generation, ID card creation etc.`,
    technologies: ['Django', 'REST API', 'PostgreSQL', 'Async IO', 'Kafka', 'Redis', 'AWS'],
  },
  {
    title: 'Open Organization - Transparent & Traceable Donation Raise',
    description: `Platform for transparent and traceable donation raising, complete with an accounting system.`,
    technologies: ['Django', 'PostgreSQL'],
  },
  {
    title: 'KO - Bangla Programming Language',
    description: `Developed a programming language in Bangla, enhancing accessibility for native speakers and children, written in Python with its own syntax.`,
    technologies: ['Python', 'Compiler Design'],
  },
  {
    title: 'Terrorist Attack Success Prediction',
    description: `Created a machine learning model to predict the success of terrorist attacks. Achieved 92.6% accuracy using ensemble learning with Random Forest.`,
    technologies: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib', 'SVM', 'Random Forest', 'ANN', 'XGBoost'],
  },
];

