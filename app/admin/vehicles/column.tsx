"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Car, MapPin, Trash2, Loader2, Users, Briefcase, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EditFleetModal } from "./Fleetmodal";

export type VehiclePackage = {
  id: number;
  category: string;
  carModel: string;
  image: string;
  price: number;
  seats: number;
  bags: number;
  route?: {           
    title: string;
    slug: string;
  };
};

export const getColumns = (onOptimisticDelete: (id: number) => void): ColumnDef<VehiclePackage>[] => [
  // 1. CAR INFO
  {
    accessorKey: "carModel",
    header: "Vehicle Info",
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <div className="w-16 h-12 relative rounded-lg overflow-hidden border border-white/10 bg-white/5 shrink-0">
            {row.original.image ? (
                <Image 
                    src={row.original.image} 
                    alt={row.original.carModel} 
                    fill 
                    className="object-cover"
                />
            ) : (
                <Car className="w-full h-full p-3 text-gray-600" />
            )}
        </div>
        <div>
          <p className="font-bold text-white text-base">{row.original.carModel}</p>
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

  // 3. LINKED ROUTE
  {
    accessorKey: "route.title",
    header: "Linked Route",
    cell: ({ row }) => {
      const route = row.original.route;
      if (!route) {
        return (
            <div className="flex items-center gap-2 text-red-400/80 text-xs font-medium">
                <AlertCircle size={14} />
                <span>Unassigned</span>
            </div>
        );
      }
      return (
        <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={14} className="text-purple-500 shrink-0" />
            <span className="truncate max-w-[150px]" title={route.title}>
                {route.title}
            </span>
        </div>
      );
    },
  },

  // 4. PRICE (🔴 FIXED CRASH HERE)
  {
    accessorKey: "price",
    header: "Package Price",
    cell: ({ row }) => {
      // Defensive check: If price is undefined, default to 0
      const price = row.original.price ?? 0; 
      
      return (
        <span className="font-bold text-green-400 text-base">
            ₹{price.toLocaleString()}
        </span>
      );
    },
  },

  // 5. ACTIONS
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => (
      <ActionButtons id={row.original.id} onOptimisticDelete={onOptimisticDelete} />
    ),
  },
];

function ActionButtons({ id, onOptimisticDelete }: { id: number, onOptimisticDelete: (id: number) => void }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Delete this vehicle package?")) return;
    onOptimisticDelete(id); 
    
    setIsDeleting(true);
    try {
      await fetch(`/api/vehicles/${id}`, { method: "DELETE" });
      router.refresh();
    } catch (error) {
      alert("Delete failed.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <EditFleetModal id={id} />
      <button 
        onClick={handleDelete} 
        disabled={isDeleting} 
        className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
      >
        {isDeleting ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
      </button>
    </div>
  );
}