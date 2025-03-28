import {
  fetchStudentProfile,
  fetchDashboardStatistics,
  fetchSubscriptionHistory,
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

  return {
    error,
    isLoading,
    courseProgress,
    quizHistory,
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
