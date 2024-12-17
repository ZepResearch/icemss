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
      { icon: CalendarDays, text: "2-day multidisciplinary event" },
      { icon: MapPin, text: "At the heart of Delhi" },
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
                  The International Conference on Engineering, Management, and Social Sciences (ICEMSS) aims to establish a collaborative platform for exploring new dimensions of research. ICEMSS is dedicated to facilitating discussions on the challenges involved in the practical application of cutting-edge knowledge in the fields of Management, Engineering, and Social Sciences.
                  </p>
                  <p className="text-muted-foreground px-12 text-justify mt-2">
                  The rapid development across the globe has created an increasing need for awareness of the latest trends and knowledge. Continuous advancements in these fields have made it challenging for professionals such as academicians, students, aspiring researchers, and industry experts to keep pace with these changes. This conference is being organized to help participants stay updated and equipped to address these evolving developments.
                  </p>
                  <p className="text-muted-foreground px-12 text-justify mt-2">
                  The conference, taking place on 19-20 February 2025 in New Delhi, India, will offer researchers — both experienced and emerging — the opportunity to present their findings to esteemed members of the global scientific community. Regardless of their specific focus within Management, Education, or Social Sciences, ICEMSS will provide them with the exposure needed to gain recognition for their research. Moreover, the event will open doors for new collaborations and further research opportunities.
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
                February 19th - 20th , 2025 • Delhi,India
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    )
  }