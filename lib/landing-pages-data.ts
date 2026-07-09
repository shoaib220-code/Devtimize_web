import { PUBLIC_PRICING_RANGE } from '@/lib/ai-receptionist-data';
import { services } from '@/lib/services-data';

const webDev = services.find((s) => s.slug === 'web-development')!;
const aiAutomation = services.find((s) => s.slug === 'ai-automation')!;

export interface LandingPageFaq {
  q: string;
  a: string;
}

export interface LandingPageLink {
  label: string;
  href: string;
}

export interface LandingPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogSubtitle: string;
  kicker: string;
  h1: string;
  painParagraph: string;
  whatItFixes: string;
  socialProofQuote?: { text: string; author: string };
  socialProofCaseStudy: string;
  costOfInaction: string;
  valueStack: string[];
  comparisonTable: { headers: string[]; rows: string[][] };
  investmentHeadline: string;
  investmentNote: string;
  riskReversal: string;
  ctaLabel: string;
  faqs: LandingPageFaq[];
  internalLinks: LandingPageLink[];
}

const PARKER_CASE_STUDY =
  'Parker Electrical Solutions had a website that was completely invisible in search. We rebuilt the site and applied technical SEO, GEO, and AEO/LLM-based optimization — within about 2 months, they reached page 1 for core local search terms including "electrician southend" and "commercial electrician essex," with more terms like "electrician grays" and "ev charger installation essex" climbing onto page 2 and continuing to rise.';

const AI_RECEPTIONIST_INVESTMENT = `Systems typically range from $${PUBLIC_PRICING_RANGE.setupLow.toLocaleString()}-$${PUBLIC_PRICING_RANGE.setupHigh.toLocaleString()} setup and $${PUBLIC_PRICING_RANGE.monthlyLow}-$${PUBLIC_PRICING_RANGE.monthlyHigh}/month depending on scope — call volume, number of locations, and integrations.`;

const AI_RECEPTIONIST_TABLE = {
  headers: ['', 'AI Receptionist', 'Full-Time Receptionist', 'No Receptionist'],
  rows: [
    ['Availability', '24/7, including nights/weekends', 'Business hours only', 'None outside your own answering'],
    ['Cost', 'Book a call for your exact quote', 'Salary + benefits', '$0, but calls go unanswered'],
    ['Setup time', '48 hours', 'Weeks (hiring, training)', 'N/A'],
    ['Sick days / turnover', 'None', 'Yes', 'N/A'],
    ['Handles multiple calls at once', 'Yes', 'No', 'No'],
    ['Books directly into calendar', 'Yes', 'Depends on training', 'No'],
  ],
};

const SEO_TABLE = {
  headers: ['', 'One-Off SEO Fix', 'Ongoing SEO Retainer', 'Doing Nothing'],
  rows: [
    ['Fixes technical blockers', 'Yes', 'Yes', 'No'],
    ['Ongoing content/rankings work', 'No', 'Yes', 'No'],
    ['Best for', 'A clear one-time technical problem', 'Competing for ongoing rankings', "Sites that don't need visibility"],
    ['Cost', 'Book a call for a quote', 'Custom, monthly', '$0, but no new customers from search'],
  ],
};

const WEB_DEV_TABLE = {
  headers: ['', 'Custom Development', 'Template/Website Builder', 'No Website'],
  rows: [
    ['Built for your exact business', 'Yes', 'Generic layout', 'N/A'],
    ['Scales as you grow', 'Yes', 'Limited', 'N/A'],
    ['SEO-optimized architecture', 'Yes', 'Often not', 'N/A'],
    ['Cost', `$${webDev.minPrice}-$${webDev.maxPrice} depending on scope`, 'Cheaper upfront, limited long-term', '$0, but no online presence'],
  ],
};

