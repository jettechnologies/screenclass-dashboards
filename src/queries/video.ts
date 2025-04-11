"use server";

import { ENDPOINTS } from "@/utils/constants";
import { LinkedVideo } from "@/utils/validators";
import { TOKEN_KEY } from "@/utils/constants";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

export const fetchVideoUrl = async (subtopicId: string) => {
  const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
  const { getSubtopicVideo } = ENDPOINTS.student;
  if (!token) throw new Error("No authentication token found");

  const url = `${getSubtopicVideo}/${subtopicId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: LinkedVideo = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching video URL:", error);
    throw error instanceof Error ? error : new Error("Failed to fetch video");
  }
};
