export interface Principle {
  number: string;
  title: string;
  body: string;
}

/** "How I work" — the dark band between work and experience. */
export const approach = {
  eyebrow: 'How I work',
  heading: 'Three things I insist on before an AI system meets a user',
  principles: [
    {
      number: '01',
      title: 'Ground it, then cite it',
      body: 'A confident wrong answer costs more than no answer. Retrieval that points back at a real record earns trust; prompt tuning never does.',
    },
    {
      number: '02',
      title: 'Measure before you believe',
      body: 'Every model ships with an evaluation harness and a benchmark against the alternatives.',
    },
    {
      number: '03',
      title: 'Assume it will drift',
      body: 'A model without a registry, monitoring and a retraining path is a liability with a launch date.',
    },
  ] satisfies Principle[],
} as const;

export interface Role {
  period: string;
  where: string;
  title: string;
  body: string;
}

export const experience: Role[] = [
  {
    period: 'Nov 2024 — present',
    where: 'Dhaka · for Norway',
    title: 'Senior Software Engineer, Cefalo Bangladesh — client: Sensa AS',
    body: 'Own AI engineering end to end for a Norwegian industrial-AI company: LLM applications, computer vision, time-series MLOps and the data platform beneath them.',
  },
  {
    period: 'Apr 2021 — Jan 2024',
    where: 'Strativ AB · Sweden, remote',
    title: 'Senior Software Engineer',
    body: 'Led 11 engineers across six concurrent enterprise projects — system design, architecture and delivery — while staying hands-on.',
  },
  {
    period: 'Sep 2020 — Apr 2021',
    where: 'Circle Fintech · Dhaka',
    title: 'Software Engineer',
    body: 'Shipped Boarding Bay, an eKYC platform for Jamuna Bank, modernising customer onboarding across branches.',
  },
  {
    period: '2016 — 2020',
    where: 'Earlier',
    title: 'Research and founding work',
    body: 'Research analyst at Economic Research Group and North South University; founder of Shikhte Chai, an educational initiative run for four years.',
  },
];

export interface SkillGroup {
  number: string;
  title: string;
  /** The first entry is rendered filled; the rest are outlined. */
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    number: '01',
    title: 'LLM systems',
    items: [
      'RAG architecture',
      'Semantic chunking',
      'Eval frameworks',
      'Hallucination guardrails',
      'OpenAI',
      'Claude',
      'Llama 3.2',
    ],
  },
  {
    number: '02',
    title: 'Fine-tuning',
    items: [
      'QLoRA',
      'LoRA', 
      'PEFT',
      'Unsloth', 
      'HF Transformers', 
      'Domain adaptation'
    ],
  },
  {
    number: '03',
    title: 'Retrieval &amp; data',
    items: [
      'Neo4j', 
      'Cypher', 
      'PGVector', 
      'InfluxDB', 
      'PostgreSQL', 
      'Embedding tuning'
    ],
  },
  {
    number: '04',
    title: 'Vision &amp; classical ML',
    items: ['PyTorch', 
      'YOLOv11', 
      'OpenCV', 
      'OCR', 
      'scikit-learn', 
      'Time-series forecasting'
    ],
  },
  {
    number: '05',
    title: 'MLOps &amp; platform',
    items: [
      'MLflow',
      'AzureML',
      'Mage.ai',
      'Model registry',
      'Feature stores',
      'Drift monitoring',
      'CI/CD',
    ],
  },
  {
    number: '06',
    title: 'Backend &amp; cloud',
    items: [
      'FastAPI', 
      'Python', 
      'Django', 
      'Kafka', 
      'Redis', 
      'AWS', 
      'Azure', 
      'Docker', 
      'Kubernetes'
    ],
  },
  {
    number: '07',
    title: 'Leading delivery',
    items: [
      'Teams of 11+',
      'System design',
      'Mentorship',
      'Stakeholder management',
      'Agile delivery',
    ],
  },
];

export const education = {
  degree: 'B.Sc. Computer Science &amp; Engineering',
  detail: 'North South University, Bangladesh · 2015–2019',
} as const;

export interface Certification {
  /** Rendered as HTML so entries can carry their own credential links. */
  title: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    title:
      '<a href="https://graphacademy.neo4j.com/c/d6ae6b92-1eca-4f97-9da4-f09b4507e9a4/">Neo4j &amp; Generative AI Fundamentals</a>, <a href="https://graphacademy.neo4j.com/c/667e922e-a69f-45f8-846a-5916fd984740/">Cypher Fundamentals</a> and <a href="https://graphacademy.neo4j.com/c/6713ce6b-96e2-47cb-8ac7-c23dc7f6f7e5/">Neo4j Fundamentals</a>',
    issuer: 'Neo4j GraphAcademy · 2025',
  },
  {
    title: 'Data Science',
    issuer: 'Stanford University, Prof. Jennifer Widom · 2024',
  },
  {
    title: 'Business Analysis &amp; Prototyping',
    issuer: 'LICT (Bangladesh Govt.) &amp; BracIT · 2019',
  },
];

export const research = {
  title: 'Predicting the Result of a Cricket Match by Applying Data Mining Techniques',
  detail: '2020 · Published on ResearchGate.',
} as const;
