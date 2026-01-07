import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar"; 
import { Footer } from "@/components/layout/Footer"; // Ensure this points to your new Footer
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}>
        
        <SmoothWrapper>
          <Navbar /> 

          {/* FIX: Removed 'mb-[500px]' and 'shadow-xl' */}
          <main className="relative z-10 w-full bg-[#050505]">
            {children}
          </main>

          <Footer />
        </SmoothWrapper>

      </body>
    </html>
  );
}