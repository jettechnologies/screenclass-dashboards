"use client";

import React from "react";
import { Container } from "@/components/cbt";
import { useRouter } from "next/navigation";
import { QuizSummaryType } from "@/utils/validators";
import { attemptQuiz } from "@/mutation/quiz";
import { useQuizActions } from "@/store";

export const QuizSummary = ({
  quizSummary,
}: {
  quizSummary: QuizSummaryType | null;
}) => {
  const quizId = quizSummary?.quizId ?? "";
  const { setQuizData } = useQuizActions();

  const router = useRouter();
  const handleQuizAttempt = async () => {
    if (quizId === "") return;

    const quiz = await attemptQuiz(quizId);

    if (quiz) {
      const firstQuestionId = quiz.questions[0].questionId;
      setQuizData(quiz);
      router.push(`/cbt/${firstQuestionId}`);
    }
  };

  return (
    <Container title="quiz summary" height="h-[calc(100dvh-82px)]">
      <div className="grid place-items-center p-4">
        <div className="mt-10 w-full md:w-1/2">
          <ul className="mb-6 w-full">
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                quiz name
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">
                {quizSummary?.quizName}
              </p>
            </li>
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                number of questions
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">
                {quizSummary?.totalQuestions}
              </p>
            </li>
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                question<span className="lowercase">(s)</span> per page
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">1</p>
            </li>
            <li className="flex w-full justify-between border-b border-dashed border-black py-2">
              <p className="text-sm font-normal capitalize text-black">
                quiz duration
              </p>
              <p className="text-sm font-normal uppercase text-SC-Blue">
                {quizSummary?.duration} minutes
              </p>
            </li>
            <li className="mt-6 w-full border border-SC-Orange bg-orange-50 px-4 py-2">
              <p className="text-sm font-normal text-gray-700">
                Hi,{" "}
                <span className="font-medium capitalize text-SC-Blue">
                  malcom dunamis
                </span>
                , kindly read all questions carefully and choose the appropriate
                answer.
              </p>
            </li>
          </ul>
          <button
            type="button"
            className="rounded-lg bg-SC-Blue px-5 py-2 text-base font-semibold capitalize text-white"
            onClick={handleQuizAttempt}
          >
            start quiz now!
          </button>
        </div>
      </div>
    </Container>
  );
};
