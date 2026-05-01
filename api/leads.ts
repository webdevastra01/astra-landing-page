import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body: {
    fullName?: string;
    email?: string;
    company?: string;
    phone?: string;
    interest?: string;
    message?: string;
  } = {};

  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const { fullName, email, company, phone, interest, message } = body;

  // Basic validation
  if (!fullName || !email || !interest) {
    return res
      .status(400)
      .json({ error: "Missing required fields: fullName, email, interest" });
  }

  const interestLabelMap: Record<string, string> = {
    investment: "Investment Opportunities",
    partnership: "Strategic Partnership",
    consulting: "Business Consulting",
    technology: "Technology Solutions",
    media: "Media & Content",
    other: "Other",
  };

  const interestLabel = interestLabelMap[interest] || interest;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Internal notification email to Astra Group
    await transporter.sendMail({
      from: `"Astra Group Lead" <${process.env.EMAIL_USER}>`,
      to: "sales@astragroupph.com",
      subject: `New Lead: ${interestLabel} — ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background:#f8fafc; padding:40px 0;">
          <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
            <div style="background:linear-gradient(135deg,#2a3a9d,#1e2a70); padding:24px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:20px; letter-spacing:1px;">ASTRA GROUP</h1>
              <p style="color:rgba(255,255,255,0.8); margin:6px 0 0; font-size:13px;">New Partnership Inquiry</p>
            </div>
            <div style="padding:28px; color:#0f172a;">
              <h2 style="margin:0 0 16px; font-size:18px; color:#0f172a;">Lead Details</h2>
              <table style="width:100%; border-collapse:collapse; font-size:14px;">
                <tr><td style="padding:8px 0; color:#64748b; width:140px;"><b>Full Name</b></td><td style="padding:8px 0; color:#0f172a;">${fullName}</td></tr>
                <tr><td style="padding:8px 0; color:#64748b;"><b>Email</b></td><td style="padding:8px 0; color:#0f172a;"><a href="mailto:${email}" style="color:#2a3a9d;">${email}</a></td></tr>
                <tr><td style="padding:8px 0; color:#64748b;"><b>Company</b></td><td style="padding:8px 0; color:#0f172a;">${company || "N/A"}</td></tr>
                <tr><td style="padding:8px 0; color:#64748b;"><b>Phone</b></td><td style="padding:8px 0; color:#0f172a;">${phone || "N/A"}</td></tr>
                <tr><td style="padding:8px 0; color:#64748b;"><b>Interest</b></td><td style="padding:8px 0; color:#0f172a;"><span style="background:#2a3a9d; color:#fff; padding:2px 10px; border-radius:999px; font-size:12px; font-weight:600;">${interestLabel}</span></td></tr>
              </table>
              ${message ? `<hr style="border:none; border-top:1px solid #e2e8f0; margin:20px 0;"/><p style="margin:0 0 8px; font-size:13px; color:#64748b;"><b>Message</b></p><p style="margin:0; font-size:14px; color:#0f172a; line-height:1.6; background:#f8fafc; padding:14px; border-radius:8px;">${message}</p>` : ""}
            </div>
            <div style="background:#f1f5f9; padding:16px; text-align:center;">
              <p style="margin:0; font-size:12px; color:#94a3b8;">Received on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    });

    // 2️⃣ Confirmation email to the lead
    const confirmationHtml = `
<div style="font-family: Inter, Arial, sans-serif; background:#f3f4f6; padding:40px 0;">
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#2a3a9d,#3b4fb8); padding:24px; text-align:center;">
      <h1 style="color:#ffffff; margin:0; font-size:20px; letter-spacing:1px;">
        ASTRA GROUP
      </h1>
      <p style="color:rgba(255,255,255,0.85); margin:6px 0 0; font-size:13px;">
        We received your inquiry
      </p>
    </div>

    <!-- Body -->
    <div style="padding:28px; color:#0f172a;">

      <h2 style="margin:0 0 10px; font-size:18px; color:#0f172a;">
        Thank you for reaching out, ${fullName} 👋
      </h2>

      <p style="margin:0 0 16px; color:#475569; font-size:14px; line-height:1.6;">
        We've successfully received your inquiry regarding <b>${interestLabel}</b> and our team is already reviewing it. You can expect a response shortly.
      </p>

      <!-- Interest Card -->
      <div style="background:#f8fafc; border-left:4px solid #2a3a9d; padding:12px 14px; border-radius:8px; margin-bottom:16px;">
        <p style="margin:0; font-size:13px; color:#64748b;">Area of Interest</p>
        <p style="margin:4px 0 0; font-weight:600; color:#0f172a;">${interestLabel}</p>
      </div>

      ${
        message
          ? `
      <!-- Message Box -->
      <div style="background:#ffffff; border:1px solid #e2e8f0; padding:14px; border-radius:8px; margin-bottom:16px;">
        <p style="margin:0 0 8px; font-size:13px; color:#64748b;">Your Message</p>
        <p style="margin:0; font-size:14px; color:#0f172a; line-height:1.6;">${message}</p>
      </div>
      `
          : ""
      }

      <!-- Divider -->
      <hr style="border:none; border-top:1px solid #e2e8f0; margin:20px 0;" />

      <!-- Footer Note -->
      <p style="margin:0; font-size:13px; color:#64748b;">
        If you need immediate assistance, just reply to this email.
      </p>

      <p style="margin:12px 0 0; font-size:13px; font-weight:600; color:#2a3a9d;">
        — Astra Group Team
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#0f172a; padding:16px; text-align:center;">
      <p style="margin:0; font-size:12px; color:#94a3b8;">
        © ${new Date().getFullYear()} Astra Group of Companies. All rights reserved.
      </p>
    </div>

  </div>
</div>
`;

    await transporter.sendMail({
      from: `"Astra Group Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry — Astra Group",
      html: confirmationHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Lead submitted successfully",
    });
  } catch (err) {
    console.error("Lead submission error:", err);

    return res.status(500).json({
      error: "Failed to process lead. Please try again later.",
    });
  }
}
