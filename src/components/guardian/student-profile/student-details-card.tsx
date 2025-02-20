import { mulish } from "@/components/shared/fonts";
import Image from "next/image";
import React from "react";

const StudentDetailsCard = () => {
  return (
    <div
      className="flex h-[280px] w-full flex-col items-center justify-center rounded-[13px] bg-white md:h-[342px] md:w-[324px]"
      style={{
        boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex w-[160px] items-center justify-center rounded-full border border-[#DFE0EB] py-2 md:w-[180px]">
        <Image
          src={"/guardian/ellipse3.svg"}
          alt="student profile picture"
          width={165}
          height={161}
          className="h-auto w-36 md:w-[165px]"
        />
      </div>
      <p
        className={`${mulish.className} mt-1 text-lg font-semibold text-[#252733] md:text-xl`}
      >
        IfeOluwa Smith
      </p>
      <p className={`${mulish.className} text-base text-[#6C6C6C] md:text-lg`}>
        Student
      </p>
      <p
        className={`${mulish.className} mt-4 text-base text-SC-Orange md:mt-8 md:text-lg`}
      >
        Class
      </p>
    </div>
  );
};

export default StudentDetailsCard;
