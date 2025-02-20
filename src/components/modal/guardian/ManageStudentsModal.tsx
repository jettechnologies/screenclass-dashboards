import React from "react";
import Modal from "react-modal";
import { nunito } from "@/components/shared/fonts";
import Link from "next/link";
import useNoScroll from "@/components/hooks/useNoScroll";

const links = [
  {
    id: 1,
    name: "Student's Performance",
    href: "/guardian/student-performance/123",
  },
  {
    id: 2,
    name: "Upgrade Student",
    href: "/guardian/subscriptions",
  },
  {
    id: 3,
    name: "Student's Activities",
    href: "/guardian/student-activities",
  },
  {
    id: 4,
    name: "View Profile",
    href: "/guardian/student-profile/123",
  },
];

const ManageStudentsModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
            href={link.href}
            className={`${nunito.className} text-[13px] text-[rgba(27,27,27,0.60)]`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </Modal>
  );
};

export default ManageStudentsModal;
