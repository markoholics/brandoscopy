"use server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const engagementType = formData.get("engagement_type") as string;
  const message = formData.get("message") as string;

  if (!name || !email) {
    return { success: false, message: "Name and email are required." };
  }

  // Log to console (replace with email service like Resend in production)
  console.log("[Contact Form]", { name, company, email, engagementType, message });

  return { success: true, message: "Thank you. We will be in touch within 48 hours." };
}
