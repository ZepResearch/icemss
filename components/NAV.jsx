"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"

const ListItem = ({ href, title, children, className }) => (
  <li>
    <Link
      href={href}
      className={cn(
        "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className,
      )}
    >
      <div className="text-md font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-md leading-snug text-muted-foreground">{children}</p>
    </Link>
  </li>
)

const desktopNavItems = [
  {
    title: "About",
    dropdown: [
      { href: "/about-conference", title: "About Conference", description: "Learn about our climate change conference." },
      { href: "/about-organizers", title: "About Organizers", description: "Meet the organizations behind this event." },
      { href: "/about-co-organizers", title: "About Co-Organizers", description: "Meet the co-organizing organizations." },
    ],
  },
  {
    title: "Program",
    dropdown: [
      { href: "/theme-and-topics", title: "Themes and Topics", description: "Explore conference themes on climate action." },
      { href: "/mode-of-presentation", title: "Mode of Presentation", description: "View presentation formats and guidelines." },
      { href: "/schedule", title: "Conference Schedule", description: "View the full program of events." },
    ],
  },
  {
    title: "Speaker",
    dropdown: [
      { href: "/key-speaker", title: "Keynote Speakers", description: "Meet the keynote and invited speakers." },
      { href: "/distinct-speakers", title: "Distinguished  Speakers", description: "Browse featured session speakers." },
    ],
  },
  {
    title: "Policy",
    dropdown: [
      { href: "/terms-&-condition", title: "Terms & Conditions", description: "Read our terms and conditions." },
      { href: "/cancellation-policy", title: "Cancellation Policy", description: "Learn about our cancellation policy." },
      { href: "/privacy-policy", title: "Privacy Policy", description: "Understand how we protect your privacy." },
      { href: "/complaints-policy", title: "Complaints Policy", description: "Information about our complaints process." },
      { href: "/disability-discrimination-policy", title: "Disability Discrimination Policy", description: "Our commitment to accessibility and inclusion." },
      { href: "/health-and-safety-policy", title: "Health and Safety Policy", description: "Safety guidelines and protocols." },
      { href: "/equal-treatment-policy", title: "Equal Treatment Policy", description: "Our commitment to equal treatment for all." },
    ],
  },
  { title: "Committee", href: "/committee" },
  { title: "Submission", href: "/submission" },
  { title: "Venue", href: "/venue" },
  { title: "Gallery", href: "/gallery" },
  { title: "Journals", href: "/journals" },
  { title: "Awards", href: "/award" },
  { title: "Contact", href: "/contact" },
  { title: "Proceedings", href: "/proceedings" },
]

