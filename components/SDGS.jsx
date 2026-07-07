'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CONFERENCE } from "@/constants/conference";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const sdgCards = [
  {
    number: "17",
    title: "Partnerships for the Goals",
    icon: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.12 0-.23-.01-.35.21-.26.4-.54.56-.84.37-.34.72-.72 1.05-1.12.28-.33.54-.68.78-1.04.24-.37.46-.76.66-1.16.17-.34.33-.69.47-1.05.13-.35.24-.71.34-1.08.09-.35.17-.71.23-1.07.06-.37.1-.75.13-1.13.02-.38.03-.75.03-1.13 0-.41-.02-.81-.06-1.21-.04-.4-.1-.79-.17-1.18-.08-.38-.18-.76-.3-1.13-.12-.37-.26-.73-.42-1.08-.16-.35-.34-.69-.54-1.02-.2-.33-.42-.65-.66-.95-.24-.3-.5-.58-.78-.84-.28-.26-.57-.5-.88-.73-.31-.22-.64-.42-.98-.6-.34-.18-.69-.33-1.05-.47-.36-.14-.73-.25-1.11-.34-.38-.09-.76-.16-1.15-.2-.39-.05-.79-.07-1.19-.07zm3 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",
    gradient: "from-[#14497b] to-[#0d3053]", // Official SDG Blue
    focus: "Academia & Government collaborations"
  },
  {
    number: "04",
    title: "Quality Education",
    icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
    gradient: "from-[#c5192d] to-[#9c1221]", // Official SDG Red
    focus: "Open access research & knowledge sharing"
  },
  {
    number: "08",
    title: "Decent Work & Economic Growth",
    icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
    gradient: "from-[#a21942] to-[#7f1232]", // Official SDG Rose/Burgundy
    focus: "Scientific innovation & job creation"
  },
  {
    number: "09",
    title: "Industry, Innovation & Infrastructure",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
    gradient: "from-[#f26a2e] to-[#cc511a]", // Official SDG Orange
    focus: "Sustainable engineering & technology frameworks"
  },
  {
    number: "10",
    title: "Reduced Inequalities",
    icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
    gradient: "from-[#dd1367] to-[#b30d51]", // Official SDG Pink
    focus: "Inclusive representation for global delegates"
  },
];

export default function SDGSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(sdgCards.length - 2);
  const cardWidth = 290 + 20; // width + gap

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 1024) {
          setMaxIndex(sdgCards.length - 1);
        } else {
          setMaxIndex(sdgCards.length - 2);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="w-full py-16 md:py-28 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
            Sustainable Commitments
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Advancing the United Nations <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Sustainable Development Goals</span> (SDGs)
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            {CONFERENCE.shortForm} {CONFERENCE.year} aligns research themes with the UN 2030 Agenda, addressing critical global issues through interdisciplinary solutions.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: SDG Official Branding Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md bg-white border border-slate-100 p-8 rounded-3xl shadow-xl shadow-slate-200/50 flex items-center justify-center">
              {/* Decorative gradient radial accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-3xl -z-10" />
              <Image
                src="/SDG-logo.png"
                alt="UN SDG Logo"
                width={360}
                height={360}
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>
          </motion.div>

          {/* Right Side: Enhanced Carousel Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative overflow-hidden py-4 px-1">
              {/* Sliding Flex Container */}
              <div
                className="flex gap-5 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * cardWidth}px)`,
                }}
              >
                {sdgCards.map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className={`flex-none w-[290px] h-[340px] bg-gradient-to-br ${card.gradient} text-white rounded-3xl p-6 shadow-xl shadow-slate-300/30 flex flex-col justify-between relative overflow-hidden group`}
                  >
                    {/* Glowing decorative background effect */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black opacity-30 select-none">{card.number}</span>
                      <svg className="w-10 h-10 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                        <path d={card.icon} />
                      </svg>
                    </div>

                    {/* Middle Title & Focus */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-extrabold leading-snug tracking-tight">
                        {card.title}
                      </h3>

                      <div className="space-y-1.5 border-t border-white/10 pt-3">
                        <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-white/80" /> Conference Focus:
                        </span>
                        <p className="text-xs text-white/90 leading-relaxed font-semibold">
                          {card.focus}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3.5 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex items-center justify-center w-11 h-11 border border-slate-200 hover:border-slate-300 text-slate-700 bg-white rounded-full hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="flex items-center justify-center w-11 h-11 border border-slate-200 hover:border-slate-300 text-slate-700 bg-white rounded-full hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <span className="text-xs font-bold text-slate-400 tracking-wider">
                Showing {currentIndex + 1} - {currentIndex + 2} of {sdgCards.length} goals
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
