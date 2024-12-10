"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Diamond, Award, Medal } from 'lucide-react'

const packages = [
  {
    name: "Platinum",
    price: 1245000,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    icon: Star,
    benefits: [
      "5 VIP passes for the conference",
      "Prominent logo placement on all conference materials",
      "Exclusive sponsorship of a keynote session",
      "Full-page ad in the conference proceedings",
      "Dedicated exhibition space (6x3m)",
      "5-minute speaking slot during the opening ceremony",
      "Access to VIP networking events",
      "Company profile featured on the conference website",
      "Social media promotion package"
    ]
  },
  {
    name: "Gold",
    price: 996000,
    color: "bg-gradient-to-br from-yellow-300 to-yellow-500",
    icon: Diamond,
    benefits: [
      "3 VIP passes for the conference",
      "Logo placement on main conference banners",
      "Sponsorship of a panel discussion",
      "Half-page ad in the conference proceedings",
      "Exhibition space (3x3m)",
      "3-minute speaking slot during a breakout session",
      "Access to exclusive networking events",
      "Company logo and description on the conference website",
      "Social media mentions"
    ]
  },
  {
    name: "Silver",
    price: 830000,
    color: "bg-gradient-to-br from-yellow-200 to-yellow-400",
    icon: Award,
    benefits: [
      "2 VIP passes for the conference",
      "Logo placement on conference schedule",
      "Quarter-page ad in the conference proceedings",
      "Shared exhibition space (table-top display)",
      "Recognition during opening and closing ceremonies",
      "Company name and logo on the conference website",
      "Inclusion in conference social media posts"
    ]
  },
  {
    name: "Bronze",
    price: 622500,
    color: "bg-gradient-to-br from-yellow-100 to-yellow-300",
    icon: Medal,
    benefits: [
      "1 VIP pass for the conference",
      "Logo placement in conference program",
      "Acknowledgment in conference proceedings",
      "Shared exhibition space (literature display)",
      "Company name listed on the conference website",
      "Mention in post-conference report"
    ]
  }
]

export function SponsorshipPackages() {
  const host = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(null);

  const generateOrderId = () => {
    return `ICEMSS${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };

  const paymentCCAvenue = async (packageName, amount) => {
    try {
      setIsLoading(packageName);

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        amount: amount,
        currency: "INR",
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        billing_email: "",
        billing_name: "",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        billing_country: "",
        billing_tel: "",
        language: "EN",
      };

      const response = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error("Failed to encrypt order data");
      }

      const { encRequest } = await response.json();

      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

      const fields = {
        encRequest,
        access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {packages.map((pkg, index) => (
        <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-yellow-400">
          <CardHeader className={`${pkg.color} text-yellow-900 p-6`}>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
              <pkg.icon className="h-8 w-8" />
            </div>
            <p className="text-3xl font-extrabold mt-2">₹{(pkg.price / 100000).toFixed(2)} Lakh</p>
          </CardHeader>
          <CardContent className="flex-grow p-6">
            <ul className="space-y-2">
              {pkg.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-6">
            <Button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900"
              onClick={() => paymentCCAvenue(pkg.name, pkg.price)}
              disabled={isLoading === pkg.name}
            >
              {isLoading === pkg.name ? "Processing..." : `Choose ${pkg.name}`}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

