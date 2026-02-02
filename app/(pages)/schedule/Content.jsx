"use client"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
// Helper function to add days to a date
const addDays = (date, days) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}
import { Clock, Coffee, Users, Mic, BookOpen, Camera, Award, UserCheck } from "lucide-react"

const scheduleData = [
  {
    date: "November 4 | Day 1",
    items: [
      { time: "09:00 - 09:20 AM", title: "Registration", type: "registration", icon: Users },
      { time: "09:20 - 09:30 AM", title: "Introduction by Moderator", type: "intro", icon: Mic },
      { time: "09:30 - 09:35 AM", title: "Felicitate the Guests", type: "ceremony", icon: Award },
      { time: "09:35 - 09:40 AM", title: "Book Release", type: "ceremony", icon: BookOpen },
      { time: "09:40 - 09:50 AM", title: "Introduction to Speakers", type: "intro", icon: Mic },
      {
        time: "09:50 - 10:05 AM",
        title: "Speech by Keynote Speaker Prof. (Dr.) Ipseeta Nanda",
        subtitle: "Topic: Engineering Intelligence Smart Solutions for Sustainable Progress",
        type: "keynote",
        icon: Mic,
      },
      {
        time: "10:05 - 10:20 AM",
        title: "Speech by Keynote Speaker Dr. Kausik Mukherjee",
        type: "keynote",
        icon: Mic,
      },
      {
        time: "10:20 - 10:40 AM",
        title: "Speech by Keynote Speaker Prof. S.S. Prasada Rao Ph.D",
        subtitle: "Topic: Ethical Considerations in Research",
        type: "keynote",
        icon: Mic,
      },
      { time: "10:40 - 11:00 AM", title: "Coffee Break", type: "break", icon: Coffee },
      { time: "11:00 - 11:10 AM", title: "Speech by Session Speaker Dr. Surbhi Saroha", type: "session", icon: Mic },
      { time: "11:10 - 11:20 AM", title: "Speech by Session Speaker Dr. Amruta Surana", type: "session", icon: Mic },
      { time: "11:20 - 12:30 PM", title: "Technical Session 1 (Engineering)", type: "technical", icon: BookOpen },
      { time: "12:30 - 01:30 PM", title: "Lunch Break", type: "break", icon: Coffee },
      {
        time: "01:30 - 01:40 PM",
        title: "Speech by Session Speaker Dr. Ashutosh Kumar Pandey",
        type: "session",
        icon: Mic,
      },
      {
        time: "01:40 - 01:50 PM",
        title: "Speech by Conference Co-Chair Dr. Diya Guha Roy",
        type: "session",
        icon: UserCheck,
      },
      { time: "01:50 - 03:00 PM", title: "Technical Session 2 (Management)", type: "technical", icon: BookOpen },
      { time: "Evening", title: "Photo Session", type: "ceremony", icon: Camera },
    ],
  },
  {
    date: "November 5 | Day 2",
    items: [
      { time: "09:00 - 09:20 AM", title: "Registration", type: "registration", icon: Users },
      { time: "09:20 - 09:30 AM", title: "Introduction by Moderator", type: "intro", icon: Mic },
      {
        time: "09:30 - 09:50 AM",
        title: "Speech by Keynote Speaker Dr. Kamal Gulati",
        subtitle: "Topic: The Role Of IoT in Driving Next-Gen Digital Ecosystems",
        type: "keynote",
        icon: Mic,
      },
      {
        time: "09:50 - 10:10 AM",
        title: "Speech by Keynote Speaker",
        subtitle: "Topic: Human Centric Innovation in The Age of AI",
        type: "keynote",
        icon: Mic,
      },
      {
        time: "10:00 - 10:20 AM",
        title: "Speech by Conference Chair Dr. Pranav Charkha",
        type: "session",
        icon: UserCheck,
      },
      { time: "10:20 - 10:40 AM", title: "Coffee Break", type: "break", icon: Coffee },
      { time: "10:40 - 10:50 AM", title: "Speech by Session Speaker Dr. Lalita Bisen", type: "session", icon: Mic },
      { time: "10:50 - 11:00 AM", title: "Speech by Session Speaker Dr. Pooja Sharma", type: "session", icon: Mic },
      { time: "11:00 - 12:30 PM", title: "Technical Session 3 (Social Sciences)", type: "technical", icon: BookOpen },
      { time: "12:30 - 01:30 PM", title: "Lunch Break", type: "break", icon: Coffee },
      { time: "01:30 - 03:00 PM", title: "Panel Discussion", type: "panel", icon: Users },
      { time: "03:00 - 05:00 PM", title: "Valedictory Function", type: "ceremony", icon: Award },
    ],
  },
]

