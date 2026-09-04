import Link from "next/link"

// TODO: replace with this conference's actual ID
const CONFERENCE_ID = "REPLACE_WITH_CONFERENCE_ID"
const PUBLICATION_PORTAL_URL = `https://publication.zepresearch.com`

export const metadata = {
  title: "Submission Successful - International Conference on Sustainable Tourism & Hospitality Management",
  description:
    "Your paper has been successfully submitted to the International Conference on Sustainable Tourism & Hospitality Management",
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1a4276]">Submission Successful!</h2>
          <div className="mt-4 text-center">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your journal has been successfully submitted to the ICEMSS.
          </p>
        </div>
        <div className="mt-6">
          <p className="text-center text-gray-700">
            A confirmation email has been sent to your email address. Our team will review your submission and get back
            to you soon.
          </p>

          <div className="mt-6 rounded-lg border border-[#1a4276]/15 bg-[#1a4276]/5 p-5">
            <h3 className="text-sm font-bold text-[#1a4276]">Check your submission status</h3>
            <p className="mt-1 text-sm text-gray-600">
              Visit the publication portal and sign in with the same email and password you used to submit your
              paper.
            </p>

            <ol className="mt-3 space-y-1.5 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="font-semibold text-[#1a4276]">1.</span>
                Log in using the same ID and password used during submission.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-[#1a4276]">2.</span>
                Click on your profile icon.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-[#1a4276]">3.</span>
                Go to <span className="font-semibold text-gray-700">Dashboard</span>.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-[#1a4276]">4.</span>
                Open <span className="font-semibold text-gray-700">Journal Submission</span> to view your paper's
                status.
              </li>
            </ol>

            <div className="mt-4 text-center">
              <a
                href={PUBLICATION_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1a6476] hover:bg-[#153c60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a5276]"
              >
                Open Publication Portal
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a5276]"
            >
              Return to Homepage
            </Link>
            <a
              href={PUBLICATION_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1a6476] hover:bg-[#153c60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a5276]"
            >
              Track Submission
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}