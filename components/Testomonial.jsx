'use client';

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Award, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I had a wonderful experience with Zep Research during the recent conference in Kuala Lumpur, Malaysia. The staff is so cooperative and helpful. I had an amazing time and a great learning experience with them.",
    name: "Dr. Aishwarya Singh",
    title: "Professor of Engineering, Stanford University",
    avatar: "/testimonial/t1.jpg",
  },
  {
    quote:
      "A well-organized and insightful conference that delivered valuable takeaways in every single session. The interdisciplinary papers opened up brand new research angles for my lab.",
    name: "Fujie Ibrahim",
    title: "Head of Management Studies, MIT",
    avatar: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    quote:
      "The World Conference on Climate Change and Environmental Sustainability in Kuala Lumpur was a wonderful experience for me, and I benefited greatly from the session panels and workshops.",
    name: "Nourdeen82 SN",
    title: "Research Director, Social Innovation Institute",
    avatar: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=1974&auto=format&fit=crop",
  },
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Testimonial() {
  return (
    <section className="w-full py-16 md:py-28 bg-slate-50/50 relative overflow-hidden">
      {/* Background glow decorative details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Top Header bar with ratings */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-100 mb-12">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="rounded-2xl bg-blue-50 text-blue-700 p-3 shadow-inner shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest block">
                Global Recognition
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 leading-tight">
                Leading Interdisciplinary Conference
              </h2>
            </div>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-3 shadow-md">
            <div className="flex gap-0.5">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-4.5 w-4.5 fill-amber-400 text-amber-400"
                  />
                ))}
            </div>
            <div className="text-xs font-bold text-slate-700 border-l border-slate-100 pl-3">
              <span>4.9 / 5.0</span>
              <span className="text-slate-400 font-medium ml-1">(300+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((test, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ y: -6 }}>
              <Card className="relative bg-white border border-slate-100/80 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                
                {/* Large Background Quote Symbol */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-100/60 -z-1 pointer-events-none" />

                <blockquote className="space-y-6 flex flex-col justify-between h-full relative z-10">
                  <p className="text-sm font-semibold text-slate-500 leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                  
                  <footer className="flex items-center gap-3.5 pt-4 border-t border-slate-50">
                    <div className="relative w-12 h-12 rounded-full border-2 border-blue-600 overflow-hidden shrink-0 shadow-sm">
                      <Image
                        src={test.avatar}
                        alt={test.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <cite className="not-italic font-extrabold text-slate-800 text-sm block truncate">
                        {test.name}
                      </cite>
                      <span className="text-[11px] font-bold text-slate-400 block truncate leading-normal">
                        {test.title}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


