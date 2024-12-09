"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function CoOrganizationLogosClient({ logos }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center"
    >
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <div className="relative w-24 h-24 overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={logo.src}
              alt={logo.name}
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
