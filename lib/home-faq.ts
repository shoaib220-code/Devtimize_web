import { PUBLIC_PRICING_RANGE } from '@/lib/ai-receptionist-data';

export const homeFaqs = [
  {
    q: 'How much does custom web development cost from Devtimize?',
    a: 'Web development projects typically cost $150–$5,000, depending on scope. A simple site starts around $150. A custom portal, dashboard, or e-commerce platform is usually $1,500–$5,000.',
  },
  {
    q: 'Does Devtimize work with clients outside Pakistan?',
    a: 'Yes. Devtimize is based in Pakistan and works with clients in the United States, United Kingdom, Canada, Europe, Australia, and Kuwait. All communication happens over email, WhatsApp, and video calls.',
  },
  {
    q: 'How much does the AI Receptionist system cost?',
    a: `Systems typically range from $${PUBLIC_PRICING_RANGE.setupLow.toLocaleString()}-${PUBLIC_PRICING_RANGE.setupHigh.toLocaleString()} setup and $${PUBLIC_PRICING_RANGE.monthlyLow}-${PUBLIC_PRICING_RANGE.monthlyHigh}/month depending on scope — call volume, number of locations, and integrations. Book a call for your exact quote.`,
  },
];
