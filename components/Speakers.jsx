'use client';

import React, { useState, useEffect } from "react";
import PocketBase from "pocketbase";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SpeakerSkeleton } from "./ui/speaker-skeleton";
import { SpeakerDrawer } from "./ui/SpeakerDrawer";
import { Award, GraduationCap, MapPin, SearchCode, Info } from "lucide-react";

const pb = new PocketBase("https://icemss.pockethost.io");

export default function SpeakersView() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = [
    "Organizing Secretary",
    "Conference Chair",
    "Conference Co-Chair",
    "Keynote Speaker",
    "Session Chair",
    "Panel Speaker",
  ];

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const records = await pb.collection("speakers").getFullList({
          sort: "order",
          requestKey: null,
        });
        setSpeakers(records);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  const getSpeakersByCategory = (category) => {
    return speakers.filter((speaker) => speaker.category === category);
  };

  const openDrawer = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsDrawerOpen(true);
  };

  const getGridClasses = (itemCount) => {
    if (itemCount === 0) return "";
    if (itemCount === 1) {
      return "flex justify-center w-full";
    }
    if (itemCount === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-center w-full";
    }
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full";
  };

  return (
    <section className="py-16 md:py-28 bg-slate-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
            Distinguished Faculty
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Conference Delegates
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <Tabs defaultValue="Organizing Secretary" className="w-full space-y-12">
          {/* Custom Tabs Navigation */}
          <div className="flex justify-center">
            <TabsList className="bg-white border border-slate-100 p-1.5 rounded-2xl shadow-md h-auto flex flex-wrap gap-1 max-w-full overflow-x-auto justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-300"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tabs Content panels */}
          {categories.map((category) => {
            const categorySpeakers = getSpeakersByCategory(category);
            const itemCount = categorySpeakers.length;

            return (
              <TabsContent key={category} value={category} className="outline-none focus:ring-0">
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, index) => (
                      <SpeakerSkeleton key={index} />
                    ))}
                  </div>
                ) : error ? (
                  <div className="text-center py-16">
                    <p className="text-red-500 font-semibold">Failed to load delegates: {error}</p>
                  </div>
                ) : itemCount === 0 ? (
                  <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto">
                    <Award className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-600 font-bold text-lg">Speakers will be announced soon</p>
                    <p className="text-slate-400 text-sm mt-1">Please stay tuned for updates.</p>
                  </div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className={getGridClasses(itemCount)}
                    >
                      {categorySpeakers.map((speaker, index) => (
                        <motion.div
                          key={speaker.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="w-full max-w-md mx-auto"
                        >
                          <Card className="overflow-hidden border border-slate-100 bg-white rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between">
                            
                            {/* Headshot with hover zoom */}
                            <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden group">
                              {speaker.image ? (
                                <img
                                  src={`https://icemss.pockethost.io/api/files/speakers/${speaker.id}/${speaker.image}`}
                                  alt={speaker.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              ) : (
                                <div className="w-full h-full bg-blue-50/50 flex flex-col items-center justify-center p-4">
                                  <GraduationCap className="w-12 h-12 text-blue-200" />
                                  <span className="text-xs font-semibold text-slate-400 mt-2">No photo available</span>
                                </div>
                              )}
                              
                              {/* Country Flag Tag */}
                              {speaker.country && (
                                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-slate-800 bg-white/95 border border-white/20 backdrop-blur-sm shadow-md">
                                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                                  {speaker.country}
                                </span>
                              )}
                            </div>

                            {/* Speaker Bio/Details */}
                            <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                              <div className="space-y-3">
                                <div>
                                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                                    {speaker.name}
                                  </h3>
                                  <span className="text-xs font-bold text-blue-700 tracking-wide block mt-1 uppercase">
                                    {speaker.role}
                                  </span>
                                </div>

                                <div className="space-y-2 text-slate-500 text-sm border-t border-slate-50 pt-3">
                                  {speaker.college && (
                                    <div className="flex items-start gap-2.5">
                                      <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                      <span className="leading-snug font-medium">{speaker.college}</span>
                                    </div>
                                  )}
                                  {speaker.field && (
                                    <div className="flex items-start gap-2.5">
                                      <SearchCode className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                      <span className="leading-snug font-medium text-slate-600">{speaker.field}</span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="pt-4">
                                <Button
                                  onClick={() => openDrawer(speaker)}
                                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-md transition-colors font-semibold gap-1.5"
                                >
                                  <Info className="w-4 h-4" />
                                  View Delegate Info
                                </Button>
                              </div>
                            </CardContent>

                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </TabsContent>
            );
          })}
        </Tabs>

        <SpeakerDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          speaker={selectedSpeaker}
        />
      </div>
    </section>
  );
}