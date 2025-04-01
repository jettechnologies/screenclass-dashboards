"use client";

import { useEffect } from "react";
import { useAuthActions, useAuthState } from "@/store";
import { useRouter, usePathname } from "next/navigation";

export const ProtectedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { initializeAuth } = useAuthActions();
  const { accessToken, role } = useAuthState();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    initializeAuth(); // Ensure authentication is initialized on mount
  }, [initializeAuth]);

  console.log(accessToken, role, pathname);

  useEffect(() => {
    if (!role || !accessToken) {
      router.push("/signin/student");
    } else if (role === "student" && pathname.startsWith("/guardian")) {
      router.push("/student");
    } else if (role === "guardian" && pathname.startsWith("/student")) {
      router.push("/guardian");
    } else if (
      accessToken &&
      role === "student" &&
      pathname.startsWith("/signin")
    ) {
      router.push("/student");
    } else if (
      accessToken &&
      role === "guardian" &&
      pathname.startsWith("/signin")
    ) {
      router.push("/guardian");
    }
  }, [role, accessToken, pathname, router]);

  return <>{children}</>;
};
