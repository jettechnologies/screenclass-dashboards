"use client";

import React, { useState } from "react";
import { QuizContainer, CheckBox } from "@/components/cbt";
import { Pagination } from "@/components/cbt";
import CalculatorModal from "@/components/modal/CBTExamsCalculator";
import Image from "next/image";
import { Question } from "@/utils/validators";
import { submitQuizAttempt } from "@/mutation";
import { Toaster, toast } from "sonner";
import { useQuizActions, useQuizState } from "@/store";
import { QuizResult } from "@/utils/validators";
import { redirect } from "next/navigation";
import { QuizResultModal } from "@/components/modal/quiz-result-modal";
import { Button } from "@/components/shared";
import { useTimer } from "react-timer-hook";
import { QuizSubmissionModal } from "@/components/modal/confirm-quiz-submission";
import { quizSessionData, removeSessionItem, QUIZ_STORAGE_KEY } from "@/utils";

interface QuizQuestionProps {
  currentQuestion: Question;
  pageId: string;
}

export const QuizQuestion = ({
  currentQuestion,
  pageId,
}: QuizQuestionProps) => {
  const { subject } = quizSessionData();
  const { questionId, question, options } = currentQuestion;
  const { updateUserAnswer, addUserAnswer, resetQuiz } = useQuizActions();
  const { quizData, userAnswers } = useQuizState();
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQuizSubmission, setShowQuizSubmission] = useState(false);
  const toastId = crypto.randomUUID();

  const totalQuestions = quizData?.questions?.length || 0;
  const quizDuration = quizData?.duration || 0;
  const duration = quizDuration >= 60 ? quizDuration * 3600 : quizDuration * 60;

  const currentTime = new Date();
  currentTime.setSeconds(currentTime.getSeconds() + duration);

  const isAnswered = userAnswers.length === quizData?.questions?.length;
  const unansweredCount = Math.max(
    0,
    (quizData?.questions?.length || 0) - (userAnswers?.length || 0),
  );
  // Find the current response for the question
  const currentResponse =
    userAnswers.find((r) => r.questionId === questionId)?.selectedOptionId ||
    "";
  const [selectedOption, setSelectedOption] = useState<string>(currentResponse);

  const { totalSeconds, seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp: currentTime,
    onExpire: () => console.warn("onExpire called"),
    interval: 1000,
  });

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOptionChange = (optionId: string) => {
    if (currentResponse) {
      updateUserAnswer(questionId, optionId);
    } else {
      addUserAnswer({ questionId, selectedOptionId: optionId });
    }
    setSelectedOption(optionId);
  };

  const handleSubmitQuiz = async () => {
    setIsSubmitting(true);
    const data = {
      attemptId: quizData?.attemptId || "",
      timeSpent: totalSeconds,
      answers: userAnswers,
    };
    const response = await submitQuizAttempt(data);

    if (response?.success) {
      toast.success(response?.message, { id: toastId });
      setQuizResult(response?.data);
      setIsModalOpen(true);
      setIsSubmitting(false);
    } else {
      toast.error(response?.message, { id: toastId });
      setIsSubmitting(false);
    }
  };

  const handleRedirect = () => {
    resetQuiz();
    setIsModalOpen(false);
    removeSessionItem(QUIZ_STORAGE_KEY);
    redirect("/dashboard/student");
  };

  return (
    <>
      <Toaster duration={2000} position="top-right" richColors />

      <QuizContainer
        title="Quiz Question"
        timeRemaining={`${hours}:${minutes}:${seconds}`}
        className="relative"
      >
        <div className="flex w-full flex-col gap-y-5 px-4 py-6 md:p-10">
          {/* Question and Calculator Section */}
          <div className="flex w-full flex-col items-start gap-y-4 bg-gray-300 p-4 md:flex-row md:items-center md:gap-x-4">
            {/* Question Section */}
            <div className="flex-1 p-4 md:p-6">
              <p className="text-sm font-semibold text-black first-letter:capitalize md:text-base">
                {question}
              </p>
            </div>

            {/* Calculator Button */}
            <div className="flex h-fit justify-start max-sm:self-end md:justify-end">
              {!subject.includes("English Language") ? (
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="rounded-lg bg-white p-2 shadow-md"
                >
                  <Image
                    src="/icons/calculator-icon.svg"
                    alt="calculator icon"
                    width={30}
                    height={30}
                    className="md:h-[40px] md:w-[40px]"
                  />
                </button>
              ) : null}
            </div>
          </div>

          {/* Options Section */}
          <div className="mt-5 flex flex-col p-2 shadow-sm">
            {options.map((option, index) => (
              <CheckBox
                key={option._id}
                index={index}
                name={option.text}
                label={option.text}
                value={option._id}
                isChecked={selectedOption === option._id}
                onChange={() => handleOptionChange(option._id)}
              />
            ))}
          </div>

          {/* Pagination Section */}
          <div className="absolute bottom-6 left-0 grid w-full place-items-center px-4">
            <Pagination pageId={pageId} totalPages={totalQuestions}>
              <div className="h-12 w-28 md:w-[10rem]">
                <Button
                  isDisabled={totalSeconds === 0 || !isRunning}
                  loading={isSubmitting}
                  onClick={
                    isAnswered
                      ? handleSubmitQuiz
                      : () => setShowQuizSubmission(true)
                  }
                  content="submit quiz"
                  disabledColor="bg-blue-300"
                  color="bg-blue-500"
                  className="h-12 w-28 items-center justify-center rounded-lg bg-blue-500 text-xs font-medium hover:bg-blue-600 sm:w-32 md:w-[10rem]"
                />
              </div>
            </Pagination>
          </div>

          {/* Calculator Modal */}
          <CalculatorModal
            isOpen={isCalculatorOpen}
            setIsOpen={setIsCalculatorOpen}
          />

          {/* Quiz Result Modal */}
          <QuizResultModal
            isOpen={isModalOpen}
            onRequestClose={handleRedirect}
            quizResult={quizResult!}
          />

          <QuizSubmissionModal
            isOpen={showQuizSubmission}
            onCancel={() => setShowQuizSubmission(false)}
            onConfirm={handleSubmitQuiz}
            unansweredCount={unansweredCount}
          />
        </div>
      </QuizContainer>
    </>
  );
};
