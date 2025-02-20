"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import { nunito } from "@/components/shared/fonts";
import SuccessModal from "./SuccessModal";
import useNoScroll from "@/components/hooks/useNoScroll";

const CardDetailsModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useNoScroll(isOpen);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryNumber: "",
    ccv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (e.target.id === "cardNumber") {
      if (value.length > 16) {
        value = value.slice(0, 16);
      }
      value = value.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    } else if (e.target.id === "expiryNumber") {
      if (value.length > 4) {
        value = value.slice(0, 4);
      }
      value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2").trim();
    } else {
      if (value.length > 3) {
        value = value.slice(0, 3);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [e.target.id]: value,
    }));
  };

  return (
    <Modal
      // appElement={
      //   (document.getElementById("__next") as HTMLElement) || undefined
      // }
      isOpen={isOpen}
      className="modal w-[360px] rounded-[10px] bg-white px-7 pb-2 pt-5 md:w-[390px]"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Card Details Modal"
      ariaHideApp={false}
    >
      <SuccessModal
        isOpen={showSuccessModal}
        setIsOpen={setShowSuccessModal}
        successText="Your transaction to upgrade to monthly plan was successful!"
      />
      <form onSubmit={(e) => (e.preventDefault(), setShowSuccessModal(true))}>
        <label
          htmlFor="cardNumber"
          className={`${nunito.className} text-[13px] text-black`}
        >
          Enter Card Number
        </label>
        <input
          id="cardNumber"
          type="text"
          placeholder="0000  1111 2222 3333"
          className={`${nunito.className} h-[50px] w-[80%] rounded-[10px] border border-[#ccc] bg-transparent pl-5 text-[13px] outline-none placeholder:text-[#1b1b1b]/60`}
          style={{
            boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
          }}
          value={formData.cardNumber}
          onChange={handleInputChange}
        />
        <div className="mt-5 grid w-full grid-cols-3 gap-[18px]">
          <div className="w-full">
            <label
              htmlFor="expiryNumber"
              className={`${nunito.className} text-[13px] text-black`}
            >
              Expiry Number
            </label>
            <br />
            <input
              id="expiryNumber"
              type="text"
              placeholder="12/25"
              className={`${nunito.className} h-[44px] w-full rounded-[10px] border border-[#ccc] bg-transparent pl-5 text-[13px] outline-none placeholder:text-[#1b1b1b]/60`}
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
              }}
              value={formData.expiryNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="ccv"
              className={`${nunito.className} text-[13px] text-black`}
            >
              CCV
            </label>
            <br />
            <input
              id="ccv"
              type="text"
              placeholder="111"
              className={`${nunito.className} h-[44px] w-full rounded-[10px] border border-[#ccc] bg-transparent pl-5 text-[13px] outline-none placeholder:text-[#1b1b1b]/60`}
              style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
              }}
              value={formData.ccv}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <button className="sansation mt-8 rounded bg-SC-Brand-Blue px-11 py-3 text-sm text-white">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CardDetailsModal;
