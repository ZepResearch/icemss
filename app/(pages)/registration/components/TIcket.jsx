"use client"

import { useState } from "react"
import { Check, Info, Home, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CCavenuePaymentForm } from "@/components/ui/CCavenuePaymentForm"

export default function Ticket() {
  const host = process.env.NEXT_PUBLIC_APP_URL
  const [isLoading, setIsLoading] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [paymentPurpose, setPaymentPurpose] = useState("")
  const [activeTab, setActiveTab] = useState("without-accommodation")

  const tickets = {
    withoutAccommodation: {
      local: [
        {
          name: "Academician",
          physical: 349,
          virtual: 269,
          currency: "USD",
          category: "academician",
          type: "local",
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
          physical: 299,
          virtual: 229,
          currency: "USD",
          category: "student",
          type: "local",
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
          physical: 269,
          virtual: 179,
          currency: "USD",
          category: "delegate",
          type: "local",
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
          physical: 1149,
          virtual: 1049,
          currency: "USD",
          category: "scopus-q3-q4",
          type: "local",
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
          physical: 1849,
          virtual: 1749,
          currency: "USD",
          category: "scopus-q1-q2",
          type: "local",
          features: [
            "Full conference access",
            "Scopus Q1 & Q2 publication",
            "Premium networking opportunities",
            "Workshop materials",
            "Certificate of participation",
            "Priority presentation slot",
          ],
        },
      ],
      international: [
        {
          name: "Academician",
          physical: 399,
          virtual: 329,
          currency: "USD",
          category: "academician",
          type: "international",
          features: [
            "Full conference access",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
            "Access to presentation materials",
          ],
        },
        {
          name: "Student",
          physical: 349,
          virtual: 269,
          currency: "USD",
          category: "student",
          type: "international",
          features: [
            "Conference access",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
            "Student discount applied",
          ],
        },
        {
          name: "Delegate",
          physical: 299,
          virtual: 229,
          currency: "USD",
          category: "delegate",
          type: "international",
          features: [
            "Conference access",
            "International networking",
            "Lunch and refreshments",
            "Certificate of attendance",
            "Access to presentation materials",
          ],
        },
        {
          name: "With Scopus Q3 & Q4",
          physical: 1199,
          virtual: 1099,
          currency: "USD",
          category: "scopus-q3-q4",
          type: "international",
          features: [
            "Full conference access",
            "Scopus Q3 & Q4 publication",
            "Premium international networking",
            "Workshop materials",
            "Certificate of participation",
            "Priority presentation slot",
          ],
        },
        {
          name: "With Scopus Q1 & Q2",
          physical: 1899,
          virtual: 1799,
          currency: "USD",
          category: "scopus-q1-q2",
          type: "international",
          features: [
            "Full conference access",
            "Scopus Q1 & Q2 publication",
            "Premium international networking",
            "Workshop materials",
            "Certificate of participation",
            "Priority presentation slot",
          ],
        },
      ],
    },
    withAccommodation: {
      local: [
        {
          name: "Academician",
          physical: 499,
          currency: "USD",
          category: "academician",
          type: "local",
          features: [
            "Full conference access",
            "Accommodation included",
            "Networking opportunities",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
          ],
        },
        {
          name: "Student",
          physical: 449,
          currency: "USD",
          category: "student",
          type: "local",
          features: [
            "Conference access",
            "Accommodation included",
            "Networking opportunities",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
          ],
        },
        {
          name: "Delegate",
          physical: 419,
          currency: "USD",
          category: "delegate",
          type: "local",
          features: [
            "Conference access",
            "Accommodation included",
            "Networking opportunities",
            "Lunch and refreshments",
            "Certificate of attendance",
          ],
        },
        {
          name: "With Scopus Q3 & Q4",
          physical: 1299,
          currency: "USD",
          category: "scopus-q3-q4",
          type: "local",
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q3 & Q4 publication",
            "Premium networking opportunities",
            "Workshop materials",
            "Priority presentation slot",
          ],
        },
        {
          name: "With Scopus Q1 & Q2",
          physical: 1999,
          currency: "USD",
          category: "scopus-q1-q2",
          type: "local",
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q1 & Q2 publication",
            "Premium networking opportunities",
            "Workshop materials",
            "Priority presentation slot",
          ],
        },
      ],
      international: [
        {
          name: "Academician",
          physical: 549,
          currency: "USD",
          category: "academician",
          type: "international",
          features: [
            "Full conference access",
            "Accommodation included",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
          ],
        },
        {
          name: "Student",
          physical: 499,
          currency: "USD",
          category: "student",
          type: "international",
          features: [
            "Conference access",
            "Accommodation included",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
          ],
        },
        {
          name: "Delegate",
          physical: 449,
          currency: "USD",
          category: "delegate",
          type: "international",
          features: [
            "Conference access",
            "Accommodation included",
            "International networking",
            "Lunch and refreshments",
            "Certificate of attendance",
          ],
        },
        {
          name: "With Scopus Q3 & Q4",
          physical: 1399,
          currency: "USD",
          category: "scopus-q3-q4",
          type: "international",
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q3 & Q4 publication",
            "Premium international networking",
            "Workshop materials",
            "Priority presentation slot",
          ],
        },
        {
          name: "With Scopus Q1 & Q2",
          physical: 2049,
          currency: "USD",
          category: "scopus-q1-q2",
          type: "international",
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q1 & Q2 publication",
            "Premium international networking",
            "Workshop materials",
            "Priority presentation slot",
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

  const renderTicketCard = (ticket, index, hasVirtual = false) => (
    <div key={index} className="flex h-full">
      <Card className="relative w-full bg-blue-50 overflow-hidden border border-blue-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="space-y-2 mb-4">
            <h3 className="text-xl font-bold tracking-wide text-blue-900">{ticket.name}</h3>
            <div className="flex gap-2 flex-wrap">
              <div className="text-xs uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block">
                {ticket.type === "local" ? "LOCAL" : "INTERNATIONAL"}
              </div>
              <div className="text-xs uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-1 rounded-full inline-block">
                {ticket.category}
              </div>
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
            <div className="bg-blue-200 p-3 rounded-lg border border-blue-400">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-800">Physical Attendance</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-blue-800">
                  ${ticket.physical.toLocaleString()}
                </div>
                <Button
                  size="sm"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-xs px-3 py-2"
                  onClick={() => openPaymentPopup(ticket, "Physical", ticket.physical)}
                  disabled={isLoading === ticket.name + "Physical"}
                >
                  {isLoading === ticket.name + "Physical" ? "Processing..." : "Book Now"}
                </Button>
              </div>
            </div>

            {hasVirtual && ticket.virtual && (
              <div className="bg-blue-300 p-3 rounded-lg border border-blue-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-900">Virtual Attendance</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-blue-900">
                    ${ticket.virtual.toLocaleString()}
                  </div>
                  <Button
                    size="sm"
                    className="bg-blue-800 hover:bg-blue-900 text-white text-xs px-3 py-2"
                    onClick={() => openPaymentPopup(ticket, "Virtual", ticket.virtual)}
                    disabled={isLoading === ticket.name + "Virtual"}
                  >
                    {isLoading === ticket.name + "Virtual" ? "Processing..." : "Book Now"}
                  </Button>
                </div>
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
        <h1 className="text-4xl font-bold text-center mb-8">Conference Registration</h1>
        
        <Tabs defaultValue="without-accommodation" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-blue-100 p-1 rounded-full">
              <TabsTrigger
                value="without-accommodation"
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2"
              >
                <Presentation className="mr-2 h-4 w-4" />
                Without Accommodation
              </TabsTrigger>
              <TabsTrigger
                value="with-accommodation"
                className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2"
              >
                <Home className="mr-2 h-4 w-4" />
                With Accommodation
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Without Accommodation Tab */}
          <TabsContent value="without-accommodation" className="mt-0">
            <div className="p-6 bg-blue-100 max-w-3xl mx-auto mb-8 rounded-lg border-2 border-blue-300">
              <h2 className="text-center text-blue-900 font-bold text-xl mb-2">
                Conference Fees (Without Accommodation)
              </h2>
              <p className="text-center text-blue-800 text-lg">
                Choose between physical or virtual participation options
              </p>
            </div>

            {/* Local Participants */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">Local Participants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {tickets.withoutAccommodation.local.map((ticket, index) => 
                  renderTicketCard(ticket, index, true)
                )}
              </div>
            </div>

            {/* International Participants */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">International Participants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {tickets.withoutAccommodation.international.map((ticket, index) => 
                  renderTicketCard(ticket, index, true)
                )}
              </div>
            </div>
          </TabsContent>

          {/* With Accommodation Tab */}
          <TabsContent value="with-accommodation" className="mt-0">
            <div className="p-6 bg-blue-100 max-w-3xl mx-auto mb-8 rounded-lg border-2 border-blue-300">
              <h2 className="text-center text-blue-900 font-bold text-xl mb-2">
                Conference Fees (With Accommodation)
              </h2>
              <p className="text-center text-blue-800 text-lg">
                Physical participation with accommodation included
              </p>
            </div>

            {/* Local Participants */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">Local Participants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {tickets.withAccommodation.local.map((ticket, index) => 
                  renderTicketCard(ticket, index, false)
                )}
              </div>
            </div>

            {/* International Participants */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">International Participants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {tickets.withAccommodation.international.map((ticket, index) => 
                  renderTicketCard(ticket, index, false)
                )}
              </div>
            </div>

            {/* Important Note */}
            <div className="max-w-3xl mx-auto">
              <div className="p-4 bg-blue-100 rounded-lg flex justify-center items-center border border-blue-300">
                <h1 className="text-center text-blue-800 font-semibold inline-flex gap-2 text-lg">
                  <Info className="w-5 h-5 mt-0.5" />
                  N.B.: For group discounts, kindly connect with the coordinator. (Exciting offers are also available for outstanding contributors.)
                </h1>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Custom Payment Section */}
        <div className="mb-12 mt-16">
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