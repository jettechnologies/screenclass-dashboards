"use client";

import React, { useState } from "react";
import { Button, Card } from "@mui/joy";

export function PaymentModeCard() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentSelection = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="w-full max-w-[450px] rounded-3xl bg-SC-Nav-Blue px-6 py-8 sm:max-w-[600px] lg:max-w-[800px] lg:px-8">
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
        >
          Back
        </Button>
      </div>

      {/* MTN Airtime Payment Option */}
      <Card
        variant="outlined"
        onClick={() => handlePaymentSelection("airtime")}
        className={`mb-4 flex h-[67px] cursor-pointer justify-center py-0 shadow-md ${
          selectedPayment === "airtime" ? "border-2 border-blue-500" : ""
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

      {/* Credit/Debit Card Option */}
      <Card
        variant="outlined"
        onClick={() => handlePaymentSelection("card")}
        className={`mb-4 flex h-[67px] cursor-pointer justify-center shadow-md py-0${
          selectedPayment === "card" ? "border-2 border-blue-500" : ""
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

      {/* MTN MoMo Option */}
      <Card
        variant="outlined"
        onClick={() => handlePaymentSelection("momo")}
        className={`mb-8 flex h-[67px] cursor-pointer justify-center py-0 shadow-md ${
          selectedPayment === "momo" ? "border-2 border-blue-500" : ""
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

      {/* Proceed Button */}
      <Button
        fullWidth
        variant="solid"
        color="primary"
        disabled={!selectedPayment}
        className="rounded-full py-3 shadow-md"
        // sx={{
        //   backgroundColor: "#4DB6AC",
        //   "&:hover": {
        //     backgroundColor: "#26A69A",
        //   },
        //   fontSize: "18px",
        // }}
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
    </div>
  );
}
