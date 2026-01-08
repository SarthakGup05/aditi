"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 1. Import Router
import { useAdminStore } from "@/lib/store/admin-store"; // 2. Import Zustand Store
import { Mail, Lock, Check, Loader2, User } from "lucide-react";
import Image from "next/image";

export default function LoginForm() {
    // Local UI State
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const login = useAdminStore((state) => state.login); // 3. Get Login Action

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // 4. Call Real Backend API
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                // 5. Update Zustand Global State
                login({ email: email, name: "Admin User" });

                // 6. Redirect to Dashboard
                router.push("/admin/dashboard");
                router.refresh(); // Ensure middleware re-runs
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex h-screen w-full bg-[#050505] text-white overflow-hidden">
            {/* --- LEFT SIDE: CINEMATIC IMAGE --- */}
            <div className="hidden lg:block w-1/2 relative">
                <div className="absolute inset-0 bg-purple-900/20 z-10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505] z-20" />
                <Image 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1920&auto=format&fit=crop" 
                    alt="Luxury Travel"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-12 left-12 z-30 max-w-md">
                    <h2 className="text-4xl font-bold mb-4 drop-shadow-xl">Your Journey Begins Here.</h2>
                    <p className="text-gray-200 text-lg drop-shadow-md">
                        Premium outstation taxi services at unbeatable prices. Experience the comfort of home, on the road.
                    </p>
                </div>
            </div>
            
            {/* --- RIGHT SIDE: FORM --- */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 relative">
                {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

                <form onSubmit={handleSubmit} className="w-full max-w-[400px] relative z-10 flex flex-col space-y-6">
                    <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 mb-6 border border-purple-500/20">
                            <User className="text-purple-400" size={24} />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight">Welcome Back</h2>
                        <p className="text-gray-400 mt-2">Sign in to manage your bookings</p>
                    </div>

                    {/* Error Message Display */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-xl text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        {/* Email Input */}
                        <div className="group relative">
                            <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                                <Mail size={18} />
                            </div>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                required 
                                disabled={isLoading}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="group relative">
                            <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                                <Lock size={18} />
                            </div>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
                                required 
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className="relative">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-4 h-4 border border-gray-600 rounded bg-transparent peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-all" />
                                <Check size={10} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100" />
                            </div>
                            <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                        </label>
                    </div>
        
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full h-12 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
                    >
                        {isLoading ? <Loader2 className="animate-spin" size={20} /> : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}