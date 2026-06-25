"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "@/components/animations";

const galleryImages = [
  { src: "/images/hero.png", alt: "Hotel Exterior", category: "Exterior" },
  { src: "/images/deluxe_room.png", alt: "Deluxe Room", category: "Rooms" },
  { src: "/images/suite_room.png", alt: "Executive Suite", category: "Rooms" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Hotel Lobby", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Spa & Wellness", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Swimming Pool", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Fine Dining Restaurant", category: "Dining" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Breakfast Buffet", category: "Dining" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Meeting Room", category: "Events" },
];

export default function GalleryPage() {
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
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore the beauty and elegance of Mega Anggrek Hotel through our carefully curated collection of photographs.
          </motion.p>
        </div>

        <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <FadeIn key={index} className="break-inside-avoid">
              <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized={image.src.startsWith('http')}
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-secondary font-medium text-sm mb-1 uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-heading font-semibold">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
