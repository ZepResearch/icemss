'use client';

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Home, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONFERENCE } from "@/constants/conference";

export default function VenueCTA() {
  return (
    <section className="w-full py-12 md:py-24 bg-white flex items-center justify-center">
      <div className="container max-w-7xl px-4 md:px-6 w-full">
        
        {/* Main Immersive Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl min-h-[520px] flex items-center p-6 sm:p-12 lg:p-16"
        >
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1470&auto=format&fit=crop')",
            }}
          />
          {/* Dark scrim overlay */}
          <div className="absolute inset-0 bg-slate-950/75 z-10" />

          {/* Glowing blue accent in background */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] z-10 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-20 max-w-2xl text-white space-y-6">
            
            {/* Header tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-900/40 border border-blue-800/30 backdrop-blur-sm shadow-inner">
              <MapPin className="w-3.5 h-3.5" />
              Official Host City
            </span>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Venue & Event Location
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the future of interdisciplinary conferences at our premium host venue for <span className="font-semibold text-white">{CONFERENCE.shortForm}</span>. Located in the heart of Saitama, Tokyo, the center boasts state-of-the-art academic facilities, lecture halls, and excellent transit links.
            </p>

            {/* Glass Info Cards Grid */}
            <div className="grid gap-3 sm:grid-cols-2 pt-2">
              
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Home className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Venue Name</span>
                  <span className="text-xs font-bold leading-normal block">{CONFERENCE.venue.name}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Calendar className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Dates</span>
                  <span className="text-xs font-bold leading-normal block">{CONFERENCE.date}</span>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2 flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <MapPin className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Address Details</span>
                  <span className="text-xs font-bold leading-relaxed block text-slate-200">{CONFERENCE.venue.address}</span>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/venue" className="sm:w-auto w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-colors text-xs"
                >
                  Explore Venue Map & Logistics
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/registration" className="sm:w-auto w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-colors text-xs"
                >
                  Register as Delegate
                </motion.button>
              </Link>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}


