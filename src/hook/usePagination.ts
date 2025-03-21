"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQuizState } from "@/store"; // Adjust the import path

export const usePagination = (pageId: string) => {
  const router = useRouter();
  const { quizData, userAnswers } = useQuizState();

  const pageIdToNumberMap: Record<string, number> = useMemo(() => {
    const map: Record<string, number> = {};

    if (quizData?.questions) {
      quizData.questions.forEach((question, index) => {
        map[question.questionId] = index + 1;
      });
    }

    return map;
  }, [quizData?.questions]);

  const numberToPageIdMap: Record<number, string> = useMemo(() => {
    const map: Record<number, string> = {};

    if (quizData?.questions) {
      quizData.questions.forEach((question, index) => {
        map[index + 1] = question.questionId;
      });
    }

    return map;
  }, [quizData?.questions]);

  // Convert the pageId to a numeric currentPage
  const currentPage = pageIdToNumberMap[pageId] || 1;

  // Total number of pages (based on the number of questions)
  const totalPages = quizData?.questions?.length || 0;

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      // Find the pageId for the numeric page
      const targetPageId = Object.keys(pageIdToNumberMap).find(
        (key) => pageIdToNumberMap[key] === page,
      );
      if (targetPageId) {
        router.push(`/cbt/${targetPageId}`);
      }
    }
  };

  const getPageStyle = (page: number) => {
    const pageId = numberToPageIdMap[page];

    const baseStyle =
      "flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-200";

    if (userAnswers?.length > 0) {
      // Check if the page has a response
      const hasResponse = userAnswers.some(
        (answer) => answer.questionId === pageId,
      );

      // Find the highest page number with a response
      const lastResponsePage = Math.max(
        ...userAnswers.map((answer) => {
          // Find the page number for the answered questionId
          const answeredPageNumber = Object.entries(numberToPageIdMap).find(
            ([_, questionId]) => questionId === answer.questionId,
          )?.[0]; // Get the page number (key) from the map
          return answeredPageNumber ? parseInt(answeredPageNumber, 10) : 0;
        }),
      );

      if (hasResponse) {
        // Page has a response
        return `${baseStyle} bg-blue-500 text-white hover:bg-blue-600`;
      } else if (page > lastResponsePage) {
        // Page is ahead of the last response's page
        return `${baseStyle} bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700`;
      } else {
        // Page is behind or in-between responses and does not have a response
        return `${baseStyle} border-red-500 hover:border-red-600`;
      }
    }

    // Default styling when no responses or current page
    return `${baseStyle} ${
      page === currentPage
        ? "border-blue-300 bg-blue-50 text-blue-600"
        : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    } border-gray-300`;
  };

  return {
    totalPages,
    handlePageChange,
    getPageStyle,
    currentPage,
  };
};
