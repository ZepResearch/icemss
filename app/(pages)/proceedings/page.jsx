import React from 'react'
import ProceedingsContent from './Content'

export const metadata = {
    title: 'Proceedings | ICEMSS',
    description: 'Browse published conference proceedings from ICEMSS featuring cutting-edge research and scholarly contributions.',
}

function ProceedingsPage() {
    return (
        <main>
            <ProceedingsContent />
        </main>
    )
}

export default ProceedingsPage