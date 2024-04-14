import { create } from "zustand";
import Cookies from "js-cookie";

import { axiosInstance } from "@/lib/axios";

interface AuthState {
  data: any;
  getUser: () => Promise<void>;
  logoutHandler: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  data: null,
  getUser: async () => {
    try {
      const getCookie = Cookies.get("token");

      if (!getCookie) {
        return set({ data: null });
      }

      const response = await axiosInstance.get("/v1/api/auth/me", {
        headers: {
          Authorization: `Bearer ${getCookie}`,
        },
      });

      if (response.data.error) {
        Cookies.remove("token");
        return set({ data: null });
      }

      set({ data: response.data });
    } catch (error) {}
  },
  logoutHandler: async () => {
    window.location.href = "/";
    Cookies.remove("token");
    set({ data: null });
  },
}));

export default useAuthStore;
