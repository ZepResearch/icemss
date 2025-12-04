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

  const tickets = {
    virtual: {
      foreign: [
        {
          name: "Academician",
          earlyBird: 199,
          regular: 219,
          scopusQ3Q4: 719,
          scopusQ1Q2: 1099,
          currency: "USD",
          category: "academician",
          type: "presenter",
          features: [
            "Access to virtual conference platform",
            "Digital conference materials",
            "Premium online networking",
            "Extended recordings access",
            "Opportunity to present research",
            "Certificate of presentation",
          ],
        },
        {
          name: "Student",
          earlyBird: 149,
          regular: 169,
          scopusQ3Q4: 669,
          scopusQ1Q2: 1199,
          currency: "USD",
          category: "student",
          type: "presenter",
          features: [
            "Access to virtual conference platform",
            "Digital conference materials",
            "Online networking sessions",
            "Session recordings access",
            "Opportunity to present research",
            "Certificate of presentation",
          ],
        },
        {
          name: "Listener",
          earlyBird: 99,
          regular: 119,
          currency: "USD",
          category: "listener",
          type: "listener",
          features: [
            "Access to virtual conference platform",
            "Digital conference materials",
            "Online networking sessions",
            "Session recordings access",
          ],
        },
      ],
      indian: [
        {
          name: "Presenter",
          regular: 3500,
          currency: "INR",
          category: "presenter",
          type: "presenter",
          features: [
            "Access to virtual conference platform",
            "Digital conference materials",
            "Premium online networking",
            "Extended recordings access",
            "Opportunity to present research",
            "Certificate of presentation",
          ],
        },
        {
          name: "Listener",
          regular: 2500,
          currency: "INR",
          category: "listener",
          type: "listener",
          features: [
            "Access to virtual conference platform",
            "Digital conference materials",
            "Online networking sessions",
            "Session recordings access",
          ],
        },
      ],
    },
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

  const renderTicketCard = (ticket, index) => (
    <div key={index} className="flex h-full">
      <Card className="relative w-full bg-blue-50 overflow-hidden border border-blue-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="space-y-2 mb-4">
            <h3 className="text-xl font-bold tracking-wide text-blue-900">{ticket.name}</h3>
            <div className="text-xs uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block">
              {ticket.type === "listener" ? "ADMIT ONE" : "PRESENTER PASS"}
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

            {ticket.type === "listener" && (
              <div className="space-y-2 mt-4">
                <div className="h-4"></div>
                <div className="h-4"></div>
              </div>
            )}
          </div>

          <div className="space-y-3 mt-auto">
            <div className="bg-blue-200 p-3 rounded-lg border border-blue-400">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-800">Registration Fee</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-blue-800">
                  {ticket.currency === "INR" ? "₹" : "$"}
                  {ticket.regular.toLocaleString()}
                </div>
                <Button
                  size="sm"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-xs px-3 py-2"
                  onClick={() => openPaymentPopup(ticket, "Regular", ticket.regular)}
                  disabled={isLoading === ticket.name + "Regular"}
                >
                  {isLoading === ticket.name + "Regular" ? "Processing..." : "Book Now"}
                </Button>
              </div>
            </div>

            {ticket.type === "presenter" && ticket.scopusQ3Q4 && (
              <>
                <div className="bg-blue-300 p-3 rounded-lg border border-blue-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-900">With Scopus Q3/Q4</span>
                    <Badge className="bg-blue-400 text-blue-900 text-xs">Publication</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-blue-900">
                      {ticket.currency === "INR" ? "₹" : "$"}
                      {ticket.scopusQ3Q4.toLocaleString()}
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-800 hover:bg-blue-900 text-white text-xs px-3 py-2"
                      onClick={() => openPaymentPopup(ticket, "Scopus Q3/Q4", ticket.scopusQ3Q4)}
                      disabled={isLoading === ticket.name + "Scopus Q3/Q4"}
                    >
                      {isLoading === ticket.name + "Scopus Q3/Q4" ? "Processing..." : "Book Now"}
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-400 p-3 rounded-lg border border-blue-600">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-white">With Scopus Q1/Q2</span>
                    <Badge className="bg-blue-500 text-white text-xs">Premium</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-white">
                      {ticket.currency === "INR" ? "₹" : "$"}
                      {ticket.scopusQ1Q2.toLocaleString()}
                    </div>
                    <Button
                      size="sm"
                      className="bg-blue-900 hover:bg-gray-800 text-white text-xs px-3 py-2"
                      onClick={() => openPaymentPopup(ticket, "Scopus Q1/Q2", ticket.scopusQ1Q2)}
                      disabled={isLoading === ticket.name + "Scopus Q1/Q2"}
                    >
                      {isLoading === ticket.name + "Scopus Q1/Q2" ? "Processing..." : "Book Now"}
                    </Button>
                  </div>
                </div>
              </>
            )}

            {ticket.type === "listener" && (
              <div className="space-y-3">
                <div className="h-16"></div>
                <div className="h-16"></div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <div className="min-h-full bg-background text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Conference Registration</h1>
        
        {/* Virtual Only Notice */}
        <div className="p-6 bg-blue-100 max-w-3xl mx-auto mb-8 rounded-lg border-2 border-blue-300">
          <h2 className="text-center text-blue-900 font-bold text-xl mb-2">
            🌐 Virtual Conference Only
          </h2>
          <p className="text-center text-blue-800 text-lg">
            This conference will be conducted virtually. Join us from anywhere in the world!
          </p>
        </div>

        {/* Virtual Tickets */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Virtual Presentation</h2>

          <h3 className="text-2xl font-bold mb-6 text-center">Foreign Participants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
            {tickets.virtual.foreign.map((ticket, index) => renderTicketCard(ticket, index))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Indian Participants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
            {tickets.virtual.indian.map((ticket, index) => renderTicketCard(ticket, index))}
          </div>
        </div>

        {/* Custom Payment Section */}
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
                    disabled={!customAmount || Number.parseFloat(customAmount) <= 0 || isLoading === "custom"}
                  >
                    {isLoading === "custom" ? "Processing..." : `Pay $${customAmount || "0.00"}`}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Info Notice */}
        <div className="p-4 bg-blue-100 max-w-4xl mx-auto mt-8 rounded-lg flex justify-center items-center border border-blue-300">
          <h1 className="text-center text-blue-800 font-semibold inline-flex gap-2 text-lg">
            <Info className="w-5 h-5 mt-0.5" />
            Note: Publication fees are included in Scopus packages for foreign participants.
          </h1>
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