import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Conference Awards | International Conference on Tourism Management and Hospitality 2025',
  description: 'Prestigious awards recognizing excellence in tourism and hospitality research. Best Paper, Best Presentation, and Student Presentation awards available at ICTMH 2025.',
  keywords: [
    'tourism conference awards',
    'hospitality research awards',
    'best paper award',
    'student presentation award',
    'academic conference awards',
    'tourism research recognition',
    'ICTMH 2025 awards'
  ],
  alternates: {
    canonical: 'https://www.icemss.in/award',
  },
  openGraph: {
    title: 'Conference Awards - ICTMH 2025',
    description: 'Win prestigious awards for excellence in tourism and hospitality research at ICTMH 2025. Best Paper and Presentation awards available.',
    
    type: 'website'
  }
}

export default function AwardsPage() {
  const awards = [
    {
      title: "BEST PAPER PRESENTATION AWARD",
      description: "Recognizing outstanding research presentation and communication skills",
      icon: <Trophy className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "BEST PAPER AWARD",
      description: "Honoring the most impactful presentation in each conference session",
      icon: <Star className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Best International student presentation Award",
      description: "Celebrating exceptional presentations by student researchers",
      icon: <Users className="h-8 w-8 text-blue-500" />,
    },
  ]

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold underline underline-offset-4 decoration-blue-500 mb-4">Conference Awards</h1>
          <p className="text-xl  max-w-2xl mx-auto">
            Recognizing excellence in 3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences research and presentation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {awards.map((award, index) => (
            <Card key={index} className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="rounded-full bg-blue-100 p-3 mb-4">
                  {award.icon}
                </div>
                <CardTitle className="text-xl font-bold text-blue-500 text-center drop-shadow-sm uppercase">{award.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=" text-center">{award.description}</CardDescription>
              </CardContent>
              <div className="px-6 pb-4 flex justify-center">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Prestigious Award</Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-blue-500 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Dont Miss Your Chance to Win!</h2>
          <p className="text-xl text-blue-100 mb-6">
            Register now for the 3<sup>rd</sup> International Conference on Engineering, Management and Social Sciences and showcase your research.
          </p>
          <Link href={'/registration'}>
          <Button className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
            Register Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}