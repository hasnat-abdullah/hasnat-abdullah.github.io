// Single source of truth for portfolio content. Follows the 2026 Senior Machine Learning
// Engineer CV (public/cv.pdf): its headline, project order and skill groups lead.

export const profile = {
  name: 'Abu Hasnat Abdullah',
  givenName: 'Abu Hasnat',
  familyName: 'Abdullah',
  // Other spellings people search for; feeds the Person schema's alternateName.
  alternateNames: ['Hasnat Abdullah', 'A. H. Abdullah', 'hasnat-abdullah'],
  handle: 'hasnat.abdullah',
  role: 'Senior Machine Learning Engineer',
  focus: 'LLM & Agentic Systems, MLOps, Time-Series & Computer Vision',
  metaTitle: 'Abu Hasnat Abdullah — Senior Machine Learning Engineer, LLM & MLOps',
  description:
    'Senior Machine Learning Engineer with 6+ years building production ML and LLM systems in Python — RAG and agentic LLMs, MLOps, time-series anomaly detection and computer vision — for clients in Norway, Sweden and Bangladesh.',
  email: 'abdullah.2010bd@gmail.com',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  linkedin: 'https://www.linkedin.com/in/hasnatabdullah/',
  github: 'https://github.com/hasnat-abdullah',
  cv: '/cv.pdf',
  // Share card shown by Google, LinkedIn, X, Facebook, Slack and WhatsApp (1200×630).
  ogImage: { src: '/og.jpg', width: 1200, height: 630, alt: 'Abu Hasnat Abdullah — Senior Machine Learning Engineer' },
  employer: { name: 'Cefalo Bangladesh Ltd.', url: 'https://www.cefalo.com' },
  // Paste the content value of Google Search Console's "HTML tag" verification here.
  googleSiteVerification: '',
};

export const signals = [
  { value: '98%', label: 'Object-detection accuracy on real-time aquaculture video, up from 40%' },
  { value: '97%', label: 'Accuracy from a QLoRA fine-tuned local 3B LLM, at cloud-API quality' },
  { value: '6+ yrs', label: 'Building production ML and LLM systems in Python' },
  { value: '500+', label: 'Users on production services shipped; teams of up to 8 led' },
];

export type ProjectCategory = 'llm' | 'cv' | 'mlops' | 'backend';

