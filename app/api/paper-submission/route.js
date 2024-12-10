import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { adminNotificationTemplate } from '@/emails/adminNotification';
import { userConfirmationTemplate } from '@/emails/userConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Send email to admin
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Paper Submission: ${data.paperTitle}`,
      html: adminNotificationTemplate(data)
    });

    // Send confirmation email to submitter
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: data.email,
      subject: 'Paper Submission Confirmation',
      html: userConfirmationTemplate(data)
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Paper submitted successfully' 
    });

  } catch (error) {
    console.error('Error in paper submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit paper' },
      { status: 500 }
    );
  }
}