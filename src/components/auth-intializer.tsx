"use client";

import { getCookie } from "cookies-next";
import { useAuthSelectors } from "@/store";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { TOKEN_KEY, USER_ROLE_KEY } from "@/utils/constants";

export const AuthInitializer = () => {
  const { initializeAuth } = useAuthSelectors();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const redirectUserWithTokenValid = () => {
      const accessToken = getCookie(TOKEN_KEY);
      const role = getCookie(USER_ROLE_KEY);

      if (!accessToken || !role) {
        return;
      }

      if (accessToken && role === "student" && pathname === "/signin/student") {
        console.log("reach here the student");
        router.push("/student");
      } else if (
        accessToken &&
        role === "guardian" &&
        pathname === "/signin/guardian"
      ) {
        console.log("reach here the guardian");
        router.push("/student");
      }
    };

    redirectUserWithTokenValid();
    initializeAuth();
  }, [initializeAuth, pathname, router]);

  return null;
};
