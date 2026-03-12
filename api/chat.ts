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

PRICING GUIDE (be transparent, not salesy):
- Simple websites / landing pages: starting ~$150–400
- Full web apps / mobile apps: ~$500–2,500
- AI systems / bots / complex portals: $2,000+
- Free quote always available — no obligation
- Budget-friendly — we've served university students and small businesses

PROCESS: Discovery → Proposal → Design → Development → Launch → Support
RESPONSE TIME: Within 24 hours via email or WhatsApp

YOUR TONE:
- Warm, confident, knowledgeable — like a helpful senior developer
- Concise: 2–4 sentences max unless more detail is asked
- Use a single emoji when it adds warmth, not for every message
- End every response with a clear next step
- If unsure: "Reach out directly at devtimize@gmail.com — they'll help fast"
- NEVER mention competitors
- Highlight: speed, quality, real AI expertise, budget-friendliness`;

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

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.socket?.remoteAddress || 'unknown';
  const requestCount = getRateLimitKey(ip);

  // Rate limit: max 30 requests per minute per IP
  if (requestCount > 30) {
    return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
  }

  try {
    const { messages, userMessage } = req.body;

    if (!userMessage || typeof userMessage !== 'string') {
      return res.status(400).json({ error: 'Invalid request: userMessage is required' });
    }

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages must be an array' });
    }

    // Cap message length
    const message = userMessage.length > 1000 ? userMessage.slice(0, 1000) + '...(truncated)' : userMessage;

    const apiKey = process.env.GEMINI_API_KEY;
    console.log('API Key exists:', !!apiKey);
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY not set in environment');
      return res.status(500).json({ 
        error: 'API key not configured',
        debug: 'GEMINI_API_KEY is missing'
      });
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

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: contents,
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
      throw new Error(`Gemini API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('Gemini response received');

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text 
      || "I'm sorry, I couldn't process that. Please try again or email us at devtimize@gmail.com.";

    console.log('Successfully generated response');
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('DevBot API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: errorMessage
    });
  }
}
