import React from 'react'
import IACommitte from './components/IACommitte'
import ScientificCommittee from './components/ScientificCommittee'
import OrganizingCommittee from './components/OrganizingCommittee'

function page() {
  return (
    <div>
        <OrganizingCommittee/>
        <ScientificCommittee/>  
        <IACommitte/>
    </div>
  )
}

export default page