import React from 'react'
import IACommitte from './components/IACommitte'
import ScientificCommittee from './components/ScientificCommittee'
import OrganizingCommittee from './components/OrganizingCommittee'
export const metadata = {
  title: 'Committee | ICEMSS ',
  description: 'Meet the organizing committee of the International Conference on Engineering, Management, and Social Sciences (ICEMSS)  ',
  alternates: {
    canonical: 'https://www.icemss.in/committee',
  },
  openGraph: {
    title: 'Committee | ICEMSS ',
    description: 'Meet the organizing committee of the International Conference on Engineering, Management, and Social Sciences (ICEMSS) ',
    url: 'https://www.icemss.in/committee',
    siteName: 'ICEMSS ',
    locale: 'en_US',
    type: 'website',
  },

  keywords: ['ICEMSS', 'committee', 'engineering', 'management', 'social sciences', 'conference', ],
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