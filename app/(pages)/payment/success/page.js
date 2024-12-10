'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Verify if we have payment data in session storage
    const paymentData = sessionStorage.getItem('paymentData');
    if (!paymentData) {
      // If no payment data, might be a direct page access
      // You can choose to redirect to home or show a different message
      console.log('No payment data found');
    }
  }, []);

  const handleBackHome = () => {
    // Clear any payment-related data
    sessionStorage.removeItem('paymentData');
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center">
          <div className="mb-4 text-green-500">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your payment. Your transaction has been completed successfully.
          </p>
          <button
            onClick={handleBackHome}
            className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}