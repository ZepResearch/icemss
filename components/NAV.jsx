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
import { Menu, ChevronDown } from "lucide-react"

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-md leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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
          <MobileNavItem href="/committee">Committee</MobileNavItem>
          <MobileNavItem href="/submission">Submission</MobileNavItem>
          <MobileNavItem href="/venue">Venue</MobileNavItem>
          <MobileNavItem href="/awards">Awards</MobileNavItem>
          <MobileNavItem href="/gallery">Gallery</MobileNavItem>
          <MobileNavItem href="/contact">Contact</MobileNavItem>
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
        <div className="mt-4 flex justify-center">
          <Button size="sm" className="bg-green-500 hover:bg-green-600 text-md">
            <Link
              href="https://wa.me/8260080050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img src="/whatsapp.png" className="h-3 w-3" alt="WhatsApp" />
              Chat
            </Link>
          </Button>
        </div>
      </nav>
    </SheetContent>
  </Sheet>
)

export default function Navbar() {
  return (
    <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto flex  items-center justify-between px-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Climate Conference Logo" className=" w-auto" width={120} height={32} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md h-8 px-2">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-80 gap-2 p-3 md:grid-cols-1">
                    <ListItem href="/about-conference" title="About Conference">
                      Learn about our climate change conference.
                    </ListItem>
                    <ListItem href="/about-organizers" title="About Organizers">
                      Meet the organizations behind this event.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md h-8 px-2">
                  Program
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-80 gap-2 p-3 md:grid-cols-1">
                    <ListItem href="/theme-and-topics" title="Themes and Topics">
                      Explore conference themes on climate action.
                    </ListItem>
                    <ListItem href="/mode-of-presentation" title="Mode of Presentation">
                      View presentation formats and guidelines.
                    </ListItem>
                    <ListItem href="/schedule" title="Conference Schedule">
                      View the full program of events.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/committee" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md h-8 px-2")}>
                    Committee
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/submission" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md h-8 px-2")}>
                    Submission
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/venue" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md h-8 px-2")}>
                    Venue
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/award" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md h-8 px-2")}>
                    Awards
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-md h-8 px-2")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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

      {/* WhatsApp Floating Button - Desktop */}
      <div className="fixed right-4 bottom-4 z-50 hidden md:block">
        <Button size="sm" className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
          <Link
            href="https://wa.me/8260080050"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <img src="/whatsapp.png" className="h-4 w-4" alt="WhatsApp" />
            <span className="text-md">Chat</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
