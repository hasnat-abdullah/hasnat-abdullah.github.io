export interface Metric {
  value: string;
  caption: string;
}

/** Headline numbers in the dark band under the hero. */
export const metrics: Metric[] = [
  {
    value: '40% → 98%',
    caption: 'Pellet detection accuracy, real-time aquaculture footage.',
  },
  {
    value: '97%',
    caption: 'Local 3B model, QLoRA fine-tuned — cloud quality, a fraction of the cost.',
  },
  {
    value: '11 engineers',
    caption: 'Led across six concurrent enterprise projects for Swedish clients.',
  },
  {
    value: '10 years',
    caption: 'In software; six of them on production AI systems.',
  },
];

export interface Project {
  id: string;
  title: string;
  /** The one-line outcome shown under the title. */
  outcome: string;
  tags: string[];
  problem: string;
  approach: string;
  result: string;
}

export interface WorkGroup {
  employer: string;
  meta: string;
  projects: Project[];
}

/** Selected work, grouped by the employer it was built for. */
export const workGroups: WorkGroup[] = [
  {
    employer: 'Sensa AS, Norway',
    meta: 'Industrial AI · Nov 2024 – present · five systems',
    projects: [
      {
        id: 'unity',
        title: 'Unity AI — plain-language answers over plant data',
        outcome: 'Grounded citations and governance rules keep hallucination in check.',
        tags: ['RAG', 'Neo4j', 'InfluxDB', 'PGVector', 'FastAPI', 'OpenAI', 'Azure'],
        problem:
          "Plant data lived in two incompatible shapes: asset relationships in a graph, and sensor readings in a time-series store. Operators couldn't ask a question that spanned both without an engineer in the loop.",
        approach:
          'Architected a custom RAG pipeline that combines a Neo4j knowledge graph with an InfluxDB time-series store, and layered data-governance rules over retrieval so answers stay inside what the user is permitted to see.',
        result:
          'Answers arrive with grounded citations back to the source record, which is what made operators willing to trust them. Hallucination is minimised by construction rather than by prompt-wrangling.',
      },
      {
        id: 'cv',
        title: 'CV Analyser — a 3B model that matched the cloud',
        outcome: '97% accuracy locally — cloud-API quality, a fraction of the cost.',
        tags: ['Llama 3.2', 'DeepSeek', 'Qwen', 'Unsloth', 'QLoRA / PEFT', 'OCR', 'FastAPI'],
        problem:
          'Parsing CVs well enough for ATS use meant either paying per-token to a frontier API on every document, or accepting a weak local model. Neither was acceptable at volume.',
        approach:
          'Fine-tuned Llama 3.2, DeepSeek and Qwen with Unsloth and QLoRA, then benchmarked the trade-offs across model families rather than betting on one. Built the OCR-to-structure extraction path and a recruiter chatbot over the parsed corpus.',
        result:
          'The winning 3B model reached 97% accuracy locally — matching cloud-API quality while removing the per-document API bill and keeping candidate data in-house.',
      },
      {
        id: 'pellet',
        title: 'Pellet Detection — counting fish food in real time',
        outcome: '40% → 98% accuracy, unlocking automated feed-rate optimisation.',
        tags: ['YOLOv11-nano', 'PyTorch', 'OpenCV', 'Python'],
        problem:
          'Uneaten pellets are wasted money and a pollution problem, but the baseline model caught well under half of them in murky, moving underwater footage.',
        approach:
          'Took a YOLOv11-nano model all the way to production on sensor-equipped farms — small enough to run at the edge in real time, tuned for the specific conditions of the footage.',
        result:
          'Accuracy went from 40% to 98%. That reliability is what turned a monitoring feature into a control signal for automated feed-rate optimisation.',
      },
      {
        id: 'engine',
        title: 'Unity Engine — the platform under everything else',
        outcome: 'One set of transforms serving anomaly detection and RAG retrieval alike.',
        tags: ['Mage.ai', 'InfluxDB', 'Neo4j', 'PGVector', 'FastAPI', 'Azure'],
        problem:
          'Every AI product was re-solving ingestion. Sensor feeds and external sources were being wrangled separately per project, which is how pipelines quietly diverge.',
        approach:
          'Designed Mage.ai ETL pipelines that ingest sensor and external data into shared time-series and feature stores, with transforms written once and reused across products.',
        result:
          'Anomaly detection and RAG retrieval now read the same features from the same place, so a fix upstream lands everywhere at once.',
      },
      {
        id: 'mlops',
        title: 'Unity-MLOps — from log review to live alerts',
        outcome: 'Manual log review replaced by proactive, real-time alerting.',
        tags: ['AzureML', 'MLflow', 'scikit-learn', 'FastAPI'],
        problem:
          "Faults were found by people reading logs after the fact. A model alone wouldn't fix that — an unmonitored model degrades quietly and becomes another thing to distrust.",
        approach:
          'Built the whole loop: automated retraining, a model registry, deployment, and drift monitoring so the system reports on its own health.',
        result:
          'Detection moved from retrospective to real time, and drift is caught by the pipeline rather than by a surprised operator.',
      },
    ],
  },
  {
    employer: 'Strativ AB, Sweden',
    meta: 'Enterprise consultancy · Apr 2021 – Jan 2024',
    projects: [
      {
        id: 'tour',
        title: 'TourGPT — a RAG chatbot that also takes the order',
        outcome:
          'Prototype to production — prompt strategy, embeddings and guardrails owned throughout.',
        tags: ['RAG', 'OpenAI', 'Django', 'PGVector', 'AWS'],
        problem:
          "A generic chatbot recommending real, bookable tours will confidently invent ones that don't exist — and then take money for them.",
        approach:
          'Grounded the assistant in a curated tour knowledge base, owned the embedding strategy and prompt engineering, and put safety guardrails between the conversation and the order system.',
        result:
          'Shipped as a production SaaS product handling recommendation and end-to-end order management, not a demo.',
      },
    ],
  },
  {
    employer: 'Circle Fintech, Bangladesh',
    meta: 'For Jamuna Bank · Sep 2020 – Apr 2021',
    projects: [
      {
        id: 'board',
        title: 'Boarding Bay — eKYC for a national bank',
        outcome: 'Identity verification automated across every branch.',
        tags: ['FastAPI', 'Microservices', 'TensorFlow', 'OCR', 'Django'],
        problem:
          'Branch onboarding ran on manual document checks — slow for the customer, and expensive to staff at national scale.',
        approach:
          'Built three production-grade microservices: OCR on national ID documents, face detection for liveness and match, and billing — each deployable and monitorable on its own.',
        result:
          'Identity verification became automatic, cutting manual onboarding time and accelerating business transaction processing across branches.',
      },
    ],
  },
];

export interface OtherWork {
  title: string;
  note: string;
}

/** The "Also shipped" list under the selected work. */
export const otherWork: OtherWork[] = [
  { title: 'Investment Management System', note: 'portfolio analytics, Kafka, AWS' },
  { title: 'Health Check', note: 'digital primary-care platform' },
  { title: 'Smart College Management', note: 'biometric attendance, IoT' },
  { title: 'Open Organization', note: 'traceable donation platform' },
  { title: 'KO', note: 'a Bangla programming language' },
  { title: 'Attack-outcome prediction', note: 'SVM, Random Forest, XGBoost' },
];
