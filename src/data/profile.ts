export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  age?: number;
  phone?: string;
  address?: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
}

export const profile: Profile = {
  name: 'Abu Hasnat Abdullah',
  title: 'Senior AI Engineer',
  tagline: 'LLM · RAG · MLOps · Backend',
  bio: `Senior Software Engineer with 10+ years of professional experience, including 6+ years architecting production-grade AI systems for enterprise clients across the Nordics, Sweden, and Bangladesh. I ship LLM applications end-to-end — RAG pipelines, fine-tuned domain models (LoRA / QLoRA), and MLOps platforms on AWS and Azure — with measurable impact, including lifting industrial CV detection accuracy from 40% to 98%, fine-tuning a local 3B LLM to 97% accuracy, and leading an 11-engineer team across 6 concurrent enterprise projects. Obsessed with responsible-AI guardrails, evaluation discipline, and turning research-grade ideas into reliable production systems.`,
  email: 'abdullah.2010bd@gmail.com',
  location: 'Dhaka, Bangladesh',
  age: 28,
  phone: '+880 1710 608387',
  address: 'Dhaka, Bangladesh',
  avatar: '/img/pic.jpeg',
  github: 'https://github.com/hasnat-abdullah',
  linkedin: 'https://linkedin.com/in/hasnatabdullah',
};
