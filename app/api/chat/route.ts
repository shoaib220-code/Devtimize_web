import { sendLeadEmail } from '@/lib/send-lead-email';
import { INTERNAL_TIERS, PUBLIC_PRICING_RANGE } from '@/lib/ai-receptionist-data';
import { buildKnowledgeBase } from '@/lib/knowledge-base';

const KNOWLEDGE_BASE = buildKnowledgeBase();

const TIER_SUMMARY = INTERNAL_TIERS
  .map((t) => `  Tier ${t.tier} — setup $${t.setup.toLocaleString()}, monthly $${t.monthlyLow}-${t.monthlyHigh}. Fits: ${t.fitsWhen}. Includes: ${t.includes}.`)
  .join('\n');

const DEVBOT_SYSTEM = `You are DevBot, the AI assistant for Devtimize.

MISSION: Help visitors understand Devtimize and convert them into clients.

WHO WE ARE:
Devtimize is a boutique product engineering studio founded by Shoaib Liaqat.
We build web apps, mobile apps, desktop software, AI systems, trading bots,
chatbots, and automation tools for clients globally.
Website: devtimize.com | Email: devtimize@gmail.com

THE FOUNDER:
- Muhammad Shoaib Liaqat | BSCS, Baba Guru Nanak University
  Specializes in: Flutter, MERN, React, Flask, .NET, cloud deployments
  Phone: +923104745649

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

${KNOWLEDGE_BASE}

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
   exists unless Shoaib confirms it for that visitor's case.
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
capturing their info yourself when they're already talking to you.

BOOKING APPOINTMENTS / CALLS:
When a visitor wants a call, meeting or demo, collect: their name, email,
a preferred day and time, and their timezone or country (phone optional),
plus a one-line topic. Ask for one or two missing things at a time.
- You cannot see a live calendar. This is an appointment REQUEST that the
  team confirms by email or WhatsApp within 24 hours. Never say a slot is
  "booked" or "confirmed" — say it has been requested.
- Founder is based in Pakistan (PKT, UTC+5). Mention this only if the visitor
  asks about availability, and never promise a specific slot is free.
- Convert relative days ("tomorrow", "next Monday") into a real date using
  the current date given below, and repeat the full date back to the visitor.
- Before calling book_appointment, read the email address back to the visitor
  and get a yes. For voice conversations, ask them to spell it if unsure.
- Then call book_appointment immediately — do not ask permission again.

LANGUAGE:
Reply in the same language the visitor writes or speaks. If they switch
language, switch with them. Keep product names, emails and phone numbers in
Latin characters.`;

const CONFIRMATION_PARAM = {
  type: 'STRING',
  description:
    "One or two short sentences to say to the visitor after submitting, written in the visitor's own language. Say the details were sent to the team and that they will reply within 24 hours. For appointments say the time was REQUESTED, not confirmed.",
};

const BOT_TOOLS = {
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
          confirmationMessage: CONFIRMATION_PARAM,
        },
        required: ['name', 'email', 'description'],
      },
    },
    {
      name: 'book_appointment',
      description:
        'Request a call or meeting with the Devtimize team. Call once you have name, email, preferred date, preferred time and timezone, and the visitor has confirmed their email.',
      parameters: {
        type: 'OBJECT',
        properties: {
          name: { type: 'STRING', description: "Visitor's full name" },
          email: { type: 'STRING', description: "Visitor's email address (confirmed with them)" },
          phone: { type: 'STRING', description: "Visitor's phone or WhatsApp number, if provided" },
          preferredDate: { type: 'STRING', description: 'Preferred date as YYYY-MM-DD' },
          preferredTime: { type: 'STRING', description: 'Preferred time, e.g. 15:00 or 3 PM' },
          timezone: { type: 'STRING', description: "Visitor's timezone or country, e.g. Asia/Kuwait, UK, EST" },
          topic: { type: 'STRING', description: 'What the call is about' },
          confirmationMessage: CONFIRMATION_PARAM,
        },
        required: ['name', 'email', 'preferredDate', 'preferredTime', 'topic'],
      },
    },
  ],
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanConfirmation(value: unknown, fallback: string): string {
  if (typeof value !== 'string') return fallback;
  const text = value.trim();
  return text.length > 0 && text.length <= 400 ? text : fallback;
}

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English', ur: 'Urdu', ar: 'Arabic', hi: 'Hindi', fr: 'French',
  es: 'Spanish', de: 'German', nl: 'Dutch', sv: 'Swedish',
};

function buildSessionContext(lang: unknown, mode: unknown): string {
  const now = new Date();
  const base = typeof lang === 'string' ? lang.split('-')[0].toLowerCase() : 'en';
  const language = LANGUAGE_NAMES[base] ?? 'English';

  let ctx = `\n\nSESSION CONTEXT:\n- Current date/time (UTC): ${now.toISOString()} (${now.toUTCString()}).\n- Visitor's selected language: ${language}.`;

  if (mode === 'voice') {
    ctx += `
- This is a VOICE conversation: your reply will be read aloud by a female voice.
  Speak like a warm, natural woman on a phone call: at most 2-3 short sentences,
  no markdown, no lists, no emojis, no URLs read out (say "on our website"
  instead). Say numbers and prices naturally. In languages with grammatical
  gender, refer to yourself in the feminine. Ask only one question at a time.`;
  }
  return ctx;
}

