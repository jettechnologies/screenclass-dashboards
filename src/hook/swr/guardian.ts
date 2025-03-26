import useSWR, { mutate } from "swr";
import {
  fetchAllActivities,
  fetchAllStudents,
  fetchGuardianProfile,
  fetchSingleStudent,
} from "@/queries";
import { swrOptions } from "@/utils";

export const useGuardianProfile = () => {
  const key = "guardian-profile";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchGuardianProfile(),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
    mutate: () => mutate(key),
  };
};

export const useAllStudents = () => {
  const key = "all-students";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchAllStudents(),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
    mutate: () => mutate(key),
  };
};

export const useSingleStudent = (studentId: string) => {
  const key = ["single-students", studentId];
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchSingleStudent(studentId),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
  };
};

export const useGuardianActivities = () => {
  const key = "all-activities";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchAllActivities(),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
  };
};
