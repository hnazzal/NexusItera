import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';

export interface LocalizedData<T> {
  en: T;
  ar: T;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  status: 'Live' | 'Beta' | 'Coming Soon' | 'متاح' | 'تجريبي' | 'قريباً';
  price?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  client: string;
  company: string;
  quote: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  PRODUCTS = '/products',
  PORTFOLIO = '/portfolio',
  CONTACT = '/contact',
}