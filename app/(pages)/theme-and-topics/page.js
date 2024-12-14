'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, FileText, UserPlus, Zap, File, Lightbulb, Users, Globe } from 'lucide-react'
import Link from 'next/link'

export default function ThemeAndTopics() {
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

  const topics = [
    {
      title: "Engineering",
      content: [
        "Mechanical Engineering Innovations",
        "Electrical and Electronics Engineering Advances",
        "Civil and Environmental Engineering Progress",
        "Computer Science and Engineering Trends",
        "Chemical and Process Engineering Breakthroughs",
        "Aerospace Engineering Developments"
      ]
    },
    {
      title: "Management Tracks",
      content: [
        "Strategic Management and Innovation",
        "Human Resource Management and Organizational Behavior",
        "Marketing and Consumer Behavior",
        "Operations and Supply Chain Management",
        "Finance and Accounting Innovations",
        "Public Administration and Policy"
      ]
    },
    {
      title: "Social Science",
      content: [
        "Sociology and Social Change",
        "Psychology and Behavioral Sciences",
        "Education and Pedagogy",
        "Political Science and International Relations",
        "Economics and Development Studies",
        "Anthropology and Cultural Studies"
      ]
    }
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
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1 bg-primary text-white">Conference Themes</Badge>
          <h2 className="text-4xl font-bold underline underline-offset-2 decoration-primary mb-4">International Conference on Engineering, Management, and Social Sciences Integration</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bridging disciplines to address global challenges through innovation and collaboration.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-primary">
            <CardHeader className="bg-primary/50 text-white p-6">
              <CardTitle className="text-3xl drop-shadow-lg">Conference Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-gray-700">
                The International Conference on Engineering, Management, and Social Sciences Integration (ICEMSI) brings together researchers, industry leaders, and policymakers to explore the intersections of engineering innovations, management strategies, and social science perspectives. This interdisciplinary conference aims to foster innovative solutions to global challenges by combining insights from these diverse fields.
              </p>
              <p className="leading-relaxed text-lg text-gray-700 mt-4">
                Submissions are invited for original research, case studies, and practical applications that demonstrate how integrating engineering, management, and social sciences can lead to comprehensive and impactful solutions for the complex issues of our time.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl  border-2 border-primary">
            <CardHeader className="bg-primary text-white p-6">
              <CardTitle className="text-3xl flex items-center">
                <Lightbulb className="mr-2 h-8 w-8" />
                Conference Tracks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-gray-800">
                ICEMSI encourages submissions in the following interdisciplinary areas. We welcome innovative approaches that bridge multiple disciplines:
              </p>
              <Accordion type="single" collapsible className="w-full">
                {topics.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-primary">{topic.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6">
                        {topic.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 text-base">{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-white border-2 ">
            <CardHeader className="bg-primary/70 text-white p-6">
              <CardTitle className="text-3xl flex items-center">
                <FileText className="mr-2 h-8 w-8" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-gray-700">
                All submissions will undergo a double-blind peer review process. Accepted papers will be published in the conference proceedings, with selected papers considered for publication in partner journals. Submissions should highlight the interdisciplinary nature of the work and its potential impact on addressing real-world challenges.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Abstract length: 300-500 words</li>
                <li>• Full paper length: 6-8 pages (including references)</li>
                <li>• Format: IEEE conference template</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-12 justify-center items-center mx-auto">
          <Link href={'/submission'}>
            <Button className="flex-1 text-xl py-8 px-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary/90 hover:bg-primary text-white">
              <FileText className="mr-2 h-6 w-6" />
              Submit Your Paper
            </Button>
          </Link>
          <Link href={'/registration'}>
            <Button className="flex-1 text-xl py-8 px-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-primary/80 hover:bg-primary text-white">
              <UserPlus className="mr-2 h-6 w-6" />
              Register Now
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-primary/40">
            <CardHeader className="bg-primary/40 text-white  p-6">
              <CardTitle className="text-2xl flex items-center">
                <Calendar className="mr-2 h-6 w-6 drop-shadow-2xl " />
                Key Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { date: "January 11, 2025", event: "Early Bird Registration Deadline", icon: <UserPlus className="h-5 w-5" /> },
                  { date: "January 19, 2025", event: "Abstract Submission Deadline", icon: <FileText className="h-5 w-5" /> },
                  { date: "January 27, 2025", event: "Full Paper Submission Deadline", icon: <File className="h-5 w-5" /> },
                  { date: "February 5, 2025", event: "Registration Deadline", icon: <Calendar className="h-5 w-5" /> }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-primary">
                      {item.icon}
                    </div>
                    <span className="text-base text-gray-700">
                      <strong>{item.date}:</strong> {item.event}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-primary">
            <CardHeader className="bg-primary text-white p-6">
              <CardTitle className="text-2xl flex items-center">
                <Globe className="mr-2 h-6 w-6" />
                Conference Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { highlight: "2 days of interdisciplinary knowledge sharing", icon: <Calendar className="h-5 w-5" /> },
                  { highlight: "Keynote speeches by world-renowned experts", icon: <Users className="h-5 w-5" /> },
                  { highlight: "Interactive workshops and panel discussions", icon: <Lightbulb className="h-5 w-5" /> },
                  { highlight: "Networking opportunities with global peers", icon: <Globe className="h-5 w-5" /> },
                  { highlight: "Exhibition of cutting-edge technologies", icon: <Zap className="h-5 w-5" /> }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-primary">
                      {item.icon}
                    </div>
                    <span className="text-base text-gray-700">
                      {item.highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

