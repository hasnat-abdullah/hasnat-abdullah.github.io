// Single source of truth for portfolio content. Sourced from the 2026 CVs
// (Senior Software Engineer / Senior ML Engineer / Senior Data Scientist variants).

export const profile = {
  name: 'Abu Hasnat Abdullah',
  handle: 'hasnat.abdullah',
  role: 'Senior Software Engineer',
  metaTitle: 'Abu Hasnat Abdullah — Senior Software Engineer, AI & ML',
  description:
    'Senior Software Engineer with 6+ years building Python backends, data platforms and production LLM, ML and computer-vision systems for clients in Norway, Sweden and Bangladesh.',
  email: 'abdullah.2010bd@gmail.com',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  linkedin: 'https://linkedin.com/in/hasnatabdullah',
  github: 'https://github.com/hasnat-abdullah',
  cv: '/cv.pdf',
};

export const signals = [
  { value: '6+ yrs', label: 'Shipping Python backend, data and ML systems to production' },
  { value: '8', label: 'Engineers led across 6 client projects at Strativ AB' },
  { value: '97%', label: 'Résumé-parsing accuracy from a fine-tuned local 3B model' },
  { value: '98%', label: 'Pellet-detection accuracy, up from 40%' },
];

export type ProjectCategory = 'llm' | 'cv' | 'mlops' | 'backend';

export const projectFilters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'llm', label: 'LLM & agents' },
  { id: 'cv', label: 'Computer vision' },
  { id: 'mlops', label: 'MLOps & data' },
  { id: 'backend', label: 'Backend' },
];

export interface Project {
  name: string;
  domain: string;
  cats: ProjectCategory[];
  desc: string;
  stack: string[];
  metric?: string;
}

export const projects: Project[] = [
  {
    name: 'Unity AI',
    domain: 'LLM · Agents · RAG',
    cats: ['llm'],
    desc: 'LLM assistant that lets industrial plant operators query live plant data in plain language. Hybrid RAG over a Neo4j knowledge graph, InfluxDB time-series data and PGVector, with LangGraph agents, MCP tools and source-cited answers under data-governance rules to limit hallucinations.',
    stack: ['LangGraph', 'MCP', 'RAG', 'FastAPI', 'Neo4j', 'InfluxDB', 'PGVector', 'Azure'],
  },
  {
    name: 'CVInsight',
    domain: 'LLM · Fine-tuning',
    cats: ['llm'],
    metric: '97% accuracy on a local 3B model',
    desc: 'Internal LLM résumé parser that turns PDF and DOCX CVs into structured, ATS-ready data with role and skill categories, plus a recruiter Q&A chatbot. Fine-tuned and benchmarked Llama 3.2, DeepSeek and Qwen with QLoRA — matching cloud-API quality at a fraction of the cost.',
    stack: ['Llama 3.2', 'DeepSeek', 'Qwen', 'Unsloth', 'QLoRA', 'FastAPI'],
  },
  {
    name: 'Pellet Detection',
    domain: 'Computer vision',
    cats: ['cv'],
    metric: 'Detection accuracy 40% → 98%',
    desc: 'Trained and deployed a YOLOv11-nano model that detects and counts fish-feed pellets in real-time aquaculture video, enabling automated feed-rate optimisation for sensor-equipped fish farms.',
    stack: ['YOLOv11', 'PyTorch', 'OpenCV', 'Docker', 'Python'],
  },
  {
    name: 'Unity Engine',
    domain: 'Data platform',
    cats: ['mlops'],
    metric: 'Powers 3 Sensa products',
    desc: 'The shared data-orchestration and feature platform behind Unity AI, Unity MLOps and Pellet Detection. Mage.ai ETL pipelines ingest high-throughput sensor and external data into time-series and feature stores, with reusable transforms shared by anomaly detection and RAG retrieval.',
    stack: ['Mage.ai', 'Python', 'InfluxDB', 'Neo4j', 'PGVector', 'Azure'],
  },
  {
    name: 'Unity MLOps',
    domain: 'MLOps · Time-series',
    cats: ['mlops'],
    desc: 'End-to-end anomaly detection for industrial sensor data: automated training with Isolation Forest and the pretrained Moirai v2 model, MLflow tracking and registry, Azure ML deployment and drift monitoring — turning manual log review into real-time alerts.',
    stack: ['scikit-learn', 'Moirai v2', 'MLflow', 'Azure ML', 'FastAPI'],
  },
  {
    name: 'Julia AI (TourGPT)',
    domain: 'LLM · SaaS',
    cats: ['llm', 'backend'],
    desc: 'SaaS travel chatbot for Resemolnets, grounded in a custom tour knowledge base, giving personalised tour recommendations and handling orders end to end. Owned prompt engineering, embedding strategy and safety guardrails from prototype to production.',
    stack: ['OpenAI', 'LangChain', 'Django', 'PostgreSQL', 'PGVector', 'AWS'],
  },
  {
    name: 'Boarding Bay',
    domain: 'Fintech · eKYC',
    cats: ['backend', 'cv'],
    metric: '3 production microservices',
    desc: 'National ID OCR, face detection and billing services for Jamuna Bank’s eKYC platform — automating identity checks that were previously done by hand and cutting onboarding time across branches.',
    stack: ['FastAPI', 'Flask', 'Django', 'OpenCV', 'Tesseract OCR', 'PyTorch'],
  },
  {
    name: 'Investment Platform',
    domain: 'Event-driven · Forecasting',
    cats: ['backend', 'mlops'],
    desc: 'Portfolio-tracking platform for Disruptive Ventures covering company performance, sales and accounting. Third-party accounting and marketing data flows in through Kafka-based event-driven processing, with time-series sales forecasting on top.',
    stack: ['Django', 'PostgreSQL', 'Kafka', 'Redis', 'scikit-learn', 'AWS'],
  },
  {
    name: 'Health Check',
    domain: 'Health tech',
    cats: ['backend'],
    desc: 'Digital primary-care platform for Kry that ingests body measurements and lab blood-test results through third-party APIs and turns them into health insights, with predictive health-condition analysis.',
    stack: ['Django', 'REST APIs', 'PostgreSQL', 'Kafka', 'scikit-learn', 'AWS'],
  },
];

