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
            Conference Tickets
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500 md:text-xl">
            Join us for the International Conference on Engineering, Management and Social Sciences
          </p>
        </div>
        
        <div className="mx-auto mt-12 max-w-6xl">
          {tickets.map((ticketType, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                {ticketType.type} Attendance
              </h3>
              
              <div className={`grid gap-6 ${ticketType.type === 'Virtual' ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                {ticketType.categories.map((category, i) => (
                  <Card key={i} className="relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    {category.badge && ticketType.type !== 'Virtual' && (
                      <div className="absolute right-0 top-0">
                        {/* <Badge variant="outline" className="m-4 bg-orange-50 text-orange-600 border-orange-200">
                          {category.badge}
                        </Badge> */}
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {category.location}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {category.participant}
                        </p>
                        
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                          <div className="text-center border-b pb-2">
                            <span className="text-sm font-medium text-gray-700 block mb-1">Presenter</span>
                            <div className="text-2xl font-bold text-blue-600">
                              {category.presenterPrice}
                            </div>
                          </div>
                          <div className="text-center">
                            <span className="text-sm font-medium text-gray-700 block mb-1">Listener</span>
                            <div className="text-2xl font-bold text-blue-600">
                              {category.listenerPrice}
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {category.features.map((feature, j) => (
                          <li key={j} className="flex items-start">
                            <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/registration">
                      <button className="w-full rounded-lg bg-blue-500 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-colors">
                        Register Now
                      </button>
                      </Link>
                      
                      <p className="mt-2 text-center text-xs text-gray-500">
                        Limited seats available
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tickets = [
  {
    type: "Physical",
    categories: [
      {
        location: "Indian",
        participant: "Student",
        presenterPrice: "₹3,000",
        listenerPrice: "₹2,000",
        badge: "Early Bird",
        features: [
          "Full conference access",
          "Networking sessions",
          "Workshop materials",
          "Lunch and refreshments",
          "Certificate of attendance",
          "Conference kit"
        ]
      },
      {
        location: "Indian",
        participant: "Academician",
        presenterPrice: "₹5,000",
        listenerPrice: "₹2,000",
        badge: "Early Bird",
        features: [
          "Full conference access",
          "Networking sessions",
          "Workshop materials",
          "Lunch and refreshments",
          "Certificate of attendance",
          "Conference kit"
        ]
      },
      {
        location: "Foreign",
        participant: "Student",
        presenterPrice: "$199",
        listenerPrice: "$99",
        badge: "Popular",
        features: [
          "Full conference access",
          "International networking",
          "Workshop materials",
          "Meals included",
          "Certificate of attendance",
          "Welcome kit"
        ]
      },
      {
        location: "Foreign",
        participant: "Academician",
        presenterPrice: "$249",
        listenerPrice: "$99",
        badge: "Premium",
        features: [
          "Full conference access",
          "VIP networking sessions",
          "Workshop materials",
          "All meals included",
          "Certificate of attendance",
          "Premium welcome kit"
        ]
      }
    ]
  },
  {
    type: "Virtual",
    categories: [
      {
        location: "",
        participant: "Student",
        presenterPrice: "$99",
        listenerPrice: "$99",
        features: [
          "Live streaming access",
          "Digital materials",
          "Virtual networking",
          "Recorded sessions",
          "Digital certificate",
          "Online Q&A sessions"
        ]
      },
      {
        location: "",
        participant: "Academician",
        presenterPrice: "$99",
        listenerPrice: "$99",
        features: [
          "Live streaming access",
          "Digital materials",
          "Virtual networking",
          "Recorded sessions",
          "Digital certificate",
          "Priority virtual support"
        ]
      }
    ]
  }
];