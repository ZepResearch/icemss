'use client'

import React, { useState, useEffect } from 'react'
import PocketBase from 'pocketbase'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SpeakerSkeleton } from './ui/speaker-skeleton'

const pb = new PocketBase('https://icemss.pockethost.io')

export default function SpeakersView() {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  const categories = ["Guest Speaker", "Keynote Speaker", "Conference Chair", "Conference Co-Chair", "Session Chair"]
  
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

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 min-h-full my-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Conference Delegates</h1>
      
      <Tabs defaultValue="guest" className="w-full">
        <TabsList className="flex justify-center space-x-2 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize text-blue-600 data-[state=active]:bg-blue-100"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <SpeakerSkeleton key={index} />
                ))}
              </div>
            ) : error ? (
              <div className="flex items-center justify-center min-h-[50vh]">
                <p className="text-red-500 text-xl">Error: {error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSpeakersByCategory(category).map((speaker) => (
                  <Card key={speaker.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="bg-blue-700 text-white">
                      <CardTitle>{speaker.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      {speaker.image ? (
                        
                        <img
                          src={`https://icemss.pockethost.io/api/files/speakers/${speaker.id}/${speaker.image}`}
                          alt={speaker.name}
                          className="w-full h-[300px] object-cover rounded-md mb-4"
                        />
                      ) : (
                        <div className="w-full h-48 bg-blue-200 rounded-md mb-4 flex items-center justify-center">
                          <span className="text-blue-600">No image available</span>
                        </div>
                      )}
                      <p className="text-blue-600 font-semibold">{speaker.role}</p>
                      {speaker.bio && (
                        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{speaker.bio}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
                {getSpeakersByCategory(category).length === 0 && (
                  <div className="col-span-full flex items-center justify-center min-h-[50vh]">
                    <p className="text-xl text-blue-600">
                      Speakers for this category will be announced soon. Stay tuned!
                    </p>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

