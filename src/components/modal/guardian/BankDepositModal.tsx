import useNoScroll from "@/components/hooks/useNoScroll";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const BankDepositModal = ({
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
      className="modal w-[360px] rounded-[10px] bg-white px-3 pb-3 pt-11 md:w-[390px]"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Bank Deposit Modal"
      ariaHideApp={false}
    >
      <h2 className="sansation text-center text-[15px] text-black">
        <span className="font-bold text-SC-Blue">Account Name:</span> Martad
        Education & Skills Development Ltd
      </h2>
      <p className="sansation mt-4 text-sm font-bold text-black">
        Instructions:
      </p>
      <ul className="mt-3 space-y-3 pl-4">
        <li className="sansation list-outside list-disc text-sm text-[#1b1b1b]/90">
          Make deposit to the account provided above or Make Payment via USSD
          code.
        </li>
        <li className="sansation list-outside list-disc text-sm text-[#1b1b1b]/90">
          Copy or Screenshot payment receipt
        </li>
        <li className="sansation list-outside list-disc text-sm text-[#1b1b1b]/90">
          Send the payment receipt to +234 704 330 3000 0r +234 703 330 3000 via
          SMS or WhatsApp.
        </li>
      </ul>
      <div className="mt-4 flex items-center gap-3">
        <Image
          src={"/guardian/first-bank.svg"}
          alt="first bank logo"
          width={50}
          height={50}
        />
        <div>
          <p className="text-sm text-black">
            <span className="sansation font-bold">Account Number:</span>{" "}
            2034889408
          </p>
          <p className="text-sm text-black">
            <span className="sansation font-bold">USSD Code:</span> *894#
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default BankDepositModal;
