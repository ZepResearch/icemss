'use client';

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { CONFERENCE } from "@/constants/conference";

const stats = [
  {
    target: 300,
    suffix: "+",
    label: "Expected Attendees",
    description: "Global participation from 40+ countries",
  },
  {
    target: 500,
    suffix: "+",
    label: "Networking Opportunities",
    description: "Connect with professionals and researchers worldwide",
  },
  {
    target: 15,
    suffix: "+",
    label: "Interactive Workshops",
    description: "Hands-on learning and skill development sessions",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative side accent blobs */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Side: Content & Counters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                About the Conference
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
                Experience the Premier Academic{" "}
                <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  Research Gathering
                </span>
              </h2>
              <p className="max-w-[620px] text-slate-600 text-lg leading-relaxed">
                Join us for an enriching experience at <span className="font-semibold text-slate-800">{CONFERENCE.name}</span>, where the brightest minds in engineering, management, and social sciences converge for groundbreaking discussions, collaborative projects, and peer-reviewed research panels.
              </p>
              
              <div className="pt-2">
                <Link href="/about-conference">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-700 font-semibold transition-all duration-300 text-sm"
                  >
                    Learn more about our mission
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Counts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-700 flex items-center">
                    <CountUp end={stat.target} suffix={stat.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-800 text-sm">{stat.label}</h3>
                    <p className="text-xs text-slate-500 leading-normal">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Enhanced Image Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Decorative colored frames */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl opacity-[0.03] blur-lg pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-10 blur-2xl pointer-events-none" />

            {/* Main Image Frame */}
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100 group cursor-pointer">
              <Image
                src="/gallery/ICEMSS_10.jpg"
                alt="Conference Hall & Presenters"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image banner tooltip */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-md text-xs font-semibold text-slate-800 text-center">
                  📍 Academic presenters networking in previous session
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


