'use client';

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Lightbulb, Users, Share2, TrendingUp } from "lucide-react";

const imglink = [
  { link: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
  { link: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3" },
  { link: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" },
  { link: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3" },
];

const objectives = [
  {
    icon: Users,
    title: "Foster Interdisciplinary Collaboration",
    description: "Create a collaborative environment where researchers from engineering, management, and social sciences engage in productive dialogues to develop integrated, real-world solutions.",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: Share2,
    title: "Promote Knowledge Exchange",
    description: "Provide a global stage for sharing the latest trends, research, and methodologies. Empower participants to learn from peers and stay updated on recent academic achievements.",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Enhance Professional Development",
    description: "Deliver expert-led workshops and speaker sessions to equip delegates with new skills, research insights, and professional paths in academia and industrial sectors.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Globe,
    title: "Encourage Global Networking",
    description: "Bring together professionals, researchers, and students from all over the world, establishing partnerships and expanding networks for future international collaborations.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: BookOpen,
    title: "Facilitate Research Publication",
    description: "Support researchers by offering pathways to publish outstanding papers in high-impact Scopus, Clarivate, and peer-reviewed journals, maximizing citation index visibility.",
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    icon: Lightbulb,
    title: "Inspire Innovation and Solutions",
    description: "Foster creative problem-solving and critical thinking, encouraging innovative concepts that address contemporary societal challenges and promote sustainable development goals.",
    gradient: "from-teal-600 to-emerald-600",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ObjectivesSection() {
  return (
    <section className="w-full py-16 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
            Our Mission & Purpose
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Objectives of the Conference
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-600 text-lg leading-relaxed">
            Establishing an enriching platform that advances academic excellence, fosters global collaboration, and drives interdisciplinary innovation.
          </p>
        </div>

        {/* Objectives Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {objectives.map((obj, index) => {
            const IconComponent = obj.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-white border border-slate-100/80 rounded-3xl p-7 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon with custom gradient */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${obj.gradient} flex items-center justify-center text-white shadow-md shadow-slate-200 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-extrabold text-slate-800 group-hover:text-blue-700 transition-colors text-lg leading-snug">
                      {obj.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Avatar Stack Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center items-center gap-4 pt-16"
        >
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-md">
            <div className="flex -space-x-2.5">
              {imglink.map((img, i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img
                    src={img.link}
                    alt={`Delegate ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Join <span className="font-bold text-slate-900">400+</span> academic professionals
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


