import Image from "next/image";
import React from "react";

const BankCodeCard = ({ imgSrc, code }: { imgSrc: string; code: string }) => {
  return (
    <div
      className="flex items-center gap-8 bg-white py-2 pl-3 w-full"
      style={{
        boxShadow: "0px 12px 12px -12px rgba(0, 0, 0, 0.20)",
      }}
    >
      <Image src={imgSrc} alt="first bank logo" width={50} height={50} />
      <div className="space-y-1">
        <p className={`sansation text-sm text-black`}>{code}</p>
        <div className="flex cursor-pointer items-center gap-1">
          <Image src={"/guardian/copy.svg"} alt="copy" width={16} height={16} />
          <p className="sansation text-[13px] font-bold">Copy</p>
        </div>
      </div>
    </div>
  );
}

export default BankCodeCard;
