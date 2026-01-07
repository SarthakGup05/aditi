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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Mobile Detection
    // We check if the device is touch-enabled or has a small screen.
    // This allows us to disable expensive smoothing on weaker devices.
    const isMobile =
      typeof window !== "undefined" &&
      (window.innerWidth < 768 || "ontouchstart" in window);

    const lenis = new Lenis({
      // 2. Mobile Optimization Settings
      // Lower duration on mobile makes it feel snappier and less "floaty"
      duration: isMobile ? 0 : 1.2, 
      
      // Use native scrolling for touch devices if possible for max performance
      // (Lenis usually handles this by default, but explicit settings help)
      smoothWheel: true,
      
      // 3. Easing
      // On mobile, a simpler easing function is less CPU intensive
      easing: isMobile 
        ? (t) => t // Linear (native-like) feel for mobile
        : (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential for desktop
        
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 2, // Increases touch sensitivity for faster scrolling
    });

    lenisRef.current = lenis;

    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // 4. FIX MEMORY LEAK
    // We must define the ticker function as a variable so we can remove THE SAME function later.
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // 5. Performance: Allow Lag Smoothing
    // Removed 'lagSmoothing(0)'. Default GSAP smoothing allows the animation 
    // to skip frames if the CPU is choked, preventing the phone from freezing.

    return () => {
      // Cleanup phase
      gsap.ticker.remove(update); // Correctly removes the listener
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}