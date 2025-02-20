import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import useNoScroll from "@/components/hooks/useNoScroll";

const SuccessModal = ({
  isOpen,
  setIsOpen,
  successText,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  successText: string;
}) => {
  useNoScroll(isOpen);
  return (
    <Modal
      // appElement={
      //   (document.getElementById("__next") as HTMLElement) || undefined
      // }
      isOpen={isOpen}
      className="modal flex h-[259px] w-[360px] flex-col items-center justify-center rounded-[10px] bg-white md:w-[390px]"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Success Modal"
      ariaHideApp={false}
    >
      <Image
        src={"/guardian/sucess-gif.gif"}
        alt="success gif"
        width={150}
        height={134}
      />
      <p className="sansation mt-6 px-[20%] text-center text-sm text-[#1b1b1b]/80">
        {successText}
      </p>
    </Modal>
  );
};

export default SuccessModal;
