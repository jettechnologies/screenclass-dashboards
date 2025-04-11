"use server";

import { ENDPOINTS, TOKEN_KEY } from "@/utils";
import { Student, Response } from "@/utils/validators";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

interface EditProfileParams {
  firstName: string;
  lastName: string;
}

export const editStudentProfile = async (params: EditProfileParams) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { editProfile } = ENDPOINTS.student;

    const request = await fetch(editProfile, {
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

    const response: Response<Student> = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    return null;
  }
};

interface MarkCourseParams {
  userId: string;
  subtopicId: string;
}

export const MarkCourseCompleted = async (params: MarkCourseParams) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      console.log("No auth token found");
      return null;
    }
    const { markCourseCompleted } = ENDPOINTS.student;

    const request = await fetch(markCourseCompleted, {
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

    const response: Response<Student> = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    return null;
  }
};

interface ContactUsParams {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

export const contactUs = async (params: ContactUsParams) => {
  try {
    const { contactUs } = ENDPOINTS.student;

    const request = await fetch(contactUs, {
      method: "POST",
      body: JSON.stringify({ ...params }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!request.ok) {
      throw new Error(`Request failed with status ${request.status}`);
    }

    const response: Response<unknown> = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching quiz summary:", error);
    return null;
  }
};
