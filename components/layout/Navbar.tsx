"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "about", href: "/about" }, // Changed to match your Fleet section
    { name: "outstation taxi", href: "/outstation" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">

                    {/* --- LOGO --- */}
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <span className="text-2xl font-bold tracking-tighter text-white">
                            ADITI TOUR & TRAVELS<span className="text-purple-500">.</span>
                        </span>
                    </Link>

                    {/* --- DESKTOP LINKS --- */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* --- CTA & TOGGLE --- */}
                    <div className="flex items-center gap-4 z-50">
                        {/* Desktop CTA */}
                        <Button
                            className={`hidden md:flex rounded-full px-6 font-semibold transition-all ${scrolled
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-md"
                                }`}
                        >
                            <Phone className="mr-2 h-4 w-4" /> Book Ride
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-full p-2 text-white hover:bg-white/10 md:hidden transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MOBILE FULLSCREEN MENU --- */}
            <div
                className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-center px-8 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                {/* Decorative Blob */}
                <div className="absolute top-[-10%] right-[-20%] h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[100px]" />

                <div className="flex flex-col space-y-6 relative z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2">
                        Menu
                    </span>

                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-medium text-white hover:text-purple-400 transition-colors flex items-center justify-between group border-b border-white/10 pb-4"
                        >
                            {link.name}
                            <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-purple-500" size={24} />
                        </Link>
                    ))}

                    <div className="pt-8 space-y-4">
                        <Button className="w-full h-12 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200">
                            Book a Taxi Now
                        </Button>

                        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-4">
                            <MapPin size={14} />
                            <span>Serving Lucknow</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}