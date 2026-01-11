import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aditi tour & travel",
  description: "Explore the world with Aditi Tour & Travel - Your trusted partner for unforgettable journeys and exceptional travel experiences.",
};

import { Toaster } from "react-hot-toast";

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
        {/* NOTE: This layout is now a "Shell" only.
            - Navbar & Footer are handled in: app/(public)/layout.tsx
            - Admin Sidebar is handled in: app/admin/layout.tsx
        */}
        {children}
      </body>
    </html>
  );
}