// src/components/SEO.tsx
// Complete SEO component — handles all schema types for Devtimize

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Breadcrumb { name: string; url: string; }
interface ServiceSchemaData {
  name: string; description: string;
  url: string; minPrice?: string; maxPrice?: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  // Schema flags
  faqSchema?: boolean;
  reviewSchema?: boolean;
  projectListSchema?: boolean;
  personSchema?: boolean;
  serviceSchema?: ServiceSchemaData;
  breadcrumbs?: Breadcrumb[];
}

// ── Schema data ──

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Devtimize offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Devtimize offers full-stack web development, mobile and desktop app development (Flutter, WPF, Tkinter), AI and automation (chatbots, RAG systems, trading bots), API development and integrations, cloud and DevOps services, and ongoing maintenance and support."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire Devtimize?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing starts from approximately $150–400 for simple websites, $500–2,500 for full web or mobile apps, and $2,000+ for complex AI systems. All projects receive a free custom quote within 24 hours at devtimize@gmail.com."
      }
    },
    {
      "@type": "Question",
      "name": "Can Devtimize work with international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Devtimize serves clients globally across the US, UK, Canada, Australia, Europe, and the Middle East. The team communicates via email, WhatsApp, and video calls across all timezones."
      }
    },
    {
      "@type": "Question",
      "name": "What is Devtimize's tech stack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Devtimize works with Python, Flask, .NET, ASP.NET Core, Flutter, PHP, Laravel, React, MERN, WPF, Tkinter, TensorFlow, LangChain, MongoDB, PostgreSQL, SQLite, AWS, Docker, and Firebase."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly does Devtimize respond to inquiries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Devtimize responds to all project inquiries within 24 hours via email at devtimize@gmail.com or WhatsApp at+923104745649 (Shoaib) or +923026160466 (Hamza)."
      }
    },
    {
      "@type": "Question",
      "name": "Can Devtimize build AI chatbots and trading bots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Devtimize specializes in AI-powered chatbots with RAG (Retrieval-Augmented Generation), automated trading bots with backtesting and live trading, and intelligent automation systems using Python, LangChain, and TensorFlow."
      }
    }
  ]
};

const REVIEW_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Devtimize",
  "url": "https://devtimize.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "4",
    "reviewCount": "4"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Abdullah" },
      "reviewBody": "This was a big challenge for us to build such a software in limited time, but the team was so dedicated that they not only delivered the app on time but also updated some things without charging anything.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "publisher": { "@type": "Organization", "name": "BGNU" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Riasat Ali" },
      "reviewBody": "Amazing team! Delivered on time and exceeded expectations.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Saif Ur Rahman" },
      "reviewBody": "They nailed it and we got beyond our expectations. The team is remarkable and their dedication is on another level.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "publisher": { "@type": "Organization", "name": "University of Gujrat Students" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Nadeem" },
      "reviewBody": "They just changed the way we work. Now we know how a right person and a right team can change your working dynamics. Highly recommended.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "publisher": { "@type": "Organization", "name": "IT Care" }
    }
  ]
};

