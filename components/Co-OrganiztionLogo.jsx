import { CoOrganizationLogosClient } from "./ui/co-org-logo";

const logos = [
  {
    name: "Company 1",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747171/pather%20logo/pagmkfmpwxmpa8szlvcy.jpg  ",
  },
  {
    name: "Company 2",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747142/pather%20logo/e4zln7v0g3nrh0vs92qd.jpg",
  },
  {
    name: "Company 3",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747111/pather%20logo/wpp20uugpj4gegwaxqit.jpg",
  },
  {
    name: "Company 4",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747074/pather%20logo/lfwclyhudaxhntxmnt59.jpg",
  },
  {
    name: "Company 5",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747023/pather%20logo/g6o2riwdeghed8rw8jr1.jpg",
  },
  {
    name: "Company 6",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/an4uoqfpuhitlpzc1myq.png  ",
  },
  {
    name: "Company 7",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/afcvjzohrxc4gnuii3yc.png",
  },
  {
    name: "Company 8",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/itr0sezg2mkyt0noyfvl.png",
  },
];

export default function CoOrganizationLogos() {
  return (
    <section className="w-full py-16 ">
   
    
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center sm:text-center mb-8 underline underline-offset-2 decoration-primary dark:decoration-yellow-50">
          Our Co-organizations
        </h2>
        <CoOrganizationLogosClient logos={logos} />
      </div>
    </section>
  );
}
