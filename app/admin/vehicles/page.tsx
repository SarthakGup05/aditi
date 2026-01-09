"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Loader2 } from "lucide-react";

// Reuse the DataTable component we built for Routes
import { DataTable } from "@/components/dataTable/data-table"; 
import { getColumns, VehiclePackage } from "./column"; 

export default function ManageFleetsPage() {
  const [packages, setPackages] = useState<VehiclePackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fetch Data
  useEffect(() => {
    async function fetchPackages() {
      try {
        // Ensure your API returns { include: { route: true } }
        const res = await fetch("/api/vehicles"); 
        if (res.ok) {
          const data = await res.json();
          setPackages(data);
        }
      } catch (error) {
        console.error("Failed to load fleets");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPackages();
  }, []);

  // 2. Optimistic Delete Handler
  const handleOptimisticDelete = (idToDelete: number) => {
    setPackages((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  const tableColumns = getColumns(handleOptimisticDelete);

  return (
    <div className="w-full min-h-screen bg-[#050505]">
        <div className="max-w-7xl mx-auto p-6 lg:p-10 space-y-8">
            
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Vehicle Packages
                    </h1>
                    <p className="text-gray-400 max-w-lg leading-relaxed">
                        Manage pricing and vehicle options for your routes.
                    </p>
                </div>

                <Link 
                    href="/admin/vehicles/new" 
                    className="
                        group bg-blue-600 hover:bg-blue-500 text-white 
                        px-6 py-3 rounded-xl font-semibold transition-all duration-200
                        flex items-center gap-2 shadow-lg shadow-blue-900/20 
                        active:scale-95
                    "
                >
                    <div className="bg-white/20 rounded-lg p-1 group-hover:bg-white/30 transition-colors">
                        <Plus size={18} />
                    </div>
                    <span>Add Package</span>
                </Link>
            </div>

            {/* TABLE */}
            <div className="min-h-[400px]">
                {isLoading ? (
                    <div className="h-96 w-full flex flex-col items-center justify-center text-blue-500 gap-4 bg-[#0a0a0a] rounded-2xl border border-white/5 animate-pulse">
                        <Loader2 className="animate-spin" size={40} />
                        <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                            Loading packages...
                        </span>
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <DataTable columns={tableColumns} data={packages} />
                    </div>
                )}
            </div>
            
        </div>
    </div>
  );
}