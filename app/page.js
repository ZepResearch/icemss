import AboutSection from "@/components/About";
import CoOrganizationLogos from "@/components/Co-OrganiztionLogo";
import CTASection from "@/components/Cta-section";
import DatesSection from "@/components/Dates";
import Hero from "@/components/Hero";
import ObjectivesSection from "@/components/Objectives-section";
import SDGSection from "@/components/SDGS";
import TicketCTA from "@/components/TicketCTA";




export default function Home() {
  return (
    <main>
      <Hero/>
      <CoOrganizationLogos/>
      <AboutSection/>
      <ObjectivesSection/>
      <SDGSection/>
      <CTASection/> 
      <DatesSection/>
      <TicketCTA/>
    </main>
  );
}
