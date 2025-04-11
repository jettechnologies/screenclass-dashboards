"use server";

import { ENDPOINTS, TOKEN_KEY } from "@/utils/constants";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";
import { Response, SubscriptionPlan } from "@/utils/validators";

export const fetchAllSubscriptions = async () => {
  const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
  const { getSubscriptions } = ENDPOINTS.student;
  if (!token) return;

  try {
    const request = await fetch(getSubscriptions, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response: Response<SubscriptionPlan[]> = await request.json();

    return response;
  } catch (error) {
    console.error(error);
  }
};
