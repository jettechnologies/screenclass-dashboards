"use server";

import { ENDPOINTS, TOKEN_KEY } from "@/utils";
import { SubscriptionResponse, Response } from "@/utils/validators";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

export const initializePayment = async ({ amount }: { amount: number }) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { subscription } = ENDPOINTS.student;

    const request = await fetch(subscription, {
      method: "POST",
      body: JSON.stringify({ amount }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!request.ok) {
      throw new Error(`Request failed with status ${request.status}`);
    }

    const response: Response<SubscriptionResponse> = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    throw new Error("An error occurred during subcription");
  }
};
