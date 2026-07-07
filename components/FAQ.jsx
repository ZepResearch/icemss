'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONFERENCE } from "@/constants/conference";

const faqs = [
  {
    question: "What topics will the conference cover?",
    answer: "The conference covers a wide range of topics, including advancements in engineering, strategic management practices, social impact research, interdisciplinary solutions, and sustainable development strategies.",
  },
  {
    question: `How can I register for ${CONFERENCE.shortForm}?`,
    answer: "You can register via the official conference website. Early-bird discounts are available for registrations made before the deadline, and group registrations receive special rates.",
  },
  {
    question: "Will there be virtual participation options?",
    answer: `Yes, ${CONFERENCE.shortForm} offers a hybrid format. You can attend in person or participate virtually through live-streamed sessions and interactive online platforms.`,
  },
  {
    question: "Are there awards for outstanding presentations or research papers?",
    answer: `Yes, ${CONFERENCE.shortForm} recognizes outstanding contributions through categories like Best Paper Award, Best Presenter Award, and Young Researcher Award to celebrate excellence in research.`,
  },
  {
    question: "What types of sessions and events can I expect?",
    answer: "The conference will feature keynote speeches, research paper presentations, panel discussions, workshops, poster sessions, and dedicated networking opportunities with experts.",
  },
  {
    question: "Is there an opportunity to publish my research?",
    answer: "Absolutely! Selected papers will be published in reputable conference proceedings and indexed journals, providing global visibility for your research.",
  },
  {
    question: "How do I prepare for my presentation?",
    answer: "Detailed presentation guidelines will be provided upon paper acceptance. You'll receive support and tips on structuring and delivering an impactful presentation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-28 bg-white relative overflow-hidden" id="contact">
      {/* Decorative gradient radial blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading, Illustration & Support Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                Support Center
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                Can&apos;t find the answer you&apos;re looking for? Reach out to our conference support team for personal assistance.
              </p>
            </div>

            {/* Illustration */}
            <div className="relative w-72 h-72 mx-auto lg:mx-0 flex items-center justify-center bg-slate-50 border border-slate-100 p-6 rounded-3xl shadow-inner">
              <Image
                src="https://illustrations.popsy.co/blue/question-mark.svg"
                alt="Help Illustration"
                width={240}
                height={240}
                className="object-contain drop-shadow-sm"
              />
            </div>

            {/* Contact Support Card */}
            <div className="p-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-3xl space-y-5">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
                Contact Info & Support
              </h3>
              
              <div className="space-y-3.5 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@icemss.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+91 82600 80050</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="truncate max-w-[280px]">{CONFERENCE.venue.location}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-50">
                <Link href="/contact" className="block w-full">
                  <Button variant="outline" className="w-full rounded-xl border-slate-200 hover:border-blue-600 hover:text-blue-700 text-xs font-bold py-5">
                    Submit Support Ticket
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Accordion list */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-slate-50/50 border-blue-200 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/5"
                      : "bg-white border-slate-100 hover:border-slate-200 shadow-sm"
                  }`}
                >
                  <dt className="text-base font-bold text-slate-800">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between text-left p-5 focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className={`w-4.5 h-4.5 shrink-0 transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-400"}`} />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                  </dt>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold pl-12 border-t border-slate-50">
                          {faq.answer}
                        </div>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}