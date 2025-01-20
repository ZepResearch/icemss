import React from 'react'
import AboutCompany from './Content'
export const metadata = {
  title: 'Zep Research - International Conference on Engineering, Management and Social Sciences 2025',
  description: 'Join Zep Research\'s premier tourism and hospitality conference in Delhi. Connect with 500+ industry professionals, researchers, and international speakers. February 19-20, 2025.',
  keywords: ['tourism conference', 'hospitality conference', 'Zep Research', 'tourism management', 'Delhi conference 2025'],
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
      <h1></h1>
      <AboutCompany/>
    </div>
  )
}

export default page
