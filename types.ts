
export type ProjectStatus = 'online' | 'beta' | 'maintenance' | 'offline';

export interface Project {
  id: string;
  systemId: string; // e.g., SYS-001
  title: string;
  description: string;
  tech: string[];
  subdomainUrl?: string; // e.g., https://invest.leealan-tech.com
  github?: string;
  status: ProjectStatus;
  version: string;
  type: 'application' | 'library' | 'infrastructure';
  size?: 'large' | 'medium' | 'small'; 
  imageUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

// --- Music / Drumming Types ---
export interface YoutubeVideo {
  id: string;
  videoId: string; // YouTube ID
  title: string;
  category: 'cover' | 'performance' | 'lesson';
  views?: string;
}

export interface Gig {
  id: string;
  date: string;
  venue: string;
  artist: string;
  role: string; // e.g., "Session Drummer", "Band Member"
  location: string;
}

export interface CareerEvent {
  id: string;
  date: string;
  title: string;
  role: string;
  category: 'performance' | 'technician' | 'teaching' | 'certification';
  location?: string;
  description?: string;
}

export interface TeachingService {
  id: string;
  title: string;
  level: string;
  description: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: any;
}

export interface PricingTier {
  id: string;
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
  recommended: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}