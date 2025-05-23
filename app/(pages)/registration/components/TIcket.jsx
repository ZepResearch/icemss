"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CCavenuePaymentForm } from "@/components/ui/CCavenuePaymentForm"

export default function Ticket() {
  const host = process.env.NEXT_PUBLIC_APP_URL
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)

  const tickets = {
    physical: {
      indian: [
        {
          name: "Student Presenter",
          price: 3000,
          currency: "INR",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "Opportunity to present research",
            "Certificate of presentation",
          ],
        },
        {
          name: "Student Listener",
          price: 2000,
          currency: "INR",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "Networking opportunities",
          ],
        },
        {
          name: "Academician Presenter",
          price: 5000,
          currency: "INR",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "Opportunity to present research",
            "Certificate of presentation",
            "Priority networking sessions",
          ],
        },
        {
          name: "Academician Listener",
          price: 2000,
          currency: "INR",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "Priority networking sessions",
          ],
        },
      ],
      foreign: [
        {
          name: "Student Presenter",
          price: 199,
          currency: "USD",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "Opportunity to present research",
            "Certificate of presentation",
            "International networking events",
          ],
        },
        {
          name: "Student Listener",
          price: 99,
          currency: "USD",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "International networking events",
          ],
        },
        {
          name: "Academician Presenter",
          price: 249,
          currency: "USD",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "Opportunity to present research",
            "Certificate of presentation",
            "VIP networking opportunities",
          ],
        },
        {
          name: "Academician Listener",
          price: 99,
          currency: "USD",
          features: [
            "Access to all physical conference sessions",
            "Conference kit and materials",
            "Lunch and refreshments",
            "VIP networking opportunities",
          ],
        },
      ],
    },
    virtual: {
      foreign: [
        {
          name: "Student",
          price: 99,
          currency: "USD",
          features: [
            "Access to virtual conference platform",
            "Digital conference materials",
            "Online networking sessions",
            "Session recordings access",
          ],
        },
        {
          name: "Academician",
          price: 99,
          currency: "USD",
          features: [
            "Access to virtual conference platform",
            "Digital conference materials",
            "Premium online networking",
            "Extended recordings access",
          ],
        },
      ],
    },
  }

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`
  }

  const openPaymentPopup = (ticket) => {
    setSelectedTicket(ticket)
    setIsPopupOpen(true)
  }

  const closePaymentPopup = () => {
    setIsPopupOpen(false)
    setSelectedTicket(null)
  }

  const handlePaymentSubmit = async (formData) => {
    try {
      setIsLoading(selectedTicket.name)
      const taxRate = 0.05
      const baseAmount = selectedTicket.price
      const taxAmount = baseAmount * taxRate
      const totalAmount = baseAmount + taxAmount

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        name: selectedTicket.name,
        amount: totalAmount.toString(), // Using total amount including tax
        currency: selectedTicket.currency,
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        ...formData,
        language: "EN",
      }

      // Send payment data to the server for email notification
      await fetch("/api/payment-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      // Get the encrypted order from your backend
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

      // Create form and submit
      const form = document.createElement("form")
      form.method = "POST"
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"

      // Add hidden fields
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

  return (
    <div className="min-h-full bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Physical Tickets</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Indian Participants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tickets.physical.indian.map((ticket, index) => (
              <div key={index} className="flex items-center justify-center">
                <Card className="relative w-full bg-blue-50 overflow-hidden border-none">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-wide">{ticket.name}</h3>
                        <div className="text-xs uppercase tracking-wider text-gray-600">ADMIT ONE</div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {ticket.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 flex-shrink-0 text-blue-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <div className="text-2xl font-bold mb-3">
                          {ticket.currency === "INR" ? "₹" : "$"}
                          {ticket.price.toLocaleString()}
                        </div>
                        <Button
                          className="w-full bg-blue-500 hover:bg-blue-600"
                          onClick={() => openPaymentPopup(ticket)}
                          disabled={isLoading === ticket.name}
                        >
                          {isLoading === ticket.name ? "Processing..." : "Book Now"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Foreign Participants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tickets.physical.foreign.map((ticket, index) => (
              <div key={index} className="flex items-center justify-center">
                <Card className="relative w-full bg-blue-50 overflow-hidden border-none">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-wide">{ticket.name}</h3>
                        <div className="text-xs uppercase tracking-wider text-gray-600">ADMIT ONE</div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {ticket.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 flex-shrink-0 text-blue-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <div className="text-2xl font-bold mb-3">
                          {ticket.currency === "INR" ? "₹" : "$"}
                          {ticket.price.toLocaleString()}
                        </div>
                        <Button
                          className="w-full bg-blue-500 hover:bg-blue-600"
                          onClick={() => openPaymentPopup(ticket)}
                          disabled={isLoading === ticket.name}
                        >
                          {isLoading === ticket.name ? "Processing..." : "Book Now"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Virtual Tickets</h1>
        <h2 className="text-2xl font-bold mb-6 text-center">Foreign Participants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tickets.virtual.foreign.map((ticket, index) => (
            <div key={index} className="flex items-center justify-center">
              <Card className="relative w-full bg-blue-50 overflow-hidden border-none">
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-wide">{ticket.name}</h3>
                      <div className="text-xs uppercase tracking-wider text-gray-600">VIRTUAL ACCESS</div>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {ticket.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 flex-shrink-0 text-blue-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <div className="text-2xl font-bold mb-3">
                        {ticket.currency === "INR" ? "₹" : "$"}
                        {ticket.price.toLocaleString()}
                      </div>
                      <Button
                        className="w-full bg-blue-500 hover:bg-blue-600"
                        onClick={() => openPaymentPopup(ticket)}
                        disabled={isLoading === ticket.name}
                      >
                        {isLoading === ticket.name ? "Processing..." : "Book Now"}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="p-4 bg-red-200 max-w-3xl mx-auto mt-8 rounded-lg flex justify-center items-center">
          <h1 className="text-center text-red-600 font-semibold inline-flex gap-2 text-xl">
            <Info />
            N.B: For journal publication separate fee would be charged.
          </h1>
        </div>
      </div>
      {selectedTicket && (
        <CCavenuePaymentForm
          isOpen={isPopupOpen}
          onClose={closePaymentPopup}
          ticketName={selectedTicket.name}
          amount={selectedTicket.price}
          currency={selectedTicket.currency}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  )
}
