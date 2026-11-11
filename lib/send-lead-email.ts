import nodemailer from 'nodemailer';

function validateSmtpConfig() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM_EMAIL) {
    throw new Error('SMTP configuration is incomplete. Check server environment variables.');
  }

  return { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL };
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = validateSmtpConfig();
  const port = parseInt(SMTP_PORT);

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  selectedPackage?: string;
  description: string;
  source: string;
  appointment?: string;
}

function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function sendLeadEmail(input: LeadPayload): Promise<void> {
  validateSmtpConfig();
  const transporter = createTransporter();
  const { SMTP_FROM_EMAIL, SMTP_FROM_NAME } = process.env;

  // Everything here may come from a public visitor, so escape before it goes into HTML.
  const lead = {
    name: esc(input.name),
    email: esc(input.email),
    phone: input.phone ? esc(input.phone) : undefined,
    projectType: input.projectType ? esc(input.projectType) : undefined,
    selectedPackage: input.selectedPackage ? esc(input.selectedPackage) : undefined,
    description: esc(input.description),
    source: esc(input.source),
    appointment: input.appointment ? esc(input.appointment) : undefined,
  };

  const teamEmailHtml = `
    <h2>${lead.appointment ? 'Appointment request' : 'New Lead'} from ${lead.source}</h2>
    ${lead.appointment ? `<p><strong>Requested time:</strong> ${lead.appointment} (not yet confirmed — reply to the visitor to confirm or propose another time)</p>` : ''}
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone || 'Not provided'}</p>
    <p><strong>Project Type:</strong> ${lead.projectType || 'Not specified'}</p>
    <p><strong>Selected Package:</strong> ${lead.selectedPackage || 'None'}</p>
    <p><strong>Details:</strong></p>
    <p>${lead.description.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><em>Captured via: ${lead.source}</em></p>
  `;

  await transporter.sendMail({
    from: `${SMTP_FROM_NAME || 'Devtimize'} <${SMTP_FROM_EMAIL}>`,
    to: 'devtimize@gmail.com',
    subject: lead.appointment
      ? `Appointment request (${input.source}): ${input.appointment} - ${input.name}`
      : `New Lead (${input.source}): ${input.projectType || 'General'} - ${input.name}`,
    html: teamEmailHtml,
    replyTo: input.email,
  });

  // Best-effort client confirmation — a failure here must not fail lead capture
  try {
    const clientEmailHtml = `
      <h2>${lead.appointment ? 'We received your appointment request' : 'Thank you for reaching out!'}</h2>
      <p>Hi ${lead.name},</p>
      <p>${
        lead.appointment
          ? `You asked for <strong>${lead.appointment}</strong>. This is a request, not a confirmed booking yet — we will confirm that time or suggest another within 24 hours.`
          : 'We received your details and will get back to you within 24 hours.'
      }</p>
      <ul>
        <li><strong>Project Type:</strong> ${lead.projectType || 'Not specified'}</li>
        <li><strong>Details:</strong> ${lead.description.replace(/\n/g, '<br>')}</li>
      </ul>
      <p>You can also reach us directly:</p>
      <ul>
        <li>Email: devtimize@gmail.com</li>
        <li>WhatsApp: +923104745649</li>
      </ul>
      <p>Best regards,<br>Team Devtimize</p>
    `;

    await transporter.sendMail({
      from: `${SMTP_FROM_NAME || 'Devtimize'} <${SMTP_FROM_EMAIL}>`,
      to: input.email,
      subject: lead.appointment ? 'We received your appointment request' : 'We received your request',
      html: clientEmailHtml,
    });
  } catch (err) {
    console.error('❌ [Lead] Client confirmation email failed (lead was already captured):', err);
  }
}
