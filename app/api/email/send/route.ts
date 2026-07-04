import { sendLeadEmail } from '@/lib/send-lead-email';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (err) {
      return Response.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const { name, email, phone, projectType, selectedPackage, description } = body;

    if (!name?.trim()) {
      return Response.json({ error: 'Name is required' }, { status: 400 });
    }

    if (!email?.trim() || !EMAIL_REGEX.test(email)) {
      return Response.json({ error: 'Valid email is required' }, { status: 400 });
    }

    if (!description?.trim()) {
      return Response.json({ error: 'Project description is required' }, { status: 400 });
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
