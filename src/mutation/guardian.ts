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

interface StudentSignupProps {
  firstName: string;
  lastName: string;
  username: string;
  mobile: string;
  email: string;
  password: string;
}

export const registerStudentAsGuardian = async (params: StudentSignupProps) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      return null;
    }
    const { registerStudent } = ENDPOINTS.guardian;

    const request = await fetch(registerStudent, {
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
    console.error("Error registering student as a guardian:", error);
    throw new Error("Error registering student as a guardian");
  }
};

export const attachStudentAsGuardian = async (params: { scid: string }) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      return null;
    }
    const { attachStudent } = ENDPOINTS.guardian;

    const request = await fetch(attachStudent, {
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

    const response: Response<null> = await request.json();
    return response;
  } catch (error) {
    console.error("Error while adding student to a guardian", error);
    throw new Error("Error while adding student to a guardian");
  }
};

export const removeStudentAsGuardian = async (params: { scid: string }) => {
  try {
    const token = (await getCookie(TOKEN_KEY, { cookies })) as string;
    if (!token) {
      return null;
    }
    const { removeStudent } = ENDPOINTS.guardian;

    const request = await fetch(removeStudent, {
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

    const response: Response<null> = await request.json();
    return response;
  } catch (error) {
    console.error("Error while remvoing student to a guardian", error);
    throw new Error("Error while remvoing student to a guardian");
  }
};