export const archive: { name: string; stack: string; url?: string }[] = [
  { name: 'KO — a Bangla programming language', stack: 'Python · Language design', url: 'https://github.com/hasnat-abdullah/KO-Language' },
  { name: 'Open Organization — transparent, traceable donations', stack: 'Django · PostgreSQL', url: 'https://github.com/hasnat-abdullah/OpenOrganization' },
  { name: 'Terrorist Attack Success Prediction', stack: 'scikit-learn · Random Forest · XGBoost', url: 'https://github.com/hasnat-abdullah/Terrorist-attack-success-Prediction' },
  { name: 'Smart College Management with Biometric Attendance', stack: 'Django · Celery · Redis · AWS · IoT' },
];

export const jobs = [
  {
    role: 'Senior Software Engineer',
    company: 'Cefalo Bangladesh Ltd. · Sensa AS, Norway',
    dates: 'Nov 2024 — Present',
    place: 'Dhaka, Bangladesh',
    desc: 'Lead developer for Sensa AS’s industrial-AI platform and Cefalo’s internal AI products — LLM assistants, time-series anomaly detection, computer vision and the shared data platform underneath. Member of the AI Task Force and AI Hackathon mentor & judge. Ships production services used by 500+ users through an AI-agent-led workflow (Claude Code) backed by guardrails, automated tests and monitoring.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'MCP', 'Neo4j', 'InfluxDB', 'PGVector', 'Mage.ai', 'MLflow', 'Azure ML', 'PyTorch', 'YOLOv11'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Strativ AB',
    dates: 'Apr 2021 — Jan 2024',
    place: 'Sweden · Remote',
    desc: 'Tech lead for client products in Sweden — Resemolnets, Disruptive Ventures and Kry. Led cross-functional teams of up to 8 engineers across 6 client projects, owning system design, backend architecture, code review and delivery while staying hands-on in API and AI features.',
    stack: ['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Kafka', 'Redis', 'AWS', 'React', 'OpenAI', 'LangChain', 'PGVector'],
  },
  {
    role: 'Software Engineer',
    company: 'Circle Fintech Ltd.',
    dates: 'Sep 2020 — Apr 2021',
    place: 'Dhaka, Bangladesh',
    desc: 'Built Boarding Bay, Jamuna Bank’s eKYC platform: three production microservices — national ID OCR, face detection and billing — that automated manual identity checks and sped up customer onboarding across branches.',
    stack: ['Python', 'FastAPI', 'Flask', 'Django', 'PostgreSQL', 'OpenCV', 'Tesseract OCR', 'PyTorch', 'TensorFlow', 'AWS'],
  },
  {
    role: 'Junior Research Analyst',
    company: 'Economic Research Group',
    dates: 'Apr 2020 — Aug 2020',
    place: 'Dhaka, Bangladesh',
    desc: 'Analysed mobile-app data for Romoni, an on-demand beauty-services marketplace, and built regression-based sales forecasts that informed pricing and marketing decisions.',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
  },
  {
    role: 'Founder & CEO',
    company: 'Shikhte Chai',
    dates: 'Apr 2016 — Jan 2020',
    place: 'Dhaka, Bangladesh',
    desc: 'Founded and ran an education initiative in Bangladesh that taught students technology and entrepreneurship — leading strategy, operations and program design.',
    stack: [] as string[],
  },
];

