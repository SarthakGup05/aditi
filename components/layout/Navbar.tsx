"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Menu, X, Phone, MapPin, ArrowRight, ChevronDown, Loader2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Route {
  id: number;
  title: string;
  slug: string;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // State for Dynamic Routes
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isLoadingRoutes, setIsLoadingRoutes] = useState(true);

  // 1. Fetch Routes on Component Mount
  useEffect(() => {
    async function fetchRoutes() {
      try {
        const res = await fetch("/api/routes"); // Fetches only ACTIVE routes (public API)
        if (res.ok) {
          const data = await res.json();
          setRoutes(data);
        }
      } catch (error) {
        console.error("Failed to load navbar routes", error);
      } finally {
        setIsLoadingRoutes(false);
      }
    }
    fetchRoutes();
  }, []);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-bold tracking-tighter text-white">
              ADITI <span className="text-purple-400">TOUR & TRAVELS</span>
            </span>
          </Link>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-all">
              Home
            </Link>
            
            {/* DYNAMIC DROPDOWN FOR ROUTES */}
            <div className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-300 group-hover:text-white transition-all">
                    Outstation Taxi <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </button>

                {/* The Dropdown Panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2">
                    <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl shadow-purple-900/20 flex flex-col gap-1">
                        {isLoadingRoutes ? (
                            <div className="p-4 flex justify-center text-purple-400">
                                <Loader2 className="animate-spin" size={20} />
                            </div>
                        ) : routes.length > 0 ? (
                            routes.map((route) => (
                                <Link 
                                    key={route.id} 
                                    href={`/routes/${route.slug}`}
                                    className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {route.title}
                                </Link>
                            ))
                        ) : (
                            <span className="p-4 text-xs text-gray-500 text-center">No routes available</span>
                        )}
                        <div className="h-px bg-white/10 my-1" />
                      
                    </div>
                </div>
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-all">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-all">
              Contact
            </Link>
          </div>

          {/* --- CTA & TOGGLE --- */}
          <div className="flex items-center gap-4 z-50">
            <Button
              className={`hidden md:flex rounded-full px-6 font-semibold transition-all ${
                scrolled
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md"
              }`}
            >
              <Phone className="mr-2 h-4 w-4" /> Book Ride
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-white hover:bg-white/10 md:hidden transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col px-8 pt-32 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 relative z-10 overflow-y-auto pb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">
            Menu
          </span>

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-medium text-white hover:text-purple-400 transition-colors border-b border-white/10 pb-4"
          >
            Home
          </Link>

          {/* Mobile Routes Section */}
          <div className="border-b border-white/10 pb-4">
            <p className="text-3xl font-medium text-white mb-4">Outstation Taxi</p>
            <div className="pl-4 border-l border-white/10 flex flex-col gap-4">
                {isLoadingRoutes ? (
                    <span className="text-gray-500 text-sm">Loading routes...</span>
                ) : (
                    routes.slice(0, 5).map((route) => (
                        <Link 
                            key={route.id}
                            href={`/routes/${route.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-gray-400 hover:text-white flex items-center gap-2"
                        >
                            <ArrowRight size={16} className="text-purple-500" />
                            {route.title}
                        </Link>
                    ))
                )}
                <Link 
                    href="/routes" 
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold text-purple-400 mt-2 uppercase tracking-wide"
                >
                    View All Routes
                </Link>
            </div>
          </div>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-medium text-white hover:text-purple-400 transition-colors border-b border-white/10 pb-4"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-medium text-white hover:text-purple-400 transition-colors border-b border-white/10 pb-4"
          >
            Contact
          </Link>

          <div className="pt-4 space-y-4">
            <Button className="w-full h-12 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200">
              Book a Taxi Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}