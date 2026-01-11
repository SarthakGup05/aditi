import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from 'react-hot-toast'

// --- TYPES ---
export interface AdminUser {
  email: string;
  name?: string;
}

export interface AdminRoute {
  id: number;
  title: string;
  slug: string;
  isActive: boolean;
  basePrice: number;
  distance: string; // Added to match Route type in columns
  [key: string]: any;
}

export interface AdminVehicle {
  id: number;
  title: string;
  category: string;
  pricePerKm: number;
  [key: string]: any;
}

interface AdminState {
  // Data
  user: AdminUser | null;
  isAuthenticated: boolean;
  isSidebarOpen: boolean;
  
  routes: AdminRoute[];
  vehicles: AdminVehicle[];
  isLoadingRoutes: boolean;
  isLoadingVehicles: boolean;

  // Actions
  login: (user: AdminUser) => void;
  logout: () => void;
  toggleSidebar: () => void;

  // CRUD Actions
  fetchRoutes: (force?: boolean) => Promise<void>;
  deleteRoute: (slug: string) => Promise<void>;
  
  fetchVehicles: (force?: boolean) => Promise<void>;
  deleteVehicle: (id: number) => Promise<void>;
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isSidebarOpen: true,

      routes: [],
      vehicles: [],
      isLoadingRoutes: false,
      isLoadingVehicles: false,

      // --- AUTH ---
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

      // --- ROUTE ACTIONS ---
      fetchRoutes: async (force = false) => {
        const { routes, isLoadingRoutes } = get();
        if (routes.length > 0 && !force) return;
        if (isLoadingRoutes) return;

        set({ isLoadingRoutes: true });
        try {
          // Fetch ALL routes (including inactive) for admin
          const res = await fetch("/api/routes?admin=true");
          if (res.ok) {
            const data = await res.json();
            set({ routes: data });
          }
        } catch (error) {
          console.error("Store: Failed to fetch routes", error);
        } finally {
          set({ isLoadingRoutes: false });
        }
      },

      deleteRoute: async (slug) => {
        // Optimistic Update
        const previousRoutes = get().routes;
        set((state) => ({ routes: state.routes.filter((r) => r.slug !== slug) }));
        
        toast.promise(
          fetch(`/api/routes/${slug}`, { method: "DELETE" }).then(async (res) => {
            if (!res.ok) throw new Error("Delete failed");
            return res.json();
          }),
          {
            loading: 'Deleting route...',
            success: 'Route deleted successfully',
            error: () => {
              // Revert
              set({ routes: previousRoutes });
              return 'Failed to delete route';
            },
          }
        );
      },

      // --- VEHICLE ACTIONS ---
      fetchVehicles: async (force = false) => {
        const { vehicles, isLoadingVehicles } = get();
        if (vehicles.length > 0 && !force) return;
        if (isLoadingVehicles) return;

        set({ isLoadingVehicles: true });
        try {
          const res = await fetch("/api/vehicles?admin=true"); // assuming admin param if needed
          if (res.ok) {
            const data = await res.json();
            set({ vehicles: data });
          }
        } catch (error) {
          console.error("Store: Failed to fetch vehicles", error);
        } finally {
          set({ isLoadingVehicles: false });
        }
      },

      deleteVehicle: async (id) => {
        // Optimistic Update
        const previousVehicles = get().vehicles;
        set((state) => ({ vehicles: state.vehicles.filter((v) => v.id !== id) }));

        toast.promise(
            fetch(`/api/vehicles/${id}`, { method: "DELETE" }).then(async (res) => {
              if (!res.ok) throw new Error("Delete failed");
              return res.json();
            }),
            {
              loading: 'Deleting vehicle...',
              success: 'Vehicle deleted successfully',
              error: () => {
                // Revert
                set({ vehicles: previousVehicles });
                return 'Failed to delete vehicle';
              },
            }
          );
      }
    }),
    {
      name: 'admin-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated,
        isSidebarOpen: state.isSidebarOpen
        // We generally DON'T want to persist routes/vehicles permanently 
        // in admin to ensure we always see fresh data on reload,
        // or we persist but verify with Last-Modified.
        // For now, let's NOT persist the data lists to force fresh fetch on full reload.
      }),
    }
  )
)