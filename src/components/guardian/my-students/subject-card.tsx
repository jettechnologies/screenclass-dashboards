import Image from "next/image";
import React from "react";
import { inter } from "../../shared/fonts";

const SubjectCard = ({
  bgColor,
  percentage,
  title,
  subject,
}: {
  bgColor: string;
  percentage: number;
  title: string;
  subject: string;
}) => {
  return (
    <div className={`flex h-20 gap-3 rounded-[10px] ${bgColor} pb-1 pl-5 pt-5`}>
      <div className="segoe flex h-10 w-[55px] items-center justify-center rounded-md bg-[rgba(217,217,217,0.22)] text-sm font-bold text-white">
        {percentage}%
      </div>
      <div className="pt-1">
        <p className={`${inter.className} text-[10px] text-[#D9D9D9]`}>
          {title}
        </p>
        <div className="flex gap-2 2xl:gap-5">
          <h5
            className={`${inter.className} mt-1 text-xs font-bold text-white`}
          >
            {subject}
          </h5>
          <Image
            src={"/guardian/white-more.svg"}
            alt="more icon"
            width={25}
            height={9}
            className="mt-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
