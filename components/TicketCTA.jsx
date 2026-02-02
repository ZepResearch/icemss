import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

export default function TicketCTA() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Registration Fees
          </h2>
         
        </div>
        
        <div className="mx-auto mt-12 max-w-5xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Physical Presentation (May include Virtual option in future)
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Early Bird Fee</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Standard Fee</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((category, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">{category.name}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">
                      {category.earlyBird}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">
                      {category.standard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <Link href="/registration">
              <button className="rounded-lg bg-blue-500 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-colors">
                Register Now
              </button>
            </Link>
            <p className="mt-2 text-xs text-gray-500">
              Limited seats available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const tickets = [
  {
    name: "Presenter - Student",
    earlyBird: "250 USD",
    standard: "300 USD"
  },
  {
    name: "Presenter - Academician",
    earlyBird: "300 USD",
    standard: "350 USD"
  },
  {
    name: "Listener",
    earlyBird: "200 USD",
    standard: "250 USD"
  }
];