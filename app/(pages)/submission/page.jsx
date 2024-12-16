import React from "react";
import SubmitForm from "./components/Form";
import PaperFormat from "../papers-format/page";
import FormatCards from "./components/PaperFormat";

export const metadata = {
  title: 'Paper Submission | ICEMSS 2025',
  description: 'Submit your paper for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
  openGraph: {
    title: 'Paper Submission | ICEMSS 2025',
    description: 'Submit your paper for the International Conference on Engineering, Management and Social Sciences (ICEMSS) 2025 in New Delhi, India.',
    url: 'https://www.icemss.in/submission',
    siteName: 'ICEMSS 2025',
  
    locale: 'en_US',
    type: 'website',
  },
 
  keywords: ['ICEMSS', 'paper submission', 'engineering', 'management', 'social sciences', 'conference', 'New Delhi', 'India'],
}
function page() {
  return (
    <div>
      <SubmitForm />
   <FormatCards/>
    </div>
  );
}

export default page;
