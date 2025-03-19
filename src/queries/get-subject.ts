import { getAuthCookie } from "@/utils/constants";
import { ENDPOINTS } from "@/utils/constants";
import { Response, Subjects } from "@/utils/validators";

export const fetchSubject = async () => {
  const token = await getAuthCookie();
  const { getSubjects } = ENDPOINTS.student;
  if (!token) return;
  const { accessToken } = token;
  console.log(accessToken);

  try {
    const request = await fetch(getSubjects, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const response: Response<Subjects> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
