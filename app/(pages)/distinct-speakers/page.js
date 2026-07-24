import SpeakersView from '@/components/Speakers'

export const metadata = {
  title: 'Distinct Speakers | ICEMSS',
  description: 'Explore the other distinguished speakers at ICEMSS.',
}

export default function DistinctSpeakersPage() {
  return <SpeakersView mode="distinct" title="Distinct Speakers" />
}
