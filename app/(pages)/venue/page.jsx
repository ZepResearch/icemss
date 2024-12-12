"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Zap, Users, Globe, Coffee, Book } from 'lucide-react';

export default function VenuePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen ">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="https://illustrations.popsy.co/yellow/hitchhiking.svg"
              alt="Conference Venue"
              width={500}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-yellow-600 dark:text-yellow-400">
              Conference Venue
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              Welcome to the International Conference on Engineering, Management and Social Sciences. Our state-of-the-art venue in the heart of Delhi provides an inspiring environment for interdisciplinary discussions and collaborations.
            </p>
            <div className="flex items-center text-yellow-700 dark:text-yellow-300 text-lg">
              <MapPin className="mr-2 h-6 w-6" />
              <span> New Delhi, India</span>
            </div>
            <div className="mt-4 text-yellow-700 dark:text-yellow-300 text-lg">
              <span className="font-bold">Date:</span> 19-20 February 2025
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
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-600 dark:text-yellow-400">
          Venue Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Cutting-edge Technology", description: "Experience the latest in conference tech" },
            { icon: Users, title: "Networking Spaces", description: "Dedicated areas for making connections" },
            { icon: Globe, title: "Global Accessibility", description: "Easy access for international attendees" },
            { icon: Coffee, title: "Refreshment Zones", description: "Keep energized throughout the event" },
            { icon: Book, title: "Resource Center", description: "Access to digital libraries and resources" },
            { icon: MapPin, title: "Central Location", description: "Close to major transportation hubs" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-yellow-100 dark:bg-yellow-800 border-2 border-yellow-300 dark:border-yellow-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-2" />
                  <CardTitle className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-yellow-800 dark:text-yellow-200">{feature.description}</CardDescription>
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
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-600 dark:text-yellow-400">
          Location
        </h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5141287472396!2d77.24333491508271!3d28.61517798242354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce318a027dbb7%3A0xf12a1c6b59580448!2sPragati%20Maidan!5e0!3m2!1sen!2sin!4v1620847808345!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-600 dark:text-yellow-400">
          Nearby Attractions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "India Gate",
              description: "Visit the iconic war memorial and enjoy the surrounding gardens",
            },
            {
              title: "Red Fort",
              description: "Explore this UNESCO World Heritage site, a symbol of Mughal architecture",
            },
            {
              title: "Qutub Minar",
              description: "Marvel at this towering minaret, another UNESCO World Heritage site",
            },
            {
              title: "Humayun's Tomb",
              description: "Admire the architectural beauty of this Mughal-era tomb",
            },
            {
              title: "Akshardham Temple",
              description: "Experience the grandeur of this modern Hindu temple complex",
            },
            {
              title: "Connaught Place",
              description: "Enjoy shopping and dining in this bustling commercial center",
            },
          ].map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-yellow-100 dark:bg-yellow-800 border-2 border-yellow-300 dark:border-yellow-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                    {attraction.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-yellow-800 dark:text-yellow-200">{attraction.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

