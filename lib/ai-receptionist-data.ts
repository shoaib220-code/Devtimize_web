// Public pricing shown on pages, in schema, and in llms.txt.
// No fixed tiers are displayed publicly — always a range, always "book a call for your exact quote."
export const PUBLIC_PRICING_RANGE = {
  setupLow: 1000,
  setupHigh: 3000,
  monthlyLow: 250,
  monthlyHigh: 1200,
  currency: 'USD',
};

// Internal tier structure for DevBot's reasoning only — never rendered on any public page or table.
// Tier 2/3 integrations (CRM, WhatsApp/SMS automation, dedicated monitoring) are not yet built as
// repeatable product features, so DevBot should present those as "scoped and confirmed on the call,"
// not as guaranteed off-the-shelf capabilities.
export const INTERNAL_TIERS = [
  {
    tier: 1,
    setup: 1000,
    monthlyLow: 250,
    monthlyHigh: 500,
    fitsWhen: 'single location, standard call volume',
    includes: 'core call answering, appointment booking, lead capture',
  },
  {
    tier: 2,
    setup: 2000,
    monthlyLow: 500,
    monthlyHigh: 750,
    fitsWhen: 'higher call volume, or wants more integrations',
    includes: 'everything in Tier 1, plus additional integrations scoped and confirmed on the call (e.g. calendar/CRM/WhatsApp), faster follow-up automation, priority support',
  },
  {
    tier: 3,
    setup: 3000,
    monthlyLow: 1000,
    monthlyHigh: 1200,
    fitsWhen: 'multi-location or high call volume',
    includes: 'everything in Tier 2, plus full custom integration and monitoring scoped and confirmed on the call, fastest response commitment',
  },
];

export const faqs = [
  {
    q: 'Does it sound like a robot?',
    a: 'No. Our AI uses natural conversational speech that is warm, professional, and indistinguishable from a real receptionist in most cases.',
  },
  {
    q: 'What happens for complex questions?',
    a: 'The AI handles common questions automatically. For anything complex, it takes a detailed message and notifies you immediately.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are live within 48 hours. We handle the entire setup — you just forward calls.',
  },
  {
    q: 'Can I see a transcript of every call?',
    a: 'Yes. Every call is transcribed and sent to you with a summary and any action items.',
  },
  {
    q: 'Does it work for my type of business?',
    a: 'If your business takes phone enquiries or appointment bookings, it works. We\'ve set it up for HVAC, dental, legal, medspa, roofing, restaurants, and more.',
  },
  {
    q: 'Can I cancel if it\'s not working for us?',
    a: 'Yes. It\'s month-to-month with no long-term lock-in — you can cancel anytime.',
  },
  {
    q: 'How much does it cost?',
    a: 'Systems typically range from $1,000-3,000 setup and $250-1,200/month depending on scope — call volume, number of locations, and integrations. Book a call and we\'ll confirm your exact quote based on your situation.',
  },
];
