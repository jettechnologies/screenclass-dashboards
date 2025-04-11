import useSWR from "swr";
import { swrOptions } from "@/utils";
import { fetchAllSubscriptions } from "@/queries";

export const useFetchAllSubscriptions = () => {
  const key = "student-profile";
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchAllSubscriptions(),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data,
  };
};
