"use client"; // 👈 Required for window/screen checks

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothWrapper from "@/components/layout/SmoothWrapper";
import { FloatingContact } from "@/components/ui/floating-contact";
import NextTopLoader from 'nextjs-toploader'; 

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Default to true (mobile) to ensure fast initial load on phones
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Function to check screen width
    const checkDevice = () => {
      // 1024px covers tablets (iPad) and mobiles. 
      // If you want smooth scroll on tablets, change this to 768.
      setIsMobile(window.innerWidth < 1024);
    };

    // Run immediately
    checkDevice();

    // Add listener for resize (e.g. rotating tablet)
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Define the inner content to avoid code duplication
  const content = (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingContact phone="+1234567890" whatsapp="+1234567890"/>
    </div>
  );

  return (
    <>
      <NextTopLoader
        color="#a855f7"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #a855f7,0 0 5px #a855f7"
        zIndex={1600}
      />

      {/* 🟢 CONDITIONAL RENDERING */}
      {isMobile ? (
        // Mobile/Tablet: Render Native Scroll (Fast)
        content
      ) : (
        // Desktop/Laptop: Render Smooth Scroll (Premium)
        <SmoothWrapper>
          {content}
        </SmoothWrapper>
      )}
    </>
  );
}