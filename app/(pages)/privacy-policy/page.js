import React from 'react'
import PrivacyPolicy from './components/Content'
export const metadata = {
  title: 'Privacy Policy - International Conference on Engineering, Management and Social Sciences',
  description: 'Join ICEMSS 2025 in Delhi, India. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in engineering, management, and social sciences.',
  keywords: ['ICEMSS', 'engineering conference', 'management conference', 'social sciences conference', 'academic conference Delhi', 'research conference 2025'],
  openGraph: {
    title: 'ICEMSS 2025 - International Conference on Engineering, Management and Social Sciences',
    description: 'Join ICEMSS 2025 in Delhi, India. A premier academic conference featuring 30+ workshops and global researchers.',
   
    type: 'website',
    locale: 'en_US',
    site_name: 'ICEMSS 2025',
  },
 
}
function page() {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}

export default page
