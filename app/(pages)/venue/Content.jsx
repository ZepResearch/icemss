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
import { MapPin, Zap, Users, Globe, Coffee, Book, Calendar } from 'lucide-react';

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
              src="https://plus.unsplash.com/premium_photo-1697729600112-434ee1c7f670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Conference Venue"
              
              width={500}
              height={400}
              className="rounded-2xl bg-black "
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 text-blue-600 dark:text-blue-400">
              Conference Venue
            </h1>
            <p className="text-xl mb-6 leading-relaxed">
              Welcome to the 3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences. Our state-of-the-art venue in the heart of GOA provides an inspiring environment for interdisciplinary discussions and collaborations.
            </p>
            <div className="flex items-center text-blue-700 dark:text-blue-300 text-lg gap-2">
            <span className="font-bold"><MapPin/></span> GOA( Hotel/ University), [detail Venue declared Soon]

            </div>
            <div className="mt-4 text-blue-700 dark:text-blue-300 text-lg inline-flex gap-2">
              <span className="font-bold"><Calendar/></span> 11th - 12h December 2025
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
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
          Venue Highlights
        </h1>
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
              <Card className="bg-blue-100 dark:bg-blue-800 border-2 border-blue-300 dark:border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle className="text-xl font-bold text-blue-700 dark:text-blue-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-800 dark:text-blue-200">{feature.description}</CardDescription>
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
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
          Location
        </h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492479.18763210607!2d74.0066944!3d15.349728450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1744106887763!5m2!1sen!2sin"
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
        <h3 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
          Nearby Attractions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      title: "Baga Beach",
      description:
        "Relax on one of Goa’s most famous beaches, known for its vibrant nightlife, water sports, and beachside shacks. Whether you're looking to sunbathe, try jet skiing, or dance the night away, Baga Beach has something for everyone.",
      img: "http://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Fort Aguada",
      description:
        "Visit this well-preserved 17th-century Portuguese fort that offers panoramic views of the Arabian Sea. Explore its historic lighthouse and stroll through the ramparts that once protected Goa from invasions.",
      img: "https://images.unsplash.com/photo-1727786473130-61a6f9d685b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Basilica of Bom Jesus",
      description:
        "Discover this UNESCO World Heritage Site that houses the mortal remains of St. Francis Xavier. The baroque architecture and richly decorated interiors make it a significant landmark of Goa’s colonial heritage.",
      img: "https://images.unsplash.com/photo-1706940119676-957a79a61248?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Anjuna Flea Market",
      description:
        "Shop at this iconic Wednesday market known for its bohemian vibe. You’ll find everything from handmade jewelry and clothes to souvenirs and delicious street food, all while enjoying live music.",
      img: "https://images.unsplash.com/photo-1721786839848-d9f9fd9e1e28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Dudhsagar Waterfalls",
      description:
        "Marvel at one of India's tallest waterfalls, cascading down in a milky white torrent amidst lush greenery. Accessible via jeep safari through the Bhagwan Mahavir Wildlife Sanctuary, it's a must-visit for nature lovers.",
      img: "https://images.unsplash.com/photo-1692889587543-f09684047399?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Chapora Fort",
      description:
        "Enjoy a short trek up to this historic fort made famous by Bollywood. From the top, take in sweeping views of Vagator Beach and the Arabian Sea, especially stunning at sunset.",
      img: "https://images.unsplash.com/photo-1725989782740-e0ead330866e?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ].map((attraction, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-blue-100 dark:bg-blue-800 border-2 border-blue-300 dark:border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-blue-700 dark:text-blue-300">
            {attraction.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={attraction.img}
            alt={attraction.title}
            width={500}
            height={500}
            className="rounded-md drop-shadow-md py-2 mb-4 "
          />
          <CardDescription className="text-blue-800 dark:text-blue-200">
            {attraction.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>

      </motion.section>
    </div>
  );
}

