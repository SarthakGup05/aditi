"use client";

import { PageHeader } from "@/components/page-header";
import { Features } from "@/components/home/Features"; 
import { Testimonials } from "@/components/home/Testimonials"; 
import { FloatingContact } from "@/components/ui/floating-contact"; 
import { CheckCircle2, Trophy, Users, Map, Car, Sparkles, Clock, Shield, Heart, BadgeCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-purple-500/30 pb-24">
      
      {/* 1. HEADER (Optimized for Mobile Height) */}
      <PageHeader 
        title="Driving Lucknow forward."
        highlight="Driving Lucknow"
        description="We are Aditi Tour & Travel. The trusted mobility partner for Lucknow’s corporate sector and families."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
        ]}
        className="min-h-[50vh] md:min-h-[400px]" // Better mobile height
      />

      {/* 2. STATS ROW (Mobile: 2x2 Grid with more spacing) */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
            {[
              { label: "Years Experience", value: "12+", icon: Trophy },
              { label: "Happy Travelers", value: "15k+", icon: Users },
              { label: "Cities Covered", value: "50+", icon: Map },
              { label: "Fleet Size", value: "100+", icon: Car },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-1 group-hover:scale-110 transition-transform duration-300 will-change-transform">
                  <stat.icon size={20} />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY (Timeline Optimized for Mobile Readability) */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            
            {/* Left: Timeline */}
            <div className="w-full lg:w-1/2 relative pl-4 lg:pl-0 order-2 lg:order-1">
               {/* Vertical Line */}
               <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10 lg:hidden" />
               
               <div className="space-y-10 md:space-y-12">
                  {/* Milestone 1 */}
                  <div className="relative pl-8 lg:pl-0">
                     <div className="absolute left-0 lg:-left-[41px] top-1.5 h-4 w-4 rounded-full bg-purple-500 border-4 border-[#050505] z-10" />
                     <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="text-purple-400"><Clock size={20}/></span> 2012: The Beginning
                     </h3>
                     <p className="text-gray-400 text-sm md:text-base leading-relaxed">Started with just 2 cars and a vision to bring reliability to Lucknow's unorganized cab market.</p>
                  </div>
                  {/* Milestone 2 */}
                  <div className="relative pl-8 lg:pl-0">
                     <div className="absolute left-0 lg:-left-[41px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-[#050505] z-10" />
                     <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="text-purple-400"><Shield size={20}/></span> 2016: Corporate Trust
                     </h3>
                     <p className="text-gray-400 text-sm md:text-base leading-relaxed">Became the preferred transport partner for major IT hubs in Gomti Nagar, focusing on employee safety.</p>
                  </div>
                  {/* Milestone 3 */}
                  <div className="relative pl-8 lg:pl-0">
                     <div className="absolute left-0 lg:-left-[41px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-[#050505] z-10" />
                     <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="text-purple-400"><Car size={20}/></span> Today: Leading the Way
                     </h3>
                     <p className="text-gray-400 text-sm md:text-base leading-relaxed">A fleet of 100+ premium vehicles serving thousands of customers across Uttar Pradesh and NCR.</p>
                  </div>
               </div>
            </div>

            {/* Right: Content Header */}
            <div className="w-full lg:w-1/2 lg:pl-12 lg:border-l border-white/10 order-1 lg:order-2">
              <div className="mb-8 items-start text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(168,85,247,0.2)] mb-6">
                   <Sparkles size={12} /> Our Journey
                </div>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                   More than just a <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-white">
                     taxi service.
                   </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">
                <p>
                  <strong className="text-white">Aditi Tour & Travel</strong> was born from a simple observation: Lucknow needed a cab service that wasn't just "available," but <em className="text-purple-400">reliable</em>.
                </p>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {["100% On-Time Record", "GPS Tracked Fleet", "24/7 Dispatch Team", "Transparent Billing"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white font-medium bg-white/5 p-3 rounded-lg border border-white/5">
                      <CheckCircle2 size={16} className="text-purple-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES (Cards with increased spacing) */}
      <section className="py-16 md:py-32 bg-white/5 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          
          <div className="mb-12 md:mb-20 flex flex-col items-center text-center mx-auto max-w-3xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(168,85,247,0.2)] mb-6">
               <Sparkles size={12} /> Our Core Values
             </div>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
               Built on <span className="text-purple-400">Trust & Safety</span>
             </h2>
             <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl">
               Our mission is simple: To provide the safest, most comfortable, and reliable travel experience in Uttar Pradesh.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Value 1 */}
            <div className="p-6 md:p-8 rounded-3xl bg-[#050505] border border-white/10 hover:border-purple-500/50 transition-colors group">
              <div className="h-12 w-12 bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Uncompromised Safety</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                From real-time GPS tracking to mandatory background checks. We take no shortcuts with security.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-[#050505] border border-purple-500/30 md:col-span-2 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <Clock className="text-purple-400" size={24}/> The "15-Minute" Promise
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-lg">
                  We value your time more than ours. Our policy dictates that every chauffeur must arrive at the pickup location 15 minutes prior to the scheduled time. No excuses.
                </p>
              </div>
            </div>

            {/* Value 3 - Icon Cluster Optimized for Mobile */}
            <div className="p-6 md:p-8 rounded-3xl bg-[#050505] border border-white/10 hover:border-purple-500/50 transition-colors group md:col-span-3 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <Heart className="text-purple-400" size={24} /> Hospitality First
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  We believe a taxi service is part of the hospitality industry. Our chauffeurs are trained in soft skills to ensure you feel like a guest.
                </p>
              </div>
              <div className="flex gap-4 w-full md:w-auto justify-center md:justify-start">
                 <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                    <BadgeCheck size={28} />
                 </div>
                 <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    <Users size={28} />
                 </div>
                 <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
                    <Car size={28} />
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. REUSED SECTIONS */}
      {/* Wrapper divs added to control vertical spacing on mobile */}
      <div className="mt-8 md:mt-0">
        <Features />
      </div>
      
      <div className="py-16">
        <Testimonials />
      </div>

      {/* 6. CONTACT */}
      <FloatingContact 
        phone="+919919999999" 
        whatsapp="919919999999" 
      />

    </main>
  );
}