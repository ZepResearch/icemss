"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Payment() {
  const host = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };

  const paymentCCAvenue = async () => {
    try {
      setIsLoading(true);

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        amount: "50",
        currency: "INR",
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        billing_email: "johndoe@gmail.com",
        billing_name: "John Doe",
        billing_address: "Address Details",
        billing_city: "Ahmedabad",
        billing_state: "Gujarat",
        billing_zip: "380002",
        billing_country: "India",
        billing_tel: "1234567890",
        language: "EN",
      };

      // First, get the encrypted order from your backend
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

      // Create form and submit
      const form = document.createElement("form");
      form.method = "POST";
      form.action =
        "https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

      // Add hidden fields
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
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={paymentCCAvenue}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
    >
      {isLoading ? "Processing..." : "Pay Now"}
    </button>
  );
}
