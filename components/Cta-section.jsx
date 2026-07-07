'use client';

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Building2, Users, Trophy, ArrowRight, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONFERENCE } from "@/constants/conference";

const ctaItems = [
  {
    title: "Awards & Recognition",
    description: "Best Paper Awards across multiple categories with official certificates and medals.",
    icon: Trophy,
    action: "View Awards",
    link: "/award",
    color: "text-amber-600 bg-amber-50",
  },
  {
    title: "Become a Sponsor",
    description: "Support academic excellence and gain high visibility in the global research community.",
    icon: Award,
    action: "Sponsor Now",
    link: "/sponsorship",
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Venue & Lodging",
    description: `${CONFERENCE.venue.location}. Review lodging options and travel logistics.`,
    icon: Building2,
    action: "View Location",
    link: "/venue",
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    title: "Committee Members",
    description: "Meet our distinguished scientific board and organizing team members.",
    icon: Users,
    action: "Meet the Team",
    link: "/committee",
    color: "text-teal-600 bg-teal-50",
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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {/* Quick Links Dashboard Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ctaItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={index} variants={cardVariants} whileHover={{ y: -6 }}>
                  <Card className="h-full border border-slate-100/80 bg-white rounded-3xl shadow-lg hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div className="p-6 space-y-4">
                      {/* Icon Bubble */}
                      <div className={`p-3 w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shadow-sm`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-bold text-slate-800 text-lg leading-snug">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.description}</p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <Link href={item.link}>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 cursor-pointer group">
                          {item.action}
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Main Call To Register Bento Panel */}
          <motion.div variants={cardVariants}>
            <Card className="overflow-hidden border border-slate-100 bg-white rounded-3xl shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Column: Event details and action */}
                  <div className="p-8 lg:p-12 md:col-span-7 flex flex-col justify-between space-y-8">
                    <div className="space-y-3">
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                        Get Involved
                      </span>
                      <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
                        Secure Your Spot Today
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-xl font-medium">
                        Join delegates from across the globe in exploring cutting-edge discoveries, methodologies, and papers at the {CONFERENCE.shortForm} conference.
                      </p>
                    </div>

                    {/* Metadata Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                      <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
                        <Calendar className="w-5 h-5 text-blue-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-700">{CONFERENCE.date}</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
                        <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-700">{CONFERENCE.venue.location}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link href="/registration">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 text-sm"
                        >
                          Register for the Conference
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Immersive Graphic representation */}
                  <div className="relative md:col-span-5 aspect-[4/3] md:aspect-auto min-h-[300px]">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1470&auto=format&fit=crop"
                      alt="Conference Hall"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                    
                    {/* Floating statistics layer */}
                    <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20">
                      <h4 className="font-extrabold text-sm text-slate-800 leading-tight">
                        Join 1000+ Academic Professionals
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-normal font-semibold mt-1">
                        Network, publish, and exchange knowledge with delegates from 40+ countries.
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


