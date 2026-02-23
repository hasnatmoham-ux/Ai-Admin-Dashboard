import { create } from 'zustand';
export const useAppStore = create((set) => ({
  isAuthenticated: false,
  user: { name: 'Sarah Admin', role: 'Super Admin' },
  environment: 'Production',
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
  setEnvironment: (environment) => set({ environment }),
}));
