"use client";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AuthSlice, createAuthSlice } from "./slices/auth-slice";

export type Store = AuthSlice;

export const useSCStore = create<Store>()(
  devtools(
    immer((...args) => ({
      ...createAuthSlice(...args),
    })),
  ),
);

export const useAuthSelectors = () =>
  useSCStore(
    useShallow((state) => ({
      setAccessToken: state.setAccessToken,
      logout: state.logout,
      initializeAuth: state.initializeAuth,
      accessToken: state.accessToken,
      role: state.role,
      setResetPwdState: state.setResetPwdState,
      subscriptionStatus: state.subscriptionStatus,
      setSubscriptionStatus: state.setSubscriptionStatus,
      resetPwdState: state.resetPwdState,
    })),
  );
