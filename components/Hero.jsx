"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Headphones, MapPin, Quote, Users, Award, BookOpen, ArrowRight } from "lucide-react"
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

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  const shimmerAnimation = {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  }

  return (
    <section className="relative w-full min-h-full py-28 overflow-hidden">
      {/* <motion.div
        className="absolute top-9 sm:right-24 right-5 z-10 bg-white/90 backdrop-blur-sm text-black p-4 rounded-lg shadow-lg w-64 hidden xl:block"
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
      </motion.div> */}

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

      <div className="relative z-10 container mx-auto px-4 md:px-6 md:pt-4 pt-52 min-h-full py-8 flex items-center">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 w-full items-center">
         { /* Left Content - Main Hero */}
                <motion.div
                className="xl:col-span-2 space-y-8 text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
                <motion.div className="space-y-4" variants={itemVariants}>
                  <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  4<sup>th</sup> International Conference on Engineering, Management and Social Sciences
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl inline-flex">
                  <Quote className="mr-2" />
                  <span>
                    Bridging disciplines, fostering innovation, and addressing global challenges through interdisciplinary
                    research and collaboration
                  </span>
                  <Quote className="mt-6 mr" />
                  </p>
                </motion.div>
                  {/* Virtual Conference Badge */}
                
                <motion.div className="space-y-4 w-full" variants={itemVariants}>
                  <div className="grid md:grid-cols-3 grid-cols-1 items-start sm:items-center justify-center gap-3 px-4 backdrop-blur-sm bg-gray-50/70 py-4 rounded-3xl">
                  <img src="/assets/scopus.png" alt="" className="h-12 drop-shadow-lg" />
                  <img src="/assets/clarivate.png" alt="" className="h-12 drop-shadow-lg" />
                  <img src="assets/zepresearch.png" alt="" className="h-12 drop-shadow-lg" />
                  <img src="assets/iee.png" alt="" className="h-24 drop-shadow-lg" />
                  <img src="assets/crc.png" alt="" className="h-16 drop-shadow-lg" />
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={"/registration"}>
                    <Button size="lg" className="inline-flex gap-2 hover:text-primary hover:bg-white/90">
                    <Users className="h-4 w-4" />
                    Register Now
                    </Button>
                  </Link>
                  <Link href={"/submission"}>
                    <Button
                    variant="outline"
                    size="lg"
                    className="inline-flex gap-2 text-white hover:text-white border-blue-400 bg-white/20 hover:bg-white/40 bg-transparent"
                    >
                    Submit Your Paper
                    </Button>
                  </Link>
                  {/* <ReserveButton /> */}
                  </div>
                </motion.div>

                {/* <motion.div
                  className="relative max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-75 animate-pulse" />
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                    <Headphones className="w-6 h-6 text-cyan-300" />
                    </motion.div>
                    <div>
                    <h3 className="font-bold text-white">Now Available Virtually Only</h3>
                    <p className="text-sm text-white/80">Join from anywhere in the world</p>
                    </div>
                  </div>
                  </div>
                </motion.div> */}


                <motion.div
                  className="p-6 bg-white/70 backdrop-blur-sm max-w-4xl  rounded-lg"
                  variants={itemVariants}
                >
                  <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4">
                    <Calendar className="w-8 h-8 text-white shrink-0" />
                    <div>
                      <h2 className="font-bold text-2xl">Conference Date</h2>
                      <p className="text-lg">
                      <span className="text-lg">4</span>
                      <sup>th</sup>
                      <span className="text-lg"> - 5</span>
                      <sup>th</sup> November , 2026
                      </p>
                    </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-[#21BDCA]/30 rounded-lg">
                    <MapPin className="w-8 h-8 text-white shrink-0" />
                    <div>
                      <h3 className="font-bold text-2xl">Conference Venue</h3>
                      <p className="text-lg">
                     Tokyo, Japan <br />
                      </p>
                    </div>
                    </div>
                  </div>
                  </div>
                </motion.div>

              

                </motion.div>

                <motion.div
                className="xl:col-span-1"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                >
                <motion.div className="relative" animate={floatAnimation}>
                  {/* Glowing background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-75 animate-pulse" />

              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
                      backgroundSize: "50px 50px",
                    }}
                    animate={{
                      backgroundPosition: ["0px 0px", "50px 50px"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  style={{ backgroundSize: "200% 100%" }}
                  animate={shimmerAnimation}
                />

                <div className="relative p-6 space-y-5">
                  {/* CPD Badge with pulse */}
                  <motion.div className="flex justify-center" animate={pulseAnimation}>
                    <div className="bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group">
                      {/* Sparkle effects */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 0.7,
                        }}
                      />
                      <motion.div
                        className="absolute top-1/2 left-2 w-1 h-1 bg-blue-400 rounded-full"
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: 1.4,
                        }}
                      />
                      <img
                        src="assets/cpd2.svg"
                        alt="CPD Certified"
                        className="h-28 w-auto mx-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>

                  {/* CPD Accredited Badge */}
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Award className="w-5 h-5 text-yellow-300" />
                    </motion.div>
                    <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">
                      CPD Accredited Event
                    </span>
                    <motion.div
                      animate={{
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Award className="w-5 h-5 text-yellow-300" />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className="text-xl font-bold text-white text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Continuing Professional Development
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    className="text-blue-100 text-sm text-center leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >
                    Earn CPD points while expanding your knowledge. This conference is accredited for professional
                    development.
                  </motion.p>

                  {/* Feature list with stagger animation */}
                  <motion.div
                    className="space-y-2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.15,
                          delayChildren: 1.3,
                        },
                      },
                    }}
                  >
                    {["Certified CPD Hours", "International Recognition", "Career Advancement"].map(
                      (feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2 text-white/90 text-sm"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <motion.div
                            className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                            whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.4)" }}
                          >
                            <BookOpen className="w-3 h-3 text-cyan-300" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.div>
                      ),
                    )}
                  </motion.div>

                  {/* CTA Button with hover effect */}
                  <motion.div
                    className="pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                  >
                    <motion.a
                      href="https://www.cpdstandards.com/become-accredited/events-conferences/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 w-full bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn About CPD</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
