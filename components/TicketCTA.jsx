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
          <p className="mx-auto max-w-2xl text-gray-500 md:text-xl">
            Join us for the International Conference on Engineering, Management and Social Sciences
          </p>
        </div>
        
        <div className="mx-auto mt-12 max-w-7xl space-y-12">
          {tickets.map((ticketType, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                {ticketType.type}
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Category</th>
                      {/* <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Early Bird Fee</th> */}
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        {ticketType.type.includes('Virtual') ? 'Presentation Fee' : 'Fee'}
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        With Scopus Q3/Q4 Publication
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        With Scopus Q1/Q2 Publication
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketType.categories.map((category, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">{category.name}</td>
                        {/* <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">
                          {category.earlyBird}
                        </td> */}
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">
                          {category.regular}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">
                          {category.scopusQ3Q4 || '-'}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-blue-600">
                          {category.scopusQ1Q2 || '-'}
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
          ))}
        </div>

        {/* Features Section */}
        {/* <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
}

const tickets = [
  // {
  //   type: "Physical Presentation (Foreign participants):",
  //   categories: [
  //     {
  //       name: "Academicians",
  //       earlyBird: "319 USD",
  //       regular: "359 USD", 
  //       scopusQ3Q4: "859 USD",
  //       scopusQ1Q2: "1399 USD"
  //     },
  //     {
  //       name: "Students",
  //       earlyBird: "219 USD",
  //       regular: "259 USD",
  //       scopusQ3Q4: "759 USD", 
  //       scopusQ1Q2: "1299 USD"
  //     },
  //     {
  //       name: "Listeners",
  //       earlyBird: "169 USD",
  //       regular: "199 USD",
  //       scopusQ3Q4: "-",
  //       scopusQ1Q2: "-"
  //     }
  //   ]
  // },
  {
    type: "Foreign participants  (Virtual presentation):",
    categories: [
      {
        name: "Academicians", 
        // earlyBird: "199 USD", 
        regular: "219 USD",
        scopusQ3Q4: "719 USD",
        scopusQ1Q2: "1199 USD"

       
      },
      {
        name: "Students",
        // earlyBird: "149 USD",
        regular: "169 USD",
        scopusQ3Q4: "669 USD",
        scopusQ1Q2: "1099 USD"

      },
      {
        name: "Listeners",
        // earlyBird: "99 USD",
        regular: "119 USD", 
        scopusQ3Q4: "-",
        scopusQ1Q2: "-"
      }
    ]
  },
 {
    type: "Indian Participants (Virtual Presentation):",
    categories: [
      {
        name: "Academicians",
        earlyBird: "7500 INR",
        regular: "3500 INR",
        scopusQ3Q4: "40000 INR", 
        scopusQ1Q2: "100000 INR"
      },
      {
        name: "Students", 
        earlyBird: "6500 INR",
        regular: "3500 INR",
        scopusQ3Q4: "38000 INR",
        scopusQ1Q2: "98000 INR"
      },
      {
        name: "Listeners",
        earlyBird: "3000 INR",
        regular: "2500 INR",
        scopusQ3Q4: "-", 
        scopusQ1Q2: "-"
      }
    ]
  }
];

const features = [
  {
    title: "Full Conference Access",
    description: "Access to all sessions, workshops, and networking events"
  },
  {
    title: "Publication Opportunities", 
    description: "Option to publish in Scopus indexed journals"
  },
  {
    title: "Networking Sessions",
    description: "Connect with professionals and academics worldwide"
  },
  {
    title: "Digital Materials",
    description: "Access to all conference materials and recordings"
  },
  {
    title: "Certificates",
    description: "Certificate of participation and presentation"
  },
  {
    title: "Technical Support",
    description: "24/7 support for virtual and physical attendees"
  }
];