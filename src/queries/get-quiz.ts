"use server";

import { getCookie } from "cookies-next";
import { ENDPOINTS, TOKEN_KEY } from "@/utils/constants";
import { QuizSummaryType, Response } from "@/utils/validators";
import { cookies } from "next/headers";
export const fetchQuizSummary = async (subtopicId: string) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { getQuizSummary } = ENDPOINTS.quiz;

    const url = `${getQuizSummary}/${subtopicId}`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!request.ok) {
      throw new Error(`Request failed with status ${request.status}`);
    }

    const response: Response<QuizSummaryType> = await request.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    return null;
  }
};
