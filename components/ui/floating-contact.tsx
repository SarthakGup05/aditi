"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface FloatingContactProps {
  phone: string;
  whatsapp: string;
  message?: string;
}

export function FloatingContact({ 
  phone = "8127581898", 
  whatsapp = "8127581898",
  message = "Hi Aditi Travels, I need a taxi for..." 
}: FloatingContactProps) {
  
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show immediately on mobile, or after scroll on desktop
      const threshold = window.innerWidth < 768 ? 50 : 300;
      setIsVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      y: isVisible ? 0 : 100,
      opacity: isVisible ? 1 : 0,
      duration: 0.4,
      ease: "back.out(1.7)", // Nice spring pop effect
    });
  }, { scope: containerRef, dependencies: [isVisible] });

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  const telUrl = `tel:${phone}`;

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "fixed z-[100] flex flex-col gap-3 items-end",
        // Position: Bottom Right for BOTH Mobile and Desktop
        "bottom-6 right-6 md:bottom-8 md:right-8" 
      )}
    >
      {/* --- WHATSAPP BUTTON (Primary) --- */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          group relative flex items-center justify-center 
          h-12 w-12 md:h-14 md:w-14 
          rounded-full bg-[#25D366] text-white 
          shadow-[0_4px_20px_rgba(37,211,102,0.4)] 
          transition-transform active:scale-90 hover:scale-110
        "
      >
        {/* Tooltip (Desktop Only) */}
        <span className="hidden md:block absolute right-16 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
        
        <MessageCircle size={24} className="md:w-[28px] md:h-[28px] stroke-white fill-white/20" />
        
        {/* Notification Dot (Pulse) */}
        <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-[#25D366] animate-ping" />
        <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-[#25D366]" />
      </a>

      {/* --- CALL BUTTON (Secondary) --- */}
      <a 
        href={telUrl}
        aria-label="Call Now"
        className="
          group relative flex items-center justify-center 
          h-12 w-12 md:h-14 md:w-14 
          rounded-full bg-white text-black 
          border border-gray-200
          shadow-[0_4px_20px_rgba(0,0,0,0.2)] 
          transition-transform active:scale-90 hover:scale-110
        "
      >
        {/* Tooltip (Desktop Only) */}
        <span className="hidden md:block absolute right-16 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap shadow-lg">
          Call Now
        </span>

        <Phone size={20} className="md:w-[24px] md:h-[24px]" />
      </a>

    </div>
  );
}