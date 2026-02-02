// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Force Node.js runtime to avoid edge runtime issues
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type');
    let formType: 'contact' | 'career' = 'contact';
    let formData: any = {};

    if (contentType?.includes('multipart/form-data')) {
      // Career form (with file upload)
      formType = 'career';
      const data = await request.formData();
      
      const resume = data.get('resume') as File | null;
      
      formData = {
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: data.get('phone') as string,
        position: (data.get('position') || data.get('service')) as string,
        message: data.get('message') as string,
        company: data.get('company') as string,
        subject: data.get('subject') as string,
        resume: resume
      };
    } else {
      // Contact form (JSON)
      const data = await request.json();
      formData = data;
      formType = data.formType || 'contact';
    }

    // Validate required fields
    if (formType === 'contact') {
      if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
        return NextResponse.json(
          { success: false, message: 'All required fields must be filled' },
          { status: 400 }
        );
      }
    } else if (formType === 'career') {
      if (!formData.name || !formData.email || !formData.phone || !formData.position) {
        return NextResponse.json(
          { success: false, message: 'Name, email, phone and position are required' },
          { status: 400 }
        );
      }
    }

    // Send emails
    await sendEmails(formType, formData);

    return NextResponse.json(
      { 
        success: true, 
        message: formType === 'contact' 
          ? 'Message sent successfully!' 
          : 'Application submitted successfully!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred. Please try again later or contact us directly.' 
      },
      { status: 500 }
    );
  }
}

