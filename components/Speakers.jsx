'use client'

import React, { useState, useEffect } from 'react'
import PocketBase from 'pocketbase'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SpeakerSkeleton } from './ui/speaker-skeleton'
import { SpeakerDrawer } from './ui/SpeakerDrawer'

const pb = new PocketBase('https://icemss.pockethost.io')

export default function SpeakersView() {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  const categories = ["Keynote Speaker", "Panelist", "Organizing Secretary", "Conference Chair", "Session Chair"]
  
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const records = await pb.collection('speakers').getFullList({
          sort: 'name',
          requestKey: null
        })
        setSpeakers(records)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  const getSpeakersByCategory = (category) => {
    return speakers.filter(speaker => speaker.category === category)
  }

  const openDrawer = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsDrawerOpen(true)
  }

  // Function to calculate grid classes based on number of items
  const getGridClasses = (itemCount) => {
    if (itemCount === 0) return "";
    
    // Base grid classes
    let classes = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
    
    // Add centering classes for 1 or 2 items
    if (itemCount === 1) {
      classes += " lg:grid-cols-[1fr_minmax(0,1fr)_1fr] lg:justify-items-center";
    } else if (itemCount === 2) {
      classes += " lg:grid-cols-[1fr_auto_auto_1fr] lg:justify-items-center";
    }
    
    return classes;
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Conference Delegates
        </motion.h1>
        
        <Tabs defaultValue="Keynote Speaker" className="w-full">
          <TabsList className="flex justify-center space-x-2 mb-12 py-8 md:overflow-hidden overflow-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-6 text-lg capitalize text-blue-600 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 transition-all duration-200 ease-in-out"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, index) => (
                    <SpeakerSkeleton key={index} />
                  ))}
                </div>
              ) : error ? (
                <div className="flex items-center justify-center min-h-[50vh]">
                  <p className="text-red-500 text-xl">Error: {error}</p>
                </div>
              ) : (
                <AnimatePresence>
                  {(() => {
                    const categorySpeakers = getSpeakersByCategory(category);
                    const itemCount = categorySpeakers.length;
                    
                    return (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={getGridClasses(itemCount)}
                      >
                        {categorySpeakers.map((speaker, index) => (
                          <motion.div
                            key={speaker.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={itemCount === 1 ? "lg:col-start-2" : itemCount === 2 && index === 0 ? "lg:col-start-2" : ""}
                          >
                            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm max-w-md">
                              <CardHeader className="bg-blue-700 text-white p-6">
                                <CardTitle className="text-2xl font-semibold">{speaker.name}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-6">
                                {speaker.image ? (
                                  <img
                                    src={`https://icemss.pockethost.io/api/files/speakers/${speaker.id}/${speaker.image}`}
                                    alt={speaker.name}
                                    className="w-full h-[300px] object-contain rounded-md mb-6 shadow-md"
                                  />
                                ) : (
                                  <div className="w-full h-[300px] bg-blue-200 rounded-md mb-6 flex items-center justify-center shadow-md">
                                    <span className="text-blue-600 text-xl font-semibold">No image available</span>
                                  </div>
                                )}
                                <p className="text-blue-600 font-semibold text-xl mb-3">{speaker.role}</p>
                                {speaker.bio && (
                                  <p className="text-gray-600 line-clamp-3 mb-4">{speaker.bio}</p>
                                )}
                                <Button 
                                  onClick={() => openDrawer(speaker)} 
                                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                                >
                                  More Info
                                </Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              )}
              {getSpeakersByCategory(category).length === 0 && (
                <div className="flex items-center justify-center min-h-[50vh]">
                  <p className="text-2xl text-blue-600 font-semibold">
                    Speakers for this category will be announced soon. Stay tuned!
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <SpeakerDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
          speaker={selectedSpeaker}
        />
      </div>
    </div>
  )
}