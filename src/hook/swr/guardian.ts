import useSWR, { mutate } from "swr";
import {
  fetchAllStudentActivities,
  fetchStudentActivity,
  fetchAllStudents,
  fetchGuardianProfile,
  fetchSingleStudent,
  fetchStudentQuizPerformance,
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

export const useAllStudentActivities = () => {
  const key = "all-student-activities";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchAllStudentActivities(),
    swrOptions,
  );

  const transformedData = data?.data.map(
    (activity): { id: string; activity: string; createdAt: string } => ({
      id: activity._id,
      activity: activity.message,
      createdAt: activity.createdAt,
    }),
  );

  return {
    error,
    isLoading,
    data: transformedData,
  };
};

export const useStudentActivity = ({ studentId }: { studentId: string }) => {
  const key = "student-activities";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchStudentActivity(studentId),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
  };
};

export const useStudentQuizPerformance = ({
  studentId,
}: {
  studentId: string;
}) => {
  const key = "student-quiz-performance";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchStudentQuizPerformance(studentId),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
  };
};
