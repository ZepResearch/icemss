"use client"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { addDays } from "date-fns"



const scheduleData = [
  {
    date: "March - 21 | Registration",
    items: [
      { time: "8:00AM - 9:15AM", title: "Registration" },
      { time: "9:15AM - 9:30AM", title: "Inaugural Function" },
      { time: "9:30AM - 10:00AM", title: "Keynote Speech (Session 1)" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "1st Session" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 02:30PM", title: "Keynote Speech" },
      { time: "2:30PM - 5:00PM", title: "2nd Session" },
    ]
  },
  {
    date: "March - 22 | Day 2",
    items: [
      { time: "9:00AM - 9:15AM", title: "Registration" },
      { time: "9:15AM - 9:30AM", title: "Day 2 Opening Remarks" },
      { time: "9:30AM - 10:00AM", title: "Keynote Speech (Session 3)" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "3rd Session" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 02:30PM", title: "Keynote Speech (Session 4)" },
      { time: "2:30PM - 5:00PM", title: "4th Session" },
    ]
  },
  {
    date: "March - 23 | Closing Day",
    items: [
      { time: "9:00AM - 9:30AM", title: "Registration" },
      { time: "9:30AM - 10:00AM", title: "Closing Ceremony Opening Remarks" },
      { time: "10:00AM - 11:00AM", title: "Final Keynote Speech" },
      { time: "11:00AM - 11:15AM", title: "Coffee Break" },
      { time: "11:15AM - 12:45PM", title: "Panel Discussion: Future of Sustainability" },
      { time: "12:45PM - 2:00PM", title: "Networking Lunch" },
      { time: "2:00PM - 3:30PM", title: "Workshops and Breakout Sessions" },
      { time: "3:30PM - 4:00PM", title: "Closing Remarks and Next Steps" },
      { time: "4:00PM - 5:00PM", title: "Farewell Reception" },
    ]
  }
]

export default function ConferenceSchedule() {
  const startDate = new Date(2024, 2, 21) // March 21, 2024
  const [selectedDates, setSelectedDates] = useState([
    startDate,
    addDays(startDate, 1),
    addDays(startDate, 2)
  ])

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Conference Dates
          </h1>
          <p className="text-muted-foreground">
            Join us March 21st-23rd for three days of cutting-edge insights and networking. Reserve your spot today!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle>March 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="multiple"
                selected={selectedDates}
                onSelect={setSelectedDates}
                month={startDate}
                className="w-full"
                classNames={{
                  day_selected: "bg-yellow-500 text-primary-foreground hover:bg-yellow-500 mr-0.5",
                  day_today: "bg-yellow-100 text-yellow-900",
                }}
                
              />
            </CardContent>
          </Card>

          <ScrollArea className="h-[600px]">
            <div className="space-y-8">
              {scheduleData.map((day, index) => (
                <Card key={index} className="border-yellow-200">
                  <CardHeader>
                    <CardTitle>{day.date}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {day.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={cn(
                            "grid grid-cols-[140px_1fr] gap-4 p-3 rounded-lg",
                            "bg-yellow-50/50 hover:bg-yellow-100/50 transition-colors"
                          )}
                        >
                          <div className="text-sm font-medium text-yellow-900">
                            {item.time}
                          </div>
                          <div className="text-sm">{item.title}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

