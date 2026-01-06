"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface PageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  className?: string;
}

export function PageHeader({
  title,
  highlight,
  description,
  breadcrumbs = [],
  className,
}: PageHeaderProps) {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-text",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );

    gsap.to(".bg-blob", {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative w-full bg-[#050505] flex flex-col justify-center overflow-hidden",
        // MOBILE OPTIMIZATION: 
        // 1. 'pt-28 pb-12' gives proper breathing room from the top navbar without being huge.
        // 2. 'h-auto' lets text expand naturally if it wraps.
        "pt-28 pb-12 h-auto",
        // DESKTOP: 
        // 1. 'md:py-0' resets padding.
        // 2. 'md:h-[50vh]' forces the cinematic height.
        "md:py-0 md:h-[50vh] md:min-h-[400px]", 
        className
      )}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="bg-blob absolute top-[-20%] left-[-20%] md:top-[-50%] md:left-[-10%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-purple-900/20 rounded-full blur-[80px] md:blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] md:bottom-[-20%] md:right-[-5%] w-[60vw] h-[60vw] md:w-[400px] md:h-[400px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Breadcrumbs: Smaller text on mobile */}
        <nav className="animate-text flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-500 mb-4 md:mb-6 font-medium">
          <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home size={12} className="md:w-[14px] md:h-[14px]" /> <span>Home</span>
          </Link>
          
          {breadcrumbs.map((crumb, i) => (
            <div key={i} className="flex items-center gap-2">
              <ChevronRight size={10} className="opacity-50" />
              <Link 
                href={crumb.href}
                className={`transition-colors line-clamp-1 ${
                  i === breadcrumbs.length - 1 ? "text-purple-400 pointer-events-none" : "hover:text-white"
                }`}
              >
                {crumb.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Title: Text-4xl on mobile prevents awkward word breaking */}
        <h1 className="animate-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-4 md:mb-6 max-w-4xl">
          {titleParts[0]}
          {highlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-400">
              {highlight}
            </span>
          )}
          {titleParts[1]}
        </h1>

        {/* Description: Border left removed on mobile for cleaner stack, added back on desktop */}
        {description && (
          <p className="animate-text text-gray-400 text-sm md:text-lg max-w-xl leading-relaxed md:border-l-2 md:border-white/10 md:pl-6">
            {description}
          </p>
        )}

      </div>
    </section>
  );
}