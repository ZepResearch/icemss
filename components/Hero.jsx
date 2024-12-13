'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full min-h-full bg-gradient-to-b from-primary/5 to-background pt-16 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* <img src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1729260387/erph7fml9unxiowlmrmg.png" className="w-1/2" alt="" /> */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                International Conference on Engineering, Management and Social Sciences
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join leading experts and researchers from around the world in this prestigious conference bridging engineering innovation with management excellence and social impact.
              </p>
            </motion.div>
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={'/registration'}>
                <Button size="lg" className="inline-flex gap-2 text-white">
                  <Users className="h-4 w-4" />
                  Register Now
                </Button>
                </Link>
                <Link href={'/submission'}>
                <Button variant="outline" size="lg" className="inline-flex gap-2">
                Submit Your Paper
                </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-4 text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>19-20 February 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span> Delhi,India</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[600px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Conference Preview"
                className="object-cover"
                fill
                priority
              />
              {/* <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              /> */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 grid gap-4 p-6 bg-background/90 backdrop-blur-sm rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="space-y-2">
                  <h3 className="font-bold">Conference Highlights</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc ">
                    <li> 50+ International Speakers</li>
                    <li> Interactive Workshops</li>
                    <li> Networking Events</li>
                    <li> Research Presentations</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

