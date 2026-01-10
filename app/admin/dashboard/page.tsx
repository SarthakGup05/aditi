import Link from "next/link";
import {
    Map, Car, ArrowRight,
    Plus, Activity, Sparkles
} from "lucide-react";
import db from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
    const [routesCount, fleetsCount] = await Promise.all([
        db.serviceRoute.count(),
        db.vehiclePackage.count(),
    ]);

    return (
        <div className="space-y-10">

            {/* --- 1. WELCOME HEADER --- */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/5">
                <div>
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                        Overview
                    </h1>
                    <p className="text-gray-400 mt-2 text-lg">
                        Welcome back, Admin. System is running smoothly.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                        System Online
                    </span>
                </div>
            </div>

            {/* --- 2. QUICK ACTION CARDS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1: Routes */}
                <DashboardCard
                    title="Route Manager"
                    desc="Curate your travel destinations. Add specific details, pricing, and scenic highlights."
                    count={`${routesCount} Active Routes`}
                    icon={<Map size={28} className="text-purple-400" />}
                    href="/admin/routes"
                    actionLabel="Manage Routes"
                    gradient="from-purple-500/10 via-purple-500/5 to-transparent"
                    borderColor="hover:border-purple-500/50"
                />

                {/* Card 2: Fleets */}
                <DashboardCard
                    title="Fleet Management"
                    desc="Control your vehicle inventory. Adjust pricing per km, vehicle types, and availability."
                    count={`${fleetsCount} Vehicle Types`}
                    icon={<Car size={28} className="text-blue-400" />}
                    href="/admin/vehicles"
                    actionLabel="Manage Fleets"
                    gradient="from-blue-500/10 via-blue-500/5 to-transparent"
                    borderColor="hover:border-blue-500/50"
                />
            </div>

            {/* --- 3. RECENT UPDATES SECTION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left: Quick Stats */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

                    <h3 className="font-bold text-xl text-white mb-8 flex items-center gap-2">
                        <Activity size={20} className="text-indigo-400" /> Live Metrics
                    </h3>
                    <div className="space-y-2">
                        <StatRow label="Total Active Routes" value={routesCount.toString()} trend="Live" />
                        <StatRow label="Vehicle Categories" value={fleetsCount.toString()} trend="Active" />
                        <StatRow label="Server Status" value="Healthy" trend="99.9%" />
                    </div>
                </div>

                {/* Right: Shortcut to Add New */}
                <div className="bg-gradient-to-br from-indigo-900/40 via-[#0a0a0a] to-[#0a0a0a] border border-indigo-500/20 rounded-3xl p-8 flex flex-col justify-center items-start relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-indigo-600/30 transition-all duration-700" />

                    <div className="bg-indigo-500/20 p-3 rounded-2xl mb-6 backdrop-blur-sm border border-indigo-500/20">
                        <Sparkles className="text-indigo-300" size={24} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Expand Your Network</h3>
                    <p className="text-gray-400 mb-8 max-w-sm relative z-10 text-lg leading-relaxed">
                        Ready to add a new destination? Launch a new route package in seconds.
                    </p>

                    <Link
                        href="/admin/routes/new"
                        className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] relative z-10"
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

function DashboardCard({ title, desc, count, icon, href, actionLabel, gradient, borderColor }: any) {
    return (
        <div className={`bg-gradient-to-br ${gradient} bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 ${borderColor} transition-all duration-300 group flex flex-col h-full hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden`}>

            <div className="absolute top-0 right-0 p-32 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-all" />

            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl backdrop-blur-md border border-white/5 group-hover:border-white/10 transition-all shadow-inner">
                    {icon}
                </div>
                <span className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    {count}
                </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {title}
            </h3>
            <p className="text-gray-400 text-sm mb-8 flex-1 leading-relaxed relative z-10">
                {desc}
            </p>

            <Link
                href={href}
                className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-sm font-bold text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2 group/btn relative z-10"
            >
                {actionLabel}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
        </div>
    )
}

function StatRow({ label, value, trend }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/5 transition-all group">
            <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">{label}</span>
            <div className="flex items-center gap-4">
                <span className="font-bold text-white text-lg tracking-tight">{value}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${trend.includes('%') ? 'text-emerald-400 bg-emerald-400/10' : 'text-indigo-300 bg-indigo-500/10'}`}>
                    {trend}
                </span>
            </div>
        </div>
    )
}