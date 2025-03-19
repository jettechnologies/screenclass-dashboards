"use client";

import { getCookie } from "cookies-next";
import { useAuthSelectors } from "@/store";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { fetchStudentProfile } from "@/queries";
import { TOKEN_KEY, USER_ROLE_KEY } from "@/utils/constants";

export const AuthInitializer = () => {
  const { initializeAuth, setSubscriptionStatus } = useAuthSelectors();
  const pathname = usePathname();
  const router = useRouter();

  const getSubscriptionStatus = async () => {
    const response = await fetchStudentProfile();
    if (!response) return;

    if (response.success) {
      const { data } = response;

      if (data) setSubscriptionStatus(data.subscriptionStatus);
    }
  };

  useEffect(() => {
    const redirectUserWithTokenValid = () => {
      const accessToken = getCookie(TOKEN_KEY);
      const role = getCookie(USER_ROLE_KEY);

      if (!accessToken || !role) {
        return;
      }

      if (accessToken && role === "student" && pathname === "/signin/student") {
        getSubscriptionStatus();
        router.push("/student");
      } else if (
        accessToken &&
        role === "guardian" &&
        pathname === "/signin/guardian"
      ) {
        router.push("/guardian");
      }
    };

    redirectUserWithTokenValid();
    initializeAuth();
  }, [initializeAuth, pathname, router]);

  return null;
};
