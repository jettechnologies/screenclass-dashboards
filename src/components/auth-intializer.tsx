// components/AuthInitializer.tsx
"use client";
import { useEffect } from "react";
import { useAuthSelectors } from "@/store";

export const AuthInitializer = () => {
  const { initializeAuth } = useAuthSelectors();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return null;
};
