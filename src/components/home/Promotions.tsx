"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

const promotions = [
  {
    id: 1,
    title: "Weekend Staycation",
    image: "/images/deluxe_room.png",
    discount: "20% OFF",
    desc: "Enjoy a relaxing weekend with complimentary breakfast and late checkout.",
  },
  {
    id: 2,
    title: "Wedding Package",
    image: "/images/suite_room.png",
    discount: "SPECIAL RATE",
    desc: "Celebrate your special day with our comprehensive luxury wedding package.",
  },
  {
    id: 3,
    title: "Business Executive",
    image: "/images/hero.png",
    discount: "FREE UPGRADE",
    desc: "Book an executive room and get access to the exclusive business lounge.",
  },
];

export function Promotions() {
  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
                Exclusive Offers
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                Special Promotions
              </h2>
            </div>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full px-8 hidden md:flex">
              View All Offers
            </Button>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <StaggerItem key={promo.id} className="h-full">
              <div className="group relative bg-card rounded-[24px] overflow-hidden shadow-lg border border-border/40 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground font-bold text-sm px-4 py-1.5 rounded-full shadow-md transform -rotate-2">
                    {promo.discount}
                  </div>
                  
                  {/* Title overlay */}
                  <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-heading font-bold text-white">
                    {promo.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 bg-card">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {promo.desc}
                  </p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 font-medium shadow-md group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                    Claim Offer
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full px-8">
            View All Offers
          </Button>
        </div>
      </div>
    </section>
  );
}
