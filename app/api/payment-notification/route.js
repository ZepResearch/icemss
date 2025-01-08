import { NextResponse } from "next/server";
import { Resend } from "resend";
import PaymentInitiatedEmail from "@/emails/PaymentInitiatedEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Send email to admin
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Payment Initiated',
      html: PaymentInitiatedEmail(data)
    });

    // Send confirmation email to client
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: data.billing_email,
      subject: 'Payment Initiated for Your Ticket',
      html: PaymentInitiatedEmail(data)
    });

    return NextResponse.json({ message: "Payment notification emails sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

