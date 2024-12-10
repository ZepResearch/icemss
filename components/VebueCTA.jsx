"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function VenueCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white min-h-full flex items-center justify-center py-12">
      <Card className="w-full max-w-7xl overflow-hidden p-4 pr-0 shadow-2xl rounded-3xl border-none bg-gradient-to-l from-slate-50 to-slate-200">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 pt-8 px-4 flex flex-col justify-between pl-8">
            <div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-4xl font-bold mb-2">
                  ICEMSS Conference Venue
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2 bg-gray-100/70 p-3 rounded-lg">
                    <MapPin className="text-primary" />
                    <span className="font-medium">kuala lumpur, Malaysia</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100/70 p-3 rounded-lg">
                    <Calendar className="text-primary" />
                    <span className="font-medium">May 22-23, 2025</span>
                  </div>
                  {/* <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                    <Users className="text-blue-600" />
                    <span className="font-medium">Capacity: 5000</span>
                  </div> */}
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Experience the future of sustainable conferences at our
                  state-of-the-art Eco Conference Center. Powered by 100%
                  renewable energy and featuring cutting-edge blue architecture
                </p>
                <div className="p-0  flex flex-col sm:flex-row gap-4">
                  <Link href={'/venue'}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto  font-bold"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    Explore Venue
                  </Button>
                    </Link>
                    <Link href={'/registration'}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-yellow-600 text-yellow-600 "
                    >
                    Register Now
                  </Button>
                    </Link>
                </div>
              </CardContent>
            </div>
          </div>
          <motion.div
            className="lg:w-1/2  flex justify-end items-center"
            transition={{ duration: 0.3 }}
          >
            <Image
              className=" inset-0 "
              src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1731951726/kpz0y7pi3rmfdofxqvxi.svg"
              alt=""
              width={400}
              height={400}
            />
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
