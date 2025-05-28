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
              Welcome to the 3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences. Our luxurious venue in the heart of Bangkok provides an inspiring environment for interdisciplinary discussions and collaborations.
            </p>
            <div className="flex items-center text-blue-700 dark:text-blue-300 text-lg gap-2">
            <span className="font-bold"><MapPin/></span> Radisson Suites Bangkok Sukhumvit<br/>
            23/2 Soi Sukhumvit 13, Khwaeng Khlong Toei Nuea, Khlong Toei, Bangkok 10110, Thailand

            </div>
            <div className="mt-4 text-blue-700 dark:text-blue-300 text-lg inline-flex gap-2">
              <span className="font-bold"><Calendar/></span> 12th - 13th December 2025
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
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5766798013456!2d100.5551144758267!3d13.74405999747115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee677aa7f5b%3A0x297e4d6053920063!2sRadisson%20Suites%20Bangkok%20Sukhumvit!5e0!3m2!1sen!2sin!4v1748458760006!5m2!1sen!2sin"
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
      title: "Grand Palace",
      description:
        "Explore Thailand's most famous landmark, a complex of buildings that served as the official residence of Thai kings. Marvel at the intricate architecture, golden spires, and the sacred Emerald Buddha temple within its grounds.",
      img: "https://images.unsplash.com/photo-1558655822-54f2380fadbb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Wat Pho Temple",
      description:
        "Visit Bangkok's oldest temple, home to the famous 46-meter-long reclining Buddha covered in gold leaf. The temple is also renowned as Thailand's first public university and the birthplace of traditional Thai massage.",
      img: "https://images.unsplash.com/photo-1670152251115-d3f969ddc1e1?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Chatuchak Weekend Market",
      description:
        "Experience one of the world's largest weekend markets with over 15,000 stalls. Shop for everything from vintage clothing and antiques to exotic pets and delicious street food in this bustling marketplace.",
      img: "https://images.unsplash.com/photo-1625504461811-163b6e30f97d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Khao San Road",
      description:
        "Immerse yourself in Bangkok's backpacker hub, famous for its vibrant nightlife, street food, and eclectic mix of travelers. Browse through bars, restaurants, massage parlors, and shops selling everything imaginable.",
      img: "https://images.unsplash.com/photo-1660404435871-e3f27e901659?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Chao Phraya River",
      description:
        "Take a scenic boat ride along Bangkok's main river artery. Enjoy stunning views of temples, palaces, and modern skyscrapers while experiencing the city from a unique perspective on traditional longtail boats or modern express boats.",
      img: "https://images.unsplash.com/photo-1652024109236-30cb6e70bc8d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Jim Thompson House",
      description:
        "Discover the beautiful traditional Thai architecture and art collection of the American entrepreneur who revitalized the Thai silk industry. The museum showcases Southeast Asian art in a stunning teak house surrounded by lush gardens.",
      img: "https://images.unsplash.com/photo-1707789350609-66ab1b3b1a93?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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