import React from "react";
import Modal from "react-modal";

interface QuizSubmissionModalProps {
  isOpen: boolean;
  unansweredCount: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export const QuizSubmissionModal = ({
  isOpen,
  unansweredCount,
  onConfirm,
  onCancel,
}: QuizSubmissionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      shouldCloseOnOverlayClick={true}
      contentLabel="Incomplete Quiz Warning"
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      className="relative w-[90%] max-w-[450px] rounded-lg bg-white p-6 shadow-lg outline-none"
    >
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-red-600">Wait!</h2>
        <p className="mt-2 text-gray-700">
          You have <span className="font-bold">{unansweredCount}</span>{" "}
          unanswered question
          {unansweredCount !== 1 ? "s" : ""}. Are you sure you want to submit?
        </p>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Go Back
        </button>
        <button
          onClick={() => {
            onConfirm;
            onCancel;
          }}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Submit Anyway
        </button>
      </div>
    </Modal>
  );
};
