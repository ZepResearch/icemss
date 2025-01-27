'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, FileText, UserPlus, Zap, File, Lightbulb, Users, Globe } from 'lucide-react'
import Link from 'next/link'
import { pb } from '@/lib/pocketbase'

export default function ThemeAndTopics() {
  const [dates, setDates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const records = await pb.collection('dates').getFullList({
          sort: 'date',
          requestKey: null
        })

        const formattedDates = records.map(record => ({   
          date: record.date,
          title: record.title,
          description: record.description,
        }))

        setDates(formattedDates)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching dates:', err)
        setError('Failed to load important dates')
        setLoading(false)
      }
    }

    fetchDates()
  }, [])

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
        "Mechanical and Industrial Engineering",
        "Electrical and Electronics Engineering",
        "Civil and Structural Engineering",
        "Computer Science and IT",
        "Environmental Engineering",
        "Materials Science and Engineering"
      ]
    },
    {
      title: "Management",
      content: [
        "Strategic Management",
        "Human Resource Management",
        "Marketing Management",
        "Operations Management",
        "Financial Management",
        "Project Management"
      ]
    },
    {
      title: "Social Sciences",
      content: [
        "Economics and Development Studies",
        "Psychology and Behavioral Sciences",
        "Education and Learning Sciences",
        "Sociology and Social Work",
        "Communication Studies",
        "Political Science and Public Policy"
      ]
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
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1 bg-primary text-white">Conference Themes</Badge>
          <h2 className="text-4xl font-bold  mb-4">2<sup>nd</sup> International Conference on Engineering, Management and Social Sciences (ICEMSS)</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Advancing Knowledge Through Interdisciplinary Research and Innovation
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-primary">
            <CardHeader className="bg-primary/50 text-white p-6">
              <CardTitle className="text-3xl drop-shadow-lg">Conference Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-gray-700">
                The 2<sup>nd</sup> International Conference on Engineering, Management and Social Sciences (ICEMSS) serves as a premier forum for researchers, practitioners, and academics to share their latest findings and innovations across these diverse yet interconnected fields. This conference aims to foster collaboration and knowledge exchange between different disciplines.
              </p>
              <p className="leading-relaxed text-lg text-gray-700 mt-4">
                We welcome original research papers, case studies, and theoretical frameworks that demonstrate excellence in engineering, management practices, and social sciences, with particular emphasis on work that bridges multiple disciplines or addresses contemporary global challenges.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <Card className="overflow-hidden shadow-2xl border-2 border-primary">
            <CardHeader className="bg-primary text-white p-6">
              <CardTitle className="text-3xl flex items-center">
                <Lightbulb className="mr-2 h-8 w-8" />
                Conference Tracks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-lg text-gray-800">
                ICEMSS 2025 features the following main tracks, each encompassing various sub-themes. We encourage submissions that demonstrate innovation and cross-disciplinary approaches:
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
          <Card className="overflow-hidden shadow-2xl bg-white border-2">
            <CardHeader className="bg-primary/70 text-white p-6">
              <CardTitle className="text-3xl flex items-center">
                <FileText className="mr-2 h-8 w-8" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="leading-relaxed text-lg text-gray-700">
                All submissions will undergo a rigorous double-blind peer review process. Accepted papers will be published in the conference proceedings, and selected papers may be recommended for publication in indexed journals.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Abstract length: 250-300 words</li>
                <li>• Full paper length: 5000-6000 words</li>
                <li>• Format: APA Style, 7th Edition</li>
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
            <CardHeader className="bg-primary/40 text-white p-6">
              <CardTitle className="text-2xl flex items-center text-blue-700">
                <Calendar className="mr-2 h-6 w-6 drop-shadow-2xl  text-blue-700" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {dates.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-base text-gray-700">
                      <strong>{item.date}:</strong> {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-2xl bg-white border-2 border-primary">
            <CardHeader className="bg-primary text-white p-6">
              <CardTitle className="text-2xl flex items-center">
                <Globe className="mr-2 h-6 w-6 " />
                Conference Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { highlight: "Distinguished keynote speakers", icon: <Users className="h-5 w-5" /> },
                  { highlight: "Parallel technical sessions", icon: <Calendar className="h-5 w-5" /> },
                  { highlight: "Interactive poster presentations", icon: <FileText className="h-5 w-5" /> },
                  { highlight: "Networking opportunities", icon: <Globe className="h-5 w-5" /> },
                  { highlight: "Best paper awards", icon: <Zap className="h-5 w-5" /> }
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