import { mulish } from "@/components/shared/fonts";
import React from "react";

function backgroundColor(passMark: number) {
  // Ensure the passMark is between 0 and 100
  passMark = Math.max(0, Math.min(100, passMark));

  const remaining = 100 - passMark;

  const greyEnd = (remaining / 100) * 360; // End of grey section
  const pinkEnd = greyEnd + (remaining / 100) * 360; // End of pink section
  const tealEnd = greyEnd + (remaining / 100) * 360 + (passMark / 100) * 360; // End of teal section

  const gradient = `conic-gradient(
        #D9D9D9 0deg ${greyEnd}deg, 
        #EC8694 ${greyEnd}deg ${pinkEnd}deg, 
        #268B8D ${pinkEnd}deg ${tealEnd}deg
    )`;

  return gradient;
}

const QuizPerformanceCard = () => {
  return (
    <div
      className="flex h-[280px] w-full flex-col items-center justify-center rounded-[13px] bg-white md:h-[342px] md:w-[324px]"
      style={{
        boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <p className={`${mulish.className} text-lg md:text-xl text-[#6c6c6c]`}>
        Quiz Performances
      </p>
      <div
        className="mt-8 md:mt-16 flex h-[120px] md:h-[126px] w-[120px] md:w-[126px] items-center justify-center rounded-full"
        style={{
          background: backgroundColor(90),
        }}
      >
        <div className="h-[100px] w-[100px] rounded-full bg-white"></div>
      </div>
      <div className="mt-10 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#1FDCDC]"></div>
          <p
            className={`${mulish.className} text-lg md:text-xl font-medium text-[#1B1B1B]/80`}
          >
            Pass
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#AA10B7]"></div>
          <p
            className={`${mulish.className} text-lg md:text-xl font-medium text-[#1B1B1B]/80`}
          >
            Failed
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPerformanceCard;
