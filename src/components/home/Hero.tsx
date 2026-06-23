"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, User, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Hotel Mega Anggrek Luxury Lobby"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-background/90 via-black/20 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-sm md:text-base mb-4 block">
            Welcome to
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Experience Timeless <br className="hidden md:block" />
            <span className="text-secondary">Luxury</span> in Jakarta
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow-md">
            Discover elegant rooms, exceptional hospitality, and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 rounded-full w-full sm:w-auto shadow-xl transition-transform hover:scale-105">
              Book Your Stay
            </Button>
            <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 rounded-full w-full sm:w-auto backdrop-blur-sm transition-transform hover:scale-105">
              Explore Rooms
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Booking Widget */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute bottom-8 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-max max-w-5xl z-20"
      >
        <div className="bg-background/80 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-3xl shadow-2xl">
          <form className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-border/50 pb-3 md:pb-0 md:pr-6">
              <Calendar className="text-secondary w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Check In</span>
                <input type="date" className="bg-transparent border-none text-foreground font-medium outline-none text-sm w-full" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-border/50 pb-3 md:pb-0 md:pr-6">
              <Calendar className="text-secondary w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Check Out</span>
                <input type="date" className="bg-transparent border-none text-foreground font-medium outline-none text-sm w-full" />
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-border/50 pb-3 md:pb-0 md:pr-6">
              <User className="text-secondary w-6 h-6" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Guests</span>
                <select className="bg-transparent border-none text-foreground font-medium outline-none text-sm w-full appearance-none">
                  <option value="1">1 Guest</option>
                  <option value="2" selected>2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
            </div>

            <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-2xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
              <Search className="w-5 h-5" />
              <span>Check Availability</span>
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
