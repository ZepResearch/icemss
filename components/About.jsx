'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const stats = [
    {
      text: "50+ International Speakers",
      description: "Leading experts from academia and industry",
    },
    {
      text: "1000+ Expected Attendees",
      description: "Global participation from 40+ countries",
    },
    {
      text: "100+ Research Presentations",
      description: "Cutting-edge research across disciplines",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
                Experience the Premier Academic Conference
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join us for an enriching experience that brings together the brightest minds in engineering, management, and social sciences for groundbreaking discussions and collaborations.
              </p>
              <Link href={'/about-conference'}>
              <Button className='border-2 border-yellow-200 mt-4' variant='outline'>Learn more</Button>
              </Link>
            </motion.div>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium">{stat.text}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:mt-0"
          >
            <Image src={'https://illustrations.popsy.co/yellow/work-party.svg'}
                    width={500}
                    height={500}
                    alt="aboutimg"
                    />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-primary/20 to-background/20 backdrop-blur-[2px]" />
            <div className="relative h-[600px] overflow-hidden rounded-lg bg-primary/10 p-6 flex justify-center">
                    
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

