"use client";

import { useRef } from "react";
import Link from "next/link"; // ✅ Added for smoother navigation
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  ArrowUpRight,
  Mail,
  FileText,
  LucideIcon 
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = footerRef.current;
    
    gsap.fromTo(
      ".footer-anim",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", 
        },
      }
    );
  }, { scope: footerRef });

  return (
    <footer 
      ref={footerRef} 
      className="relative w-full bg-[#020202] border-t border-white/5 text-white overflow-hidden pt-16 pb-10 -mt-10 z-30"
    >
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* --- SECTION 1: INSTANT SUPPORT CARD --- */}
        <div className="footer-anim flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 mb-16 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-medium mb-2">Need a ride instantly?</h3>
            <p className="text-gray-400">Direct booking via WhatsApp or Phone. 24/7 Available.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/919999999999" 
              target="_blank"
              rel="noreferrer"
              className="group flex-1 flex items-center justify-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-[#25D366] px-8 py-4 rounded-xl transition-all active:scale-95"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold">WhatsApp</span>
            </a>

            {/* Phone */}
            <a 
              href="tel:+919999999999" 
              className="group flex-1 flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl transition-all active:scale-95"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="font-bold">Call Now</span>
            </a>
          </div>
        </div>

        {/* --- SECTION 2: LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-12 mb-12">
          
          {/* Column 1: Brand Info & GSTIN */}
          <div className="footer-anim space-y-6">
            <span className="text-2xl font-bold tracking-tight">
              ADITI <span className="text-purple-400">TOUR & TRAVELS</span>
            </span>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Premium outstation taxi services specializing in Lucknow to Ayodhya, Varanasi, and Delhi NCR routes.
            </p>
            
            {/* GSTIN Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-400 border border-white/10 bg-white/5 p-2 rounded-lg w-fit">
               <FileText size={14} className="text-purple-400" />
               <span className="font-mono tracking-wide">GSTIN: 09AMMPY0323J1ZN</span>
            </div>

         
          </div>

          {/* Column 2: Quick Links (Updated) */}
          <div className="footer-anim md:pl-10">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <FooterLink text="Home" href="/" />
              <FooterLink text="About" href="/about" />
              <FooterLink text="Contact" href="/contact" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-anim">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Visit Us</h4>
            <ul className="space-y-6 text-sm text-gray-400">
             
              <li className="flex items-center gap-3">
                <Mail className="text-purple-500 shrink-0" size={18} />
                <span>adititravels192@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- SECTION 3: COPYRIGHT --- */}
        <div className="footer-anim flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Aditi Tour & Travels. All rights reserved.</p>
          <p>Designed for Luxury.</p>
        </div>

      </div>
    </footer>
  );
}

// --- HELPER COMPONENTS ---

interface SocialIconProps {
  Icon: LucideIcon;
  href: string;
}

function SocialIcon({ Icon, href }: SocialIconProps) {
  return (
    <a 
      href={href} 
      className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 hover:text-white transition-all duration-300"
    >
      <Icon size={18} />
    </a>
  );
}

interface FooterLinkProps {
  text: string;
  href?: string;
}

function FooterLink({ text, href = "#" }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:text-purple-400 transition-colors flex items-center gap-2 group">
        <ArrowUpRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
        {text}
      </Link>
    </li>
  );
}