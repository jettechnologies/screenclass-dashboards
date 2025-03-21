"use server";

import { getCookie } from "cookies-next";
import { ENDPOINTS, TOKEN_KEY } from "@/utils/constants";
import { QuizData, Response, UserAnswer, QuizResult } from "@/utils/validators";
import { cookies } from "next/headers";

export const attemptQuiz = async (quizId: string) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { getQuiz } = ENDPOINTS.quiz;

    const request = await fetch(getQuiz, {
      method: "POST",
      body: JSON.stringify({ quizId }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!request.ok) {
      throw new Error(`Request failed with status ${request.status}`);
    }

    const response: Response<QuizData> = await request.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    return null;
  }
};

interface Params {
  attemptId: string;
  timeSpent: number;
  answers: UserAnswer[];
}

export const submitQuizAttempt = async (params: Params) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { submitQuizAttempt } = ENDPOINTS.quiz;

    const request = await fetch(submitQuizAttempt, {
      method: "POST",
      body: JSON.stringify({ ...params }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!request.ok) {
      throw new Error(`Request failed with status ${request.status}`);
    }

    const response: Response<QuizResult> = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    return null;
  }
};
