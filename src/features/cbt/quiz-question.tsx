"use client";

import React, { useState, useEffect } from "react";
import {
  QuizContainer,
  Pagination,
  CheckBox,
} from "@/components/cbt";
import CalculatorModal from "@/components/modal/CBTExamsCalculator";
import Image from "next/image";

type Question = {
  options: string[];
  answer: string;
  question: string;
};

type ResponseActions = {
  recordResponse: (value: string) => void;
  updateResponse: (value: string) => void;
  deleteResponse: (id: number) => void;
};

interface QuizQuestionProps {
  currentQuestion: Question;
  currentPage: number;
  totalQuestions: number;
  quizDuration: number;
  responses: { id: number; response: string }[];
  responseActions: ResponseActions;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  currentQuestion,
  currentPage,
  totalQuestions,
  quizDuration,
  responses,
  responseActions,
}) => {
  const { answer, options, question } = currentQuestion;
  console.log(answer);
  // const [ currentAnswer, setCurrentAnswer ]
  const [selectedOption, setSelectedOption] = useState<string>(
    () =>
      responses.find((response) => response.id === currentPage)?.response || "",
  );

  const [remainingTime, setRemainingTime] = useState<number>(quizDuration);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Countdown Timer Logic
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

  // const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   if (value?.toLowerCase() !== selectedOption?.toLowerCase()) {
  //     responseActions.updateResponse(value);
  //   }
  //   console.log(value);

  //   setSelectedOption(value);
  //   responseActions.recordResponse(value);
  // };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isStored = responses.some((response) => response.id === currentPage);

    console.log(value);

    if (value?.toLowerCase() === selectedOption?.toLowerCase()) {
      console.log("running");
      setSelectedOption("");
      responseActions.deleteResponse(currentPage);
    } else if (isStored) {
      responseActions.updateResponse(value);
      setSelectedOption(value);
      console.log("is running when true");
    } else {
      setSelectedOption(value);
      responseActions.recordResponse(value);
      console.log("is running when false");
    }

    console.log(value, isStored);
  };

  return (
    <QuizContainer
      title="Importance of Recreation"
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
            // <RadioButton
            //   key={option}
            //   name={option}
            //   label={option}
            //   value={option}
            //   index={index}
            // checked={selectedOption === option}
            //   onChange={handleOptionChange}
            // />
            <CheckBox
              key={option}
              name={option}
              label={option}
              value={option}
              index={index}
              isChecked={selectedOption === option}
              onChange={handleOptionChange}
            />
          ))}
        </div>

        {/* Submit Button Section */}
        {/* <div className="flex w-full justify-end px-4">
          <button
            type="button"
            className="flex h-12 w-28 items-center justify-center rounded-lg border-2 border-black bg-blue-400 text-sm font-medium hover:bg-blue-500 sm:w-32 md:w-[10rem]"
          >
            Submit
          </button>
        </div> */}

        {/* Pagination Section */}
        <div className="absolute bottom-6 left-0 grid w-full place-items-center px-4">
          <Pagination
            totalPages={totalQuestions}
            currentPage={currentPage}
            responses={responses}
          />
        </div>

        {/* Calculator Modal */}
        <CalculatorModal
          isOpen={isCalculatorOpen}
          setIsOpen={setIsCalculatorOpen}
        />
      </div>
    </QuizContainer>
  );
};
