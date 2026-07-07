'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    name: "Sulu State College",
    src: "/co-org/sulu.png",
    role: "Academic Co-Organizer",
    description: "Partnering to bridge educational resources and interdisciplinary academic research.",
  },
  {
    name: "PCERP",
    src: "/co-org/PCERP.jpeg",
    role: "Research Collaborator",
    description: "Supporting peer evaluation and continuous excellence in engineering and science.",
  },
];

export default function CoOrganizationLogos() {
  return (
    <section className="w-full py-16 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="text-center space-y-3 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Distinguished <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Co-Organizers</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col items-center bg-white border border-slate-100/80 rounded-3xl p-8 shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Top border glowing line on hover */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo Frame */}
              <div className="relative w-32 h-32 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={112}
                  height={112}
                  className="object-contain w-full h-full max-h-24 filter group-hover:brightness-105 transition-all duration-300"
                />
              </div>

              {/* Info text */}
              <div className="text-center mt-6 space-y-2">
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-50">
                  {logo.role}
                </span>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {logo.name}
                </h3>
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                  {logo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
