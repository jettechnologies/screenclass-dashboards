import { ENDPOINTS, getAuthCookie } from "@/utils/constants";
import { Response, Guardian, Student } from "@/utils/validators";

export const fetchGuardianProfile =
  async (): Promise<Response<Guardian> | null> => {
    const token = getAuthCookie();
    const { getGuardianProfile } = ENDPOINTS.guardian;
    if (!token) return null;
    const { accessToken } = token;
    try {
      const request = await fetch(getGuardianProfile, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const response: Response<Guardian> = await request.json();
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

export const fetchStudentProfile = async () => {
  const token = getAuthCookie();
  const { getStudentProfile } = ENDPOINTS.student;
  if (!token) return null;
  const { accessToken } = token;

  try {
    const request = await fetch(getStudentProfile, {
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

export const fetchStudentProfileMiddleware = async (token: string) => {
  const { getStudentProfile } = ENDPOINTS.student;
  if (!token) return null;

  try {
    const request = await fetch(getStudentProfile, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response: Response<Student> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
