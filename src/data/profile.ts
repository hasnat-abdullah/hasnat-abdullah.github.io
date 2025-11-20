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
  tagline: 'ML | LLM | Building Scalable Systems | Backend',
  bio: `Experienced Senior Software Engineer adept in project leadership, AI, and web development. Proven track record of driving complex projects for top-tier companies, supported by extensive academic achievements and interested in Behavioral Economics. Elevate your team to unprecedented levels of innovation and success with my expertise.`,
  email: 'abdullah.2010bd@gmail.com',
  location: 'Dhaka, Bangladesh',
  avatar: '/img/pic.jpeg',
  github: 'https://github.com/hasnat-abdullah',
  linkedin: 'https://linkedin.com/in/hasnatabdullah',
};

