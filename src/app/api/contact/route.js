import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';

// Force Node to prefer IPv4 over IPv6 to fix the Gmail IPv6 ECONNREFUSED error
dns.setDefaultResultOrder('ipv4first');

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

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your email from .env
        pass: process.env.EMAIL_PASS, // Your email password or app password from .env
      },
      tls: {
        // Bypass strict SSL validation for local development (fixes self-signed cert errors)
        rejectUnauthorized: false
      }
    });

    // Set up email data
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECIPIENT_EMAIL, // The recipient email from .env
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from your website's contact form.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p> 
      `,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
  }
}
