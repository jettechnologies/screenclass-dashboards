import { getAuthCookie } from "@/utils/constants";
import { ENDPOINTS } from "@/utils/constants";
import { Response, Subjects, Subtopics, Topics } from "@/utils/validators";

export const fetchAllSubjects = async () => {
  const token = await getAuthCookie();
  const { getSubjects } = ENDPOINTS.student;
  if (!token) return;
  const { accessToken } = token;

  try {
    const request = await fetch(getSubjects, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const response: Response<Subjects[]> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllTopics = async (subjectId: string) => {
  const token = await getAuthCookie();
  const { getTopics } = ENDPOINTS.student;
  if (!token) return;
  const { accessToken } = token;

  const url = `${getTopics}/${subjectId}`;

  try {
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const response: Response<Topics[]> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAllSubtopics = async (topicId: string) => {
  const token = await getAuthCookie();
  const { getSubtopics } = ENDPOINTS.student;
  if (!token) return;
  const { accessToken } = token;

  const url = `${getSubtopics}/${topicId}`;

  try {
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const response: Response<Subtopics[]> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
