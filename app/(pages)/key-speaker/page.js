import SpeakersView from '@/components/Speakers'

export const metadata = {
  title: 'Keynote Speakers | ICEMSS',
  description: 'Meet the keynote speakers of ICEMSS and explore their insights.',
}

export default function KeySpeakerPage() {
  return <SpeakersView mode="keynote" title="Keynote Speakers" />
}
