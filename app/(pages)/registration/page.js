import React from 'react'
import Ticket from './components/TIcket'
import Process from './components/Proccse'
import CTACancle from './components/Cta-Cancle-Policy'

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