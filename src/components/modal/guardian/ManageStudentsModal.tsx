import React from "react";
import Modal from "react-modal";
import { nunito } from "@/components/shared/fonts";
import Link from "next/link";
import useNoScroll from "@/components/hooks/useNoScroll";

type ManageStudentsModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openRemoveStudentModal: () => void;
  studentId: string;
};

const links = [
  {
    id: 1,
    name: "Student's Performance",
    href: "/dashboard/guardian/student-performance",
  },
  {
    id: 2,
    name: "Student's Activities",
    href: "/dashboard/guardian/student-activities",
  },
];

const ManageStudentsModal = ({
  isOpen,
  setIsOpen,
  openRemoveStudentModal,
  studentId,
}: ManageStudentsModalProps) => {
  useNoScroll(isOpen);
  return (
    <Modal
      // appElement={
      //   (document.getElementById("__next") as HTMLElement) || undefined
      // }
      isOpen={isOpen}
      className="modal bg-white pb-4 pl-7 pr-9 pt-6"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Register Student Modal"
      ariaHideApp={false}
    >
      <h2 className={`${nunito.className} text-xs font-bold text-[#407BFF]`}>
        Manage Students
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`${link.href}/${studentId}`}
            className={`${nunito.className} text-[13px] text-[rgba(27,27,27,0.60)]`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        className={`${nunito.className} mt-3 bg-transparent text-[13px] capitalize text-[rgba(27,27,27,0.60)] hover:bg-transparent focus:bg-transparent active:bg-transparent`}
        onClick={() => {
          openRemoveStudentModal();
          setIsOpen(false);
        }}
      >
        remove student account
      </button>
    </Modal>
  );
};

export default ManageStudentsModal;
