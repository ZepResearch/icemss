"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  MapPin,
  Users,
  Mail,
  Phone,
  Globe,
  Award,
  Video,
  BookOpen,
  UserCheck,
  Megaphone,
  FileText,
  GraduationCap,
  Network,
  WorkflowIcon as Workshop,
} from "lucide-react"

export default function AboutCompany() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const conferenceFeatures = [
    { icon: CalendarDays, text: "2-day event: 12th - 13th December, 2025" },
    { icon: MapPin, text: "GOA, India" },
    { icon: Users, text: "300+ Expected Attendees" },
    { icon: Globe, text: "International Speakers" },
    { icon: Mail, text: "info@icemss.in" },
    { icon: Phone, text: "+91 82606 84845" },
  ]

  const coreServices = [
    {
      icon: Video,
      title: "Conferences & Webinars",
      description:
        "We organize international conferences and academic webinars that bring together faculty, researchers, and students. Each event is designed to foster meaningful dialogue and share cutting-edge knowledge.",
    },
    {
      icon: BookOpen,
      title: "Journals & Publications",
      description:
        "We provide publication opportunities in reputed journals to increase research visibility. Our platforms help scholars reach a global academic audience.",
    },
    {
      icon: UserCheck,
      title: "Peer Review Management",
      description:
        "We connect researchers with experienced reviewers for quality and ethical feedback. This ensures that submitted work meets the highest academic standards.",
    },
    {
      icon: Megaphone,
      title: "Event Promotion & Marketing",
      description:
        "We offer strategic digital marketing support to maximize event outreach. Our targeted campaigns help attract more delegates, speakers, and sponsors.",
    },
    {
      icon: FileText,
      title: "Manuscript Preparation",
      description:
        "We assist researchers in formatting, editing, and refining their papers for successful publication. Our team ensures clarity, consistency, and academic rigor.",
    },
    {
      icon: GraduationCap,
      title: "Online Courses",
      description:
        "We provide skill-based online training for researchers and academics. Courses are designed to enhance knowledge in research methodology, publishing, and more.",
    },
    {
      icon: Network,
      title: "Networking & Collaboration",
      description:
        "We offer platforms to connect with global peers and institutions for joint research. Our network encourages innovation and collaborative opportunities.",
    },
    {
      icon: Workshop,
      title: "Research Training & Workshops",
      description:
        "We host practical workshops to strengthen research writing, publishing, and data analysis skills, which are led by experienced mentors and scholars.",
    },
  ]

  const achievements = [
    "Organized 50+ international conferences and webinars across all over Asia",
    "Collaborated with top universities and institutions for academic events",
    "Supported the publication of 1000+ research papers",
    "Helped thousands of researchers with manuscript preparation and journal submission",
    "Conducted training programs, workshops, and online courses for academic development",
  ]

  return (
    <motion.section ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
            About Zep Research
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">
            3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier event bringing together industry professionals, researchers, and academics from around the world.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center pb-12">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Zep Research</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground px-12">
                Zep Research is a global leader in advancing academic excellence and fostering innovation. Specializing
                in organizing impactful conferences, research initiatives, and collaboration opportunities, Zep Research
                creates dynamic environments where researchers, academics, and industry professionals come together to
                share knowledge, exchange ideas, and collaborate on groundbreaking work across various industries.
              </p>
              <p className="text-muted-foreground px-12">
                With a commitment to providing a platform for high-quality research dissemination, Zep Research enables
                individuals and institutions to engage in meaningful discussions about emerging trends, challenges, and
                solutions. Zep Research encompasses a wide range of disciplines, including tourism, hospitality,
                education, sustainability, and technology. By connecting experts, thought leaders, and innovators, Zep
                Research drives progress and fosters advancements that leave a lasting impact on both academia and
                industry.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  At Zep Research, our mission is to facilitate the exchange of pioneering research, innovative ideas,
                  and best practices across various academic and professional fields. We aim to create a collaborative
                  environment where researchers, educators, and industry leaders come together to learn, inspire, and
                  drive meaningful progress.
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

        {/* Products & Services Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
              Products & Services
            </Badge>
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Services</h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We are a global academic service provider committed to advancing research, collaboration, and innovation
              through expertly planned conferences, publication support, training, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {coreServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold text-primary">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 justify-center">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">What We Have Done So Far</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 inline-block">
            <CardContent className="p-6">
              <CardDescription className="text-lg font-medium text-primary mb-2">
                Join us in shaping the future Engineering, Management and Social Sciences
              </CardDescription>
              <p className="text-muted-foreground">12th - 13th December, 2025 • GOA, India</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
