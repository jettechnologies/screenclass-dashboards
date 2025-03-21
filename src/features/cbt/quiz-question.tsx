"use client";

import React, { useState, useEffect } from "react";
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
import { Button } from "@/features/landing/components/form";

interface QuizQuestionProps {
  currentQuestion: Question;
  pageId: string;
}

export const QuizQuestion = ({
  currentQuestion,
  pageId,
}: QuizQuestionProps) => {
  const { questionId, question, options } = currentQuestion;
  const { updateUserAnswer, addUserAnswer, resetQuiz } = useQuizActions();
  const { quizData, userAnswers } = useQuizState();
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(isSubmitting);

  const totalQuestions = quizData?.questions?.length || 0;
  const quizDuration = quizData?.duration || 0;
  const duration = quizDuration * 60;

  // Find the current response for the question
  const currentResponse =
    userAnswers.find((r) => r.questionId === questionId)?.selectedOptionId ||
    "";
  const [selectedOption, setSelectedOption] = useState<string>(currentResponse);

  // Timer logic
  const [remainingTime, setRemainingTime] = useState<number>(duration);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [remainingTime]);

  // Format time to "hh:mm:ss"
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${secs}`;
  };

  const handleOptionChange = (optionId: string) => {
    console.log(optionId);

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
      timeSpent: remainingTime,
      answers: userAnswers,
    };
    const response = await submitQuizAttempt(data);

    if (response?.success) {
      toast.success(response?.message);
      setQuizResult(response?.data);
      setIsModalOpen(true);
      setIsSubmitting(false);
    } else {
      toast.error(response?.message);
      setIsSubmitting(false);
    }
  };

  const handleRedirect = () => {
    resetQuiz();
    setIsModalOpen(false);
    redirect("/student");
  };

  return (
    <>
      <Toaster duration={2000} position="top-right" richColors />

      <QuizContainer
        title="Quiz Question"
        timeRemaining={formatTime(remainingTime)}
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
              <Button
                isDisabled={remainingTime === 0}
                loading={isSubmitting}
                onClick={handleSubmitQuiz}
                content="submit quiz"
              />
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
        </div>
      </QuizContainer>
    </>
  );
};
