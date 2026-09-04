"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, ChevronDown, LogIn, LogOut, User } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import AuthModal from "@/components/AuthModal"

// Single source of truth for nav structure — feeds both the desktop
// dropdown menus and the mobile accordion, so hrefs/labels never drift
// between the two (the old file had "/distinct-speakers" vs
// "/Distinct-Speakers" duplicated in two places).
const navItems = [
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
      { href: "/distinct-speakers", title: "Distinguished Speakers", description: "Browse featured session speakers." },
    ],
  },
  { title: "Submission", href: "/submission" },
  { title: "Venue", href: "/venue" },
      { href: "/journals", title: "Journals", description: "Partner journals for paper publication." },

  {
    title: "More",
    dropdown: [
  { title: "Committee", href: "/committee", description: "Meet the organizing and advisory committees." },

      { href: "/gallery", title: "Gallery", description: "Photos and highlights from past events." },
      { href: "/award", title: "Awards", description: "Recognition for outstanding contributions." },
      { href: "/proceedings", title: "Proceedings", description: "Published conference proceedings." },
      { href: "/contact", title: "Contact", description: "Get in touch with the organizing team." },
    ],
  },
  // {
  //   title: "Policy",
  //   dropdown: [
  //     { href: "/terms-&-condition", title: "Terms & Conditions", description: "Read our terms and conditions." },
  //     { href: "/cancellation-policy", title: "Cancellation Policy", description: "Learn about our cancellation policy." },
  //     { href: "/privacy-policy", title: "Privacy Policy", description: "Understand how we protect your privacy." },
  //     { href: "/complaints-policy", title: "Complaints Policy", description: "Information about our complaints process." },
  //     { href: "/disability-discrimination-policy", title: "Disability Discrimination Policy", description: "Our commitment to accessibility and inclusion." },
  //     { href: "/health-and-safety-policy", title: "Health and Safety Policy", description: "Safety guidelines and protocols." },
  //     { href: "/equal-treatment-policy", title: "Equal Treatment Policy", description: "Our commitment to equal treatment for all." },
  //   ],
  // },
]

const ListItem = ({ href, title, children, onSelect }) => (
  <li>
    <Link
      href={href}
      onClick={onSelect}
      className="block select-none rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:ring-2 focus-visible:ring-blue-500/50"
    >
      <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
      {children && (
        <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">{children}</p>
      )}
    </Link>
  </li>
)

