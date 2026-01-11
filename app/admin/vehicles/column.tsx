"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Car, Trash2, Loader2, Users, Briefcase } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EditFleetModal } from "./Fleetmodal";

// Define the shape of your data
export type VehiclePackage = {
  id: number;
  category: string;
  title: string;
  image: string;
  pricePerKm: number;
  seats: string;
  bags: string;
};

// Export the columns definition
export const getColumns = (
  onOptimisticDelete: (id: number) => void
): ColumnDef<VehiclePackage>[] => [
  // 1. CAR INFO
  {
    accessorKey: "title",
    header: "Vehicle Info",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <div className="w-16 h-12 relative rounded-lg overflow-hidden border border-white/10 bg-white/5 shrink-0">
          {row.original.image ? (
            <Image
              src={row.original.image}
              alt={row.original.title}
              fill
              className="object-cover"
            />
          ) : (
            <Car className="w-full h-full p-3 text-gray-600" />
          )}
        </div>
        <div>
          <p className="font-bold text-white text-base">{row.original.title}</p>
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
            {row.original.category}
          </span>
        </div>
      </div>
    ),
  },

  // 2. SPECS
  {
    id: "specs",
    header: "Specs",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <Users size={12} /> {row.original.seats} Seats
        </div>
        <div className="flex items-center gap-1">
          <Briefcase size={12} /> {row.original.bags} Bags
        </div>
      </div>
    ),
  },

  // 3. PRICE
  {
    accessorKey: "pricePerKm",
    header: "Price / Km",
    cell: ({ row }) => {
      const price = row.original.pricePerKm ?? 0;
      return (
        <span className="font-bold text-green-400 text-base">
          ₹{price.toLocaleString()}
        </span>
      );
    },
  },

  // 4. ACTIONS
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      <ActionButtons 
        id={row.original.id} 
        onOptimisticDelete={onOptimisticDelete} 
      />
    ),
  },
];

// --- Sub-Component for Actions ---
function ActionButtons({ 
  id, 
  onOptimisticDelete 
}: { 
  id: number; 
  onOptimisticDelete: (id: number) => void;
}) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    // CRITICAL FIX: Stop propagation immediately
    e.preventDefault();
    e.stopPropagation();
    
    if (!confirm("Are you sure you want to delete this vehicle?")) return;

    setIsDeleting(true);

    try {
      const res = await fetch(`/api/vehicles/${id}`, { 
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to delete");
      }

      // Success: Update UI immediately
      onOptimisticDelete(id);
      router.refresh();

    } catch (error) {
      console.error("DELETE ERROR:", error);
      alert("Something went wrong while deleting. Check console for details.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div 
      className="flex items-center justify-end gap-2" 
      onClick={(e) => e.stopPropagation()} // Stop row clicks on the container
    >
      {/* View Details (Read Only) */}
      <EditFleetModal id={id} isReadOnly={true} />
      
      {/* Edit Button */}
      <EditFleetModal id={id} />
      
      {/* Delete Button */}
      <button
        type="button" // CRITICAL FIX: Prevent form submission behavior
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 hover:text-red-300 transition-colors disabled:opacity-50 relative z-10"
        title="Delete Vehicle"
      >
        {isDeleting ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <Trash2 size={18} />
        )}
      </button>
    </div>
  );
}