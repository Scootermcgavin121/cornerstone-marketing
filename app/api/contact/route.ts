import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting (per IP, resets on deploy)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max submissions per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function getTransport() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  // Fallback: log to console
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // Rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, company, message, website, _t } = body;

    // Honeypot check — bots fill hidden fields
    if (website) {
      return NextResponse.json({ ok: true }); // silent reject
    }

    // Time check — form submitted too fast (< 3 seconds = likely bot)
    if (_t && Date.now() - _t < 3000) {
      return NextResponse.json({ ok: true }); // silent reject
    }

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const subject = `🏗️ Beta Access Request — ${name.trim()}${company ? ` (${company.trim()})` : ""}`;

    const html = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f172a; padding: 24px; border-radius: 12px;">
          <h2 style="color: #22d3ee; margin: 0 0 20px 0; font-size: 20px;">
            New Beta Access Request
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Name</td>
              <td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px; font-weight: 600;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Email</td>
              <td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px;">
                <a href="mailto:${email.trim()}" style="color: #22d3ee; text-decoration: none;">${email.trim()}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Company</td>
              <td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px;">${company.trim()}</td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px; line-height: 1.6;">${message.trim().replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #1e293b; color: #64748b; font-size: 12px;">
            Sent from cornerstonepm.ai contact form · IP: ${ip}
          </div>
        </div>
      </div>
    `;

    const text = `New Beta Access Request\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company?.trim() || "N/A"}\n\nMessage:\n${message.trim()}\n\n---\nSent from cornerstonepm.ai contact form`;

    const transport = getTransport();
    if (transport) {
      await transport.sendMail({
        from: `"Cornerstone PM" <${process.env.SMTP_USER || "noreply@cornerstonepm.ai"}>`,
        to: "sales@cornerstonepm.ai",
        replyTo: email.trim(),
        subject,
        html,
        text,
      });
      console.log(`[CONTACT FORM] ✅ Email sent — ${name.trim()} <${email.trim()}>`);
    } else {
      console.log(`[CONTACT FORM] ⚠️ No SMTP configured, logging only:`);
      console.log(`  Name: ${name.trim()}`);
      console.log(`  Email: ${email.trim()}`);
      console.log(`  Company: ${company?.trim() || "N/A"}`);
      console.log(`  Message: ${message.trim()}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[CONTACT FORM ERROR]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