async function sendEmails(formType: 'contact' | 'career', formData: any) {
  // Only send emails in production
  if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode - Email data:', { formType, formData });
    return;
  }

  try {
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    if (formType === 'contact') {
      await sendContactEmail(transporter, formData);
      await sendContactAutoReply(transporter, formData);
    } else {
      await sendCareerEmail(transporter, formData);
      await sendCareerAutoReply(transporter, formData);
    }
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

async function sendContactEmail(transporter: any, formData: any) {
  const mailOptions = {
    from: `"Sharptel Contact" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    subject: `New Contact: ${formData.subject}`,
    html: generateContactEmailHTML(formData),
    text: generateContactEmailText(formData),
  };

  await transporter.sendMail(mailOptions);
}

async function sendCareerEmail(transporter: any, formData: any) {
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
    to: process.env.HR_EMAIL || process.env.EMAIL_USER,
    subject: `Job Application: ${formData.position}`,
    html: generateCareerEmailHTML(formData),
    text: generateCareerEmailText(formData),
    attachments: attachments.length > 0 ? attachments : undefined,
  };

  await transporter.sendMail(mailOptions);
}

async function sendContactAutoReply(transporter: any, formData: any) {
  const mailOptions = {
    from: `"Sharptel" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: 'Thank you for contacting Sharptel',
    html: generateContactAutoReplyHTML(formData),
    text: generateContactAutoReplyText(formData),
  };

  await transporter.sendMail(mailOptions);
}

async function sendCareerAutoReply(transporter: any, formData: any) {
  const mailOptions = {
    from: `"Sharptel HR" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: formData.email,
    subject: 'Application Received - Sharptel Careers',
    html: generateCareerAutoReplyHTML(formData),
    text: generateCareerAutoReplyText(formData),
  };

  await transporter.sendMail(mailOptions);
}

// HTML Template Functions
function generateContactEmailHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #dc2626; padding: 30px; color: white; text-align: center; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
        .label { font-weight: bold; color: #374151; width: 30%; }
        .urgent { background: #fef2f2; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>New Contact Form Submission</h2>
        <p>Sharptel Website</p>
      </div>
      
      <div class="content">
        <table>
          <tr><td class="label">Name:</td><td><strong>${escapeHTML(formData.name)}</strong></td></tr>
          <tr><td class="label">Email:</td><td>${escapeHTML(formData.email)}</td></tr>
          <tr><td class="label">Phone:</td><td>${escapeHTML(formData.phone)}</td></tr>
          ${formData.company ? `<tr><td class="label">Company:</td><td>${escapeHTML(formData.company)}</td></tr>` : ''}
          ${formData.service ? `<tr><td class="label">Service:</td><td><strong>${escapeHTML(formData.service)}</strong></td></tr>` : ''}
          <tr><td class="label">Subject:</td><td><strong>${escapeHTML(formData.subject)}</strong></td></tr>
          <tr><td class="label">Message:</td><td style="white-space: pre-line;">${escapeHTML(formData.message)}</td></tr>
        </table>
        
        <div class="urgent">
          <p style="margin: 0; color: #991b1b;">
            ⚡ <strong>Action Required:</strong> Please respond within 24 hours.
          </p>
        </div>
        
        <p style="color: #6b7280; font-size: 12px; text-align: center;">
          Submitted on ${new Date().toLocaleString('en-PK')}
        </p>
      </div>
    </body>
    </html>
  `;
}

function generateContactEmailText(formData: any) {
  return `
NEW CONTACT FORM

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Company: ${formData.company}\n` : ''}${formData.service ? `Service: ${formData.service}\n` : ''}
Subject: ${formData.subject}

Message:
${formData.message}

---
Submitted: ${new Date().toLocaleString()}
Action Required: Respond within 24 hours
  `;
}

function generateCareerEmailHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #2563eb; padding: 30px; color: white; text-align: center; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
        .label { font-weight: bold; color: #374151; width: 35%; }
        .urgent { background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>New Job Application</h2>
        <p>Sharptel Careers</p>
      </div>
      
      <div class="content">
        <table>
          <tr><td class="label">Position:</td><td><strong>${escapeHTML(formData.position)}</strong></td></tr>
          <tr><td class="label">Name:</td><td><strong>${escapeHTML(formData.name)}</strong></td></tr>
          <tr><td class="label">Email:</td><td>${escapeHTML(formData.email)}</td></tr>
          <tr><td class="label">Phone:</td><td>${escapeHTML(formData.phone)}</td></tr>
          ${formData.company ? `<tr><td class="label">Current Company:</td><td>${escapeHTML(formData.company)}</td></tr>` : ''}
          <tr><td class="label">Cover Letter:</td><td style="white-space: pre-line;">${formData.message ? escapeHTML(formData.message) : 'No cover letter'}</td></tr>
        </table>
        
        <div class="urgent">
          <p style="margin: 0; color: #1e40af;">
            📎 <strong>Resume:</strong> ${formData.resume ? `${formData.resume.name}` : 'Not attached'}
          </p>
          <p style="margin: 10px 0 0 0; color: #1e40af;">
            ⚡ <strong>Action:</strong> Review and schedule interview within 7 days.
          </p>
        </div>
        
        <p style="color: #6b7280; font-size: 12px; text-align: center;">
          Submitted on ${new Date().toLocaleString('en-PK')}
        </p>
      </div>
    </body>
    </html>
  `;
}

function generateCareerEmailText(formData: any) {
  return `
JOB APPLICATION

Position: ${formData.position}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.company ? `Current Company: ${formData.company}\n` : ''}

Cover Letter:
${formData.message || 'No cover letter'}

Resume: ${formData.resume ? formData.resume.name : 'Not attached'}

---
Submitted: ${new Date().toLocaleString()}
Action: Review within 7 days
  `;
}

function generateContactAutoReplyHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #059669; padding: 30px; color: white; text-align: center; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; }
        .highlight { background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .contact-box { display: flex; gap: 10px; margin: 20px 0; }
        .box { flex: 1; text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>Thank You for Contacting Sharptel!</h2>
      </div>
      
      <div class="content">
        <p>Dear <strong>${escapeHTML(formData.name)}</strong>,</p>
        
        <p>Thank you for your interest in ${formData.service ? `<strong>${escapeHTML(formData.service)}</strong>` : 'our services'}. 
        We have received your inquiry and will contact you shortly.</p>
        
        <div class="highlight">
          <h3 style="color: #065f46; margin-top: 0;">📋 What's Next?</h3>
          <ul style="color: #374151; padding-left: 20px; margin: 0;">
            <li>Our specialist will contact you within <strong>24 hours</strong></li>
            <li>Detailed proposal based on your requirements</li>
            <li>Customized quote with transparent pricing</li>
            <li>Demo or consultation call available</li>
          </ul>
        </div>
        
        <div class="contact-box">
          <div class="box">
            <div style="color: #059669; font-weight: bold;">📞 Phone</div>
            <div>+92 21 3456 7890</div>
          </div>
          <div class="box">
            <div style="color: #059669; font-weight: bold;">📧 Email</div>
            <div>info@sharptel.pk</div>
          </div>
        </div>
        
        <p style="text-align: center; color: #6b7280;">
          Best regards,<br>
          <strong>The Sharptel Team</strong>
        </p>
      </div>
    </body>
    </html>
  `;
}

function generateContactAutoReplyText(formData: any) {
  return `
Thank You for Contacting Sharptel!

Dear ${formData.name},

Thank you for your inquiry. We have received your message and will contact you within 24 hours.

What's Next?
- Specialist contact within 24 hours
- Detailed proposal
- Customized quote
- Demo/consultation available

Contact Us:
📞 Phone: +92 21 3456 7890
📧 Email: info@sharptel.pk

Best regards,
The Sharptel Team
  `;
}

function generateCareerAutoReplyHTML(formData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #7c3aed; padding: 30px; color: white; text-align: center; }
        .content { padding: 30px; border: 1px solid #e5e7eb; background: white; }
        .highlight { background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>Application Received</h2>
        <p>Thank you for applying to Sharptel</p>
      </div>
      
      <div class="content">
        <p>Dear <strong>${escapeHTML(formData.name)}</strong>,</p>
        
        <p>Thank you for applying for the <strong>${escapeHTML(formData.position)}</strong> position.</p>
        
        <div class="highlight">
          <h3 style="color: #5b21b6; margin-top: 0;">📋 Next Steps</h3>
          <ul style="color: #374151; padding-left: 20px; margin: 0;">
            <li>HR review within <strong>5-7 business days</strong></li>
            <li>Interview scheduling if shortlisted</li>
            <li>Multiple interview rounds may be required</li>
            <li>We'll keep you updated on your status</li>
          </ul>
        </div>
        
        <p><strong>HR Contact:</strong><br>
        📧 careers@sharptel.pk<br>
        📞 +92 21 3456 7890</p>
        
        <p style="text-align: center; color: #6b7280;">
          Best regards,<br>
          <strong>The Sharptel HR Team</strong>
        </p>
      </div>
    </body>
    </html>
  `;
}

function generateCareerAutoReplyText(formData: any) {
  return `
Application Received - Sharptel Careers

Dear ${formData.name},

Thank you for applying for the ${formData.position} position.

Next Steps:
- HR review within 5-7 business days
- Interview scheduling if shortlisted
- Multiple interview rounds may be required
- We'll keep you updated

HR Contact:
📧 careers@sharptel.pk
📞 +92 21 3456 7890

Best regards,
The Sharptel HR Team
  `;
}

function escapeHTML(text: string) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}