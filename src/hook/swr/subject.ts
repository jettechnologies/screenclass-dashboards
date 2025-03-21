import useSWR, { mutate } from "swr";
import {
  fetchAllSubjects,
  fetchAllTopics,
  fetchAllSubtopics,
} from "@/queries/get-subject";

const swrOptions = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export const useAllSubjects = () => {
  const key = "subjects";
  const { data, error, isLoading } = useSWR(key, fetchAllSubjects, swrOptions);

  return {
    error,
    isLoading,
    data: data?.data || [],
    mutate: () => mutate(key),
  };
};

export const useAllTopics = (subjectId?: string) => {
  const key = subjectId ? `topics-${subjectId}` : null;
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchAllTopics(subjectId!),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data || [],
    mutate: () => mutate(key),
  };
};

export const useAllSubtopics = (topicId?: string) => {
  const key = topicId ? `subtopics-${topicId}` : null;
  const { data, error, isLoading } = useSWR(
    key,
    () => fetchAllSubtopics(topicId!),
    swrOptions,
  );

  return {
    error,
    isLoading,
    data: data?.data || [],
    mutate: () => mutate(key),
  };
};
