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
      content: "We collect information you provide directly to us, such as when you register for the conference, contact us with inquiries, or participate in polls, surveys, or promotional events. This may include your name, email address, postal address, phone number, and other contact or identifying information you choose to provide."
    },
    {
      title: "Use of Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to process your registration, to send you technical notices, updates, security alerts, and support and administrative messages, and to respond to your comments, questions, and customer service requests."
    },
    {
      title: "Information Sharing",
      content: "We may share your personal information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety."
    },
    {
      title: "Data Security",
      content: "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no Internet or email transmission is ever fully secure or error-free."
    },
    {
      title: "Cookies",
      content: "We use cookies and similar technologies to collect information about your browsing activities over time and across different websites following your use of our services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      title: "Your Rights",
      content: "You may update, correct, or delete your account information at any time by logging into your online account or by contacting us. You may also request access to the personal data we hold about you and request that we correct, amend, or delete it if it is inaccurate or processed in violation of applicable law."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-primary mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Privacy Policy
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                International Conference on Tourism Management and Hospitality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you participate in our conference or use our website.
              </p>
              <Accordion type="single" collapsible className="w-full">
                {policies.map((policy, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-primary">
                      {policy.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {policy.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <p className="mt-6 text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}