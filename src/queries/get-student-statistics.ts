import { ENDPOINTS, getAuthCookie } from "@/utils/constants";
import { Response, ProgressData, Subscription } from "@/utils/validators";

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
