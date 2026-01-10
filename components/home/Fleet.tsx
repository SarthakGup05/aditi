"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Users, Briefcase, Fuel, Check, ArrowRight, CarFront, Loader2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// --- 1. DEFINE TYPES ---
type VehicleAPI = {
  id: number;
  title: string;
  category: string;
  pricePerKm: number;
  image: string;
  description: string;
  seats: string;
  bags: string;
  fuel: string;
  features: string[];
};

// --- 2. CONFIGURATION ---

// Define the exact order you want the tabs to appear
const CATEGORY_ORDER = [
  "Sedan",
  "SUV",
  "Premium SUV",
  "Traveller",
  "Urbania",
  "Bus/Tempo"
];

export function Fleet() {
  const [activeTab, setActiveTab] = useState(0);
  const [vehicles, setVehicles] = useState<VehicleAPI[]>([]);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // --- 3. FETCH & SORT DATA ---
  useEffect(() => {
    async function fetchFleet() {
      try {
        const res = await fetch('/api/vehicles');
        const data = await res.json();

        if (Array.isArray(data)) {
          // SORTING LOGIC (Custom Order)
          data.sort((a, b) => {
            const indexA = CATEGORY_ORDER.indexOf(a.category);
            const indexB = CATEGORY_ORDER.indexOf(b.category);
            const rankA = indexA === -1 ? 999 : indexA;
            const rankB = indexB === -1 ? 999 : indexB;
            return rankA - rankB;
          });

          setVehicles(data);
        }
      } catch (error) {
        console.error("Failed to load fleet:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFleet();
  }, []);

  // --- 4. GSAP ANIMATION ---
  useGSAP(() => {
    if (loading || vehicles.length === 0) return;

    const isMobile = window.innerWidth < 768;
    const config = {
      duration: isMobile ? 0.3 : 0.6,
      xMove: isMobile ? 20 : 50,
      scaleStart: isMobile ? 1 : 0.95,
      stagger: isMobile ? 0.03 : 0.05,
      ease: isMobile ? "power2.out" : "back.out(1.5)"
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(".car-image",
        { x: config.xMove, opacity: 0, scale: config.scaleStart },
        { x: 0, opacity: 1, scale: 1, duration: config.duration, ease: config.ease, clearProps: "all" }
      );

      gsap.fromTo(".animate-item",
        { y: isMobile ? 10 : 20, opacity: 0 },
        { y: 0, opacity: 1, duration: config.duration * 0.8, stagger: config.stagger, ease: "power2.out", delay: isMobile ? 0 : 0.1 }
      );
    }, contentRef);

    return () => ctx.revert();
  }, { scope: containerRef, dependencies: [activeTab, loading] });

  // --- 5. RENDER LOADING STATE ---
  if (loading) {
    return (
      <section className="h-[60vh] bg-[#050505] flex items-center justify-center text-white">
        <Loader2 className="animate-spin text-purple-500" size={40} />
      </section>
    );
  }

  // Safe check if API returned empty
  if (vehicles.length === 0) return null;

  const activeCar = vehicles[activeTab];

  return (
    <section ref={containerRef} id="fleet" className="relative w-full bg-[#050505] py-24 md:py-32 text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-900/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">

        {/* HEADER */}
        <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
            <CarFront size={12} /> Aditi Tour & Travel
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Fleet</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Choose the perfect ride for your journey. From economical daily commutes to luxury outstation travel.
          </p>
        </div>

        {/* TABS */}
        <div className="sticky top-20 md:top-6 z-40 mb-12 flex justify-center touch-manipulation">
          <div className="flex flex-wrap justify-center p-1.5 gap-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            {vehicles.map((car, index) => (
              <button
                key={car.id}
                onClick={() => setActiveTab(index)}
                className={`
                  relative px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm font-semibold transition-all duration-300 select-none
                  ${activeTab === index ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}
                `}
              >
                {activeTab === index && (
                  <span className="absolute inset-0 bg-purple-600 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] -z-10" />
                )}
                {car.category}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center min-h-[500px]">

          {/* LEFT: IMAGE */}
          <div className="lg:col-span-7 w-full order-1 lg:order-1">
            <div className="car-image group relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10" />

              {activeCar.image ? (
                <Image
                  src={activeCar.image}
                  alt={activeCar.title}
                  fill
                  priority={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700">
                  <CarFront size={64} />
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-20">
                <div className="animate-item bg-black/70 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center justify-between md:block shadow-lg">
                  <span className="block text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold mb-0 md:mb-1">Rate Per Km</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-4xl font-bold text-white">₹{activeCar.pricePerKm}</span>
                    <span className="text-sm text-gray-400 font-medium">/km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="lg:col-span-5 w-full order-2 lg:order-2 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="animate-item border-l-2 border-purple-500 pl-6">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">{activeCar.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {activeCar.description || "Premium travel experience."}
                </p>
              </div>

              <div className="animate-item grid grid-cols-3 gap-3 py-6 border-y border-white/10">
                {[
                  { icon: Users, label: activeCar.seats || "4 Seats" },
                  { icon: Briefcase, label: activeCar.bags || "2 Bags" },
                  { icon: Fuel, label: activeCar.fuel || "Diesel" }
                ].map((spec, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 text-center transition-colors hover:bg-white/10">
                    <spec.icon className="h-5 w-5 text-gray-500 mb-2" />
                    <span className="text-xs font-medium text-gray-300">{spec.label}</span>
                  </div>
                ))}
              </div>

              <ul className="animate-item grid grid-cols-2 gap-y-3 gap-x-2">
                {activeCar.features?.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-500/20 text-purple-400 shrink-0 border border-purple-500/20">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
                {/* Fallback if no features */}
                {(!activeCar.features || activeCar.features.length === 0) && (
                  <li className="text-gray-500 italic text-sm">No specific features listed.</li>
                )}
              </ul>

              <div className="animate-item pt-4">
                <button className="group w-full md:w-auto relative overflow-hidden rounded-full bg-white text-black px-10 py-4 font-bold text-sm transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Book {activeCar.category} Now <ArrowRight size={18} />
                  </span>
                  <div className="absolute inset-0 bg-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}