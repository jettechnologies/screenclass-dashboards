"use server";

import { ENDPOINTS, TOKEN_KEY } from "@/utils";
import { Student, Response, Guardian } from "@/utils/validators";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

interface EditProfileParams {
  firstName: string;
  lastName: string;
}

export const updateGuardianProfile = async (params: EditProfileParams) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { updateGuardianProfile } = ENDPOINTS.guardian;

    const request = await fetch(updateGuardianProfile, {
      method: "PUT",
      body: JSON.stringify({ ...params }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!request.ok) {
      throw new Error(`Request failed with status ${request.status}`);
    }

    const response: Response<Guardian> = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    return null;
  }
};
