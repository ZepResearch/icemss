import React from 'react'
import Ticket from './components/TIcket'
import Process from './components/Proccse'
import CTACancle from './components/Cta-Cancle-Policy'
import Guidline from './components/guidline'

export const metadata = {
  title: 'Registration | ICEMSS ',
  description: 'Register for the International Conference on Engineering, Management and Social Sciences (ICEMSS) .',
   // Adding canonical URL
   alternates: {
    canonical: 'https://www.icemss.in/registration',
  },
  openGraph: {
    title: 'Registration | ICEMSS ',
    description: 'Register for the International Conference on Engineering, Management and Social Sciences (ICEMSS)  .',
    url: 'https://www.icemss.in/registration',
    siteName: 'ICEMSS ',
    
    locale: 'en_US',
    type: 'website',
  },
 
  keywords: ['ICEMSS', 'registration', 'engineering', 'management', 'social sciences', 'conference'],
}
function page() {
  return (
    <div>
        <Ticket/>
        <Guidline/>
        <Process/>
        <CTACancle/>
    </div>
  )
}

export default page