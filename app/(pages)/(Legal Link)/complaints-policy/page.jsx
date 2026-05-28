import React from 'react'
import ComplaintsPolicy from './Content'
export const metadata = {
  title: 'Complaints Policy - International Conference on Engineering, Management and Social Sciences',
  description: 'Join A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in engineering, management, and social sciences.',
  keywords: ['ICEMSS', 'engineering conference', 'management conference', 'social sciences conference', 'academic conference Delhi', 'research conference '],
  alternates: {
    canonical: 'https://www.icemss.in/complaints-policy',
  },
  openGraph: {
    title: 'ICEMSS  - International Conference on Engineering, Management and Social Sciences',
    description: 'Join ICEMSS A premier academic conference featuring 30+ workshops and global researchers.',
   
    type: 'website',
    locale: 'en_US',
    site_name: 'ICEMSS ',
  },
 
}
function page() {
  return (
    <div>
      <ComplaintsPolicy/>
    </div>
  )
}

export default page
