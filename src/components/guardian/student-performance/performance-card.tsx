"use client";
import PerformanceOverviewModal from "@/components/modal/guardian/PerformanceOverviewModal";
import React, { useState } from "react";

const PerformanceCard = ({ status }: { status: "passed" | "failed" }) => {
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  return (
    <>
      <PerformanceOverviewModal
        isOpen={showOverviewModal}
        setIsOpen={setShowOverviewModal}
      />
      <div
        onClick={() => setShowOverviewModal(true)}
        className="flex cursor-pointer items-center justify-between bg-white py-3 pl-4 pr-[18px]"
        style={{
          boxShadow: "0px 12px 12px -12px rgba(0, 0, 0, 0.20)",
        }}
      >
        <div>
          <h3 className={`sansation text-sm font-bold text-SC-Brand-Blue`}>
            Fundamentals of Basic Science
          </h3>
          <p className={`sansation text-[13px] text-black`}>
            Introduction to Science
          </p>
          <p className="sansation mt-3 text-xs text-[rgba(27,27,27,0.70)]">
            06-06-2023 10:00:34am
          </p>
          <p className="sansation text-xs text-[rgba(27,27,27,0.70)]">
            Total Questions: <span>10</span> Passed: <span>9</span> Failed:{" "}
            <span>1</span>
          </p>
        </div>
        <div>
          <p className="sansation text-center text-[13px] text-black">90%</p>
          <div
            className={`sansation mt-4 h-[22px] ${status === "passed" ? "bg-[#CBFAC4] text-[#098315]" : "bg-[#FFD8D8] text-[#E41515]"} flex items-center px-4 text-xs capitalize`}
          >
            {status}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceCard;
