"use client"
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DownloadCloudIcon } from "lucide-react";

const buttons = [
  { text: "Conference Poster", href: "/poster.pdf" },
  { text: "Registration Form", href: "/paperformat/Registration_Form.pdf" },
  { text: "Manuscript Template", href: "/paperformat/Fullpaper_Template.doc" },
  { text: "Abstract Template", href: "/paperformat/Abstract_Template.docx" },
  { text: "Copyright Form", href: "/paperformat/Copyright_Form.pdf" },
  { text: "Conference Brochure", href: "/brochure.pdf" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function Buttons() {
 

  return (
    <section  className="py-2  max-w-7xl mx-auto ">
      <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-center text-xl pb-3 inline-flex justify-center items-center gap-3 font-medium text-yellow-800">
            Download Conference Materials <DownloadCloudIcon />
          </h1>
     
      
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {buttons?.map((button) => (
              <motion.a
              href={button.href}
                key={button.text}
                className="bg-yellow-400 hover:bg-yellow-500/80 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-sm sm:text-sm text-center drop-shadow-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.text} {/* Added trim() to remove any whitespace */}
              </motion.a>
            ))}
          </motion.div>
       
      
      
      </div>
    </section>
  );
}