'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// TODO: point this at the actual "My Registration" route for this site
const MY_REGISTRATION_URL = 'https://publication.zepresearch.com/';

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

  const handleViewRegistration = () => {
    sessionStorage.removeItem('paymentData');
    router.push(MY_REGISTRATION_URL);
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

          <div className="mb-6 text-left rounded-lg border border-green-100 bg-green-50 p-4">
            <h2 className="text-sm font-bold text-gray-800">Check your registration</h2>
            <p className="mt-1 text-sm text-gray-600">
              Sign in with the same ID and password you used to register, then follow these
              steps:
            </p>
            <ol className="mt-3 space-y-1.5 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="font-semibold text-green-600">1.</span>
                Log in using the same ID and password used during registration.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-green-600">2.</span>
                Click on your profile icon.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-green-600">3.</span>
                Go to <span className="font-semibold text-gray-700">Dashboard</span>.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-green-600">4.</span>
                Open <span className="font-semibold text-gray-700">My Registration</span> to
                view your registration details.
              </li>
            </ol>
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleBackHome}
              className="inline-block bg-white text-gray-700 border border-gray-300 px-6 py-2 rounded hover:bg-gray-50 transition-colors"
            >
              Return to Home
            </button>
            <button
              onClick={handleViewRegistration}
              className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
            >
              View My Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}