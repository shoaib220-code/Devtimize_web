import React from 'react';
import { Globe, Smartphone, Bot, Cpu, Cloud, Settings } from 'lucide-react';

export interface Service {
  id: string;
  slug: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  longDesc: string;
  metaDescription: string;
  minPrice: string;
  maxPrice: string;
  features: string[];
  stack: string[];
  process: { step: string; desc: string }[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'web-development',
    icon: React.createElement(Globe, { size: 40 }),
    title: 'Web Development',
    desc: 'High-performance, scalable web applications using modern frameworks.',
    longDesc: 'We specialize in building production-grade web applications that are fast, secure, and scalable. Our approach combines cutting-edge frontend technologies with robust backend architectures to deliver seamless user experiences.',
    metaDescription: 'Custom web apps, dashboards, portals and e-commerce built with React, MERN, Laravel, Flask, ASP.NET Core. Fast delivery. Free quote — devtimize@gmail.com',
    minPrice: '150',
    maxPrice: '5000',
    features: [
      'Custom Enterprise Portals',
      'E-Commerce Ecosystems',
      'Interactive Dashboards',
      'Progressive Web Apps (PWA)',
      'SEO Optimized Architectures'
    ],
    stack: ['React', 'Next.js', 'Laravel', 'Flask', '.NET Core', 'Tailwind CSS'],
    process: [
      { step: 'Discovery', desc: 'Understanding your business goals and user needs.' },
      { step: 'Architecture', desc: 'Designing a scalable and secure system blueprint.' },
      { step: 'Development', desc: 'Agile coding with continuous integration.' },
      { step: 'QA & Testing', desc: 'Rigorous testing for performance and security.' }
    ]
  },
  {
    id: '2',
    slug: 'mobile-desktop',
    icon: React.createElement(Smartphone, { size: 40 }),
    title: 'Mobile & Desktop App Development',
    desc: 'Native-feel cross-platform mobile apps and robust desktop software.',
    longDesc: 'We bridge the gap between platforms. Whether it is a mobile app for iOS and Android or a high-performance desktop tool for Windows and macOS, we ensure consistent performance and native-like experiences.',
    metaDescription: 'Flutter mobile apps (iOS & Android) and WPF/Tkinter desktop apps. Cross-platform, performant, delivered on time. Hire Devtimize.',
    minPrice: '300',
    maxPrice: '4000',
    features: [
      'Cross-Platform Mobile (Flutter)',
      'Desktop Software (WPF/C#)',
      'Python Desktop Tools (Tkinter)',
      'Real-time Data Sync',
      'Hardware Integrations'
    ],
    stack: ['Flutter', 'WPF', 'C#', 'Python', 'SQLite', 'Firebase'],
    process: [
      { step: 'UI/UX Design', desc: 'Crafting intuitive interfaces for touch and click.' },
      { step: 'Cross-Platform Build', desc: 'Writing shared logic for maximum efficiency.' },
      { step: 'Native Optimization', desc: 'Fine-tuning for platform-specific performance.' },
      { step: 'Deployment', desc: 'Managing App Store and direct distribution.' }
    ]
  },
  {
    id: '3',
    slug: 'ai-automation',
    icon: React.createElement(Bot, { size: 40 }),
    title: 'AI & Automation',
    desc: 'Intelligent systems, custom chatbots, and automated trading bots.',
    longDesc: 'We bring intelligence to your business. From custom LLM implementations to automated trading systems, we leverage the latest in AI to automate complex tasks and provide data-driven insights.',
    metaDescription: 'Custom AI chatbots, RAG assistants, trading bots, emotion detection, and automation. Python, LangChain, TensorFlow. Real AI expertise — not hype.',
    minPrice: '500',
    maxPrice: '8000',
    features: [
      'Custom AI Chatbots',
      'RAG (Retrieval-Augmented Generation)',
      'Automated Trading Bots',
      'Natural Language Processing',
      'Computer Vision Systems'
    ],
    stack: ['Python', 'LangChain', 'OpenAI', 'TensorFlow', 'Pandas'],
    process: [
      { step: 'Data Analysis', desc: 'Analyzing your data to find automation opportunities.' },
      { step: 'Model Selection', desc: 'Choosing the right AI models for your specific use case.' },
      { step: 'Integration', desc: 'Seamlessly connecting AI into your existing workflow.' },
      { step: 'Monitoring', desc: 'Continuous monitoring and fine-tuning of AI performance.' }
    ]
  },
  {
    id: '4',
    slug: 'apis-integrations',
    icon: React.createElement(Cpu, { size: 40 }),
    title: 'APIs & Integrations',
    desc: 'Seamless connectivity between your systems and third-party services.',
    longDesc: 'Connectivity is the backbone of modern software. We build secure, well-documented APIs and integrate third-party services like payments, notifications, and CRM systems to create a unified digital ecosystem.',
    metaDescription: 'Custom REST APIs, Stripe, OneSignal, OpenAI, and third-party integrations. Secure, documented, scalable. Built by Devtimize.',
    minPrice: '200',
    maxPrice: '3000',
    features: [
      'RESTful & GraphQL APIs',
      'Payment Gateway Integration',
      'Third-party Service Sync',
      'Webhook Architectures',
      'Legacy System Bridges'
    ],
    stack: ['Node.js', 'Python', 'PHP', '.NET Core', 'PostgreSQL'],
    process: [
      { step: 'API Design', desc: 'Designing clear and secure API contracts.' },
      { step: 'Security First', desc: 'Implementing robust authentication and encryption.' },
      { step: 'Integration Testing', desc: 'Ensuring all systems talk to each other perfectly.' },
      { step: 'Documentation', desc: 'Providing clear guides for developers and partners.' }
    ]
  },
  {
    id: '5',
    slug: 'cloud-devops',
    icon: React.createElement(Cloud, { size: 40 }),
    title: 'Cloud & DevOps',
    desc: 'Reliable infrastructure, containerization, and CI/CD pipelines.',
    longDesc: 'We ensure your software stays up and scales fast. Our DevOps experts handle everything from server setup to automated deployment pipelines, ensuring maximum uptime and performance.',
    metaDescription: 'Cloud infrastructure, Docker, CI/CD pipelines, AWS and Vercel deployment. Reliable DevOps from Devtimize so you ship faster.',
    minPrice: '300',
    maxPrice: '4000',
    features: [
      'AWS/GCP/Azure Setup',
      'Docker Containerization',
      'CI/CD Pipeline Automation',
      'Serverless Architectures',
      'Infrastructure as Code'
    ],
    stack: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Kubernetes'],
    process: [
      { step: 'Audit', desc: 'Evaluating your current infrastructure and needs.' },
      { step: 'Environment Setup', desc: 'Building secure and scalable cloud environments.' },
      { step: 'Automation', desc: 'Automating the build, test, and deploy cycle.' },
      { step: 'Optimization', desc: 'Continuous monitoring to reduce costs and latency.' }
    ]
  },
  {
    id: '6',
    slug: 'maintenance',
    icon: React.createElement(Settings, { size: 40 }),
    title: 'Maintenance & Support',
    desc: 'Long-term partnership, security updates, and feature iterations.',
    longDesc: 'Software is never "done." We provide the ongoing support needed to keep your systems secure, up-to-date, and evolving with your business needs.',
    metaDescription: 'Ongoing bug fixes, feature additions, and performance monitoring. Monthly retainers available. Keep your app running perfectly with Devtimize.',
    minPrice: '100',
    maxPrice: '1000',
    features: [
      '24/7 Performance Monitoring',
      'Regular Security Patching',
      'Feature Iteration & Updates',
      'Bug Fixes & Troubleshooting',
      'Performance Tuning'
    ],
    stack: ['Proactive Monitoring', 'Security Audits', 'SLA Support'],
    process: [
      { step: 'Monitoring', desc: 'Real-time tracking of system health and performance.' },
      { step: 'Update Cycle', desc: 'Scheduled updates for security and features.' },
      { step: 'Support Desk', desc: 'Fast response times for any critical issues.' },
      { step: 'Review', desc: 'Regular strategy sessions to plan future growth.' }
    ]
  }
];
