'use client'

import { motion } from "framer-motion"
import { BookOpen, Globe, LightbulbIcon, Users, Share2, TrendingUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const imglink=[
    {link:'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {link:'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {link:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {link:'https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
]

export default function ObjectivesSection() {
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

  const objectives = [
    {
      icon: Users,
      title: "Foster Interdisciplinary Collaboration",
      description: "The conference aims to create a collaborative environment where researchers from engineering, management, and social sciences can engage in productive dialogue. This cross-disciplinary interaction will help develop integrated solutions to address the complex challenges faced by societies worldwide.",
    },
    {
      icon: Share2,
      title: "Promote Knowledge Exchange",
      description: "We strive to provide a platform for sharing the latest trends, research, and methodologies. Participants will have the opportunity to learn from each other, discuss emerging ideas, and stay updated on the most recent advancements in their respective fields..",
    },
    {
      icon: TrendingUp,
      title: "Enhance Professional Development",
      description: "Through a series of expert-led workshops and speaker sessions, the conference will provide opportunities for participants to acquire new skills, gain insights into emerging trends, and empower themselves to advance their careers in research, academia, and industry.",
    },
    {
      icon: Globe,
      title: "Encourage Global Networking",
      description: "– The conference will bring together professionals, researchers, and academics from all over the world, creating an ideal environment for building meaningful connections, establishing global partnerships, and expanding professional networks for future collaborations.",
    },
    {
      icon: BookOpen,
      title: "Facilitate Research Publication",
      description: "We support researchers by providing a platform to publish their research in recognized academic journals and conference proceedings. This ensures that their work gains visibility, credibility, and contributes to global academic discussions.",
    },
    {
      icon: LightbulbIcon,
      title: "Inspire Innovation and Solutions",
      description: "By fostering an environment of creative thinking and problem-solving, the conference will inspire participants to generate innovative ideas that address real-world challenges. This focus on practical solutions aims to push the boundaries of research and drive positive change in communities and industries.",
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
          <motion.div 
            variants={itemVariants}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
              Objectives Of the Conference
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our mission is to create an enriching platform that advances academic excellence, fosters global collaboration, and drives innovation across disciplines.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {objectives.map((objective, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-background/60 backdrop-blur-lg border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <objective.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">{objective.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {objective.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-4 pt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {imglink.map((img, i) => (
                  <img
                    key={i}
                    src={img.link}
                    alt={`Academic professional ${i + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-background bg-primary/10 object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-medium text-foreground">400+</span> academic professionals
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

