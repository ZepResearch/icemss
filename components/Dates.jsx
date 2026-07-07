'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { pb } from "@/lib/pocketbase";
import Link from "next/link";
import { Button } from "./ui/button";

export default function DatesSection() {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const records = await pb.collection("dates").getFullList({
          sort: "created",
          requestKey: null,
        });

        const formattedDates = records.map((record) => ({
          date: record.date,
          title: record.title,
          description: record.description,
        }));

        setDates(formattedDates);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dates:", err);
        setError("Failed to load important dates");
        setLoading(false);
      }
    };

    fetchDates();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-500 font-medium">Loading important dates...</p>
        </div>
      </section>
    );
  }

  if (error || dates.length === 0) {
    return null; // Keep page clean if no dates are loaded or error
  }

  return (
    <section className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-blue-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
            Milestones & Deadlines
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Important Dates
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-lg leading-relaxed">
            Mark your calendar for these key conference milestones and submission deadlines.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative pt-8">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[3px] bg-slate-100 -z-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
            />
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative">
            {dates.map((item, index) => {
              // Mark the first milestone or another key one as active/highlighted
              const isFirst = index === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center lg:text-left lg:items-start group"
                >
                  {/* Circle timeline indicator */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 transition-colors duration-300 ${
                        isFirst
                          ? "bg-blue-600 text-white shadow-blue-500/20 ring-4 ring-blue-500/10"
                          : "bg-slate-50 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600"
                      }`}
                    >
                      {isFirst ? (
                        <CheckCircle2 className="w-5 h-5 animate-pulse" />
                      ) : (
                        <Calendar className="w-5 h-5" />
                      )}
                    </motion.div>

                    {/* Connecting Line (Mobile/Tablet vertical timeline) */}
                    {index < dates.length - 1 && (
                      <div className="lg:hidden absolute top-12 left-1/2 -translate-x-1/2 w-[3px] h-12 bg-slate-100 -z-10" />
                    )}
                  </div>

                  {/* Card Info */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`w-full max-w-sm rounded-2xl p-6 border transition-all duration-300 ${
                      isFirst
                        ? "bg-white border-blue-200 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/5"
                        : "bg-white border-slate-100 hover:border-slate-200 shadow-md shadow-slate-100/50"
                    }`}
                  >
                    <span className="block text-2xl font-extrabold text-blue-700 mb-1">
                      {item.date}
                    </span>
                    <hr className={`border-t my-3 ${isFirst ? "border-blue-100" : "border-slate-100"}`} />
                    <h3 className="font-extrabold text-slate-800 text-base mb-1.5 leading-snug group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View Schedule Button */}
        <div className="flex justify-center items-center mt-16">
          <Link href="/schedule">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-colors text-sm"
            >
              View Full Conference Schedule
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}