const DesktopNav = () => {
  const [openMenu, setOpenMenu] = React.useState(null)
  const closeTimeout = React.useRef(null)

  const handleEnter = (title) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setOpenMenu(title)
  }

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 150)
  }

  return (
    <div className="hidden lg:flex items-center space-x-1">
      {desktopNavItems.map((item) =>
        item.dropdown ? (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => handleEnter(item.title)}
            onMouseLeave={handleLeave}
          >
            <button
              type="button"
              className="inline-flex h-8 items-center gap-1 rounded-md px-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-expanded={openMenu === item.title}
            >
              {item.title}
              <ChevronDown
                className={cn(
                  "h-3 w-3 transition-transform",
                  openMenu === item.title && "rotate-180",
                )}
              />
            </button>

            {openMenu === item.title && (
              <div className="absolute left-0 top-full z-50 mt-1.5 w-80 rounded-md border bg-popover p-3 text-popover-foreground shadow-md">
                <ul className="grid gap-2 md:grid-cols-1">
                  {item.dropdown.map((sub) => (
                    <ListItem key={sub.href} href={sub.href} title={sub.title}>
                      {sub.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            className="inline-flex h-8 items-center rounded-md px-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {item.title}
          </Link>
        )
      )}
    </div>
  )
}

const MobileNavItem = ({
  href,
  children,
  subItems,
}) => (
  <AccordionItem value={href} className="border-none">
    {subItems ? (
      <>
        <AccordionTrigger className="text-sm py-2 hover:no-underline">{children}</AccordionTrigger>
        <AccordionContent>
          <ul className="ml-2 space-y-1">
            {subItems.map((item, index) => (
              <li key={index}>
                <SheetClose asChild>
                  <Link href={item.href} className="block py-1 text-md text-muted-foreground hover:text-foreground">
                    {item.title}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </>
    ) : (
      <SheetClose asChild>
        <Link href={href} className="block py-2 text-sm hover:text-primary">
          {children}
        </Link>
      </SheetClose>
    )}
  </AccordionItem>
)

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="sm" className="md:hidden p-1">
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-72">
      <SheetHeader>
        <SheetTitle className="text-sm">Menu</SheetTitle>
      </SheetHeader>
      <nav className="mt-4">
        <Accordion type="single" collapsible className="w-full">
          <MobileNavItem
            href="/about"
            subItems={[
              { href: "/about-conference", title: "About Conference" },
              { href: "/about-organizers", title: "About Organizers" },
              { href: "/about-co-organizers", title: "About Co-Organizers" },
            ]}
          >
            About
          </MobileNavItem>
          <MobileNavItem
            href="/program"
            subItems={[
              { href: "/theme-and-topics", title: "Themes and Topics" },
              { href: "/mode-of-presentation", title: "Mode of Presentation" },
              { href: "/schedule", title: "Conference Schedule" },
            ]}
          >
            Program
          </MobileNavItem>
          <MobileNavItem
            href="/speaker"
            subItems={[
              { href: "/key-speaker", title: "Key Speakers" },
              { href: "/Distinct-Speakers", title: "Distinct Speakers" },
            ]}
          >
            Speaker
          </MobileNavItem>
          <MobileNavItem href="/committee">Committee</MobileNavItem>
          <MobileNavItem href="/submission">Submission</MobileNavItem>
          <MobileNavItem href="/venue">Venue</MobileNavItem>
          <MobileNavItem href="/awards">Awards</MobileNavItem>
          <MobileNavItem href="/gallery">Gallery</MobileNavItem>
          <MobileNavItem href="/journals">Journal</MobileNavItem>
          <MobileNavItem href="/contact">Contact</MobileNavItem>
          <MobileNavItem href="/proceedings">Proceedings</MobileNavItem>
          <MobileNavItem
            href="/policy"
            subItems={[
              { title: "Terms & Conditions", href: "/terms-&-condition" },
              { title: "Cancellation Policy", href: "/cancellation-policy" },
              { title: "Privacy Policy", href: "/privacy-policy" },
              { title: "Complaints  Policy", href: "/complaints-policy" },
              { title: "Disability Discrimination Policy", href: "/disability-discrimination-policy" },
              { title: "Health and Safety Policy", href: "/health-and-safety-policy" },
              { title: "Equal Treatment Policy", href: "/equal-treatment-policy" },
            ]}
          >
            Policy
          </MobileNavItem>
        </Accordion>
        <div className="mt-4 space-y-2">
          <SheetClose asChild>
            <Button asChild variant="outline" size="sm" className="w-full text-md">
              <Link href="/sponsorship">Exhibit & Sponsor</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild size="sm" className="w-full text-md">
              <Link href="/registration">Register Now</Link>
            </Button>
          </SheetClose>
        </div>
      </nav>
    </SheetContent>
  </Sheet>
)

export default function Navbar() {
  return (
    <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90  py-2">
      <div className="max-w-screen-2xl mx-auto flex  items-center justify-between px-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Climate Conference Logo" className=" w-auto h-12" width={120} height={32} />
          </Link>
        </div>

        <DesktopNav />

        <div className="hidden md:flex items-center space-x-2">
          <Button
            asChild
            variant="outline"
            className="text-md h-8 px-3 border-blue-400 text-blue-400 hover:bg-blue-50"
          >
            <Link href="/sponsorship">Sponsor</Link>
          </Button>
          <Button asChild className="text-md h-8 px-3">
            <Link href="/registration">Register</Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </div>
  )
}