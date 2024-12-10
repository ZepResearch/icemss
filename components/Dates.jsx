'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Link from "next/link"

export default function DatesSection() {
  const dates = [
    {
      date: "Sept 2024",
      title: "Abstract Submission",
      description: "Submit your research abstracts for initial review. Early submissions receive priority consideration and detailed feedback from our expert panel.",
    },
    {
      date: "Oct 2024",
      title: "Paper Submission",
      description: "Full paper submissions open for accepted abstracts. Ensure your research follows our comprehensive submission guidelines.",
    },
    {
      date: "Nov 2024",
      title: "Review Process",
      description: "Expert panel review period. Authors will receive detailed feedback and acceptance notifications during this phase.",
    },
    {
      date: "Dec 2024",
      title: "Conference Days",
      description: "Three days of keynotes, presentations, workshops, and networking opportunities with leading academics and researchers.",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Important <span className="underline underline-offset-4 decoration-yellow-400">Dates</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Mark your calendar for these key conference milestones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="space-y-2 ">
                  <span className={cn(
                    "text-sm font-medium drop-shadow-sm ",
                    index === 0 && "text-yellow-600",
                    index === 1 && "text-yellow-600",
                    index === 2 && "text-yellow-600",
                    index === 3 && "text-yellow-600",
                  )}>
                    {item.date}
                  
                  </span>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < dates.length - 1 && (
                  <div className="hidden md:block absolute top-4 right-0 w-full h-[1px] bg-border -z-10 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
          <Link className="flex justify-center items-center mt-12" href={'/schedule'}>
          <Button>
            View Full Schedule
          </Button>
          </Link>
      </div>
    </section>
  )
}

