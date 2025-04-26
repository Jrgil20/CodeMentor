export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  slug: string;
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'video' | 'article' | 'tutorial' | 'tool';
  link: string;
  image: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  features: string[];
  image: string;
}

export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}