"use client";

import React from "react";
import { QuizQuestion } from "@/features/cbt";
import { useQuizActions } from "@/store";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const { getQuizById } = useQuizActions();

  // Fetch the current quiz and question
  const currentQuiz = getQuizById(id);
  const currentQuestion = currentQuiz?.quiz;

  return (
    <div>
      {currentQuestion ? (
        <QuizQuestion currentQuestion={currentQuestion} pageId={id} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
