import React from "react";
import Modal from "react-modal";
import BankCodeCard from "@/components/guardian/subscriptions/bank-code-card";
import FirstBankLogo from "../../../../public/guardian/first-bank.svg";
import GTBankLogo from "../../../../public/guardian/gtbank-logo.svg";
import WemaBankLogo from "../../../../public/guardian/wema-logo.svg";
import useNoScroll from "@/components/hooks/useNoScroll";

const banksCode = [
  {
    id: 1,
    img: FirstBankLogo,
    code: "*894*200*2034889408#",
  },
  {
    id: 2,
    img: GTBankLogo,
    code: "*737*200*0486803862#",
  },
  {
    id: 3,
    img: GTBankLogo,
    code: "*737*200*0486803862#",
  },
  {
    id: 4,
    img: GTBankLogo,
    code: "*737*200*0486803862#",
  },
];

const UssdCodeModal = ({
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
      className="modal w-[360px] bg-white px-7 py-8 md:w-[467px] md:px-14 md:py-11"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="USSD Code Modal"
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
      <div className="mt-7 flex flex-col gap-8">
        {banksCode.map((bank) => (
          <BankCodeCard key={bank.id} imgSrc={bank.img} code={bank.code} />
        ))}
      </div>
      <p className="sansation my-5 text-center text-[13px] text-black">
        For payment into banks listed below, pay into First bank account.
      </p>
      <div className="flex flex-col gap-8">
        {Array.from({ length: 2 }, (_, i) => (
          <BankCodeCard
            key={i}
            imgSrc={WemaBankLogo}
            code="*737*200*0486803862#"
          />
        ))}
      </div>
    </Modal>
  );
};

export default UssdCodeModal;
