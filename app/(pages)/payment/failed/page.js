'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentFailed() {
  const router = useRouter();

  useEffect(() => {
    const paymentData = sessionStorage.getItem('paymentData');
    if (!paymentData) {
      console.log('No payment data found');
    }
  }, []);

  const handleTryAgain = () => {
    router.push('/payment');
  };

  const handleBackHome = () => {
    sessionStorage.removeItem('paymentData');
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="text-center">
          <div className="mb-4 text-red-500">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6">
            Were sorry, but your payment could not be processed. Please try again or contact support if the issue persists.
          </p>
          <div className="space-y-3">
            <button
              onClick={handleTryAgain}
              className="w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={handleBackHome}
              className="w-full bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
