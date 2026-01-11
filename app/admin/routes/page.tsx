"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Plus, Loader2 } from "lucide-react";

import { DataTable } from "@/components/dataTable/data-table";
import { getColumns } from "@/components/dataTable/columns";
import { useAdminStore } from "@/lib/store/admin-store";

export default function ManageRoutesPage() {
  // Use Global Admin Store
  const { routes, isLoadingRoutes, fetchRoutes, deleteRoute } = useAdminStore();

  useEffect(() => {
    fetchRoutes();
  }, [fetchRoutes]);

  // Handler uses store action which includes Optimistic Update + Toast
  const handleDelete = (slugToDelete: string) => {
    deleteRoute(slugToDelete);
  };

  // ⚡️ Only need to regenerate columns if the handler reference changes, 
  // but deleteRoute is stable from zustand.
  // We cast routes to any/Route type if needed, or rely on structural compatibility
  const tableColumns = getColumns(handleDelete);

  return (
    <div className="w-full min-h-screen bg-[#050505]">
      {/* --- MAIN CONTAINER --- */}
      <div className="max-w-7xl mx-auto p-6 lg:p-10 space-y-8">

        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Route Manager
            </h1>
            <p className="text-gray-400 max-w-lg leading-relaxed">
              View, edit, and manage your travel packages.
            </p>
          </div>

          <Link
            href="/admin/routes/new"
            className="
                        group bg-purple-600 hover:bg-purple-500 text-white 
                        px-6 py-3 rounded-xl font-semibold transition-all duration-200
                        flex items-center gap-2 shadow-lg shadow-purple-900/20 
                        active:scale-95
                    "
          >
            <div className="bg-white/20 rounded-lg p-1 group-hover:bg-white/30 transition-colors">
              <Plus size={18} />
            </div>
            <span>Add New Route</span>
          </Link>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div className="min-h-[400px]">
          {isLoadingRoutes && routes.length === 0 ? (
            <div className="h-96 w-full flex flex-col items-center justify-center text-purple-500 gap-4 bg-[#0a0a0a] rounded-2xl border border-white/5 animate-pulse">
              <Loader2 className="animate-spin" size={40} />
              <span className="text-sm font-medium text-gray-400 tracking-wide uppercase">
                Loading routes...
              </span>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <DataTable columns={tableColumns} data={routes as any} />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}