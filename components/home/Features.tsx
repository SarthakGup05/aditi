"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Headphones, 
  Award, 
  Wrench, 
  UserCheck, 
  Wallet, 
  Sparkles 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    title: "10+ Years Experience",
    desc: "With over a decade of industry leadership, we understand customer needs and deliver reliable, hassle-free journeys every time.",
    icon: <Award className="h-6 w-6 text-purple-400" />,
  },
  {
    id: 2,
    title: "Fully Insured Vehicles",
    desc: "All our taxis are registered, licensed, and fully insured, ensuring complete safety and peace of mind for every ride.",
    icon: <ShieldCheck className="h-6 w-6 text-green-400" />,
  },
  {
    id: 3,
    title: "Regular Maintenance",
    desc: "Our fleet undergoes strict safety checks and servicing before every trip. You travel in clean, well-maintained cars.",
    icon: <Wrench className="h-6 w-6 text-blue-400" />,
  },
  {
    id: 4,
    title: "Expert Drivers",
    desc: "Professional drivers trained for highways, hills, and night travel. Safe driving in every condition is our promise.",
    icon: <UserCheck className="h-6 w-6 text-orange-400" />,
  },
  {
    id: 5,
    title: "On-Time Pickup",
    desc: "We value your time. Our chauffeurs arrive 15 minutes early so you never have to worry about delays.",
    icon: <Clock className="h-6 w-6 text-yellow-400" />,
  },
  {
    id: 6,
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is exactly what you pay. We offer clear, upfront pricing with zero surprises.",
    icon: <Wallet className="h-6 w-6 text-pink-400" />,
  },
  {
    id: 7,
    title: "Local & Outstation",
    desc: "From local city rides to outstation trips across North India, we know the best routes for a smooth journey.",
    icon: <MapPin className="h-6 w-6 text-red-400" />,
  },
  {
    id: 8,
    title: "24/7 Support",
    desc: "Our dedicated support team is available round the clock to assist you before, during, and after your ride.",
    icon: <Headphones className="h-6 w-6 text-indigo-400" />,
  },
];

export function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    // 1. Heading Animation
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );

    // 2. Grid Items Stagger Animation
    gsap.fromTo(
      ".feature-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1, // Stagger effect for cascading entry
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-24 px-6 overflow-hidden"
    >
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={12} /> Why Choose Aditi?
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Taxi Service</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
            We don't just drive you; we care for you. Experience the difference with our premium fleet, transparent policies, and verified chauffeurs.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="
                feature-card group relative p-6 md:p-8 
                bg-[#111] border border-white/10 rounded-2xl 
                hover:border-purple-500/30 hover:bg-white/[0.07] 
                transition-all duration-300
              "
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                {f.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}