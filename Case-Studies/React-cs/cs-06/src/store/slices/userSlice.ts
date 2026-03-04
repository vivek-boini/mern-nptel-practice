import type { StateCreator } from 'zustand';

// User slice manages authentication and user data
export interface UserSlice {
  user: { id: string; name: string } | null;
  setUser: (user: { id: string; name: string }) => void;
  clearUser: () => void;
}

// Factory function to create user slice
export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  
  // Set the current logged-in user
  setUser: (user) => set({ user }),
  
  // Clear user on logout
  clearUser: () => set({ user: null }),
});