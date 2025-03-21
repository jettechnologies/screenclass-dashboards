import React from "react";
import Modal from "react-modal"; // Assuming you're using react-modal
import { QuizResult } from "@/utils/validators"; // Adjust the import path for your QuizResult type

// Define props for the modal
interface QuizResultModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  quizResult: QuizResult | null;
}

export const QuizResultModal = ({
  isOpen,
  onRequestClose,
  quizResult,
}: QuizResultModalProps) => {
  return (
    <Modal
      appElement={
        (document.getElementById("__next") as HTMLElement) || undefined
      }
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Quiz Result Modal"
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      className="relative w-[350px] animate-calculator-fade-in rounded-lg bg-white p-4 shadow-lg outline-none md:p-6"
    >
      {quizResult ? (
        <>
          <div className="mb-4 border-b pb-2">
            <h2 className="text-xl font-semibold">Quiz Result</h2>
          </div>

          {/* Modal Body */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Total Questions:</span>
              <span>{quizResult.totalQuestions}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Answered:</span>
              <span>{quizResult.answeredCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Missed:</span>
              <span>{quizResult.missedCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Correct Answers:</span>
              <span>{quizResult.correctAnswers}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Wrong Answers:</span>
              <span>{quizResult.wrongAnswers}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Score:</span>
              <span>{quizResult.score}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Score Percentage:</span>
              <span>{quizResult.scorePercentage}%</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Time Spent:</span>
              <span>
                {Math.floor(quizResult.timeSpent / 60)}m{" "}
                {quizResult.timeSpent % 60}s
              </span>
            </div>
          </div>
        </>
      ) : null}

      {/* Modal Footer */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onRequestClose}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default QuizResultModal;
