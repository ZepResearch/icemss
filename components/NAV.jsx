"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { Menu, Info, FileText, Globe, Users, Award, PersonStanding, MessageSquare, GalleryHorizontal } from "lucide-react"
import { ChatBubbleIcon } from "@radix-ui/react-icons"

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const MobileNavItem = ({ href, children, subItems, icon: Icon }) => (
  <AccordionItem value={href}>
    {subItems ? (
      <>
        <AccordionTrigger>
          {Icon && <Icon className="mr-2 h-4 w-4 inline" />}
          {children}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="ml-4 space-y-2">
            {subItems.map((item, index) => (
              <li key={index}>
                <SheetClose asChild>
                  <Link href={item.href} className="block py-2">
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
        <Link href={href} className="block py-2">
          {Icon && <Icon className="mr-2 h-4 w-4 inline" />}
          {children}
        </Link>
      </SheetClose>
    )}
  </AccordionItem>
)

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Navigation Menu</SheetTitle>
      </SheetHeader>
      <nav className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          {/* <MobileNavItem href="/">HOME</MobileNavItem> */}
          <MobileNavItem
            href="/about"
            subItems={[
              { href: "/about-conference", title: "About Conference" },
              { href: "/about-organizers", title: "About Organizers" },
              // { href: "/about-speakers", title: "About Speakers" },
            ]}
            icon={Info}
          >
            ABOUT
          </MobileNavItem>
          <MobileNavItem
            href="/program"
            subItems={[
              { href: "/theme-and-topics", title: "Themes and Topics" },
              // { href: "/papers-format", title: "Paper Formats" },
              { href: "/mode-of-presentation", title: "Mode of Presentation" },

              // { href: "/awards", title: "Awards" },
              { href: "/schedule", title: "Conference Schedule" },
            ]}
            icon={FileText}
          >
            PROGRAM
          </MobileNavItem>
          <MobileNavItem href="/committee" icon={PersonStanding}>
            COMMITTEE
          </MobileNavItem>
          <MobileNavItem href="/submission" icon={Globe}>
            SUBMISSION
          </MobileNavItem>
          <MobileNavItem href="/venue" icon={Users}>
            VENUE
          </MobileNavItem>
          <MobileNavItem href="/awards" icon={Award}>
            AWARDS
          </MobileNavItem>
          <MobileNavItem href="/contact">CONTACT</MobileNavItem>
        </Accordion>
        <div className="mt-6">
          <SheetClose asChild>
            <Button asChild variant="outline" className="w-full mb-2 border-blue-400 text-blue-400">
              <Link href="/sponsorship">Exhibit & Sponsor</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link href="/registration">REGISTER NOW</Link>
            </Button>
          </SheetClose>
        </div>
        <div className="mt-4 flex justify-center flex-col items-center">
          <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12">
            <Link href="https://wa.me/8260080050" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" className="h-10 w-10 text-white" />
            </Link>
          </Button>
              <span className="text-sm">chat with us</span>
        </div>  
      </nav>
    </SheetContent>
  </Sheet>
)

export default function Navbar() {
  return (
    <div className="border-b border-primaray dark:border-primaray  py-2  z-20 fixed left-0 right-0 top-0 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 ">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/logo.png"
              alt="Climate Conference Logo"
              className="drop-shadow-2xl "
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 relative z-20 ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    HOME
                  </NavigationMenuLink>
                </Link> */}
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Info className="mr-2 h-4 w-4 inline" />
                  ABOUT
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 border-none">
                    <ListItem
                      href="/about-conference"
                      title="About Conference"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      Learn about our climate change and sustainability conference.
                    </ListItem>
                    <ListItem
                      href="/about-organizers"
                      title="About Organizers"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      Discover the organizations behind this important event.
                    </ListItem>
                    {/* <ListItem
                      href="/about-speakers"
                      title="About Speakers"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      Discover the organizations behind this important event.
                    </ListItem> */}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FileText className="mr-2 h-4 w-4 inline" />
                  PROGRAM
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
                    <ListItem
                      href="/theme-and-topics"
                      title="Themes and Topics"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      Explore our conference themes on climate action and sustainability.
                    </ListItem>
                    {/* <ListItem
                      href="/papers-format"
                      title="Paper Formats"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      Check out Formats and guidlines for Paper publication
                    </ListItem> */}
                    <ListItem
                      href="/mode-of-presentation"
                      title="Mode of Presentation"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      View the full program of events and sessions.
                    </ListItem>
                    {/* <ListItem
                      href="/awards"
                      title="Award"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      View the full programs Awards distributions and nominies .
                    </ListItem> */}
                    <ListItem
                      href="/schedule"
                      title="Conference Schedule"
                      className="hover:bg-slate-50 hover:drop-shadow-md"
                    >
                      View the full program of events and sessions.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/committee" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <PersonStanding className="mr-2 h-4 w-4 inline" />
                    COMMITTEE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/submission" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Globe className="mr-2 h-4 w-4 inline" />
                    SUBMISSION
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/venue" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Users className="mr-2 h-4 w-4 inline" />
                    VENUE
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <GalleryHorizontal className="mr-2 h-4 w-4 inline" />
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>CONTACT</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            asChild
            variant="outline"
            className="w-full  border-blue-400 text-blue-400 hover:text-blue-600 font-medium"
          >
            <Link href="/sponsorship">Exhibit & Sponsor</Link>
          </Button>
          <Button asChild className="">
            <Link href="/registration">REGISTER NOW</Link>
          </Button>
        </div>
        <MobileNav />
        {/* WhatsApp Floating Button - Desktop */}
        <div className="fixed right-4 top-2 z-50 hidden md:flex flex-col items-center">
          <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 h-12 w-12 shadow-lg">
            <Link href="https://wa.me/8260080050" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" className="h-10 w-10 text-white" />
              <span className="sr-only">Contact via WhatsApp</span>
            </Link>
          </Button>
          <span className="text-xs font-medium mt-1 text-green-600">Chat with us</span>
        </div>
      </div>
    </div>
  )
}
