"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const engagementType = formData.get("engagement_type") as string;
  const message = formData.get("message") as string;

  if (!name || !email) {
    return { success: false, message: "Name and email are required." };
  }

  const { error } = await resend.emails.send({
    from: "BrandoScopy <office@brandoscopy.in>",
    to: "office@brandoscopy.in",
    replyTo: email,
    subject: `New introduction: ${name}${company ? ` · ${company}` : ""}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2c1215;">
        <div style="background: #5F101C; padding: 32px 40px;">
          <p style="color: #FAF6EE; font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase; margin: 0;">BrandoScopy</p>
          <p style="color: rgba(250,246,238,0.6); font-size: 11px; margin: 8px 0 0;">New project introduction</p>
        </div>
        <div style="background: #FAF6EE; padding: 40px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #9a7578; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 15px; color: #2c1215;">${name}</td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #9a7578;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 15px; color: #2c1215;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #9a7578;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 15px; color: #2c1215;"><a href="mailto:${email}" style="color: #5F101C;">${email}</a></td>
            </tr>
            ${engagementType ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #9a7578;">Engagement</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #EBC2BF; font-size: 15px; color: #2c1215;">${engagementType}</td>
            </tr>` : ""}
            ${message ? `<tr>
              <td style="padding: 16px 0; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #9a7578; vertical-align: top;">Project</td>
              <td style="padding: 16px 0; font-size: 15px; color: #2c1215; line-height: 1.7;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>` : ""}
          </table>
        </div>
        <div style="background: #F1E9E2; padding: 24px 40px;">
          <p style="font-size: 11px; color: #9a7578; margin: 0;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[contact form] Resend error:", error);
    return { success: false, message: "Something went wrong. Please email us directly at office@brandoscopy.in." };
  }

  return { success: true, message: "Thank you. We will be in touch within 48 hours." };
}
