import React from 'react'
import ModeOfPresent from './Content'

export const metadata = {
  title: 'Mode of Presentation | ICEMSS 2025',
  description: 'Choose your preferred method of presenting at the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025.',
  openGraph: {
    title: 'Mode of Presentation | ICEMSS 2025',
    description: 'Choose your preferred method of presenting at the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025.',
    url: 'https://www.icemss.in/mode-of-presentation',
    siteName: 'ICEMSS 2025',
  
    locale: 'en_US',
    type: 'website',
  },
  
  keywords: ['ICEMSS', 'presentation modes', 'oral presentation', 'poster presentation', 'virtual presentation', 'engineering', 'management', 'social sciences', 'conference'],
}

function page() {
  return (
    <div>
      <ModeOfPresent/>
    </div>
  )
}

export default page
