"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, Image as ImageIcon, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ModeOfPresent() {
  const [activeMode, setActiveMode] = useState(null);

  const presentationModes = [
    {
      title: "Oral Presentation",
      description:
        "Present your research through a live speech to the audience. Oral presentations offer a dynamic way to share your findings, engage with your peers, and receive immediate feedback.",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "10 min. presentation. Submit your presentation at info@icemss.in.",
    },
    {
      title: "Poster Presentation",
      description:
        "Showcase your work visually with an academic poster. Poster presentations offer a unique opportunity to present your research in a concise, visually appealing format.",
      icon: ImageIcon,
      image: "https://images.unsplash.com/photo-1493972741200-51d407e0ee33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Poster presentation.",
    },
    {
      title: "Virtual Presentation",
      description:
        "Present remotely through our online conference platform. Virtual presentations offer flexibility and accessibility, allowing you to share your research with a global audience without the need for travel.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "Virtual presentation (Via Zoom Platform).",
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
            Mode of Presentation
          </Badge>
          <h1 className="text-4xl font-bold text-primary mb-4">
          3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred method of presenting at the International
            Conference on  Engineering, Management and Social Sciences
          </p>
        </motion.div>
        {/* <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-8 text-prbg-primary/10 dark:text-prbg-primary/10"
        >
         
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-gray-700 dark:text-gray-300"
        >
          
        </motion.p> */}
        {presentationModes.map((mode, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-8  overflow-hidden "
          >
            <div
              className={`flex flex-col items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/3">
                <img
                  src={mode.image}
                  alt={mode.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="text-3xl font-bold mb-4 text-blue-400 dark:text-blue-400 flex items-center">
                  <mode.icon className="w-8 h-8 mr-2" />
                  {mode.title}
                </div>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  {mode.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 dark:text-gray-300 mt-4 p-4 bg-primary/10 dark:bg-primary/30 rounded-lg">
                    {mode.title === "Oral Presentation" && (
                      <>
                        <strong>10 min. presentation</strong><br />
                        Submit your presentation at <a href="mailto:info@icemss.in" className="underline text-blue-600">info@icemss.in</a>.<br />
                        Present your research live and engage with the audience. Receive immediate feedback and participate in Q&A sessions.
                      </>
                    )}
                    {mode.title === "Poster Presentation" && (
                      <>
                        <strong>Poster presentation</strong><br />
                        Display your research visually and interact with attendees during the poster session. Posters will be showcased at the conference venue and available for download online.
                      </>
                    )}
                    {mode.title === "Virtual Presentation" && (
                      <>
                        <strong>Virtual presentation (Via Zoom Platform)</strong><br />
                        Present your work remotely using the Zoom platform. Join live sessions, interact with participants, and be part of the conference from anywhere in the world.
                      </>
                    )}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
