export const metadata = {
  title: 'Payment | ICEMSS 2025',
  description: 'Thank you to Choose the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025.',
   // Adding canonical URL
   alternates: {
    canonical: 'https://www.icemss.in/payment/',
  },
  openGraph: {
    title: 'Payment | ICEMSS 2025',
    description: 'Choose your preferred method of presenting at the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025.',
   
    siteName: 'ICEMSS 2025',
   
    locale: 'en_US',
    type: 'website',
  },
  
  keywords: ['ICEMSS', 'presentation modes', 'oral presentation', 'poster presentation', 'virtual presentation', 'engineering', 'management', 'social sciences', 'conference'],
}


export default function PaymentLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}