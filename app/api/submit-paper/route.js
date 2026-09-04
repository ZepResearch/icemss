import { NextResponse } from "next/server"
import PocketBase from "pocketbase"
import { resend } from "@/lib/resend"
import { getUserEmailTemplate, getAdminEmailTemplate } from "@/emails/email-templates"

const CONFERENCE_ID = "qkx4mqss1mif7xk"
const ZEP_PB_URL = process.env.NEXT_PUBLIC_PB_URL_ZEP || "https://admin.zepresearch.com"

function normalizeKnowToYou(value) {
  const raw = String(value || "").trim()
  const normalized = raw.toLowerCase()

  if (["conference alerts", "conference-alerts", "conference_alerts"].includes(normalized)) {
    return "Conference Alerts"
  }

  if (["friend or colleague or supervisor", "friend/colleague/supervisor", "friend or colleague", "friend", "colleague", "supervisor"].includes(normalized)) {
    return "Friend or Colleague or Supervisor"
  }

  if (["facebook", "fb"].includes(normalized)) {
    return "Facebook"
  }

  if (["google search", "googlesearch", "google"].includes(normalized)) {
    return "Google Search"
  }

  if (["eventbit", "event bit"].includes(normalized)) {
    return "Eventbit"
  }

  if (["linkedin", "linkedIn", "linked in"].includes(normalized)) {
    return "LinkedIn"
  }

  if (["email", "e-mail", "mail"].includes(normalized)) {
    return "Others"
  }

  return "Others"
}

async function createSubmissionRecord(client, collectionName, body) {
  try {
    return await client.collection(collectionName).create(body)
  } catch (error) {
    const details = error?.response?.data?.data || error?.response?.data || {}
    const knowToYouError = details?.know_to_you || {}

    if (knowToYouError?.message || Object.keys(details).includes("know_to_you")) {
      return client.collection(collectionName).create({
        ...body,
        know_to_you: "Others",
      })
    }

    throw error
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData()
    const authToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim()

    if (!authToken) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // The create rule requires `user` to equal `@request.auth.id`. Verify the
    // browser's PocketBase token and use its record ID instead of trusting a
    // user ID submitted in the form body.
    const zepPb = new PocketBase(ZEP_PB_URL)
    zepPb.authStore.save(authToken)

    let userId
    try {
      const authData = await zepPb.collection("users").authRefresh()
      userId = authData.record?.id
    } catch (error) {
      console.warn("Paper submission attempted with an invalid PocketBase token", error)
      return NextResponse.json({ success: false, message: "Your session has expired. Please log in again." }, { status: 401 })
    }

    // Extract file if present
    const file = formData.get("file")
    let fileUrl = ""

    if (!userId) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    // Create data object for PocketBase
    const data = {
      author: formData.get("author"),
      phone_number: formData.get("phone_number"),
      email: formData.get("email"),
      country: formData.get("country"),
      co_author: formData.get("co_author"),
      paper_title: formData.get("paper_title"),
      department: formData.get("department"),
      organization: formData.get("organization"),
      paper_type: formData.get("paper_type"),
      presentation_type: formData.get("presentation_type"),
      message: formData.get("message"),
      know_to_you: formData.get("know_to_you"),
      conf_name:"ICEMSS",
    }

    const submissionData = {
      ...data,
      know_to_you: normalizeKnowToYou(data.know_to_you),
    }

    if (file && file.size > 0) {
      submissionData.file = file
    }

    // `user` is a Zep PocketBase user record and `conference` belongs to the
    // Zep conference collection. Keep these relations on that record only;
    // the legacy ICEMSS PocketBase has a separate set of record IDs.
    const zepSubmissionData = {
      ...submissionData,
      user: userId,
      conference: CONFERENCE_ID,
    }

    const icemssPb = new PocketBase("https://icemss.pockethost.io")

    const results = await Promise.allSettled([
      createSubmissionRecord(icemssPb, "paper_form_submission", submissionData),
      createSubmissionRecord(zepPb, "conf_paper_submission_all", zepSubmissionData),
    ])

    const failed = results.filter((result) => result.status === "rejected")
    if (failed.length > 0) {
      console.error("Failed to create submission record in one or more PocketBase instances", failed)
      return NextResponse.json(
        { success: false, message: "Failed to submit paper to one or more PocketBase instances" },
        { status: 500 }
      )
    }

    const [icemssRecord, zepRecord] = results.map((result) => result.value)

    if (icemssRecord?.file && icemssRecord.file.length > 0) {
      fileUrl = icemssPb.files.getURL(icemssRecord, icemssRecord.file[0], { download: 1 })
    } else if (zepRecord?.file && zepRecord.file.length > 0) {
      fileUrl = zepPb.files.getURL(zepRecord, zepRecord.file[0], { download: 1 })
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "Conference <info@icemss.in>",
      to: data.email,
      subject:
        "Paper Submission Confirmation - ICEMSS",
      html: getUserEmailTemplate(data),
    })

    // Send notification email to admin
    await resend.emails.send({
      from: "Conference <info@icemss.in>",
      to: "info@icemss.in", // Replace with actual admin email
      subject: "New Paper Submission - ICEMSS",
      html: getAdminEmailTemplate(data, fileUrl),
    })

    return NextResponse.json({
      success: true,
      message: "Paper submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting paper:", error)
    return NextResponse.json({ success: false, message: "Failed to submit paper" }, { status: 500 })
  }
}

