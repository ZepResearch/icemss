'use client';

import React from "react";
import { motion } from "framer-motion";
import { Check, User, GraduationCap, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const tiers = [
  {
    name: "Student Presenter",
    icon: GraduationCap,
    earlyBird: "250 USD",
    standard: "300 USD",
    description: "For currently enrolled undergraduate and graduate research students.",
    features: [
      "Oral or Poster Presentation slot",
      "Digital Abstract Book & Proceedings",
      "CPD Certification credits",
      "Delegate Kit & conference lunches",
      "Certificate of Presentation",
    ],
    highlight: false,
    ctaText: "Register as Student",
    buttonStyle: "bg-slate-900 text-white hover:bg-slate-800",
  },
  {
    name: "Academic Presenter",
    icon: User,
    earlyBird: "300 USD",
    standard: "350 USD",
    description: "For university professors, lecturers, and corporate researchers.",
    features: [
      "Priority Oral/Poster Presentation slot",
      "Abstract Book & Indexed Proceedings",
      "CPD Certification credits (Full)",
      "Premium Delegate Kit & lunches",
      "Certificate of Presentation",
      "Co-author submission options",
    ],
    highlight: true,
    ctaText: "Register as Academician",
    buttonStyle: "bg-gradient-to-r from-blue-700 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:from-blue-800 hover:to-indigo-700",
  },
  {
    name: "Listener / Attendee",
    icon: Headphones,
    earlyBird: "200 USD",
    standard: "250 USD",
    description: "For scholars and professionals attending without presenting papers.",
    features: [
      "Access to all Keynotes & Tech Sessions",
      "Abstract Book (Digital copy)",
      "Networking coffee breaks & lunches",
      "Certificate of Attendance",
      "Career development workshop access",
    ],
    highlight: false,
    ctaText: "Register as Listener",
    buttonStyle: "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50",
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

export default function TicketCTA() {
  return (
    <section className="w-full py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-100/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
            Conference Access Pass
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Registration Fees
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-500 text-base md:text-lg">
            Physical Presentation registration. All registrations include a virtual attendance fallback options.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
        >
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between bg-white border rounded-3xl p-8 transition-all duration-300 ${tier.highlight
                    ? "border-blue-500 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/10 scale-102 z-10"
                    : "border-slate-100 shadow-md shadow-slate-100/50 hover:border-slate-200"
                  }`}
              >
                {/* Popular Pill badge */}
                {tier.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}

                {/* Card Top section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider block">
                      {tier.name}
                    </span>
                    <IconComponent className={`w-6 h-6 ${tier.highlight ? "text-blue-600" : "text-slate-400"}`} />
                  </div>

                  {/* Price Block */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-slate-900 leading-none">
                        {tier.earlyBird.split(" ")[0]}
                      </span>
                      <span className="text-lg font-bold text-slate-500">
                        {tier.earlyBird.split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                      <span>Early Bird Price</span>
                      <span>•</span>
                      <span className="line-through">Standard: {tier.standard}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {tier.description}
                  </p>

                  <hr className="border-slate-100" />

                  {/* Features list */}
                  <ul className="space-y-3.5">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-600 font-semibold">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-blue-600" : "text-slate-400"}`} />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Button */}
                <div className="pt-8">
                  <Link href="/registration" className="block w-full">
                    <Button className={`w-full py-4.5 rounded-xl font-bold transition-all text-xs gap-1.5 ${tier.buttonStyle}`}>
                      {tier.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-center text-xs text-slate-400 mt-12 font-medium">
          * Registration deadlines and student credential verification details are available on the registration guidelines page.
        </p>

      </div>
    </section>
  );
}