const getTypeColor = (type) => {
  switch (type) {
    case "keynote": return "bg-sky-100 text-sky-800 border-sky-200"
    case "technical": return "bg-blue-100 text-blue-800 border-blue-200"
    case "session": return "bg-green-100 text-green-800 border-green-200"
    case "break": return "bg-orange-100 text-orange-800 border-orange-200"
    case "registration": return "bg-gray-100 text-gray-800 border-gray-200"
    case "ceremony": return "bg-pink-100 text-pink-800 border-pink-200"
    case "panel": return "bg-indigo-100 text-indigo-800 border-indigo-200"
    case "intro": return "bg-teal-100 text-teal-800 border-teal-200"
    default: return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getTypeLabel = (type) => {
  switch (type) {
    case "keynote": return "Keynote"
    case "technical": return "Technical"
    case "session": return "Session"
    case "break": return "Break"
    case "registration": return "Registration"
    case "ceremony": return "Ceremony"
    case "panel": return "Panel"
    case "intro": return "Introduction"
    default: return type
  }
}

export default function ConferenceSchedule() {
  const startDate = new Date(2026, 10, 4) // November 4, 2026
  const [selectedDates, setSelectedDates] = useState([
    startDate,
    addDays(startDate, 1),
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="container mx-auto py-10 px-4">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-tr from-blue-600 to-sky-600 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-tr from-blue-600 to-sky-600 bg-clip-text text-transparent sm:text-5xl md:text-5xl">
              4th International Conference     Engineering, Management and Social Sciences
            </h1>
            <h2 className="text-xl text-gray-600 max-w-3xl mx-auto">
          
            </h2>
            <p className="text-lg text-gray-500">
              November 4th - 5th, 2026 | Tokyo, Japan
            </p>
            <div className="flex justify-center gap-2 flex-wrap mt-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Engineering</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Management</Badge>
              <Badge variant="secondary" className="bg-sky-100 text-sky-800">Social Sciences</Badge>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[350px_1fr]">
            {/* Calendar Card */}
            <Card className="border-2 border-blue-200 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-tr from-blue-600 to-sky-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  December 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 ml-4">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  month={startDate}
                  className="w-full"
                  classNames={{
                    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                    month: "space-y-4",
                    caption: "flex justify-center pt-1 relative items-center",
                    caption_label: "text-sm font-medium",
                    caption_dropdowns: "flex justify-center gap-1",
                    nav: "space-x-1 flex items-center",
                    nav_button: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-7 w-7",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse space-y-1",
                    head_row: "flex",
                    head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem] flex items-center justify-center",
                    row: "flex w-full mt-2",
                    cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
                    day: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 h-8 w-8 p-0 font-normal aria-selected:bg-accent hover:bg-accent hover:text-accent-foreground",
                    day_selected: "bg-gradient-to-tr from-blue-500 to-sky-500 text-white hover:from-blue-600 hover:to-sky-600 focus:from-blue-600 focus:to-sky-600",
                    day_today: "bg-blue-100 text-blue-900 font-semibold",
                    day_outside: "text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                    day_disabled: "text-muted-foreground opacity-50",
                    day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                    day_hidden: "invisible",
                  }}
                />
              </CardContent>
            </Card>

            {/* Schedule Cards */}
            <ScrollArea className="h-[800px] pr-4">
              <div className="space-y-8">
                {scheduleData.map((day, index) => (
                  <Card key={index} className="border-2 border-blue-200 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-tr from-blue-600 to-sky-600 text-white">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Clock className="h-5 w-5" />
                        {day.date}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {day.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          return (
                            <div
                              key={itemIndex}
                              className={cn(
                                "group relative overflow-hidden rounded-xl border-2 p-4 transition-all duration-300",
                                "hover:shadow-md hover:scale-[1.02] cursor-pointer",
                                "bg-gradient-to-tr from-white to-gray-50/50"
                              )}
                            >
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-sky-500 text-white">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className="text-sm font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                                      {item.time}
                                    </div>
                                    <Badge 
                                      variant="outline" 
                                      className={cn("text-xs", getTypeColor(item.type))}
                                    >
                                      {getTypeLabel(item.type)}
                                    </Badge>
                                  </div>
                                  <h3 className="text-base font-semibold text-gray-900 leading-tight">
                                    {item.title}
                                  </h3>
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}