export const landingPages: LandingPageData[] = [
  {
    slug: 'ai-receptionist-dental-clinics-kuwait',
    metaTitle: 'Answering Service for Dental Clinics in Kuwait (AI-Powered) | Devtimize',
    metaDescription: 'Stop losing patients to missed calls. AI-powered answering service and virtual receptionist for Kuwait dental clinics — answers 24/7, books appointments.',
    ogTitle: 'Answering Service for Dental Clinics',
    ogSubtitle: 'Kuwait — AI-Powered, Never Miss a Patient Call',
    kicker: 'Answering Service & Virtual Receptionist · Dental Clinics · Kuwait',
    h1: 'Every Missed Call Is a Patient Booked Elsewhere',
    painParagraph: "Every missed call is a patient who books with the clinic down the street instead — and in Kuwait, a huge share of patient calls come in during evenings, weekends, and around Friday prayer hours when your front desk is closed.",
    whatItFixes: "Think of it as a smarter version of a traditional answering service or virtual receptionist — instead of just taking a message, it answers every call in a natural voice, books appointments straight into your calendar, and texts a confirmation, even at 11pm on a Thursday.",
    socialProofQuote: { text: 'Changed the way we work... highly recommended for anyone looking for serious software development.', author: 'Nadeem, IT Care' },
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'A new-patient inquiry at a Kuwait dental clinic is commonly worth $150-400+ in first-visit value. Missing just 2-3 calls a week after hours is an estimated $1,200-4,800/month left on the table.',
    valueStack: [
      '24/7 answering, including nights and weekends',
      'Direct calendar booking',
      'SMS/email confirmations',
      'Full call transcripts',
      'Urgent-call escalation to your mobile',
      'Handles multiple calls at once — no hold music',
    ],
    comparisonTable: AI_RECEPTIONIST_TABLE,
    investmentHeadline: AI_RECEPTIONIST_INVESTMENT,
    investmentNote: 'Book a call for your exact quote.',
    riskReversal: 'Month-to-month, no long-term lock-in.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'Does it sound robotic?', a: 'No — it uses natural conversational speech that is warm and professional, indistinguishable from a real receptionist in most cases.' },
      { q: 'What if it books the wrong appointment?', a: "It's configured with your actual services and calendar rules before going live, and every booking is confirmed by SMS/email so you can catch and fix anything before the patient arrives." },
      { q: 'Does it handle Arabic-speaking callers?', a: "Yes — our AI receptionist handles Arabic-speaking callers, not just English. It's built to serve Kuwait's bilingual market from day one." },
      { q: 'Can I cancel anytime?', a: "Yes — it's month-to-month with no long-term lock-in." },
      { q: 'How is this different from a regular answering service?', a: "A human answering service just takes messages. This books directly into your calendar and can answer real questions about your services — a message-taker can't do that." },
    ],
    internalLinks: [
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'AI Receptionist for Law Firms in Kuwait', href: '/ai-receptionist-law-firms-kuwait' },
      { label: 'Dentist Website Design', href: '/industries/dentist-websites' },
    ],
  },
  {
    slug: 'ai-receptionist-law-firms-kuwait',
    metaTitle: 'Virtual Receptionist for Law Firms in Kuwait (AI-Powered) | Devtimize',
    metaDescription: 'A missed call from a potential client often means they call the next firm. AI-powered virtual receptionist for Kuwait law firms — 24/7 intake answering.',
    ogTitle: 'Virtual Receptionist for Law Firms',
    ogSubtitle: 'Kuwait — AI-Powered, Never Miss a New Client Call',
    kicker: 'Virtual Receptionist & Answering Service · Law Firms · Kuwait',
    h1: 'A Missed Call Is a Client Calling Your Competitor',
    painParagraph: 'A prospective client calling a law firm rarely calls back if no one answers — they call the next name on their list.',
    whatItFixes: "It's a smarter version of a traditional virtual receptionist or answering service — it answers every call, qualifies the inquiry, and books an initial consultation directly into your calendar, day or night.",
    socialProofQuote: { text: 'Amazing team! Delivered on time and exceeded expectations.', author: 'Riasat Ali' },
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'A single new client engagement is often worth thousands — missing even one or two intake calls a month usually costs far more than this system.',
    valueStack: [
      '24/7 intake answering',
      'Consultation booking directly into your calendar',
      'Full call transcripts for every inquiry',
      'Urgent-matter escalation',
      'Confidential message handling for sensitive calls',
    ],
    comparisonTable: AI_RECEPTIONIST_TABLE,
    investmentHeadline: AI_RECEPTIONIST_INVESTMENT,
    investmentNote: 'Book a call for your exact quote.',
    riskReversal: 'Month-to-month, no long-term lock-in.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'Does it maintain confidentiality on sensitive calls?', a: 'Yes — it takes a detailed, confidential message and notifies you immediately for anything sensitive or complex.' },
      { q: 'Can it distinguish urgent matters?', a: 'Yes — urgent calls are escalated to your mobile instantly rather than waiting in a queue.' },
      { q: 'Does it handle Arabic-speaking callers?', a: 'Yes — it answers and converses in Arabic as well as English, so no caller gets stuck with a language barrier.' },
      { q: 'Can I cancel anytime?', a: "Yes — it's month-to-month with no long-term lock-in." },
      { q: 'Does it work for solo practitioners or only larger firms?', a: 'Both — the same system scales from a solo practice to a multi-partner firm.' },
    ],
    internalLinks: [
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'AI Receptionist for Dental Clinics in Kuwait', href: '/ai-receptionist-dental-clinics-kuwait' },
      { label: 'Law Firm Website Design', href: '/industries/lawyer-websites' },
    ],
  },
  {
    slug: 'ai-receptionist-real-estate-kuwait',
    metaTitle: 'Answering Service for Real Estate Agencies in Kuwait (AI-Powered) | Devtimize',
    metaDescription: 'Serious buyers call at all hours. AI-powered answering service for Kuwait real estate agencies — answers inquiries and books viewings 24/7.',
    ogTitle: 'Answering Service for Real Estate',
    ogSubtitle: 'Kuwait — AI-Powered, Never Miss a Buyer Inquiry',
    kicker: 'Answering Service & Virtual Receptionist · Real Estate · Kuwait',
    h1: 'The Next Buyer Should Reach You, Not Your Competitor',
    painParagraph: "Serious property buyers browse and call outside office hours — if no one answers, they call the next agency's listing instead.",
    whatItFixes: "It's a smarter version of a traditional answering service — it answers every inquiry, qualifies buyer or seller interest, and books a viewing or callback directly into your calendar.",
    socialProofQuote: { text: 'Delivered on time and exceeded expectations. Highly professional.', author: 'Riasat Ali' },
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'A single closed deal is worth far more than a missed-call system costs — even one recovered inquiry a month typically outweighs the investment.',
    valueStack: [
      '24/7 inquiry answering',
      'Viewing/callback booking',
      'Lead qualification',
      'Call transcripts and summaries',
      'Instant notification to your mobile for hot leads',
    ],
    comparisonTable: AI_RECEPTIONIST_TABLE,
    investmentHeadline: AI_RECEPTIONIST_INVESTMENT,
    investmentNote: 'Book a call for your exact quote.',
    riskReversal: 'Month-to-month, no long-term lock-in.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'Can it discuss specific property details?', a: 'It captures interest and books a callback with an agent for full details — it is not a full listings database.' },
      { q: 'Does it work for a solo agent or only agencies?', a: 'Both — it scales from a single agent to a full agency.' },
      { q: 'Does it handle Arabic-speaking callers?', a: 'Yes — Arabic-speaking buyers and sellers get the same natural conversation as English speakers, not a translated fallback.' },
      { q: 'Can I cancel anytime?', a: "Yes — it's month-to-month with no long-term lock-in." },
      { q: 'How fast is setup?', a: 'Most businesses are live within 48 hours.' },
    ],
    internalLinks: [
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'Real Estate Website Design', href: '/industries/real-estate-websites' },
      { label: 'AI Receptionist for Law Firms in Kuwait', href: '/ai-receptionist-law-firms-kuwait' },
    ],
  },
  {
    slug: 'ai-receptionist-dental-clinics-uk',
    metaTitle: 'Answering Service for Dental Clinics in the UK (AI-Powered) | Devtimize',
    metaDescription: 'Missed calls mean lost patients. AI-powered answering service and virtual receptionist for UK dental clinics — 24/7 answering, appointment booking.',
    ogTitle: 'Answering Service for Dental Clinics',
    ogSubtitle: 'UK — AI-Powered, Never Miss a Patient Call',
    kicker: 'Answering Service & Virtual Receptionist · Dental Clinics · UK',
    h1: 'Every Missed Call Is a Patient Booked Elsewhere',
    painParagraph: "UK dental patients often call in the evening after work, or first thing before your practice opens — exactly when your front desk isn't there to answer.",
    whatItFixes: "It's a smarter version of a traditional answering service or virtual receptionist — it answers calls around the clock, books appointments straight into your calendar, and sends confirmations automatically.",
    socialProofQuote: { text: 'Went beyond expectations at a low budget. They really care about the success of the project.', author: 'Saif Ur Rahman' },
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'A new-patient inquiry is commonly worth £100-300+ in first-visit value — missing a handful of calls a week adds up fast against what this system costs.',
    valueStack: [
      '24/7 answering',
      'Direct calendar booking',
      'SMS/email confirmations',
      'Full call transcripts',
      'Urgent-call escalation',
      'Handles concurrent calls with no hold queue',
    ],
    comparisonTable: AI_RECEPTIONIST_TABLE,
    investmentHeadline: AI_RECEPTIONIST_INVESTMENT,
    investmentNote: 'Book a call for your exact quote.',
    riskReversal: 'Month-to-month, no long-term lock-in.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'Does it sound robotic?', a: 'No — it uses natural conversational speech, warm and professional.' },
      { q: 'What if it mis-books an appointment?', a: 'Every booking is confirmed by SMS/email so you can catch and fix anything before the patient arrives.' },
      { q: 'Can I see every call transcript?', a: 'Yes — every call is transcribed and sent to you with a summary and any action items.' },
      { q: 'Can I cancel anytime?', a: "Yes — it's month-to-month with no long-term lock-in." },
      { q: 'Does it integrate with our existing booking system?', a: 'Integrations are scoped and confirmed on the call based on what you already use — not every integration is guaranteed off-the-shelf.' },
    ],
    internalLinks: [
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'AI Receptionist for Law Firms in the UK', href: '/ai-receptionist-law-firms-uk' },
      { label: 'Dentist Website Design', href: '/industries/dentist-websites' },
    ],
  },
  {
    slug: 'ai-receptionist-law-firms-uk',
    metaTitle: 'Virtual Receptionist for Law Firms in the UK (AI-Powered) | Devtimize',
    metaDescription: 'A missed intake call often becomes a competitor\'s client. AI-powered virtual receptionist for UK law firms — 24/7 intake answering and booking.',
    ogTitle: 'Virtual Receptionist for Law Firms',
    ogSubtitle: 'UK — AI-Powered, Never Miss a New Client Call',
    kicker: 'Virtual Receptionist & Answering Service · Law Firms · UK',
    h1: 'A Missed Call Is a Client Calling Your Competitor',
    painParagraph: "A prospective client who can't reach your firm rarely waits — they call the next one.",
    whatItFixes: "It's a smarter version of a traditional virtual receptionist or answering service — it answers every call, qualifies the inquiry, books an initial consultation, and flags urgent matters immediately.",
    socialProofQuote: { text: 'Amazing team! Delivered on time and exceeded expectations. Highly professional and easy to communicate with.', author: 'Riasat Ali' },
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'A single new engagement is typically worth thousands — missing even one or two calls a month usually costs more than the system does.',
    valueStack: [
      '24/7 intake answering',
      'Consultation booking',
      'Confidential message handling',
      'Full transcripts',
      'Urgent-matter escalation to your mobile',
    ],
    comparisonTable: AI_RECEPTIONIST_TABLE,
    investmentHeadline: AI_RECEPTIONIST_INVESTMENT,
    investmentNote: 'Book a call for your exact quote.',
    riskReversal: 'Month-to-month, no long-term lock-in.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'Does it keep sensitive information confidential?', a: 'Yes — sensitive calls are logged as confidential messages and routed to you directly.' },
      { q: 'Can it tell urgent from routine calls?', a: 'Yes — urgent matters are escalated to your mobile instantly.' },
      { q: 'Is this suitable for a small or solo practice?', a: 'Yes — the same system scales from a solo practice to a multi-partner firm.' },
      { q: 'Can I cancel anytime?', a: "Yes — it's month-to-month with no long-term lock-in." },
      { q: 'How fast can we go live?', a: 'Most businesses are live within 48 hours.' },
    ],
    internalLinks: [
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'AI Receptionist for Dental Clinics in the UK', href: '/ai-receptionist-dental-clinics-uk' },
      { label: 'Law Firm Website Design', href: '/industries/lawyer-websites' },
    ],
  },
  {
    slug: 'seo-services-kuwait',
    metaTitle: 'SEO Services for Businesses in Kuwait | Devtimize',
    metaDescription: 'Most Kuwait business sites are invisible on Google due to fixable technical issues. SEO for Kuwait businesses — book a call for your audit and quote.',
    ogTitle: 'SEO Services',
    ogSubtitle: 'Kuwait — Get Found on Google',
    kicker: 'SEO · Kuwait',
    h1: 'Invisible on Google Is a Fixable Problem',
    painParagraph: 'Many Kuwait business websites are invisible on Google search — not because the business is weak, but because of fixable technical issues blocking search visibility entirely.',
    whatItFixes: 'A technical audit and fix pass first, then content and local search work so you rank for the terms your actual customers search.',
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: "Every month without search visibility is customers searching for what you sell and finding a competitor instead.",
    valueStack: [
      'Technical SEO audit and fix',
      'Structured data / schema markup',
      'Local search optimization',
      'Content aligned to real search intent',
      'Optional ongoing retainer',
    ],
    comparisonTable: SEO_TABLE,
    investmentHeadline: 'No fixed public SEO price',
    investmentNote: "Pricing depends on what's actually broken and how big the fix is. Book a call for a free audit and an exact quote.",
    riskReversal: 'The audit/fix is a one-time project, not a locked-in retainer.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'How long until we see results?', a: 'Technical fixes can be re-indexed by Google within weeks; ranking improvements typically take 2-6 months depending on competition — nobody can honestly promise an exact date.' },
      { q: 'Do you guarantee a #1 ranking?', a: 'No — no honest SEO provider can guarantee a specific ranking position.' },
      { q: "What's usually broken on Kuwait business sites?", a: 'Commonly: broken or missing sitemaps, no structured data, slow or unoptimized images, and thin content — all things Google needs fixed before it will rank you at all.' },
      { q: 'Is this a contract or can I stop anytime?', a: 'The initial audit/fix is one-time; ongoing retainers are month-to-month.' },
      { q: 'Do you work with clients outside Kuwait too?', a: 'Yes — we also work with clients in the UK, US, Canada, Europe, and Australia.' },
    ],
    internalLinks: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'SEO Services (UK)', href: '/seo-services-uk' },
      { label: 'Best Tech Stack for a SaaS MVP', href: '/blog/best-tech-stack-saas-2026' },
    ],
  },
  {
    slug: 'seo-services-uk',
    metaTitle: 'SEO Services for UK Small Businesses | Devtimize',
    metaDescription: 'Most small business sites are invisible on Google due to fixable technical issues. SEO for UK businesses — book a call for your audit and quote.',
    ogTitle: 'SEO Services',
    ogSubtitle: 'UK — Get Found on Google',
    kicker: 'SEO · UK',
    h1: 'Invisible on Google Is a Fixable Problem',
    painParagraph: "Most UK small business sites are invisible on Google — not from bad content, but from technical blockers (broken sitemaps, missing schema, slow pages) that stop Google from ranking the site at all.",
    whatItFixes: 'We start with a technical audit and fix pass, then build content and local search signals so you rank for the searches your actual customers use.',
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: "Every month you're not ranking for local searches is customers finding a competitor instead — for most UK service businesses, even a handful of missed inquiries a month outweighs the cost of fixing the underlying problem.",
    valueStack: [
      'Technical SEO audit and fix',
      'Structured data / schema markup',
      'Local search optimization',
      'Content aligned to real search intent',
      'Ongoing retainer available once the foundation is fixed',
    ],
    comparisonTable: SEO_TABLE,
    investmentHeadline: 'No fixed public SEO price',
    investmentNote: "Pricing depends on what's actually broken and how big the fix is. Book a call for a free audit and an exact quote.",
    riskReversal: 'The audit/fix is a one-time project, not a locked-in retainer — you decide separately if you want ongoing SEO work afterward.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'How long until we see results?', a: 'Technical fixes can be re-indexed within weeks; ranking improvements for competitive terms typically take 2-6 months, longer for high-competition keywords.' },
      { q: 'Do you guarantee a #1 ranking?', a: 'No — no honest SEO provider can guarantee a specific ranking position; anyone who promises that is not being straight with you.' },
      { q: 'What\'s actually broken on most small business sites?', a: 'Commonly: broken or missing sitemaps, no structured data, slow or unoptimized images, thin or duplicate content.' },
      { q: 'Is this a contract or can I stop anytime?', a: 'Month-to-month for retainers; the initial fix is a one-time project.' },
      { q: 'Do you work with businesses outside the UK too?', a: 'Yes — we also work with clients in the US, Canada, Europe, Australia, and Kuwait.' },
    ],
    internalLinks: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'SEO Services (Kuwait)', href: '/seo-services-kuwait' },
      { label: 'Best Tech Stack for a SaaS MVP', href: '/blog/best-tech-stack-saas-2026' },
    ],
  },
  {
    slug: 'web-development-kuwait',
    metaTitle: 'Web Development for Businesses in Kuwait | Devtimize',
    metaDescription: `Custom websites, portals, and dashboards for Kuwait businesses. From $${webDev.minPrice}. React, Laravel, Flask, .NET Core. Book a call for your quote.`,
    ogTitle: 'Web Development',
    ogSubtitle: 'Kuwait — Custom Sites, Portals & Dashboards',
    kicker: 'Web Development · Kuwait',
    h1: 'A Slow Website Costs You Customers Before They Call',
    painParagraph: 'A slow, templated, or outdated website costs Kuwait businesses customers before they ever pick up the phone.',
    whatItFixes: 'Custom-built websites, portals, dashboards, and e-commerce, built fast and mobile-first for how Kuwait customers actually browse.',
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'Every visitor who bounces off a slow or unclear site is a customer who found a competitor instead — often worth far more than the cost of fixing the site.',
    valueStack: [
      'Custom enterprise portals',
      'E-commerce ecosystems',
      'Interactive dashboards',
      'Progressive Web Apps (PWA)',
      'SEO-optimized architecture from day one',
    ],
    comparisonTable: WEB_DEV_TABLE,
    investmentHeadline: `$${webDev.minPrice}-$${webDev.maxPrice}`,
    investmentNote: 'Depending on scope. Book a call for your exact quote.',
    riskReversal: 'Project-based, not a subscription — you know the scope before you commit.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'How long does a build take?', a: 'Simple sites are usually delivered in 1-3 weeks; larger portals or e-commerce platforms take longer depending on scope.' },
      { q: 'Do you work with Kuwait-specific business needs?', a: 'Yes — we build for the payment methods, languages, and business practices relevant to your market.' },
      { q: 'What if I need changes after launch?', a: 'Our Maintenance & Support service covers ongoing updates, bug fixes, and new features.' },
      { q: 'Do you offer ongoing support?', a: 'Yes — monthly retainers are available starting at $100/month.' },
      { q: 'Can you work with our existing brand and design?', a: 'Yes — we build around your existing brand identity rather than forcing a generic template.' },
    ],
    internalLinks: [
      { label: 'Web Development Service', href: '/services/web-development' },
      { label: 'Web Development (UK)', href: '/web-development-uk' },
      { label: 'SEO Services (Kuwait)', href: '/seo-services-kuwait' },
    ],
  },
  {
    slug: 'web-development-uk',
    metaTitle: 'Web Development for UK Businesses | Devtimize',
    metaDescription: `Custom websites, portals, and dashboards for UK businesses. From $${webDev.minPrice}. React, Laravel, Flask, .NET Core. Book a call for your quote.`,
    ogTitle: 'Web Development',
    ogSubtitle: 'UK — Custom Sites, Portals & Dashboards',
    kicker: 'Web Development · UK',
    h1: 'A Slow Website Costs You Customers Before They Call',
    painParagraph: 'A slow or outdated website loses UK customers before they ever contact you — most visitors judge legitimacy in seconds.',
    whatItFixes: 'Custom-built, fast, mobile-first websites, portals, and e-commerce platforms.',
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'Every visitor who leaves a slow or confusing site is a lead that went to a competitor instead.',
    valueStack: [
      'Custom enterprise portals',
      'E-commerce ecosystems',
      'Interactive dashboards',
      'Progressive Web Apps (PWA)',
      'SEO-optimized architecture',
    ],
    comparisonTable: WEB_DEV_TABLE,
    investmentHeadline: `$${webDev.minPrice}-$${webDev.maxPrice}`,
    investmentNote: 'Depending on scope. Book a call for your exact quote.',
    riskReversal: 'Project-based, not a subscription — scope agreed before you commit.',
    ctaLabel: 'Book a Call',
    faqs: [
      { q: 'How long does a build take?', a: 'Simple sites are usually delivered in 1-3 weeks; larger portals or e-commerce platforms take longer depending on scope.' },
      { q: 'Do you work with UK businesses remotely?', a: 'Yes — all communication happens over email, WhatsApp, and video calls.' },
      { q: 'What happens after launch?', a: 'Our Maintenance & Support service covers ongoing updates, bug fixes, and new features.' },
      { q: 'Do you offer ongoing support?', a: 'Yes — monthly retainers are available starting at $100/month.' },
      { q: 'Can you integrate with our existing systems?', a: 'Yes — integrations are scoped and confirmed based on what you already use.' },
    ],
    internalLinks: [
      { label: 'Web Development Service', href: '/services/web-development' },
      { label: 'Web Development (Kuwait)', href: '/web-development-kuwait' },
      { label: 'SEO Services (UK)', href: '/seo-services-uk' },
    ],
  },
  {
    slug: 'ai-automation-services',
    metaTitle: 'AI & Automation Services | Devtimize',
    metaDescription: `Custom AI chatbots, RAG assistants, and automation from $${aiAutomation.minPrice}. Real AI expertise, not hype. Book a call for your quote.`,
    ogTitle: 'AI & Automation Services',
    ogSubtitle: 'Custom Chatbots, RAG & Automation',
    kicker: 'AI & Automation',
    h1: 'Repetitive Work Is Quietly Costing You Hours Every Week',
    painParagraph: 'Manual, repetitive work — answering the same questions, processing the same data — quietly costs businesses hours every week that could go to actual growth.',
    whatItFixes: 'Custom AI chatbots, RAG assistants, and automation tools built for your specific workflow, not a generic off-the-shelf bot.',
    socialProofQuote: { text: 'Amazing team! Delivered on time and exceeded expectations.', author: 'Riasat Ali' },
    socialProofCaseStudy: PARKER_CASE_STUDY,
    costOfInaction: 'Hours spent on repetitive manual work every week add up to real cost — often more over a year than a one-time automation project.',
    valueStack: [
      'Custom AI chatbots',
      'RAG (Retrieval-Augmented Generation)',
      'Automated trading bots',
      'Natural language processing',
      'Computer vision systems',
    ],
    comparisonTable: {
      headers: ['', 'Custom AI Automation', 'Generic Chatbot Tool', 'Manual Process'],
      rows: [
        ['Built for your exact workflow', 'Yes', 'Generic templates', 'N/A'],
        ['Understands your own data/docs (RAG)', 'Yes', 'Rarely', 'N/A'],
        ['Ongoing manual effort required', 'Minimal', 'Some', 'Full'],
        ['Cost', `$${aiAutomation.minPrice}-$${aiAutomation.maxPrice} depending on complexity`, 'Monthly SaaS fee, limited customization', 'Staff time cost'],
      ],
    },
    investmentHeadline: `$${aiAutomation.minPrice}-$${aiAutomation.maxPrice}+`,
    investmentNote: 'Depending on complexity. Book a call for your exact quote.',
    riskReversal: "Project-based, scoped before you commit — not a recurring fee for a system you haven't seen work yet.",
    ctaLabel: 'Book a Call',
    faqs: [
      { q: "What's the difference between a chatbot and RAG?", a: 'A basic chatbot follows scripted rules. RAG lets the AI "read" your own documents and data to give accurate, context-aware answers.' },
      { q: 'How long does a build take?', a: 'Depends on complexity — a straightforward chatbot can take days; a custom RAG system or trading bot takes longer.' },
      { q: 'Do you work with our existing data and systems?', a: 'Yes — we integrate with your existing documentation, databases, and APIs where possible.' },
      { q: 'Is this a one-time cost or ongoing?', a: "Build is typically a one-time project; ongoing monitoring or updates are available as a separate retainer if you want them." },
      { q: 'What industries have you built this for?', a: 'Trading, customer support, event apps, and internal business automation, among others.' },
    ],
    internalLinks: [
      { label: 'AI & Automation Service', href: '/services/ai-automation' },
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'RAG vs Fine-Tuning for Chatbots', href: '/blog/rag-vs-fine-tuning-chatbots' },
    ],
  },
];
