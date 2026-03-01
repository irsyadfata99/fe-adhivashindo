import { create } from "zustand";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

const storedUser = localStorage.getItem("user");

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  user: storedUser ? JSON.parse(storedUser) : null,
  setAuth: (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },
}));