export const maxDuration = 30;

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent';
const RETRYABLE_STATUSES = new Set([500, 502, 503, 504]);

// Google's API returns occasional temporary 5xx errors ("model overloaded"); one quick retry hides most of them.
async function callGemini(
  apiKey: string,
  body: unknown
): Promise<{ ok: true; data: any } | { ok: false; status: number }> {
  let status = 0;
  for (let attempt = 1; attempt <= 2; attempt++) {
    if (attempt > 1) await new Promise((r) => setTimeout(r, 600));
    try {
      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(12000),
      });
      if (res.ok) return { ok: true, data: await res.json() };

      status = res.status;
      const errorData = await res.json().catch(() => ({}));
      console.error(`Gemini API error (attempt ${attempt}):`, status, JSON.stringify(errorData).slice(0, 500));
      if (!RETRYABLE_STATUSES.has(status)) break;
    } catch (err) {
      status = 0;
      console.error(`Gemini request failed (attempt ${attempt}):`, err);
    }
  }
  return { ok: false, status };
}

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

    const { messages, userMessage, lang, mode } = await req.json();

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
      { role: 'user', parts: [{ text: DEVBOT_SYSTEM + buildSessionContext(lang, mode) }] },
      ...messages.map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const result = await callGemini(apiKey, {
      contents: contents,
      tools: [BOT_TOOLS],
      generationConfig: {
        temperature: 0.7,
        // The model spends part of this budget on hidden "thinking", so a low cap
        // cuts answers off mid-sentence (worst for Urdu/Arabic, which use more tokens).
        maxOutputTokens: 2048
      }
    });

    if (!result.ok) {
      const isQuota = result.status === 429;
      console.error('Gemini unavailable, sending fallback reply:', result.status);
      return Response.json(
        {
          reply: isQuota
            ? "Hey! I'm currently experiencing high demand. For immediate assistance, please reach out to us directly:\n\nEmail: devtimize@gmail.com\nShoaib: +923104745649\n\nWe typically respond within 24 hours."
            : "I'm having a little trouble answering right now. Please try again in a moment, or reach the team directly at devtimize@gmail.com or WhatsApp +923104745649."
        },
        { status: 200 }
      );
    }

    const data = result.data;
    if (data?.candidates?.[0]?.finishReason === 'MAX_TOKENS') {
      console.warn('Gemini reply hit the token limit (answer may be cut short)');
    }

    const parts = data?.candidates?.[0]?.content?.parts || [];
    const functionCallPart = parts.find(
      (p: any) => p.functionCall?.name === 'submit_lead' || p.functionCall?.name === 'book_appointment'
    );

    if (functionCallPart) {
      const { name: toolName, args = {} } = functionCallPart.functionCall;
      const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
      const isAppointment = toolName === 'book_appointment';

      const leadName = str(args.name, 100);
      const email = str(args.email, 200);
      console.log(isAppointment ? 'DevBot appointment request:' : 'DevBot captured a lead:', { name: leadName, email });

      if (!leadName || !EMAIL_REGEX.test(email)) {
        return Response.json(
          { reply: "I couldn't catch a valid email address. Could you say or type it again, please?" },
          { status: 200 }
        );
      }

      let appointment: string | undefined;
      if (isAppointment) {
        const date = str(args.preferredDate, 20);
        const time = str(args.preferredTime, 40);
        const timezone = str(args.timezone, 60);
        const parsed = Date.parse(date);
        if (Number.isNaN(parsed) || parsed < Date.now() - 24 * 60 * 60 * 1000 || !time) {
          return Response.json(
            { reply: 'Which day and time would suit you? Please give me an upcoming date and a time.' },
            { status: 200 }
          );
        }
        appointment = [date, time, timezone].filter(Boolean).join(' ');
      }

      try {
        await sendLeadEmail({
          name: leadName,
          email,
          phone: str(args.phone, 40) || undefined,
          projectType: isAppointment ? 'Appointment Request' : str(args.projectType, 60) || undefined,
          description: isAppointment ? `Appointment request. Topic: ${str(args.topic, 500)}` : str(args.description, 1000),
          source: isAppointment ? 'DevBot Appointment' : 'DevBot Chat',
          appointment,
        });

        const fallback = isAppointment
          ? `Thanks ${leadName}! I've requested ${appointment} for you — the team will confirm by email within 24 hours.`
          : `Thanks ${leadName}! I've sent your details to Shoaib — he'll reach out to ${email} within 24 hours.`;

        return Response.json(
          {
            reply: cleanConfirmation(args.confirmationMessage, fallback),
            leadCaptured: true,
            appointmentRequested: isAppointment,
          },
          { status: 200 }
        );
      } catch (leadErr) {
        console.error('❌ DevBot lead capture failed:', leadErr);
        return Response.json(
          {
            reply: `Thanks ${leadName}! I had trouble sending that automatically — please email devtimize@gmail.com or WhatsApp +923104745649 directly so we don't lose your details.`,
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
