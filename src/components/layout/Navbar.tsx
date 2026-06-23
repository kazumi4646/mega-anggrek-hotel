"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms & Suites", href: "/rooms" },
  { name: "Facilities", href: "/facilities" },
  { name: "Restaurant", href: "/restaurant" },
  { name: "Meeting & Events", href: "/events" },
  { name: "Promotions", href: "/promotions" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  
  const navbarBg = isScrolled || !isHome 
    ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50" 
    : "bg-transparent";

  const textColor = isScrolled || !isHome ? "text-foreground" : "text-white";
  const logoColor = isScrolled || !isHome ? "text-primary" : "text-white";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className={`font-heading text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}>
            Mega Anggrek
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium rounded-full px-8 shadow-md transition-transform hover:scale-105"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <Sheet>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className={textColor} />
              }
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-l border-border w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-6">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium rounded-full py-6 text-lg">
                    Book Now
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
