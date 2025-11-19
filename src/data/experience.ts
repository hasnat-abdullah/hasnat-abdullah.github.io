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
    period: '2024 - Present',
    description: `Led the development of scalable microservices architecture serving millions of users. 
    Implemented ML models for recommendation systems and optimized backend performance by 40%.`,
    technologies: ['Python', 'Mlflow', 'Kubernetes', 'TensorFlow', 'PostgreSQL'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Strativ AB Ltd.',
    location: 'Dhaka, Bangladesh',
    period: '2021 - 2024',
    description: `Developed and maintained RESTful APIs and backend services. Implemented CI/CD pipelines 
    and improved system reliability. Worked on data processing pipelines handling terabytes of data.`,
    technologies: ['Java', 'Spring Boot', 'Docker', 'Redis', 'MySQL'],
  },
  {
    title: 'Software Engineer',
    company: 'Circle Fintech Ltd.',
    location: 'Dhaka, Bangladesh',
    period: '2020 - 2021',
    description: `Built backend systems for e-commerce platform. Optimized database queries and 
    implemented caching strategies. Collaborated with frontend team to deliver seamless user experiences.`,
    technologies: ['Node.js', 'MongoDB', 'Express', 'RabbitMQ'],
  },
];

