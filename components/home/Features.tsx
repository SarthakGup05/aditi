"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Clock, MapPin, Headphones, ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "01",
    title: "Safe & Sanitized",
    desc: "Your safety is our priority. Every car is deep-cleaned before arrival, and drivers follow strict hygiene protocols.",
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
  },
  {
    id: "02",
    title: "On-Time Pickup",
    desc: "We respect your schedule. Our chauffeurs arrive 15 minutes early to ensure a stress-free departure, every time.",
    icon: <Clock className="h-8 w-8 text-white" />,
  },
  {
    id: "03",
    title: "Expert Chauffeurs",
    desc: "Travel with verified experts who know every route in Lucknow, Ayodhya, and NCR. Courteous, professional, and discreet.",
    icon: <MapPin className="h-8 w-8 text-white" />,
  },
  {
    id: "04",
    title: "24/7 Support",
    desc: "Never feel stranded. Our dedicated support team is active round-the-clock to assist you with bookings or queries.",
    icon: <Headphones className="h-8 w-8 text-white" />,
  },
];

export function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const sliderTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const wrapper = sliderWrapperRef.current;
    const track = sliderTrackRef.current;
    
    if (!container || !wrapper || !track) return;

    // --- 1. INTRO ANIMATION (Text Reveal + Slider Entry) ---
    // This runs on both Mobile and Desktop when the section comes into view
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 70%", // Animation starts when top of section hits 70% of viewport
        toggleActions: "play none none reverse",
      }
    });

    introTl.from(".anim-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    })
    .from(wrapper, {
      x: 100,      // Slider enters from right
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      clearProps: "transform" // Critical: Clear transform so it doesn't conflict with pinning later
    }, "-=0.5");


    // --- 2. DESKTOP PINNING LOGIC (Horizontal Scroll) ---
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      const getScrollAmount = () => track.scrollWidth - wrapper.offsetWidth;
      const scrollAmount = getScrollAmount();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top", // Pinning starts when section hits top of screen
          end: () => `+=${scrollAmount}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1, 
        },
      });

      // Move track left
      tl.to(track, { 
        x: -scrollAmount, 
        ease: "none" 
      });

      // Subtle Parallax on elements
      tl.to(".parallax-icon", { x: 40, ease: "none" }, "<");
      tl.to(".giant-number", { x: 80, ease: "none" }, "<");
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white overflow-hidden"
    >
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-900/10 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full relative z-10">
        
        {/* --- LEFT PANEL: TITLE --- */}
        <div className="
          w-full md:w-[35%] 
          shrink-0 
          flex flex-col justify-center 
          px-6 py-16 md:p-12 md:pl-16 
          z-20
        ">
          <div className="anim-text flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400 mb-6">
            <Sparkles size={12} /> Why Choose Aditi?
          </div>
          
          <h2 className="anim-text text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]">
            Elevating your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500">
              commute experience
            </span>
          </h2>
          
          <p className="anim-text mt-8 text-gray-400 max-w-sm text-sm leading-relaxed hidden md:block border-l border-purple-500/30 pl-4">
            We don't just drive you; we care for you. Experience the difference with our premium fleet and verified chauffeurs.
          </p>

          {/* Mobile Swipe Indicator */}
          <div className="anim-text flex md:hidden items-center gap-2 mt-8 text-xs font-medium text-purple-400 animate-pulse">
            <span>Swipe to explore</span> <ArrowRight size={14} />
          </div>
        </div>

        {/* --- RIGHT PANEL: SLIDER --- */}
        <div 
          ref={sliderWrapperRef}
          className="w-full md:w-[65%] relative flex items-center overflow-hidden pb-12 md:pb-0"
        >
          <div
            ref={sliderTrackRef}
            className="
              flex gap-4 px-4 md:px-0 md:gap-12 w-max items-center 
              overflow-x-auto snap-x snap-mandatory md:overflow-visible no-scrollbar 
              touch-pan-x will-change-transform
            "
          >
            {/* Desktop Spacer */}
            <div className="hidden md:block w-12 shrink-0" />

            {features.map((f, i) => (
              <div
                key={i}
                className="
                  group relative flex flex-col justify-between overflow-hidden
                  shrink-0 snap-center 
                  rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
                  transition-all duration-300 md:duration-500 
                  active:scale-[0.98] md:hover:border-purple-500/50 md:hover:bg-purple-900/10
                  
                  h-[360px] w-[85vw] p-6
                  md:h-[500px] md:w-[380px] md:p-10
                "
              >
                {/* GIANT BACKGROUND NUMBER */}
                <span className="giant-number absolute -right-4 -top-8 text-[10rem] font-bold text-white/5 select-none pointer-events-none transition-transform duration-700 group-hover:text-purple-500/10">
                  {f.id}
                </span>

                {/* Top: Icon */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="parallax-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-purple-300 transition-transform duration-300 md:group-hover:bg-purple-500 md:group-hover:text-white md:group-hover:scale-110 shadow-lg">
                    {f.icon}
                  </div>
                </div>

                {/* Bottom: Text */}
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-gray-400 group-hover:text-gray-300">
                    {f.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-purple-400 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <span>Learn More</span> <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Right Buffer */}
            <div className="w-6 md:w-24 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}