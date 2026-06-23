"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Waves, 
  Utensils, 
  Dumbbell, 
  Briefcase, 
  Mic, 
  Flower2, 
  Wifi, 
  Car, 
  Plane
} from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

const facilities = [
  { icon: Waves, name: "Swimming Pool", desc: "Infinity pool with city views" },
  { icon: Utensils, name: "Fine Dining", desc: "Award-winning restaurant" },
  { icon: Dumbbell, name: "Fitness Center", desc: "State-of-the-art equipment" },
  { icon: Mic, name: "Ballroom", desc: "For weddings & large events" },
  { icon: Briefcase, name: "Meeting Rooms", desc: "Modern corporate spaces" },
  { icon: Flower2, name: "Spa & Wellness", desc: "Relaxing treatments" },
  { icon: Wifi, name: "High-Speed WiFi", desc: "Available in all areas" },
  { icon: Car, name: "Valet Parking", desc: "Secure parking area" },
  { icon: Plane, name: "Airport Transfer", desc: "Luxury car service" },
];

export function Facilities() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/3">
            <Reveal>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
                World-Class Amenities
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Exceptional Facilities
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Elevate your stay with our comprehensive range of premium facilities designed to cater to your every need, whether you&apos;re here for business or leisure.
              </p>
              
              <div className="relative h-64 md:h-80 w-full rounded-[30px] overflow-hidden shadow-2xl">
                 <Image
                    src="/images/deluxe_room.png" // Using existing image as placeholder for facilities
                    alt="Luxury Spa"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
              </div>
            </Reveal>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-2/3">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <StaggerItem key={index}>
                  <div className="group bg-card rounded-[20px] p-6 shadow-sm border border-border/50 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 h-full cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors mb-6">
                      <facility.icon size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {facility.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          
        </div>
      </div>
    </section>
  );
}
