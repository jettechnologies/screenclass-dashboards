// import { QuizSummary } from "@/features/cbt";
// import React from "react";
// import { fetchQuizSummary } from "@/queries";

// const Page = async ({
//   searchParams,
// }: {
//   searchParams: Promise<{ subtopic?: string }>;
// }) => {
//   const subtopicId = (await searchParams).subtopic ?? "";
//   const quizSummary = await fetchQuizSummary(subtopicId);

//   return (
//     <div>
//       <QuizSummary quizSummary={quizSummary} />
//     </div>
//   );
// };

// export default Page;

import { QuizSummary } from "@/features/cbt";
import { fetchQuizSummary } from "@/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz Summary",
};

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ subtopic?: string }>;
}) => {
  const subtopicId = (await searchParams).subtopic ?? "";

  if (!subtopicId) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        Error: Missing subtopic ID
      </div>
    );
  }

  try {
    const quizSummary = await fetchQuizSummary(subtopicId);

    if (!quizSummary) {
      return (
        <div className="container mx-auto p-4 text-yellow-600">
          No quiz data found for this subtopic
        </div>
      );
    }

    return (
      <div className="container mx-auto p-4">
        <QuizSummary quizSummary={quizSummary} />
      </div>
    );
  } catch (error) {
    console.error("Failed to load quiz summary:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return (
      <div className="container mx-auto p-4 text-red-500">
        <h2 className="text-xl font-bold">Failed to load quiz summary</h2>
        <p className="mt-2">{errorMessage}</p>
        <p className="mt-4 text-sm text-gray-500">
          Please try again later or contact support if the problem persists.
        </p>
      </div>
    );
  }
};

export default Page;
