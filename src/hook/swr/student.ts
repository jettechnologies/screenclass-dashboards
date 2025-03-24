import { fetchStudentProfile } from "@/queries";
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
