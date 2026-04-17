export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  stack: string[];
  desc: string;
  longDesc: string;
  features: string[];
  outcome: string;
  client?: string;
  livePreview?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'trading-bot',
    name: 'Trading Bot (Backtest + Live)',
    category: 'AI & Bots',
    image: '/images/projects/trading-bot.jfif',
    stack: ['Python', 'Backtrader', 'Pandas', 'Flask'],
    desc: 'A sophisticated algorithmic trading system.',
    longDesc: 'This project involved building a high-frequency trading bot capable of processing real-time market data. The system includes a robust backtesting engine that allows users to test strategies against years of historical data before going live.',
    features: [
      'Real-time Market Data Processing',
      'Custom Strategy Backtesting Engine',
      'Live Trading API Integration',
      'Risk Management & Stop-Loss Logic',
      'Performance Analytics Dashboard'
    ],
    outcome: 'Successfully automated trading strategies for the client, reducing manual effort by 90% and improving strategy execution speed.',
    client: 'Private Investor'
  },
  {
    id: '2',
    slug: 'chatbot-rag',
    name: 'Chatbot & RAG Assistant',
    category: 'AI & Bots',
    image: '/images/projects/rag-chatbot.jfif',
    stack: ['Python', 'LangChain', 'OpenAI', 'Vector DB'],
    desc: 'An intelligent assistant using Retrieval-Augmented Generation.',
    longDesc: 'We developed an AI assistant that goes beyond simple prompts. By using RAG (Retrieval-Augmented Generation), the bot can "read" a company\'s private documentation and provide accurate, context-aware answers to user queries.',
    features: [
      'Private Document Ingestion',
      'Vector Search Integration',
      'Context-Aware Conversations',
      'Multi-Language Support',
      'Seamless Website Integration'
    ],
    outcome: 'Reduced customer support ticket volume by 40% within the first month of deployment.',
    client: 'Tech Solutions Inc.'
  },
  {
    id: '3',
    slug: 'restaurant-site',
    name: 'Restaurant Website',
    category: 'Web',
    image: '/images/projects/resturent-website.jfif',
    stack: ['PHP', 'Laravel', 'MySQL', 'Tailwind'],
    desc: 'A complete digital presence for a restaurant.',
    longDesc: 'A full-featured web platform for a modern restaurant. The site includes a dynamic menu management system, online table reservations, and an integrated ordering system for takeout.',
    features: [
      'Dynamic Menu Management',
      'Online Reservation System',
      'Takeout Ordering Flow',
      'Responsive Mobile Experience',
      'Admin Dashboard for Orders'
    ],
    outcome: 'Increased online reservations by 60% and streamlined takeout order processing.',
    client: 'The Gourmet Kitchen',
    livePreview: 'https://shah-jee-restaurant.vercel.app/'
  },
  {
    id: '4',
    slug: 'ecommerce-platform',
    name: 'E-Commerce Platform',
    category: 'Web',
    image: '/images/projects/ecom-website.jfif',
    stack: ['MERN', 'React', 'Node.js', 'MongoDB'],
    desc: 'A scalable e-commerce solution.',
    longDesc: 'We built a robust e-commerce ecosystem designed for high traffic. The platform features advanced product filtering, a secure multi-step checkout, and a comprehensive admin panel for inventory and sales tracking.',
    features: [
      'Advanced Product Filtering',
      'Secure Payment Integration',
      'Inventory Management System',
      'User Order History',
      'Sales Analytics Dashboard'
    ],
    outcome: 'Delivered a high-performance store that handles thousands of concurrent users with sub-second page loads.',
    client: 'Urban Wear'
  },
  {
    id: '5',
    slug: 'event-push-app',
    name: 'Event Push App',
    category: 'Mobile',
    image: '/images/projects/event-push-app.png',
    stack: ['Flutter', 'OneSignal', 'Firebase'],
    desc: 'A cross-platform mobile app for event notifications.',
    longDesc: 'Built with Flutter for iOS and Android, this app allows event organizers to send targeted push notifications to attendees. It features real-time event updates and offline access to schedules.',
    features: [
      'Targeted Push Notifications',
      'Real-time Schedule Updates',
      'Offline Access Mode',
      'Attendee Engagement Tools',
      'Cross-Platform Performance'
    ],
    outcome: 'Improved attendee engagement by 50% through timely, relevant notifications.',
    client: 'Abdullah & Team (BGNU)'
  },
  {
    id: '6',
    slug: 'emotion-detector',
    name: 'Emotion Detector',
    category: 'Desktop/AI',
    image: '/images/projects/emotion-detection.jfif',
    stack: ['Tkinter', 'CNN', 'TensorFlow'],
    desc: 'A desktop application for real-time emotion detection.',
    longDesc: 'This AI-powered desktop tool uses a Convolutional Neural Network (CNN) to detect human faces and classify their emotions in real-time from a camera feed.',
    features: [
      'Real-time Face Detection',
      'Emotion Classification (7 states)',
      'High-Frame-Rate Processing',
      'Desktop GUI Integration',
      'Privacy-First Local Processing'
    ],
    outcome: 'Developed a high-accuracy model that runs locally on standard hardware without needing cloud GPUs.',
    client: 'Research Lab'
  },
  {
    id: '7',
    slug: 'vendor-portal',
    name: 'Vendor Shipment Portal',
    category: 'Portals',
    image: '/images/projects/vendor-shipment-3pl.jfif',
    stack: ['.NET MVC', 'SQL Server', 'Azure'],
    desc: 'A B2B portal for managing shipments.',
    longDesc: 'A comprehensive vendor management system built on the .NET framework. It allows vendors to log shipments, track delivery status, and generate automated logistics reports.',
    features: [
      'Shipment Tracking System',
      'Vendor Onboarding Flow',
      'Automated PDF Reporting',
      'Role-Based Access Control',
      'Azure Cloud Integration'
    ],
    outcome: 'Streamlined logistics communication, reducing shipment tracking errors by 75%.',
    client: 'Global Logistics Corp'
  },
  {
    id: '8',
    slug: 'inventory-billing',
    name: 'Inventory & Billing System',
    category: 'Desktop',
    image: '/images/projects/inventory&billing.jfif',
    stack: ['WPF', 'C#', 'SQLite'],
    desc: 'A robust desktop solution for small businesses.',
    longDesc: 'A fast, offline-first desktop application for managing inventory and generating professional invoices. Designed for speed and reliability in a retail environment.',
    features: [
      'Fast Inventory Search',
      'Automated Invoice Generation',
      'Low Stock Notifications',
      'Sales & Tax Reporting',
      'Local SQLite Database'
    ],
    outcome: 'Reduced checkout time by 30% and improved inventory accuracy for the client.',
    client: 'Retail Solutions'
  }
];
