"use client";

import { useEffect } from "react";
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
    // 1. Performance Guard: Strict Mobile Detection
    // Checks for touch capability OR narrow screens
    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || window.innerWidth < 1024);

    // 2. STOP EXECUTION ON MOBILE
    // If mobile, we return immediately. No Lenis, no listeners, no GSAP ticker overhead.
    // This restores 100% native scrolling speed.
    if (isMobile) return;

    // --- DESKTOP LOGIC (Only runs on PC/Mac) ---
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing (Premium feel)
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false, // Explicitly disable touch syncing to be safe
    });

    // 3. Connect GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Optimized Animation Loop
    // We bind Lenis to GSAP's ticker. This ensures Lenis updates exactly when 
    // GSAP updates, preventing "jitter" between the scroll position and animations.
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // 5. Lag Smoothing (Optional but recommended for heavy 3D/GL sites)
    // Prevents GSAP from "jumping" animations if a frame drops.
    // gsap.ticker.lagSmoothing(0); 

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  // Return a fragment to add ZERO extra DOM nodes
  return <>{children}</>;
}