export const skills: { group: string; list: string[] }[] = [
  { group: 'LLM & agents', list: ['RAG', 'LangChain', 'LangGraph', 'MCP', 'AI agents', 'OpenAI', 'Llama', 'QLoRA fine-tuning', 'Unsloth', 'LLM evaluation', 'Guardrails'] },
  { group: 'ML & deep learning', list: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Hugging Face Transformers', 'YOLOv11', 'OpenCV'] },
  { group: 'Applied ML', list: ['Time-series forecasting', 'Anomaly detection', 'Computer vision', 'OCR', 'NLP', 'Feature engineering'] },
  { group: 'MLOps', list: ['MLflow', 'Azure ML', 'Model registry', 'Drift monitoring', 'Mage.ai pipelines', 'Docker', 'CI/CD'] },
  { group: 'Backend & APIs', list: ['Python', 'FastAPI', 'Django', 'Flask', 'REST APIs', 'Microservices', 'Event-driven architecture', 'Kafka', 'Redis'] },
  { group: 'Data', list: ['SQL', 'PostgreSQL', 'MongoDB', 'InfluxDB', 'Neo4j', 'PGVector', 'Chroma', 'Pandas', 'NumPy'] },
  { group: 'Cloud & DevOps', list: ['AWS (Lambda, ECS, EC2, S3, RDS, API Gateway)', 'Azure', 'Docker', 'GitHub Actions'] },
  { group: 'Frontend & visualisation', list: ['JavaScript', 'React', 'HTML', 'CSS', 'Grafana', 'Streamlit', 'Matplotlib'] },
  { group: 'Practices', list: ['System design', 'TDD', 'Code review', 'Mentoring', 'Agile', 'AI-assisted development (Claude Code)'] },
];

export const certs: { name: string; issuer: string; date: string; url?: string }[] = [
  { name: 'Neo4j Certified Professional', issuer: 'Neo4j', date: '2025' },
  { name: 'Neo4j & Generative AI Fundamentals', issuer: 'Neo4j GraphAcademy', date: 'Nov 2025', url: 'https://graphacademy.neo4j.com/c/d6ae6b92-1eca-4f97-9da4-f09b4507e9a4/' },
  { name: 'Cypher Fundamentals', issuer: 'Neo4j GraphAcademy', date: 'Oct 2025', url: 'https://graphacademy.neo4j.com/c/667e922e-a69f-45f8-846a-5916fd984740/' },
  { name: 'Neo4j Fundamentals', issuer: 'Neo4j GraphAcademy', date: 'Oct 2025', url: 'https://graphacademy.neo4j.com/c/6713ce6b-96e2-47cb-8ac7-c23dc7f6f7e5/' },
  { name: 'Data Science', issuer: 'Stanford University (Prof. Jennifer Widom)', date: '2024' },
  { name: 'Business Analysis & Prototyping', issuer: 'LICT & BracIT', date: '2019' },
];

export const education = {
  degree: 'B.Sc. in Computer Science & Engineering',
  school: 'North South University · Dhaka',
  dates: '2015 — 2019',
  coursework: 'Artificial Intelligence, Pattern Recognition & Neural Networks, Probability & Statistics, Algorithms',
};

export const research = {
  title: 'Predicting the Result of a Cricket Match by Applying Data Mining Techniques',
  meta: 'ResearchGate · 2020',
  desc: 'Predicted one-day match winners using Recursive Feature Elimination with Decision Tree, Random Forest and XGBoost models.',
};
