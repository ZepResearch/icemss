"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Headphones, MapPin, Quote, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ReserveButton } from "./reserve-button"


const backgroundImages = [
  "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1697730390320-8412ee5eae82?q=80&w=2045&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569034797434-b168fbcf7fcc?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666286956135-0fb603dad5cf?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = () => setShowTooltip(true)
  const handleMouseLeave = () => setShowTooltip(false)

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
    <section className="relative w-full min-h-full py-28 overflow-hidden">
      <motion.div
        className="absolute top-24 sm:right-24 right-5 z-10 bg-white/90 backdrop-blur-sm text-black p-4 rounded-lg shadow-lg w-64"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h3 className="font-bold text-lg mb-2">Hybrid Conference</h3>
        <p className="text-sm mb-2">Experience the conference your way:</p>
        <ul className="list-disc list-inside text-sm">
          <li>Attend in person in Goa</li>
          <li>Join virtually from anywhere</li>
        </ul>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Physical
          </span>
          <span className="flex items-center">
            <Headphones className="w-4 h-4 mr-1" />
            Virtual
          </span>
        </div>
      </motion.div>
      
      {/* <Banner /> */}
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
            src={backgroundImages[currentImageIndex] || "/placeholder.svg"}
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

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-64 md:pt-24 min-h-full py-8 flex items-center">
        <motion.div
          className="max-w-3xl space-y-8 text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences
            </h1>
            <p className="max-w-[600px] text-white/80 md:text-xl inline-flex">
            <Quote className="mr-2"/>
            <span>
             Bridging disciplines, fostering innovation, and addressing global challenges through interdisciplinary research and collaboration
              </span> <Quote className="mt-6 mr"/>
            </p>
            {/* <p className="max-w-[600px] text-white/80 md:text-xl">
              Co-organized by [declared soon]
              by- Indraprastha College For Women–Delhi University (IPCW–DU) and Swami Vivekanand Subharti
              University
            </p> */}
          </motion.div>
          <motion.div className="space-y-4" variants={itemVariants}>
            {/* images */}
            <div className="flex sm:flex-row flex-col-reverse  items-start sm:items-center justify-center gap-3 px-4 max-w-2xl  backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl">
              <img
                src="/assets/scopus.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
              <img
                src="/assets/clarivate.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />

              <img
                src="assets/zepresearch.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={"/registration"}>
                <Button size="lg" className="inline-flex gap-2 hover:text-primary   hover:bg-white/90">
                  <Users className="h-4 w-4" />
                  Register Now
                </Button>
              </Link>
              <Link href={"/submission"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="inline-flex gap-2 text-black hover:text-white border-blue-400 hover:bg-white/20"
                >
                  Submit Your Paper
                </Button>
              </Link>
              {/* <Link href={"/paperformat/ICEMSS_2025_Broucher.pdf"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="inline-flex gap-2 text-blue-400 hover:text--blue-400 border-blue-400 hover:bg-white/20 bg-transparent"
                >
                  Download Brochure
                </Button>
              </Link> */}
              <ReserveButton/>
            </div>
          </motion.div>
          <motion.div className="space-y-4" variants={itemVariants}>
            {/* <div className="flex flex-col gap-4 text-base text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>19th - 20th February 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Delhi, India</span>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
      <motion.div className=" p-6 bg-white/70 backdrop-blur-sm max-w-4xl mx-auto rounded-lg" variants={itemVariants}>
        <div className="container  mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            {/* Conference Date */}
            <div className="flex items-center  gap-4 p-4 ">
              <Calendar className="w-8 h-8 text-white shrink-0" />
              <div>
                <h2 className="font-bold text-2xl">Conference Date</h2>
                <p className="text-lg">
                  <span className="text-lg">12</span>
                  <sup>th</sup>
                  <span className="text-lg">-13</span>
                  <sup>th</sup> DECEMBER , 2025
                </p>
              </div>
            </div>

            {/* Conference Venue */}
            <div className="flex items-center gap-4 p-4 bg-[#21BDCA]/30 rounded-lg">
              <MapPin className="w-8 h-8 text-white shrink-0" />
              <div>
                <h3 className="font-bold text-2xl">Conference Venue</h3>
                <p className="text-lg">
                    BloomSuites,Goa, 403516,INDIA   <br />
                  

                </p>
              </div>
            </div>

            {/* Contact Information */}
            {/* <div className="flex items-center gap-4 p-4 ">
          <Link href={'/'}>
            <div className="inline-flex justify-center items-center gap-3 border-2 p-2 rounded-lg" >
            <DockIcon className="w-8 h-8 text-white shrink-0" />
                        
            </div>
          </Link>
          </div> */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

