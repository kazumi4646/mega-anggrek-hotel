import { Hero } from "@/components/home/Hero";
import { FeaturedRooms } from "@/components/home/FeaturedRooms";
import { Facilities } from "@/components/home/Facilities";
import { Promotions } from "@/components/home/Promotions";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedRooms />
      <Facilities />
      <Promotions />
      <Testimonials />
    </div>
  );
}
