'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONFERENCE } from "@/constants/conference";
import { Calendar, MapPin, Users, Award, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const backgroundSlides = [
  {
    title: "Inaugural Ceremony",
    image: "/gallery/2nd_ICEMSS_05.png",
  },
  {
    title: "Keynote Sessions",
    image: "/gallery/2nd_ICEMSS_02.png",
  },
  {
    title: "Paper Presentations",
    image: "/gallery/2nd_ICEMSS_06.png",
  },
  {
    title: "Networking Dinner",
    image: "/gallery/2nd_ICEMSS_04.png",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden py-16 lg:py-24">
      {/* Decorative background glow blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-400/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8"
          >
            {/* Tag Badge */}
            <div className="flex items-center gap-2">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/80 border border-blue-200/50 backdrop-blur-sm shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                Join Us • Kuala Lumpur & Hybrid
              </motion.span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {CONFERENCE.name.split(" ").slice(0, 2).join(" ")}{" "}
                <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
                  {CONFERENCE.name.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                Integrating Engineering, Management, and Social Sciences for a Sustainable Future. Bridging disciplines, fostering innovation, and addressing global challenges.
              </p>
            </div>

            {/* Indexing Partners Logos */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Abstracted & Indexed In:
              </span>
              <div className="flex flex-wrap items-center gap-4 bg-white/70 border border-slate-100 p-3.5 rounded-2xl shadow-sm backdrop-blur-sm max-w-lg">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                  <img src="/assets/scopus.png" alt="Scopus" className="h-7 w-auto object-contain" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                  <img src="/assets/clarivate.png" alt="Clarivate Analytics" className="h-7 w-auto object-contain" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center bg-white px-3 py-2 rounded-xl border border-slate-100 shadow-sm">
                  <img src="/assets/zepresearch.png" alt="Zep Research" className="h-7 w-auto object-contain" />
                </motion.div>
              </div>
            </div>

            {/* Conference Dates & Venue Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-5 bg-white border border-slate-100 shadow-md shadow-slate-100/50 rounded-2xl"
              >
                <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Conference Dates
                  </span>
                  <span className="text-base font-bold text-slate-800 leading-tight block">
                    {CONFERENCE.date}
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-5 bg-white border border-slate-100 shadow-md shadow-slate-100/50 rounded-2xl"
              >
                <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Conference Venue
                  </span>
                  <span className="text-base font-bold text-slate-800 leading-tight block">
                    {CONFERENCE.venue.location}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* CTAs & Early Bird Discount */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/registration" className="sm:w-auto w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  Register for {CONFERENCE.shortForm}
                </motion.button>
              </Link>
              <Link href="/submission" className="sm:w-auto w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 shadow-sm transition-colors"
                >
                  Submit Your Paper
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>

            {/* Early Bird Discount Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-xl overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 p-[1.5px] shadow-md shadow-amber-500/10"
            >
              <div className="bg-white rounded-[14px] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl animate-bounce">🔥</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Early Bird Registration Active</h4>
                    <p className="text-xs text-slate-500">Save up to 20% on all ticketing tiers.</p>
                  </div>
                </div>
                <Link href="/registration">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                    Claim Discount <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Immersive Slider & CPD Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col space-y-6 lg:space-y-8"
          >
            {/* Image Slider Wrapper */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 shadow-2xl border-4 border-white">
              {/* Slideshow images with Ken Burns zoom effect */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <motion.div
                    animate={{ scale: [1, 1.08] }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={backgroundSlides[currentSlide].image}
                      alt={backgroundSlides[currentSlide].title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                  {/* Caption badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold text-white bg-slate-950/70 border border-white/10 backdrop-blur-md">
                      {backgroundSlides[currentSlide].title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CPD Accredited Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100/50 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden"
            >
              {/* Floating glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

              <div className="relative w-28 h-28 shrink-0 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-2.5 shadow-inner">
                <img src="/assets/cpd2.svg" alt="CPD Accredited" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-widest">
                  <Award className="w-4 h-4 text-amber-500" />
                  Accredited Event
                </div>
                <h3 className="text-lg font-bold text-slate-800 leading-tight">
                  Continuing Professional Development
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Earn internationally recognized CPD credits to boost your career. Learn more about standards.
                </p>
                <Link href="https://www.cpdstandards.com/become-accredited/events-conferences/" target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <span className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 hover:underline cursor-pointer pt-1">
                    Learn about CPD accreditation <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