const PROJECT_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Devtimize Project Portfolio",
  "description": "Web, mobile, desktop, and AI projects delivered by Devtimize — Shoaib & Hamza Tech Solutions.",
  "url": "https://devtimize.com/projects/",
  "numberOfItems": 8,
  "itemListElement": [
    {
      "@type": "ListItem", "position": 1,
      "name": "Restaurant Website",
      "description": "Custom restaurant site with menu management and online ordering.",
      "url": "https://devtimize.com/projects/restaurant-site/"
    },
    {
      "@type": "ListItem", "position": 2,
      "name": "E-Commerce Website",
      "description": "Full-featured e-commerce with product catalog, cart, and payment gateway.",
      "url": "https://devtimize.com/projects/ecommerce-website/"
    },
    {
      "@type": "ListItem", "position": 3,
      "name": "Trading Bot (Backtest + Live)",
      "description": "Python trading bot with backtesting engine on historical data and live trading.",
      "url": "https://devtimize.com/projects/trading-bot/"
    },
    {
      "@type": "ListItem", "position": 4,
      "name": "Chatbot & RAG Assistant",
      "description": "AI chatbot using Retrieval-Augmented Generation for custom knowledge base Q&A.",
      "url": "https://devtimize.com/projects/chatbot-rag/"
    },
    {
      "@type": "ListItem", "position": 5,
      "name": "Event Push App (Flutter + OneSignal)",
      "description": "Flutter app with real-time event push notifications via OneSignal.",
      "url": "https://devtimize.com/projects/event-push-app/"
    },
    {
      "@type": "ListItem", "position": 6,
      "name": "Emotion Detector (Tkinter + CNN)",
      "description": "Desktop app using CNN model to detect human emotions in real-time.",
      "url": "https://devtimize.com/projects/emotion-detector/"
    },
    {
      "@type": "ListItem", "position": 7,
      "name": "Vendor Shipment Portal (.NET MVC)",
      "description": "Web portal for vendor and shipment management built with ASP.NET MVC.",
      "url": "https://devtimize.com/projects/vendor-shipment-portal/"
    },
    {
      "@type": "ListItem", "position": 8,
      "name": "Inventory & Billing System (WPF + SQLite)",
      "description": "Windows desktop app for inventory control and billing using WPF and SQLite.",
      "url": "https://devtimize.com/projects/inventory-billing/"
    }
  ]
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://devtimize.com/about/#shoaib",
      "name": "Shoaib Liaqat",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Devtimize",
        "url": "https://devtimize.com"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Baba Guru Nanak University"
      },
      "knowsAbout": [
        "Flutter", "React.js", "MERN Stack", "Flask",
        ".NET", "Cloud Deployment", "Mobile Development"
      ],
      "telephone": "+923016672356",
      "email": "devtimize@gmail.com",
      "nationality": "Pakistani"
    },
    {
      "@type": "Person",
      "@id": "https://devtimize.com/about/#hamza",
      "name": "Hamza Amin",
      "jobTitle": "Co-founder",
      "worksFor": {
        "@type": "Organization",
        "name": "Devtimize",
        "url": "https://devtimize.com"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Islamic University Islamabad"
      },
      "knowsAbout": [
        "Python", "Chatbot Development", "RAG Systems",
        "Trading Bots", "LangChain", "TensorFlow", "AI Automation"
      ],
      "telephone": "+923026160466",
      "email": "devtimize@gmail.com",
      "nationality": "Pakistani"
    }
  ]
};

const generateServiceSchema = (service: ServiceSchemaData) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@type": "Organization",
    "name": "Devtimize",
    "url": "https://devtimize.com",
    "email": "devtimize@gmail.com",
    "telephone": "+923016672356"
  },
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://devtimize.com/contact/",
    "servicePhone": "+923016672356",
    "serviceEmail": "devtimize@gmail.com"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": service.minPrice || "150",
      "maxPrice": service.maxPrice || "5000",
      "priceCurrency": "USD"
    }
  }
});

const generateBreadcrumbSchema = (crumbs: Breadcrumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const SEO: React.FC<SEOProps> = ({
  title, description, canonical, ogImage,
  faqSchema, reviewSchema, projectListSchema,
  personSchema, serviceSchema, breadcrumbs
}) => {

  const image = ogImage || 'https://devtimize.com/og/default.jpg';
  const fullTitle = title.includes('Devtimize') ? title : `${title} | Devtimize`;

  const schemas = [
    faqSchema && FAQ_SCHEMA,
    reviewSchema && REVIEW_SCHEMA,
    projectListSchema && PROJECT_LIST_SCHEMA,
    personSchema && PERSON_SCHEMA,
    serviceSchema && generateServiceSchema(serviceSchema),
    breadcrumbs?.length && generateBreadcrumbSchema(breadcrumbs),
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Devtimize" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
