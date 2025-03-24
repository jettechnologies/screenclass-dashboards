import { ENDPOINTS, getAuthCookie } from "@/utils/constants";
import {
  Response,
  StudentType,
  Student,
  GuardianActivityLog,
} from "@/utils/validators";

export const fetchAllStudents = async (): Promise<Response<
  StudentType[]
> | null> => {
  const token = getAuthCookie();
  const { getAllStudents } = ENDPOINTS.guardian;

  if (!token) {
    return null;
  }

  const { accessToken } = token;

  try {
    const request = await fetch(getAllStudents, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response: Response<StudentType[]> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchSingleStudent = async (
  studentId: string,
): Promise<Response<Student> | null> => {
  const token = getAuthCookie();
  const { getSingleStudent } = ENDPOINTS.guardian;

  if (!token) {
    return null;
  }

  const { accessToken } = token;

  const url = `${getSingleStudent}/${studentId}`;

  try {
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response: Response<Student> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchAllActivities = async (): Promise<Response<
  GuardianActivityLog[]
> | null> => {
  const token = getAuthCookie();
  const { getGuardianActivites } = ENDPOINTS.guardian;

  if (!token) {
    return null;
  }
  const { accessToken } = token;
  try {
    const request = await fetch(getGuardianActivites, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response: Response<GuardianActivityLog[]> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
