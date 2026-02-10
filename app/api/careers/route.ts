// app/api/careers/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force Node.js runtime to avoid edge runtime issues
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    // Handle multipart/form-data for file upload
    const data = await request.formData();

    const resume = data.get('resume') as File | null;

    const formData = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      position: data.get('position') as string,
      message: data.get('message') as string,
      resume: resume
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      return NextResponse.json(
        { success: false, message: 'Name, email, phone and position are required' },
        { status: 400 }
      );
    }

    // Validate resume file
    if (!resume) {
      return NextResponse.json(
        { success: false, message: 'Please upload your CV/Resume' },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'Resume file size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        { success: false, message: 'Please upload a PDF or DOC file' },
        { status: 400 }
      );
    }

    // Send emails
    await sendCareerEmails(formData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for applying! Your application has been submitted successfully. We will review your profile and contact you within 5-7 business days.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing career form:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while submitting your application. Please try again later or email your CV directly to careers@sharptel.pk'
      },
      { status: 500 }
    );
  }
}

async function sendCareerEmails(formData: any) {
  try {
    // Create transporter with cPanel email configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter connection
    await transporter.verify();
    console.log('✓ Email server connection verified');

    // Send email to HR
    await sendCareerEmailToHR(transporter, formData);
    console.log('✓ HR notification sent with resume');

    // Send auto-reply to applicant
    await sendCareerAutoReply(transporter, formData);
    console.log('✓ Auto-reply sent to applicant');

  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

async function sendCareerEmailToHR(transporter: any, formData: any) {
  // Prepare resume attachment
  const attachments: any[] = [];

  if (formData.resume && formData.resume instanceof File) {
    try {
      const buffer = Buffer.from(await formData.resume.arrayBuffer());
      attachments.push({
        filename: formData.resume.name,
        content: buffer,
        contentType: formData.resume.type
      });
    } catch (error) {
      console.error('Error processing resume:', error);
    }
  }

  const mailOptions = {
    from: `"Sharptel Careers" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: process.env.HR_EMAIL || process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    replyTo: formData.email,
    subject: `💼 New Job Application: ${formData.position} - ${formData.name}`,
    html: generateCareerEmailHTML(formData),
    text: generateCareerEmailText(formData),
    attachments: attachments.length > 0 ? attachments : undefined,
  };

  await transporter.sendMail(mailOptions);
}

async function sendCareerAutoReply(transporter: any, formData: any) {
  const mailOptions = {
    from: `"Sharptel HR Team" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: `Application Received - ${formData.position} at Sharptel`,
    html: generateCareerAutoReplyHTML(formData),
    text: generateCareerAutoReplyText(formData),
  };

  await transporter.sendMail(mailOptions);
}

// HTML Template for HR Email
function generateCareerEmailHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px; color: white; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; border-radius: 0 0 10px 10px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
        .label { font-weight: bold; color: #374151; width: 35%; background: #f9fafb; }
        .value { color: #1f2937; }
        .urgent { background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2 style="margin: 0; font-size: 24px;">💼 New Job Application Received</h2>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Sharptel Careers Portal</p>
      </div>

      <div class="content">
        <table>
          <tr>
            <td class="label">Position Applied:</td>
            <td class="value"><strong style="font-size: 18px; color: #2563eb;">${escapeHTML(formData.position)}</strong></td>
          </tr>
          <tr>
            <td class="label">Candidate Name:</td>
            <td class="value"><strong>${escapeHTML(formData.name)}</strong></td>
          </tr>
          <tr>
            <td class="label">Email Address:</td>
            <td class="value"><a href="mailto:${escapeHTML(formData.email)}">${escapeHTML(formData.email)}</a></td>
          </tr>
          <tr>
            <td class="label">Phone Number:</td>
            <td class="value"><a href="tel:${escapeHTML(formData.phone)}">${escapeHTML(formData.phone)}</a></td>
          </tr>
          <tr>
            <td class="label">Resume Attached:</td>
            <td class="value">${formData.resume ? `<strong style="color: #059669;">✓ ${formData.resume.name}</strong>` : '❌ Not attached'}</td>
          </tr>
        </table>

        ${formData.message ? `
        <div style="margin: 20px 0;">
          <div class="label" style="display: block; padding: 12px; background: #f9fafb; border-radius: 5px;">Cover Letter / Message:</div>
          <div style="padding: 15px; background: #f9fafb; margin-top: 10px; border-radius: 5px; white-space: pre-line;">${escapeHTML(formData.message)}</div>
        </div>
        ` : '<p style="color: #6b7280; font-style: italic;">No cover letter provided</p>'}

        <div class="urgent">
          <p style="margin: 0; color: #1e40af;">
            📎 <strong>Resume:</strong> ${formData.resume ? `Attached as ${formData.resume.name}` : 'Not attached'}
          </p>
          <p style="margin: 10px 0 0 0; color: #1e40af;">
            ⚡ <strong>Next Action:</strong> Review candidate profile and schedule interview within 7 business days if suitable.
          </p>
        </div>

        <div class="footer">
          <p>Application submitted on ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
          <p>This is an automated notification from Sharptel Career Portal</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateCareerEmailText(formData: any) {
  return `
═══════════════════════════════════════
NEW JOB APPLICATION
Sharptel Careers
═══════════════════════════════════════

Position: ${formData.position}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Resume: ${formData.resume ? formData.resume.name : 'Not attached'}

COVER LETTER:
────────────────────────────────────────
${formData.message || 'No cover letter provided'}
────────────────────────────────────────

⚡ ACTION REQUIRED: Review and schedule interview within 7 days if suitable

Application submitted: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
  `;
}

// HTML Template for Applicant Auto-Reply
function generateCareerAutoReplyHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); padding: 30px; color: white; text-align: center; border-radius: 10px 10px 0 0; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; border-radius: 0 0 10px 10px; }
        .highlight { background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #7c3aed; }
        .contact-box { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        ul { padding-left: 20px; }
        li { margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2 style="margin: 0; font-size: 24px;">✅ Application Received Successfully!</h2>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for applying to Sharptel</p>
      </div>

      <div class="content">
        <p style="font-size: 16px;">Dear <strong>${escapeHTML(formData.name)}</strong>,</p>

        <p style="font-size: 16px;">Thank you for your interest in the <strong>${escapeHTML(formData.position)}</strong> position at Sharptel.
        We have successfully received your application and resume.</p>

        <div class="highlight">
          <h3 style="color: #5b21b6; margin-top: 0; font-size: 18px;">📋 What Happens Next?</h3>
          <ul style="color: #374151;">
            <li>📊 Our HR team will review your application within <strong>5-7 business days</strong></li>
            <li>📞 Shortlisted candidates will be contacted for interview scheduling</li>
            <li>💼 Multiple interview rounds may be conducted based on the position</li>
            <li>📧 We'll keep you updated on your application status via email</li>
            <li>⏰ Please keep your phone and email accessible during this period</li>
          </ul>
        </div>

        <div class="contact-box">
          <h4 style="margin-top: 0; color: #374151;">Your Application Summary</h4>
          <p style="margin: 10px 0;"><strong>Position:</strong> ${escapeHTML(formData.position)}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHTML(formData.email)}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${escapeHTML(formData.phone)}</p>
          <p style="margin: 10px 0;"><strong>Resume:</strong> ${formData.resume ? `✓ ${formData.resume.name}` : '❌ Not attached'}</p>
        </div>

        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
          <p style="margin: 0; color: #92400e;">
            <strong>💡 Tip:</strong> If you don't hear from us within 7 business days, feel free to follow up at careers@sharptel.pk
          </p>
        </div>

        <div class="contact-box">
          <h4 style="margin-top: 0; color: #374151;">HR Contact Information</h4>
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:careers@sharptel.pk">careers@sharptel.pk</a></p>
          <p style="margin: 10px 0;"><strong>📞 Phone:</strong> <a href="tel:+923111284373">+92-311-128-4373</a></p>
          <p style="margin: 10px 0;"><strong>🕐 HR Hours:</strong> Mon-Fri: 9 AM - 5 PM</p>
        </div>

        <div class="footer">
          <p><strong>Best of luck with your application!</strong><br>The Sharptel HR Team</p>
          <p style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateCareerAutoReplyText(formData: any) {
  return `
═══════════════════════════════════════
Application Received - Sharptel Careers
═══════════════════════════════════════

Dear ${formData.name},

Thank you for applying for the ${formData.position} position at Sharptel.
We have successfully received your application.

WHAT HAPPENS NEXT:
────────────────────────────────────────
✓ HR review within 5-7 business days
✓ Shortlisted candidates will be contacted
✓ Multiple interview rounds may be required
✓ We'll keep you updated via email

YOUR APPLICATION SUMMARY:
────────────────────────────────────────
Position: ${formData.position}
Email: ${formData.email}
Phone: ${formData.phone}
Resume: ${formData.resume ? formData.resume.name : 'Not attached'}

HR CONTACT:
────────────────────────────────────────
📧 Email: careers@sharptel.pk
📞 Phone: +92-311-128-4373
🕐 Hours: Mon-Fri 9 AM - 5 PM

💡 TIP: If you don't hear from us within 7 business days,
feel free to follow up at careers@sharptel.pk

Best of luck with your application!
The Sharptel HR Team

────────────────────────────────────────
This is an automated confirmation email.
  `;
}

function escapeHTML(text: string) {
  if (!text) return '';
  return text
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
