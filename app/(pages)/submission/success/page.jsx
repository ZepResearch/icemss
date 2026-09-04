import Link from "next/link"

const CONFERENCE_ID = "qkx4mqss1mif7xk"
const PUBLICATION_PORTAL_URL = `https://publication.zepresearch.com/?conference=${CONFERENCE_ID}`

export const metadata = {
  title: "Submission Successful | ICEMSS",
  description:
    "Your paper has been successfully submitted to the International Conference on Engineering, Management and Social Sciences.",
}

export default function SuccessPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      {/* <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-50" /> */}
      {/* <div className="absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" /> */}

      <section className="mx-auto w-full max-w-2xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
          <div className="bg-gradient-to-r from-[#0f4c75] to-[#1a78a6] px-6 py-8 text-center text-white sm:px-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-8 ring-white/10">
              <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Submission received</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Your paper is submitted</h1>
          </div>

          <div className="space-y-8 px-6 py-8 sm:px-10 sm:py-10">
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-800">
                International Conference on Engineering, Management and Social Sciences
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                We have received your paper. A confirmation email has been sent to the email address provided, and our
                review team will contact you with the next steps.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Check your submission status</h2>
                  <p className="mt-1 leading-6 text-slate-600">
                    Visit the publication portal and sign in with the same email and password you used to submit
                    your paper.
                  </p>

                  <ol className="mt-3 space-y-1.5 text-sm text-slate-600">
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#0f4c75]">1.</span>
                      Log in using the same ID and password used during submission.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#0f4c75]">2.</span>
                      Click on your profile icon.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#0f4c75]">3.</span>
                      Go to <span className="font-semibold text-slate-700">Dashboard</span>.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-[#0f4c75]">4.</span>
                      Open <span className="font-semibold text-slate-700">Conf. Submission</span> to view your
                      paper's status.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 rounded-xl border border-blue-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Conference ID</p>
                  <p className="mt-1 font-mono text-sm font-bold tracking-wide text-[#0f4c75]">{CONFERENCE_ID}</p>
                </div>
                <a
                  href={PUBLICATION_PORTAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f4c75] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b3b5b] focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:ring-offset-2"
                >
                  Open publication portal
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5h5m0 0v5m0-5L10 14" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Return to homepage
              </Link>
              <a
                href={PUBLICATION_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                Track submission
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}