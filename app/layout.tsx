import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script"; // 1. Import the Script component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This part is good! It fixes the TypeScript error.
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const metadata: Metadata = {
  title: "aditi tour & travel",
  description: "Explore the world with Aditi Tour & Travel - Your trusted partner for unforgettable journeys and exceptional travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        <Toaster position="top-right" />
        
        {/* NOTE: This layout is now a "Shell" only. */}
        {children}

        {/* 2. Use Next.js Script component instead of raw <script> tags */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-17879829492" 
          strategy="afterInteractive" 
        />
        
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17879829492');
          `}
        </Script>
      </body>
    </html>
  );
}