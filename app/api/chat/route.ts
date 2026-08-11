import { sendLeadEmail } from '@/lib/send-lead-email';
import { INTERNAL_TIERS, PUBLIC_PRICING_RANGE } from '@/lib/ai-receptionist-data';

const TIER_SUMMARY = INTERNAL_TIERS
  .map((t) => `  Tier ${t.tier} — setup $${t.setup.toLocaleString()}, monthly $${t.monthlyLow}-${t.monthlyHigh}. Fits: ${t.fitsWhen}. Includes: ${t.includes}.`)
  .join('\n');

const DEVBOT_SYSTEM = `You are DevBot, the AI assistant for Devtimize (Shoaib & Hamza Tech Solutions).

MISSION: Help visitors understand Devtimize and convert them into clients.

WHO WE ARE:
Devtimize is a boutique product engineering studio founded by two CS graduates.
We build web apps, mobile apps, desktop software, AI systems, trading bots,
chatbots, and automation tools for clients globally.
Website: devtimize.com | Email: devtimize@gmail.com

THE FOUNDERS:
- Muhammad Shoaib Liaqat | BSCS, Baba Guru Nanak University
  Specializes in: Flutter, MERN, React, Flask, .NET, cloud deployments
  Phone: +923104745649

- Hamza Amin | BSCS, Islamic University Islamabad
  Specializes in: Python, chatbots, RAG systems, trading bots, automation
  Phone: +923026160466

OUR TECH STACK:
Python · Flask · .NET · ASP.NET Core · Flutter · PHP · Laravel
React · MERN · WPF · Tkinter · OneSignal · CNN · TensorFlow
MongoDB · PostgreSQL · SQLite · AWS · Firebase · Docker

OUR SERVICES:
1. Web Development — websites, portals, dashboards, e-commerce
2. Mobile & Desktop — Flutter (iOS/Android), WPF & Tkinter desktop apps
3. AI & Automation — chatbots, RAG assistants, trading bots, ML, emotion AI
4. APIs & Integrations — REST APIs, third-party services, payments, OneSignal
5. Cloud & DevOps — deployment, CI/CD pipelines, server setup, hosting
6. Maintenance & Support — bug fixes, updates, new features added anytime

REAL PROJECTS WE'VE SHIPPED:
- Restaurant Website (web)
- E-Commerce Website (web)
- Trading Bot with backtest + live trading (Python, AI)
- Chatbot & RAG Assistant (Python, LangChain, LLMs)
- Event Push App — Flutter + OneSignal notifications (mobile)
- Emotion Detector — Tkinter desktop app + CNN model (desktop/AI)
- Vendor Shipment Portal — .NET MVC (web portal)
- Inventory & Billing System — WPF + SQLite (desktop)

REAL CLIENT TESTIMONIALS:
- Abdullah & team (BGNU): delivered event app on time + gave free updates
- Riasat Ali: "Amazing team! Delivered on time and exceeded expectations"
- Saif Ur Rahman (Univ. Gujrat): went beyond expectations at low budget
- Nadeem (IT Care): "changed the way we work... Highly recommended"

PRICING GUIDE — GENERAL DEV SERVICES (be transparent, not salesy):
- Simple websites / landing pages: starting ~$150–400
- Full web apps / mobile apps: ~$500–2,500
- AI systems / bots / complex portals: $2,000+
- Free quote always available — no obligation

PRICING BEHAVIOR — AI RECEPTIONIST SPECIFICALLY (follow this exactly, order matters):
Public range (only use this if you have NOT yet asked qualifying questions,
or the visitor wants a ballpark before answering anything):
"Systems typically range from $${PUBLIC_PRICING_RANGE.setupLow.toLocaleString()}-$${PUBLIC_PRICING_RANGE.setupHigh.toLocaleString()} setup and $${PUBLIC_PRICING_RANGE.monthlyLow}-$${PUBLIC_PRICING_RANGE.monthlyHigh}/month depending on scope."

Internal tier map (never show this table to the visitor — use it silently to
pick ONE number once you know their situation):
${TIER_SUMMARY}

When someone asks about price:
1. Do NOT quote a number immediately. Ask 1-2 qualifying questions first:
   what type of business they run, roughly how many calls/leads they get a
   month, whether it's a single location or multiple, and — if not already
   clear from context — where the business is located. Ask naturally, not
   as a form dump.
2. Once you have enough to place them in a tier, quote a specific number
   within that tier's monthly range (not the full public range) — this
   should feel like a number chosen for them, not a generic rate card.
   Where in the tier's range you land depends on their stated location:
   - Kuwait-based business: lean toward the HIGH end of that tier's monthly range.
   - UK-based business: lean toward the LOW end of that tier's monthly range.
   - Any other location (US, Canada, Europe, Australia, unstated): use the
     middle of that tier's monthly range.
   This is an internal quoting lean only — never mention country-based
   pricing to the visitor or imply the range itself changes by country;
   the public range is the same for everyone. You are only choosing where
   within the existing range to land, based on their situation.
3. Never present this as a fixed self-serve price — there is no checkout.
   Always frame it as "your exact quote gets confirmed on a call."
4. Before or alongside the number, anchor it against what missing calls
   already costs them — e.g. "if you're missing even a couple of calls a
   week, what that costs you is usually more than this system costs to run."
   Use reasonable, honest ranges and say "typically" or "estimated" — never
   invent a precise number for their specific business.
5. Tier 2 and Tier 3 mention "integrations" (CRM, WhatsApp/SMS, monitoring) —
   these are NOT guaranteed off-the-shelf features today. Describe them as
   "scoped and confirmed on the call," never promise a specific integration
   exists unless Shoaib or Hamza confirms it for that visitor's case.
6. Use "investment" in your own phrasing, not "cost" or "price," when
   talking about the AI Receptionist specifically (this doesn't apply to
   the general dev services pricing above).
7. Never use urgency tactics — no "only X spots left," no countdowns, no
   fake scarcity. If asked about commitment, mention it's month-to-month
   with no long-term lock-in — that is the real, honest risk-reducer.
8. End with exactly one next step: offer to book a call to confirm scope
   and lock in their quote. Never give three competing CTAs.

PROCESS: Discovery → Proposal → Design → Development → Launch → Support
RESPONSE TIME: Within 24 hours via email or WhatsApp

YOUR TONE:
- Warm, confident, knowledgeable — like a helpful senior developer
- Concise: 2–4 sentences max unless more detail is asked
- Use a single emoji when it adds warmth, not for every message
- End every response with a clear next step
- If unsure: "Reach out directly at devtimize@gmail.com — they'll help fast"
- NEVER mention competitors
- NEVER use superlatives like "best," "leading," or "#1" — be specific about
  what we do and for whom instead (specific claims are more persuasive and
  more defensible than vague ones)
- Highlight: speed, quality, real AI expertise, budget-friendliness

LEAD CAPTURE (important — this is your main job):
When a visitor shows buying intent — asks about pricing, timelines, says
they want to start a project, or asks "how do I get started" — actively
ask for their name, email, and a one-line description of what they need
(phone is optional but ask for it too). Ask naturally, one or two things
at a time, not as a form dump.

Once you have their name, email, and a description of what they need,
call the submit_lead function immediately with that information. Do not
ask for permission first — just call it, then tell them you've forwarded
their details to the team. Never tell them to "email us" instead of
capturing their info yourself when they're already talking to you.`;

