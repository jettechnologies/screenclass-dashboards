"use client";

import React, { useState } from "react";
import { Button, Card } from "@mui/joy";
import Modal from "react-modal";

interface PaymentModeProps {
  isOpen: boolean;
  handleMultiplePayments: (methods: "airtime" | "card" | "momo") => void;
  setIsOpen: (isOpen: boolean) => void;
  isLoading: boolean;
}

export default function PaymentModeModal({
  isOpen,
  handleMultiplePayments,
  setIsOpen,
  isLoading,
}: PaymentModeProps) {
  const [selectedPayment, setSelectedPayment] = useState<
    "airtime" | "card" | "momo" | null
  >(null);

  const handlePaymentSelection = (
    paymentMethod: "airtime" | "card" | "momo",
  ) => {
    setSelectedPayment(paymentMethod);
  };

  const handleBack = () => {
    setIsOpen(false);
    setSelectedPayment(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      className="modal max-w-[450px] rounded-3xl bg-SC-Nav-Blue px-6 py-8 sm:max-w-[600px] lg:max-w-[800px] lg:px-8"
      overlayClassName="backdrop fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Payment Mode Modal"
      ariaHideApp={false}
    >
      <div className="mb-8 flex items-center justify-between">
        <h1 className="flex-grow text-center text-3xl font-bold text-white">
          Payment Mode
        </h1>
        <Button
          color="neutral"
          variant="solid"
          className="rounded-full"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
          }}
          onClick={handleBack}
        >
          Back
        </Button>
      </div>

      <Card
        variant="outlined"
        onClick={() => handlePaymentSelection("airtime")}
        className={`mb-4 flex h-[67px] cursor-pointer justify-center py-0 shadow-md ${
          selectedPayment === "airtime"
            ? "h-[70px] border-[3px] border-blue-600 shadow-lg"
            : ""
        }`}
        sx={{
          backgroundColor: "rgb(253, 224, 71)",
          borderRadius: "12px",
          "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
        }}
      >
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-black">
            <span className="text-sm font-bold">MTN</span>
          </div>
          <span className="ml-4 text-lg font-bold">
            PAY WITH AIRTIME (MTN USERS ONLY)
          </span>
        </div>
      </Card>

      <Card
        variant="outlined"
        onClick={() => handlePaymentSelection("card")}
        className={`mb-4 flex h-[67px] cursor-pointer justify-center py-0 shadow-md ${
          selectedPayment === "card"
            ? "h-[70px] border-[3px] border-blue-600 shadow-lg"
            : ""
        }`}
        sx={{
          backgroundColor: "#E8E8E8",
          borderRadius: "12px",
          "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
        }}
      >
        <div className="flex items-center">
          <div className="flex h-8 w-12 items-center justify-center rounded-md bg-gray-700">
            <div className="h-4 w-6 rounded-sm bg-yellow-500"></div>
          </div>
          <span className="ml-4 text-lg font-bold">
            PAY WITH CREDIT/DEBIT CARD
          </span>
        </div>
      </Card>

      <Card
        variant="outlined"
        onClick={() => handlePaymentSelection("momo")}
        className={`mb-8 flex h-[67px] cursor-pointer justify-center py-0 shadow-md ${
          selectedPayment === "momo"
            ? "h-[70px] border-[3px] border-blue-600 shadow-lg"
            : ""
        }`}
        sx={{
          backgroundColor: "rgb(253, 224, 71)",
          borderRadius: "12px",
          "&:hover": { boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
        }}
      >
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-900">
            <span className="text-xs font-bold text-yellow-400">MoMo</span>
          </div>
          <span className="ml-4 text-lg font-bold">
            PAY WITH MTN MOMO (MTN USERS ONLY)
          </span>
        </div>
      </Card>

      <Button
        fullWidth
        variant="solid"
        color="primary"
        loading={isLoading}
        disabled={!selectedPayment}
        className="rounded-full py-3 shadow-md"
        onClick={() => {
          handleMultiplePayments(selectedPayment!);
        }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          },
        }}
      >
        Proceed
      </Button>
    </Modal>
  );
}
