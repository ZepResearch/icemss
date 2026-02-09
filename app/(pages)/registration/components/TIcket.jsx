"use client"

import { useState } from "react"
import { Check, Info, Monitor, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CCavenuePaymentForm } from "@/components/ui/CCavenuePaymentForm"

export default function Ticket() {
  const host = process.env.NEXT_PUBLIC_APP_URL
  const [isLoading, setIsLoading] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [activeTab, setActiveTab] = useState("physical")

  // Simplified ticket structure
  const ticketCategories = [
    {
      name: "Academician",
      category: "academician",
      physical: { local: 349, international: 399, localWithAccom: 499, intlWithAccom: 549 },
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

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`
  }

  const openPaymentPopup = (ticketName, category, price, attendanceType, participantType, accommodation) => {
    const ticket = {
      name: ticketName,
      category: category,
      selectedPrice: price,
      priceType: `${attendanceType} - ${participantType}${accommodation ? " (With Accommodation)" : ""}`,
      currency: "USD",
    }
    setSelectedTicket(ticket)
    setIsPopupOpen(true)
  }

  const closePaymentPopup = () => {
    setIsPopupOpen(false)
    setSelectedTicket(null)
  }

  const handlePaymentSubmit = async (formData) => {
    try {
      setIsLoading(true)
      const taxRate = 0.06
      const baseAmount = selectedTicket.selectedPrice
      const taxAmount = baseAmount * taxRate
      const totalAmount = baseAmount + taxAmount

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        name: `${selectedTicket.name} - ${selectedTicket.priceType}`,
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
      setIsLoading(false)
      closePaymentPopup()
    }
  }

  const handleCustomPayment = async () => {
    if (!customAmount || Number.parseFloat(customAmount) <= 0) {
      alert("Please enter a valid amount")
      return
    }

    const customTicket = {
      name: "Custom Payment",
      selectedPrice: Number.parseFloat(customAmount),
      priceType: "Custom Amount",
      currency: "USD",
    }

    setSelectedTicket(customTicket)
    setIsPopupOpen(true)
  }

  return (
    <div className="min-h-full bg-background text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Conference Registration</h1>

        <Tabs defaultValue="physical" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-blue-100 p-1 rounded-full">
              <TabsTrigger
                value="physical"
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2"
              >
                <Users className="mr-2 h-4 w-4" />
                Physical Attendance
              </TabsTrigger>
              <TabsTrigger
                value="virtual"
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2"
              >
                <Monitor className="mr-2 h-4 w-4" />
                Virtual Attendance
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Physical Attendance Tab */}
          <TabsContent value="physical" className="mt-0">
            <div className="p-6 bg-blue-100 max-w-4xl mx-auto mb-8 rounded-lg border-2 border-blue-300">
              <h2 className="text-center text-blue-900 font-bold text-xl mb-2">
                Physical Attendance - Conference Fees
              </h2>
              <p className="text-center text-blue-800">
                In-person participation with full conference access
              </p>
            </div>

            {/* Without Accommodation Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-700">Without Accommodation</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-center font-semibold">Local (USD)</th>
                      <th className="px-6 py-4 text-center font-semibold">International (USD)</th>
                      <th className="px-6 py-4 text-center font-semibold">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketCategories.map((ticket, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                        <td className="px-6 py-4 font-semibold text-blue-900 border-b border-blue-200">
                          {ticket.name}
                        </td>
                        <td className="px-6 py-4 text-center border-b border-blue-200">
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-lg font-bold text-blue-800">
                              ${ticket.physical.local}
                            </span>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={() =>
                                openPaymentPopup(
                                  ticket.name,
                                  ticket.category,
                                  ticket.physical.local,
                                  "Physical",
                                  "Local",
                                  false
                                )
                              }
                              disabled={isLoading}
                            >
                              Book Now
                            </Button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center border-b border-blue-200">
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-lg font-bold text-blue-800">
                              ${ticket.physical.international}
                            </span>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={() =>
                                openPaymentPopup(
                                  ticket.name,
                                  ticket.category,
                                  ticket.physical.international,
                                  "Physical",
                                  "International",
                                  false
                                )
                              }
                              disabled={isLoading}
                            >
                              Book Now
                            </Button>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b border-blue-200">
                          <ul className="text-sm text-left space-y-1">
                            {ticket.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <Check className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                            {ticket.features.length > 3 && (
                              <li className="text-blue-600 text-xs">
                                +{ticket.features.length - 3} more features
                              </li>
                            )}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* With Accommodation Table */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-700">With Accommodation</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-center font-semibold">Local (USD)</th>
                      <th className="px-6 py-4 text-center font-semibold">International (USD)</th>
                      <th className="px-6 py-4 text-center font-semibold">Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketCategories.map((ticket, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                        <td className="px-6 py-4 font-semibold text-blue-900 border-b border-blue-200">
                          {ticket.name}
                        </td>
                        <td className="px-6 py-4 text-center border-b border-blue-200">
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-lg font-bold text-blue-800">
                              ${ticket.physical.localWithAccom}
                            </span>
                            <Button
                              size="sm"
                              className="bg-blue-700 hover:bg-blue-800 text-white"
                              onClick={() =>
                                openPaymentPopup(
                                  ticket.name,
                                  ticket.category,
                                  ticket.physical.localWithAccom,
                                  "Physical",
                                  "Local",
                                  true
                                )
                              }
                              disabled={isLoading}
                            >
                              Book Now
                            </Button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center border-b border-blue-200">
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-lg font-bold text-blue-800">
                              ${ticket.physical.intlWithAccom}
                            </span>
                            <Button
                              size="sm"
                              className="bg-blue-700 hover:bg-blue-800 text-white"
                              onClick={() =>
                                openPaymentPopup(
                                  ticket.name,
                                  ticket.category,
                                  ticket.physical.intlWithAccom,
                                  "Physical",
                                  "International",
                                  true
                                )
                              }
                              disabled={isLoading}
                            >
                              Book Now
                            </Button>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b border-blue-200">
                          <ul className="text-sm text-left space-y-1">
                            <li className="flex items-start gap-1">
                              <Check className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">Accommodation included</span>
                            </li>
                            {ticket.features.slice(0, 2).map((feature, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <Check className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                            {ticket.features.length > 2 && (
                              <li className="text-blue-600 text-xs">
                                +{ticket.features.length - 2} more features
                              </li>
                            )}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Important Note */}
            <div className="max-w-4xl mx-auto">
              <div className="p-4 bg-blue-100 rounded-lg flex justify-center items-center border border-blue-300">
                <h3 className="text-center text-blue-800 font-semibold inline-flex gap-2 text-base">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  N.B.: For group discounts, kindly connect with the coordinator. (Exciting offers are also
                  available for outstanding contributors.)
                </h3>
              </div>
            </div>
          </TabsContent>

          {/* Virtual Attendance Tab */}
          <TabsContent value="virtual" className="mt-0">
            <div className="p-6 bg-blue-100 max-w-4xl mx-auto mb-8 rounded-lg border-2 border-blue-300">
              <h2 className="text-center text-blue-900 font-bold text-xl mb-2">
                Virtual Attendance - Conference Fees
              </h2>
              <p className="text-center text-blue-800">
                Online participation with digital access to all sessions
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-center font-semibold">Local (USD)</th>
                    <th className="px-6 py-4 text-center font-semibold">International (USD)</th>
                    <th className="px-6 py-4 text-center font-semibold">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketCategories.map((ticket, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-blue-900 border-b border-blue-200">
                        {ticket.name}
                      </td>
                      <td className="px-6 py-4 text-center border-b border-blue-200">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-lg font-bold text-blue-800">${ticket.virtual.local}</span>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() =>
                              openPaymentPopup(
                                ticket.name,
                                ticket.category,
                                ticket.virtual.local,
                                "Virtual",
                                "Local",
                                false
                              )
                            }
                            disabled={isLoading}
                          >
                            Book Now
                          </Button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center border-b border-blue-200">
                        <div className="flex flex-col items-center gap-2">
                          <span className="text-lg font-bold text-blue-800">
                            ${ticket.virtual.international}
                          </span>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={() =>
                              openPaymentPopup(
                                ticket.name,
                                ticket.category,
                                ticket.virtual.international,
                                "Virtual",
                                "International",
                                false
                              )
                            }
                            disabled={isLoading}
                          >
                            Book Now
                          </Button>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-b border-blue-200">
                        <ul className="text-sm text-left space-y-1">
                          <li className="flex items-start gap-1">
                            <Check className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">Online conference access</span>
                          </li>
                          {ticket.features.slice(0, 2).map((feature, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <Check className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                          {ticket.features.length > 2 && (
                            <li className="text-blue-600 text-xs">
                              +{ticket.features.length - 2} more features
                            </li>
                          )}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>

        {/* Custom Payment Section */}
        <div className="mb-12 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Custom Payment</h2>
          <div className="max-w-md mx-auto">
            <Card className="bg-blue-50 border-2 border-blue-200 shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Pay Custom Amount</h3>
                <p className="text-sm text-blue-700 mb-4 text-center">
                  Enter any amount for donations, additional services, or custom payments
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="customAmount" className="block text-sm font-medium text-blue-800 mb-2">
                      Amount (USD)
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
                        className="w-full pl-8 pr-4 py-3 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                    onClick={() => handleCustomPayment()}
                    disabled={!customAmount || Number.parseFloat(customAmount) <= 0 || isLoading}
                  >
                    {isLoading ? "Processing..." : `Pay $${customAmount || "0.00"}`}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {selectedTicket && (
        <CCavenuePaymentForm
          isOpen={isPopupOpen}
          onClose={closePaymentPopup}
          ticketName={`${selectedTicket.name} - ${selectedTicket.priceType}`}
          amount={selectedTicket.selectedPrice}
          currency={selectedTicket.currency}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  )
}