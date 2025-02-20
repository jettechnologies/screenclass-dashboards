import { nunito } from "@/components/shared/fonts";
import Image from "next/image";
import React from "react";

const PaymentCard = ({
  mode,
  handleClick,
}: {
  mode: string;
  handleClick: () => void;
}) => {
  return (
    <div
      onClick={() => handleClick()}
      className="flex h-[50px] w-[300px] md:w-[332px] cursor-pointer items-center justify-between rounded-[10px] border border-[#ccc] pl-2 pr-5"
      style={{
        boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex items-center gap-5">
        <Image src={"/guardian/card.svg"} alt="card" width={24} height={21} />
        <p className={`${nunito.className} text-[13px] text-[#1b1b1b]/60`}>
          {mode}
        </p>
      </div>
      <Image
        src={"/guardian/arrow-right.svg"}
        alt="arrow right"
        width={7}
        height={12}
      />
    </div>
  );
};

export default PaymentCard;
