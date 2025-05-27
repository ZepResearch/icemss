import AboutSection from "@/components/About";
import Banner from "@/components/Banner";
import Buttons from "@/components/buttons";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CTASection from "@/components/Cta-section";
import DatesSection from "@/components/Dates";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import ObjectivesSection from "@/components/Objectives-section";
import SDGSection from "@/components/SDGS";
import SpeakerSection from "@/components/Speakers";
import Testimonial from "@/components/Testomonial";
import TicketCTA from "@/components/TicketCTA";
import VenueCTA from "@/components/VebueCTA";




export default function Home() {
  return (
    <main>
      {/* <Banner/> */}
      <Hero/>
      {/* <CoOrganizationLogos/> */}
      <AboutSection/>
      <Buttons/>
      <ObjectivesSection/>
      <DatesSection/>
      <SpeakerSection/>
      <SDGSection/>
      <CTASection/> 
      <TicketCTA/>
      <Testimonial/>
      <VenueCTA/>
      <FAQ/>
      
    </main>
  );
}
