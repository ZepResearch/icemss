"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Monitor, Wifi, Clock, Globe, Users, Video, MessageSquare, Award } from 'lucide-react';

export default function VenuePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col justify-center items-center gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
              <Monitor className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Virtual Conference
            </h1>
            <div className="bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-600 rounded-xl p-8 shadow-lg">
              <p className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
                 Join Us Online From Anywhere in the World!
              </p>
              <p className="text-xl leading-relaxed text-blue-700 dark:text-blue-300">
                The 3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences will be conducted entirely online. Connect with researchers, professionals, and academics from across the globe without leaving your home or office.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
          Virtual Conference Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Video, title: "HD Video Streaming", description: "Crystal clear presentations and sessions" },
            { icon: Users, title: "Interactive Sessions", description: "Engage with speakers through live Q&A" },
            { icon: MessageSquare, title: "Networking Rooms", description: "Connect with attendees in virtual lounges" },
            { icon: Globe, title: "Global Access", description: "Join from any timezone, anywhere in the world" },
            { icon: Clock, title: "Session Recordings", description: "Access presentations after the event" },
            { icon: Award, title: "Digital Certificates", description: "Receive your participation certificate online" },
            { icon: Wifi, title: "Easy Platform", description: "User-friendly interface, no tech expertise needed" },
            { icon: Monitor, title: "Multi-Device Support", description: "Join from desktop, tablet, or mobile" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-blue-100 dark:bg-blue-800 border-2 border-blue-300 dark:border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-xl font-bold text-blue-700 dark:text-blue-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-800 dark:text-blue-200">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
            How to Join
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-blue-900 dark:to-blue-900 rounded-2xl p-8 shadow-xl border-2 border-blue-200 dark:border-blue-700">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                    Register for the Conference
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Complete your registration and payment through our website
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                    Receive Login Credentials
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Get your unique access link and password via email
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                    Join on Conference Day
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    Click your link and participate from any device
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Technical Requirements
          </h2>
          <Card className="bg-blue-50 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-600 shadow-lg">
            <CardContent className="p-8">
              <ul className="space-y-4 text-left text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Stable Internet Connection:</strong> Minimum 5 Mbps recommended</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Device:</strong> Computer, laptop, tablet, or smartphone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Browser:</strong> Latest version of Chrome, Firefox, Safari, or Edge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Audio:</strong> Speakers or headphones (microphone for presenters)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span><strong>Camera:</strong> Webcam recommended for presenters</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Register now and be part of this global academic gathering from the comfort of your location
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Register Now
          </a>
        </div>
      </motion.section>
    </div>
  );
}