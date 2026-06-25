"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/animations";

export default function RestaurantPage() {
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
            Dining & Restaurant
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Savor an array of exquisite culinary delights prepared by our expert chefs.
          </motion.p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Fine Dining" 
                fill 
                className="object-cover" 
                unoptimized
              />
            </div>
          </FadeIn>
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold mb-4">Orchid Restaurant</h2>
            <p className="text-muted-foreground mb-6">
              Our signature restaurant offers a blend of international and local cuisines, served in an elegant and comfortable setting. Perfect for romantic dinners, family gatherings, or business lunches.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Breakfast:</strong> 06:00 AM - 10:00 AM</li>
              <li><strong>Lunch:</strong> 12:00 PM - 03:00 PM</li>
              <li><strong>Dinner:</strong> 06:00 PM - 10:00 PM</li>
            </ul>
          </FadeIn>
        </StaggerContainer>
      </div>
    </div>
  );
}
