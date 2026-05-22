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
    title: 'Unity AI',
    description: `LLM-powered conversational assistant that lets industrial operators query plant data in natural language. Designed a custom RAG pipeline combining a Neo4j knowledge graph with an InfluxDB time-series store, with grounded citations and data-governance rules that drive confident, source-backed answers and minimize hallucinations.`,
    technologies: ['LLM', 'OpenAI', 'RAG', 'FastAPI', 'Neo4j', 'InfluxDB', 'PGVector', 'Pandas', 'SaaS', 'Azure'],
    featured: true,
  },
  {
    title: 'CV Analyser',
    description: `AI résumé-parsing platform that extracts text from CVs and returns structured, ATS-ready output with role/skill categorization, plus a chatbot for recruiter Q&A over the parsed corpus. Fine-tuned Llama 3.2, DeepSeek, and Qwen with Unsloth (QLoRA), benchmarked trade-offs across model families, and reached 97% accuracy on a local 3B model — matching cloud-API quality at a fraction of the cost.`,
    technologies: ['Llama 3.2', 'DeepSeek', 'Qwen', 'Unsloth', 'QLoRA', 'PEFT', 'HuggingFace', 'FastAPI', 'OCR', 'Python'],
    featured: true,
  },
  {
    title: 'Fish Food Pellet Detection',
    description: `Productionized a YOLOv11-nano computer-vision model that detects and counts fish-food pellets in real-time aquaculture footage, lifting detection accuracy from 40% to 98% and unlocking automated feed-rate optimization for sensor-equipped fish farms.`,
    technologies: ['YOLOv11', 'PyTorch', 'OpenCV', 'Python', 'Computer Vision'],
    featured: true,
  },
  {
    title: 'Sensa Engine',
    description: `Built Sensa's internal data-orchestration and feature platform — the foundation powering Unity AI, Unity-MLOps, and Pellet Detection. Designed Mage.ai ETL pipelines to ingest sensor and external data into time-series and feature stores, with reusable transforms that serve both real-time anomaly detection and downstream RAG retrieval.`,
    technologies: ['Mage.ai', 'Python', 'FastAPI', 'InfluxDB', 'Neo4j', 'PGVector', 'Pandas', 'Azure'],
    featured: true,
  },
  {
    title: 'Unity-MLOps',
    description: `End-to-end anomaly-detection pipeline on time-series sensor data with automated training, model registry, deployment, and drift monitoring — turning manual log review into proactive, real-time alerts.`,
    technologies: ['FastAPI', 'Python', 'scikit-learn', 'AzureML', 'MLflow'],
    featured: true,
  },
  {
    title: 'TourGPT',
    description: `A SaaS RAG chatbot grounded in a custom tour knowledge base, delivering personalized recommendations and end-to-end order management. Owned prompt engineering, embedding strategy, and safety guardrails from prototype to production.`,
    technologies: ['LLM', 'OpenAI', 'RAG', 'Django', 'PostgreSQL', 'PGVector', 'SaaS', 'AWS'],
    featured: true,
  },
  {
    title: 'Investment Management System',
    description: `Portfolio-analytics platform tracking performance, sales, and accounting across multiple portfolio companies, integrating third-party data sources via event-driven processing.`,
    technologies: ['Django', 'REST API', 'PostgreSQL', 'SaaS', 'Kafka', 'AWS'],
  },
  {
    title: 'Health Check',
    description: `Digital primary-healthcare platform ingesting physical measurements and lab blood-test reports via third-party APIs, surfacing actionable health metrics for end users.`,
    technologies: ['Django', 'REST API', 'PostgreSQL', 'Kafka', 'NumPy', 'AWS'],
  },
  {
    title: 'Boarding Bay',
    description: `3 production-grade microservices (NID OCR, face detection, billing) for Jamuna Bank's eKYC platform — automating identity verification and significantly reducing manual onboarding time.`,
    technologies: ['FastAPI', 'Flask', 'Django', 'REST API', 'Microservices', 'TensorFlow', 'PyTorch', 'OCR'],
    featured: true,
  },
  {
    title: 'Smart College Management with Biometric Attendance',
    description: `Campus platform with probabilistic student-performance analysis, absence notifications, result tracking, fee management, report cards, and ID card generation.`,
    technologies: ['Django', 'REST API', 'PostgreSQL', 'Celery', 'Redis', 'AWS', 'IOT'],
  },
  {
    title: 'Open Organization — Transparent & Traceable Donation Raise',
    description: `Platform for transparent and traceable donation raising, complete with an accounting system.`,
    technologies: ['Django', 'PostgreSQL'],
    github: 'https://github.com/hasnat-abdullah/OpenOrganization',
  },
  {
    title: 'KO — Bangla Programming Language',
    description: `Open-source programming language written in Python with its own Bangla syntax, making programming accessible to native Bangla speakers and children.`,
    technologies: ['Python', 'Compiler Design'],
    github: 'https://github.com/hasnat-abdullah/KO-Language',
  },
  {
    title: 'Terrorist Attack Success Prediction',
    description: `Ensemble ML model achieving 92.6% accuracy on Kaggle-sourced data using Random Forest and XGBoost.`,
    technologies: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib', 'SVM', 'Random Forest', 'ANN', 'XGBoost'],
    github: 'https://github.com/hasnat-abdullah/Terrorist-attack-success-Prediction',
  },
];
