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
  const [activeTab, setActiveTab] = useState("physical") // "physical" | "virtual"
  const [attendeeType, setAttendeeType] = useState("international") // "local" | "international" | "localWithAccom" | "intlWithAccom"

  const ticketCategories = [
    {
      name: "Academician",
      category: "academician",
      physical: { local: 349, international: 399, localWithAccom: 499, intlWithAccom: 549 },
      earlyBird: { local: 229, international: 249, localWithAccom: 349, intlWithAccom: 399 },
      virtual: { local: 269, international: 329 },
      features: [
        "Full conference access",
        "Networking opportunities",
        "Workshop materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Access to presentation materials",
      ],
    },
    {
      name: "Student",
      category: "student",
      physical: { local: 299, international: 349, localWithAccom: 449, intlWithAccom: 499 },
      earlyBird: { local: 179, international: 219, localWithAccom: 299, intlWithAccom: 349 },
      virtual: { local: 229, international: 269 },
      features: [
        "Conference access",
        "Networking opportunities",
        "Workshop materials",
        "Lunch and refreshments",
        "Certificate of participation",
        "Student discount applied",
      ],
    },
    {
      name: "Delegate",
      category: "delegate",
      physical: { local: 269, international: 299, localWithAccom: 419, intlWithAccom: 449 },
      earlyBird: { local: 159, international: 169, localWithAccom: 279, intlWithAccom: 299 },
      virtual: { local: 179, international: 229 },
      features: [
        "Conference access",
        "Networking opportunities",
        "Lunch and refreshments",
        "Certificate of attendance",
        "Access to presentation materials",
      ],
    },
    {
      name: "With Scopus Q3 & Q4",
      category: "scopus-q3-q4",
      physical: { local: 1149, international: 1199, localWithAccom: 1299, intlWithAccom: 1399 },
      earlyBird: { local: 999, international: 1049, localWithAccom: 1149, intlWithAccom: 1249 },
      virtual: { local: 1049, international: 1099 },
      features: [
        "Full conference access",
        "Scopus Q3 & Q4 publication",
        "Premium networking opportunities",
        "Workshop materials",
        "Certificate of participation",
        "Priority presentation slot",
      ],
    },
    {
      name: "With Scopus Q1 & Q2",
      category: "scopus-q1-q2",
      physical: { local: 1849, international: 1899, localWithAccom: 1999, intlWithAccom: 2049 },
      earlyBird: { local: 1699, international: 1749, localWithAccom: 1849, intlWithAccom: 1899 },
      virtual: { local: 1749, international: 1799 },
      features: [
        "Full conference access",
        "Scopus Q1 & Q2 publication",
        "Premium networking opportunities",
        "Workshop materials",
        "Certificate of participation",
        "Priority presentation slot",
      ],
    },
  ]

  // For virtual, only local/international apply (no accommodation options)
  const physicalAttendeeOptions = [
    { key: "local", label: "Local" },
    { key: "international", label: "International" },
    { key: "localWithAccom", label: "Local + Accommodation" },
    { key: "intlWithAccom", label: "Intl. + Accommodation" },
  ]

  const virtualAttendeeOptions = [
    { key: "local", label: "Local" },
    { key: "international", label: "International" },
  ]

  const attendeeOptions = activeTab === "virtual" ? virtualAttendeeOptions : physicalAttendeeOptions

  const getPrice = (ticket, priceType) => {
    if (activeTab === "virtual") {
      // Virtual has no earlyBird in data, use virtual prices only
      const key = attendeeType === "local" ? "local" : "international"
      return ticket.virtual[key]
    }
    const source = priceType === "earlyBird" ? ticket.earlyBird : ticket.physical
    return source[attendeeType] ?? null
  }

  const getSavings = (ticket) => {
    if (activeTab === "virtual") return null
    const standard = ticket.physical[attendeeType]
    const early = ticket.earlyBird[attendeeType]
    if (standard == null || early == null) return null
    return standard - early
  }

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`
  }

  const openPaymentPopup = (ticket, priceType, price) => {
    setSelectedTicket({ ...ticket, selectedPrice: price, priceType })
    setIsPopupOpen(true)
  }

  const closePaymentPopup = () => {
    setIsPopupOpen(false)
    setSelectedTicket(null)
  }

  const handlePaymentSubmit = async (formData) => {
    try {
      setIsLoading(selectedTicket.name + selectedTicket.priceType)
      const taxRate = 0.05
      const baseAmount = selectedTicket.selectedPrice
      const taxAmount = baseAmount * taxRate
      const totalAmount = baseAmount + taxAmount

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        name: `${selectedTicket.name} - ${selectedTicket.priceType}`,
        amount: totalAmount.toString(),
        currency: "USD",
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        ...formData,
        language: "EN",
      }

      await fetch("/api/payment-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      })

      const response = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      })

      if (!response.ok) throw new Error("Failed to encrypt order data")

      const { encRequest } = await response.json()

      const form = document.createElement("form")
      form.method = "POST"
      form.action =
        "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"

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
        priceType: paymentPurpose || "Custom Amount",
        currency: "USD",
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

  const renderTicketCard = (ticket, index) => {
    const savings = getSavings(ticket)
    const isVirtual = activeTab === "virtual"
    const standardPrice = isVirtual ? getPrice(ticket, "standard") : getPrice(ticket, "standard")
    const earlyBirdPrice = isVirtual ? null : getPrice(ticket, "earlyBird")

    return (
      <div key={index} className="flex h-full">
        <Card className="relative w-full bg-blue-50 overflow-hidden border border-blue-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
          <div className="p-6 flex flex-col h-full">
            <div className="space-y-2 mb-4">
              <h3 className="text-xl font-bold tracking-wide text-blue-900">{ticket.name}</h3>
              <div className="text-xs uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block">
                {isVirtual ? "VIRTUAL PASS" : "PHYSICAL PASS"}
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
              {/* Early Bird — physical only */}
              {!isVirtual && earlyBirdPrice != null && (
                <div className="bg-blue-200 p-3 rounded-lg border border-blue-400">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-800">Early Bird</span>
                    {savings != null && savings > 0 && (
                      <Badge className="bg-green-500 text-white text-xs">Save ${savings}</Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-blue-800">
                      ${earlyBirdPrice.toLocaleString()}
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-700 hover:bg-blue-800 text-white text-xs px-3 py-2"
                      onClick={() => openPaymentPopup(ticket, "Early Bird", earlyBirdPrice)}
                      disabled={isLoading === ticket.name + "Early Bird"}
                    >
                      {isLoading === ticket.name + "Early Bird" ? "Processing..." : "Book Now"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Standard / Virtual price */}
              {standardPrice != null && (
                <div className="bg-blue-300 p-3 rounded-lg border border-blue-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-900">
                      {isVirtual ? "Virtual Price" : "Standard Price"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-blue-900">
                      ${standardPrice.toLocaleString()}
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-800 hover:bg-blue-900 text-white text-xs px-3 py-2"
                      onClick={() =>
                        openPaymentPopup(
                          ticket,
                          isVirtual ? "Virtual" : "Standard",
                          standardPrice
                        )
                      }
                      disabled={isLoading === ticket.name + (isVirtual ? "Virtual" : "Standard")}
                    >
                      {isLoading === ticket.name + (isVirtual ? "Virtual" : "Standard")
                        ? "Processing..."
                        : "Book Now"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-full bg-background text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Conference Registration</h1>

        {/* Physical/Virtual Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border border-blue-300 bg-blue-50 p-1 gap-1">
            <button
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${activeTab === "physical"
                  ? "bg-blue-700 text-white shadow"
                  : "text-blue-700 hover:bg-blue-100"
                }`}
              onClick={() => {
                setActiveTab("physical")
                setAttendeeType("international")
              }}
            >
              Physical
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${activeTab === "virtual"
                  ? "bg-blue-700 text-white shadow"
                  : "text-blue-700 hover:bg-blue-100"
                }`}
              onClick={() => {
                setActiveTab("virtual")
                setAttendeeType("international")
              }}
            >
              Virtual
            </button>
          </div>
        </div>

        {/* Conference Mode Notice */}
        <div className="p-6 bg-blue-100 max-w-3xl mx-auto mb-6 rounded-lg border-2 border-blue-300">
          <h2 className="text-center text-blue-900 font-bold text-xl mb-2">
            {activeTab === "physical" ? "Physical Conference" : "Virtual Conference"}
          </h2>
          <p className="text-center text-blue-800 text-lg">
            {activeTab === "physical"
              ? "Join us in person for an enriching conference experience!"
              : "Attend from anywhere in the world via our virtual platform!"}
          </p>
        </div>

        {/* Attendee Type Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {attendeeOptions.map((opt) => (
            <button
              key={opt.key}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${attendeeType === opt.key
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
                }`}
              onClick={() => setAttendeeType(opt.key)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Tickets */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Conference Tickets</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
            {ticketCategories.map((ticket, index) => renderTicketCard(ticket, index))}
          </div>
        </div>

        {/* Custom Payment Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Custom Payment</h2>
          <div className="max-w-md mx-auto">
            <Card className="bg-blue-50 border-blue-200 shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  Pay Custom Amount
                </h3>
                <p className="text-sm text-blue-700 mb-4 text-center">
                  Enter any amount for donations, additional services, or custom payments
                </p>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="customAmount"
                      className="block text-sm font-medium text-blue-800 mb-2"
                    >
                      Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-700 font-medium">
                        $
                      </span>
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
                    disabled={
                      !customAmount ||
                      Number.parseFloat(customAmount) <= 0 ||
                      isLoading === "custom"
                    }
                  >
                    {isLoading === "custom" ? "Processing..." : `Pay $${customAmount || "0.00"}`}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Info Notices */}
        <div className="space-y-4 max-w-4xl mx-auto mt-8">
          <div className="p-4 bg-blue-100 rounded-lg flex justify-center items-center border border-blue-300">
            <h1 className="text-center text-blue-800 font-semibold inline-flex gap-2 text-lg">
              <Info className="w-5 h-5 mt-0.5" />
              Early Bird pricing available on all Physical ticket types!
            </h1>
          </div>

          <div className="p-4 bg-green-100 rounded-lg flex justify-center items-center border border-green-300">
            <h1 className="text-center text-green-800 font-semibold inline-flex gap-2 text-lg">
              <Info className="w-5 h-5 mt-0.5" />
              Virtual attendance options are now available. Select the Virtual tab above!
            </h1>
          </div>
        </div>
      </div>

      {selectedTicket && (
        <CCavenuePaymentForm
          isOpen={isPopupOpen}
          onClose={closePaymentPopup}
          ticketName={`${selectedTicket.name} - ${selectedTicket.priceType}`}
          amount={selectedTicket.selectedPrice}
          currency="USD"
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  )
}