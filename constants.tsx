
import React from 'react';
import { 
  Bug, 
  Settings, 
  Terminal, 
  Layers, 
  GitBranch, 
  Database, 
  CheckCircle,
  Linkedin,
  Github,
  Mail,
  MapPin,
  ExternalLink,
  Code
} from 'lucide-react';
import { Skill, Experience, Project, Certification } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export const SKILLS: Skill[] = [
  { name: 'Manual Testing', category: 'Manual' },
  { name: 'Functional Testing', category: 'Manual' },
  { name: 'Regression Testing', category: 'Manual' },
  { name: 'Usability Testing', category: 'Manual' },
  { name: 'Selenium (Java)', category: 'Automation & API' },
  { name: 'TestNG', category: 'Automation & API' },
  { name: 'Postman', category: 'Automation & API' },
  { name: 'JIRA', category: 'Tools' },
  { name: 'Git/GitHub', category: 'Tools' },
  { name: 'Java', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'Agile/Scrum', category: 'Process' },
  { name: 'Waterfall', category: 'Process' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'CADD Centre Training Services Pvt. Ltd.',
    role: 'Software Testing Trainee',
    period: 'Jul 2024 – Dec 2024',
    skills: ['Selenium', 'Java', 'JIRA', 'Manual Testing'],
    description: [
      'Authored comprehensive test cases and executed test scripts for complex software systems.',
      'Conducted rigorous bug reporting and tracking using JIRA.',
      'Developed automation scripts using Selenium and Java for repetitive test cycles.',
      'Collaborated with developers to ensure timely bug resolution and quality assurance.'
    ]
  },
  {
    company: 'PRAM Edu / HelloBooks.ai',
    role: 'QA Intern / Application Tester',
    period: 'Internship Experience',
    skills: ['API Testing', 'Postman', 'Regression Testing', 'UI/UX Testing'],
    description: [
      'Performed functional and regression testing on live applications.',
      'Identified and documented over 50+ critical usability issues.',
      'Verified fixes across different environments and mobile devices.',
      'Assisted in documentation of API endpoints using Postman.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'PRAM Edu App Testing',
    description: 'Conducted end-to-end testing of an educational platform during internship, covering student and tutor workflows.',
    tools: ['Manual Testing', 'Mobile App Testing', 'JIRA'],
    outcome: 'Improved app stability and reported 30+ UI/UX defects before the major release.'
  },
  {
    title: 'Automated Testing Framework',
    description: 'Built a robust automation suite for web-based applications using Selenium with Java and SQL integration.',
    tools: ['Selenium', 'Java', 'TestNG', 'SQL'],
    outcome: 'Reduced manual regression testing time by 60% and integrated automated database validation.'
  },
  {
    title: 'Healthcare App Verification',
    description: 'Functional and usability testing of a healthcare mobile application focusing on patient data privacy and intuitive navigation.',
    tools: ['Functional Testing', 'Usability Testing', 'Security Basics'],
    outcome: 'Ensured 100% compliance with client specifications and enhanced critical user journey flow.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Introduction to Software Testing',
    issuer: 'University of Minnesota (Coursera)',
  },
  {
    title: 'PRAM Edu Internship Certificate',
    issuer: 'PRAM Edu',
  },
  {
    title: 'Python Internship',
    issuer: 'iBase Electrosoft LLP',
  }
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/bhushan-kampelwar',
  github: 'https://github.com/Bhushan7666',
  email: 'bkampelwar@gmail.com',
  location: 'Chandrapur, Maharashtra'
};
