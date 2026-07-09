"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, ArrowRight } from "lucide-react";
import { pb } from "@/lib/pocketbase";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
    },
  },
};

export default function Buttons() {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const records = await pb.collection("downloadMaterials").getFullList({
          sort: "created",
          requestKey: null,
        });
        setMaterials(records);
      } catch (err) {
        setError("Failed to load materials");
        console.error("Error fetching materials:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || materials.length === 0) {
    return null; // Don't render anything if there's an error or no items, keeping page clean
  }

  return (
    <section className="py-12 bg-slate-50/30">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl font-extrabold text-slate-800 flex items-center justify-center gap-2.5">
            <span className="p-1.5 bg-blue-50 text-blue-700 rounded-lg">
              <Download className="w-5 h-5" />
            </span>
            Download Official Materials
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Get the latest brochures, registration sheets, and guidelines directly.
          </p>
        </div>

        {/* Resources Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {materials.map((material) => {
            const fileUrl = `https://icemss.pockethost.io/api/files/downloadMaterials/${material.id}/${material.content}`;
            
            return (
              <motion.a
                key={material.id}
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group flex items-start gap-4 p-5 bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md hover:shadow-blue-500/5 rounded-2xl transition-all duration-300 text-left"
              >
                {/* File Icon */}
                <div className="p-3 bg-blue-50 group-hover:bg-blue-600 text-blue-700 group-hover:text-white rounded-xl transition-colors duration-300">
                  <FileText className="w-6 h-6" />
                </div>

                {/* File Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors truncate text-sm">
                    {material.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <span>PDF Document</span>
                    <span>•</span>
                    <span className="text-blue-600 flex items-center gap-0.5 group-hover:underline">
                      Download <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