function DesktopNav() {
  const [openMenu, setOpenMenu] = React.useState(null)
  const closeTimeout = React.useRef(null)
  const navRef = React.useRef(null)

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpenMenu(null)
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const handleEnter = (title) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setOpenMenu(title)
  }

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 150)
  }

  const toggleMenu = (title) => {
    setOpenMenu((prev) => (prev === title ? null : title))
  }

  return (
    <nav ref={navRef} aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
      {navItems.map((item) =>
        item.dropdown ? (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => handleEnter(item.title)}
            onMouseLeave={handleLeave}
          >
            <button
              type="button"
              onClick={() => toggleMenu(item.title)}
              className={cn(
                "inline-flex h-9 items-center gap-1 rounded-md px-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
                openMenu === item.title && "bg-accent text-accent-foreground",
              )}
              aria-expanded={openMenu === item.title}
              aria-haspopup="true"
            >
              {item.title}
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform duration-200", openMenu === item.title && "rotate-180")}
              />
            </button>

            {openMenu === item.title && (
              <div className="absolute left-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg">
                <ul className="grid gap-0.5 p-2">
                  {item.dropdown.map((sub) => (
                    <ListItem key={sub.href} href={sub.href} title={sub.title} onSelect={() => setOpenMenu(null)}>
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
            className="inline-flex h-9 items-center rounded-md px-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
          >
            {item.title}
          </Link>
        ),
      )}
    </nav>
  )
}

const MobileNavItem = ({ value, children, subItems, href }) => (
  <AccordionItem value={value} className="border-b border-border/60 last:border-none">
    {subItems ? (
      <>
        <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">{children}</AccordionTrigger>
        <AccordionContent>
          <ul className="ml-2 space-y-0.5 pb-2">
            {subItems.map((sub) => (
              <li key={sub.href}>
                <SheetClose asChild>
                  <Link
                    href={sub.href}
                    className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {sub.title}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </>
    ) : (
      <div className="py-3">
        <SheetClose asChild>
          <Link href={href} className="block text-sm font-medium hover:text-primary">
            {children}
          </Link>
        </SheetClose>
      </div>
    )}
  </AccordionItem>
)

// Now takes auth state as props (same values Navbar already reads from
// useAuth) so the sidebar can show who's logged in and offer Logout,
// instead of that only being available via the icon-only button in the
// top bar outside the sheet.
const MobileNav = ({ isLoggedIn, user, logout, openAuthModal }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="h-9 w-9 xl:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto sm:w-80">
      <SheetHeader>
        <SheetTitle className="text-base">Menu</SheetTitle>
      </SheetHeader>

      {/* Account row — visible inside the sidebar itself, with icon + text
          for both states, not just the icon-only button in the top bar. */}
      <div className="mt-4 border-b border-border/60 pb-4">
        {isLoggedIn ? (
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
              <User className="h-4 w-4 shrink-0" />
              <span className="truncate">{user?.name || user?.username || user?.email || "Account"}</span>
            </div>
            <SheetClose asChild>
              <Button type="button" variant="outline" size="sm" className="shrink-0 text-sm" onClick={logout}>
                <LogOut className="mr-1.5 h-4 w-4" />
                Logout
              </Button>
            </SheetClose>
          </div>
        ) : (
          <SheetClose asChild>
            <Button type="button" size="sm" className="w-full text-sm" onClick={openAuthModal}>
              <LogIn className="mr-1.5 h-4 w-4" />
              Login
            </Button>
          </SheetClose>
        )}
      </div>

      <nav className="mt-4 pb-8" aria-label="Mobile navigation">
        <Accordion type="single" collapsible className="w-full">
          {navItems.map((item) => (
            <MobileNavItem
              key={item.title}
              value={item.title}
              href={item.href}
              subItems={item.dropdown}
            >
              {item.title}
            </MobileNavItem>
          ))}
        </Accordion>

        <div className="mt-6 space-y-2">
          <SheetClose asChild>
            <Button asChild variant="outline" className="w-full text-sm">
              <Link href="/sponsorship">Exhibit & Sponsor</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild className="w-full text-sm">
              <Link href="/registration">Register Now</Link>
            </Button>
          </SheetClose>
        </div>
      </nav>
    </SheetContent>
  </Sheet>
)

export default function Navbar() {
  const { user, logout, openAuthModal } = useAuth()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Server always renders logged-out markup (no access to localStorage/cookies).
  // Gating on `mounted` keeps the client's first render identical to that,
  // then swaps in the real auth state right after hydration — no mismatch.
  const isLoggedIn = mounted && !!user

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Climate Conference Logo"
              width={140}
              height={40}
              priority
              className="h-9 w-auto sm:h-10 lg:h-12"
            />
          </Link>

          <DesktopNav />

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <Button
              asChild
              variant="outline"
              className="h-9 border-blue-400 px-3 text-sm text-blue-500 hover:bg-blue-50 hover:text-blue-600"
            >
              <Link href="/sponsorship">Sponsor</Link>
            </Button>
            <Button asChild className="h-9 px-3 text-sm">
              <Link href="/registration">Conference Registration</Link>
            </Button>
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <div className="flex h-9 items-center rounded-full border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700">
                  <User className="mr-2 h-4 w-4" />
                  {user.name || user.username || user.email || "Account"}
                </div>
                <Button type="button" variant="outline" className="h-9 px-3 text-sm" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button type="button" className="h-9 px-3 text-sm" onClick={openAuthModal}>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            )}
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            {isLoggedIn ? (
              <Button type="button" variant="outline" size="lg" className="h-9" onClick={logout} title="Logout">
                <LogOut className="h-4 w-4" /> Logout
              </Button>
            ) : (
              <Button type="button" variant="outline" size="lg" className="h-9 " onClick={openAuthModal} title="Login">
                <LogIn className="h-4 w-4" /> Login
              </Button>
            )}
            <MobileNav isLoggedIn={isLoggedIn} user={user} logout={logout} openAuthModal={openAuthModal} />
          </div>
        </div>
      </header>
      <AuthModal />
    </>
  )
}