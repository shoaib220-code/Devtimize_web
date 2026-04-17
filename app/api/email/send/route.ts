import nodemailer from 'nodemailer';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate required SMTP environment variables
function validateSmtpConfig() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM_EMAIL) {
    throw new Error('SMTP configuration is incomplete. Check server environment variables.');
  }

  return { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL };
}

// Create mail transporter
function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = validateSmtpConfig();

  const port = parseInt(SMTP_PORT);
  const secure = port === 465; // true for 465 (implicit SSL), false for 587 (STARTTLS)

  console.log('🔧 Creating SMTP transporter with config:', {
    host: SMTP_HOST,
    port: port,
    user: SMTP_USER,
    secure: secure,
  });

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: port,
    secure: secure, // true for 465 (TLS), false for other ports like 587
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
    logger: true, // Enable logging for debugging
    debug: true,  // Enable debug mode for SMTP transaction details
  });
}

export async function POST(req: Request) {
  try {
    console.log('📨 [API] Received email request');

    // Validate request method
    if (req.method && req.method !== 'POST') {
      console.warn('⚠️ [API] Invalid method:', req.method);
      return Response.json(
        { error: 'Method not allowed' },
        { status: 405 }
      );
    }

    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log('📦 [API] Request payload:', { name: body.name, email: body.email, projectType: body.projectType });
    } catch (err) {
      console.error('❌ [API] Failed to parse JSON:', err);
      return Response.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Validate required fields
    const { name, email, phone, projectType, selectedPackage, description } = body;

    if (!name?.trim()) {
      console.warn('⚠️ [API] Missing name field');
      return Response.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email?.trim() || !EMAIL_REGEX.test(email)) {
      console.warn('⚠️ [API] Invalid email:', email);
      return Response.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    if (!description?.trim()) {
      console.warn('⚠️ [API] Missing description field');
      return Response.json(
        { error: 'Project description is required' },
        { status: 400 }
      );
    }

    // Validate SMTP configuration
    try {
      validateSmtpConfig();
      console.log('✅ [API] SMTP configuration validated');
    } catch (err) {
      console.error('❌ [API] SMTP Config Error:', err);
      return Response.json(
        { error: 'Email service is not properly configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    const { SMTP_FROM_EMAIL, SMTP_FROM_NAME } = process.env;

    // Email content for Devtimize team
    const teamEmailHtml = `
      <h2>New Quote Request from ${name}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
      <p><strong>Selected Package:</strong> ${selectedPackage || 'None'}</p>
      <p><strong>Project Description:</strong></p>
      <p>${description.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This is an automated message from your website contact form.</em></p>
    `;

    // Email content for client
    const clientEmailHtml = `
      <h2>Thank you for your quote request!</h2>
      <p>Hi ${name},</p>
      <p>We received your project details and will get back to you within 24 hours.</p>
      <p><strong>Your Project Details:</strong></p>
      <ul>
        <li><strong>Project Type:</strong> ${projectType || 'Not specified'}</li>
        <li><strong>Selected Package:</strong> ${selectedPackage || 'None'}</li>
        <li><strong>Description:</strong> ${description.replace(/\n/g, '<br>')}</li>
      </ul>
      <p>In the meantime, you can reach us via:</p>
      <ul>
        <li>Email: devtimize@gmail.com</li>
        <li>WhatsApp: +923104745649 (Shoaib) or +923026160466 (Hamza)</li>
      </ul>
      <p>Best regards,<br>Team Devtimize</p>
    `;

    // Send email to Devtimize team
    console.log('📤 [API] Sending team notification email to devtimize@gmail.com');
    try {
      const teamResponse = await transporter.sendMail({
        from: `${SMTP_FROM_NAME || 'Devtimize'} <${SMTP_FROM_EMAIL}>`,
        to: 'devtimize@gmail.com',
        subject: `New Quote Request: ${projectType}${selectedPackage ? ` (${selectedPackage})` : ''} - ${name}`,
        html: teamEmailHtml,
        replyTo: email,
      });
      console.log('✅ [API] Team email sent successfully:', teamResponse.messageId);
    } catch (emailErr) {
      console.error('❌ [API] Failed to send team email:', emailErr);
      if (emailErr instanceof Error) {
        console.error('❌ [API] SMTP Error Details:', {
          message: emailErr.message,
          code: (emailErr as any).code,
          responseCode: (emailErr as any).responseCode,
          response: (emailErr as any).response,
          command: (emailErr as any).command,
        });
      }
      throw emailErr;
    }

    // Send confirmation email to client
    console.log('📤 [API] Sending confirmation email to', email);
    try {
      const clientResponse = await transporter.sendMail({
        from: `${SMTP_FROM_NAME || 'Devtimize'} <${SMTP_FROM_EMAIL}>`,
        to: email,
        subject: 'We received your quote request',
        html: clientEmailHtml,
      });
      console.log('✅ [API] Client confirmation email sent successfully:', clientResponse.messageId);
    } catch (emailErr) {
      console.error('❌ [API] Failed to send client confirmation email:', emailErr);
      throw emailErr;
    }

    console.log('✅ [API] All emails sent successfully for:', name, '(', email, ')');

    return Response.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ [API] Email sending failed:', errorMessage);
    
    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error('❌ [API] Error details:', {
        name: error.name,
        message: error.message,
        code: (error as any).code,
        responseCode: (error as any).responseCode,
        response: (error as any).response,
        command: (error as any).command,
        stack: error.stack,
      });

      // Specific error handling for common SMTP issues
      const errorStr = error.message.toLowerCase();
      if (errorStr.includes('535') || errorStr.includes('authentication')) {
        console.error('🔐 [API] AUTHENTICATION ERROR - Check your Gmail App Password');
        console.error('🔐 [API] Make sure: 1) 2FA is enabled, 2) Using app password (not regular password), 3) No extra spaces in password');
      } else if (errorStr.includes('econnrefused') || errorStr.includes('timeout')) {
        console.error('🌐 [API] CONNECTION ERROR - Check SMTP host and port configuration');
      }
    }

    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
