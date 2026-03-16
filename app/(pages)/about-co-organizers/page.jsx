

import React from 'react'
import CoOrganizerSection from './Content'

export const metadata = {
title: 'ICEMSS - International Conference on Engineering, Management and Social Sciences 2025',
description: 'Join ICEMSS A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in engineering, management, and social sciences.',
keywords: ['ICEMSS', 'engineering conference', 'management conference', 'social sciences conference', 'academic conference Delhi', 'research conference 2025'],
alternates: {
  canonical: 'https://www.icemss.in/about-organizers',
},
openGraph: {
  title: 'International Conference on Engineering, Management and Social Sciences',
  description: 'A premier tourism and hospitality conference by Zep Research featuring international speakers and industry experts.',
  images: [
    {
      url: '/conference-og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Engineering, Management and Social Sciences 2025',
    },
  ],
  type: 'website',
  locale: 'en_US',
  site_name: 'Zep Research',
}
}
function page() {
  return (
    <div>
      <CoOrganizerSection/>
    </div>
  )
}

export default page
