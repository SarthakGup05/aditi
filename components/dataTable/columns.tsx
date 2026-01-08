"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MapPin, Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EditRouteModal } from "@/components/EditForm";

export type Route = {
  id: number;
  slug: string;
  title: string;
  basePrice: number;
  distance: string;
  isActive: boolean;
};

// ⚡️ CHANGE: Export a function instead of a constant array
// This allows us to pass the 'onOptimisticDelete' function down
export const getColumns = (onOptimisticDelete: (slug: string) => void): ColumnDef<Route>[] => [
  {
    accessorKey: "title",
    header: "Route Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
          <MapPin size={18} />
        </div>
        <div>
          <p className="font-bold text-white text-base">{row.getValue("title")}</p>
          <p className="text-xs font-mono text-gray-500">/{row.original.slug}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "distance",
    header: "Distance",
    cell: ({ row }) => <span className="font-medium">{row.getValue("distance")}</span>,
  },
  {
    accessorKey: "basePrice",
    header: "Base Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("basePrice"));
      return <span className="font-bold text-white">₹{price.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");
      return isActive ? (
        <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full text-xs font-bold border border-green-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> Active
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 bg-gray-500/10 text-gray-400 px-2.5 py-1 rounded-full text-xs font-bold border border-gray-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-500"/> Draft
        </span>
      );
    },
  },
  // --- ACTIONS ---
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const route = row.original;
      return <ActionButtons slug={route.slug} onOptimisticDelete={onOptimisticDelete} />;
    },
  },
];

// Helper Component
function ActionButtons({ slug, onOptimisticDelete }: { slug: string, onOptimisticDelete: (slug: string) => void }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Delete this route?")) return;

    // 🚀 STEP 1: Update UI Immediately (Instant Feel)
    // We remove it from the list before the server even responds
    onOptimisticDelete(slug); 
    
    // 🚀 STEP 2: Handle Server Request in Background
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/routes/${slug}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed");
      
      // Sync server state just in case, but user already saw it vanish
      router.refresh(); 
    } catch (error) {
      alert("Failed to delete item on server. Please refresh.");
      // Ideally, you would revert the UI change here if it fails
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <EditRouteModal slug={slug} />

      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
        title="Delete Route"
      >
        {isDeleting ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
      </button>
    </div>
  );
}