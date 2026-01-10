"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, Quote, MapPin, CheckCircle2, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "Corporate Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "The service is absolutely top-notch. I travel from Lucknow to Delhi weekly for business, and the chauffeurs are always punctual.",
    route: "Lucknow ➝ Delhi NCR",
  },
  {
    id: 2,
    name: "Anjali Singh",
    role: "Family Vacation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "Safety was my priority traveling with kids to Ayodhya. The car was sanitized, smelled fresh, and the driver drove very carefully.",
    route: "Lucknow ➝ Ayodhya",
  },
  {
    id: 3,
    name: "Dr. R.K. Gupta",
    role: "Senior Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    text: "Honest pricing and excellent fleet. I booked the Innova Crysta for a guest arriving in Varanasi. The car condition was showroom-like.",
    route: "Lucknow ➝ Varanasi",
  },
];

export function Testimonials() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; 
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === "left" 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const mm = gsap.matchMedia();

    // Desktop Animation Only
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(".testimonial-card", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
          }
        }
      );
    });
    
    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      // FIXED: pb-10 removes the huge gap, z-20 keeps it above footer layers
      className="relative w-full bg-[#050505] pt-20 pb-10 md:py-20 overflow-hidden text-white z-20"
    >
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-900/10 rounded-full blur-[60px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={12} /> Client Stories
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Trusted by the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                People Who Travel
              </span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scroll("left")}
              className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white transition-all hover:bg-purple-600 hover:border-purple-600 active:scale-95"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white transition-all hover:bg-purple-600 hover:border-purple-600 active:scale-95"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* --- SCROLLABLE CONTAINER --- */}
        <div 
          ref={scrollContainerRef}
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory 
            -mx-6 px-6 md:mx-0 md:px-0
            touch-pan-x will-change-transform
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            pb-12
          "
        >
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="
                testimonial-card
                relative shrink-0 snap-center
                w-[85vw] md:w-[400px] 
                bg-[#111]/90 border border-white/10 
                rounded-3xl p-8 md:p-10
                flex flex-col justify-between
                transition-colors md:hover:border-purple-500/30
              "
            >
              <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-purple-500/20 transition-colors duration-500" size={80} />

              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-purple-500 text-purple-500" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light italic drop-shadow-md">
                  "{t.text}"
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="object-cover"
                    sizes="50px"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    {t.name} 
                    <CheckCircle2 size={14} className="text-purple-400 shrink-0" />
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mt-1">
                    <span>{t.role}</span>
                    <span className="hidden md:block h-1 w-1 rounded-full bg-gray-600" />
                    <div className="flex items-center gap-1 text-purple-300 w-full md:w-auto">
                      <MapPin size={10} /> {t.route}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
          
          <div className="shrink-0 snap-center w-[85vw] md:w-[300px] flex items-center justify-center bg-purple-900/10 border border-purple-500/20 border-dashed rounded-3xl p-8 hover:bg-purple-900/20 transition-colors cursor-pointer group">
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-white fill-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Your Story?</h3>
              <p className="text-sm text-purple-300">Book a ride and share your experience.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}