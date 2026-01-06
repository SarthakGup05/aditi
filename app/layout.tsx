import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Remove Navbar import here if you want the Hero's internal nav to take over on the home page
// OR keep it if you plan to extract the nav from Hero.tsx later.
import { Navbar } from "@/components/layout/Navbar"; 
import { Footer } from "@/components/layout/Footer";
import SmoothWrapper from "@/components/layout/SmoothWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tapsi | Premium Commute",
  description: "Revolutionizing commute for IT professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* UPDATE: Changed bg-slate-950 to bg-[#050505] to match your Hero */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}>
        
        <SmoothWrapper>
          {/* Note: If your Hero.tsx has a Nav, you might want to hide this global Navbar 
              or make this one transparent. For now, I'll leave it but ensure it doesn't conflict. */}
          <Navbar /> 

          {/* Main Content Wrapper */}
          <main className="relative z-10 min-h-screen w-full bg-[#050505] shadow-xl mb-[500px]">
            {children}
          </main>

          <Footer />
        </SmoothWrapper>

      </body>
    </html>
  );
}