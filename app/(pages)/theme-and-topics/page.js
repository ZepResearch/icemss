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
      title: "Engineering Innovation",
      content: [
        "Artificial Intelligence and Machine Learning in Engineering",
        "Sustainable Engineering Practices",
        "Internet of Things (IoT) and Smart Systems",
        "Robotics and Automation",
        "Renewable Energy Technologies"
      ]
    },
    {
      title: "Management Strategies",
      content: [
        "Digital Transformation in Business",
        "Sustainable Business Models",
        "Project Management in the Digital Era",
        "Innovation Management and Entrepreneurship",
        "Supply Chain Management and Logistics"
      ]
    },
    {
      title: "Social Sciences Perspectives",
      content: [
        "Technology's Impact on Society",
        "Social Media and Digital Communication",
        "Ethics in Technology and Business",
        "Cultural Diversity in Global Organizations",
        "Sustainable Development and Social Responsibility"
      ]
    },
    {
      title: "Interdisciplinary Research",
      content: [
        "Integrating Engineering and Management for Sustainable Solutions",
        "Social Implications of Technological Advancements",
        "Data Science in Social Research",
        "Human-Computer Interaction and User Experience",
        "Environmental Policy and Engineering Solutions"
      ]
    },
    {
      title: "Future of Work and Education",
      content: [
        "Remote Work Technologies and Management",
        "E-learning and Educational Technologies",
        "Skills for the Fourth Industrial Revolution",
        "Workplace Diversity and Inclusion in Tech Industries",
        "Lifelong Learning and Professional Development"
      ]
    },
    {
      title: "Global Challenges and Solutions",
      content: [
        "Technology Solutions for Climate Change",
        "Engineering Approaches to Public Health Crises",
        "Smart Cities and Urban Planning",
        "Cybersecurity and Data Privacy",
        "Cross-cultural Management in Global Projects"
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
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1 bg-yellow-100 text-yellow-800">Conference Themes</Badge>
          <h2 className="text-4xl font-bold underline underline-offset-2 decoration-yellow-400 mb-4">International Conference on Engineering, Management and Social Sciences</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bridging disciplines to address global challenges through innovation and collaboration.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-yellow-200">
            <CardHeader className="bg-yellow-400 text-white p-6">
              <CardTitle className="text-3xl">Conference Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-gray-700">
                The International Conference on Engineering, Management and Social Sciences (ICEMSS) brings together researchers, industry leaders, and policymakers to explore the intersections of technology, business, and society. This interdisciplinary conference aims to foster innovative solutions to global challenges by combining insights from engineering, management practices, and social sciences.
              </p>
              <p className="leading-relaxed text-lg text-gray-700 mt-4">
                Submissions are invited for original research, case studies, and practical applications that demonstrate how integrating these fields can lead to sustainable and impactful solutions for the complex issues of our time.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-50 to-indigo-50 border-2 border-yellow-200">
            <CardHeader className="bg-yellow-100 text-inyellowdigo-900 p-6">
              <CardTitle className="text-3xl flex items-center">
                <Lightbulb className="mr-2 h-8 w-8" />
                Conference Tracks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-gray-800">
                ICEMSS encourages submissions in the following interdisciplinary areas. We welcome innovative approaches that bridge multiple disciplines:
              </p>
              <Accordion type="single" collapsible className="w-full">
                {topics.map((topic, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-yellow-950">{topic.title}</AccordionTrigger>
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
          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-yellow-200">
            <CardHeader className="bg-yellow-400 text-white p-6">
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
            <Button className="flex-1 text-xl py-8 px-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-yellow-400 hover:bg-yellow-500 text-white">
              <FileText className="mr-2 h-6 w-6" />
              Submit Your Paper
            </Button>
          </Link>
          <Link href={'/registration'}>
            <Button className="flex-1 text-xl py-8 px-12 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-yellow-400 hover:bg-yellow-500 text-white">
              <UserPlus className="mr-2 h-6 w-6" />
              Register Now
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-yellow-200">
            <CardHeader className="bg-yellow-200  p-6">
              <CardTitle className="text-2xl flex items-center">
                <Calendar className="mr-2 h-6 w-6 " />
                Key Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { date: "May 15, 2024", event: "Abstract Submission Deadline", icon: <FileText className="h-5 w-5" /> },
                  { date: "June 1, 2024", event: "Notification of Acceptance", icon: <Zap className="h-5 w-5" /> },
                  { date: "July 15, 2024", event: "Full Paper Submission", icon: <File className="h-5 w-5" /> },
                  { date: "August 1, 2024", event: "Early Bird Registration Ends", icon: <UserPlus className="h-5 w-5" /> },
                  { date: "September 15-17, 2024", event: "Conference Dates", icon: <Calendar className="h-5 w-5" /> }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-yellow-600">
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

          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-yellow-200">
            <CardHeader className="bg-yellow-300 text-white p-6">
              <CardTitle className="text-2xl flex items-center">
                <Globe className="mr-2 h-6 w-6" />
                Conference Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { highlight: "3 days of interdisciplinary knowledge sharing", icon: <Calendar className="h-5 w-5" /> },
                  { highlight: "Keynote speeches by world-renowned experts", icon: <Users className="h-5 w-5" /> },
                  { highlight: "Interactive workshops and panel discussions", icon: <Lightbulb className="h-5 w-5" /> },
                  { highlight: "Networking opportunities with global peers", icon: <Globe className="h-5 w-5" /> },
                  { highlight: "Exhibition of cutting-edge technologies", icon: <Zap className="h-5 w-5" /> }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-2 text-yellow-600">
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

