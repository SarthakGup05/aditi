"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 1. Robust Mobile Detection
    // Checks for touch capability AND screen width
    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || window.innerWidth < 768);

    // 2. CRITICAL OPTIMIZATION: Return early if mobile.
    // This forces "Native Scroll" on phones.
    // It fixes the footer overlap, address bar jitter, and battery drain.
    if (isMobile) {
      return; 
    }

    // --- DESKTOP ONLY LOGIC BELOW ---

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing for premium feel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false, // Ensure touch devices don't force sync if they slip through
    });

    // 3. Sync ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 4. GSAP Ticker Integration (Best Performance)
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // 5. Cleanup
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    // Optional: Add 'overflow-x-hidden' to prevent horizontal scrollbars appearing during load
    <div className="w-full overflow-x-hidden">
      {children}
    </div>
  );
}