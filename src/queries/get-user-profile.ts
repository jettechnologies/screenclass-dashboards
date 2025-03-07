import { ENDPOINTS, getAuthCookie } from "@/utils/constants";
import { Response, Guardian, Student } from "@/utils/validators";

export const fetchGuardianProfile = async () => {
  const token = await getAuthCookie();
  const { getGuardianProfile } = ENDPOINTS.auth;
  console.log(token);
  if (!token) return;
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
  }
};

export const fetchStudentProfile = async () => {
  const token = await getAuthCookie();
  const { getStudentProfile } = ENDPOINTS.auth;
  if (!token) return;
  const { accessToken } = token;
  console.log(accessToken);

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
  }
};

export const fetchStudentProfileMiddleware = async (token: string) => {
  const { getStudentProfile } = ENDPOINTS.auth;
  if (!token) return;

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
