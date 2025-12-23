
export interface Skill {
  name: string;
  category: 'Manual' | 'Automation & API' | 'Tools' | 'Language' | 'Process';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface Project {
  title: string;
  description: string;
  tools: string[];
  outcome: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
}
