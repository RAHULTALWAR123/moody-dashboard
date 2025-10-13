import { create } from "zustand";

interface UserStore {
  user: string | null;
  setUser: (data: string) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: localStorage.getItem("local-user") || null,

  setUser: (data) => {
    localStorage.setItem("local-user", data);
    set({ user: data });
  },

  removeUser: () => {
    localStorage.removeItem("local-user");
    set({ user: null });
  },
}));
