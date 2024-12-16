'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PrivacyPolicy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const policies = [
    {
      title: "Information Collection",
      content: "We collect information you provide directly to us when you register for the conference, submit research abstracts, contact us with inquiries, or participate in surveys or promotional events. This may include your name, email address, institutional affiliation, academic credentials, research interests, and other professional or identifying information you choose to provide."
    },
    {
      title: "Use of Information",
      content: "We use the collected information to process your registration, review submitted abstracts, organize conference sessions, provide you with relevant updates about the conference, send you technical notices and support messages, and respond to your inquiries. We may also use anonymized data for statistical analysis to improve our services and academic programming."
    },
    {
      title: "Information Sharing",
      content: "We may share your information with third-party service providers who assist us in organizing the conference, such as registration systems, abstract management platforms, and communication tools. We may also share anonymized data with our academic partners for research purposes. We will release information when required to comply with the law or to protect the rights and safety of our conference participants and staff."
    },
    {
      title: "Data Security",
      content: "We implement reasonable security measures to protect your personal and academic information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of electronic storage or transmission is 100% secure."
    },
    {
      title: "Cookies and Tracking",
      content: "Our website uses cookies and similar technologies to enhance user experience and collect information about browsing activities. This helps us improve our website and tailor our communications. You can modify your browser settings to decline cookies, but this may affect some features of our website."
    },
    {
      title: "Your Rights and Choices",
      content: "You have the right to access, correct, or delete your personal information. You may update your account information through our conference management system or by contacting us directly. You can also opt-out of non-essential communications. For EU residents, we comply with GDPR requirements regarding data subject rights."
    },
    {
      title: "International Data Transfers",
      content: "As an international conference, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in compliance with applicable data protection laws."
    }
  ]

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-blue-800 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Privacy policy
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-700">
                International Conference on Engineering, Management and Social Sciences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-blue-800">
                Your privacy and the protection of your personal and academic information are of utmost importance to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you participate in our conference or use our website.
              </p>
              <Accordion type="single" collapsible className="w-full">
                {policies.map((policy, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-blue-700">
                      {policy.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-blue-800">
                      {policy.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <p className="mt-6 text-sm text-blue-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

