"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import PaymentCard from "../../guardian/subscriptions/payment-card";
import CardDetailsModal from "./CardDetailsModal";
import BankDepositModal from "./BankDepositModal";
import UssdCodeModal from "./UssdCodeModal";
import useNoScroll from "@/components/hooks/useNoScroll";

const paymentModes = [
  "Debit Card (PayStack)",
  "Flutter wave",
  "Bank Deposit",
  "USSD Code",
];

type PaymentMode = (typeof paymentModes)[number];

const PaymentModesModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useNoScroll(isOpen);
  const [showCardDetailsModal, setShowCardDetailsModal] = useState(false);
  const [showBankDepositModal, setShowBankDepositModal] = useState(false);
  const [showUssdCodeModal, setShowUssdCodeModal] = useState(false);

  const handlePaymentModeClick = (mode: PaymentMode) => {
    if (mode === "Debit Card (PayStack)" || mode === "Flutter wave") {
      // setShowCardDetailsModal(true);
    } else if (mode === "Bank Deposit") {
      setShowBankDepositModal(true);
    } else {
      setShowUssdCodeModal(true);
    }
  };
  return (
    <Modal
      // appElement={
      //   (document.getElementById("__next") as HTMLElement) || undefined
      // }
      isOpen={isOpen}
      className="modal rounded-[10px] bg-white px-7 pb-7 pt-8"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Premium Payment Modal"
      ariaHideApp={false}
    >
      <CardDetailsModal
        isOpen={showCardDetailsModal}
        setIsOpen={setShowCardDetailsModal}
      />
      <BankDepositModal
        isOpen={showBankDepositModal}
        setIsOpen={setShowBankDepositModal}
      />
      <UssdCodeModal
        isOpen={showUssdCodeModal}
        setIsOpen={setShowUssdCodeModal}
      />
      <div className="flex flex-col gap-5">
        {paymentModes.map((mode) => (
          <PaymentCard
            key={mode}
            mode={mode}
            handleClick={() => handlePaymentModeClick(mode)}
          />
        ))}
      </div>
    </Modal>
  );
};

export default PaymentModesModal;
