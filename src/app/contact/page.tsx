"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We are here to assist you. Reach out to us for reservations, inquiries, or any special requests.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input type="email" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-secondary transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-muted-foreground">Jl. Letjen S. Parman Kav. 59, Slipi, Jakarta Barat 11410, Indonesia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+62 21 536 6833</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">info@hotelmegaanggrek.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Front Desk</h3>
                      <p className="text-muted-foreground">24/7 Available for you</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Map View
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
