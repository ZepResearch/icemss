import React from 'react'
import VenuePage from './Content'

export const metadata = {
  title: 'Venue | ICEMSS ',
  description: 'Explore the venue for the International Conference on Engineering, Management and Social Sciences (ICEMSS) ',
   // Adding canonical URL
   alternates: {
    canonical: 'https://www.icemss.in/venue',
  },
  openGraph: {
    title: 'Venue | ICEMSS ',
    description: 'Explore the venue for the International Conference on Engineering, Management and Social Sciences (ICEMSS)',
    url: 'https://www.icemss.in/venue',
    siteName: 'ICEMSS ',
  
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
