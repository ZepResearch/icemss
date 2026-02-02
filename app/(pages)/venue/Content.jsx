"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Navigation, Building, Utensils, Landmark, Trees, ShoppingBag, Palette } from "lucide-react"

export default function VenuePage() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b-8">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #e6f3ff, #0078d4)",
            }}
          ></div>

          {/* Small circle in bottom left */}

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-[#50b8e7]/20"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6">
              Conference Venue
            </h1>
            <p className="text-xl text-[#0078d4] mb-4">4th International Conference on Engineering, Management and Social Sciences</p>
            <p className="text-lg text-gray-600">4th - 5th November 2026 | Tokyo,Japan</p>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#50b8e7]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0078d4]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0078d4] p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                        <Building className="h-6 w-6 text-[#0078d4]" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">Conference Venue</h2>
                  </div>

                  <div className="space-y-6 text-gray-700">
                    <p>
                      Join us at our premium venue in the Philippines for the 4<sup>th</sup> ICEMSS 2026. The venue offers modern facilities, comfortable accommodations, and is conveniently located to provide easy access to the city's attractions and amenities.
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-[#1a1a1a]">Venue Features</h3>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-[#0078d4] flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>State-of-the-art conference halls with advanced AV equipment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-[#0078d4] flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Multiple dining options featuring local and international cuisine</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-[#0078d4] flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>High-speed WiFi connectivity throughout the venue</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-[#0078d4] flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Comfortable accommodation with modern amenities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-[#0078d4] flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Easy access to public transportation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-[#0078d4] flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Prime location near shopping and entertainment districts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-xl border border-[#50b8e7] p-5 mt-8">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-[#0078d4]" />
                        <h3 className="text-lg font-medium text-[#1a1a1a]">Address</h3>
                      </div>
                      <p className="text-gray-700">
                       Tokyo , Japan
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="https://maps.app.goo.gl/cpvbkEnCfUu1xPWy7" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#0078d4] hover:bg-[#005a9e] text-white rounded-full">
                      <Navigation className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="relative h-full w-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 min-h-[500px] flex items-center justify-center">
                  <Image
                      src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Conference Venue"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">Location</h2>
            <div className="h-1 w-20 bg-[#0078d4] mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden p-4 shadow-lg">
            <div className="absolute -inset-px rounded-3xl bg-[#50b8e7]/10 opacity-50"></div>

            <div className="relative rounded-2xl overflow-hidden h-[500px] w-full bg-gray-100 flex items-center justify-center">
              <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569604.2225943045!2d139.4547457242815!3d35.47304027695781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1770024180818!5m2!1sen!2sin"                height="100%" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

       
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">Explore the Philippines</h2>
            <div className="h-1 w-20 bg-[#0078d4] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Discover amazing attractions during your visit to 4<sup>th</sup> ICEMSS 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                        [
              {
                title: "Senso-ji Temple",
                description: "Tokyo’s oldest Buddhist temple, famous for its traditional architecture and vibrant street market.",
                distance: "Asakusa, Tokyo",
                icon: <Landmark className="h-8 w-8 text-[#0078d4]" />,
                image:
                  "https://images.unsplash.com/photo-1706813253696-10ee6332edd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Tokyo Skytree",
                description: "One of the tallest towers in the world, offering panoramic city views and shopping complexes.",
                distance: "Sumida, Tokyo",
                icon: <Landmark className="h-8 w-8 text-[#0078d4]" />,
                image:
                  "https://plus.unsplash.com/premium_photo-1722795256346-446f8f846b9e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Shibuya Crossing",
                description: "The world-famous pedestrian crossing known for its energy, shopping, and nightlife.",
                distance: "Shibuya, Tokyo",
                icon: <ShoppingBag className="h-8 w-8 text-[#0078d4]" />,
                image:
                  "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Meiji Shrine",
                description: "A peaceful Shinto shrine surrounded by forested grounds in the heart of the city.",
                distance: "Shibuya, Tokyo",
                icon: <Trees className="h-8 w-8 text-[#0078d4]" />,
                image:
                  "https://images.unsplash.com/photo-1659277352020-1af9fe708f80?q=80&w=1107&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Ueno Park",
                description: "A large public park known for museums, cherry blossoms, and cultural attractions.",
                distance: "Taito, Tokyo",
                icon: <Trees className="h-8 w-8 text-[#0078d4]" />,
                image:
                  "https://images.unsplash.com/photo-1560257934-c627e08b0b17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Ginza Shopping District",
                description: "Tokyo’s premier shopping area featuring luxury brands, dining, and entertainment.",
                distance: "Chuo City, Tokyo",
                icon: <ShoppingBag className="h-8 w-8 text-[#0078d4]" />,
                image:
                  "https://images.unsplash.com/photo-1767519818605-b9f0c9e3d16a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((attraction, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-all shadow-md"
              >
                <div className="absolute -inset-px rounded-2xl bg-[#50b8e7]/10 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="h-80 w-full overflow-hidden">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#0078d4] p-0.5 mb-4 -mt-12 relative z-10">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                        {attraction.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">{attraction.title}</h3>
                    <p className="text-gray-700 mb-3">{attraction.description}</p>

                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{attraction.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden p-8 shadow-lg">
              <div className="absolute -inset-px rounded-3xl bg-[#50b8e7]/10 opacity-50"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">Ready to Join Us?</h3>
                <p className="text-gray-700 mb-6">
                  Register for 4<sup>th</sup> ICEMSS 2026 today and be part of this premier international conference in the Philippines.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button className="bg-[#0078d4] hover:bg-[#005a9e] text-white rounded-full">Register Now</Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-[#0078d4] text-[#1a1a1a] hover:bg-[#50b8e7]/20 rounded-full"
                    >
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}