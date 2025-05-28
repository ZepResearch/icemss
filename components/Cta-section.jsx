'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Award, Building2, Users, Trophy, ArrowRight, MapPin, Calendar } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const ctaItems = [
    {
      title: "Awards & Recognition",
      description: "Best Paper Awards across multiple categories with certificates and medals",
      icon: Trophy,
      action: "View Awards",
      link:'/award'
    },
    {
      title: "Become a Sponsor",
      description: "Support academic excellence and gain visibility in the academic community",
      icon: Award,
      action: "Sponsor Now",
      link:'sponsorship'
    },
    {
      title: "Venue Information",
      description: "Grand Conference Center, New York - World-class facilities and accommodation",
      icon: Building2,
      action: "View Location",
      link:'/venue'
    },
    {
      title: "Committee Members",
      description: "Meet our distinguished organizing and technical committee members",
      icon: Users,
      action: "Meet the Team",
      link:'committee'
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ctaItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={item.link}>
                    <Button variant="ghost" className="group">
                      {item.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold tracking-tighter">Register Now</h3>
                      <p className="text-muted-foreground">
                        Secure your spot at the premier academic conference on Engineering, Management, and Social Sciences.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>12th - 13th DECEMBER  2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-8 h-8 text-primary" />
                         <span>Radisson Suites Bangkok Sukhumvit. Address- 23/2 Soi Sukhumvit 13, Khwaeng Khlong Toei Nuea, Khlong Toei, Bangkok 10110, Thailand
                         </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                    <Link href={'/registration'}>
                      <Button className="max-w-3xl text-white" size="lg">
                        Register for Conference
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    </div>
                    {/* <p className="text-xs text-muted-foreground">
                      Early bird registration closes on 11th January 2025. By registering, you agree to our terms and conditions.
                    </p> */}
                  </div>
                  <div className="relative aspect-square md:aspect-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1513568720563-6a5b8c6caab3?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Conference Hall"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-700/50 to-primary/20" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                      <p className="font-semibold text-lg">Join 1000+ Academic Professionals</p>
                      <p className="text-sm text-muted-foreground">Network with peers from 40+ countries</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

