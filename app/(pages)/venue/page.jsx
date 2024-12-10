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
              alt="Conference Vensue"
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
              Welcome to the International Conference on Engineering, Management and Social Sciences. Our state-of-the-art venue in the heart of Singapore provides an inspiring environment for interdisciplinary discussions and collaborations.
            </p>
            <div className="flex items-center text-yellow-700 dark:text-yellow-300 text-lg">
              <MapPin className="mr-2 h-6 w-6" />
              <span>Singapore Expo, Singapore</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7790317519364!2d103.95789661475396!3d1.3352888990297052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3cd949c2bf4d%3A0xd1e4d5e64babe9c8!2sSingapore%20Expo!5e0!3m2!1sen!2sus!4v1620847808345!5m2!1sen!2sus"
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
              title: "Gardens by the Bay",
              description: "Explore futuristic gardens and the iconic Supertree Grove",
            },
            {
              title: "Marina Bay Sands",
              description: "Visit the luxurious integrated resort with its famous infinity pool",
            },
            {
              title: "Sentosa Island",
              description: "Enjoy beaches, theme parks, and attractions on this resort island",
            },
            {
              title: "Singapore Botanic Gardens",
              description: "Stroll through this UNESCO World Heritage site",
            },
            {
              title: "Merlion Park",
              description: "See the iconic Merlion statue and enjoy views of Marina Bay",
            },
            {
              title: "Orchard Road",
              description: "Experience Singapore's premier shopping and entertainment district",
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

