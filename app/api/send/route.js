import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/ContactFormEmail";
import ClientConfirmationEmail from "@/emails/clientConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Send email to admin
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: ContactFormEmail(data)
    });

    // Send confirmation email to client
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: data.email,
      subject: 'We have received your message',
      html: ClientConfirmationEmail(data)
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
