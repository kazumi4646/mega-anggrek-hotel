"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/animations";

export default function EventsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            Meeting & Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Host your next corporate meeting, conference, or dream wedding in our versatile event spaces.
          </motion.p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn className="order-2 md:order-1">
            <h2 className="text-3xl font-heading font-bold mb-4">Grand Ballroom</h2>
            <p className="text-muted-foreground mb-6">
              Our spacious Grand Ballroom is the perfect venue for large-scale events, weddings, and grand celebrations. Equipped with modern audio-visual technology and customizable layouts.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li>• Capacity up to 1000 guests</li>
              <li>• High-speed Wi-Fi access</li>
              <li>• State-of-the-art sound system</li>
              <li>• Professional event planning team</li>
            </ul>
          </FadeIn>
          <FadeIn className="order-1 md:order-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Meeting Room" 
                fill 
                className="object-cover" 
                unoptimized
              />
            </div>
          </FadeIn>
        </StaggerContainer>
      </div>
    </div>
  );
}
