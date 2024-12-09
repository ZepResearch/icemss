import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Users, Lightbulb, Award } from 'lucide-react'
import { SponsorshipPackages } from "./components/SponsorshipPackages"
import Link from "next/link"

export default function SponsorshipContact() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">   
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="https://illustrations.popsy.co/amber/work-party.svg"
              alt="Conference sponsorship"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800">
                  Become a Sponsor
                </span>
              </h1>
              <p className="text-lg text-gray-700">
                Join us in shaping the future of Engineering, Management, and Social Sciences. Explore our sponsorship opportunities and connect with industry leaders and innovators.
              </p>
            </div>

            <Card className="bg-white shadow-lg border-2 border-yellow-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-yellow-700">Why Sponsor?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <span>Network with 1000+ professionals and academics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <span>Showcase your innovative solutions and research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <span>Gain recognition as a leader in interdisciplinary innovation</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-yellow-700">Contact Our Sponsorship Team</h2>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                <span>+91 7358737843</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                <span>info@icemss.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-yellow-600" />
                <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800">
              Sponsorship Packages
            </span>
          </h2>
          <SponsorshipPackages />
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Drive Innovation?</h2>
          <p className="text-xl text-white mb-6">
            Don&apos;t miss this opportunity to showcase your brand at the International Conference on Engineering, Management and Social Sciences.
          </p>
          <Button className="bg-white text-yellow-700 hover:bg-yellow-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            <Link href={'/contact'}>Request Sponsorship Information</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

