import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AdminUser {
  email: string;
  name?: string;
}

interface AdminState {
  // Data
  user: AdminUser | null;
  isAuthenticated: boolean;
  isSidebarOpen: boolean;

  // Actions
  login: (user: AdminUser) => void;
  logout: () => void;
  toggleSidebar: () => void;
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isSidebarOpen: true, // Default sidebar to open

      login: (user) => set({ user, isAuthenticated: true }),
      
      logout: () => set({ user: null, isAuthenticated: false }),
      
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    }),
    {
      name: 'admin-storage', // unique name for localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage
    }
  )
)