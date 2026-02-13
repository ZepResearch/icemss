import { CoOrganizationLogosClient } from "./ui/co-org-logo";

const logos = [
  {
    name: "Company 12",
    src: "/co-org/sulu.png",
  },
  
  
];

export default function CoOrganizationLogos() {
  return (
    <section className="w-full py-16 ">
   
    
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center sm:text-center mb-8 underline underline-offset-2 decoration-primary dark:decoration-yellow-50">
        Co-Organizers
        </h2>
        <CoOrganizationLogosClient logos={logos} />
      </div>
    </section>
  );
}
