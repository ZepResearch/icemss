'use client'

import Image from "next/image"
import { useRef, useState, useEffect } from "react"

export default function SDGSection() {
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const sdgCards = [
    {
      number: "01",
      title: "PARTNERSHIPS FOR THE GOALS",
      icon: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.12 0-.23-.01-.35.21-.26.4-.54.56-.84.37-.34.72-.72 1.05-1.12.28-.33.54-.68.78-1.04.24-.37.46-.76.66-1.16.17-.34.33-.69.47-1.05.13-.35.24-.71.34-1.08.09-.35.17-.71.23-1.07.06-.37.1-.75.13-1.13.02-.38.03-.75.03-1.13 0-.41-.02-.81-.06-1.21-.04-.4-.1-.79-.17-1.18-.08-.38-.18-.76-.3-1.13-.12-.37-.26-.73-.42-1.08-.16-.35-.34-.69-.54-1.02-.2-.33-.42-.65-.66-.95-.24-.3-.5-.58-.78-.84-.28-.26-.57-.5-.88-.73-.31-.22-.64-.42-.98-.6-.34-.18-.69-.33-1.05-.47-.36-.14-.73-.25-1.11-.34-.38-.09-.76-.16-1.15-.2-.39-.05-.79-.07-1.19-.07zm3 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",
      bgColor: "bg-blue-700",
    },
    {
      number: "02",
      title: "QUALITY EDUCATION",
      icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
      bgColor: "bg-red-500",
    },
    {
      number: "03",
      title: "DECENT WORK AND ECONOMIC GROWTH",
      icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
      bgColor: "bg-rose-600",
    },
    {
      number: "04",
      title: "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
      bgColor: "bg-orange-400",
    },
    {
      number: "05",
      title: "REDUCED INEQUALITIES",
      icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
      bgColor: "bg-pink-500",
    },
  ]

  const maxIndex = Math.max(0, sdgCards.length - 2)

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 280 + 24 // card width + gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1)
    setCurrentIndex(newIndex)
    scrollToIndex(newIndex)
  }

  return (
    <section className="w-full py-1 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-2">
          4<sup>th</sup> <span className="text-primary">ICEMSS 2026</span> IS DEDICATED TO ADVANCING THE
           NATIONS SUSTAINABLE DEVELOPMENT GOALS (SDGS)
        </h2>
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <Image 
              src={'/SDG-logo.png'} 
              alt="SDG Logo" 
              width={900} 
              height={300}
              className="max-w-full h-auto"
            />
          </div>
          
          {/* Right Side - Carousel */}
          <div className="space-y-6 bg-slate-100 p-8">
            {/* Cards Container */}
            <div className="relative">
              <div 
                ref={scrollRef}
                className="flex overflow-hidden gap-6"
                style={{ width: '100%' }}
              >
                {sdgCards.map((card, index) => (
                  <div 
                    key={index}
                    className={`flex-none w-[280px] ${card.bgColor} text-white rounded-lg shadow-lg transition-transform hover:scale-105`}
                    style={{ 
                      transform: `translateX(-${currentIndex * (280 + 24)}px)`,
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  >
                    <div className="p-6 flex flex-col items-center justify-center min-h-[280px] text-center">
                      <div className="text-4xl font-bold mb-2">{card.number}</div>
                      <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d={card.icon} />
                      </svg>
                      <div className="text-sm font-semibold">{card.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}