"use client";
import PerformanceOverviewModal from "@/components/modal/guardian/PerformanceOverviewModal";
import React, { useState } from "react";
import { QuizHistoryType } from "@/utils/validators";
import { format } from "date-fns";

const PerformanceCard = ({ quizHistory }: { quizHistory: QuizHistoryType }) => {
  const [showOverviewModal, setShowOverviewModal] = useState(false);

  const status = quizHistory.scorePercentage >= 40 ? "passed" : "failed";

  return (
    <>
      <PerformanceOverviewModal
        isOpen={showOverviewModal}
        setIsOpen={setShowOverviewModal}
        quizHistory={quizHistory}
      />
      <div
        onClick={() => setShowOverviewModal(true)}
        className="flex cursor-pointer items-center justify-between bg-white py-3 pl-4 pr-[18px]"
        style={{
          boxShadow: "0px 12px 12px -12px rgba(0, 0, 0, 0.20)",
        }}
      >
        <div>
          <h3 className={`sansation text-sm font-bold text-SC-Brand-Blue`}>
            {quizHistory.quizTitle}
          </h3>
          <p className={`sansation text-[13px] text-black`}>
            Introduction to Science
          </p>
          <div className="flex w-fit space-x-2">
            <p className="sansation mt-3 text-xs text-[rgba(27,27,27,0.70)]">
              {format(new Date(quizHistory.submittedAt), "dd MMMM, yyyy")}
            </p>
            <p className="sansation mt-3 text-xs text-[rgba(27,27,27,0.70)]">
              {format(new Date(quizHistory.submittedAt), "h:mm a")}
            </p>
          </div>
          <p className="sansation text-xs text-[rgba(27,27,27,0.70)]">
            Total Questions: <span>{quizHistory.totalQuestions}</span> Passed:{" "}
            <span>{quizHistory.correctAnswers}</span> Failed:{" "}
            <span>
              {Math.ceil(
                quizHistory.totalQuestions - quizHistory.correctAnswers,
              )}
            </span>
          </p>
        </div>
        <div>
          <p className="sansation text-center text-[13px] text-black">
            {quizHistory.scorePercentage}%
          </p>
          <div
            className={`sansation mt-4 h-[22px] ${status === "passed" ? "bg-[#CBFAC4] text-[#098315]" : "bg-[#FFD8D8] text-[#E41515]"} flex items-center px-4 text-xs capitalize`}
          >
            {status}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceCard;
