'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Lightbulb, Globe, Award } from 'lucide-react'

export default function ConferenceAboutSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        staggerChildren: 0.1 
      } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const conferenceFeatures = [
    { icon: CalendarDays, text: "3-day multidisciplinary event" },
    { icon: MapPin, text: "At the heart of Singapore" },
    { icon: Users, text: "Network with 1000+ academics and professionals" },
    { icon: Lightbulb, text: "Over 30+ workshops on cutting-edge research" },
    { icon: Globe, text: "Presenters from more than 50 countries" },
    { icon: Award, text: "Best Paper Awards in multiple tracks" },
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-16 px-4 "
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">About the Conference</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">International Conference on Engineering, Management and Social Sciences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging disciplines, fostering innovation, and addressing global challenges through interdisciplinary research and collaboration.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">About ICEMSS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground px-12 text-justify">
                  The International Conference on Engineering, Management and Social Sciences (ICEMSS) is a premier global event that brings together researchers, academics, industry professionals, and policymakers from diverse fields. Over three days, participants will explore the latest advancements, challenges, and opportunities at the intersection of engineering, management, and social sciences, with a focus on sustainable development, technological innovation, and societal impact. This conference serves as a unique platform to exchange ideas, foster interdisciplinary collaborations, and drive actionable solutions for some of the world&apos;s most pressing issues.
                </p>
                <p className="text-muted-foreground px-12 text-justify mt-2">
                  Attendees will have the opportunity to engage in thought-provoking discussions, attend specialized workshops, and network with leading experts shaping the future of these interconnected fields. Whether you are an established researcher, an industry practitioner, or an emerging scholar, this conference will provide valuable insights and connections that can help you navigate and lead in the evolving landscape of engineering, management, and social sciences.
                </p>
              </CardContent>
          </Card>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Promoting interdisciplinary research and collaboration, with a focus on innovative solutions that address complex global challenges. We aim to bridge the gap between engineering, management, and social sciences through knowledge sharing, networking, and showcasing cutting-edge research and technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Conference Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {conferenceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <CardDescription className="text-lg font-medium text-primary mb-2">
                Join us in shaping the future of engineering, management, and social sciences.
              </CardDescription>
              <p className="text-muted-foreground">
                September 15-17, 2024 • Singapore
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

