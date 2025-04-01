"use client";

import React from "react";
import Modal from "react-modal";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useNoScroll from "@/components/hooks/useNoScroll";
import { QuizHistoryType } from "@/utils/validators";

const QUIZ_PIE_COLORS = ["#AA10B7", "#1FDCDC", "#FFC107"];
interface PerformanceOverviewModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  quizHistory: QuizHistoryType;
}

const PerformanceOverviewModal = ({
  isOpen,
  setIsOpen,
  quizHistory,
}: PerformanceOverviewModalProps) => {
  useNoScroll(isOpen);

  if (!quizHistory) return null;

  const { quizTitle, totalQuestions, correctAnswers, scorePercentage } =
    quizHistory;
  const failedCount = totalQuestions - correctAnswers;
  const passedPercentage = Math.round(scorePercentage);
  const failedPercentage = 100 - passedPercentage;

  const pieData = [
    { name: "Passed", value: correctAnswers },
    { name: "Failed", value: failedCount },
  ];

  const getStatus = () => {
    if (scorePercentage >= 70) return "Passed";
    if (scorePercentage >= 50) return "Fair Performance";
    return "Failed";
  };

  const getRemarks = () => {
    if (scorePercentage >= 80) return "Excellent performance! Keep it up!";
    if (scorePercentage >= 70)
      return "Good performance, but there's room for improvement";
    if (scorePercentage >= 50)
      return "Average performance. You need to study more";
    return "Poor performance. Please review the material and try again";
  };

  return (
    <Modal
      isOpen={isOpen}
      className="modal w-[360px] rounded-[10px] bg-white py-7 md:w-[390px]"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Performance Overview Modal"
      ariaHideApp={false}
    >
      <h2 className="sansation px-[20%] text-center text-sm text-[#1B1B1B]/80">
        {quizTitle} Performance
      </h2>

      <div className="flex flex-col items-center justify-center">
        <div className="mt-6 h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={QUIZ_PIE_COLORS[index]} />
                ))}
              </Pie>
              {/* <Legend /> */}
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-2 flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full bg-[#1FDCDC]" />
            <p className="sansation text-[13px] text-[#1B1B1B]">
              Failed: {failedCount} ({failedPercentage}%)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full bg-[#AA10B7]" />
            <p className="sansation text-[13px] text-[#1B1B1B]">
              Passed: {correctAnswers} ({passedPercentage}%)
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-[#1B1B1B]/80">
          <span className="sansation text-SC-Brand-Blue">Status</span>:{" "}
          {getStatus()}
        </p>

        <div className="mt-4 flex px-[10%] text-sm text-[#1B1B1B]/80">
          <p className="sansation m-0 text-SC-Orange">Remarks:</p>
          <p className="sansation m-0 pl-1 text-left text-[#1B1B1B]/80">
            {getRemarks()}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default PerformanceOverviewModal;
