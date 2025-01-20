import React from 'react'
import IACommitte from './components/IACommitte'
import ScientificCommittee from './components/ScientificCommittee'
import OrganizingCommittee from './components/OrganizingCommittee'
export const metadata = {
  title: 'Committee | ICEMSS 2025',
  description: 'Meet the organizing committee of the International Conference on Engineering, Management, and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
  alternates: {
    canonical: 'https://www.icemss.in/committee',
  },
  openGraph: {
    title: 'Committee | ICEMSS 2025',
    description: 'Meet the organizing committee of the International Conference on Engineering, Management, and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
    url: 'https://www.icemss.in/committee',
    siteName: 'ICEMSS 2025',
    locale: 'en_US',
    type: 'website',
  },

  keywords: ['ICEMSS', 'committee', 'engineering', 'management', 'social sciences', 'conference', 'New Delhi', 'India'],
}
function page() {
  return (
    <div><h1></h1>
         <OrganizingCommittee/>
        {/*
        <ScientificCommittee/>   */}
        <IACommitte/>
    </div>
  )
}

export default page