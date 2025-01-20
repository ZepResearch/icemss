import React from 'react'
import VenuePage from './Content'

export const metadata = {
  title: 'Venue | ICEMSS 2025',
  description: 'Explore the venue for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
   // Adding canonical URL
   alternates: {
    canonical: 'https://www.icemss.in/venue',
  },
  openGraph: {
    title: 'Venue | ICEMSS 2025',
    description: 'Explore the venue for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
    url: 'https://www.icemss.in/venue',
    siteName: 'ICEMSS 2025',
  
    locale: 'en_US',
    type: 'website',
  },
  
  keywords: ['ICEMSS', 'venue', 'New Delhi', 'India', 'conference', 'engineering', 'management', 'social sciences'],
}
function page() {
  
  return (
    <div>
      <VenuePage/>
    </div>
  )
}

export default page
