import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';
import fs from 'fs';
import path from 'path';

// Force Node to prefer IPv4 over IPv6 to fix the Gmail/network IPv6 ECONNREFUSED error
dns.setDefaultResultOrder('ipv4first');

const LIVE_CRM_ENDPOINT = 'https://dh8ut0pnb37w5.cloudfront.net/api/contact';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Basic Input Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email format." }, { status: 400 });
    }

    // 1. Dispatch lead to the live CRM backend (CloudFront API)
    let crmData = null;
    let leadCode = null;
    try {
      const crmResponse = await fetch(LIVE_CRM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (crmResponse.ok) {
        crmData = await crmResponse.json();
        leadCode = crmData?.data?.leadCode || crmData?.data?._id;
        console.log(`[CRM Lead Dispatched Successfully] Code: ${leadCode} | Name: ${name}`);
      } else {
        const errorText = await crmResponse.text();
        console.warn(`[CRM Lead API Status ${crmResponse.status}]:`, errorText);
      }
    } catch (crmErr) {
      console.error("[CRM Dispatch Network Notice]:", crmErr.message);
    }

    const submissionId = leadCode || `BINJ-${Date.now().toString().slice(-6)}`;
    const submissionRecord = {
      id: submissionId,
      crmLeadCode: leadCode || null,
      name,
      email,
      phone,
      message,
      receivedAt: new Date().toISOString()
    };

    // 2. Persist submission locally for logging/audit
    try {
      const submissionsFile = path.join(process.cwd(), 'contact_submissions.json');
      let currentSubmissions = [];
      if (fs.existsSync(submissionsFile)) {
        try {
          currentSubmissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
        } catch (_) {}
      }
      currentSubmissions.push(submissionRecord);
      fs.writeFileSync(submissionsFile, JSON.stringify(currentSubmissions, null, 2), 'utf8');
      console.log(`[Contact Submission Saved] ID: ${submissionId} | Name: ${name} | Phone: ${phone}`);
    } catch (fsErr) {
      console.error("Could not write to contact_submissions.json:", fsErr.message);
    }

    // 3. Optional SMTP Email Notification (if credentials are provided in env)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        const mailOptions = {
          from: `"${name}" <${email}>`,
          to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
          subject: `New Lead / Contact Form Submission: ${name} [${submissionId}]`,
          text: `You have a new message from your website's contact form.\n\nLead Code: ${submissionId}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Lead Code:</strong> ${submissionId}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p> 
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (mailErr) {
        console.error("SMTP Notification error:", mailErr.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: crmData?.message || "Your message has been received successfully!",
      leadId: submissionId,
      data: crmData?.data || null,
      receivedAt: submissionRecord.receivedAt
    }, { status: 200 });
  } catch (error) {
    console.error("Contact API notice:", error.message);
    return NextResponse.json({
      success: true,
      message: "Your message has been received successfully!",
      leadId: `BINJ-${Date.now().toString().slice(-6)}`
    }, { status: 200 });
  }
}
