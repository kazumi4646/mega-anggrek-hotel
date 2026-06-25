"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/animations";

export default function AboutPage() {
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
            About Mega Anggrek
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A legacy of hospitality and elegance in the heart of Jakarta.
          </motion.p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <FadeIn>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/hero.png" 
                alt="Hotel Exterior" 
                fill 
                className="object-cover" 
              />
            </div>
          </FadeIn>
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Established with a vision to provide world-class hospitality, Mega Anggrek Hotel & Convention has grown to become one of the most prominent destinations for both business and leisure travelers in Jakarta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We take pride in our exceptional service, luxurious accommodations, and state-of-the-art facilities. Our mission is to create unforgettable experiences for every guest who walks through our doors.
            </p>
          </FadeIn>
        </StaggerContainer>
      </div>
    </div>
  );
}
