"use client";

import Link from "next/link";
import {
    Map, Car, Image as ImageIcon, ArrowRight,
    Plus, TrendingUp, Activity
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8">

            {/* --- 1. WELCOME HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Admin Overview</h1>
                    <p className="text-gray-400 mt-1">Manage your travel services from one place.</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-2 text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        System Online
                    </span>
                </div>
            </div>

            {/* --- 2. QUICK ACTION CARDS (The 3 Pillars) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1: Routes */}
                <DashboardCard
                    title="Route Manager"
                    desc="Add, edit, or hide travel destinations."
                    count="12 Active"
                    icon={<Map size={24} className="text-purple-400" />}
                    href="/admin/routes"
                    actionLabel="Manage Routes"
                />

                {/* Card 2: Fleets */}
                <DashboardCard
                    title="Fleet Management"
                    desc="Update vehicle pricing and images."
                    count="5 Categories"
                    icon={<Car size={24} className="text-blue-400" />}
                    href="/admin/vehicles"
                    actionLabel="Manage Fleets"
                />

                {/* Card 3: Gallery */}
                <DashboardCard
                    title="Route Gallery"
                    desc="Upload scenic photos for destinations."
                    count="48 Images"
                    icon={<ImageIcon size={24} className="text-pink-400" />}
                    href="/admin/gallery"
                    actionLabel="Manage Gallery"
                />
            </div>

            {/* --- 3. RECENT UPDATES SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left: Quick Stats */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                    <h3 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                        <Activity size={18} className="text-purple-400" /> Live Status
                    </h3>
                    <div className="space-y-4">
                        <StatRow label="Total Views (Today)" value="1,240" trend="+12%" />
                        <StatRow label="Route Enquiries" value="8" trend="+2" />
                        <StatRow label="Server Uptime" value="99.9%" trend="Stable" />
                    </div>
                </div>

                {/* Right: Shortcut to Add New */}
                <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-2xl p-8 flex flex-col justify-center items-start relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Expand Your Network</h3>
                    <p className="text-gray-400 mb-6 max-w-sm relative z-10">
                        Ready to add a new destination? Create a new route package in less than 2 minutes.
                    </p>

                    <Link
                        href="/admin/routes/new"
                        className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-purple-900/20 relative z-10"
                    >
                        <Plus size={20} />
                        Create New Route
                    </Link>
                </div>

            </div>
        </div>
    );
}

// --- HELPER COMPONENTS ---

function DashboardCard({ title, desc, count, icon, href, actionLabel }: any) {
    return (
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all group flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                    {icon}
                </div>
                <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-lg">
                    {count}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-1">{desc}</p>

            <Link
                href={href}
                className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-bold text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
            >
                {actionLabel} <ArrowRight size={16} />
            </Link>
        </div>
    )
}

function StatRow({ label, value, trend }: any) {
    return (
        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
            <span className="text-gray-400 text-sm">{label}</span>
            <div className="flex items-center gap-3">
                <span className="font-bold text-white">{value}</span>
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${trend.includes('+') ? 'text-green-400 bg-green-400/10' : 'text-gray-500 bg-gray-500/10'}`}>
                    {trend}
                </span>
            </div>
        </div>
    )
}