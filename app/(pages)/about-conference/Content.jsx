'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, Users, Lightbulb, Globe, Award, CheckCircle2, Users2 } from 'lucide-react'

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
      { icon: MapPin, text: "At the heart of Bangkok" },
      { icon: Users, text: "Network with 1000+ academics and professionals" },
      { icon: Lightbulb, text: "Over 30+ workshops on cutting-edge research" },
      { icon: Globe, text: "Presenters from more than 50 countries" },
      { icon: Award, text: "Best Paper Awards in multiple tracks" },
    ]

    const reasonsToAttend = [
      {
        title: "Interdisciplinary Insights",
        description: "Gain fresh perspectives on global challenges by exploring the intersection of engineering, management, and social sciences. Discover how integrating these fields can drive holistic and effective solutions to real-world problems."
      },
      {
        title: "World-Class Speakers",
        description: "Hear from leading experts and thought leaders in diverse fields who will share their insights through keynote speeches, interactive panels, and discussions. Their expertise will inspire you and broaden your understanding of interdisciplinary approaches."
      },
      {
        title: "Networking Opportunities",
        description: "Engage with global peers, including researchers, industry professionals, and policymakers. Build valuable connections and expand your professional network to enhance future collaborations and career opportunities."
      },
      {
        title: "Innovative Workshops and Panels",
        description: "Participate in hands-on workshops and dynamic panel discussions designed to provide practical skills, innovative methodologies, and actionable strategies for integrating disciplines."
      },
      {
        title: "Publication and Recognition",
        description: "Showcase your research to a global audience and get published in conference proceedings. Selected papers will also have the opportunity to be featured in esteemed partner journals, enhancing the visibility and impact of your work."
      },
      {
        title: "Explore Cutting-Edge Technologies",
        description: "Discover the latest technological advancements and solutions in the exhibition sessions. Explore how emerging innovations are being applied across engineering, management, and social sciences to solve complex challenges."
      }
    ]

    const attendeeTypes = [
      {
        title: "Researchers & Academics",
        description: "Share your research, gain feedback, and collaborate with experts across multiple fields."
      },
      {
        title: "Industry Professionals",
        description: "Discover innovative approaches that can be applied to your organization's challenges and connect with interdisciplinary thought leaders."
      },
      {
        title: "Policymakers & Government Representatives",
        description: "Understand the latest research and strategies to inform policy and decision-making in an increasingly complex world."
      },
      {
        title: "Students & Emerging Scholars",
        description: "Enhance your knowledge, present your work, and network with established researchers and industry experts to advance your career."
      },
      {
        title: "Entrepreneurs & Innovators",
        description: "Explore new ideas, technologies, and collaborative opportunities to drive innovation in your field."
      },
      {
        title: "Nonprofit Organizations & NGOs",
        description: "Learn how interdisciplinary solutions can support your mission and address societal challenges."
      }
    ]
  
    return (
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-1">About the Conference</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging disciplines, fostering innovation, and addressing global challenges through interdisciplinary research and collaboration.
            </p>
          </motion.div>

          {/* About ICEMSS Card */}
          <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
            <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">About 3<sup>rd</sup>   ICEMSS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground px-12 text-justify">
                  The 3<sup>rd</sup> International Conference on Engineering, Management, and Social Sciences (ICEMSS) aims to establish a collaborative platform for exploring new dimensions of research. ICEMSS is dedicated to facilitating discussions on the challenges involved in the practical application of cutting-edge knowledge in the fields of Management, Engineering, and Social Sciences.
                  </p>
                  <p className="text-muted-foreground px-12 text-justify mt-2">
                  The rapid development across the globe has created an increasing need for awareness of the latest trends and knowledge. Continuous advancements in these fields have made it challenging for professionals such as academicians, students, aspiring researchers, and industry experts to keep pace with these changes. This conference is being organized to help participants stay updated and equipped to address these evolving developments.
                  </p>
                  <p className="text-muted-foreground px-12 text-justify mt-2">
                  The conference, taking place on December 12th-13th in Bangkok, Thailand, will offer researchers — both experienced and emerging — the opportunity to present their findings to esteemed members of the global scientific community. Regardless of their specific focus within Management, Education, or Social Sciences, ICEMSS will provide them with the exposure needed to gain recognition for their research. Moreover, the event will open doors for new collaborations and further research opportunities.
                  </p>
                </CardContent>
            </Card>
          </motion.div>

          {/* Mission and Conference Highlights Cards */}
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

          {/* Why Attend Section */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Why Attend 3<sup>rd</sup>  ICEMSS 2025</CardTitle>
                <CardDescription className="text-lg">
                  The 3<sup>rd</sup>  International Conference on Engineering, Management, and Social Sciences (ICEMSS) offers a unique platform for knowledge exchange, collaboration, and innovation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reasonsToAttend.map((reason, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary text-lg mb-1">{(index + 1) + ". " + reason.title}</h4>
                        <p className="text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Who Can Attend Section */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Who Can Attend</CardTitle>
                <CardDescription className="text-lg">
                3<sup>rd</sup>  ICEMSS welcomes a diverse range of participants committed to solving global challenges through interdisciplinary collaboration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {attendeeTypes.map((type, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Users2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary text-lg mb-1">{type.title}</h4>
                        <p className="text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg text-primary font-medium">
                    Join us at ICEMSS 2025 and be part of a global movement to bridge disciplines, innovate, and create impactful solutions for a better future.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
  
          {/* Conference Date Card */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
              <CardContent className="p-6">
                <CardDescription className="text-lg font-medium text-primary mb-2">
                  Join us in shaping the future of engineering, management, and social sciences.
                </CardDescription>
                <p className="text-muted-foreground">
                  December 12th-13th • Bangkok, Thailand
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    )
}