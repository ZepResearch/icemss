'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const backgroundImages = [
  "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=2072&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1679301429776-08887a5e26d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1667849521402-efb9b61ddf73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1622811895369-6d4fe79731c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

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
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={backgroundImages[currentImageIndex]}
            alt="Conference Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 md:pt-24 min-h-screen flex items-center">
        <motion.div 
          className="max-w-3xl space-y-8 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              International Conference on Engineering, Management and Social Sciences
            </h1>
            <p className="max-w-[600px] text-white/80 md:text-xl">
              Join leading experts and researchers from around the world in this prestigious conference bridging engineering innovation with management excellence and social impact.
            </p>
          </motion.div>
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={'/registration'}>
                <Button size="lg" className="inline-flex gap-2 hover:text-primary   hover:bg-white/90">
                  <Users className="h-4 w-4" />
                  Register Now
                </Button>
              </Link>
              <Link href={'/submission'}>
                <Button variant="outline" size="lg" className="inline-flex gap-2 text-black hover:text-white border-blue-400 hover:bg-white/20">
                  Submit Your Paper
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4 text-base text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>19th - 20th February 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Delhi, India</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg"
            variants={itemVariants}
          >
            <h3 className="font-bold text-xl mb-4">Conference Highlights</h3>
            <ul className="grid grid-cols-2 gap-4 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                50+ International Speakers
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Interactive Workshops
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Networking Events
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Research Presentations
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

