"use client";

import { Star, Quote } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Richards",
    role: "Business Traveler",
    comment: "The level of service here is simply unmatched. From the moment I stepped into the lobby, I felt like royalty. The executive suite was immaculate.",
    rating: 5,
  },
  {
    id: 2,
    name: "James & Sarah",
    role: "Honeymooners",
    comment: "We spent our honeymoon at Mega Anggrek and it was a dream come true. The spa facilities and fine dining made our stay unforgettable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Event Organizer",
    comment: "Hosted a corporate conference here. The ballroom facilities and catering were exceptional. The staff anticipated every single need we had.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-secondary" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full border border-secondary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">
              Guest Experiences
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">
              What Our Guests Say
            </h2>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 h-full flex flex-col relative group hover:bg-primary-foreground/10 transition-colors duration-300">
                <Quote className="absolute top-6 right-6 text-secondary/20 w-12 h-12 rotate-180" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg mb-8 flex-1 italic leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-heading tracking-wide">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-secondary/80">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
