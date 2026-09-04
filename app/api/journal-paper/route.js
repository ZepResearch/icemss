import { NextResponse } from "next/server"
import PocketBase from "pocketbase"
import { resend } from "@/lib/resend"
import { getUserEmailTemplate, getAdminEmailTemplate } from "@/emails/journal-templates"

function createPocketBaseFormData(data, file) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value))
    }
  })
  if (file && file.size > 0) {
    formData.append("file", file)
  }
  return formData
}

export async function POST(request) {
  try {
    const formData = await request.formData()
    const userId = formData.get("user")?.toString()?.trim()

    if (!userId) {
      return NextResponse.json({ success: false, message: "Authentication required" }, { status: 401 })
    }

    const file = formData.get("file")

    const data = {
      user: userId,
      author: formData.get("author"),
      phone_number: formData.get("phone_number"),
      email: formData.get("email"),
      country: formData.get("country"),
      co_author: formData.get("co_author"),
      paper_title: formData.get("paper_title"),
      department: formData.get("department"),
      organization: formData.get("organization"),
      message: formData.get("message"),
      journal_id: formData.get("journal_id"),
      journal_name: formData.get("journal_name"),
      status: "pending",
    }

    const icemssPb = new PocketBase("https://icemss.pockethost.io")
    const zepPb = new PocketBase("https://admin.zepresearch.com")

    const icemssFormData = createPocketBaseFormData(data, file)
    const zepFormData = createPocketBaseFormData(data, file)

    const [icemssResult, zepResult] = await Promise.all([
      icemssPb.collection("ICEMSS_journal_form_submission").create(icemssFormData),
      zepPb.collection("paper_form_submission").create(zepFormData),
    ])

    let fileUrl = ""
    if (icemssResult?.file?.length > 0) {
      fileUrl = icemssPb.files.getURL(icemssResult, icemssResult.file[0], { download: 1 })
    } else if (zepResult?.file?.length > 0) {
      fileUrl = zepPb.files.getURL(zepResult, zepResult.file[0], { download: 1 })
    }

    await resend.emails.send({
      from: "ICEMSS|Journal-Submission <info@icemss.in>",
      to: data.email,
      subject: "Journal Submission Confirmation - ICEMSS",
      html: getUserEmailTemplate(data),
    })

    await resend.emails.send({
      from: "ICEMSS | Submission <info@icemss.in>",
      to: "info@icemss.in",
      subject: "New Journal Submission - from ICEMSS",
      html: getAdminEmailTemplate(data, fileUrl),
    })

    return NextResponse.json({ success: true, message: "Paper submitted successfully" })
  } catch (error) {
    console.error("Error submitting paper:", error)
    return NextResponse.json({ success: false, message: error?.message || "Failed to submit paper" }, { status: 500 })
  }
}

