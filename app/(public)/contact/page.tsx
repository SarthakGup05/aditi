"use client";

import { useRef } from "react";
import { PageHeader } from "@/components/page-header";
import { FloatingContact } from "@/components/ui/floating-contact";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Clock } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-card",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: { 
          trigger: ".contact-container", 
          start: "top 85%" 
        } 
      }
    );
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="bg-[#050505] min-h-screen text-white selection:bg-purple-500/30 pb-24">
      
      {/* 1. HEADER */}
      <PageHeader 
        title="We are here to help you 24/7"
        highlight="help you 24/7"
        description="Skip the forms and long waits. Connect with our dispatch team instantly via Phone or WhatsApp."
        breadcrumbs={[
          { label: "Contact", href: "/contact" },
        ]}
        className="min-h-[40vh] md:min-h-[450px]"
      />

      {/* 2. MAIN CONTENT */}
      {/* FIX: Removed negative margin (-mt...) to stop overlapping. Added pt-10 for breathing room. */}
      <section className="relative z-10 px-6 pt-10 contact-container">
        <div className="container mx-auto max-w-6xl">
          
          {/* PRIMARY ACTIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            
            {/* CALL CARD */}
            <a href="tel:+919919999999" className="contact-card group relative overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-white/10 p-8 md:p-12 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start">
                  <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-400 font-medium mb-2 uppercase tracking-wider text-xs md:text-sm">Talk to an expert</h3>
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2">+91 99199 99999</div>
                  <p className="text-purple-400 text-sm font-medium flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    Available 24/7 for Dispatch
                  </p>
                </div>
              </div>
            </a>

            {/* WHATSAPP CARD */}
            <a href="https://wa.me/919919999999" target="_blank" className="contact-card group relative overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-white/10 p-8 md:p-12 hover:border-[#25D366]/50 transition-all duration-300">
              <div className="absolute inset-0 bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start">
                  <div className="h-14 w-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                    <MessageCircle size={28} />
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-400 font-medium mb-2 uppercase tracking-wider text-xs md:text-sm">Chat Instantly</h3>
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2">WhatsApp Us</div>
                  <p className="text-[#25D366] text-sm font-medium">Fastest response time (&lt; 5 mins)</p>
                </div>
              </div>
            </a>

          </div>

          {/* SECONDARY INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Email */}
            <a href="mailto:info@adititravels.com" className="contact-card group p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-blue-900/20 text-blue-400">
                  <Mail size={20} />
                </div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</span>
              </div>
              <p className="text-lg md:text-xl font-medium text-white group-hover:text-blue-400 transition-colors break-all">info@adititravels.com</p>
            </a>

            {/* Address */}
            <div className="contact-card p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800 text-gray-400">
                  <MapPin size={20} />
                </div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">HQ Location</span>
              </div>
              <p className="text-lg md:text-xl font-medium text-white leading-snug">Gomti Nagar, Lucknow, UP</p>
            </div>

            {/* Hours */}
            <div className="contact-card p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-orange-900/20 text-orange-400">
                  <Clock size={20} />
                </div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Office Hours</span>
              </div>
              <p className="text-lg md:text-xl font-medium text-white">Mon - Sat: 10AM - 7PM</p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MAP */}
      <section className="mt-20 md:mt-32 relative">
        <div className="w-full h-[350px] md:h-[500px] bg-[#111] relative group overflow-hidden border-y border-white/10">
          <div className="absolute inset-0 z-10 bg-purple-900/10 pointer-events-none mix-blend-overlay" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.876778103362!2d80.9946!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTknNDAuNiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-500 w-full h-full"
            title="Aditi Tour and Travel Location"
          ></iframe>
        </div>
      </section>

      <FloatingContact phone="+919919999999" whatsapp="919919999999" />
    </main>
  );
}