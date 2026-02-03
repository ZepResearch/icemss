"use client"

import { useState } from "react"
import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CCavenuePaymentForm } from "@/components/ui/CCavenuePaymentForm"

export default function Ticket() {
  const host = process.env.NEXT_PUBLIC_APP_URL
  const [isLoading, setIsLoading] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentPurpose, setPaymentPurpose] = useState("")
  const [activeTab, setActiveTab] = useState("without") // "without" | "with"

  const tickets = {
    withoutAccommodation: {
      local: {
        physical: [
          {
            name: "Academician",
            price: 249,
            currency: "USD",
            category: "academician",
            type: "presenter",
            features: [
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Premium networking opportunities",
              "Certificate of participation",
              "Coffee breaks and refreshments",
              "Lunch included",
            ],
          },
          {
            name: "Student",
            price: 199,
            currency: "USD",
            category: "student",
            type: "presenter",
            features: [
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of participation",
              "Coffee breaks and refreshments",
              "Lunch included",
            ],
          },
          {
            name: "Delegates",
            price: 169,
            currency: "USD",
            category: "delegate",
            type: "listener",
            features: [
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of attendance",
              "Coffee breaks and refreshments",
              "Lunch included",
            ],
          },
        ],
        virtual: [
          {
            name: "Academician",
            price: 169,
            currency: "USD",
            category: "academician",
            type: "presenter",
            features: [
              "Access to all virtual sessions",
              "Digital conference materials",
              "Online networking opportunities",
              "Certificate of participation",
              "Recorded session access",
            ],
          },
          {
            name: "Student",
            price: 129,
            currency: "USD",
            category: "student",
            type: "presenter",
            features: [
              "Access to all virtual sessions",
              "Digital conference materials",
              "Online networking opportunities",
              "Certificate of participation",
              "Recorded session access",
            ],
          },
          {
            name: "Delegates",
            price: 79,
            currency: "USD",
            category: "delegate",
            type: "listener",
            features: [
              "Access to all virtual sessions",
              "Digital conference materials",
              "Online networking opportunities",
              "Certificate of attendance",
              "Recorded session access",
            ],
          },
        ],
        scopus: [
          {
            name: "With Scopus Q1 & Q2",
            price: 1749,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Conference registration included",
              "Publication in Scopus Q1 or Q2 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "Global visibility and indexing",
              "Certificate of publication",
            ],
          },
          {
            name: "With Scopus Q3 & Q4",
            price: 1049,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Conference registration included",
              "Publication in Scopus Q3 or Q4 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "Global visibility and indexing",
              "Certificate of publication",
            ],
          },
        ],
      },
      international: {
        physical: [
          {
            name: "Academician",
            price: 299,
            currency: "USD",
            category: "academician",
            type: "presenter",
            features: [
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Premium networking opportunities",
              "Certificate of participation",
              "Coffee breaks and refreshments",
              "Lunch included",
            ],
          },
          {
            name: "Student",
            price: 249,
            currency: "USD",
            category: "student",
            type: "presenter",
            features: [
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of participation",
              "Coffee breaks and refreshments",
              "Lunch included",
            ],
          },
          {
            name: "Delegates",
            price: 199,
            currency: "USD",
            category: "delegate",
            type: "listener",
            features: [
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of attendance",
              "Coffee breaks and refreshments",
              "Lunch included",
            ],
          },
        ],
        virtual: [
          {
            name: "Academician",
            price: 229,
            currency: "USD",
            category: "academician",
            type: "presenter",
            features: [
              "Access to all virtual sessions",
              "Digital conference materials",
              "Online networking opportunities",
              "Certificate of participation",
              "Recorded session access",
            ],
          },
          {
            name: "Student",
            price: 169,
            currency: "USD",
            category: "student",
            type: "presenter",
            features: [
              "Access to all virtual sessions",
              "Digital conference materials",
              "Online networking opportunities",
              "Certificate of participation",
              "Recorded session access",
            ],
          },
          {
            name: "Delegates",
            price: 129,
            currency: "USD",
            category: "delegate",
            type: "listener",
            features: [
              "Access to all virtual sessions",
              "Digital conference materials",
              "Online networking opportunities",
              "Certificate of attendance",
              "Recorded session access",
            ],
          },
        ],
        scopus: [
          {
            name: "With Scopus Q1 & Q2",
            price: 1799,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Conference registration included",
              "Publication in Scopus Q1 or Q2 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "Global visibility and indexing",
              "Certificate of publication",
            ],
          },
          {
            name: "With Scopus Q3 & Q4",
            price: 1099,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Conference registration included",
              "Publication in Scopus Q3 or Q4 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "Global visibility and indexing",
              "Certificate of publication",
            ],
          },
        ],
      },
    },
    withAccommodation: {
      local: {
        physical: [
          {
            name: "Academician",
            price: 399,
            currency: "USD",
            category: "academician",
            type: "presenter",
            features: [
              "Accommodation included",
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Premium networking opportunities",
              "Certificate of participation",
              "All meals included",
            ],
          },
          {
            name: "Student",
            price: 349,
            currency: "USD",
            category: "student",
            type: "presenter",
            features: [
              "Accommodation included",
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of participation",
              "All meals included",
            ],
          },
          {
            name: "Delegates",
            price: 319,
            currency: "USD",
            category: "delegate",
            type: "listener",
            features: [
              "Accommodation included",
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of attendance",
              "All meals included",
            ],
          },
        ],
        scopus: [
          {
            name: "With Scopus Q1 & Q2",
            price: 1899,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Accommodation included",
              "Conference registration included",
              "Publication in Scopus Q1 or Q2 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "All meals included",
            ],
          },
          {
            name: "With Scopus Q3 & Q4",
            price: 1199,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Accommodation included",
              "Conference registration included",
              "Publication in Scopus Q3 or Q4 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "All meals included",
            ],
          },
        ],
      },
      international: {
        physical: [
          {
            name: "Academician",
            price: 449,
            currency: "USD",
            category: "academician",
            type: "presenter",
            features: [
              "Accommodation included",
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Premium networking opportunities",
              "Certificate of participation",
              "All meals included",
            ],
          },
          {
            name: "Student",
            price: 399,
            currency: "USD",
            category: "student",
            type: "presenter",
            features: [
              "Accommodation included",
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of participation",
              "All meals included",
            ],
          },
          {
            name: "Delegates",
            price: 349,
            currency: "USD",
            category: "delegate",
            type: "listener",
            features: [
              "Accommodation included",
              "Access to all conference sessions",
              "Conference materials and proceedings",
              "Networking opportunities",
              "Certificate of attendance",
              "All meals included",
            ],
          },
        ],
        scopus: [
          {
            name: "With Scopus Q1 & Q2",
            price: 1949,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Accommodation included",
              "Conference registration included",
              "Publication in Scopus Q1 or Q2 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "All meals included",
            ],
          },
          {
            name: "With Scopus Q3 & Q4",
            price: 1299,
            currency: "USD",
            category: "scopus",
            type: "publication",
            features: [
              "Accommodation included",
              "Conference registration included",
              "Publication in Scopus Q3 or Q4 indexed journal",
              "Fast-track peer review process",
              "Digital Object Identifier (DOI)",
              "All meals included",
            ],
          },
        ],
      },
    },
  }

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`
  }

  const openPaymentPopup = (ticket, mode) => {
    setSelectedTicket({ ...ticket, selectedPrice: ticket.price, mode })
    setIsPopupOpen(true)
  }

  const closePaymentPopup = () => {
    setIsPopupOpen(false)
    setSelectedTicket(null)
  }

  const handlePaymentSubmit = async (formData) => {
    try {
      setIsLoading(selectedTicket.name + selectedTicket.mode)
      const taxRate = 0.05
      const baseAmount = selectedTicket.selectedPrice
      const taxAmount = baseAmount * taxRate
      const totalAmount = baseAmount + taxAmount

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        name: `${selectedTicket.name} - ${selectedTicket.mode}`,
        amount: totalAmount.toString(),
        currency: selectedTicket.currency,
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        ...formData,
        language: "EN",
      }

      await fetch("/api/payment-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      const response = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      if (!response.ok) {
        throw new Error("Failed to encrypt order data")
      }

      const { encRequest } = await response.json()

      const form = document.createElement("form")
      form.method = "POST"
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"

      const fields = {
        encRequest,
        access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
      }

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = value
        form.appendChild(input)
      })

      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error("Payment initiation failed:", error)
      alert("Failed to initiate payment. Please try again.")
    } finally {
      setIsLoading(null)
      closePaymentPopup()
    }
  }

  const handleCustomPayment = async () => {
    if (!customAmount || Number.parseFloat(customAmount) <= 0) {
      alert("Please enter a valid amount")
      return
    }

    try {
      setIsLoading("custom")
      const amount = Number.parseFloat(customAmount)

      const customTicket = {
        name: "Custom Payment",
        selectedPrice: amount,
        currency: "USD",
        mode: "Custom",
      }

      setSelectedTicket(customTicket)
      setIsPopupOpen(true)
    } catch (error) {
      console.error("Custom payment initiation failed:", error)
      alert("Failed to initiate payment. Please try again.")
    } finally {
      setIsLoading(null)
    }
  }

  const renderTicketCard = (ticket, index, mode) => {
    const isPublicationTicket = ticket.type === "publication"

    return (
      <div key={index} className="flex h-full">
        <Card className="relative w-full bg-blue-50 overflow-hidden border border-blue-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
          <div className="p-6 flex flex-col h-full">
            <div className="space-y-2 mb-4">
              <h3 className="text-xl font-bold tracking-wide text-blue-900">{ticket.name}</h3>
              <div className="text-xs uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block">
                {isPublicationTicket
                  ? "PUBLICATION PACKAGE"
                  : ticket.type === "listener"
                    ? "DELEGATE PASS"
                    : "PARTICIPANT PASS"}
              </div>
            </div>

            <div className="flex-grow mb-4">
              <ul className="space-y-2 text-sm">
                {ticket.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-blue-500 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 mt-auto">
              <div className={`p-3 rounded-lg border ${isPublicationTicket ? "bg-blue-300 border-blue-500" : "bg-blue-200 border-blue-400"}`}>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-blue-900">${ticket.price.toLocaleString()}</div>
                  <Button
                    size="sm"
                    className={`${isPublicationTicket ? "bg-blue-800 hover:bg-blue-900" : "bg-blue-700 hover:bg-blue-800"} text-white text-xs px-4 py-2`}
                    onClick={() => openPaymentPopup(ticket, mode)}
                    disabled={isLoading === ticket.name + mode}
                  >
                    {isLoading === ticket.name + mode ? "Processing..." : "Register Now"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  // ─── Shared sub-renderers ────────────────────────────────────────────
  const renderParticipantGroup = (participantType, data, accSuffix) => {
    const label = participantType === "local" ? "Local Participants" : "International Participants"

    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">{label}</h2>

        {/* Physical */}
        {data.physical && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">Physical Attendance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
              {data.physical.map((ticket, index) =>
                renderTicketCard(ticket, index, `${participantType === "local" ? "Local" : "International"}-Physical-${accSuffix}`)
              )}
            </div>
          </div>
        )}

        {/* Virtual (only exists on withoutAccommodation) */}
        {data.virtual && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">Virtual Attendance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
              {data.virtual.map((ticket, index) =>
                renderTicketCard(ticket, index, `${participantType === "local" ? "Local" : "International"}-Virtual-${accSuffix}`)
              )}
            </div>
          </div>
        )}

        {/* Scopus */}
        {data.scopus && (
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">Scopus Publication Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
              {data.scopus.map((ticket, index) =>
                renderTicketCard(ticket, index, `${participantType === "local" ? "Local" : "International"}-Scopus-${accSuffix}`)
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-full bg-background text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Conference Registration</h1>

        {/* ── Tab Bar ──────────────────────────────────────────────── */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-gray-100 rounded-xl p-1.5 gap-1.5 shadow-inner border border-gray-200">
            <button
              onClick={() => setActiveTab("without")}
              className={`relative px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 focus:outline-none
                ${activeTab === "without"
                  ? "bg-white text-blue-800 shadow-md border border-blue-200"
                  : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
                }`}
            >
              <span className="relative z-10">Without Accommodation</span>
            </button>
            <button
              onClick={() => setActiveTab("with")}
              className={`relative px-6 py-3 rounded-lg text-base font-semibold transition-all duration-300 focus:outline-none
                ${activeTab === "with"
                  ? "bg-white text-green-800 shadow-md border border-green-200"
                  : "text-gray-500 hover:text-green-600 hover:bg-gray-50"
                }`}
            >
              <span className="relative z-10">With Accommodation</span>
            </button>
          </div>
        </div>

        {/* ── WITHOUT ACCOMMODATION TAB ─────────────────────────── */}
        {activeTab === "without" && (
          <div className="mb-16">
            <div className="p-6 bg-blue-100 max-w-3xl mx-auto mb-8 rounded-lg border-2 border-blue-300">
              <h2 className="text-center text-blue-900 font-bold text-2xl mb-2">Conference Fees</h2>
              <p className="text-center text-blue-800 text-lg">Without Accommodation</p>
            </div>

            {renderParticipantGroup("local", tickets.withoutAccommodation.local, "No-Acc")}
            {renderParticipantGroup("international", tickets.withoutAccommodation.international, "No-Acc")}
          </div>
        )}

        {/* ── WITH ACCOMMODATION TAB ────────────────────────────── */}
        {activeTab === "with" && (
          <div className="mb-16">
            <div className="p-6 bg-green-100 max-w-3xl mx-auto mb-8 rounded-lg border-2 border-green-300">
              <h2 className="text-center text-green-900 font-bold text-2xl mb-2">Conference Fees</h2>
              <p className="text-center text-green-800 text-lg">With Accommodation</p>
            </div>

            {renderParticipantGroup("local", tickets.withAccommodation.local, "With-Acc")}
            {renderParticipantGroup("international", tickets.withAccommodation.international, "With-Acc")}
          </div>
        )}

        {/* ── Custom Payment Section ────────────────────────────── */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Custom Payment</h2>
          <div className="max-w-md mx-auto">
            <Card className="bg-blue-50 border-blue-200 shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Pay Custom Amount</h3>
                <p className="text-sm text-blue-700 mb-4 text-center">
                  Enter any amount for donations, additional services, or custom payments
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="customAmount" className="block text-sm font-medium text-blue-800 mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700 font-medium">$</span>
                      <input
                        type="number"
                        id="customAmount"
                        min="1"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                    onClick={() => handleCustomPayment()}
                    disabled={!customAmount || Number.parseFloat(customAmount) <= 0 || isLoading === "custom"}
                  >
                    {isLoading === "custom" ? "Processing..." : `Pay $${customAmount || "0.00"}`}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* ── Info Notices ───────────────────────────────────────── */}
        <div className="space-y-4 max-w-4xl mx-auto mt-8">
          <div className="p-4 bg-blue-100 rounded-lg flex justify-center items-center border border-blue-300">
            <h1 className="text-center text-blue-800 font-semibold inline-flex gap-2 text-lg">
              <Info className="w-5 h-5 mt-0.5" />
              All prices are in USD and include conference materials
            </h1>
          </div>

          <div className="p-4 bg-amber-100 rounded-lg flex justify-center items-center border border-amber-300">
            <h1 className="text-center text-amber-800 font-semibold inline-flex gap-2 text-lg">
              <Info className="w-5 h-5 mt-0.5" />
              N.B: For Group Discounts Kindly connect with the Coordinator (Also avail existing offers as an outstanding contributor).
            </h1>
          </div>
        </div>
      </div>

      {selectedTicket && (
        <CCavenuePaymentForm
          isOpen={isPopupOpen}
          onClose={closePaymentPopup}
          ticketName={`${selectedTicket.name} - ${selectedTicket.mode}`}
          amount={selectedTicket.selectedPrice}
          currency={selectedTicket.currency}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  )
}