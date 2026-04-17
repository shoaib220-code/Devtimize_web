// src/components/SEO.tsx
// Complete SEO component — handles all schema types for Devtimize

import React from 'react';

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
  "description": "Web, mobile, desktop, and AI projects delivered by Devtimize.",
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
      "description": "Python trading bot with backtesting engine and live trading capabilities.",
      "url": "https://devtimize.com/projects/trading-bot/"
    }
  ]
};

export const SEO = (props: SEOProps) => {
  return (
    <>
      {props.faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      )}
      {props.reviewSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(REVIEW_SCHEMA) }} />
      )}
      {props.projectListSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PROJECT_LIST_SCHEMA) }} />
      )}
    </>
  );
};
