"use client";

import React from "react";
import Modal from "react-modal";
import { removeStudentAsGuardian } from "@/mutation";
import { toast } from "sonner";
import { useAllStudents } from "@/hook/swr";
import { Button } from "@/components/shared";

interface RemoveStudentModalProps {
  isOpen: boolean;
  onCancel: () => void;
  scid: string;
}

export const RemoveStudentModal = ({
  isOpen,
  onCancel,
  scid,
}: RemoveStudentModalProps) => {
  const { mutate } = useAllStudents();
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleRemoveStudent = async () => {
    setIsDeleting(true);
    try {
      const response = await removeStudentAsGuardian({ scid });
      if (response?.success) {
        toast.success(response?.message);
        onCancel();
        mutate();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration");
    } finally {
      setIsDeleting(false);
    }
  };

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
          This will permanently remove this guardian's access to the student's
          account. Are you sure you want to continue?
        </p>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Go Back
        </button>
        <Button
          onClick={handleRemoveStudent}
          content="Remove Anyway"
          loading={isDeleting}
          isDisabled={isDeleting}
          width="w-[250px]"
          color="bg-red-500"
          disabledColor="bg-red-200"
          className="w-[200px] flex-1 rounded px-4 py-2 text-xs text-white hover:bg-red-600"
        />
      </div>
    </Modal>
  );
};
