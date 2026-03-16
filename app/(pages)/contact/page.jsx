import React from 'react'
import ContactUs from './Content'


export const metadata = {
  title: 'Contact Us | ICEMSS ',
  description: 'Get in touch with the organizers of the International Conference on Engineering, Management, and Social Sciences (ICEMSS) ',
  alternates: {
    canonical: 'https://www.icemss.in/contact',
  },
  openGraph: {
    title: 'Contact Us | ICEMSS ',
    description: 'Get in touch with the organizers of the International Conference on Engineering, Management, and Social Sciences (ICEMSS) ',
    url: 'https://www.icemss.in/contact',
    siteName: 'ICEMSS ',
   
    locale: 'en_US',
    type: 'website',
  },
 
  keywords: ['ICEMSS', 'contact', 'engineering', 'management', 'social sciences', 'conference'],
}

function page() {
  return (
    <div>
      <ContactUs/>
    </div>
  )
}

export default page
