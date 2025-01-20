import React from 'react'
import ConferenceSchedule from './Content'


export const metadata = {
    title: 'Conference Schedule | ICEMSS 2025',
    description: 'View the detailed schedule for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
     // Adding canonical URL
  alternates: {
    canonical: 'https://www.icemss.in/schedule',
  },
    openGraph: {
      title: 'Conference Schedule | ICEMSS 2025',
      description: 'View the detailed schedule for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
      url: 'https://www.icemss.in/schedule',
      siteName: 'ICEMSS 2025',
     
      locale: 'en_US',
      type: 'website',
    },
    
    keywords: ['ICEMSS', 'schedule', 'program', 'New Delhi', 'India', 'conference', 'engineering', 'management', 'social sciences'],
  }
function page() {
  return (
    <div>
      <ConferenceSchedule/>
    </div>
  )
}

export default page
