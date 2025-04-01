import { QuizSummary } from "@/features/cbt";
import React from "react";
import { fetchQuizSummary } from "@/queries";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ subtopic?: string }>;
}) => {
  const subtopicId = (await searchParams).subtopic ?? "";
  const quizSummary = await fetchQuizSummary(subtopicId);

  return (
    <div>
      <QuizSummary quizSummary={quizSummary} />
    </div>
  );
};

export default Page;
