"use client";

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      // UPDATE: Changed bg-slate-950 to bg-[#050505]
      className="fixed bottom-0 left-0 h-[500px] w-full bg-[#050505] text-gray-400 z-0 flex flex-col justify-center border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="text-3xl font-bold tracking-tighter text-white"> ADITI TOUR & TRAVELS</span>
            <p className="text-sm leading-relaxed">
              Elevating the daily commute for IT professionals with comfort, safety, and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-widest">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">outstation taxi</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-widest">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter (Matches the Tapsi Vibe) */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-widest">Newsletter</h3>
            <div className="flex flex-col gap-4">
               <div className="flex items-center border-b border-white/20 pb-2">
                 <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-transparent text-white placeholder:text-gray-600 focus:outline-none w-full text-sm"
                 />
                 <button className="text-purple-400 hover:text-white transition-colors">
                    <ArrowRight size={16} />
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between pt-8 md:flex-row border-t border-white/5">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Tapsi Inc. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Facebook size={18} className="hover:text-purple-400 cursor-pointer transition-colors" />
            <Instagram size={18} className="hover:text-purple-400 cursor-pointer transition-colors" />
            <Twitter size={18} className="hover:text-purple-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}