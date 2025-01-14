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
              src="https://plus.unsplash.com/premium_photo-1661938135446-9aae7262fed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              Welcome to the 2<sup>nd</sup> International Conference on Engineering, Management and Social Sciences. Our state-of-the-art venue in the heart of Delhi provides an inspiring environment for interdisciplinary discussions and collaborations.
            </p>
            <div className="flex items-center text-blue-700 dark:text-blue-300 text-lg gap-2">
            <span className="font-bold"><MapPin/></span> Indraprastha College For Women–Delhi University (IPCW–DU),31, Sham Nath Marg, Civil Lines, New Delhi, Delhi, 110054, India

            </div>
            <div className="mt-4 text-blue-700 dark:text-blue-300 text-lg inline-flex gap-2">
              <span className="font-bold"><Calendar/></span> 19th - 20th February 2025
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.301549333858!2d77.22215584648458!3d28.68062486557159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda4c70001f9%3A0x175edb40f8978e19!2sIndraprastha%20College%20For%20Women%E2%80%93Delhi%20University%20(ICW%E2%80%93DU)!5e0!3m2!1sen!2sin!4v1736836945107!5m2!1sen!2sin"
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
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
          Nearby Attractions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
           {
            title: "India Gate",
            description: "Visit the iconic war memorial, a 42-meter high arch built to honor Indian soldiers who died in World War I. Enjoy the surrounding lush gardens, perfect for picnics and evening strolls. At night, the illuminated monument creates a breathtaking spectacle against the Delhi skyline.",
            img: "https://plus.unsplash.com/premium_photo-1697730429201-381b71f61427?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            title: "Red Fort",
            description: "Explore this UNESCO World Heritage site, a magnificent symbol of Mughal architecture. Built in the 17th century, the Red Fort's massive red sandstone walls house palaces, audience halls, and ornate gardens. Don't miss the Sound and Light show in the evenings, which brings the fort's rich history to life.",
            img: "https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            title: "Qutub Minar",
            description: "Marvel at this towering minaret, another UNESCO World Heritage site. Standing at 73 meters, it's the tallest brick minaret in the world. Explore the surrounding complex, which includes ancient mosques, tombs, and an iron pillar famous for its rust-resistant composition. The intricate carvings and Islamic calligraphy are a testament to medieval Indian craftsmanship.",
            img: "https://images.unsplash.com/photo-1667849521212-e9843b89f322?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            title: "Humayun's Tomb",
            description: "Admire the architectural beauty of this Mughal-era tomb, often considered a precursor to the Taj Mahal. Built in the 16th century, this garden-tomb combines Persian and Indian architectural styles. The symmetrical gardens, water channels, and the red sandstone and marble structure create a serene and majestic atmosphere.",
            img: "https://images.unsplash.com/photo-1620563202699-5661aefec7ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            title: "Akshardham Temple",
            description: "Experience the grandeur of this modern Hindu temple complex, a masterpiece of Indian architecture and spirituality. Opened in 2005, it showcases 10,000 years of Indian culture with intricate carvings, a musical fountain, and a breathtaking main monument built entirely of Rajasthani pink sandstone and Italian Carrara marble. The evening water show is a must-see spectacle.",
            img: "https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734073737/samples/qgogwaunza75ncruxttg.png"
          },
          {
            title: "Connaught Place",
            description: "Enjoy shopping and dining in this bustling commercial center, known for its iconic circular design and Georgian-style architecture. This colonial-era market is home to flagship stores, boutiques, art galleries, and some of Delhi's best restaurants and cafes. The central park is perfect for people-watching and hosts various cultural events throughout the year.",
            img: "https://images.unsplash.com/photo-1609338966656-926be552950d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  <Image src={attraction.img} alt={attraction.title} width={500} height={500} className="rounded-md drop-shadow-md py-2 mb-4 "
                  />
                  <CardDescription className="text-blue-800 dark:text-blue-200">{attraction.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

