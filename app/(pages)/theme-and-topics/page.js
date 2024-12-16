import React from 'react'
import ThemeAndTopics from './Content'

export const metadata = {
  title: 'Theme and Topics | ICEMSS 2025',
  description: 'Explore the theme and topics for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
  openGraph: {
    title: 'Theme and Topics | ICEMSS 2025',
    description: 'Explore the theme and topics for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
    url: 'https://www.icemss.in/theme-and-topics',
    siteName: 'ICEMSS 2025',
    
    locale: 'en_US',
    type: 'website',
  },
 
  keywords: ['ICEMSS', 'theme', 'topics', 'engineering', 'management', 'social sciences', 'conference', 'New Delhi', 'India'],
}

function page() {
  return (
    <div>
      <h1></h1>
      <ThemeAndTopics/> 
    </div>
  )
}

export default page
