"use client";

import { motion } from "framer-motion";
import { Facilities } from "@/components/home/Facilities";

export default function FacilitiesPage() {
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
            Our Facilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover world-class amenities designed to make your stay unforgettable. From our wellness spa to our state-of-the-art fitness center.
          </motion.p>
        </div>
      </div>
      
      {/* Reusing the Facilities component for now */}
      <Facilities />
    </div>
  );
}
