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
    image: '/images/projects/trading-bot.jpg',
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
    image: '/images/projects/rag-chatbot.jpg',
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
    image: '/images/projects/resturent-website.jpg',
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
    image: '/images/projects/ecom-website.jpg',
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
    image: '/images/projects/emotion-detection.jpg',
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
    image: '/images/projects/vendor-shipment-3pl.jpg',
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
    image: '/images/projects/inventory-billing.jpg',
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
  },
  {
    id: '9',
    slug: 'skardu-treks-tours',
    name: 'Skardu Treks & Tours',
    category: 'Web',
    image: '/images/projects/skardu-treks-tours.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    desc: 'A premium travel booking site for a Skardu-based tour operator.',
    longDesc: 'A rich, visually-driven travel site for a local tour operator running private 5-day Skardu valley tours. It presents tiered package pricing, a day-by-day itinerary explorer, and an AI trip-planning assistant, all built to convert visitors straight into WhatsApp bookings.',
    features: [
      'AI Trip-Planning Assistant (Baltoro AI)',
      'Interactive Day-by-Day Itinerary Explorer',
      'Tiered Package Pricing (Standard to Executive)',
      'Instant WhatsApp Booking Flow',
      'Guest Testimonials & Photo Gallery'
    ],
    outcome: 'Gave a local trekking operator a premium digital storefront that turns visitors into direct WhatsApp bookings without relying on third-party travel platforms.',
    client: 'Skardu Treks & Tours',
    livePreview: 'https://skardu-treks-and-tours.vercel.app/'
  },
  {
    id: '10',
    slug: 'rodriguez-hvac-remodeling',
    name: 'Rodriguez HVAC & Remodeling',
    category: 'Web',
    image: '/images/projects/rodriguez-hvac-remodeling.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A trade contractor site for an LA-based HVAC and remodeling business.',
    longDesc: 'A credibility-first marketing site for a 17-year Los Angeles HVAC and home remodeling contractor. It organizes a wide service catalog by trade specialization, surfaces transparent price ranges, and leads every path to a free written estimate.',
    features: [
      'Service Catalog with Transparent Price Ranges',
      'Instant Estimate Request Flow',
      'Licensing & Insurance Credential Showcase',
      'Project Portfolio & Trust Stats',
      'Click-to-Call Mobile Optimization'
    ],
    outcome: 'Replaced a generic contractor listing with a credibility-driven site that routes homeowners straight to a written estimate request.',
    client: 'Rodriguez HVAC Services',
    livePreview: 'https://rodriguez-hvac-services.vercel.app/'
  },
  {
    id: '11',
    slug: 'gym-membership-portal',
    name: 'Iron Ops Gym Membership Portal',
    category: 'Portals',
    image: '/images/projects/gym-membership-portal.jpg',
    stack: ['Next.js', 'TypeScript', 'Auth & Session Management', 'Tailwind CSS'],
    desc: 'A secure member login portal for gym membership and attendance management.',
    longDesc: 'A dedicated members-only portal for a gym management platform, handling secure sign-in with email or Google, and giving members a home base for tracking their membership and attendance.',
    features: [
      'Member Login with Google OAuth',
      'Membership & Attendance Tracking',
      'Secure Session Management',
      'Password Recovery Flow',
      'Responsive Mobile Experience'
    ],
    outcome: 'Delivered a clean, secure member portal as the front door to a larger gym management system.',
    client: 'Iron Ops Gym',
    livePreview: 'https://gym-app-devtimize.vercel.app/members'
  },
  {
    id: '12',
    slug: 'electrical-instincts-harlow',
    name: 'Electrical Instincts',
    category: 'Web',
    image: '/images/projects/electrical-instincts-harlow.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A local-trust marketing site for a Harlow-based electrician.',
    longDesc: 'A lead-generation site built around a single tradesman brand, putting a 5-star Google reputation and a two-field fast-callback form front and center so homeowners can request an electrician in seconds.',
    features: [
      'Two-Field Instant Callback Form',
      'Google Reviews Showcase',
      'Direct WhatsApp & Call CTAs',
      '24/7 Availability Messaging',
      'Local SEO-Optimized Landing Page'
    ],
    outcome: 'Turned a one-man electrical business into a polished local brand with a sub-15-minute average callback response.',
    client: 'Electrical Instincts',
    livePreview: 'https://electrical-instincts.vercel.app/'
  },
  {
    id: '13',
    slug: 'farm-house-restaurant',
    name: 'The Farm House Restaurant',
    category: 'Web',
    image: '/images/projects/farm-house-restaurant.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A dining destination site for a BBQ and Shinwari restaurant on GT Road.',
    longDesc: 'A menu-forward restaurant site for a high-volume BBQ, karahi, and steak house in Dina, Jhelum, built to move visitors straight into a WhatsApp table reservation or seasonal buffet booking.',
    features: [
      'WhatsApp Table Reservations',
      'Seasonal Buffet Menu Promotions',
      'Signature Menu Showcase',
      'Google Rating & Social Proof',
      'Location, Hours & Parking Info'
    ],
    outcome: 'Gave a GT Road landmark restaurant a digital presence that matches its in-person reputation and drives direct WhatsApp reservations.',
    client: 'The Farm House Restaurant',
    livePreview: 'https://the-farm-house-web.vercel.app/'
  },
  {
    id: '14',
    slug: 'shawarma-channel-lahore',
    name: 'Shawarma Channel',
    category: 'Web',
    image: '/images/projects/shawarma-channel-lahore.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A fast-food ordering site for a Lahore shawarma and rolls brand.',
    longDesc: 'A deal-driven ordering site for a Lahore shawarma and paratha rolls kitchen, built around combo bundles and direct WhatsApp ordering to route sales away from third-party delivery app fees.',
    features: [
      'WhatsApp Direct Ordering',
      'Combo Deal Bundles',
      'Category-Based Menu Browsing',
      'Promotional Deal Cards',
      'Mobile-First Ordering Flow'
    ],
    outcome: 'Gave the brand a direct ordering channel that keeps deal margins intact by bypassing third-party app commissions.',
    client: 'Shawarma Channel',
    livePreview: 'https://shawarma-channel.vercel.app/'
  },
  {
    id: '15',
    slug: 'craving-corner-cafe',
    name: 'Craving Corner Café',
    category: 'Web',
    image: '/images/projects/craving-corner-cafe.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A café website for a Faisalabad dine-in and delivery spot.',
    longDesc: 'A warm, menu-led site for a Faisalabad café serving burgers, sandwiches, and desi favorites, with seasonal Ramadan promotions and WhatsApp-based ordering built in.',
    features: [
      'Seasonal Iftar Platter Promotions',
      'WhatsApp Order Integration',
      'Tagged Menu Highlights (Bestseller, Spicy, New)',
      'Table Booking CTA',
      'Location & Hours Display'
    ],
    outcome: 'Gave a growing local café a branded ordering experience for both dine-in bookings and WhatsApp takeaway.',
    client: 'Craving Corner',
    livePreview: 'https://craving-corner-website.vercel.app/'
  },
  {
    id: '16',
    slug: 'starlit-electrical-birmingham',
    name: 'Starlit Electrical',
    category: 'Web',
    image: '/images/projects/starlit-electrical-birmingham.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A 5-star reputation site for a Birmingham electrician.',
    longDesc: 'A trust-led site for a 24/7 Birmingham electrical services company, showcasing a perfect Google rating alongside a clear service catalog covering everything from EICR certificates to full rewiring.',
    features: [
      '24/7 Emergency Call CTA',
      'Full Service Catalog',
      'Google Review Carousel',
      'Free Quote Request Form',
      'Local Trust Badges'
    ],
    outcome: 'Positioned a Birmingham electrician as the go-to 24/7 local expert with a review-driven landing experience.',
    client: 'Starlit Electrical',
    livePreview: 'https://starlit-electrical-web.vercel.app/'
  },
  {
    id: '17',
    slug: 'fix-uk-electricians',
    name: 'Fix UK Electricians',
    category: 'Web',
    image: '/images/projects/fix-uk-electricians.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A 24-hour emergency electrician site for a Birmingham trade business.',
    longDesc: 'A conversion-focused site for a round-the-clock Birmingham electrical company, pairing urgent-response messaging with a full grid of services and a wall of verified 5-star reviews.',
    features: [
      '24-Hour Emergency Callout CTA',
      'EICR Certificate Booking',
      'Full Service Grid with Detail Pages',
      'Verified Review Wall',
      'WhatsApp & Direct Call Integration'
    ],
    outcome: 'Built round-the-clock urgency into the brand, reinforced by a perfect review score across 38 verified customers.',
    client: 'Fix UK Electricians',
    livePreview: 'https://fix-uk.vercel.app/'
  },
  {
    id: '18',
    slug: 'dream-beauty-saloon',
    name: 'Dream Beauty Saloon',
    category: 'Web',
    image: '/images/projects/dream-beauty-saloon.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    desc: 'An editorial-style booking site for a Pretoria beauty studio.',
    longDesc: 'A high-fashion, editorial site for a Pretoria braiding, weave, and beauty studio, featuring an AI-powered style quiz that matches visitors to a service before they even book.',
    features: [
      'AI-Powered Style Quiz',
      'Service Pricing Menu',
      'Booking Reservation CTA',
      'Beauty Journal / Blog Section',
      'High-Fashion Editorial Design'
    ],
    outcome: 'Elevated the studio\'s brand into a premium beauty destination, using an interactive quiz to guide clients into bookings.',
    client: 'Dream Beauty Saloon',
    livePreview: 'https://dream-beauty-saloon.vercel.app/'
  },
  {
    id: '19',
    slug: 'hector-the-barber',
    name: 'Hector The Barber',
    category: 'Web',
    image: '/images/projects/hector-the-barber.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A brand storytelling site for a mobile barbershop-on-wheels near USC.',
    longDesc: 'A brand-forward site built around the iconic "Barber Bus" parked near USC, combining a full pricing menu with an AI grooming advisor that recommends a style before the customer even sits down.',
    features: [
      'AI Grooming Advisor Assistant',
      'Service & Pricing Menu',
      'Online Booking CTA',
      'Google Review Integration',
      'Unique "Barber Bus" Brand Storytelling'
    ],
    outcome: 'Turned a one-of-a-kind mobile barbershop concept into a memorable digital brand with an AI-assisted booking funnel.',
    client: 'Hector The Barber',
    livePreview: 'https://hector-barber-web-ifcg.vercel.app/'
  },
  {
    id: '20',
    slug: 'pizza-mahal',
    name: 'Pizza Mahal',
    category: 'Web',
    image: '/images/projects/pizza-mahal.jpg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'A royal-themed pizza ordering site for a Pakistani fast-food brand.',
    longDesc: 'A bold, appetite-driven ordering site for a Pakistani pizza brand, built around an interactive pizza customizer and bestseller highlights to speed up the path from browsing to checkout.',
    features: [
      'Interactive Pizza Customizer',
      'Bestseller Highlights & Ratings',
      'Menu Category Browsing',
      'Order Flow with Live Pricing',
      'Mobile-Optimized Storefront'
    ],
    outcome: 'Gave the brand a "Royal Taste, Majestic Experience" digital storefront that matches its premium positioning.',
    client: 'Pizza Mahal',
    livePreview: 'https://pizza-mahal.vercel.app/'
  },
  {
    id: '21',
    slug: 'adil-art-studio',
    name: 'Aadil Bhai Fine Art Studio',
    category: 'Web',
    image: '/images/projects/adil-art-studio.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Gemini AI'],
    desc: 'A fine-art storefront and academy site with certificate verification and an AI art advisor.',
    longDesc: 'A website for a hand-painted fine art studio and academy, built to sell original paintings and custom commissions with trust at the centre: every piece ships with a serialized Certificate of Authenticity that visitors can verify online, and an AI Art Advisor answers questions about pricing and proof of process.',
    features: [
      'Ready Masterpieces Gallery & Custom Commission Flow',
      'Online Certificate of Authenticity Verification',
      'AI Art Advisor Chat Assistant',
      'Multi-Currency Pricing (PKR, USD, AED, GBP)',
      'Art Academy Classes & Direct WhatsApp Ordering'
    ],
    outcome: 'Gave the studio a credible, collector-ready online presence where authenticity, pricing and commissions are all handled in one place.',
    client: 'Aadil Bhai Fine Art Studio',
    livePreview: 'https://adil-art-studio.vercel.app/'
  },
  {
    id: '22',
    slug: 'apna-laptop',
    name: 'Apna Laptop Store',
    category: 'Web',
    image: '/images/projects/apna-laptop.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Gemini AI'],
    desc: 'A verified laptop store with order tracking, loyalty points and an admin panel.',
    longDesc: 'A full online store for a laptop dealer in Nankana Sahib: a curated hub of fixed-price, checked stock with cart and checkout, order tracking, discount codes and loyalty points, plus buyer tools like a price calculator, laptop finder quiz and upgrade advisor. A Firebase-backed admin panel runs inventory, orders and customers.',
    features: [
      'Fixed-Price Verified Laptop Hub with Cart & Checkout',
      'Order Tracking, Discount Codes & Loyalty Points',
      'Price Calculator, Laptop Finder & Upgrade Advisor',
      'AI Order Assistant (Roman Urdu Supported)',
      'Firebase Admin Panel for Stock, Orders & Customers'
    ],
    outcome: 'Moved a local laptop business from chat-and-phone sales to a trackable online store the owner can manage without a developer.',
    client: 'Apna Laptop',
    livePreview: 'https://apna-laptop-site.vercel.app/'
  },
  {
    id: '23',
    slug: 'defence-cooling-centre',
    name: 'Defence Cooling Centre',
    category: 'Web',
    image: '/images/projects/defence-cooling-centre.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Gemini AI'],
    desc: 'A lead-capture site for an AC repair and used-appliance trade business in Faisalabad.',
    longDesc: 'A bilingual (English and Urdu) website for an HVAC repair and used appliance buy-and-sell business, built around two goals: booking doorstep AC repairs and collecting photos for instant buy-back valuations. An AI price and service assistant handles first-contact questions and falls back to local answers when offline.',
    features: [
      'Doorstep AC Repair & Service Booking',
      'Sell-Your-Old-Appliance Valuation Flow',
      'Used AC Buy & Sell Listings',
      'AI Price & Service Bot (Urdu / English)',
      'One-Tap WhatsApp & Call Hotline'
    ],
    outcome: 'Turned a word-of-mouth repair shop into a lead-generating site that serves both repair customers and appliance sellers.',
    client: 'Defence Cooling Centre',
    livePreview: 'https://defence-colling-system.vercel.app/'
  },
  {
    id: '24',
    slug: 'fatima-cooling-repairing',
    name: 'Fatima Cooling & Repairing',
    category: 'Web',
    image: '/images/projects/fatima-cooling-repairing.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Express'],
    desc: 'A doorstep AC repair and servicing site for Lahore with AI-guided booking.',
    longDesc: 'A conversion-focused website for a Lahore AC service company covering inverter and non-inverter repair, servicing, installation and gas charging. Visitors can book on WhatsApp, call directly, or use an AI booking assistant that works in Urdu and English.',
    features: [
      'Inverter vs Conventional AC Service Pages',
      'Quick Service Booking (Repair, Service, Gas Refill)',
      'AI AC Booking Assistant (Urdu / English)',
      'Lahore Service Areas & Technician Booking',
      'Click-to-Call and WhatsApp Booking'
    ],
    outcome: 'Gave the business a clear, mobile-first booking funnel for doorstep service across Lahore.',
    client: 'Fatima Cooling & Repairing Center',
    livePreview: 'https://fatima-cooling-repairing.vercel.app/'
  },
  {
    id: '25',
    slug: 'parker-electrical-solutions',
    name: 'Parker Electrical Solutions',
    category: 'Web',
    image: '/images/projects/parker-electrical-solutions.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Gemini AI', 'SendGrid'],
    desc: 'A local-SEO electrician website for Essex with quote emails and an AI chat assistant.',
    longDesc: 'A website for an NICEIC-approved electrical contractor serving Essex and Greater London, structured for local search with service and area pages, a project gallery, and a 24/7 emergency call banner. Quote requests are sent straight to the owner by email, and an AI chat assistant handles common questions.',
    features: [
      'Service & Area Pages Built for Local SEO',
      'Quote Request Form with Email Delivery',
      'AI Chat Assistant',
      '24/7 Emergency Call-Out Banner',
      'Project Gallery & Trust Badges'
    ],
    outcome: 'Delivered a professional, search-ready presence that routes emergency calls and quote requests directly to the contractor.',
    client: 'Parker Electrical Solutions Ltd',
    livePreview: 'https://joe-parker-website.vercel.app/'
  },
  {
    id: '26',
    slug: 'mbc-friseur-berlin',
    name: 'MBC Friseur Berlin',
    category: 'Web',
    image: '/images/projects/mbc-friseur-berlin.jpg',
    stack: ['React', 'TypeScript', 'Vite', 'Gemini AI'],
    desc: 'An editorial luxury barber site for Berlin-Charlottenburg with booking and an AI style consultant.',
    longDesc: 'A German-language brand site for a master barber in Berlin-Charlottenburg, designed with an editorial serif look, a heritage story section, a team showcase and an integrated booking flow. An AI style consultant helps visitors choose a cut before they book.',
    features: [
      'Editorial Luxury Design with Heritage Storytelling',
      'Integrated Appointment Booking Flow',
      'AI Style Consultant',
      'Services & Portfolio Showcase',
      'German-Language Content'
    ],
    outcome: 'Positioned the salon as a premium Berlin destination with a booking path built into the brand experience.',
    client: 'MBC Friseur',
    livePreview: 'https://mbc-salon-web.vercel.app/'
  },
  {
    id: '27',
    slug: 'maha-fragrances',
    name: 'Maha Fragrances',
    category: 'Web',
    image: '/images/projects/maha-fragrances.jpg',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    desc: 'A luxury perfume storefront with a scent finder, journal and bilingual content.',
    longDesc: 'A dark, editorial storefront for a Pakistani perfume brand, with a four-fragrance catalogue, a guided scent finder, fragrance families and notes library, and a journal in English and Urdu. Pricing, delivery estimates and brand details are managed from simple config files.',
    features: [
      'Guided Scent Finder & Fragrance Families',
      'Notes Library & Journal (English / Urdu)',
      'Cart with Cash on Delivery Across Pakistan',
      'Free Delivery Threshold Messaging',
      'Easy-to-Edit Catalogue & Brand Config'
    ],
    outcome: 'Gave the brand a premium, story-led storefront that matches the feel of its product.',
    client: 'Maha Fragrances'
  },
  {
    id: '28',
    slug: 'stay-strong-gym',
    name: 'Stay Strong Gym',
    category: 'Web',
    image: '/images/projects/stay-strong-gym.jpg',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    desc: 'A high-energy marketing site for a fitness club with trainers, reviews and free-session booking.',
    longDesc: 'A fast, lightweight single-page website for a Pakistani gym, built to turn visitors into free-session bookings. It covers the club, services, trainers, member reviews and contact details behind a bold hero.',
    features: [
      'Free Session Booking Call-to-Action',
      'Services & Trainers Sections',
      'Member Reviews',
      'Contact & Location Details',
      'Lightweight Static Build'
    ],
    outcome: 'A quick-loading, conversion-focused landing site that gives the gym a clear path from visitor to free trial.',
    client: 'Stay Strong Gym'
  },
  {
    id: '29',
    slug: 'rising-star-of-islam',
    name: 'The Rising Star of Islam',
    category: 'Web',
    image: '/images/projects/rising-star-of-islam.jpg',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    desc: 'An admissions-focused website for an Islamic school with programs and enquiry flow.',
    longDesc: 'A polished website for an Islamic education institute that presents its mission, programs and admission process, with an animated preloader and clear Apply Now and Contact calls to action for prospective parents.',
    features: [
      'Programs & Admission Information',
      'Apply Now and Contact Calls to Action',
      'Animated Preloader',
      'Mission, Values & Facilities Section',
      'Responsive Layout'
    ],
    outcome: 'Gave the institute a credible online front door that explains its programs and makes enquiries easy.',
    client: 'The Rising Star of Islam'
  },
  {
    id: '30',
    slug: 'aneel-dental-clinic',
    name: 'Aneel Dental Clinic Manager',
    category: 'Desktop',
    image: '/images/projects/aneel-dental-clinic.jpg',
    stack: ['Python', 'Flask', 'SQLite', 'pywebview', 'ReportLab'],
    desc: 'An offline Windows app for patient records, appointments, payments and backups.',
    longDesc: 'A desktop clinic-management app packaged as a Windows executable. It keeps patient records, medical history, visits, appointments and payments in a local SQLite database, so the clinic can run without internet, with printable reports, Excel export and one-click backup and restore.',
    features: [
      'Patient Records & Medical History',
      'Appointment Scheduling with Reminders',
      'Visit Charges & Payment Tracking',
      'PDF Printouts & Excel Export',
      'One-Click Database Backup & Restore'
    ],
    outcome: 'Replaced paper registers with a single offline app the clinic staff can run on their own computer.',
    client: 'Aneel Dental Clinic'
  }
];
