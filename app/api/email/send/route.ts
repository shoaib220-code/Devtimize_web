import { sendLeadEmail } from '@/lib/send-lead-email';
import { isTurnstileConfigured, verifyTurnstile } from '@/lib/turnstile';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (err) {
      return Response.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const { name, email, phone, projectType, selectedPackage, description, website, turnstileToken } = body;

    // Honeypot: real users never see or fill this field. Pretend success so bots don't adapt.
    if (typeof website === 'string' && website.trim()) {
      return Response.json({ message: 'Quote request sent successfully' }, { status: 200 });
    }

    if (!name?.trim()) {
      return Response.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email?.trim() || !EMAIL_REGEX.test(email)) {
      return Response.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!description?.trim()) {
      return Response.json({ error: 'Project description is required' }, { status: 400 });
    }

    if (isTurnstileConfigured()) {
      const token = typeof turnstileToken === 'string' ? turnstileToken : '';
      const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
      if (!token || !(await verifyTurnstile(token, ip))) {
        return Response.json(
          { error: 'Verification failed. Please complete the check again and resubmit.' },
          { status: 400 }
        );
      }
    }

    try {
      await sendLeadEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim(),
        projectType,
        selectedPackage,
        description: description.trim(),
        source: 'Contact Form',
      });
    } catch (err) {
      console.error('❌ [API] Failed to send lead email:', err);
      return Response.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }

    return Response.json({ message: 'Quote request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('❌ [API] Unexpected error:', error);
    return Response.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
