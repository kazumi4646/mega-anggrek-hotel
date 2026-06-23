"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wifi, Tv, Maximize, Users, Coffee } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    image: "/images/deluxe_room.png",
    price: "$250",
    size: "45 sqm",
    capacity: "2 Guests",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Breakfast" },
    ],
  },
  {
    id: 2,
    name: "Executive Suite",
    image: "/images/suite_room.png",
    price: "$450",
    size: "65 sqm",
    capacity: "3 Guests",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Breakfast" },
    ],
  },
  {
    id: 3,
    name: "Royal Family Suite",
    image: "/images/suite_room.png", // Using suite room image as placeholder
    price: "$650",
    size: "95 sqm",
    capacity: "4 Guests",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Breakfast" },
    ],
  },
];

export function FeaturedRooms() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
              Our Accommodations
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Rooms & Suites
            </h2>
            <p className="text-muted-foreground text-lg">
              Indulge in unparalleled comfort and sophistication. Each of our meticulously designed rooms offers a sanctuary of peace in the bustling city.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <StaggerItem key={room.id} className="h-full">
              <div className="group bg-card rounded-[24px] overflow-hidden shadow-lg border border-border/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Image Container with Zoom Effect */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
                    <span className="font-bold text-foreground">{room.price}</span>
                    <span className="text-xs text-muted-foreground"> / night</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {room.name}
                  </h3>
                  
                  {/* Basic Info */}
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-border/60">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize size={18} className="text-secondary" />
                      <span className="text-sm">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={18} className="text-secondary" />
                      <span className="text-sm">{room.capacity}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex gap-4 mb-8">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:text-secondary transition-colors">
                          <amenity.icon size={18} />
                        </div>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-4">
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 font-medium shadow-md">
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1 rounded-xl py-6 font-medium border-border hover:bg-muted">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-16 text-center">
          <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
