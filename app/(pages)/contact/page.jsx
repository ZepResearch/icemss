import React from 'react'
import ContactUs from './Content'


export const metadata = {
  title: 'Contact Us | ICEMSS 2025',
  description: 'Get in touch with the organizers of the International Conference on Engineering, Management, and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
  alternates: {
    canonical: 'https://www.icemss.in/contact',
  },
  openGraph: {
    title: 'Contact Us | ICEMSS 2025',
    description: 'Get in touch with the organizers of the International Conference on Engineering, Management, and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
    url: 'https://www.icemss.in/contact',
    siteName: 'ICEMSS 2025',
   
    locale: 'en_US',
    type: 'website',
  },
 
  keywords: ['ICEMSS', 'contact', 'engineering', 'management', 'social sciences', 'conference', 'New Delhi', 'India'],
}

function page() {
  return (
    <div>
      <ContactUs/>
    </div>
  )
}

export default page
