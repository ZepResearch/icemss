import React from "react";
import SubmitForm from "./components/Form";

import FormatCards from "./components/PaperFormat";
import AbstractSubmissionGuidelines from "./components/SubmitGuidline";

export const metadata = {
  title: 'Paper Submission | ICEMSS ',
  description: 'Submit your paper for the International Conference on Engineering, Management and Social Sciences (ICEMSS).',
   // Adding canonical URL
   alternates: {
    canonical: 'https://www.icemss.in/submission',
  },
  openGraph: {
    title: 'Paper Submission | ICEMSS ',
    description: 'Submit your paper for the International Conference on Engineering, Management and Social Sciences (ICEMSS).',
    url: 'https://www.icemss.in/submission',
    siteName: 'ICEMSS ',
  
    locale: 'en_US',
    type: 'website',
  },
 
  keywords: ['ICEMSS', 'paper submission', 'engineering', 'management', 'social sciences', 'conference'],
}
function page() {
  return (
    <div>
      <h1></h1>
      <SubmitForm />
   <FormatCards/>
   <AbstractSubmissionGuidelines/>
    </div>
  );
}

export default page;
