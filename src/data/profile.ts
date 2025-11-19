export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  avatar?: string;
  github?: string;
  linkedin?: string;
}

export const profile: Profile = {
  name: 'Abu Hasnat Abdullah',
  title: 'Senior Software Engineer',
  tagline: 'Building Scalable Systems | Backend | AI | ML',
  bio: `I'm a Senior Software Engineer with extensive experience in building scalable backend systems, 
  working with AI/ML technologies, and solving complex technical challenges. I'm passionate about 
  clean code, system architecture, and continuous learning.`,
  email: 'abdullah.2010bd@gmail.com',
  location: 'Dhaka, Bangladesh',
  avatar: '/img/pic.jpeg',
  github: 'https://github.com/hasnat-abdullah',
  linkedin: 'https://linkedin.com/in/hasnatabdullah',
};

