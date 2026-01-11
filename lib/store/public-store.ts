import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// --- TYPES ---
export interface Route {
  id: number;
  title: string;
  slug: string;
}

export interface Vehicle {
  id: number;
  title: string;
  category: string;
  pricePerKm: number;
  image: string;
  description: string;
  seats: string;
  bags: string;
  fuel: string;
  features: string[];
}

interface PublicState {
  // Data
  routes: Route[];
  vehicles: Vehicle[];
  
  // Meta
  isLoadingRoutes: boolean;
  isLoadingVehicles: boolean;
  lastFetchedRoutes: number | null;
  lastFetchedVehicles: number | null;

  // Actions
  fetchRoutes: (force?: boolean) => Promise<void>;
  fetchVehicles: (force?: boolean) => Promise<void>;
}

// --- CONSTANTS ---
const CACHE_DURATION = 1000 * 60 * 60; // 1 Hour

export const usePublicStore = create<PublicState>()(
  persist(
    (set, get) => ({
      routes: [],
      vehicles: [],
      isLoadingRoutes: false,
      isLoadingVehicles: false,
      lastFetchedRoutes: null,
      lastFetchedVehicles: null,

      fetchRoutes: async (force = false) => {
        const { routes, lastFetchedRoutes, isLoadingRoutes } = get();
        
        // Return if already loading
        if (isLoadingRoutes) return;

        // Return if valid cache exists and not forced
        const now = Date.now();
        if (!force && routes.length > 0 && lastFetchedRoutes && (now - lastFetchedRoutes < CACHE_DURATION)) {
          return;
        }

        set({ isLoadingRoutes: true });
        try {
          const res = await fetch("/api/routes");
          if (res.ok) {
            const data = await res.json();
            set({ routes: data, lastFetchedRoutes: now });
          }
        } catch (error) {
          console.error("Store: Failed to fetch routes", error);
        } finally {
          set({ isLoadingRoutes: false });
        }
      },

      fetchVehicles: async (force = false) => {
        const { vehicles, lastFetchedVehicles, isLoadingVehicles } = get();

        if (isLoadingVehicles) return;

        const now = Date.now();
        // Custom sorting logic could be done here or in component. 
        // Component-level sorting allows display flexibility, but sorting here ensures consistency.
        // For now, we store raw data and let components decide (or minimal sorting).

        if (!force && vehicles.length > 0 && lastFetchedVehicles && (now - lastFetchedVehicles < CACHE_DURATION)) {
          return;
        }

        set({ isLoadingVehicles: true });
        try {
          const res = await fetch('/api/vehicles');
          if (res.ok) {
            const data = await res.json();
            set({ vehicles: data, lastFetchedVehicles: now });
          }
        } catch (error) {
          console.error("Store: Failed to fetch vehicles", error);
        } finally {
          set({ isLoadingVehicles: false });
        }
      }
    }),
    {
      name: 'aditi-public-storage', // unique name
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        routes: state.routes, 
        vehicles: state.vehicles,
        lastFetchedRoutes: state.lastFetchedRoutes,
        lastFetchedVehicles: state.lastFetchedVehicles
      }), // Don't persist loading states
    }
  )
);
