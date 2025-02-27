"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Download } from "lucide-react"
import Link from "next/link"

export default function DownloadPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show popup after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleDownload = () => {
    // Replace with actual download logic
    console.log("Downloading proceeding book...")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-20 left-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg p-6 max-w-sm z-50 border border-purple-300 animate-fade-in-up">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white hover:text-purple-200 transition-colors"
      >
        <X size={24} />
      </button>
      <h3 className="text-xl font-bold mb-2 text-white">Download Proceeding Book</h3>
      <p className="text-sm text-purple-100 mb-4">
        Get exclusive access to the proceedings of the 2nd International Conference on Engineering, Management and
        Social Sciences
      </p>
      <Link href="/proceeding-book.pdf">
      <Button   
        onClick={handleDownload}
        className="w-full bg-white text-purple-600 hover:bg-purple-100 transition-colors flex items-center justify-center gap-2"
        >
        <Download size={18} />
        Download Now
      </Button>
      </Link>
    </div>
  )
}

