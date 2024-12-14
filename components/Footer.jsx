import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerSections = [
  {
    title: "About",
    links: [
      { name: "Conference", href: "/about-conference" },
      { name: "Organizers", href: "/about-organizers" },
      { name: "Committee", href: "/committee" },
      { name: "Sponsorship", href: "/sponsorship" },
    ],
  },
  {
    title: "Call for Papers",
    links: [
      { name: "Themes and Topics", href: "/theme-and-topics" },
      { name: "Submission Guidelines", href: "/submission-guidelines" },
      { name: "Presentation Formats", href: "/presentation-formats" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Submit Abstract", href: "/submission" },
      { name: "Venue", href: "/venue" },
      { name: "Contact", href: "/contact" },
      { name: "Awards", href: "/award" },
      { name: "Registration", href: "/registration" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "/terms-&-condition" },
      { name: "Cancellation Policy", href: "/cancellation-policy" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61561809783777", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/zepresearch/", icon: Instagram },
  { name: "Twitter", href: "https://x.com/Zepresearch", icon: Twitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/zep-research/", icon: Linkedin },
  { name: "Youtube", href: "https://youtube.com/@zepresearch", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="relative text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-blue-900 opacity-80 z-10" />
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Climate Conference Logo"
                width={200}
                height={80}
              />
            </Link>
            <div className="flex space-x-4 ml-4 mb-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:w-2/3">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-200">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-200 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-700 text-center">
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} International Conference on
            Climate Change and Sustainability. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

