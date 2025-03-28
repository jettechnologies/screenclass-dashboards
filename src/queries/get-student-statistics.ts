import { ENDPOINTS, getAuthCookie } from "@/utils/constants";
import {
  Response,
  ProgressData,
  Subscription,
  Activity,
} from "@/utils/validators";

export const fetchDashboardStatistics = async () => {
  const token = getAuthCookie();
  const { getDashboardStatitics } = ENDPOINTS.student;
  if (!token) return null;
  const { accessToken } = token;

  try {
    const request = await fetch(getDashboardStatitics, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const response: Response<ProgressData> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchSubscriptionHistory = async () => {
  const token = getAuthCookie();
  const { getSubscriptionHistory } = ENDPOINTS.student;
  if (!token) return null;
  const { accessToken } = token;

  try {
    const request = await fetch(getSubscriptionHistory, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const response: Response<Subscription[]> = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchStudentActivities = async (): Promise<Response<
  Activity[]
> | null> => {
  const token = getAuthCookie();
  const { getStudentActivities } = ENDPOINTS.student;

  if (!token?.accessToken) {
    console.error("No access token available");
    return null;
  }

  try {
    const request = await fetch(getStudentActivities, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }

    const response: Response<Activity[]> = await request.json();
    return response;
  } catch (error) {
    console.error("Error fetching student activities:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to fetch student activities",
    );
  }
};
