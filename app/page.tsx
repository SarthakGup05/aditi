// app/page.tsx
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Fleet } from "@/components/home/Fleet"; // Import the new component
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Fleet /> {/* Added Fleet Section here for visual contrast (Dark bg) */}
      {/* Route Placeholder (Day 2) */}
      <Testimonials />
      
    </>
  );
}
