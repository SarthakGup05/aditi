"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Phone, ArrowRight, ChevronDown, Loader2, CarFront 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Route {
  id: number;
  title: string;
  slug: string;
}

export function Navbar() {
  const pathname = usePathname(); // Tracks current URL
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop Dropdown State
  const [scrolled, setScrolled] = useState(false);
  
  // Data State
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isLoadingRoutes, setIsLoadingRoutes] = useState(true);

  // Refs for "Click Outside" detection
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // 1. PERFORMANCE: Fetch Routes once and cache in state
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        // Only fetch if we haven't already (prevents re-fetching on simple re-renders)
        if (routes.length > 0) return;

        const res = await fetch("/api/routes");
        if (res.ok) {
          const data = await res.json();
          setRoutes(data);
        }
      } catch (error) {
        console.error("Navbar Error:", error);
      } finally {
        setIsLoadingRoutes(false);
      }
    };

    fetchRoutes();
  }, [routes.length]);

  // 2. UX: Auto-close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // 3. PERFORMANCE: Optimized Scroll Listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 4. UX: Lock Body Scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; }; // Cleanup
  }, [isOpen]);

  // 5. UX: Handle Click Outside to close Dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">

          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-2 relative z-[101]">
            <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
               <CarFront size={18} />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
              ADITI <span className="hidden sm:inline text-purple-400">TOUR & TRAVELS</span>
            </span>
          </Link>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden items-center gap-8 md:flex">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Home
            </Link>
            
            {/* OPTIMIZED DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className={`flex items-center gap-1 text-sm font-medium transition-all ${isDropdownOpen ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    Outstation Taxi 
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Panel */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 transition-all duration-300 transform origin-top ${
                    isDropdownOpen 
                      ? "opacity-100 translate-y-0 visible" 
                      : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  }`}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col gap-1 overflow-hidden">
                        {isLoadingRoutes ? (
                            <div className="p-6 flex justify-center text-purple-500">
                                <Loader2 className="animate-spin" size={24} />
                            </div>
                        ) : routes.length > 0 ? (
                            <>
                              <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">Popular Routes</div>
                              {routes.slice(0, 5).map((route) => (
                                <Link 
                                    key={route.id} 
                                    href={`/routes/${route.slug}`}
                                    className="group flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                >
                                    <span>{route.title}</span>
                                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400"/>
                                </Link>
                              ))}
                              <div className="h-px bg-white/10 my-1" />
                             
                            </>
                        ) : (
                            <span className="p-4 text-xs text-gray-500 text-center">No active routes</span>
                        )}
                    </div>
                </div>
            </div>

            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${pathname === '/about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors ${pathname === '/contact' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>

          {/* --- CTA & MOBILE TOGGLE --- */}
          <div className="flex items-center gap-4 z-[101]">
            <a href="tel:+919999999999"> {/* Replace with real number */}
              <Button
                className={`hidden md:flex rounded-full px-6 font-semibold transition-all ${
                  scrolled
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md"
                }`}
              >
                <Phone className="mr-2 h-4 w-4" /> Book Ride
              </Button>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-white hover:bg-white/10 md:hidden transition-colors active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)} // Close when clicking blurred background
      />

      {/* --- MOBILE DRAWER --- */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 bottom-0 z-[95] w-[85%] max-w-sm bg-[#050505] border-l border-white/10 shadow-2xl transition-transform duration-500 md:hidden flex flex-col pt-24 px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 overflow-y-auto h-full pb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">
            Navigation
          </span>

          <Link href="/" className={`text-2xl font-medium transition-colors pb-4 border-b border-white/5 ${pathname === '/' ? 'text-white' : 'text-gray-400'}`}>
            Home
          </Link>

          {/* Mobile Routes Accordion */}
          <div className="border-b border-white/5 pb-4">
            <p className="text-2xl font-medium text-white mb-4">Outstation Taxi</p>
            <div className="pl-4 border-l-2 border-white/10 flex flex-col gap-4">
                {isLoadingRoutes ? (
                    <span className="text-gray-500 text-sm animate-pulse">Loading routes...</span>
                ) : (
                    routes.slice(0, 5).map((route) => (
                        <Link 
                            key={route.id}
                            href={`/routes/${route.slug}`}
                            className="text-lg text-gray-400 hover:text-white flex items-center justify-between group"
                        >
                            {route.title}
                            <ArrowRight size={16} className="text-purple-500 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))
                )}
                <Link 
                    href="/routes" 
                    className="text-sm font-bold text-purple-400 mt-2 uppercase tracking-wide flex items-center gap-2"
                >
                    View All Routes <ArrowRight size={12}/>
                </Link>
            </div>
          </div>

          <Link href="/about" className={`text-2xl font-medium transition-colors pb-4 border-b border-white/5 ${pathname === '/about' ? 'text-white' : 'text-gray-400'}`}>
            About
          </Link>

          <Link href="/contact" className={`text-2xl font-medium transition-colors pb-4 border-b border-white/5 ${pathname === '/contact' ? 'text-white' : 'text-gray-400'}`}>
            Contact
          </Link>

          <div className="mt-auto pt-6 space-y-4">
            <a href="tel:+919999999999" className="block w-full">
                <Button className="w-full h-14 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-200 flex items-center justify-center gap-2">
                    <Phone size={20} /> Book a Taxi Now
                </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}