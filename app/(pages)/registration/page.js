import React from 'react'
import Ticket from './components/TIcket'
import Process from './components/Proccse'
import CTACancle from './components/Cta-Cancle-Policy'

export const metadata = {
  title: 'Registration | ICEMSS 2025',
  description: 'Register for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
   // Adding canonical URL
   alternates: {
    canonical: 'https://www.icemss.in/registration',
  },
  openGraph: {
    title: 'Registration | ICEMSS 2025',
    description: 'Register for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
    url: 'https://www.icemss.in/registration',
    siteName: 'ICEMSS 2025',
    
    locale: 'en_US',
    type: 'website',
  },
 
  keywords: ['ICEMSS', 'registration', 'engineering', 'management', 'social sciences', 'conference', 'New Delhi', 'India'],
}
function page() {
  return (
    <div>
        <Ticket/>
        <Process/>
        <CTACancle/>
    </div>
  )
}

export default page