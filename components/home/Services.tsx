"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Navigation, ArrowLeft, PauseCircle, PlayCircle, Loader2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Define the API Data Shape
type RouteAPI = {
  id: number;
  slug: string;
  title: string;
  heroImage: string;
  distance: string;
  duration: string;
  basePrice: number;
};

// Helper to assign tags
const getTag = (title: string) => {
  if (title.includes("Ayodhya") || title.includes("Varanasi") || title.includes("Prayagraj")) return "Spiritual";
  if (title.includes("Delhi") || title.includes("Airport")) return "Business";
  if (title.includes("Agra") || title.includes("Jaipur")) return "Heritage";
  return "Popular";
};

export function PopularRoutes() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Data State
  const [routes, setRoutes] = useState<RouteAPI[]>([]);
  const [loading, setLoading] = useState(true);

  // --- 1. FETCH DATA ---
  useEffect(() => {
    async function fetchRoutes() {
      try {
        const res = await fetch('/api/routes');
        const data = await res.json();
        if (Array.isArray(data)) {
          setRoutes(data);
        }
      } catch (error) {
        console.error("Failed to load routes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRoutes();
  }, []);

  // --- 2. OPTIMIZED ANIMATION LOGIC ---
  useGSAP(() => {
    if (loading || routes.length === 0) return;

    const mm = gsap.matchMedia();

    // DESKTOP: Full Staggered Animation
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      });

      tl.from(".anim-text", {
        y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
      })
      .from(".anim-card", {
        x: 100, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", clearProps: "all"
      }, "-=0.5");
    });

    // MOBILE: Simple Fade In (High Performance)
    mm.add("(max-width: 767px)", () => {
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    });

  }, { scope: containerRef, dependencies: [loading, routes] });

  // --- Navigation Logic ---
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; 
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === "left" 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  // --- Auto-Play Logic (Desktop Only for Performance) ---
  useEffect(() => {
    // Disable auto-play on mobile to prevent scroll jank
    const isMobile = window.innerWidth < 768;
    if (isPaused || loading || isMobile) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 50) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll('right');
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, loading]);

  // --- LOADING STATE ---
  if (loading) {
    return (
      <section className="w-full bg-[#050505] py-24 flex justify-center">
        <Loader2 className="animate-spin text-purple-500" size={32} />
      </section>
    );
  }

  // --- MAIN RENDER ---
  return (
    <section ref={containerRef} className="w-full bg-[#050505] py-16 md:py-24 overflow-hidden opacity-0 md:opacity-100">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <span className="anim-text text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block">
              Start Your Journey
            </span>
            <h2 className="anim-text text-3xl md:text-5xl font-medium text-white">
              Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Outstation</span> Routes
            </h2>
          </div>

          {/* Controls (Hidden on Mobile) */}
          <div className="anim-text hidden md:flex items-center gap-3">
             <button 
               onClick={() => setIsPaused(!isPaused)}
               className="mr-2 text-gray-500 hover:text-white transition-colors"
             >
               {isPaused ? <PlayCircle size={20} /> : <PauseCircle size={20} />}
             </button>

            <button onClick={() => scroll("left")} className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-purple-600 active:scale-95 transition-all"><ArrowLeft size={20} /></button>
            <button onClick={() => scroll("right")} className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-purple-600 active:scale-95 transition-all"><ArrowRight size={20} /></button>
          </div>
        </div>

        {/* --- Cards Container --- */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          className="
            flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory
            -mx-4 px-4 md:mx-0 md:px-0
            touch-pan-x will-change-transform
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          "
        >
          {routes.map((route) => (
            <Link 
              key={route.id}
              href={`/routes/${route.slug}`}
              className="
                anim-card 
                group relative shrink-0 snap-center 
                w-[280px] md:w-[320px] h-[380px] md:h-[420px] 
                rounded-3xl overflow-hidden 
                border border-white/10 
                bg-[#111]
                transform-gpu backface-hidden
              "
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={route.heroImage}
                  alt={route.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 300px, 400px" // Optimized sizes
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              </div>

              {/* Top Tag */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white">
                  {getTag(route.title)}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-3 z-10">
                <div className="flex items-center gap-2 text-gray-300 text-xs font-medium opacity-90">
                  <span>Lucknow</span>
                  <div className="h-[1px] w-8 bg-purple-500" />
                  <MapPin size={12} className="text-purple-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-purple-200 transition-colors">
                  {route.title}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-gray-300 mt-1 border-t border-white/10 pt-3">
                  <div className="flex items-center gap-1.5"><Navigation size={12} className="text-purple-400" />{route.distance}</div>
                  <div className="flex items-center gap-1.5"><Clock size={12} className="text-purple-400" />{route.duration}</div>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Starts From</span>
                    <span className="text-lg font-bold text-white">₹{route.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center transform transition-transform duration-300 group-hover:bg-purple-500 group-hover:text-white group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* Mobile View All Link */}


        </div>
      </div>
    </section>
  );
}