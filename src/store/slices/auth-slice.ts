"use client";
import type { StateCreator } from "zustand";
import { COOKIES_CONFIG, TOKEN_KEY, USER_ROLE_KEY } from "@/utils/constants";
import { getCookie, deleteCookie, setCookie } from "cookies-next";

type otpState = {
  otp: string | null;
  userIdentity: string | null;
};

export type AuthState = {
  accessToken: string | null;
  role: string | null;
  resetPwdState: otpState;
  subscriptionStatus: boolean | null;
};

export type AuthActionState = {
  setAccessToken: (accessToken: string, role: string) => void;
  setResetPwdState: (data: { otp?: string; userIdentity?: string }) => void;
  logout: () => void;
  initializeAuth: () => Promise<void>;
  setSubscriptionStatus: (status: boolean) => void;
};

export type AuthSlice = AuthState & AuthActionState;

export const createAuthSlice: StateCreator<
  AuthSlice,
  [["zustand/immer", never]],
  [],
  AuthSlice
> = (set) => ({
  accessToken: null,
  role: null,
  resetPwdState: { otp: null, userIdentity: null },
  subscriptionStatus: null,
  setAccessToken: (accessToken, role) => {
    setCookie(TOKEN_KEY, accessToken, COOKIES_CONFIG);
    setCookie(USER_ROLE_KEY, role, COOKIES_CONFIG);
    set((state) => ({ ...state, accessToken }));
  },
  logout: () => {
    deleteCookie(TOKEN_KEY);
    deleteCookie(USER_ROLE_KEY);

    set({ accessToken: null, role: null });
  },
  setResetPwdState: (data) => {
    set((state) => ({
      ...state,
      resetPwdState: {
        otp: data.otp ?? state.resetPwdState.otp,
        userIdentity: data.userIdentity ?? state.resetPwdState.userIdentity,
      },
    }));
  },
  setSubscriptionStatus: (status) => {
    set((state) => ({ ...state, subscriptionStatus: status }));
  },
  initializeAuth: async () => {
    const accessToken = getCookie(TOKEN_KEY);
    const role = getCookie(USER_ROLE_KEY);
    if (!accessToken && !role) {
      return;
    }

    set(() => ({ accessToken, role }));
  },
});
