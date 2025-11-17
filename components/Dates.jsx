'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { pb } from "@/lib/pocketbase"


export default function DatesSection() {
  const [dates, setDates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDates = async () => {
      try {
        // Fetch all records sorted by date
        const records = await pb.collection('dates').getFullList({
          sort: 'created',
          requestKey: null
        })

        // Transform the records to match your component's data structure
        const formattedDates = records.map(record => ({   
          date: record.date,
          title: record.title,
          description: record.description,
        }))

        setDates(formattedDates)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching dates:', err)
        setError('Failed to load important dates')
        setLoading(false)
      }
    }

    fetchDates()
  }, [])

  if (loading) {
    return (
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">Loading important dates...</div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Important <span className="underline underline-offset-4 decoration-primary">Dates</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Mark your calendar for these key conference milestones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-dense gap-8 pt-8">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="space-y-2 rounded-xl shadow-lg bg-primary/10 p-6 border border-primary/20">
                  <span className={`block text-2xl font-extrabold text-primary ${index === 0 ? "line-through" : ""}`}>{item.date}</span>
                  <hr className="border-2 border-black/80"/>
                  <h3 className={`font-extrabold text-xl text-blue-700 ${index === 0 ? "line-through" : ""}`}>{item.title}</h3>
                  <p className={`text-base text-blue-500 leading-relaxed font-semibold ${index === 0 ? "line-through" : ""}`}>{item.description}</p>
                </div>
                {index < dates.length - 1 && (
                  <div className="hidden md:block absolute top-4 right-0 w-full h-[1px] bg-border -z-10 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <Link className="flex justify-center items-center mt-12" href={'/schedule'}>
          <Button size={'lg'} >
            View Full Schedule
          </Button>
        </Link>
      </div>
    </section>
  )
}