export const projectFilters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'llm', label: 'LLM & agents' },
  { id: 'mlops', label: 'MLOps & time-series' },
  { id: 'cv', label: 'Computer vision' },
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
    desc: 'LLM assistant that lets industrial plant operators query live plant data in plain language: hybrid RAG over a Neo4j knowledge graph, InfluxDB time-series data and PGVector, with LangGraph agents, MCP tools and source-cited answers under data-governance rules to limit hallucinations.',
    stack: ['LangGraph', 'MCP', 'RAG', 'Neo4j', 'InfluxDB', 'PGVector', 'FastAPI', 'Azure'],
  },
  {
    name: 'Unity MLOps',
    domain: 'MLOps · Time-series',
    cats: ['mlops'],
    metric: 'Manual log review → real-time alerts',
    desc: 'End-to-end anomaly-detection platform for time-series sensor data: automated training with Isolation Forest and the pretrained Moirai v2 model, MLflow experiment tracking and model registry, Azure ML deployment and drift monitoring.',
    stack: ['scikit-learn', 'Moirai v2', 'MLflow', 'Azure ML', 'FastAPI'],
  },
  {
    name: 'Pellet Detection',
    domain: 'Computer vision',
    cats: ['cv'],
    metric: 'Detection accuracy 40% → 98%',
    desc: 'Trained and deployed a YOLOv11-nano object-detection model that detects and counts fish-feed pellets in real-time aquaculture video, enabling automated feed-rate optimisation for sensor-equipped fish farms.',
    stack: ['YOLOv11', 'PyTorch', 'OpenCV', 'Docker', 'Python'],
  },
  {
    name: 'CVInsight',
    domain: 'LLM · Fine-tuning',
    cats: ['llm'],
    metric: '97% accuracy on a local 3B model',
    desc: 'Internal LLM résumé parser that turns PDF and DOCX CVs into structured, ATS-ready data with role and skill categories, plus a recruiter Q&A chatbot. Fine-tuned and benchmarked Llama 3.2, DeepSeek and Qwen with QLoRA (Unsloth); the locally hosted Llama 3.2 3B matched cloud-API quality at a fraction of the cost.',
    stack: ['Llama 3.2', 'DeepSeek', 'Qwen', 'QLoRA', 'Unsloth', 'FastAPI'],
  },
  {
    name: 'Unity Engine',
    domain: 'Data & feature platform',
    cats: ['mlops'],
    metric: 'Powers Unity AI, MLOps & Pellet Detection',
    desc: 'Data-orchestration and feature platform: Mage.ai ETL pipelines ingest high-throughput sensor and external data into time-series and feature stores, with reusable transforms shared by real-time anomaly detection and RAG retrieval.',
    stack: ['Mage.ai', 'Python', 'InfluxDB', 'Neo4j', 'PGVector', 'Azure'],
  },
  {
    name: 'Julia AI (TourGPT)',
    domain: 'LLM · SaaS',
    cats: ['llm'],
    desc: 'SaaS travel chatbot for Resemolnets, grounded in a custom tour knowledge base, giving personalised tour recommendations and handling orders end to end. Owned prompt engineering, embedding strategy (PGVector) and safety guardrails from prototype to production.',
    stack: ['OpenAI', 'LangChain', 'PGVector', 'Django', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Investment Platform',
    domain: 'Forecasting · Event-driven',
    cats: ['mlops', 'backend'],
    desc: 'Platform for Disruptive Ventures that tracks portfolio-company performance, sales and accounting. Third-party accounting and marketing data flows in through event-driven processing, with time-series sales forecasting in scikit-learn.',
    stack: ['scikit-learn', 'Pandas', 'Kafka', 'Redis', 'Django', 'AWS'],
  },
  {
    name: 'Health Check',
    domain: 'Health tech · Predictive ML',
    cats: ['backend'],
    desc: 'Kry’s digital primary-care platform, ingesting body measurements and lab blood-test results from third-party APIs, with predictive health-condition analysis in scikit-learn.',
    stack: ['scikit-learn', 'Pandas', 'Django', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Boarding Bay',
    domain: 'Computer vision · OCR',
    cats: ['cv', 'backend'],
    metric: '3 production microservices',
    desc: 'National ID OCR, face detection and billing microservices for Jamuna Bank’s eKYC platform — automating identity checks that were previously done by hand and cutting onboarding time across branches.',
    stack: ['OpenCV', 'Tesseract OCR', 'PyTorch', 'TensorFlow', 'FastAPI', 'Django'],
  },
];

export const archive: { name: string; stack: string; url?: string }[] = [
  { name: 'KO — a Bangla programming language, so native speakers can learn to code in their first language', stack: 'Python · Language design', url: 'https://github.com/hasnat-abdullah/KO-Language' },
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
    desc: 'Lead developer for Sensa AS (Norway) and Cefalo’s internal AI products: RAG and agentic LLM systems, time-series anomaly detection, computer vision and the data and feature platform underneath. AI Task Force member and AI Hackathon mentor & judge. Ships production services used by 500+ users through an AI-agent-led workflow (Claude Code) with agent harnesses, guardrails, automated testing and end-to-end monitoring.',
    stack: ['Python', 'PyTorch', 'YOLOv11', 'OpenCV', 'scikit-learn', 'LangGraph', 'MCP', 'Unsloth', 'MLflow', 'Azure ML', 'Neo4j', 'InfluxDB'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Strativ AB',
    dates: 'Apr 2021 — Jan 2024',
    place: 'Sweden · Remote',
    desc: 'Tech lead for client products in Sweden — Resemolnets, Disruptive Ventures and Kry. Led cross-functional teams of up to 8 engineers across 6 client projects, owning system design, backend architecture, code review and delivery while staying hands-on in API and AI features.',
    stack: ['Python', 'scikit-learn', 'Pandas', 'OpenAI', 'LangChain', 'PGVector', 'Django', 'PostgreSQL', 'Kafka', 'Redis', 'AWS', 'React'],
  },
  {
    role: 'Software Engineer',
    company: 'Circle Fintech Ltd.',
    dates: 'Sep 2020 — Apr 2021',
    place: 'Dhaka, Bangladesh',
    desc: 'Built Boarding Bay, Jamuna Bank’s eKYC platform: three production microservices — national ID OCR, face detection and billing — applying OpenCV, Tesseract OCR, PyTorch and TensorFlow to automate manual identity checks and cut onboarding time across branches.',
    stack: ['Python', 'OpenCV', 'Tesseract OCR', 'PyTorch', 'TensorFlow', 'FastAPI', 'Flask', 'Django', 'PostgreSQL', 'AWS'],
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
    company: 'Shikhte Chai (education initiative)',
    dates: 'Apr 2016 — Jan 2020',
    place: 'Dhaka, Bangladesh',
    desc: 'Founded and ran an education initiative in Bangladesh that taught students technology and entrepreneurship — leading strategy, operations and program design.',
    stack: [] as string[],
  },
];

export const skills: { group: string; list: string[] }[] = [
  { group: 'ML & deep learning', list: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Hugging Face Transformers', 'YOLOv11', 'OpenCV'] },
  { group: 'LLM & agents', list: ['RAG', 'LangChain', 'LangGraph', 'MCP', 'OpenAI', 'QLoRA fine-tuning', 'Unsloth', 'LLM evals', 'Guardrails'] },
  { group: 'Applied ML', list: ['Time-series forecasting', 'Anomaly detection', 'Computer vision', 'OCR', 'NLP', 'Feature engineering'] },
  { group: 'MLOps', list: ['MLflow', 'Azure ML', 'Model registry', 'Drift monitoring', 'Docker', 'CI/CD (GitHub Actions)', 'Mage.ai pipelines'] },
  { group: 'Data', list: ['Python', 'SQL', 'Pandas', 'NumPy', 'PostgreSQL', 'InfluxDB', 'Neo4j', 'PGVector', 'Chroma', 'MongoDB'] },
  { group: 'Cloud & serving', list: ['Azure', 'AWS (Lambda, ECS, EC2, S3)', 'FastAPI', 'REST APIs', 'Kafka', 'Redis', 'Django', 'Flask'] },
  { group: 'Practices', list: ['AI-assisted development (Claude Code)', 'TDD', 'Code review', 'Mentoring', 'System design', 'Agile'] },
];

export const certs: { name: string; issuer: string; date: string; url?: string }[] = [
  { name: 'Neo4j Certified Professional', issuer: 'Neo4j', date: '2025' },
  { name: 'Data Science — regression, classification, clustering', issuer: 'Stanford University (Prof. Jennifer Widom)', date: '2024' },
  { name: 'Neo4j & Generative AI Fundamentals', issuer: 'Neo4j GraphAcademy', date: 'Nov 2025', url: 'https://graphacademy.neo4j.com/c/d6ae6b92-1eca-4f97-9da4-f09b4507e9a4/' },
  { name: 'Cypher Fundamentals', issuer: 'Neo4j GraphAcademy', date: 'Oct 2025', url: 'https://graphacademy.neo4j.com/c/667e922e-a69f-45f8-846a-5916fd984740/' },
  { name: 'Neo4j Fundamentals', issuer: 'Neo4j GraphAcademy', date: 'Oct 2025', url: 'https://graphacademy.neo4j.com/c/6713ce6b-96e2-47cb-8ac7-c23dc7f6f7e5/' },
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
