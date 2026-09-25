export type ResourceTag = 'herramienta' | 'lab' | 'proyecto';

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  company?: string;
  subject: string;
  period: string;
  verified: boolean;
  content: string;
  image?: string;
  rating?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  pinned?: boolean;
  tag?: ResourceTag;
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
  tag: ResourceTag;
  type: 'video' | 'article' | 'tutorial' | 'tool';
  link: string;
  image: string;
  pinned?: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  hourlyRate: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface TutoringPlan {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  priceSuffix: string;
  rateDetail: string;
  description: string;
  features: string[];
  popular?: boolean;
  minPersons?: number;
  badge?: string;
}

export interface Subject {
  id: string;
  name: string;
  code?: string;
  isMain?: boolean;
  description: string;
  topics: string[];
}

export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}