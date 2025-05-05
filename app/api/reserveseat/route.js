import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { adminNotificationTemplate, userConfirmationTemplate, } from '@/emails/templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.country || !data.organization) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Send confirmation email to user
    await resend.emails.send({
      from: "Conference <noreply@icemss.in>",
      to: data.email,
      subject: "Your Conference Seat Reservation Confirmed",
      html: userConfirmationTemplate(data),
    })

    // Send notification to admin
    await resend.emails.send({
      from: "Conference System <noreply@icemss.in>",
      to: "info@icemss.in", // Change to your admin email
      subject: "New Conference Registration",
      html: adminNotificationTemplate(data),
    })

    return NextResponse.json({ success: true }, { status: 200 })
    
  } catch (error) {
    console.error('Error sending reservation email:', error)
    return NextResponse.json(
      { error: 'Failed to send reservation email' },
      { status: 500 }
    )
  }
}