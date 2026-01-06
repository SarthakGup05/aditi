"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Youtube, 
  Twitter, 
  Instagram, 
  Linkedin, 
  PlayCircle,
  Star
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const textGroupRef = useRef(null);
  const carRef = useRef(null);
  const blobRef = useRef(null);
  const socialRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- SCROLL HANDLER ---
  const scrollToFleet = () => {
    const fleetSection = document.getElementById("fleet");
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback if ID is missing or user is on another page
      window.location.href = "/#fleet";
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Initial States
    gsap.set([textGroupRef.current, navRef.current, socialRef.current], { y: 30, opacity: 0 });
    gsap.set(carRef.current, { x: 100, opacity: 0, scale: 0.95 });

    // 2. Sequence
    tl.to(navRef.current, { y: 0, opacity: 1, duration: 0.8 })
      .to(textGroupRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
      .to(carRef.current, { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.2)" }, "-=0.8")
      .to(socialRef.current, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");

    // 3. Parallax Effect (Desktop Only)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(carRef.current, { x: xPos, y: yPos, duration: 1, ease: "power1.out" });
      gsap.to(blobRef.current, { x: -xPos * 2, y: -yPos * 2, duration: 2, ease: "power1.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30 flex flex-col"
    >
      
      {/* --- BACKGROUND LAYERS --- */}
      <div ref={blobRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-20%] md:right-[-5%] h-[400px] w-[400px] md:h-[800px] md:w-[800px] rounded-full bg-purple-900/20 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-20%] md:left-[-10%] h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-blue-900/10 blur-[80px] md:blur-[100px]" />
      </div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      
      {/* --- MAIN HERO CONTENT --- */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full flex-1 px-6 md:px-12 pt-32 md:pt-20">
        
        {/* LEFT COLUMN: TEXT */}
        <div className="flex flex-col justify-center w-full md:w-[50%]">
          <div ref={textGroupRef}>
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              #1 Taxi Service in Lucknow
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight md:text-[5.5rem] lg:text-[6.5rem] mb-6">
              Premium Car <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200">
                Rental Services
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-lg mb-8">
              Experience safe and reliable mobility with <strong className="text-white">Aditi Tour & Travel</strong>. 
              Specializing in luxury airport transfers, corporate fleet management, and comfortable outstation 
              trips across Ayodhya, Agra & NCR.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Button className="h-12 w-full md:w-auto rounded-full bg-white text-black hover:bg-gray-200 px-8 text-base font-bold">
                Call Taxi Now
              </Button>
              
              {/* --- VIEW FLEET BUTTON (SCROLLS TO FLEET) --- */}
              <Button 
                variant="ghost" 
                onClick={scrollToFleet}
                className="h-12 w-full md:w-auto gap-2 rounded-full border border-white/10 text-white hover:bg-white/10 px-6"
              >
                <PlayCircle size={18} /> View Our Fleet
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p><span className="text-white font-semibold">4.9/5 Rating</span> • Trusted by 10,000+ Travelers</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CAR IMAGE */}
        <div className="relative w-full md:w-[50%] h-[40vh] md:h-auto flex items-end md:items-center justify-center md:justify-end pointer-events-none mt-8 md:mt-0">
          <div ref={carRef} className="relative w-full md:w-[130%] md:-mr-[20%] aspect-[16/9]">
             <Image 
              src="https://purepng.com/public/uploads/large/purepng.com-taxitaxicabvehicletaxicabyellow-cab-17015276774220zoaa.png" 
              alt="Luxury Taxi Service in Lucknow - Aditi Tour & Travel"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>

      </div>

      {/* --- SOCIAL SIDEBAR --- */}
      <div ref={socialRef} className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-6 text-gray-500 md:flex z-50">
        <a href="#" aria-label="Youtube" className="hover:text-white hover:scale-110 cursor-pointer transition-all"><Youtube size={20} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-white hover:scale-110 cursor-pointer transition-all"><Twitter size={20} /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-white hover:scale-110 cursor-pointer transition-all"><Linkedin size={20} /></a>
        <a href="#" aria-label="Instagram" className="hover:text-white hover:scale-110 cursor-pointer transition-all"><Instagram size={20} /></a>
        <div className="h-12 w-px bg-white/10 mx-auto" />
      </div>

    </section>
  );
}