// app/page.tsx
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Fleet } from "@/components/home/Fleet"; // Import the new component
import { Testimonials } from "@/components/home/Testimonials";
import { PopularRoutes } from "@/components/home/Services";


export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Features />
      <PopularRoutes/>
      <Fleet />
      <Testimonials />
      
    </>
  );
}
