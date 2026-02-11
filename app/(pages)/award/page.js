import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Users, ArrowRight, GraduationCap, DollarSign, FileCheck, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Conference Awards | International Conference on Tourism Management and Hospitality 2025",
  description:
    "Prestigious awards recognizing excellence in tourism and hospitality research. Best Paper, Best Presentation, and Student Presentation awards available at ICTMH 2025.",
  keywords: [
    "tourism conference awards",
    "hospitality research awards",
    "best paper award",
    "student presentation award",
    "academic conference awards",
    "tourism research recognition",
    "ICTMH 2025 awards",
  ],
  alternates: {
    canonical: "https://www.icemss.in/award",
  },
  openGraph: {
    title: "Conference Awards - ICTMH 2025",
    description:
      "Win prestigious awards for excellence in tourism and hospitality research at ICTMH 2025. Best Paper and Presentation awards available.",

    type: "website",
  },
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
     {
    title: "OUTSTANDING CONTRIBUTOR AWARD",
    description: "Recognizing individuals for their significant contributions to the conference and research community",
    icon: <Award className="h-8 w-8 text-blue-500" />,
  },
  ]

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold underline underline-offset-4 decoration-blue-500 mb-4">
            Scholarships & Awards
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Supporting young scholars and recognizing excellence in 4<sup>th</sup> International Conference on
            Engineering, Management and Social Sciences
          </p>
        </div>

        {/* Scholarship Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Zep Research Grants and Scholarships</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Zep Research is dedicated to helping young scholars achieve their research and academic goals, while also
              encouraging them to apply the principles of interdisciplinary study to their work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="rounded-full bg-blue-200 p-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-700 text-center">Who Can Apply?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center">
                  Postgraduate students and early career academics who demonstrate financial need and commitment to
                  interdisciplinary research. Awards are based on educational opportunity relevance, financial need, and
                  community contributions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="rounded-full bg-blue-200 p-3 mb-4">
                  <FileCheck className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-700 text-center">Selection Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center">
                  The Conference Program Committee awards scholarships to applicants with exceptional abstracts that
                  pass blind peer review and are accepted for presentation. Outstanding presenters also have a chance to
                  receive scholarships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="rounded-full bg-blue-200 p-3 mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-blue-700 text-center">Scholarship Details</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-center">
                  <strong>50% fee refund</strong> will be provided to the best paper and best paper presenters.
                  Scholarships cover full or partial conference registration fees based on fund availability.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Apply for Scholarship Today!</h3>
            <p className="text-lg text-blue-100 mb-6">
              Submit your exceptional research abstract and get a chance to receive financial support for attending the
              conference.
            </p>
            <Link href={"/submission"}>
              <Button className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Conference Awards</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognizing excellence in research and presentation at the conference
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
  {awards.map((award, index) => {
    const isLastSingle =
      awards.length % 3 === 1 && index === awards.length - 1

    return (
      <Card
        key={index}
        className={`bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
          ${isLastSingle ? "lg:col-span-3 lg:justify-self-center lg:max-w-md" : ""}
        `}
      >
        <CardHeader className="flex flex-col items-center pb-2">
          <div className="rounded-full bg-blue-100 p-3 mb-4">
            {award.icon}
          </div>
          <CardTitle className="text-xl font-bold text-blue-500 text-center drop-shadow-sm uppercase">
            {award.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-center">
            {award.description}
          </CardDescription>
        </CardContent>

        <div className="px-6 pb-4 flex justify-center">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            Prestigious Award
          </Badge>
        </div>
      </Card>
    )
  })}
</div>

        <div className="bg-blue-500 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Miss Your Chance to Win!</h2>
          <p className="text-xl text-blue-100 mb-6">
            Register now for the 4<sup>th</sup> International Conference on Engineering, Management and Social Sciences
            and showcase your research.
          </p>
          <Link href={"/registration"}>
            <Button className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
