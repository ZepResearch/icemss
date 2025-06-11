"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from "react-hot-toast"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function PaperSubmissionForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)
      
      // Add phone number to form data
      if (phoneNumber) {
        formData.set("phone_number", phoneNumber)
      }

      // Add file if selected
      if (selectedFile) {
        formData.set("file", selectedFile)
      }

      const response = await fetch("/api/submit-paper", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit paper")
      }

      // Show success toast
      toast.success("Paper submitted successfully!")
      
      // Redirect to success page
      router.push("/submission/success")
    } catch (err) {
      setError(err.message || "An error occurred while submitting your paper")
      toast.error(err.message || "An error occurred while submitting your paper")
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md py-24">
      <Toaster position="top-right" />
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Paper Submission Form</h1>

      {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Author Name */}
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
              Author Name *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <PhoneInput
              international
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Co-Author */}
          <div>
            <label htmlFor="co_author" className="block text-sm font-medium text-gray-700 mb-1">
              Co-Author(s) *
            </label>
            <input
              type="text"
              id="co_author"
              name="co_author"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Paper Title */}
          <div>
            <label htmlFor="paper_title" className="block text-sm font-medium text-gray-700 mb-1">
              Paper Title *
            </label>
            <input
              type="text"
              id="paper_title"
              name="paper_title"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department *
            </label>
            <input
              type="text"
              id="department"
              name="department"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization *
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Paper Type */}
          <div>
            <label htmlFor="paper_type" className="block text-sm font-medium text-gray-700 mb-1">
              Paper Type *
            </label>
            <select
              id="paper_type"
              name="paper_type"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Paper Type</option>
              <option value="Abstract">Abstract</option>
              <option value="Full Paper">Full Paper</option>
            </select>
          </div>

          {/* Presentation Type */}
          <div>
            <label htmlFor="presentation_type" className="block text-sm font-medium text-gray-700 mb-1">
              Presentation Type *
            </label>
            <select
              id="presentation_type"
              name="presentation_type"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Presentation Type</option>
              <option value="Poster">Poster</option>
              <option value="Oral">Oral</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>

          {/* How did you hear about us */}
          <div>
            <label htmlFor="know_to_you" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us? *
            </label>
            <select
              id="know_to_you"
              name="know_to_you"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select an option</option>
              <option value="Conference Alerts">Conference Alerts</option>
              <option value="Email">Email</option>
              <option value="Friend or Colleague or Supervisor">Friend, Colleague, or Supervisor</option>
              <option value="Facebook">Facebook</option>
              <option value="Google Search">Google Search</option>
              <option value="Eventbit">Eventbit</option>
              <option value="Linkdin">LinkedIn</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
              Upload Paper ( DOC, DOCX) *
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              required
              accept=".doc,.docx"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {selectedFile && <p className="mt-1 text-sm text-gray-500">Selected file: {selectedFile.name}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Paper"}
          </button>
        </div>
      </form>
    </div>
  )
}