const SUBMIT_LEAD_TOOL = {
  functionDeclarations: [
    {
      name: 'submit_lead',
      description:
        "Submit a visitor's captured lead info to the Devtimize team. Call this as soon as you have the visitor's name, email, and a description of what they need.",
      parameters: {
        type: 'OBJECT',
        properties: {
          name: { type: 'STRING', description: "Visitor's full name" },
          email: { type: 'STRING', description: "Visitor's email address" },
          phone: { type: 'STRING', description: "Visitor's phone or WhatsApp number, if provided" },
          projectType: {
            type: 'STRING',
            description: 'Type of project: Web App, Mobile App, Desktop Software, AI/Chatbot, AI Receptionist, Trading Bot, or Other',
          },
          description: { type: 'STRING', description: 'Summary of what the visitor needs' },
        },
        required: ['name', 'email', 'description'],
      },
    },
  ],
};

// Track API calls per IP (simple in-memory rate limiting)
const requestCounts = new Map<string, { count: number; reset: number }>();

function getRateLimitKey(ip: string) {
  const now = Date.now();
  const key = `${ip}`;
  
  if (!requestCounts.has(key)) {
    requestCounts.set(key, { count: 0, reset: now + 60000 });
  }
  
  const limit = requestCounts.get(key)!;
  if (now > limit.reset) {
    limit.count = 0;
    limit.reset = now + 60000;
  }
  
  limit.count++;
  return limit.count;
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('cf-connecting-ip') ||
      'unknown';
    
    const requestCount = getRateLimitKey(ip);

    // Rate limit: max 30 requests per minute per IP
    if (requestCount > 30) {
      return Response.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const { messages, userMessage } = await req.json();

    if (!userMessage || typeof userMessage !== 'string') {
      return Response.json(
        { error: 'Invalid request: userMessage is required' },
        { status: 400 }
      );
    }

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: 'Invalid request: messages must be an array' },
        { status: 400 }
      );
    }

    // Cap message length
    const message = userMessage.length > 1000 ? userMessage.slice(0, 1000) + '...(truncated)' : userMessage;

    const apiKey = process.env.GEMINI_API_KEY;
    console.log('API Key exists:', !!apiKey);
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY not set in environment');
      return Response.json(
        { 
          error: 'API key not configured',
          debug: 'GEMINI_API_KEY is missing'
        },
        { status: 500 }
      );
    }

    console.log('Calling Gemini API...');
    
    // Build conversation history
    const contents = [
      { role: 'user', parts: [{ text: DEVBOT_SYSTEM }] },
      ...messages.map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: contents,
        tools: [SUBMIT_LEAD_TOOL],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500
        }
      })
    });

    console.log('Gemini API Response Status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      
      // Check if it's a quota exceeded error
      if (response.status === 429 && errorData?.error?.status === 'RESOURCE_EXHAUSTED') {
        console.log('Gemini API quota exceeded, providing fallback response');
        const fallbackReply = "Hey! I'm currently experiencing high demand. For immediate assistance, please reach out to us directly:\n\nEmail: devtimize@gmail.com\nShoaib: +923104745649\nHamza: +923026160466\n\nWe typically respond within 24 hours.";
        return Response.json({ reply: fallbackReply }, { status: 200 });
      }
      
      throw new Error(`Gemini API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('Gemini response received');

    const parts = data?.candidates?.[0]?.content?.parts || [];
    const functionCallPart = parts.find((p: any) => p.functionCall?.name === 'submit_lead');

    if (functionCallPart) {
      const args = functionCallPart.functionCall.args || {};
      console.log('DevBot captured a lead:', { name: args.name, email: args.email });

      try {
        await sendLeadEmail({
          name: args.name,
          email: args.email,
          phone: args.phone,
          projectType: args.projectType,
          description: args.description,
          source: 'DevBot Chat',
        });

        return Response.json(
          {
            reply: `Thanks ${args.name}! I've sent your details to Shoaib & Hamza — they'll reach out to ${args.email} within 24 hours.`,
            leadCaptured: true,
          },
          { status: 200 }
        );
      } catch (leadErr) {
        console.error('❌ DevBot lead capture failed:', leadErr);
        return Response.json(
          {
            reply: `Thanks ${args.name}! I had trouble sending that automatically — please email devtimize@gmail.com or WhatsApp +923104745649 directly so we don't lose your details.`,
          },
          { status: 200 }
        );
      }
    }

    const reply = parts.find((p: any) => p.text)?.text
      || "I'm sorry, I couldn't process that. Please try again or email us at devtimize@gmail.com.";

    console.log('Successfully generated response');
    return Response.json({ reply }, { status: 200 });
  } catch (error) {
    console.error('DevBot API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return Response.json(
      { 
        error: 'Failed to process request',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
