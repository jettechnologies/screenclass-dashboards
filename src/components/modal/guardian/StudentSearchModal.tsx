"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import StudentOverviewModal from "./StudentOverviewModal";
import useNoScroll from "@/components/hooks/useNoScroll";

const StudentSearchModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useNoScroll(isOpen);
  const [showStudentOverviewModal, setShowStudentOverviewModal] =
    useState(false);
  return (
    <Modal
      // appElement={
      //   (document.getElementById("__next") as HTMLElement) || undefined
      // }
      isOpen={isOpen}
      className="modal w-[360px] bg-SC-Bland px-8 pb-14 pt-8 md:w-[385px]"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Search Student Modal"
      ariaHideApp={false}
    >
      <StudentOverviewModal
        isOpen={showStudentOverviewModal}
        setIsOpen={setShowStudentOverviewModal}
      />
      <h2 className="segoe">Search for Student</h2>
      <form
        onSubmit={(e) => (
          e.preventDefault(), setShowStudentOverviewModal(true)
        )}
        className="mt-6"
      >
        <label htmlFor="scid" className="segoe text-sm text-[#1b1b1b]/90">
          Enter Student mobile number or SCID
        </label>
        <input
          type="text"
          className="input-field mt-3 pl-6"
          placeholder="SC00000"
        />
        <div className="mt-10 grid grid-cols-2 gap-3">
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="segoe h-[30px] rounded border border-SC-Brand-Blue text-[15px] font-semibold text-SC-Brand-Blue"
          >
            Cancel
          </button>
          <button className="segoe h-[30px] rounded bg-SC-Brand-Blue text-[15px] font-semibold text-white">
            Search
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentSearchModal;
