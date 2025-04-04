import {
  fetchStudentProfile,
  fetchDashboardStatistics,
  fetchSubscriptionHistory,
  fetchStudentActivities,
  fetchVideoUrl,
} from "@/queries";
import useSWR, { mutate } from "swr";
import { swrOptions } from "@/utils";

export const useStudentProfile = () => {
  const key = "student-profile";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchStudentProfile(),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
    mutate: () => mutate(key),
  };
};

export const useDashboardStatistics = () => {
  const key = "dashboard-statistics";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchDashboardStatistics(),
    swrOptions,
  );

  const courseProgress = data?.data?.courseProgress;
  const quizHistory = data?.data?.quizHistory;
  const completedCourseCount = data?.data?.completedCourseCount;

  return {
    error,
    isLoading,
    courseProgress,
    quizHistory,
    completedCourseCount,
    mutate: () => mutate(key),
  };
};

export const useFetchSubscriptionHistory = () => {
  const key = "subscription-history";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchSubscriptionHistory(),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
    mutate: () => mutate(key),
  };
};

export const useFetchStudentActivities = () => {
  const key = "student-activity";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchStudentActivities(),
    swrOptions,
  );

  return {
    error,
    isLoading,
    activities: data?.data,
  };
};

// export const useFetchVideoUrl = (subtopicId: string) => {
//   const key = "video-url";
//   console.log(subtopicId, "subtopicId in hook");
//   const { data, error, isLoading } = useSWR(
//     key,
//     () => fetchVideoUrl(subtopicId),
//     swrOptions,
//   );

//   console.log(data, "fetched video data");

//   return {
//     error,
//     isLoading,
//     data: data?.data,
//   };
// };

export const useFetchVideoUrl = (subtopicId: string) => {
  const key = subtopicId ? `video-url-${subtopicId}` : null;

  const { data, error, isLoading, isValidating } = useSWR(
    key,
    () => {
      if (!subtopicId) throw new Error("No subtopic ID provided");
      return fetchVideoUrl(subtopicId);
    },
    {
      ...swrOptions,
      errorRetryCount: 2,
    },
  );

  return {
    error,
    isLoading: isLoading || isValidating,
    data,
    isError: !!error,
  };
};
