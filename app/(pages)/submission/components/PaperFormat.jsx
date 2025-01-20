import { FileText, Image, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function FormatCards() {
  const formats = [
    {
      title: "Abstract Format",
      icon: <FileText className="h-6 w-6" />,
      description:
        "The abstract should be a concise summary of the research objectives, methodology, results, and conclusions. Avoid jargon or acronyms.",
      downloadText: "Download Abstract Format Template",
      downloadLink: "/paperformat/Abstract_Template.docx",

    },
    {
      title: "Full Paper Format",
      icon: <FileText className="h-6 w-6" />,
      description:
        "Full papers should be between 3000-5000 words, written in Times New Roman, 12-point font, double-spaced. Include introduction, methods, results, discussion, conclusion, and references.",
      downloadText: "Download Full Paper Format Template",
      downloadLink: "/paperformat/Fullpaper_Template.doc",

    },
    {
      title: "Poster Format",
      icon: <Image className="h-6 w-6" />,
      description:
        "Posters should be designed in A0 size (841 x 1189 mm) using clear fonts (at least 24-point for body text, larger for headings). Include title, methods, results, conclusions, and key references. Present your research visually.",
      downloadText: "Download Poster Format Template",
      downloadLink: "/paperformat/Fullpaper_Template.doc",

    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {formats.map((format, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="bg-blue-500 text-gray-100 space-y-1 flex flex-row items-center gap-2">
              {format.icon}
              <CardTitle className="text-lg font-bold text-gray-100">{format.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-grow">
              <p className="text-gray-600 mb-4 flex-grow">{format.description}</p>
              <Link href={format.downloadLink}>
              <Button variant="outline" className="w-full mt-auto">
                <Download className="mr-2 h-4 w-4" />
                {format.downloadText}
              </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

