"use client"
import ImageCarousel from "./image-carousel"
import VideoSection from "./video-section"

// Sample data for the carousels
const firstConferenceImages = [
  {
    src: "/gallery/ICEMSS_06.png?height=600&width=800",
    alt: "1st Conference - Opening Ceremony",
  },
  {
    src: "/gallery/ICEMSS_02.png?height=600&width=800",
    alt: "1st Conference - Keynote Speaker",
  },
  {
    src: "/gallery/ICEMSS_03.png?height=600&width=800",
    alt: "1st Conference - Panel Discussion",
  },
  {
    src: "/gallery/ICEMSS_04.png?height=600&width=800",
    alt: "1st Conference - Award Ceremony",
  },
  {
    src: "/gallery/ICEMSS_01.png?height=600&width=800",
    alt: "1st Conference - Award Ceremony",
  },
  {
    src: "/gallery/ICEMSS_05.png?height=600&width=800",
    alt: "1st Conference - Award Ceremony",
  },
  {
    src: "/gallery/ICEMSS_07.png?height=600&width=800",
    alt: "1st Conference - Award Ceremony",
  },
]

const secondConferenceImages = [
  {
    src: "/gallery/2nd_ICEMSS_05.png?height=600&width=800",
    alt: "2nd Conference - Opening Ceremony",
  },
  {
    src: "/gallery/2nd_ICEMSS_02.png?height=600&width=800",
    alt: "2nd Conference - Keynote Speaker",
  },
  {
    src: "/gallery/2nd_ICEMSS_03.png?height=600&width=800",
    alt: "2nd Conference - Workshop Session",
  },
  {
    src: "/gallery/2nd_ICEMSS_04.png?height=600&width=800",
    alt: "2nd Conference - Networking Event",
  },
  {
    src: "/gallery/2nd_ICEMSS_01.png?height=600&width=800",
    alt: "2nd Conference - Networking Event",
  },
  {
    src: "/gallery/2nd_ICEMSS_06.png?height=600&width=800",
    alt: "2nd Conference - Networking Event",
  },
  {
    src: "/gallery/2nd_ICEMSS_07.png?height=600&width=800",
    alt: "2nd Conference - Networking Event",
  },
]

// Sample video data
const conferenceVideos = [
  {
    id: "video1",
    title: "ICEMSS 2024 Bangkok | Day 1 Highlights | Full Video | Zep Research",
    thumbnail: "/gallery/thubnail1.jpg?height=400&width=600",
    videoUrl: "https://www.youtube.com/embed/jQsiUOr53Bo",
  },
  {
    id: "video2",
    title: "ICEMSS Highlights || International Conference || Delhi || India",
    thumbnail: "/gallery/thubnail2.jpg?height=400&width=600",
    videoUrl: "https://www.youtube.com/embed/B49Gm3b9VgA",
  },
]

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-12 px-4 md:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300">
            Conference Gallery
          </span>
        </h1>

        <div className="space-y-16">
          {/* First Conference Section */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-blue-400/20">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-900 bg-blue-200 rounded-full">
                INAUGURAL EVENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                1st International Conference
              </h2>
              <p className="text-blue-100 mt-2 max-w-3xl mb-6">
                Highlights from our inaugural conference showcasing groundbreaking research and collaboration in
                Engineering, Management and Social Sciences.
              </p>
            </div>

            <ImageCarousel images={ secondConferenceImages} />
          </section>

          {/* Second Conference Section */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-blue-400/20">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-900 bg-blue-200 rounded-full">
                FOLLOW-UP EVENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                2nd International Conference
              </h2>
              <p className="text-blue-100 mt-2 max-w-3xl mb-6">
                Moments from our second conference featuring distinguished speakers and innovative presentations in
                Engineering, Management and Social Sciences.
              </p>
            </div>

            <ImageCarousel images={firstConferenceImages} />
          </section>

          {/* Video Section */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-blue-400/20">
            <div>
              <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-900 bg-blue-200 rounded-full">
                FEATURED MEDIA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Conference Videos
              </h2>
              <p className="text-blue-100 mt-2 max-w-3xl mb-6">
                Watch key moments from our conferences. Click on a thumbnail to play the video.
              </p>
            </div>

            <VideoSection videos={conferenceVideos} />
          </section>
        </div>

        <footer className="mt-20 text-center text-blue-200 opacity-80">
          <p>© {new Date().getFullYear()} International Conference on Engineering, Management and Social Sciences</p>
          <p className="mt-2 text-sm">
            Bringing together researchers, practitioners, and innovators from around the world
          </p>
        </footer>
      </div>
    </div>
  )
}
